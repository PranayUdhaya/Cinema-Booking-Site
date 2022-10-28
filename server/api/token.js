const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uri = process.env.ATLAS_URI;

mongoose.connect( uri || 'mongodb://localhost/test')
.then(()=>{
    console.log("Connected to the Database. Yayzow!");
})
.catch(err => {
    console.log(err);
});


const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
        unique: true,
    },
    token: {type: String, required: true },
    createdAt: {type: Date, default: Date.now(), expired: 600 } //expired in 10 mins
})

module.exports = mongoose.model("token", tokenSchema);
