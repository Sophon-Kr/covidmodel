export const TEST_GET = "TEST_GET";
export const CONFIG_GRAPH_DISPLAY = "CONFIG_GRAPH_DISPLAY";

export const testGet = (payload) => ({
  type: "TEST_GET",
  payload,
});

export const configGraphLine = (payload) => ({
  type: "CONFIG_GRAPH_DISPLAY",
  payload,
});
