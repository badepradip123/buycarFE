import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { setColor } from '../../../styles';
import Loader from '../../globals/Loader';

const Styles = styled.div`
  .imagesConatiner {
    width: 70%;
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

  @media only screen and (max-width: 768px) {
    .imagesConatiner {
      width: 95%;
    }
  }

  @media only screen and (max-width: 480px) {
    .imagesConatiner {
      width: 68%;
    }
  }

  @media only screen and (max-width: 320px) {
    .imagesConatiner {
      width: 85%;
    }
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
            {this.props.loading || this.props.list === undefined ? (
              <Loader />
            ) : (
              <Row>
                {this.props.data.slice(0, 5).map((item, index) => {
                  if (index === 0 || index === 1 || index === 2) {
                    return (
                      <Col
                        onClick={() => window.open('/gallery', '_self')}
                        md={4}
                      >
                        <Image width={200} height={220} src={item.img} />
                      </Col>
                    );
                  } else if (index === 3) {
                    return (
                      <Col
                        onClick={() => window.open('/gallery', '_self')}
                        className='mt-2'
                        md={8}
                      >
                        <Image width={'100%'} height={220} src={item.img} />
                      </Col>
                    );
                  } else {
                    return (
                      <Col
                        onClick={() => window.open('/gallery', '_self')}
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
            )}
          </div>
        </Container>
      </Styles>
    );
  }
}

export default ProductGallery;
