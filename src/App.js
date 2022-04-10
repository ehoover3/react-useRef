import "./App.css";
import Starter from "./components/1-Starter";
import InfiniteLoop from "./components/2a-InfiniteLoop";
import RenderCount from "./components/2b-RenderCount";
import ReferenceElement from "./components/3-Reference-HTML-Element";
import PreviousState from "./components/4-PreviousState";

export default function App() {
  // WHAT USEREF IS GOOD FOR
  // 1. access DOM elements (like document.querySelector in vanilla js)
  // 2. persists data across renders, without causing a re-render (useState causes a re-render)

  // USE CASES
  // 1. count times a component re-rendered ---> (see RenderCount component)
  // 2. set focus on input box ----------------> (see ReferenceElement component)
  // 3. store previous value of state ---------> (see PreviousState component)

  return (
    <>
      <Starter />
      {/* <InfiniteLoop /> */}
      <RenderCount />
      <ReferenceElement />
      <PreviousState />
    </>
  );
}

// 4:38
