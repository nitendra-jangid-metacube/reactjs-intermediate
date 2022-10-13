import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import UserForm from "./components/UserForm";
import ShowData from "./components/UserForm/ShowData";
import CompositionInheritance from "./components/CompositionInheritance";
import CodeSplitting from "./components/CodeSplitting";
import ContextComponent from "./components/ContextComponent";
import ReactPortal from "./components/ReactPortal";
import Refs from "./components/Refs";
import Hooks from "./components/Hooks";
import CustomHooks from "./components/CustomHooks";
import HTTPRequests from "./components/HTTPRequests";
import Shop from "./components/Shop";
import ErrorBoundaryApp from "./components/ErrorBoundaryApp";
import ReplaceRedux from "./components/ReplaceRedux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/show-data" element={<ShowData />} />
        <Route path="/c-vs-i" element={<CompositionInheritance />} />
        <Route path="/code-splitting" element={<CodeSplitting />} />
        <Route path="/context" element={<ContextComponent />} />
        <Route path="/portal" element={<ReactPortal />} />
        <Route path="/refs" element={<Refs />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/custom-hooks" element={<CustomHooks />} />
        <Route path="/http-requests" element={<HTTPRequests />} />
        <Route path="/wallet" element={<Shop />} />
        <Route path="/error-boundary" element={<ErrorBoundaryApp />} />
        <Route path="/replace-redux" element={<ReplaceRedux />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;