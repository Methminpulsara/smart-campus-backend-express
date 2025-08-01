const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db')

const errorHandler = require('./middleware/errorHandler')

const authRoutes = require('./routes/auth.route')
const studentRoutes = require("./routes/student.route");
const courseRoutes = require("./routes/course.route");
const facultyRoutes = require('./routes/faculty.route')
const adminRoutes =  require('./routes/admin.route')
const dashbaordRoutes = require('./routes/dashboard.route')
const assignmentRoutes = require('./routes/assignment.route')
const subbmitionRoutes = require('./routes/submission.route')
const eventRoutes = require('./routes/event.route');
const noticeRoutes = require('./routes/notice.route');
const ticketRoutes = require ('./routes/ticket.route')




connectDB()

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.send("Hello World");
});


//Routse
app.use("/api/auth", authRoutes);
app.use('/api/student',studentRoutes)
app.use('/api/course',courseRoutes)
app.use("/api/faculty", facultyRoutes);
app.use("/api/admin", adminRoutes);
app.use('/api/summary',dashbaordRoutes)
app.use('/api/assignment',assignmentRoutes)
app.use('/api/subbmition',subbmitionRoutes)
app.use('/api/event',eventRoutes)
app.use('/api/notice',noticeRoutes)
app.use('/api/ticket',ticketRoutes)



app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//Global error Handler
app.use(errorHandler)


//Server Start 
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server Started on Port ${PORT}`));
