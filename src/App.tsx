
import reactLogo from './assets/1.jpg'
import viteLogo from '/2.jpeg'
import './App.css'

function App() {
 
  return (
    <>
      <h1>Roberto Antonio Restrepo Builes</h1>
      <div className="card">

        <section id="seleccionar-mascota">
      <h1 className="titulo">MOKEPON! 🔥 🌊 🌴</h1>
      <h2 className="subitulo">Eligue tu mascota:</h2>
      <h3 id="tituloh3">Debes escoger una mascota para iniciar</h3>

      <div className="tarjetas">
        <label className="tarjeta-de-mokepon" htmlFor="hipodoge">
            <p>Hipodoge </p>
            <img src={viteLogo} alt="Hipodoge"/>
        </label >
        <input type="radio" name="mascota" id="hipodoge" />

        <label className="tarjeta-de-mokepon" htmlFor="capipepo">
            <p>Capipepo </p>
            <img src={reactLogo} alt="Capipepo"/>
        </label>
        <input type="radio" name="mascota" id="capipepo" />

        <label className="tarjeta-de-mokepon" htmlFor="ratigueya">
            <p>Ratigueya </p>
            <img src={viteLogo} alt="Ratigueya"/>
        </label>
        <input type="radio" name="mascota" id="ratigueya" />
      </div>

    </section>

    <section id="seleccionar-ataque">
      <h1 className="titulo">MOKEPON! 🔥 🌊 🌴</h1>
      <h2>Eligue el ataque:</h2>

      <p>
        Tu mascota <span id="mascota-jugador"></span> tiene
        <span id="vidas-jugador">3</span> vidas
      </p>

      <p>
        La mascota <span id="mascota-enemigo"></span> del enemigo tiene
        <span id="vidas-enemigo">3</span> vidas
      </p>

    </section>
    <section id="mensajes">
    </section>

      </div>
    </>
  )
}

export default App
