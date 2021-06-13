// CRUD - Create,read,update and delete operation.
// In mongo DB to perform the CURD operation  : 
//  Create  - insertOne, insertMany
// Read - findOne, find
// Update - updateOne, updateMany
// Delete - deleteOne, deleteMany
const {
    ObjectID,
    MongoClient
} = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager"


MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to a database')
    }
    const db = client.db(databaseName);
    // if document found then that is returned and if not then null is returned

    db.collection('tasks').deleteMany({
        task: 'task 3'
    }).then((result) => console.log(result)).catch((error) => console.log(error))


    // db.collection('tasks').updateOne({
    //     _id: new ObjectID("60c31332869b145f98659721")
    // }, {
    //     $set: {
    //         task: "task 3"
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('tasks').find({
    //     completed: false
    // }).toArray((error, user) => {
    //     if (error) {
    //         return console.log('task not found');
    //     }
    //     console.log(user)
    // })
})