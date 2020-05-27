function loadPosts() {
  $.get('/api/posts', (posts) => {
    for (let p of posts) {
      $('#posts-container').append(
        $(`
        <div class="col-4">
          <div class="card m-2">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
              <p class="card-text">
                ${p.body.substr(0, 200)}
                <a href="#">...read more</a>
              </p>
              <a href="#" data-toggle="modal" data-target="#exampleModal" class="card-link comment-link" post-component="${p.id}">Comment</a>
              <a href="#" class="card-link">Like</a>
            </div>
          </div>
        </div>
        
        `)
      )
    }
   
  })
}

