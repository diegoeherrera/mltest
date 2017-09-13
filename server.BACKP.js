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

  res.send("tai buscando: "+userQuery)
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
        //const items = {...json.results}
        //console.log("items: ",items)
        //apiResponse.items.push([...items])
        
        
        //revisar!
    
        /*
        const getBreadCrumb = (json) =>{
        
        const breadPath =   json.filters[0].values[0].path_from_root
    
        breadPath.map((item,index)=>{
          
        //agregar el objeto de respuesta y armar el breadcrumb     
        console.log("vuelta: ",index," ","valor",item.name)
          
        })
          
    
         console.log(json.filters[0].values[0].path_from_root) 
        }
    
        getBreadCrumb(json)
        */
    
        const data = json.available_filters
    
          const getCategoryList = (data) => {
    
            const categoryList = data.filter(function(item){
                          
                if(item.id == "category" ){
    
                  apiResponse.categories.push(
                    ...item.values
                  )
                
                  //console.log("encontrado",item.values)
    
                  const catList = item.values
    
                  const catMax = catList.reduce((a,b)=>{
                    if(a.results > b.results){
                      return a
                    } else {
                      return b
                    }
                  })
    
                  /*apiResponse.push({
                    "maxCat":catMax
                  })*/
                  //console.log("max cat: ", catMax)
    
                    catList.forEach(function(element) {
    
                      //console.log(element.results)
                      
                    }, this);
                 
    
                  
                  
                  res.send(apiResponse)
                  return item.values
                  
                
                }
    
              
             /*return categories.map(item=>{
                console.log("asa: ",item.results)
              })*/
              
            }
          )
    
    
          
          
    
    
          
          //console.log("maxima: ",categories)
    
          // res.send(categories)
    
    
          }
    
          const catList = getCategoryList(data)
    
          const getMaxCat = (catList) =>{
            
           // console.log(catList)
    
          }
    
          const maxCat = getMaxCat(catList)
    
          //console.log(maxCat)
    
      
        
        
        }
        )
    
        .catch(err => {console.log(err);});
        
        }
    
      

    )
    
    


app.listen('3333',function(req,res){
    console.log("App Running on port 3333"+__dirname + '/client/build')
})