import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n";
import "./index.css";

import { datadogLogs } from "@datadog/browser-logs";
import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "6ad647fd-c0ac-4632-94de-e1232336ccd0",
  clientToken: "pubab1dbf303029b814185af22aa9aad2b4",
  site: "datadoghq.com",
  service: "local-dev-react-app",
  env: "dev",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});

datadogRum.startSessionReplayRecording();

datadogLogs.init({
  clientToken: "pubab1dbf303029b814185af22aa9aad2b4",
  site: "datadoghq.com",
  service: "local-dev-react-app",
  env: "dev",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sampleRate: 100,
  forwardErrorsToLogs: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
