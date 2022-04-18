/*eslint-disable*/

import React from "react";
import { mount, unmount } from "enzyme";
import Product from "../Components/Product";
import { oneProduct as productData } from "../mocks/oneProduct";
import { products } from "../mocks/products";
// import { oneProduct } from "../mocks/oneProduct";
import RouterMock from "../mocks/RouterMock";

import Button from "react-bootstrap/Button";

describe.only("<ProductDetail /> Page", () => {
  it("Testing all product detail elements", () => {
    products.forEach((container) => {
      const wrapper = mount(
        <RouterMock>
          <Product {...container} />
        </RouterMock>
      );

      expect(wrapper.find("h3").text()).toBe(container.title);
      expect(wrapper.find("h4").text()).toBe(`Price: $${container.price}`);
      expect(wrapper.find("p").at(0).text()).toBe(container.description);
      expect(wrapper.find("p").at(1).text()).toBe(
        `Category: ${container.category}`
      );
    });
  });
});
