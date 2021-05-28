// /*
//     body:  Your data goes here and neeeds to be a string. JSON.stringify() converts objects to a string 
//     body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
//     */

     function submitData( name, email ) {
            return fetch( 'http://localhost:3000/users', { //fetching the url api
                method: "POST",
                headers: {
                  "Content-Type": "application/json", //showing what you send and want
                  "Accept": "application/json"
                },
                body: JSON.stringify( { //making it into a string
                  name, // the body is always in a string using stringify
                  email // and name and email are the objects
                } )
              } )
              .then( function ( response ) {     //grabbing the response from json
                return response.json()
              } )
              .then( function ( object ) {  // getting the data for javascript
                document.body.innerHTML = object[ "id" ]
              } )
              .catch( function ( error ) {  // catching any errors if the above .then's do not work
                document.body.innerHTML = error.message 
              } )
          }
