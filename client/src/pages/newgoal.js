
import React from 'react';


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput">Title of new goal</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="New Goal"/>
                    <div className="form-group">
    <label for="exampleFormControlSelect2">categories</label>
    <select multiple className="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
</div>

 <div class="form-group">
 <label for="exampleFormControlTextarea1">Description</label>
 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"/>
</div>
<button type="submit" class="btn btn-primary">Create new goal</button>

</form>

                );
                    }
  }