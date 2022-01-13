import mongoose, { Document, Model } from 'mongoose';

export interface App {
  _id?: string;
  name: string;
  url: string;
}

interface AppModel extends Omit<App, '_id'>, Document {}

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    url: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        delete ret._id, delete ret.__v;
      }
    }
  }
);

export const App: Model<AppModel> = mongoose.model('App', schema);
