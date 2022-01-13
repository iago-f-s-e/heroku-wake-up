db = new Mongo().getDB('heroku_wake_up');


db.createUser({
  'user': "root",
  'pwd': "root",
  'roles': [
    {
      'role': 'readWrite',
      'db': 'heroku_wake_up'
    }
  ]
});
      
db.createCollection('apps', { capped: false });
