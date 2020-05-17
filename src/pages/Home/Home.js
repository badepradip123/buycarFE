import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/globals/Home/Header';
import Slider from '../../components/globals/Slider';
import firstImg from '../../assets/Images/brezza.jpg';
import secondImg from '../../assets/Images/1.jpg';
import thirdImg from '../../assets/Images/2.jpg';
import FilterSection from '../../components/globals/Home/FilterSection';

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
];
export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider data={projects} />
        <FilterSection />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
