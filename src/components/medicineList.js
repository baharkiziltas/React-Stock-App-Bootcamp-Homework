import React, { Component } from 'react';


export default class medicineList extends Component {

  constructor(props) {
    super(props);
    this.state = { stock: 0 };

  }

  increase = (i) => {
   const index = this.props.products.findIndex(item =>item.id === i.id)
   i.stock = i.stock +1
   const data = this.props.products
   data[index] = i
   this.props.setProducts(data)
  }

  increasetwo = (i) => {
    const index = this.props.products.findIndex(item =>item.id === i.id)
    i.stock = i.stock -1
    const data = this.props.products
    data[index] = i
    this.props.setProducts(data)
   }

  render() {
    return (
      
      <div>
        {this.props.products.map((item, index) => (
          <table key={item.id} className="table">
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
                <td style={{float:'right'}}>
                <button onClick={() => this.increase(item)} type="button" class="btn btn-dark">+</button>
                <button onClick={() => this.increasetwo(item)} type="button" class="btn btn-dark">-</button>
                </td>
              </tr>

            </tbody>
          </table>
        )


        )}
      </div>
    )
  }

}