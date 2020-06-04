import React from 'react';
import { Card, Image } from 'react-bootstrap';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import { setColor } from '../../../../styles';
import firstImg from '../../../../assets/Images/brezza.jpg';
import secondImg from '../../../../assets/Images/1.jpg';
import thirdImg from '../../../../assets/Images/2.jpg';

const projects = [
  {
    img: firstImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    img: secondImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    img: thirdImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    img: firstImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    img: secondImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    img: thirdImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    img: firstImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    img: secondImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    img: thirdImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
];

const responsive = [
  {
    breakpoint: 769,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
    },
  },
];

class MainGallery extends React.Component {
  state = {
    currentIndex: 0,
    active: false,
    selectedImg: '',
    slide1ToShow: 1,
    slide2ToShow: 5,
    slidesToScroll: 1,
  };

  openImage = (item, index) => {
    this.setState({
      currentIndex: index,
      selectedImg: projects[index].img,
    });
  };

  swipeImage = (index) => {
    // this.setState({
    //   currentIndex: index,
    //   selectedImg: projects[index].img,
    // });
    console.log(index);
  };

  render() {
    return (
      <Styles>
        <h2 className='h2'>Interior Design</h2>
        <SlickSlider
          className='mt-5'
          slidesToShow={this.state.slide1ToShow}
          slidesToScroll={this.state.slidesToScroll}
          infinite={false}
          swipe={false}
        >
          {projects.map((item, index) => {
            return (
              <Image
                style={
                  this.state.currentIndex === index
                    ? { opacity: 1 }
                    : { opacity: 0.7 }
                }
                src={this.state.selectedImg || item.img}
              />
            );
          })}
        </SlickSlider>
        <SlickSlider
          slidesToShow={this.state.slide2ToShow}
          slidesToScroll={this.state.slidesToScroll}
          infinite={false}
          responsive={responsive}
        >
          {projects.map((item, index) => {
            return (
              <Card onClick={() => this.openImage(item, index)}>
                <Card.Img
                  style={
                    this.state.currentIndex === index
                      ? { opacity: 1 }
                      : { opacity: 0.7 }
                  }
                  src={item.img}
                />
              </Card>
            );
          })}
        </SlickSlider>
      </Styles>
    );
  }
}

const Styles = styled.div`
  .h2 {
    text-align: center;
    margin-top: 4rem;
  }

  .h2:after {
    display: block;
    height: 2px;
    background-color: ${setColor.primaryColor};
    content: ' ';
    width: 100px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .card {
    transition: box-shadow 0.3s;
    cursor: pointer;
    overflow: hidden;
    margin: 0 auto;
    width: 80%;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0;
  }

  .card-img {
    height: 8rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .mainImage {
    animation: skew 3s;
    transition: 0.3s ease;
    transform: skew(1);
    overflow: hidden;
  }

  @keyframes skew {
    0% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default MainGallery;
