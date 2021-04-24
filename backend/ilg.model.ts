import { model, Schema } from 'mongoose';

//module.exports makes me nervous
module.exports = mongoose => {
    const ILG = mongoose.model(
        "ilg",
        mongoose.Schema(
            {
                language: String, 
                author: String,
                year: String,
                phrases: [],
                freeTranslation: String
            }
        )
    );
    return ILG;
}

export interface phrase {
    orthography?: string;
    morph: string;
    gloss: string;
    abbreviation?: string
}
