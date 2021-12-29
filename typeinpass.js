var targLink    = document.getElementById ("chat-user");
var clickEvent  = document.createEvent ('MouseEvents');
clickEvent.initEvent ('dblclick', true, true);
targLink.dispatchEvent (clickEvent);
// not copied code
