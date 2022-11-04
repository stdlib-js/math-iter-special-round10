// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterRound10=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var t,n,e;if(null==r)return s.call(r);n=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[w]=n:delete r[w],e}:function(r){return s.call(r)},g=Boolean.prototype.toString;var A=b();function h(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||h(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var T=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",x);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=x.exec(e.toString()))return t[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!V(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof I||"function"==typeof F?function(r){return H(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?H(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function W(r){return"number"==typeof r}var k=Number,C=k.prototype.toString;var R=b();function Y(r){return"object"==typeof r&&(r instanceof k||(R?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function q(r){return W(r)||Y(r)}l(q,"isPrimitive",W),l(q,"isObject",Y);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!V(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!m(r,"constructor")&&m(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&m(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!m(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(m(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:W(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),t,e)}}function rr(r){return r!=r}var tr=Number.POSITIVE_INFINITY,nr=k.NEGATIVE_INFINITY;function er(r){return r===tr||r===nr}var or=Math.floor;function ur(r){return or(r)===r}function ir(r){return ur(r/2)}function fr(r){return ir(r>0?r-1:r+1)}var ar=Math.sqrt;function cr(r){return Math.abs(r)}var lr="function"==typeof Uint32Array;var yr="function"==typeof Uint32Array?Uint32Array:null;var vr,pr="function"==typeof Uint32Array?Uint32Array:void 0;vr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(lr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var br=vr,sr="function"==typeof Float64Array;var dr="function"==typeof Float64Array?Float64Array:null;var mr,wr="function"==typeof Float64Array?Float64Array:void 0;mr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr([1,3.14,-3.14,NaN]),n=t,r=(sr&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var jr=mr,gr="function"==typeof Uint8Array;var Ar="function"==typeof Uint8Array?Uint8Array:null;var hr,_r="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,t,n;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,256,257]),n=t,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Or=hr,Ur="function"==typeof Uint16Array;var Sr="function"==typeof Uint16Array?Uint16Array:null;var Er,Nr="function"==typeof Uint16Array?Uint16Array:void 0;Er=function(){var r,t,n;if("function"!=typeof Sr)return!1;try{t=new Sr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ur&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Tr,Fr={uint16:Er,uint8:Or};(Tr=new Fr.uint16(1))[0]=4660;var Ir,Pr,xr=52===new Fr.uint8(Tr.buffer)[0];!0===xr?(Ir=1,Pr=0):(Ir=0,Pr=1);var Vr={HIGH:Ir,LOW:Pr},Gr=new jr(1),Hr=new br(Gr.buffer),Br=Vr.HIGH,Lr=Vr.LOW;function Mr(r,t){return Gr[0]=t,r[0]=Hr[Br],r[1]=Hr[Lr],r}function Wr(r,t){return 1===arguments.length?Mr([0,0],r):Mr(r,t)}var kr=!0===xr?0:1,Cr=new jr(1),Rr=new br(Cr.buffer);function Yr(r,t){return Cr[0]=r,Rr[kr]=t>>>0,Cr[0]}function qr(r){return 0|r}var Xr,zr,Dr=!0===xr?1:0,Jr=new jr(1),Kr=new br(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Dr]}!0===xr?(Xr=1,zr=0):(Xr=0,zr=1);var Zr={HIGH:Xr,LOW:zr},$r=new jr(1),rt=new br($r.buffer),tt=Zr.HIGH,nt=Zr.LOW;function et(r,t){return rt[tt]=r,rt[nt]=t,$r[0]}var ot=[0,0];function ut(r,t){var n,e;return Wr(ot,r),n=ot[0],n&=2147483647,e=Qr(t),et(n|=e&=2147483648,ot[1])}var it=!0===xr?1:0,ft=new jr(1),at=new br(ft.buffer);function ct(r,t){return ft[0]=r,at[it]=t>>>0,ft[0]}var lt=1023;var yt=1048576,vt=[1,1.5],pt=[0,.5849624872207642],bt=[0,1.350039202129749e-8];function st(r,t,n,e){return rr(r)||er(r)?(t[e]=r,t[e+n]=0,t):0!==r&&cr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return st(r,[0,0],1,0)}),"assign",st);var dt=[0,0],mt=[0,0];function wt(r,t){var n,e;return 0===t||0===r||rr(r)||er(r)?r:(st(r,dt,1,0),t+=dt[1],t+=function(r){var t=Qr(r);return(t=(2146435072&t)>>>20)-lt|0}(r=dt[0]),t<-1074?ut(0,r):t>1023?r<0?nr:tr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Wr(mt,r),n=mt[0],n&=2148532223,e*et(n|=t+lt<<20,mt[1])))}var jt=2147483647,gt=1048575,At=1048576;var ht=2147483647,_t=1083179008,Ot=1e300,Ut=1e-300,St=[0,0],Et=[0,0];function Nt(r,t){var n,e,o,u,i,f,a,c,l,y,v,p,b,s;if(rr(r)||rr(t))return NaN;if(Wr(St,t),i=St[0],0===St[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return ar(r);if(-.5===t)return 1/ar(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(er(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:cr(r)<1==(t===tr)?0:tr}(r,t)}if(Wr(St,r),u=St[0],0===St[1]){if(0===u)return function(r,t){return t===nr?tr:t===tr?0:t>0?fr(t)?r:0:fr(t)?ut(tr,r):tr}(r,t);if(1===r)return 1;if(-1===r&&fr(t))return-1;if(er(r))return r===nr?Nt(-0,-t):t<0?0:tr}if(r<0&&!1===ur(t))return(r-r)/(r-r);if(o=cr(r),n=u&ht|0,e=i&ht|0,a=i>>>31|0,f=(f=u>>>31|0)&&fr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Qr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*Ot*Ot:f*Ut*Ut;if(n>1072693248)return 0===a?f*Ot*Ot:f*Ut*Ut;v=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Yr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(Et,o)}else v=function(r,t,n){var e,o,u,i,f,a,c,l,y,v,p,b,s,d,m,w,j,g,A,h,_;return g=0,n<yt&&(g-=53,n=Qr(t*=9007199254740992)),g+=(n>>20)-lt|0,n=1072693248|(A=1048575&n|0),A<=235662?h=0:A<767610?h=1:(h=0,g+=1,n-=yt),i=Yr(o=(w=(t=ct(t,n))-(c=vt[h]))*(j=1/(t+c)),0),e=524288+(n>>1|536870912),a=ct(0,e+=h<<18),m=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Yr(a=3+(u=i*i)+(m+=(f=j*(w-i*a-i*(t-(a-c))))*(i+o)),0),s=(p=-7.028461650952758e-9*(y=Yr(y=(w=i*a)+(j=f*a+(m-(a-3-u))*o),0))+.9617966939259756*(j-(y-w))+bt[h])-((b=Yr(b=(v=.9617967009544373*y)+p+(l=pt[h])+(d=g),0))-d-l-v),r[0]=b,r[1]=s,r}(Et,o,n);if(y=(t-(c=Yr(t,0)))*v[0]+t*v[1],l=c*v[0],Wr(St,p=y+l),b=qr(St[0]),s=qr(St[1]),b>=_t){if(0!=(b-_t|s))return f*Ot*Ot;if(y+8008566259537294e-32>p-l)return f*Ot*Ot}else if((b&ht)>=1083231232){if(0!=(b-3230714880|s))return f*Ut*Ut;if(y<=p-l)return f*Ut*Ut}return p=function(r,t,n){var e,o,u,i,f,a,c,l,y,v;return y=((l=r&jt|0)>>20)-lt|0,c=0,l>1071644672&&(o=ct(0,((c=r+(At>>y+1)>>>0)&~(gt>>(y=((c&jt)>>20)-lt|0)))>>>0),c=(c&gt|At)>>20-y>>>0,r<0&&(c=-c),t-=o),r=qr(r=Qr(a=1-((a=(u=.6931471824645996*(o=Yr(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(v=o)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?wt(a,c):ct(a,r)}(b,l,y),f*p}var Tt=Math.ceil;var Ft=1048575;var It=.4342944818781689;function Pt(r){var t,n,e,o,u,i,f;return rr(r)||r<0?NaN:0===r?nr:(u=0,(n=Qr(r))<1048576&&(u-=54,n=Qr(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-lt|0,i=u+=(o=(n&=1048575)+614244&1048576|0)>>20|0,e=function(r){var t,n,e,o,u,i,f,a,c,l,y;return o=Qr(r),u=r-1,(Ft&2+o)<3?0===u?0:u*u*(.3333333333333333*u-.5):(l=(o&=Ft)-398458|0,y=440401-o|0,n=(c=(f=(i=u/(2+u))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+n,(l|=y)>0?i*((t=.5*u*u)+a)-t:i*(a-u))}(r=ct(r,n|1072693248^o)),f=3694239077158931e-28*i+25082946711645275e-27*((r-=1)+e),(f+=(r-(t=Yr(r,0))+e)*It+t*It)+.30102999566361177*i))}function xt(r){var t,n,e,o,u,i;return rr(r)||er(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,i=Pt(r),n=or(i),e=Tt(i),-324===n?1e-323*t:308===n?1e308*t:(o=Nt(10,n))+((u=Nt(10,e))-o)/2>r?t*o:t*u)}return function(r){return $(r,xt)}}));
//# sourceMappingURL=index.js.map
