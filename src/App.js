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
    <div className='App'>
      <Toggle title = {'Morning Boosters'}>
        <MorningBoosters/>
      </Toggle>

      <Toggle title = {'Share to Care'}>
        <SharetoCare/>
      </Toggle>

      <Toggle title = {'Gut Instinct'}>
        <GutInstinct/>
      </Toggle>
       
      <Toggle title = {'Life in Techcolour'}>
        <LifeInTechnicolour/>
      </Toggle>

      <Toggle title = {'Diversity'}>
        <Diversity/>
      </Toggle>
      
      <Toggle title = {'Desserts'}>
        <Desserts/>
      </Toggle>
    </div>
  );
}

export default App;
