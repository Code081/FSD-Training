import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Registration({regData}) { // using props to export data via regData
    const  [name, setName] = useState("");
    const  [email, setEmail] = useState("");
    const  [pwd, setPwd] = useState("");
    function getData(e){
        e.preventDefault();
        const data = {
            name, email, pwd
        }
        regData(data)
    }
  return (
    <div>
        <h1>Welcome to Registration Page</h1>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            onChange={(e)=>{setName(e.target.value)}}
            type="text"
            class="form-control"
            id="name"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            onChange={(e)=>{setPwd(e.target.value)}}
            //capturing values and setting in the fuction
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button onClick={getData} type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
