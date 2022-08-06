import React, { useEffect, useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import style from "../css/Admin.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../images/Learning-rafiki (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
    },
    {
      name: "Leanne Graham",
      category: "Bret",
      description: "Sincere@april.biz",
      attends: "1-770-736-8031 x56442",
      classes: "hildegard.org",
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

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
              <button className="btn">
                <FontAwesomeIcon icon={faPlus} /> Add new course
              </button>
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
