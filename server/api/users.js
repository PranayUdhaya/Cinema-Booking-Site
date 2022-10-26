const { MongoClient } = require('mongodb');

async function main() {
    
    const uri = "mongodb+srv://Admin:Admin@cluster0.1dx8tdy.mongodb.net/?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);

        // await insertUser(client, {
        //     firstName: "Bob",
        //     lastName: "Ross",
        //     email: "bobross@gmail.com",
        //     password: "bobross1!",
        //     number: ""
        // });

        await findUser(client, "bobross@gmail.com");

        await editUser(client, "bobross@gmail.com", {number: "3456789120"})

        await findUser(client, "bobross@gmail.com");

        var booking = {bookings: [10, 20], totalPrice: 10.0};
        await createBooking(client, "bobross@gmail.com", booking);

        await findUser(client, "bobross@gmail.com");

        // var booking2 = {tickets: [56, 75], totalPrice: 1.0 };
        // await addBooking(client, "bobross@gmail.com", booking2);


    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }

}

main().catch(console.error);

//pulls the different databases and lists them out in the console log
async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases();

    console.log("Databases");
    databaseList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}

//creates a new user and inserts in into the users database
async function insertUser(client, newUser) {
    const result = await client.db("CinemaDB").collection("Users").insertOne(newUser);

    console.log(`New account created with the id: ${result.insertedId}`);
    
}

//takes a already existing user and edits the user's information
async function editUser(client, userEmail, edittedUser) {
    //uses the user email as the primary ID to find the user in the users database
    //sets the newly changed information in place of the originally information
    const result = await client.db("CinemaDB").collection("Users").updateOne({email: userEmail}, {$set: edittedUser });

    console.log(`${result.matchCount} user matched with email criteria`);
    console.log(`${result.modifiedCount} user profile was updated`)
}

//finds a user in the users database using their email address as the primary ID
async function findUser(client, userEmail) {
    const result = await client.db("CinemaDB").collection("Users").findOne({email: userEmail});

    //if the user's email is found in the database it will display the user's account in the console log
    if (result) {
        console.log(`Found a user with the email '${userEmail}'`);
        console.log(result)
    } else {
        //if the user's email is not found in the database, it will return the following statement
        console.log(`No user found with the email '${userEmail}'`);
    }
}


async function loginCheck(client, userEmail, userPassword) {
    const associatedAccount = await client.db("CinemaDB").collection("Users").findOne({email: userEmail});

    if (associatedAccount) {

        if (userPassword == `${associatedAccount.password}`) {
            return true;
        } else {
            console.log("Username or Password is incorrect. Please try again.");
            return false;
        }
        
    } else {
        console.log("Username or Password is incorrect. Please try again.");
        return false;
    }
}

// create booking for user
// async function createBooking(client, userEmail, booking) {
//     const result  = await client.db("CinemaDB").collection("Users").updateOne({email: userEmail}, {$set: {booking}});

//     if (result) {
//         console.log(`Created a new booking for '${userEmail}'`);
//         console.log(result)
//     } else {
//         //if the user's email is not found in the database, it will return the following statement
//         console.log(`Error when creating booking for '${userEmail}'`);
//     }
// }

// adding another booking for user
// async function addBooking(client, userEmail, booking) {
//     const userAccount  = await client.db("CinemaDB").collection("Users").findOne({email: userEmail});
//     const tix = userAccount.booking.tickets;
//     const newTix = booking.tickets;
//     for (let i = 0; i < newTix.length; i++) {
//         tix.push(newTix[i]);
//     }
//     userAccount.booking.totalPrice += booking.totalPrice;
    

//     if (userAccount) {
//         console.log(`Update booking for '${userEmail}'`);
//         console.log(userAccount);
//     } else {
//         //if the user's email is not found in the database, it will return the following statement
//         console.log(`Error when updating booking for '${userEmail}'`);
//     }
// }

async function storeFunctions() {

    await insertUser(client, {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        password: "jd1234!",
        number: "123-456-7890",     // optional
        status: "inactive",
        rememberMe: false,          // if the user manually logs out, if true change this to false
        billingAddress: "",         // optional
        cards:[],                   // optional
        admin: false                // optional
    })

    await editUser(client, "johnsmith@gmail.com", {
        firstName: "",
        lastName: "",
        password: "",
        number: "",
        status: "",
        booking: "",
        billingAddress:"",
        cards:[]
    });

    await findUser(client, "johnsmith@gmail.com");

}