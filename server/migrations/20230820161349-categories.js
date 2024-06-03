const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports = {
  async up(db, client) {
    await db
      .collection("categories")
      .insertMany([{
        "_id": new ObjectId("647f04587957d0d366afa4a4")
        ,
        "name": "Treason against the Empire"
      },{
        "_id": new ObjectId("647f04587957d0d366afa4a5")
        ,
        "name": "Sabotage of Imperial communications"
      },{
        "_id": new ObjectId("647f04587957d0d366afa4a6")
        ,
        "name": "Theft of classified information"
      },{
        "_id": new ObjectId("647f04587957d0d366afa4a7")
        ,
        "name": "Destruction of Imperial property"
      },{
        "_id": new ObjectId("647f04587957d0d366afa4a8")
        ,
        "name": "Incitement to rebellion"
      },{
        "_id": new ObjectId("647f04587957d0d366afa4a9")
        ,
        "name": "Espionage against the Empire"
      }]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
