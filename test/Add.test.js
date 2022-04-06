import Add from "../src/components/Add";
import Modelpage from "../src/page/Modelpage";

import configureStore from "../src/middleware/store";

const setUp = (initialState = {}) => {
  const store = configureStore();
  // eslint-disable-next-line no-undef
  const wrapper = shallow(<Modelpage store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};
setUp();

describe("<Add /> rendering", () => {
  it("should render one <h1>", () => {
    // eslint-disable-next-line no-undef
    let wrapper = shallow(<Add />);
    expect(wrapper.children("h1")).toHaveLength(1);
  });
});

describe("<Modelpage /> rendering", () => {
  it("should render one <h1>", () => {
    const store = configureStore();
    // eslint-disable-next-line no-undef
    let wrapper = shallow(<Modelpage store={store} />);
    expect(wrapper.children("h1")).toHaveLength(1);
  });
});
