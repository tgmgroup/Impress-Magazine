import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="item gap-left"
        style={{
          boxSizing: "border-box",
          borderRadius: "0vw",
          border: "0vw solid rgb(23, 23, 23)",
          backgroundColor: "rgb(0, 0, 0)",
          boxShadow: "none",
          color: "rgb(255, 255, 255)",
          display: "inline-grid",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.1vw",
          fontWeight: "bold",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: "Klee One", cursive;
}

body {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: "Klee One", cursive;
}
`,
        }}
      />
    </>
  );
}
