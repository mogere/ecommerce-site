import Home from './components/routes/home/home.component'
import Navigation from './components/routes/navigation/navigation.component';
import { Route, Routes, Outlet } from 'react-router-dom';
import Authentication from './components/routes/Authentication/authentication.components';
import Shop from './components/routes/shop/shop.component';
import Checkout from './components/routes/checkout/checkout.component';


const App=()=> {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
