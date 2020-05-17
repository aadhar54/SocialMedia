//create a new user
const { genRandomUsers } = require('../utils/username')
const { Users } = require('../db/modules')

async function createAnonUser(){

    const user = await Users.create({
        username:genRandomUsers()
    })
    //console.log('user controller',user)
    return user
}


//get all users
async function getAllUsers(){
    const users = Users.findAll()
    return users
}

//get users with user id
async function getUserById(id){
    const user = await Users.findOne({
        where: {
            id
        }
    })
    return user;
}


async function getUserByUsername(username){
    const user = await Users.findOne({
        where: {
            username
        }
    })
    return user;
}

module.exports={
    createAnonUser,
    getUserById,
    getUserByUsername,
    getAllUsers
}