/*eslint-disable*/

import React from "react";
import { mount } from "enzyme";
import Product from "../Components/Product";
import { oneProduct as productData } from "../mocks/oneProduct";
// import { oneProduct } from "../mocks/oneProduct";
import ProductDetail from "../Pages/productDetail";
import RouterMock from "../mocks/RouterMock";

import Button from "react-bootstrap/Button";

describe.only("<ProductDetail /> Page", () => {
  const wrapper = mount(
    <RouterMock>
      <ProductDetail {...productData} />
    </RouterMock>
  );

  it("Testing all product detail elements", () => {
    console.log(wrapper.debug());

    // global.window = { location: { pathname: `/detail/${products[0]}.id` } };
    // expect(wrapper.find("h5").text()).toBe(products[index].title);
  });
});
