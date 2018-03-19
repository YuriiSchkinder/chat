$(document).ready(()=>{

const ws=new WebSocket('ws://localhost:8080');
function firstMessage() {
    if($('.messages').children().length==1){
        $('.mess').first().remove();
    }
}
ws.onopen=()=>{

    console.log('socket conectid...');
};
ws.onmessage=(message)=>{
    firstMessage();
    $('.messages').append("<p class='message z-depth-4'>"+message.data+"</p>");
};
$('#send').click(()=>{
   firstMessage();
    var message=$('#textarea1');
    if(message.val().length>0) {
        ws.send(message.val());
        $('.messages').append("<p class='message maine z-depth-4'>" + message.val() + "</p>");
        message.val('');
        message.focus();
    }
    message.focus();
});


})