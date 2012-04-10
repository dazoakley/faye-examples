var faye       = require('faye')
var faye_redis = require('faye-redis')

var server = new faye.NodeAdapter({
  mount:    '/faye',
  timeout:  45,
  engine:   {
    type:   faye_redis,
    host:   'localhost',
    port:   6379
  }
})
server.listen(8000)
