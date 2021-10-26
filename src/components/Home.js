import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { GrAdd } from "react-icons/gr";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/users");
      setUsers(data);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      fetchData();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <h1 id="head1">Home Page</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>WebSite</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>{user.phone}</td>
              <td>
                <Button id="btnmain1" className="mx-2" outline color="primary">
                  <Link to={`/users/${user.id}`}>View</Link>
                </Button>
                <Button id="btnmain2" class="btnmain2" className="mx-2" outline color="warning">
                  <Link to={`/users/edit/${user.id}`}>Edit</Link>
                </Button>
                <Button id="btnmain3" class="btnmain3" className="mx-2" outline color="danger">
                  <Link to="/" onClick={() => deleteUser(user.id)}>
                    Delete
                  </Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button class="btn2" id="btn3" className="addUser" >
        <Link to="/users/add">
          <span id="btn31"><GrAdd /> Add User </span>
        </Link>
      </Button>
    </>
  );
};

export default Home;
