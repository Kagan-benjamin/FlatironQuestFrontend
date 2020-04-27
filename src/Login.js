
import React from 'react';
import NavBar from './NavBar';
// import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import {Button} from "grommet";



function LogIn() {
  return (
    <div>
    <NavBar/>
      <div>
        <label>Log In </label>
      </div>
      <div >
        <form>
          <label>
            Username:
            <input type="text" name="name" />
          </label>
          <br></br>
          <label>
            Password:
            <input type="text" name="name" />
          </label>
            <input type="submit" value="Log In" />
        </form>
          <Button color="default" ><div><Link to="/signuppage">Create New User!</Link></div></Button>
      </div>
     
    </div>

   
  );
}

export default LogIn;
