/* eslint-disable */

import React from "react";
import { mount, shallow } from "enzyme";
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

  const wrapper = mount(
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
