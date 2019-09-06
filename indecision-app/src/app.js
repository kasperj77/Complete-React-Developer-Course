// JSX - JavaScript XML

var app = {
    title: "Jordan Kasper",
    subtitle: "this is some info"
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Jordan Kasper',
    age: 29,
    location: 'Vancouver, WA'

};

var userName = 'Jordan Kasper';
var userAge = 29;
var userLocation = 'Vancouver, WA';

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age : {user.age}</p>
        <p>Location : {user.location}</p>
        
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
