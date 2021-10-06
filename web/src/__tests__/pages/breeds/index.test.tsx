/**
 * @jest-environment jsdom
 */
 import Breeds from "../../../pages/breeds/index";
 import { render } from "@testing-library/react";
 
 describe("Breeds Page", () => {
   let wrapper: any;
 
   beforeEach(() => {
     wrapper = render(<Breeds />);
   });
 
   it("renders successfully", () => {
     expect(wrapper).toMatchSnapshot();
   });
 });