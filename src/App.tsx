import './App.css'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div className='flex flex-row h-full w-full'>
      
        <Sidebar />
        

        <Feed />


      </div>
    </>
  )
}

export default App
