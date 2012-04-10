var client = new Faye.Client('http://localhost:8000/faye')

$('#new_message').bind('submit',function() {
  var now = new Date()
  var message = {
    content: $('#message').val(),
    timestamp: now.getHours() + ":" + now.getMinutes()
  }

  console.log('publishing message')
  console.log(message)

  client.publish('/messages', message)
  $('#message').val('')
  return false
})

client.subscribe('/messages', function(message) {
  var str = ''

  console.log('got a message')
  console.log(message)

  str += '<li>'
  str += '  <span class="created_at">'+ message.timestamp +'</span>'
  str += '  '+ message.content
  str += '</li>'

  $('#chat').append(str)
})

