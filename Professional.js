//Clock
{
  function updateDateTime() {
    const currentDayElement = document.getElementById("currentDay");
    const currentDateElement = document.getElementById("currentDate");
    const currentTimeElement = document.getElementById("currentTime");

    const now = new Date();

    // Display the current day of the week in full form, e.g., "Wednesday"
    const dayOptions = { weekday: "long" };
    const formattedDay = now.toLocaleDateString("en-US", dayOptions);

    // Display the current date in the format: "October 19, 2023"
    const dateOptions = { month: "long", day: "numeric" };
    const formattedDate = now.toLocaleDateString("en-US", dateOptions);

    // Display the current time in the format: "12:34:56 PM"
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    const formattedTime = now.toLocaleTimeString("en-Gb", timeOptions);

    currentDayElement.textContent = formattedDay;
    currentDateElement.textContent = formattedDate;
    currentTimeElement.textContent = formattedTime;
  }

  // Update date and time every second
  setInterval(updateDateTime, 1000);

  // Initial update
  updateDateTime();
}

//Task-listing
{
  let listContainer = document.getElementById("list-container");
  let head = document.querySelector("head");
  let inputBox = document.getElementById("input-box");

  function addTask() {
    if (inputBox.value == "") {
      alert("Please Enter the Text");
    } else {
      const task = document.createElement("li");
      task.textContent = inputBox.value;
      listContainer.appendChild(task);
      // inputBox.value = ''
      let span = document.createElement("span");
      span.textContent = "\u00d7";
      task.appendChild(span);
      span.style.right = "0px";
    }
    inputBox.value = "";
    saveData();
  }

  listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  });

  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }

  function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
  }

  showTask();
}

//Theme-Toggler
{
  const themeToggler = document.querySelector(".theme-toggler");
  themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");

    // Save the current theme state to localStorage
    const isDarkTheme = document.body.classList.contains(
      "dark-theme-variables"
    );
    localStorage.setItem("darkTheme", isDarkTheme);
  });

  // Check the saved theme state on page load
  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("darkTheme");
    if (savedTheme === "true") {
      document.body.classList.add("dark-theme-variables");
      themeToggler.querySelector("span:nth-child(1)").classList.add("active");
      themeToggler.querySelector("span:nth-child(2)").classList.add("active");
    }
  });
}

//Press Enter to Submit
{
  document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("input-box");
    var submitButton = document.getElementById("submitButton");

    inputField.addEventListener("keydown", function (event) {
      // Check if the pressed key is the Enter key (key code 13)
      if (event.key === "Enter") {
        // Programmatically click the submit button
        submitButton.click();
      }
    });
  });
}
