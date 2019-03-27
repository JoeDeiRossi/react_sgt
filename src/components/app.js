
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import '../assets/css/app.scss';
import StudentsTable from './students_table';

const App = () => (
    <div>
        <h1 className="center">React SGT</h1>

        <div className="row">
            <StudentsTable/>
        </div>
    </div>
);

export default App;
