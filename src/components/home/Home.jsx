import React from 'react'
import './home.css';

const Home = () => {
  return (
    <section className='home section'>
        <div className='home__container container grid'>
            <div className='header_elements'>
                {/* In Progress */}
            </div>

            <div className='home__content grid'>
                <h1 className='home__title'>Under Construction</h1>
                <p className='home__desc'>Hello! I'm currently working on rebranding my site to provide a better experience. As a frontend developer and UX/UI designer, I'm dedicated to making it look and work beautifully. Thank you for your patience - exciting updates are coming soon!</p>
            </div>
        </div>
       
    </section>
  )
}

export default Home