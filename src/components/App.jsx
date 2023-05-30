import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { InputForm } from './InputForm/InputForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  getName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getContact = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    const names = [];
    this.state.contacts.map(el => names.push(el.name));
    names.includes(this.state.name)
      ? alert('lol')
      : this.setState(prev => ({
          contacts: [...prev.contacts, newUser],
          name: '',
          number: '',
        }));
  };

  filterNames = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  handleDelete = id => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <InputForm
          getName={this.getName}
          name={this.state.name}
          getContact={this.getContact}
          number={this.state.number}
        />
        <h1>Contacts</h1>
        <Filter getName={this.getName} filter={this.state.filter} />
        {this.state.contacts.length > 0 && (
          <Contacts
            contacts={this.filterNames()}
            handleDelete={this.handleDelete}
          />
        )}
      </>
    );
  }
}
