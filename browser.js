// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,h,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,g,"e-0$1"),r.alternate&&(e=p.call(e,d,"$1."),e=p.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,n,e,o,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,E(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function F(r){var t,n,e,i;for(n=[],i=0,e=U.exec(r);e;)(t=r.slice(i,U.lastIndex-e[0].length)).length&&n.push(t),n.push(T(e)),i=U.lastIndex,e=U.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function I(r){return"string"==typeof r}function k(r){var t,n,e;if(!I(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=F(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return x.apply(null,n)}var N,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&($.call(r,t)||C.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,t,n.get),a&&L&&L.call(r,t,n.set),r};var H=N;function R(r,t,n){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W=/./;function B(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&Y.call(r,t)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"",J=Z()?function(r){var t,n,e;if(null==r)return X.call(r);n=r[D],t=q(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return e=X.call(r),t?r[D]=n:delete r[D],e}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=Z();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return B(r)||tr(r)}function er(){return new Function("return this;")()}R(nr,"isPrimitive",B),R(nr,"isObject",tr);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!B(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ar)return ar;if(ir)return ir;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;R(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function yr(r){return null!==r&&"object"==typeof r}function gr(r){var t,n,e,i;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=sr.exec(e.toString()))return t[1]}return yr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}R(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!pr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(yr));var dr="function"==typeof W||"object"==typeof fr||"function"==typeof cr?function(r){return gr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?gr(r).toLowerCase():t};function vr(r){return"function"===dr(r)}function br(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&vr(r.next)}function hr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString,jr=Z();function Ar(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function _r(r){return hr(r)||Ar(r)}R(_r,"isPrimitive",hr),R(_r,"isObject",Ar);var Er,Or="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null,Sr=Object,xr=Object.getPrototypeOf;Er=vr(Object.getPrototypeOf)?xr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ur=Er,Tr=Object.prototype;function Fr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(t=function(r){return null==r?null:(r=Sr(r),Ur(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&vr(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&vr(t.isPrototypeOf)&&(t===Tr||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function Ir(r,t){return Fr(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function kr(r,t,n){var e,i,o,a;if(!br(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(o=Ir(e,n)))throw o;return R(i={},"next",u),R(i,"return",c),Or&&vr(r[Or])&&R(i,Or,f),i;function u(){var n;return a?{done:!0}:(n=r.next()).done?(a=!0,n):{value:hr(n.value)?t(n.value):e.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return kr(r[Or](),t,e)}}function Nr(r){return r!=r}var Vr=Number.POSITIVE_INFINITY,Pr=wr.NEGATIVE_INFINITY;function Gr(r){return r===Vr||r===Pr}var Lr=Math.floor;function $r(r){return Lr(r)===r}function Cr(r){return $r(r/2)}function Hr(r){return Cr(r>0?r-1:r+1)}var Rr=Math.sqrt;function Wr(r){return Math.abs(r)}var Br,Mr="function"==typeof Uint32Array,Zr="function"==typeof Uint32Array?Uint32Array:null,Xr="function"==typeof Uint32Array?Uint32Array:void 0;Br=function(){var r,t,n;if("function"!=typeof Zr)return!1;try{t=new Zr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Mr&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr,qr=Br,zr="function"==typeof Float64Array,Dr="function"==typeof Float64Array?Float64Array:null,Jr="function"==typeof Float64Array?Float64Array:void 0;Yr=function(){var r,t,n;if("function"!=typeof Dr)return!1;try{t=new Dr([1,3.14,-3.14,NaN]),n=t,r=(zr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Kr,Qr=Yr,rt="function"==typeof Uint8Array,tt="function"==typeof Uint8Array?Uint8Array:null,nt="function"==typeof Uint8Array?Uint8Array:void 0;Kr=function(){var r,t,n;if("function"!=typeof tt)return!1;try{t=new tt(t=[1,3.14,-3.14,256,257]),n=t,r=(rt&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nt:function(){throw new Error("not implemented")};var et,it=Kr,ot="function"==typeof Uint16Array,at="function"==typeof Uint16Array?Uint16Array:null,ut="function"==typeof Uint16Array?Uint16Array:void 0;et=function(){var r,t,n;if("function"!=typeof at)return!1;try{t=new at(t=[1,3.14,-3.14,65536,65537]),n=t,r=(ot&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ut:function(){throw new Error("not implemented")};var ct,ft={uint16:et,uint8:it};(ct=new ft.uint16(1))[0]=4660;var lt,st,pt=52===new ft.uint8(ct.buffer)[0];!0===pt?(lt=1,st=0):(lt=0,st=1);var yt={HIGH:lt,LOW:st},gt=new Qr(1),dt=new qr(gt.buffer),vt=yt.HIGH,bt=yt.LOW;function ht(r,t,n,e){return gt[0]=r,t[e]=dt[vt],t[e+n]=dt[bt],t}function wt(r){return ht(r,[0,0],1,0)}R(wt,"assign",ht);var mt=!0===pt?0:1,jt=new Qr(1),At=new qr(jt.buffer);function _t(r,t){return jt[0]=r,At[mt]=t>>>0,jt[0]}function Et(r){return 0|r}var Ot,St,xt=2147483647,Ut=!0===pt?1:0,Tt=new Qr(1),Ft=new qr(Tt.buffer);function It(r){return Tt[0]=r,Ft[Ut]}!0===pt?(Ot=1,St=0):(Ot=0,St=1);var kt={HIGH:Ot,LOW:St},Nt=new Qr(1),Vt=new qr(Nt.buffer),Pt=kt.HIGH,Gt=kt.LOW;function Lt(r,t){return Vt[Pt]=r,Vt[Gt]=t,Nt[0]}var $t=[0,0];function Ct(r,t){var n,e;return wt.assign(r,$t,1,0),n=$t[0],n&=xt,e=It(t),Lt(n|=e&=2147483648,$t[1])}var Ht=!0===pt?1:0,Rt=new Qr(1),Wt=new qr(Rt.buffer);function Bt(r,t){return Rt[0]=r,Wt[Ht]=t>>>0,Rt[0]}var Mt=1023,Zt=1048576,Xt=[1,1.5],Yt=[0,.5849624872207642],qt=[0,1.350039202129749e-8];function zt(r,t,n,e){return Nr(r)||Gr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Wr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}R((function(r){return zt(r,[0,0],1,0)}),"assign",zt);var Dt=[0,0],Jt=[0,0];function Kt(r,t){var n,e;return 0===t||0===r||Nr(r)||Gr(r)?r:(zt(r,Dt,1,0),t+=Dt[1],t+=function(r){var t=It(r);return(t=(2146435072&t)>>>20)-Mt|0}(r=Dt[0]),t<-1074?Ct(0,r):t>1023?r<0?Pr:Vr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,wt.assign(r,Jt,1,0),n=Jt[0],n&=2148532223,e*Lt(n|=t+Mt<<20,Jt[1])))}var Qt=1048575,rn=1048576,tn=1083179008,nn=1e300,en=1e-300,on=[0,0],an=[0,0];function un(r,t){var n,e,i,o,a,u,c,f,l,s,p,y,g,d;if(Nr(r)||Nr(t))return NaN;if(wt.assign(t,on,1,0),a=on[0],0===on[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Rr(r);if(-.5===t)return 1/Rr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Gr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Wr(r)<1==(t===Vr)?0:Vr}(r,t)}if(wt.assign(r,on,1,0),o=on[0],0===on[1]){if(0===o)return function(r,t){return t===Pr?Vr:t===Vr?0:t>0?Hr(t)?r:0:Hr(t)?Ct(Vr,r):Vr}(r,t);if(1===r)return 1;if(-1===r&&Hr(t))return-1;if(Gr(r))return r===Pr?un(-0,-t):t<0?0:Vr}if(r<0&&!1===$r(t))return(r-r)/(r-r);if(i=Wr(r),n=o&xt|0,e=a&xt|0,c=a>>>31|0,u=(u=o>>>31|0)&&Hr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(It(r)&xt)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===c?u*nn*nn:u*en*en;if(n>1072693248)return 0===c?u*nn*nn:u*en*en;p=function(r,t){var n,e,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=_t(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}(an,i)}else p=function(r,t,n){var e,i,o,a,u,c,f,l,s,p,y,g,d,v,b,h,w,m,j,A,_;return m=0,n<Zt&&(m-=53,n=It(t*=9007199254740992)),m+=(n>>20)-Mt|0,n=1072693248|(j=1048575&n|0),j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=Zt),a=_t(i=(h=(t=Bt(t,n))-(f=Xt[A]))*(w=1/(t+f)),0),e=524288+(n>>1|536870912),c=Bt(0,e+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=_t(c=3+(o=a*a)+(b+=(u=w*(h-a*c-a*(t-(c-f))))*(a+i)),0),d=(y=-7.028461650952758e-9*(s=_t(s=(h=a*c)+(w=u*c+(b-(c-3-o))*i),0))+.9617966939259756*(w-(s-h))+qt[A])-((g=_t(g=(p=.9617967009544373*s)+y+(l=Yt[A])+(v=m),0))-v-l-p),r[0]=g,r[1]=d,r}(an,i,n);if(y=(s=(t-(f=_t(t,0)))*p[0]+t*p[1])+(l=f*p[0]),wt.assign(y,on,1,0),g=Et(on[0]),d=Et(on[1]),g>=tn){if(0!=(g-tn|d))return u*nn*nn;if(s+8008566259537294e-32>y-l)return u*nn*nn}else if((g&xt)>=1083231232){if(0!=(g-3230714880|d))return u*en*en;if(s<=y-l)return u*en*en}return y=function(r,t,n){var e,i,o,a,u,c,f,l,s,p;return s=((l=r&xt|0)>>20)-Mt|0,f=0,l>1071644672&&(i=Bt(0,((f=r+(rn>>s+1)>>>0)&~(Qt>>(s=((f&xt)>>20)-Mt|0)))>>>0),f=(f&Qt|rn)>>20-s>>>0,r<0&&(f=-f),t-=i),r=Et(r=It(c=1-((c=(o=.6931471824645996*(i=_t(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Kt(c,f):Bt(c,r)}(g,l,s),u*y}var cn=Math.ceil,fn=1048575,ln=.4342944818781689;function sn(r){var t,n,e,i,o,a,u;return Nr(r)||r<0?NaN:0===r?Pr:(o=0,(n=It(r))<1048576&&(o-=54,n=It(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-Mt|0,a=o+=(i=614244+(n&=1048575)&1048576|0)>>20|0,e=function(r){var t,n,e,i,o,a,u,c,f,l,s;return i=It(r),o=r-1,(fn&2+i)<3?0===o?0:o*o*(.3333333333333333*o-.5):(l=(i&=fn)-398458|0,s=440401-i|0,n=(f=(u=(a=o/(2+o))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),e=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=e+n,(l|=s)>0?a*((t=.5*o*o)+c)-t:a*(c-o))}(r=Bt(r,n|1072693248^i)),u=3694239077158931e-28*a+25082946711645275e-27*((r-=1)+e),(u+=(r-(t=_t(r,0))+e)*ln+t*ln)+.30102999566361177*a))}function pn(r){var t,n,e,i,o,a;return Nr(r)||Gr(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,a=sn(r),n=Lr(a),e=cn(a),-324===n?1e-323*t:308===n?1e308*t:(i=un(10,n))+((o=un(10,e))-i)/2>r?t*i:t*o)}return function(r){return kr(r,pn)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterRound10=t();
//# sourceMappingURL=browser.js.map
