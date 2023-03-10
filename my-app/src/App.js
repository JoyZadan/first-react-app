// import logo from './logo.svg';
// import './App.css';
// import FunctionalGreeting from "./components/FunctionalGreeting";
// import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";

// function App() {
//     return (
//         <div className="App">
//             {/* This component is totally independent and won't have
//             any other content except what it renders itself, so it
//             doesn't need a closing tag, we just close it with a space slash */}
//             {/* <FunctionalGreeting /> */}
//             <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
//         </div>
//     );
// }

// export default App;
import css from './App.module.css';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
    </div>
  );
}

export default App;