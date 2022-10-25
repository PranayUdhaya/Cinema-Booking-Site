const { MongoClient } = require('mongodb');

async function main() {
    
    const uri = "mongodb+srv://Admin:Admin@cluster0.1dx8tdy.mongodb.net/?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);

    try {
        await client.connect();

        await listDatabases(client);
        
    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }

}

main().catch(console.error);

async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases();

    console.log("Databases");
    databaseList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}

async function insertAccount(client, newAccount) {
    const result = await client.db("user input").collection("accounts").insertOne(newAccount);

    console.log(`New account created with the id: ${result.insertedId}`);
    
}

async function insertAccount(client, edittedAccount) {
    const result = await client.db("user input").collection("accounts").updateOne(edittedAccount);

    console.log(`Account information editted of account with the id: ${result.insertedId}`);
}