import React from "react";

export const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
  state = {
    email: "Test@gmail.com",
    firstName: "Ruby",
    lastName: "Reppson",
    avatar: ":)",
    updateAccount: (account) => this.updateAccount(account),

  };

  updateAccount = (account) => {
    this.setState({ ...account, });
  }

  render() {
return(
  <AccountContext.Provider value={this.state}>
    { this.props.children }
  </AccountContext.Provider>
    )
  }
}

export default AccountProvider;