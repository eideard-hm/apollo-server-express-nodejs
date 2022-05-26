import { connect } from 'mongoose'
import { DB_NAME, DB_PASS, DB_USER, MONGO_URI } from '../config/config'

export const connection = async () => {
  try {
    const conn = await connect(MONGO_URI, {
      dbName: DB_NAME,
      user: DB_USER,
      pass: DB_PASS
    })
    console.log(`Connected to database: ${conn.connection.db.databaseName}`)
  } catch (error) {
    console.error(error)
  }
}
