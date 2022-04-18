/* eslint-disable */

import React from "react";
import { mount } from "enzyme";
import ProductCart from "../Components/ProductCart";
import Home from "../Pages/Home";
import { products } from "../mocks/products";
import RouterMock from "../mocks/RouterMock";

describe("<Home /> Page", () => {
  const wrapper = mount(
    <RouterMock>
      <Home products={products} />
    </RouterMock>
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

    // el metodo FIND no sirve para saber si un COMPONENTE SE ESTA RENDERIZANDO asi </>
    // containsMatchingElement sirve para saber si un componente hijo se HA RENDERIZADO asi </>

    // No es lo mismo decir que el "length" de algo es = 1, que a decir que el componente se ha renderizado.
    // .length.toEqual(1) !== containsMatchingElement().toEqual(true)

    expect(wrapper.containsMatchingElement(<ProductCart />)).toEqual(true);
  });

  it.only("Validate if renders ALL ProductCart components with ALL the correct props", () => {
    wrapper.find(ProductCart).forEach((container, index) => {
      // Se espera que todos los Product Cart tengan la prop title con su valor CORRECTO
      // Se espera que todas las etiquetas h5, contengan exactamente el contenido de title
      expect(container.props().title).toBe(products[index].title);
      expect(container.find("h5").text()).toBe(products[index].title);

      // Se espera que todos los Product Cart tengan la prop image con su valor CORRECTO
      // Se espera que todas las etiquetas img, contengan exactamente el contenido de image dentro de su atributo src
      expect(container.props().image).toBe(products[index].image);
      expect(container.find("img").prop("src")).toBe(products[index].image);

      // Se espera que todos los componentes tengan el boton de Comprar, seguido de su atributo disabled = true
      expect(container.find("button").text()).toBe("Comprar");
      expect(container.find("button").prop("disabled")).toBe(false);
      expect(container.find("button").prop("className")).toBe(
        "buyButton btn btn-primary"
      );

      // Se espera que al hacer click en el boton comprar, cambie la URL por la del producto en detalle.
      const buyButton = container.find("button");
      buyButton.simulate("click");
      expect(global.window.location.pathname).toEqual(
        `/detail/${products[index].id}`
      );
    });
  });
});
