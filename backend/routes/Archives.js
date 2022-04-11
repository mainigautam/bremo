const {Bremos,Archive} = require('../schema/NotesSchema')

const Archives = (app)=>{
    app.get('/getArchives', (req, res) => {
        Archive.find({}, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.send(data);
            }
        })
    })
    app.post('/archiveBremos',(req,res)=>{
        Bremos.findOne({ _id: req.body.ref }, (err, data) => {
            if (!err) {
                const dump = new Archive({
                    _id: data._id,
                    title : data.title,
                    bremo: data.bremo,
                    theme : data.theme,
                    image: data.image,
                    timeStamp: data.timeStamp
                })
                data.remove()
                dump.save();
                res.end();
            }
            else {
                console.log(err)
            }
        })})
        app.post('/restoreArchive',((req,res)=>{
            Archive.findOne({ _id: req.body.ref }, (err, data) => {
                if (!err) {
                   const restore = new Bremos({
                        _id: data._id,
                        title : data.title,
                        bremo: data.bremo,
                        theme : data.theme,
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
module.exports = Archives;