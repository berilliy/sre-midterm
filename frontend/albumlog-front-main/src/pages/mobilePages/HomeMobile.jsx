import React from 'react'
import MobileHeader from '../../mobile/mobileComponents/MobileHeader'
import MobileTracksChart from '../../mobile/mobileComponents/MobileTracksChart'

export default function HomeMobile() {

  const [dataChart, setDataChart] = useState(null)
  const [genreChart, setGenreChart] = useState('rock')
  const [pageChart, setPageChart] = useState(1) 

  useEffect(() => {
    fetchChartAPI(setDataChart, genreChart, pageChart)
  }, [genreChart, pageChart])


  return (
    <>
        <MobileHeader />
        <MobileTracksChart />
    </>
  )
}
