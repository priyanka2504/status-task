import React, { Component } from 'react';
import EditableCell from './EditableCell';

class ProductRow extends Component {
    onDelEvent() {
        this.props.onDelEvent(this.props.product);
    }
    render() {

        return (
            <tr className="eachRow">
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type": "Stage",
                    value: this.props.product.Stage,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "ResourceName",
                    value: this.props.product.ResourceName,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Location",
                    value: this.props.product.Location,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Remarks",
                    value: this.props.product.Remarks,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Positions",
                    value: this.props.product.Positions,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Skill",
                    value: this.props.product.Skill,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Team",
                    value: this.props.product.Team,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "DM",
                    value: this.props.product.DM,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Owner",
                    value: this.props.product.Owner,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Customer",
                    value: this.props.product.OwnCustomerer,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Net",
                    value: this.props.product.Net,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "DemandOwner",
                    value: this.props.product.DemandOwner,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "TargetDate",
                    value: this.props.product.TargetDate,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Place",
                    value: this.props.product.Place,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Profile",
                    value: this.props.product.Profile,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "InternalScreening",
                    value: this.props.product.InternalScreening,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "ProfileSubmitted",
                    value: this.props.product.ProfileSubmitted,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "CustomerSelectionDate",
                    value: this.props.product.CustomerSelectionDate,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "OnboardingDate",
                    value: this.props.product.OnboardingDate,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "IndentNo",
                    value: this.props.product.IndentNo,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "JOBCodes",
                    value: this.props.product.JOBCodes,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "RequirementReceived",
                    value: this.props.product.RequirementReceived,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "RFRNo",
                    value: this.props.product.RFRNo,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Band",
                    value: this.props.product.Band,
                    id: this.props.product.id
                }} />
                <td className="del-cell">
                    <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn" />
                </td>
            </tr>
        );
    }
}

export default ProductRow;