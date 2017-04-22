import * as mongoose from 'mongoose';

const connectionString: string = 'mongodb://jonathan:reasor@ds111851.mlab.com:11851/barstucks'

export default class Database {
  // Connect to Database

  // Returns: mongoose.Connection object
  public static connect(): mongoose.Connection {
    return mongoose.createConnection(connectionString)

  }
}
