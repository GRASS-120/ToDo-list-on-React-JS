import React from 'react';
import './DONE.css'


class Done extends React.Component {

    constructor(props) {  //  <-- вся ин-фа из props теперь в этом конструкторе
        super(props);

        this.state = {
            dataDONE: this.props.dataDONE,
            inputValue: '',
            changeValue: ''
        }
    }

    addDONE = () => {
        let newDONE = {
            text: this.state.inputValue,
            type: 'checkbox',
            display: false
        }

        this.setState( (state) => {
            if (this.state.inputValue !== ''){
            let dataDONE = state.dataDONE.concat(newDONE)
            console.log(this.state)

            return {
                dataDONE,
                inputValue: ''
            }
        }
        else alert('Поле не может быть пустым')
    }

    )}; 

    strikeThroughDone = (e) => {
        const el_id = e.target.id;
        const elId = el_id[el_id.length-1]
        const el = e.target

        this.setState((state) => {
            if (el.checked){
                let check = state.dataDONE[elId].check = true
                return {check}
            } else {
                let check = state.dataDONE[elId].check = false
                return {check}
            }
        })
    }
    
    editDoneDisplay = (e) => {
        const el = e.target.id;
        const elId = el[el.length-1] 

        this.setState((state) => {
            let display = state.dataDONE[elId].display ? state.dataDONE[elId].display = false : state.dataDONE[elId].display = true
            return {display}
        })
    }

    editDoneText = (e) => {
        const el = e.target.id;
        const elId = el[el.length-1] 
           
        this.setState((state) => {
            let display = state.dataDONE[elId].display ? state.dataDONE[elId].display = false : state.dataDONE[elId].display = true

            let text
            if (state.changeValue != ''){
                text = state.dataDONE[elId].text = state.changeValue
            }
            state.changeValue = ''
            return text, {display}
        })
    }

    deleteDoneElem = (e) => {
        const el = e.target.id;
        const elId = el[el.length-1] 
        const array = this.state.dataDONE

        this.setState(array.splice(elId, 1))
    }  

    changeInput = (e) => {
        this.setState({inputValue: e.target.value});
    };


    render(){

        window.state = this.state

        const display_block = {display: 'inline'}
        const display_none = {display: 'none'}

        const check_on = {textDecoration: 'line-through'}
        const check_off = {textDecoration: 'none'}

        const elem_DONE = this.state.dataDONE.map( (item, index) => {

            return (
                <div id="done_elem">
                    <input type={item.type} id={"inputDONE_" + index} onChange={this.strikeThroughDone.bind(this)}></input>
                    <label for={"input_DONE" + index}>
                        <div style={item.display ? display_block : display_none}>
                            <input onChange={(e) => {this.setState({changeValue: e.target.value})}} id={'s' + index}></input>
                        </div>
                        <p className='text' style={item.display ? display_none : display_block}><span style = {item.check ? check_on : check_off}>{item.text}</span></p>
                    </label>
                    <div id="done_func">
                            <span class="fas fa-check" style={item.display ? display_block : display_none}
                                id={'b' + index} onClick={this.editDoneText.bind(this)}>
                            </span>
                            <span class="fas fa-pencil-alt" style={item.display ? display_none : display_block} onClick={this.editDoneDisplay.bind(this)} id={'s' + index}></span>
                            <span class="fas fa-times" onClick={this.deleteDoneElem.bind(this)} id={"s" + index}></span>
                    </div>
                </div>
                 
            )
        })

        return (
            <div id="Done">
                <h2 className="block_title">DONE 📒</h2>
                <div id="add_do">
                    <input value={this.state.inputValue}  onChange={this.changeInput} placeholder="do..." type="text" id="add_do_input"></input>
                    <button  onClick={this.addDONE.bind(this)} type="button" class="btn btn-primary">Add</button>
                </div>

                    {elem_DONE}
            </div>
        )
    }
}

export default Done