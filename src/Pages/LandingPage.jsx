import React from 'react'
import Fetch from '../components/Filter/Fetch'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from './LandingPage.module.css'

function LandingPage() {
  return (
    <div className={styles.container}>
      <Header />
      <Fetch />
      <Footer />
    </div>
  )
}

export default LandingPage