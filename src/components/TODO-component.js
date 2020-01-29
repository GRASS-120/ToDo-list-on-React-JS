
import React from 'react';
import "./TODO.css"

class ToDoList extends React.Component {

    // .bind используется в классах!

    constructor(props) {  //  <-- вся ин-фа из props теперь в этом конструкторе
        super(props);

        this.state = {
            dataTODO: this.props.dataTODO,
            inputValue: '',
            changeValue: ''
        }
    }


    addTODO = () => {
        let newTODO = {
            text: this.state.inputValue,
            bool: false,
            type: 'radio',
            display: false
        }

        this.setState( (state) => {
            if (this.state.inputValue !== ''){
                let dataTODO = state.dataTODO.concat(newTODO)
                console.log(this.state)

            return {
                    dataTODO,
                    inputValue: ""
                }
            } 
            else alert('Поле не может быть пустым')
        }

    )};


    editTodoDisplay = (e) => {
        const el = e.target.id;
        const elId = el[el.length-1] 

        this.setState((state) => {
            let display = state.dataTODO[elId].display ? state.dataTODO[elId].display = false : state.dataTODO[elId].display = true
            return {display}
        })
    }

    editTodoText = (e) => {
        const el = e.target.id;
        const elId = el[el.length-1] 
           
        this.setState((state) => {
            let display = state.dataTODO[elId].display ? state.dataTODO[elId].display = false : state.dataTODO[elId].display = true

            let text
            if (state.changeValue != ''){
                text = state.dataTODO[elId].text = state.changeValue
            }
            state.changeValue = ''
            return text, {display}
        })
    }

    changeImportant = (e) => {
        const event = e.target.id
        const id = event[event.length-1]
        this.setState((state) => {
            let bool = state.dataTODO[id].bool ? state.dataTODO[id].bool = false : state.dataTODO[id].bool = true
            console.log(state.dataTODO[id])
            return {bool}
        })

    }

    deleteTodoElem = (e) => {
        const el = e.target.id;
        const elId = el[el.length-1] 
        const array = this.state.dataTODO

        this.setState(array.splice(elId, 1))
    }     

    changeInputTODO = (e) => {
        this.setState({inputValue: e.target.value});
    };

    render(){
        
        window.state = this.state

        const styles = {background: '#CD6155',}

        const styles_false = {
            background: 'none',
            border: 'none'
        }

        const display_block = {display: 'inline'}
        const display_none = {display: 'none'}

        const elem_TODO = this.state.dataTODO.map( (item, index) => {

            return (
                <div class="todo_elem" style={item.bool ? styles : styles_false}>
                    <input type={item.type} id={"inputTodo" + index} name='a'></input>
                    <label for={"inputTodo" + index}>
                        <div style={item.display ? display_block : display_none}>
                            <input onChange={(e) => {this.setState({changeValue: e.target.value})}} id={'s' + index}></input>
                        </div>
                        <p className='text' style={item.display ? display_none : display_block}>{item.text}</p>
                    </label> 
                    <div id="todo_func">
                        <span class="fas fa-check" style={item.display ? display_block : display_none} id={'b' + index} onClick={this.editTodoText.bind(this)}></span>
                        <span class="fas fa-pencil-alt" style={item.display ? display_none : display_block} onClick={this.editTodoDisplay.bind(this)} id={'s' + index}></span>
                        <span class="fas fa-exclamation" id={'s' + index} onClick={this.changeImportant.bind(this)}></span>
                        <span class="fas fa-times" onClick={this.deleteTodoElem.bind(this)} id={"s" + index}></span>
                    </div>
                </div>
            )
        });       
        
        return (
            <div id="ToDoList">
                <h2 className="block_title">TODO 📑</h2>
                    <div id="add_do">
                        <input value={this.state.inputValue} onChange={this.changeInputTODO} placeholder="do..." type="text" id="add_do_input"></input>
                        <button type="button" class="btn btn-primary" onClick={this.addTODO.bind(this)}>Add</button>
                    </div>

                {elem_TODO}

            </div>

        )
    }}


export default ToDoList