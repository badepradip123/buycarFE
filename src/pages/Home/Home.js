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
    img: firstImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    id: 1,
  },
  {
    img: secondImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    id: 1,
  },
  {
    img: thirdImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    id: 1,
  },
  {
    img: firstImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    id: 1,
  },
  {
    img: secondImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    id: 1,
  },
  {
    img: thirdImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    id: 1,
  },
  {
    img: firstImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    id: 1,
  },
  {
    img: secondImg,
    title: 'Breeza',
    subTitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    id: 1,
  },
  {
    img: thirdImg,
    title: 'Breeza',
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
        <Slider data={projects} />
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
