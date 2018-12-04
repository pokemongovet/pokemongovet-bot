$(document).ready(function(){
    createIssue()
});

function createIssue(){

    const USERNAME = ""; /*USERNAME GIT AQUI */
    const PASSWORD = ""; /* PASSWORD GIT AQUI */
    const OWNER = "pokemongovet/";
    const REPOSITORY = "pokemongovet-bot";

    $('#submit-issue').on('click',function(){
        var title = $("#title-issue").val();
        var body = $("#comentario-issue").val();
        
        $.ajax({
            headers: {
                "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD),
                "Content-Type":"application/json"
            },
            type:"POST",
            url: "https://api.github.com/repos/"+OWNER+REPOSITORY+"/issues",
            data:JSON.stringify({title: title,body: body}),
            
            success:(data)=>{
                alert('Issue criada com sucesso');
            },error:(error)=>{
                console.dir("error ao criar Issue");
            }
        });
    });
}
