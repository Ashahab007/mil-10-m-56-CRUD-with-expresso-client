import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

// 14.2 Created a Users component
const Users = () => {
  // 14.3 get the data and set it in the state

  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  // 15.0 requirement is delete user from the ui by double conformation using sweet alert
  // 15.2 create the handleDelete function and receive with id
  const handleDelete = (_id) => {
    // 15.4 set a sweet alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.isConfirmed);
        // 15.5 fetching the users data by id from db after user confirms
        fetch(`http://localhost:3000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data); //{acknowledged: true, deletedCount: 1}
            // todo: Delete also the user from the firebase
            // 15.6 set the second confirmation upon deleteCount: 1
            if (data.deletedCount) {
              console.log(data.deletedCount);
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted successfully.",
                icon: "success",
              });
              //  15.7 show remaining users in ui after delete
              const remainingUsers = users.filter((user) => user._id !== _id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div>
      {/* 14.4 show the users in a table */}
      <p>Users: {users.length}</p>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{user.email}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">D</button>
                  <button className="btn btn-ghost btn-xs">E</button>
                  <button
                    //   15.1 added handle delete
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
