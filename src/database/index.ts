import mongoose, { Mongoose } from 'mongoose';

import * as Settings from '../server/settings';

export const connect = async (): Promise<Mongoose> =>
  mongoose.connect(Settings.CONNECTION_STRING, {
    autoIndex: true,
    connectTimeoutMS: 5000
  });

export const close = (): Promise<void> => mongoose.connection.close();
