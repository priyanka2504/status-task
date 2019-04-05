import React, { Component } from 'react';

class EditableCellDropdown extends Component {
  
  render() {
    return (
      <td>
        <select name={this.props.cellDataDropdown.type} id={this.props.cellDataDropdown.id} value={this.props.cellDataDropdown.value} onChange={this.props.onProductTableUpdateDropdown}>
  <option value="1">Stage-1</option>
  <option value="2">Stage-2</option>
  <option value="3">Stage-3</option>
  <option value="4">Stage-4</option>
  <option value="5">Stage-5</option>

</select>
      </td>
    );

  }

}

export default EditableCellDropdown;