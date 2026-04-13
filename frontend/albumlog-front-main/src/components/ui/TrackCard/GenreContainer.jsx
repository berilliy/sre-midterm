import React, { useState } from 'react'
import GenreButtons from './GenreButtons';

export default function GenreContainer(props) {
  
    const { setPageChart, setGenreChart, setDataChart, genreChart } = props;
    
    return (
    <div className="genreContainer">
        <GenreButtons setPageChart={setPageChart} genreChart={genreChart} setGenreChart={setGenreChart} setDataChart={setDataChart}>Rock</GenreButtons>
        <GenreButtons setPageChart={setPageChart} genreChart={genreChart} setGenreChart={setGenreChart} setDataChart={setDataChart}>Pop</GenreButtons>
        <GenreButtons setPageChart={setPageChart} genreChart={genreChart} setGenreChart={setGenreChart} setDataChart={setDataChart}>Indie</GenreButtons>
        <GenreButtons setPageChart={setPageChart} genreChart={genreChart} setGenreChart={setGenreChart} setDataChart={setDataChart}>Rap</GenreButtons>
        <GenreButtons setPageChart={setPageChart} genreChart={genreChart} setGenreChart={setGenreChart} setDataChart={setDataChart}>Hip-Hop</GenreButtons>
    </div>
  )
}
