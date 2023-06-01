import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { InputForm } from './InputForm/InputForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getFilterInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addContact = (name, number) => {
    const newUser = {
      name,
      number,
      id: nanoid(),
    };

    const isFound = this.state.contacts.find(el => el.name === name);
    isFound
      ? alert(`${name} is already in contacts`)
      : this.setState(prev => ({
          contacts: [...prev.contacts, newUser],
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
        <InputForm addContact={this.addContact} />
        <h1>Contacts</h1>
        <Filter
          getFilterInput={this.getFilterInput}
          filter={this.state.filter}
        />
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
