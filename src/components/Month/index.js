import React, { Component } from 'react';
import moment from 'moment';
class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: null,
    }
  }
  componentDidMount () {
    const now = moment();
    const currentMonth = now.daysInMonth();
    this.setState({currentMonth: Number(currentMonth)});
  }

  render () {
    const { currentMonth } = this.props;
    return (
      <div>
        <ol>
          <li></li>
        </ol>
      </div>
    );
  }
}

export default Month;