const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports = {
  async up(db, client) {
    await db
      .collection("books")
      .insertMany([{
        "_id":
          new ObjectId("647f2c9311da4d2da202dd77")
        ,
        "title": "Leia Organa",
        "author":
          new ObjectId("647e13103c18faca7f185cc0")
        ,
        "category":
          new ObjectId("647f04587957d0d366afa4a9")
        ,
        "publishedDate": "4 September. 2018"
      },{
        "_id": new ObjectId("647f2c9311da4d2da202dd78")
        ,
        "title": "Han Solo",
        "author": new ObjectId("647e13103c18faca7f185cbe")
        ,
        "category": new ObjectId("647f04587957d0d366afa4a4")
        ,
        "publishedDate": "4 September. 2018"
      },{
        "_id": new ObjectId("647f2c9311da4d2da202dd79")
        ,
        "title": "Luke Skywalker",
        "author": new ObjectId("647e13103c18faca7f185cbe")
        ,
        "category": new ObjectId("647f04587957d0d366afa4a8")
        ,
        "publishedDate": "21 June. 2006"
      }]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
