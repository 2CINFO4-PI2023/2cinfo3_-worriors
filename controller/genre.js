import genre from '../Models/genre.js';
import Genre from '../Models/genre.js'
import { validationResult } from "express-validator";


export function addgenre(req, res) {

    if(!validationResult(req).isEmpty()){
        res.status(400).send({error:validationResult(req).array()})
    }
    else{
        const genre = new Genre({
           nomGenre: req.body.nomGenre,
            description: req.body.description,
            
        })
        genre.save()
            .then(livre => {
                res.status(201).json({   nomGenre: req.body.nomGenre,
                    description: req.body.description,
                    })
            }
            )
            .catch(err => {
                res.status(500).send(err)
            })
    }
 

    
}

export function addGenre(nomGenre,description){
    const genre = new Genre({
        nomGenre:nomGenre,
         description:description,  
     })
     genre.save()
         .then(livre => {
             res.status(201).json(livre)
         }
         )
         .catch(err => {
             res.status(500).send(err)
         })
 }



export function modifiergenre (req,res) {
    if (!validationResult(req).isEmpty()) {
        res.status(400).json({ error: validationResult(req).array() })
    }
    else {
    
    
    genre.
    findOneAndUpdate({ "_id": req.params.id }, { "nomGenre" :req.body.nomGenre})
    
        .then(val =>
            res.status(200).json(val))
        .catch(err => {
            res.status(500).json({ error: err })
        })
}}



export function getAllgenres(req, res) {
    Genre.find().then(genres => {
        res.status(200).send(genres)
    }).catch(err => {
        res.status(500).send(err)
    })
}

export function updateGenre(req,res){
    if(!validationResult(req).isEmpty()){
        res.status(400).send({error:validationResult(req).array()})
    }else{
        const genreId = req.params.id
        const newnomGenre = req.body.nomGenre
    
            Genre.findOneAndUpdate({id:genreId},{nomGenre:newnomGenre}, { new: true })
            .then(genre=>
                {
                    res.status(200).json(genre)
                })
                .catch(err=>{
                    res.status(500).json(err)
                })
        
        
    }
   
   
}
export function getgenrebyid (req,res) {
    genre
        .findOne({ "_id": req.params.id })
        .then(val =>
            res.status(200).json(val))
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
export function deletegenre(req, res) {
    const genreId = req.params.id;

    genre.findByIdAndRemove(genreId)
        .then(() => {
            res.status(200).json({ message: 'Genre supprimé avec succès' });
        })
        .catch(err => {
            res.status(500).send(err);
        });
}