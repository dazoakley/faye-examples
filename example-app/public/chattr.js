var client = new Faye.Client('http://localhost:8000/faye')

// Publish a message...
$('#new_message').bind('submit',function() {
  var now     = new Date()
  var message = {
    content: $('#message').val(),
    timestamp: now.getHours() + ":" + now.getMinutes()
  }

  client.publish('/messages', message)
  $('#message').val('')
  return false
})

// Subscribe to message feed...
client.subscribe('/messages', function(message) {
  var str = ''
  str += '<li>'
  str += '  <span class="created_at">'+ message.timestamp +'</span>'
  str += '  '+ message.content
  str += '</li>'

  $('#chat').append(str)
})
