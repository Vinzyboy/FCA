const tabs = document.querySelectorAll(".nav");
const contents = document.querySelectorAll(".school");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab();
    tab.classList.add("active");
    const activeContent = document.querySelector(`#${tab.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});
function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}
function removeActiveContent() {
  contents.forEach((school) => {
    school.classList.remove("active");
  });
}
