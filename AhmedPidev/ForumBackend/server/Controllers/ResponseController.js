var Responsedb = require('../Models/response');

// create and save new response
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    // new response
    const response = new Responsedb({

    forum_question_id:req.body.forum_question_id, // linked to the Forum question
    response: req.body.response, // response to the question
    UserId: req.body.UserId,
    date_posted:req.body.date_posted


    })

    // save response in the database
    response
        .save(response)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all responses/ retrive and return a single response
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        Responsedb.findById(id).then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found response with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving response with id " + id })
            })

    } else {
        Responsedb.find().then(response => {
                res.send(response)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving response information" })
            })
    }


}

exports.count = (req, res) => {

    Responsedb.countDocuments()
        .then(count => {
            res.send({ count })
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error occurred while retrieving Responses informations" })
        })
}




exports.findOne = (req, res) => {
    const id = req.params.id;
    Responsedb.findById(id)
        .then(data => {
            if (!data)
                res.url(404).send({ message: "Not found response with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .url(500)
                .send({ message: "Error retrieving article with id=" + id });
        });
};
// Update a new identified response by response id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    Responsedb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update response with ${id}. Maybe response not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update response information" })
        })
}

// Delete a response with specified response id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Responsedb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });


}

