const admin = require('firebase-admin');

var serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

db.settings({timestampsInSnapshots: true})

console.log(`Firestore Initiated !`);;

module.exports = db;
