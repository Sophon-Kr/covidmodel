import "@testing-library/jest-dom";
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
