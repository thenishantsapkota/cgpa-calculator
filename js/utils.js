export function getGradeOptionsHTML() {
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

export function hideEmptyState() {
  const emptyState = document.querySelector(".empty-state");
  if (emptyState) emptyState.style.display = "none";
}