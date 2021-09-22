const path = require(`path`);
const exList = require("./ex.json");

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions;

  Object.entries(exList).forEach(([name, info]) => {
    createNode({
      ...info,
      ...exList[name],
      id: createNodeId(`${name}`),
      parent: null,
      children: [],
      internal: {
        type: "avenger",
        content: JSON.stringify(info),
        contentDigest: createContentDigest(name),
      },
    });
  });
};
