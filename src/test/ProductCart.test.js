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
import Home from "../Pages/Home";
import { oneProduct } from "../mocks/oneProduct";
import RouterMock from "./RouterMock";

describe.only("<ProductCart /> Component", () => {
  // Diferencia entre Shallow y Mount
  // Shallow me renderiza EL COMPONENTE sin sus COMPONENTES HIJOS
  // Mount renderiza todo el COMPONENTE incluyendo sus COMPONENTES HIJOS

  const wrapper = mount(
    <RouterMock>
      <Home products={oneProduct}></Home>
    </RouterMock>
  );

  // wrapper.debug() me permite ver en la terminal el arbol DOM renderizado.

  it("Validate if <ProductCart /> renders with the correct props", () => {
    console.log(wrapper.debug());
    expect(wrapper.find({ className: "productCart[3]" }).prop("title")).toBe(
      "Mens Cotton Jacket"
    );

    expect(wrapper.find({ className: "productCart[3]" }).prop("id")).toBe(3);
  });

  // El click se puede testear de manera que por ejemplo, al hacer click, me aumente el contador de una variable
  // de estado en 1, o si clickeo 2 veces me la aumente a 2 y testear si el valor es igual a 1 o 2.

  // TEST DRIVEN DEVELOPMENT !!! TDD - Primero hacer las pruebas y luego programar el codigo.

  it.only("Validate if when click button increment value of counter in 1", () => {
    // Validar si el valor inicial del counter es 0 al inicial el codigo
    expect(wrapper.find("#counter").text()).toBe("0");
    // Testeando el evento click del contador
    const button = wrapper.find("#incrementBtn");
    expect(button.text()).toEqual("Inc+");
    button.simulate("click");
    expect(wrapper.find("#counter").text()).toBe("1");
  });
});
