const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    render() {
        return (
               <EmployeeList employees={this.state.employees}/>
    )
    }
}

class EmployeeList extends React.Component{
    render() {
        var employees = this.props.employees.map(employee =>
                                                     <Employee key={employee._links.self.href} employee={employee}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Description</th>
                </tr>
                {employees}
                </tbody>
            </table>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)