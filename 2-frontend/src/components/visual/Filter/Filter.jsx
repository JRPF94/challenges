import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "./style.scss";

const Filter = ({
  options,
  onChangeFilter
}) => {
  const [filterBy, setFilterBy] = useState({
    label: "Filter by",
    value: null
  });
  const [filterVal, setFilterVal] = useState("");

  useEffect(() => {
    onChangeFilter(filterBy.value, filterVal);
  }, [filterBy, filterVal]);

  const handleChangeFilterBy = selected => {
    setFilterBy(selected);
  };

  const handleChangeFilterVal = ev => {
    setFilterVal(ev.target.value);
  };

  return (
    <div className="filter-container">
      <Select
        className="filter-select"
        value={filterBy}
        onChange={handleChangeFilterBy}
        options={options}
      />
      <input 
        className="filter-input"
        placeholder="Search for..."
        onChange={handleChangeFilterVal} 
      />
    </div>
  );
};

export default Filter;