const  mongoose = require( 'mongoose');
const { Schema, model } = mongoose;

const produittSchema = new Schema(
    {
        idlivre: {
            type: String,
            required: true
        },
        Quantitevalable: {
            type: Number,
            required: true
        },

     Prixunite: {
        type: Number,
        required: true
     },
     
    }
    

    
   
);

module.exports= model('produit', produittSchema);
