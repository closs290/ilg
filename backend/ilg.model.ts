import { model, Schema, Document } from 'mongoose';

export interface interlinearGloss extends Document {
    language: string;
    author: string;
    year: string;
    phrases: [];
    freeTranslation: string;
}

export const ILGSchema = new Schema<interlinearGloss>({
    language: {
        type: String
    }, 
    author: {
        type: String
    },
    year: {
        type: String
    }, 
    phrases: {
        type: Array
    }, 
    freeTranslation: {
        type: String
    }
});

export interface phrase {
    orthography?: string;
    morph: string;
    gloss: string;
    abbreviation?: string
}

export const ILGs = model('ILG', ILGSchema);