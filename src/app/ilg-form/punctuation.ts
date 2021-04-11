export interface punctuation {
    grapheme: string,
    meaning: string
}

export const PUNCTUATION: punctuation[] = [
    {
        grapheme: '.',
        meaning: 'gloss/grammatical category separator'
    },
    {
        grapheme: ';',
        meaning: 'distinguish grammatical properties'
    },
    {
        grapheme: '-',
        meaning: 'morpheme boundary'
    },
    {
        grapheme: '=',
        meaning: 'clitic boundary'
    },
    {
        grapheme: '~',
        meaning: 'reduplication'
    },
    {
        grapheme: ':',
        meaning: 'segmentation not shown'
    },
    {
        grapheme: '\\',
        meaning: 'morphophonological grammatical property'
    },
    {
        grapheme: '<',
        meaning: 'infix start'
    },
    {
        grapheme: '>',
        meaning: 'infix end'
    },
    {
        grapheme: '>',
        meaning: 'agent>patient separator'
    },
    {
        grapheme: '[',
        meaning: 'non-overt start'
    },
    {
        grapheme: ']',
        meaning: 'non-overt end'
    },
    {
        grapheme: '(',
        meaning: 'non-overt category start'
    },
    {
        grapheme: ')',
        meaning: 'non-overt category end'
    },
    {
        grapheme: ',',
        meaning: '(Used for meta orthography only)'
    }
]

// To add: Ø somewhere for copy/paste