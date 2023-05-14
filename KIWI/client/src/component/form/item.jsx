import React, { Component } from "react";
import { ListGroup, Form, Button, Row, Col } from "react-bootstrap";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
export default class Item extends Component {

  onCheckboxChange = (id) => {
    return (event) => {
      this.props.onUpdateItem(id, event.target.checked);

    };
  };
  onDeleteItem = (id) => {
    return (event) => {
      this.props.onDeleteItem(id);
    };
  };
  render() {
    const { id, name,qte, done } = this.props;
    return (
      <ListGroup.Item>
        <Row key={this.props.id}>
          <Col>
            <Form.Check
              inline
              checked={done}
              onChange={this.onCheckboxChange(id)}
            />
          </Col>
          <Col>{name}</Col>
          <Col>{qte}</Col>
          <Col>
            <Button variant="danger" size="sm" onClick={this.onDeleteItem(id)}>
                <RemoveCircleIcon />
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }
}
