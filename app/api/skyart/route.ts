import { config } from 'dotenv';
import { BskyAgent } from "@atproto/api";

config();

const agent = new BskyAgent({
  service: "https://bsky.social",
});

// Sky elements collection
const skyElements = {
  background: ['🟦', '💙'],
  sun: ['☀️'],
  moon: ['🌙'],
  clouds: ['☁️'],
  whimsy: [
    // Birds in flight
    '🕊️', '🦅', '🦢', '🦜', '🦤', '🪽', '🐦', '🦃', '🦚', '🦩',
    
    // Butterflies and insects
    '🦋', '🐛', '🐝', '🐞', '🪲', '🪰', '🪳', '🦗', '🦟',
    
    // Flying fantasy
    '🧚', '🧚‍♀️', '🧚‍♂️', '🦄', '🐉',
    
    // Floating things
    '🎈', '🎐', '🪁', '🪂', '✨', '🌟'
  ],
  colorPops: [
    '🌈', '🎀', '🎨', '🪅', '🎭', '🎪',
    '🎡', '🎠', '🎢', '🌺', '🎉', '🪩'
  ],
  baseLawn: [
    '🌱', '☘️', '🍀',
    '🌿', '🌾', '🎋',
    '🪴', '🎍', '🍃'
  ],
  flowers: ['🌸', '🌼', '🌺', '🌷', '🌹', '🌻', '🪷', '💐', '🏵️'],
  gardenFriends: [
    // Ground animals
    '🐇', '🦔', '🐿️', '🦫', '🦡', '🦦', '🦨', '🦝',
    
    // Small creatures
    '🐸', '🐢', '🦎', '🐌', '🐛', '🐜', '🐞',
    
    // Garden birds
    '🐤', '🐥', '🐣', '🦜', '🦤', '🦚', '🦃', '🐓',
    
    // Small pets
    '🐈', '🐕', '🐹', '🐰',
    
    // Fantasy friends
    '🦕', '🐲', '🦄'
  ],
  skyStories: [
    // Nature pairs
    { pair: ['🦋', '🌺'], story: "butterfly visiting flower" },
    { pair: ['🐝', '🌼'], story: "bee finding honey" },
    { pair: ['🕊️', '💌'], story: "love letter delivery" },
    { pair: ['🐦', '🪹'], story: "bird building nest" },
    { pair: ['🦜', '🌴'], story: "tropical paradise" },
    { pair: ['🐞', '🍄'], story: "ladybug's adventure" },
    { pair: ['🦚', '🌸'], story: "peacock's garden dance" },
    { pair: ['🦢', '💕'], story: "swan lake romance" },
    
    // Whimsical pairs
    { pair: ['🧚', '✨'], story: "fairy sprinkling magic" },
    { pair: ['🎈', '🪁'], story: "dancing in the breeze" },
    { pair: ['🌙', '⭐'], story: "nighttime friends" },
    { pair: ['☁️', '🌈'], story: "after the rain" },
    { pair: ['🎪', '🎠'], story: "sky carnival" },
    { pair: ['🫧', '🦋'], story: "bubble chase" },
    { pair: ['🎭', '🎪'], story: "circus in the clouds" },
    { pair: ['🎈', '🎀'], story: "ribbon dance" },
    
    // Fantasy pairs
    { pair: ['🦄', '🌟'], story: "unicorn making wishes" },
    { pair: ['🐉', '🏰'], story: "castle in the clouds" },
    { pair: ['🧙‍♀️', '🪄'], story: "sky magic lesson" },
    { pair: ['📚', '✨'], story: "story time above" },
    { pair: ['🔮', '🌙'], story: "fortune telling night" },
    { pair: ['🧚‍♀️', '🌺'], story: "flower fairy dance" },
    { pair: ['🦕', '☁️'], story: "gentle giant's nap" },
    { pair: ['🐲', '🌈'], story: "dragon's color palette" },
    
    // Tea time pairs
    { pair: ['☕️', '🧁'], story: "sky cafe open" },
    { pair: ['🫖', '🍪'], story: "teatime in the clouds" },
    { pair: ['🧋', '🎐'], story: "bubble tea breeze" },
    { pair: ['🍵', '🌸'], story: "garden tea party" },
    
    // Musical pairs
    { pair: ['🎺', '🌟'], story: "star symphony" },
    { pair: ['🎻', '🕊️'], story: "dove's melody" },
    { pair: ['🪗', '🌈'], story: "rainbow tunes" },
    { pair: ['🎼', '🦋'], story: "butterfly ballet" },
    
    // Adventure pairs
    { pair: ['🗺️', '🧭'], story: "sky exploration" },
    { pair: ['⛵️', '☁️'], story: "sailing the skies" },
    { pair: ['🎡', '✨'], story: "ferris wheel dreams" },
    { pair: ['🎪', '🌟'], story: "starlight show" }
  ],
  teaParty: ['☕️', '🫖', '🧁', '🍪'],
  carnival: ['🎪', '🎠', '🎡', '🎭'],
  picnic: ['🧺', '🥪', '🧶', '🌂'],
  magic: ['🎩', '✨', '🪄', '🔮'],
  themes: {
    teaParty: {
      elements: ['☕️', '🫖', '🧁', '🍪', '🥐', '🥮', '🍯'],
      decorations: ['🌸', '🎀', '✨', '🪄'],
      companions: ['🧚‍♀️', '🐇', '🦋'],
      messages: [
        "Sky tea party in progress",
        "Tea time above the clouds",
        "Floating teatime dreams",
        "Cloud cafe now serving"
      ]
    },
    carnival: {
      elements: ['🎪', '🎠', '🎡', '🎢', '🎭', '🎪'],
      decorations: ['🎈', '🎉', '🪅', '🎊'],
      companions: ['🦁', '🐘', '🦒', '🤹‍♀️'],
      messages: [
        "Sky carnival today",
        "Cloud top circus",
        "The greatest show above",
        "Sky fair now open"
      ]
    },
    picnic: {
      elements: ['🧺', '🥪', '🧶', '🌂', '🥖', '🧀', '🍎'],
      decorations: ['🌺', '🌼', '🦋', '🐝'],
      companions: ['🐈', '🐕', '🐇', '🦜'],
      messages: [
        "Picnic in the clouds",
        "Sky lunch special",
        "Cloud picnic perfect",
        "Floating feast above"
      ]
    },
    magic: {
      elements: ['🎩', '✨', '🪄', '🔮', '🎭', '🃏'],
      decorations: ['⭐️', '🌟', '💫', '🎪'],
      companions: ['🐇', '🕊️', '🦊', '🦉'],
      messages: [
        "Sky magic show begins",
        "Cloud illusions today",
        "Magical moments above",
        "Wonder in the air"
      ]
    }
  } as Themes
};

const messages = [
  // Time of day
  "Dawn paints the sky anew",
  "Morning whispers hello",
  "Midday magic in the air",
  "Afternoon dreams take flight",
  "Evening's gentle glow",
  "Twilight's sweet surrender",
  "Moonlit whispers above",
  "Stars are waking up now",

  // Weather moods
  "Clouds dancing just for you",
  "Sunshine spilling everywhere",
  "Breezy day up above",
  "Perfect weather for dreaming",
  "Sky's putting on a show",
  "Blue as far as dreams can reach",
  "Scattered clouds, scattered thoughts",
  "Weather forecast: pure delight",

  // Garden & nature
  "Where flowers meet the sky",
  "Garden secrets float upward",
  "Blossoms chase butterflies",
  "Nature's skyward symphony",
  "Petals dance with clouds",
  "Little garden, vast sky",
  "Where grass meets infinity",
  "Blooming ever upward",

  // Creatures
  "Butterfly highways above",
  "Birds writing sky poems",
  "Dancing on gentle breezes",
  "Tiny wings, boundless sky",
  "Nature's aerial ballet",
  "Floating, flying, free",
  "Wings catching sunbeams",
  "Sky full of stories",

  // Whimsy & magic
  "Collecting cloud wishes",
  "Sprinkled with stardust",
  "Magic floats by today",
  "Daydreams taking flight",
  "Pocket full of sky",
  "Where wonder lives",
  "Happiness has wings",
  "Dreams float up here",

  // Simple joys
  "Look up and smile",
  "Your daily dose of blue",
  "A sky just because",
  "Sending clouds of joy",
  "Here's a happy moment",
  "Blue skies find you",
  "A gift of blue skies",
  "Sky hugs for today",

  // Peaceful moments
  "Quiet moments aloft",
  "Peace drifts by today",
  "Tranquility falls softly",
  "Gentle sky thoughts",
  "Serenity in blue",
  "Floating in calm",
  "Peaceful winds blow",
  "Quiet beauty above",

  // Playful
  "Cloud games in progress",
  "Sky's playing peek-a-boo",
  "Dancing with sunbeams",
  "Balloon chase in progress",
  "Hide and seek above",
  "Skipping through clouds",
  "Playing tag with stars",
  "Bouncing on sunbeams",

  // Encouragement
  "Your sky is waiting",
  "Adventures overhead",
  "Possibilities float by",
  "Dreams take wing today",
  "Hope floats above",
  "Sky full of chances",
  "New heights await",
  "Reach for blue skies",

  // More whimsy & magic
  "Sprinkling sky glitter today",
  "Cloud castles floating by",
  "A splash of sky sparkle",
  "Where rainbows begin",
  "Catching starlight in jars",
  "Dancing with cloud dragons",
  "Sky's wearing sparkles",
  "Magic dust sprinkled above",
  "Wishes take wing here",
  "Bottling up cloud dreams",
  "Sky friends playing tag",
  "Where unicorns gallop",
  "Fairy paths crossing",
  "Cloud magic in progress",
  "Stirring up sky wishes",

  // More simple joys
  "A slice of happy",
  "Sky smiles included",
  "Blue joy delivered",
  "Happiness floating by",
  "Just because skies",
  "A sprinkle of delight",
  "Sky confetti for you",
  "Wrapped in blue wonder",
  "Today's dose of sparkle",
  "Joy raining down",
  "Sending sky kisses",
  "Cloud cuddles above",
  "Blue sky therapy",
  "Sky tickles today",
  "Wrapped in gentle blue",

  // More playful
  "Cloud hopscotch above",
  "Sky's doing cartwheels",
  "Bubble fun up high",
  "Playing cloud catch",
  "Sky's giggling today",
  "Balloon parade passing",
  "Cloud tickle fight",
  "Sky's playing dress up",
  "Dancing on sunbeams",
  "Cloud pillow fights",
  "Sky's telling jokes",
  "Butterfly races today",
  "Cloud puppet show",
  "Sky's doing twirls",
  "Bird playground above",

  // Nature-inspired
  "Leaves dancing with clouds",
  "Where wildflowers dream",
  "Nature's blue canvas unfolds",
  "Garden whispers skyward",
  "Petals catching light",
  "Seeds of sky thoughts",
  "Where dewdrops meet stars",
  "Nature's gentle hello",
  "Wild and wonderful above",
  "Meadow meets clouds",
  "Sky garden blooming",
  "Where moss meets stars",
  "Nature's lullaby above",
  "Wild wings soaring free",
  "Forest dreams float up",

  // Creation-inspired
  "Painting with clouds today",
  "Sky's watercolor moment",
  "Blue canvas dreams",
  "Art floating above",
  "Nature's masterpiece",
  "Sky sketches in blue",
  "Cloud sculptures drift by",
  "Sky's art gallery",
  "Brushstrokes of light",
  "Sky's daily canvas",
  "Cloud doodles",
  "Blue palette dreams",
  "Art in the clouds",
  "Cloud artist at work",

  // Reflection-inspired
  "Quiet sky thoughts",
  "Pondering on clouds",
  "Blue meditation",
  "Where thoughts take wing",
  "Sky contemplations",
  "Floating in wonder",
  "Gentle sky musings",
  "Cloud watching therapy",
  "Sky's soft reminder",
  "Dreaming out loud",
  "Where peace floats by",
  "Mindful sky moments",
  "Blue tranquility",
  "Heart meets sky",
  "Wisdom in the breeze",

  // Play-inspired
  "Sky's playground open",
  "Cloud tag in progress",
  "Blue joy bouncing",
  "Where fun takes flight",
  "Playful breezes dance",
  "Sky's merry-go-round",
  "Cloud swing adventures",
  "Cloud hopscotch fun",
  "Joy jumping high",
  "Sky's silly dance",
  "Whimsy at play",
  "Blue laughter floats",
  "Cloud party today",
  "Sky's playground rules",
  "Where giggles float",

  // Adventure-inspired
  "Sky quest in progress",
  "Cloud exploring today",
  "Blue horizon beckons",
  "Adventuring upwards",
  "Sky paths untraveled",
  "Chasing horizons",
  "Where wanderlust leads",
  "Cloud atlas unfolding",
  "Sky treasures await",
  "Blue yonder calling",
  "Sky's expedition",
  "Aerial adventures",
  "Where compass points up",
  "Cloud voyages begin",
  "Sky safari today",

  // Music-inspired
  "Sky's morning melody",
  "Cloud symphony plays",
  "Blue notes floating by",
  "Nature's wind chimes",
  "Skyward harmonies",
  "Dancing to sky songs",
  "Where breezes sing",
  "Cloud orchestra tune",
  "Sky's gentle rhythm",
  "Nature's lullaby",
  "Wind's whispered song",
  "Blue music flows",
  "Nature's sky concert",
  "Floating melodies",
  "Cloud bells ring soft",

  // Dream-inspired
  "Sky dreams unfurling",
  "Where wishes float free",
  "Cloud castles await",
  "Blue reverie above",
  "Daydream delivery",
  "Sky's dreamy dance",
  "Where dreams take root",
  "Cloud dream weavers",
  "Sky's gentle dreaming",
  "Floating in wishes",
  "Dream clouds passing",
  "Blue imagination",
  "Where dreams begin",
  "Sky stories unfold",
  "Dream catching clouds"
];

const monthlyMessages = {
  0: [ // January
    "January's gentle sky",
    "First skies of the year",
    "Winter blue beginnings",
    "January frost sparkles",
    "New year's sky dreams"
  ],
  1: [ // February
    "February's soft clouds",
    "Winter sky stories",
    "February whispers above",
    "Midwinter sky magic",
    "February frost dreams"
  ],
  2: [ // March
    "March winds dance above",
    "Spring sky awakens",
    "March clouds rolling in",
    "First spring breezes",
    "March sky changes"
  ],
  3: [ // April
    "April's playful sky",
    "Spring showers brewing",
    "April cloud ballet",
    "Rain and shine dance",
    "April dreams bloom"
  ],
  4: [ // May
    "May flowers reach up",
    "May sky blossoms",
    "Spring dreams soar",
    "May's gentle breeze",
    "Flowering sky thoughts"
  ],
  5: [ // June
    "June's perfect blue",
    "Summer sky begins",
    "June clouds drift by",
    "Summer sky magic",
    "June's warm hello"
  ],
  6: [ // July
    "July's sunny dreams",
    "Midsummer sky magic",
    "July clouds float by",
    "Summer sky stories",
    "July warmth above"
  ],
  7: [ // August
    "August sky watching",
    "Late summer dreams",
    "August clouds drift",
    "Summer's sky song",
    "August blue above"
  ],
  8: [ // September
    "September changes",
    "Autumn sky begins",
    "September dreams drift",
    "Fall's first whispers",
    "September clouds shift"
  ],
  9: [ // October
    "October sky magic",
    "Autumn colors float",
    "October dreams soar",
    "Fall sky stories",
    "October's gentle drift"
  ],
  10: [ // November
    "November sky dreams",
    "Autumn winds whisper",
    "November's quiet blue",
    "Fall clouds gather",
    "November sky thoughts"
  ],
  11: [ // December
    "December sky magic",
    "Winter returns above",
    "December dreams float",
    "Year's end sky songs",
    "December peace falls"
  ]
};

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

type Theme = {
  elements: string[];
  decorations: string[];
  companions: string[];
  messages: string[];
};

type ThemeResult = {
  art: string;
  message: string;
};

type Themes = {
  [key: string]: Theme;
};

function generateSkyArt(): string | ThemeResult {
  // 10% chance of themed scene
  if (Math.random() < 0.1) {
    return generateThemedSky();
  }
  
  const width = 9;
  const height = 8;
  const isNight = Math.random() > 0.8;
  
  // Create sky background with fewer hearts
  let sky = Array(height).fill(0).map(() => 
    Array(width).fill(0).map(() => 
      Math.random() < 0.2 ? skyElements.background[1] : skyElements.background[0]
    )
  );
  
  // Add sun or moon (slightly higher in the larger sky)
  const celestialX = Math.floor(width/2) + (Math.random() > 0.5 ? 1 : -1);
  sky[2][celestialX] = isNight ? skyElements.moon[0] : skyElements.sun[0];
  
  // Add 2-3 clouds in upper portion
  const cloudCount = Math.floor(Math.random() * 2) + 2;
  for (let i = 0; i < cloudCount; i++) {
    const y = Math.floor(Math.random() * 3) + 1; // Keep clouds in top portion
    const x = Math.floor(Math.random() * width);
    if (sky[y][x] === skyElements.background[0]) {
      sky[y][x] = skyElements.clouds[0];
    }
  }
  
  // Add at least 3 whimsy elements, spaced apart
  const whimsyPositions = [];
  // First whimsy element in left third
  whimsyPositions.push({
    y: Math.floor(Math.random() * (height - 4)) + 2,
    x: Math.floor(Math.random() * (width/3))
  });
  // Second whimsy element in middle third
  whimsyPositions.push({
    y: Math.floor(Math.random() * (height - 4)) + 2,
    x: Math.floor(Math.random() * (width/3) + width/3)
  });
  // Third whimsy element in right third
  whimsyPositions.push({
    y: Math.floor(Math.random() * (height - 4)) + 2,
    x: Math.floor(Math.random() * (width/3) + 2*width/3)
  });
  
  // Maybe add fourth whimsy element (30% chance)
  if (Math.random() < 0.3) {
    let x, y;
    do {
      x = Math.floor(Math.random() * width);
      y = Math.floor(Math.random() * (height - 4)) + 2;
    } while (whimsyPositions.some(pos => 
      Math.abs(pos.x - x) < 2 && Math.abs(pos.y - y) < 2
    ));
    whimsyPositions.push({ x, y });
  }
  
  // Place whimsy elements
  whimsyPositions.forEach(pos => {
    if (sky[pos.y][pos.x] === skyElements.background[0] || 
        sky[pos.y][pos.x] === skyElements.background[1]) {
      sky[pos.y][pos.x] = getRandomElement(skyElements.whimsy);
    }
  });
  
  // Add a guaranteed colorful element in the middle area
  let colorY = Math.floor(Math.random() * (height - 5)) + 2; // Keep in sky area
  let colorX = Math.floor(Math.random() * (width - 2)) + 1; // Keep away from edges
  
  // Make sure we're not overlapping with other elements
  while (sky[colorY][colorX] !== skyElements.background[0] && 
         sky[colorY][colorX] !== skyElements.background[1]) {
    colorY = Math.floor(Math.random() * (height - 5)) + 2;
    colorX = Math.floor(Math.random() * (width - 2)) + 1;
  }
  
  sky[colorY][colorX] = getRandomElement(skyElements.colorPops);
  
  // Second-to-last row: guaranteed one flower and one animal, spaced apart
  const availableFlowers = [...skyElements.flowers];
  
  // Place animal in left third
  const animalPosition = Math.floor(Math.random() * (width/3));
  sky[height-2][animalPosition] = getRandomElement(skyElements.gardenFriends);
  
  // Place guaranteed flower in right third
  const flowerPosition = Math.floor(Math.random() * (width/3) + width - width/3);
  const randomIndex = Math.floor(Math.random() * availableFlowers.length);
  sky[height-2][flowerPosition] = availableFlowers.splice(randomIndex, 1)[0];
  
  // Maybe add one more flower in middle third
  if (Math.random() < 0.3 && availableFlowers.length > 0) {
    const x = Math.floor(Math.random() * (width/3) + width/3);
    if (sky[height-2][x] === skyElements.background[0] || 
        sky[height-2][x] === skyElements.background[1]) {
      const idx = Math.floor(Math.random() * availableFlowers.length);
      sky[height-2][x] = availableFlowers.splice(idx, 1)[0];
    }
  }
  
  // Bottom row: rich variety of greenery
  for (let x = 0; x < width; x++) {
    sky[height-1][x] = getRandomElement(skyElements.baseLawn);
  }
  
  // 30% chance to add a story pair
  if (Math.random() < 0.3) {
    const story = getRandomElement(skyElements.skyStories);
    let storyY = Math.floor(Math.random() * (height - 4)) + 2;
    let storyX = Math.floor(Math.random() * (width - 1));
    
    // Make sure we have space for both elements
    while (storyX < width - 1 && 
           (sky[storyY][storyX] !== skyElements.background[0] || 
            sky[storyY][storyX + 1] !== skyElements.background[0])) {
      storyY = Math.floor(Math.random() * (height - 4)) + 2;
      storyX = Math.floor(Math.random() * (width - 1));
    }
    
    // Place the pair next to each other
    sky[storyY][storyX] = story.pair[0];
    sky[storyY][storyX + 1] = story.pair[1];
  }
  
  return sky.map(row => row.join('')).join('\n').trim();
}

function generateThemedSky(): ThemeResult {
  const width = 9;
  const height = 8;
  
  // Pick random theme
  const themeKeys = Object.keys(skyElements.themes);
  const theme = skyElements.themes[getRandomElement(themeKeys)];
  
  // Create base sky
  let sky = Array(height).fill(0).map(() => 
    Array(width).fill(0).map(() => 
      Math.random() < 0.1 ? skyElements.background[1] : skyElements.background[0]
    )
  );
  
  // Add theme elements (more concentrated in center)
  for (let y = 2; y < height-2; y++) {
    for (let x = 1; x < width-1; x++) {
      if (Math.random() < 0.3) {
        if (Math.random() < 0.6) {
          sky[y][x] = getRandomElement(theme.elements);
        } else if (Math.random() < 0.3) {
          sky[y][x] = getRandomElement(theme.decorations);
        } else {
          sky[y][x] = getRandomElement(theme.companions);
        }
      }
    }
  }
  
  // Add ground row
  for (let x = 0; x < width; x++) {
    sky[height-1][x] = getRandomElement(skyElements.baseLawn);
  }
  
  return {
    art: sky.map(row => row.join('')).join('\n').trim(),
    message: getRandomElement(theme.messages)
  };
}

function getDateSeed(): number {
  const now = new Date();
  // Combine day (1-31), month (0-11), and hour (0-23) for unique seed
  return now.getDate() + (now.getMonth() * 31) + (now.getHours() * 365);
}

function getSeededRandom(seed: number, max: number): number {
  // Simple but consistent random number generator using the seed
  const x = Math.sin(seed) * 10000;
  return Math.floor((x - Math.floor(x)) * max);
}

function getTimelyMessage(): string {
  const seed = getDateSeed();
  const month = new Date().getMonth();
  
  // 20% chance of month-specific message (but deterministic for the day)
  if (getSeededRandom(seed, 100) < 20) {
    const monthlyIndex = getSeededRandom(seed, monthlyMessages[month].length);
    return monthlyMessages[month][monthlyIndex];
  }
  
  // Get regular message using date seed
  const messageIndex = getSeededRandom(seed, messages.length);
  return messages[messageIndex];
}

export async function GET() {
  try {
    await agent.login({
      identifier: process.env.BLUESKY_USERNAME!,
      password: process.env.BLUESKY_PASSWORD!,
    });

    const result = generateSkyArt();
    const message = typeof result === 'string' ? 
      getTimelyMessage() : 
      result.message;
    const art = typeof result === 'string' ? 
      result : 
      result.art;

    await agent.post({ text: `${art}\n\n${message}` });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ success: false, error: "Failed to post sky art" }, { status: 500 });
  }
} 