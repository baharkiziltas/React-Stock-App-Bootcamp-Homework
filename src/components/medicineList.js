import React, { Component } from 'react';


export default class medicineList extends Component {


  render() {
    return (
      <div>
        {this.props.products.map((item) => (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Barcode</th>
                <th scope="col">Medicine Name</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td >{item.barcode}</td>
                <td>{item.name}</td>
                <td >{item.stock}</td>
              </tr>

            </tbody>
          </table>
        )


        )}
      </div>
    )
  }
}



