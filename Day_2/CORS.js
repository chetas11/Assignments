var request = new XMLHttpRequest()
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com', true)

request.send()


request.onload = function() {
  var data = JSON.parse(this.response)
  console.log(data.domains[0].country)
  
}



  