// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterRound10=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&f&&f.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},g=Object.prototype.toString,_=g;var h=function(r){return _.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,P=g;var N=h,T=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},F=j()?T:N,I=Boolean.prototype.toString;var x=F,G=function(r){try{return I.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===x(r)))},B=m,L=H;var M=s,k=function(r){return B(r)||L(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},z="object"==typeof q?q:null;module.exports=z;var D=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var fr=function(){return/^\s*function\s*([^(]*)/i},ar=fr;s(ar,"REGEXP",fr());var cr=ar,lr=F;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},yr=vr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=F,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var gr=wr;var _r=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},hr=function(r){return gr(r).toLowerCase()},Ar=ir()?hr:_r;var Or=function(r){return"function"===Ar(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Sr=function(r){return"number"==typeof r},Pr=Number,Nr=Pr.prototype.toString;var Tr=F,Fr=Pr,Ir=function(r){try{return Nr.call(r),!0}catch(r){return!1}},xr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Fr||(xr?Ir(r):"[object Number]"===Tr(r)))},Vr=Sr,Hr=Gr;var Br=s,Lr=function(r){return Vr(r)||Hr(r)},Mr=Gr;Br(Lr,"isPrimitive",Sr),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=vr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var qr=function(r){return r.__proto__},zr=F,Dr=qr;var Jr=function(r){var t=Dr(r);return t||null===t?t:"[object Function]"===zr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=F,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,ft=O;var at=s,ct=Or,lt=Ur,vt=kr.isPrimitive,yt=Cr,pt=function(r,t){return it(t)?(ft(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,f;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return at(u={},"next",a),at(u,"return",c),yt&&ct(t[yt])&&at(u,yt,l),u;function a(){var r;return f?{done:!0}:(r=t.next()).done?(f=!0,r):{value:vt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[yt](),n,o)}},st=bt;var dt=function(r){return r!=r},mt=Number.POSITIVE_INFINITY,wt=Pr.NEGATIVE_INFINITY,jt=mt,gt=wt;var _t=function(r){return r===jt||r===gt},ht=Math.floor,At=ht;var Ot=function(r){return At(r)===r},Et=Ot;var Ut=function(r){return Et(r/2)};var St=function(r){return Ut(r>0?r-1:r+1)},Pt=Math.sqrt;var Nt=function(r){return Math.abs(r)},Tt=F,Ft="function"==typeof Uint32Array;var It="function"==typeof Uint32Array?Uint32Array:null,xt=function(r){return Ft&&r instanceof Uint32Array||"[object Uint32Array]"===Tt(r)},Gt=It;var Vt=function(){var r,t;if("function"!=typeof Gt)return!1;try{t=new Gt(t=[1,3.14,-3.14,4294967296,4294967297]),r=xt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Ht="function"==typeof Uint32Array?Uint32Array:void 0,Bt=function(){throw new Error("not implemented")},Lt=Vt()?Ht:Bt,Mt=F,kt="function"==typeof Float64Array;var Wt="function"==typeof Float64Array?Float64Array:null,Ct=function(r){return kt&&r instanceof Float64Array||"[object Float64Array]"===Mt(r)},Rt=Wt;var Xt=function(){var r,t;if("function"!=typeof Rt)return!1;try{t=new Rt([1,3.14,-3.14,NaN]),r=Ct(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Yt="function"==typeof Float64Array?Float64Array:void 0,qt=function(){throw new Error("not implemented")},zt=Xt()?Yt:qt,Dt=F,Jt="function"==typeof Uint8Array;var Kt="function"==typeof Uint8Array?Uint8Array:null,Qt=function(r){return Jt&&r instanceof Uint8Array||"[object Uint8Array]"===Dt(r)},Zt=Kt;var $t=function(){var r,t;if("function"!=typeof Zt)return!1;try{t=new Zt(t=[1,3.14,-3.14,256,257]),r=Qt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var rn="function"==typeof Uint8Array?Uint8Array:void 0,tn=function(){throw new Error("not implemented")},nn=$t()?rn:tn,en=F,on="function"==typeof Uint16Array;var un="function"==typeof Uint16Array?Uint16Array:null,fn=function(r){return on&&r instanceof Uint16Array||"[object Uint16Array]"===en(r)},an=un;var cn=function(){var r,t;if("function"!=typeof an)return!1;try{t=new an(t=[1,3.14,-3.14,65536,65537]),r=fn(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var ln,vn="function"==typeof Uint16Array?Uint16Array:void 0,yn=function(){throw new Error("not implemented")},pn={uint16:cn()?vn:yn,uint8:nn};(ln=new pn.uint16(1))[0]=4660;var bn,sn,dn=52===new pn.uint8(ln.buffer)[0];!0===dn?(bn=1,sn=0):(bn=0,sn=1);var mn=Lt,wn={HIGH:bn,LOW:sn},jn=new zt(1),gn=new mn(jn.buffer),_n=wn.HIGH,hn=wn.LOW;var An=function(r,t){return jn[0]=t,r[0]=gn[_n],r[1]=gn[hn],r};var On=function(r,t){return 1===arguments.length?An([0,0],r):An(r,t)},En=On,Un=Lt,Sn=!0===dn?0:1,Pn=new zt(1),Nn=new Un(Pn.buffer);var Tn=function(r,t){return Pn[0]=r,Nn[Sn]=t>>>0,Pn[0]},Fn=Tn;var In=function(r){return 0|r},xn=Lt,Gn=!0===dn?1:0,Vn=new zt(1),Hn=new xn(Vn.buffer);var Bn,Ln,Mn=function(r){return Vn[0]=r,Hn[Gn]};!0===dn?(Bn=1,Ln=0):(Bn=0,Ln=1);var kn=Lt,Wn={HIGH:Bn,LOW:Ln},Cn=new zt(1),Rn=new kn(Cn.buffer),Xn=Wn.HIGH,Yn=Wn.LOW;var qn=function(r,t){return Rn[Xn]=r,Rn[Yn]=t,Cn[0]},zn=qn,Dn=En,Jn=Mn,Kn=zn,Qn=[0,0];var Zn=function(r,t){var n,e;return Dn(Qn,r),n=Qn[0],n&=2147483647,e=Jn(t),Kn(n|=e&=2147483648,Qn[1])},$n=St,re=Zn,te=wt,ne=mt;var ee=function(r,t){return t===te?ne:t===ne?0:t>0?$n(t)?r:0:$n(t)?re(ne,r):ne},oe=Mn;var ue=function(r,t){return(2147483647&oe(r))<=1072693247?t<0?1/0:0:t>0?1/0:0},ie=Nt,fe=mt;var ae=function(r,t){return-1===r?(r-r)/(r-r):1===r?1:ie(r)<1==(t===fe)?0:fe},ce=Lt,le=!0===dn?1:0,ve=new zt(1),ye=new ce(ve.buffer);var pe=function(r,t){return ve[0]=r,ye[le]=t>>>0,ve[0]},be=pe;var se=Mn,de=Fn,me=be,we=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},je=1048576,ge=[1,1.5],_e=[0,.5849624872207642],he=[0,1.350039202129749e-8];var Ae=Fn,Oe=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Ee=_t,Ue=dt,Se=Nt;var Pe=function(r,t){return Ue(t)||Ee(t)?(r[0]=t,r[1]=0,r):0!==t&&Se(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Ne=function(r,t){return 1===arguments.length?Pe([0,0],r):Pe(r,t)},Te=Mn;var Fe=function(r){var t=Te(r);return(t=(2146435072&t)>>>20)-1023|0},Ie=mt,xe=wt,Ge=dt,Ve=_t,He=Zn,Be=Ne,Le=Fe,Me=En,ke=zn,We=[0,0],Ce=[0,0];var Re=function(r,t){var n,e;return 0===t||0===r||Ge(r)||Ve(r)?r:(Be(We,r),t+=We[1],(t+=Le(r=We[0]))<-1074?He(0,r):t>1023?r<0?xe:Ie:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Me(Ce,r),n=Ce[0],n&=2148532223,e*ke(n|=t+1023<<20,Ce[1])))};var Xe=Mn,Ye=be,qe=Fn,ze=In,De=Re,Je=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Ke=2147483647,Qe=1048575,Ze=1048576;var $e=dt,ro=St,to=_t,no=Ot,eo=Pt,oo=Nt,uo=En,io=Fn,fo=In,ao=wt,co=mt,lo=ee,vo=ue,yo=ae,po=function(r,t,n){var e,o,u,i,f,a,c,l,v,y,p,b,s,d,m,w,j,g,_,h;return g=0,n<je&&(g-=53,n=se(t*=9007199254740992)),g+=(n>>20)-1023|0,n=1072693248|(_=1048575&n|0),_<=235662?h=0:_<767610?h=1:(h=0,g+=1,n-=je),e=524288+(n>>1|536870912),f=(j=1/((t=me(t,n))+(c=ge[h])))*((w=t-c)-(i=de(o=w*j,0))*(a=me(0,e+=h<<18))-i*(t-(a-c))),m=(u=o*o)*u*we(u),a=de(a=3+(u=i*i)+(m+=f*(i+o)),0),s=(p=-7.028461650952758e-9*(v=de(v=(w=i*a)+(j=f*a+(m-(a-3-u))*o),0))+.9617966939259756*(j-(v-w))+he[h])-((b=de(b=(y=.9617967009544373*v)+p+(l=_e[h])+(d=g),0))-d-l-y),r[0]=b,r[1]=s,r},bo=function(r,t){var n,e,o,u,i;return n=(i=1.9259629911266175e-8*(o=t-1)-1.4426950408889634*(o*o*Oe(o)))-((e=Ae(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r},so=function(r,t,n){var e,o,u,i,f,a,c,l,v;return v=((l=r&Ke|0)>>20)-1023|0,c=0,l>1071644672&&(o=Ye(0,((c=r+(Ze>>v+1)>>>0)&~(Qe>>(v=((c&Ke)>>20)-1023|0)))>>>0),c=(c&Qe|Ze)>>20-v>>>0,r<0&&(c=-c),t-=o),f=(i=.6931471805599453*(n-((o=qe(o=n+t,0))-t))+-1.904654299957768e-9*o)-((a=(u=.6931471824645996*o)+i)-u),e=a-(o=a*a)*Je(o),r=Xe(a=1-(a*e/(e-2)-(f+a*f)-a)),r=ze(r),a=(r+=c<<20>>>0)>>20<=0?De(a,c):Ye(a,r)},mo=2147483647,wo=1083179008,jo=1e300,go=1e-300,_o=[0,0],ho=[0,0];var Ao=function r(t,n){var e,o,u,i,f,a,c,l,v,y,p,b,s,d;if($e(t)||$e(n))return NaN;if(uo(_o,n),f=_o[0],0===_o[1]){if(0===n)return 1;if(1===n)return t;if(-1===n)return 1/t;if(.5===n)return eo(t);if(-.5===n)return 1/eo(t);if(2===n)return t*t;if(3===n)return t*t*t;if(4===n)return(t*=t)*t;if(to(n))return yo(t,n)}if(uo(_o,t),i=_o[0],0===_o[1]){if(0===i)return lo(t,n);if(1===t)return 1;if(-1===t&&ro(n))return-1;if(to(t))return t===ao?r(-0,-n):n<0?0:co}if(t<0&&!1===no(n))return(t-t)/(t-t);if(u=oo(t),e=i&mo|0,o=f&mo|0,c=f>>>31|0,a=(a=i>>>31|0)&&ro(n)?-1:1,o>1105199104){if(o>1139802112)return vo(t,n);if(e<1072693247)return 1===c?a*jo*jo:a*go*go;if(e>1072693248)return 0===c?a*jo*jo:a*go*go;p=bo(ho,u)}else p=po(ho,u,e);if(y=(n-(l=io(n,0)))*p[0]+n*p[1],v=l*p[0],uo(_o,b=y+v),s=fo(_o[0]),d=fo(_o[1]),s>=wo){if(0!=(s-wo|d))return a*jo*jo;if(y+8008566259537294e-32>b-v)return a*jo*jo}else if((s&mo)>=1083231232){if(0!=(s-3230714880|d))return a*go*go;if(y<=b-v)return a*go*go}return a*(b=so(s,v,y))},Oo=Ao,Eo=Math.ceil;var Uo=Mn,So=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Po=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},No=1048575;var To=function(r){var t,n,e,o,u,i,f,a,c,l;return e=Uo(r),o=r-1,(No&2+e)<3?0===o?0:o*o*(.3333333333333333*o-.5):(c=(e&=No)-398458|0,l=440401-e|0,n=(a=(i=(u=o/(2+o))*u)*i)*So(a),f=i*Po(a)+n,(c|=l)>0?u*((t=.5*o*o)+f)-t:u*(f-o))},Fo=Mn,Io=be,xo=Fn,Go=dt,Vo=wt,Ho=To,Bo=.4342944818781689;var Lo=function(r){var t,n,e,o,u,i,f;return Go(r)||r<0?NaN:0===r?Vo:(u=0,(n=Fo(r))<1048576&&(u-=54,n=Fo(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-1023|0,r=Io(r,(n&=1048575)|1072693248^(o=n+614244&1048576|0)),i=u+=o>>20|0,e=Ho(r),f=3694239077158931e-28*i+25082946711645275e-27*((r-=1)+e),(f+=(r-(t=xo(r,0))+e)*Bo+t*Bo)+.30102999566361177*i))},Mo=dt,ko=_t,Wo=Oo,Co=ht,Ro=Eo,Xo=Lo;var Yo=function(r){var t,n,e,o,u,i;return Mo(r)||ko(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,i=Xo(r),n=Co(i),e=Ro(i),-324===n?1e-323*t:308===n?1e308*t:(o=Wo(10,n))+((u=Wo(10,e))-o)/2>r?t*o:t*u)};return function(r){return st(r,Yo)}}));
//# sourceMappingURL=browser.js.map
