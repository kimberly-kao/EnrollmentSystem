// Show/hide buttons for student to make enrollment decision
function studentDecision() {
  window.location.href = 'profiles.html' 
  studentView.getElementById("acceptStu").classList.remove("hidden");
  studentView.getElementById("rejectStu").classList.remove("hidden");
}