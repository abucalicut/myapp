import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

class World extends React.Component {
    constructor() {
        super();
        this.state = {
            worldData: []
        }
    }

    componentDidMount() {
        Axios.get("https://corona.lmao.ninja/v2/countries").then(response => {

            this.setState({ worldData: response.data })
        })
    }

    render() {
        return (
            <div>
                <table className="table table-prmary table-bodered table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Country</th>
                            <th>Total Active</th>
                            <th>Total Confirmed</th>
                            <th>Total Recovered</th>
                            <th>Tortal Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.worldData.map((itm, key) => {
                                return (
                                    <tr>
                                        <td><img style={{height:"40px",width:"40px"}} src={itm.countryInfo.flag}></img></td>
                                        <td>{itm.country} </td>
                                        <td>{itm.active}</td>
                                        <td>{itm.cases}</td>
                                        <td>{itm.recovered}</td>
                                        <td>{itm.deaths}</td>
                                    </tr>
                                )
                            })
                        }
                        

                    </tbody>
                </table>
            </div>
        );
    }

}


export default World;