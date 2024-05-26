
async function GetValues() {
  let FetchPromise = fetch('/users', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'},
    mode: 'cors'
});

  var UserStatus = FetchPromise.then((response) => {
    if (response.status == 200) {
      console.log(response.body);
      }
  });
}

var i = 1;                  




function Get() {         
  setTimeout(function() {  

    //
    console.log('hello'); 
    GetValues()
    
    //  your code here
    i++;                    
    if (i < 10) {           
      Get();             
    }                       
  }, 3000)
}

Get();                   