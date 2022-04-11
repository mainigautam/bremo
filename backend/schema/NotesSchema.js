const mongoose =require('mongoose')
const {Schema} = mongoose;

const NotesSchema = new Schema({
    title: String,
    bremo: String,
    theme: String,
    image: Buffer,
    timeStamp : Date
})
Bremos= mongoose.model('Bremo',NotesSchema);
Trash = mongoose.model('Trash',NotesSchema);
Archive = mongoose.model('Archive',NotesSchema);
module.exports = {Bremos,Trash,Archive};