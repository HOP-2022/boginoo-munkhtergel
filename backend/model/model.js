const {model , Schema} = require("mongoose")

const LinkSchema = new Schema({
    orginalUrl:String,
    shortUrl:String,
})

const LinkModel = model('Link', LinkSchema)

module.exports = LinkModel