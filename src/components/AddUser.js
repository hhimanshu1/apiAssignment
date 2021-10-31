import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";

const AddUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/users`, user);
    history.push("/");
  };
  return (
    <>
      <div class="bod">
        <div class="many">
          <h1 id="head1">Add User</h1>
          <Form id="formstyle" onSubmit={(e) => onSubmit(e)}>
            <FormGroup class="mainh">
              <Label for="exampleUserName">UserName</Label>
              <Input
                type="text"
                name="username"
                id="exampleUserName"
                placeholder="Enter Your UserName"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </FormGroup>
            <FormGroup class="mainh">
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </FormGroup>
            <FormGroup class="mainh">
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter Your Email "
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </FormGroup>
            <FormGroup class="mainh">
              <Label for="examplePhone">Phone</Label>
              <Input
                type="text"
                name="phone"
                id="examplePhone"
                placeholder="Enter Your Phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleWeb">WebSite</Label>
              <Input
                type="text"
                name="website"
                id="exampleWeb"
                placeholder="Enter Your WebSite"
                value={website}
                onChange={(e) => onInputChange(e)}
              />
            </FormGroup>
            <Button id="btn1">Add User</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
