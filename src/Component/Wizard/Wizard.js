import React, {Component} from 'react'
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
// import {updateName, updateAddress, updateCity, updateState, updateZipcode} from '../../ducks/reducer';
import './Wizard.css';
import axios from 'axios';



export default class Wizard extends Component {
    constructor() {
        super();

        this.state = {
            name_applicant: '',
            address_house: '',
            city: '',
            state_house: '',
            zipcode: '',
            something: []
        }

        this.handleClick = this.handleClick.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateCity = this.updateCity.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updateZipcode = this.updateZipcode.bind(this);


    }

    handleClick() {
       const {name_applicant, address_house, state_house, city, zipcode} = this.state
        axios.post(`/api/test`,
        {name_applicant,
        address_house,
        state_house,
        city,
        zipcode})
        .then(res => {this.setState({something: res.data})
        console.log(this.state.something)
        })
    }

    updateName(e) {
        this.setState({
            name_applicant: e.target.value
        })
        console.log(this.state.name_applicant)
    }

    updateAddress(e) {
        this.setState({
            address_house: e.target.value
        })
        console.log(this.state.address_house)
    }

    updateCity(e) {
        this.setState({
            city: e.target.value
        })
        console.log(this.state.city)
    }

    updateState(e) {
        this.setState({
            state_house: e.target.value
        })
        console.log(this.state.state_house)
    }

    updateZipcode(e) {
        this.setState({
            zipcode: e.target.value
        })
        console.log(this.state.zipcode)
    }


    render() {
        return(
            <div className="Wizard"><h1>Add New Listing</h1>
                <Link to='/'>
                    <button className="Cancel">Cancel</button>
                </Link>
                <div className="Inputs">
                    <h3>Property Name</h3>
                    <input type="text" value = {this.state.name_applicant} onChange={(e) => this.updateName(e)}></input>
                    <h3>Address</h3>
                    <input value = {this.state.address_house} onChange={(e) => this.updateAddress(e)}></input>
                    <div className="Container">
                        <div id="left"><h3>City</h3>
                        <input value = {this.state.city} onChange={(e) => this.updateCity(e)}></input></div>
                        <div id="center"><h3>State</h3>
                        <input value = {this.state.state_house} onChange={(e) => this.updateState(e)}></input></div>
                        <div id="right"><h3>Zip</h3>
                        <input value = {this.state.zipcode} onChange={(e) => this.updateZipcode(e)}></input></div>
                    </div>
                    <Link to='/'>
                    <button onClick={this.handleClick} className="Complete">Complete</button>
                    </Link>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => state;

// export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZipcode})(Wizard);