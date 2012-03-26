var Faye   = require('faye')
var server = new Faye.NodeAdapter({mount: '/'})

server.listen(8000)

