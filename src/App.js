import Lifecycle from "./Lifecycle";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((show) => !show)}>
        {show ? "Gizle" : "Göster"}
      </button>
      {show && <Lifecycle />}
    </>
  );
}

export default App;
