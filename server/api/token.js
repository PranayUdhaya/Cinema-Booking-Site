const mongoose = require("mongoose");
const Schema = mongodb.Schema;

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
