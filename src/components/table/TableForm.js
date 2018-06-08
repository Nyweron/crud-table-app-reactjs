import React from "react";

export const TableForm = props => (

    <form onSubmit={props.handleSubmitAddRow}>
        <input
          type="text"
          value={props.name}
          onChange={props.handleChange}
        />
    </form>
);
