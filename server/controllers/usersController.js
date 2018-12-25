const db = require('../firestore.js');


const usersRef = db.collection("users");

function login(args, req, res, next) {
    if (args && args.email && args.pass) {
        return new Promise((resolve, reject) => {
            usersRef
                .where("email", "==", args.email)
                .where("pass", "==", args.pass)
                .get()
                .then(snapshot => {
                    if (!snapshot.empty) {
                        var resdata = [];
                        snapshot.forEach(doc => {
                            resdata.push(doc.data())
                        });

                        res.json(resdata[0])
                    } else {
                        res.json({error:'Invalid Email or Pass'});
                    }
                })
                .catch(err => next(err))
        })
    } else {
        res.send('Ivalid Requst')
    }
}
function isEmailUniqe(email) {
    return new Promise((resolve, reject) => {
        usersRef.where("email", "==", email)
        .get()
        .then(snapshot => {
            if (!snapshot.empty) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
        .catch(err => reject(err))
    })
}

function register(args, req, res, next ) {
    if (args && args.email && args.pass) {
        isEmailUniqe(args.email)
            .then(isUnique => {
                if (isUnique) {
                    usersRef.add({
                        email: args.email,
                        pass: args.pass
                    })
                    .then((snapshot) => {
                        let docId = snapshot._referencePath.segments[1]

                        usersRef.doc(docId)
                        .get()
                        .then((doc) => {
                            if (doc.exists) {
                                res.json(doc.data())
                            } else {
                                res.json({error :"Something went wrong!"});
                            }
                        })
                    })
                    .catch((err) => {
                        next(err);
                    })
                } else {
                    res.json({error: "Email already in use"});
                }
            })
    } else {
        res.send('error')
    }
}

function findAll(req, res, next){
    return new Promise((resolve, reject) => {
        usersRef.get()
        .then((snapshot) => {
            var resdata = [];
            snapshot.forEach(doc => {
                resdata.push(doc.data())
            });
            res.send(resdata);
        })
        .catch(err => next(err))
    })
}

module.exports = {
    login,
    register,
    findAll
}
