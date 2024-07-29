import { BrowserRouter, Routes , Route, Link } from 'react-router-dom';
import './App.css';
import Greet from './PracticeComp/Greet'
import Greet1 from './PracticeComp/Greet1'
import CounterApp from './PracticeComp/CounterApp'
import MyComponent from './PracticeComp/FunctionalCom'
import MyClassComponent from './PracticeComp/ClassComp';
import ClassLifeCycle from './PracticeComp/ClassLife';
import FunctionalLifeCycle from './PracticeComp/FunctionalLife';
import FormPage from './pages/FormPage/FormPage';
import Child from './PracticeComp/ParentChild';
import MuiPrac from './PracticeComp/MuiPrac';
import MuiText from './PracticeComp/MuiText';
import Product from './PracticeComp';
import FunctionalLifeCycleMethod from './PracticeComp/LifeCycleMethods';


const NavBar= () =>{
  return(
    <nav>
      <ul>
        <li><Link to="/greet">With JSX</Link></li>
        <li><Link to="/greet1">Without JSX</Link></li>
        <li><Link to="/counterapp">Virtual DOM</Link></li>
        <li><Link to="/mycomponent">FunctionalComponent</Link></li>
        <li><Link to="/myclasscomponent">ClassComponent</Link></li>
        <li><Link to="/classlifecycle">ClassLifeCycle</Link></li>
        <li><Link to="/functionallife">FunctionalHooks</Link></li>
        <li><Link to="/formpage">Atomicstructure</Link></li>
        <li><Link to="/parentChild">Child to Parent</Link></li>
        <li><Link to="/MuiPractice">Mui Components</Link></li>
        <li><Link to="/MuiTextField">Mui TextFields</Link></li>
        <li><Link to="/ProductDetails">Product</Link></li>
        <li><Link to="/LifeCycle">FunctionalLifeCycle</Link></li>
      </ul>
    </nav>
  )
}
function App() {
  const getData = (data : string) => {
    console.log(data);

  }
  return (    
    <div className="App">
      
      <BrowserRouter>
      < NavBar />
      <Routes>
        <Route path="/greet" element={<Greet />} />
        <Route path="/greet1" element={<Greet1 />} />
        <Route path="/counterapp" element={<CounterApp />} />
        <Route path="/mycomponent" element={<MyComponent name="FunctionalBasedComponent" />} />
        <Route path="/myclasscomponent" element={<MyClassComponent name="ClassBasedComponent" />} />
        <Route path="/classlifecycle" element={<ClassLifeCycle />} /> 
        <Route path="/functionallife" element={<FunctionalLifeCycle />} /> 
        <Route path="/formpage" element={< FormPage /> } /> 
        <Route path="/parentChild" element={<Child getData={getData} />} />
        <Route path="/MuiPractice" element={<MuiPrac />} />
        <Route path="/MuiTextField" element={<MuiText />} />
        <Route path="/ProductDetails" element={<Product name="ABC" id={1} description='It helps' />} />
        <Route path="/LifeCycle" element={<FunctionalLifeCycleMethod />} />
        
        
      </Routes>
      </BrowserRouter>
      
      
      
      
      
      
      
       
    </div>
    
    
  );
}

export default App;