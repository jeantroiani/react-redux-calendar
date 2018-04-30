import { connect } from 'react-redux';
import AddReminder from './index';
import {
  addReminder }
 from './actionCreators';

const mapDispatchToProps = {
  addReminder,
};

const mapStateToProps = (state) => ({
  reminders: state.reminders.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReminder);
