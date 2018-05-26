import React, { Component } from 'react';
import { Auth, API } from 'aws-amplify'
import { Redirect } from 'react-router-dom'


class PrivatePage extends Component {
  constructor(){
    super()
    this.state = {
      user: null,
      team: "React", todos: []
    }
  }

  componentDidMount = async () => {
    try{
      const data = await Auth.currentUserInfo()
      this.setState({user: data})
      const todos = await API.get('todosCRUD', `/todos/${this.state.team}`)
      this.setState({ todos });
    }catch(e){
      this.setState({user: false})

      console.log(e);

    }
  }

  async saveTodo(event) {
    event.preventDefault();

    const { team, todos } = this.state;
    const todoId = todos.length + 1;
    const text = this.refs.newTodo.value;

    const newTodo = {team, todoId, text};
    await API.post('todosCRUD', '/todos', { body: newTodo });
    todos.push(newTodo);
    this.refs.newTodo.value = '';
    this.setState({ todos, team });
  }
      render() {
        console.log(this.state.user);
        if(this.state.user === false){
          return <Redirect
            to={{
              pathname: "/signin",
            }}
          />
        }
        let todoItems = this.state.todos.map(({todoId, text}) => {
          return <li key={todoId}>{text}</li>;
        });

        return (
          <div style={styles}>
            <h1>{this.state.team} Todos</h1>
            <ul>
              {todoItems}
            </ul>

            <form onSubmit={this.saveTodo.bind(this)}>
              <input ref="newTodo" type="text" placeholder="What do you want to do?" />
              <input type="submit" value="Save" />
            </form>
          </div>
        );
      }

    }
    let styles = {
      margin: "0 auto",
      width: "25%"
    };


export default PrivatePage;
