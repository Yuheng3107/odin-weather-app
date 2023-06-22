import { useEffect, useState } from "react";
import "./App.css";
import BackgroundImage from "./assets/images/Background.jpg";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
function App() {
  const [location, setLocation] = useState("London");
  const [condition, setCondition] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [cloud, setCloud] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const getWeatherData = async (city = "london") => {
    try {
      const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=3998eb0364a3400585253459232206&q=${city}`,
        { mode: "cors" }
      ).then((response) => response.json());
      console.log(data);
      return data;
    } catch (error) {
      // generate error message
    }
  };
  const parseWeatherData = async (data) => {
    console.log(data);
    setCondition(data.current.condition.text);
    setCloud(data.current.cloud);
    setFeelsLike(data.current.feelslike_c);
    setHumidity(data.current.humidity);
    setTemperature(data.current.temp_c);
    setLocation(data.location.name);
  };

  useEffect(() => {
    console.log(BackgroundImage);
    getWeatherData().then((data) => parseWeatherData(data));
  }, []);
  return (
    <div className="flex-col 100 h-full">
      <SearchBar
        getWeatherData={getWeatherData}
        parseWeatherData={parseWeatherData}
      ></SearchBar>
      <Card
        location={location}
        condition={condition}
        temperature={temperature}
        humidity={humidity}
        cloud={cloud}
        feelsLike={feelsLike}
      ></Card>
    </div>
  );
}

export default App;
