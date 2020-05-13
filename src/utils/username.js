const ADJECTIVES = [
    'boundless',
    'plausible',
    'sleepy',
    'electronic',
    'dangerous',
    'slim',
    'purple',
]

const OBJECTS = [
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk'
]


function genRandomUsers(){
    let randomAdj = ADJECTIVES[Math.floor(Math.random()*ADJECTIVES.length)]
    let randomObj = OBJECTS[Math.floor(Math.random()*OBJECTS.length)]
    return `${randomAdj}-${randomObj}`
}

module.exports = {
    genRandomUsers
}
