document.addEventListener("DOMContentLoaded", () => {
	// Sidebar
	const sideBarTrigger = document.getElementById("sidenav-trigger");
	const SideBar = document.getElementById("sidebar");
	const Output = document.getElementById("output");

	sideBarTrigger.parentElement.addEventListener("click", e => {
		e.preventDefault();
		SideBar.classList.toggle("condensed");
		Output.classList.toggle("condensed-active");
	});
});
