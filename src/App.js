import Home from './components/routes/home/home.component'
import Navigation from './components/routes/navigation/navigation.component';
import { Route, Routes, Outlet } from 'react-router-dom';
import Authentication from './components/routes/Authentication/authentication.components';

const App=()=> {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Home/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
