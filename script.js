// =============== Light & Dark Mode =============== //

let themeBtn = document.getElementById("theme-btn")

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode")
})

// ============= Date ============= //

let date = document.getElementById("date")
let d = new Date()

date.textContent = "Today --- " + d.toLocaleDateString()

// =============== HTML Elements =============== //

let studentName = document.getElementById("student-name")
let studentRoll = document.getElementById("roll-number")
let studentClass = document.getElementById("student-class")

let resultName = document.getElementById("result-name")
let resultRoll = document.getElementById("result-roll")
let resultClass = document.getElementById("result-class")

let english = document.getElementById("english")
let math = document.getElementById("math")
let computer = document.getElementById("computer")
let physics = document.getElementById("physics")
let chemistry = document.getElementById("chemistry")

let totalMarksElement = document.getElementById("total-marks")

let calculateBtn = document.getElementById("calculate-btn")
let grade = document.getElementById("grade")
let percentage = document.getElementById("percentage")
let finalResult = document.getElementById("final-result")
let resultDate = document.getElementById("result-date")
let obtainedMarks = document.getElementById("obtained-marks")

let studentList = document.getElementById("student-list")
let studentCount = 0

let totalStudents = document.getElementById("total-students")

let passedStudents = document.getElementById("passed-students")
let passedCount = 0;

let failedStudents = document.getElementById("failed-students")
let failedCount = 0;

let passPercentage= document.getElementById("pass-percentage")


// =============== Calculate Result =============== //

calculateBtn.addEventListener("click", function (event) {

    event.preventDefault()

    resultName.textContent = studentName.value
    resultRoll.textContent = studentRoll.value
    resultClass.textContent = studentClass.value

    let englishMarks = Number(english.value)
    let mathMarks = Number(math.value)
    let computerMarks = Number(computer.value)
    let physicsMarks = Number(physics.value)
    let chemistryMarks = Number(chemistry.value)

    let totalMarks = englishMarks + mathMarks + computerMarks + physicsMarks + chemistryMarks

    totalMarksElement.textContent = totalMarks + " / 500"

    // Percentage
    let percentageValue = (totalMarks / 500) * 100
    percentage.textContent = percentageValue + "%"

    // Grade
    if (percentageValue >= 90) {
        grade.textContent = "A+"
    }
    else if (percentageValue >= 80) {
        grade.textContent = "A"
    }
    else if (percentageValue >= 70) {
        grade.textContent = "B"
    }
    else if (percentageValue >= 60) {
        grade.textContent = "C"
    }
    else if (percentageValue >= 50) {
        grade.textContent = "D"
    }
    else {
        grade.textContent = "F"
    }

    // finalResult 
    if (percentageValue >= 50) {
        finalResult.textContent = "Pass"
    } else {
        finalResult.textContent = "Fail"
    }

    // resultDate
    resultDate.textContent = d.toLocaleDateString()

    // obtainedMarks
    obtainedMarks.textContent = totalMarks

    // stdentList
    studentCount++;
    if (studentCount === 1) {
        studentList.innerHTML = "";
    }

    let row = studentList.insertRow()

    row.innerHTML = `
    <td>${studentCount}</td>
    <td>${studentName.value}</td>
    <td>${studentRoll.value}</td>
    <td>${studentClass.value}</td>
    <td>${totalMarks}</td>
    <td>${percentageValue}%</td>
    <td>${grade.textContent}</td>
    <td>${finalResult.textContent}</td>
`;

    // studentCount
    totalStudents.textContent = studentCount

    // passedCount
    if (finalResult.textContent === "Pass") {
        passedCount++
    }
    passedStudents.textContent = passedCount

    // failedCount
    if (finalResult.textContent === "Fail") {
        failedCount++
    }
    failedStudents.textContent = failedCount

    // totalPercentage
    let passPercent = (passedCount / studentCount) * 100;
    passPercentage.textContent = passPercent.toFixed(2) + "%";
})