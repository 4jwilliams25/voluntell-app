import React from 'react';
import { Row, Col } from "reactstrap"
import EventList from "../events/EventList"

const Dashboard = () => {
    return (
        <div className="m-2">
            <Row>
                <Col className="col-2" />
                <Col className="col-8 bg-success">
                    <EventList />
                </Col>
                <Col className="col-2" />
            </Row>
        </div>
    )
}

export default Dashboard