const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);


  const kittySchema = new mongoose.Schema({
    name: String
  });
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'


  const fluffy = new Kitten({ name: 'fluffy' });
  fluffy.speak(); // "Meow name is fluffy"

  await fluffy.save();
  fluffy.speak();

  const kittens = await Kitten.find();
  console.log(kittens);

  await Kitten.find({ name: /^fluff/ });
}