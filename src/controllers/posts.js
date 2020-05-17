const { Posts,Users } =  require('../db/modules')

async function getAllPosts(){
    const posts = await Posts.findAll({
        include: [ Users ]
      });
    return posts ;
}

async function getMyPosts(userId){
    const posts = await Posts.findAll({
        where:{userId},include: [ Users ]
      });
    return posts ;
}

async function createPost(userId,title,body){
    const post = Posts.create({
        
        title,
        body,
        userId
    })
    return post
}

module.exports={
    getAllPosts,
    createPost,
    getMyPosts
}