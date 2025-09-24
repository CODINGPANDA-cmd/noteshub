// Sub-Subjects Data (you can expand as needed)
const subjects = {
  core: [
    { 
      name: "Modern Indian Political Thought", 
      notes: [
        "core/mipt/notes1.pdf", 
        "core/mipt/notes2.pdf"
      ],
      pyq: [
        "core/mipt/pyq1.pdf", 
        "core/mipt/pyq2.pdf"
      ],
    },
    { 
      name: "Western Political Thought", 
      notes: [
        "core/wpt/notes1.pdf", 
        "core/wpt/notes2.pdf"
      ],
      pyq: [
        "core/wpt/pyq1.pdf"
      ]
    },
    { 
      name: "Political Process in India", 
      notes: [
        "core/ppi/notes1.pdf", 
        "core/ppi/notes2.pdf"
      ],
      pyq: [
        "core/ppi/pyq1.pdf"
      ]
    }
  ],
  dse: [
    { 
      name: "Understanding Ambedkar", 
      notes: [
        "core/ambedkar/notes1.pdf", 
        "core/ambedkar/notes2.pdf"
      ],
      pyq: [
        "dse/ambedkar/pyq1.pdf"
      ]
    }
  ]
};


// Modal handling
function openSubSubjects(category) {
  const modal = document.getElementById("modal");
  const list = document.getElementById("subSubjectList");
  const title = document.getElementById("modalTitle");

  title.textContent = category.toUpperCase() + " Sub-Subjects";
  list.innerHTML = "";

  subjects[category]?.forEach(sub => {
    let notesHTML = "";
    sub.notes.forEach((file, index) => {
      notesHTML += `
        <button onclick="viewFile('${file}')">View Notes ${index+1}</button>
        <button onclick="downloadFile('${file}')">Download Notes ${index+1}</button>
      `;
    });

    let pyqHTML = "";
    sub.pyq.forEach((file, index) => {
      pyqHTML += `
        <button onclick="viewFile('${file}')">View PYQ ${index+1}</button>
        <button onclick="downloadFile('${file}')">Download PYQ ${index+1}</button>
      `;
    });

    list.innerHTML += `
      <div class="sub-item">
        <h4>${sub.name}</h4>
        ${notesHTML}
        ${pyqHTML}
      </div>
    `;
  });

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// File Handling
function viewFile(path) {
  window.open(path, "_blank");
}
function downloadFile(path) {
  const a = document.createElement("a");
  a.href = path;
  a.download = path.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Search Function
document.getElementById("searchBox").addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});

// Filter by category
function filterCategory(category) {
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
