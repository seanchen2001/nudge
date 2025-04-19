document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ script.js loaded");

    const uploadBox = document.getElementById("upload-box");
    const fileInput = document.getElementById("file-upload");
    const form = document.querySelector("form");

    // Upload box click
    if (uploadBox && fileInput) {
        uploadBox.addEventListener("click", () => fileInput.click());

        fileInput.addEventListener("change", () => {
            const fileName = fileInput.files[0]?.name || "No file selected";
            uploadBox.querySelector("p").textContent = `Selected file: ${fileName}`;
        });

        uploadBox.addEventListener("dragover", (event) => {
            event.preventDefault();
            uploadBox.style.borderColor = "#b0b0b0";
        });

        uploadBox.addEventListener("dragleave", () => {
            uploadBox.style.borderColor = "#999";
        });

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

    // Dropdown toggles
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

    // Prevent double form submission
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
});
