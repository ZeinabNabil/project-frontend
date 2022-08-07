import React, { useState, useEffect, useMemo } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// CSS
import style from "../css/Admin/ViewCourses.module.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import image from "../images/Learning-rafiki (1).png";

// Conponents
import FilterComponent from "./FilterComponent";

const Table = (props) => {
  const data = [
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      image: image,
      types: ["Vip 1", "Vip 2"],
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      types: ["Vip 1", "Vip 2"],
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      types: ["Vip 1", "Vip 2"],
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      types: ["Vip 1", "Vip 2"],
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      types: ["Vip 1", "Vip 2"],
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      types: ["Vip 1", "Vip 2"],
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      types: ["Vip 1", "Vip 2"],
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      types: ["Vip 1", "Vip 2"],
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      types: ["Vip 1", "Vip 2"],
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      types: ["Vip 1", "Vip 2"],
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      types: ["Vip 1", "Vip 2"],
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
      types: ["Vip 1", "Vip 2"],
    },
  ];

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <div className={style.view}>
      <div className={style.view_data}>
        <div className="row" style={{ margin: "0px" }}>
          <div className="col-lg-12">
            <div className={style.add_view_btn}>
              <Link to="/admin/addcourse" type="button" className="btn">
                <FontAwesomeIcon icon={faPlus} /> Add new course
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.view_table}>
              <DataTable
                columns={props.columns}
                data={filteredItems}
                striped
                pagination
                subHeader
                subHeaderComponent={subHeaderComponent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
