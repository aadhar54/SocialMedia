const { db }= require('./src/db/modules')
const express = require('express')

const usersRoute = require('./src/routes/users').route
const postsRoute = require('./src/routes/posts').route

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//console.log(usersRoute)

app.use('/api/users',usersRoute)
app.use('/api/posts',postsRoute)

app.get('/',(req,res)=>{
    res.send('Hello')
})

db.sync().then(()=>{
    app.listen('9999',()=>{
        console.log('server started on http://localhost:9999/')
    })
}).catch((err)=>{
    console.error(new Error('could not start database'))
    console.error(err)
})
