import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";

const EditUser = () => {
  const history = useHistory();
  const { id } = useParams();
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
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/users/${id}`);
      setUser(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/users/${id}`, user);
    history.push("/");
  };
  return (
    <>
    <div class="bod">
    <div class="many">
    
      <h1 id="head1">Edit User: {id}</h1>
      <Form id="formstyle" onSubmit={(e) => onSubmit(e)}>
      <div class="mainh">
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
        </div>
        <div class="mainh">
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
        </div>
        <div class="mainh">
        <FormGroup class="mainh" >
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Your Email "
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </FormGroup >
        </div>
        <div class="mainh">
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
        </div>


        <FormGroup>
          <Label for="exampleWeb">WebSite</Label>
          <Input
            type="text"
            id="exampleWeb"
            placeholder="Enter Your WebSite"
            name="website"
            value={website}
            onChange={(e) => onInputChange(e)}
          />
        </FormGroup>
        <Button id="btn1" className="mt-10" >
          <span id="sp">Update </span>
        </Button>
      </Form>
      </div>
      </div>
    </>
  );
};


export default EditUser;
