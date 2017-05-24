var Note = React.createClass({

    getInitialState: function () {
        return {editing: false}
    },
    edit: function () {
        this.setState({editing: true});
    },
    save: function () {
        this.setState({editing: false});
    },
    remove: function () {
        alert("removing note");
    },
    // show content of our notes
    renderDisplay: function () {
        return (
            <div className="note">
                <p>{this.props.text}</p>
                <span>
                    <button
                        onClick={this.edit}
                        className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button
                        onClick={this.remove}
                        className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
        );
    },
    // allows us to edit opur notes
    renderForm: function () {
        return (
            <div className="note">
                <textarea defaultValue ={this.props.text} className='form-control'></textarea>
                <button
                    onClick={this.save}
                    className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk onClick={this.save}"/>
            </div>
        );

    },
    render: function () {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderDisplay();
        }
    }
});

React.render(<Note text="Hello world"/>, document.getElementById('react-container'));