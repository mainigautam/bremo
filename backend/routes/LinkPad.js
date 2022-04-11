const Links = require('../schema/LinkSchema');
const LinkPad = (app) => {
    app.post('/linkSave', (req, res) => {
        const linkTo = new Links({
            link: req.body.body,
            timeStamp: new Date()
        });
        linkTo.save()
            .then(item => {
                res.end()
            })
            .catch(err => {
                console.log(err);
            });
    })
    app.get('/getLinks', (req, res) => {
        Links.find({}, (err, data) => {
            if (err) {  
                console.log(err)
            } else {
                res.json(data);
            }
        })
    })
    app.delete('/deleteLink', (req, res) => {
        Links.deleteOne({ _id: req.body.ref }, (err, data) => {
            if (!err) {
                res.end()
            }
            else {
                console.log(err)
            }
        });
    })
}
module.exports = LinkPad;