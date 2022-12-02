import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['s', '7', 'r', 'g', 'g', 'l', 'r',' ','c','o','d','e','s',' ','f','o','r',' ','f','u','n']
  const profileArray = ['Competitive Programmer','Web Developer','Avid Gamer']

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>Hi there !<br /> I'm Mohit
          </h1>
          <h2>
          <AnimatedLetters
              letterClass={letterClass}
              strArray={profileArray}
              idx={100}
            />
            </h2>
            <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            </h2>
          <Link to="/about" className="flat-button">
            ABOUT ME
          </Link>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home