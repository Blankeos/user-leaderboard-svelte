import { hash } from '@node-rs/argon2';
import { db } from '../../src/server/db/kysely';

export async function seedUsers() {
  const createPassword = async (password: string) =>
    hash(password, {
      // recommended minimum parameters
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

  const users = [
    {
      id: 'HGcgy4Icmt7GDloa',
      name: 'Omojuwon Adeoba',
      username: 'omojuwon',
      password: 'omojuwon1',
      profileImageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_5.png',
    },
    {
      id: 'vhxska1gjiPZlfaw',
      name: 'Queenly Izomurua',
      username: 'queenly',
      password: 'queenly1',
      profileImageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png',
    },
    {
      id: 'v2WoZ7n07iNkLGEd',
      name: 'Augustine Osemero',
      username: 'augustine',
      password: 'augustine1',
      profileImageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_6.png',
    },
    {
      id: 'e2Sr7SwyBnhyhVXS',
      name: 'Sefinat Hassan',
      username: 'sefinat',
      password: 'sefinat1',
      profileImageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_9.png',
    },
    {
      id: 'GKTc3s0nJiIBVDuv',
      name: 'Tribet Temiade',
      username: 'tribet',
      password: 'tribet1',
      profileImageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_11.png',
    },
    {
      id: 'Lqfv8jSMBYqXoyyc',
      name: 'Carlo Taleon',
      username: 'carlo',
      password: 'carlo1',
      profileImageUrl: 'https://avatars.githubusercontent.com/u/38070918?v=4',
    },
    {
      id: 'ziYy6r73HVJWOL10',
      name: 'Ronald Mcdonald',
      username: 'ronald',
      password: 'ronald1',
      profileImageUrl: 'https://i.pinimg.com/236x/96/48/0f/96480f159f2aeae810bceb5f214c5f40.jpg',
    },
    {
      id: 'P7QECT2s6n65Q465',
      name: 'Charles Okrobo',
      username: 'charles',
      password: 'charles1',
      profileImageUrl: 'https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_8.png',
    },
  ];

  console.log('Seeding users...');

  for (const user of users) {
    await db
      .insertInto('User')
      .values({
        id: user.id,
        username: user.name,
        passwordHash: await createPassword(user.password),
        name: user.name,
        profileImageUrl: user.profileImageUrl,
      })
      .onConflict((oc) => {
        console.log('User already exists, skipping...');
        return oc.doNothing();
      })
      .execute();
  }

  console.log('Successfully seeded users!');
}
