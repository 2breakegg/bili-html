var requestApi = require('request');
var http = require('http');
var url=require('url');

var api='http://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695';
var pic='http://i0.hdslb.com/bfs/archive/f157fee6c6eda63b15960cd2668a8ffeb7116052.jpg';

var zhuanfa=function(getUrl,httpResponse){
  console.log('getUrl:',getUrl);
  http.get(getUrl,function(res){
    //console.log(res.headers)
    if(res.headers['content-type'].includes('image')){
      console.log(getUrl,'is pic');

      var imgData="";
      res.setEncoding("binary");
      res.on("data",function(chunk){
          imgData += chunk;
      });
      res.on("end",function(){
        httpResponse.writeHead(200, {'Content-Type': res.headers['content-type']});
        httpResponse.write(imgData,'binary');
        httpResponse.end();
        console.log('end');          
      })
    }else{
      console.log(getUrl,'not pic');
      var content="";
      res.on("data",function(chunk){
        content += chunk;
      });
      res.on("end",function(){
        httpResponse.writeHead(200, {'Content-Type': res.headers['content-type']});
        // console.log(content);
        httpResponse.write(content);
        httpResponse.end();
        console.log('end');
      })
    }
  })
}

http.createServer(function(request, response){
  console.log('createServer');
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
    console.log('if getUrl');  
    getUrl=getUrl.includes('http://')?getUrl:'http://'+getUrl;
    zhuanfa(getUrl,httpResponse);
  }else{
    httpResponse.end('404');
  }

  
  // http.get(pic,function(res){
  //   var imgData="";
  //   res.setEncoding("binary");
  //   res.on("data",function(chunk){
  //       imgData += chunk;
  //   });
  //   res.on("end",function(){
  //     httpResponse.writeHead(200, {'Content-Type': 'image/jpeg'});
  //     httpResponse.write(imgData,'binary');
  //     httpResponse.end();
  //   })
  // })
}).listen(3000)

//==============================================================


// http.createServer(function(request, response){
//   var message;
//   var httpResponse=response;
//   var api='http://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695';
//   var pic='http://i0.hdslb.com/bfs/archive/f157fee6c6eda63b15960cd2668a8ffeb7116052.jpg';

//   // if(getUrl){
//   //   http.get('http://'+getUrl,function(res){
//   //     //console.log(res.headers)
//   //     if(res.headers['content-type'].includes('image')){
//   //       console.log(getUrl,'is pic');

//   //       var imgData="";
//   //       res.setEncoding("binary");
//   //       res.on("data",function(chunk){
//   //           imgData += chunk;
//   //       });
//   //       res.on("end",function(){
//   //         httpResponse.writeHead(200, {'Content-Type': res.headers['content-type']});
//   //         httpResponse.write(imgData,'binary');
//   //         httpResponse.end();
//   //       })
//   //     }else{
//   //       console.log(getUrl,'not pic');
//   //       var content="";
//   //       res.on("data",function(chunk){
//   //         content += chunk;
//   //       });
//   //       res.on("end",function(){
//   //         httpResponse.writeHead(200, {'Content-Type': res.headers['content-type']});
//   //         console.log(content);
//   //         httpResponse.end(content);
//   //       })
//   //     }
//   //   })
//   // }

//   if(getUrl){
//     requestApi(pic, function (error, res, body) {
//       if (!error && res.statusCode == 200) {
//         if(res.headers['content-type'].includes('image')){
//           console.log(getUrl,'is pic');
//           httpResponse.writeHead(200, {'Content-Type': res.headers['content-type']});
//           httpResponse.write(body,'binary');
//           httpResponse.end();
//         }else{
//           console.log(getUrl,'not pic');
//           httpResponse.writeHead(200, {'Content-Type': res.headers['content-type']});
//           httpResponse.end(body);
//         }
//         // message=body;
//         // httpResponse.end(message);
//       }
//     })
//   }

// }).listen(3000)