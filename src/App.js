import React, { useMemo, useState, createContext } from "react";
import { ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MemberList from "./components/MemberList";
import Header from "./components/Header";
import { lightTheme, darkTheme } from "./theme";

// Dummy components for routing
const Home = () => <h2>Home Page</h2>;
const Events = () => <h2>Events Page</h2>;
const AboutMission = () => <h2>Mission Page</h2>;
const AboutTeam = () => <h2>Team Page</h2>;

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about-us/mission" element={<AboutMission />} />
            <Route path="/about-us/team" element={<AboutTeam />} />
            <Route path="/members" element={<MemberList />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
