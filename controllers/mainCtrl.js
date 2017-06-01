var user = require('../user.js');

module.exports = {
    getName: function (req, res) {
        return res.send({ "name": user.name })
    },
    getlocation: function (req, res) {
        return res.send({ "location": user.location })
    },
    getoccupations: function (req, res) {
        return res.send({ "occupations": user.occupations })
    },
    getoccupationslatest: function (req, res) {
        return res.send({ "occupations": user.occupations.slice(-1) });
    },
    gethobbies: function (req, res) {
        // console.log(user.hobbies)
        return res.send({ "hobbies": user.hobbies })
    },
    gethobbiestype: function (req, res) {
        var hobbytype = user.hobbies.filter(function (e) {
            return e.type === req.params.type
        })
        res.send(hobbytype)
    },
    getfamily: function (req, res) {
        if (req.query.relation) {
            var familyRelation = user.family.filter(function (e) {
                return e.relation === req.query.relation;
            })
            res.send(familyRelation)
        }
        res.send({ family: user.family })
    },
    getfamilygender: function (req, res) {
        var genderType = user.family.filter(function (e) {
            return e.gender === req.params.gender
        })
        res.send(genderType)
    },
    getrestaurants: function (req, res) {
        if (req.query.rating) {
            var restRating = user.restaurants.filter(function (e) {
                return e.rating >= req.query.rating;
            })
            res.send(restRating)
        }
        res.send({ "restaurants": user.restaurants })
    },
    getrestaurantsname: function (req, res) {
        res.send({ "restaurants": user.restaurants.name })
    }
}




















