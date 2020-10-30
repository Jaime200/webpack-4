import '../css/index.css'
import text from  './text' 
if(module.hot){
    module.hot.accept('./text.js', function(){
        console.log('Hot reload');
        text()
    })
}
text();