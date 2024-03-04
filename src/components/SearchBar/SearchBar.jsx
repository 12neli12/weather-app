import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import styles from "../SearchBar/SearchBar.module.css"

export default function SearchBar({handleSubmit,city,enableSubmitButton,setCity}){
  return(
    <form onSubmit={(e) => handleSubmit(e)} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onInput={(e) => enableSubmitButton(e.target.value)}
        onChange={(e) => setCity(e.target.value)}
      />
      <FaLocationCrosshairs className={styles.icon}/>
    </form>
  )
}