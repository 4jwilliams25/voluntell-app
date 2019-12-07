import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeUserEvent } from '../../store/user-events/actions'
import { updateEvent } from '../../store/events/actions'

const UserEvent = (props) => {
    const dispatch = useDispatch()
    const userEvents = useSelector(state => state.userEvents)
    
    const theEvent = userEvents && props.eventDetails && userEvents.filter(event => event.event_id === props.eventDetails.id && event.user_id === 1)[0]

    const removeEvent = () => {
        dispatch(removeUserEvent(theEvent.id));
        dispatch(updateEvent({volunteers_needed: props.eventDetails.volunteers_needed + 1}, props.eventDetails.id));
    }

    return (
        <div>
            <Card className="m-2">
                <CardBody>
                    <CardTitle>{props.eventDetails && props.eventDetails.name}</CardTitle>
                    <CardSubtitle>Organization: {props.eventDetails && props.eventDetails.organization}</CardSubtitle>
                    <CardSubtitle>Date and Time: {props.eventDetails && props.eventDetails.date} {props.eventDetails && props.eventDetails.time}</CardSubtitle>
                    <CardText>Description: {props.eventDetails && props.eventDetails.description}</CardText>
                    <CardText>Volunteers Attending: {props.eventDetails && props.eventDetails.volunteers_needed}</CardText>
                </CardBody>
                <Button color="warning" size="sm" onClick={() => removeEvent()}>Withdraw</Button>
            </Card>
        </div>
    )
};

export default UserEvent