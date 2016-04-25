'use strict'

var ThoughtPanel = React.createClass({
        buttonClickHandler: function(){
        this.props.onChildClick(this.refs.textAreaInput.value)
    },
    render: function(){
        return (<div id='thoughtPanel'>
            <input type='textarea' placeholder='...your thoughts go here' ref='textAreaInput' />
            <br />
            <button onClick={this.buttonClickHandler} >Thought Board It!</button>
        </div>)
    }
})

var ThoughtList = React.createClass({
    render: function(){
        return(<div id='thoughtsList'> {
                this.props.thoughtList.map(function(thoughts,index){
                return <section key={index}>{thoughts}</section>
            })
        }
        </div>)
    }
})

var App = React.createClass({
    getInitialState: function(){
        return { thoughtArray: [] }
    },
    childButtonClickHandler: function(thought){
        this.state.thoughtArray.push(thought)
        this.setState({
            thoughtArray: this.state.thoughtArray
        })
    },
    render: function(){
        return (<div id='mainPanel'>
            <h1>Thought Board</h1>
            <ThoughtPanel onChildClick={this.childButtonClickHandler}/>
            <ThoughtList thoughtList={this.state.thoughtArray} />
            </div>)
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('entry-point')
)
