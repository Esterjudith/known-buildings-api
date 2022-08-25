const express = require('express')
const app = express()
const PORT = 8000

const buildings = {

 'empire state building': {
  'city': 'New York City',
  'country': 'USA',
  'built': 1930
 },

 'taj mahal': {
  'city': 'Agra',
  'country': 'India',
  'built': 1632
 },

 'eiffel tower': {
  'city': 'Paris',
  'country': 'France',
  'built': 1889
 },

 'unknown': {
  'city': 'unknown',
  'country': 'unknown',
  'built': 0
 }
}



app.get('/', (request, response) => {
 response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
 const buildingName = request.params.name
 if (buildings[buildingName]) {
  response.json(buildings[buildingName])
 } else {
  response.json(buildings['unknown'])
 }

})

app.listen(PORT, () => {
 console.log(`The port is now running on port ${PORT}`)
})