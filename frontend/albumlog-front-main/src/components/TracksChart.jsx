import React, { useEffect, useState } from 'react'
import TrackCard from './ui/TrackCard/TrackCard';
import GenreContainer from './ui/TrackCard/GenreContainer';
import ChartPageButtons from './ui/TrackCard/ChartPageButtons';

export default function TracksChart(props) {

    const { pageChart, setPageChart, dataChart, genreChart, setGenreChart, setDataChart } = props;

    return (
    <div className='tracksChart'>
        
        <h1>Top {genreChart} albums</h1>
        
        <GenreContainer setPageChart={setPageChart} setGenreChart={setGenreChart} setDataChart={setDataChart} genreChart={genreChart}/>
        
        {dataChart ? dataChart.map((track, index) => {
            return <TrackCard key={index} trackName={track.name} trackArtist={track.artist.name} trackImage={track.image[3]['#text']} />
        }) : <p>Loading...</p>}
        
        <ChartPageButtons setDataChart={setDataChart} pageChart={pageChart} setPageChart={setPageChart} />
    </div>
  )
}
