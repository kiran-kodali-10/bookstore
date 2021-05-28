const navbarStyles = ({
    heading: {
        // marginLeft: "20px",
    },
    flex: {
        flexGrow: 1
    },
    linkPlacement: {
        display: "flex",
        justifyContent: "flex-end",
    },
    linkStyle: {
        color: "#fff",
        background: "#0000002c",
        borderRadius: "6px",
        '&:hover, &:focus': {
            background: "#ffffff2c"
        }
    },
    navLink: {
        textDecoration: "none",
        marginRight: "20px",
        textTransform: "capitalize"
    },
    activeRoute: {
        background: "#ffffff2c"
    },
    appBarStyle: {
        backgroundColor: "rgb(42, 42, 42)",
    }
})

export default navbarStyles;