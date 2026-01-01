import express from 'express';

const app = express();



// Build a route //def routes 
app.get("/api/notes", (req, res) => {
    res.status(200).send("You got 10 notes")
});

app.post("/api/notes", (req, res) => {
    res.status(201).json({message:"post created successfully!"})
});

app.put("/api/notes:id", (req, res) => {
    res.status(200).json({message:"post updated successfully!"})
});

app.delete("/api/notes:id", (req, res) => {
    res.status(200).json({message:"notes deleted successfully!"})
});


app.listen(50001, () => {
    console.log('Server is running on port 50001');
});