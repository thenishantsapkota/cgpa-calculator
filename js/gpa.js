import { semesterCount } from "./semester.js";

export function calculateGPA() {
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

  return {
    totalGradePoints,
    totalCredits,
    cgpa,
    resultCards,
  };
}
