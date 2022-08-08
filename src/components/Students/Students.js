import { useState, useEffect } from "react";

const Students = () => {
  const [studentData, setStudentData] = useState([]);

  const getStudentList = async () => {
    const stdData = await fetch("studentapi.json");
    const data = await stdData.json();
    setStudentData(data);
  };

  useEffect(() => {
    getStudentList();
  }, []);

  const studentPresentHandler = (rollno) => {
    console.log(rollno)
    const studentList = studentData.map((student) =>
      student.rollno === rollno
        ? { ...student, isPresent: !student.isPresent }
        : student
    );

    setStudentData(studentList);
  };

  return (
    <section className="students">
      <div className="student__heading">
        <p className="bold">Roll No</p>
        <p className="bold">Student Name</p>
      </div>

      <div className="students__list">
        {studentData.map((student) => {
          return (
            <div
              key={student.rollno}
              className={
                student.isPresent ? "studentlist present" : "studentlist"
              }
              onClick={() => studentPresentHandler(student.rollno)}
            >
              <p>{student.rollno}</p>
              <p>{student.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Students;
