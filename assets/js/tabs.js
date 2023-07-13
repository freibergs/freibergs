function changeTab(event, tabId) {
    event.preventDefault();
    var tabContents = document.getElementsByClassName("tab-content");
    var tabLinks = document.getElementsByClassName("major");
  
    // Paslēpj visu tabu saturu
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
  
    // Noņem "active" klasi no visiem taba linkiem
    for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }
  
    // Parāda izvēlēto taba saturu
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
  }
  
  // Uzstāda noklusējuma tabu uz "kods"
  document.addEventListener("DOMContentLoaded", function() {
    var defaultTab = document.getElementById("programmesana");
    defaultTab.classList.add("active");
    defaultTab.style.display = "block";
  });