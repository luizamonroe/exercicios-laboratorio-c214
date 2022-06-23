const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:admin@cluster0.znldk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority?`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const MusicSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    band: {
        type: String,
        unique: true,
    },
    name: String,
});

const MusicModel = mongoose.model('MusicModel', MusicSchema);

module.exports = {
    MusicModel,
};
