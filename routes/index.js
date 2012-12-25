
/*
 * GET home page.
 */

exports.index = function(req, res){
   var params = {
	title : "Node.js Presentation",
	name : ' Khurram Ijaz '
   }
  res.render('index',params);
};