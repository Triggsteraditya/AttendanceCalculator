function proceed() {
    const totalClasses = parseInt(document.getElementById("totalClasses").value) || 0;
    const totalPresent = parseInt(document.getElementById("totalPresent").value) || 0;
    const totalAbsent = parseInt(document.getElementById("totalAbsent").value) || 0;
    const upcomingClasses = parseInt(document.getElementById("upcomingClasses").value) || 0;
    const upcomingPresent = parseInt(document.getElementById("upcomingPresent").value) || 0;
    const upcomingAbsent = parseInt(document.getElementById("upcomingAbsent").value) || 0;
  
    const numerator =
      (totalPresent || totalClasses - totalAbsent) +
      (upcomingPresent || (upcomingClasses - upcomingAbsent));
    const denominator = totalClasses + upcomingClasses;
  
    const attendance = denominator ? (numerator / denominator) * 100 : 0;
  
    // Save the calculated attendance to localStorage for passing to the result page
    localStorage.setItem("attendance", attendance.toFixed(2));
  
    // Navigate to result page
    window.location.href = "result.html";
  }
  