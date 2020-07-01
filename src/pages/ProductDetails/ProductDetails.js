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
        <DetailsHead loading={loading} />
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
