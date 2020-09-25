import React, { useContext, } from "react";
import { Card, } from "semantic-ui-react";
import { AccountContext, } from "../providers/AccountProvider";

const Account = () => {
  const { firstName, lastName, email, avatar, } = useContext(AccountContext);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{ firstName }</Card.Header>
        <Card.Meta>
          Email: { email }
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Avatar: { avatar }</p>
      </Card.Content>
    </Card>
  );
};

export default Account;
