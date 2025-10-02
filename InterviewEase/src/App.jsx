import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/Signup.jsx";
import Category from "./Pages/Categories.jsx";
import Questions from "./Pages/Questions.jsx";
import { ReviewAnswer } from "./Pages/Review.jsx";
import AuthWatcher from "./Components/authWatcher.jsx";
import Layout from "./Components/layout/Layout.jsx";
import ErrorBoundary from "./Components/error.boundry.jsx";

function App() {

  return (
    <BrowserRouter>
    <AuthWatcher />
      <Routes>
        <Route
          path=""
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/category"
          element={
            <Layout>
              <Category />
            </Layout>
          }
        />
        <Route
          // path="/category/domain/start"
          path="/category/start_interview"
          element={
            <ErrorBoundary>
            <Layout>
              <Questions />
            </Layout>
            </ErrorBoundary>  
          }
        />
        <Route
        path="/interview_report"
        element={
          <ErrorBoundary>
        <Layout>
          <ReviewAnswer/>
        </Layout>
        </ErrorBoundary>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/category" element={<Category />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
