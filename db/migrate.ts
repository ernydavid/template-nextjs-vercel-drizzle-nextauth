import { sql } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'
import { migrate } from 'drizzle-orm/vercel-postgres/migrator'
import 'dotenv/config'

const db = drizzle(sql)

async function main () {
  await migrate(db, { migrationsFolder: 'drizzle' })
  console.log('Migration Complete')
  process.exit(0)
}

main().catch((err) => {
  console.log(err)
})
