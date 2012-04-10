var Faye   = require('faye')
var server = new Faye.NodeAdapter({ mount: '/faye' })
server.listen(8000)

server.bind('handshake', function(client_id) {
  console.log("[handshake] - client: '"+ client_id +"'")
})

server.bind('subscribe', function(client_id, channel) {
  console.log("[subscribe] - client: '"+ client_id +"', channel: '"+ channel +"'")
})

server.bind('unsubscribe', function(client_id, channel) {
  console.log("[unsubscribe] - client: '"+ client_id +"', channel: '"+ channel +"'")
})

server.bind('publish', function(client_id, channel, data) {
  console.log("[publish] - client: '"+ client_id +"', channel: '"+ channel +"'")
  console.log("[publish] - data:")
  console.log(data)
})

server.bind('disconnect', function(client_id) {
  console.log("[disconnect] - client: '"+ client_id +"'")
})
