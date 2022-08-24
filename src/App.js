
import "./App.scss";
import { AuthTemplate } from "./Templates/AuthTemplate";
import { SignUp } from "./Pages/SignUp";

function App() {
  return (
    <main>
      <AuthTemplate>
        <SignUp />
      </AuthTemplate>
    </main>
  );
}

export default App;
