import React, {Component} from 'react';
import moment from 'moment';
import style from 'styled-components';

class AddReminder extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const now = moment();
    const currentMonth = now.daysInMonth();
    this.setState({currentMonth: Number(currentMonth)});
  }

  handleReminder = (e) => {
    const {addReminder} = this.props;
    e.preventDefault();
    addReminder()
  }

  render() {
    return (
      <form>
        <Label htmlFor="reminder-day">Choose an appointment day: </Label>
        <Input id="reminder-day" type="date" name="reminder-day" required/>
        <Label htmlFor="reminder-time">Choose an appointment time: </Label>
        <Input id="reminder-time" type="time" name="reminder-time" required/>
        <Label htmlFor="reminder-colour">Choose a colour for you reminder: </Label>
        <Select id="reminder-colour" name="reminder-colour">
          <Option value="yellow">Yellow</Option>
          <Option value="blue">Blue</Option>
          <Option value="red">Red</Option>
        </Select>
        <Action type="submit" onClick={this.handleAddReminder}>Add</Action>
      </form>
    );
  }
}

export default AddReminder;

export const Action = style.button`
  display: block;
  margin-bottom: 24px;
  padding: 16px 20px;
  width: 220px;
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    background-color: royalblue;
    color: white;
  }
`;

export const Option = style.option`
`;

export const Select = style.select`
  display: block;
  margin-bottom: 24px;
  text-align: left;
  font-size: 16px;
  min-width: 220px;
  appearance: none;
  padding: 12px;
  cursor: pointer;
  background-color: transparent:
`;

export const Input = style.input`
  display: block;
  margin-bottom: 24px;
  text-align: left;
  padding: 12px;
  font-size: 16px;
`;

export const Label = style.label`
  display: block;
  margin-bottom: 12px;
  text-align: left;
`;
