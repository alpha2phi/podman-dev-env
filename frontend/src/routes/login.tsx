import { createFileRoute } from "@tanstack/react-router";
import DeleteIcon from "@mui/icons-material/Delete";
import { Icon } from "@mui/material";

export const Route = createFileRoute("/login")({
  component: () => (
    <div>
      Hello /login!
      {/* <DeleteIcon /> */}
      <Icon className="material-icons-outlined">pie_chart</Icon>
    </div>
  ),
});
