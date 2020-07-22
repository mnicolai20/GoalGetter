
import React from 'react';


class NewGoal extends React.Component {
    constructor(props) { // as soon as component is rendered
        super(props); // calls the parent react component class structure
        this.state = { value: '' }; // intializing state data is being in compoent so its intializing it
    }

    

   
    

    render() { // renders bootstrap html
        return (
            <form>
                <div className="form-group">
                    <label forHTML="formGroupExampleInput">Title of new goal</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="New Goal" />
                    <div className="form-group">
                        <label for="exampleFormControlSelect2">categories</label>
                        <select multiple className="form-control" id="exampleFormControlSelect2">
                            <option>Health</option>
                            <option>Travel</option>
                            <option>Fitness</option>
                            <option>Personal Finance</option>
                            <option>Business</option>
                            <option>Social</option>
                        </select>
                    </div>
                </div>
           {/*   sub category drop down here dropdown*/}
                <div className="form-group">
                    <label forHTLM="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                </div>
                <button type="submit" className="btn btn-primary">Create new goal</button>

            </form>

        );
    }
}

export default NewGoal;