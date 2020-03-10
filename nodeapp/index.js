const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'pug')
// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/view-with-pug', function (req, res) {
    res.render('index', { title: 'Hola ', message: 'Hola Andres!' })
  })

  app.get('/products', function (req, res) {
    res.render('products')
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))