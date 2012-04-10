require 'faye'

server = Faye::RackAdapter.new(:mount => '/faye')
server.listen(8000)

