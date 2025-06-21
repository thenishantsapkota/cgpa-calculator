import { bcePreset, bctPreset, bctPresetNew } from "./presets.js";
import { addSemester, resetSemesters, removeRow, addSubject } from "./semester.js";
import { calculateGPA } from "./gpa.js";

window.addPresetSemesters = function (course) {
  resetSemesters();
  if (course === "bce") {
    bcePreset.forEach(addSemester);
  } else if (course === "bct") {
    bctPresetNew.forEach(addSemester);
  } else if (course === "bct-old") {
    bctPreset.forEach(addSemester);
  }
};

window.resetSemesters = resetSemesters;

window.handlePresetSelect = (preset) => {
  if (preset) {
    addPresetSemesters(preset);
  }
};

window.addSubject = addSubject;
window.removeRow = removeRow;
window.addSemester = addSemester;

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("semesterForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = e.target.querySelector(".btn-calculate");
      submitBtn.classList.add("loading");
      submitBtn.textContent = "Calculating...";

      setTimeout(() => {
        const { cgpa, totalCredits, totalGradePoints, resultCards } =
          calculateGPA();

        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `
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
        outputDiv.style.display = "block";
        outputDiv.scrollIntoView({ behavior: "smooth" });

        submitBtn.classList.remove("loading");
        submitBtn.textContent = "📊 Calculate GPA";
      }, 500);
    });
});
