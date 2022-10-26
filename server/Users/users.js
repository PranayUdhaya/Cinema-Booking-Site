const { MongoClient } = require('mongodb');

async function main() {
    
    const uri = "mongodb+srv://Admin:Admin@cluster0.1dx8tdy.mongodb.net/?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);

    try {
        await client.connect();


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

async function insertUser(client, newUser) {
    const result = await client.db("CinemaDB").collection("Users").insertOne(newUser);

    console.log(`New account created with the id: ${result.insertedId}`);
    
}

async function editUser(client, userEmail, edittedUser) {
    const result = await client.db("CinemaDB").collection("Users").updateOne({email: userEmail}, {$set: edittedUser });

    console.log(`${result.matchCount} user matched with email criteria`);
    console.log(`${result.modifiedCount} user profile was updated`)
}

async function findUser(client, userEmail) {
    const result = await client.db("CinemaDB").collection("Users").findOne({email: userEmail});

    if (result) {
        console.log(`Found a user with the email '${userEmail}'`);
        console.log(result)
    } else {
        console.log(`No user found with the email '${userEmail}'`);
    }
}

async function loginCheck(client, userEmail, userPassword) {
    const associatedAccount = await client.db("CinemaDB").collection("Users").findOne({email: userEmail});

    if (associatedAccount) {

        if (userPassword == `${associatedAccount.password}`) {
            const passwordMatch = true;
        } else {
            const passwordMatch = false;
        }

        if (passwordMatch == false) {
            console.log("Username or Password is incorrect. Please try again.");
        }
        
    } else {
        console.log("Username or Password is incorrect. Please try again.");
    }
}



async function storeFunctions() {

    await insertUser(client, {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        password: "jd1234!",
        number: "",
        status: "active",
        rememberMe: "False"
    })

    await editUser(client, "johnsmith@gmail.com", {
        firstName: "",
        lastName: "",
        password: "",
        number: "",
        status: "",
        rememberMe: ""
    });

    await findUser(client, "johnsmith@gmail.com");

}