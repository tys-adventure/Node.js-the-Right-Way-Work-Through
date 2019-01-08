fs.watch(filename, function() {
  let
    ls = spawn('ls', ['-lh', filename]),
    output =  '';
  ls.stdout.on('data', function(chunk) {
    output += chunk.toString();
  })
  ls.on('close', function(){
    let parts = output.split(/ls+/);
    console.dir([parts[0], parts[4], parts[8]]);
  })
})
