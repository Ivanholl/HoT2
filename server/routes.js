const express = require('express');
const router = express.Router();
const db = require('./firestore.js');

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    res.json({
        message: 'Home'
    });
})

router.post('/new', (req, res ,err)  => {
    if (req.body && req.body.email && req.body.pass) {
        db.collection("users").add({
            email: req.body.email,
            pass: req.body.pass
        })
        .then((snapshot) => {
            console.log(snapshot);
        })
        .catch((err) => {
            console.error(err);
        })
    } else {
        res.send('error')
    }
})

router.get('/asd', (req, res, err) => {

    var usersRef = db.collection('users')

    usersRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
});


module.exports = router;
