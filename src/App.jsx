import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Katalog from "./pages/Katalog";
import Faq from "./pages/Faq";
import KatalogDetail from "./pages/KatalogDetail";
import Korzinka from "./pages/Korzinka";
import Kontackt from "./pages/Kontackt";
import Infarmatsiya from "./pages/Infarmatsiya";
import Yoqtrilganlar from './pages/Yoqtrilganlar'
import SotibOlish from "./pages/SotibOlish";
import PageNotFound from "./pages/PageNotFound";
import AksiyaProduct from "./pages/AksiyaProduct";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/infarmatsiya" element={<Infarmatsiya/>}/>
        <Route path="/Katalog/:type" element={<Katalog />} />
        <Route path="/product/:id" element={<KatalogDetail />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/yoqtrilganlar" element={<Yoqtrilganlar/>}/>
        <Route path="/korzinka" element={<Korzinka />} />
        <Route path="/kontackt" element={<Kontackt />} />
        <Route path="/sotibolish" element={<SotibOlish/>}/>
        <Route path='/aksiyaproduct' element={<AksiyaProduct/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
