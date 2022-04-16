/* eslint-disable */

import React from "react";
import { shallow } from "enzyme";
import ProductCart from "../Components/ProductCart";
import Home from "../Pages/Home";
import { products } from "../mocks/products";
import { BrowserRouter } from "react-router-dom";

describe("<Home /> Component", () => {
  const wrapper = shallow(
    <BrowserRouter>
      <Home products={products} />
    </BrowserRouter>
  );

  it("Validate if Home Component Renders", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("Validate if Home Component have Product Text", () => {
    const text = wrapper.find("h2").text();
    expect(text).toEqual(" Products ");

    // expect(wrapper.contains(" Products ")).toBe(true);

    // expect(wrapper.text()).toContain(" Products ");
  });

  it("Validate if <Home /> renders Child component <ProductCart />", () => {
    // const productCart1 = wrapper.find({ className: "productCart[1]" });
    // expect(productCart1.length).toEqual(1);

    // const productCart2 = wrapper.find({ className: "productCart[2]" });
    // expect(productCart2.length).toEqual(1);

    // ------------------**********-------------*********-------------------- //

    // el metodo FIND no sirve para saber si un COMPONENTE SE ESTA RENDERIZANDO
    // containsMatchingElement sirve para saber si un componente hijo se HA RENDERIZADO.

    // No es lo mismo decir que el "length" de algo es = 1, que a decir que el componente se ha renderizado.
    // .length.toEqual(1) !== containsMatchingElement().toEqual(true)

    expect(wrapper.containsMatchingElement(<ProductCart />)).toEqual(true);
  });
});
