import React from 'react'
import 'common/common.scss'
import HeaderComponent from 'UI/Header/HeaderComponent'
import UsersContainer from 'Users/UsersContainer'

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <UsersContainer />
    </div>
  )
}

export default App
