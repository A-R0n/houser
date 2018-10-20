import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        
            this.state = {
              inventory: []
            };

            this.deleteIt = this.deleteIt.bind(this)
        

    }

    componentDidMount() {
        axios.get(`/api/test`).then( results => {
          console.log(results.data);
          this.setState({
            inventory: results.data
          });
        });
        console.log(this.state.inventory)
    }

    deleteIt(id) {
        axios.delete(`/api/test?id=${id}`).then(results => {
            this.setState({ inventory: results.data})
        })
    }


    render() {
    let {inventory} = this.state
    var listItems = inventory.map((val, i) => {
        return <div key={i}>
        <p>Property Owner: {val.name_applicant}</p>
        <p>Address: {val.address_house}</p>
        <p>City: {val.city}</p>
        <p>State: {val.state_house}</p>
        <p>Zip: {val.zipcode }</p>
        </div>
        
    })
        return(
            <div className="Dashboard">
                <div className="Dash">
                    <h1 id="dash">Dashboard</h1>
                    <Link to="/wizard"><button id="button">Add New Property</button></Link>
                </div>
                <div className="greybox">
                    <House listing={listItems}>
                        <button id="listButton" onClick={this.deleteIt}>X</button>
                    </House>
                </div>
                
            </div>
        )
    }
}