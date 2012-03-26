var Faye   = require('faye')
var client = new Faye.Client('http://localhost:8000/faye')

client.subscribe('/messages', function(message) {
  console.log('We got a message: ' + message.text)
})

client.publish('/messages', {
  text: 'HAI!'
})

