module.exports = {
  devServer: { port: 5050 },
  pages: {
    index: {
      entry: "src/main.ts",
      title: "TodoList",
    },
  },
  transpileDependencies: ["vuetify"],
};
