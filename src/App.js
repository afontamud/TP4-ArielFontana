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

      {/* Este componente ItemDetailContainer recibe por prop el id de un producto
      Encuentra ese producto entre el array de productos y muestra el detalle del
      producto pasándolo al componente ItemDetail */}
      <ItemDetailContainer id={3} />
    </>
  );
}
