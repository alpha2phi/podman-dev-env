# Local Development Environment Setup

## Docker DNS

In the `daemon.json` file, add the following line.

```
"dns": [ "10.25.106.222", "10.47.193.222"]
```

## Java Environment

1. Use the `docker-compose.yml` file to set up a local development environment.

```sh
docker compose up local-dev-java
```

2. From the host machine, open a terminal and run the following command.

```sh
./gradlew build --continuous -x test
```

## React

### RUM

```javascript
import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "6ad647fd-c0ac-4632-94de-e1232336ccd0",
  clientToken: "pubab1dbf303029b814185af22aa9aad2b4",
  site: "datadoghq.com",
  service: "local-dev-react-app",
  env: "local-dev-react-app",
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
```

## Features

- [x] Docker for local development.
- [x] SpringBoot Java Application.
- [x] Datadog APM
- [ ] Email Service (Middleware Layer 7 or DXP).
- [x] React application.
- [ ] Azure AD for React.
- [x] RUM for React.
- [ ] [RUM and Traces](https://docs.datadoghq.com/real_user_monitoring/connect_rum_and_traces/?tab=browserrum)
- [ ] [User interface and components](https://mycargill.dev.cglcloud.in/refapp/), [Docs](https://dxp-docs.cglcloud.com/PlatformV2/overview.html#available-components)
- [x] [OpenAPI spec and Swagger for Java application](https://localdevjavaapp.dev.cglcloud.in/swagger-ui/index.html).
- [ ] Flyway for local development.
- [ ] Use Git sub modules.
- [ ] Add proxy certificate.
- [ ] Veracode
- [ ] SonarQube
- [ ] Progressive web app
- [x] Vela - stage, template, service
- [ ] [Employee APIs](https://wiki.cglcloud.com/index.php/Cargill_Data_APIs_-_Organization_/_Employee_API)
- [ ] [Other features](https://git.cglcloud.com/engineering-at-cargill/engineering-guide/blob/feature/videos/docs/videos.md)
- [x] Multi-language support
- [ ] [Security](https://captain-docs.cglcloud.com/examples/kubernetes/security.html)
- [ ] Cron Job
- [ ] Embedded PowerBI
- [ ] WebSocket and CAPI
