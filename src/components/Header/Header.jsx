import React from "react";
import TextAnimation from "./TextAnimation";
import styles from "../Header/Header.module.css"

export default function Header(){
  const title ="Nimbus".split("")
  return(
    <div className={styles.title}>
      {title.map((letters,index)=>{
        return(
          <div className={styles.animatedTitle} key={index}>
            <TextAnimation>
              {letters}
            </TextAnimation>
          </div>
        )
      })}
    </div>
  )
}