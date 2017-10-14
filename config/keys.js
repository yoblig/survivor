if(process.env.NODE_ENV === 'production'){
  // link to prod keys
  module.exports = require('./prod');
} else {
  // link to dev keys
  module.exports = require('./dev');
}
