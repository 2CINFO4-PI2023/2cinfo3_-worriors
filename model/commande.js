const mongoose = require( 'mongoose');
const { Schema, model } = mongoose;

const commandeSchema = new Schema(
    {
        idproduit: {
            type: String,
            required: true
        },
        Quantite: {
            type: Number,
            required: true
        },

     Prixunite: {
        type: Number,
        required: true
     }
    },
    

    
    {
        timestamps: true
    }
);

module.exports = model('commande', commandeSchema);
