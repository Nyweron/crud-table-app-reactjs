import React from 'react';
import PropTypes from 'prop-types';
import { TableRow } from './TableRow';
import { TableKey } from './TableKey';

export const TableListRows = props => {
  return(
    <table className={props.classCss}>
      <thead>
        <TableKey keys={props.keys} />
      </thead>
      <tbody>
        <TableRow rows={props.rows} keys={props.keys} />
      </tbody>
    </table>
  );
};

TableListRows.propTypes = {
  //persons: PropTypes.array.isRequired
}