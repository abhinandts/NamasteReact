// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello World from React"
// );

// const parent = React.createElement(
//     "div",
//     { id: "div" },
//     React.createElement(
//         "div",
//         { id: "div-inside-parent-div" },
//         [
//             React.createElement("h1", { id: heading }, "This is the H1....."),
//             React.createElement("h2", {}, "This is H2...."),
//             React.createElement("p", {}, "The first ever paragraph in react")
//         ]
//     )
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(parent);

// console.log(parent);


const heading = React.createElement("h1", {}, "This is the H1");

const parent = React.createElement(
    "div",
    {},
    [
        React.createElement(
            "div",
            { id: "firstDiv" },

            React.createElement(
                "h1",
                { id: "heading-inside-div1" },
                "Heading..."
            )
        ),
        React.createElement(
            "div",
            { id: "secondHeading" },
            [React.createElement(
                "h2",
                {},
                "h2 for the second div...."
            ),
            React.createElement(
                "h3",
                {},
                "This is the second element in the 2nd div"
            )
            ]

        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
console.log(parent);