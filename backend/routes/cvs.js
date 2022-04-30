const router = require('express').Router();
let CV = require('../models/cv.model');

router.route('/').get((req, res) => {
    CV.find()
        .then(cvs => res.json(cvs))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;

    const newCV = new CV({
        title
    });

    newCV.save()
        .then(() => res.json('CV Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    CV.findById(req.params.id)
        .then(cv => res.json(cv))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    CV.findByIdAndDelete(req.params.id)
        .then(() => res.json("CV Deleted!"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    CV.findById(req.params.id)
        .then(cv => {
            cv.title = req.body.title;

            cv.save()
                .then(() => res.json("cv updated!"))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;