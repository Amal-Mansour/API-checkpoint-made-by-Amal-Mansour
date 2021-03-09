import React from 'react'
import { Card } from 'react-bootstrap'
import Avatar from './assets/pngtree-vector-avatar-icon-png-image_702436.jpg'

const ListOfUser = ({ user }) => {
  return (
    <div >

      <Card style={{ width: '20rem', height: '33rem' }} className="stylt-Cards">
        <Card.Img variant="top" src={Avatar} className="style-img" />
        <Card.Body>

          <Card.Title> {user.id} {user.name}</Card.Title>
          <Card.Text><b>username:</b> {user.username}</Card.Text>
          <Card.Text><b>Email:</b> {user.email}</Card.Text>
          <Card.Text><b>Phone:</b> {user.phone}</Card.Text>
          <Card.Text><b>address:</b> {user.address.street}<br />
            {user.address.city}
          </Card.Text>
          <Card.Text>
            <b>Company:</b> {user.company.name}<br />
            <b>website:</b> www.{user.website}
          </Card.Text>
        </Card.Body>

      </Card>
   </div>

  )
}

export default ListOfUser;


