import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

const ProductGallery = (props) => {
  return (
    <div>
      <h2 className='h2'>Gallery</h2>
      <Container className='mt-5'>
        <Row>
          {props.data.slice(0, 4).map((item, index) => {
            return (
              <Col>
                <Image width={220} height={220} src={item.img} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductGallery;
