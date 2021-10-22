import React from 'react'
import {Redirect, useHistory, useLocation} from 'react-router-dom'

import './HomePage.css'

import tabs from '../tabs/tabs'

import TabContainer from '../tabs/TabContainer'

function HomePage() {
  const history = useHistory()
  const location = useLocation()

  /**
   * TODO: remove console.log
   */
  console.log('location: ', location)

  const category = location?.hash?.slice(1)

  const onTabClick = tabId => {
    history.push(`#${tabId}`)
  }

  if (!category?.length) return <Redirect to={`${location.pathname}#${tabs[0].id}`} />

  return (
    <div
      className='home-page'
      style={{backgroundColor: tabs.find(tab => tab.id === category).color}}
    >
      <div className='home-page-content'>
        <TabContainer tabs={tabs} activeTabId={category} onTabClick={onTabClick} />
      </div>
    </div>
  )
}

export default HomePage
