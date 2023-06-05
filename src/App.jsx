import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";

const DynamicForm = React.lazy(() => import("./Components/dynamicForm"));
const DynamicForm2 = React.lazy(() => import("./Components/dynamicForm2"));
const FormValidation = React.lazy(() => import("./Components/FormValidation"));
const FormField = React.lazy(() => import("./Dynamic/formField"));
const JsonFormField = React.lazy(() => import("./Components/JsonFormField"));
const Main = React.lazy(() => import("./React-Hook-From/Main"));

function App() {
  return (
    <>
      <Header />
      <React.Suspense fallback={<>Loading....</>}>
        <Routes>
          <Route path="/" element={<DynamicForm />}></Route>
          <Route path="/form-1" element={<DynamicForm />}></Route>
          <Route path="/form-2" element={<DynamicForm2 />}></Route>
          <Route path="/formValidation" element={<FormValidation />}></Route>
          <Route path="/formField" element={<FormField />}></Route>
          <Route path="/JsonformField" element={<JsonFormField />}></Route>
          <Route path="/react-hook-form" element={<Main />}></Route>
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
