export interface interlinearText {
    language: string,
    datasetAuthor: string,
    year: string,
    phrases: [
        {
            words: [
                {
                    word: [
                        {
                            morph: string,
                            gloss: string
                        },
                        {
                            morph: string,
                            gloss: string
                        }
                    ]
                }
            ]
        }
    ],
    freeTranslation: string
}