import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('New York');
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: '',
    humidity: '',
    minTemperature: '',
    weatherIcons: '',
    desc: '',
  });

  useEffect(() => {
    // fetchData()
    fetchData(search)
  }, []);

  const fetchData = async (city) => {
    try{
    const APIKEY = '02ff729d3a221b48e9dbed52ca68642c'
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`);
    await setAllData({
      city: result.data.name,
      country: result.data.sys.country,
      temperature: result.data.main.temp,
      humidity: result.data.main.humidity,
      minTemperature: result.data.main.temp_min,
      weatherIcons: result.data.weather[0].icon,
      desc: result.data.weather[0].description,
    })
    } catch (e) {
      console.log('API not loaded correctly or loaded for the first time');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    fetchData(search)
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
    // console.log(search);
  }

  return(
    <main>
      <div >
        <form className="form" onSubmit={handleSubmit}>
        <div style={{textAlign: "right", color: "white"}}>
          Weather app
        </div>
          <input 
            type="text"
            name="city"
            placeholder="Location"
            value={search}
            onChange={handleChange}
          />
          <button for='city'>Search</button>
          
        </form>
        <section>
          <div className="header-div">
            <img alt=" " src={`http://openweathermap.org/img/wn/${allData.weatherIcons}@2x.png`} />
            <br />
            {allData.desc}
            <h1 className="title">{allData.city}</h1>
            <h2 className="location">{allData.country}</h2>

            <div className="weather-description">
              <div>
              <h3>Temperature</h3>
              <p>{allData.temperature}°C</p>
              </div>
              <div>
                <h3>Minimun Temperature</h3>
                <p>{allData.minTemperature}</p>
              </div>
              <div>
                <h3>Humidity</h3>
                <p>{allData.humidity}%</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;

// for icons
// https://openweathermap.org/weather-conditions
// http://openweathermap.org/img/wn/10d@2x.png