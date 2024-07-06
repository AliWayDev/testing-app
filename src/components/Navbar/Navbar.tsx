import { Box } from "@mui/material";
import Logo from "../../assets/icons/logo";
import { Layout } from "../Layout/Layout";
import { HomeIcon } from "../../assets/icons/home";
import { MarketIcon } from "../../assets/icons/market";
import { RatingIcon } from "../../assets/icons/rating";
import { CompetitionIcon } from "../../assets/icons/competition";
import { OrgIcon } from "../../assets/icons/org";
import { INavbarItem } from "../../interfaces/components/navbar";
import { useNavigate } from "react-router-dom";
import LanguageSelect from "./LanguageSelect";
import { BellIcon } from "../../assets/icons/bell";
import ProfileElements from "./ProfileElements";
import { LiveIcon } from "../../assets/icons/live";

const nav_items: INavbarItem[] = [
  {
    name: "Лента",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    name: "Маркетплейс",
    icon: <MarketIcon />,
  },
  {
    name: "Рейтинги",
    icon: <RatingIcon />,
  },
  {
    name: "Cоревнования",
    icon: <CompetitionIcon />,
  },
  {
    name: "Организации",
    icon: <OrgIcon />,
    path: "/org",
  },
  {
    name: "Live",
    icon: <LiveIcon />,
  },
];

export const Navbar = () => {
  const navigation = useNavigate();
  const currentPathName: string = window.location.pathname;
  const isThereNotification = true; // needed to get from db

  const activeColorGetter = (path: string) => {
    if (currentPathName === path) {
      return "#06082C";
    } else {
      return "nav_text";
    }
  };

  return (
    <Box bgcolor="#fff" py={2}>
      <Layout>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Logo />

          <Box display="flex" gap={4}>
            {nav_items.map((i) => (
              <Box
                onClick={() => navigation(i.path || "")} // same situation
                color={activeColorGetter(i.path || "")} // in the future path will be there!
                display="flex"
                gap="5px"
                alignItems="center"
                fontWeight={500}
                fontSize="14px"
                sx={{
                  cursor: "pointer",
                  ":hover": { color: "#06082C" },
                  transition: "linear 0.1s",
                }}
                key={i.name}
              >
                {i.icon}
                {i.name}
              </Box>
            ))}
          </Box>

          <LanguageSelect />

          <Box
            position="relative"
            color="nav_text"
            height="100%"
            display="flex"
            alignItems="center"
            sx={{
              cursor: "pointer",
              ":hover": { color: "#06082C" },
              transition: "linear 0.1s",
            }}
          >
            {isThereNotification && (
              <Box
                position="absolute"
                right="-1px"
                top="1px"
                width="5px"
                height="5px"
                borderRadius="100%"
                bgcolor="#D21010"
              ></Box>
            )}
            <BellIcon />
          </Box>
          <ProfileElements />
        </Box>
      </Layout>
    </Box>
  );
};
