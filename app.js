const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('Survivor Travis');
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Listening on 3000');
})
