import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Table = ({
  columns,
  items
}) => {
  const labels = columns.map(col => col.label);

  return (
    <div className="table">
      <div className="tr">
        {labels.map(label => (
          <div className="td-title">{label}</div>
        ))}
      </div>
      {
        items.map(item => (
          <div className="tr">
            {
              columns.map(col => (
                <div className="td">
                  {item[col.value]}
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),
  items: PropTypes.arrayOf(
    PropTypes.node
  )
};

Table.defaultProps = {
  columns: [],
  values: []
};

export default Table;