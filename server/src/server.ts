import express from 'express'

const app = express()

app.get('/users', (resquest, response) => {
  console.log('listagem de usuarios')
  response.json([
    'Eduardo',
    'Pri',
    'Hulk',
    'Chew'
  ])

})

app.listen(3333)
