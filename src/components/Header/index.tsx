import { AppBar, Box, Button, Toolbar, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import LogoNf from "../../assets/nextfit-academia-logo.svg";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Link to="/" style={{ textDecoration: "none", display: "flex" }}>
            <img
              src={LogoNf}
              alt="NextFit Academia"
              height="40"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Avatar sx={{ bgcolor: "secondary.main", color: "primary.main" }}>
            GC
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
