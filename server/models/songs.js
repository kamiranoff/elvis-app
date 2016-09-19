import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const songsSchema = new Schema({
  songsTitle: { type: 'Array', required: true },
});

export default mongoose.model('Songs', songsSchema);
