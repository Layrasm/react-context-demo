import React from "react";
import { Form, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";


class AccountForm extends React.Component {
  state = { email: "", firstName: "", lastName:"", avatar:""  };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value,
   });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { email, firstName, lastName, avatar } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
            label="Email"
            type="text"
            name="Email"
            value={email}
            onChange={this.handleChange}
          />
        <Form.Input
          label="First Name"
          type="text"
          name="First Name"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Last Name"
          type="text"
          name="Last Name"
          value={lastName}
          onChange={this.handleChange}
        />

        <Form.Select
          label="Avatar"
          name="avatar"
          value={avatar}
          options={avatarOptions}
          onChange={this.handleChange}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>

    )
  }
}


const avatarOptions = [
  { key: "1", text: ":)", value: "Happy", },
  { key: "2", text: ":(", value: "Sad", },
  { key: "3", text: ":$", value: "Gold", },
  { key: "4", text: ":]", value: "Square Face", },
];


const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <AccountForm 
          { ...props }
          username={value.firstName}
          avatar={value.avatar}
          updateAccount={value.updateAccount}

        />
      )}
    </AccountConsumer>
  )
}

export default ConnectedAccountForm;




