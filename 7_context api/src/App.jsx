
import Login from './Screens/Login/Login'
import Profile from './Screens/Profile/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
    
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App