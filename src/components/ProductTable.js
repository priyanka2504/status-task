import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  
  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {
      if (product.Owner.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });
    return (
      <div>


      <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
        <th>    Stage</th>
        <th>      Resource Name</th>
        <th>     Location</th>
        <th>  Remarks</th>
        <th>  Positions</th>
        <th>  Skill</th>
        <th> Team</th> 
        <th>  DM</th>
        <th>  Owner</th>
        <th>  Customer</th>
        <th>  Net</th>
        <th>  Demand Owner</th>
        <th>  Target Date</th>
        <th>  Place</th>
        <th>  Profile</th>
        <th>  Internal Screening</th>
        <th>  Profile Submitted</th>
        <th>   Customer Selection Date</th>
        <th>   Onboarding Date</th>
        <th>   Indent No</th>
        <th>  JOB Codes</th>
        <th>  Requirement Received</th>
        <th>   RFR No</th>
        <th>   Band</th>
            </tr>
          </thead>

          <tbody>
            {product}

          </tbody>

        </table>
      </div>
    );

  }

}

export default ProductTable;