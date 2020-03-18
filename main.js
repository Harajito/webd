import axios from "axios"

console.log("Hello world")  
const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://montanaflynn-fifa-world-cup.p.rapidapi.com/teams",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"montanaflynn-fifa-world-cup.p.rapidapi.com",
    "x-rapidapi-key":"SIGN-UP-FOR-KEY",
    "accepts":"json"
    }
    })
    .then((response)=>{
      console.log(response)
      var teams = response.data
      var html = ""
      for(var team of teams ){
        html += team.id + " " + team.title + '<br />'

      }
      document.querySelector
    })
    .catch((error)=>{
      console.log(error)
    })

document.querySelector("#submit")//après #un id
    .addEventListener("click",function writeToChat(event) {
        var message = document.querySelector(".message").value
        var discussionElt = document.querySelector(".discussion")//. c'est pour dire que c'est une classe
        var nickname= document.querySelector(".nickname").value
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
