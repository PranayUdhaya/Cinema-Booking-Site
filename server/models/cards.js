/**
 *  Defining the cards schema for the database
 *  Exports the schema as "Card" so that it may be used in other files
 */

const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const algorithm = "aes-256-cbc";
var cardDecipher;
var addressDecipher;
var cityDecipher;
var stateDecipher;
var zipDecipher;
 
const CardSchema = mongoose.Schema({
    userID: ObjectId,
    cardNumber: String,
    cardLastFour: String,
    expDate: String,
    securityCode: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    type: String
});

// utilizing bcrypt to hash the card number, security code, and address (including city state and zip)
CardSchema.pre("save", function (next) {
    const card = this;
    if (this.isNew) {
        for(var i = 0; i < 7; i++) {
            // generate 16 bytes of random data
            const initVector = crypto.randomBytes(16);

            // secret key generate 32 bytes of random data
            const Securitykey = crypto.randomBytes(32);
            
            // the cipher function
            const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
            switch (i) {
                case 0:
                    bcrypt.genSalt(10, function (saltError, salt) {
                        if (saltError) {
                            return next(saltError)
                        } else {
                            bcrypt.hash(card.cardNumber, salt, function(hashError, hash) {
                                if (hashError) {
                                    return next(hashError)
                                }
                                card.cardNumber = hash
                                next()
                            })
                        }
                    })
                    break;
                case 1:
                    // getting the msg (cardLastFour)
                    let msgCard = card.cardLastFour;
                    let encryptedCard = cipher.update(msgCard, "utf-8", "hex");
                    encryptedCard += cipher.final("hex");
                    card.cardLastFour = encryptedCard;
                    cardDecipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
                    console.log("cardLastFour: " + encryptedData);
                    break;
                case 2:
                    bcrypt.genSalt(10, function (saltError, salt) {
                        if (saltError) {
                            return next(saltError)
                        } else {
                            bcrypt.hash(card.securityCode, salt, function(hashError, hash) {
                                if (hashError) {
                                    return next(hashError)
                                }
                                card.securityCode = hash
                                next()
                            })
                        }
                    })
                    break;
                case 3:
                    // getting the msg (address)
                    let msgAddress = card.address;
                    let encryptedAddress = cipher.update(msgAddress, "utf-8", "hex");
                    encryptedAddress += cipher.final("hex");
                    card.address = encryptedAddress;
                    addressDecipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
                    console.log("address: " + encryptedAddress);
                    break;
                case 4:
                    // getting the msg (city)
                    let msgCity = card.city;
                    let encryptedCity = cipher.update(msgCity, "utf-8", "hex");
                    encryptedCity += cipher.final("hex");
                    card.city = encryptedCity;
                    cityDecipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
                    console.log("city: " + encryptedCity);
                    break;
                case 5:
                    // getting the msg (state)
                    let msgState = card.state;
                    let encryptedState = cipher.update(msgState, "utf-8", "hex");
                    encryptedState += cipher.final("hex");
                    card.state = encryptedState;
                    stateDecipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
                    console.log("state: " + encryptedState);
                    break;
                case 6:
                    // getting the msg (zip)
                    let msgZip = card.zip;
                    let encryptedZip = cipher.update(msgZip, "utf-8", "hex");
                    encryptedZip += cipher.final("hex");
                    card.zip = encryptedZip;
                    zipDecipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
                    console.log("zip: " + encryptedZip);
                    break;
            }
        }
    } else {
        return next()
    }
});

// export decrypting function for cardlastfour
CardSchema.methods.decryptCard = function() {
    let decryptedCard = cardDecipher.update(this.cardLastFour, "hex", "utf-8");
    decryptedCard += cardDecipher.final("utf8");
    console.log("Decrypted message: " + decryptedCard);
    return decryptedCard;
}

// export decrypting function for address
CardSchema.methods.decryptAddress = function() {
    let decryptedAddress = addressDecipher.update(this.address, "hex", "utf-8");
    let decryptedCity = cityDecipher.update(this.city, "hex", "utf-8");
    let decryptedState = stateDecipher.update(this.state, "hex", "utf-8");
    let decryptedZip = zipDecipher.update(this.zip, "hex", "utf-8");

    decryptedAddress += addressDecipher.final("utf8");
    decryptedCity += cityDecipher.final("utf8");
    decryptedState += stateDecipher.final("utf8");
    decryptedZip += zipDecipher.final("utf8");
    const fullAddress = decryptedAddress + " " + decryptedCity + ", " + decryptedState + " " + decryptedZip;
    return fullAddress;
}

module.exports = mongoose.model("Card", CardSchema);