import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { name, price, description, img, id } = props.service
    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div>
            <CardGroup className='shadow p-1 mb-5 bg-body rounded'>
                <Card>
                    <div>
                        <Card.Img variant="" src={img} />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h6>Price: ${price}</h6>
                        <p>{description}</p>
                    </Card.Body>
                    <button onClick={() => handleDetails(id)} className='border-0 p-2 btn-orchid'>Add {name} </button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;