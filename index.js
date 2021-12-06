const express = require('express');
const app = express();

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get('/', (req, res) => {
    res.send('Authors API');
});

app.get('/authors/:id', (req, res) => {
    const {id} = req.params
    res.send(`${authors[id].name}, ${authors[id].nationality}`)
});

app.get('/authors/1/books/', (req, res) => {
    res.send(`${books}`)
});

app.get('/json/authors/:id', (req, res) => {
    res.json({
        name: "Lawrence Nowell",
        nationality: "UK"
    })
});

app.get('/json/authors/:id/books', (req, res) =>{
    res.json({
        books: ["Beowulf"]
})
})

const port = 5000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
