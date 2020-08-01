import React from 'react';

import DeleteBtn from '../components/DeleteBtn/DeleteBtn';

//import NewGoal from '.pages/newgoal';


class UpdateGoal extends React.Component {
    constructor(props) { // as soon as component is rendered
        super(props); // calls the parent react component class structure
        this.state = { value: '' }; // intializing state data is being in compoent so its intializing it
    }

    

   
    
// populate info with what I already have // get the ID of the user is trying to update then make a backend  api call and then all info we are getting you save it into state. then just update that we get data base.
    render() { // renders bootstrap html
        return (
            <form>
                <div className="form-group">
                    <label>Title of new goal</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="New Goal" />
                </div>
                <div className="form-group">
                    <label>categories</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2">
                        <optgroup label='Health'>
                            <option>Sleep</option>
                            <option>Nutrition</option>
                            <option>Stress Relief</option>
                        </optgroup>

                        <optgroup label='Travel'>
                            <option>North America</option>
                            <option>South/Central America</option>
                            <option>Europe</option>
                            <option>Africa</option>
                            <option>Asia</option>
                            <option>Australia/Oceania</option>
                            <option>Antarctica</option>
                        </optgroup>

                        <optgroup label='Fitness'>
                            <option>Running</option>
                            <option>Weight Training</option>
                            <option>Special Events</option>
                        </optgroup>

                        <optgroup label='Personal Finance'>
                            <option>Investments</option>
                            <option>Saving</option>
                            <option>Spending</option>
                        </optgroup>

                        <optgroup label='Business'>
                            <option>Networking Events</option>
                            <option>Ideas</option>
                            <option>Mentoring</option>
                        </optgroup>

                        <optgroup label='Recreational Activities'>
                            <option>Softball</option>
                            <option>Happy Hour</option>
                            <option> Kickball</option>
                        </optgroup>
                    </select>
                </div>

                {/*   sub category drop down here dropdown*/}
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                </div>
                <button type="submit" className="btn btn-primary">Create new goal</button>
             <DeleteBtn/>
            </form>

        );
    }
}

export default UpdateGoal;