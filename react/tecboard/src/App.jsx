import './App.css'

function FormularioDoEvento() {
  return (
    <form className="form-evento">
      <h2>preencha para criar um evento</h2>
      <fieldset>
        <label htmlFor="">qual e o seu nome</label>
        <input type="text" name="nome" id="Sumer devs hits" />
      </fieldset>
    </form>
  )
}

function App() {

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="./banner.png" alt="" />
      </section>
      <FormularioDoEvento>
        
      </FormularioDoEvento>
    </main>
  )
}

export default App
