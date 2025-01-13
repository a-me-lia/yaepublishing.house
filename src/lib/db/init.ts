import { createUsersTable } from './schema'

export async function initDatabase() {
  try {
    await createUsersTable()
    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Failed to initialize database:', error)
  }
} 