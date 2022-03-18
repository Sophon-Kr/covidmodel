import React from "react";
import { connect } from "react-redux";

export const MaingraphSkeleton = (props) => {
  return (
    <div
      style={{ minHeight: 445, width: "100%", backgroundColor: "lightgreen" }}
    >
      MaingraphSkeleton
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MaingraphSkeleton);
