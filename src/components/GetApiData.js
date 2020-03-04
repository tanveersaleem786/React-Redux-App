import React,{useEffect} from "react";
import {connect} from "react-redux";


import {getData} from "../store/actions";

const GetApiData = ({getData,apiData,isFetching,error}) => {


   if (isFetching) {
      return <h2>Fetching a quote now :)</h2>;
    }
  
    if (error) {
      return <h2>{error}</h2>;
    }

    
    return (
      <div>
         <button onClick={getData}>Get Dog Data</button>
        <h2>Get Dog Image: </h2>
        { apiData !== "" ? <img src={apiData}  alt="Dog Image Show Here" /> : '' }         
      </div>
    );

 

  };

  



const mapStateToProps = state => {
   return {
    apiData : state.apiData,
    isFetching: state.isFetching,
    error: state.error
   };

};

export default connect(mapStateToProps,{getData})(GetApiData);
