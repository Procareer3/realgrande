import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {useEffect, useState} from 'react';
import House from './components/House';
import Search from './components/Search';
import {Routes, Route} from 'react-router-dom'
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useLocation } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const location = useLocation();
  console.log(location)

  useEffect(
    ()=> {
      console.log('useEffect')
      let fetchData = async() => {
      let response = await fetch("/houses.json");
      let info = await response.json();
        // console.log(info);
        setData(info);
      }
      fetchData();
    }, [])

  return (
    <div className="container-fluid">
      <Header/>
      {(location.pathname !== '/login' && location.pathname !== '/signup') && <Search allhouses={data}/>}

      <Routes>
        <Route path="/" element={<House houseInfo={data[3]}/>}/>
        <Route path='/searchresults/:county' element={<SearchResults allhouses={data}/> } />
        <Route path='/searchedhouse/:id' element={<SearchedHouse allhouses={data}/> } />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    
      <Footer/>
    </div>
  );
}

export default App;
