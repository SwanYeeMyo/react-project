import React from 'react'
const students = [
    {
        id: 1,
        name: "Swan Yee Myo",
        grade: "B"
    },
    {
        id: 2,
        name: " Myo Swan Yee",
        grade: "B"
    },
    {
        id: 3,
        name: "S A Myo",
        grade: "D"
    },
]
const StudentList = () => {
    return (
        <div>StudentList

        {students.map((student) => 
        <div className="students" key={student.id}>
            <h5>{student.name}</h5>
            <h6>{student.grade}</h6>
        </div>
        )}
        </div>
       
    )
}

export default StudentList