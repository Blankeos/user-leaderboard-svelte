# User Leaderboard

### QuickStart

1. Copy the environment variables

   ```sh
   cp .env.example .env
   ```

2. Replace the `<absolute_url>` in the local database env with:

   ```sh
   pwd # e.g. /Users/carlo/Projects/svelte-launch (copy this!)

   # Replace the .env with:
   DATABASE_URL="file:/Users/carlo/Projects/svelte-launch/local.db"
   ```

3. Generate

   ```sh
   bun db:generate # generates Kysely and Prisma client types.
   bun db:migrate # migrates your database.
   bun db:seed # seeds your database with the data (according to the examples by Charles Okrobo)
   ```

4. Install deps and run dev

   ```sh
   bun install
   bun dev
   ```

---

This was built with Carlo's 🧡 **Svelte Launch** starter.

> An sophisticated boiler-plate built for **simplicity**.
