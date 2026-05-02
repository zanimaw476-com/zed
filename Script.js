const quizData = [
    {
        question: "How does the browser resolve conflicting styles when values are set for the same selector in different style sheets (Internal, External, and Inline)?",
        a: "The browser always prioritizes external style sheets.",
        b: "The values are inherited from the more specific style sheet following the cascade order.",
        c: "The browser ignores internal style sheets if an external one is linked.",
        d: "The browser combines all properties into a single new stylesheet.",
        correct: "b",
    },
    {
        question: "In a CSS rule, what is the correct sequence of the declaration parts if multiple properties are applied?",
        a: "{property: value, property: value}",
        b: "{selector: property; value;}",
        c: "{selector: property: value}",
        d: "{property = value; property = value;}",
        correct: "a",
    },
    {
        question: "Which of the following is true about the CSS box model padding?",
        a: "It is completely transparent and has no background color.",
        b: "It clears an area inside the border and is affected by the element's background color.",
        c: "It is located outside the border of an element.",
        d: "It only applies to block-level elements.",
        correct: "b",
    },
    {
        question: "When using the background-position property, which of the following is a valid value combination of values?",
        a: "repeat-x and scroll",
        b: "top and left",
        c: "fixed and center",
        d: "length and medium",
        correct: "b",
    },
    {
        question: "What does the text-transform property's capitalize value do to the text?",
        a: "Makes all letters lowercase.",
        b: "Makes all letters uppercase.",
        c: "Changes the first character of each word to uppercase.",
        d: "Underlines the text.",
        correct: "c",
    },
    {
        question: "If you are setting the list-style-image property to an image, what is recommended to ensure fallback if the image cannot be displayed?",
        a: "Set list-style-type to none",
        b: "Set list-style-position to inside",
        c: "Provide a list-style-type value as a fallback",
        d: "Use an inline style",
        correct: "c",
    },
    {
        question: "How do you group multiple selectors to apply the same CSS declarations?",
        a: "Separate the selectors with a space",
        b: "Separate the selectors with a comma",
        c: "Separate the selectors with a semicolon",
        d: "Separate the selectors with a colon",
        correct: "b",
    },
    {
        question: "When styling an HTML table, which property is used to combine the cell borders into a single, unified border?",
        a: "table-layout: fixed;",
        b: "border-collapse: collapse;",
        c: "border-style: solid;",
        d: "border-spacing: 0;",
        correct: "b",
    },
    {
        question: "Which of the following is the correct syntax for an inline CSS style?",
        a: "<p class=\"style: color: red;\">",
        b: "<p style=\"color: red;\">",
        c: "<p style={color: red}>",
        d: "<p css=\"color: red\">",
        correct: "b",
    },
    {
        question: "Which CSS property is used to change the space between words of an element?",
        a: "letter-spacing",
        b: "text-indent",
        c: "word-spacing",
        d: "line-height",
        correct: "c",
    },
    {
        question: "The line-height property defines the distance between lines of text. Which value is not valid for line-height?",
        a: "normal",
        b: "2.5",
        c: "solid",
        d: "150%",
        correct: "c",
    },
    {
        question: "What is the behavior of the text-decoration: none; property?",
        a: "Removes all padding from the text",
        b: "Removes underlines from links",
        c: "Hides the text from the document",
        d: "Transforms text to lowercase",
        correct: "b",
    },
    {
        question: "Which property controls the indentation of the first line of text within a block-level element?",
        a: "text-align",
        b: "text-transform",
        c: "text-indent",
        d: "padding-left",
        correct: "c",
    },
    {
        question: "What is the effect of the CSS rule background: url('img.png') no-repeat right top;",
        a: "Repeats the image vertically and places it in the bottom-left corner",
        b: "Displays the image once, positioned at the top right of the element",
        c: "Tiles the image horizontally across the entire element",
        d: "Stretches the image to fit the background of the element",
        correct: "b",
    },
    {
        question: "What is the recommended order for styling link states with pseudo-classes?",
        a: ":link, :visited, :hover, :active",
        b: ":hover, :active, :link, :visited",
        c: ":active, :hover, :link, :visited",
        d: ":link, :active, :visited, :hover",
        correct: "a",
    },
    {
        question: "When using an external style sheet, which tag links the style sheet to the HTML document?",
        a: "<style>",
        b: "<css>",
        c: "<link>",
        d: "<script>",
        correct: "c",
    },
    {
        question: "Which CSS property sets the background color of an element?",
        a: "color",
        b: "background-color",
        c: "background-image",
        d: "background",
        correct: "b",
    },
    {
        question: "Which of the following is the standard CSS comment syntax supported across browsers?",
        a: "// comment",
        b: "/* comment */",
        c: "",
        d: "' comment",
        correct: "b",
    },
    {
        question: "Why are generic font families (like sans-serif or serif) used at the end of a font-family list?",
        a: "To set the color of the font",
        b: "To define the size of the font",
        c: "To provide a fallback if the specific font is not available",
        d: "To optimize browser rendering time",
        correct: "c",
    },
    {
        question: "Which property value can be used to prevent an element's background image from repeating?",
        a: "background-repeat: repeat-x;",
        b: "background-repeat: no-repeat;",
        c: "background-attachment: fixed;",
        d: "background-position: center;",
        correct: "b",
    },
    {
        question: "When specifying a border in CSS, what are the three sub-properties that can be written in a single border shorthand declaration?",
        a: "width, style, color",
        b: "margin, border, padding",
        c: "top, right, bottom",
        d: "color, size, radius",
        correct: "a",
    },
    {
        question: "What does the background-attachment: fixed; value do?",
        a: "Fixes the background image relative to the viewport so it doesn't scroll with the content",
        b: "Fixes the background image relative to the element",
        c: "Prevents the background from being printed",
        d: "Fixes the element itself relative to the document",
        correct: "a",
    },
    {
        question: "Which property controls the vertical alignment of elements, such as text inside a table cell?",
        a: "text-align",
        b: "vertical-align",
        c: "line-height",
        d: "padding-top",
        correct: "b",
    },
    {
        question: "How is a class selector written in a CSS file?",
        a: "Preceded by a hash (#) symbol",
        b: "Preceded by a dot (.) symbol",
        c: "Preceded by a colon (:) symbol",
        d: "Enclosed in angle brackets (<>)",
        correct: "b",
    },
    {
        question: "How is an ID selector written in a CSS file?",
        a: "Preceded by a hash (#) symbol",
        b: "Preceded by a dot (.) symbol",
        c: "Preceded by a colon (:) symbol",
        d: "Enclosed in angle brackets (<>)",
        correct: "a",
    },
    {
        question: "Why is JavaScript considered an interpreted (or translated) language rather than a strictly compiled language?",
        a: "It requires a dedicated compiler like GCC",
        b: "The browser's JavaScript translator reads and interprets the code on the fly",
        c: "It runs on the server-side only",
        d: "It is not a programming language",
        correct: "b",
    },
    {
        question: "Which of the following is a primary use case for JavaScript on the client side?",
        a: "Managing the database connection pool",
        b: "Compiling CSS files",
        c: "Client-side validation and creating interactive elements",
        d: "Managing network server IP addresses",
        correct: "c",
    },
    {
        question: "Which of the following tags is used to embed JavaScript directly into an HTML document?",
        a: "<style>",
        b: "<script>",
        c: "<link>",
        d: "<js>",
        correct: "b",
    },
    {
        question: "What is the result of applying the search() method to a string with a regular expression like /w3schools/i?",
        a: "It returns the string itself",
        b: "It returns the starting position index of the matched substring (case-insensitive)",
        c: "It returns a boolean value",
        d: "It replaces the word with a new one",
        correct: "b",
    },
    {
        question: "Which method is used to find the first position of a specified value in a string?",
        a: "replace()",
        b: "search()",
        c: "split()",
        d: "indexOf()",
        correct: "b",
    },
    {
        question: "To perform a case-insensitive search or replace operation in JavaScript string methods, what is used instead of a string argument?",
        a: "A number",
        b: "An array",
        c: "A regular expression flag like i",
        d: "A boolean variable",
        correct: "c",
    },
    {
        question: "What does the replace() method do when provided with a string argument (e.g., str.replace(\"Microsoft\", \"W3Schools\"))?",
        a: "It replaces all instances of the specified value globally",
        b: "It replaces only the first occurrence of the specified value",
        c: "It throws an error unless a regular expression is used",
        d: "It replaces the entire string",
        correct: "b",
    },
    {
        question: "If you need to include an external JavaScript file into an HTML document, what attribute of the <script> tag is used to specify the file path?",
        a: "href",
        b: "src",
        c: "link",
        d: "id",
        correct: "b",
    },
    {
        question: "How does JavaScript handle functions when called from an event handler (like onclick) located inside the <head> section of the HTML document?",
        a: "It executes automatically on page load",
        b: "It waits for the user interaction that triggers the event before running the function",
        c: "It overrides the DOM elements",
        d: "It stops the browser from loading",
        correct: "b",
    },
    {
        question: "Which of the following is NOT a location where a <script> tag can be placed in an HTML document?",
        a: "Inside the <head> tag",
        b: "Inside the <body> tag",
        c: "In an external .js file",
        d: "Inside the <style> tag",
        correct: "d",
    },
    {
        question: "What type of scripting language is JavaScript?",
        a: "Compiled, strongly-typed language",
        b: "Object-based, lightweight, cross-platform scripting language",
        c: "Low-level machine language",
        d: "Markup language",
        correct: "b",
    },
    {
        question: "Which JavaScript string method returns a new string with a specified pattern replaced?",
        a: "search()",
        b: "replace()",
        c: "indexOf()",
        d: "slice()",
        correct: "b",
    },
    {
        question: "When using regular expressions in the replace() method, what flag makes the search case-insensitive?",
        a: "g",
        b: "m",
        c: "i",
        d: "c",
        correct: "c",
    },
    {
        question: "How do you access an element with the id \"demo\" in the DOM and change its content?",
        a: "document.getElementById(\"demo\").innerHTML = \"Text\";",
        b: "document.getElement(\"demo\") = \"Text\";",
        c: "getElementById(\"demo\").innerHTML(\"Text\");",
        d: "document.querySelector(\".demo\").value = \"Text\";",
        correct: "a",
    },
    {
        question: "Which of the following dialog boxes is used to display a message with Yes/No or OK/Cancel buttons?",
        a: "prompt()",
        b: "alert()",
        c: "confirm()",
        d: "write()",
        correct: "c",
    },
    {
        question: "What happens if a <script> tag includes an external .js file but also contains internal code inside the tag?",
        a: "It throws a JavaScript compilation error",
        b: "The browser executes the external file and ignores the internal code",
        c: "The browser executes the internal code and ignores the external file",
        d: "The internal code is ignored, but you can only load external scripts",
        correct: "b",
    },
    {
        question: "Which JavaScript method would you use to find the index of a matching string?",
        a: "search()",
        b: "find()",
        c: "locate()",
        d: "indexOf()",
        correct: "a",
    },
    {
        question: "What will be the output value of n in the following code snippet? (var str = \"Visit W3Schools!\"; var n = str.search(\"W3Schools\");)",
        a: "0",
        b: "6",
        c: "14",
        d: "-1",
        correct: "b",
    },
    {
        question: "What will be the output value of n in the following code snippet? (var str = 'Visit W3Schools!'; var n = str.search('W3Schools');)",
        a: "0",
        b: "6",
        c: "14",
        d: "-1",
        correct: "b",
    },
    {
        question: "What is the result of evaluating res in the following JavaScript code snippet? (var str = 'Visit Microsoft!'; var res = str.replace(/microsoft/i, 'W3Schools');)",
        a: "Visit Microsoft!",
        b: "Visit W3Schools!",
        c: "W3Schools",
        d: "Visit Microsoft",
        correct: "b",
    },
    {
        question: "What is the primary purpose of JavaScript pop-up boxes like alert(), confirm(), and prompt()?",
        a: "To run heavy background processes",
        b: "To create interactive dialogues and notify or get inputs from the user",
        c: "To style HTML elements",
        d: "To connect directly to the SQL database",
        correct: "b",
    },
    {
        question: "Which of the following is NOT one of the primary uses of JavaScript mentioned in the course document?",
        a: "Client-side validation",
        b: "Displaying date and time",
        c: "Writing server-side database recovery protocols",
        d: "Dynamic drop-down menus",
        correct: "c",
    },
    {
        question: "Which object and method are used to write output directly into the HTML document using JavaScript?",
        a: "window.write(\"Text\");",
        b: "document.write(\"Text\");",
        c: "console.log(\"Text\");",
        d: "document.getElementById(\"demo\")",
        correct: "b",
    },
    {
        question: "When calling a function with the onclick event in JavaScript, what is the prerequisite for the function to execute?",
        a: "The page must finish rendering the background",
        b: "The user must click the associated element",
        c: "The function must be declared within a <style> block",
        d: "The onload event must be triggered first",
        correct: "b",
    },
    {
        question: "Which of the following best describes the search() method when used with a string argument?",
        a: "It returns an array of matching words",
        b: "It replaces the word with a blank string",
        c: "It searches a string for a specified value and returns the position of the match",
        d: "It returns the boolean true if the match exists",
        correct: "c",
    },
    {
        question: "Which JavaScript method is used to replace the specified value in a string?",
        a: "modify()",
        b: "replace()",
        c: "change()",
        d: "update()",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionInputs = document.querySelectorAll('.option');
const labelOpt1 = document.getElementById('label-opt1');
const labelOpt2 = document.getElementById('label-opt2');
const labelOpt3 = document.getElementById('label-opt3');
const labelOpt4 = document.getElementById('label-opt4');
const submitBtn = document.getElementById('submit'); 
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');

let currentQuiz = 0;
let userAnswers = [];

function initializeAnswers() {
    if (typeof quizData !== 'undefined' && userAnswers.length === 0) {
        userAnswers = new Array(quizData.length).fill(undefined);
    }
}

initializeAnswers();
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    if (typeof quizData === 'undefined') return;

    const currentQuizData = quizData[currentQuiz];

    questionNumber.innerText = `Question ${currentQuiz + 1}/${quizData.length}`;
    questionText.innerText = currentQuizData.question;
    labelOpt1.innerText = currentQuizData.a;
    labelOpt2.innerText = currentQuizData.b;
    labelOpt3.innerText = currentQuizData.c;
    labelOpt4.innerText = currentQuizData.d;

    if (userAnswers[currentQuiz]) {
        optionInputs.forEach(option => {
            if (option.value === userAnswers[currentQuiz]) {
                option.checked = true;
            }
        });
    }

    if (currentQuiz === quizData.length - 1) {
        nextBtn.classList.add('hide');
        submitBtn.classList.remove('hide');
    } else {
        nextBtn.classList.remove('hide');
        submitBtn.classList.add('hide');
    }
}

function deselectAnswers() {
    optionInputs.forEach(option => option.checked = false);
}

function getSelected() {
    let answer = undefined;
    optionInputs.forEach(option => {
        if (option.checked) {
            answer = option.value;
        }
    });
    return answer;
}

nextBtn.addEventListener('click', () => {
    if (typeof quizData === 'undefined') return;

    const answer = getSelected();

    if (answer) {
        userAnswers[currentQuiz] = answer;
    } else {
        userAnswers[currentQuiz] = undefined;
    }

    if (currentQuiz < quizData.length - 1) {
        currentQuiz++;
        loadQuiz();
    }
});

submitBtn.addEventListener('click', () => {
    if (typeof quizData === 'undefined') return;

    const answer = getSelected();

    if (answer) {
        userAnswers[currentQuiz] = answer;
    } else {
        userAnswers[currentQuiz] = undefined;
    }

    const hasUnanswered = userAnswers.includes(undefined);
    if (hasUnanswered) {
        alert("You have unanswered or skipped questions. Please answer all questions before submitting!");
        return;
    }

    let finalScore = 0;
    for (let i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].correct) {
            finalScore++;
        }
    }

    quiz.style.display = 'none';
    scoreContainer.classList.remove('hide');
    scoreText.innerText = `You scored ${finalScore} out of ${quizData.length}`;
});

prevBtn.addEventListener('click', () => {
    if (typeof quizData === 'undefined') return;

    const answer = getSelected();

    if (answer) {
        userAnswers[currentQuiz] = answer;
    }

    if (currentQuiz > 0) {
        currentQuiz--;
        loadQuiz();
    }
});

function restartFinal() {
    currentQuiz = 0;
    if (typeof quizData !== 'undefined') {
        userAnswers = new Array(quizData.length).fill(undefined);
    }
    quiz.style.display = 'block';
    scoreContainer.classList.add('hide');
    loadQuiz();
}

if (restartBtn) {
    restartBtn.addEventListener('click', restartFinal);
}