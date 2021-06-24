// window.alert('アプリ開いたね！');

console.log("オッケ");
// console.log(document.URL);
// console.log(document.URL.split("google.com/search?q="))

let queries = document.URL.split("google.com/search?q=")[1];
if( queries.length > 1 ){    
    let query = queries.split("&")[0];
    const rawQuery = decodeURI(query);
    
    // chrome.management.getAll(apps => {
    //     console.log(apps);
    // });

    const key = "searchWords"
    chrome.storage.sync.get(/* String or Array */[key], function(items){
        //  items = [ { "yourBody": "myBody" } ]
        let nweArray;
        console.log(items);
        if( items == {} ){
            console.log(here);
            let array = JSON.parse(items);
            console.log(array);
            nweArray = array.push(rawQuery);
        } else {
            nweArray = [rawQuery];
        }

        chrome.storage.sync.set({key: JSON.stringify(nweArray)}, function() {
            console.log('Value is set to ' + nweArray);
        });
    });
}
