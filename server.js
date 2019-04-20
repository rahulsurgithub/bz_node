const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res)
{
    res.send('Hello World!')
})

app.get('/login', function(req, res)
{
    res.json({ 'name': 'rahul', 'age': '10 years' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))