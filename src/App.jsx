import './App.css'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import './App.css'
import Form from './components/Form'
import './App.css'
import Images from './components/Images'
import './App.css'
import List from './components/List'

function List( {titulo}) {
  return ( <h2>{titulo}</h2>
    <>
    <Header />
         
      {/* <!-- Corpo da página --> */}
      <main>
    
       <Form />
        <Images />
         <List />
   

  

      </main>

     <Footer />
     </>
   
    


  )
}

export default App
