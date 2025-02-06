const express = require("express");
const {exec} = require("child_process");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get("/open-rustdesk", (req, res) => {
	exec('start "" "C:\\Program Files\\RustDesk\\RustDesk.exe"', (error) => {
		if (error) {
			res.status(500).send("Error opening RustDesk");
			return;
		} else {
			res.send("RustDesk opened successfully");
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

// Hellooo
