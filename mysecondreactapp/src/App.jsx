// Use this file as your main App file
// Add the additional files based on your imports

// Add Imports
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./css/ui.css"
import Clock from "./components/Clock"

function App() {

  return (
    <>
      <Header/>      
      <main>
        <Clock/>         
      </main>
      <Footer/>
    </>
  )
}

// By default, we export the main function of the component
// Best practice is to use the same name throughout
export default App