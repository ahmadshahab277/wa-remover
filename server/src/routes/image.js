const express = require("express");
const path = require("path");
const { spawn } = require("child_process");
const upload = require("../middleware/multer");

const router = express.Router();

router.post("/remove", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No image received" });
    }

    const infile = req.file.path;
    const outname = `no-bg-${Date.now()}.png`;
    const outfile = path.join(path.dirname(infile), outname);

    const script = path.join(__dirname, "..", "remove_bg.py");
    const python = process.platform === "win32" ? "python" : "python3";

    const py = spawn(python, [script, infile, outfile]);
    let stderr = "";

    py.stderr.on("data", chunk => (stderr += chunk.toString()));
    py.on("error", err => {
        console.error("Python spawn error:", err);
        res.status(500).json({ message: "Server error", detail: err.message });
    });

    py.on("close", code => {
        if (code !== 0) {
            console.error("remove_bg.py failed:", stderr);
            return res.status(500).json({ message: "Background removal failed", detail: stderr });
        }
        // Return the PNG blob
        res.type("png");
        res.sendFile(outfile, err => {
            if (err) {
                console.error("sendFile error:", err);
                res.status(500).end();
            }
        });
    });
});

module.exports = router;