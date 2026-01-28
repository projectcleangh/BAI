export interface Verse {
  number: number;
  text: string;
  highlightWords?: string[]; // Words that might get special treatment
}

export const genesis1: Verse[] = [
  {
    number: 1,
    text: "In the beginning God created the heaven and the earth.",
    highlightWords: ["beginning", "God", "created"]
  },
  {
    number: 2,
    text: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters."
  },
  {
    number: 3,
    text: "And God said, Let there be light: and there was light.",
    highlightWords: ["light"]
  },
  {
    number: 4,
    text: "And God saw the light, that it was good: and God divided the light from the darkness.",
    highlightWords: ["good"]
  },
  {
    number: 5,
    text: "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day."
  },
  {
    number: 6,
    text: "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters."
  },
  {
    number: 7,
    text: "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so."
  },
  {
    number: 8,
    text: "And God called the firmament Heaven. And the evening and the morning were the second day."
  },
  {
    number: 9,
    text: "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so."
  },
  {
    number: 10,
    text: "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good."
  },
  {
    number: 11,
    text: "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so."
  },
  {
    number: 12,
    text: "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good."
  },
  {
    number: 13,
    text: "And the evening and the morning were the third day."
  },
  {
    number: 14,
    text: "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years."
  },
  {
    number: 15,
    text: "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so."
  },
  {
    number: 16,
    text: "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also."
  },
  {
    number: 17,
    text: "And God set them in the firmament of the heaven to give light upon the earth."
  },
  {
    number: 18,
    text: "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good."
  },
  {
    number: 19,
    text: "And the evening and the morning were the fourth day."
  },
  {
    number: 20,
    text: "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven."
  },
  {
    number: 21,
    text: "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good."
  },
  {
    number: 22,
    text: "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth."
  },
  {
    number: 23,
    text: "And the evening and the morning were the fifth day."
  },
  {
    number: 24,
    text: "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so."
  },
  {
    number: 25,
    text: "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good."
  },
  {
    number: 26,
    text: "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.",
    highlightWords: ["image", "likeness", "dominion"]
  },
  {
    number: 27,
    text: "So God created man in his own image, in the image of God created he him; male and female created he them.",
    highlightWords: ["image", "God"]
  },
  {
    number: 28,
    text: "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.",
    highlightWords: ["blessed", "fruitful", "multiply", "dominion"]
  },
  {
    number: 29,
    text: "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat."
  },
  {
    number: 30,
    text: "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so."
  },
  {
    number: 31,
    text: "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.",
    highlightWords: ["very", "good"]
  }
];

export const frameworkContent = [
  {
    id: "doers",
    text: "Be doers of the word, not hearers only.",
    reference: "James 1:22"
  },
  {
    id: "meekness",
    text: "Receive with meekness the implanted word.",
    reference: "James 1:21"
  },
  {
    id: "mirror",
    text: "Scripture is a mirror.",
    reference: "James 1:23-24"
  },
  {
    id: "framework",
    text: "Overviews give a framework — like a painting or a jigsaw.",
    reference: null
  },
  {
    id: "glory",
    text: "They make Jesus more glorious and rich.",
    reference: null
  }
];

export const edenContent = [
  {
    id: "begins",
    text: "The Bible begins with God.",
    type: "statement"
  },
  {
    id: "image",
    text: "Made in God's image",
    reference: "Gen 1:26–28",
    type: "key",
    showDiscoBall: true
  },
  {
    id: "mandate",
    text: "Rule, reflect, fill.",
    type: "trio"
  },
  {
    id: "day7",
    text: "Day 7 is the climax: rest with God.",
    type: "statement"
  },
  {
    id: "eden",
    text: "Eden: pleasure, abundance, presence.",
    type: "trio"
  },
  {
    id: "work",
    text: "Work and keep: serve and guard.",
    type: "statement"
  },
  {
    id: "command",
    text: "One command, one tree.",
    type: "warning"
  },
  {
    id: "discoBall",
    text: "Humanity as a disco ball reflecting God's light.",
    type: "metaphor",
    showDiscoBall: true
  },
  {
    id: "conclusion",
    text: "Eden is rich — but not the world we see now.",
    type: "transition"
  }
];
