'use strict'


var President = React.createClass({
  render: function(){
    return (
      <ul> {
        this.props.presidentArray.map(function(president){
          return <li key={president}>{president}</li>
        })
      }
      </ul>
    )
  }
})

var AddPresident = React.createClass({
  addPresidentHandler:function(){
    this.props.onChildClick(this.refs.pressieText.value)
  },
  render: function(){
    return (
      <form>
        <input type='text' ref='pressieText' />
        <input type='button' value='Add President' onClick={this.addPresidentHandler} />
      </form>
    )
  }
})

var PresidentList = React.createClass({
  getInitialState: function(){
    return{
      presidentArray:["Washington", "Adams", "Jefferson"]
    }
  },
  childButtonClickHandler: function(president) {
    console.log(president)
    this.state.presidentArray.push(president)
    this.setState({

      presidentArray: this.state.presidentArray
    })
  },
  render: function(){
    return(
       <div>
        <AddPresident presidentArray={this.state.presidentArray} onChildClick={this.childButtonClickHandler}/>
        <President presidentArray={this.state.presidentArray} />
       </div>
    )
  }
})


ReactDOM.render(
  <PresidentList />,
  document.getElementById('entry-point')
)
