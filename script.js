const works = {
  "task1": { "title": "Task 1: Expectation Document", "url": "works/task1/task1.html" },
  "task2": { "title": "Task 2: Basic HTML Styling", "url": "works/task2/task2.html" },
  "task3": { "title": "Task 3: CSS Hover", "url": "works/task3/task3.html" },
  "task4": { "title": "Task 4: Welcome to JS", "url": "works/task4/task4.html" },
  "task5": { "title": "Task 5: Calculator with JS", "url": "works/task5/task5.html" },
  "task6": { "title": "Task 6: GitHub Integration", "url": "works/task6/index.html" },
  "task7": { "title": "Task 7: Console Output", "url": "works/task7/task7.html" },
  "task8": { "title": "Task 8: String Operation", "url": "works/task8/task8.html" },
  "task9": { "title": "Task 9: Conditions", "url": "works/task9/task9.html" },
  "task10": { "title": "Task 10: Call-Stack with Array", "url": "works/task10/task10.html" },
  "task11a": { "title": "Task-11(a): Class Work - Loops", "url": "works/task11a/task11a.html" },
  "task11b": { "title": "Task 11(b): Class Work - Loops", "url": "works/task11b/task11b.html" },
  "task12": { "title": "Task 12: Class Work", "url": "works/task12/task12.html" },
  "task13": { "title": "Task 13: Class Work - Objects_2", "url": "works/task13/task13.html" },
  "task14a": { "title": "Task-14(a): Class Work - Functions", "url": "works/task14a/task14a.html" },
  "task14b": { "title": "Task-14(b): Class Work - Functions", "url": "works/task14b/task14b.html" },
  "task15": { "title": "Task 15: Class Work - Class & Bootstrap", "url": "works/task15/task15.html" },
  "task16": { "title": "Task 16: Class Work - JSON", "url": "works/task16/task16.html" }
};

function createNav() {
  const nav = document.getElementById("navbar");

  Object.keys(works).forEach((key) => {
    const btn = document.createElement("button");
    btn.innerText = works[key].title;
    btn.classList.add("nav-btn");
    btn.onclick = () => loadTask(works[key].url, btn);
    nav.appendChild(btn);
  });
}

function loadTask(url, clickedBtn = null) {
  const iframe = document.getElementById("contentFrame");
  iframe.src = url;

  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
  if (clickedBtn) clickedBtn.classList.add("active");
}

createNav();
