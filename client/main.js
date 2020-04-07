import axios from 'axios'


var messageElt = document.querySelector("#message")
var discussionElt = document.querySelector(".discussion")//. c'est pour dire que c'est une classe
var nicknameElt = document.querySelector("#nickname")
        

document.querySelector("#submit")//après #un id
    .addEventListener("click",function writeToChat(event) {
        var message = messageElt.value
        var nickname= nicknameElt.value
        
        axios.post('/api/message', {
            message: 'Fred',
            nickname: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        discussionElt.innerHTML += "<p>" + nickname + ": " + message
    })

