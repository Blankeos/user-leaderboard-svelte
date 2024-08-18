<script lang="ts">
  import { trpcClient } from '@/lib/trpc-client';
  import { createQuery } from '@tanstack/svelte-query';
  import dayjs from 'dayjs';
  import { derived, writable } from 'svelte/store';

  const leaderboardFilter = writable<'all-time' | 'last-month' | 'current'>('all-time');

  const leaderboardQuery = createQuery(
    derived(leaderboardFilter, ($_leaderboardFilter) => ({
      queryKey: ['leaderboard', $_leaderboardFilter],
      queryFn: async () => {
        console.log('leaderboardFilter', $_leaderboardFilter);

        switch ($_leaderboardFilter) {
          case 'last-month':
            return await trpcClient.getLeaderboard.query({
              dateRange: {
                start: dayjs().subtract(1, 'month').startOf('month').toISOString(),
                end: dayjs().subtract(1, 'month').endOf('month').toISOString(),
              },
            });
          case 'current':
            return await trpcClient.getLeaderboard.query({
              dateRange: {
                start: dayjs().startOf('month').toISOString(),
                end: dayjs().endOf('month').toISOString(),
              },
            });

          case 'all-time':
          default:
            return await trpcClient.getLeaderboard.query({});
        }
      },
    }))
  );
</script>

<div class="flex h-full flex-1 flex-col">
  <div class="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-y-5 px-8">
    <h1 class="text-3xl font-medium">Leaderboard</h1>

    <div class="flex gap-x-4"></div>

    <!-- Filtering options -->
    <div class="flex gap-x-2 text-sm">
      <button
        class="hover:text-blue-500"
        on:click={() => {
          $leaderboardFilter = 'all-time';
        }}>All Time</button
      >
      <span>•</span>
      <button
        class="hover:text-blue-500"
        on:click={() => {
          $leaderboardFilter = 'last-month';
        }}>Last Month ({dayjs().subtract(1, 'month').format('MMMM')})</button
      >
      <span>•</span>
      <button
        class="hover:text-blue-500"
        on:click={() => {
          $leaderboardFilter = 'current';
        }}>Current ({dayjs().format('MMMM')})</button
      >
    </div>

    {#snippet leaderboardItemCard(name: string, profileImageUrl: string, points: number, index: number)}
      <div class="flex min-w-64 gap-x-2">
        <div
          class="aspect-square h-14 flex-shrink-0 rounded-md"
          style:background-image={`url(${profileImageUrl})`}
          style:background-size="cover"
          style:background-position="center"
        />

        <div class="flex flex-col">
          <div class="text-lg font-bold">{name}</div>

          <div class="flex items-center gap-x-1">
            <div>Rank #{index + 1}</div>
            <div class="text-sm text-gray-500">{points} points</div>
          </div>
        </div>
      </div>
    {/snippet}

    {#snippet leaderboardItemCardLoading()}
      <div class="flex min-w-64 gap-x-2">
        <div class="aspect-square h-14 flex-shrink-0 rounded-md bg-neutral-100"></div>

        <div class="flex flex-col gap-y-1.5">
          <div class="h-6 w-28 rounded-md bg-neutral-200"></div>

          <div class="flex items-center gap-x-1">
            <div class="h-4 w-10 rounded bg-neutral-100"></div>
            <div class="h-4 w-12 rounded bg-gray-100"></div>
          </div>
        </div>
      </div>
    {/snippet}

    <!-- The list of leaderboard items -->
    <div class="flex flex-col gap-y-2">
      {#if $leaderboardQuery.isLoading}
        {@render leaderboardItemCardLoading()}
        {@render leaderboardItemCardLoading()}
        {@render leaderboardItemCardLoading()}
        {@render leaderboardItemCardLoading()}
      {:else}
        {#each $leaderboardQuery?.data ?? [] as leaderboardItem, index}
          {@render leaderboardItemCard(
            leaderboardItem.name!,
            leaderboardItem.profileImageUrl!,
            leaderboardItem.total_points,
            index
          )}
        {/each}
      {/if}
    </div>
  </div>
</div>
