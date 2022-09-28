import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectsProvider } from "./components/context/projectsProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle>
      <ProjectsProvider>
        <NavBar />
        <Home />
        <Footer />
      </ProjectsProvider>
    </GlobalStyle>
  </React.StrictMode>
);
