
    var request = new XMLHttpRequest();
    request.open("GET", "https://academy.valentinog.com/api/link/");
    request.send();
    request.onload = function() {
      console.log(this.response);
    };  
    function fetch(url) {
        return new Promise(function(resolve, reject) {
          var request = new XMLHttpRequest();
          request.open("GET", url);
          request.onload = function() {
            // handle the response
          };
          request.send();
        });
      }
      function fetch(url) {
        return new Promise(function(resolve, reject) {
          var request = new XMLHttpRequest();
          request.open("GET", url);
          request.onload = function() {
            // handle the response
          };
          request.onerror = function() {
            // handle the error
          };
          request.send();
        });
    }