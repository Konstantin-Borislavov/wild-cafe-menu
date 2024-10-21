import './App.css'
import './css/fonts.css'
import { MorningBoosters } from './components/MorningBoosters'
import { SharetoCare } from './components/ShareToCare'
import { GutInstinct } from './components/GutInstinct'
import { LifeInTechnicolour } from './components/LifeInTechnicolour'
import { Diversity } from './components/Diversity'
import { Desserts } from './components/Desserts'
import { Toggle } from './components/Toggle'


function App() {

  return (
    <>
      <div className='background'>
        <div className='content'>
          <h1>ALL GOOD THINGS
            ARE WILD AND FREE</h1>
          <p>La tierra es el lienzo eterno donde el arte de la
            naturaleza brota colores, aromas y texturas.
            Nosotros rendimos tributo humildemente a
            su trabajo transformándolo en sensaciones,
            momentos... recuerdos.
            Nuestro paso es efímero, mientras el tiempo
            modela la vida, pero no así nuestra huella, la
            cual nos sobrevive y refleja nuestra historia.
            Podemos elegir qué historia ha de contar,
            asegurémonos de que sea una feliz para todos.
            El cambio es posible y necesario.
            Nosotros amamos, nosotros creemos,
            nosotros somos Wild.</p>
          <br />
          <i>The earth is the eternal canvas where the art of
            nature sprouts colours, aromas and textures.
            We humbly pay tribute to its work by transforming it
            into sensations, moments... memories.
            Our step is ephemeral, while time shapes life, but not
            our mark, which survives us and reflects our history.
            We can choose what story it has to tell, let’s make sure
            it’s a happy one for everyone.
            Change is possible and necessary.
            We love, we believe, we are Wild.</i>
            

          <br></br>

          <Toggle title={'MORNING BOOSTERS'}>
            <MorningBoosters />
          </Toggle>
          
          <Toggle title={'SHARE TO CARE'}>
            <SharetoCare />
          </Toggle>
       
          <Toggle title={'GUT INSTINCT'}>
            <GutInstinct />
          </Toggle>

         <Toggle title={'LIFE IN TECHNICOLOUR'}>
            <LifeInTechnicolour /> 
          </Toggle> 
         
          <Toggle title={'DIVERSITY'}>
            <Diversity /> 
          </Toggle>
          
          <Toggle title={'HAPPINESS'}>
            <Desserts />  
          </Toggle>
          
        </div>
      </div>
    </>
  )
} 

export default App
