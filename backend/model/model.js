const {model , Schema} = require("mongoose")

const LinkSchema = new Schema({
    link:String,
    short:String,
})

const LinkModel = model('Link', LinkSchema)

module.exports = LinkModel