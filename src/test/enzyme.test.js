/*
El testing no se ejecuta en el navegador. Se ejecuta dentro del programa. En otro contexto diferente al DOM. 
Es necesario utilizar una herramienta o libreria que me permita acceder al DOM para hacer testing de los componentes 
que se estan renderizando (En el caso de React - El Virtual DOM)

--- React se caracteriza por su modularización. Unit testing en React es tomar éstos pequeños módulos independientes
y testear su comportamiento.

Guia basica para testear en React.

1. Testear las props del componente en cuestion. Si las está recibiendo correctamente y si está renderizando 
2. Para hacer testing en componentes, es necesario montarlos dentro de las pruebas. Ya que por si solo, no se instancia ni 
se renderiza. --/// Aqui es donde entra Enzyme
3. 
4.

*/

/* eslint-disable */

import React from "react";
import { mount } from "enzyme";
import ProductCart from "../Components/ProductCart";
import Home from "../Pages/Home";
import { RouterMock } from "./RouterMock";
import { BrowserRouter } from "react-router-dom";

describe("<Home /> Component", () => {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
  ];

  const props = {
    title: "hola",
    image: "img",
    id: 2,
  };

  const wrapper = mount(
    <BrowserRouter>
      <Home products={products}>
        <ProductCart />
      </Home>
    </BrowserRouter>
  );

  test("Validate if Home Component Renders", () => {
    expect(wrapper.length).toEqual(1);
  });

  test("Validate if Home Component have Product Text", () => {
    const text = wrapper.find("h2").text();
    expect(text).toEqual(" Products ");

    // expect(wrapper.contains(" Products ")).toBe(true);

    // expect(wrapper.text()).toContain(" Products ");
  });

  test("Validate if the mapped items renders", () => {
    const productCart1 = wrapper.find({ className: "productCart[1]" });
    expect(productCart1.length).toEqual(1);

    const productCart2 = wrapper.find({ className: "productCart[2]" });
    expect(productCart2.length).toEqual(1);
  });
});
