document.addEventListener("DOMContentLoaded", () => {
    const uploadBox = document.getElementById("upload-box");
    const fileInput = document.getElementById("file-upload");

    // Only trigger input click if the user clicks the box itself (not dragging, or clicking child elements)
    uploadBox.addEventListener("click", (event) => {
        if (event.target === uploadBox || event.target.tagName === "P") {
            fileInput.click();
        }
    });

    // Show file name after selection
    fileInput.addEventListener("change", () => {
        const fileName = fileInput.files[0]?.name || "No file selected";
        uploadBox.querySelector("p").textContent = `Selected file: ${fileName}`;
    });

    // Drag over styling
    uploadBox.addEventListener("dragover", (event) => {
        event.preventDefault();
        uploadBox.style.borderColor = "#b0b0b0";
    });

    uploadBox.addEventListener("dragleave", () => {
        uploadBox.style.borderColor = "#ddd";
    });

    // Handle file drop
    uploadBox.addEventListener("drop", (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files.length) {
            fileInput.files = files;
            uploadBox.querySelector("p").textContent = `Selected file: ${files[0].name}`;
        }
        uploadBox.style.borderColor = "#ddd";
    });

    // Toggle bar dropdowns
    const toggleBar = document.getElementById("toggle-bar");
    if (toggleBar) {
        toggleBar.addEventListener("click", () => {
            toggleBar.classList.toggle("active");
        });
    }
});
