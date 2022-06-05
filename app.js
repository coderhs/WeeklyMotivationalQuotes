const offLineQuotes =   [{ content: "The first step toward getting somewhere is to decide that you are not going to stay where you are. ", author: "Unknown"},
  { content: "Men learn to love the woman they are attracted to. Women learn to become attracted to the man they fall in love with. ", author: "Woody Allen"},
  { content: "From a certain point onward there is no longer any turning back. That is the point that must be reached. ", author: "Franz Kafka"},
  { content: "To the mind that is still, the whole universe surrenders. ", author: "Lao Tzu"},
  { content: "No amount of regretting can change the past, and no amount of worrying can change the future. ", author: "Roy T. Bennett"},
  { content: "People who bite the hand that feeds them usually lick the boot that kicks them. ", author: "Eric Hoffer"},
  { content: "Art is the signature of civilizations.  ", author: "Beverly Sills"},
  { content: "There are few reasons for telling the truth, but for lying the number is infinite. ", author: "Carlos Ruiz Zafon"},
  { content: "It takes half your life before you discover life is a do-it-yourself project. ", author: "Napoleon Hill"},
  { content: "Grudges are for those who insist that they are owed something; forgiveness, however, is for those who are substantial enough to move on. ", author: "Criss Jami"},
  { content: "The problem happens when we have multiple desires. When we have fuzzy desires. When we want to do ten different things and we're not clear about which is the one we care about. ", author: "Naval Ravikant"},
  { content: "You are what you do, not what you say you'll do. ", author: "Carl Jung"},
  { content: "There is always risk, so learn to manage risk instead of avoiding it. ", author: "Robert Kiyosaki"},
  { content: "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.   ", author: "Wayne Dyer"},
  { content: "It is in the heart that makes a man rich. He is rich according to what he is, not according to what he has. ", author: "Henry Ward Beecher"},
  { content: "Raise your words, not voice. It is rain that grows flowers, not thunder. ", author: "Rumi"},
  { content: "If we will be quiet and ready enough, we shall find compensation in every disappointment. ", author: "Henry David Thoreau"},
  { content: "The most important thing in communication is to hear what isn't being said. ", author: "Peter Drucker"},
  { content: "Each path to knowledge involves different rules and these rules are not interchangeable. ", author: "Barack Obama"},
  { content: "Life is like playing the violin in public and learning the instrument as one goes on. ", author: "Samuel Butler"},
  { content: "There are no constraints on the human mind, no walls around the human spirit, no barriers to our progress except those we ourselves erect. ", author: "Ronald Reagan"},
  { content: "Honor is the foundation of courage. ", author: "Amelia Earhart"},
  { content: "If you are patient in one moment of anger, you will escape a hundred days of sorrow.  ", author: "Chinese Proverb"},
  { content: "The first half of life is devoted to forming a healthy ego, the second half is going inward and letting go of it. ", author: "Carl Jung"},
  { content: "Engage in those actions and thoughts that nurture the good qualities you want to have. ", author: "Paramahansa Yogananda"},
  { content: "It is not fair to ask of others what you are not willing to do yourself. ", author: "Eleanor Roosevelt"},
  { content: "Change yourself and you have done your part in changing the world. ", author: "Paramahansa Yogananda"},
  { content: "You will never do anything in this world without courage. It is the greatest quality of the mind next to honor. ", author: "James Allen"},
  { content: "We are all born ignorant, but one must work hard to remain stupid. ", author: "Benjamin Franklin"},
  { content: "To forgive means pardoning the unpardonable. ", author: "Gilbert Chesterton"},
  { content: "Great ones are willing to get burned time and again as they sharpen their swords in the fire. ", author: "Josh Waitzkin"},
  { content: "How to get more opportunity: Create more opportunity for others. ", author: "Jack Butcher"},
  { content: "Great things are not done by impulse, but by a series of small things brought together. ", author: "Vincent van Gogh"},
  { content: "If you pick up a starving dog and make him prosperous he will not bite you. This is the principal difference between a dog and man. ", author: "Mark Twain"},
  { content: "Everyone has a sense of humor. If you don't laugh at jokes, you probably laugh at opinions. ", author: "Criss Jami"},
  { content: "Ripe fruit falls by itself - but it doesn't fall in your mouth.  ", author: "Chinese Proverb"},
  { content: "The real art in learning takes place as we move beyond proficiency, when our work becomes an expression of our essence. ", author: "Josh Waitzkin"},
  { content: "One's best success comes after their greatest disappointments. ", author: "Henry Ward Beecher"},
  { content: "Keep your face always toward the sunshine -  shadows will fall behind you. ", author: "Walt Whitman"},
  { content: "You have a brain and mind of your own. Use it, and reach your own decisions. ", author: "Napoleon Hill"},
  { content: "Allow motion to equal emotion. ", author: "Elbert Hubbard"},
  { content: "Don't wish it were easier, wish you were better. ", author: "Jim Rohn"},
  { content: "Before you speak, ask yourself, is it kind, is it necessary, is it true, does it improve the silence? ", author: "Sathya Sai Baba"},
  { content: "Truth is like most opinions - best unexpressed. ", author: "Kenneth Branagh"},
  { content: "If you want to turn a vision into reality, you have to give 100% and never stop believing in your dream. ", author: "Arnold Schwarzenegger"},
  { content: "I wasn't brave, I just didn't have time to be scared. ", author: "Amelia Earhart"},
  { content: "If you throw away all thoughts of attainment, you will then come to see the real purpose of your quest. ", author: "Seungsahn"},
  { content: "Intelligent men are cruel. Stupid men are monstrously cruel. ", author: "Jack London"},
  { content: "The ego wants to go fast. The soul needs to go slow. ", author: "Maxime Lagace"},
  { content: "Prefer to be defeated in the presence of the wise than to excel among fools. ", author: "Dogen"}];

let randomNum, randomWallNum;

let quoteContent = document.getElementById("quote-content");
let quoteAuthor = document.getElementById("quote-author");

const quote_api_url = "https://zenquotes.io/api/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showQuote() {
  getQuote(quote_api_url).then(
    function (response) {
      quoteContent.textContent = response[0].q;
      quoteAuthor.textContent = response[0].a;
    },
    function () {
      let randomQuote = offLineQuotes[Math.floor(Math.random()*50)];
      quoteContent.textContent = randomQuote.content;
      quoteAuthor.textContent = randomQuote.author;
    }
  );
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/random/" +
    screen.width +
    "x" +
    screen.height +
    "/?nature')";
}

function renderQuote(quote) {
  return quote.q + " <br /> <br /> <font color=#FFA81E>" + quote.a + "</font>";
}

window.onload = showQuote();
