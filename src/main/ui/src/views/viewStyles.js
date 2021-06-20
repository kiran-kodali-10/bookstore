const viewStyles = (theme) => ({
    // Home Styles
    cardStyle: {
        backgroundColor: "rgb(42, 42, 42)",
        color: "#fff"
    },
    buttonStyle: {
        backgroundColor: "#7e3ff2",
        color: "#000",
        marginTop: "20px",
        '&:hover': {
            backgroundColor: "#7e3ff290",
            transform: "translate-y(0.5)"
        }
    },
    // Upload and AdminConsole styles
    modalStyle: {
        top: "30%",
        left: "30%",
        height: "400px",
        width: "600px",
        backgroundColor: "white",
    },
    deleteIconStyle: {
        color: 'red',
        paddingLeft: '5%',
        '&: hover': {
            cursor: "pointer",
            backgroundColor: "green"
        }
    },
    formStyle: {
        width: "80%",
        backgroundColor: "rgb(42, 42, 42)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "30px 20px",
        marginTop: "20px",
        justifyContent: "center",
    },
    dropdown:{
        color: "#fff"
    },
    editIconStyle: {
        color: "#0057a4",
        paddingLeft: "5%"
    }
})

export default viewStyles;