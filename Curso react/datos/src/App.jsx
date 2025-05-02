import StaticComponent from './components/staticComponents/StaticComponent'
import UserList from './components/UserList/UserList'
import './App.css'
import UserListHook from './components/UserListCustomHook/UserListHook'
import SearchPost from './components/searchPost/searchPost'

function App() {

  return (
    <>
      <SearchPost />
      <StaticComponent />
      <UserList />
      <UserListHook />
    </>
  )
}

export default App
