import { v7 as createId } from 'uuid';
import { db } from '../../src/server/db/kysely';

export async function seedLeaderboards() {
  const omojuwonPoints = [
    {
      id: 'pts-' + createId(),
      userId: 'HGcgy4Icmt7GDloa',
      amount: 300,
      timestamp: '2024-08-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'HGcgy4Icmt7GDloa',
      amount: 340,
      timestamp: '2024-08-18T21:24:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'HGcgy4Icmt7GDloa',
      amount: 200,
      timestamp: '2024-07-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'HGcgy4Icmt7GDloa',
      amount: 600,
      timestamp: '2024-05-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'HGcgy4Icmt7GDloa',
      amount: 250,
      timestamp: '2024-04-18T21:44:50+08:00',
    },
  ];

  const queenlyPoints = [
    {
      id: 'pts-' + createId(),
      userId: 'vhxska1gjiPZlfaw',
      amount: 300,
      timestamp: '2024-08-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'vhxska1gjiPZlfaw',
      amount: 475,
      timestamp: '2024-07-18T21:24:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'vhxska1gjiPZlfaw',
      amount: 200,
      timestamp: '2024-07-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'vhxska1gjiPZlfaw',
      amount: 500,
      timestamp: '2024-05-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'vhxska1gjiPZlfaw',
      amount: 254,
      timestamp: '2024-04-18T21:44:50+08:00',
    },
  ];

  const augustinePoints = [
    {
      id: 'pts-' + createId(),
      userId: 'v2WoZ7n07iNkLGEd',
      amount: 320,
      timestamp: '2024-08-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'v2WoZ7n07iNkLGEd',
      amount: 450,
      timestamp: '2024-05-18T21:24:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'v2WoZ7n07iNkLGEd',
      amount: 280,
      timestamp: '2024-05-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'v2WoZ7n07iNkLGEd',
      amount: 360,
      timestamp: '2024-04-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'v2WoZ7n07iNkLGEd',
      amount: 200,
      timestamp: '2024-04-18T21:44:50+08:00',
    },
  ];

  const sefinatPoints = [
    {
      id: 'pts-' + createId(),
      userId: 'e2Sr7SwyBnhyhVXS',
      amount: 300,
      timestamp: '2024-08-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'e2Sr7SwyBnhyhVXS',
      amount: 400,
      timestamp: '2024-08-18T21:24:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'e2Sr7SwyBnhyhVXS',
      amount: 250,
      timestamp: '2024-06-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'e2Sr7SwyBnhyhVXS',
      amount: 350,
      timestamp: '2024-04-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'e2Sr7SwyBnhyhVXS',
      amount: 300,
      timestamp: '2024-04-18T21:44:50+08:00',
    },
  ];

  const tribetPoints = [
    {
      id: 'pts-' + createId(),
      userId: 'GKTc3s0nJiIBVDuv',
      amount: 300,
      timestamp: '2024-08-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'GKTc3s0nJiIBVDuv',
      amount: 400,
      timestamp: '2024-07-18T21:24:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'GKTc3s0nJiIBVDuv',
      amount: 250,
      timestamp: '2024-06-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'GKTc3s0nJiIBVDuv',
      amount: 278,
      timestamp: '2024-05-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'GKTc3s0nJiIBVDuv',
      amount: 280,
      timestamp: '2024-04-18T21:44:50+08:00',
    },
  ];

  const carloPoints = [
    {
      id: 'pts-' + createId(),
      userId: 'Lqfv8jSMBYqXoyyc',
      amount: 910,
      timestamp: '2024-07-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'Lqfv8jSMBYqXoyyc',
      amount: 52,
      timestamp: '2024-07-18T21:24:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'Lqfv8jSMBYqXoyyc',
      amount: 25,
      timestamp: '2024-06-18T21:44:50+08:00',
    },
  ];

  const ronaldPoints = [
    {
      id: 'pts-' + createId(),
      userId: 'ziYy6r73HVJWOL10',
      amount: 10,
      timestamp: '2024-08-18T21:44:50+08:00',
    },
    {
      id: 'pts-' + createId(),
      userId: 'ziYy6r73HVJWOL10',
      amount: 11,
      timestamp: '2024-08-18T21:24:50+08:00',
    },
  ];

  const charlesPoints = [
    {
      id: 'pts-' + createId(),
      userId: 'P7QECT2s6n65Q465',
      amount: 20,
      timestamp: '2024-08-18T21:44:50+08:00',
    },
  ];

  console.log('Seeding Points...');
  await db
    .insertInto('Point')
    .values([
      ...omojuwonPoints,
      ...queenlyPoints,
      ...augustinePoints,
      ...sefinatPoints,
      ...tribetPoints,
      ...carloPoints,
      ...ronaldPoints,
      ...charlesPoints,
    ])
    .onConflict((oc) => {
      console.log('Point already exists, skipping...');

      return oc.doNothing();
    })
    .execute();

  console.log('Successfully seeded Points!');
}
