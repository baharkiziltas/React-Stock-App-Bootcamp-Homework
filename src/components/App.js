import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MedicineList from './medicineList';



export default class App extends Component {

    state = {
        products: [],
        searchQuery: "",
    }
    //get api
    async componentDidMount() {
        const dataURL = "http://localhost:3002/Products";
        const response = await fetch(dataURL);
        const data = await response.json();
        this.setState({ products: data })

    }
    //medicine search
    searchMedicine = (Event) => {
        console.log(Event.target.value)
        this.setState({ searchQuery: Event.target.value })
    }


    setProducts = (products) => {
        this.setState({products: products})
    };
   


    render() {

        //medicine filtered
        let filteredMedicine = this.state.products.filter(
            (item) => {
                return item.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <div>
                <div className='container'>
                    <div className='row' >
                        <div className='col-lg-12' >
                            <h2>Faruk Eczanesi</h2>

                            <SearchBar searchMedicineProps={this.searchMedicine}></SearchBar>
                            <MedicineList setProducts = {this.setProducts}
                                          products={filteredMedicine}
                                          addStockProp={this.addStock}
                                          deleteStockProp={this.deleteStock}
                            ></MedicineList>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}



