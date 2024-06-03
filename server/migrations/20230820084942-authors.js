const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports = {
  async up(db, client) {
    await db
      .collection("authors")
      .insertMany([{
        "_id": new ObjectId("647e13103c18faca7f185cbc")
        ,
        "name": "Citadel Tower",
        "email": "robert.s@gmail.com",
        "phoneNumber": "+1-202-427-0140",
        "about": "A fortress on the planet Lola Sayu, known for its high security and prisoner torture. It holds rebels with crucial information about the Alliance.",
        "job": "05:23:43.0+06:30:12.0"
      },{
        "_id": new ObjectId("647e13103c18faca7f185cbd")
        ,
        "name": "Kessel Prison Mines",
        "email": "tyler@gmail.com",
        "phoneNumber": "+1-201-420-0123",
        "about": "A forced labor facility on the planet Kessel, famous for its spice mines. Prisoners are used as slave labor.",
        "job": "19:56:38.11+07:14:22.2"
      },{
        "_id": new ObjectId("647e13103c18faca7f185cbe")
        ,
        "name": "Imperial Detention Center 7984",
        "email": "erichg@outlook.com",
        "phoneNumber": "+1-207-540-0123",
        "about": "A detention center on the planet Wobani, known for its brutal treatment and inhumane conditions. Used for common and low-profile rebel prisoners.",
        "job": "FLAG13:15:00:39.56+09:12:18.9"
      },{
        "_id": new ObjectId("647e13103c18faca7f185cbf")
        ,
        "name": "Scarif Imperial Vault",
        "email": "borna.nematzadeh123@gmail.com",
        "phoneNumber": "+1-202-555-0123",
        "about": "A facility on the planet Scarif, used to store classified information and prisoners who attempted to steal critical Imperial data.",
        "job": "11:24:58.68+11:45:33.5"
      },{
        "_id": new ObjectId("647e13103c18faca7f185cc0")
        ,
        "name": "The Maw Installation",
        "email": "angela.krakauer@gmail.com",
        "phoneNumber": "+1-209-510-0123",
        "about": "A secret prison located in a cluster of black holes. It houses the most dangerous prisoners who have committed high treason and large-scale sabotage.",
        "job": "02:23:08.48+12:28:16.2"
      },{
        "_id": new ObjectId("647e13103c18faca7f185cc1")
        ,
        "name": "Death Star Block 44",
        "email": "james.ma@gmail.com",
        "phoneNumber": "+1-702-444-0123",
        "about": "A secret section on the Death Star where captured rebel leaders classified as extremely dangerous are held.",
        "job": "17:38:17.01+08:22:09.4"
      },{
        "_id": new ObjectId("647e13103c18faca7f185cc2")
        ,
        "name": "Cloud City Prison",
        "email": "georgede1@yahoo.com",
        "phoneNumber": "+1-304-210-0123",
        "about": "A prison facility on the planet Bespin, known for its carbon-freezing chamber. It is used to freeze and transport prisoners.",
        "job": "23:59:59.99+13:30:00.0"
      }]);
  },

  async down(db, client) {
    await db.collection("authors").deleteMany({})
  }
};
