const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "Hellow React in H1 Tag"),
        React.createElement("h2", {}, "Hello React in H2 Tag"),
        React.createElement("h3", {}, "Hello React in H3 Tag")
    ]),
    React.createElement("child2", {}, [
        React.createElement("h4", {}, "Hello React in H4 Tag"),
        React.createElement("h5", {}, "Hello in React H5 Tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
