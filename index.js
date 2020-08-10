var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/getTimes', function(req, res){

url = 'http://www.time.com/';

request(url, function(error, response, html){
    if(!error){
        var $ = cheerio.load(html);

  
    
}
const Result =[]; //resulting array

 // const $ = cheerio.load(html);
      
      for(let k=0;k<5;k++) {
      var li1 = $('h2').eq(k)
      const arr = li1.html()
      const index = li1.html().indexOf('"')
      let link ='';
      for(let i=index+1;arr[i]!='"';i++)
      {
        link+=arr[i];
      }      
      let Link1="https:/"+link;


      let title = '';
      const arr1 = li1.html();
       const index1 = li1.html().indexOf('>')
      for(let i=index1+1;arr1[i]!='<';i++)
      {
        title+=arr[i];
      }      
       const obj ={
        Title:title,
        Link:Link1
      }
        Result.push(obj)


       }
       var myJSON = JSON. stringify(Result);
      // console.log(myJSON)





  
    



// To write to the system we will use the built in 'fs' library.
// In this example we will pass 3 parameters to the writeFile function
// Parameter 1 :  output.json - this is what the created filename will be called
// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
// Parameter 3 :  callback function - a callback function to let us know the status of our function

fs.writeFile('output.json',myJSON , function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

})

// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
res.send(myJSON)

    }) ;
})


const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))