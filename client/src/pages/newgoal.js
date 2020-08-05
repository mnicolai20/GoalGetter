import React from 'react';
import axios from 'axios';

//import {Redirect} from 'react-router-dom';



class NewGoal extends React.Component {
    constructor(props) { // as soon as component is rendered
        super(props); // calls the parent react component class structure
        this.state = { 
            title: '',
            category: "",
            description:""
        }; // intializing state data is being in compoent so its intializing it
    }

    createGoal = (event)=> {
       event.preventDefault();
        const {title, category, description} = this.state
        const payload = {
            title,
            category,
            description
        }

        axios.post("/api/goals", payload).then((res)=>{
            //do something with res 
            console.log(res)
        })
        
    //    fetch('/api/goals', {
    //        method: 'POST',
    //        headers: {
    //            'Content-Type': 'application/json'
    //        },
    //        body: JSON.stringify({
    //         title: document.querySelector('input[name="title"]').value,
    //         category: document.querySelector('select[name="category"]').value,
    //         description: document.querySelector('textarea[name="description"]').innerText,
    //        })
    //    })

    }

    handleChange = (e) =>{
        const {name, value} = e.target
        // console.log(e.target)
        this.setState({[name]: value})
    }

    handleClick = (e) =>{
        this.setState({category: e.target.value})
    }
     
     App({ history }) {
        function onSubmit() {
         history.push('/homepage');
       }
      return (
        <button onClick={onSubmit}>Click me</button>
      );
    } 
   

    render() { // renders bootstrap html
        return (
            <form onSubmit = {this.createGoal} >
                <div className="form-group">
                    <label>Title of new goal</label>
                    <input type="text" name="title" onChange={this.handleChange} className="form-control" id="formGroupExampleInput" placeholder="New Goal" />
                </div>
                <div className="form-group">
                    <label>categories</label>
                    <select multiple  name= "category" className="form-control" id="exampleFormControlSelect2">
                        <optgroup label='Health'>
                            <option name='category' onClick={this.handleClick} value ="sleep">Sleep</option>
                            <option name='category' onClick={this.handleClick} value ="nutrition">Nutrition</option>
                            <option name='category' onClick={this.handleClick} value = "stress-relief">Stress Relief</option>
                        </optgroup>

                        <optgroup label='Travel'>
                            <option name='category' onClick={this.handleClick} value = "North America">North America</option>
                            <option name='category' onClick={this.handleClick} value = "Central/South America">Central/South America</option>
                            <option name='category' onClick={this.handleClick} value = "Africa">Africa</option>
                            <option name='category' onClick={this.handleClick} value = 'Europe'>Europe</option>
                            <option name='category' onClick={this.handleClick} value = 'Australia/Oceania'>Australia/Oceania</option>
                            <option name='category' onClick={this.handleClick} value = 'Asia'>Asia</option>
                            <option name='category' onClick={this.handleClick} value = 'Antarctica'>Antarctica</option>
                        </optgroup>

                        <optgroup label='Fitness'>
                            <option name='category' onClick={this.handleClick} value = 'running'>Running</option>
                            <option name='category' onClick={this.handleClick} value = 'weight-training'>Weight Training</option>
                            <option name='category' onClick={this.handleClick} value ='specialevents'>Special Events</option>
                        </optgroup>

                        <optgroup label='Personal Finance'>
                            <option name='category' onClick={this.handleClick} value ='investments'>Investments</option>
                            <option name='category' onClick={this.handleClick} value ='savings'>Saving</option>
                            <option name='category' onClick={this.handleClick} value ='spending'>Spending</option>
                        </optgroup>

                        <optgroup label='Business'>
                            <option name='category' onClick={this.handleClick} value ='networking'>Networking Events</option>
                            <option name='category' onClick={this.handleClick} value ='ideas'>Ideas</option>
                            <option name='category' onClick={this.handleClick} value ='mentoring'>Mentoring</option>
                        </optgroup>

                        <optgroup label='Recreational Activities'>
                            <option name='category' onClick={this.handleClick} value ='softball'>Softball</option>
                            <option name='category' onClick={this.handleClick} value = 'happy-hour'>Happy Hour</option>
                            <option name='category' onClick={this.handleClick} value ='kickball'> Kickball</option>
                        </optgroup>
                    </select>
                </div>

                {/*   sub category drop down here dropdown*/}
                <div className="form-group">
                    <label>description</label>
                    <textarea className="form-control" onChange={this.handleChange} name= "description" id="exampleFormControlTextarea1" rows="3" />
                </div>
                <button onClick={this.onSubmit} className="btn btn-primary">Create new goal</button>

            </form>

        );
    }
}

export default NewGoal;