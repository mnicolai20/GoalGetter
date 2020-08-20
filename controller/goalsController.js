const db = require("../models");
module.exports = {
    findAll: function (req, res) {
        console.log('Here')
        db.Goals
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },
    findAllUserGoals: function (req, res) {
        db.User
            .find({})
            .populate("goals")
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },
    findAllJoinedGoals: function(req, res) {

        db.Goals.find({ users: req.params.userId })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },
    findById: function (req, res) {
        db.Goals
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log('Here')
        //
        const userId = req.user._id
        db.Goals
            .create(req.body)
            .then(dbModel =>{
                console.log("response obj")
                console.log(dbModel)
                const goalId = dbModel._id
                console.log('saving goal')
                console.log(userId)
                db.User.findOneAndUpdate({_id:userId}, { $push: { goals: goalId } }).then((userObj)=>{
                    console.log('user obj')
                    console.log(userObj)
                    res.json(dbModel)
                })
            })
            .catch(err => { console.log(err);
            res.status(422).json(err)});

    },
    update: function (req, res) {
        db.Goals
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Goals
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    }
};