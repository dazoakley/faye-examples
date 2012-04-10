var Faye   = require('faye')
var client = new Faye.Client('http://localhost:8000/faye')

// subscribe to a channel
client.subscribe('/messages', function(message) {
  console.log('We got a message: ' + message.text)
})

// publish to a channel
client.publish('/messages', {
  text: 'HAI!'
})

