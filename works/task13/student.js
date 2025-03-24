// Constructor function for Student
function Student(student_name, student_id, degree, course) {
    this.student_name = student_name;
    this.student_id = student_id;
    this.degree = degree;
    this.course = course;
    this.description = function () {
    return `Student Name: ${this.student_name}<br>
    Student ID: ${this.student_id}<br>
    Student Degree: ${this.degree}<br>
    Student Course: ${this.course}`;
    };
   }
   // Retrieve students from localStorage (if available)
   let students = JSON.parse(localStorage.getItem("students")) || [];
   // Function to insert student data
   function insert() {
    let student_name = document.getElementById("student_name").value;
    let student_id = document.getElementById("student_id").value;
    let degree = document.getElementById("degree").value;
    let course = document.getElementById("course").value;
    // Validate inputs
    if (!student_name || !student_id || !degree || !course) {
    alert("Please fill in all fields.");
    return;
    }
    // Create new student object
    let new_student = new Student(student_name, student_id, degree, course);
    students.push(new_student);
    // Save to localStorage
    localStorage.setItem("students", JSON.stringify(students));
    // Display students
    displayStudents();
    // Clear input fields
    document.getElementById("student_name").value = "";
    document.getElementById("student_id").value = "";
    document.getElementById("degree").value = "";
    document.getElementById("course").value = "";
   }
   // Function to display students
   function displayStudents() {
    let output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous data
    if (students.length === 0) {
    output.innerHTML = "<p>No students found.</p>";
    return;
    }
    students.forEach(student => {
    let studentDiv = document.createElement("div");
    studentDiv.classList.add("student-card");
    studentDiv.innerHTML = student.description();
    output.appendChild(studentDiv);
    });
   }
   // Function to search students
   function searchStudent() {
    let query = document.getElementById("search_bar").value.toLowerCase();
    let output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous results
    let filteredStudents = students.filter(student =>
    student.student_name.toLowerCase().includes(query) ||
    student.student_id.includes(query)
    );
    if (filteredStudents.length === 0) {
    output.innerHTML = "<p>No matching students found.</p>";
    return;
    }
    filteredStudents.forEach(student => {
    let studentDiv = document.createElement("div");
    studentDiv.classList.add("student-card");
    studentDiv.innerHTML = student.description();
    output.appendChild(studentDiv);
    });
   }
   // Function to clear all students
   function clearData() {
    let confirmDelete = confirm("Are you sure you want to delete all student data?");
    if (confirmDelete) {
    students = []; // Clear array
    localStorage.removeItem("students"); // Remove from storage
    displayStudents(); // Refresh UI
    }
   }
   // Display students when the page loads
   window.onload = displayStudents;