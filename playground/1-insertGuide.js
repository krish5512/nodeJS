// CRUD - Create,read,update and delete operation.
const {
    ObjectID,
    MongoClient
} = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager"


// 
MongoClient.connect(connectionURL, {
            useNewUrlParser: true
        }, (error, client) => {
            if (error) {
                return console.log('Unable to connect to a database')
            }
            const db = client.db(databaseName);
            // db.collection('users').insertOne({
            //     _id : id,
            //     name : 'Krishna',
            //     age : 25
            // },(error , result) =>{
            //     if(error)
            //     {
            //         return console.log('Unable to insert collection User');
            //     }
            //     console.log(result.ops)
            // })


            // const dataArr = [
            //     {
            //         name : 'krihn',
            //         age : 26,
            //     },
            //     {
            //         name : 'Lee',
            //         age : 65
            //     }
            // ];
            // db.collection('users').insertMany(dataArr,(error,result) => {
            //     if(error)
            //     {
            //         return console.log('Unable to inset')
            //     }
            //     console.log(result.ops)
            // })
            // const dataArr = [
            //     {
            //         description : 'task 1',
            //         completed : false,
            //     },
            //     {
            //         description : 'task 2',
            //         completed : false
            //     },
            //     {
            //         description :'task 3',
            //         completed : true
            //     }
            // ];
            // db.collection('tasks').insertMany(dataArr,(error,result) => {
            //     if(error)
            //     {
            //         return console.log('Unable to inset')
            //     }
            //     console.log(result.ops)
            // })




            // Dummy Output

            // [
            // {
            //     _id: 60c30b269893e363e022b8b0,
            //     description: 'task 1',        
            //     completed: false
            //   },
            //   {
            //     _id: 60c30b269893e363e022b8b1,
            //     description: 'task 2',
            //     completed: false
            //   },
            //   {
            //     _id: 60c31332869b145f98659721,
            //     description: 'task 1',
            //     completed: false
            //   },
            //   {
            //     _id: 60c31332869b145f98659722,
            //     description: 'task 2',
            //     completed: false
            //   }
            // ]






            // })