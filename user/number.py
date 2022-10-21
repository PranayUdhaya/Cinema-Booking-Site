import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:3000/")

## create a account database
acctDb = myclient["accountDatabase"]

## create a collection for multiple accounts
acctCol = acctDb["Users"]

acctDict = {"email": "johndoe@gmail.com", "Phone Number": "9876543210"}

acctCol.insert_one(acctDict)

emailQuery = acctCol.find({"email": "johndoe@gmail.com"})

print(acctCol)

def phoneNumber(userNum):
    newNum = {"$set": {"Phone Number": f"{userNum}"}}
    acctCol.update_one(emailQuery, newNum)

def main():
    phoneNumber("1234567890")
    print(f"\n{acctCol}")

if __name__ == "__main__":
    main()
