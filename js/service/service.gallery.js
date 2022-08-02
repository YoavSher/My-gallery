<<<<<<< HEAD
'use strict'

const gProjs = [
    {
        id: "mnsw",
        name: "Mine-Sweeper",
        title: "My first sprint",
        desc: "Try to reveal all the numbers without landing on a mine",
        url: 'https://yoavsher.github.io/Mine-Sweeper',
        publishedAt: Date.now(),
        img: "img/my-photos/minesweeper.JPG",
        labels: ["Matrixes", "Moues events", "Recursion", "Neighbors"]
    },
    {
        id: "pcmn",
        name: "Pac-man",
        title: "Just Pacman",
        desc: "Eat all the food and don't let the ghosts catch you",
        url: 'https://yoavsher.github.io/PacMan',
        publishedAt: Date.now(),
        img: "img/my-photos/pacman.JPG",
        labels: ["Matrixes", "Keyboard events", "Neighbors"]
    },
    {
        id: "gswho",
        name: "Guess who",
        title: "Trying Jquery and Bootstrap",
        desc: "Try to reveal all the numbers without landing on a mine",
        url: 'https://yoavsher.github.io/Guess-who',
        publishedAt: Date.now(),
        img: "img/my-photos/guesswho.JPG",
        labels: ["Decision tree", "Jquery", "Bootstrap"]
    },
    {
        id: "bkstr",
        name: "Book Store",
        title: "Learning CRUDL",
        desc: "You can add, update and remove books",
        url: 'https://yoavsher.github.io/Book-store',
        publishedAt: Date.now(),
        img: "img/my-photos/bookstr.JPG",
        labels: ["CRUDL", "Filter", "Sorting"]
    },
    {
        id: "chss",
        name: "Chess",
        title: "Experiencing neighbors loop",
        desc: "Play Chess, move the tools around",
        url: 'https://yoavsher.github.io/Chess',
        publishedAt: Date.now(),
        img: "img/my-photos/chess.JPG",
        labels: ["Matrix", "Neighbors loop"]
    }
]


function getProjById(projId) {
    const proj = gProjs.find(proj => projId === proj.id)
    return proj
}

function getDate(projId) {
    const proj = getProjById(projId)
    const miliSec = proj.publishedAt
    var fullDate = new Date(miliSec).toString().split(' ').slice(0, 5).join(' ')
    return fullDate
}

function submitMail(email, body, subject) {
    // console.log('email:', email)
    const fullMail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`
    return fullMail
=======
'use strict'

const gProjs = [
    {
        id: "mnsw",
        name: "Mine-Sweeper",
        title: "My first sprint",
        desc: "Try to reveal all the numbers without landing on a mine",
        url: 'https://yoavsher.github.io/Mine-Sweeper',
        publishedAt: Date.now(),
        img: "img/my-photos/minesweeper.jpg",
        labels: ["Matrixes", "Moues events", "Recursion", "Neighbors"]
    },
    {
        id: "pcmn",
        name: "Pac-man",
        title: "Just Pacman",
        desc: "Eat all the food and don't let the ghosts catch you",
        url: 'https://yoavsher.github.io/PacMan',
        publishedAt: Date.now(),
        img: "img/my-photos/pacman.jpg",
        labels: ["Matrixes", "Keyboard events", "Neighbors"]
    },
    {
        id: "gswho",
        name: "Guess who",
        title: "Trying Jquery and Bootstrap",
        desc: "Try to reveal all the numbers without landing on a mine",
        url: 'https://yoavsher.github.io/Guess-who',
        publishedAt: Date.now(),
        img: "img/my-photos/guesswho.jpg",
        labels: ["Decision tree", "Jquery", "Bootstrap"]
    },
    {
        id: "bkstr",
        name: "Book Store",
        title: "Learning CRUDL",
        desc: "You can add, update and remove books",
        url: 'https://yoavsher.github.io/Book-store',
        publishedAt: Date.now(),
        img: "img/my-photos/bookstr.jpg",
        labels: ["CRUDL", "Filter", "Sorting"]
    },
    {
        id: "chss",
        name: "Chess",
        title: "Experiencing neighbors loop",
        desc: "Play Chess, move the tools around",
        url: 'https://yoavsher.github.io/Chess',
        publishedAt: Date.now(),
        img: `"img/my-photos/chess.jpg"`,
        labels: ["Matrix", "Neighbors loop"]
    }
]


function getProjById(projId) {
    const proj = gProjs.find(proj => projId === proj.id)
    return proj
}

function getDate(projId) {
    const proj = getProjById(projId)
    const miliSec = proj.publishedAt
    var fullDate = new Date(miliSec).toString().split(' ').slice(0, 5).join(' ')
    return fullDate
}

function submitMail(email, body, subject) {
    // console.log('email:', email)
    const fullMail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`
    return fullMail
>>>>>>> 275dc4fe4463b2d9a6620a7ab3c5f76119258404
}