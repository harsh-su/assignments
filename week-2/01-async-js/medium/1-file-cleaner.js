let fs = require("fs");

function cleanFunction() {
    fs.readFile("file.txt", "utf-8", (err, content) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        const cleanedContent = content.split(/\s+/).join(' ');

        fs.writeFile("file.txt", cleanedContent, (err) => {
            if (err) {
                console.error("Error writing file:", err);
                return;
            }

            console.log("Cleaning Completed");
        });
    });
}

cleanFunction();

console.log("Process has started");
