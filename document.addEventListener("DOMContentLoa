document.addEventListener("DOMContentLoaded", () => {
    const uploadBox = document.getElementById("upload-box");
    const fileInput = document.getElementById("file-upload");
    const form = document.querySelector("form");

    // ✅ Click upload area to open file picker
    if (uploadBox && fileInput) {
        uploadBox.addEventListener("click", () => {
            fileInput.click();
        });

        // ✅ Show file name when selected
        fileInput.addEventListener("change", () => {
            const fileName = fileInput.files[0]?.name || "No file selected";
            uploadBox.querySelector("p").textContent = `Selected file: ${fileName}`;
        });

        // ✅ Handle drag-and-drop styling
        uploadBox.addEventListener("dragover", (event) => {
            event.preventDefault();
            uploadBox.style.borderColor = "#b0b0b0";
        });

        uploadBox.addEventListener("dragleave", () => {
            uploadBox.style.borderColor = "#999";
        });

        // ✅ Handle file drop
        uploadBox.addEventListener("drop", (event) => {
            event.preventDefault();
            const files = event.dataTransfer.files;
            if (files.length) {
                fileInput.files = files;
                uploadBox.querySelector("p").textContent = `Selected file: ${files[0].name}`;
            }
            uploadBox.style.borderColor = "#999";
        });
    }

    // ✅ Prevent double form submission
    if (form) {
        let submitting = false;
        form.addEventListener("submit", (e) => {
            if (submitting) {
                e.preventDefault();
                return false;
            }
            submitting = true;
        });
    }

    // ✅ Dropdown toggles for logos
    const companyBar = document.getElementById("company-bar");
    const clientBar = document.getElementById("client-bar");

    if (companyBar && clientBar) {
        companyBar.addEventListener("click", (e) => {
            e.stopPropagation();
            companyBar.classList.toggle("active");
            clientBar.classList.remove("active");
        });

        clientBar.addEventListener("click", (e) => {
            e.stopPropagation();
            clientBar.classList.toggle("active");
            companyBar.classList.remove("active");
        });

        document.addEventListener("click", () => {
            companyBar.classList.remove("active");
            clientBar.classList.remove("active");
        });
    }
});
