const {Bremos,Trash} = require("../schema/NotesSchema");
const Notes = (app) =>{
    app.get('/getBremos',(req,res)=>{
        Bremos.find({},(err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.send(data);
            }
        })
    })
    app.post('/bremoSave',(req,res)=>{
        const note = new Bremos({
            title: req.body.title,
            bremo: req.body.bremo,
            theme: req.body.theme,
            image: req.body.image,
            timeStamp : new Date()
        })

        note.save()
        .then(item=>{
            res.end()
        }).catch(err=>{
            console.log(err);
        })
    })
    app.delete('/deleteBremos',(req,res)=>{
        Bremos.findOne({ _id: req.body.ref }, (err, data) => {
            if (!err) {
                const dump = new Trash({
                    _id: data._id,
                    title : data.title,
                    bremo: data.bremo,
                    theme: data.theme,
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
        });
    })
}
module.exports = Notes;