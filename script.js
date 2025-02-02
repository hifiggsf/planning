let sectors = [];
let tasks = [];
let currentSectorIndex = 0;

// Add sector
function addSector() {
    let sector = document.getElementById('sectorInput').value;
    if (sector) {
        sectors.push(sector);
        document.getElementById('sectorList').innerHTML += `<li>${sector}</li>`;
        document.getElementById('sectorInput').value = "";
    }
}

// Navigate to tasks page
function goToTasksPage() {
    localStorage.setItem("sectors", JSON.stringify(sectors));
    window.location.href = "tasks.html";
}

// Load sector for task input
document.addEventListener("DOMContentLoaded", () => {
    sectors = JSON.parse(localStorage.getItem("sectors")) || [];
    if (document.getElementById('currentSector')) {
        document.getElementById('currentSector').innerText = "Sector: " + sectors[currentSectorIndex];
    }
});

// Add task
function addTask() {
    let task = document.getElementById('taskInput').value;
    if (task) {
        tasks.push({ sector: sectors[currentSectorIndex], task });
        document.getElementById('taskList').innerHTML += `<li>${task}</li>`;
        document.getElementById('taskInput').value = "";
    }
}

// Move to next sector
function nextSector() {
    if (++currentSectorIndex < sectors.length) {
        document.getElementById('currentSector').innerText = "Sector: " + sectors[currentSectorIndex];
        document.getElementById('taskList').innerHTML = "";
    } else {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        window.location.href = "priority.html";
    }
}

// Save priorities and start
function savePriorities() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    window.location.href = "execute.html";
}

// Task execution
function completeTask() {
    tasks.shift();
    if (tasks.length > 0) {
        document.getElementById('currentTask').innerText = tasks[0].task;
    } else {
        alert("All tasks completed!");
        window.location.href = "index.html";
    }
}
