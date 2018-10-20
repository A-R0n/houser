const addHouse = (req, res, next) => {
    console.log(req.body)
    req.app
        .get('db')
        .post_house([req.body.name_applicant,
        req.body.address_house,
        req.body.city,
        req.body.state_house,
        req.body.zipcode])
        .then(response => 
            res
                .status(200)
                .send(response)
        )
        .catch(e => res.status(500).send(e))
};

const getHouse = (req, res, next) => {
    req.app
        .get('db')
        .get_house()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
};

const deleteHouse = (req, res, next) => {
    req.app
        .get('db')
        .delete_entry([req.params.id])
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
}





module.exports = {
    addHouse,
    getHouse,
    deleteHouse  
};