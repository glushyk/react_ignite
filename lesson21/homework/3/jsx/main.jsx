var React = require('react');
var ReactDOM = require('react-dom');

var Input = React.createClass({
  getInitialState: function(){
    return {
      validationStarted: false
    };
  },
  
  
  prepareToValidate: function(){},

  componentWillMount: function(){

    var startValidation = function(){
      this.setState({
        validationStarted: true
      })
    }.bind(this);

    startValidation();

  },
  
  
  handleChange: function(e){
    if (!this.state.validationStarted) {
      this.prepareToValidate();
    }
    this.props.onChange && this.props.onChange(e);
  },
  
  
  render: function(){
    var className = "";
    if (this.state.validationStarted) {
       className = (this.props.valid ? "valid" : "invalid");
    }
    
    return (
      <input 
        {...this.props}
        className={className} 
        onChange={this.handleChange} />
    );
  }
});


var App = React.createClass({

  getInitialState: function(){
    return {name: "", email: "", phone: "", message: ""};
  },
  handleChange: function(e){
    this.setState({
      name: e.target.value
    })
  },
  handleemailChange: function(e){
    this.setState({
      email: e.target.value
    })
  },
  handlePhoneChange: function(e){
    this.setState({
      phone: e.target.value
    })
  },
  handleMessageChange: function(e){
    this.setState({
      message: e.target.value
    })
  },
  validate: function(state){
    return {
      name: /^[a-zA-Z]+$/.test(state.name),
      email: /.+@.+\..+/.test(state.email),
      phone: /^[0-9]+$/.test(state.phone),
      message: /.{20,}/.test(state.message)
    }
  },
  render: function(){
    var valid = this.validate(this.state);
    return (
      <div>
        <div>
            <p>Enter name(only characters)</p>
            <Input valid={valid.name}
               value={this.state.name} 
               onChange={this.handleChange} 
               placeholder="only character"/>
        </div>
        <div>
            <p>Enter email(ee@ss.ss)</p>
            <Input valid={valid.email}
              value={this.state.email}
              onChange={this.handleemailChange}
              placeholder="ee@ss.ss" />
        </div>
        <div>
            <p>Enter phone(only numbers)</p>
            <Input valid={valid.phone}
              value={this.state.phone}
              onChange={this.handlePhoneChange}
              placeholder="only number" />
        </div>
        <div>
            <p>Enter message(more than 20 symbols)</p>
            <Input valid={valid.message}
              value={this.state.message}
              onChange={this.handleMessageChange}
              placeholder="More than 20 symbols" />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));