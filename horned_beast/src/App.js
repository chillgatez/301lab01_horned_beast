// these lines import components from other files
import { useState } from 'react'
import Header from './header'
import Footer from './footer' //
import Main from './main' //
import SelectedBeast from "./SelectedBeast"
import 'bootstrap/dist/css/bootstrap.min.css';



// this component is where each of the imported components will come together and build the html for the page
function App() {
  const [clickedBeast, setclickedBeast] = useState(false);
  {/* this sets the state for each time an image is selected*/ }
  const [displaySelection, setdisplaySelection] = useState(undefined);
  {/* this sets state to control the display of the modal */ }

  let selectedBeastComponent = <SelectedBeast clickedBeast= {clickedBeast} setclickedBeast = {setclickedBeast}/>;

  if (clickedBeast === false)  {
    selectedBeastComponent = <></>
  };



  return (
    <div className="App">
      <Header />
      {selectedBeastComponent}
      <Main clickedBeast={clickedBeast} setclickedBeast = {setclickedBeast}/>
      <Footer />
    </div>
  );
}

export default App;
