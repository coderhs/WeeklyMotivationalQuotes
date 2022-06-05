const offLineQuotes = [
  "The first step toward getting somewhere is to decide that you are not going to stay where you are. <br /> <br /> <font color=#FFA81E>Unknown</font>",
  "Men learn to love the woman they are attracted to. Women learn to become attracted to the man they fall in love with. <br /> <br /> <font color=#FFA81E>Woody Allen</font>",
  "From a certain point onward there is no longer any turning back. That is the point that must be reached. <br /> <br /> <font color=#FFA81E>Franz Kafka</font>",
  "To the mind that is still, the whole universe surrenders. <br /> <br /> <font color=#FFA81E>Lao Tzu</font>",
  "No amount of regretting can change the past, and no amount of worrying can change the future. <br /> <br /> <font color=#FFA81E>Roy T. Bennett</font>",
  "People who bite the hand that feeds them usually lick the boot that kicks them. <br /> <br /> <font color=#FFA81E>Eric Hoffer</font>",
  "Art is the signature of civilizations.  <br /> <br /> <font color=#FFA81E>Beverly Sills</font>",
  "There are few reasons for telling the truth, but for lying the number is infinite. <br /> <br /> <font color=#FFA81E>Carlos Ruiz Zafon</font>",
  "It takes half your life before you discover life is a do-it-yourself project. <br /> <br /> <font color=#FFA81E>Napoleon Hill</font>",
  "Grudges are for those who insist that they are owed something; forgiveness, however, is for those who are substantial enough to move on. <br /> <br /> <font color=#FFA81E>Criss Jami</font>",
  "The problem happens when we have multiple desires. When we have fuzzy desires. When we want to do ten different things and we're not clear about which is the one we care about. <br /> <br /> <font color=#FFA81E>Naval Ravikant</font>",
  "You are what you do, not what you say you'll do. <br /> <br /> <font color=#FFA81E>Carl Jung</font>",
  "There is always risk, so learn to manage risk instead of avoiding it. <br /> <br /> <font color=#FFA81E>Robert Kiyosaki</font>",
  "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.   <br /> <br /> <font color=#FFA81E>Wayne Dyer</font>",
  "It is in the heart that makes a man rich. He is rich according to what he is, not according to what he has. <br /> <br /> <font color=#FFA81E>Henry Ward Beecher</font>",
  "Raise your words, not voice. It is rain that grows flowers, not thunder. <br /> <br /> <font color=#FFA81E>Rumi</font>",
  "If we will be quiet and ready enough, we shall find compensation in every disappointment. <br /> <br /> <font color=#FFA81E>Henry David Thoreau</font>",
  "The most important thing in communication is to hear what isn't being said. <br /> <br /> <font color=#FFA81E>Peter Drucker</font>",
  "Each path to knowledge involves different rules and these rules are not interchangeable. <br /> <br /> <font color=#FFA81E>Barack Obama</font>",
  "Life is like playing the violin in public and learning the instrument as one goes on. <br /> <br /> <font color=#FFA81E>Samuel Butler</font>",
  "There are no constraints on the human mind, no walls around the human spirit, no barriers to our progress except those we ourselves erect. <br /> <br /> <font color=#FFA81E>Ronald Reagan</font>",
  "Honor is the foundation of courage. <br /> <br /> <font color=#FFA81E>Amelia Earhart</font>",
  "If you are patient in one moment of anger, you will escape a hundred days of sorrow.  <br /> <br /> <font color=#FFA81E>Chinese Proverb</font>",
  "The first half of life is devoted to forming a healthy ego, the second half is going inward and letting go of it. <br /> <br /> <font color=#FFA81E>Carl Jung</font>",
  "Engage in those actions and thoughts that nurture the good qualities you want to have. <br /> <br /> <font color=#FFA81E>Paramahansa Yogananda</font>",
  "It is not fair to ask of others what you are not willing to do yourself. <br /> <br /> <font color=#FFA81E>Eleanor Roosevelt</font>",
  "Change yourself and you have done your part in changing the world. <br /> <br /> <font color=#FFA81E>Paramahansa Yogananda</font>",
  "You will never do anything in this world without courage. It is the greatest quality of the mind next to honor. <br /> <br /> <font color=#FFA81E>James Allen</font>",
  "We are all born ignorant, but one must work hard to remain stupid. <br /> <br /> <font color=#FFA81E>Benjamin Franklin</font>",
  "To forgive means pardoning the unpardonable. <br /> <br /> <font color=#FFA81E>Gilbert Chesterton</font>",
  "Great ones are willing to get burned time and again as they sharpen their swords in the fire. <br /> <br /> <font color=#FFA81E>Josh Waitzkin</font>",
  "How to get more opportunity: Create more opportunity for others. <br /> <br /> <font color=#FFA81E>Jack Butcher</font>",
  "Great things are not done by impulse, but by a series of small things brought together. <br /> <br /> <font color=#FFA81E>Vincent van Gogh</font>",
  "If you pick up a starving dog and make him prosperous he will not bite you. This is the principal difference between a dog and man. <br /> <br /> <font color=#FFA81E>Mark Twain</font>",
  "Everyone has a sense of humor. If you don't laugh at jokes, you probably laugh at opinions. <br /> <br /> <font color=#FFA81E>Criss Jami</font>",
  "Ripe fruit falls by itself - but it doesn't fall in your mouth.  <br /> <br /> <font color=#FFA81E>Chinese Proverb</font>",
  "The real art in learning takes place as we move beyond proficiency, when our work becomes an expression of our essence. <br /> <br /> <font color=#FFA81E>Josh Waitzkin</font>",
  "One's best success comes after their greatest disappointments. <br /> <br /> <font color=#FFA81E>Henry Ward Beecher</font>",
  "Keep your face always toward the sunshine -  shadows will fall behind you. <br /> <br /> <font color=#FFA81E>Walt Whitman</font>",
  "You have a brain and mind of your own. Use it, and reach your own decisions. <br /> <br /> <font color=#FFA81E>Napoleon Hill</font>",
  "Allow motion to equal emotion. <br /> <br /> <font color=#FFA81E>Elbert Hubbard</font>",
  "Don't wish it were easier, wish you were better. <br /> <br /> <font color=#FFA81E>Jim Rohn</font>",
  "Before you speak, ask yourself, is it kind, is it necessary, is it true, does it improve the silence? <br /> <br /> <font color=#FFA81E>Sathya Sai Baba</font>",
  "Truth is like most opinions - best unexpressed. <br /> <br /> <font color=#FFA81E>Kenneth Branagh</font>",
  "If you want to turn a vision into reality, you have to give 100% and never stop believing in your dream. <br /> <br /> <font color=#FFA81E>Arnold Schwarzenegger</font>",
  "I wasn't brave, I just didn't have time to be scared. <br /> <br /> <font color=#FFA81E>Amelia Earhart</font>",
  "If you throw away all thoughts of attainment, you will then come to see the real purpose of your quest. <br /> <br /> <font color=#FFA81E>Seungsahn</font>",
  "Intelligent men are cruel. Stupid men are monstrously cruel. <br /> <br /> <font color=#FFA81E>Jack London</font>",
  "The ego wants to go fast. The soul needs to go slow. <br /> <br /> <font color=#FFA81E>Maxime Lagace</font>",
  "Prefer to be defeated in the presence of the wise than to excel among fools. <br /> <br /> <font color=#FFA81E>Dogen</font>",
];

let randomNum, randomWallNum;

let quote = document.getElementById("quote");

const quote_api_url = "https://zenquotes.io/api/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showQuote() {
  getQuote(quote_api_url).then(
    function (response) {
      quote.innerHTML = renderQuote(response[0]);
    },
    function () {
      quote.innerHTML = offLineQuotes[Math.floor(Math.random()*50)];
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
