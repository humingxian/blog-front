// 函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，
// 事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。
export function debounce(fn, wait) {
  var timeout = null;    
  return function(e) {
    if(timeout !== null)   clearTimeout(timeout);        
    timeout = setTimeout(fn(e), wait);
  }
}

// 函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
export function throttle(func, delay) {           
  var prev = Date.now();           
  return function() {               
      var context = this;               
      var args = arguments;               
      var now = Date.now();               
      if (now - prev >= delay) {                   
          func.apply(context, args);                   
          prev = Date.now();               
      }           
  }       
}