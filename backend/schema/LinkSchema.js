const mongoose =require('mongoose')
const {Schema} = mongoose;

const LinkSchema = new Schema({
    link: String,
    timeStamp : Date
})
Links= mongoose.model('Links',LinkSchema);
module.exports = Links;