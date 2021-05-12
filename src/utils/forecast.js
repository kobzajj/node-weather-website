const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=e3f65d4129cc04cfb997e758c201e5f6&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json:true}, (error, {body}) => {
      if (error) {
        callback('Unable to connect to weather services')
      } else if (body.error) {
        callback('Unable to find location. Try another search.')
      } else {
        callback(undefined,
           body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + "%."
        )
    }
  })
}

module.exports = forecast

// const url = 'http://api.weatherstack.com/current?access_key=e3f65d4129cc04cfb997e758c201e5f6&query=37.8267,-122.4233&units=f'
//
// request({ url : url, json : true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out')
//   }
// })
