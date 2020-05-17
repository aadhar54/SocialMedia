const { db }= require('./src/db/modules')
const express = require('express')

const usersRoute = require('./src/routes/users').route
const postsRoute = require('./src/routes/posts').route
const commentsRoute = require('./src/routes/posts/comments.js').route

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users',usersRoute)
app.use('/api/posts',postsRoute)
app.use('/api/comments',commentsRoute)
app.use('/',express.static(__dirname+'/src/public'))

db.sync().then(()=>{
    app.listen('9999',()=>{
        console.log('server started on http://localhost:9999/')
    })
}).catch((err)=>{
    console.error(new Error('could not start database'))
    console.error(err)
})
