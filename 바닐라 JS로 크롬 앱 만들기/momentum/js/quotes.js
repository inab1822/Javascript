const quotes = [
    {
        quote: "Be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Ask not what your country can do for you, ask what you can do for your country." ,
        author: "John F. Kennedy",
    },
    {
        quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "The only thing necessary for the triumph of evil is for good men to do nothing." ,
        author: "Edmund Burke",
    },
    {
        quote: "Give me liberty or give me death." ,
        author: " Patrick Henry",
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." ,
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: " Winston Churchill",
    },
    {
        quote: "A journey of a thousand miles begins with a single step.",
        author: "Lao Tzu",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
    },

];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;