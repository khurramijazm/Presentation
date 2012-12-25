(function(){
    $('nav ul li').click(function(e){
        var url = this.id;
		
		
		
		if(url == "http://code.google.com/p/v8/")
		{
         $.ajax({
             method: 'post',
             url : '/getPage',
             data: { url : url},
             success: function(data){
                $('#iframeDiv').html(data);
             },
             error : function(xhr,error,opt){
                 console.log(xhr,error);
             }
         })
		}
		else
		{
			$('#iframeDiv').empty();
			$('#iframeDiv').html('<iframe id="showPage"  width="100%" height="500" sandbox=""></iframe>');
			$('#showPage').attr({src:url});
		}
    })
})();