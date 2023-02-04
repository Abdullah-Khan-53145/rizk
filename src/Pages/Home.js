import React, { useEffect } from "react";
import CostomerSection from "../Components/FarmerSec";
import FarmerHero from "../Components/CostomerSec";
import { connect } from "react-redux";
import { setColorAPI } from "../actions";
import Hero from "../Components/Hero";
import WholeSellerSec from "../Components/WholeSellerSec";
function Home({ setColor }) {
  useEffect(() => {
    setColor(0);
  }, []);
  return (
    <div>
      <Hero />
      <CostomerSection />
      <FarmerHero />
      <WholeSellerSec />
    </div>
  );
}
const mapStateToProps = (state) => ({
  color: state.colorState,
});
const dispatchStateToProps = (dispatch) => ({
  setColor: (payload) => dispatch(setColorAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Home);
