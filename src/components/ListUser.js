import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export const ListUser = () => {
  const { getUsers } = useAuth();
  const [listUser, setListUser] = useState({});
  useEffect(() => {
    const algo = getUsers();
    console.log(algo);
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">List Users</h2>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};
