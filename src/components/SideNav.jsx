import PropTypes from "prop-types";
import Box from "@mui/material/Box";

function SideNav({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        bgcolor: "background.paper",
        ariaLabel: "main mailbox folders",
        className: "side-nav",

        position: "absolute",
        top: 0,
        right: 0,
        p: 1.625,
        cursor: "pointer",
      }}
    >
      {children}
    </Box>
  );
}

SideNav.propTypes = {
  children: PropTypes.node,
};

export default SideNav;
