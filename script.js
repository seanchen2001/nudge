document.addEventListener("DOMContentLoaded", () => {
    const uploadBox = document.getElementById("upload-box");
    const fileInput = document.getElementById("file-upload");
    const processButton = document.getElementById("process-button");

    // Click to open file selector
    uploadBox.addEventListener("click", () => {
        fileInput.click();
    });

    // Show file name after selecting
    fileInput.addEventListener("change", () => {
        const fileName = fileInput.files[0] ? fileInput.files[0].name : "No file selected";
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
            const fileName = files[0].name;
            uploadBox.querySelector("p").textContent = `Selected file: ${fileName}`;
        }
        uploadBox.style.borderColor = "#ddd";
    });

    // 🔥 THIS is the new part: Handle processing
    processButton.addEventListener("click", async () => {
        const file = fileInput.files[0];

        if (!file || file.type !== "application/pdf") {
            alert("Please upload a valid PDF file.");
            return;
        }

        const formData = new FormData();
        formData.append("pdfFile", file);

        try {
            const response = await fetch("/upload", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Failed to process PDF");
            }

            const result = await response.json();
            console.log("Processing result:", result);
            alert("Processing complete! Check console or show result here.");
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("There was an error processing your file.");
        }
    });
});

// Toggle bar functionality
document.getElementById('toggle-bar').addEventListener('click', () => {
    const toggleBar = document.getElementById('toggle-bar');
    toggleBar.classList.toggle('active');
});
