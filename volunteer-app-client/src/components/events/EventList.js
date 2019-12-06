import React from "react";
import { useSelector } from "react-redux";
import EventItem from "./EventItem";

const EventList = () => {
    const events = useSelector(state => state.events)
    const eventList = events && events.map((event, i) => {
        return <EventItem key={i} event={event} />
    })

    return (
        <div>
            {eventList}
        </div>
    )
}

export default EventList