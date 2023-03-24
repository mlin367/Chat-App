import React from 'react';

const UsersList = (props: UsersListProps) => (
  <div>
    <h3>Online users</h3>
    <ul>
      {props.users &&
        props.users.map((user, i) => <li key={user + i}>{user}</li>)}
    </ul>
  </div>
);

interface UsersListProps {
  users: string[];
}

export default UsersList;
