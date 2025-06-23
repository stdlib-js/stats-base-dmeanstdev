"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=u(function(B,q){
var j=require('@stdlib/stats-base-dmeanstdevpn/dist').ndarray;function l(e,r,t,i,n,a,s,v){return j(e,r,t,i,n,a,s,v)}q.exports=l
});var c=u(function(C,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=d();function E(e,r,t,i,n,a){var s=R(e,i),v=a>=0?0:-a;return _(e,r,t,i,s,n,a,v),n}m.exports=E
});var f=u(function(D,y){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),g=d();b(p,"ndarray",g);y.exports=p
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=f(),o,x=k(h(__dirname,"./native.js"));w(x)?o=z:o=x;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
