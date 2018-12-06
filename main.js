$(document).ready(function(){
    createIssue()
});

function createIssue(){

    const OWNER = "pokemongovet/";
    const REPOSITORY = "pokemongovet-bot";
    
    $('#submit-issue').on('click',function(){
        var username = $('#user').val(); /*username GIT AQUI */
        var password = $('#password').val(); /* password GIT AQUI */
        var title = $("#title-issue").val();
        var body = $("#comentario-issue").val();
        
        $.ajax({
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password),
                "Content-Type":"application/json"
            },
            type:"POST",
            url: "https://api.github.com/repos/"+OWNER+REPOSITORY+"/issues",
            data:JSON.stringify({title: title,body: body}),
            
            success:(data)=>{
                alert('Issue criada com sucesso');
            },error:(error)=>{
                console.dir(error)
                switch (error.responseJSON.message) {
                    case "Validation Failed":
                        alert("O Título e Comentário são obrigatórios!");
                        break;

                    case "Bad credentials":
                        alert("Você não tem permissão para criar issue!");
                        break;

                    case "Not Found":
                        alert('É necessário que você se autentique!')
                        break;
                    default:
                        break;
                }
            }
        });
    });
}
