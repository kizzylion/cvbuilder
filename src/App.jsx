import "./app.scss";
import TemplatePaper from "./component/template/template";
import Header from "./component/header/header";
import { ProgressBar } from "./component/progressbar/progressbar";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ProgressBar />
    </div>
  );
}
