const { showCommentsOfUser,
    showCommentsOfPost,
    getAllComments,
    addComment} = require('../../controllers/comments')

const route = require('express').Router()

route.get('/',async (req,res)=>{
        const comments =  await getAllComments()
        res.send(comments)
})
/*
route.get('/',async (req,res)=>{
    const posts = await getAllPosts()
    res.send(posts)
})
*/

route.get('/user/:id',async(req,res)=>{
    try{
        const comment =  await showCommentsOfUser(req.params.id)
        res.status(400).send(comment)
    }
    catch{
        res.status(200).send({error:'Wrong User Id'})
    }
})

route.get('/post/:id',async (req,res)=>{
    try{
        const comment =  await showCommentsOfPost(req.params.id)
        res.status(400).send(comment)
    }
    catch{
        res.status(200).send({error:'Wrong Post Id'})
    }
})

route.post('/',async (req,res)=>{
        const { title,body,userId,postId } = req.body

        if((!title) || (!body) || (!userId) || (!postId)){
            res.status(400).send({error:'title or body or userId or postId not provided'})
        }
        const newComment = await addComment(title,body,userId,postId)
        res.status(200).send(newComment)
})

module.exports ={
    route
}