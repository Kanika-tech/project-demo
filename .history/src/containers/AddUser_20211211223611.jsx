import * as React from 'react';

export default function AddUser(props) {
 
  return (
    <div>ADDDDDDD user
        <div>
          <label for="name">Name (4 to 8 characters):</label>
          <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10"/>
        </div>
       </div>
    
  );
}
