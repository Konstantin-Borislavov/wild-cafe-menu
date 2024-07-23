import './App.css';
import { Toggle } from './components/Toggle';
import { MorningBoosters } from './components/MorningBoosters';
import { SharetoCare } from './components/ShareToCare';
import { GutInstinct } from './components/GutInstinct';
import { LifeInTechnicolour } from './components/LifeInTechnicolour';
import { Diversity } from './components/Diversity';
import { Desserts } from './components/Desserts';

function App() {
  return (
    <div>
      <Toggle>
        <MorningBoosters/>
      </Toggle>

      <Toggle>
        <SharetoCare/>
      </Toggle>

      <Toggle>
        <GutInstinct/>
      </Toggle>
       
      <Toggle>
        <LifeInTechnicolour/>
      </Toggle>

      <Toggle>
        <Diversity/>
      </Toggle>
      
      <Toggle>
        <Desserts/>
      </Toggle>
    </div>
  );
}

export default App;
