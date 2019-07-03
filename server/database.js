let mongoose = require('mongoose');

const server = 'localhost:27017';
const database = 'example';

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
       .then(() => {
         console.log('Database connection successful')
         mongoose.set('useCreateIndex', true);
         mongoose.set('useFindAndModify', false);
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()