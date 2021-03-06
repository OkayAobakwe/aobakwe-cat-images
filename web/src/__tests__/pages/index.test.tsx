/**
 * @jest-environment jsdom
 */
import Index from "../../pages/index";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(<Index />);
  });

  it("renders successfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
});