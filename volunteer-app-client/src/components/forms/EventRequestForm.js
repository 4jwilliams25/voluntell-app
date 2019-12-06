import React, { useState } from 'react';
import { Button, NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { addEvent } from '../../store/events/actions';
import { useDispatch } from 'react-redux'

const EventRequestForm = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [desc, setDesc] = useState('');
  const [volunteers, setVolunteers] = useState(0);

  const toggle = () => setModal(!modal);

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addEvent({
          date: date,
          time: time,
          name: name,
          organization: org,
          description: desc,
          volunteers_needed: volunteers
      }));
      setModal(!modal);
  }

  return (
    <div>
      <NavLink color="success" className="text-light" onClick={toggle}>Request an Event</NavLink>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create an Event Request</ModalHeader>
        <ModalBody>
          
            <Form>
                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input type="text" name="date" id="date" onChange={(e) => setDate(e.target.value)} value={date} />
                </FormGroup>
                <FormGroup>
                    <Label for="time">Time</Label>
                    <Input type="text" name="time" id="time" onChange={(e) => setTime(e.target.value)} value={time}/>
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name} />
                </FormGroup>
                <FormGroup>
                    <Label for="organization">Organization</Label>
                    <Input type="text" name="organization" id="organization" onChange={(e) => setOrg(e.target.value)} value={org} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" onChange={(e) => setDesc(e.target.value)} value={desc} />
                </FormGroup>
                <FormGroup>
                    <Label for="volunteers">Volunteers Needed</Label>
                    <Input type="number" name="volunteers" id="volunteers" onChange={(e) => setVolunteers(e.target.value)} value={volunteers} />
                </FormGroup>
            </Form>

        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EventRequestForm;