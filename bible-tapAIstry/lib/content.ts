// Content data for Bible TapAIstry
// Structured for animation and semantic imagery triggers

export interface ContentBlock {
  id: string;
  text: string;
  type: 'declarative' | 'statement' | 'reference' | 'metaphor';
  emphasis?: 'high' | 'medium' | 'low';
  semanticImage?: 'mirror' | 'disco-ball' | 'tree' | 'crown' | 'rest' | 'garden' | null;
  splitBackground?: boolean;
  reference?: string;
}

// Part 0 - Framework
export const frameworkContent: ContentBlock[] = [
  {
    id: 'fw-1',
    text: 'BE DOERS',
    type: 'declarative',
    emphasis: 'high',
    splitBackground: true,
  },
  {
    id: 'fw-2',
    text: 'of the word',
    type: 'statement',
    emphasis: 'medium',
  },
  {
    id: 'fw-3',
    text: 'NOT HEARERS ONLY',
    type: 'declarative',
    emphasis: 'high',
  },
  {
    id: 'fw-4',
    text: 'Receive with meekness',
    type: 'statement',
    emphasis: 'medium',
  },
  {
    id: 'fw-5',
    text: 'THE IMPLANTED WORD',
    type: 'declarative',
    emphasis: 'high',
    semanticImage: 'tree',
  },
  {
    id: 'fw-6',
    text: 'Scripture is a',
    type: 'statement',
    emphasis: 'low',
  },
  {
    id: 'fw-7',
    text: 'MIRROR',
    type: 'declarative',
    emphasis: 'high',
    semanticImage: 'mirror',
    splitBackground: true,
  },
  {
    id: 'fw-8',
    text: 'Overviews give a framework',
    type: 'statement',
    emphasis: 'medium',
  },
  {
    id: 'fw-9',
    text: 'like a painting',
    type: 'metaphor',
    emphasis: 'low',
  },
  {
    id: 'fw-10',
    text: 'or a jigsaw',
    type: 'metaphor',
    emphasis: 'low',
  },
  {
    id: 'fw-11',
    text: 'They make Jesus more',
    type: 'statement',
    emphasis: 'medium',
  },
  {
    id: 'fw-12',
    text: 'GLORIOUS',
    type: 'declarative',
    emphasis: 'high',
    splitBackground: true,
  },
  {
    id: 'fw-13',
    text: 'and rich',
    type: 'statement',
    emphasis: 'medium',
  },
];

// Part 1 - Eden
export const edenContent: ContentBlock[] = [
  {
    id: 'eden-1',
    text: 'The Bible begins with',
    type: 'statement',
    emphasis: 'medium',
  },
  {
    id: 'eden-2',
    text: 'GOD',
    type: 'declarative',
    emphasis: 'high',
    splitBackground: true,
  },
  {
    id: 'eden-3',
    text: 'Made in God\'s image',
    type: 'statement',
    emphasis: 'high',
    semanticImage: 'disco-ball',
    reference: 'Gen 1:26-28',
  },
  {
    id: 'eden-4',
    text: 'RULE',
    type: 'declarative',
    emphasis: 'high',
    semanticImage: 'crown',
  },
  {
    id: 'eden-5',
    text: 'REFLECT',
    type: 'declarative',
    emphasis: 'high',
    semanticImage: 'disco-ball',
  },
  {
    id: 'eden-6',
    text: 'FILL',
    type: 'declarative',
    emphasis: 'high',
  },
  {
    id: 'eden-7',
    text: 'Day 7 is the climax',
    type: 'statement',
    emphasis: 'medium',
  },
  {
    id: 'eden-8',
    text: 'REST WITH GOD',
    type: 'declarative',
    emphasis: 'high',
    semanticImage: 'rest',
    splitBackground: true,
  },
  {
    id: 'eden-9',
    text: 'EDEN',
    type: 'declarative',
    emphasis: 'high',
    semanticImage: 'garden',
  },
  {
    id: 'eden-10',
    text: 'pleasure',
    type: 'statement',
    emphasis: 'medium',
  },
  {
    id: 'eden-11',
    text: 'abundance',
    type: 'statement',
    emphasis: 'medium',
  },
  {
    id: 'eden-12',
    text: 'presence',
    type: 'statement',
    emphasis: 'high',
  },
  {
    id: 'eden-13',
    text: 'Work and keep',
    type: 'statement',
    emphasis: 'medium',
  },
  {
    id: 'eden-14',
    text: 'SERVE AND GUARD',
    type: 'declarative',
    emphasis: 'high',
  },
  {
    id: 'eden-15',
    text: 'One command',
    type: 'statement',
    emphasis: 'medium',
    semanticImage: 'tree',
  },
  {
    id: 'eden-16',
    text: 'ONE TREE',
    type: 'declarative',
    emphasis: 'high',
    splitBackground: true,
  },
  {
    id: 'eden-17',
    text: 'Humanity as a',
    type: 'statement',
    emphasis: 'low',
  },
  {
    id: 'eden-18',
    text: 'DISCO BALL',
    type: 'declarative',
    emphasis: 'high',
    semanticImage: 'disco-ball',
  },
  {
    id: 'eden-19',
    text: 'reflecting God\'s light',
    type: 'statement',
    emphasis: 'medium',
  },
  {
    id: 'eden-20',
    text: 'Eden is rich',
    type: 'statement',
    emphasis: 'medium',
    semanticImage: 'garden',
  },
  {
    id: 'eden-21',
    text: 'but not the world we see now',
    type: 'statement',
    emphasis: 'high',
  },
];

// Beat timing structure for future audio sync
export interface BeatTiming {
  blockId: string;
  beatNumber: number;
  duration: number; // in milliseconds
  emphasis: boolean;
}

// Placeholder beat timings (for when audio is added)
export const generateBeatTimings = (content: ContentBlock[], bpm: number = 85): BeatTiming[] => {
  const beatDuration = (60 / bpm) * 1000; // ms per beat
  let currentBeat = 0;

  return content.map((block) => {
    const timing: BeatTiming = {
      blockId: block.id,
      beatNumber: currentBeat,
      duration: block.emphasis === 'high' ? beatDuration * 2 : beatDuration,
      emphasis: block.emphasis === 'high',
    };
    currentBeat += block.emphasis === 'high' ? 2 : 1;
    return timing;
  });
};
