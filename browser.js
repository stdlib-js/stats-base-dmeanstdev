// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,f){var l,c,d,_;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(u.call(r,e)||i.call(r,e)?(l=r.__proto__,r.__proto__=t,delete r[e],r[e]=f.value,r.__proto__=l):r[e]=f.value),d="get"in f,_="set"in f,c&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&o&&o.call(r,e,f.get),_&&a&&a.call(r,e,f.set),r};function l(r,e,t){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(r){return r!=r}var d=Math.floor;function _(r,e,t,n){var o,a,u,i,f,l,c,p,N,y,s,b,v;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(s=0,v=0;v<r;v++)s+=e[o],o+=t;return s}if(r<=128){for(a=e[o],u=e[o+t],i=e[o+2*t],f=e[o+3*t],l=e[o+4*t],c=e[o+5*t],p=e[o+6*t],N=e[o+7*t],o+=8*t,y=r%8,v=8;v<r-y;v+=8)a+=e[o],u+=e[o+t],i+=e[o+2*t],f+=e[o+3*t],l+=e[o+4*t],c+=e[o+5*t],p+=e[o+6*t],N+=e[o+7*t],o+=8*t;for(s=a+u+(i+f)+(l+c+(p+N));v<r;v++)s+=e[o],o+=t;return s}return b=d(r/2),_(b-=b%8,e,t,o)+_(r-b,e,t,o+b*t)}function p(r,e,t){var n,o,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,a=0;a<r;a++)o+=e[n],n+=t;return o}return _(r,e,t,n)}function N(r,e,t,n,o,a){var u,i,f,l,d,_,N,y,s;if(i=n<0?(1-r)*n:0,f=a<0?-a:0,r<=0)return o[f]=NaN,o[f+a]=NaN,o;if(y=r-e,1===r||0===n)return o[f]=t[i],o[f+a]=y<=0?NaN:0,o;if(c(u=p(r,t,n)/r))return o[f]=NaN,o[f+a]=NaN,o;for(l=0,d=0,s=0;s<r;s++)l+=(_=t[i]-u)*_,d+=_,i+=n;return N=d/r,o[f]=u+N,o[f+a]=y<=0?NaN:l/y-N*(d/y),o}function y(r,e,t,n,o,a,u,i){var f,l,d,p,N,y,s,b,v;if(l=o,d=i,r<=0)return a[d]=NaN,a[d+u]=NaN,a;if(b=r-e,1===r||0===n)return a[d]=t[l],a[d+u]=b<=0?NaN:0,a;if(c(f=_(r,t,n,o)/r))return a[d]=NaN,a[d+u]=NaN,a;for(p=0,N=0,v=0;v<r;v++)p+=(y=t[l]-f)*y,N+=y,l+=n;return s=N/r,a[d]=f+s,a[d+u]=b<=0?NaN:p/b-s*(N/b),a}l(p,"ndarray",_),l(N,"ndarray",y);var s=Math.sqrt;function b(r,e,t,n,o,a){var u;return N(r,e,t,n,o,a),o[u=a<0?0:a]=s(o[u]),o}function v(r,e,t,n,o,a,u,i){var f=i+u;return y(r,e,t,n,o,a,u,i),a[f]=s(a[f]),a}function m(r,e,t,n,o,a){return b(r,e,t,n,o,a)}return l(b,"ndarray",v),l(m,"ndarray",(function(r,e,t,n,o,a,u,i){return v(r,e,t,n,o,a,u,i)})),m},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).dmeanstdev=e();
//# sourceMappingURL=browser.js.map