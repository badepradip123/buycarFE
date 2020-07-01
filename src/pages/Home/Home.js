import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from '../../components/globals/Slider';
import firstImg from '../../assets/Images/brezza.jpg';
import secondImg from '../../assets/Images/1.jpg';
import thirdImg from '../../assets/Images/2.jpg';
import FilterSection from '../../components/Home/FilterSection';
import Slider2 from '../../components/globals/Slider2';
import { fetchProductListRequest } from '../../store/actions';

// const test = {
//   technical_specifications: [
//     {
//       engine: [
//         { engine: 'Test' },
//         { engine_type: 'Test' },
//         { fuel_type: 'Test' },
//       ],
//     },
//     {
//       test: [
//         { engine: 'Test' },
//         { engine_type: 'Test' },
//         { fuel_type: 'Test' },
//       ],
//     },
//     {
//       test2: [
//         { engine: 'Test' },
//         { engine_type: 'Test' },
//         { fuel_type: 'Test' },
//       ],
//     },
//   ],
// };

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

const carousel = [
  {
    img: firstImg,
    title: 'Maruti Vitara Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    id: 1,
  },
  {
    img: secondImg,
    title: 'Mercedes Benz',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    id: 1,
  },
  {
    img: thirdImg,
    title: 'Mercedes Amg',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    id: 1,
  },
];
export class Home extends Component {
  constructor(props) {
    super(props);
    this.newCarRef = React.createRef();
    this.popularCarRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.props);
    // this.props.fetchProductListRequest();
  }

  componentDidUpdate() {
    if (
      this.props.location.state &&
      this.props.location.state.scroll &&
      this.props.location.state.scroll.length > 0
    ) {
      this.scrollToMyRef(this.props.location.state.scroll);
    }
    // this.props.fetchProductListRequest();
  }

  scrollToMyRef = (ref) => {
    console.log('red', ref);

    if (ref === 'newCarRef') {
      window.scrollTo(0, this.newCarRef.current.offsetTop);
    } else if (ref === 'popularCarRef') {
      window.scrollTo(0, this.popularCarRef.current.offsetTop);
    }
  };

  render() {
    return (
      <div>
        <Slider data={carousel} />
        {/* <FilterSection /> */}
        <div ref={this.newCarRef}>
          <Slider2
            title='New Cars'
            data={projects}
            loading={this.props.loading}

            // list={this.props.list}
          />
        </div>
        <div ref={this.popularCarRef}>
          <Slider2
            title='Popular Cars'
            data={projects}
            loading={this.props.loading}
            // list={this.props.list}
          />
        </div>
        {/* {test.technical_specifications.map((item, index) => {
          let valuesd = Object.keys(item)[0];
          {
            console.log('adafafa-----fafaf---', item[valuesd]);
          }
          return null;
        })} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.products.loading,
    error: state.products.error,
    isAuthenticated: state.auth.token !== null,
    list: state.products.list,
  };
};

const mapDispatchToProps = {
  fetchProductListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
