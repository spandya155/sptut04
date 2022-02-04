var express = require('express');
var router = express.Router();
var User = require('./Models/User');

router.get("/users",async(req,res)=>{   //users endpoint
    const iuser = await User.find()
    res.send(iuser)
})

router.post("/users",async(req,res)=>{    //users endpoint
    const iu = new User({
        name:req.body.name,
        rollno:req.body.rollno
    });

    await iu.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                message:msg
            })
        }
    })
});

// for update data

router.patch('/users/:id',async (req,res)=>{
    const iuser = await User.findOne({_id:req.params.id})
    iuser.name = req.body.name
    iuser.rollno = req.body.rollno
    await iuser.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

// for delete data

router.delete("/users/:id",async(req,res)=>{
   await User.deleteOne({_id:req.params.id},(err,msg)=>{
        if(err){
            res.status(500).json({
                "Error":err
            })
        }
        else{
            res.status(200).json({
                "Message":msg
            })
        }
    })
})

module.exports = router