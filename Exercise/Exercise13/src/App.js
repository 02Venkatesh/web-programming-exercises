import HelloReact, { HelloReact2, HelloReact3 } from "./HelloReact";
import FruitList from "./FruitList";
import StyledMessage from "./StyledMessage";
import SumOfSquares from "./SumOfSquares";
import Greeting from "./Greeting";
import DayOfWeek from "./DayOfWeek";
import PrimeChecker from "./PrimeChecker";
import TemperatureConverter from "./TemperatureConverter";
import ReverseString from "./ReverseString";
import RandomNumber from "./RandomNumber";
import LeapYearChecker from "./LeapYearChecker";
import UserGreeting from "./UserGreeting";
export default function App() {
  return (
    <div className="App">
      <HelloReact />
      <HelloReact2 />
      <HelloReact3 />
      <FruitList />
      <StyledMessage />
      <SumOfSquares a={5} b={6} />
      <Greeting isMorning={false} />
      <DayOfWeek />
      <PrimeChecker number={5} />
      <TemperatureConverter />
      <ReverseString text={"10101"} />
      <RandomNumber />
      <LeapYearChecker year={"2004"} />
      <UserGreeting firstName="Venkatesh" lastName="B" />
    </div>
  );
}
