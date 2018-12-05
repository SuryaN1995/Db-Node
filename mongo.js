const {MongoClient,ObjectID} = require('mongodb')
var user = {name:'surya',age:25}
var {name} = user

console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true },(err,client)=>{
    if(err){
       return  console.log("Can't connect to DB server")
    }
    console.log("Connected to MongoDB")
    const db = client.db('TodoApp')

    db.collection('Todos').find().count().then((dbResult)=>{
        console.log('count',dbResult)
    }).catch((err)=>{
        console.log('Unable to fetch data',err)
    })

    client.close()
})