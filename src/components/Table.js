import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

// CSS
import style from '../css/Admin/View.module.css';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import image from '../images/Learning-rafiki (1).png';

// Conponents
import FilterComponent from './FilterComponent';

const Table = (props) => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = props.data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
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
        <div className="row" style={{ margin: '0px' }}>
          <div className="col-lg-12">
            <div className={style.add_btn}>
              <Link
                to={`/dashboard/${props.btnLink}`}
                type="button"
                className="btn"
              >
                {props.btnName}
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
