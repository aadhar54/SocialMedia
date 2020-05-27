
function displayMyPosts(){
    const {id} = JSON.parse(window.localStorage.user)
    
    $.get(`/api/posts/userId/${id}`,(posts)=>{
      if(posts){
        for(let post of posts){
          $('#my-posts-container').append(`
          <div class="col-4">
          <div class="card m-2">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${post.user.username}</h6>
              <p class="card-text">
                ${post.body.substr(0, 200)}
                <a href="#">...read more</a>
              </p>
              <a href="#" data-toggle="modal" data-target="#exampleModal" class="card-link comment-link" post-component="${post.id}">Comment</a>
              <a href="#" class="card-link">Like</a>
            </div>
          </div>
        </div>
          `)
        }
      }

    })

  }


