const { Trash, Bremos } = require("../schema/NotesSchema");

const Bin = (app) => {
    app.get('/getTrashes', (req, res) => {
        Trash.find({}, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.send(data);
            }
        })
    })
    app.delete('/deleteForever', (req, res) => {
        Trash.deleteOne({ _id: req.body.ref }, (err, data) => {
            if (!err) {
                res.end()
            }
            else {
                console.log(err)
            }
        })
    })
    app.delete('/restore',((req,res)=>{
        Trash.findOne({ _id: req.body.ref }, (err, data) => {
            if (!err) {
               const restore = new Bremos({
                    _id: data._id,
                    title : data.title,
                    bremo: data.bremo,
                    theme: data.theme,
                    image: data.image,
                    timeStamp: data.timeStamp
                })
                data.remove()
                restore.save();
                res.end();
            }
            else {
                console.log(err)
            }
        });
    }))
}
module.exports = Bin;