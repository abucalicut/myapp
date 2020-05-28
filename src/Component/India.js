import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Statedata from './Statedata';
import Axios from 'axios';
class India extends React.Component {
constructor(){
    super();
    this.state={
        indiaStatus:[]
    }
}

componentDidMount(){
    Axios.get("https://corona.lmao.ninja/v2/countries/india").then(resopnse=>{
        this.setState({indiaStatus:resopnse.data})
    });
}

    render() {
        return (
            <div>
                <div className="col-md-12" >
                    <img src="https://www.countryflags.io/in/shiny/64.png" />
                    <h3>INDIA</h3>
                </div>
                <div className="col-md-12" >
                    <div className="row">
                        <div className="col-md-3" >
                            <Card className="badge badge-primary" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <Card.Text>
                                        {this.state.indiaStatus.cases}
</Card.Text>
                               [Today Cases : {this.state.indiaStatus.todayCases}]
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3" >
                            <Card className="badge badge-warning" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <Card.Text>
                                    {this.state.indiaStatus.active}
</Card.Text>
                               [Today Cases : {this.state.indiaStatus.active}]
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3" >
                            <Card className="badge badge-success" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED CASES</Card.Title>
                                    <Card.Text>
                                    {this.state.indiaStatus.recovered}
</Card.Text>
                               [Today Cases : {this.state.indiaStatus.recovered}]
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3" >
                            <Card className="badge badge-danger" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <Card.Text>
                                    {this.state.indiaStatus.deaths}
</Card.Text>
                               [Today Cases : {this.state.indiaStatus.todayDeaths}]
                            </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                <Statedata />
                </div>
            </div>
        );
    }

}


export default India;