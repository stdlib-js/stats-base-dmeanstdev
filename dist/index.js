"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=s(function(z,v){
var j=require('@stdlib/stats-base-dmeanstdevpn/dist');function l(e,r,a,t,i,n){return j(e,r,a,t,i,n)}v.exports=l
});var m=s(function(A,q){
var R=require('@stdlib/stats-base-dmeanstdevpn/dist').ndarray;function _(e,r,a,t,i,n,x,f){return R(e,r,a,t,i,n,x,f)}q.exports=_
});var c=s(function(B,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=d(),O=m();E(o,"ndarray",O);p.exports=o
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=c(),u,y=g(b(__dirname,"./native.js"));h(y)?u=k:u=y;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
