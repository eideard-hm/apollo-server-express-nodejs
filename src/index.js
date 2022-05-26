import app from './app'
import { connection } from './database/connection'
import { PORT } from './config/config'

const main = async () => {
  //start connection with database
  await connection()

  // start express server
  app.listen(PORT)
  console.log(`Server is running in port ${PORT}`)
}
main()
