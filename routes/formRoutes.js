
const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Get all forms - Displays all the forms with the title
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    console.log(forms, 'okk');
    res.json(forms);
    console.log(forms, 'okk');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single form - User can view the form
router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    res.json(form);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new form - User should be able to create a form
router.post('/', async (req, res) => {
  const form = new Form({
    title: req.body.title,
    fields: req.body.fields
  });

  try {
    const newForm = await form.save();
    res.status(201).json(newForm);
    console.log(newForm, 'newform');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a form - User should be able to edit the form
router.put('/:id', async (req, res) => {
  try {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(form);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a form
router.delete('/:id', async (req, res) => {
  try {
    await Form.findByIdAndDelete(req.params.id);
    res.json({ message: 'Form deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Handle form submission
// router.post('/:id/submit', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const form = await Form.findById(id);
//     if (!form) {
//       return res.status(404).json({ message: 'Form not found' });
//     }

//     // Process the submitted data
//     console.log('Form submission received:', req.body);

//     res.status(200).json({ message: 'Form submitted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


router.post('/:id/submit', async (req, res) => {
    try {
      const { id } = req.params;
      const form = await Form.findById(id);
      if (!form) {
        return res.status(404).json({ message: 'Form not found' });
      }
  
      // Assuming req.body contains the submitted data
      const submissionData = req.body;
  
      // Log the submission data
      console.log('Form submission received:', submissionData);
  
      // Return the form data along with the submission data
      res.status(200).json({
        message: 'Form submitted successfully',
        form: form,
        submission: submissionData
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });



module.exports = router;



// const express = require('express');
// const router = express.Router();
// const Form = require('../models/Form');

// // Get all forms
// router.get('/', async (req, res) => {
//   try {
//     const forms = await Form.find();
//     console.log(forms,'okk')
//     res.json(forms);
//     console.log(forms,'okk')
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// // Get a single form
// router.get('/:id', async (req, res) => {
//   try {
//     const form = await Form.findById(req.params.id);
//     res.json(form);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Create a new form

// router.post('/', async (req, res) => {
//   const form = new Form({
//     title: req.body.title,
//     fields: req.body.fields
//   });

//   try {
//     const newForm = await form.save();
//     res.status(201).json(newForm);
//     console.log(newForm,'newform')
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Update a form
// router.put('/:id', async (req, res) => {
//   try {
//     const form = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(form);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Update a form test
// // router.put('/:id', async (req, res) => {
// //     const { id } = req.params;
  
// //     try {
// //       // Find and update the form
// //       const form = await Form.findById(id);
  
// //       if (!form) {
// //         return res.status(404).json({ message: 'Form not found' });
// //       }
  
// //       // Update form fields
// //       Object.assign(form, req.body);
  
// //       const updatedForm = await form.save(); // Save updated form
  
// //       res.json(updatedForm);
// //     } catch (err) {
// //       console.error('Update error:', err); // Log the error for debugging
// //       res.status(400).json({ message: err.message });
// //     }
// //   });
  

// // Delete a form
// router.delete('/:id', async (req, res) => {
//   try {
//     await Form.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Form deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// // // Handle form submission working
// // router.post('/:id/submit', async (req, res) => {
// //     try {
// //       const { id } = req.params;
// //       const form = await Form.findById(id);
// //       console.log(form,'okk')
// //       if (!form) {
// //         return res.status(404).json({ message: 'Form not found' });
        
// //       } 
  
// //       console.log('Received data:', req.body); // Log received data
// //       res.status(200).json({ message: 'Form submitted successfully' });
// //     } catch (err) {
// //       console.error('Submission error:', err); // Log any errors
// //       res.status(500).json({ message: err.message });
// //     }
// //   });

// router.post('/:id/submit', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const form = await Form.findById(id);
//       if (!form) {
//         return res.status(404).json({ message: 'Form not found' });
//       }
  
//       // Process the submitted data
//       console.log('Form submission received:', req.body);
  
//       res.status(200).json({ message: 'Form submitted successfully' });
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
  
  
// // router.post('/:id/submit', async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         const form = await Form.findById(id);
// //         if (!form) {
// //             return res.status(404).json({ message: 'Form not found' });
// //         }

// //         // Process submitted data
// //         console.log('Form submission received:', req.body);

// //         res.status(200).json({ message: 'Form submitted successfully' });
// //     } catch (err) {
// //         res.status(500).json({ message: err.message });
// //     }
// // });



// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Form = require('../models/Form');

// // Get all forms
// router.get('/', async (req, res) => {
//   try {
//     const forms = await Form.find();
//     res.json(forms);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get a single form
// router.get('/:id', async (req, res) => {
//   try {
//     const form = await Form.findById(req.params.id);
//     if (!form) {
//       return res.status(404).json({ message: 'Form not found' });
//     }
//     res.json(form);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Create a new form
// router.post('/', async (req, res) => {
//   const form = new Form({
//     title: req.body.title,
//     fields: req.body.fields
//   });

//   try {
//     const newForm = await form.save();
//     res.status(201).json(newForm);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Update a form
// router.put('/:id', async (req, res) => {
//   try {
//     const form = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!form) {
//       return res.status(404).json({ message: 'Form not found' });
//     }
//     res.json(form);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Delete a form
// router.delete('/:id', async (req, res) => {
//   try {
//     const form = await Form.findByIdAndDelete(req.params.id);
//     if (!form) {
//       return res.status(404).json({ message: 'Form not found' });
//     }
//     res.json({ message: 'Form deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
