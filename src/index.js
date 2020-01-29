import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './components/TODO-component';
import Done from './components/DONE-component';
import Footer from './components/Footer-component';


let dataTODO = [
    {text: "first ⚔️", bool: false, type: "radio", display: false},
    {text: "two 🗡️", bool: false, type: "radio", display: false},
    {text: "three 🏹", bool: false, type: "radio", display: false},
    {text: "four 🛡️", bool: false, type: "radio", display: false}
]

let dataDONE = [
    {text: "first 🎮", check: false, type: "checkbox", display: false},
    {text: "two 🗺️", check: false, type: "checkbox", display: false},
    {text: "three 🧬", check: false, type: "checkbox", display: false},
    {text: "four 🏳️‍🌈", check: false, type: "checkbox", display: false}
]


const title = <h1 className="title"><span id='list'>TODO</span> list <span class="fas fa-code"></span></h1>

const Site = () => {
    return (
        <div className="page">
            <div id="page-wrap">
                {title} 
                <ToDoList dataTODO={dataTODO} />
                <Done dataDONE={dataDONE}/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

ReactDOM.render(<Site/>, document.getElementById('root'));