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
import { mount, shallow } from "enzyme";
import ProductCart from "../Components/ProductCart";
import Home from "../Pages/Home";
import { RouterMock } from "./RouterMock";
import { BrowserRouter } from "react-router-dom";

describe.only("<ProductCart /> Component", () => {
  const clickHandler = jest.fn();

  const testingProps = [
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

  const wrapper = mount(
    <BrowserRouter>
      <Home products={testingProps}>
        <ProductCart />
      </Home>
    </BrowserRouter>
  );

  it("Validate if <ProductCart /> renders with the correct props", () => {
    expect(wrapper.find({ className: "productCart[3]" }).prop("title")).toBe(
      "Mens Cotton Jacket"
    );

    expect(wrapper.find({ className: "productCart[3]" }).prop("id")).toBe(3);
  });

  it.only("Simulate an event click", () => {
    wrapper.find({ className: "buyButton" }).simulate("click");
    expect(clickHandler.mock.calls.length).toEqual(1);
    expect(clickHandler).toBeCalled();
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
