import React, { Component, PropTypes } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField'
// import DatePicker from 'material-ui/DatePicker';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Delete from 'material-ui/svg-icons/action/delete';
import MenuItem from 'material-ui/MenuItem'
import ContentLoader from '../../components/loaders/content-loader/content_loader';
import { Input } from 'semantic-ui-react'
import { Dropdown, Select } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './expense.css'
import { Button, Input as BootInput } from 'reactstrap';

const stateOptions1 = [
    { key: 'prabeen', value: 'prabeen', text: 'Prabeen' },
    { key: 'pogba', value: 'pogba', text: 'Pogba' },
    { key: 'mata', value: 'mata', text: 'Mata' },
    { key: 'rashford', value: 'rashford', text: 'Rashford' },
    { key: 'martial', value: 'martial', text: 'Martial' },
    { key: 'degea', value: 'degea', text: 'De Gea' }
]
const stateOptions2 = [
    { key: 'prabeen', value: 'prabeen', text: 'Prabeen' },
    { key: 'pogba', value: 'pogba', text: 'Pogba' },
    { key: 'mata', value: 'mata', text: 'Mata' },
    { key: 'rashford', value: 'rashford', text: 'Rashford' },
    { key: 'martial', value: 'martial', text: 'Martial' },
    { key: 'degea', value: 'degea', text: 'De Gea' }
]
const styles = {
    smallIcon: {
        width: 36,
        height: 36,
        color: 'red'
    },
    largeIcon: {
        width: 60,
        height: 60,
        color: '#4f8bea'
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
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    onSubmit(values) {
        console.log(values)
        alert(values)
    }
    render() {

        const renderField = ({ input, label, type, meta: { touched, error }, ...custom }) => (
            <div>
                <Input
                    placeholder={label}
                    className="semantic-input"
                    {...input}
                    {...custom}
                />
                {touched && error && <span>{error}</span>}
            </div>
        )

        // const renderDatePicker = ({ input, defaultValue, meta: { touched, error } }) => (
        //     <DatePicker
        //         className="semantic-input"
        //         {...input}
        //         selected={this.state.startDate}
        //         onSelect={this.handleSelect}
        //         onChange={this.handleChange}
        //     />
        // )

        const renderSelectField1 = ({ input, label, meta: { touched, error }, children, ...custom }) => (
            <Dropdown
                placeholder={label}
                className="semantic-input"
                {...input}
                fluid={true}
                search selection
                options={stateOptions1}
                value={stateOptions1.value}
                onChange={(event, index, value) => input.onChange(value)}
                onBlur={(event, index, value) => input.onBlur(value)}
                {...custom}
            />
        )

        const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
            <div className="">

                {fields.map((member, index) => (
                    <div className="flex-container form-row-height" key={index}>
                        {/* <h4>Member #{index + 1}</h4> */}
                        <div className="expense-flex">
                            <Field
                                name={`${member}.expense_types`}
                                component="select"
                                label="Clients"
                                className="form-control">
                                <option value="cellphone">cellphone</option>
                                <option value="travell">travell</option>
                                <option value="hotel">hotel</option>
                                <option value="food">food</option>
                                <option value="others">others</option>
                            </Field>
                        </div>
                        <div className="expense-flex">
                            <Field
                                name={`${member}.expense_date`}
                                component="input"
                                type="date"
                                className="form-control"
                            />
                        </div>
                        <div className="expense-flex">
                            <Field
                                name={`${member}.client_types`}
                                component="select"
                                label="Clients"
                                className="form-control">
                                <option value="Lindelof">Lindelof</option>
                                <option value="baily">baily</option>
                                <option value="jones">jones</option>
                                <option value="rojo">rojo</option>
                                <option value="sanchez">sanchez</option>
                            </Field>
                        </div>
                        <div className="expense-flex">
                            <Field name={`${member}.description`} type="text" component={renderField} label="Description" />
                        </div>
                        <div className="expense-flex">
                            <Field name={`${member}.expense_amount`} type="text" component={renderField} label="Expense Amout" />
                        </div>
                        <div className="expense-flex">
                            <Field name={`${member}.expense_currency`} type="text" component={renderField} label="Expense Currency" />
                        </div>
                        <div className="expense-flex">
                            <Field name={`${member}.adjusted_amout`} type="text" component={renderField} label="Adjusted Amout" />
                        </div>
                        <div className="expense-flex">
                            <Field name={`${member}.reciept`} type="text" component={renderField} label="Receipt" />
                        </div>

                        <IconButton
                            iconStyle={styles.smallIcon}
                            style={styles.small}
                            onClick={() => fields.remove(index)}
                            tooltip="Remove Fields">
                            <Delete />
                        </IconButton>
                    </div>
                ))}
                <div className="">
                    <IconButton
                        iconStyle={styles.largeIcon}
                        style={styles.large}
                        onClick={() => fields.push({})}
                        tooltip="Add Fields">
                        <AddCircle />
                    </IconButton>
                    {submitFailed && error && <span>{error}</span>}
                </div>
            </div>
        )
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <div className="my-card">
                <form>
                    <FieldArray name="members" component={renderMembers} />
                    <div>
                        <RaisedButton label="Submit" primary={true} disabled={submitting} style={{ margin: 12 }}
                            onClick={handleSubmit(this.onSubmit.bind(this))} />
                        <RaisedButton label="Reset" secondary={true} disabled={pristine || submitting} style={{ margin: 12 }} onClick={reset} />
                        <Button>Bootstrap Button</Button>
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