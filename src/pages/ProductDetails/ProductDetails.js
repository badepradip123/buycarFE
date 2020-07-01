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
import { fetchProductDetailsRequest } from '../../store/actions';

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
  componentDidMount() {
    const { id } = this.props.location.state;
    this.props.fetchProductDetailsRequest(id);
  }
  render() {
    const { details, loading } = this.props;
    return (
      <Styles>
        <Schedule />
        <DetailsHead />
        <DetailsSection list={details} />
        <ProductGallery
          data={projects}
          list={details.images}
          loading={loading}
        />
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('------', state.details.details);
  return {
    loading: state.details.loading,
    error: state.details.error,
    isAuthenticated: state.auth.token !== null,
    details: state.details.details,
  };
};

const mapDispatchToProps = {
  fetchProductDetailsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
