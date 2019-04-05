import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.filterText = "";
        this.state.products = [];

    }
    handleUserInput(filterText) {
        this.setState({ filterText: filterText });
    };
    handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
    };

    handleAddEvent(evt) {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var product = {
            id: id,
            Stage: "",
            ResourceName: "",
            Location: "",
            Remarks: "",
            Positions: "",
            Skill: "",
            Team: "",
            DM: "",
            Owner: "",
            Customer: "",
            Net: "",
            DemandOwner: "",
            TargetDate: "",
            Place: "",
            Profile: "",
            InternalScreening: "",
            ProfileSubmitted: "",
            CustomerSelectionDate: "",
            OnboardingDate: "",
            IndentNo: "",
            JOBCodes: "",
            RequirementReceived: "",
            RFRNo: "",
            Band: ""
        }
        this.state.products.push(product);
        this.setState(this.state.products);

    }

    handleProductTable(evt) {
        console.log(evt.target.value)
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var products = this.state.products.slice();
        var newProducts = products.map(function (product) {

            for (var key in product) {
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;
                }
            }
            return product;
        });
        this.setState({ products: newProducts });
        console.log(this.state.products);
    };

    handleProductTableDropdown(evt) {
        console.log(evt.target.value)
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var products = this.state.products.slice();
        var newProducts = products.map(function (product) {

            for (var key in product) {
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;
                }
            }
            return product;
        })
        this.setState({ products: newProducts });
        console.log(this.state.products);
    };
    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
                <ProductTable onProductTableUpdateDropdown={this.handleProductTableDropdown.bind(this)} onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText} />
            </div>
        );
    }
}

export default Products;





