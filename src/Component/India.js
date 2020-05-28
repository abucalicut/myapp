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
                                      <h3>{this.state.indiaStatus.cases}</h3>  
</Card.Text>
<h4>[Today Cases : {this.state.indiaStatus.todayCases}]</h4>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3" >
                            <Card className="badge badge-warning" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <Card.Text>
                                    <h3>{this.state.indiaStatus.active}</h3>
</Card.Text>
<h4>[Today Cases : NA:]</h4>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3" >
                            <Card className="badge badge-success" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED CASES</Card.Title>
                                    <Card.Text>
                                    <h3>{this.state.indiaStatus.recovered}</h3>
</Card.Text>
<h4>[Today Cases : NA:]</h4>
                            </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3" >
                            <Card className="badge badge-danger" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <Card.Text>
                                    <h3>{this.state.indiaStatus.deaths}</h3>
</Card.Text>
<h4>[Today Cases : {this.state.indiaStatus.todayDeaths}]</h4>
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