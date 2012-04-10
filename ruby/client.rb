require 'faye'
require 'eventmachine'

EM.run {
  client = Faye::Client.new('http://localhost:8000/faye')

  # subscribe to a channel
  client.subscribe('/messages') do |message|
    puts message.inspect
  end

  # publish to a channel
  client.publish('/messages', { 'text' => 'HAI!' })
}

