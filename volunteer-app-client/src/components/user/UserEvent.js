import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'

const UserEvent = (props) => {
    return (
        <div>
            <Card className="m-2">
                <CardBody>
                    <CardTitle>{props.eventDetails.name}</CardTitle>
                    <CardSubtitle>Organization: {props.eventDetails.organization}</CardSubtitle>
                    <CardSubtitle>Date and Time: {props.eventDetails.date} {props.eventDetails.time}</CardSubtitle>
                    <CardText>Description: {props.eventDetails.description}</CardText>
                    <CardText>Volunteers Attending: {props.eventDetails.volunteers_needed}</CardText>
                </CardBody>
            </Card>
        </div>
    )
};

export default UserEvent