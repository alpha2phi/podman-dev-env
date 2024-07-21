import {
  Footer,
  SearchBar,
  TopNav
} from "@customerexperience/foundation";
import {
  Button,
  Grid
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { wrapWithBase } from "../../lib/base";

export function Layout() {

  return (
    <div
      className="Base-template"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <TopNav
        logo={
          <Link to="/">
            <img
              src={wrapWithBase("/assets/images/mycargillwhitelogo.svg")}
              alt={"Logo Alt"}
              style={{ width: "70px" }}
            />
          </Link>
        }
      >
        <SearchBar
          options={[
            "option 1",
            "option 2",
            "option 3",
            "option 4",
            "option 5",
          ]}
          placeholder="Search"
          data-mobilepriority="0"
          aria-label="Search"
          color="secondary"
          size="medium"
        />
        <Button
          size="medium"
          color="secondary"
        >
          Login
        </Button>
      </TopNav>
      <div className="App-content" style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
      <footer style={{ flexShrink: 0 }}>
        <Footer>
          <Grid container spacing={4} sx={{ typography: "caption" }}>
            <Grid
              item
              xs={12}
              sm
              sx={{ textAlign: { xs: "left", sm: "right" } }}
            >
              &copy;{new Date().getFullYear()}
              Copyright @2023
            </Grid>
          </Grid>
        </Footer>
      </footer>
    </div>
  );
}