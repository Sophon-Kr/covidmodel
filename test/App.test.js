// import Modelpage from "../page/Modelpage";
// import { shallow } from "enzyme";
// // import { findByTestAtrr } from "./middleware/store";
// import configureStore from "../middleware/store";
// import React from "react";

// const setUp = (initialState = {}) => {
//   const store = configureStore();
//   const wrapper = shallow(<Modelpage store={store} />)
//     .childAt(0)
//     .dive();
//   return wrapper;
// };
// setUp();

// describe("App Component", () => {
//   let wrapper;
//   beforeEach(() => {
//     const initialState = {
//       posts: [
//         {
//           title: "Example title 1",
//           body: "Some text",
//         },
//         {
//           title: "Example title 2",
//           body: "Some text",
//         },
//         {
//           title: "Example title 3",
//           body: "Some text",
//         },
//       ],
//     };
//     wrapper = setUp(initialState);
//   });

//   it("Should render without errors", () => {
//     const component = findByTestAtrr(wrapper, "appComponent");
//     expect(component.length).toBe(1);
//   });

//   it("exampleMethod_updatesState Method should update state as expected", () => {
//     const classInstance = wrapper.instance();
//     classInstance.exampleMethod_updatesState();
//     const newState = classInstance.state.hideBtn;
//     expect(newState).toBe(true);
//   });

//   it("exampleMethod_returnsAValue Method should return value as expected", () => {
//     const classInstance = wrapper.instance();
//     const newValue = classInstance.exampleMethod_returnsAValue(6);
//     expect(newValue).toBe(7);
//   });
// });


it("adds correctly", () => {
    expect(1 + 1).toEqual(2);
  });