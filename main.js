const cards = [
    //  Wisdom & Philosophy 
    { name: "The Still Water",     symbol: "🌊", word: "Reflection",   mood: "neutral" },
    { name: "The Ink Moon",        symbol: "🌙", word: "Intuition",    mood: "neutral" },
    { name: "The River Stone",     symbol: "🪨", word: "Patience",     mood: "neutral" },
    { name: "The Lotus Root",      symbol: "🪷", word: "Depth",        mood: "neutral" },
    { name: "The Empty Bowl",      symbol: "🍚", word: "Openness",     mood: "neutral" },
    //  Hope & Light 
    { name: "The Golden Fish",     symbol: "🐟", word: "Abundance",    mood: "good" },
    { name: "The Lantern",         symbol: "🏮", word: "Guidance",     mood: "good" },
    { name: "The Crane",           symbol: "🕊️", word: "Grace",        mood: "good" },
    { name: "The Painted Sky",     symbol: "🌅", word: "Possibility",  mood: "good" },
    { name: "The Hidden Star",     symbol: "✦",  word: "Potential",    mood: "good" },
    { name: "The Drifting Cloud",  symbol: "☁️", word: "Lightness",    mood: "good" },
    { name: "The Rising Kite",     symbol: "🪁", word: "Freedom",      mood: "good" },
    //  Hardship & Growth 
    { name: "The Drifting Petal",  symbol: "🌸", word: "Impermanence", mood: "bad"  },
    { name: "The Tangled Thread",  symbol: "🧵", word: "Complexity",   mood: "bad"  },
    { name: "The Cracked Vessel",  symbol: "🏺", word: "Repair",       mood: "bad"  },
    { name: "The Shrouded Path",   symbol: "🌫️", word: "Uncertainty",  mood: "bad"  },
    { name: "The Fallen Leaf",     symbol: "🍂", word: "Letting Go",   mood: "bad"  },
    //  Funny & Whimsical 
    { name: "The Confused Frog",   symbol: "🐸", word: "Bewilderment", mood: "funny" },
    { name: "The Sleepy Dragon",   symbol: "🐲", word: "Laziness",     mood: "funny" },
    { name: "The Lost Sandal",     symbol: "🥿", word: "Misadventure", mood: "funny" },
    { name: "The Overfull Cup",    symbol: "🍵", word: "Excess",       mood: "funny" },
    { name: "The Runaway Cart",    symbol: "🛒", word: "Chaos",        mood: "funny" },
];

// Fortune pools 
const fortunes = {
    good: [
        { text: "The fruit does not cling to the branch forever — and neither does your suffering.", author: "Buddhist teaching" },
        { text: "Even a small star shines in the darkest sky. You are that star tonight.", author: "Tibetan proverb" },
        { text: "The river does not fight the mountain. It simply finds another way.", author: "Zen saying" },
        { text: "What you are looking for is already inside you.", author: "Thomas Merton" },
        { text: "The bee does not ask the flower for permission. It simply gathers what it needs.", author: "Folk saying" },
        { text: "Wherever you are is the entry point.", author: "Kabir" },
        { text: "One who plants kindness gathers love.", author: "Saint Basil" },
        { text: "Even the moon takes time to become full.", author: "Korean proverb" },
        { text: "Joy is not in things — it is in us.", author: "Richard Wagner" },
        { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
        { text: "The universe is under no obligation to make sense to you.", author: "Neil deGrasse Tyson" },
        { text: "A rising tide lifts all boats — including your slightly leaky one.", author: "Optimistic proverb" },
        { text: "Good things take time. Great things take slightly longer. You're nearly there.", author: "Encouraging scroll, circa now" },
    ],
    bad: [
        { text: "The wound is the place where the light enters you.", author: "Rumi" },
        { text: "One must imagine Sisyphus happy.", author: "Albert Camus" },
        { text: "Even the darkest night will end and the sun will rise.", author: "Victor Hugo" },
        { text: "Stars are not seen by sunshine.", author: "Robert Herrick" },
        { text: "The lotus blooms most beautifully from the deepest mud.", author: "Buddhist teaching" },
        { text: "Pain is not punishment, nor is pleasure reward.", author: "Pema Chödrön" },
        { text: "There is no path to happiness. Happiness is the path.", author: "Thich Nhat Hanh" },
        { text: "When it is dark enough, you can see the stars.", author: "Ralph Waldo Emerson" },
        { text: "The tree that does not bend in wind has never known real storm.", author: "Native American proverb" },
        { text: "What we resist, persists. What we accept, transforms.", author: "Carl Jung (paraphrased)" },
        { text: "Things falling apart is a kind of testing — and also a kind of healing.", author: "Pema Chödrön" },
        { text: "Every storm runs out of rain eventually. This one will too.", author: "Maya Angelou" },
    ],
    neutral: [
        { text: "We are all just walking each other home.", author: "Ram Dass" },
        { text: "To live is the rarest thing in the world.", author: "Oscar Wilde" },
        { text: "What you seek is seeking you.", author: "Rumi" },
        { text: "Form is emptiness; emptiness is form.", author: "Heart Sutra" },
        { text: "Do not dwell in the past. Do not dream of the future. Concentrate the mind on the present moment.", author: "The Buddha" },
        { text: "Before enlightenment, chop wood, carry water. After enlightenment, chop wood, carry water.", author: "Zen proverb" },
        { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
        { text: "All that we are is the result of what we have thought.", author: "The Dhammapada" },
        { text: "Like water, be soft yet unstoppable.", author: "Lao Tzu (paraphrased)" },
        { text: "When walking, walk. When eating, eat.", author: "Zen proverb" },
        { text: "The obstacle is the path.", author: "Zen proverb" },
        { text: "Not knowing is most intimate.", author: "Dizang (Zen master)" },
    ],
    funny: [
        { text: "You cannot pour from an empty cup. But you can absolutely lick the sides.", author: "A realist" },
        { text: "The early bird catches the worm, but the second mouse gets the cheese. Consider your timing.", author: "Mouse proverb" },
        { text: "May your Wi-Fi be strong and your meetings be emails.", author: "Modern scripture" },
        { text: "Everything happens for a reason. Sometimes the reason is you made a bad decision.", author: "Ancient fortune cookie" },
        { text: "A journey of a thousand miles begins with a single step — and immediately forgetting where you put your keys.", author: "Lao Tzu, probably" },
        { text: "You are what you eat. Reconsider the gas station sushi.", author: "Oracle, concerned" },
        { text: "Three things cannot be hidden: the sun, the moon, and that thing you said in 2016.", author: "The Buddha (adapted)" },
        { text: "Holding onto anger is like drinking poison and expecting the other person to check their texts.", author: "Mindfulness app" },
        { text: "The universe is on your side. It's just been a little passive-aggressive lately.", author: "Cosmos, apologetically" },
        { text: "Be the energy you wish to see in the room. Failing that, bring snacks.", author: "Practical wisdom" },
        { text: "Fortune favors the bold, the prepared, and those who remembered to charge their phone.", author: "Updated proverb" },
        { text: "You are a spiritual being having a human experience, which explains a lot about today.", author: "Teilhard de Chardin (loosely)" },
        { text: "Breathe in deeply. Now breathe out. Good. You are doing so well. Please continue.", author: "The air, supportively" },
        { text: "The lotus grows from mud. You've got plenty of material to work with.", author: "Buddhist encouragement" },
    ],
};

const scene          = document.getElementById('scene');
const drawBtn        = document.getElementById('drawBtn');
const placeholder    = document.getElementById('placeholder');
const resultCard     = document.getElementById('resultCard');
const resultEyebrow  = document.getElementById('resultEyebrow');
const fortuneText    = document.getElementById('fortuneText');
const fortuneAuthor  = document.getElementById('fortuneAuthor');
const fortuneKeyword = document.getElementById('fortuneKeyword');
const againBtn       = document.getElementById('againBtn');
const frontSymbol    = document.getElementById('frontSymbol');
const frontName      = document.getElementById('frontName');
const frontWord      = document.getElementById('frontWord');
const moodBadge      = document.getElementById('moodBadge');

let drawing = false;

const moodLabels = {
    good:    { label: "✦ auspicious",   cls: "mood-good"    },
    bad:     { label: "· difficult",    cls: "mood-bad"     },
    neutral: { label: "◌ contemplative",cls: "mood-neutral" },
    funny:   { label: "✧ whimsical",    cls: "mood-funny"   },
};

async function drawFortune() {
    if (drawing) return;
    drawing = true;
    drawBtn.disabled = true;

    const card = cards[Math.floor(Math.random() * cards.length)];
    frontSymbol.textContent = card.symbol;
    frontName.textContent   = card.name;
    frontWord.textContent   = card.word;

    scene.classList.add('flipped');
    placeholder.classList.add('hidden');

    resultEyebrow.textContent  = card.name;
    fortuneText.innerHTML      = '<span class="loading-dots">reading the currents . . .</span>';
    fortuneAuthor.textContent  = '';
    fortuneKeyword.textContent = card.word;

    //  mood badge
    const m = moodLabels[card.mood];
    moodBadge.textContent = m.label;
    moodBadge.className   = 'mood-badge ' + m.cls;

    resultCard.classList.add('visible');

    // Pick fortune from mood pool
    const pool = fortunes[card.mood];
    const f    = pool[Math.floor(Math.random() * pool.length)];
    fortuneText.textContent   = `"${f.text}"`;
    fortuneAuthor.textContent = `— ${f.author}`;
}

drawBtn.addEventListener('click', drawFortune);
scene.addEventListener('click', () => { if (!scene.classList.contains('flipped')) drawFortune(); });
againBtn.addEventListener('click', () => {
    scene.classList.remove('flipped');
    resultCard.classList.remove('visible');
    placeholder.classList.remove('hidden');
    drawing = false;
    drawBtn.disabled = false;
});