
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.scss';
import React, {Component} from 'react';
import StudentsTable from './students_table';
import AddStudent from './add_student';
import studentData from '../dummy_data/student_list';

let id = 100;

class App extends Component {
    state = {
        students: []
    }

    addStudent = (student) => {
        student.id = id++;
        this.setState({
            students: [...this.state.students, student]
        });
    }

    deleteStudent = (id) => {
        const studentsCopy = this.state.students.slice();
        const index = studentsCopy.findIndex((student) => {
            return student.id === id;
        });
        
        if (index >= 0) {
            studentsCopy.splice(index, 1);
            this.setState({
                students: [...studentsCopy]
            });
        }
    }

    componentDidMount() {
        this.getStudentData();
    }

    getStudentData() {
        //Call server here

        this.setState({
            students: studentData
        });
    }

    render() {
        return (
            <div>
                <h1 className="center">React SGT</h1>

                <div className="row">
                    <StudentsTable col="s12 m8" list={this.state.students} delete={this.deleteStudent}/>
                    <AddStudent col="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        );
    }
}

export default App;
