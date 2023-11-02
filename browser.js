// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(r){return"string"==typeof r}var u=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,l=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":u(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=l.call(i,y,"$1e"),i=l.call(i,b,"e"),i=l.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=l.call(i,d,"e+0$1"),i=l.call(i,g,"e-0$1"),r.alternate&&(i=l.call(i,h,"$1."),i=l.call(i,w,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===f.call(r.specifier)?f.call(i):p.call(i)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function N(r,e,t){var i=e-r.length;return i<0?r:r=t?r+_(i):_(i)+r}var x=String.fromCharCode,k=isNaN,E=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,t,i,a,o,u,p,f,l;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",p=1,f=0;f<r.length;f++)if(s(i=r[f]))u+=i;else{if(e=void 0!==i.precision,!(i=S(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=N(i.arg,i.width,i.padRight)),u+=i.arg||"",p+=1}return u}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,i,n;for(t=[],n=0,i=V.exec(r);i;)(e=r.slice(n,V.lastIndex-i[0].length)).length&&t.push(e),t.push(T(i)),n=V.lastIndex,i=V.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function F(r){return"string"==typeof r}function A(r){var e,t,i;if(!F(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=$(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return j.apply(null,t)}var I=Object.prototype,C=I.toString,R=I.__defineGetter__,O=I.__defineSetter__,P=I.__lookupGetter__,Z=I.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(r,e)||Z.call(r,e)?(i=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function W(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return r!=r}var M=Math.floor;function U(r,e,t,i){var n,a,o,c,s,u,p,f,l,d,g,h,w;if(r<=0)return 0;if(1===r||0===t)return e[i];if(n=i,r<8){for(g=0,w=0;w<r;w++)g+=e[n],n+=t;return g}if(r<=128){for(a=e[n],o=e[n+t],c=e[n+2*t],s=e[n+3*t],u=e[n+4*t],p=e[n+5*t],f=e[n+6*t],l=e[n+7*t],n+=8*t,d=r%8,w=8;w<r-d;w+=8)a+=e[n],o+=e[n+t],c+=e[n+2*t],s+=e[n+3*t],u+=e[n+4*t],p+=e[n+5*t],f+=e[n+6*t],l+=e[n+7*t],n+=8*t;for(g=a+o+(c+s)+(u+p+(f+l));w<r;w++)g+=e[n],n+=t;return g}return h=M(r/2),U(h-=h%8,e,t,n)+U(r-h,e,t,n+h*t)}function X(r,e,t){var i,n,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(i=t<0?(1-r)*t:0,r<8){for(n=0,a=0;a<r;a++)n+=e[i],i+=t;return n}return U(r,e,t,i)}function q(r,e,t,i,n,a){var o,c,s,u,p,f,l,d,g;if(c=i<0?(1-r)*i:0,s=a<0?-a:0,r<=0)return n[s]=NaN,n[s+a]=NaN,n;if(d=r-e,1===r||0===i)return n[s]=t[c],n[s+a]=d<=0?NaN:0,n;if(L(o=X(r,t,i)/r))return n[s]=NaN,n[s+a]=NaN,n;for(u=0,p=0,g=0;g<r;g++)u+=(f=t[c]-o)*f,p+=f,c+=i;return l=p/r,n[s]=o+l,n[s+a]=d<=0?NaN:u/d-l*(p/d),n}function z(r,e,t,i,n,a,o,c){var s,u,p,f,l,d,g,h,w;if(u=n,p=c,r<=0)return a[p]=NaN,a[p+o]=NaN,a;if(h=r-e,1===r||0===i)return a[p]=t[u],a[p+o]=h<=0?NaN:0,a;if(L(s=U(r,t,i,n)/r))return a[p]=NaN,a[p+o]=NaN,a;for(f=0,l=0,w=0;w<r;w++)f+=(d=t[u]-s)*d,l+=d,u+=i;return g=l/r,a[p]=s+g,a[p+o]=h<=0?NaN:f/h-g*(l/h),a}W(X,"ndarray",U),W(q,"ndarray",z);var B=Math.sqrt;function D(r,e,t,i,n,a){var o;return q(r,e,t,i,n,a),n[o=a<0?0:a]=B(n[o]),n}function H(r,e,t,i,n,a,o,c){var s=c+o;return z(r,e,t,i,n,a,o,c),a[s]=B(a[s]),a}function J(r,e,t,i,n,a){return D(r,e,t,i,n,a)}return W(D,"ndarray",H),W(J,"ndarray",(function(r,e,t,i,n,a,o,c){return H(r,e,t,i,n,a,o,c)})),J},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).dmeanstdev=e();
//# sourceMappingURL=browser.js.map
