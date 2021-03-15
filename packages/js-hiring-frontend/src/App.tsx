import React, { useState, useEffect } from 'react'
import './App.css'

// components
import AddItem from './components/AddItem'
import KanbanBoard from './components/KanbanBoard'

// services
import KanbanService from './services/KanbanService'

const App = () => {
  const [itemsData, setItemsData] = useState([])

  // Load item data from DB
  useEffect(() => {
    KanbanService.getItems().then((res) => {
      setItemsData(res.data)
    })
  }, [])

  return (
    <div>
      <AddItem setItemsData={setItemsData} />
      <KanbanBoard itemsData={itemsData} setItemsData={setItemsData} />
    </div>
  )
}

export default App
