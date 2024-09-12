import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import work from './data.json';

const Experience = () => {
  const [selected, setSelected] = useState(work[0]);

  const workList = work.map((elm) => {
    const className = elm.id === selected.id ? 'selected' : '';
    return (
      <div key={elm.id} className={className}>
        <button type="button" className="btn click" onClick={() => { setSelected(elm); }}>
          <span>{elm.company}</span>
        </button>
      </div>
    );
  });

  const workBullets = selected.description.map((elm, key) => (
    <li key={`bullet${key}`}>
      {elm}
    </li>
  ));

  return (
    <div id="experience" className="pt-5 bg-light">
      <div id="Experience" className="break mt-5 p-5">
        <Container fluid="md">
          <h1 className="mb-4 w-100 header">Experience</h1>
          <Row>
            <Col md={4} lg={3} className="py-2">
              <div className="buttonContainer">
                {workList}
              </div>
            </Col>
            <Col md={8} lg={9} className="py-2 min-height">
              <div className="h4">
                <span>{selected.company}</span>
                {' '}
                -
                {' '}
                <span>{selected.position}</span>
              </div>
              <p>{selected.dates}</p>
              <div>
                <ul>
                  {workBullets}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
