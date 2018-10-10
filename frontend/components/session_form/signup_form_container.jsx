import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import SignUpForm from "./signup_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
    navLink: (
      <Link className="demo-link" to="/">
        Try a demo
      </Link>
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
