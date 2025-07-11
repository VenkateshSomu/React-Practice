// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet/Greet";
import Welcome from "./components/Welcome/Welcome";
import Message from "./components/Message/Message";
import Count from "./components/Count/Count";
import FunctionClick from "./components/Events/FunctionClick";
import ClassClick from "./components/Events/ClassClick";
import EventBind from "./components/Events/EventBind";
import ParentComp from "./components/Events/ParentComp";
import PureComp from "./components/PureComp/PureComp";
import RegComp from "./components/PureComp/RegComp";
import MemoComp from "./components/PureComp/MemoComp";
import RefComp from "./components/Ref/RefComp";
import FocusInput from "./components/Ref/FocusInput";
import FRParentInput from "./components/Ref/FRParentInput";
import PortalComp from "./components/Portal/PortalComp";
import Hero from "./components/ErrorHandlers/Hero";
import ErrorHandler from "./components/ErrorHandlers/ErrorHandler";
// import ClickCounter from "./components/HigherOrder/ClickCounter";
// import HoverCounter from "./components/HigherOrder/HoverCounter";
import ClickCounter from "./components/HigherOrder/2/ClickCounter";
import HoverCounter from "./components/HigherOrder/2/HoverCounter";
import User from "./components/RenderProps/User";
import ClickCounterTwo from "./components/RenderProps/ClickCounterTwo";
import Counter from "./components/RenderProps/Counter";
import HoverCounterTwo from "./components/RenderProps/HoverCounterTwo";
import CompA from "./components/Context/CompA";
import HookCounter from "./components/HOOKS/useState/HookCounter";
import HookCounterTwo from "./components/HOOKS/useState/HookCounterTwo";
import HookCounterThree from "./components/HOOKS/useState/HookCounterThree";
import Demo1 from "./components/LifeCycle/Demo1";
import ClassCounterOne from "./components/HOOKS/useEffect/ClassCounterOne";
import HookCounterOne from "./components/HOOKS/useEffect/HookCounterOne";
import ClassMouse from "./components/HOOKS/useEffect/ClassMouse";
import HookMouse from "./components/HOOKS/useEffect/HookMouse";
import MouseContainer from "./components/HOOKS/useEffect/MouseContainer";
import ClassIntervalCounter from "./components/HOOKS/useEffect/ClassIntervalCounter";
import HookIntervalCounter from "./components/HOOKS/useEffect/HookIntervalCounter";
import ClassFetching from "./components/DataFetching/ClassFetching";
import HookFetching from "./components/DataFetching/HookFetching";
import HookFetchingSinglePost from "./components/DataFetching/HookFetchingSinglePost";
import ComponentA from "./components/HOOKS/useContext/ComponentA";
import CounterOne from "./components/HOOKS/useReducer/CounterOne";
import CounterTwo from "./components/HOOKS/useReducer/CounterTwo";
import CounterThree from "./components/HOOKS/useReducer/CounterThree";
import ToggleBtn from "./components/HOOKS/useImperative/ToggleBtn";
import ToggleParent from "./components/HOOKS/useImperative/ToggleParent";
import Comments from "./components/HOOKS/useMemo/Comments";
import DocTitleOne from "./components/HOOKS/customHooks/DocTitleOne";
import Counter1 from "./components/HOOKS/customHooks/Counter1";
import Counter2 from "./components/HOOKS/customHooks/Counter2";
import UserForm from "./components/HOOKS/customHooks/UserForm";
import MemoCounter from "./components/HOOKS/useMemo/MemoCounter";
import Array1 from "./components/July-2025/Arrays/Array1";
import Array2 from "./components/July-2025/Arrays/Array2";
import Array3 from "./components/July-2025/Arrays/Array3";
import Array4 from "./components/July-2025/Arrays/Array4";
import Array5 from "./components/July-2025/Arrays/Array5";
import Array6 from "./components/July-2025/Arrays/Array6";
import Form1 from "./components/July-2025/Forms/Form1";
import Memo1 from "./components/July-2025/Hooks/Memo/Memo1";
import FavouriteColor from "./components/July-2025/Hooks/useState/Ex-1";
import ExCounter1 from "./components/July-2025/Hooks/useEffect/Ex1";
import Context1 from "./components/July-2025/Hooks/useContext/Context1";
import Context2 from "./components/July-2025/Hooks/useContext/Context2";
import ExReducer1 from "./components/July-2025/Hooks/useReducer/Ex1";
export const UserContext = React.createContext();
export const SampleContext = React.createContext();

// import { Greet2 } from "./components/Greet/Greet";
class App extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      name: "Venkatesh",
    };
  }
  changeName = (name) => {
    this.setState({
      name: name,
    });
  }; */

  render() {
    // console.log("****************App comp**********************");
    return (
      <div className="App">
        {/* <Array1 /> */}
        {/* <Array2 /> */}
        {/* <Array3 /> */}
        {/* <Array4 /> */}
        {/* <Array5 /> */}
        {/* <Array6 /> */}

        {/* <Form1 /> */}
        {/* <Memo1 />
        <FavouriteColor /> */}
        {/* <ExCounter1 /> */}

        {/* <Context1 /> */}
        {/* <Context2 /> */}

        <ExReducer1 />

        {/* ----------------------HOOKS-------------------- */}
        {/* <ToggleBtn /> */}
        {/* <ToggleParent /> */}
        {/* <Comments /> */}
        {/* <DocTitleOne /> */}
        {/* <Counter1 />
        <Counter2 /> */}
        {/* <UserForm /> */}
        {/* <MemoCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterThree /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassMouse /> */}

        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <ClassIntervalCounter /> */}
        {/* <HookIntervalCounter /> */}
        {/* <ClassFetching /> */}
        {/* <HookFetching /> */}
        {/* <HookFetchingSinglePost /> */}
        {/* <UserContext.Provider value="Venkatesh Somu">
          <SampleContext.Provider value="Hello">
            <ComponentA />
          </SampleContext.Provider>
        </UserContext.Provider> */}
        {/* <CounterOne />
        <CounterTwo /> */}
        {/* <CounterThree /> */}
        {/* ----------------------HOOKS-------------------- */}

        {/* <Demo1 /> */}
        {/* <ClickCounter />
        <HoverCounter /> */}
        {/* <ClickCounter name="Venkatesh" />
        <HoverCounter name="Somu" /> */}
        {/* <User name={(isLoggedIn) => (isLoggedIn ? this.state.name : "Guest")} /> */}
        {/* <h1>Main Component</h1> */}
        {/* <ErrorHandler>
          <Hero name="Superman" />
        </ErrorHandler>
        <ErrorHandler>
          <Hero name="Batman" />
        </ErrorHandler>
        <ErrorHandler>
          <Hero name="IronMan" />
        </ErrorHandler>
        <ErrorHandler>
          <Hero name="Joker" />
        </ErrorHandler> */}
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
        <button onClick={() => this.changeName("Somu")}>Change Name</button> */}
        {/* <RefComp /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}
        {/* <PortalComp /> */}
        {/* <Counter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        /> */}
        {/* <CompA /> */}
        {/* <ParentComp /> */}
        {/* <EventBind /> */}
        {/* <Greet name="Bruce" heroName="Hulk" />
        <Greet name="Diana" heroName="Wonder woman" />
        <Greet name="Tony" heroName="IronMan" />
        <Greet name="Clark" heroName="Superman" />
        <Welcome name="Clark" heroName="Superman" /> */}

        {/* <Greet />
        <Greet />
        
         <Greet2 /> 
        <p>test</p>
        <Welcome />
        <Message /> */}
        {/* <Count /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
      </div>
    );
  }
}

export default App;
