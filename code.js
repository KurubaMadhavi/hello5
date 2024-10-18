// Mock course and teacher data
// Mock course and teacher data
const courses = [
    { id: 1, name: "Introduction to Programming", type: "theory" },
    { id: 2, name: "Data Structures", type: "theory" },
    { id: 3, name: "Database Management Systems", type: "theory" },
    { id: 4, name: "Operating Systems", type: "theory" },
    { id: 5, name: "Physics Lab", type: "lab" },
    { id: 6, name: "Chemistry Lab", type: "lab" }
];

const teachers = [
    { id: 1, name: "Dr. Smith", rating: 4.5, background: "PhD in Computer Science", research: "AI Research", patents: "3" },
    { id: 2, name: "Prof. Johnson", rating: 3.8, background: "PhD in Electrical Engineering", research: "Signal Processing", patents: "2" },
    { id: 3, name: "Dr. Davis", rating: 4.2, background: "PhD in Physics", research: "Quantum Computing", patents: "5" },
    { id: 4, name: "Prof. Lee", rating: 4.7, background: "PhD in Mathematics", research: "Cryptography", patents: "1" }
];

// Function to render courses (theory and lab)
function renderCourses() {
    const theoryCoursesContainer = document.getElementById("theory-courses").querySelector(".course-list");
    const labCoursesContainer = document.getElementById("lab-courses").querySelector(".course-list");

    courses.forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.className = "course-item";
        courseItem.innerHTML = `
            <input type="checkbox" id="course-${course.id}" data-id="${course.id}">
            <label for="course-${course.id}">${course.name}</label>
        `;

        if (course.type === "theory") {
            theoryCoursesContainer.appendChild(courseItem);
        } else if (course.type === "lab") {
            labCoursesContainer.appendChild(courseItem);
        }
    });
}

// Function to render teachers
function renderTeachers() {
    const teacherContainer = document.querySelector(".teacher-list");

    teachers.forEach(teacher => {
        const teacherItem = document.createElement("div");
        teacherItem.className = "teacher-item";
        teacherItem.innerHTML = `
            <div>
                <strong>${teacher.name}</strong><br>
                Rating: ${teacher.rating} | Background: ${teacher.background}<br>
                Research: ${teacher.research} | Patents: ${teacher.patents}
            </div>
            <button onclick="selectTeacher(${teacher.id})">Select</button>
        `;
        teacherContainer.appendChild(teacherItem);
    });
}

// Function to handle teacher selection (for demonstration purposes)
function selectTeacher(teacherId) {
    alert(You have selected teacher with ID: ${teacherId});
}

// Initialize the system
function initSystem() {
    renderCourses();
    renderTeachers();
}

// Start the system on page load
window.onload = initSystem;

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Database connection
mongoose.connect('mongodb://localhost/course_selection', { useNewUrlParser: true, useUnifiedTopology: true });

// API routes
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});