function initListeners(){
    $("nav .navHolder .links a").click(function(e){
        let btnID = e.currentTarget.id;
        MODEL.changePageContent(btnID);
    });

    $(".gallery .topImages a").click(function(e){
        let btnID = e.currentTarget.id;
        MODEL.changePageContent(btnID);
    });

    $(".gallery .bottomImages a").click(function(e){
        let btnID = e.currentTarget.id;
        MODEL.changePageContent(btnID);
    });
}

$(document).ready(function(){
    initListeners();
    MODEL.changePageContent("home");
})