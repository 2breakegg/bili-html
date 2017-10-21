var http = require('http'),
fs = require('fs'),
url=require('url');

fs.readFile('./test/testpic.jpg','binary',function(err, file) {
	if (err) {
	  console.log(err);
	  return;
	}else{
	  http.createServer(function(req, res) {
      
	    res.writeHead(200, {'Content-Type': 'image/jpeg'});
	    res.write(file,'binary');
	    res.end();
	    return;
	  }).listen(3000);
	}
});