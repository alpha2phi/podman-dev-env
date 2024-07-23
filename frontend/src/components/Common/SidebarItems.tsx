import { Box } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import React from "react";
import { IconContext } from "react-icons";
import { FiBriefcase, FiHome, FiSettings, FiUsers } from "react-icons/fi";

import type { UserPublic } from "../../client";

const items = [
  { Icon: FiHome, title: "Dashboard", path: "/" },
  { Icon: FiBriefcase, title: "Items", path: "/items" },
  { Icon: FiSettings, title: "User Settings", path: "/settings" },
];

interface SidebarItemsProps {
  onClose?: () => void;
}

const SidebarItems: React.FC<SidebarItemsProps> = ({ onClose }) => {
  const queryClient = useQueryClient();
  const textColor = "ui.main"; // Replace with your desired color
  const bgActive = "#E2E8F0"; // Replace with your desired background color
  const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"]);

  const finalItems = currentUser?.is_superuser
    ? [...items, { Icon: FiUsers, title: "Admin", path: "/admin" }]
    : items;

  const listItems = finalItems.map(({ Icon, title, path }) => (
    <Box
      component={Link}
      to={path}
      width="100%"
      padding={2}
      key={title}
      sx={{
        background: bgActive,
        borderRadius: "12px",
        color: textColor,
      }}
      onClick={onClose}
    >
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Icon />
      </IconContext.Provider>
      <span style={{ marginLeft: "8px" }}>{title}</span>
    </Box>
  ));

  return <Box>{listItems}</Box>;
};

export default SidebarItems;
