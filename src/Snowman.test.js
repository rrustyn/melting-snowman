import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it("end game after 6 guesses", function () {
  const { container } = render(
    <Snowman words='["apple"]' />
  );

  const b = container.querySelector("button[value='b']");
  const c = container.querySelector("button[value='c']");
  const d = container.querySelector("button[value='d']");
  const f = container.querySelector("button[value='f']");
  const g = container.querySelector("button[value='g']");
  const h = container.querySelector("button[value='h']");
  const i = container.querySelector("button[value='i']");


  fireEvent.click(b);
  fireEvent.click(c);
  fireEvent.click(d);
  fireEvent.click(f);
  fireEvent.click(g);
  fireEvent.click(h);
  fireEvent.click(i);

  expect(container.querySelector("img[alt='6']"))
    .toBeInTheDocument();
  expect(container.querySelector("#wrongGuesses"))
    .toContainHTML("Number wrong: 6");

  expect(container).toMatchSnapshot();
});

it("matches snapshot", function () {
  const { container } = render(
    <Snowman />
  );
  expect(container).toMatchSnapshot();
});