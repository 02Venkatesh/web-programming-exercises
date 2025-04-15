import LoginForm from "./LoginForm";
import ProfilePage from "./ProfilePage";
import PublicImage from "./PublicImage";
import SrcImage from "./SrcImage";

function App() {
  return (
    <div className="App">
      <div className="first">
        <PublicImage />
        <SrcImage />
      </div>
      <div className="second">
        <LoginForm />
      </div>
      <div className="third">
        <ProfilePage />
      </div>
    </div>
  );
}

export default App;
