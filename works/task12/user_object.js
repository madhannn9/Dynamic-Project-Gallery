

const student={
    student_name:" ",
    student_id:" ",
    degree:" ",
    course:" ",
    description: function(){
    return " This is a "+ this.year + " " + this.make + " "+ this.model +" in "
    + this.color + " color. ";
    }
    };
    function show_bike_info(){
    document.getElementById("demo_div").innerHTML = bike.description();
    }
    function insert(){
    let student_name=document.getElementById("student_name").value;
    student.student_name=student_name;
    let student_id=document.getElementById("student_id").value;
    student.student_id=student_id;
    let degree=document.getElementById("degree").value;
    student.degree=degree;
    let course=document.getElementById("course").value;
    student.course=course;
    }
    function show_info(){
    document.getElementById("output").innerHTML=`Student Name: $
    {student.student_name}<br> Student ID: ${student.student_id}<br>
    Student Degree: ${student.degree}<br> Student Course: ${student.course}`;
    }
    