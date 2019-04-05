const express = require('express');
const app = express();
var mongoose = require("mongoose");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, post, options, put, get, patch, delete, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/track-status");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var usersSchema = new mongoose.Schema({
    Name: String,
    Username: String,
    Password: String
});

var recordsSchema = new mongoose.Schema({
    Stage: String,
    ResourceName: String,
    Location: String,
    Remarks: String,
    Positions: String,
    Skill: String,
    Team: String,
    DM: Array,
    Owner: String,
    Customer: String,
    Net: String,
    DemandOwner: String,
    TargetDate: String,
    Place: String,
    Profile: String,
    InternalScreening: String,
    ProfileSubmitted: String,
    CustomerSelectionDate: String,
    OnboardingDate: String,
    IndentNo: String,
    JOBCodes: String,
    RequirementReceived: String,
    RFRNo: String,
    Band: String
});

var user = mongoose.model("users", usersSchema);
var records = mongoose.model("jobs", recordsSchema);

app.get('/users-list', (req, res) => {
    user.find({}, function (err, docs) {
        if (err)
            console.log('error occured in the database');
        res.send(docs);
    });
    return res;
});

app.get('/all-records', (req, res) => {
    records.find({}, function (err, docs) {
        if (err)
            console.log('error occured in the database');
        res.send(docs);
    });
    return res;
});

app.post('/registered-users', (req, res) => {
    var myData = new user(
        {
            Name: req.body.name,
            Username: req.body.empID,
            Password: req.body.password
        });
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        })
});

app.post('/post-jobs', (req, res) => {
    var jobs = new Jobs(
        {
            jobID: req.body.jobID,
            jobTitle: req.body.jobTitle,
            description: req.body.description,
            experienceRequired: req.body.experienceRequired,
            jobLocation: req.body.jobLocation,
            technologies: req.body.technologies,
            PostedOn: req.body.PostedOn,
            applicant: req.body.applicant,
            startingDate: req.body.startingDate,
            endingDate: req.body.endingDate
        });
    jobs.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        })
});

app.post('/list-of-records', (req, res) => {
    var applied = new records(
        {
            Stage: req.body.stage,
            ResourceName: req.body.resourceName,
            Location: req.body.location,
            Remarks: req.body.remarks,
            Positions: req.body.Positions,
            Skill: req.body.Skill,
            Team: req.body.Team,
            DM: req.body.DM,
            Owner: req.body.Owner,
            Customer: req.body.Customer,
            Net: req.body.Net,
            DemandOwner: req.body.DemandOwner,
            TargetDate: req.body.TargetDate,
            Place: req.body.Place,
            Profile: req.body.Profile,
            InternalScreening: req.body.InternalScreening,
            ProfileSubmitted: req.body.ProfileSubmitted,
            CustomerSelectionDate: req.body.CustomerSelectionDate,
            OnboardingDate: req.body.OnboardingDate,
            IndentNo: req.body.IndentNo,
            JOBCodes: req.body.JOBCodes,
            RequirementReceived: req.body.RequirementReceived,
            RFRNo: req.body.RFRNo,
            Band: req.body.Band
        });
    applied.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        })
});

const port = process.env.PORT || 1234;
app.listen(port, () => console.log(`Listening ${port}`))