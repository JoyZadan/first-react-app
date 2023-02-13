import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";

function App() {
    return (
        <div className="App">
            {/* This component is totally independent and won't have
            any other content except what it renders itself, so it
            doesn't need a closing tag, we just close it with a space slash */}
            <FunctionalGreeting />
        </div>
    );
}

export default App;
