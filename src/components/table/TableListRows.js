import React from 'react';
import PropTypes from 'prop-types';
import { TableRow } from './TableRow';

export const TableListRows = props => {
  return (
    // {props.persons.map(person=>(
        <TableRow key={props.rows.id} {...props.rows}/>
    // ))}
  );
};

TableListRows.propTypes = {
  persons: PropTypes.array.isRequired
}