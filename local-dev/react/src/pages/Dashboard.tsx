import { PageHeader } from "@customerexperience/foundation";
import { Container } from "@mui/material";

export function Dashboard() {
  return (
    <div>
      <Container>
        <PageHeader
          title={"Dashboard"}
          subtitle={"Welcome to the Demo Application"}
          bodyText={"Sample React application with Cargill branding"}
          disableOuterPadding={true}
          breadcrumbs={"Dashboard"}
        />
      </Container>
    </div>
  );
}
