import { leaderboardDAO } from '@/server/dao/leaderboard.dao';
import { publicProcedure, router } from '@/server/trpc';
import { z } from 'zod';

export const leaderboardRouter = router({
  getLeaderboard: publicProcedure
    .input(
      z
        .object({
          dateRange: z
            .object({
              start: z.string().datetime(),
              end: z.string().datetime(),
            })
            .optional(),
        })
        .optional()
    )
    .query(async ({ input }) => {
      if (!input?.dateRange) {
        return await leaderboardDAO.findTopWinners();
      }

      return await leaderboardDAO.findTopWinners({
        start: new Date(input.dateRange.start),
        end: new Date(input.dateRange.end),
      });
    }),
});
