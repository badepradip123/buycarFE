import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailsHead from '../../components/ProductDetails/DetailsHead';
import DetailsSection from '../../components/ProductDetails/DetailsSection';
import styled from 'styled-components';
import { setColor } from '../../styles';
import ProductGallery from '../../components/ProductDetails/ProductGallery/ProductGallery';

import firstImg from '../../assets/Images/brezza.jpg';
import secondImg from '../../assets/Images/1.jpg';
import thirdImg from '../../assets/Images/2.jpg';
import MainGallery from '../../components/ProductDetails/ProductGallery/MainGallery/MainGallery';
import Schedule from '../../components/ProductDetails/Schedule/Schedule';

const projects = [
  {
    img: firstImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    original: firstImg,
    thumbnail: firstImg,
  },
  {
    img: secondImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    original: secondImg,
    thumbnail: secondImg,
  },
  {
    img: thirdImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    original: thirdImg,
    thumbnail: thirdImg,
  },
  {
    img: firstImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    original: firstImg,
    thumbnail: firstImg,
  },
  {
    img: secondImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    original: secondImg,
    thumbnail: secondImg,
  },
  {
    img: thirdImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    original: thirdImg,
    thumbnail: thirdImg,
  },
  {
    img: firstImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    original: firstImg,
    thumbnail: firstImg,
  },
  {
    img: secondImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    original: secondImg,
    thumbnail: secondImg,
  },
  {
    img: thirdImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    original: thirdImg,
    thumbnail: thirdImg,
  },
];

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
`;
export class ProductDetails extends Component {
  render() {
    return (
      <Styles>
        <Schedule />
        <DetailsHead />
        <DetailsSection />
        <ProductGallery data={projects} />
      </Styles>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
