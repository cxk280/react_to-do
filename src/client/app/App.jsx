'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'
import Nav              from './Nav.jsx'
import Footer           from './Footer.jsx'
import TaskForm         from './TaskForm.jsx'

// create a React Component called _App_
export default class App extends React.Component{

    // every class gets a constructor.
    // this is where we init the state.
    constructor() {

        // we also need to wake up our ancestors
        super();

        // here's our state
        this.state = {
          tasks : {}
        }
    }

    //this is right after the component is mounted on the screen
    componentDidMount(){
        //go to the db and get the freshest tasks

        //when the data comes back, update the state
    }


    // note that classes do **not** have commas between their methods
    addTask(newTask) {
        newTask.completed = false
        newTask.task_id = Date.now()

        //when the data comes back, update the state
        this.state.tasks[newTask.task_id] = newTask
        this.setState({tasks: this.state.tasks})
    }

    //TOGGLE TASK (WE ONLY NEED THE KEYE HERE)
    toggleTask(key){
        this.state.tasks[key].completed = !this.state.tasks[key].completed;

        //send out this new change to the db(ajax)

        //bring in ajax data here
        this.setState({tasks: this.state.tasks})
    }


    // 90% of your components will render()
    // REMEMBER you can only return **one** root element from a render fn.
    render(){
        return(
            <container>
                <header>
                    < Nav />
                </header>
                <div className="container">
                    <TaskForm addTask={this.addTask.bind(this)}/>
                    <div className="row">
                    {/*everything goes in here*/}
                    </div>
                </div>
            <Footer />
            </container>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))
