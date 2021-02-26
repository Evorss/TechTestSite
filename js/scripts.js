

function initAnimations(){
    $("#toggleButton").text("<");
    $("#toggleButton").click(function (e) { 
    if($("#sidebar").is(":hidden")){
        $("#main-content").removeClass("col-md-11").addClass("col-md-8");
        $("#sidebar").delay(1000).fadeIn();
        $("#toggleButton").text("<");
    
    }
    else{
        $("#sidebar").fadeOut();
        $("#main-content").removeClass("col-md-8").addClass("col-md-11");
        $("#toggleButton").text(">");
    }
    });
};
function fadeInPage(id){
    $(id).fadeIn();
}
function initSummernote(id){
    $(id).summernote({
        height: 700,               
        minHeight: null,            
        maxHeight: null,           
        focus: true                 
    });
}
function setActiveTab(id){
    let tabs = $(".sectionTab").removeClass("active");
   /* for(let i = 0; i < tabs.length; i++){
        tabs[i].removeClass("active");
    }*/
    $("#"+id).addClass("active");
}
function getEditorCode(id){
    let markupStr = $(id).summernote('code');
    console.log(markupStr)
    return markupStr;
}
function initEditorSaving(id){
    $(id).on('summernote.change', function(we, contents, $editable) {
        localStorage.setItem("articleText", contents)
    });
}