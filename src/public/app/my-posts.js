
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
                <a href="#" class="c-link" data-toggle="modal" data-target="#exampleModal" data-component=${postid}>Comment</a>
                <a href="#" class="card-link">Like</a>
              </div>
            </div>
          </div>`)
        }
      }
    })
  }

function onLinkClick(){

  //Notes for the doubt mentor

  //Made this function so that it runs after loadmyposts() and things are done sequentially rather than asynchronosly.
  //But still enable to set up this click event for the comment link .I thought when I will click on comment , we can get the ev.taget and using that and the attr jquery for data-component we can get the post id .
  
  $('.c-link').click(function(ev){
  console.log(1)
  console.log(ev.target)
  })
  console.log($('.c-link'))
  
}


function postComm(){

    const title = $('#c-t').val()
    const body = $('#c-b').val()
    const userId =JSON.parse(window.localStorage.user).id
    
    //console.log('postId',postId)
    
}

