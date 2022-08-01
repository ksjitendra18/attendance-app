import { useState, useEffect } from "react";

const Students = () => {
  const [studentData, setStudentData] = useState([]);
  const [isPresent, setIsPresent] = useState(false);

  const getData = async () => {
    const stdData = await fetch("studentapi.json");
    const data = await stdData.json();
    setStudentData(data);
  };

  useEffect(() => {
    getData();
  }, []);


  const presentHandler = ()=>{
    setIsPresent(prev => !prev)
  }

  return (
    <section className="students">
      <div className="student__heading">
        <p className="bold">Roll No</p>
        <p className="bold">Student Name</p>
      </div>

      <div className="students__list">
        {studentData.map(({ name, rollno }, index) => {
          return (
            <div
              key={index}
              className={isPresent ? "studentlist present" : "studentlist"}
              onClick={presentHandler}
            >
              <p>{rollno}</p>
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Students;
