import React, {useState} from 'react'

import './TabContainer.css'

const TabContainer = ({tabs, activeTabId, onTabClick, defaultIndex = 0}) => {
  const [idActiveTab, setIdActiveTab] = useState(activeTabId ?? tabs[defaultIndex].id)

  const handleTabClick = tabId => {
    setIdActiveTab(tabId)
    onTabClick(tabId)
  }

  return (
    <div className='tab-container'>
      <ul className='tab-list' role='tablist'>
        {tabs.map(tab => {
          const isActiveTab = tab.id === idActiveTab
          const tabWidth = isActiveTab
            ? `calc(1rem + 1.5rem + 1rem + ${tab?.label?.length ?? 0}ch + 1rem)`
            : 'calc(1rem + 1.5rem + 1rem)'

          return (
            <li
              key={tab.id}
              className={'tab' + (isActiveTab ? ' active' : '')}
              role='presentation'
              style={{width: tabWidth}}
              onClick={() => handleTabClick(tab.id)}
            >
              <span
                className='tab-background'
                style={{background: isActiveTab ? tab.color : 'none'}}
              />

              <span className='tab-icon' style={{fill: isActiveTab ? tab.color : 'black'}}>
                {tab.icon}
              </span>

              <span className='tab-label' style={{color: isActiveTab ? tab.color : 'none'}}>
                {tab.label}
              </span>
            </li>
          )
        })}
      </ul>

      {tabs.map(tab => (
        <tab.content key={tab.id} id={`${tab.id}-content`} active={tab.id === idActiveTab} />
      ))}
    </div>
  )
}

export default TabContainer
