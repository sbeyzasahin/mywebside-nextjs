import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import style from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <div className={style.content}>
      <img className="image" src="/icon.png" />
      <h1 className={style.title}>Welcome, my page!</h1>
      <p className={style.text}>Here, I will share my works that I do with passion and the positive reflections of life on me in sweet content. </p>
      <p className={style.text}>Enjoy!</p>
    </div>
  )
}

export default Home
