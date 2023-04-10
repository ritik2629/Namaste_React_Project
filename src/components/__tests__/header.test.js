import { render } from "@testing-library/react";
import { Header } from "../Header/index";
import { Provider } from "react-redux";
import store from "../../redux/app/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendring header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);
});

test("online status be green on loading header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const status = header.getByTestId("online-status");
  expect(status.innerHTML).toBe("online🟢");
//   console.log(status);
});

test("cart item is 0 while loading header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart-status");
  expect(cart.innerHTML).toBe('Cart : 0-item');
//   console.log(cart);
});
