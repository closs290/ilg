import { model, Schema } from 'mongoose';

export interface ILGModel {
    language: string;
    author: string;
    year: string;
    phrases: [];
    freeTranslation: string;
}
  
export const ILGSchema = new Schema<ILGModel>({
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
  
export const ILGs = model('ILG', ILGSchema);