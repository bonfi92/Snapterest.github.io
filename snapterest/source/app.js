var React = require('react');
var ReactDOM = require('react-dom');

/*WITHOUT JSX*/
/*var listItemElement1 = React.createElement('li', {className: 'item'}, 'Item 1');
var listItemElement2 = React.createElement('li', {className: 'item'}, 'item 2');
var listItemElement3 = React.createElement('li', {className: 'item'}, 'item 3');

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];

var listOfItems=React.createElement('ul', {className: 'list'}, reactFragment);

ReactDOM.render(listOfItems, document.getElementById('react-application'));*/

/*WITH JSX*/
var listOfItems =
<ul className="list">
  <li className="item">Item1</li>
  <li className="item">Item2</li>
  <li className="item">Item3</li>
</ul>;

ReactDOM.render(listOfItems, document.getElementById('react-application'));
