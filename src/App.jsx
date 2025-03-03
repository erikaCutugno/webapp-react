import { BrowserRouter, Routes, Route } from "react-router-dom";
//context
import { LoaderProvider } from "../context/LoaderContext";

import DefaultLayout from "./layout/DefaultLayout";

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PageNotFound from "./pages/PageNotFound";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/admin" element={<Admin />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderProvider>
  );
}
