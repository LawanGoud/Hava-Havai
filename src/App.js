import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavSection from "./components/NavSection";
import Services from "./components/Services";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import AirportDetail from "./components/AiportDetail";
import {
  View,
  Flex,
  Provider,
  defaultTheme,
  Divider,
} from "@adobe/react-spectrum";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Router>
        <Flex direction="column" height="100vh">
          <Header />
          <Flex direction="row" flex>
            <NavSection />
            <Divider orientation="vertical" size="S" />
            <View flex padding="size-200">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/services/airports" element={<Services />} />
                <Route
                  path="/services/airports/:airportName"
                  element={<AirportDetail />}
                />
                <Route path="/" element={<Home />} />
              </Routes>
            </View>
          </Flex>
        </Flex>
      </Router>
    </Provider>
  );
}

export default App;
