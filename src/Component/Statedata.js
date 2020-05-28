import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Card, Accordion, Button } from 'react-bootstrap';

class Statedata extends React.Component {
    constructor() {
        super();
        this.state = {
            stateData: {}
        }
    }

    componentDidMount() {
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            this.setState({ stateData: response.data })

        })
    }
    render() {
        let allkeys = Object.keys(this.state.stateData);

        return (

            <div className="row">
                <div className="col-md-12">



                    <Accordion>
                        {

                            allkeys.map((itm, key) => {
                                let totalActive = 0;
                                let totalConfirm = 0;
                                let totalDeaths = 0;
                                let totalRecover = 0;

                                let districts = this.state.stateData[itm].districtData;
                                let district_list = [];
                                for (let x in districts) {
                                    totalActive += districts[x].active;
                                    totalConfirm += districts[x].confirmed;
                                    totalDeaths += districts[x].deceased;
                                    totalRecover += districts[x].recovered;
                                    let ob = districts[x];
                                    ob["districtName"] = x;
                                    district_list.push(ob);
                                }
                                let distKeys = Object.keys(districts);
                                return (
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="primary" eventKey={key}>
                                                {itm} <span className="btn btn-dark pr-1 mr-1"> Total Active:{totalActive}</span><span className="btn btn-dark pr-1 mr-1">Total Confirmed:{totalConfirm}</span><span className="btn btn-dark pr-1 mr-1">Total Recovered:{totalRecover}</span><span className="btn btn-dark pr-1 mr-1">Total Deaths:{totalDeaths}</span>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={key}>
                                            <Card.Body>

                                                <table className="table table-bodered table-striped">
                                                    <thead>
                                                        <th>District</th>
                                                        <th>Active</th>
                                                        <th>Confirmed</th>
                                                        <th>Recover</th>
                                                        <th>Deaths</th>
                                                    </thead>
                                                    <tbody>
                                                        {

                                                            district_list.map((itm, key) => {
                                                               return( <tr>
                                                                    <td>{itm.districtName}</td>
                                                                    <td>{itm.active}</td>
                                                                    <td>{itm.confirmed}</td>
                                                                    <td>{itm.recovered}</td>
                                                                    <td>{itm.deceased}</td>
                                                                </tr>
                                                                )
                                                            })
                                                        }

                                                    </tbody>
                                                </table>


                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            })
                        }


                    </Accordion>
                </div>

            </div>

        );
    }

}


export default Statedata;