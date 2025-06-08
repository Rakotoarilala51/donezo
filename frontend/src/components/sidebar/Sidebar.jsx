import React from 'react'
import AccountToggle from './AccountToggle'
import RouteSelect from './RouteSelect'
import SharedPage from './SharedPage'
import PrivatePage from './PrivatePage'

const Sidebar = () => {
  return (
    <div>
      <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
        <AccountToggle/>
        <RouteSelect/>
        <SharedPage/>
        <PrivatePage/>
      </div>
    </div>
  )
}

export default Sidebar