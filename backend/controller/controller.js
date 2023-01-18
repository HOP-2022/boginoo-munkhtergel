const Link = require('../model/model');

exports.createBoginoo = async (request, response) => {
  console.log(request.body)
  // if (!request.body?.orginalUrl) {
  //   console.log('aaaa')
  //   return response.status(200).json({ message: "originalURL is required!" });
  // } else {
    const originalURL = request.body;
    try {
      const link = await Link.create(originalURL);
      console.log(link._id)
      const updatedLink = await Link.findByIdAndUpdate(link._id, {
        short: "http://localhost:3000/" + link._id,
      });
      console.log({updatedLink});
      response.status(201).send({ message: "Successfully created!" , data: {...updatedLink._doc, short: "http://localhost:3000/" + updatedLink._id}});
    } catch (error) {
      response.status(404).send({ message: "Error", error });
    }
  }
// } 

// const Link = require('../model/model')

// exports.createBoginoo = async(request, response) => {
//     if(!request.body?.originalUrl){
//         response.status(404).send({messega:'originalUrl is require'})
//     }else{
//         try{
//             const originalUrl = request.body
//             await Link.create(originalUrl)
//             response.
//             status(201).
//             send({messega:'successfully created'})
//         }catch(error){
//             response.
//             status(404).
//             send({messega:"Error", error})
//         }
//     }
// }
// exports.getBoginoo = async (request, response, next) =>{
//     const {id} = request.params;
//     try{
//         const link = await LinkModel.findById(id);
//         response.status(200).json({
//             messega:true,
//             data:link
//         })
//     }catch(error){
//         return response.status(400).json({messega:error, data:null})
//     }
// }
// exports.getBoginoo = async (request, response, next)=>{
//     try{
//         const links = await LinkModel.find();
//         response.status(200).json({
//             messega:true,
//             data:links,
//         })
//     }catch(error){
//         return response.status(400).json({message:error, data:null})
//     }
// }

