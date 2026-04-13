import React from 'react'
import styles from '../../mobileStyles.module.css'; 

export default function MobileTracksChart() {

    const { pageChart, setPageChart, dataChart, genreChart, setGenreChart, setDataChart } = props;

    return (
        <div className={styles.mobileTracksChart}>
        
        <h1>Top {genreChart} albums</h1>
        
        <GenreContainer setPageChart={setPageChart} setGenreChart={setGenreChart} setDataChart={setDataChart} genreChart={genreChart}/>
        
        {dataChart ? dataChart.map((track, index) => {
            return <TrackCard key={index} trackName={track.name} trackArtist={track.artist.name} trackImage={track.image[3]['#text']} />
        }) : <p>Loading...</p>}
        
        <ChartPageButtons setDataChart={setDataChart} pageChart={pageChart} setPageChart={setPageChart} />
    </div>
  )
}
