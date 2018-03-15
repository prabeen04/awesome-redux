import React, { Component, PropTypes } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import ContentLoader from '../../components/loaders/content-loader/content_loader';
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

class Expense extends Component {
    constructor(props) {
        super(props)
    }
 

    render() {
        const renderField = ({ input, label, type, meta: { touched, error } }) => (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} type={type} placeholder={label} />
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        )
        const renderExpenseSelector = ({ input, meta: { touched, error } }) => (
            <div>
              <select {...input}>
                <option value="">Select a color...</option>
                {colors.map(val => (
                  <option value={val} key={val}>
                    {val}
                  </option>
                ))}
              </select>
              {touched && error && <span>{error}</span>}
            </div>
          )
        
        
        const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
            <ul>
                <li>
                    <button type="button" onClick={() => fields.push({})}>
                        Add Member
                </button>
                    {submitFailed && error && <span>{error}</span>}
                </li>
                {fields.map((member, index) => (
                    <li key={index}>
                        <button type="button" onClick={() => fields.remove(index)}>Remove Member</button>
                        <h4>Member #{index + 1}</h4>
                        <Field
                            name={`${member}.expense_type`}
                            component={renderExpenseSelector}
                        />
                        <Field
                            name={`${member}.expense_date`}
                            type="date"
                            component={renderField}
                            label="Expense Date"
                        />
                        <Field
                            name={`${member}.expense_type`}
                            type="text"
                            component={renderField}
                            label="First Name"
                        />
                        <Field
                            name={`${member}.expense_type`}
                            type="text"
                            component={renderField}
                            label="First Name"
                        />
                        <Field
                            name={`${member}.expense_date`}
                            type="text"
                            component={renderField}
                            label="Last Name"
                        />
                    </li>
                ))}
            </ul>
        )
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="clubName"
                        type="text"
                        component={renderField}
                        label="Club Name"
                    />
                    <FieldArray name="members" component={renderMembers} />
                    <div>
                        <button type="submit" disabled={submitting}>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {}
    if (!values.clubName) {
      errors.clubName = 'Required'
    }
    if (!values.members || !values.members.length) {
      errors.members = { _error: 'At least one member must be entered' }
    } else {
      const membersArrayErrors = []
      values.members.forEach((member, memberIndex) => {
        const memberErrors = {}
        if (!member || !member.firstName) {
          memberErrors.firstName = 'Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.lastName) {
          memberErrors.lastName = 'Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
      })
      if (membersArrayErrors.length) {
        errors.members = membersArrayErrors
      }
    }
    return errors
  }
  

export default reduxForm({
    form: 'expenseForm',
    validate
})(Expense);