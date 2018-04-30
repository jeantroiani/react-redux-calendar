import React, {Component} from 'react';
import moment from 'moment';
import style from 'styled-components';

class AddReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      day: null,
      message: null,
      colour: null,
    }
  }

  componentDidMount() {
    const now = moment();
    const currentMonth = now.daysInMonth();
  }

  handleAddReminder = (e) => {
    const {addReminder} = this.props;
    e.preventDefault();
    // message: "hello world"
    // day: "2021-04-03"
    // time: "02:01"
    // color: "red"
    addReminder(moment());
  }

  handleFieldChange = ({target: {name, value}}) => {
    return this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <Label htmlFor="reminder-day">Choose an appointment day: </Label>
        <Input onChange={this.handleFieldChange} id="reminder-day" type="date" name="day" required/>
        <Label htmlFor="reminder-time">Choose an appointment time: </Label>
        <Input onChange={this.handleFieldChange} id="reminder-time" type="time" name="time" required/>
        <Label htmlFor="reminder-message">Reminder: </Label>
        <Message onChange={this.handleFieldChange} htmlFor="reminder-message" name="message" required maxLength={30}/>
        <Label htmlFor="reminder-colour">Choose a colour for you reminder: </Label>
        <Select onChange={this.handleFieldChange} id="reminder-colour" name="colour">
          <Option value="">Select Colour (Optional)</Option>
          <Option value="yellow">Yellow</Option>
          <Option value="blue">Blue</Option>
          <Option value="red">Red</Option>
        </Select>
        <Action onClick={this.handleAddReminder}>Add</Action>
      </form>
    );
  }
}

export default AddReminder;

export const Message = style.textarea`
  width: 220px;
  height: 42px;
  padding: 16px;
  font-size: 16px;
  margin-bottom: 24px;
`;

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
  position: relative;
`;

export const Select = style.select`
  display: block;
  width: 220px;
  margin-bottom: 24px;
  text-align: left;
  font-size: 16px;
  appearance: none;
  padding: 12px;
  cursor: pointer;
  background-color: transparent;
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
