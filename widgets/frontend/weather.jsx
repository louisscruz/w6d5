import React from 'react';

class Weather extends React.Component {
  componentDidMount() {
    this.getWeather();
  }

  constructor() {
    super()
    this.state = {
      location: navigator.geolocation,
      city: null,
      temp: null
    }
  }

  getWeather() {
    const xml = new XMLHttpRequest();

    xml.onreadystatechange = () => {
      if (xml.readyState == XMLHttpRequest.DONE) {
        if (xml.status === 200) {
          const weather = JSON.parse(xml.responseText);
          const temp = (weather.main.temp - 273.15) * 1.8 + 32;
          this.setState({ temp: temp, city: weather.name });
        }
      }
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=4b3fd793d73d4242699de56dc9dd404e
`;
    xml.open("GET", url, true);
    xml.send();
  }

  render() {
    let template;
    if (this.state.city === null || this.state.temp === null) {
      template = (
        <h3>Loading...</h3>
      );
    } else {
      template = (
        <div>
          <h3>{this.state.city}</h3>
          <h3>{Math.round(this.state.temp)}°</h3>
        </div>
      )
    }
    // console.log(this.state.location.getCurrentPosition());
    return (
      <div className="weather">
        {template}
      </div>
    )
  }
}

export default Weather;
