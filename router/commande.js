const router = require("express").Router()
const {getAllCommand} = require("../Controllers/commande")

router.get("/all",(req,res)=>{
    getAllCommand();

})
router.get("/:id",(req,res)=>{
    let id = req.params.id
    getAllCommand();

})

router.route("/:id").get((req,res)=>{
    let id = req.params.id
    if(id<0){
        res.send
    }
    getAllCommand();

})



router.get("/all",getAllCommand)