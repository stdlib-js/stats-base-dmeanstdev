// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,f=n.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,d,_;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(i.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),d="get"in t,_="set"in t,c&&(d||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&a&&a.call(r,e,t.get),_&&u&&u.call(r,e,t.set),r};function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function d(r){return r!=r}var _=Math.floor;function p(r,e,t,n){var o,a,u,i,f,l,c,d,y,N,s,b,v;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(s=0,v=0;v<r;v++)s+=e[o],o+=t;return s}if(r<=128){for(a=e[o],u=e[o+t],i=e[o+2*t],f=e[o+3*t],l=e[o+4*t],c=e[o+5*t],d=e[o+6*t],y=e[o+7*t],o+=8*t,N=r%8,v=8;v<r-N;v+=8)a+=e[o],u+=e[o+t],i+=e[o+2*t],f+=e[o+3*t],l+=e[o+4*t],c+=e[o+5*t],d+=e[o+6*t],y+=e[o+7*t],o+=8*t;for(s=a+u+(i+f)+(l+c+(d+y));v<r;v++)s+=e[o],o+=t;return s}return b=_(r/2),p(b-=b%8,e,t,o)+p(r-b,e,t,o+b*t)}function y(r,e,t){var n,o,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,a=0;a<r;a++)o+=e[n],n+=t;return o}return p(r,e,t,n)}function N(r,e,t,n,o,a){var u,i,f,l,c,_,p,N,s;if(i=n<0?(1-r)*n:0,f=a<0?-a:0,r<=0)return o[f]=NaN,o[f+a]=NaN,o;if(N=r-e,1===r||0===n)return o[f]=t[i],o[f+a]=N<=0?NaN:0,o;if(d(u=y(r,t,n)/r))return o[f]=NaN,o[f+a]=NaN,o;for(l=0,c=0,s=0;s<r;s++)l+=(_=t[i]-u)*_,c+=_,i+=n;return p=c/r,o[f]=u+p,o[f+a]=N<=0?NaN:l/N-p*(c/N),o}function s(r,e,t,n,o,a,u,i){var f,l,c,_,y,N,s,b,v;if(l=o,c=i,r<=0)return a[c]=NaN,a[c+u]=NaN,a;if(b=r-e,1===r||0===n)return a[c]=t[l],a[c+u]=b<=0?NaN:0,a;if(d(f=p(r,t,n,o)/r))return a[c]=NaN,a[c+u]=NaN,a;for(_=0,y=0,v=0;v<r;v++)_+=(N=t[l]-f)*N,y+=N,l+=n;return s=y/r,a[c]=f+s,a[c+u]=b<=0?NaN:_/b-s*(y/b),a}c(y,"ndarray",p),c(N,"ndarray",s);var b=Math.sqrt;function v(r,e,t,n,o,a){var u;return N(r,e,t,n,o,a),o[u=a<0?0:a]=b(o[u]),o}function j(r,e,t,n,o,a,u,i){var f=i+u;return s(r,e,t,n,o,a,u,i),a[f]=b(a[f]),a}function m(r,e,t,n,o,a){return v(r,e,t,n,o,a)}function g(r,e,t,n,o,a,u,i){return j(r,e,t,n,o,a,u,i)}c(v,"ndarray",j),c(m,"ndarray",g),r.default=m,r.ndarray=g,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).dmeanstdev={});
//# sourceMappingURL=browser.js.map