import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/section/Main";

const Home = lazy(() => import("./pages/Home"));
const EventList = lazy(() => import("./pages/EventList"));
const EventListDtype = lazy(() => import("./pages/EventListDtype"));
const EventDetail = lazy(() => import("./pages/EventDetail"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/list" element={<EventList />} />
          <Route path="/event/list/:type" element={<EventListDtype />} />
          <Route path="/event/detail/:id" element={<EventDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
