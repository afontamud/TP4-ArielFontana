import React from 'react';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';
import Hero from './Hero';
import ItemDetailContainer from './ItemDetailContainer';


export default function App() {
  return (
    <>
      <NavBar />
      <Hero title="Hysteria Shop" />
      <ItemListContainer />
  
    </>
  );
}
