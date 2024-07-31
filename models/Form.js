// const mongoose = require('mongoose');

// const formSchema = new mongoose.Schema({
//   title: String,
//   fields: [
//     {
//       type: String,
//       title: String,
//       placeholder: String
//     }
//   ]
// });

// module.exports = mongoose.model('Form', formSchema);


//working code
// const mongoose = require('mongoose');

// const formSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   fields: { type: Array, required: true } // Adjust based on your schema requirements
// });

// const Form = mongoose.model('Form', formSchema);

// module.exports = Form;


const mongoose = require('mongoose');

// Define the schema for each field
const fieldSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  placeholder: { type: String, required: true }
});

// Define the main form schema
const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fields: [fieldSchema] // Array of fieldSchema objects
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;




