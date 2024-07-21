import { datadogLogs } from "@datadog/browser-logs";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Providers } from "./components/providers/Providers";
import { getBase } from "./lib/base";
import { Home } from "./pages/Home";
// import { Menu } from "./components/Menu";
// import { About } from "./pages/About";

datadogLogs.logger.info("App.tsx...");

function App() {
  const basename = getBase();
  return (
    <Providers>
    <Suspense fallback="loading">
      <BrowserRouter basename={basename}>
        <Routes>
          {/* <Menu />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> */}

          <Route element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
    </Providers>
  );
};

export default App;