import { PrismaClient } from '@prisma/client';
import { seedLeaderboards } from './leaderboards.seed';
import { seedUsers } from './users.seed';

const prisma = new PrismaClient();

async function main() {
  await seedUsers();
  await seedLeaderboards();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('🌱 Finished seeding!');
    await prisma.$disconnect();
    process.exit(0);
  });
