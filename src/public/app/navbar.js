$(()=>{
    
    const navlinks = $('.navbar-nav .nav-link')
    navlinks.click((ev)=>{
        $('.nav-item .active').removeClass('active');
        $(ev.target).addClass("active");
       let urlComponents = `/components/${ $(ev.target).attr('data-components')}.html`
        $('#content').load(urlComponents) 
    })

    
     
})