function getImage(url){
    return new Promise(function(resolve, reject){
        var img = new Image()
        img.onload = function(){
            resolve(url)
        }
        img.onerror = function(){
            reject(url)
        }
        img.src = url
    })
}

getImage('image.jpg').then(
    function(successurl){
        document.getElementById('result').innerHTML = '<img src="' + successurl + '" />'
    },
    function(errorurl){
        console.log('Error loading ' + errorurl)
    }
)