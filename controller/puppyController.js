const Puppy = require('../model/puppyModel');

module.exports={
    fetch: async (req, res)=> {
        const puppies = await Puppy.find();

        res.send({puppies});
    },
    create: async (req, res)=> {
        const newPuppy = new Puppy(req.body);
        await newPuppy.save();
        
        const puppies = await Puppy.find();
        res.send(puppies);
    },
    overwrite: async (req, res)=> {
        await Puppy.updateOne(req._id, req.body);
        const puppies = await Puppy.find();

        res.send(puppies);
    },
    update: async (req, res)=>{
        await Puppy.updateOne(req._id, req.body); 
        const puppies = await Puppy.find();
        res.send(puppies);
    },
    delete: async (req, res) => {
        await Puppy.deleteOne(req._id);
        const puppies = await Puppy.find();
        res.send(puppies);
    }
}