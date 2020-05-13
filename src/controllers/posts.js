const { Posts } =  require('../db/modules')

async function getAllPosts(){
    const posts = await Posts.findAll();
    return posts ;
}

async function createPost(userId,title,body){
    const post = Posts.create({
        userId,
        title,
        body
    })
    return post
}

module.exports={
    getAllPosts,
    createPost
}