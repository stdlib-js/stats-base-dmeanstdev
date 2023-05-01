// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).dmeanstdev=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&a&&a.call(r,t,n.set),r};var l=n;function y(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var p=/./;function s(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var _,m="function"==typeof Symbol?Symbol.toStringTag:"";_=v()?function(r){var t,n,e,o,i;if(null==r)return d.call(r);n=r[m],i=m,t=null!=(o=r)&&j.call(o,i);try{r[m]=void 0}catch(t){return d.call(r)}return e=d.call(r),t?r[m]=n:delete r[m],e}:function(r){return d.call(r)};var g=_,w=Boolean.prototype.toString;var h=v();function N(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function O(r){return s(r)||N(r)}function E(){return new Function("return this;")()}y(O,"isPrimitive",s),y(O,"isObject",N);var S="object"==typeof self?self:null,P="object"==typeof window?window:null,A="object"==typeof global?global:null;var T=function(r){if(arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return E()}if(S)return S;if(P)return P;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),q=T.document&&T.document.childNodes,B=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var k,C=/^\s*function\s*([^(]*)/i;y(x,"REGEXP",C),k=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var M=k;function V(r){return null!==r&&"object"==typeof r}var F=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!M(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(V);function G(r){var t,n,e,o;if(("Object"===(n=g(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=C.exec(e.toString()))return t[1]}return V(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}y(V,"isObjectLikeArray",F);var L="function"==typeof p||"object"==typeof B||"function"==typeof q?function(r){return G(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?G(r).toLowerCase():t};var R,$,D=Object.getPrototypeOf;$=Object.getPrototypeOf,R="function"===L($)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===g(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var I=R;function J(r){return null==r?null:(r=Object(r),I(r))}function U(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===g(r))return!0;r=J(r)}return!1}function X(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return U(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}function z(r){return r!=r}var H=Math.floor;function K(r,t,n,e){var o,i,u,a,f,c,l,y,p,s,b,v,d;if(r<=0)return 0;if(1===r||0===n)return t[e];if(o=e,r<8){for(b=0,d=0;d<r;d++)b+=t[o],o+=n;return b}if(r<=128){for(i=t[o],u=t[o+n],a=t[o+2*n],f=t[o+3*n],c=t[o+4*n],l=t[o+5*n],y=t[o+6*n],p=t[o+7*n],o+=8*n,s=r%8,d=8;d<r-s;d+=8)i+=t[o],u+=t[o+n],a+=t[o+2*n],f+=t[o+3*n],c+=t[o+4*n],l+=t[o+5*n],y+=t[o+6*n],p+=t[o+7*n],o+=8*n;for(b=i+u+(a+f)+(c+l+(y+p));d<r;d++)b+=t[o],o+=n;return b}return v=H(r/2),K(v-=v%8,t,n,o)+K(r-v,t,n,o+v*n)}function Q(r,t,n){var e,o,i;if(r<=0)return 0;if(1===r||0===n)return t[0];if(e=n<0?(1-r)*n:0,r<8){for(o=0,i=0;i<r;i++)o+=t[e],e+=n;return o}return K(r,t,n,e)}y(Q,"ndarray",K);var W,Y=X((0,r.join)(__dirname,"./native.js")),Z=W=U(Y)?Q:Y;const{ndarray:rr}=W;function tr(r,t,n,e,o,i){var u,a,f,c,l,y,p,s,b;if(a=e<0?(1-r)*e:0,f=i<0?-i:0,r<=0)return o[f]=NaN,o[f+i]=NaN,o;if(s=r-t,1===r||0===e)return o[f]=n[a],o[f+i]=s<=0?NaN:0,o;if(z(u=Z(r,n,e)/r))return o[f]=NaN,o[f+i]=NaN,o;for(c=0,l=0,b=0;b<r;b++)c+=(y=n[a]-u)*y,l+=y,a+=e;return p=l/r,o[f]=u+p,o[f+i]=s<=0?NaN:c/s-p*(l/s),o}y(tr,"ndarray",(function(r,t,n,e,o,i,u,a){var f,c,l,y,p,s,b,v,d;if(c=o,l=a,r<=0)return i[l]=NaN,i[l+u]=NaN,i;if(v=r-t,1===r||0===e)return i[l]=n[c],i[l+u]=v<=0?NaN:0,i;if(z(f=rr(r,n,e,o)/r))return i[l]=NaN,i[l+u]=NaN,i;for(y=0,p=0,d=0;d<r;d++)y+=(s=n[c]-f)*s,p+=s,c+=e;return b=p/r,i[l]=f+b,i[l+u]=v<=0?NaN:y/v-b*(p/v),i}));var nr,er=X((0,r.join)(__dirname,"./native.js")),or=nr=er instanceof Error?tr:er;const{ndarray:ir}=nr;var ur=Math.sqrt;function ar(r,t,n,e,o,i){var u;return or(r,t,n,e,o,i),o[u=i<0?0:i]=ur(o[u]),o}y(ar,"ndarray",(function(r,t,n,e,o,i,u,a){var f=a+u;return ir(r,t,n,e,o,i,u,a),i[f]=ur(i[f]),i}));var fr,cr=X((0,r.join)(__dirname,"./native.js")),lr=fr=cr instanceof Error?ar:cr;const{ndarray:yr}=fr;function pr(r,t,n,e,o,i){return lr(r,t,n,e,o,i)}return y(pr,"ndarray",(function(r,t,n,e,o,i,u,a){return yr(r,t,n,e,o,i,u,a)})),pr}));
//# sourceMappingURL=index.js.map
