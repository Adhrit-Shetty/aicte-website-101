//========================IMPORTS=======================================
var express = require('express'),
	cors = require('cors');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var search = require('./routes/search');
var register = require('./routes/register');
var announcement = require('./routes/announcement');
var announcement_list = require('./routes/announcement_list');
var User = require('./models/user.js');
var institute = require('./routes/institute.js');
var u_institute = require('./routes/update_institute.js');
var u_year = require('./routes/update_year.js');
var year = require('./routes/year.js');
var users = require('./routes/users.js');
var app = express();
var url = 'mongodb://localhost:27017/Aicte101';
var mongoose = require('mongoose'),
    assert = require('assert');
mongoose.connect(url);
var db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function () {
    console.log('Connected to server Successfully');
});
app.use(cors());
app.use(favicon(path.join(__dirname,'/public/images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next){
    console.log('req start: ',req.secure, req.hostname, req.url, app.get('port'));
    if (req.secure) {
        return next();
    }
    res.redirect('https://localhost:'+app.get('port')+req.url);
});
app.use('/users', users);
app.use('/',search);
app.use('/my_institute',institute);
app.use('/announcement',announcement);
app.use('/announcement_list',announcement_list);
//app.use('/my_update_institution',u_institute);
//app.use('/my_update_year.html',u_year);
app.use('/my_year',year);
app.use('/', express.static('dist'));
app.get('*', function (req, res, next) {
    res.sendFile(path.resolve('dist/index.html'));
});
//====================================================================================
//===========================ERROR HANDLING===========================================
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
    res.json({
        message: err.message
    });
});
//====================================================================================
//=========================FUNCTIONS==================================================
function onGetRequest(request,response)
{
    try
    {
        console.log("Request from user :"+request.url);
        var link;
        if(request.url=='/')
            link='/adminpage.html';
        else
            link=(request.url).toString();
        console.log('Link:',link);
        if(path.extname(link)=='.html')
            link='./public/html'+link;
        // else if(path.extname(link)=='.jpg'|| path.extname(link)=='.png')
        //     link='./public/images'+link;
        // else if(path.extname(link)=='.js')
        //     link='./public/javascripts'+link;
        // else if(path.extname(link)=='.css')
        //     link='./public/stylesheets'+link;
        // link = path.join(__dirname,link);
        link = path.normalize(link);
        console.log(link+"-"+fs.existsSync(link));
        if(fs.existsSync(link))
        {
            if(path.extname(link)=='.html')
            {

                response.writeHead(200,{"Content-Type":"text/html"});
                var stream=fs.createReadStream(link);
                stream.pipe(response);
            }
            else if(path.extname(link)=='.jpg' || path.extname(link)=='.png')
            {
                var img = fs.readFileSync(link);
                response.writeHead(200, {'Content-Type': 'image/gif' });
                response.end(img, 'binary');
            }
            else if(path.extname(link)=='.css')
            {
                response.writeHead(200, {'Content-Type': 'text/css' });
                var stream = fs.createReadStream(link);
                stream.pipe(response);
            }
            else if(path.extname(link)=='.js')
            {
                response.writeHead(200, {'Content-Type':'text/javascript' });
                var stream = fs.createReadStream(link);
                stream.pipe(response);
            }
            else
            {
                response.statusCode=415;
                throw new Error(response.statusCode+":Unsupported media type!");
            }
        }
        else
        {
            response.statusCode=404;
            throw new Error(response.statusCode+":File not found!");
        }
        //next();
    }
    catch(error)
    {
        throw error;
    }
}


//====================================================================================
module.exports = app;