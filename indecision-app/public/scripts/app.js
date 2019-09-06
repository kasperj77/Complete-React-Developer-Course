"use strict";

// JSX - JavaScript XML

var app = {
    title: "Jordan Kasper",
    subtitle: "this is some info"
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var user = {
    name: 'Jordan Kasper',
    age: 29,
    location: 'Vancouver, WA'

};

var userName = 'Jordan Kasper';
var userAge = 29;
var userLocation = 'Vancouver, WA';

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age : ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location : ",
        user.location
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
