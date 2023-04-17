import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createRoot } from "react-dom/client";
import './index.css'

export const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App/>);
