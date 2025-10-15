/* eslint-env jest */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const click = async (label) => {
  await userEvent.click(screen.getByRole("button", { name: label }));
};

describe("Calculadora", () => {
  test("12 + 3 = 15", async () => {
    render(<App />);
    await click("1");
    await click("2");
    await click("+");
    await click("3");
    await click("=");
    expect(screen.getByTestId("answer")).toHaveTextContent("15");
  });

  test("no permite doble punto en el mismo número", async () => {
    render(<App />);
    await click("2");
    await click(".");
    await click("5");
    await click(".");
    await click("3");
    await click("=");
    expect(screen.getByTestId("answer")).toHaveTextContent("2.53"); // segundo punto se ignora
  });

  test("clear y delete funcionan", async () => {
    render(<App />);
    await click("1");
    await click("2");
    await click("DE");
    expect(screen.getByTestId("expression")).toHaveTextContent("1");
    await click("AC");
    expect(screen.getByTestId("expression")).toHaveTextContent("0");
    expect(screen.getByTestId("answer")).toHaveTextContent("");
  });

  test("porcentaje: 200 % = 2", async () => {
    render(<App />);
    await click("2");
    await click("0");
    await click("0");
    await click("=");
    expect(screen.getByTestId("answer")).toHaveTextContent("200");
    await click("%");
    expect(screen.getByTestId("answer")).toHaveTextContent("2");
  });

  test('ceros a la izquierda: 0,0,1 -> queda "1"', async () => {
    render(<App />);
    await click("0");
    await click("0");
    await click("1");
    expect(screen.getByTestId("expression")).toHaveTextContent("1");
  });

  test('si termina en operador, "=" no evalúa', async () => {
    render(<App />);
    await click("3");
    await click("+");
    await click("=");
    expect(screen.getByTestId("answer")).toHaveTextContent(""); // sigue vacío
  });
});
