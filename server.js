var express = require('express');
var app = express();
const fetch = require('node-fetch');

/*app.use(express.static("build"));*/



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

    app.use(express.static(__dirname + '/client/build'));


app.get('/',function(req,res){
    res.sendFile(__dirname + '/client/index.html');
})

//hacer el get con el search traerlo del archivo que funcionaba 



app.get('/search/:query',(req,res)=>{
    

  
      const userQuery = req.params.query
      const apiResponse = {
        "autor":{
          "name":"Diego",
          "lastname": "Herrera"
        },
        "categories":[]
       // "BreadCrumb":[]
        
        
      }
     
      console.log("buscas: ",userQuery)
      //backp  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:${userQuery}`)
    
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:${userQuery}`).then(response => {
        return response.json();
        }).then(json=>{
        
        //Push Items to response object
        apiResponse.items=[...json.results]
        
    
        const data = json.available_filters
    
          const getCategoryList = (data) => {
    
            const categoryList = data.filter(function(item){
                          
                if(item.id == "category" ){
    
                  apiResponse.categories.push(
                    ...item.values
                  )

                  const catList = item.values
              
                }
              }
          )
    
    
        }
    
          const catList = getCategoryList(data)

          console.log(typeof(apiResponse))
          res.json(apiResponse)
    
        }
      )
    
      .catch(err => {console.log(err);});
        
      }
    
      

    )
    
    


app.listen('3333',function(req,res){
    console.log("App Running on port 3333"+__dirname + '/client/build')
})