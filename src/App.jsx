import { useState } from "react";
import "./app.scss";
import TemplatePaper from "./component/template/template";
import Header from "./component/header/header";
import { ProgressBar } from "./component/progressbar/progressbar";
import { MultiForm } from "./component/multiform/multiform";
export default function App() {
  return (
    <div className="App">
      <Header />
      <MultiForm />
    </div>
  );
}
