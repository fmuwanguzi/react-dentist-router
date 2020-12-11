import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Procedures from './components/Procedures';
import Nav from './components/Nav'
import ProcedureDetails from './components/ProcedureDetails'

import './App.css';

function App() {
  const proceduresList = [
    {
      name: 'Roor Canal',
      id: 1,
      dedcription: 'Very Paintful'
    },
    {
      name: 'Crown',
      id: 2,
      description: 'awful'
    },
    {
      name: 'cleaning',
      id: 3,
      description: 'not bad' 
    },
  ]


  return (
    <BrowserRouter>
    <div className="App">
      <Nav />

      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route 
      exact 
      path="/procedures" 
      render={()=> {return <Procedures
      proceduresList={proceduresList} /> }} 
      />  
      <Route 
      path="procedures/:id" 
      render={(routeInfo) => {
        const id = routeInfo.match.params.id
        const targetProcedure = proceduresList.find((p)=> p.id === parseInt(id))
        return <ProcedureDetails procedure={targetProcedure}/>
      }} 
      />
    </div>
    </BrowserRouter>
  );
}

export default App;
