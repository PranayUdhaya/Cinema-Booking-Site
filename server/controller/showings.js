/**
 *  Defining the CRUD functions that will be called in routes/showings.js
 */
// importing model
const Showing = require("../models/showings");

// export createShowing function
exports.createShowing = async (req, res) => {
    const seatsArray = []
    for (var i = 0; i < 100; i++) {
        seatsArray[i] = "available";
    }

    let room = req.body.room;
    let start = req.body.start;
    let end = req.body.end;
    let roomShowings = await Showing.find({room: room});

    for (var s in roomShowings) {
        console.log(roomShowings[s])
        if (start >= s.start & start <= s.end) {
            return res.json({message: "Conflicting showings", status: 500})
        } else if (end >= s.start & end <= s.end) {
            return res.json({message: "Conflicting showings", status: 500})
        }
    }

    //console.log("Start date: " + req.body.start)
    const startDate = new Date(req.body.start)
    console.log(startDate)
    const readable = startDate.toLocaleString()
    console.log(readable)

    let newShowing = new Showing({
        movie: req.body.movie,
        start: req.body.start,
        end: req.body.end,
        seats: seatsArray,
        room: req.body.room,
        startReadable: readable
    });    

    try  {
        await newShowing.save();
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
    return res.json(newShowing)
};

// export editShowing
exports.editShowing = async (req, res) => {
    let showingID = req.body.showingID;
    let updatedShowing = {
        movie: req.body.movie,
        start: req.body.start,
        end: req.body.end,
        seats: req.body.seats,
        room: req.body.room
    }

    try  {
        let showing = Showing.findOneAndUpdate({_id: showingID}, updatedShowing);
        return res.json(showing);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

// export deleteShowing function
exports.deleteShowing = async (req, res) => {
    let showingID = req.body.showingID;

    try {
        let showing = await Showing.findOneAndRemove({_id: showingID});
        return res.json({ message: "Showing Deleted" });
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

// export a find showings by movie id function
exports.findShowings = async (req, res) => {
    let movieID = req.body.movieId;
    
    try {
        let showings = await Showing.find({ movie: movieID });
        //console.log(showings)
        if (showings.length == 0) {
            return res.status(500).json(showings);
        }
        return res.json(showings);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};
