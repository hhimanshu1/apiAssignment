import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FormGroup, Label } from "reactstrap";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    website: "",
    phone: "",
  });
  useEffect(() => {
    fetchData();
  });
  const { id } = useParams();
  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(data);
  };
  return (
    <>
      <div>
        <div class="bod">
          <div class="many">
            <FormGroup id="viewm">
              <Label for="exampleUserName">Username: {user.username} </Label>
            </FormGroup>
            <FormGroup>
              <Label for="exampleName">Name: {user.name}</Label>
            </FormGroup>
            <FormGroup id="viewm">
              <Label for="exampleEmail">Email: {user.email}</Label>
            </FormGroup>

            <FormGroup>
              <Label for="exampleName">Phone: {user.phone}</Label>
            </FormGroup>
            <FormGroup id="viewm">
              <Label for="exampleWeb">WebSite: {user.website}</Label>
            </FormGroup>
          </div>
          <span id="btn1">
            <Link to="/">
              {" "}
              <span id="sp1">Back to Home </span>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
