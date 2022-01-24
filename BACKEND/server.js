const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const errorHandler = require('../BACKEND/middleware/error'); 
require("dotenv").config({ path: "./config.env"});

const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 

const URL=process.env.MONGODB_URL;


const checkupRouter = require("./routes/PET_RECORD/checkups.js");

app.use("/checkups", checkupRouter)


const prescriptionRouter = require("./routes/PET_RECORD/prescriptions.js");

app.use("/prescriptions", prescriptionRouter)


const vaccinationRouter = require("./routes/PET_RECORD/vaccinations.js");

app.use("/vaccinations", vaccinationRouter)


const treatmentRouter = require("./routes/PET_RECORD/treatments.js");

app.use("/treatments", treatmentRouter)

const appointmentRouter = require("./routes/APPOINTMENT/appointmentRoute.js");

app.use("/appointment", appointmentRouter);

const attendanceRouter = require("./routes/APPOINTMENT/docRoute.js");

app.use("/attendance", attendanceRouter);


mongoose.connect('mongodb+srv://cham99:anju99@itp.hqqmc.mongodb.net/petcaremanagement?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log( 'Database Connected' );
        
});

const PORT = process.env.PORT || 5057;

// sanduni
const AddMatRouter = require("././routes/Mat/AddMat.js");
app.use("/AddMat",AddMatRouter);  


const labreportRouter = require("././routes/Mat/labreports.js");
app.use("/labreports",labreportRouter);  
//<<<<<<< HEAD
//=======
//<<<<<<< HEAD

//Waruna

//import route
const employeeRoutes = require('./routes/USER/employee'); 

//route middleware
app.use(employeeRoutes);

//auth
app.use('/api/auth', require('./routes/USER/auth'));
app.use('/api/private', require('./routes/USER/private'));


//=======
//<<<<<<< HEAD
//>>>>>>> ff9bee3538a65dce1e0bf3ed5a6a4c11bfe4a816
const kennelRouter = require("./routes/P_BOARDING/kennels.js");

app.use("/kennel",kennelRouter);


const boardpetRouter = require("./routes/P_BOARDING/boardpets.js");

app.use("/boardpet",boardpetRouter);
//=======
//>>>>>>> ff9bee3538a65dce1e0bf3ed5a6a4c11bfe4a816

const classRouter = require("./routes/PET_TRAINING/classdetails.js");
app.use("/classdet",classRouter);

const scheduleRouter = require("./routes/PET_TRAINING/Timeschedules.js");
app.use("/scheduledet",scheduleRouter);

const petDetRouter = require("./routes/PET_TRAINING/Trainingpets.js");
app.use("/petdet",petDetRouter);

const foodRouter = require("./routes/INVENTORY/foods.js");
app.use("/food",foodRouter);

const supplierRouter = require("./routes/INVENTORY/suppliers.js");
app.use("/supplier",supplierRouter);

const medicineRouter = require("./routes/INVENTORY/medicines.js");
app.use("/medicine",medicineRouter);

const toyRouter = require("./routes/INVENTORY/toys.js")
app.use("/toy",toyRouter)
//>>>>>>> c9e928ed160cc16d3800575a4e0df433367ac546


app.listen(PORT, () => {
    
    console.log(`server is up and running on port number: ${PORT}`)
})

const spaymentRouter = require("./routes/PAYMENT/payments");
app.use("/payment",spaymentRouter);

const fpaymentRouter = require("./routes/PAYMENT/paymentsReferences");
app.use("/fpayment",fpaymentRouter);


//Waruna ErrorHandler (must be the last middleware)
app.use(errorHandler); 