
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.scss';
import React, {Component} from 'react';
import axios from 'axios';
import StudentsTable from './students_table';
import AddStudent from './add_student';

class App extends Component {
    state = {
        students: [],
        error: ''
    }

    addStudent = async (student) => {
        await axios.post('/api/grades', student);
        this.getStudentData();
    }

    deleteStudent = async (id) => {
        await axios.delete(`/api/grades/${id}`);
        this.getStudentData();
    }

    componentDidMount() {
        this.getStudentData();
    }

    // getStudentData() {
        //Call server here
        //axios calls: 1st parameter is always the url
        //When you encounter a promise, include .then() with a callback as a parameter to resolve the promise

        // axios.get('http://localhost:3001/api/grades').then((response) => {
        //     this.setState({
        //         students: response.data.data
        //     });
        // }).catch((error) => {
        //     this.setState({
        //         error: 'Error retrieving student data'
        //     });
        // });
    // }

    async getStudentData() {
        //Call server here
        try {
            const response = await axios.get('/api/grades');
        
            this.setState({
                students: response.data.data
            });
        } catch(error) {
            this.setState({
                error: 'Error retrieving student data'
            });
        }
    }

    render() {
        return (
            <div>
                <h1 className="center">React SGT</h1>
                <h5 className="red-text text-darken-2">{this.state.error}</h5>
                <div className="row">
                    <StudentsTable col="s12 m8" list={this.state.students} delete={this.deleteStudent}/>
                    <AddStudent col="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        );
    }
}

export default App;
