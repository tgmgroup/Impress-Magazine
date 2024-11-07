import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="item sidebar sidebar-left"
        style={{
          boxSizing: "border-box",
          borderRadius: "0vw",
          border: "0vw solid rgb(23, 23, 23)",
          backgroundColor: "rgb(0, 0, 0)",
          color: "rgb(255, 255, 255)",
          display: "inline-grid",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.1vw",
          fontWeight: "bold",
          padding: "0.1vw",
          backgroundImage:
            "linear-gradient(203deg, rgb(181, 123, 75) 0%, rgb(33, 10, 1) 90%)",
          boxShadow:
            "rgba(0, 0, 0, 0.835) 0px 0.1vw 0.2vw, rgba(0, 0, 0, 0.23) 0px 0.06vw 0.06vw",
        }}
      >
        <div
          className="item header header-left"
          style={{
            boxSizing: "border-box",
            color: "rgb(255, 255, 255)",
            display: "inline-grid",
            fontSize: "1.1vw",
            fontWeight: "bold",
            border: "0vw",
            borderRadius: "0.15vw",
            boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.01vw 0.05vw",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.5vw",
            background: "none",
            height: "6vw",
            width: "6vw",
            zIndex: 3,
            backgroundImage: "none",
            backgroundColor: "initial",
          }}
        >
          <form style={{ boxSizing: "border-box" }}>
            <button
              className="menu-button clickable"
              type="button"
              style={{
                boxSizing: "border-box",
                border: "0vw",
                borderRadius: "0.15vw",
                height: "6.2vw",
                width: "6.2vw",
                backgroundImage:
                  "linear-gradient(160deg, rgb(240, 239, 243) 0%, rgb(53, 18, 1) 127%)",
                boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                color: "rgb(255, 250, 246)",
                fontFamily: '"Klee One", cursive',
                objectFit: "contain",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h5
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.5vw",
                  fontWeight: "bold",
                }}
              >
                Impress
                <small style={{ boxSizing: "border-box", fontSize: "0.6vw" }}>
                  <br style={{ boxSizing: "border-box" }} />
                  大きく・小さく
                </small>
              </h5>
            </button>
          </form>
        </div>
        <div
          className="left-menu"
          style={{
            boxSizing: "border-box",
            gap: "0.5vw",
            padding: "0vw",
            margin: "0.5vw 0.5vw 1vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "37.25vw",
          }}
        >
          <a
            href="https://impress-fall-2023.isesaki.in/index.html"
            target="_self"
            style={{ boxSizing: "border-box" }}
          />
          <div
            className="left-menu-button"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <a
              href="https://impress-fall-2023.isesaki.in/index.html"
              target="_self"
              style={{ boxSizing: "border-box" }}
            >
              <img
                className="left-menu-image clickable"
                src="https://impress-fall-2023.isesaki.in/nav-images/front.png"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "-4px",
                  borderRadius: "0.1vw",
                  boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                  height: "2.7vw",
                  width: "2.7vw",
                  backgroundColor: "rgb(253, 243, 222)",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
          <a
            href="https://impress-fall-2023.isesaki.in/1.html"
            target="_self"
            style={{ boxSizing: "border-box" }}
          />
          <div
            className="left-menu-button"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <a
              href="https://impress-fall-2023.isesaki.in/1.html"
              target="_self"
              style={{ boxSizing: "border-box" }}
            >
              <img
                className="left-menu-image clickable"
                src="https://impress-fall-2023.isesaki.in/nav-images/1.png"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "-4px",
                  borderRadius: "0.1vw",
                  boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                  height: "2.7vw",
                  width: "2.7vw",
                  backgroundColor: "rgb(253, 243, 222)",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
          <a
            href="https://impress-fall-2023.isesaki.in/1.html"
            target="_self"
            style={{ boxSizing: "border-box" }}
          />
          <div
            className="left-menu-button"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <a
              href="https://impress-fall-2023.isesaki.in/1.html"
              target="_self"
              style={{ boxSizing: "border-box" }}
            >
              <img
                className="left-menu-image clickable"
                src="https://impress-fall-2023.isesaki.in/nav-images/2.png"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "-4px",
                  borderRadius: "0.1vw",
                  boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                  height: "2.7vw",
                  width: "2.7vw",
                  backgroundColor: "rgb(253, 243, 222)",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
          <a
            href="https://impress-fall-2023.isesaki.in/3.html"
            target="_self"
            style={{ boxSizing: "border-box" }}
          />
          <div
            className="left-menu-button"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <a
              href="https://impress-fall-2023.isesaki.in/3.html"
              target="_self"
              style={{ boxSizing: "border-box" }}
            >
              <img
                className="left-menu-image clickable"
                src="https://impress-fall-2023.isesaki.in/nav-images/3.png"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "-4px",
                  borderRadius: "0.1vw",
                  boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                  height: "2.7vw",
                  width: "2.7vw",
                  backgroundColor: "rgb(253, 243, 222)",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
          <a
            href="https://impress-fall-2023.isesaki.in/3.html"
            target="_self"
            style={{ boxSizing: "border-box" }}
          />
          <div
            className="left-menu-button"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <a
              href="https://impress-fall-2023.isesaki.in/3.html"
              target="_self"
              style={{ boxSizing: "border-box" }}
            >
              <img
                className="left-menu-image clickable"
                src="https://impress-fall-2023.isesaki.in/nav-images/4.png"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "-4px",
                  borderRadius: "0.1vw",
                  boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                  height: "2.7vw",
                  width: "2.7vw",
                  backgroundColor: "rgb(253, 243, 222)",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
          <a
            href="https://impress-fall-2023.isesaki.in/5.html"
            target="_self"
            style={{ boxSizing: "border-box" }}
          />
          <div
            className="left-menu-button"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <a
              href="https://impress-fall-2023.isesaki.in/5.html"
              target="_self"
              style={{ boxSizing: "border-box" }}
            >
              <img
                className="left-menu-image clickable"
                src="https://impress-fall-2023.isesaki.in/nav-images/5.png"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "-4px",
                  borderRadius: "0.1vw",
                  boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                  height: "2.7vw",
                  width: "2.7vw",
                  backgroundColor: "rgb(253, 243, 222)",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
          <a
            href="https://impress-fall-2023.isesaki.in/5.html"
            target="_self"
            style={{ boxSizing: "border-box" }}
          />
          <div
            className="left-menu-button"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <a
              href="https://impress-fall-2023.isesaki.in/5.html"
              target="_self"
              style={{ boxSizing: "border-box" }}
            >
              <img
                className="left-menu-image clickable"
                src="https://impress-fall-2023.isesaki.in/nav-images/6.png"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "-4px",
                  borderRadius: "0.1vw",
                  boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                  height: "2.7vw",
                  width: "2.7vw",
                  backgroundColor: "rgb(253, 243, 222)",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
          <a
            href="https://impress-fall-2023.isesaki.in/cover.html"
            target="_self"
            style={{ boxSizing: "border-box" }}
          />
          <div
            className="left-menu-button"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <a
              href="https://impress-fall-2023.isesaki.in/cover.html"
              target="_self"
              style={{ boxSizing: "border-box" }}
            >
              <img
                className="left-menu-image clickable"
                src="https://impress-fall-2023.isesaki.in/nav-images/back.png"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "-4px",
                  borderRadius: "0.1vw",
                  boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                  height: "2.7vw",
                  width: "2.7vw",
                  backgroundColor: "rgb(253, 243, 222)",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
          <a
            href="https://impress-fall-2023.isesaki.in/about.html"
            target="_self"
            style={{ boxSizing: "border-box" }}
          />
          <div
            className="left-menu-button"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <a
              href="https://impress-fall-2023.isesaki.in/about.html"
              target="_self"
              style={{ boxSizing: "border-box" }}
            >
              <img
                className="left-menu-image clickable"
                src="https://impress-fall-2023.isesaki.in/nav-images/about.png"
                style={{
                  boxSizing: "border-box",
                  marginBottom: "-4px",
                  borderRadius: "0.1vw",
                  boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                  height: "2.7vw",
                  width: "2.7vw",
                  backgroundColor: "rgb(253, 243, 222)",
                  objectFit: "contain",
                }}
              />
            </a>
          </div>
        </div>
        <div
          className="item footer footer-left-top"
          style={{
            boxSizing: "border-box",
            color: "rgb(255, 255, 255)",
            display: "inline-grid",
            fontSize: "1.1vw",
            fontWeight: "bold",
            border: "0vw",
            borderRadius: "0.15vw",
            boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.01vw 0.05vw",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.5vw",
            background: "none",
            height: "3vw",
            width: "6vw",
            zIndex: 4,
            backgroundImage: "none",
            backgroundColor: "initial",
          }}
        >
          <form style={{ boxSizing: "border-box" }}>
            <button
              className="menu-button-small clickable"
              type="submit"
              formAction="about.html"
              style={{
                boxSizing: "border-box",
                border: "0vw",
                borderRadius: "0.15vw",
                height: "3.1vw",
                width: "6.2vw",
                backgroundImage:
                  "linear-gradient(160deg, rgb(240, 239, 243) 0%, rgb(53, 26, 1) 127%)",
                boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                color: "rgb(248, 246, 255)",
                fontFamily: '"Klee One", cursive',
                objectFit: "contain",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h6
                style={{
                  boxSizing: "border-box",
                  fontSize: "1vw",
                  fontWeight: "bold",
                }}
              >
                {"< Previous"}
              </h6>
            </button>
          </form>
        </div>
        <div
          className="item footer footer-left-bottom"
          style={{
            boxSizing: "border-box",
            color: "rgb(255, 255, 255)",
            display: "inline-grid",
            fontSize: "1.1vw",
            fontWeight: "bold",
            border: "0vw",
            borderRadius: "0.15vw",
            boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.01vw 0.05vw",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.5vw",
            background: "none",
            height: "3vw",
            width: "6vw",
            zIndex: 4,
            backgroundImage: "none",
            backgroundColor: "initial",
          }}
        >
          <form style={{ boxSizing: "border-box" }}>
            <button
              className="menu-button-small clickable"
              type="submit"
              formAction="1.html"
              style={{
                boxSizing: "border-box",
                border: "0vw",
                borderRadius: "0.15vw",
                height: "3.1vw",
                width: "6.2vw",
                backgroundImage:
                  "linear-gradient(160deg, rgb(240, 239, 243) 0%, rgb(53, 26, 1) 127%)",
                boxShadow: "rgba(0, 0, 0, 0.5) 0vw 0.1vw 0.5vw",
                color: "rgb(248, 246, 255)",
                fontFamily: '"Klee One", cursive',
                objectFit: "contain",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h6
                style={{
                  boxSizing: "border-box",
                  fontSize: "1vw",
                  fontWeight: "bold",
                }}
              >
                {"Next >"}
              </h6>
            </button>
          </form>
        </div>
      </div>
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
