import React from 'react';
import { Card, Image } from 'react-bootstrap';
import SlickSlider from 'react-slick';
import { FiXCircle } from 'react-icons/fi';
import styled from 'styled-components';
import { setColor } from '../../../../styles';
import firstImg from '../../../../assets/Images/brezza.jpg';
import secondImg from '../../../../assets/Images/1.jpg';
import thirdImg from '../../../../assets/Images/2.jpg';
import Icon from '../../../globals/Icon';
import { withRouter } from 'react-router';
import { compose } from 'redux';

const projects = [
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/7083/1587199027573/front-left-side-47.jpg',
    title: 'Maruti Swift',
    price: '5.19 - 8.02 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg?tr=w-456',
    title: 'Maruti Baleno',
    price: '5.63 - 8.96 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ignis/7584/1583132645318/front-left-side-47.jpg',
    title: 'Maruti Ignis',
    price: '4.89 - 7.19 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7672/1584072033906/front-left-side-47.jpg',
    title: 'Hyundai Venue',
    price: '6.69 - 11.5 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Vitara-Brezza/7295/1585567830503/front-left-side-47.jpg',
    title: 'Maruti Vitara Brezza',
    price: '7.34 - 11.4 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/7083/1587199027573/front-left-side-47.jpg',
    title: 'Maruti Swift',
    price: '5.19 - 8.02 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg?tr=w-456',
    title: 'Maruti Baleno',
    price: '5.63 - 8.96 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ignis/7584/1583132645318/front-left-side-47.jpg',
    title: 'Maruti Ignis',
    price: '4.89 - 7.19 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7672/1584072033906/front-left-side-47.jpg',
    title: 'Hyundai Venue',
    price: '6.69 - 11.5 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Vitara-Brezza/7295/1585567830503/front-left-side-47.jpg',
    title: 'Maruti Vitara Brezza',
    price: '7.34 - 11.4 Lakh*',
    id: 1,
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

export default compose(withRouter)(MainGallery);

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

  .closeIcon {
    float: right;
    margin-right: 2rem;
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
