const Commande = require("../model/commande.js");
const Produit = require("../model/produit.js");

const getAllCommand = () => {
  return Commande.find()
    .then((commandes) => commandes)
    .catch((err) => {
      result = { error: err };
    });
};

module.exports = {getAllCommand}

// const {findUserbyId} = require("../Controllers/user")
// const findUserById = async (id) => {
//   let result;
//   setTimeout(()=>{
//     result = {
//       id: 5000
//     }
//   },1000)
//   return result
// }

// export function getAllCommand(){
//   Commande
// }

// let myPromise = new Promise()
// export function findCommandeById(id){
//   Commande.findb
// }

// export function bycommande(req, res) {

//   Commande.findById(req.params.idproduit)
//     .then((commande) => {
//       if (commande.quantity > 0) {
//         User.findById(req.params.idUser)
//           .then((user) => {
//             if (Produit.wallet >= commande.price) {
//               commande.create({
//                 idproduit: req.params.idproduit,
//                 idcommande: req.params.idcommande,
//               })
//                 .then((achat) => {
//                   Game.findByIdAndUpdate(req.params.idGame, {
//                     quantity: commande.quantity - 1,
//                   })
//                     .then((doc1) => {
//                       User.findByIdAndUpdate(req.params.idUser, {
//                         wallet: user.wallet - commande.price,
//                       })
//                         .then((doc2) => {
//                           res.status(200).json(commande);
//                         })
//                         .catch((err) => {
//                           res.status(500).json({ error: err });
//                         });
//                     })
//                     .catch((err) => {
//                       res.status(500).json({ error: err });
//                     });
//                 })
//                 .catch((err) => {
//                   res.status(500).json({ error: err });
//                 });
//             } else {
//               res.status(200).json({ message: "commande valide" });
//             }
//           })
//           .catch((err) => {
//             res.status(500).json({ error: err });
//           });
//       } else {
//         res.status(200).json({ message: "commande not valide" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err });
//     });
// }
