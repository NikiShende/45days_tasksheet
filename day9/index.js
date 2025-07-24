const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express()




mongoose.connect("mongodb://localhost:27017/code8bit")
.then(() => console.log('MongoDB connected to code8bit'))
.catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({                    //schema is created
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String }
});

const user = mongoose.model('User', userSchema);

app.get('/users', async (req, res) => {
    try {
        const users = await user.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));