import React , { useState } from 'react'
import styles from './Tab.module.css'

const Tabs = (props) =>  {
  const {header , content} = props
  const Tab1 = {header: "Tab1", content:"Tab's 1 content is showing here ..."}
  const Tab2 = {header: "Tab2", content:"Tab's 2 content is showing here ..."}
  const Tab3 = {header: "Tab3", content:"Tab's 3 content is showing here ..."}

  const tabs = [Tab1, Tab2, Tab3 ] 

  const [activeTab, setActiveTab] = useState(Tab1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className={styles.header}>
        {tabs.map((tab, index) => (
          <button key={index} className={styles.head} onClick={() => handleTabClick(tab)}>{tab.header}</button> ))}
      </div>
      <div className={styles.content}>
        {activeTab.content}
      </div>
    </div>
  )
}

export default Tabs