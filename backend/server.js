import express from 'express';

const app = express();

// Build a route 
app.get("/api/notes", (req, res) => {
    res.send("You got 5 notes")
});

app.listen(50001, () => {
    console.log('Server is running on port 50001');
});