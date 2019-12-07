import React from "react";
import { useSelector } from 'react-redux';
import UserEvent from './UserEvent';

const UserEventList = props => {
    // Get the logged in user's events
    const events = useSelector(state => state.events);
    const user_events = useSelector(state => state.userEvents);
    const thisUserEvents = events && user_events && user_events.filter(event => event.user_id === props.user.id).map(event => {
        for (let i = 0; i < events.length; i++) {
            if (events[i].id === event.event_id) {
                return events[i]
            }
        }
    })
    // Create the list of this user's events
    const usersEventList = thisUserEvents && thisUserEvents.map((event, i) => <UserEvent key={i} eventDetails={event} />)

    return (
    <div>{usersEventList}</div>
    )
}

export default UserEventList