import React from 'react';

const Users = ({userlist}) => {
  return(
    <div className="container f3 white">
      {
        userlist.map(user=>{
          return(
            <div key={user.username} className="f3 white userBox">
              <p>{`${user.name} : ${user.email}`}</p>
            </div>
          )
        })
      }
     </div>
    )
}

export default Users;