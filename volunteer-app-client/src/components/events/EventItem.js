import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
import { removeEvent } from '../../store/events/actions';
import { useDispatch } from 'react-redux';

const EventItem = props => {
    const dispatch = useDispatch()

    return (
        <div>
            <Card className="m-2">
                <CardBody>
                    <CardTitle>{props.event.name}</CardTitle>
                    <CardSubtitle>Organization: {props.event.organization}</CardSubtitle>
                    <CardSubtitle>Date and Time: {props.event.date} {props.event.time}</CardSubtitle>
                    <CardText>{props.event.description}</CardText>
                    <CardText>{props.event.volunteers_needed}</CardText>
                    <Button className="mr-2" color="warning">Edit</Button>
                    <Button className ="mr-2" color="danger" onClick={() => dispatch(removeEvent(props.event.id))}>Delete</Button>
                    <Button color="success">Volunteer</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default EventItem