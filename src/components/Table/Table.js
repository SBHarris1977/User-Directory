import React, { Component } from "react";
//import "./Table.css";
//import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Table extends Component {
  render() {
    return (
      <table className="table table-hover" id="myTable">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="text-center">
              Image
            </th>
            <th scope="col" className="text-center">
              Name
            </th>
            <th scope="col" className="text-center">
              Phone
            </th>
            <th scope="col" className="text-center">
              Email
            </th>
            <th scope="col" className="text-center">
              DOB
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="w-25">
              <img
                src="https://avatars0.githubusercontent.com/u/54299910?s=460&v=4"
                className="img-fluid img-thumbnail"
                alt="Serina"
              ></img>
            </td>
            <td className="text-center">Serina Harris</td>
            <td className="text-center"> 5127675799</td>
            <td className="text-center">sbharris1977@gmail.com</td>
            <td className="text-center">09/13/1977</td>
          </tr>
          <tr>
            <td className="w-25">
              <img
                src="https://images.unsplash.com/photo-1438763298591-75a0d42b7265?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                className="img-fluid img-thumbnail"
                alt="Jeff"
              ></img>
            </td>
            <td className="text-center">Jeff Rogers</td>
            <td className="text-center">5124567700</td>
            <td className="text-center">jrodgers@gmail.com</td>
            <td className="text-center">01/21/1985</td>
          </tr>
          <tr>
            <td className="w-25">
              <img
                src="https://s.abcnews.com/images/Entertainment/GTY_jennifer_hudson_ml_151007_16x9_992.jpg"
                className="img-fluid img-thumbnail"
                alt="Jennifer"
              ></img>
            </td>
            <td className="text-center">Jennifer Hudson</td>
            <td className="text-center">5124440987</td>
            <td className="text-center">jHudson@gmail.com</td>
            <td className="text-center">09/12/1981</td>
          </tr>

          <tr>
            <td className="w-25">
              <img
                src="https://img1.looper.com/img/gallery/the-untold-truth-of-dwayne-the-rock-johnson/intro-1524225606.jpg"
                className="img-fluid img-thumbnail"
                alt="Dwayne"
              ></img>
            </td>
            <td className="text-center">Dwayne Johnson</td>
            <td className="text-center">5559804763</td>
            <td className="text-center">dwRock@gmail.com</td>
            <td className="text-center">05/02/1972</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
