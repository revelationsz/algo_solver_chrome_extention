

// console.log("test")

// Avoid recursive frame insertion...
var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if (!location.ancestorOrigins.contains(extensionOrigin)) {
    var iframe = document.createElement('iframe');
    // Must be declared at web_accessible_resources in manifest.json
    iframe.src = chrome.runtime.getURL('frame.html');

    const url = window.location.href
    console.log(url)
    let domain = (new URL(url)).hostname.split('.')[0]
    console.log(domain)    

    const info = document.getElementsByClassName('_1l1MA')[0].children
    if(info != null) {
        console.log(info)
        let question = info[0].innerText + " " +  info[1].innerText
        console.log(question)
    }

    let language = document.getElementsByClassName("text-xs text-label-2 dark:text-dark-label-2")


    const page = document.querySelector('body');
    // console.log("test ", page)
    // if(page) page.style.backgroundColor = "red";

    // Some styles for a fancy sidebar
    // iframe.style.cssText = 'position:fixed;top:0;right:0;display:block;' +
    //                        'width:500px;height:100%;z-index:1000;';
    // document.body.appendChild(iframe);
}



