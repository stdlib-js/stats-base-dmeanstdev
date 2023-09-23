// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(r){return"string"==typeof r}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,y=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,N=isNaN,k=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,c,f,l,p;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(s(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,N(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!N(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),c+=n.arg||"",f+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){return"string"==typeof r}function V(r){var e,t,n;if(!P(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var F,$=Object.prototype,C=$.toString,I=$.__defineGetter__,R=$.__defineSetter__,M=$.__lookupGetter__,B=$.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var L=F;function q(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function Z(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var z=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,W=function(r){return z.exec(r).slice(1)};function U(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=Z(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function X(r){var e=D(r),t="/"===tr(r,-1);return(r=Z(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function D(r){return"/"===r.charAt(0)}function J(){var r=Array.prototype.slice.call(arguments,0);return X(er(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function H(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=U(r).substr(1),e=U(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),o=Math.min(n.length,i.length),a=o,u=0;u<o;u++)if(n[u]!==i[u]){a=u;break}var s=[];for(u=a;u<n.length;u++)s.push("..");return(s=s.concat(i.slice(a))).join("/")}function K(r){var e=W(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function Q(r,e){var t=W(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function Y(r){return W(r)[3]}var rr={extname:Y,basename:Q,dirname:K,sep:"/",delimiter:":",relative:H,join:J,isAbsolute:D,normalize:X,resolve:U};function er(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var tr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},nr=G(Object.freeze({__proto__:null,basename:Q,default:rr,delimiter:":",dirname:K,extname:Y,isAbsolute:D,join:J,normalize:X,relative:H,resolve:U,sep:"/"}));var ir=Object,or=/./;function ar(r){return"boolean"==typeof r}var ur="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function sr(){return ur&&"symbol"==typeof Symbol.toStringTag}var cr=Object.prototype.toString;var fr=Object.prototype.hasOwnProperty;var lr,pr="function"==typeof Symbol?Symbol:void 0,dr="function"==typeof pr?pr.toStringTag:"";lr=sr()?function(r){var e,t,n,i,o;if(null==r)return cr.call(r);t=r[dr],o=dr,e=null!=(i=r)&&fr.call(i,o);try{r[dr]=void 0}catch(e){return cr.call(r)}return n=cr.call(r),e?r[dr]=t:delete r[dr],n}:function(r){return cr.call(r)};var gr=lr,br=Boolean,vr=Boolean.prototype.toString;var yr=sr();function hr(r){return"object"==typeof r&&(r instanceof br||(yr?function(r){try{return vr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===gr(r)))}function wr(r){return ar(r)||hr(r)}function mr(){return new Function("return this;")()}q(wr,"isPrimitive",ar),q(wr,"isObject",hr);var jr="object"==typeof self?self:null,_r="object"==typeof window?window:null,Er="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Nr="object"==typeof Er?Er:null,kr="object"==typeof globalThis?globalThis:null;var Or=function(r){if(arguments.length){if(!ar(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return mr()}if(kr)return kr;if(jr)return jr;if(_r)return _r;if(Nr)return Nr;throw new Error("unexpected error. Unable to resolve global object.")}(),Sr=Or.document&&Or.document.childNodes,xr=Int8Array;function Ar(){return/^\s*function\s*([^(]*)/i}var Tr,Pr=/^\s*function\s*([^(]*)/i;q(Ar,"REGEXP",Pr),Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===gr(r)};var Vr=Tr;function Fr(r){return null!==r&&"object"==typeof r}var $r=function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Fr);function Cr(r){var e,t,n,i;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Pr.exec(n.toString()))return e[1]}return Fr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}q(Fr,"isObjectLikeArray",$r);var Ir="function"==typeof or||"object"==typeof xr||"function"==typeof Sr?function(r){return Cr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Cr(r).toLowerCase():e};var Rr,Mr,Br=Object.getPrototypeOf;Mr=Object.getPrototypeOf,Rr="function"===Ir(Mr)?Br:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===gr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Lr=Rr;function qr(r){return null==r?null:(r=ir(r),Lr(r))}function Gr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===gr(r))return!0;r=qr(r)}return!1}function Zr(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Gr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}function zr(r){return r!=r}var Wr=Math.floor;function Ur(r,e,t,n){var i,o,a,u,s,c,f,l,p,d,g,b,v;if(r<=0)return 0;if(1===r||0===t)return e[n];if(i=n,r<8){for(g=0,v=0;v<r;v++)g+=e[i],i+=t;return g}if(r<=128){for(o=e[i],a=e[i+t],u=e[i+2*t],s=e[i+3*t],c=e[i+4*t],f=e[i+5*t],l=e[i+6*t],p=e[i+7*t],i+=8*t,d=r%8,v=8;v<r-d;v+=8)o+=e[i],a+=e[i+t],u+=e[i+2*t],s+=e[i+3*t],c+=e[i+4*t],f+=e[i+5*t],l+=e[i+6*t],p+=e[i+7*t],i+=8*t;for(g=o+a+(u+s)+(c+f+(l+p));v<r;v++)g+=e[i],i+=t;return g}return b=Wr(r/2),Ur(b-=b%8,e,t,i)+Ur(r-b,e,t,i+b*t)}function Xr(r,e,t){var n,i,o;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(i=0,o=0;o<r;o++)i+=e[n],n+=t;return i}return Ur(r,e,t,n)}q(Xr,"ndarray",Ur);var Dr,Jr=Zr((0,nr.join)("/home/runner/work/stats-base-dmeanstdev/stats-base-dmeanstdev/node_modules/@stdlib/blas-ext-base-dsumpw/lib","./native.js")),Hr=Dr=Gr(Jr)?Xr:Jr;const{ndarray:Kr}=Dr;function Qr(r,e,t,n,i,o){var a,u,s,c,f,l,p,d,g;if(u=n<0?(1-r)*n:0,s=o<0?-o:0,r<=0)return i[s]=NaN,i[s+o]=NaN,i;if(d=r-e,1===r||0===n)return i[s]=t[u],i[s+o]=d<=0?NaN:0,i;if(zr(a=Hr(r,t,n)/r))return i[s]=NaN,i[s+o]=NaN,i;for(c=0,f=0,g=0;g<r;g++)c+=(l=t[u]-a)*l,f+=l,u+=n;return p=f/r,i[s]=a+p,i[s+o]=d<=0?NaN:c/d-p*(f/d),i}q(Qr,"ndarray",(function(r,e,t,n,i,o,a,u){var s,c,f,l,p,d,g,b,v;if(c=i,f=u,r<=0)return o[f]=NaN,o[f+a]=NaN,o;if(b=r-e,1===r||0===n)return o[f]=t[c],o[f+a]=b<=0?NaN:0,o;if(zr(s=Kr(r,t,n,i)/r))return o[f]=NaN,o[f+a]=NaN,o;for(l=0,p=0,v=0;v<r;v++)l+=(d=t[c]-s)*d,p+=d,c+=n;return g=p/r,o[f]=s+g,o[f+a]=b<=0?NaN:l/b-g*(p/b),o}));var Yr,re=Zr((0,nr.join)("/home/runner/work/stats-base-dmeanstdev/stats-base-dmeanstdev/node_modules/@stdlib/stats-base-dmeanvarpn/lib","./native.js")),ee=Yr=Gr(re)?Qr:re;const{ndarray:te}=Yr;var ne=Math.sqrt;function ie(r,e,t,n,i,o){var a;return ee(r,e,t,n,i,o),i[a=o<0?0:o]=ne(i[a]),i}q(ie,"ndarray",(function(r,e,t,n,i,o,a,u){var s=u+a;return te(r,e,t,n,i,o,a,u),o[s]=ne(o[s]),o}));var oe,ae=Zr((0,nr.join)("/home/runner/work/stats-base-dmeanstdev/stats-base-dmeanstdev/node_modules/@stdlib/stats-base-dmeanstdevpn/lib","./native.js")),ue=oe=Gr(ae)?ie:ae;const{ndarray:se}=oe;function ce(r,e,t,n,i,o){return ue(r,e,t,n,i,o)}function fe(r,e,t,n,i,o,a,u){return se(r,e,t,n,i,o,a,u)}q(ce,"ndarray",fe);export{ce as default,fe as ndarray};
//# sourceMappingURL=mod.js.map
