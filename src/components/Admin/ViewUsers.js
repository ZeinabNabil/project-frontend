import React, { useEffect, useState } from "react";

// Redux
import { connect } from "react-redux";

// Components
import columns from "./UsersColumns";
import Table from "../Table";

const ViewUsers = (props) => {
  const [data, setData] = useState(null);

  return <Table columns={columns} data={data ? data : []} />;
};

export default ViewUsers;
