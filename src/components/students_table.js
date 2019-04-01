
import React, {Component} from 'react';
import StudentRow from './student_row';

class StudentsTable extends Component {

    render() {
        const {col = 's12', list} = this.props;
        
        const studentElements = list.map( (student) => {
            return <StudentRow key={student.id} {...student} delete={this.props.delete}/>
        });

        return (
            <div className={`col ${col}`}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Grade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentElements}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentsTable;
