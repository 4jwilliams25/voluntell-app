import React from 'react';
import { Row, Col } from "reactstrap"
import EventList from "../events/EventList"
import UserProfile from "../user/UserProfile"
import { Route, Switch } from "react-router-dom"

const Dashboard = () => {
    return (
            <div className="m-2">
                <Row>
                    <Col className="col-2" />
                    <Col className="col-8 bg-success">
                        <Switch>
                            <Route exact path="/" component={EventList} />
                            <Route path="/UserProfile/:id" component={UserProfile} />
                        </Switch>
                    </Col>
                    <Col className="col-2" />
                </Row>
            </div>
    )
}

export default Dashboard