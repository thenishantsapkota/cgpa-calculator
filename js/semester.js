import { getGradeOptionsHTML, hideEmptyState } from "./utils.js";

export let semesterCount = 0;

export function resetSemesters() {
  document.getElementById("semesters").innerHTML = "";
  semesterCount = 0;
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  outputDiv.style.display = "none";
  const emptyState = document.querySelector(".empty-state");
  if (emptyState) emptyState.style.display = "block";
}

export function addSemester(subjects = []) {
  hideEmptyState();
  semesterCount++;
  const container = document.getElementById("semesters");
  const semesterDiv = document.createElement("div");
  semesterDiv.classList.add("semester", "fade-in");

  const subjectRows =
    subjects.length > 0
      ? subjects
          .map(
            ([name, ch]) => `
      <tr>
        <td><input type="text" name="subjectName" value="${name}" placeholder="Subject Name"></td>
        <td><select name="gradePoint" required>${getGradeOptionsHTML()}</select></td>
        <td><input type="number" name="creditHour" value="${ch}" placeholder="Credit Hours" min="1" required></td>
        <td><button type="button" class="btn-remove" onclick="removeRow(this)">Remove</button></td>
      </tr>`
          )
          .join("")
      : `<tr>
        <td><input type="text" name="subjectName" placeholder="Subject Name"></td>
        <td><select name="gradePoint" required>${getGradeOptionsHTML()}</select></td>
        <td><input type="number" name="creditHour" placeholder="Credit Hours" min="1" required></td>
        <td><button type="button" class="btn-remove" onclick="removeRow(this)">Remove</button></td>
      </tr>`;

  semesterDiv.innerHTML = `
    <div class="semester-header">
      <div class="semester-title">
        <span class="semester-badge">${semesterCount}</span>
        Semester ${semesterCount}
      </div>
    </div>
    <div class="table-container">
      <table id="semester${semesterCount}">
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Grade</th>
            <th>Credit Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>${subjectRows}</tbody>
      </table>
    </div>
    <button type="button" class="btn-add-subject" onclick="addSubject(${semesterCount})">➕ Add Subject</button>
  `;
  container.appendChild(semesterDiv);
}

export function addSubject(semesterId) {
  const table = document.querySelector(`#semester${semesterId} tbody`);
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="text" name="subjectName" placeholder="Subject Name"></td>
    <td><select name="gradePoint" required>${getGradeOptionsHTML()}</select></td>
    <td><input type="number" name="creditHour" placeholder="Credit Hours" min="1" required></td>
    <td><button type="button" class="btn-remove" onclick="removeRow(this)">Remove</button></td>
  `;
  table.appendChild(row);
}

export function removeRow(button) {
  const row = button.closest("tr");
  row.style.animation = "fadeOut 0.3s ease-out";
  setTimeout(() => row.remove(), 300);
}
