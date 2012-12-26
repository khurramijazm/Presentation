
/*
 * GET users listing.
 */

exports.basicNode = function(req, res){
   var params = {
	title : "Node.js Presentation",
	name : ' Khurram Ijaz '
   }
  res.render('basic',params);
};