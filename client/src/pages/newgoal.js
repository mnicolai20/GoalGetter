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
                </div>
                <div className="form-group">
                    <label forHTML="exampleFormControlSelect2">categories</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2">
                        <optgroup label='health'>
                            <option>Sleep</option>
                            <option>Nutrition</option>
                            <option>Stress Relief</option>
                        </optgroup>

                        <optgroup label='travel'>
                            <option>The U.S</option>
                            <option>Europe</option>
                            <option>Asia</option>
                        </optgroup>

                        <optgroup label='fitness'>
                            <option>Running</option>
                            <option>Weight Training</option>
                            <option>Special Events</option>
                        </optgroup>

                        <optgroup label='personal finance'>
                            <option>Investments</option>
                            <option>Saving</option>
                            <option>Spending</option>
                        </optgroup>

                        <optgroup label='business'>
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
                    <label forHTML="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                </div>
                <button type="submit" className="btn btn-primary">Create new goal</button>

            </form>

        );
    }
}

export default NewGoal;