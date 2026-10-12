
import './App.css';
import { Header } from './new-components';
import { JobBoard } from './new-components';
import { StyledButton } from './new-components';
import { JobCounter } from './new-components';
import { AdvancedJobCounter } from './new-components';

function App() {
  return (
  <div>
    <Header />
    <JobBoard />
    <StyledButton />
    <JobCounter />
    <AdvancedJobCounter />
  </div>
  )
  
}

export default App;
