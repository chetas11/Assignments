var request = new XMLHttpRequest()
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Mumbai,india&appid=yourAPIKey', true)

request.send()


request.onload = function() {
  var data = JSON.parse(this.response)
  console.log(data.name)
  
}
  