import React from 'react'
import MainCarausel from '../../component/HomeCarausel/MainCarausel'
import HomeSectionCarausel from '../../component/HomeSectionCarausel/HomeSectionCarausel'
import SolarCal from './SolarCal'
import HomeSectionCarauselBifacial from '../../component/HomeSectionCarausel/HomeSectionCarauselBifacial'
import ReviewCardCarausel from '../../component/HomeSectionCarausel/ReviewCardCarausel'
import WinBanner from '../../component/Footer/WinBanner'

const HomePage = () => {
  return (
    <div>
        <MainCarausel/>
        
   <SolarCal/>
    <div>
      <HomeSectionCarausel/>
      <HomeSectionCarauselBifacial/>
      <ReviewCardCarausel/>
      <WinBanner/>
    </div>

    </div>
  )
}

export default HomePage