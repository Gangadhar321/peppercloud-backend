
// const mongoose = require('mongoose');

// const configureDb = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://gangadhar:Gangadhar934@server.neic5na.mongodb.net/?retryWrites=true&w=majority&appName=server", {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true
//     });
//     console.log('Connected to db');
//   } catch (e) {
//     console.error("Error while connecting to db:", e.message);
//     console.error("Stack trace:", e.stack);
//   }
// };

// module.exports = configureDb;


const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/Form-Creater';


const configureDb = async () => {
  try {
    await mongoose.connect(connectionString, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    });
    console.log('Connected to db');
  } catch (e) {
    console.error("Error while connecting to db:", e.message);
    console.error("Stack trace:", e.stack);
  }
};

module.exports = configureDb;


