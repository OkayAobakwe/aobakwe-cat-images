/**
 * @jest-environment jsdom
 */
 import Categories from "../../../pages/categories/index";
 import { render } from "@testing-library/react";
 
 describe("Categories Page", () => {
   let wrapper: any;
 
   beforeEach(() => {
     wrapper = render(<Categories />);
   });
 
   it("renders successfully", () => {
     expect(wrapper).toMatchSnapshot();
   });
 });