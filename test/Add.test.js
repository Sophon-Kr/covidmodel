import Add from "../src/components/Add";

describe("<Add /> rendering", () => {
  it("should render one <h1>", () => {
    // eslint-disable-next-line no-undef
    let wrapper = shallow(<Add />);
    expect(wrapper.children("h1")).toHaveLength(1);
  });
});
