import * as mongoose from 'mongoose';

export interface IDrink extends mongoose.Document {
  name: string,
  mainIngredient: string
}
let drinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  mainIngredient: String
});

export default mongoose.model<IDrink>('Drink', drinkSchema);
