const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  code.addEventListener('keydown', function(e) {
    for(let i = 0; i < code.length; i++){
      if (e.which === code.length) {
        alert (`Congratulations!`);
       }
      }
    }
  }
}
})
  // Write your JavaScript code inside the init() function
  //addEventListener()
  //if all keys, alert congratulations!
  //else alert nothing

}
