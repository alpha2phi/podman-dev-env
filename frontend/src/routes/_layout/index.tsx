import { createFileRoute } from "@tanstack/react-router";

import useAuth from "../../hooks/useAuth";

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});

function Dashboard() {
  const { user: currentUser } = useAuth();

  return (
    <div className="p-2">
      <h3>Dashboard</h3>
      {/* Hi, {currentUser?.name || currentUser?.email} 👋🏼 */}
      Hi, Welcome to Your First React App again! 👋🏼
    </div>
  );
}
