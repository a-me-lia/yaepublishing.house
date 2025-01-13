import { initDatabase } from '../src/lib/db/init'

initDatabase()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  }) 