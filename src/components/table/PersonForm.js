import React from "react";

export const PersonForm = props => (
  <div className="modal-body">
    <form>
      <div className="form-group">
        <label htmlFor="name" className="cols-sm-2 control-label">
          Firstname
        </label>
        <div className="cols-sm-5">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-user fa" aria-hidden="true" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="firstName"
              name="firstName"
              value={props.firstName}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name" className="cols-sm-2 control-label">
          Lastname
        </label>
        <div className="cols-sm-5">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-user fa" aria-hidden="true" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="lastName"
              name="lastName"
              value={props.lastName}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name" className="cols-sm-2 control-label">
          Age
        </label>
        <div className="cols-sm-5">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-user fa" aria-hidden="true" />
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="age"
              name="age"
              min="0"
              max="100"
              value={props.age}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="name" className="cols-sm-2 control-label">
          Hobby
        </label>
        <div className="cols-sm-5">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-user fa" aria-hidden="true" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="hobby"
              name="hobby"
              value={props.hobby}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
    </form>
  </div>
);
