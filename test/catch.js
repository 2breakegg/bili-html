var requestApi = require('request');
var http = require('http');
var url=require('url');

var logShow=false;
var errorShow=true;
var log=function(){
  if(logShow) console.log(...arguments);
}
var errorLog=function(){
  if(errorShow) console.log(...arguments);
}

var zhuanfa=function(getUrl,httpResponse){
  log('getUrl:',getUrl);
  http.get(getUrl,function(res){
    //console.log(res.headers)
    if(res.headers['content-type'].includes('image')){
      log(getUrl,'is pic');

      var imgData="";
      res.setEncoding("binary");
      res.on("data",function(chunk){
          imgData += chunk;
      });
      res.on("end",function(){
        httpResponse.writeHead(200, {'Content-Type': res.headers['content-type']});
        httpResponse.write(imgData,'binary');
        httpResponse.end();   
      })
    }else{
      log(getUrl,'not pic');
      var content="";
      res.on("data",function(chunk){
        content += chunk;
      });
      res.on("end",function(){
        httpResponse.writeHead(200, {'Content-Type': res.headers['content-type']});
        // console.log(content);
        httpResponse.write(content);
        httpResponse.end();
      })
    }
    log('end'); 
  }).on('error', function(e) {
    httpResponse.end('404');
    errorLog("error.message: "+e.message);
    errorLog("getUrl:",getUrl);
  })
}

http.createServer(function(request, response){
  log('createServer');
  var message;
  var httpResponse=response;
  getUrl=null;
  //getUrl=(new url.URL(request.headers.host+request.url)).searchParams.get('url');
  if(request.url.match(/^\/api\/bili\?url=([\s\S]*)$/)){
    getUrl=request.url.match(/^\/api\/bili\?url=([\s\S]*)$/)[1];
  }
  // console.log('pathname:' ,getUrl);
  // console.log(request.url);

  if(getUrl!=null && getUrl!='undefined'){
    log('if getUrl');  
    getUrl=getUrl.includes('http://')?getUrl:'http://'+getUrl;
    zhuanfa(getUrl,httpResponse);
  }else{
    httpResponse.end('404');
  }
}).listen(3000)