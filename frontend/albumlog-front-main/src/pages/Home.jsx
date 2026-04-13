import { useEffect, useState } from "react"
import HeaderSite from "../components/HeaderSite.jsx"
import TracksChart from "../components/TracksChart.jsx"
import fetchChartAPI from "../tools/fetchChartAPI.js"
import RecentReviews from "../components/RecentReviews.jsx"
import FooterSite from "../components/FooterSite.jsx"

function Home() {

  const [dataChart, setDataChart] = useState(null)
  const [genreChart, setGenreChart] = useState('rock')
  const [pageChart, setPageChart] = useState(1) 

  useEffect(() => {
    fetchChartAPI(setDataChart, genreChart, pageChart)
  }, [genreChart, pageChart])

  return (
    <>
      <HeaderSite />
      <div className="content">
        <TracksChart pageChart={pageChart} setPageChart={setPageChart} setDataChart={setDataChart} dataChart={dataChart} genreChart={genreChart} setGenreChart={setGenreChart} />
        <RecentReviews />
      </div>
      <FooterSite />
    </>
  )
}

export default Home
