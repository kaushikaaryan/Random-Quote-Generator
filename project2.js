document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
{
text: "The only way to do great work is to love what you do.",
author: "-Steve Jobs",
},
{
text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
author: "-Winston Churchill",
},
{
text: "The future belongs to those who believe in the beauty of their dreams.",
author: "-Eleanor Roosevelt",
},
{
text: "In the middle of difficulty lies opportunity.",
author: "-Albert Einstein",
},
{
text: "Don't watch the clock; do what it does. Keep going.",
author: "-Sam Levenson",
},
{
text: "The only limit to our realization of tomorrow will be our doubts of today.",
author: "-Franklin D. Roosevelt",
},
{
text: "Believe you can and you're halfway there.",
author: "-Theodore Roosevelt",
},
{
text: "Your time is limited, don't waste it living someone else's life.",
author: "-Steve Jobs",
},
{
text: "It does not matter how slowly you go as long as you do not stop.",
author: "-Confucius",
},
{
text: "The best way to predict the future is to create it.",
author: "-Peter Drucker",
},
// Add more quotes here
];


    const colors = [
        "#007BFF",
        "#6610F2",
        "#6F42C1",
        "#E83E8C",
        "#DC3545",
        "#FD7E14",
        "#FFC107",
        "#28A745",
        "#20C997",
        "#17A2B8",
    ];

    const greeting = document.getElementById("greeting");
    const quoteText = document.getElementById("quote");
    const quoteAuthor = document.getElementById("author");
    const newQuoteBtn = document.getElementById("new-quote-btn");

    function getGreeting() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            return "morning";
        } else if (hour >= 12 && hour < 18) {
            return "afternoon";
        } else {
            return "evening/night";
        }
    }

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function updateUI() {
        const greetingText = `Let's start our ${getGreeting()} with a new quote`;
        greeting.textContent = greetingText;

        const randomQuote = getRandomQuote();
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = randomQuote.author;

        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        newQuoteBtn.style.backgroundColor = randomColor;
        quoteText.style.color = randomColor;
        quoteAuthor.style.color = randomColor;
    }

    newQuoteBtn.addEventListener("click", updateUI);

    updateUI();
});