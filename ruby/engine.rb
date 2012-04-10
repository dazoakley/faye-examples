require 'faye'
require 'faye-redis'

server = Faye::RackAdapter.new(
  :mount   => '/faye',
  :timeout => 25,
  :engine  => {
    :type  => Faye::Redis,
    :host  => 'localhost',
    :port  => 6379
  }
)
server.listen(8000)
