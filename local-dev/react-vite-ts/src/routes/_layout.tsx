import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { Grid, CircularProgress } from "@mui/material";

// import Sidebar from '../components/Common/Sidebar';
// import UserMenu from '../components/Common/UserMenu';

import useAuth, { isLoggedIn } from "../hooks/useAuth";

export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function Layout() {
  const { isLoading } = useAuth();

  return (
    <Grid container>
      <Grid item xs={3}>
        {/* <Sidebar /> */}
      </Grid>
      <Grid item xs={6}>
        {isLoading ? (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <CircularProgress size={40} color="primary" />
          </Grid>
        ) : (
          <Outlet />
        )}
      </Grid>
      <Grid item xs={3}>
        {/* <UserMenu /> */}
      </Grid>
    </Grid>
  );
}

export default Layout;
