function calculateGrade() {
    let score = document.getElementById("scoreInput").value;
    let grade;

    if (score >= 80) {
        grade = "A";
    } else if (score >= 60) {
        grade = "B";
    } else if (score >= 40) {
        grade = "C";
    } else {
        grade = "F";
    }

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `Your Grade is: <span style="color: blue;">${grade}</span>`; // Only the grade is blue
}