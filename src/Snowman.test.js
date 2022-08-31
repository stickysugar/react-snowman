import React from "react";
import { render } from "@testing-library/react";
import Snowman from "./Snowman";

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Snowman
    images={["test"]}
    words={["a"]}
    maxWrong={1}/>);
});
// end

// it("has the correct alt text & src", function () {
//   const { container, debug } = render(<Card rank="A" suit="C" />);
//   const img = container.querySelector("img");
//   debug(img);

//   expect(img.getAttribute("alt")).toEqual("AC");
//   expect(img.getAttribute("src")).toContain("AC.png");
// });
// // end

it("matches snapshot", function () {
  const { container } = render(<Snowman
    images={["test"]}
    words={["a"]}
    maxWrong={1} />);
  expect(container).toMatchSnapshot();
});
// end