import express from "express"
import cors from "cors"
import mysql from "mysql"
import dotenv from "dotenv"

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
// app.use(cors())
const corsOption = {
    origin : "http://localhost:5173",
    credentials : true,
}
app.use(cors(corsOption))

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'password',
    database: 'flashcard'
})

// Fetch card 
app.get("/getcard", (req, res) => {
    const sql = "SELECT * FROM cards";
    db.query(sql, (err, data) => {
        if (err)
            return res.json(err)
        return res.json(data)
    })
})


// Add card
app.post("/addcard", (req, res) => {
    const question = req.body.question;
    const answer = req.body.answer;
    const category = req.body.category;
    
    const sql = `INSERT INTO cards (Question, Answer, Category) values ("${question}", "${answer}", "${category}")`;
    db.query(sql, (err, data) => {
        if (err)
            return res.json(err);
        return res.json({
            success: true,
            message: "Card Added successfully"
        })
    })
})

// Update card
app.put("/editcard", (req, res) => {
    // const sql = `UPDATE cards SET Question="Who developed python?", Answer="Guido Van Russem" WHERE QuestionId=3`;
    const sql = `UPDATE cards SET Answer="Java is an Object Oriented Programming language" WHERE QuestionId=1`;
    db.query(sql, (err, data) => {
        if (err)
            return res.json(err)
        return res.json({
            success: true,
            message: "Card Updated successfully"
        })
    })
})

// Delete Card
app.delete("/deletecard/:id", (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM cards WHERE QuestionId=${id}`;
    db.query(sql, (err, data) => {
        if (err)
            return res.json(err)
        return res.json({
            success: true,
            message: "Card Deleted"
        })
    })
})


app.listen(port, () => {
    console.log('Listening on port 3000');
})