// vunerable code XSS
const userComment = "<script>alert('Hacked!');</script>";
document.body.innerHTML = `User comment: ${userComment}`;
// end vunerable code

// prevention code
const DOMPurify = require('dompurify');
const sanitizedComment = DOMPurify.sanitize(userComment);
document.body.innerHTML = `User comment: ${sanitizedComment}`;
// end prevention code

// SQL Injection Prevention
const userInput = "1; DROP TABLE users";
const query = `SELECT * FROM users WHERE id = ${userInput}`;
db.query(query);

// SQL Injection Prevention
const userInput = 1;
const query = "SELECT * FROM users WHERE id = ?";
db.query(query, [userInput]);

// Command Injection Prevention
const userInput = "foo.txt; rm -rf /";
const command = `cat ${userInput}`;
require('child_process').exec(command);

// Command Injection Prevention
const userInput = "foo.txt"; // Must be validated and sanitized
const { execFile } = require('child_process');
execFile('cat', [userInput], (error, stdout, stderr) => {
    if (error) {
        console.error(`Execution error: ${error}`);
        return;
    }
    console.log(`File content: ${stdout}`);
});

// Avoid eval() and Function Constructor
const userInput = "alert('Hacked!')";
eval(userInput); // Dangerous!

// Avoid eval() and Function Constructor
// Instead of using eval(), use safer alternatives for string manipulation or logic.
// For example, you can use JSON.parse() for parsing JSON strings.
//Input validation
const validator = require('validator');

const userInput = "<script>alert('XSS');</script>";
if (!validator.isAlphanumeric(userInput)) {
    console.error("Invalid input");
} else {
    console.log("Valid input");
}
