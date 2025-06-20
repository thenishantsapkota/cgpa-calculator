let semesterCount = 0;

const bctPreset = [
  [
    ["Engineering Mathematics I", 3],
    ["Chemistry", 4],
    ["Communication Techniques", 2],
    ["Programming in C", 3],
    ["Basic Electrical Engineering", 3],
    ["Mechanical Workshop", 1],
  ],
  [
    ["Engineering Mathematics II", 3],
    ["Physics", 4],
    ["Engineering Drawing", 2],
    ["Object Oriented Programming in C++", 3],
    ["Thermal Science", 2],
    ["Applied Mechanics I", 3],
  ],
  [
    ["Engineering Mathematics III", 3],
    ["Data Structure and Algorithms", 3],
    ["Electrical Engineering Materials", 2],
    ["Network Theory", 3],
    ["Electronics Devices and Circuits", 3],
    ["Logic Circuits", 3],
  ],
  [
    ["Engineering Mathematics IV", 3],
    ["Instrumentation", 3],
    ["Database Management Systems", 3],
    ["Programming Technology", 3],
    ["Microprocessors", 3],
    ["Project I", 1],
  ],
  [
    ["Numerical Methods", 3],
    ["Probability and Statistics", 3],
    ["Operating Systems", 3],
    ["Computer Architecture", 3],
    ["Computer Graphics", 3],
    ["Theory of Computation", 3],
  ],
  [
    ["Simulation and Modeling", 3],
    ["Data Communication", 3],
    ["Object Oriented Software Engineering", 3],
    ["Embedded Systems", 3],
    ["Elective I", 3],
    ["Project II", 2],
  ],
  [
    ["Engineering Economics", 3],
    ["Image Processing & Pattern Recognition", 3],
    ["Artificial Intelligence", 3],
    ["Computer Networks", 3],
    ["ICT Project Management", 3],
    ["Elective II", 3],
  ],
  [
    ["Digital Signal Analysis and Processing", 3],
    ["Social and Professional Issues in IT", 2],
    ["Organization and Management", 2],
    ["Information Systems", 3],
    ["Elective III", 3],
    ["Project III", 5],
  ],
];

function hideEmptyState() {
  const emptyState = document.querySelector(".empty-state");
  if (emptyState) emptyState.style.display = "none";
}

function getGradeOptionsHTML() {
  return `
    <option value="">Grade</option>
    <option value="4.0">A</option>
    <option value="3.7">A-</option>
    <option value="3.3">B+</option>
    <option value="3.0">B</option>
    <option value="2.7">B-</option>
    <option value="2.3">C+</option>
    <option value="2.0">C</option>
    <option value="1.7">C-</option>
    <option value="1.3">D+</option>
    <option value="1.0">D</option>
  `;
}

function addSemester(subjects = []) {
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
        <td>
          <select name="gradePoint" required>
            ${getGradeOptionsHTML()}
          </select>
        </td>
        <td><input type="number" name="creditHour" value="${ch}" placeholder="Credit Hours" min="1" required></td>
        <td><button type="button" class="btn-remove" onclick="removeRow(this)">Remove</button></td>
      </tr>
    `
          )
          .join("")
      : `
      <tr>
        <td><input type="text" name="subjectName" placeholder="Subject Name"></td>
        <td>
          <select name="gradePoint" required>
            ${getGradeOptionsHTML()}
          </select>
        </td>
        <td><input type="number" name="creditHour" placeholder="Credit Hours" min="1" required></td>
        <td><button type="button" class="btn-remove" onclick="removeRow(this)">Remove</button></td>
      </tr>
    `;

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
        <tbody>
          ${subjectRows}
        </tbody>
      </table>
    </div>
    <button type="button" class="btn-add-subject" onclick="addSubject(${semesterCount})">
      ➕ Add Subject
    </button>
  `;
  container.appendChild(semesterDiv);
}

function addPresetSemesters() {
  document.getElementById("semesters").innerHTML = "";
  semesterCount = 0;
  bctPreset.forEach((sem) => addSemester(sem));
}

function addSubject(semesterId) {
  const table = document.querySelector(`#semester${semesterId} tbody`);
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="text" name="subjectName" placeholder="Subject Name"></td>
    <td>
      <select name="gradePoint" required>
        ${getGradeOptionsHTML()}
      </select>
    </td>
    <td><input type="number" name="creditHour" placeholder="Credit Hours" min="1" required></td>
    <td><button type="button" class="btn-remove" onclick="removeRow(this)">Remove</button></td>
  `;
  table.appendChild(row);
}

function removeRow(button) {
  const row = button.closest("tr");
  row.style.animation = "fadeOut 0.3s ease-out";
  setTimeout(() => row.remove(), 300);
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("semesterForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = e.target.querySelector(".btn-calculate");
      submitBtn.classList.add("loading");
      submitBtn.textContent = "Calculating...";

      setTimeout(() => {
        const semesters = document.querySelectorAll(".semester");
        let totalGradePoints = 0;
        let totalCredits = 0;
        let resultCards = "";

        semesters.forEach((semester, index) => {
          const rows = semester.querySelectorAll("tbody tr");
          let semGradePoints = 0;
          let semCredits = 0;
          let validSubjects = 0;

          rows.forEach((row) => {
            const gp = parseFloat(
              row.querySelector('select[name="gradePoint"]').value
            );
            const ch = parseFloat(
              row.querySelector('input[name="creditHour"]').value
            );
            if (!isNaN(gp) && !isNaN(ch) && gp >= 0 && ch > 0) {
              semGradePoints += gp * ch;
              semCredits += ch;
              validSubjects++;
            }
          });

          if (validSubjects > 0) {
            const sgpa = semGradePoints / semCredits;
            totalGradePoints += semGradePoints;
            totalCredits += semCredits;

            resultCards += `
            <div class="result-card">
              <div class="result-value">${sgpa.toFixed(2)}</div>
              <div class="result-label">Semester ${index + 1} SGPA</div>
            </div>
          `;
          }
        });

        const cgpa = totalGradePoints / totalCredits;

        const output = `
        <h3>📊 Calculation Results</h3>
        <div class="result-grid">
          ${resultCards}
          <div class="result-card cgpa-highlight">
            <div class="result-value">${cgpa.toFixed(2)}</div>
            <div class="result-label">Overall CGPA</div>
          </div>
        </div>
        <div style="text-align: center; color: var(--text-secondary); font-size: 0.9rem;">
          Total Credits: ${totalCredits} | Total Quality Points: ${totalGradePoints.toFixed(
          2
        )}
        </div>
      `;

        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = output;
        outputDiv.style.display = "block";
        outputDiv.scrollIntoView({ behavior: "smooth" });

        submitBtn.classList.remove("loading");
        submitBtn.textContent = "📊 Calculate GPA";
      }, 500);
    });

  if (semesterCount === 0) {
    setTimeout(() => {
      const emptyState = document.querySelector(".empty-state");
      if (emptyState) {
        emptyState.style.animation = "fadeIn 0.5s ease-in";
      }
    }, 100);
  }
});
