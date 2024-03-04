import React from "react";
import styles from "../Info/InfoRender.module.css"

export default function RenderedInfo({data,formatTime,currentTime,icon}){
  return(
    <div className={styles.centeredInfo}>
      <picture className={styles.imgContainer}>
        <img src={`./src/assets/icons/${icon}@2x.png`} alt="icon" />
      </picture>
      <article>
        <h1>
          {data.main && data.main.temp} &deg;C
          <br />
          {data.name && data.name}
        </h1>
        <section style={{paddingTop: 40}}>
          <p> <b>Feels Like:</b> {data.main && data.main.feels_like}&deg;C</p>
          <p> <b>Windspeed:</b> {data.wind && data.wind.speed} km/h</p>
          <p> <b>Current Time:</b> {formatTime(currentTime)}</p>
          <p> <b>At {data.name && data.name} the temp is:</b> {data.main && data.main.temp}&deg;C</p>
          <p> <b>Weather:</b> {data.weather && data.weather[0].main}</p>
          <p> <b>Description:</b> <i>" {data.weather && data.weather[0].description} "</i></p>
        </section>
      </article>
    </div>
  )
}