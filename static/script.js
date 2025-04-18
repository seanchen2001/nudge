document.addEventListener("DOMContentLoaded", () => {
    const uploadBox = document.getElementById("upload-box");
    const fileInput = document.getElementById("file-upload");

    // Click to open file selector
    uploadBox.addEventListener("click", () => {
        fileInput.click();
    });

    // Show file name after selecting
    fileInput.addEventListener("change", () => {
        const fileName = fileInput.files[0]?.name || "No file selected";
        uploadBox.querySelector("p").textContent = `Selected file: ${fileName}`;
    });

    // Drag over styling
    uploadBox.addEventListener("dragover", (event) => {
        event.preventDefault();
        uploadBox.style.borderColor = "#b0b0b0";
    });

    // Drag leave styling
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

    // Toggle bar dropdowns (fixed target)
    const toggleBar = document.getElementById("toggle-bar");
    if (toggleBar) {
        toggleBar.addEventListener("click", () => {
            toggleBar.classList.toggle("active");
        });
    }
});
