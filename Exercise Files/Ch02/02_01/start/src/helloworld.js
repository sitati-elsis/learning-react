var HelloWorld = React.createClass({
    render: function () {
        return <div>
            <h1>Hello World</h1>
            <p>This is my second react code</p>
        </div>
    }
});
React.render(<HelloWorld/>, document.body);