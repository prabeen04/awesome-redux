import React, { Component, PropTypes } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField'
import DatePicker from 'material-ui/DatePicker';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Delete from 'material-ui/svg-icons/action/delete';
import MenuItem from 'material-ui/MenuItem'
import ContentLoader from '../../components/loaders/content-loader/content_loader';
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
const styles = {  
    smallIcon: {
        width: 36,
        height: 36,
        color: 'red'
      },
    largeIcon: {
      width: 60,
      height: 60,
      color: 'teal'
    },
    small: {
        width: 72,
        height: 72,
        padding: 16,
      },
    large: {
        width: 120,
        height: 120,
        padding: 30,
      },
  };
class Expense extends Component {
    constructor(props) {
        super(props)
    }
 

    render() {
        const renderField = ({ input, label, type, meta: { touched, error }, ...custom }) => (
                <div>
                <TextField
                    hintText={label}
                    floatingLabelText={label}
                    errorText={touched && error}
                    {...input}
                    {...custom}
                />
                    {touched && error && <span>{error}</span>}
                </div>
        )
        const renderDatePicker = ({ input, defaultValue, meta: { touched, error } }) => (
            <DatePicker 
                errorText = {touched && error} 
                {...input}
                hintText="Checkin Date" 
                autoOk={true}
                value = {input.value !== ''? new Date(input.value) : null}
                onChange = {(event, value) => {console.log(value); input.onChange(value)}} />
        )
          
        const renderExpenseType = ({ input, meta: { touched, error } }) => (
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
          const renderSelectField = ({input, label, meta: { touched, error }, children, ...custom }) => (
            <SelectField
              floatingLabelText={label}
              errorText={touched && error}
              {...input}
              onChange={(event, index, value) => input.onChange(value)}
              children={children}
              {...custom}
            />
          )
          const renderClients = ({ input, meta: { touched, error } }) => (
            <div>
              <select {...input}>
                <option value="">Select a Client...</option>
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
                <IconButton 
                iconStyle={styles.largeIcon}
                style={styles.large}
                onClick={() => fields.push({})}
                tooltip="Add Fields">
                    <AddCircle />
                </IconButton>
                    {submitFailed && error && <span>{error}</span>}
                </li>
                {fields.map((member, index) => (
                    <li key={index}>
                        <h4>Member #{index + 1}</h4>
                        <Field
                            name={`${member}.expense_type`}
                            component={renderExpenseType}
                        />
                        <Field
                            name={`${member}.expense_date`}
                            component={renderDatePicker}
                        />
                        <Field
                            name={`${member}.client_types`}
                            component={renderSelectField}
                            label="Client Types"
                        >
                         <MenuItem value="ff0000" primaryText="Red" />
                        <MenuItem value="00ff00" primaryText="Green" />
                        <MenuItem value="0000ff" primaryText="Blue" />
                        </Field>
                        <Field
                            name={`${member}.description`}
                            type="text"
                            component={renderField}
                            label="Description"
                        />
                        <Field
                            name={`${member}.expense_amount`}
                            type="text"
                            component={renderField}
                            label="Expense Amout"
                        />
                        <Field
                            name={`${member}.expense_currency`}
                            type="text"
                            component={renderField}
                            label="Expense Currency"
                        />
                         <Field
                            name={`${member}.adjusted_amout`}
                            type="text"
                            component={renderField}
                            label="Adjusted Amout"
                        />
                         <Field
                            name={`${member}.reciept`}
                            type="file"
                            component={renderField}
                        />
                        <IconButton 
                        iconStyle={styles.smallIcon}
                        style={styles.small}
                        onClick={() => fields.remove(index)}
                        tooltip="Remove Fields">
                            <Delete />
                        </IconButton>
                   <button type="button" onClick={() => fields.remove(index)}>del</button>

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