import React, { Component } from "react";

import { CSVLink } from "react-csv";

import classifyPoint from "robust-point-in-polygon";

class TableComponent extends Component {
  state = {
    loadingDownloadLink: false,
    downloadLink: false,
    downloadLeadNumber: null,
    downloadData: [],
  };
  render() {
    return <div></div>;
  }
}

export default TableComponent;
