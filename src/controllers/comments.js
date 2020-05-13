const { Comments
} = require('../db/modules')


// show all comments (of a user)
async function showCommentsOfUser(Id){
   const commentsOfUser =  await Comments.findAll({
   where :{userId:Id}
   });
}

/*----test---code-----*/
async function test(){ 
   const c1 = await showCommentsOfUser(1)
   const c2 = await showCommentsOfUser(2)
   console.log(c1) 
   console.log(c2)
}

test()

// show all comments (under a post)
async function showCommentsOfPost(name){
    const commentsOfPost = await Comments.findAll({
    where :{username:name}
    });
    return commentsOfPost;
 }



// add a comment
async function addComment(){

}