import React from 'react';
import { connect } from "react-redux";
import { addEmployee } from "../actions/employees";
import moment from "moment";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

console.log(moment().format(('MMM-DD-YY')));
class AddNewEmployeePage extends React.Component{
    state ={
        fname: '',
        lname: '',
        dob: moment(),
        salary: '',
        departmentId: '1',
        position: '',
        createdAt: moment().valueOf(),
        error: false,
        calendarFocused: false
        
    }
    renderMonthElement = ({ month, onMonthSelect, onYearSelect }) => {
        let i
        let years = []
        for (i = moment().year(); i >= moment().year() - 110; i--) {
            years.push(<option value={i} key={`year-${i}`}>{i}</option>)
        }
        return (
            <div style={{ display: "flex", justifyContent: "center",color:"#eaeaea" }}>
                <div>
                    <select value={month.month()} onChange={e => onMonthSelect(month, e.target.value)} style={{ color: "#484848", fontSize: "12px",padding:"5px 2px" }}>
                        {moment.months().map((label, value) => (
                            <option value={value} key={value} >{label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select value={month.year()} onChange={e => onYearSelect(month, e.target.value)} style={{ color: "#484848", fontSize: "12px", padding: "5px 2px" }}>
                        {years}
                    </select>
                </div>
            </div>
        )
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.fname || !this.state.lname || !this.state.salary 
          || !this.state.departmentId || !this.state.position){
            this.setState(()=>({
                error: true
            }));
            
        }else{
            this.setState(() => ({
                error: false
            }));
            this.props.dispatch(addEmployee({
                fname: this.state.fname,
                lname: this.state.lname,
                dob: this.state.dob.valueOf(),
                salary: this.state.salary,
                departmentId: this.state.departmentId,
                position: this.state.position,
                createdAt: this.state.createdAt, 
            }));
            this.props.history.push('./');
        }
    }
    onDateChange = (dob) => {
        if (dob) {
            this.setState(() => ({ dob }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onFnameChange = (e) => {
        const fname = e.target.value;
        this.setState(() => ({ fname }));
    }
    onLnameChange = (e) => {
        const lname = e.target.value;
        this.setState(() => ({ lname }));
    }
    onSalaryChange = (e)=>{
        const salary = e.target.value;
        if(!salary || salary.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({salary}));
        }
    }
    onDepartmentChange = (e)=>{
        const departmentId = e.target.value;
        this.setState(()=>({departmentId}));
    }
    onPositionChange = (e) => {
        const position = e.target.value;
        this.setState(() => ({ position }));
    }
    render(){
        return (
            <div>
                <h3>Add New Employee</h3>
                {this.state.error && <p>Error</p>}
                <form onSubmit = {this.onSubmit}>
                    <label>Firstname
                        <input 
                            type="text"
                            placeholder = "Firstname"
                            autoFocus
                            value = {this.state.fname}
                            onChange = {this.onFnameChange}
                        />
                    </label><br />
                    <label>Lastname
                        <input 
                            type="text"
                            placeholder="Lastname"
                            value={this.state.lname}
                            onChange={this.onLnameChange}
                        />
                    </label><br />
                    <label>Date Of Birth
                        <SingleDatePicker
                            date={this.state.dob}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            renderMonthElement={this.renderMonthElement}
                        />
                    </label>
                    <br />
                    <label>Salary
                        <input 
                            type="text" 
                            placeholder="Salary"
                            value={this.state.salary}
                            onChange={this.onSalaryChange}
                        />
                    </label><br />
                    <label>Department
                        <select onChange={this.onDepartmentChange}>
                            <option value="1">Network</option>
                            <option value="2">Sofware Development</option>
                            <option value="3">Finance</option>
                        </select>
                    </label><br />
                    <label>Position
                        <input 
                            type="text" 
                            placeholder="Position"
                            value={this.state.position}
                            onChange={this.onPositionChange}
                            />
                    </label>
                    <button>Add Employee</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddNewEmployeePage);
