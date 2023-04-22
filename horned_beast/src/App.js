// these lines import components from other files
import Header from './header' //
import Footer from './footer' //
import Main from './main' //


// this component is where each of the imported components will come together and build the html for the page
function App() {
  return (
    <div className="App">
      <Header/> 
      <Main/> 
      <Footer/>
    </div>
  );
}

export default App;
