import React from 'react';
import NavBar from './NavBar';
import { Link } from "react-router-dom";
import {Button} from "grommet";

function SignupPage() {
    return (
      <div>
      <NavBar/>
        <div>
          <label>Welcome! </label>
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
                
              <Button color="default" ><div><Link to="/startscreen">Begin Your Quest!</Link></div></Button>
          </form>
           
        </div>
       
      </div>
  
     
    );
  }
  
  export default SignupPage;