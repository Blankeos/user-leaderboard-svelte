import { db } from '../db/kysely';

export const leaderboardDAO = {
  findTopWinners: async (dateRange?: { start: Date; end: Date }) => {
    const query = db
      .selectFrom('Point')
      .leftJoin('User', 'Point.userId', 'User.id')
      .select([
        'Point.id',
        'Point.userId',
        (aggBuilder) => aggBuilder.fn.sum<number>('amount').as('total_points'),
        'Point.timestamp',
        'User.id',
        'User.name',
        'User.profileImageUrl',
      ])
      .groupBy('Point.userId')
      .orderBy('total_points', 'desc');

    if (!dateRange) {
      return await query.execute();
    }

    return await query
      .where('Point.timestamp', '>=', dateRange.start.toISOString())
      .where('Point.timestamp', '<=', dateRange.end.toISOString())
      .execute();
  },
};
