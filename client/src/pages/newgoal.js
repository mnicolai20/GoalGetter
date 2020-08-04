import React from 'react';


class NewGoal extends React.Component {
    constructor(props) { // as soon as component is rendered
        super(props); // calls the parent react component class structure
        this.state = { value: '' }; // intializing state data is being in compoent so its intializing it
    }

    createGoal(event) {
       event.preventDefault();

       fetch('/api/goals', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
            title: document.querySelector('input[name="title"]').value,
            category: document.querySelector('select[name="category"]').value,
            description: document.querySelector('textarea[name="description"]').value,
           })
       })

    }
    render() { // renders bootstrap html
        return (
            <form onSubmit = {this.createGoal} >
                <div className="form-group">
                    <label>Title of new goal</label>
                    <input type="text" name="title" className="form-control" id="formGroupExampleInput" placeholder="New Goal" />
                </div>
                <div className="form-group">
                    <label>categories</label>
                    <select multiple  name= "category" className="form-control" id="exampleFormControlSelect2">
                        <optgroup label='health'>
                            <option value="sleep">Sleep</option>
                            <option value="nutrition">Nutrition</option>
                            <option value= "stress-relief">Stress Relief</option>
                        </optgroup>

                        <optgroup label='travel'>
                            <option value= "the-u.s">The U.S</option>
                            <option value= 'europe'>Europe</option>
                            <option value= 'asian'>Asia</option>
                        </optgroup>

                        <optgroup label='fitness'>
                            <option value= 'running'>Running</option>
                            <option value= 'weight-training'>Weight Training</option>
                            <option value='specialevents'>Special Events</option>
                        </optgroup>

                        <optgroup label='personal finance'>
                            <option value='investments'>Investments</option>
                            <option value='savings'>Saving</option>
                            <option value='spending'>Spending</option>
                        </optgroup>

                        <optgroup label='business'>
                            <option value='networking'>Networking Events</option>
                            <option value='ideas'>Ideas</option>
                            <option value='mentoring'>Mentoring</option>
                        </optgroup>

                        <optgroup label='Recreational Activities'>
                            <option value='softball'>Softball</option>
                            <option value= 'happy-hour'>Happy Hour</option>
                            <option value='kickball'> Kickball</option>
                        </optgroup>
                    </select>
                </div>

                {/*   sub category drop down here dropdown*/}
                <div className="form-group">
                    <label>description</label>
                    <textarea className="form-control"  name= "description" id="exampleFormControlTextarea1" rows="3" />
                </div>
                <button type="submit" className="btn btn-primary">Create new goal</button>

            </form>

        );
    }
}

export default NewGoal;