/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Favourites from "../../../pages/favourites/index";
 
 describe("Favourites Page", () => {
   let wrapper: any;
 
   beforeEach(() => {
     wrapper = render(<Favourites />);
   });
 
   it("renders successfully", () => {
     expect(wrapper).toMatchSnapshot();
   });
 });