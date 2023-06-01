import { Component } from 'react';
import PropTypes from 'prop-types';

export class InputForm extends Component {
  state = { name: '', number: '' };

  getName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        action=""
        style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '8px',
          padding: '12px',
          border: 'solid 1px',
        }}
        onSubmit={this.onSubmit}
      >
        <h3>Name</h3>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.getName}
            value={this.state.name}
          />
        </label>
        <h3>Number</h3>
        <label htmlFor="number">
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.getName}
            value={this.state.number}
          />
        </label>
        <button type="submit" style={{ width: '100px', marginTop: '16px' }}>
          Add Contact
        </button>
      </form>
    );
  }
}

InputForm.propTypes = {
  addContact: PropTypes.func,
};
