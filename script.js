let semesterCount = 0;

const bcePreset = [
  [
    ["Engineering Mathematics I", 3],
    ["Physics", 4],
    ["Thermal Science", 2],
    ["Engineering Drawing", 2],
    ["Programming in C", 3],
    ["Basic Electrical Engineering", 3],
  ],
  [
    ["Engineering Mathematics II", 3],
    ["Chemistry", 4],
    ["Object Oriented Programming in C++", 3],
    ["Communication Techniques", 2],
    ["Mechanical Workshop", 1],
    ["Applied Mechanics I", 3],
  ],
  [
    ["Engineering Mathematics III", 3],
    ["Applied Mechanics II", 2],
    ["Civil Engineering Materials", 2],
    ["Fluid Mechanics", 3],
    ["Strength of Materials", 3],
    ["Engineering Geology", 3],
    ["Project I", 1],
  ],
  [
    ["Probability and Statistics", 3],
    ["Surveying I", 3],
    ["Basic Electronics Engineering", 2],
    ["Numerical Methods", 3],
    ["Hydraulics", 3],
    ["Structural Analysis I", 3],
  ],
  [
    ["Building Technology", 2],
    ["Engineering Hydrology", 2],
    ["Structural Analysis II", 3],
    ["Soil Mechanics", 4],
    ["Water Supply Engineering", 3],
    ["Concrete Technology & Masonry Structures", 3],
    ["Project II", 1],
  ],
  [
    ["Irrigation Engineering", 3],
    ["Design of Steel and Timber Structures", 3],
    ["Foundation Engineering", 3],
    ["Sanitary Engineering", 3],
    ["Survey Field Project", 1],
    ["Surveying II", 3],
  ],
  [
    ["Design of R.C.C. Structures", 3],
    ["Transportation Engineering I", 3],
    ["Hydropower Engineering", 3],
    ["Estimating and Valuation", 3],
    ["Elective I", 3],
    ["Engineering Economics", 3],
  ],
  [
    ["Construction Project Management", 3],
    ["Engineering Professional Practice", 2],
    ["Transportation Engineering II", 3],
    ["Elective II", 3],
    ["Project III", 5],
  ],
];

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

const bctPresetNew = [
  [
    ["Basic Electrical Engineering", 3],
    ["Calculus - I", 3],
    ["Communication Techniques", 2],
    ["Computer Workshop", 1],
    ["Digital Logic", 3],
    ["Electronics Devices and Circuits", 3],
    ["Programming in C", 3],
  ],
  [
    ["Algebra and Geometry", 3],
    ["Applied Chemistry", 2],
    ["Applied Physics", 3],
    ["Basic Engineering Drawing", 1],
    ["Data Structures and Algorithms", 3],
    ["Object Oriented Programming in C++", 3],
    ["Instrumentation", 3],
  ],
  [
    ["Calculus - II", 3],
    ["Computer Graphics", 3],
    ["Data Communication", 3],
    ["Database Management Systems", 3],
    ["Microprocessor and ALP", 3],
    ["Operating Systems", 3],
  ],
  [
    ["Advanced Programming with Java", 3],
    ["Applied Mathematics", 3],
    ["Computer Architecture", 3],
    ["Numerical Methods", 2],
    ["Research Fundamentals", 2],
    ["Theory of Computation", 3],
  ],
  [
    ["Artificial Intelligence", 3],
    ["Digital Signal Analysis and Processing", 3],
    ["Embedded Systems", 2],
    ["Engineering Management", 2],
    ["Probability and Statistics", 2],
    ["Software Engineering", 3],
  ],
  [
    ["Compiler Design", 2],
    ["Computer Networks", 3],
    ["Elective I", 3],
    ["Image Processing and Pattern Recognition", 3],
    ["Machine Learning", 3],
    ["Project I", 1],
    ["Simulation and Modeling", 3],
  ],
  [
    ["Cloud Computing and Virtualization", 3],
    ["Data Science and Analytics", 3],
    ["Engineering Economics", 3],
    ["Entrepreneurship and Professional Practice", 2],
    ["Network and Cyber Security", 3],
    ["Elective II", 3],
  ],
  [
    ["Elective III", 3],
    ["Internship", 3],
    ["Project II", 3],
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

function resetSemesters() {
  document.getElementById("semesters").innerHTML = "";
  semesterCount = 0;
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  outputDiv.style.display = "none";
  const emptyState = document.querySelector(".empty-state");
  if (emptyState) emptyState.style.display = "block";
}

function handlePresetSelect(preset) {
  
  if (preset) {
    addPresetSemesters(preset);
  }
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

function addPresetSemesters(course) {
  document.getElementById("semesters").innerHTML = "";
  semesterCount = 0;
  if (course === "bce") {
    bcePreset.forEach((sem) => addSemester(sem));
  } else if (course === "bct") {
    bctPresetNew.forEach((sem) => addSemester(sem));
  } else if (course === "bct-old") {
    bctPreset.forEach((sem) => addSemester(sem));
  }
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
