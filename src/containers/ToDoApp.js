import React, { Component } from 'react';
import Do from '../components/Do'
import AddForm from '../components/AddForm'
import '../App.css'

class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doText: '',
            //always set the info of components that i want to render as object in array
            do: [],
            isCompeletedClass: 'red',
        }
    }

    inputTextHandler = (e) => {
        this.setState({ doText: e.target.value })
    }

    // always save the data of the component as object in array in the state and not the state itself
    addDoHandler = () => {
        const newDo = {
            task: this.state.doText,
            isCompleted: false,
            id: Date.now()

        }
        this.state.do.push(newDo)
        this.setState({ do: this.state.do })
        this.setState({ doText: '' })

    }

    deleteHandler = (id) => {
        console.log(id)
        let afterDelArr = this.state.do.filter((el) => id !== el.id)
        this.setState({ do: afterDelArr })
    }

    isCompletedHandler = (id) => {
 
        this.setState({do:!this.state.do.isCompleted})

    }




    render() {
        return (
            <div className='app'>
                <header className='header'>
                    <i className="far fa-check-square"></i>
                    <h1 className='heading'>Website Todo</h1>
                </header>
                <div className='do-board'>

                    {this.state.do.map((el) =>
                        <Do task={el.task}
                            isCompleted={el.isCompleted}
                            key={el.id}
                            del={(id) => this.deleteHandler(el.id)}
                            addClass={this.state.isCompeletedClass}
                            isComp={()=>this.isCompletedHandler(el.id)}

                        />)}

                </div>
                <AddForm addText={this.inputTextHandler} addDo={this.addDoHandler} doText={this.state.doText} />

            </div>);
    }
}

export default ToDoApp;