import { App } from '@src/database/schemas/app';

export class AppRepository {
  public insert(name: string, url: string) {
    return new App({ name, url }).save();
  }

  public findByName(name: string) {
    return App.findOne({ name });
  }

  public delete(name: string) {
    return App.deleteOne({ name });
  }

  public find() {
    return App.find();
  }
}
