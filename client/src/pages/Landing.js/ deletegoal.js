import React from 'react';
import NewGoal from '.pages/newgoal';

class DeleteGoal extends React.Component {
    constructor(props) { // as soon as component is rendered
        super(props); // calls the parent react component class structure
        this.state = { value: '' }; // intializing state data is being in compoent so its intializing it
    }

// css models

// impliment font awesome icons

    render() { // renders bootstrap html
        return (
            
            <div>

<div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel(item) } } />
               {/* <button type="submit" className="btn btn-primary">Delete</button> */}
                

            </div>
            
        );

    }
}

    export default DeleteGoal;