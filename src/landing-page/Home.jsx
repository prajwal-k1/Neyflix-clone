import React from 'react'
import './home.scss'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/banner/Banner'
import MovieList from '../components/movie-list/MovieList'

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <Banner isMovie="moies" />
            <MovieList />
            <MovieList />
            <MovieList />
        </div>
    )
}

export default Home