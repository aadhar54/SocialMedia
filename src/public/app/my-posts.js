function displayMyPosts(){
    const {id} = JSON.parse(window.localStorage.user)
    
    $.get(`/api/posts/userId/${id}`,(posts)=>{
      if(posts){
        for(let post of posts){
         let postid = `${post.id}`
          $('#my-posts-container').append(`
          <div class="col-4">
            <div class="card m-2">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${post.user.username}</h6>
                <p class="card-text">${post.body.substr(0,200)}
                <a href="#">read more...</a>
                </p>
                <a href="#" class="a-c-tag" data-toggle="modal" data-target="#exampleModal"  class="card-link" data-component="${postid}">Comment</a>
                <a href="#" class="card-link">Like</a>
              </div>
            </div>
          </div>`)
        }
      }
    })
  }


function postComm(){

    let title = $('#c-t').val();
    let body = $('#c-b').val();
    const userId =JSON.parse(window.localStorage.user).id
    const list = $('.a-c-tag')
    //const index = list.index($(ev.target));
    //const postId = $('.a-c-tag').attr("data-component")
    console.log('title',title)
    console.log('body',body)
    console.log('userId',userId)
    //console.log('postId',postId)
    //$.post('api/comments',{userId,},())
}