(function(){
    $('nav ul li').click(function(e){
        var url = this.id;
        if(url == 'home'){
            $('#iframeDiv').empty();
           // load a template file, then render it with data
            var html = new EJS({url: '../views/basic.ejs'}).render('');
            console.log('html='+html);
            $('#homePage').html(html);

        }
        else{
            $('#iframeDiv').empty();
            $('#iframeDiv').html('<iframe id="showPage"  width="100%" height="500" sandbox=""></iframe>');
            $('#showPage').attr({src:url});		        
        }
    })
})();