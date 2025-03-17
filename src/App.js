import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import SharedLayout from './Pages/ShareLayout';
import ContainerMenu from "./Pages/ContainerMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home/>}/>
          <Route path='/blog' element={<Blog />} />
          <Route path='/menu' element={<ContainerMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
