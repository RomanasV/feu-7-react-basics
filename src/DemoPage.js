import logo from './images/logo.svg';

function DemoPage() {
  const paragraphText = 'Cia yra paragrafas';
  
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{paragraphText}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Labas
      </a>

      <p>Cia dar vienas paragrafas</p>
      <ul>
        <li>Vienas</li>
        <li>Du</li>
        <li>Trys</li>
      </ul>

      <form>
        <label htmlFor="person-name">Name:</label>
        <input type="type" id="person-name" name="name" />
      </form>
    </header>
  )
}

export default DemoPage;