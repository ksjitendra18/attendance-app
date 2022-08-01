import React from "react";

const ClassInfo = () => {
  const date = new Date();

  const todayDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return (
    <section className="classInfo">
      <h2 className="center">4th Semester</h2>

      <div className="class-info-about">
        <div className="date-section">
          <p>
            <span className="bold">Date:</span> {todayDate}
          </p>
        </div>

        <div className="subject">
          <p>
            <span className="bold">Subject:</span> DBMS
          </p>
        </div>
        <div className="teacher-info">
        <p>
            <span className="bold">Professor</span> XYZ
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClassInfo;
