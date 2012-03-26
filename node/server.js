var Faye   = require('faye')
var server = new Faye.NodeAdapter({mount: '/faye'})

server.listen(8000)

