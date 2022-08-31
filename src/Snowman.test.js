import React from "react";
import { render, fireEvent} from "@testing-library/react";
import Snowman from "./Snowman";


it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Snowman
    images={["test"]}
    words={["a"]}
    maxWrong={1} />)
});
// end

it("ends the game after reaching maxWrong", function () {
  const { container, debug } = render(<Snowman
  images={["test"]}
  words={["a"]}
  maxWrong={1}/>);

  fireEvent.click(container.querySelector(".b"));

  const numWrong = container.querySelector(".numWrong");
  expect(numWrong).toContainHTML("You lose");
});
// end

it("matches snapshot", function () {
  const { container } = render(<Snowman
    images={["test"]}
    words={["a"]}
    maxWrong={1} />);
  expect(container).toMatchSnapshot();
});
// end