//========================IMPORTS=======================================
var express = require('express');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var home = require('./routes/home');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//====================================================================================
//===========================IMPLEMENTATION===========================================
app.use(favicon(path.join(__dirname,'/public/images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next){
    console.log('req start: ',req.secure, req.hostname, req.url, app.get('port'));
    if (req.secure) {
        return next();
    };

    res.redirect('https://localhost:'+app.get('secPort')+req.url);
});
app.get('*',onGetRequest);
//app.use('/', home);
//app.use('/users', users);

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
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
//====================================================================================
//=========================FUNCTIONS==================================================
function onGetRequest(request,response,next)
{
    try
    {
        console.log("Request from user :"+request.url);
        var link;
        if(request.url=='/')
            link=path.resolve('/','/start.html');
        else
            link=path.resolve('/',request.url).toString();
        if(path.extname(link)=='.html')
            link='./public/html'+link;
        else if(path.extname(link)=='.jpg'|| path.extname(link)=='.png')
            link='./public/images'+link;
        else if(path.extname(link)=='.js')
            link='./public/javascripts'+link;
        else if(path.extname(link)=='.css')
            link='./public/stylesheets'+link;
        console.log(path.normalize(link));
        console.log(link+"-"+fs.existsSync('.'+link));
        if(fs.existsSync('.'+link))
        {
            if(path.extname(link)=='.html')
            {

                response.writeHead(200,{"Content-Type":"text/html"});
                var stream=fs.createReadStream("."+link);
                stream.pipe(response);
            }
            else if(path.extname(link)=='.jpg' || path.extname(link)=='.png')
            {
                var img = fs.readFileSync('.'+link);
                response.writeHead(200, {'Content-Type': 'image/gif' });
                response.end(img, 'binary');
            }
            else if(path.extname(link)=='.css')
            {
                response.writeHead(200, {'Content-Type': 'text/css' });
                var stream = fs.createReadStream("."+link);
                stream.pipe(response);
            }
            else if(path.extname(link)=='.js')
            {
                response.writeHead(200, {'Content-Type':'text/javascript' });
                var stream = fs.createReadStream("."+link);
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
