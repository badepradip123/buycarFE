import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { setColor } from '../../../styles';

const Styles = styled.div`
  .imagesConatiner {
    width: 60%;
    margin: 0 auto;
    padding: 25px 40px 20px 20px;
    border: 2px solid ${setColor.primaryColor};
  }

  h2 {
    text-align: center;
  }

  .middle {
    backface-visibility: hidden;
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    z-index: 500;
  }
`;

class ProductGallery extends React.Component {
  render() {
    return (
      <Styles>
        <h2 className='h2'>Gallery</h2>
        <Container className='mt-5'>
          <h2>Inetrior Design</h2>
          <div className='imagesConatiner'>
            <Row>
              {this.props.data.slice(0, 5).map((item, index) => {
                if (index === 0 || index === 1 || index === 2) {
                  return (
                    <Col md={4}>
                      <Image width={200} height={220} src={item.img} />
                    </Col>
                  );
                } else if (index === 3) {
                  return (
                    <Col className='mt-2' md={8}>
                      <Image width={'100%'} height={220} src={item.img} />
                    </Col>
                  );
                } else {
                  return (
                    <Col
                      style={{ opacity: 0.5, position: 'relative' }}
                      className='mt-2'
                      md={4}
                    >
                      <div className='middle'>
                        <h2 style={{ color: setColor.primaryColor }}>hii</h2>
                      </div>
                      <Image width={200} height={220} src={item.img} />
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
        </Container>
      </Styles>
    );
  }
}

export default ProductGallery;
