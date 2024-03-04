import React, { useEffect, useState } from "react";
import RenderedInfo from "../Info/InfoRender";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import styles from "../Filter/Filter.module.css";

export default function Fetch() {
  const [data, setData] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("01d")

  const fetchData = async (city) => {
    if(!city) return;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a87078e77055e55eda219d112b3fb471&units=metric`
      );
      console.log(res.data);
      setData(res.data);
      iconChanger(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const enableSubmitButton= (e) => {
    const SubmitButton = document.querySelector("#buttonToSubmit");
    SubmitButton.disabled = e ? false : true; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData(city);
  };

  useEffect(() => {
    fetchData("Berlin");
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (timestamp) => {
    const options = { hour: "numeric", minute: "numeric", hour12: false };
    return new Date(timestamp).toLocaleTimeString("en-US", options);
  };

  const iconChanger = (data) => {
    if (data.weather && data.weather[0]) {
      const newIcon = data.weather[0].icon;
      setIcon(newIcon);
    }
  };
  
  
  return (
    <div className={styles.backgroundContainer}>
      <section className={styles.container}>
      <SearchBar
        handleSubmit={handleSubmit}
        city={city}
        setCity={setCity}
        enableSubmitButton={enableSubmitButton}
      />
      <RenderedInfo 
        data={data}
        formatTime={formatTime}
        currentTime={currentTime}
        icon={icon}
      />
      </section>
    </div>
  );
}
