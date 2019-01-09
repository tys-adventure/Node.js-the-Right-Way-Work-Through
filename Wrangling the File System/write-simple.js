const fs = require('fs');
fs.writeFile('target.txt', 'a witty message here', function(err){
  if(err) {
    throw err;
  }
  console.log("File Saved!");
});
