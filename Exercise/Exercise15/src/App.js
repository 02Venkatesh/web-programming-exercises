import { useState } from "react";
import Header from "./Header"; 
import Footer from "./Footer";
import Content from "./Content";
import StyledButton2 from "./StyledButton2";
import FocusInputForm from './FocusInputForm';
import StyledButton from './StyledButton';
import Parent from './Parent';
import StateForm from './StateForm';
import RefForm from './RefForm';
import StyledButton1 from './StyledButton1';
import { ThemeProvider } from "./ThemeContext";
import parent1 from './parent1';
import ThemeToggleButton from "./ThemeToggleButton";
import ThemedComponent from "./ThemedComponent";
import LifecycleDemo from './LifecycleDemo';
import JokeFetcher from './JokeFetcher';
import Counter from './Counter'; // useState version
import CounterReducer from './CounterReducer'; // useReducer version
import "./index.css"
function App() {
  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(prev => !prev);
  };
  const handleClick = () => {
    alert('Styled Button Clicked!');
  };
  return (
    <div className="App">
      <div className="first">
      <Header title="Welcome to the Joke App!" />
      <Content />
      <Footer />
</div>
<div className="second">
<h2>Styled Button Example</h2>
<StyledButton label="Click Me" onClick={handleClick} />
</div>
<div className="third">
<h2>Styled Button Example</h2>
<StyledButton1 label="Click Me" onClick={handleClick} />
</div>
<div className="fourth">
<h2>Styled Button Example</h2>
<StyledButton2 label="Click Me" onClick={handleClick} />
</div>
<div className="fifth">
<h2>React Lifecycle Methods</h2>
      <button onClick={toggleComponent}>
        {showComponent ? 'Unmount LifecycleDemo' : 'Mount LifecycleDemo'}
      </button>

      {showComponent && <LifecycleDemo />}
</div>
<div className="sixth">
<Counter />
      <hr />
      <CounterReducer />
</div>
<div className="seventh">
<h2>useEffect Joke Fetcher</h2>
<JokeFetcher />
</div>
<div className="eighth">
<h2>useRef Example</h2>
<FocusInputForm />
</div>
<div className="ninth">
<ThemeProvider>
      <div className="App">
        <h1>React Theme Toggle with useContext</h1>
        <ThemeToggleButton />
        <ThemedComponent />
      </div>
    </ThemeProvider>
</div>
<div className="tenth">
<h1>React Props Example</h1>
<Parent />
</div>
<div className="eleventh">
  <h1>React Props Example</h1>
        <parent />
</div>
<div className="twelfth">
<StateForm />
      <hr />
      <RefForm />
</div>

    </div>
  );
}

export default App;
