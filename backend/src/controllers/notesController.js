export function getAllNotes(req,res) {
    res.status(200).send("You just fetched the notes");
};

export function createNote(req,res) {
    res.status(200).send("You sucessfully added a note or notes");
};

export function updateNote(req,res) {
    res.status(200).send("Updating was a sucess");
};

export function deleteNote(req,res) {
    res.status(200).send("deletion was a sucess");
};