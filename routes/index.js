exports.index = function(req,res){
	res.render('home',{title: 'Home Page', detail: "Home page detail goes here",
	users:['Home1','Home2','Home3','Home4','Home5','Home6']});
	//res.send("<h1>Hello Express </h1>" + app.locals.title + " " + app.locals.email);
}

exports.about = function(req,res){
	res.render('about',{title: 'About Page', detail: "About page detail goes here",
	users:['about1','about2','about3']	
});	
	//res.send("<h1>Hello Express Home </h1>");
}
