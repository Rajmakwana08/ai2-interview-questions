(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))p(D);new MutationObserver(D=>{for(const P of D)if(P.type==="childList")for(const he of P.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&p(he)}).observe(document,{childList:!0,subtree:!0});function K(D){const P={};return D.integrity&&(P.integrity=D.integrity),D.referrerPolicy&&(P.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?P.credentials="include":D.crossOrigin==="anonymous"?P.credentials="omit":P.credentials="same-origin",P}function p(D){if(D.ep)return;D.ep=!0;const P=K(D);fetch(D.href,P)}})();var iu={exports:{}},vi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Qh(){if(dm)return vi;dm=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.fragment");function K(p,D,P){var he=null;if(P!==void 0&&(he=""+P),D.key!==void 0&&(he=""+D.key),"key"in D){P={};for(var De in D)De!=="key"&&(P[De]=D[De])}else P=D;return D=P.ref,{$$typeof:M,type:p,key:he,ref:D!==void 0?D:null,props:P}}return vi.Fragment=fe,vi.jsx=K,vi.jsxs=K,vi}var hm;function Ph(){return hm||(hm=1,iu.exports=Qh()),iu.exports}var Ue=Ph(),lu={exports:{}},B={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function Vh(){if(pm)return B;pm=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),he=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),re=Symbol.iterator;function Pe(c){return c===null||typeof c!="object"?null:(c=re&&c[re]||c["@@iterator"],typeof c=="function"?c:null)}var Le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ie=Object.assign,Ct={};function Ve(c,b,N){this.props=c,this.context=b,this.refs=Ct,this.updater=N||Le}Ve.prototype.isReactComponent={},Ve.prototype.setState=function(c,b){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,b,"setState")},Ve.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Pt(){}Pt.prototype=Ve.prototype;function Re(c,b,N){this.props=c,this.context=b,this.refs=Ct,this.updater=N||Le}var st=Re.prototype=new Pt;st.constructor=Re,Ie(st,Ve.prototype),st.isPureReactComponent=!0;var bt=Array.isArray;function ke(){}var X={H:null,A:null,T:null,S:null},Ge=Object.prototype.hasOwnProperty;function Et(c,b,N){var x=N.ref;return{$$typeof:M,type:c,key:b,ref:x!==void 0?x:null,props:N}}function Fa(c,b){return Et(c.type,b,c.props)}function Tt(c){return typeof c=="object"&&c!==null&&c.$$typeof===M}function Fe(c){var b={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(N){return b[N]})}var Sa=/\/+/g;function wt(c,b){return typeof c=="object"&&c!==null&&c.key!=null?Fe(""+c.key):b.toString(36)}function yt(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(ke,ke):(c.status="pending",c.then(function(b){c.status==="pending"&&(c.status="fulfilled",c.value=b)},function(b){c.status==="pending"&&(c.status="rejected",c.reason=b)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function A(c,b,N,x,U){var G=typeof c;(G==="undefined"||G==="boolean")&&(c=null);var J=!1;if(c===null)J=!0;else switch(G){case"bigint":case"string":case"number":J=!0;break;case"object":switch(c.$$typeof){case M:case fe:J=!0;break;case W:return J=c._init,A(J(c._payload),b,N,x,U)}}if(J)return U=U(c),J=x===""?"."+wt(c,0):x,bt(U)?(N="",J!=null&&(N=J.replace(Sa,"$&/")+"/"),A(U,b,N,"",function(Mn){return Mn})):U!=null&&(Tt(U)&&(U=Fa(U,N+(U.key==null||c&&c.key===U.key?"":(""+U.key).replace(Sa,"$&/")+"/")+J)),b.push(U)),1;J=0;var He=x===""?".":x+":";if(bt(c))for(var pe=0;pe<c.length;pe++)x=c[pe],G=He+wt(x,pe),J+=A(x,b,N,G,U);else if(pe=Pe(c),typeof pe=="function")for(c=pe.call(c),pe=0;!(x=c.next()).done;)x=x.value,G=He+wt(x,pe++),J+=A(x,b,N,G,U);else if(G==="object"){if(typeof c.then=="function")return A(yt(c),b,N,x,U);throw b=String(c),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return J}function T(c,b,N){if(c==null)return c;var x=[],U=0;return A(c,x,"","",function(G){return b.call(N,G,U++)}),x}function H(c){if(c._status===-1){var b=c._result;b=b(),b.then(function(N){(c._status===0||c._status===-1)&&(c._status=1,c._result=N)},function(N){(c._status===0||c._status===-1)&&(c._status=2,c._result=N)}),c._status===-1&&(c._status=0,c._result=b)}if(c._status===1)return c._result.default;throw c._result}var te=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},le={map:T,forEach:function(c,b,N){T(c,function(){b.apply(this,arguments)},N)},count:function(c){var b=0;return T(c,function(){b++}),b},toArray:function(c){return T(c,function(b){return b})||[]},only:function(c){if(!Tt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return B.Activity=I,B.Children=le,B.Component=Ve,B.Fragment=K,B.Profiler=D,B.PureComponent=Re,B.StrictMode=p,B.Suspense=R,B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,B.__COMPILER_RUNTIME={__proto__:null,c:function(c){return X.H.useMemoCache(c)}},B.cache=function(c){return function(){return c.apply(null,arguments)}},B.cacheSignal=function(){return null},B.cloneElement=function(c,b,N){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var x=Ie({},c.props),U=c.key;if(b!=null)for(G in b.key!==void 0&&(U=""+b.key),b)!Ge.call(b,G)||G==="key"||G==="__self"||G==="__source"||G==="ref"&&b.ref===void 0||(x[G]=b[G]);var G=arguments.length-2;if(G===1)x.children=N;else if(1<G){for(var J=Array(G),He=0;He<G;He++)J[He]=arguments[He+2];x.children=J}return Et(c.type,U,x)},B.createContext=function(c){return c={$$typeof:he,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:P,_context:c},c},B.createElement=function(c,b,N){var x,U={},G=null;if(b!=null)for(x in b.key!==void 0&&(G=""+b.key),b)Ge.call(b,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(U[x]=b[x]);var J=arguments.length-2;if(J===1)U.children=N;else if(1<J){for(var He=Array(J),pe=0;pe<J;pe++)He[pe]=arguments[pe+2];U.children=He}if(c&&c.defaultProps)for(x in J=c.defaultProps,J)U[x]===void 0&&(U[x]=J[x]);return Et(c,G,U)},B.createRef=function(){return{current:null}},B.forwardRef=function(c){return{$$typeof:De,render:c}},B.isValidElement=Tt,B.lazy=function(c){return{$$typeof:W,_payload:{_status:-1,_result:c},_init:H}},B.memo=function(c,b){return{$$typeof:E,type:c,compare:b===void 0?null:b}},B.startTransition=function(c){var b=X.T,N={};X.T=N;try{var x=c(),U=X.S;U!==null&&U(N,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(ke,te)}catch(G){te(G)}finally{b!==null&&N.types!==null&&(b.types=N.types),X.T=b}},B.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},B.use=function(c){return X.H.use(c)},B.useActionState=function(c,b,N){return X.H.useActionState(c,b,N)},B.useCallback=function(c,b){return X.H.useCallback(c,b)},B.useContext=function(c){return X.H.useContext(c)},B.useDebugValue=function(){},B.useDeferredValue=function(c,b){return X.H.useDeferredValue(c,b)},B.useEffect=function(c,b){return X.H.useEffect(c,b)},B.useEffectEvent=function(c){return X.H.useEffectEvent(c)},B.useId=function(){return X.H.useId()},B.useImperativeHandle=function(c,b,N){return X.H.useImperativeHandle(c,b,N)},B.useInsertionEffect=function(c,b){return X.H.useInsertionEffect(c,b)},B.useLayoutEffect=function(c,b){return X.H.useLayoutEffect(c,b)},B.useMemo=function(c,b){return X.H.useMemo(c,b)},B.useOptimistic=function(c,b){return X.H.useOptimistic(c,b)},B.useReducer=function(c,b,N){return X.H.useReducer(c,b,N)},B.useRef=function(c){return X.H.useRef(c)},B.useState=function(c){return X.H.useState(c)},B.useSyncExternalStore=function(c,b,N){return X.H.useSyncExternalStore(c,b,N)},B.useTransition=function(){return X.H.useTransition()},B.version="19.2.7",B}var gm;function cu(){return gm||(gm=1,lu.exports=Vh()),lu.exports}var Tm=cu(),su={exports:{}},Si={},ou={exports:{}},uu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Kh(){return ym||(ym=1,(function(M){function fe(A,T){var H=A.length;A.push(T);e:for(;0<H;){var te=H-1>>>1,le=A[te];if(0<D(le,T))A[te]=T,A[H]=le,H=te;else break e}}function K(A){return A.length===0?null:A[0]}function p(A){if(A.length===0)return null;var T=A[0],H=A.pop();if(H!==T){A[0]=H;e:for(var te=0,le=A.length,c=le>>>1;te<c;){var b=2*(te+1)-1,N=A[b],x=b+1,U=A[x];if(0>D(N,H))x<le&&0>D(U,N)?(A[te]=U,A[x]=H,te=x):(A[te]=N,A[b]=H,te=b);else if(x<le&&0>D(U,H))A[te]=U,A[x]=H,te=x;else break e}}return T}function D(A,T){var H=A.sortIndex-T.sortIndex;return H!==0?H:A.id-T.id}if(M.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var P=performance;M.unstable_now=function(){return P.now()}}else{var he=Date,De=he.now();M.unstable_now=function(){return he.now()-De}}var R=[],E=[],W=1,I=null,re=3,Pe=!1,Le=!1,Ie=!1,Ct=!1,Ve=typeof setTimeout=="function"?setTimeout:null,Pt=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;function st(A){for(var T=K(E);T!==null;){if(T.callback===null)p(E);else if(T.startTime<=A)p(E),T.sortIndex=T.expirationTime,fe(R,T);else break;T=K(E)}}function bt(A){if(Ie=!1,st(A),!Le)if(K(R)!==null)Le=!0,ke||(ke=!0,Fe());else{var T=K(E);T!==null&&yt(bt,T.startTime-A)}}var ke=!1,X=-1,Ge=5,Et=-1;function Fa(){return Ct?!0:!(M.unstable_now()-Et<Ge)}function Tt(){if(Ct=!1,ke){var A=M.unstable_now();Et=A;var T=!0;try{e:{Le=!1,Ie&&(Ie=!1,Pt(X),X=-1),Pe=!0;var H=re;try{t:{for(st(A),I=K(R);I!==null&&!(I.expirationTime>A&&Fa());){var te=I.callback;if(typeof te=="function"){I.callback=null,re=I.priorityLevel;var le=te(I.expirationTime<=A);if(A=M.unstable_now(),typeof le=="function"){I.callback=le,st(A),T=!0;break t}I===K(R)&&p(R),st(A)}else p(R);I=K(R)}if(I!==null)T=!0;else{var c=K(E);c!==null&&yt(bt,c.startTime-A),T=!1}}break e}finally{I=null,re=H,Pe=!1}T=void 0}}finally{T?Fe():ke=!1}}}var Fe;if(typeof Re=="function")Fe=function(){Re(Tt)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,wt=Sa.port2;Sa.port1.onmessage=Tt,Fe=function(){wt.postMessage(null)}}else Fe=function(){Ve(Tt,0)};function yt(A,T){X=Ve(function(){A(M.unstable_now())},T)}M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(A){A.callback=null},M.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<A?Math.floor(1e3/A):5},M.unstable_getCurrentPriorityLevel=function(){return re},M.unstable_next=function(A){switch(re){case 1:case 2:case 3:var T=3;break;default:T=re}var H=re;re=T;try{return A()}finally{re=H}},M.unstable_requestPaint=function(){Ct=!0},M.unstable_runWithPriority=function(A,T){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var H=re;re=A;try{return T()}finally{re=H}},M.unstable_scheduleCallback=function(A,T,H){var te=M.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?te+H:te):H=te,A){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=H+le,A={id:W++,callback:T,priorityLevel:A,startTime:H,expirationTime:le,sortIndex:-1},H>te?(A.sortIndex=H,fe(E,A),K(R)===null&&A===K(E)&&(Ie?(Pt(X),X=-1):Ie=!0,yt(bt,H-te))):(A.sortIndex=le,fe(R,A),Le||Pe||(Le=!0,ke||(ke=!0,Fe()))),A},M.unstable_shouldYield=Fa,M.unstable_wrapCallback=function(A){var T=re;return function(){var H=re;re=T;try{return A.apply(this,arguments)}finally{re=H}}}})(uu)),uu}var Am;function Wh(){return Am||(Am=1,ou.exports=Kh()),ou.exports}var ru={exports:{}},Oe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function Jh(){if(vm)return Oe;vm=1;var M=cu();function fe(R){var E="https://react.dev/errors/"+R;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)E+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+R+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function K(){}var p={d:{f:K,r:function(){throw Error(fe(522))},D:K,C:K,L:K,m:K,X:K,S:K,M:K},p:0,findDOMNode:null},D=Symbol.for("react.portal");function P(R,E,W){var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:I==null?null:""+I,children:R,containerInfo:E,implementation:W}}var he=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function De(R,E){if(R==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,Oe.createPortal=function(R,E){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(fe(299));return P(R,E,null,W)},Oe.flushSync=function(R){var E=he.T,W=p.p;try{if(he.T=null,p.p=2,R)return R()}finally{he.T=E,p.p=W,p.d.f()}},Oe.preconnect=function(R,E){typeof R=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,p.d.C(R,E))},Oe.prefetchDNS=function(R){typeof R=="string"&&p.d.D(R)},Oe.preinit=function(R,E){if(typeof R=="string"&&E&&typeof E.as=="string"){var W=E.as,I=De(W,E.crossOrigin),re=typeof E.integrity=="string"?E.integrity:void 0,Pe=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;W==="style"?p.d.S(R,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:I,integrity:re,fetchPriority:Pe}):W==="script"&&p.d.X(R,{crossOrigin:I,integrity:re,fetchPriority:Pe,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Oe.preinitModule=function(R,E){if(typeof R=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var W=De(E.as,E.crossOrigin);p.d.M(R,{crossOrigin:W,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&p.d.M(R)},Oe.preload=function(R,E){if(typeof R=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var W=E.as,I=De(W,E.crossOrigin);p.d.L(R,W,{crossOrigin:I,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Oe.preloadModule=function(R,E){if(typeof R=="string")if(E){var W=De(E.as,E.crossOrigin);p.d.m(R,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:W,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else p.d.m(R)},Oe.requestFormReset=function(R){p.d.r(R)},Oe.unstable_batchedUpdates=function(R,E){return R(E)},Oe.useFormState=function(R,E,W){return he.H.useFormState(R,E,W)},Oe.useFormStatus=function(){return he.H.useHostTransitionStatus()},Oe.version="19.2.7",Oe}var Sm;function $h(){if(Sm)return ru.exports;Sm=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),ru.exports=Jh(),ru.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function ep(){if(bm)return Si;bm=1;var M=Wh(),fe=cu(),K=$h();function p(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function P(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function he(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function De(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(P(e)!==e)throw Error(p(188))}function E(e){var t=e.alternate;if(!t){if(t=P(e),t===null)throw Error(p(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===a)return R(i),e;if(l===n)return R(i),t;l=l.sibling}throw Error(p(188))}if(a.return!==n.return)a=i,n=l;else{for(var s=!1,o=i.child;o;){if(o===a){s=!0,a=i,n=l;break}if(o===n){s=!0,n=i,a=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===a){s=!0,a=l,n=i;break}if(o===n){s=!0,n=l,a=i;break}o=o.sibling}if(!s)throw Error(p(189))}}if(a.alternate!==n)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var I=Object.assign,re=Symbol.for("react.element"),Pe=Symbol.for("react.transitional.element"),Le=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Ct=Symbol.for("react.strict_mode"),Ve=Symbol.for("react.profiler"),Pt=Symbol.for("react.consumer"),Re=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),bt=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Fa=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function Fe(e){return e===null||typeof e!="object"?null:(e=Tt&&e[Tt]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case Ve:return"Profiler";case Ct:return"StrictMode";case bt:return"Suspense";case ke:return"SuspenseList";case Et:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Le:return"Portal";case Re:return e.displayName||"Context";case Pt:return(e._context.displayName||"Context")+".Consumer";case st:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:wt(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return wt(e(t))}catch{}}return null}var yt=Array.isArray,A=fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=K.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},te=[],le=-1;function c(e){return{current:e}}function b(e){0>le||(e.current=te[le],te[le]=null,le--)}function N(e,t){le++,te[le]=e.current,e.current=t}var x=c(null),U=c(null),G=c(null),J=c(null);function He(e,t){switch(N(G,t),N(U,e),N(x,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Uf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Uf(t),e=Lf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}b(x),N(x,e)}function pe(){b(x),b(U),b(G)}function Mn(e){e.memoizedState!==null&&N(J,e);var t=x.current,a=Lf(t,e.type);t!==a&&(N(U,e),N(x,a))}function bi(e){U.current===e&&(b(x),b(U)),J.current===e&&(b(J),pi._currentValue=H)}var Gl,fu;function ba(e){if(Gl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Gl=t&&t[1]||"",fu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gl+e+fu}var Fl=!1;function ql(e,t){if(!e||Fl)return"";Fl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(g){var h=g}Reflect.construct(e,[],S)}else{try{S.call()}catch(g){h=g}e.call(S.prototype)}}else{try{throw Error()}catch(g){h=g}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),s=l[0],o=l[1];if(s&&o){var u=s.split(`
`),d=o.split(`
`);for(i=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;i<d.length&&!d[i].includes("DetermineComponentFrameRoot");)i++;if(n===u.length||i===d.length)for(n=u.length-1,i=d.length-1;1<=n&&0<=i&&u[n]!==d[i];)i--;for(;1<=n&&0<=i;n--,i--)if(u[n]!==d[i]){if(n!==1||i!==1)do if(n--,i--,0>i||u[n]!==d[i]){var y=`
`+u[n].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=n&&0<=i);break}}}finally{Fl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ba(a):""}function Nm(e,t){switch(e.tag){case 26:case 27:case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return e.child!==t&&t!==null?ba("Suspense Fallback"):ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return ql(e.type,!1);case 11:return ql(e.type.render,!1);case 1:return ql(e.type,!0);case 31:return ba("Activity");default:return""}}function mu(e){try{var t="",a=null;do t+=Nm(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var _l=Object.prototype.hasOwnProperty,Yl=M.unstable_scheduleCallback,Xl=M.unstable_cancelCallback,zm=M.unstable_shouldYield,Mm=M.unstable_requestPaint,Ke=M.unstable_now,xm=M.unstable_getCurrentPriorityLevel,du=M.unstable_ImmediatePriority,hu=M.unstable_UserBlockingPriority,Ei=M.unstable_NormalPriority,Cm=M.unstable_LowPriority,pu=M.unstable_IdlePriority,wm=M.log,Rm=M.unstable_setDisableYieldValue,xn=null,We=null;function Vt(e){if(typeof wm=="function"&&Rm(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(xn,e)}catch{}}var Je=Math.clz32?Math.clz32:Im,Om=Math.log,Dm=Math.LN2;function Im(e){return e>>>=0,e===0?32:31-(Om(e)/Dm|0)|0}var Ti=256,Ni=262144,zi=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=n&134217727;return o!==0?(n=o&~l,n!==0?i=Ea(n):(s&=o,s!==0?i=Ea(s):a||(a=o&~e,a!==0&&(i=Ea(a))))):(o=n&~l,o!==0?i=Ea(o):s!==0?i=Ea(s):a||(a=n&~e,a!==0&&(i=Ea(a)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:i}function Cn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Hm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gu(){var e=zi;return zi<<=1,(zi&62914560)===0&&(zi=4194304),e}function jl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function wn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bm(e,t,a,n,i,l){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,u=e.expirationTimes,d=e.hiddenUpdates;for(a=s&~a;0<a;){var y=31-Je(a),S=1<<y;o[y]=0,u[y]=-1;var h=d[y];if(h!==null)for(d[y]=null,y=0;y<h.length;y++){var g=h[y];g!==null&&(g.lane&=-536870913)}a&=~S}n!==0&&yu(e,n,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~t))}function yu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Je(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Au(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Je(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function vu(e,t){var a=t&-t;return a=(a&42)!==0?1:Zl(a),(a&(e.suspendedLanes|t))!==0?0:a}function Zl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ql(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Su(){var e=T.p;return e!==0?e:(e=window.event,e===void 0?32:sm(e.type))}function bu(e,t){var a=T.p;try{return T.p=e,t()}finally{T.p=a}}var Kt=Math.random().toString(36).slice(2),ze="__reactFiber$"+Kt,qe="__reactProps$"+Kt,qa="__reactContainer$"+Kt,Pl="__reactEvents$"+Kt,Um="__reactListeners$"+Kt,Lm="__reactHandles$"+Kt,Eu="__reactResources$"+Kt,Rn="__reactMarker$"+Kt;function Vl(e){delete e[ze],delete e[qe],delete e[Pl],delete e[Um],delete e[Lm]}function _a(e){var t=e[ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[qa]||a[ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xf(e);e!==null;){if(a=e[ze])return a;e=Xf(e)}return t}e=a,a=e.parentNode}return null}function Ya(e){if(e=e[ze]||e[qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function On(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(p(33))}function Xa(e){var t=e[Eu];return t||(t=e[Eu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Te(e){e[Rn]=!0}var Tu=new Set,Nu={};function Ta(e,t){ja(e,t),ja(e+"Capture",t)}function ja(e,t){for(Nu[e]=t,e=0;e<t.length;e++)Tu.add(t[e])}var km=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zu={},Mu={};function Gm(e){return _l.call(Mu,e)?!0:_l.call(zu,e)?!1:km.test(e)?Mu[e]=!0:(zu[e]=!0,!1)}function xi(e,t,a){if(Gm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ci(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Rt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fm(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kl(e){if(!e._valueTracker){var t=xu(e)?"checked":"value";e._valueTracker=Fm(e,t,""+e[t])}}function Cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=xu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qm=/[\n"\\]/g;function ut(e){return e.replace(qm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Wl(e,t,a,n,i,l,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ot(t)):e.value!==""+ot(t)&&(e.value=""+ot(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Jl(e,s,ot(t)):a!=null?Jl(e,s,ot(a)):n!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ot(o):e.removeAttribute("name")}function wu(e,t,a,n,i,l,s,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Kl(e);return}a=a!=null?""+ot(a):"",t=t!=null?""+ot(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Kl(e)}function Jl(e,t,a){t==="number"&&wi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Za(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ot(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ru(e,t,a){if(t!=null&&(t=""+ot(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ot(a):""}function Ou(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(p(92));if(yt(n)){if(1<n.length)throw Error(p(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ot(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Kl(e)}function Qa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var _m=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Du(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||_m.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Iu(e,t,a){if(t!=null&&typeof t!="object")throw Error(p(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Du(e,i,n)}else for(var l in t)t.hasOwnProperty(l)&&Du(e,l,t[l])}function $l(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ym=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return Xm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var es=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,Va=null;function Hu(e){var t=Ya(e);if(t&&(e=t.stateNode)){var a=e[qe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Wl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[qe]||null;if(!i)throw Error(p(90));Wl(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Cu(n)}break e;case"textarea":Ru(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Za(e,!!a.multiple,t,!1)}}}var as=!1;function Bu(e,t,a){if(as)return e(t,a);as=!0;try{var n=e(t);return n}finally{if(as=!1,(Pa!==null||Va!==null)&&(yl(),Pa&&(t=Pa,e=Va,Va=Pa=null,Hu(t),e)))for(t=0;t<e.length;t++)Hu(e[t])}}function Dn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[qe]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(p(231,t,typeof a));return a}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=!1;if(Dt)try{var In={};Object.defineProperty(In,"passive",{get:function(){ns=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{ns=!1}var Wt=null,is=null,Oi=null;function Uu(){if(Oi)return Oi;var e,t=is,a=t.length,n,i="value"in Wt?Wt.value:Wt.textContent,l=i.length;for(e=0;e<a&&t[e]===i[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===i[l-n];n++);return Oi=i.slice(e,1<n?1-n:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function Lu(){return!1}function _e(e){function t(a,n,i,l,s){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ii:Lu,this.isPropagationStopped=Lu,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=_e(Na),Hn=I({},Na,{view:0,detail:0}),jm=_e(Hn),ls,ss,Bn,Bi=I({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(ls=e.screenX-Bn.screenX,ss=e.screenY-Bn.screenY):ss=ls=0,Bn=e),ls)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),ku=_e(Bi),Zm=I({},Bi,{dataTransfer:0}),Qm=_e(Zm),Pm=I({},Hn,{relatedTarget:0}),os=_e(Pm),Vm=I({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),Km=_e(Vm),Wm=I({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jm=_e(Wm),$m=I({},Na,{data:0}),Gu=_e($m),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ad[e])?!!t[e]:!1}function us(){return nd}var id=I({},Hn,{key:function(e){if(e.key){var t=ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ld=_e(id),sd=I({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=_e(sd),od=I({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),ud=_e(od),rd=I({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),cd=_e(rd),fd=I({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),md=_e(fd),dd=I({},Na,{newState:0,oldState:0}),hd=_e(dd),pd=[9,13,27,32],rs=Dt&&"CompositionEvent"in window,Un=null;Dt&&"documentMode"in document&&(Un=document.documentMode);var gd=Dt&&"TextEvent"in window&&!Un,qu=Dt&&(!rs||Un&&8<Un&&11>=Un),_u=" ",Yu=!1;function Xu(e,t){switch(e){case"keyup":return pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function yd(e,t){switch(e){case"compositionend":return ju(t);case"keypress":return t.which!==32?null:(Yu=!0,_u);case"textInput":return e=t.data,e===_u&&Yu?null:e;default:return null}}function Ad(e,t){if(Ka)return e==="compositionend"||!rs&&Xu(e,t)?(e=Uu(),Oi=is=Wt=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qu&&t.locale!=="ko"?null:t.data;default:return null}}var vd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vd[e.type]:t==="textarea"}function Qu(e,t,a,n){Pa?Va?Va.push(n):Va=[n]:Pa=n,t=Nl(t,"onChange"),0<t.length&&(a=new Hi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ln=null,kn=null;function Sd(e){Rf(e,0)}function Ui(e){var t=On(e);if(Cu(t))return e}function Pu(e,t){if(e==="change")return t}var Vu=!1;if(Dt){var cs;if(Dt){var fs="oninput"in document;if(!fs){var Ku=document.createElement("div");Ku.setAttribute("oninput","return;"),fs=typeof Ku.oninput=="function"}cs=fs}else cs=!1;Vu=cs&&(!document.documentMode||9<document.documentMode)}function Wu(){Ln&&(Ln.detachEvent("onpropertychange",Ju),kn=Ln=null)}function Ju(e){if(e.propertyName==="value"&&Ui(kn)){var t=[];Qu(t,kn,e,ts(e)),Bu(Sd,t)}}function bd(e,t,a){e==="focusin"?(Wu(),Ln=t,kn=a,Ln.attachEvent("onpropertychange",Ju)):e==="focusout"&&Wu()}function Ed(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(kn)}function Td(e,t){if(e==="click")return Ui(t)}function Nd(e,t){if(e==="input"||e==="change")return Ui(t)}function zd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:zd;function Gn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!_l.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function $u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function er(e,t){var a=$u(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$u(a)}}function tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=wi(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Md=Dt&&"documentMode"in document&&11>=document.documentMode,Wa=null,ds=null,Fn=null,hs=!1;function nr(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hs||Wa==null||Wa!==wi(n)||(n=Wa,"selectionStart"in n&&ms(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Fn&&Gn(Fn,n)||(Fn=n,n=Nl(ds,"onSelect"),0<n.length&&(t=new Hi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Wa)))}function za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ja={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},ps={},ir={};Dt&&(ir=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function Ma(e){if(ps[e])return ps[e];if(!Ja[e])return e;var t=Ja[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ir)return ps[e]=t[a];return e}var lr=Ma("animationend"),sr=Ma("animationiteration"),or=Ma("animationstart"),xd=Ma("transitionrun"),Cd=Ma("transitionstart"),wd=Ma("transitioncancel"),ur=Ma("transitionend"),rr=new Map,gs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gs.push("scrollEnd");function At(e,t){rr.set(e,t),Ta(t,[e])}var Li=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},rt=[],$a=0,ys=0;function ki(){for(var e=$a,t=ys=$a=0;t<e;){var a=rt[t];rt[t++]=null;var n=rt[t];rt[t++]=null;var i=rt[t];rt[t++]=null;var l=rt[t];if(rt[t++]=null,n!==null&&i!==null){var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}l!==0&&cr(a,i,l)}}function Gi(e,t,a,n){rt[$a++]=e,rt[$a++]=t,rt[$a++]=a,rt[$a++]=n,ys|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function As(e,t,a,n){return Gi(e,t,a,n),Fi(e)}function xa(e,t){return Gi(e,null,null,t),Fi(e)}function cr(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,l=e.return;l!==null;)l.childLanes|=a,n=l.alternate,n!==null&&(n.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-Je(a),e=l.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),l):null}function Fi(e){if(50<ui)throw ui=0,Co=null,Error(p(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var en={};function Rd(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,n){return new Rd(e,t,a,n)}function vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function It(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function qi(e,t,a,n,i,l){var s=0;if(n=e,typeof e=="function")vs(e)&&(s=1);else if(typeof e=="string")s=Bh(e,a,x.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Et:return e=et(31,a,t,i),e.elementType=Et,e.lanes=l,e;case Ie:return Ca(a.children,i,l,t);case Ct:s=8,i|=24;break;case Ve:return e=et(12,a,t,i|2),e.elementType=Ve,e.lanes=l,e;case bt:return e=et(13,a,t,i),e.elementType=bt,e.lanes=l,e;case ke:return e=et(19,a,t,i),e.elementType=ke,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Re:s=10;break e;case Pt:s=9;break e;case st:s=11;break e;case X:s=14;break e;case Ge:s=16,n=null;break e}s=29,a=Error(p(130,e===null?"null":typeof e,"")),n=null}return t=et(s,a,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function Ca(e,t,a,n){return e=et(7,e,n,t),e.lanes=a,e}function Ss(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function mr(e){var t=et(18,null,null,0);return t.stateNode=e,t}function bs(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var dr=new WeakMap;function ct(e,t){if(typeof e=="object"&&e!==null){var a=dr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:mu(t)},dr.set(e,t),t)}return{value:e,source:t,stack:mu(t)}}var tn=[],an=0,_i=null,qn=0,ft=[],mt=0,Jt=null,Nt=1,zt="";function Ht(e,t){tn[an++]=qn,tn[an++]=_i,_i=e,qn=t}function hr(e,t,a){ft[mt++]=Nt,ft[mt++]=zt,ft[mt++]=Jt,Jt=e;var n=Nt;e=zt;var i=32-Je(n)-1;n&=~(1<<i),a+=1;var l=32-Je(t)+i;if(30<l){var s=i-i%5;l=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Nt=1<<32-Je(t)+i|a<<i|n,zt=l+e}else Nt=1<<l|a<<i|n,zt=e}function Es(e){e.return!==null&&(Ht(e,1),hr(e,1,0))}function Ts(e){for(;e===_i;)_i=tn[--an],tn[an]=null,qn=tn[--an],tn[an]=null;for(;e===Jt;)Jt=ft[--mt],ft[mt]=null,zt=ft[--mt],ft[mt]=null,Nt=ft[--mt],ft[mt]=null}function pr(e,t){ft[mt++]=Nt,ft[mt++]=zt,ft[mt++]=Jt,Nt=t.id,zt=t.overflow,Jt=e}var Me=null,oe=null,j=!1,$t=null,dt=!1,Ns=Error(p(519));function ea(e){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _n(ct(t,e)),Ns}function gr(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[ze]=e,t[qe]=n,a){case"dialog":q("cancel",t),q("close",t);break;case"iframe":case"object":case"embed":q("load",t);break;case"video":case"audio":for(a=0;a<ci.length;a++)q(ci[a],t);break;case"source":q("error",t);break;case"img":case"image":case"link":q("error",t),q("load",t);break;case"details":q("toggle",t);break;case"input":q("invalid",t),wu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":q("invalid",t);break;case"textarea":q("invalid",t),Ou(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Hf(t.textContent,a)?(n.popover!=null&&(q("beforetoggle",t),q("toggle",t)),n.onScroll!=null&&q("scroll",t),n.onScrollEnd!=null&&q("scrollend",t),n.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||ea(e,!0)}function yr(e){for(Me=e.return;Me;)switch(Me.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:Me=Me.return}}function nn(e){if(e!==Me)return!1;if(!j)return yr(e),j=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yo(e.type,e.memoizedProps)),a=!a),a&&oe&&ea(e),yr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));oe=Yf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));oe=Yf(e)}else t===27?(t=oe,ha(e.type)?(e=Po,Po=null,oe=e):oe=t):oe=Me?pt(e.stateNode.nextSibling):null;return!0}function wa(){oe=Me=null,j=!1}function zs(){var e=$t;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),$t=null),e}function _n(e){$t===null?$t=[e]:$t.push(e)}var Ms=c(null),Ra=null,Bt=null;function ta(e,t,a){N(Ms,t._currentValue),t._currentValue=a}function Ut(e){e._currentValue=Ms.current,b(Ms)}function xs(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Cs(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;e:for(;l!==null;){var o=l;l=i;for(var u=0;u<t.length;u++)if(o.context===t[u]){l.lanes|=a,o=l.alternate,o!==null&&(o.lanes|=a),xs(l.return,a,e),n||(s=null);break e}l=o.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(p(341));s.lanes|=a,l=s.alternate,l!==null&&(l.lanes|=a),xs(s,a,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function ln(e,t,a,n){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(p(387));if(s=s.memoizedProps,s!==null){var o=i.type;$e(i.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(i===J.current){if(s=i.alternate,s===null)throw Error(p(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(pi):e=[pi])}i=i.return}e!==null&&Cs(t,e,a,n),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oa(e){Ra=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xe(e){return Ar(Ra,e)}function Xi(e,t){return Ra===null&&Oa(e),Ar(e,t)}function Ar(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Bt===null){if(e===null)throw Error(p(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return a}var Od=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Dd=M.unstable_scheduleCallback,Id=M.unstable_NormalPriority,Ae={$$typeof:Re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ws(){return{controller:new Od,data:new Map,refCount:0}}function Yn(e){e.refCount--,e.refCount===0&&Dd(Id,function(){e.controller.abort()})}var Xn=null,Rs=0,sn=0,on=null;function Hd(e,t){if(Xn===null){var a=Xn=[];Rs=0,sn=Ho(),on={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Rs++,t.then(vr,vr),t}function vr(){if(--Rs===0&&Xn!==null){on!==null&&(on.status="fulfilled");var e=Xn;Xn=null,sn=0,on=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bd(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Sr=A.S;A.S=function(e,t){nf=Ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Hd(e,t),Sr!==null&&Sr(e,t)};var Da=c(null);function Os(){var e=Da.current;return e!==null?e:se.pooledCache}function ji(e,t){t===null?N(Da,Da.current):N(Da,t.pool)}function br(){var e=Os();return e===null?null:{parent:Ae._currentValue,pool:e}}var un=Error(p(460)),Ds=Error(p(474)),Zi=Error(p(542)),Qi={then:function(){}};function Er(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tr(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ot,Ot),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zr(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zr(e),e}throw Ha=t,un}}function Ia(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,un):a}}var Ha=null;function Nr(){if(Ha===null)throw Error(p(459));var e=Ha;return Ha=null,e}function zr(e){if(e===un||e===Zi)throw Error(p(483))}var rn=null,jn=0;function Pi(e){var t=jn;return jn+=1,rn===null&&(rn=[]),Tr(rn,e,t)}function Zn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vi(e,t){throw t.$$typeof===re?Error(p(525)):(e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mr(e){function t(f,r){if(e){var m=f.deletions;m===null?(f.deletions=[r],f.flags|=16):m.push(r)}}function a(f,r){if(!e)return null;for(;r!==null;)t(f,r),r=r.sibling;return null}function n(f){for(var r=new Map;f!==null;)f.key!==null?r.set(f.key,f):r.set(f.index,f),f=f.sibling;return r}function i(f,r){return f=It(f,r),f.index=0,f.sibling=null,f}function l(f,r,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<r?(f.flags|=67108866,r):m):(f.flags|=67108866,r)):(f.flags|=1048576,r)}function s(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,r,m,v){return r===null||r.tag!==6?(r=Ss(m,f.mode,v),r.return=f,r):(r=i(r,m),r.return=f,r)}function u(f,r,m,v){var w=m.type;return w===Ie?y(f,r,m.props.children,v,m.key):r!==null&&(r.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ge&&Ia(w)===r.type)?(r=i(r,m.props),Zn(r,m),r.return=f,r):(r=qi(m.type,m.key,m.props,null,f.mode,v),Zn(r,m),r.return=f,r)}function d(f,r,m,v){return r===null||r.tag!==4||r.stateNode.containerInfo!==m.containerInfo||r.stateNode.implementation!==m.implementation?(r=bs(m,f.mode,v),r.return=f,r):(r=i(r,m.children||[]),r.return=f,r)}function y(f,r,m,v,w){return r===null||r.tag!==7?(r=Ca(m,f.mode,v,w),r.return=f,r):(r=i(r,m),r.return=f,r)}function S(f,r,m){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Ss(""+r,f.mode,m),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Pe:return m=qi(r.type,r.key,r.props,null,f.mode,m),Zn(m,r),m.return=f,m;case Le:return r=bs(r,f.mode,m),r.return=f,r;case Ge:return r=Ia(r),S(f,r,m)}if(yt(r)||Fe(r))return r=Ca(r,f.mode,m,null),r.return=f,r;if(typeof r.then=="function")return S(f,Pi(r),m);if(r.$$typeof===Re)return S(f,Xi(f,r),m);Vi(f,r)}return null}function h(f,r,m,v){var w=r!==null?r.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return w!==null?null:o(f,r,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Pe:return m.key===w?u(f,r,m,v):null;case Le:return m.key===w?d(f,r,m,v):null;case Ge:return m=Ia(m),h(f,r,m,v)}if(yt(m)||Fe(m))return w!==null?null:y(f,r,m,v,null);if(typeof m.then=="function")return h(f,r,Pi(m),v);if(m.$$typeof===Re)return h(f,r,Xi(f,m),v);Vi(f,m)}return null}function g(f,r,m,v,w){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(m)||null,o(r,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pe:return f=f.get(v.key===null?m:v.key)||null,u(r,f,v,w);case Le:return f=f.get(v.key===null?m:v.key)||null,d(r,f,v,w);case Ge:return v=Ia(v),g(f,r,m,v,w)}if(yt(v)||Fe(v))return f=f.get(m)||null,y(r,f,v,w,null);if(typeof v.then=="function")return g(f,r,m,Pi(v),w);if(v.$$typeof===Re)return g(f,r,m,Xi(r,v),w);Vi(r,v)}return null}function z(f,r,m,v){for(var w=null,Z=null,C=r,k=r=0,Y=null;C!==null&&k<m.length;k++){C.index>k?(Y=C,C=null):Y=C.sibling;var Q=h(f,C,m[k],v);if(Q===null){C===null&&(C=Y);break}e&&C&&Q.alternate===null&&t(f,C),r=l(Q,r,k),Z===null?w=Q:Z.sibling=Q,Z=Q,C=Y}if(k===m.length)return a(f,C),j&&Ht(f,k),w;if(C===null){for(;k<m.length;k++)C=S(f,m[k],v),C!==null&&(r=l(C,r,k),Z===null?w=C:Z.sibling=C,Z=C);return j&&Ht(f,k),w}for(C=n(C);k<m.length;k++)Y=g(C,f,k,m[k],v),Y!==null&&(e&&Y.alternate!==null&&C.delete(Y.key===null?k:Y.key),r=l(Y,r,k),Z===null?w=Y:Z.sibling=Y,Z=Y);return e&&C.forEach(function(va){return t(f,va)}),j&&Ht(f,k),w}function O(f,r,m,v){if(m==null)throw Error(p(151));for(var w=null,Z=null,C=r,k=r=0,Y=null,Q=m.next();C!==null&&!Q.done;k++,Q=m.next()){C.index>k?(Y=C,C=null):Y=C.sibling;var va=h(f,C,Q.value,v);if(va===null){C===null&&(C=Y);break}e&&C&&va.alternate===null&&t(f,C),r=l(va,r,k),Z===null?w=va:Z.sibling=va,Z=va,C=Y}if(Q.done)return a(f,C),j&&Ht(f,k),w;if(C===null){for(;!Q.done;k++,Q=m.next())Q=S(f,Q.value,v),Q!==null&&(r=l(Q,r,k),Z===null?w=Q:Z.sibling=Q,Z=Q);return j&&Ht(f,k),w}for(C=n(C);!Q.done;k++,Q=m.next())Q=g(C,f,k,Q.value,v),Q!==null&&(e&&Q.alternate!==null&&C.delete(Q.key===null?k:Q.key),r=l(Q,r,k),Z===null?w=Q:Z.sibling=Q,Z=Q);return e&&C.forEach(function(Zh){return t(f,Zh)}),j&&Ht(f,k),w}function ie(f,r,m,v){if(typeof m=="object"&&m!==null&&m.type===Ie&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Pe:e:{for(var w=m.key;r!==null;){if(r.key===w){if(w=m.type,w===Ie){if(r.tag===7){a(f,r.sibling),v=i(r,m.props.children),v.return=f,f=v;break e}}else if(r.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ge&&Ia(w)===r.type){a(f,r.sibling),v=i(r,m.props),Zn(v,m),v.return=f,f=v;break e}a(f,r);break}else t(f,r);r=r.sibling}m.type===Ie?(v=Ca(m.props.children,f.mode,v,m.key),v.return=f,f=v):(v=qi(m.type,m.key,m.props,null,f.mode,v),Zn(v,m),v.return=f,f=v)}return s(f);case Le:e:{for(w=m.key;r!==null;){if(r.key===w)if(r.tag===4&&r.stateNode.containerInfo===m.containerInfo&&r.stateNode.implementation===m.implementation){a(f,r.sibling),v=i(r,m.children||[]),v.return=f,f=v;break e}else{a(f,r);break}else t(f,r);r=r.sibling}v=bs(m,f.mode,v),v.return=f,f=v}return s(f);case Ge:return m=Ia(m),ie(f,r,m,v)}if(yt(m))return z(f,r,m,v);if(Fe(m)){if(w=Fe(m),typeof w!="function")throw Error(p(150));return m=w.call(m),O(f,r,m,v)}if(typeof m.then=="function")return ie(f,r,Pi(m),v);if(m.$$typeof===Re)return ie(f,r,Xi(f,m),v);Vi(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,r!==null&&r.tag===6?(a(f,r.sibling),v=i(r,m),v.return=f,f=v):(a(f,r),v=Ss(m,f.mode,v),v.return=f,f=v),s(f)):a(f,r)}return function(f,r,m,v){try{jn=0;var w=ie(f,r,m,v);return rn=null,w}catch(C){if(C===un||C===Zi)throw C;var Z=et(29,C,null,f.mode);return Z.lanes=v,Z.return=f,Z}finally{}}}var Ba=Mr(!0),xr=Mr(!1),aa=!1;function Is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(V&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Fi(e),cr(e,null,a),t}return Gi(e,n,t,a),Fi(e)}function Qn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Au(e,a)}}function Bs(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,a=a.next}while(a!==null);l===null?i=l=t:l=l.next=t}else i=l=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Us=!1;function Pn(){if(Us){var e=on;if(e!==null)throw e}}function Vn(e,t,a,n){Us=!1;var i=e.updateQueue;aa=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var u=o,d=u.next;u.next=null,s===null?l=d:s.next=d,s=u;var y=e.alternate;y!==null&&(y=y.updateQueue,o=y.lastBaseUpdate,o!==s&&(o===null?y.firstBaseUpdate=d:o.next=d,y.lastBaseUpdate=u))}if(l!==null){var S=i.baseState;s=0,y=d=u=null,o=l;do{var h=o.lane&-536870913,g=h!==o.lane;if(g?(_&h)===h:(n&h)===h){h!==0&&h===sn&&(Us=!0),y!==null&&(y=y.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var z=e,O=o;h=t;var ie=a;switch(O.tag){case 1:if(z=O.payload,typeof z=="function"){S=z.call(ie,S,h);break e}S=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=O.payload,h=typeof z=="function"?z.call(ie,S,h):z,h==null)break e;S=I({},S,h);break e;case 2:aa=!0}}h=o.callback,h!==null&&(e.flags|=64,g&&(e.flags|=8192),g=i.callbacks,g===null?i.callbacks=[h]:g.push(h))}else g={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},y===null?(d=y=g,u=S):y=y.next=g,s|=h;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;g=o,o=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);y===null&&(u=S),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=y,l===null&&(i.shared.lanes=0),ra|=s,e.lanes=s,e.memoizedState=S}}function Cr(e,t){if(typeof e!="function")throw Error(p(191,e));e.call(t)}function wr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cr(a[e],t)}var cn=c(null),Ki=c(0);function Rr(e,t){e=jt,N(Ki,e),N(cn,t),jt=e|t.baseLanes}function Ls(){N(Ki,jt),N(cn,cn.current)}function ks(){jt=Ki.current,b(cn),b(Ki)}var tt=c(null),ht=null;function la(e){var t=e.alternate;N(ge,ge.current&1),N(tt,e),ht===null&&(t===null||cn.current!==null||t.memoizedState!==null)&&(ht=e)}function Gs(e){N(ge,ge.current),N(tt,e),ht===null&&(ht=e)}function Or(e){e.tag===22?(N(ge,ge.current),N(tt,e),ht===null&&(ht=e)):sa()}function sa(){N(ge,ge.current),N(tt,tt.current)}function at(e){b(tt),ht===e&&(ht=null),b(ge)}var ge=c(0);function Wi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zo(a)||Qo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lt=0,L=null,ae=null,ve=null,Ji=!1,fn=!1,Ua=!1,$i=0,Kn=0,mn=null,Ud=0;function me(){throw Error(p(321))}function Fs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function qs(e,t,a,n,i,l){return Lt=l,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?hc:ao,Ua=!1,l=a(n,i),Ua=!1,fn&&(l=Ir(t,a,n,i)),Dr(e),l}function Dr(e){A.H=$n;var t=ae!==null&&ae.next!==null;if(Lt=0,ve=ae=L=null,Ji=!1,Kn=0,mn=null,t)throw Error(p(300));e===null||Se||(e=e.dependencies,e!==null&&Yi(e)&&(Se=!0))}function Ir(e,t,a,n){L=e;var i=0;do{if(fn&&(mn=null),Kn=0,fn=!1,25<=i)throw Error(p(301));if(i+=1,ve=ae=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}A.H=pc,l=t(a,n)}while(fn);return l}function Ld(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?Wn(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(L.flags|=1024),t}function _s(){var e=$i!==0;return $i=0,e}function Ys(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xs(e){if(Ji){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ji=!1}Lt=0,ve=ae=L=null,fn=!1,Kn=$i=0,mn=null}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?L.memoizedState=ve=e:ve=ve.next=e,ve}function ye(){if(ae===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ve===null?L.memoizedState:ve.next;if(t!==null)ve=t,ae=e;else{if(e===null)throw L.alternate===null?Error(p(467)):Error(p(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ve===null?L.memoizedState=ve=e:ve=ve.next=e}return ve}function el(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wn(e){var t=Kn;return Kn+=1,mn===null&&(mn=[]),e=Tr(mn,e,t),t=L,(ve===null?t.memoizedState:ve.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?hc:ao),e}function tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wn(e);if(e.$$typeof===Re)return xe(e)}throw Error(p(438,String(e)))}function js(e){var t=null,a=L.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=L.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=el(),L.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Fa;return t.index++,a}function kt(e,t){return typeof t=="function"?t(e):t}function al(e){var t=ye();return Zs(t,ae,e)}function Zs(e,t,a){var n=e.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=a;var i=e.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}t.baseQueue=i=l,n.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var o=s=null,u=null,d=t,y=!1;do{var S=d.lane&-536870913;if(S!==d.lane?(_&S)===S:(Lt&S)===S){var h=d.revertLane;if(h===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),S===sn&&(y=!0);else if((Lt&h)===h){d=d.next,h===sn&&(y=!0);continue}else S={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},u===null?(o=u=S,s=l):u=u.next=S,L.lanes|=h,ra|=h;S=d.action,Ua&&a(l,S),l=d.hasEagerState?d.eagerState:a(l,S)}else h={lane:S,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},u===null?(o=u=h,s=l):u=u.next=h,L.lanes|=S,ra|=S;d=d.next}while(d!==null&&d!==t);if(u===null?s=l:u.next=o,!$e(l,e.memoizedState)&&(Se=!0,y&&(a=on,a!==null)))throw a;e.memoizedState=l,e.baseState=s,e.baseQueue=u,n.lastRenderedState=l}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Qs(e){var t=ye(),a=t.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,l=t.memoizedState;if(i!==null){a.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);$e(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,n]}function Hr(e,t,a){var n=L,i=ye(),l=j;if(l){if(a===void 0)throw Error(p(407));a=a()}else a=t();var s=!$e((ae||i).memoizedState,a);if(s&&(i.memoizedState=a,Se=!0),i=i.queue,Ks(Lr.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,dn(9,{destroy:void 0},Ur.bind(null,n,i,a,t),null),se===null)throw Error(p(349));l||(Lt&127)!==0||Br(n,t,a)}return a}function Br(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=L.updateQueue,t===null?(t=el(),L.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ur(e,t,a,n){t.value=a,t.getSnapshot=n,kr(t)&&Gr(e)}function Lr(e,t,a){return a(function(){kr(t)&&Gr(e)})}function kr(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function Gr(e){var t=xa(e,2);t!==null&&Qe(t,e,2)}function Ps(e){var t=Be();if(typeof e=="function"){var a=e;if(e=a(),Ua){Vt(!0);try{a()}finally{Vt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},t}function Fr(e,t,a,n){return e.baseState=a,Zs(e,ae,typeof n=="function"?n:kt)}function kd(e,t,a,n,i){if(ll(e))throw Error(p(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};A.T!==null?a(!0):l.isTransition=!1,n(l),a=t.pending,a===null?(l.next=t.pending=l,qr(t,l)):(l.next=a.next,t.pending=a.next=l)}}function qr(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var l=A.T,s={};A.T=s;try{var o=a(i,n),u=A.S;u!==null&&u(s,o),_r(e,t,o)}catch(d){Vs(e,t,d)}finally{l!==null&&s.types!==null&&(l.types=s.types),A.T=l}}else try{l=a(i,n),_r(e,t,l)}catch(d){Vs(e,t,d)}}function _r(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Yr(e,t,n)},function(n){return Vs(e,t,n)}):Yr(e,t,a)}function Yr(e,t,a){t.status="fulfilled",t.value=a,Xr(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,qr(e,a)))}function Vs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Xr(t),t=t.next;while(t!==n)}e.action=null}function Xr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jr(e,t){return t}function Zr(e,t){if(j){var a=se.formState;if(a!==null){e:{var n=L;if(j){if(oe){t:{for(var i=oe,l=dt;i.nodeType!==8;){if(!l){i=null;break t}if(i=pt(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){oe=pt(i.nextSibling),n=i.data==="F!";break e}}ea(n)}n=!1}n&&(t=a[0])}}return a=Be(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:t},a.queue=n,a=fc.bind(null,L,n),n.dispatch=a,n=Ps(!1),l=to.bind(null,L,!1,n.queue),n=Be(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=kd.bind(null,L,i,l,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Qr(e){var t=ye();return Pr(t,ae,e)}function Pr(e,t,a){if(t=Zs(e,t,jr)[0],e=al(kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Wn(t)}catch(s){throw s===un?Zi:s}else n=t;t=ye();var i=t.queue,l=i.dispatch;return a!==t.memoizedState&&(L.flags|=2048,dn(9,{destroy:void 0},Gd.bind(null,i,a),null)),[n,l,e]}function Gd(e,t){e.action=t}function Vr(e){var t=ye(),a=ae;if(a!==null)return Pr(t,a,e);ye(),t=t.memoizedState,a=ye();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function dn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=L.updateQueue,t===null&&(t=el(),L.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Kr(){return ye().memoizedState}function nl(e,t,a,n){var i=Be();L.flags|=e,i.memoizedState=dn(1|t,{destroy:void 0},a,n===void 0?null:n)}function il(e,t,a,n){var i=ye();n=n===void 0?null:n;var l=i.memoizedState.inst;ae!==null&&n!==null&&Fs(n,ae.memoizedState.deps)?i.memoizedState=dn(t,l,a,n):(L.flags|=e,i.memoizedState=dn(1|t,l,a,n))}function Wr(e,t){nl(8390656,8,e,t)}function Ks(e,t){il(2048,8,e,t)}function Fd(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=el(),L.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Jr(e){var t=ye().memoizedState;return Fd({ref:t,nextImpl:e}),function(){if((V&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function $r(e,t){return il(4,2,e,t)}function ec(e,t){return il(4,4,e,t)}function tc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ac(e,t,a){a=a!=null?a.concat([e]):null,il(4,4,tc.bind(null,t,e),a)}function Ws(){}function nc(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Fs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function ic(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Fs(t,n[1]))return n[0];if(n=e(),Ua){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[n,t],n}function Js(e,t,a){return a===void 0||(Lt&1073741824)!==0&&(_&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=sf(),L.lanes|=e,ra|=e,a)}function lc(e,t,a,n){return $e(a,t)?a:cn.current!==null?(e=Js(e,a,n),$e(e,t)||(Se=!0),e):(Lt&42)===0||(Lt&1073741824)!==0&&(_&261930)===0?(Se=!0,e.memoizedState=a):(e=sf(),L.lanes|=e,ra|=e,t)}function sc(e,t,a,n,i){var l=T.p;T.p=l!==0&&8>l?l:8;var s=A.T,o={};A.T=o,to(e,!1,t,a);try{var u=i(),d=A.S;if(d!==null&&d(o,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var y=Bd(u,n);Jn(e,t,y,lt(e))}else Jn(e,t,n,lt(e))}catch(S){Jn(e,t,{then:function(){},status:"rejected",reason:S},lt())}finally{T.p=l,s!==null&&o.types!==null&&(s.types=o.types),A.T=s}}function qd(){}function $s(e,t,a,n){if(e.tag!==5)throw Error(p(476));var i=oc(e).queue;sc(e,i,t,H,a===null?qd:function(){return uc(e),a(n)})}function oc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:H},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uc(e){var t=oc(e);t.next===null&&(t=e.alternate.memoizedState),Jn(e,t.next.queue,{},lt())}function eo(){return xe(pi)}function rc(){return ye().memoizedState}function cc(){return ye().memoizedState}function _d(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=lt();e=na(a);var n=ia(t,e,a);n!==null&&(Qe(n,t,a),Qn(n,t,a)),t={cache:ws()},e.payload=t;return}t=t.return}}function Yd(e,t,a){var n=lt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ll(e)?mc(t,a):(a=As(e,t,a,n),a!==null&&(Qe(a,e,n),dc(a,t,n)))}function fc(e,t,a){var n=lt();Jn(e,t,a,n)}function Jn(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ll(e))mc(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,a);if(i.hasEagerState=!0,i.eagerState=o,$e(o,s))return Gi(e,t,i,0),se===null&&ki(),!1}catch{}finally{}if(a=As(e,t,i,n),a!==null)return Qe(a,e,n),dc(a,t,n),!0}return!1}function to(e,t,a,n){if(n={lane:2,revertLane:Ho(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ll(e)){if(t)throw Error(p(479))}else t=As(e,a,n,2),t!==null&&Qe(t,e,2)}function ll(e){var t=e.alternate;return e===L||t!==null&&t===L}function mc(e,t){fn=Ji=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function dc(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Au(e,a)}}var $n={readContext:xe,use:tl,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me};$n.useEffectEvent=me;var hc={readContext:xe,use:tl,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:Wr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,nl(4194308,4,tc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){nl(4,2,e,t)},useMemo:function(e,t){var a=Be();t=t===void 0?null:t;var n=e();if(Ua){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Be();if(a!==void 0){var i=a(t);if(Ua){Vt(!0);try{a(t)}finally{Vt(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Yd.bind(null,L,e),[n.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:function(e){e=Ps(e);var t=e.queue,a=fc.bind(null,L,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ws,useDeferredValue:function(e,t){var a=Be();return Js(a,e,t)},useTransition:function(){var e=Ps(!1);return e=sc.bind(null,L,e.queue,!0,!1),Be().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=L,i=Be();if(j){if(a===void 0)throw Error(p(407));a=a()}else{if(a=t(),se===null)throw Error(p(349));(_&127)!==0||Br(n,t,a)}i.memoizedState=a;var l={value:a,getSnapshot:t};return i.queue=l,Wr(Lr.bind(null,n,l,e),[e]),n.flags|=2048,dn(9,{destroy:void 0},Ur.bind(null,n,l,a,t),null),a},useId:function(){var e=Be(),t=se.identifierPrefix;if(j){var a=zt,n=Nt;a=(n&~(1<<32-Je(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=$i++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Ud++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eo,useFormState:Zr,useActionState:Zr,useOptimistic:function(e){var t=Be();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=to.bind(null,L,!0,a),a.dispatch=t,[e,t]},useMemoCache:js,useCacheRefresh:function(){return Be().memoizedState=_d.bind(null,L)},useEffectEvent:function(e){var t=Be(),a={impl:e};return t.memoizedState=a,function(){if((V&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}},ao={readContext:xe,use:tl,useCallback:nc,useContext:xe,useEffect:Ks,useImperativeHandle:ac,useInsertionEffect:$r,useLayoutEffect:ec,useMemo:ic,useReducer:al,useRef:Kr,useState:function(){return al(kt)},useDebugValue:Ws,useDeferredValue:function(e,t){var a=ye();return lc(a,ae.memoizedState,e,t)},useTransition:function(){var e=al(kt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Wn(e),t]},useSyncExternalStore:Hr,useId:rc,useHostTransitionStatus:eo,useFormState:Qr,useActionState:Qr,useOptimistic:function(e,t){var a=ye();return Fr(a,ae,e,t)},useMemoCache:js,useCacheRefresh:cc};ao.useEffectEvent=Jr;var pc={readContext:xe,use:tl,useCallback:nc,useContext:xe,useEffect:Ks,useImperativeHandle:ac,useInsertionEffect:$r,useLayoutEffect:ec,useMemo:ic,useReducer:Qs,useRef:Kr,useState:function(){return Qs(kt)},useDebugValue:Ws,useDeferredValue:function(e,t){var a=ye();return ae===null?Js(a,e,t):lc(a,ae.memoizedState,e,t)},useTransition:function(){var e=Qs(kt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Wn(e),t]},useSyncExternalStore:Hr,useId:rc,useHostTransitionStatus:eo,useFormState:Vr,useActionState:Vr,useOptimistic:function(e,t){var a=ye();return ae!==null?Fr(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:js,useCacheRefresh:cc};pc.useEffectEvent=Jr;function no(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:I({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var io={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=lt(),i=na(n);i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(Qe(t,e,n),Qn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=lt(),i=na(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(Qe(t,e,n),Qn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=lt(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=ia(e,n,a),t!==null&&(Qe(t,e,a),Qn(t,e,a))}};function gc(e,t,a,n,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,s):t.prototype&&t.prototype.isPureReactComponent?!Gn(a,n)||!Gn(i,l):!0}function yc(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function La(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=I({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Ac(e){Li(e)}function vc(e){console.error(e)}function Sc(e){Li(e)}function sl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function bc(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function lo(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){sl(e,t)},a}function Ec(e){return e=na(e),e.tag=3,e}function Tc(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;e.payload=function(){return i(l)},e.callback=function(){bc(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){bc(t,a,n),typeof i!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function Xd(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ln(t,a,i,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return ht===null?Al():a.alternate===null&&de===0&&(de=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Qi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Oo(e,n,i)),!1;case 22:return a.flags|=65536,n===Qi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Oo(e,n,i)),!1}throw Error(p(435,a.tag))}return Oo(e,n,i),Al(),!1}if(j)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Ns&&(e=Error(p(422),{cause:n}),_n(ct(e,a)))):(n!==Ns&&(t=Error(p(423),{cause:n}),_n(ct(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=ct(n,a),i=lo(e.stateNode,n,i),Bs(e,i),de!==4&&(de=2)),!1;var l=Error(p(520),{cause:n});if(l=ct(l,a),oi===null?oi=[l]:oi.push(l),de!==4&&(de=2),t===null)return!0;n=ct(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=lo(a.stateNode,n,e),Bs(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ca===null||!ca.has(l))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Ec(i),Tc(i,e,a,n),Bs(a,i),!1}a=a.return}while(a!==null);return!1}var so=Error(p(461)),Se=!1;function Ce(e,t,a,n){t.child=e===null?xr(t,null,a,n):Ba(t,e.child,a,n)}function Nc(e,t,a,n,i){a=a.render;var l=t.ref;if("ref"in n){var s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}else s=n;return Oa(t),n=qs(e,t,a,s,l,i),o=_s(),e!==null&&!Se?(Ys(e,t,i),Gt(e,t,i)):(j&&o&&Es(t),t.flags|=1,Ce(e,t,n,i),t.child)}function zc(e,t,a,n,i){if(e===null){var l=a.type;return typeof l=="function"&&!vs(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,Mc(e,t,l,n,i)):(e=qi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!po(e,i)){var s=l.memoizedProps;if(a=a.compare,a=a!==null?a:Gn,a(s,n)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=It(l,n),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,a,n,i){if(e!==null){var l=e.memoizedProps;if(Gn(l,n)&&e.ref===t.ref)if(Se=!1,t.pendingProps=n=l,po(e,i))(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return oo(e,t,a,n,i)}function xc(e,t,a,n){var i=n.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~l}else n=0,t.child=null;return Cc(e,t,l,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ji(t,l!==null?l.cachePool:null),l!==null?Rr(t,l):Ls(),Or(t);else return n=t.lanes=536870912,Cc(e,t,l!==null?l.baseLanes|a:a,a,n)}else l!==null?(ji(t,l.cachePool),Rr(t,l),sa(),t.memoizedState=null):(e!==null&&ji(t,null),Ls(),sa());return Ce(e,t,i,a),t.child}function ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Cc(e,t,a,n,i){var l=Os();return l=l===null?null:{parent:Ae._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&ji(t,null),Ls(),Or(t),e!==null&&ln(e,t,n,!0),t.childLanes=i,null}function ol(e,t){return t=rl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wc(e,t,a){return Ba(t,e.child,null,a),e=ol(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function jd(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(j){if(n.mode==="hidden")return e=ol(t,n),t.lanes=536870912,ei(null,e);if(Gs(t),(e=oe)?(e=_f(e,dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Jt!==null?{id:Nt,overflow:zt}:null,retryLane:536870912,hydrationErrors:null},a=mr(e),a.return=t,t.child=a,Me=t,oe=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return ol(t,n)}var l=e.memoizedState;if(l!==null){var s=l.dehydrated;if(Gs(t),i)if(t.flags&256)t.flags&=-257,t=wc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(p(558));else if(Se||ln(e,t,a,!1),i=(a&e.childLanes)!==0,Se||i){if(n=se,n!==null&&(s=vu(n,a),s!==0&&s!==l.retryLane))throw l.retryLane=s,xa(e,s),Qe(n,e,s),so;Al(),t=wc(e,t,a)}else e=l.treeContext,oe=pt(s.nextSibling),Me=t,j=!0,$t=null,dt=!1,e!==null&&pr(t,e),t=ol(t,n),t.flags|=4096;return t}return e=It(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ul(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(p(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oo(e,t,a,n,i){return Oa(t),a=qs(e,t,a,n,void 0,i),n=_s(),e!==null&&!Se?(Ys(e,t,i),Gt(e,t,i)):(j&&n&&Es(t),t.flags|=1,Ce(e,t,a,i),t.child)}function Rc(e,t,a,n,i,l){return Oa(t),t.updateQueue=null,a=Ir(t,n,a,i),Dr(e),n=_s(),e!==null&&!Se?(Ys(e,t,l),Gt(e,t,l)):(j&&n&&Es(t),t.flags|=1,Ce(e,t,a,l),t.child)}function Oc(e,t,a,n,i){if(Oa(t),t.stateNode===null){var l=en,s=a.contextType;typeof s=="object"&&s!==null&&(l=xe(s)),l=new a(n,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=io,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=n,l.state=t.memoizedState,l.refs={},Is(t),s=a.contextType,l.context=typeof s=="object"&&s!==null?xe(s):en,l.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(no(t,a,s,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&io.enqueueReplaceState(l,l.state,null),Vn(t,n,l,i),Pn(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){l=t.stateNode;var o=t.memoizedProps,u=La(a,o);l.props=u;var d=l.context,y=a.contextType;s=en,typeof y=="object"&&y!==null&&(s=xe(y));var S=a.getDerivedStateFromProps;y=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||d!==s)&&yc(t,l,n,s),aa=!1;var h=t.memoizedState;l.state=h,Vn(t,n,l,i),Pn(),d=t.memoizedState,o||h!==d||aa?(typeof S=="function"&&(no(t,a,S,n),d=t.memoizedState),(u=aa||gc(t,a,u,n,h,d,s))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=d),l.props=n,l.state=d,l.context=s,n=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,Hs(e,t),s=t.memoizedProps,y=La(a,s),l.props=y,S=t.pendingProps,h=l.context,d=a.contextType,u=en,typeof d=="object"&&d!==null&&(u=xe(d)),o=a.getDerivedStateFromProps,(d=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==S||h!==u)&&yc(t,l,n,u),aa=!1,h=t.memoizedState,l.state=h,Vn(t,n,l,i),Pn();var g=t.memoizedState;s!==S||h!==g||aa||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof o=="function"&&(no(t,a,o,n),g=t.memoizedState),(y=aa||gc(t,a,y,n,h,g,u)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,g,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,g,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),l.props=n,l.state=g,l.context=u,n=y):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return l=n,ul(e,t),n=(t.flags&128)!==0,l||n?(l=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&n?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,a,i)):Ce(e,t,a,i),t.memoizedState=l.state,e=t.child):e=Gt(e,t,i),e}function Dc(e,t,a,n){return wa(),t.flags|=256,Ce(e,t,a,n),t.child}var uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ro(e){return{baseLanes:e,cachePool:br()}}function co(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=it),e}function Ic(e,t,a){var n=t.pendingProps,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(ge.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(j){if(i?la(t):sa(),(e=oe)?(e=_f(e,dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Jt!==null?{id:Nt,overflow:zt}:null,retryLane:536870912,hydrationErrors:null},a=mr(e),a.return=t,t.child=a,Me=t,oe=null)):e=null,e===null)throw ea(t);return Qo(e)?t.lanes=32:t.lanes=536870912,null}var o=n.children;return n=n.fallback,i?(sa(),i=t.mode,o=rl({mode:"hidden",children:o},i),n=Ca(n,i,a,null),o.return=t,n.return=t,o.sibling=n,t.child=o,n=t.child,n.memoizedState=ro(a),n.childLanes=co(e,s,a),t.memoizedState=uo,ei(null,n)):(la(t),fo(t,o))}var u=e.memoizedState;if(u!==null&&(o=u.dehydrated,o!==null)){if(l)t.flags&256?(la(t),t.flags&=-257,t=mo(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),o=n.fallback,i=t.mode,n=rl({mode:"visible",children:n.children},i),o=Ca(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,Ba(t,e.child,null,a),n=t.child,n.memoizedState=ro(a),n.childLanes=co(e,s,a),t.memoizedState=uo,t=ei(null,n));else if(la(t),Qo(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var d=s.dgst;s=d,n=Error(p(419)),n.stack="",n.digest=s,_n({value:n,source:null,stack:null}),t=mo(e,t,a)}else if(Se||ln(e,t,a,!1),s=(a&e.childLanes)!==0,Se||s){if(s=se,s!==null&&(n=vu(s,a),n!==0&&n!==u.retryLane))throw u.retryLane=n,xa(e,n),Qe(s,e,n),so;Zo(o)||Al(),t=mo(e,t,a)}else Zo(o)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,oe=pt(o.nextSibling),Me=t,j=!0,$t=null,dt=!1,e!==null&&pr(t,e),t=fo(t,n.children),t.flags|=4096);return t}return i?(sa(),o=n.fallback,i=t.mode,u=e.child,d=u.sibling,n=It(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,d!==null?o=It(d,o):(o=Ca(o,i,a,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,ei(null,n),n=t.child,o=e.child.memoizedState,o===null?o=ro(a):(i=o.cachePool,i!==null?(u=Ae._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=br(),o={baseLanes:o.baseLanes|a,cachePool:i}),n.memoizedState=o,n.childLanes=co(e,s,a),t.memoizedState=uo,ei(e.child,n)):(la(t),a=e.child,e=a.sibling,a=It(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function fo(e,t){return t=rl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function rl(e,t){return e=et(22,e,null,t),e.lanes=0,e}function mo(e,t,a){return Ba(t,e.child,null,a),e=fo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hc(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),xs(e.return,t,a)}function ho(e,t,a,n,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=i,s.treeForkCount=l)}function Bc(e,t,a){var n=t.pendingProps,i=n.revealOrder,l=n.tail;n=n.children;var s=ge.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,N(ge,s),Ce(e,t,n,a),n=j?qn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hc(e,a,t);else if(e.tag===19)Hc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Wi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),ho(t,!1,i,a,l,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}ho(t,!0,a,null,l,n);break;case"together":ho(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ra|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ln(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,a=It(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=It(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function po(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Yi(e)))}function Zd(e,t,a){switch(t.tag){case 3:He(t,t.stateNode.containerInfo),ta(t,Ae,e.memoizedState.cache),wa();break;case 27:case 5:Mn(t);break;case 4:He(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Gs(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(la(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ic(e,t,a):(la(t),e=Gt(e,t,a),e!==null?e.sibling:null);la(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ln(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Bc(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(ge,ge.current),n)break;return null;case 22:return t.lanes=0,xc(e,t,a,t.pendingProps);case 24:ta(t,Ae,e.memoizedState.cache)}return Gt(e,t,a)}function Uc(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Se=!0;else{if(!po(e,a)&&(t.flags&128)===0)return Se=!1,Zd(e,t,a);Se=(e.flags&131072)!==0}else Se=!1,j&&(t.flags&1048576)!==0&&hr(t,qn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ia(t.elementType),t.type=e,typeof e=="function")vs(e)?(n=La(e,n),t.tag=1,t=Oc(null,t,e,n,a)):(t.tag=0,t=oo(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===st){t.tag=11,t=Nc(null,t,e,n,a);break e}else if(i===X){t.tag=14,t=zc(null,t,e,n,a);break e}}throw t=wt(e)||e,Error(p(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=La(n,t.pendingProps),Oc(e,t,n,i,a);case 3:e:{if(He(t,t.stateNode.containerInfo),e===null)throw Error(p(387));n=t.pendingProps;var l=t.memoizedState;i=l.element,Hs(e,t),Vn(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ta(t,Ae,n),n!==l.cache&&Cs(t,[Ae],a,!0),Pn(),n=s.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Dc(e,t,n,a);break e}else if(n!==i){i=ct(Error(p(424)),t),_n(i),t=Dc(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=pt(e.firstChild),Me=t,j=!0,$t=null,dt=!0,a=xr(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wa(),n===i){t=Gt(e,t,a);break e}Ce(e,t,n,a)}t=t.child}return t;case 26:return ul(e,t),e===null?(a=Pf(t.type,null,t.pendingProps,null))?t.memoizedState=a:j||(a=t.type,e=t.pendingProps,n=zl(G.current).createElement(a),n[ze]=t,n[qe]=e,we(n,a,e),Te(n),t.stateNode=n):t.memoizedState=Pf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mn(t),e===null&&j&&(n=t.stateNode=jf(t.type,t.pendingProps,G.current),Me=t,dt=!0,i=oe,ha(t.type)?(Po=i,oe=pt(n.firstChild)):oe=i),Ce(e,t,t.pendingProps.children,a),ul(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=n=oe)&&(n=Eh(n,t.type,t.pendingProps,dt),n!==null?(t.stateNode=n,Me=t,oe=pt(n.firstChild),dt=!1,i=!0):i=!1),i||ea(t)),Mn(t),i=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,n=l.children,Yo(i,l)?n=null:s!==null&&Yo(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=qs(e,t,Ld,null,null,a),pi._currentValue=i),ul(e,t),Ce(e,t,n,a),t.child;case 6:return e===null&&j&&((e=a=oe)&&(a=Th(a,t.pendingProps,dt),a!==null?(t.stateNode=a,Me=t,oe=null,e=!0):e=!1),e||ea(t)),null;case 13:return Ic(e,t,a);case 4:return He(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ba(t,null,n,a):Ce(e,t,n,a),t.child;case 11:return Nc(e,t,t.type,t.pendingProps,a);case 7:return Ce(e,t,t.pendingProps,a),t.child;case 8:return Ce(e,t,t.pendingProps.children,a),t.child;case 12:return Ce(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Ce(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Oa(t),i=xe(i),n=n(i),t.flags|=1,Ce(e,t,n,a),t.child;case 14:return zc(e,t,t.type,t.pendingProps,a);case 15:return Mc(e,t,t.type,t.pendingProps,a);case 19:return Bc(e,t,a);case 31:return jd(e,t,a);case 22:return xc(e,t,a,t.pendingProps);case 24:return Oa(t),n=xe(Ae),e===null?(i=Os(),i===null&&(i=se,l=ws(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=a),i=l),t.memoizedState={parent:n,cache:i},Is(t),ta(t,Ae,i)):((e.lanes&a)!==0&&(Hs(e,t),Vn(t,null,null,a),Pn()),i=e.memoizedState,l=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,Ae,n)):(n=l.cache,ta(t,Ae,n),n!==i.cache&&Cs(t,[Ae],a,!0))),Ce(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function Ft(e){e.flags|=4}function go(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(cf())e.flags|=8192;else throw Ha=Qi,Ds}else e.flags&=-16777217}function Lc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$f(t))if(cf())e.flags|=8192;else throw Ha=Qi,Ds}function cl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gu():536870912,e.lanes|=t,yn|=t)}function ti(e,t){if(!j)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Qd(e,t,a){var n=t.pendingProps;switch(Ts(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return ue(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ut(Ae),pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nn(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zs())),ue(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(Ft(t),l!==null?(ue(t),Lc(t,l)):(ue(t),go(t,i,null,n,a))):l?l!==e.memoizedState?(Ft(t),ue(t),Lc(t,l)):(ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Ft(t),ue(t),go(t,i,e,n,a)),null;case 27:if(bi(t),a=G.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return ue(t),null}e=x.current,nn(t)?gr(t):(e=jf(i,n,a),t.stateNode=e,Ft(t))}return ue(t),null;case 5:if(bi(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return ue(t),null}if(l=x.current,nn(t))gr(t);else{var s=zl(G.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?l.multiple=!0:n.size&&(l.size=n.size);break;default:l=typeof n.is=="string"?s.createElement(i,{is:n.is}):s.createElement(i)}}l[ze]=t,l[qe]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=l;e:switch(we(l,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ft(t)}}return ue(t),go(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(p(166));if(e=G.current,nn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Me,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[ze]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Hf(e.nodeValue,a)),e||ea(t,!0)}else e=zl(e).createTextNode(n),e[ze]=t,t.stateNode=e}return ue(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=nn(t),a!==null){if(e===null){if(!n)throw Error(p(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[ze]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),e=!1}else a=zs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(p(558))}return ue(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=nn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(p(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(p(317));i[ze]=t}else wa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),i=!1}else i=zs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),cl(t,t.updateQueue),ue(t),null);case 4:return pe(),e===null&&ko(t.stateNode.containerInfo),ue(t),null;case 10:return Ut(t.type),ue(t),null;case 19:if(b(ge),n=t.memoizedState,n===null)return ue(t),null;if(i=(t.flags&128)!==0,l=n.rendering,l===null)if(i)ti(n,!1);else{if(de!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Wi(e),l!==null){for(t.flags|=128,ti(n,!1),e=l.updateQueue,t.updateQueue=e,cl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fr(a,e),a=a.sibling;return N(ge,ge.current&1|2),j&&Ht(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Ke()>pl&&(t.flags|=128,i=!0,ti(n,!1),t.lanes=4194304)}else{if(!i)if(e=Wi(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,cl(t,e),ti(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!j)return ue(t),null}else 2*Ke()-n.renderingStartTime>pl&&a!==536870912&&(t.flags|=128,i=!0,ti(n,!1),t.lanes=4194304);n.isBackwards?(l.sibling=t.child,t.child=l):(e=n.last,e!==null?e.sibling=l:t.child=l,n.last=l)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Ke(),e.sibling=null,a=ge.current,N(ge,i?a&1|2:a&1),j&&Ht(t,n.treeForkCount),e):(ue(t),null);case 22:case 23:return at(t),ks(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),a=t.updateQueue,a!==null&&cl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&b(Da),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ut(Ae),ue(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function Pd(e,t){switch(Ts(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ut(Ae),pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bi(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(p(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(ge),null;case 4:return pe(),null;case 10:return Ut(t.type),null;case 22:case 23:return at(t),ks(),e!==null&&b(Da),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ut(Ae),null;case 25:return null;default:return null}}function kc(e,t){switch(Ts(t),t.tag){case 3:Ut(Ae),pe();break;case 26:case 27:case 5:bi(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:b(ge);break;case 10:Ut(t.type);break;case 22:case 23:at(t),ks(),e!==null&&b(Da);break;case 24:Ut(Ae)}}function ai(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var l=a.create,s=a.inst;n=l(),s.destroy=n}a=a.next}while(a!==i)}}catch(o){ee(t,t.return,o)}}function oa(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){var s=n.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,i=t;var u=a,d=o;try{d()}catch(y){ee(i,u,y)}}}n=n.next}while(n!==l)}}catch(y){ee(t,t.return,y)}}function Gc(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{wr(t,a)}catch(n){ee(e,e.return,n)}}}function Fc(e,t,a){a.props=La(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ee(e,t,n)}}function ni(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){ee(e,t,i)}}function Mt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){ee(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ee(e,t,i)}else a.current=null}function qc(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){ee(e,e.return,i)}}function yo(e,t,a){try{var n=e.stateNode;gh(n,e.type,a,t),n[qe]=t}catch(i){ee(e,e.return,i)}}function _c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function Ao(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ot));else if(n!==4&&(n===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vo(e,t,a),e=e.sibling;e!==null;)vo(e,t,a),e=e.sibling}function fl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fl(e,t,a),e=e.sibling;e!==null;)fl(e,t,a),e=e.sibling}function Yc(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);we(t,n,a),t[ze]=e,t[qe]=a}catch(l){ee(e,e.return,l)}}var qt=!1,be=!1,So=!1,Xc=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Vd(e,t){if(e=e.containerInfo,qo=Dl,e=ar(e),ms(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var s=0,o=-1,u=-1,d=0,y=0,S=e,h=null;t:for(;;){for(var g;S!==a||i!==0&&S.nodeType!==3||(o=s+i),S!==l||n!==0&&S.nodeType!==3||(u=s+n),S.nodeType===3&&(s+=S.nodeValue.length),(g=S.firstChild)!==null;)h=S,S=g;for(;;){if(S===e)break t;if(h===a&&++d===i&&(o=s),h===l&&++y===n&&(u=s),(g=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=g}a=o===-1||u===-1?null:{start:o,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(_o={focusedElem:e,selectionRange:a},Dl=!1,Ne=t;Ne!==null;)if(t=Ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ne=e;else for(;Ne!==null;){switch(t=Ne,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,i=l.memoizedProps,l=l.memoizedState,n=a.stateNode;try{var z=La(a.type,i);e=n.getSnapshotBeforeUpdate(z,l),n.__reactInternalSnapshotBeforeUpdate=e}catch(O){ee(a,a.return,O)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)jo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(p(163))}if(e=t.sibling,e!==null){e.return=t.return,Ne=e;break}Ne=t.return}}function jc(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Yt(e,a),n&4&&ai(5,a);break;case 1:if(Yt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ee(a,a.return,s)}else{var i=La(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ee(a,a.return,s)}}n&64&&Gc(a),n&512&&ni(a,a.return);break;case 3:if(Yt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{wr(e,t)}catch(s){ee(a,a.return,s)}}break;case 27:t===null&&n&4&&Yc(a);case 26:case 5:Yt(e,a),t===null&&n&4&&qc(a),n&512&&ni(a,a.return);break;case 12:Yt(e,a);break;case 31:Yt(e,a),n&4&&Pc(e,a);break;case 13:Yt(e,a),n&4&&Vc(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ih.bind(null,a),Nh(e,a))));break;case 22:if(n=a.memoizedState!==null||qt,!n){t=t!==null&&t.memoizedState!==null||be,i=qt;var l=be;qt=n,(be=t)&&!l?Xt(e,a,(a.subtreeFlags&8772)!==0):Yt(e,a),qt=i,be=l}break;case 30:break;default:Yt(e,a)}}function Zc(e){var t=e.alternate;t!==null&&(e.alternate=null,Zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Vl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,Ye=!1;function _t(e,t,a){for(a=a.child;a!==null;)Qc(e,t,a),a=a.sibling}function Qc(e,t,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(xn,a)}catch{}switch(a.tag){case 26:be||Mt(a,t),_t(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:be||Mt(a,t);var n=ce,i=Ye;ha(a.type)&&(ce=a.stateNode,Ye=!1),_t(e,t,a),mi(a.stateNode),ce=n,Ye=i;break;case 5:be||Mt(a,t);case 6:if(n=ce,i=Ye,ce=null,_t(e,t,a),ce=n,Ye=i,ce!==null)if(Ye)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(a.stateNode)}catch(l){ee(a,t,l)}else try{ce.removeChild(a.stateNode)}catch(l){ee(a,t,l)}break;case 18:ce!==null&&(Ye?(e=ce,Ff(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zn(e)):Ff(ce,a.stateNode));break;case 4:n=ce,i=Ye,ce=a.stateNode.containerInfo,Ye=!0,_t(e,t,a),ce=n,Ye=i;break;case 0:case 11:case 14:case 15:oa(2,a,t),be||oa(4,a,t),_t(e,t,a);break;case 1:be||(Mt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Fc(a,t,n)),_t(e,t,a);break;case 21:_t(e,t,a);break;case 22:be=(n=be)||a.memoizedState!==null,_t(e,t,a),be=n;break;default:_t(e,t,a)}}function Pc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zn(e)}catch(a){ee(t,t.return,a)}}}function Vc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zn(e)}catch(a){ee(t,t.return,a)}}function Kd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xc),t;default:throw Error(p(435,e.tag))}}function ml(e,t){var a=Kd(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=lh.bind(null,e,n);n.then(i,i)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(ha(o.type)){ce=o.stateNode,Ye=!1;break e}break;case 5:ce=o.stateNode,Ye=!1;break e;case 3:case 4:ce=o.stateNode.containerInfo,Ye=!0;break e}o=o.return}if(ce===null)throw Error(p(160));Qc(l,s,i),ce=null,Ye=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kc(t,e),t=t.sibling}var vt=null;function Kc(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),je(e),n&4&&(oa(3,e,e.return),ai(3,e),oa(5,e,e.return));break;case 1:Xe(t,e),je(e),n&512&&(be||a===null||Mt(a,a.return)),n&64&&qt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=vt;if(Xe(t,e),je(e),n&512&&(be||a===null||Mt(a,a.return)),n&4){var l=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Rn]||l[ze]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),we(l,n,a),l[ze]=e,Te(l),n=l;break e;case"link":var s=Wf("link","href",i).get(n+(a.href||""));if(s){for(var o=0;o<s.length;o++)if(l=s[o],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(o,1);break t}}l=i.createElement(n),we(l,n,a),i.head.appendChild(l);break;case"meta":if(s=Wf("meta","content",i).get(n+(a.content||""))){for(o=0;o<s.length;o++)if(l=s[o],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(o,1);break t}}l=i.createElement(n),we(l,n,a),i.head.appendChild(l);break;default:throw Error(p(468,n))}l[ze]=e,Te(l),n=l}e.stateNode=n}else Jf(i,e.type,e.stateNode);else e.stateNode=Kf(i,n,e.memoizedProps);else l!==n?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,n===null?Jf(i,e.type,e.stateNode):Kf(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),je(e),n&512&&(be||a===null||Mt(a,a.return)),a!==null&&n&4&&yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),je(e),n&512&&(be||a===null||Mt(a,a.return)),e.flags&32){i=e.stateNode;try{Qa(i,"")}catch(z){ee(e,e.return,z)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,yo(e,i,a!==null?a.memoizedProps:i)),n&1024&&(So=!0);break;case 6:if(Xe(t,e),je(e),n&4){if(e.stateNode===null)throw Error(p(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(z){ee(e,e.return,z)}}break;case 3:if(Cl=null,i=vt,vt=Ml(t.containerInfo),Xe(t,e),vt=i,je(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(z){ee(e,e.return,z)}So&&(So=!1,Wc(e));break;case 4:n=vt,vt=Ml(e.stateNode.containerInfo),Xe(t,e),je(e),vt=n;break;case 12:Xe(t,e),je(e);break;case 31:Xe(t,e),je(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ml(e,n)));break;case 13:Xe(t,e),je(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hl=Ke()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ml(e,n)));break;case 22:i=e.memoizedState!==null;var u=a!==null&&a.memoizedState!==null,d=qt,y=be;if(qt=d||i,be=y||u,Xe(t,e),be=y,qt=d,je(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||u||qt||be||ka(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){u=a=t;try{if(l=u.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=u.stateNode;var S=u.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(z){ee(u,u.return,z)}}}else if(t.tag===6){if(a===null){u=t;try{u.stateNode.nodeValue=i?"":u.memoizedProps}catch(z){ee(u,u.return,z)}}}else if(t.tag===18){if(a===null){u=t;try{var g=u.stateNode;i?qf(g,!0):qf(u.stateNode,!1)}catch(z){ee(u,u.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ml(e,a))));break;case 19:Xe(t,e),je(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ml(e,n)));break;case 30:break;case 21:break;default:Xe(t,e),je(e)}}function je(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(_c(n)){a=n;break}n=n.return}if(a==null)throw Error(p(160));switch(a.tag){case 27:var i=a.stateNode,l=Ao(e);fl(e,l,i);break;case 5:var s=a.stateNode;a.flags&32&&(Qa(s,""),a.flags&=-33);var o=Ao(e);fl(e,o,s);break;case 3:case 4:var u=a.stateNode.containerInfo,d=Ao(e);vo(e,d,u);break;default:throw Error(p(161))}}catch(y){ee(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jc(e,t.alternate,t),t=t.sibling}function ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),ka(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Fc(t,t.return,a),ka(t);break;case 27:mi(t.stateNode);case 26:case 5:Mt(t,t.return),ka(t);break;case 22:t.memoizedState===null&&ka(t);break;case 30:ka(t);break;default:ka(t)}e=e.sibling}}function Xt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,l=t,s=l.flags;switch(l.tag){case 0:case 11:case 15:Xt(i,l,a),ai(4,l);break;case 1:if(Xt(i,l,a),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(d){ee(n,n.return,d)}if(n=l,i=n.updateQueue,i!==null){var o=n.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)Cr(u[i],o)}catch(d){ee(n,n.return,d)}}a&&s&64&&Gc(l),ni(l,l.return);break;case 27:Yc(l);case 26:case 5:Xt(i,l,a),a&&n===null&&s&4&&qc(l),ni(l,l.return);break;case 12:Xt(i,l,a);break;case 31:Xt(i,l,a),a&&s&4&&Pc(i,l);break;case 13:Xt(i,l,a),a&&s&4&&Vc(i,l);break;case 22:l.memoizedState===null&&Xt(i,l,a),ni(l,l.return);break;case 30:break;default:Xt(i,l,a)}t=t.sibling}}function bo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yn(a))}function Eo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e))}function St(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jc(e,t,a,n),t=t.sibling}function Jc(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,n),i&2048&&ai(9,t);break;case 1:St(e,t,a,n);break;case 3:St(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e)));break;case 12:if(i&2048){St(e,t,a,n),e=t.stateNode;try{var l=t.memoizedProps,s=l.id,o=l.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){ee(t,t.return,u)}}else St(e,t,a,n);break;case 31:St(e,t,a,n);break;case 13:St(e,t,a,n);break;case 23:break;case 22:l=t.stateNode,s=t.alternate,t.memoizedState!==null?l._visibility&2?St(e,t,a,n):ii(e,t):l._visibility&2?St(e,t,a,n):(l._visibility|=2,hn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&bo(s,t);break;case 24:St(e,t,a,n),i&2048&&Eo(t.alternate,t);break;default:St(e,t,a,n)}}function hn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,s=t,o=a,u=n,d=s.flags;switch(s.tag){case 0:case 11:case 15:hn(l,s,o,u,i),ai(8,s);break;case 23:break;case 22:var y=s.stateNode;s.memoizedState!==null?y._visibility&2?hn(l,s,o,u,i):ii(l,s):(y._visibility|=2,hn(l,s,o,u,i)),i&&d&2048&&bo(s.alternate,s);break;case 24:hn(l,s,o,u,i),i&&d&2048&&Eo(s.alternate,s);break;default:hn(l,s,o,u,i)}t=t.sibling}}function ii(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:ii(a,n),i&2048&&bo(n.alternate,n);break;case 24:ii(a,n),i&2048&&Eo(n.alternate,n);break;default:ii(a,n)}t=t.sibling}}var li=8192;function pn(e,t,a){if(e.subtreeFlags&li)for(e=e.child;e!==null;)$c(e,t,a),e=e.sibling}function $c(e,t,a){switch(e.tag){case 26:pn(e,t,a),e.flags&li&&e.memoizedState!==null&&Uh(a,vt,e.memoizedState,e.memoizedProps);break;case 5:pn(e,t,a);break;case 3:case 4:var n=vt;vt=Ml(e.stateNode.containerInfo),pn(e,t,a),vt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=li,li=16777216,pn(e,t,a),li=n):pn(e,t,a));break;default:pn(e,t,a)}}function ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ne=n,af(n,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(e),e=e.sibling}function tf(e){switch(e.tag){case 0:case 11:case 15:si(e),e.flags&2048&&oa(9,e,e.return);break;case 3:si(e);break;case 12:si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,dl(e)):si(e);break;default:si(e)}}function dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ne=n,af(n,e)}ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),dl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,dl(t));break;default:dl(t)}e=e.sibling}}function af(e,t){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Yn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ne=n;else e:for(a=e;Ne!==null;){n=Ne;var i=n.sibling,l=n.return;if(Zc(n),n===a){Ne=null;break e}if(i!==null){i.return=l,Ne=i;break e}Ne=l}}}var Wd={getCacheForType:function(e){var t=xe(Ae),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return xe(Ae).controller.signal}},Jd=typeof WeakMap=="function"?WeakMap:Map,V=0,se=null,F=null,_=0,$=0,nt=null,ua=!1,gn=!1,To=!1,jt=0,de=0,ra=0,Ga=0,No=0,it=0,yn=0,oi=null,Ze=null,zo=!1,hl=0,nf=0,pl=1/0,gl=null,ca=null,Ee=0,fa=null,An=null,Zt=0,Mo=0,xo=null,lf=null,ui=0,Co=null;function lt(){return(V&2)!==0&&_!==0?_&-_:A.T!==null?Ho():Su()}function sf(){if(it===0)if((_&536870912)===0||j){var e=Ni;Ni<<=1,(Ni&3932160)===0&&(Ni=262144),it=e}else it=536870912;return e=tt.current,e!==null&&(e.flags|=32),it}function Qe(e,t,a){(e===se&&($===2||$===9)||e.cancelPendingCommit!==null)&&(vn(e,0),ma(e,_,it,!1)),wn(e,a),((V&2)===0||e!==se)&&(e===se&&((V&2)===0&&(Ga|=a),de===4&&ma(e,_,it,!1)),xt(e))}function of(e,t,a){if((V&6)!==0)throw Error(p(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Cn(e,t),i=n?th(e,t):Ro(e,t,!0),l=n;do{if(i===0){gn&&!n&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!$d(a)){i=Ro(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var o=e;i=oi;var u=o.current.memoizedState.isDehydrated;if(u&&(vn(o,s).flags|=256),s=Ro(o,s,!1),s!==2){if(To&&!u){o.errorRecoveryDisabledLanes|=l,Ga|=l,i=4;break e}l=Ze,Ze=i,l!==null&&(Ze===null?Ze=l:Ze.push.apply(Ze,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){vn(e,0),ma(e,t,0,!0);break}e:{switch(n=e,l=i,l){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:ma(n,t,it,!ua);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(i=hl+300-Ke(),10<i)){if(ma(n,t,it,!ua),Mi(n,0,!0)!==0)break e;Zt=t,n.timeoutHandle=kf(uf.bind(null,n,a,Ze,gl,zo,t,it,Ga,yn,ua,l,"Throttled",-0,0),i);break e}uf(n,a,Ze,gl,zo,t,it,Ga,yn,ua,l,null,-0,0)}}break}while(!0);xt(e)}function uf(e,t,a,n,i,l,s,o,u,d,y,S,h,g){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},$c(t,l,S);var z=(l&62914560)===l?hl-Ke():(l&4194048)===l?nf-Ke():0;if(z=Lh(S,z),z!==null){Zt=l,e.cancelPendingCommit=z(gf.bind(null,e,t,l,a,n,i,s,o,u,y,S,null,h,g)),ma(e,l,s,!d);return}}gf(e,t,l,a,n,i,s,o,u)}function $d(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],l=i.getSnapshot;i=i.value;try{if(!$e(l(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,n){t&=~No,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var l=31-Je(i),s=1<<l;n[l]=-1,i&=~s}a!==0&&yu(e,a,t)}function yl(){return(V&6)===0?(ri(0),!1):!0}function wo(){if(F!==null){if($===0)var e=F.return;else e=F,Bt=Ra=null,Xs(e),rn=null,jn=0,e=F;for(;e!==null;)kc(e.alternate,e),e=e.return;F=null}}function vn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,vh(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zt=0,wo(),se=e,F=a=It(e.current,null),_=t,$=0,nt=null,ua=!1,gn=Cn(e,t),To=!1,yn=it=No=Ga=ra=de=0,Ze=oi=null,zo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Je(n),l=1<<i;t|=e[i],n&=~l}return jt=t,ki(),a}function rf(e,t){L=null,A.H=$n,t===un||t===Zi?(t=Nr(),$=3):t===Ds?(t=Nr(),$=4):$=t===so?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,F===null&&(de=1,sl(e,ct(t,e.current)))}function cf(){var e=tt.current;return e===null?!0:(_&4194048)===_?ht===null:(_&62914560)===_||(_&536870912)!==0?e===ht:!1}function ff(){var e=A.H;return A.H=$n,e===null?$n:e}function mf(){var e=A.A;return A.A=Wd,e}function Al(){de=4,ua||(_&4194048)!==_&&tt.current!==null||(gn=!0),(ra&134217727)===0&&(Ga&134217727)===0||se===null||ma(se,_,it,!1)}function Ro(e,t,a){var n=V;V|=2;var i=ff(),l=mf();(se!==e||_!==t)&&(gl=null,vn(e,t)),t=!1;var s=de;e:do try{if($!==0&&F!==null){var o=F,u=nt;switch($){case 8:wo(),s=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var d=$;if($=0,nt=null,Sn(e,o,u,d),a&&gn){s=0;break e}break;default:d=$,$=0,nt=null,Sn(e,o,u,d)}}eh(),s=de;break}catch(y){rf(e,y)}while(!0);return t&&e.shellSuspendCounter++,Bt=Ra=null,V=n,A.H=i,A.A=l,F===null&&(se=null,_=0,ki()),s}function eh(){for(;F!==null;)df(F)}function th(e,t){var a=V;V|=2;var n=ff(),i=mf();se!==e||_!==t?(gl=null,pl=Ke()+500,vn(e,t)):gn=Cn(e,t);e:do try{if($!==0&&F!==null){t=F;var l=nt;t:switch($){case 1:$=0,nt=null,Sn(e,t,l,1);break;case 2:case 9:if(Er(l)){$=0,nt=null,hf(t);break}t=function(){$!==2&&$!==9||se!==e||($=7),xt(e)},l.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Er(l)?($=0,nt=null,hf(t)):($=0,nt=null,Sn(e,t,l,7));break;case 5:var s=null;switch(F.tag){case 26:s=F.memoizedState;case 5:case 27:var o=F;if(s?$f(s):o.stateNode.complete){$=0,nt=null;var u=o.sibling;if(u!==null)F=u;else{var d=o.return;d!==null?(F=d,vl(d)):F=null}break t}}$=0,nt=null,Sn(e,t,l,5);break;case 6:$=0,nt=null,Sn(e,t,l,6);break;case 8:wo(),de=6;break e;default:throw Error(p(462))}}ah();break}catch(y){rf(e,y)}while(!0);return Bt=Ra=null,A.H=n,A.A=i,V=a,F!==null?0:(se=null,_=0,ki(),de)}function ah(){for(;F!==null&&!zm();)df(F)}function df(e){var t=Uc(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?vl(e):F=t}function hf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Rc(a,t,t.pendingProps,t.type,void 0,_);break;case 11:t=Rc(a,t,t.pendingProps,t.type.render,t.ref,_);break;case 5:Xs(t);default:kc(a,t),t=F=fr(t,jt),t=Uc(a,t,jt)}e.memoizedProps=e.pendingProps,t===null?vl(e):F=t}function Sn(e,t,a,n){Bt=Ra=null,Xs(t),rn=null,jn=0;var i=t.return;try{if(Xd(e,i,t,a,_)){de=1,sl(e,ct(a,e.current)),F=null;return}}catch(l){if(i!==null)throw F=i,l;de=1,sl(e,ct(a,e.current)),F=null;return}t.flags&32768?(j||n===1?e=!0:gn||(_&536870912)!==0?e=!1:(ua=e=!0,(n===2||n===9||n===3||n===6)&&(n=tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),pf(t,e)):vl(t)}function vl(e){var t=e;do{if((t.flags&32768)!==0){pf(t,ua);return}e=t.return;var a=Qd(t.alternate,t,jt);if(a!==null){F=a;return}if(t=t.sibling,t!==null){F=t;return}F=t=e}while(t!==null);de===0&&(de=5)}function pf(e,t){do{var a=Pd(e.alternate,e);if(a!==null){a.flags&=32767,F=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){F=e;return}F=e=a}while(e!==null);de=6,F=null}function gf(e,t,a,n,i,l,s,o,u){e.cancelPendingCommit=null;do Sl();while(Ee!==0);if((V&6)!==0)throw Error(p(327));if(t!==null){if(t===e.current)throw Error(p(177));if(l=t.lanes|t.childLanes,l|=ys,Bm(e,a,l,s,o,u),e===se&&(F=se=null,_=0),An=t,fa=e,Zt=a,Mo=l,xo=i,lf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sh(Ei,function(){return bf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=A.T,A.T=null,i=T.p,T.p=2,s=V,V|=4;try{Vd(e,t,a)}finally{V=s,T.p=i,A.T=n}}Ee=1,yf(),Af(),vf()}}function yf(){if(Ee===1){Ee=0;var e=fa,t=An,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var n=T.p;T.p=2;var i=V;V|=4;try{Kc(t,e);var l=_o,s=ar(e.containerInfo),o=l.focusedElem,u=l.selectionRange;if(s!==o&&o&&o.ownerDocument&&tr(o.ownerDocument.documentElement,o)){if(u!==null&&ms(o)){var d=u.start,y=u.end;if(y===void 0&&(y=d),"selectionStart"in o)o.selectionStart=d,o.selectionEnd=Math.min(y,o.value.length);else{var S=o.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var g=h.getSelection(),z=o.textContent.length,O=Math.min(u.start,z),ie=u.end===void 0?O:Math.min(u.end,z);!g.extend&&O>ie&&(s=ie,ie=O,O=s);var f=er(o,O),r=er(o,ie);if(f&&r&&(g.rangeCount!==1||g.anchorNode!==f.node||g.anchorOffset!==f.offset||g.focusNode!==r.node||g.focusOffset!==r.offset)){var m=S.createRange();m.setStart(f.node,f.offset),g.removeAllRanges(),O>ie?(g.addRange(m),g.extend(r.node,r.offset)):(m.setEnd(r.node,r.offset),g.addRange(m))}}}}for(S=[],g=o;g=g.parentNode;)g.nodeType===1&&S.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<S.length;o++){var v=S[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Dl=!!qo,_o=qo=null}finally{V=i,T.p=n,A.T=a}}e.current=t,Ee=2}}function Af(){if(Ee===2){Ee=0;var e=fa,t=An,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var n=T.p;T.p=2;var i=V;V|=4;try{jc(e,t.alternate,t)}finally{V=i,T.p=n,A.T=a}}Ee=3}}function vf(){if(Ee===4||Ee===3){Ee=0,Mm();var e=fa,t=An,a=Zt,n=lf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ee=5:(Ee=0,An=fa=null,Sf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ca=null),Ql(a),t=t.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(xn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=A.T,i=T.p,T.p=2,A.T=null;try{for(var l=e.onRecoverableError,s=0;s<n.length;s++){var o=n[s];l(o.value,{componentStack:o.stack})}}finally{A.T=t,T.p=i}}(Zt&3)!==0&&Sl(),xt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Co?ui++:(ui=0,Co=e):ui=0,ri(0)}}function Sf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yn(t)))}function Sl(){return yf(),Af(),vf(),bf()}function bf(){if(Ee!==5)return!1;var e=fa,t=Mo;Mo=0;var a=Ql(Zt),n=A.T,i=T.p;try{T.p=32>a?32:a,A.T=null,a=xo,xo=null;var l=fa,s=Zt;if(Ee=0,An=fa=null,Zt=0,(V&6)!==0)throw Error(p(331));var o=V;if(V|=4,tf(l.current),Jc(l,l.current,s,a),V=o,ri(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(xn,l)}catch{}return!0}finally{T.p=i,A.T=n,Sf(e,t)}}function Ef(e,t,a){t=ct(a,t),t=lo(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(wn(e,2),xt(e))}function ee(e,t,a){if(e.tag===3)Ef(e,e,a);else for(;t!==null;){if(t.tag===3){Ef(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ca===null||!ca.has(n))){e=ct(a,e),a=Ec(2),n=ia(t,a,2),n!==null&&(Tc(a,n,t,e),wn(n,2),xt(n));break}}t=t.return}}function Oo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Jd;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(To=!0,i.add(a),e=nh.bind(null,e,t,a),t.then(e,e))}function nh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,se===e&&(_&a)===a&&(de===4||de===3&&(_&62914560)===_&&300>Ke()-hl?(V&2)===0&&vn(e,0):No|=a,yn===_&&(yn=0)),xt(e)}function Tf(e,t){t===0&&(t=gu()),e=xa(e,t),e!==null&&(wn(e,t),xt(e))}function ih(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Tf(e,a)}function lh(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(p(314))}n!==null&&n.delete(t),Tf(e,a)}function sh(e,t){return Yl(e,t)}var bl=null,bn=null,Do=!1,El=!1,Io=!1,da=0;function xt(e){e!==bn&&e.next===null&&(bn===null?bl=bn=e:bn=bn.next=e),El=!0,Do||(Do=!0,uh())}function ri(e,t){if(!Io&&El){Io=!0;do for(var a=!1,n=bl;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var s=n.suspendedLanes,o=n.pingedLanes;l=(1<<31-Je(42|e)+1)-1,l&=i&~(s&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,xf(n,l))}else l=_,l=Mi(n,n===se?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||Cn(n,l)||(a=!0,xf(n,l));n=n.next}while(a);Io=!1}}function oh(){Nf()}function Nf(){El=Do=!1;var e=0;da!==0&&Ah()&&(e=da);for(var t=Ke(),a=null,n=bl;n!==null;){var i=n.next,l=zf(n,t);l===0?(n.next=null,a===null?bl=i:a.next=i,i===null&&(bn=a)):(a=n,(e!==0||(l&3)!==0)&&(El=!0)),n=i}Ee!==0&&Ee!==5||ri(e),da!==0&&(da=0)}function zf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-Je(l),o=1<<s,u=i[s];u===-1?((o&a)===0||(o&n)!==0)&&(i[s]=Hm(o,t)):u<=t&&(e.expiredLanes|=o),l&=~o}if(t=se,a=_,a=Mi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Xl(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Cn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Xl(n),Ql(a)){case 2:case 8:a=hu;break;case 32:a=Ei;break;case 268435456:a=pu;break;default:a=Ei}return n=Mf.bind(null,e),a=Yl(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Xl(n),e.callbackPriority=2,e.callbackNode=null,2}function Mf(e,t){if(Ee!==0&&Ee!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sl()&&e.callbackNode!==a)return null;var n=_;return n=Mi(e,e===se?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(of(e,n,t),zf(e,Ke()),e.callbackNode!=null&&e.callbackNode===a?Mf.bind(null,e):null)}function xf(e,t){if(Sl())return null;of(e,t,!0)}function uh(){Sh(function(){(V&6)!==0?Yl(du,oh):Nf()})}function Ho(){if(da===0){var e=sn;e===0&&(e=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),da=e}return da}function Cf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function wf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function rh(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var l=Cf((i[qe]||null).action),s=n.submitter;s&&(t=(t=s[qe]||null)?Cf(t.formAction):s.getAttribute("formAction"),t!==null&&(l=t,s=null));var o=new Hi("action","action",null,n,i);e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(da!==0){var u=s?wf(i,s):new FormData(i);$s(a,{pending:!0,data:u,method:i.method,action:l},null,u)}}else typeof l=="function"&&(o.preventDefault(),u=s?wf(i,s):new FormData(i),$s(a,{pending:!0,data:u,method:i.method,action:l},l,u))},currentTarget:i}]})}}for(var Bo=0;Bo<gs.length;Bo++){var Uo=gs[Bo],ch=Uo.toLowerCase(),fh=Uo[0].toUpperCase()+Uo.slice(1);At(ch,"on"+fh)}At(lr,"onAnimationEnd"),At(sr,"onAnimationIteration"),At(or,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(xd,"onTransitionRun"),At(Cd,"onTransitionStart"),At(wd,"onTransitionCancel"),At(ur,"onTransitionEnd"),ja("onMouseEnter",["mouseout","mouseover"]),ja("onMouseLeave",["mouseout","mouseover"]),ja("onPointerEnter",["pointerout","pointerover"]),ja("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ci));function Rf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],u=o.instance,d=o.currentTarget;if(o=o.listener,u!==l&&i.isPropagationStopped())break e;l=o,i.currentTarget=d;try{l(i)}catch(y){Li(y)}i.currentTarget=null,l=u}else for(s=0;s<n.length;s++){if(o=n[s],u=o.instance,d=o.currentTarget,o=o.listener,u!==l&&i.isPropagationStopped())break e;l=o,i.currentTarget=d;try{l(i)}catch(y){Li(y)}i.currentTarget=null,l=u}}}}function q(e,t){var a=t[Pl];a===void 0&&(a=t[Pl]=new Set);var n=e+"__bubble";a.has(n)||(Of(t,e,2,!1),a.add(n))}function Lo(e,t,a){var n=0;t&&(n|=4),Of(a,e,n,t)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[Tl]){e[Tl]=!0,Tu.forEach(function(a){a!=="selectionchange"&&(mh.has(a)||Lo(a,!1,e),Lo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tl]||(t[Tl]=!0,Lo("selectionchange",!1,t))}}function Of(e,t,a,n){switch(sm(t)){case 2:var i=Fh;break;case 8:i=qh;break;default:i=$o}a=i.bind(null,t,a,e),i=void 0,!ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Go(e,t,a,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===i)break;if(s===4)for(s=n.return;s!==null;){var u=s.tag;if((u===3||u===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;o!==null;){if(s=_a(o),s===null)return;if(u=s.tag,u===5||u===6||u===26||u===27){n=l=s;continue e}o=o.parentNode}}n=n.return}Bu(function(){var d=l,y=ts(a),S=[];e:{var h=rr.get(e);if(h!==void 0){var g=Hi,z=e;switch(e){case"keypress":if(Di(a)===0)break e;case"keydown":case"keyup":g=ld;break;case"focusin":z="focus",g=os;break;case"focusout":z="blur",g=os;break;case"beforeblur":case"afterblur":g=os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ud;break;case lr:case sr:case or:g=Km;break;case ur:g=cd;break;case"scroll":case"scrollend":g=jm;break;case"wheel":g=md;break;case"copy":case"cut":case"paste":g=Jm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fu;break;case"toggle":case"beforetoggle":g=hd}var O=(t&4)!==0,ie=!O&&(e==="scroll"||e==="scrollend"),f=O?h!==null?h+"Capture":null:h;O=[];for(var r=d,m;r!==null;){var v=r;if(m=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||m===null||f===null||(v=Dn(r,f),v!=null&&O.push(fi(r,v,m))),ie)break;r=r.return}0<O.length&&(h=new g(h,z,null,a,y),S.push({event:h,listeners:O}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&a!==es&&(z=a.relatedTarget||a.fromElement)&&(_a(z)||z[qa]))break e;if((g||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,g?(z=a.relatedTarget||a.toElement,g=d,z=z?_a(z):null,z!==null&&(ie=P(z),O=z.tag,z!==ie||O!==5&&O!==27&&O!==6)&&(z=null)):(g=null,z=d),g!==z)){if(O=ku,v="onMouseLeave",f="onMouseEnter",r="mouse",(e==="pointerout"||e==="pointerover")&&(O=Fu,v="onPointerLeave",f="onPointerEnter",r="pointer"),ie=g==null?h:On(g),m=z==null?h:On(z),h=new O(v,r+"leave",g,a,y),h.target=ie,h.relatedTarget=m,v=null,_a(y)===d&&(O=new O(f,r+"enter",z,a,y),O.target=m,O.relatedTarget=ie,v=O),ie=v,g&&z)t:{for(O=dh,f=g,r=z,m=0,v=f;v;v=O(v))m++;v=0;for(var w=r;w;w=O(w))v++;for(;0<m-v;)f=O(f),m--;for(;0<v-m;)r=O(r),v--;for(;m--;){if(f===r||r!==null&&f===r.alternate){O=f;break t}f=O(f),r=O(r)}O=null}else O=null;g!==null&&Df(S,h,g,O,!1),z!==null&&ie!==null&&Df(S,ie,z,O,!0)}}e:{if(h=d?On(d):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var Z=Pu;else if(Zu(h))if(Vu)Z=Nd;else{Z=Ed;var C=bd}else g=h.nodeName,!g||g.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?d&&$l(d.elementType)&&(Z=Pu):Z=Td;if(Z&&(Z=Z(e,d))){Qu(S,Z,a,y);break e}C&&C(e,h,d),e==="focusout"&&d&&h.type==="number"&&d.memoizedProps.value!=null&&Jl(h,"number",h.value)}switch(C=d?On(d):window,e){case"focusin":(Zu(C)||C.contentEditable==="true")&&(Wa=C,ds=d,Fn=null);break;case"focusout":Fn=ds=Wa=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,nr(S,a,y);break;case"selectionchange":if(Md)break;case"keydown":case"keyup":nr(S,a,y)}var k;if(rs)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Ka?Xu(e,a)&&(Y="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Y="onCompositionStart");Y&&(qu&&a.locale!=="ko"&&(Ka||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Ka&&(k=Uu()):(Wt=y,is="value"in Wt?Wt.value:Wt.textContent,Ka=!0)),C=Nl(d,Y),0<C.length&&(Y=new Gu(Y,e,null,a,y),S.push({event:Y,listeners:C}),k?Y.data=k:(k=ju(a),k!==null&&(Y.data=k)))),(k=gd?yd(e,a):Ad(e,a))&&(Y=Nl(d,"onBeforeInput"),0<Y.length&&(C=new Gu("onBeforeInput","beforeinput",null,a,y),S.push({event:C,listeners:Y}),C.data=k)),rh(S,e,d,a,y)}Rf(S,t)})}function fi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Nl(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Dn(e,a),i!=null&&n.unshift(fi(e,i,l)),i=Dn(e,t),i!=null&&n.push(fi(e,i,l))),e.tag===3)return n;e=e.return}return[]}function dh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Df(e,t,a,n,i){for(var l=t._reactName,s=[];a!==null&&a!==n;){var o=a,u=o.alternate,d=o.stateNode;if(o=o.tag,u!==null&&u===n)break;o!==5&&o!==26&&o!==27||d===null||(u=d,i?(d=Dn(a,l),d!=null&&s.unshift(fi(a,d,u))):i||(d=Dn(a,l),d!=null&&s.push(fi(a,d,u)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var hh=/\r\n?/g,ph=/\u0000|\uFFFD/g;function If(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(ph,"")}function Hf(e,t){return t=If(t),If(e)===t}function ne(e,t,a,n,i,l){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Qa(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Qa(e,""+n);break;case"className":Ci(e,"class",n);break;case"tabIndex":Ci(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(e,a,n);break;case"style":Iu(e,n,l);break;case"data":if(t!=="object"){Ci(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ri(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&ne(e,t,"name",i.name,i,null),ne(e,t,"formEncType",i.formEncType,i,null),ne(e,t,"formMethod",i.formMethod,i,null),ne(e,t,"formTarget",i.formTarget,i,null)):(ne(e,t,"encType",i.encType,i,null),ne(e,t,"method",i.method,i,null),ne(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ri(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Ot);break;case"onScroll":n!=null&&q("scroll",e);break;case"onScrollEnd":n!=null&&q("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(p(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ri(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":q("beforetoggle",e),q("toggle",e),xi(e,"popover",n);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":xi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ym.get(a)||a,xi(e,a,n))}}function Fo(e,t,a,n,i,l){switch(a){case"style":Iu(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(p(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Qa(e,n):(typeof n=="number"||typeof n=="bigint")&&Qa(e,""+n);break;case"onScroll":n!=null&&q("scroll",e);break;case"onScrollEnd":n!=null&&q("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),l=e[qe]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):xi(e,a,n)}}}function we(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",e),q("load",e);var n=!1,i=!1,l;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];if(s!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:ne(e,t,l,s,a,null)}}i&&ne(e,t,"srcSet",a.srcSet,a,null),n&&ne(e,t,"src",a.src,a,null);return;case"input":q("invalid",e);var o=l=s=i=null,u=null,d=null;for(n in a)if(a.hasOwnProperty(n)){var y=a[n];if(y!=null)switch(n){case"name":i=y;break;case"type":s=y;break;case"checked":u=y;break;case"defaultChecked":d=y;break;case"value":l=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,t));break;default:ne(e,t,n,y,a,null)}}wu(e,l,o,u,d,s,i,!1);return;case"select":q("invalid",e),n=s=l=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":l=o;break;case"defaultValue":s=o;break;case"multiple":n=o;default:ne(e,t,i,o,a,null)}t=l,a=s,e.multiple=!!n,t!=null?Za(e,!!n,t,!1):a!=null&&Za(e,!!n,a,!0);return;case"textarea":q("invalid",e),l=i=n=null;for(s in a)if(a.hasOwnProperty(s)&&(o=a[s],o!=null))switch(s){case"value":n=o;break;case"defaultValue":i=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(p(91));break;default:ne(e,t,s,o,a,null)}Ou(e,n,i,l);return;case"option":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ne(e,t,u,n,a,null)}return;case"dialog":q("beforetoggle",e),q("toggle",e),q("cancel",e),q("close",e);break;case"iframe":case"object":q("load",e);break;case"video":case"audio":for(n=0;n<ci.length;n++)q(ci[n],e);break;case"image":q("error",e),q("load",e);break;case"details":q("toggle",e);break;case"embed":case"source":case"link":q("error",e),q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(n=a[d],n!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:ne(e,t,d,n,a,null)}return;default:if($l(t)){for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!==void 0&&Fo(e,t,y,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&ne(e,t,o,n,a,null))}function gh(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,o=null,u=null,d=null,y=null;for(g in a){var S=a[g];if(a.hasOwnProperty(g)&&S!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":u=S;default:n.hasOwnProperty(g)||ne(e,t,g,null,n,S)}}for(var h in n){var g=n[h];if(S=a[h],n.hasOwnProperty(h)&&(g!=null||S!=null))switch(h){case"type":l=g;break;case"name":i=g;break;case"checked":d=g;break;case"defaultChecked":y=g;break;case"value":s=g;break;case"defaultValue":o=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(p(137,t));break;default:g!==S&&ne(e,t,h,g,n,S)}}Wl(e,s,o,u,d,y,l,i);return;case"select":g=s=o=h=null;for(l in a)if(u=a[l],a.hasOwnProperty(l)&&u!=null)switch(l){case"value":break;case"multiple":g=u;default:n.hasOwnProperty(l)||ne(e,t,l,null,n,u)}for(i in n)if(l=n[i],u=a[i],n.hasOwnProperty(i)&&(l!=null||u!=null))switch(i){case"value":h=l;break;case"defaultValue":o=l;break;case"multiple":s=l;default:l!==u&&ne(e,t,i,l,n,u)}t=o,a=s,n=g,h!=null?Za(e,!!a,h,!1):!!n!=!!a&&(t!=null?Za(e,!!a,t,!0):Za(e,!!a,a?[]:"",!1));return;case"textarea":g=h=null;for(o in a)if(i=a[o],a.hasOwnProperty(o)&&i!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ne(e,t,o,null,n,i)}for(s in n)if(i=n[s],l=a[s],n.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":h=i;break;case"defaultValue":g=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(p(91));break;default:i!==l&&ne(e,t,s,i,n,l)}Ru(e,h,g);return;case"option":for(var z in a)if(h=a[z],a.hasOwnProperty(z)&&h!=null&&!n.hasOwnProperty(z))switch(z){case"selected":e.selected=!1;break;default:ne(e,t,z,null,n,h)}for(u in n)if(h=n[u],g=a[u],n.hasOwnProperty(u)&&h!==g&&(h!=null||g!=null))switch(u){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ne(e,t,u,h,n,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var O in a)h=a[O],a.hasOwnProperty(O)&&h!=null&&!n.hasOwnProperty(O)&&ne(e,t,O,null,n,h);for(d in n)if(h=n[d],g=a[d],n.hasOwnProperty(d)&&h!==g&&(h!=null||g!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(p(137,t));break;default:ne(e,t,d,h,n,g)}return;default:if($l(t)){for(var ie in a)h=a[ie],a.hasOwnProperty(ie)&&h!==void 0&&!n.hasOwnProperty(ie)&&Fo(e,t,ie,void 0,n,h);for(y in n)h=n[y],g=a[y],!n.hasOwnProperty(y)||h===g||h===void 0&&g===void 0||Fo(e,t,y,h,n,g);return}}for(var f in a)h=a[f],a.hasOwnProperty(f)&&h!=null&&!n.hasOwnProperty(f)&&ne(e,t,f,null,n,h);for(S in n)h=n[S],g=a[S],!n.hasOwnProperty(S)||h===g||h==null&&g==null||ne(e,t,S,h,n,g)}function Bf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],l=i.transferSize,s=i.initiatorType,o=i.duration;if(l&&o&&Bf(s)){for(s=0,o=i.responseEnd,n+=1;n<a.length;n++){var u=a[n],d=u.startTime;if(d>o)break;var y=u.transferSize,S=u.initiatorType;y&&Bf(S)&&(u=u.responseEnd,s+=y*(u<o?1:(o-d)/(u-d)))}if(--n,t+=8*(l+s)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qo=null,_o=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function Uf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xo=null;function Ah(){var e=window.event;return e&&e.type==="popstate"?e===Xo?!1:(Xo=e,!0):(Xo=null,!1)}var kf=typeof setTimeout=="function"?setTimeout:void 0,vh=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,Sh=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf<"u"?function(e){return Gf.resolve(null).then(e).catch(bh)}:kf;function bh(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function Ff(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),zn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")mi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mi(a);for(var l=a.firstChild;l;){var s=l.nextSibling,o=l.nodeName;l[Rn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=s}}else a==="body"&&mi(e.ownerDocument.body);a=i}while(a);zn(t)}function qf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function jo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jo(a),Vl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Eh(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Rn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=pt(e.nextSibling),e===null)break}return null}function Th(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pt(e.nextSibling),e===null))return null;return e}function _f(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pt(e.nextSibling),e===null))return null;return e}function Zo(e){return e.data==="$?"||e.data==="$~"}function Qo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Nh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Po=null;function Yf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return pt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function jf(e,t,a){switch(t=zl(a),e){case"html":if(e=t.documentElement,!e)throw Error(p(452));return e;case"head":if(e=t.head,!e)throw Error(p(453));return e;case"body":if(e=t.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function mi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Vl(e)}var gt=new Map,Zf=new Set;function Ml(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qt=T.d;T.d={f:zh,r:Mh,D:xh,C:Ch,L:wh,m:Rh,X:Dh,S:Oh,M:Ih};function zh(){var e=Qt.f(),t=yl();return e||t}function Mh(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?uc(t):Qt.r(e)}var En=typeof document>"u"?null:document;function Qf(e,t,a){var n=En;if(n&&typeof t=="string"&&t){var i=ut(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Zf.has(i)||(Zf.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),we(t,"link",e),Te(t),n.head.appendChild(t)))}}function xh(e){Qt.D(e),Qf("dns-prefetch",e,null)}function Ch(e,t){Qt.C(e,t),Qf("preconnect",e,t)}function wh(e,t,a){Qt.L(e,t,a);var n=En;if(n&&e&&t){var i='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ut(a.imageSizes)+'"]')):i+='[href="'+ut(e)+'"]';var l=i;switch(t){case"style":l=Tn(e);break;case"script":l=Nn(e)}gt.has(l)||(e=I({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),gt.set(l,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(di(l))||t==="script"&&n.querySelector(hi(l))||(t=n.createElement("link"),we(t,"link",e),Te(t),n.head.appendChild(t)))}}function Rh(e,t){Qt.m(e,t);var a=En;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ut(n)+'"][href="'+ut(e)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Nn(e)}if(!gt.has(l)&&(e=I({rel:"modulepreload",href:e},t),gt.set(l,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hi(l)))return}n=a.createElement("link"),we(n,"link",e),Te(n),a.head.appendChild(n)}}}function Oh(e,t,a){Qt.S(e,t,a);var n=En;if(n&&e){var i=Xa(n).hoistableStyles,l=Tn(e);t=t||"default";var s=i.get(l);if(!s){var o={loading:0,preload:null};if(s=n.querySelector(di(l)))o.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":t},a),(a=gt.get(l))&&Vo(e,a);var u=s=n.createElement("link");Te(u),we(u,"link",e),u._p=new Promise(function(d,y){u.onload=d,u.onerror=y}),u.addEventListener("load",function(){o.loading|=1}),u.addEventListener("error",function(){o.loading|=2}),o.loading|=4,xl(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:o},i.set(l,s)}}}function Dh(e,t){Qt.X(e,t);var a=En;if(a&&e){var n=Xa(a).hoistableScripts,i=Nn(e),l=n.get(i);l||(l=a.querySelector(hi(i)),l||(e=I({src:e,async:!0},t),(t=gt.get(i))&&Ko(e,t),l=a.createElement("script"),Te(l),we(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Ih(e,t){Qt.M(e,t);var a=En;if(a&&e){var n=Xa(a).hoistableScripts,i=Nn(e),l=n.get(i);l||(l=a.querySelector(hi(i)),l||(e=I({src:e,async:!0,type:"module"},t),(t=gt.get(i))&&Ko(e,t),l=a.createElement("script"),Te(l),we(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Pf(e,t,a,n){var i=(i=G.current)?Ml(i):null;if(!i)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tn(a.href),a=Xa(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tn(a.href);var l=Xa(i).hoistableStyles,s=l.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=i.querySelector(di(e)))&&!l._p&&(s.instance=l,s.state.loading=5),gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gt.set(e,a),l||Hh(i,e,a,s.state))),t&&n===null)throw Error(p(528,""));return s}if(t&&n!==null)throw Error(p(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nn(a),a=Xa(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function Tn(e){return'href="'+ut(e)+'"'}function di(e){return'link[rel="stylesheet"]['+e+"]"}function Vf(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function Hh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),we(t,"link",a),Te(t),e.head.appendChild(t))}function Nn(e){return'[src="'+ut(e)+'"]'}function hi(e){return"script[async]"+e}function Kf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ut(a.href)+'"]');if(n)return t.instance=n,Te(n),n;var i=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Te(n),we(n,"style",i),xl(n,a.precedence,e),t.instance=n;case"stylesheet":i=Tn(a.href);var l=e.querySelector(di(i));if(l)return t.state.loading|=4,t.instance=l,Te(l),l;n=Vf(a),(i=gt.get(i))&&Vo(n,i),l=(e.ownerDocument||e).createElement("link"),Te(l);var s=l;return s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),we(l,"link",n),t.state.loading|=4,xl(l,a.precedence,e),t.instance=l;case"script":return l=Nn(a.src),(i=e.querySelector(hi(l)))?(t.instance=i,Te(i),i):(n=a,(i=gt.get(l))&&(n=I({},a),Ko(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Te(i),we(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,xl(n,a.precedence,e));return t.instance}function xl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,s=0;s<n.length;s++){var o=n[s];if(o.dataset.precedence===t)l=o;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Vo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ko(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cl=null;function Wf(e,t,a){if(Cl===null){var n=new Map,i=Cl=new Map;i.set(a,n)}else i=Cl,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var l=a[i];if(!(l[Rn]||l[ze]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(t)||"";s=e+s;var o=n.get(s);o?o.push(l):n.set(s,[l])}}return n}function Jf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Bh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $f(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Uh(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Tn(n.href),l=t.querySelector(di(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,Te(l);return}l=t.ownerDocument||t,n=Vf(n),(i=gt.get(i))&&Vo(n,i),l=l.createElement("link"),Te(l);var s=l;s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),we(l,"link",n),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Wo=0;function Lh(e,t){return e.stylesheets&&e.count===0&&Ol(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ol(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Wo===0&&(Wo=62500*yh());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ol(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Wo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function wl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ol(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Rl=null;function Ol(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rl=new Map,t.forEach(kh,e),Rl=null,wl.call(e))}function kh(e,t){if(!(t.state.loading&4)){var a=Rl.get(e);if(a)var n=a.get(null);else{a=new Map,Rl.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}i=t.instance,s=i.getAttribute("data-precedence"),l=a.get(s)||n,l===n&&a.set(null,i),a.set(s,i),this.count++,n=wl.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var pi={$$typeof:Re,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Gh(e,t,a,n,i,l,s,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.hiddenUpdates=jl(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function em(e,t,a,n,i,l,s,o,u,d,y,S){return e=new Gh(e,t,a,s,u,d,y,S,o),t=1,l===!0&&(t|=24),l=et(3,null,null,t),e.current=l,l.stateNode=e,t=ws(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:n,isDehydrated:a,cache:t},Is(l),e}function tm(e){return e?(e=en,e):en}function am(e,t,a,n,i,l){i=tm(i),n.context===null?n.context=i:n.pendingContext=i,n=na(t),n.payload={element:a},l=l===void 0?null:l,l!==null&&(n.callback=l),a=ia(e,n,t),a!==null&&(Qe(a,e,t),Qn(a,e,t))}function nm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Jo(e,t){nm(e,t),(e=e.alternate)&&nm(e,t)}function im(e){if(e.tag===13||e.tag===31){var t=xa(e,67108864);t!==null&&Qe(t,e,67108864),Jo(e,67108864)}}function lm(e){if(e.tag===13||e.tag===31){var t=lt();t=Zl(t);var a=xa(e,t);a!==null&&Qe(a,e,t),Jo(e,t)}}var Dl=!0;function Fh(e,t,a,n){var i=A.T;A.T=null;var l=T.p;try{T.p=2,$o(e,t,a,n)}finally{T.p=l,A.T=i}}function qh(e,t,a,n){var i=A.T;A.T=null;var l=T.p;try{T.p=8,$o(e,t,a,n)}finally{T.p=l,A.T=i}}function $o(e,t,a,n){if(Dl){var i=eu(n);if(i===null)Go(e,t,n,Il,a),om(e,n);else if(Yh(i,e,t,a,n))n.stopPropagation();else if(om(e,n),t&4&&-1<_h.indexOf(e)){for(;i!==null;){var l=Ya(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Ea(l.pendingLanes);if(s!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var u=1<<31-Je(s);o.entanglements[1]|=u,s&=~u}xt(l),(V&6)===0&&(pl=Ke()+500,ri(0))}}break;case 31:case 13:o=xa(l,2),o!==null&&Qe(o,l,2),yl(),Jo(l,2)}if(l=eu(n),l===null&&Go(e,t,n,Il,a),l===i)break;i=l}i!==null&&n.stopPropagation()}else Go(e,t,n,null,a)}}function eu(e){return e=ts(e),tu(e)}var Il=null;function tu(e){if(Il=null,e=_a(e),e!==null){var t=P(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=he(t),e!==null)return e;e=null}else if(a===31){if(e=De(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Il=e,null}function sm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xm()){case du:return 2;case hu:return 8;case Ei:case Cm:return 32;case pu:return 268435456;default:return 32}default:return 32}}var au=!1,pa=null,ga=null,ya=null,gi=new Map,yi=new Map,Aa=[],_h="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function om(e,t){switch(e){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function Ai(e,t,a,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Ya(t),t!==null&&im(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yh(e,t,a,n,i){switch(t){case"focusin":return pa=Ai(pa,e,t,a,n,i),!0;case"dragenter":return ga=Ai(ga,e,t,a,n,i),!0;case"mouseover":return ya=Ai(ya,e,t,a,n,i),!0;case"pointerover":var l=i.pointerId;return gi.set(l,Ai(gi.get(l)||null,e,t,a,n,i)),!0;case"gotpointercapture":return l=i.pointerId,yi.set(l,Ai(yi.get(l)||null,e,t,a,n,i)),!0}return!1}function um(e){var t=_a(e.target);if(t!==null){var a=P(t);if(a!==null){if(t=a.tag,t===13){if(t=he(a),t!==null){e.blockedOn=t,bu(e.priority,function(){lm(a)});return}}else if(t===31){if(t=De(a),t!==null){e.blockedOn=t,bu(e.priority,function(){lm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=eu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);es=n,a.target.dispatchEvent(n),es=null}else return t=Ya(a),t!==null&&im(t),e.blockedOn=a,!1;t.shift()}return!0}function rm(e,t,a){Hl(e)&&a.delete(t)}function Xh(){au=!1,pa!==null&&Hl(pa)&&(pa=null),ga!==null&&Hl(ga)&&(ga=null),ya!==null&&Hl(ya)&&(ya=null),gi.forEach(rm),yi.forEach(rm)}function Bl(e,t){e.blockedOn===t&&(e.blockedOn=null,au||(au=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,Xh)))}var Ul=null;function cm(e){Ul!==e&&(Ul=e,M.unstable_scheduleCallback(M.unstable_NormalPriority,function(){Ul===e&&(Ul=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(tu(n||a)===null)continue;break}var l=Ya(a);l!==null&&(e.splice(t,3),t-=3,$s(l,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function zn(e){function t(u){return Bl(u,e)}pa!==null&&Bl(pa,e),ga!==null&&Bl(ga,e),ya!==null&&Bl(ya,e),gi.forEach(t),yi.forEach(t);for(var a=0;a<Aa.length;a++){var n=Aa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)um(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],l=a[n+1],s=i[qe]||null;if(typeof l=="function")s||cm(a);else if(s){var o=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[qe]||null)o=s.formAction;else if(tu(i)!==null)continue}else o=s.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),cm(a)}}}function fm(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function nu(e){this._internalRoot=e}Ll.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));var a=t.current,n=lt();am(a,n,e,t,null,null)},Ll.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;am(e.current,2,null,e,null,null),yl(),t[qa]=null}};function Ll(e){this._internalRoot=e}Ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=Su();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Aa.length&&t!==0&&t<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&um(e)}};var mm=fe.version;if(mm!=="19.2.7")throw Error(p(527,mm,"19.2.7"));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=E(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var jh={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{xn=kl.inject(jh),We=kl}catch{}}return Si.createRoot=function(e,t){if(!D(e))throw Error(p(299));var a=!1,n="",i=Ac,l=vc,s=Sc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=em(e,1,!1,null,null,a,n,null,i,l,s,fm),e[qa]=t.current,ko(e),new nu(t)},Si.hydrateRoot=function(e,t,a){if(!D(e))throw Error(p(299));var n=!1,i="",l=Ac,s=vc,o=Sc,u=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(u=a.formState)),t=em(e,1,!0,t,a??null,n,i,u,l,s,o,fm),t.context=tm(null),a=t.current,n=lt(),n=Zl(n),i=na(n),i.callback=null,ia(a,i,n),a=n,t.current.lanes=a,wn(t,a),xt(t),e[qa]=t.current,ko(e),new Ll(t)},Si.version="19.2.7",Si}var Em;function tp(){if(Em)return su.exports;Em=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),su.exports=ep(),su.exports}var ap=tp();function np(){const[M,fe]=Tm.useState(null),K=[{id:1,question:"1. Explain Google Duplex as a case study in Artificial Intelligence.",answer:"",codeExample:`
Introduction

Google Duplex is an Artificial Intelligence (AI) system developed by Google that can make phone calls on 
behalf of users to complete real-world tasks, such as booking restaurant reservations or scheduling 
appointments. It was introduced in 2018 and became one of the most practical demonstrations of 
conversational AI.


What is Google Duplex?

Google Duplex is an AI-powered voice assistant that understands natural language and speaks like a human 
during phone conversations. It uses advanced AI techniques to interact with people naturally without 
requiring the other person to use any special software.


Example:
A user says:

"Book a table for two at 7 PM tomorrow."

Google Duplex calls the restaurant, speaks with the staff, confirms availability, and reports the result back to 
the user.


AI Technologies Used

1. Natural Language Processing (NLP)

Understands spoken language.
Interprets user requests.
Generates meaningful responses.

Example:

User: "I need a haircut on Friday afternoon."

The system understands:

Service: Haircut
Day: Friday
Preferred Time: Afternoon


2. Automatic Speech Recognition (ASR)

Converts human speech into text.
Understands different accents and speaking styles.


3. Text-to-Speech (TTS)

Converts AI-generated text into natural-sounding speech.
Includes pauses, intonation, and conversational fillers like:

"Hmm..."
"Uh..."
"Okay..."

These make conversations sound more natural.


4. Deep Learning

Google Duplex is trained using large datasets of human conversations.

It learns:

Sentence patterns
Conversation flow
Context
Common responses


5. Context Awareness

The AI remembers previous parts of the conversation.

Example:

Restaurant:
  "We don't have 7 PM."

AI:
  "Do you have anything around 7:30?"

It understands the context and adapts accordingly.


Features

Human-like conversations
Understands natural language
Handles interruptions
Responds in real time
Books appointments automatically
Maintains conversation context
Works without requiring special software for businesses


Applications

Restaurant reservations
Salon appointments
Medical appointment scheduling (where supported)
Business information inquiries
Customer service automation


Advantages

Saves users time.
Reduces manual phone calls.
Provides natural conversations.
Available through voice assistants.
Operates continuously without fatigue.

`},{id:2,question:"2. Define Artificial Intelligence. Explain Narrow AI and General AI with examples.",answer:"",codeExample:`
Definition:

Artificial Intelligence (AI) is the branch of computer science that focuses on creating machines and software 
capable of performing tasks that normally require human intelligence. These tasks include learning, 
reasoning, problem-solving, understanding language, recognizing images, and making decisions.


Simple Definition (Exam):

Artificial Intelligence (AI) is the ability of a computer or machine to imitate human intelligence by 
learning from data, solving problems, making decisions, and performing tasks automatically.


Types of Artificial Intelligence

AI is commonly classified into two major types:

1. Narrow AI (Weak AI)

Definition

Narrow AI is an AI system designed to perform one specific task or a limited set of related tasks. It cannot 
perform tasks outside its programmed domain.

Characteristics

Designed for a specific purpose.
Cannot think or reason like a human.
Fast and accurate within its assigned task.
Most AI systems in use today are Narrow AI.

Examples

Voice assistants (e.g., Google Assistant, Apple's Siri)
Chatbots for customer support
Email spam filters
Face recognition systems
Recommendation systems (Netflix, YouTube, Amazon)
Navigation apps like Google Maps


Example Scenario

A voice assistant can answer questions, set alarms, or play music, but it cannot independently perform 
unrelated tasks like designing a building or teaching a full university course.

Advantages

High accuracy for specific tasks.
Faster than humans for repetitive work.
Widely used in industries and daily life.

Limitations

Cannot perform tasks beyond its specialization.
Lacks human-like understanding and common sense.


2. General AI (Strong AI)
Definition

General AI is a theoretical form of AI that can understand, learn, reason, and perform any intellectual task 
that a human can do.


Characteristics

Human-level intelligence.
Learns different types of tasks without needing separate programming.
Can reason, plan, and adapt to new situations.
Does not yet exist in practical, real-world form.

Examples

Currently, there are no true examples of General AI. It remains an area of research.
Fictional examples include:

HAL 9000 (from 2001: A Space Odyssey)
JARVIS (from Iron Man)


Expected Capabilities

A General AI could:

  Learn new subjects independently.
  Solve unfamiliar problems.
  Understand emotions and context.
  Perform multiple jobs such as teaching, driving, writing, and medical diagnosis.

Advantages (If Developed)

Can perform a wide variety of tasks.
Adapts to new environments.
Reduces the need for task-specific programming.

Limitations

Not yet achieved.
Raises ethical, safety, and control challenges.
Requires significant advances in AI research.


Difference Between Narrow AI and General AI

| Feature        | Narrow AI                                                    | General AI                                                             |
| -------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Intelligence   | Limited to specific tasks                                    | Human-level intelligence across many tasks                             |
| Learning       | Learns only within its domain                                | Learns and adapts across domains                                       |
| Flexibility    | Low                                                          | High                                                                   |
| Current Status | Widely available today                                       | Still theoretical and under research                                   |
| Examples       | Siri, Google Assistant, spam filters, recommendation systems | No real-world examples; fictional examples include HAL 9000 and JARVIS |

`},{id:3,question:"3. Explain Learning in Problem Solving with its key aspects.",answer:"",codeExample:`
==========================================================
            LEARNING IN PROBLEM SOLVING (AI)
==========================================================

Definition:
-----------
Learning in Problem Solving is the process by which an Artificial Intelligence (AI)
system improves its ability to solve problems by gaining knowledge and experience
from previous attempts. Instead of solving every problem from the beginning, the
system learns from past successes and mistakes to solve future problems faster
and more accurately.

Exam Definition:
----------------
Learning in Problem Solving is the ability of an AI system to improve its
problem-solving performance by learning from experience and using acquired
knowledge to solve similar problems more efficiently.

==========================================================
KEY ASPECTS OF LEARNING IN PROBLEM SOLVING
==========================================================

1) Experience-Based Learning
----------------------------
Definition:
AI learns from previous problem-solving experiences. Past solutions help solve
similar future problems.

Example:
A chess-playing AI learns from thousands of previous games and improves its
strategy over time.

----------------------------------------------------------

2) Knowledge Acquisition
------------------------
Definition:
The system collects new facts, rules, and information while solving problems.
This knowledge is stored for future use.

Example:
A medical diagnosis system learns about new diseases and treatments as more
patient data becomes available.

----------------------------------------------------------

3) Pattern Recognition
----------------------
Definition:
AI identifies patterns or similarities in data. Recognizing patterns helps
predict solutions for new problems.

Example:
An email spam filter learns to recognize common characteristics of spam
messages.

----------------------------------------------------------

4) Generalization
-----------------
Definition:
AI applies knowledge gained from one problem to solve similar problems. This
reduces the need to learn every problem separately.

Example:
A language translation system uses grammar learned from previous sentences to
translate new ones.

----------------------------------------------------------

5) Error Correction
-------------------
Definition:
The system analyzes mistakes and modifies its approach. Learning from errors
improves future performance.

Example:
A self-driving car adjusts its driving decisions after detecting unsafe actions
during testing.

----------------------------------------------------------

6) Adaptation
-------------
Definition:
AI adapts to changes in the environment or new information. It updates its
behavior instead of following fixed rules.

Example:
A navigation app changes the suggested route when it detects traffic
congestion.

----------------------------------------------------------

7) Performance Improvement
--------------------------
Definition:
Learning helps the system become more accurate, faster, and efficient over
time. Repeated practice leads to better decision-making.

Example:
A recommendation system improves movie suggestions as it learns a user's
viewing preferences.

==========================================================
IMPORTANCE OF LEARNING IN PROBLEM SOLVING
==========================================================

• Improves decision-making.
• Reduces repeated mistakes.
• Saves time by reusing previous knowledge.
• Handles new and complex problems effectively.
• Increases the efficiency and accuracy of AI systems.

==========================================================
APPLICATIONS
==========================================================

• Robotics
• Self-driving Cars
• Medical Diagnosis
• Recommendation Systems
• Fraud Detection
• Game-Playing AI
• Virtual Assistants

==========================================================
ADVANTAGES
==========================================================

• Learns from experience.
• Improves accuracy over time.
• Adapts to new situations.
• Reduces human effort.
• Solves problems more efficiently.

==========================================================
LIMITATIONS
==========================================================

• Requires large amounts of quality data.
• Learning can be time-consuming.
• Incorrect or biased data can lead to poor decisions.
• Complex problems may require significant computing resources.



==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Definition:
Learning in Problem Solving is the ability of an AI system to improve its
performance by learning from experience and using previous knowledge to solve
similar problems more efficiently.

Key Points:
• Learns from experience.
• Stores knowledge for future use.
• Recognizes patterns.
• Corrects mistakes.
• Adapts to new situations.
• Improves speed and accuracy.
      
      `},{id:4,question:"4. Explain Inductive Learning with characteristics and examples.",answer:"",codeExample:`
==========================================================
                 INDUCTIVE LEARNING (AI)
==========================================================

Definition:
-----------
Inductive Learning is a machine learning approach in which an AI system learns
general rules or patterns from specific examples or observations. Instead of
being explicitly programmed with rules, the system studies training data and
derives rules that can be used to make predictions or decisions on new,
unseen data.

Exam Definition:
----------------
Inductive Learning is the process of learning general rules from specific
examples so that an AI system can predict or solve new problems.

==========================================================
CHARACTERISTICS OF INDUCTIVE LEARNING
==========================================================

1) Learns from Examples
-----------------------
Definition:
The system is trained using a set of examples (training data). It identifies
relationships and patterns in the data.

Example:
A spam filter learns from thousands of labeled emails marked as
"Spam" or "Not Spam."

----------------------------------------------------------

2) Generalization
-----------------
Definition:
The learned rules are applied to new, unseen data. The goal is to make
accurate predictions beyond the training examples.

Example:
A handwriting recognition system recognizes new handwritten digits after
learning from many sample images.

----------------------------------------------------------

3) Data-Driven
--------------
Definition:
Learning depends on the quality and quantity of training data. More accurate
and diverse data generally leads to better performance.

Example:
A weather prediction model improves as it is trained on more historical
weather data.

----------------------------------------------------------

4) Rule Discovery
-----------------
Definition:
The system automatically discovers patterns or rules instead of relying on
manually written instructions.

Example:

If Marks ≥ 40
    Pass
Else
    Fail

----------------------------------------------------------

5) Handles Unseen Cases
-----------------------
Definition:
The learned model can classify or predict outcomes for new inputs that were
not part of the training data.

Example:
A face recognition system identifies a person's new photograph after learning
from earlier images.

----------------------------------------------------------

6) Improves with More Data
--------------------------
Definition:
Performance generally increases as more training examples become available.
The system becomes more accurate over time.

Example:
A movie recommendation system provides better suggestions as it learns from a
user's viewing history.

==========================================================
EXAMPLES OF INDUCTIVE LEARNING
==========================================================

• Email Spam Detection
  → Learns to classify emails as Spam or Not Spam.

• Handwriting Recognition
  → Identifies handwritten letters and digits.

• Medical Diagnosis
  → Predicts diseases based on patient symptoms and records.

• Weather Forecasting
  → Predicts weather using historical data.

• Product Recommendation Systems
  → Suggests products based on customer preferences.

• Face Recognition
  → Identifies people from images.

==========================================================
ADVANTAGES
==========================================================

• Learns automatically from data.
• Reduces the need for manual programming.
• Can make predictions for new situations.
• Improves as more training data becomes available.
• Widely used in AI and Machine Learning.

==========================================================
LIMITATIONS
==========================================================

• Requires a large amount of high-quality training data.
• Performance depends on the accuracy of the data.
• Biased or incomplete data can produce incorrect predictions.
• Complex models require significant computing resources.

==========================================================
APPLICATIONS
==========================================================

• Spam Filtering
• Speech Recognition
• Image Recognition
• Face Recognition
• Medical Diagnosis
• Fraud Detection
• Recommendation Systems
• Autonomous Vehicles

==========================================================
CONCLUSION
==========================================================

Inductive Learning is a fundamental technique in Artificial Intelligence and
Machine Learning. It enables AI systems to learn general rules from specific
examples by analyzing training data. The learned knowledge is then applied to
new situations to make predictions or decisions. Because of its ability to
generalize and improve with experience, inductive learning is widely used in
real-world AI applications.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Definition:
Inductive Learning is the process of learning general rules from specific
examples so that an AI system can predict or solve new problems.

Key Points:
• Learns from training data.
• Finds patterns automatically.
• Creates general rules.
• Makes predictions on new data.
• Improves with more examples.
• Widely used in Machine Learning.
      `},{id:5,question:"5. Write short notes on: Rote Learning, Learning by Taking Advice, Learning from Examples",answer:"",codeExample:`
==========================================================
             TYPES OF LEARNING IN ARTIFICIAL INTELLIGENCE
==========================================================

1) ROTE LEARNING (Learning by Memorizing)
==========================================================

Definition:
-----------
Rote Learning is a learning method in which an AI system simply memorizes
information without understanding it. The stored information is reused whenever
the same problem appears.

Exam Definition:
----------------
Rote Learning is the process of learning by memorizing information and using
stored answers to solve the same problems again.

----------------------------------------------------------
Characteristics
----------------------------------------------------------

• Learns by memorizing information.
• Stores answers in memory.
• Does not understand the concept.
• Gives stored answers quickly.
• Cannot solve new or different problems.

----------------------------------------------------------
Real-Life Example
----------------------------------------------------------

Question:
2 + 2 = ?

You memorize the answer "4".

Next time someone asks the same question, you immediately answer "4"
because you remembered it, not because you calculated it.

----------------------------------------------------------
AI Example
----------------------------------------------------------

Dictionary Database

Apple  → A Fruit
Dog    → An Animal
Car    → A Vehicle

When you search "Apple", the system simply shows the stored meaning.

----------------------------------------------------------
Advantages
----------------------------------------------------------

• Very simple and fast.
• Easy to implement.
• Gives instant answers.
• Useful for repeated problems.

----------------------------------------------------------
Limitations
----------------------------------------------------------

• No understanding of concepts.
• Cannot solve new problems.
• Depends completely on stored data.



==========================================================
2) LEARNING BY TAKING ADVICE
(Learning from a Teacher or Expert)
==========================================================

Definition:
-----------
Learning by Taking Advice is a learning method in which an AI system learns by
following instructions or advice given by a teacher, expert, or programmer.

Exam Definition:
----------------
Learning by Taking Advice is the process of learning from instructions or rules
provided by an expert instead of discovering them independently.

----------------------------------------------------------
Characteristics
----------------------------------------------------------

• Learns from teachers or experts.
• Follows given instructions.
• Learns quickly.
• Does not need trial and error.
• Depends on correct advice.

----------------------------------------------------------
Real-Life Example
----------------------------------------------------------

Your mother tells you:

"Before crossing the road, look left and right."

You follow her advice and learn the rule.

----------------------------------------------------------
AI Example
----------------------------------------------------------

A doctor tells a Medical AI:

IF Patient has High Fever AND Cough
THEN Check for Infection

The AI remembers this advice and follows it for future patients.

----------------------------------------------------------
Advantages
----------------------------------------------------------

• Learns quickly.
• Easy to train.
• Reduces mistakes.
• Useful when expert knowledge is available.

----------------------------------------------------------
Limitations
----------------------------------------------------------

• Depends on expert knowledge.
• Wrong advice produces wrong results.
• Cannot learn beyond the given instructions.



==========================================================
3) LEARNING FROM EXAMPLES
(Learning by Seeing Many Examples)
==========================================================

Definition:
-----------
Learning from Examples is a learning method in which an AI system studies many
examples, finds patterns, and uses those patterns to solve new problems.

Exam Definition:
----------------
Learning from Examples is the process of learning by observing many examples
and identifying patterns to make predictions for new situations.

----------------------------------------------------------
Characteristics
----------------------------------------------------------

• Learns from training examples.
• Finds hidden patterns.
• Can predict new cases.
• Improves with more examples.
• Requires a large amount of data.

----------------------------------------------------------
Real-Life Example
----------------------------------------------------------

Teacher shows:

🐶 Dog
🐶 Dog
🐶 Dog

After seeing many dogs, you recognize a new dog without anyone telling you.

----------------------------------------------------------
AI Example
----------------------------------------------------------

Email System

Training Data:
• 100 Spam Emails
• 100 Normal Emails

New Email Arrives

↓

AI compares patterns

↓

Prediction:
"This Email is Spam."

----------------------------------------------------------
Advantages
----------------------------------------------------------

• Learns automatically.
• Finds useful patterns.
• Can solve new problems.
• Improves accuracy with more data.

----------------------------------------------------------
Limitations
----------------------------------------------------------

• Needs many training examples.
• Training can take time.
• Incorrect data reduces accuracy.

==========================================================
COMPARISON TABLE
==========================================================

+--------------------------+----------------------------+------------------------------+
| Learning Method          | Simple Meaning             | Real-Life Example            |
+--------------------------+----------------------------+------------------------------+
| Rote Learning            | Learning by memorizing     | Remembering 2 + 2 = 4        |
| Taking Advice            | Learning from instructions | Parents teach road safety    |
| Learning from Examples   | Learning from examples     | Identifying a dog after      |
|                          |                            | seeing many dogs             |
+--------------------------+----------------------------+------------------------------+

==========================================================
TRICK TO REMEMBER (Exam)
==========================================================

Rote Learning
     ↓
Remember (Memorize) 🧠

Taking Advice
     ↓
Teacher tells you 👨‍🏫

Learning from Examples
     ↓
Learn by seeing many examples 👀

==========================================================
ONE-LINE DEFINITIONS (Very Important)
==========================================================

Rote Learning
-------------
Learning by memorizing information without understanding it.

Learning by Taking Advice
-------------------------
Learning from instructions or advice given by a teacher or expert.

Learning from Examples
----------------------
Learning by observing many examples and finding patterns to solve new
problems.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Rote Learning
• Memorizes information.
• Gives stored answers.
• No understanding.
• Cannot solve new problems.

Learning by Taking Advice
• Learns from expert instructions.
• Follows rules.
• Learns quickly.
• Depends on correct advice.

Learning from Examples
• Learns from examples.
• Finds patterns.
• Solves new similar problems.
• Improves with more data.
      
      `},{id:11,question:"11. Explain the Minimax Search Procedure with a suitable example.",answer:"",codeExample:`
==========================================================
               MINIMAX SEARCH PROCEDURE (AI)
==========================================================

Definition:
-----------
Minimax is an Artificial Intelligence (AI) search algorithm used in two-player
games such as Chess, Tic-Tac-Toe, and Checkers. It helps the computer choose
the best move by assuming that the opponent will always play the best possible
move.

Exam Definition:
----------------
Minimax is a search algorithm used in two-player games to find the best move
by maximizing the player's score and minimizing the opponent's score.

==========================================================
BASIC IDEA OF MINIMAX
==========================================================

Imagine you are playing Tic-Tac-Toe.

You want to win.
      ↓
(MAX Player)

Your opponent also wants to win.
      ↓
(MIN Player)

MAX Player
-----------
Chooses the highest score.

MIN Player
-----------
Chooses the lowest score.

Minimax = Mini + Max

Mini = Opponent tries to minimize your score.

Max  = You try to maximize your score.

==========================================================
HOW MINIMAX WORKS (Algorithm)
==========================================================

Step 1
------
Generate all possible moves.

↓

Step 2
------
Explore all future game positions (Game Tree).

↓

Step 3
------
Assign a score to each final position.

Win   = +10
Draw  =  0
Lose  = -10

↓

Step 4
------
MIN Player selects the smallest score.

↓

Step 5
------
MAX Player selects the largest score.

↓

Step 6
------
Repeat until the best move is found.

==========================================================
FLOW OF MINIMAX
==========================================================

Generate Possible Moves
          ↓
Build Game Tree
          ↓
Evaluate Final Positions
          ↓
MIN Chooses Lowest Value
          ↓
MAX Chooses Highest Value
          ↓
Best Move Selected

==========================================================
EXAMPLE 1 : GAME TREE
==========================================================

                 MAX
               /     \\
            MIN      MIN
           /   \\    /   \\
          3     5  2     9

----------------------------------------------------------
Step 1 : MIN Player
----------------------------------------------------------

Left MIN Node

min(3,5) = 3

Right MIN Node

min(2,9) = 2

Tree becomes:

                 MAX
               /     \\
              3       2

----------------------------------------------------------
Step 2 : MAX Player
----------------------------------------------------------

max(3,2) = 3

----------------------------------------------------------
Final Answer
----------------------------------------------------------

Best Move = Left Branch

Final Value = 3

==========================================================
EXAMPLE 2 : TIC-TAC-TOE
==========================================================

Possible Moves

+---------+----------+-------+
| Move    | Result   | Score |
+---------+----------+-------+
| A       | Win      | +10   |
| B       | Draw     |  0    |
| C       | Lose     | -10   |
+---------+----------+-------+

MAX Player chooses:

Move A (Score = +10)

Because +10 is the highest value.

If it is the opponent's turn,

MIN Player tries to force the move with the lowest score.

==========================================================
PSEUDOCODE OF MINIMAX
==========================================================

function Minimax(node, isMax)

    if node is Terminal
        return Score(node)

    if isMax
        best = -∞

        for each child
            best = max(best,
                       Minimax(child, false))

        return best

    else
        best = +∞

        for each child
            best = min(best,
                       Minimax(child, true))

        return best

==========================================================
CHARACTERISTICS
==========================================================

• Used in two-player games.
• Searches the complete game tree.
• Assumes both players play optimally.
• MAX player maximizes the score.
• MIN player minimizes the score.
• Produces the best possible move.

==========================================================
APPLICATIONS
==========================================================

• Chess
• Tic-Tac-Toe
• Checkers
• Connect Four
• Turn-Based Strategy Games
• Board Games
• Game AI

==========================================================
ADVANTAGES
==========================================================

• Finds the best possible move.
• Guarantees the optimal decision if the full game tree is searched.
• Easy to understand and implement.
• Useful for many turn-based games.

==========================================================
LIMITATIONS
==========================================================

• Slow for large game trees.
• Requires high computation.
• Uses a lot of memory.
• Time complexity increases rapidly.
• Often improved using Alpha-Beta Pruning.

==========================================================
EXAM POINTS TO REMEMBER
==========================================================

✔ Minimax is used in two-player games.

✔ MAX Player chooses the highest score.

✔ MIN Player chooses the lowest score.

✔ Win   = +10

✔ Draw  = 0

✔ Lose  = -10

✔ Assumes the opponent always plays the best move.

✔ Goal:
Find the best possible move.

==========================================================
SHORT CONCLUSION
==========================================================

The Minimax Search Procedure is an AI search algorithm used in two-player
games. It assumes that the MAX player tries to maximize the score, while the
MIN player tries to minimize it. By exploring all possible game states, the
algorithm selects the best move that leads to the optimal outcome.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Definition:
Minimax is a search algorithm used in two-player games to find the best move
by maximizing the player's score and minimizing the opponent's score.

Key Points:
• Used in Chess, Tic-Tac-Toe, and Checkers.
• MAX chooses the highest value.
• MIN chooses the lowest value.
• Explores the game tree.
• Assumes both players play optimally.
• Finds the best possible move.
      `},{id:12,question:"12. Explain Alpha-Beta Pruning (Alpha-Beta Cutoffs) with an example.",answer:"",codeExample:`
==========================================================
           ALPHA-BETA PRUNING (ALPHA-BETA CUTOFFS)
==========================================================

Definition:
-----------
Alpha-Beta Pruning is an improvement to the Minimax algorithm. It removes
(prunes) branches of the game tree that cannot affect the final decision,
making the search faster without changing the result.

Exam Definition:
----------------
Alpha-Beta Pruning is a technique used with the Minimax algorithm to skip
unnecessary branches of the game tree, reducing the number of nodes evaluated
while still finding the best move.

==========================================================
BASIC IDEA OF ALPHA-BETA PRUNING
==========================================================

Imagine you are buying a mobile phone.

Phone A = ₹20,000
✔ All required features

Phone B = ₹35,000
✔ Same features

Since Phone A is already the better choice, you do not waste time comparing
Phone B.

This is the idea behind Alpha-Beta Pruning.

The AI stops checking options that cannot become better than the current
best choice.

==========================================================
WHAT ARE ALPHA (α) AND BETA (β)?
==========================================================

Alpha (α)
----------
• Best (highest) value found so far for the MAX player.
• MAX always tries to increase Alpha.

Beta (β)
---------
• Best (lowest) value found so far for the MIN player.
• MIN always tries to decrease Beta.

==========================================================
PRUNING RULE
==========================================================

Condition:

        Alpha (α) ≥ Beta (β)

If this condition becomes TRUE,

↓

The remaining branches are NOT evaluated because they cannot change the
final decision.

This process is called **Pruning**.

==========================================================
HOW ALPHA-BETA PRUNING WORKS
==========================================================

Step 1
------
Generate all possible moves.

↓

Step 2
------
Build the Game Tree.

↓

Step 3
------
Evaluate nodes using the Minimax algorithm.

↓

Step 4
------
Update Alpha (MAX) and Beta (MIN) values.

↓

Step 5
------
If Alpha ≥ Beta

↓

Prune (Skip) the remaining branches.

↓

Step 6
------
Continue until the best move is found.

==========================================================
EXAMPLE : GAME TREE
==========================================================

                  MAX
                /                   MIN        MIN
            /         /              3     5    2     9

----------------------------------------------------------
Step 1 : Evaluate Left MIN Node
----------------------------------------------------------

Leaf Values

3
5

MIN chooses

min(3,5) = 3

Now,

Alpha = 3

----------------------------------------------------------
Step 2 : Evaluate Right MIN Node
----------------------------------------------------------

First Leaf = 2

MIN chooses

Beta = 2

Compare

Alpha = 3

Beta = 2

Since

Alpha (3) ≥ Beta (2)

The remaining node (9) is NOT checked.

It is pruned.

==========================================================
GAME TREE AFTER PRUNING
==========================================================

                  MAX
                /                   MIN        MIN
            /         /              3     5    2    ✘9

✘ = Pruned Node (Skipped)

==========================================================
FINAL DECISION
==========================================================

Left Branch

Value = 3

Right Branch

Value = 2

MAX chooses

max(3,2) = 3

Best Move = Left Branch

Final Value = 3

==========================================================
WHY IS ALPHA-BETA PRUNING USEFUL?
==========================================================

Without Alpha-Beta Pruning

• Checks every node.
• Takes more time.
• Performs more computations.

With Alpha-Beta Pruning

• Skips unnecessary nodes.
• Performs fewer computations.
• Makes decisions faster.
• Produces the same final answer.

==========================================================
FLOW OF ALPHA-BETA PRUNING
==========================================================

Generate Moves
      ↓
Create Game Tree
      ↓
Apply Minimax
      ↓
Update Alpha & Beta
      ↓
Alpha ≥ Beta ?
      ↓
YES
      ↓
Prune Remaining Branches
      ↓
Continue Search
      ↓
Best Move Selected

==========================================================
CHARACTERISTICS
==========================================================

• Used with the Minimax algorithm.
• Produces the same result as Minimax.
• Skips unnecessary branches.
• Reduces search time.
• Evaluates fewer nodes.
• Useful for large game trees.

==========================================================
APPLICATIONS
==========================================================

• Chess
• Tic-Tac-Toe
• Checkers
• Connect Four
• Game AI
• Two-player Strategy Games

==========================================================
ADVANTAGES
==========================================================

• Faster than the standard Minimax algorithm.
• Evaluates fewer nodes.
• Saves computation time.
• Uses less memory.
• Still finds the optimal move.

==========================================================
LIMITATIONS
==========================================================

• Performance depends on the order of moves.
• Large game trees can still require significant computation.
• More complex than the basic Minimax algorithm.

==========================================================
DIFFERENCE BETWEEN MINIMAX AND ALPHA-BETA PRUNING
==========================================================

+----------------------+------------------------------+
| Minimax              | Alpha-Beta Pruning           |
+----------------------+------------------------------+
| Checks all nodes     | Skips unnecessary nodes      |
| Slower               | Faster                       |
| More computations    | Fewer computations           |
| More search time     | Less search time             |
| Finds best move      | Finds same move efficiently  |
+----------------------+------------------------------+

==========================================================
EXAM POINTS TO REMEMBER
==========================================================

✔ Alpha (α) = Best score for MAX.

✔ Beta (β) = Best score for MIN.

✔ Pruning Condition:

      Alpha (α) ≥ Beta (β)

✔ Skips branches that cannot affect the final decision.

✔ Gives the same answer as Minimax.

✔ Faster than the Minimax algorithm.

==========================================================
SHORT CONCLUSION
==========================================================

Alpha-Beta Pruning is an optimization technique for the Minimax algorithm.
It improves search efficiency by eliminating branches that cannot influence
the final decision. As a result, it evaluates fewer nodes, reduces computation
time, and still produces the same optimal move as Minimax.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Definition:
Alpha-Beta Pruning is a technique used with the Minimax algorithm to skip
unnecessary branches of the game tree while still finding the best move.

Key Points:
• Used with Minimax.
• Alpha = Best value for MAX.
• Beta = Best value for MIN.
• Pruning Condition: Alpha ≥ Beta.
• Skips unnecessary branches.
• Faster than Minimax.
• Produces the same optimal result.
      
      `},{id:13,question:"13. Explain the Blocks World Problem with a neat diagram/example.",answer:"",codeExample:`
==========================================================
                 BLOCKS WORLD PROBLEM (AI)
==========================================================

Definition:
-----------
The Blocks World Problem is a classic Artificial Intelligence (AI) planning
problem used to study planning and problem solving. It involves rearranging
blocks from an initial arrangement to a desired (goal) arrangement by
following specific rules.

Exam Definition:
----------------
Blocks World Problem is an AI planning problem in which blocks are rearranged
from an initial state to a goal state by following specific rules.

==========================================================
BASIC IDEA OF BLOCKS WORLD
==========================================================

Imagine you have three blocks:

        A
        B
        C

Your task is to arrange these blocks into a required order.

You can move only ONE block at a time,
just like playing with toy building blocks.

==========================================================
RULES OF BLOCKS WORLD
==========================================================

1. Only one block can be moved at a time.

2. A block can be moved only if no other block is on top of it.
   (The block must be CLEAR.)

3. A block can be placed:
   • On the table.
   • On another clear block.

4. Two blocks cannot be moved together.

==========================================================
INITIAL STATE
==========================================================

        A
        B

        C

--------------------------
          TABLE

Here,

• A is on B.
• B is on the Table.
• C is on the Table.

==========================================================
GOAL STATE
==========================================================

        B
        C

        A

--------------------------
          TABLE

Here,

• B is on C.
• C is on the Table.
• A is on the Table.

==========================================================
STEPS TO REACH THE GOAL
==========================================================

Step 1
------

Move A from B to the Table.

      A      B      C

--------------------------
          TABLE

----------------------------------------------------------

Step 2
------

Move B onto C.

          B
          C

      A

--------------------------
          TABLE

✅ Goal Achieved

==========================================================
STATE REPRESENTATION
==========================================================

Initial State
-------------

On(A, B)

OnTable(B)

OnTable(C)

Clear(A)

Clear(C)

----------------------------------------------------------

Goal State
----------

On(B, C)

OnTable(A)

OnTable(C)

Clear(B)

----------------------------------------------------------

Meaning of Predicates
---------------------

On(X, Y)
→ Block X is on Block Y.

OnTable(X)
→ Block X is on the Table.

Clear(X)
→ No block is on top of Block X.

==========================================================
FLOW OF BLOCKS WORLD PROBLEM
==========================================================

Initial State
      ↓
Check Clear Blocks
      ↓
Move One Block
      ↓
Update Block Positions
      ↓
Repeat Until Goal State
      ↓
Goal Achieved

==========================================================
EXAMPLE
==========================================================

Initial Arrangement

        A
        B

        C

↓

Move A to Table

↓

Move B onto C

↓

Final Arrangement

        B
        C

        A

==========================================================
CHARACTERISTICS
==========================================================

• Classic AI planning problem.
• Uses an Initial State and Goal State.
• Only one block moves at a time.
• A block must be clear before moving.
• Uses logical state representation.
• Demonstrates search and planning techniques.

==========================================================
APPLICATIONS
==========================================================

• Robot Planning
• Robotics
• Automated Warehouses
• AI Planning Systems
• Logistics
• Object Manipulation
• Industrial Automation

==========================================================
ADVANTAGES
==========================================================

• Easy to understand.
• Demonstrates AI planning concepts.
• Helps design search algorithms.
• Useful for learning problem-solving techniques.
• Widely used in AI education.

==========================================================
LIMITATIONS
==========================================================

• Suitable only for simple environments.
• Complexity increases with more blocks.
• Not practical for many real-world situations.
• Requires additional rules for complex tasks.

==========================================================
IMPORTANT TERMS
==========================================================

Initial State
-------------
Starting arrangement of blocks.

Goal State
----------
Desired arrangement of blocks.

Clear Block
-----------
A block with no other block placed on top of it.

Operator (Move)
---------------
Action used to move one block from one place to another.

==========================================================
EXAM POINTS TO REMEMBER
==========================================================

✔ Blocks World is an AI Planning Problem.

✔ Rearranges blocks from an Initial State to a Goal State.

✔ Only one block moves at a time.

✔ A block must be CLEAR before moving.

✔ A block can be placed:
   • On the Table.
   • On another Clear Block.

✔ Common Predicates:
   • On(X,Y)
   • OnTable(X)
   • Clear(X)

✔ Used in Robotics and AI Planning.

==========================================================
SHORT CONCLUSION
==========================================================

The Blocks World Problem is a classical AI planning problem used to study
search and problem-solving techniques. It involves moving blocks from an
initial arrangement to a desired goal arrangement while following specific
rules. It is widely used in robotics, automated planning, and Artificial
Intelligence research.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Definition:
Blocks World Problem is an AI planning problem in which blocks are rearranged
from an initial state to a goal state by following specific rules.

Key Points:
• AI planning problem.
• Initial State → Goal State.
• One block moves at a time.
• Block must be clear before moving.
• Uses predicates: On(), OnTable(), Clear().
• Used in robotics and automated planning.
      
      `},{id:14,question:"14. Explain Goal Stack Planning with its working and advantages.",answer:"",codeExample:`
==========================================================
                 GOAL STACK PLANNING (GSP)
==========================================================

Definition:
-----------
Goal Stack Planning (GSP) is an Artificial Intelligence (AI) planning
technique that solves a problem by breaking a large goal into smaller goals
(sub-goals). These goals are stored in a stack and solved one by one until
the final goal is achieved.

Exam Definition:
----------------
Goal Stack Planning is an AI planning method that uses a stack to store goals
and sub-goals, solving them step by step until the main goal is completed.

==========================================================
BASIC IDEA OF GOAL STACK PLANNING
==========================================================

Imagine your goal is:

        "Make a Cup of Tea"

You cannot complete it in one step.

So, you divide it into smaller tasks.

1. Boil Water
2. Add Tea Leaves
3. Add Sugar
4. Add Milk
5. Pour Tea into Cup

↓

Complete each task one by one.

↓

Tea is Ready.

This is exactly how Goal Stack Planning works.

==========================================================
WORKING OF GOAL STACK PLANNING
==========================================================

Step 1
------
Set the Main Goal.

Example:

Goal = Build a Tower of Blocks.

↓

Step 2
------
Push the Main Goal onto the Stack.

Stack

--------------------
| Build Tower      |
--------------------

↓

Step 3
------
Break the Main Goal into Sub-goals.

Example:

• Place Block B on Block C
• Place Block A on Block B

Push these sub-goals onto the stack.

Stack

--------------------
| Place A on B     |
| Place B on C     |
--------------------

↓

Step 4
------
Solve the Sub-goals.

The AI removes the top goal from the stack,
completes it, and moves to the next goal.

Example

✔ Place B on C

✔ Place A on B

↓

Step 5
------
After completing all sub-goals,

↓

Main Goal Achieved.

==========================================================
FLOW OF GOAL STACK PLANNING
==========================================================

Main Goal
      ↓
Push Goal into Stack
      ↓
Break into Sub-goals
      ↓
Push Sub-goals into Stack
      ↓
Solve Top Goal (LIFO)
      ↓
Repeat Until Stack is Empty
      ↓
Goal Achieved

==========================================================
EXAMPLE : BLOCKS WORLD
==========================================================

Initial State

A      B      C

--------------------------
          TABLE

(All blocks are on the table.)

----------------------------------------------------------

Goal State

        A
        B
        C

--------------------------
          TABLE

==========================================================
STACK OPERATIONS
==========================================================

Main Goal

A on B on C

↓

Break into Sub-goals

1. Put B on C

2. Put A on B

↓

Execute Actions

Move B → C

↓

Move A → B

↓

Goal Achieved

==========================================================
STACK REPRESENTATION
==========================================================

Initial Stack

------------------------
| A on B on C          |
------------------------

↓

After Decomposition

------------------------
| Put A on B           |
| Put B on C           |
------------------------

↓

Execution

Pop → Put B on C ✔

Pop → Put A on B ✔

↓

Stack Empty

↓

Goal Achieved ✔

==========================================================
WHY IS A STACK USED?
==========================================================

Goal Stack Planning uses a

LIFO (Last In, First Out)

Stack.

The most recently added sub-goal is solved first.

Example

Push Goal A

↓

Push Goal B

↓

Push Goal C

↓

Execution Order

Goal C

↓

Goal B

↓

Goal A

==========================================================
CHARACTERISTICS
==========================================================

• Uses a Stack (LIFO) data structure.
• Breaks a large goal into smaller sub-goals.
• Solves one goal at a time.
• Plans before execution.
• Produces an ordered sequence of actions.
• Commonly used in AI Planning.

==========================================================
APPLICATIONS
==========================================================

• Robotics
• Blocks World Problem
• Automated Planning Systems
• Warehouse Automation
• Task Scheduling
• Intelligent Agents
• Industrial Automation

==========================================================
ADVANTAGES
==========================================================

• Easy to understand.
• Easy to implement.
• Reduces problem complexity.
• Organizes tasks systematically.
• Produces an efficient action sequence.
• Useful in robotics and AI planning.

==========================================================
LIMITATIONS
==========================================================

• Not suitable for highly dynamic environments.
• Difficult when many goals interact.
• May require re-planning if conditions change.
• Less effective for uncertain environments.

==========================================================
IMPORTANT TERMS
==========================================================

Goal
----
The final objective to be achieved.

Sub-goal
--------
A smaller task required to achieve the main goal.

Stack
-----
A data structure used to store goals.

LIFO
----
Last In, First Out.

The last goal added to the stack is solved first.

==========================================================
DIFFERENCE BETWEEN GOAL STACK PLANNING AND BLOCKS WORLD
==========================================================

+---------------------------+-------------------------------+
| Goal Stack Planning       | Blocks World Problem          |
+---------------------------+-------------------------------+
| Planning Technique        | AI Planning Problem           |
| Uses a Stack              | Uses Blocks                   |
| Breaks goals into tasks   | Rearranges blocks             |
| Solves sub-goals          | Moves one block at a time     |
| Used in many AI problems  | Common example of GSP         |
+---------------------------+-------------------------------+

==========================================================
EXAM POINTS TO REMEMBER
==========================================================

✔ Goal Stack Planning (GSP) is an AI Planning Technique.

✔ Uses a Stack.

✔ Stack follows:

LIFO (Last In, First Out)

✔ Breaks one large goal into smaller sub-goals.

✔ Solves each sub-goal one by one.

✔ Commonly used in:

• Blocks World Problem
• Robotics
• Automated Planning Systems

==========================================================
SHORT CONCLUSION
==========================================================

Goal Stack Planning is an AI planning technique that solves complex problems
by dividing a main goal into smaller sub-goals. These goals are stored in a
LIFO stack and executed one by one until the final goal is achieved. It is
widely used in robotics, automated planning, and the Blocks World Problem.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Definition:
Goal Stack Planning is an AI planning method that uses a stack to store goals
and sub-goals, solving them step by step until the main goal is completed.

Key Points:
• AI planning technique.
• Uses a Stack (LIFO).
• Breaks large goals into sub-goals.
• Solves one goal at a time.
• Commonly used in Blocks World and Robotics.
      `},{id:15,question:"15. Explain the Components of a Planning System.",answer:"",codeExample:`
==========================================================
          COMPONENTS OF A PLANNING SYSTEM (AI)
==========================================================

Definition:
-----------
A Planning System in Artificial Intelligence (AI) is a system that decides
what actions should be performed and in what order to achieve a specific goal.

Exam Definition:
----------------
A Planning System is an AI system that creates a sequence of actions to
achieve a desired goal.

==========================================================
MAIN COMPONENTS OF A PLANNING SYSTEM
==========================================================

A Planning System consists of the following six main components:

1. Initial State
2. Goal State
3. Actions (Operators)
4. State Space
5. Planner (Planning Algorithm)
6. Plan (Solution)

==========================================================
1) INITIAL STATE
==========================================================

Meaning:
--------
The Initial State is the starting situation before planning begins.

Example:

A      B      C

--------------------------
          TABLE

Here,

• A is on the Table.
• B is on the Table.
• C is on the Table.

==========================================================
2) GOAL STATE
==========================================================

Meaning:
--------
The Goal State is the desired final situation that the AI wants to achieve.

Example:

        A
        B
        C

--------------------------
          TABLE

Goal:

A is on B

B is on C

C is on the Table

==========================================================
3) ACTIONS (OPERATORS)
==========================================================

Meaning:
--------
Actions (Operators) are the operations used to move from the Initial State
to the Goal State.

Examples:

• Pick up a block.
• Put a block on another block.
• Move a block to the table.
• Remove a block from another block.

These actions change the current state.

==========================================================
4) STATE SPACE
==========================================================

Meaning:
--------
State Space is the collection of all possible states (arrangements) that can
be reached from the Initial State by applying actions.

Example of Possible States:

• A on B
• B on C
• A on C
• All blocks on the Table

The planner searches this State Space to find the best path to the Goal State.

==========================================================
5) PLANNER (PLANNING ALGORITHM)
==========================================================

Meaning:
--------
The Planner is the part of the system that selects the best sequence of
actions required to reach the Goal State.

Example:

Goal:

        A
        B
        C

Planner chooses:

1. Move B onto C.
2. Move A onto B.

==========================================================
6) PLAN (SOLUTION)
==========================================================

Meaning:
--------
A Plan is the ordered sequence of actions generated by the Planner to achieve
the Goal State.

Example:

Step 1 : Pick up B.

↓

Step 2 : Place B on C.

↓

Step 3 : Pick up A.

↓

Step 4 : Place A on B.

↓

Goal Achieved ✔

==========================================================
WORKING OF A PLANNING SYSTEM
==========================================================

Initial State
      │
      ▼
Goal State
      │
      ▼
Planner
      │
      ▼
Choose Actions
      │
      ▼
Generate Plan
      │
      ▼
Execute Plan
      │
      ▼
Goal Achieved

==========================================================
EXAMPLE
==========================================================

Initial State

A      B      C

--------------------------
          TABLE

↓

Goal State

        A
        B
        C

--------------------------
          TABLE

↓

Generated Plan

1. Move B onto C.

2. Move A onto B.

↓

Goal Achieved ✔

==========================================================
FLOW OF A PLANNING SYSTEM
==========================================================

Initial State
      ↓
Analyze Goal
      ↓
Search State Space
      ↓
Select Actions
      ↓
Generate Plan
      ↓
Execute Plan
      ↓
Goal Achieved

==========================================================
CHARACTERISTICS
==========================================================

• Goal-oriented system.
• Uses planning before execution.
• Generates an ordered sequence of actions.
• Searches the State Space.
• Works from Initial State to Goal State.
• Widely used in Artificial Intelligence.

==========================================================
APPLICATIONS
==========================================================

• Robotics
• Navigation Systems
• Warehouse Automation
• Game AI
• Task Scheduling
• Self-Driving Vehicles
• Industrial Automation
• Intelligent Agents

==========================================================
ADVANTAGES
==========================================================

• Solves problems step by step.
• Produces an organized sequence of actions.
• Reduces unnecessary work.
• Useful for complex decision-making.
• Improves efficiency.

==========================================================
LIMITATIONS
==========================================================

• Difficult for very large problems.
• Unexpected changes may require re-planning.
• Can be time-consuming.
• Requires accurate state information.

==========================================================
SUMMARY OF COMPONENTS
==========================================================

+----------------------+-------------------------------------------+
| Component            | Purpose                                   |
+----------------------+-------------------------------------------+
| Initial State        | Starting situation                        |
| Goal State           | Desired final situation                   |
| Actions (Operators)  | Change one state into another             |
| State Space          | All possible states                       |
| Planner              | Selects the best sequence of actions      |
| Plan                 | Final ordered list of actions             |
+----------------------+-------------------------------------------+

==========================================================
EXAM POINTS TO REMEMBER
==========================================================

✔ A Planning System is used to achieve a goal.

✔ Main Components:

1. Initial State
2. Goal State
3. Actions (Operators)
4. State Space
5. Planner
6. Plan

✔ Planner searches the State Space.

✔ Plan is an ordered sequence of actions.

✔ Used in Robotics, Navigation, and AI Planning.

==========================================================
SHORT CONCLUSION
==========================================================

A Planning System is an important part of Artificial Intelligence that helps
an AI agent achieve a desired goal by generating an organized sequence of
actions. It consists of the Initial State, Goal State, Actions, State Space,
Planner, and Plan. Planning systems are widely used in robotics, automation,
navigation, and intelligent decision-making.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Definition:
A Planning System is an AI system that creates a sequence of actions to
achieve a desired goal.

Key Points:
• Initial State – Starting situation.
• Goal State – Desired final situation.
• Actions – Operations that change states.
• State Space – All possible states.
• Planner – Chooses the best actions.
• Plan – Ordered sequence of actions.
      
      `},{id:16,question:"16. Write a short note on Game Playing in AI (Overview).",answer:"",codeExample:`
==========================================================
               GAME PLAYING IN ARTIFICIAL INTELLIGENCE
                        (OVERVIEW)
==========================================================

Definition:
-----------
Game Playing in Artificial Intelligence (AI) is a field of AI in which
computers are designed to play games intelligently by making decisions,
planning moves, and selecting the best strategy to win against an opponent.

Exam Definition:
----------------
Game Playing in AI is the use of Artificial Intelligence to enable computers
to play games by making intelligent decisions and choosing the best possible
moves.

==========================================================
BASIC IDEA OF GAME PLAYING
==========================================================

Imagine you are playing Chess.

Before making a move, you think:

• If I move this piece, what will my opponent do?

• Which move gives me the best chance to win?

An AI thinks in a similar way.

It:

✔ Checks all possible moves.

✔ Predicts the opponent's response.

✔ Evaluates each move.

✔ Selects the best move.

==========================================================
HOW GAME PLAYING WORKS
==========================================================

Step 1
------
Observe the current game position.

↓

Step 2
------
Generate all possible moves.

↓

Step 3
------
Predict the opponent's possible responses.

↓

Step 4
------
Evaluate every possible move.

↓

Step 5
------
Choose the best move.

↓

Continue until the game ends.

==========================================================
FLOW OF GAME PLAYING
==========================================================

Current Game Position
          ↓
Generate Possible Moves
          ↓
Predict Opponent's Moves
          ↓
Evaluate Each Move
          ↓
Select Best Move
          ↓
Play the Move
          ↓
Repeat Until Game Ends

==========================================================
TECHNIQUES USED IN GAME PLAYING
==========================================================

1) Minimax Algorithm
--------------------
• Used in two-player games.
• MAX player tries to maximize the score.
• MIN player tries to minimize the score.
• Finds the best possible move.

----------------------------------------------------------

2) Alpha-Beta Pruning
---------------------
• Improves the Minimax algorithm.
• Skips unnecessary branches.
• Reduces search time.
• Produces the same optimal result as Minimax.

----------------------------------------------------------

3) Heuristic Evaluation
-----------------------
• Used when searching the entire game tree is not practical.
• Estimates how good a game position is.
• Helps make faster decisions in complex games.

==========================================================
EXAMPLES OF AI GAME PLAYING
==========================================================

• Chess
• Tic-Tac-Toe
• Checkers
• Connect Four
• Go
• Sudoku (Single-Player Puzzle)
• Othello (Reversi)

==========================================================
APPLICATIONS
==========================================================

• Video Games
• Entertainment
• Training and Education
• AI Research
• Strategy Development
• Robotics
• Decision-Making Systems
• Military Simulations

==========================================================
CHARACTERISTICS
==========================================================

• Goal-oriented.
• Makes intelligent decisions.
• Plans future moves.
• Predicts opponent actions.
• Uses search algorithms.
• Selects the best strategy.

==========================================================
ADVANTAGES
==========================================================

• Improves decision-making.
• Develops advanced AI techniques.
• Solves complex strategic problems.
• Useful for testing AI algorithms.
• Helps build intelligent systems.

==========================================================
LIMITATIONS
==========================================================

• Complex games require high computation.
• Large game trees take more time.
• Cannot always search every possible move.
• Advanced games require powerful hardware.

==========================================================
IMPORTANT ALGORITHMS
==========================================================

+----------------------+--------------------------------------+
| Algorithm            | Purpose                              |
+----------------------+--------------------------------------+
| Minimax              | Finds the best move                  |
| Alpha-Beta Pruning   | Speeds up Minimax                    |
| Heuristic Evaluation | Estimates board positions            |
+----------------------+--------------------------------------+

==========================================================
EXAMPLES OF GAME TYPES
==========================================================

+----------------------+--------------------------------------+
| Game                 | AI Technique Used                    |
+----------------------+--------------------------------------+
| Chess                | Minimax + Alpha-Beta                 |
| Tic-Tac-Toe          | Minimax                              |
| Checkers             | Minimax + Alpha-Beta                 |
| Connect Four         | Minimax + Heuristics                 |
| Go                   | Heuristics + Advanced AI             |
| Sudoku               | Search + Constraint Solving          |
+----------------------+--------------------------------------+

==========================================================
EXAM POINTS TO REMEMBER
==========================================================

✔ Game Playing is a branch of Artificial Intelligence.

✔ AI analyzes possible moves before making a decision.

✔ Main Techniques:

• Minimax Algorithm
• Alpha-Beta Pruning
• Heuristic Evaluation

✔ Common Games:

• Chess
• Tic-Tac-Toe
• Checkers
• Connect Four
• Go

✔ Goal:
Choose the best possible move to win the game.

==========================================================
SHORT CONCLUSION
==========================================================

Game Playing is an important application of Artificial Intelligence in which
computers play games intelligently by analyzing possible moves, predicting
opponent actions, and selecting the best strategy. AI commonly uses Minimax,
Alpha-Beta Pruning, and Heuristic Evaluation to improve decision-making and
performance in games.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Definition:
Game Playing in AI is the use of Artificial Intelligence to enable computers
to play games by making intelligent decisions and choosing the best possible
moves.

Key Points:
• AI plays games intelligently.
• Generates and evaluates possible moves.
• Predicts opponent's moves.
• Uses Minimax and Alpha-Beta Pruning.
• Applied in Chess, Tic-Tac-Toe, Checkers, and Go.
      `},{id:21,question:"21. Explain Fuzzy Logic and Fuzzy Sets with suitable examples.",answer:"",codeExample:`
==========================================================
              FUZZY LOGIC AND FUZZY SETS (AI)
==========================================================

Definition:
-----------
Fuzzy Logic is an Artificial Intelligence (AI) technique that allows computers
to make decisions using degrees of truth between 0 and 1 instead of only
True (1) or False (0).

A Fuzzy Set is a collection in which each element can belong to the set with
a membership value between 0 and 1.

==========================================================
1) FUZZY LOGIC
==========================================================

Definition:
-----------
Fuzzy Logic is a method used in Artificial Intelligence to make decisions when
information is not simply True or False.

Unlike classical logic, fuzzy logic allows partial truth.

----------------------------------------------------------
Exam Definition
----------------------------------------------------------

Fuzzy Logic is an AI technique that allows systems to make decisions using
degrees of truth between 0 and 1 instead of only True or False.

==========================================================
NORMAL LOGIC vs FUZZY LOGIC
==========================================================

Normal (Crisp) Logic

True  = 1

False = 0

Only two possible answers.

----------------------------------------------------------

Fuzzy Logic

True can be any value between 0 and 1.

Example:

0.2

0.5

0.7

0.9

This allows partial truth.

==========================================================
EXAMPLE OF FUZZY LOGIC
==========================================================

Question:

Is 30°C Hot?

Normal Logic

Hot = Yes

or

Hot = No

----------------------------------------------------------

Fuzzy Logic

30°C

↓

Hot = 0.6

Meaning:

30°C belongs to the "Hot" category with a membership value of 0.6.

==========================================================
2) FUZZY SET
==========================================================

Definition:
-----------
A Fuzzy Set is a collection where every element has a membership value between
0 and 1.

----------------------------------------------------------
Exam Definition
----------------------------------------------------------

A Fuzzy Set is a set in which an element can belong to the set with a degree
of membership between 0 and 1.

==========================================================
EXAMPLE : HOT TEMPERATURE
==========================================================

+--------------+--------------------------+
| Temperature  | Membership in "Hot"      |
+--------------+--------------------------+
| 20°C         | 0.0                      |
| 25°C         | 0.2                      |
| 30°C         | 0.6                      |
| 35°C         | 0.9                      |
| 40°C         | 1.0                      |
+--------------+--------------------------+

Meaning

20°C → Not Hot

25°C → Slightly Hot

30°C → Moderately Hot

35°C → Very Hot

40°C → Completely Hot

The values between 0 and 1 are called
**Membership Values**.

==========================================================
NORMAL SET vs FUZZY SET
==========================================================

Example : "Tall Person"

------------------------------
Normal (Crisp) Set
------------------------------

Height ≥ 180 cm

↓

Tall = 1

Height < 180 cm

↓

Tall = 0

There is a sharp boundary.

----------------------------------------------------------

Fuzzy Set

+-------------+----------------+
| Height      | Tall           |
+-------------+----------------+
| 160 cm      | 0.2            |
| 170 cm      | 0.5            |
| 180 cm      | 0.8            |
| 190 cm      | 1.0            |
+-------------+----------------+

There is no sharp boundary.

==========================================================
HOW FUZZY LOGIC USES FUZZY SETS
==========================================================

Example : Automatic Fan

Temperature = 30°C

↓

Fuzzy Set

Hot = 0.6

↓

Fuzzy Rule

IF Temperature is Hot

THEN Fan Speed = High

↓

Decision

Increase Fan Speed

==========================================================
FLOW OF FUZZY LOGIC
==========================================================

Temperature
      ↓
Fuzzy Set
(Hot = 0.6)
      ↓
Fuzzy Rules
(IF Hot → Fan Speed High)
      ↓
Decision
      ↓
Increase Fan Speed

==========================================================
EXAMPLE : WASHING MACHINE
==========================================================

Inputs

• Amount of Clothes
• Dirt Level
• Water Level

Example

Dirt Level = 0.8

↓

Fuzzy Logic

↓

Washing Time = High

The machine does not simply say:

Dirty

or

Not Dirty

Instead, it considers different degrees of dirtiness.

==========================================================
DIFFERENCE BETWEEN FUZZY SET AND FUZZY LOGIC
==========================================================

+--------------------------+-------------------------------+
| Fuzzy Set                | Fuzzy Logic                   |
+--------------------------+-------------------------------+
| Represents information   | Uses information for reasoning|
| Shows membership value   | Makes decisions using rules   |
| Values range 0 to 1      | Uses fuzzy IF-THEN rules      |
| Answers "How Much?"      | Answers "What To Do?"         |
| Example: Hot = 0.6       | IF Hot → Fan Speed High       |
+--------------------------+-------------------------------+

==========================================================
EASY TRICK TO REMEMBER
==========================================================

Fuzzy Set

↓

HOW MUCH?

Example:

30°C is Hot = 0.6

----------------------------------------------------------

Fuzzy Logic

↓

WHAT SHOULD WE DO?

Example:

IF Temperature is Hot

↓

Increase Fan Speed

==========================================================
APPLICATIONS OF FUZZY LOGIC
==========================================================

• Air Conditioners
• Washing Machines
• Automobile Control Systems
• Robotics
• Automatic Cameras
• Industrial Control Systems
• Medical Decision-Support Systems
• Smart Home Devices

==========================================================
ADVANTAGES
==========================================================

• Handles uncertain information.
• Works like human thinking.
• Supports concepts such as Hot, Cold, Fast, Slow.
• Useful when exact mathematical formulas are difficult.
• Makes flexible decisions.

==========================================================
LIMITATIONS
==========================================================

• Designing fuzzy rules requires expert knowledge.
• Results depend on membership functions.
• Not suitable for every problem.
• Difficult to design for very complex systems.

==========================================================
IMPORTANT TERMS
==========================================================

Membership Value
----------------
A value between 0 and 1 that shows how strongly an element belongs to a
Fuzzy Set.

Examples:

0.0 = Not a Member

0.5 = Partial Member

1.0 = Full Member

----------------------------------------------------------

Fuzzy Rule
----------
An IF–THEN rule used to make decisions.

Example:

IF Temperature is Hot

THEN Fan Speed = High

==========================================================
EXAM POINTS TO REMEMBER
==========================================================

✔ Fuzzy Logic works with values between 0 and 1.

✔ Fuzzy Set represents partial membership.

✔ Membership Value ranges from 0 to 1.

✔ Fuzzy Logic uses IF–THEN Rules.

✔ Fuzzy Set = Represents Information.

✔ Fuzzy Logic = Makes Decisions.

✔ Used in:

• Air Conditioners
• Washing Machines
• Robotics
• Medical Systems
• Industrial Automation

==========================================================
SHORT CONCLUSION
==========================================================

Fuzzy Logic is an Artificial Intelligence technique that makes decisions using
degrees of truth rather than only True or False. It uses Fuzzy Sets, where
each element has a membership value between 0 and 1. Fuzzy Sets represent
information, while Fuzzy Logic applies IF–THEN rules to make intelligent
decisions. This approach is widely used in smart appliances, robotics,
industrial automation, and medical decision-support systems.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Definition:
Fuzzy Logic is an AI technique that allows systems to make decisions using
degrees of truth between 0 and 1 instead of only True or False.

Fuzzy Set:
A Fuzzy Set is a set in which each element has a membership value between
0 and 1.

Key Points:
• Fuzzy Logic uses partial truth.
• Membership values range from 0 to 1.
• Fuzzy Sets represent information.
• Fuzzy Logic makes decisions using IF–THEN rules.
• Used in air conditioners, washing machines, robotics, and medical systems.
      
      `},{id:22,question:"22. Explain Membership Functions. Also explain Fuzzification and Defuzzification with a diagram/example.",answer:"",codeExample:`
==========================================================
   MEMBERSHIP FUNCTIONS, FUZZIFICATION & DEFUZZIFICATION
==========================================================

Definition:
-----------
Membership Functions, Fuzzification, and Defuzzification are the three main
concepts of Fuzzy Logic. They help convert exact (crisp) values into fuzzy
values, apply fuzzy reasoning, and then convert the result back into an exact
(crisp) output.

==========================================================
1) MEMBERSHIP FUNCTION
==========================================================

Definition:
-----------
A Membership Function is a function that tells how strongly an input belongs
to a fuzzy set.

The membership value always lies between:

0 and 1

----------------------------------------------------------
Exam Definition
----------------------------------------------------------

A Membership Function defines the degree to which an input belongs to a fuzzy
set. Its value ranges from 0 to 1.

==========================================================
MEMBERSHIP VALUES
==========================================================

Membership Value = 0
--------------------
Does NOT belong to the fuzzy set.

Membership Value = 0.5
----------------------
Partially belongs to the fuzzy set.

Membership Value = 1
--------------------
Completely belongs to the fuzzy set.

==========================================================
EXAMPLE : TEMPERATURE
==========================================================

Suppose the fuzzy sets are:

• Cold
• Warm
• Hot

For Temperature = 30°C

+-------------+------------------+
| Fuzzy Set   | Membership Value |
+-------------+------------------+
| Cold        | 0.0              |
| Warm        | 0.4              |
| Hot         | 0.7              |
+-------------+------------------+

Meaning

30°C is

• Not Cold
• Somewhat Warm
• Mostly Hot

The function that calculates these values is called the
**Membership Function**.

==========================================================
COMMON TYPES OF MEMBERSHIP FUNCTIONS
==========================================================

• Triangular
• Trapezoidal
• Gaussian

For Exams Remember:

Membership Function

↓

"How much does an input belong to a fuzzy set?"

==========================================================
2) FUZZIFICATION
==========================================================

Definition:
-----------
Fuzzification is the process of converting a crisp (exact) input value into
fuzzy values using membership functions.

----------------------------------------------------------
Exam Definition
----------------------------------------------------------

Fuzzification is the process of converting a crisp input value into fuzzy
values using membership functions.

==========================================================
SIMPLE MEANING
==========================================================

Exact Value

↓

Fuzzy Values

==========================================================
EXAMPLE OF FUZZIFICATION
==========================================================

Input

Temperature = 30°C

↓

Membership Functions

↓

Cold = 0.0

Warm = 0.4

Hot = 0.7

The exact temperature has now been converted into fuzzy values.

==========================================================
3) DEFUZZIFICATION
==========================================================

Definition:
-----------
Defuzzification is the process of converting the fuzzy output produced by the
fuzzy system into a single crisp (exact) value that can be used in the real
world.

----------------------------------------------------------
Exam Definition
----------------------------------------------------------

Defuzzification is the process of converting fuzzy output into a single crisp
value.

==========================================================
SIMPLE MEANING
==========================================================

Fuzzy Output

↓

Exact Output

==========================================================
EXAMPLE OF DEFUZZIFICATION
==========================================================

After applying fuzzy rules

Fan Speed

Low    = 0.2

Medium = 0.6

High   = 0.8

↓

Defuzzification

↓

Final Fan Speed = 75%

Now the fan can operate at approximately **75% speed**.

==========================================================
COMPLETE FUZZY LOGIC PROCESS
==========================================================

             INPUT
         Temperature = 30°C
                 │
                 ▼
      ┌───────────────────┐
      │  Fuzzification    │
      └───────────────────┘
                 │
                 ▼
     Cold = 0.0
     Warm = 0.4
     Hot  = 0.7
                 │
                 ▼
      ┌───────────────────┐
      │ Fuzzy Rules &     │
      │ Inference Engine  │
      └───────────────────┘
                 │
                 ▼
     Low Fan    = 0.2
     Medium Fan = 0.6
     High Fan   = 0.8
                 │
                 ▼
      ┌───────────────────┐
      │ Defuzzification   │
      └───────────────────┘
                 │
                 ▼
        Fan Speed = 75%

==========================================================
STEP-BY-STEP EXAMPLE
==========================================================

Step 1 : Input
--------------

Temperature = 30°C

(Crisp Input)

↓

Step 2 : Fuzzification
----------------------

Cold = 0.0

Warm = 0.4

Hot = 0.7

↓

Step 3 : Apply Fuzzy Rules
--------------------------

Rule 1

IF Temperature is Cold

THEN Fan Speed = Low

------------------------------------------------

Rule 2

IF Temperature is Warm

THEN Fan Speed = Medium

------------------------------------------------

Rule 3

IF Temperature is Hot

THEN Fan Speed = High

Since

Hot = 0.7

↓

High Fan Speed becomes the strongest rule.

↓

Step 4 : Defuzzification
------------------------

Fuzzy Output

↓

Fan Speed = 75%

(Crisp Output)

==========================================================
FLOW OF A FUZZY SYSTEM
==========================================================

Crisp Input
      ↓
Fuzzification
      ↓
Fuzzy Values
      ↓
Fuzzy Rules
      ↓
Fuzzy Output
      ↓
Defuzzification
      ↓
Crisp Output

==========================================================
DIFFERENCE BETWEEN FUZZIFICATION AND DEFUZZIFICATION
==========================================================

+---------------------------+------------------------------+
| Fuzzification             | Defuzzification              |
+---------------------------+------------------------------+
| Exact Input → Fuzzy       | Fuzzy Output → Exact         |
| Happens at the beginning  | Happens at the end           |
| Uses Membership Functions | Produces Final Output        |
| Example:                  | Example:                     |
| 30°C → Hot = 0.7          | Fan Speed = 75%              |
+---------------------------+------------------------------+

==========================================================
DIFFERENCE BETWEEN MEMBERSHIP FUNCTION
AND FUZZIFICATION
==========================================================

+---------------------------+------------------------------+
| Membership Function       | Fuzzification                |
+---------------------------+------------------------------+
| Calculates membership     | Converts crisp input         |
| Gives values from 0 to 1  | Uses membership functions    |
| Example:                  | Example:                     |
| Hot = 0.7                 | Cold=0.0                     |
|                           | Warm=0.4                     |
|                           | Hot=0.7                      |
+---------------------------+------------------------------+

==========================================================
EASY TRICK TO REMEMBER
==========================================================

Membership Function

↓

"How Much?"

Example

30°C belongs to Hot = 0.7

----------------------------------------------------------

Fuzzification

↓

Exact → Fuzzy

30°C

↓

Cold = 0.0

Warm = 0.4

Hot = 0.7

----------------------------------------------------------

Defuzzification

↓

Fuzzy → Exact

Fan Speed = 75%

==========================================================
APPLICATIONS
==========================================================

• Air Conditioners
• Washing Machines
• Automatic Fans
• Robotics
• Automobile Control Systems
• Medical Decision Systems
• Industrial Automation
• Smart Home Devices

==========================================================
ADVANTAGES
==========================================================

• Handles uncertain information.
• Makes flexible decisions.
• Mimics human reasoning.
• Useful when exact mathematical models are difficult.
• Widely used in intelligent control systems.

==========================================================
LIMITATIONS
==========================================================

• Designing membership functions requires expertise.
• Choosing fuzzy rules can be difficult.
• Results depend on the selected membership functions.
• Not suitable for every problem.

==========================================================
EXAM POINTS TO REMEMBER
==========================================================

✔ Membership Function defines the degree of membership.

✔ Membership Value ranges from 0 to 1.

✔ Fuzzification converts:

Crisp Input → Fuzzy Values

✔ Defuzzification converts:

Fuzzy Output → Crisp Output

✔ Used in:

• Air Conditioners
• Washing Machines
• Automatic Fans
• Robotics

==========================================================
SHORT CONCLUSION
==========================================================

Membership Functions determine how strongly an input belongs to a fuzzy set.
Fuzzification converts crisp input values into fuzzy values using these
functions. After fuzzy reasoning is applied, Defuzzification converts the
fuzzy output into a single crisp value that can be used in real-world systems.
These three processes are the foundation of Fuzzy Logic systems.

==========================================================
SHORT EXAM POINTS (2-3 Marks)
==========================================================

Membership Function:
A Membership Function defines the degree to which an input belongs to a fuzzy
set. Its value ranges from 0 to 1.

Fuzzification:
Converts a crisp input into fuzzy values using membership functions.

Defuzzification:
Converts fuzzy output into a single crisp value.

Remember:

Crisp Input
     ↓
Fuzzification
     ↓
Fuzzy Values
     ↓
Fuzzy Rules
     ↓
Fuzzy Output
     ↓
Defuzzification
     ↓
Crisp Output

Example:

30°C
   ↓
Fuzzification
   ↓
Hot = 0.7
   ↓
Fuzzy Rules
   ↓
Defuzzification
   ↓
Fan Speed = 75%
      
      `},{id:23,question:"23. Explain Fuzzy Inference and Fuzzy Rules with an example.",answer:"",codeExample:`
==========================================================
           FUZZY INFERENCE AND FUZZY RULES
==========================================================

1. FUZZY RULES
==========================================================

Definition
----------
Fuzzy Rules are simple IF–THEN rules used to make decisions in a fuzzy logic system.

----------------------------------------------------------
General Form
----------------------------------------------------------

IF condition
THEN result

----------------------------------------------------------
Example
----------------------------------------------------------

For a fan:

IF temperature is Hot
THEN fan speed is High.

Other rules:

IF temperature is Cold
THEN fan speed is Low.

IF temperature is Warm
THEN fan speed is Medium.

These rules are called Fuzzy Rules.

==========================================================
2. FUZZY INFERENCE
==========================================================

Definition
----------
Fuzzy Inference is the process of using fuzzy rules and input information to determine the fuzzy output.

----------------------------------------------------------
Simple Meaning
----------------------------------------------------------

Fuzzy Rules      = Rules we write

Fuzzy Inference  = Process of applying those rules

==========================================================
EXAMPLE : AUTOMATIC FAN
==========================================================

Suppose the temperature is:

30°C

----------------------------------------------------------
Step 1 : Fuzzification
----------------------------------------------------------

First, the exact temperature is converted into fuzzy values.

Suppose:

Cold = 0.0

Warm = 0.4

Hot  = 0.7

This means 30°C is mostly considered Hot.

----------------------------------------------------------
Step 2 : Apply Fuzzy Rules
----------------------------------------------------------

Rule 1:

IF temperature is Cold
THEN fan speed is Low.

Rule 2:

IF temperature is Warm
THEN fan speed is Medium.

Rule 3:

IF temperature is Hot
THEN fan speed is High.

The fuzzy inference system checks which rules apply.

Since:

Hot = 0.7

Rule 3 is strongly activated:

IF temperature is Hot
→ Fan Speed is High.

----------------------------------------------------------
Step 3 : Get Fuzzy Output
----------------------------------------------------------

The system might produce:

Low Fan    = 0.0

Medium Fan = 0.4

High Fan   = 0.7

This is the fuzzy output.

----------------------------------------------------------
Step 4 : Defuzzification
----------------------------------------------------------

Finally, the fuzzy output is converted into one exact value.

For example:

Fan Speed = 75%

==========================================================
COMPLETE PROCESS
==========================================================

Temperature = 30°C
       │
       ▼
 Fuzzification
       │
       ▼
Cold = 0.0
Warm = 0.4
Hot  = 0.7
       │
       ▼
 Fuzzy Rules
       │
       ▼
Fuzzy Inference
       │
       ▼
Fan Speed = Low / Medium / High
       │
       ▼
 Defuzzification
       │
       ▼
Fan Speed = 75%

==========================================================
DIFFERENCE BETWEEN FUZZY RULES AND FUZZY INFERENCE
==========================================================

+---------------------------+-----------------------------------+
| Fuzzy Rules               | Fuzzy Inference                   |
+---------------------------+-----------------------------------+
| IF–THEN statements        | Process of applying those rules   |
| Defines what should happen| Determines what actually happens  |
| Example: IF Hot THEN High | Uses Hot = 0.7 to determine output|
| Created by experts        | Uses rules to make decisions      |
+---------------------------+-----------------------------------+

==========================================================
EASY TRICK
==========================================================

Think of a Teacher and a Student.

Fuzzy Rule = Teacher's Instruction

"If the temperature is hot, increase the fan speed."

↓

Fuzzy Inference = Student Applying the Instruction

"Temperature is 30°C and it is 0.7 hot,
so I should increase the fan speed."

==========================================================
ANOTHER EXAMPLE : WASHING MACHINE
==========================================================

Suppose a washing machine measures dirt level.

Fuzzy Rules:

IF clothes are slightly dirty
→ Washing time is Short.

IF clothes are moderately dirty
→ Washing time is Medium.

IF clothes are very dirty
→ Washing time is Long.

If the clothes are:

Very Dirty = 0.8

The fuzzy inference system applies the corresponding rule and produces a High/Long washing-time output.

==========================================================
IMPORTANT TERMS
==========================================================

Fuzzy Rule
----------

An IF–THEN statement.

----------------------------------------------------------

Fuzzy Inference
---------------

The process of applying the IF–THEN rules to the input and producing a fuzzy output.

----------------------------------------------------------

Fuzzification
-------------

Crisp Input → Fuzzy Values

----------------------------------------------------------

Defuzzification
---------------

Fuzzy Output → Crisp Output

==========================================================
COMPLETE FUZZY LOGIC SYSTEM
==========================================================

             Input
             30°C
              │
              ▼
     ┌────────────────┐
     │ Fuzzification  │
     └────────────────┘
              │
              ▼
      Hot  = 0.7
      Warm = 0.4
              │
              ▼
     ┌────────────────┐
     │  Fuzzy Rules   │
     │       +        │
     │Fuzzy Inference │
     └────────────────┘
              │
              ▼
      Fan Speed = High
              │
              ▼
     ┌────────────────┐
     │Defuzzification │
     └────────────────┘
              │
              ▼
      Fan Speed = 75%

==========================================================
EXAM DEFINITION
==========================================================

Fuzzy Rules are IF–THEN rules that describe the relationship between input and output fuzzy variables.

Fuzzy Inference is the process of applying these rules to fuzzy inputs to determine the appropriate fuzzy output.

Example:

IF temperature is Hot
THEN fan speed is High.
      `},{id:24,question:"24. Explain Fuzzy Control System and Fuzzy Rule-Based System with applications.",answer:"",codeExample:`
==========================================================
      FUZZY CONTROL SYSTEM AND FUZZY RULE-BASED SYSTEM
==========================================================

These two concepts are closely related.

The easiest way to remember them is:

Fuzzy Rule-Based System = Uses IF–THEN rules to make decisions.

Fuzzy Control System = Uses those decisions to control a real device or process.

==========================================================
1. FUZZY RULE-BASED SYSTEM
==========================================================

Definition
----------

A Fuzzy Rule-Based System (FRBS) is an AI system that uses fuzzy rules to make decisions when information 
is not exact.

It mainly uses rules in the form:

IF condition
THEN action

----------------------------------------------------------
Example
----------------------------------------------------------

Suppose we want to control a fan.

Rules:

IF temperature is Cold
THEN fan speed is Low.

IF temperature is Warm
THEN fan speed is Medium.

IF temperature is Hot
THEN fan speed is High.

The system checks the temperature and applies the appropriate rule.

----------------------------------------------------------
Simple Example
----------------------------------------------------------

Suppose:

Temperature = 30°C

The system may determine:

Warm = 0.4

Hot  = 0.7

The fuzzy rules are applied:

IF temperature is Hot
→ Fan speed is High.

So the system decides that the fan should run at a high speed.

==========================================================
COMPONENTS OF A FUZZY RULE-BASED SYSTEM
==========================================================

A fuzzy rule-based system generally contains:

----------------------------------------------------------
1. Fuzzification
----------------------------------------------------------

Converts an exact input into fuzzy values.

Example:

30°C → Hot = 0.7

----------------------------------------------------------
2. Knowledge Base
----------------------------------------------------------

Contains:

• Fuzzy Sets

• Membership Functions

• IF–THEN Rules

----------------------------------------------------------
3. Inference Engine
----------------------------------------------------------

Applies the fuzzy rules to the input.

----------------------------------------------------------
4. Defuzzification
----------------------------------------------------------

Converts the fuzzy output into an exact value.

Example:

Fuzzy Output → Fan Speed = 75%

==========================================================
2. FUZZY CONTROL SYSTEM
==========================================================

Definition
----------

A Fuzzy Control System is a control system that uses fuzzy logic to automatically control a machine, device, or process.

Instead of using only exact mathematical calculations, it uses human-like rules such as:

"If the temperature is very high, increase cooling."

----------------------------------------------------------
Example : Air Conditioner
----------------------------------------------------------

Suppose an air conditioner measures:

Temperature = 32°C

The fuzzy controller determines:

Temperature is Hot = 0.8

It applies a rule:

IF temperature is Hot
THEN cooling level is High.

The controller then produces an output such as:

Cooling Level = 80%

The air conditioner adjusts its cooling automatically.

==========================================================
DIAGRAM OF FUZZY CONTROL SYSTEM
==========================================================

          Real World
              │
              ▼
        ┌───────────┐
        │  Sensor   │
        └───────────┘
              │
              ▼
        Exact Input
      (Temperature)
              │
              ▼
      ┌──────────────┐
      │Fuzzification │
      └──────────────┘
              │
              ▼
        Fuzzy Values
              │
              ▼
      ┌──────────────┐
      │Fuzzy Rules + │
      │Inference     │
      └──────────────┘
              │
              ▼
     ┌───────────────┐
     │Defuzzification│
     └───────────────┘
              │
              ▼
       Control Output
              │
              ▼
      ┌──────────────┐
      │    Device    │
      │ (AC / Fan)   │
      └──────────────┘
              │
              ▼
          Real World

==========================================================
DIFFERENCE BETWEEN
FUZZY RULE-BASED SYSTEM AND FUZZY CONTROL SYSTEM
==========================================================

+-----------------------------------+--------------------------------------+
| Fuzzy Rule-Based System           | Fuzzy Control System                 |
+-----------------------------------+--------------------------------------+
| Mainly makes decisions using      | Uses fuzzy logic to control a real   |
| fuzzy rules                       | process/device                       |
|                                   |                                      |
| Can be used for decision-making   | Mainly used for automatic control    |
|                                   |                                      |
| Uses IF–THEN rules                | Uses rules to generate control       |
|                                   | actions                              |
|                                   |                                      |
| Example: Decide whether cooling   | Example: Automatically adjust an     |
| should be low or high             | AC's cooling                         |
|                                   |                                      |
| Does not necessarily control      | Usually connected to a               |
| a physical device                 | device/process                       |
+-----------------------------------+--------------------------------------+

==========================================================
EASY TRICK
==========================================================

Rule-Based System:

"What should I decide?"

↓

Control System:

"What should the machine do?"

==========================================================
APPLICATIONS OF FUZZY RULE-BASED SYSTEMS
==========================================================

Fuzzy rule-based systems are used in:

🏥 Medical Decision-Support Systems

💳 Credit Evaluation

📧 Pattern / Classification Systems

🚗 Automobile Decision Systems

🤖 Robotics

📊 Risk Assessment

----------------------------------------------------------
Example
----------------------------------------------------------

A medical decision-support system could use:

IF fever is high AND cough is severe
THEN infection risk is high.

==========================================================
APPLICATIONS OF FUZZY CONTROL SYSTEMS
==========================================================

1. Air Conditioners

Controls cooling based on temperature.

----------------------------------------------------------

2. Washing Machines

Controls washing time based on dirt level and load.

----------------------------------------------------------

3. Automobiles

Can help control systems such as transmission or other vehicle functions.

----------------------------------------------------------

4. Cameras

Automatically adjusts camera settings based on lighting and other conditions.

----------------------------------------------------------

5. Robotics

Helps robots control movement and respond to changing conditions.

----------------------------------------------------------

6. Industrial Systems

Controls machines, temperature, pressure, speed, and other processes.

==========================================================
ADVANTAGES
==========================================================

Fuzzy Rule-Based System

• Easy to understand.

• Uses simple IF–THEN rules.

• Can handle uncertain information.

• Can represent expert knowledge.

----------------------------------------------------------

Fuzzy Control System

• Handles changing conditions.

• Does not always require an exact mathematical model.

• Provides smooth control.

• Useful for complex real-world systems.

==========================================================
SHORT EXAM ANSWER
==========================================================

A Fuzzy Rule-Based System is an AI system that uses fuzzy IF–THEN rules to make decisions.

For example:

IF temperature is Hot
THEN fan speed is High.

A Fuzzy Control System uses fuzzy logic to automatically control a machine or process.

For example, an air conditioner can measure temperature, apply fuzzy rules, and automatically adjust its cooling level.

Applications include air conditioners, washing machines, automobiles, robotics, cameras, medical decision-support systems, and industrial control systems.

==========================================================
REMEMBER
==========================================================

Fuzzy Rule-Based System

↓

Rules

↓

Decision

----------------------------------------------------------

Fuzzy Control System

↓

Rules

↓

Decision

↓

Control Device
      
      `},{id:25,question:"25. Write short notes on: Operations on Fuzzy Sets, Linguistic Variables, Fuzzy Relationships, Propositions and Connectives",answer:"",codeExample:`
==========================================================
              SHORT NOTES ON FUZZY CONCEPTS
==========================================================

==========================================================
1. OPERATIONS ON FUZZY SETS
==========================================================

A fuzzy set allows membership values between 0 and 1.

We can perform operations such as:

• Union
• Intersection
• Complement

----------------------------------------------------------
Suppose:
----------------------------------------------------------

A = {x = 0.2, y = 0.7}

B = {x = 0.5, y = 0.4}

==========================================================
a) UNION (OR)
==========================================================

Union takes the maximum membership value.

Formula:

μ(A ∪ B) = max(μA, μB)

For x:

max(0.2, 0.5) = 0.5

For y:

max(0.7, 0.4) = 0.7

So:

A ∪ B = {x = 0.5, y = 0.7}

==========================================================
b) INTERSECTION (AND)
==========================================================

Intersection takes the minimum membership value.

Formula:

μ(A ∩ B) = min(μA, μB)

For x:

min(0.2, 0.5) = 0.2

For y:

min(0.7, 0.4) = 0.4

So:

A ∩ B = {x = 0.2, y = 0.4}

==========================================================
c) COMPLEMENT (NOT)
==========================================================

Complement tells us the opposite membership.

Formula:

μ(A') = 1 − μ(A)

For x:

1 − 0.2 = 0.8

For y:

1 − 0.7 = 0.3

So:

A' = {x = 0.8, y = 0.3}

==========================================================
REMEMBER
==========================================================

Union        → MAX

Intersection → MIN

Complement   → 1 − value

==========================================================
2. LINGUISTIC VARIABLES
==========================================================

Definition
----------

A Linguistic Variable is a variable whose values are words or phrases instead of exact numerical values.

----------------------------------------------------------
Example
----------------------------------------------------------

Consider:

Temperature

Temperature is the linguistic variable.

Its possible linguistic values can be:

Temperature = {Cold, Warm, Hot}

These words are called linguistic values.

Each value is represented using a fuzzy set.

----------------------------------------------------------
Example
----------------------------------------------------------

For Temperature = 30°C

Cold = 0.0

Warm = 0.4

Hot  = 0.7

So the computer can understand the idea that 30°C is somewhat warm and mostly hot.

----------------------------------------------------------
Other Examples
----------------------------------------------------------

+----------------------+-----------------------------+
| Linguistic Variable  | Linguistic Values           |
+----------------------+-----------------------------+
| Temperature          | Cold, Warm, Hot             |
| Speed                | Slow, Medium, Fast          |
| Height               | Short, Average, Tall        |
| Age                  | Young, Middle-aged, Old     |
+----------------------+-----------------------------+

----------------------------------------------------------
Simple Definition
----------------------------------------------------------

A linguistic variable uses words such as Cold, Warm, Hot, Slow, and Fast instead of only numerical values.

==========================================================
3. FUZZY RELATIONSHIPS
==========================================================

Definition
----------

A Fuzzy Relationship describes the degree of relationship between two or more elements.

In a normal relationship, something may be related or not related.

In a fuzzy relationship, the relationship can have a value between 0 and 1.

----------------------------------------------------------
Example
----------------------------------------------------------

Relationship between Temperature and Fan Speed

+--------------+-------------+--------------+
| Temperature  | Fan Speed   | Relationship |
+--------------+-------------+--------------+
| Low          | Low         | 1.0          |
| Medium       | Medium      | 0.8          |
| High         | High        | 1.0          |
| High         | Medium      | 0.4          |
+--------------+-------------+--------------+

For example:

Temperature = High

Fan Speed = High

Relationship = 1.0

This means High temperature is strongly related to High fan speed.

----------------------------------------------------------
Simple Definition
----------------------------------------------------------

A fuzzy relationship represents the strength of a relationship between elements using values from 0 to 1.

----------------------------------------------------------
Applications
----------------------------------------------------------

• Robotics

• Control Systems

• Decision-Making

• Pattern Recognition

• Medical Systems

==========================================================
4. PROPOSITIONS AND CONNECTIVES
==========================================================

----------------------------------------------------------
Fuzzy Propositions
----------------------------------------------------------

A proposition is a statement that can have a degree of truth between 0 and 1.

Example:

"The temperature is hot."

Suppose:

Hot = 0.7

Then the truth value of the proposition is:

0.7

It is not completely true or completely false.

==========================================================
FUZZY CONNECTIVES
==========================================================

Connectives are used to combine fuzzy propositions.

The main connectives are:

----------------------------------------------------------
a) AND
----------------------------------------------------------

Usually uses minimum.

Example:

Temperature is Hot = 0.7

Humidity is High = 0.6

For:

Temperature is Hot AND Humidity is High

We take:

min(0.7, 0.6) = 0.6

So the result is:

0.6

----------------------------------------------------------
b) OR
----------------------------------------------------------

Usually uses maximum.

Hot = 0.7

High Humidity = 0.6

For:

Hot OR High Humidity

We take:

max(0.7, 0.6) = 0.7

----------------------------------------------------------
c) NOT
----------------------------------------------------------

NOT gives the opposite value.

If:

Hot = 0.7

Then:

NOT Hot = 1 − 0.7 = 0.3

==========================================================
QUICK SUMMARY
==========================================================

+--------------------------+----------------------------------------+----------------------------------+
| Topic                    | Simple Meaning                         | Example                          |
+--------------------------+----------------------------------------+----------------------------------+
| Operations on Fuzzy Sets | Perform operations on fuzzy sets       | Union, Intersection, Complement  |
| Linguistic Variables     | Variables represented using words      | Temperature = Cold, Warm, Hot    |
| Fuzzy Relationships      | Shows strength of relationship         | Hot temperature → High fan speed |
| Propositions             | Statements with truth values (0 to 1)  | "Temperature is Hot" = 0.7       |
| Connectives              | Combine propositions                   | AND, OR, NOT                     |
+--------------------------+----------------------------------------+----------------------------------+

==========================================================
EASY MEMORY TRICK
==========================================================

Fuzzy Sets

↓

Operations

MAX, MIN, 1 − value

----------------------------------------------------------

Linguistic Variables

↓

Words

Cold, Warm, Hot

----------------------------------------------------------

Fuzzy Relationships

↓

Connection

How strongly are two things related?

----------------------------------------------------------

Propositions

↓

Statements

"Temperature is Hot"

----------------------------------------------------------

Connectives

↓

Join Statements

AND, OR, NOT
      `},{id:31,question:"31. What is Understanding in Artificial Intelligence? Explain with suitable examples.",answer:"",codeExample:`
==========================================================
          UNDERSTANDING IN ARTIFICIAL INTELLIGENCE
==========================================================

Definition
----------

In Artificial Intelligence, Understanding means the ability of an AI system to interpret information, identify 
its meaning, understand the context, and use that information to make an appropriate decision or 
response.

----------------------------------------------------------
Simple Definition
----------------------------------------------------------

Understanding in AI is the ability of a machine to understand the meaning and context of information 
instead of simply processing or storing it.

==========================================================
EASY EXAMPLE
==========================================================

Suppose we tell an AI:

"It is very hot today. Turn on the fan."

An AI with understanding should identify:

• "hot" → Temperature is high
• "fan" → Device to control
• "turn on" → Action to perform

So it understands what the user wants and can take the appropriate action.


==========================================================
HOW UNDERSTANDING WORKS IN AI
==========================================================

                 Input
                   │
                   ▼
   Understand the Information
                   │
                   ▼
          Identify Meaning
                   │
                   ▼
        Understand Context
                   │
                   ▼
      Reason / Make Decision
                   │
                   ▼
        Response or Action

==========================================================
EXAMPLES OF UNDERSTANDING IN AI
==========================================================

----------------------------------------------------------
1. Natural Language Understanding
----------------------------------------------------------

Suppose you tell a voice assistant:

"Set an alarm for 7 AM tomorrow."

The AI needs to understand:

• Set an alarm → Action
• 7 AM → Time
• Tomorrow → Date

It then creates the alarm.


----------------------------------------------------------
2. Understanding Images
----------------------------------------------------------

Suppose an AI receives a photograph:

       🐕
      /  \\
     /____\\

The AI can analyze the image and identify:

"There is a dog in the image."

This is an example of image understanding.


----------------------------------------------------------
3. Understanding Context
----------------------------------------------------------

Consider:

"I went to the bank to deposit money."

Here, **bank** means a financial institution.

But:

"We sat on the bank of the river."

Here, **bank** means the land beside a river.
The AI needs to use the context to understand which meaning is intended.


----------------------------------------------------------
4. Understanding Speech
----------------------------------------------------------

A voice assistant receives:

  "Play some relaxing music."

The AI must understand:

• "Play" → Action
• "Music" → Type of content
• "Relaxing" → Preference / Category

It can then search for suitable music.


----------------------------------------------------------
5. Understanding Human Intent
----------------------------------------------------------

Suppose a user says:

"I'm feeling cold."

The literal sentence does not directly say:

"Increase the room temperature."

But in some contexts, the AI may understand that the person might want the heating increased. This requires 
understanding the user's intent and context, rather than simply matching words.


==========================================================
AREAS WHERE AI UNDERSTANDING IS USED
==========================================================

1. Natural Language Processing (NLP)

Understanding text and human language.

Example:

Chatbots and Voice Assistants.

----------------------------------------------------------

2. Computer Vision

Understanding images and videos.

Example:

Detecting objects in an image.

----------------------------------------------------------

3. Speech Recognition

Understanding spoken language.

Example:

Voice-Controlled Assistants.

----------------------------------------------------------

4. Expert Systems

Understanding facts and rules to make decisions.

Example:

Medical Decision-Support Systems.

----------------------------------------------------------

5. Robotics

Understanding the environment and deciding what action to take.

Example:

A robot identifying an object and moving toward it.



==========================================================
UNDERSTANDING vs SIMPLE PROCESSING
==========================================================

----------------------------------------------------------
Simple Processing
----------------------------------------------------------

The computer sees:

"Apple"

It may simply search its database for the word.

----------------------------------------------------------
Understanding
----------------------------------------------------------

The AI considers the context:

"I ate an apple."

Here,

apple = Fruit

But:

"Apple released a new phone."

Here,

Apple = Technology Company

Understanding requires the AI to consider meaning and context.



==========================================================
CHALLENGES IN AI UNDERSTANDING
==========================================================

AI understanding is difficult because human communication can contain:

• Ambiguous words
• Different languages
• Sarcasm
• Missing information
• Context-dependent meanings
• Different accents
• Unclear instructions

----------------------------------------------------------
Example
----------------------------------------------------------

"Can you open the window?"

Depending on the situation, this could be:

• A question about ability

OR

• A request to open the window.


==========================================================
APPLICATIONS
==========================================================

🤖 Chatbots

🎤 Voice Assistants
🚗 Autonomous Vehicles
🏥 Medical AI
🔍 Search Engines
📷 Image Recognition
🤖 Robotics
🌐 Language Translation


==========================================================
SHORT EXAM ANSWER
==========================================================

Understanding in Artificial Intelligence is the ability of an AI system to interpret information, understand 
its meaning and context, identify the user's intent, and produce an appropriate response or action.

For example, when a user says:

"Set an alarm for 7 AM tomorrow,"

the AI understands the action, time, and date and creates the alarm.

Understanding is used in:

• NLP
• Speech Recognition
• Computer Vision
• Robotics
• Intelligent Assistants
      `},{id:32,question:"32. Explain the factors that make Understanding difficult for machines (What makes it hard?).",answer:"",codeExample:`
==========================================================
      FACTORS THAT MAKE UNDERSTANDING DIFFICULT
                 FOR MACHINES
==========================================================

In AI, understanding means knowing the meaning of information, not just processing words or symbols.

For humans, understanding a sentence is often easy because we use context, common sense, experience, 
and background knowledge.

For machines, these things are difficult.

==========================================================
1. AMBIGUITY
==========================================================

The same word or sentence can have more than one meaning.

----------------------------------------------------------
Example
----------------------------------------------------------

"I went to the bank."

Bank could mean:

• A financial institution 🏦

• The side of a river 🌊

The machine needs the context to determine the correct meaning.


==========================================================
2. CONTEXT
==========================================================

The meaning of something can change depending on the situation.

----------------------------------------------------------
Example
----------------------------------------------------------

"It is cold here."

This could mean:

• The speaker is simply giving information.
• The speaker wants someone to close a window.
• The speaker wants the heating turned on.

A machine must understand the situation to interpret the statement correctly.


==========================================================
3. COMMON-SENSE KNOWLEDGE
==========================================================

Humans know many things without being explicitly taught.

----------------------------------------------------------
Example
----------------------------------------------------------

"Raj dropped the glass. It broke."

Humans understand that a glass can break when it falls.

A machine needs appropriate background knowledge to make this connection.


==========================================================
4. DIFFERENT WAYS OF EXPRESSING THE SAME IDEA
==========================================================

People can express the same meaning in many different ways.

----------------------------------------------------------
Example
----------------------------------------------------------

"Please switch off the fan."
"Turn the fan off."
"Can you stop the fan?"

A human understands that these can refer to the same action.
A machine must recognize their similar meaning.


==========================================================
5. INCOMPLETE INFORMATION
==========================================================

People often don't give all the information because they expect others to understand from context.

----------------------------------------------------------
Example
----------------------------------------------------------

Person A:
"Where is my book?"

Person B:
"It's on the table."

The word "it" refers to the book.
The machine must identify what "it" refers to.


==========================================================
6. PRONOUNS AND REFERENCES
==========================================================

Words such as:

• he
• she
• it
• they
• this
• that

can be difficult for machines to interpret.

----------------------------------------------------------
Example
----------------------------------------------------------

"Rahul gave Amit his book."

Whose book is it?

• Rahul's?
• Amit's?

The sentence can be unclear without additional context.


==========================================================
7. SARCASM AND HUMOR
==========================================================

Humans can often understand when someone says something but means the opposite.

----------------------------------------------------------
Example
----------------------------------------------------------

Someone arrives very late and another person says:

  "Wow, you're really early!"

The literal meaning is positive, but the actual meaning is sarcastic.
This is difficult for machines to detect reliably.


==========================================================
8. EMOTIONS
==========================================================

Human language often contains emotions that are not directly stated.

----------------------------------------------------------
Example
----------------------------------------------------------

"Great! Another exam tomorrow."

The word "Great" normally sounds positive, but here the speaker may actually be unhappy or frustrated.
Understanding emotion requires more than simply looking at individual words.


==========================================================
9. WORLD KNOWLEDGE
==========================================================

Humans have a huge amount of knowledge about the real world.

----------------------------------------------------------
Example
----------------------------------------------------------

"The boy ate the cake because he was hungry."

Humans understand that hunger can cause someone to eat.
AI needs knowledge about relationships between events and objects to understand such statements.


==========================================================
10. LANGUAGE COMPLEXITY
==========================================================

Human languages have:

• Grammar
• Idioms
• Slang
• Metaphors
• Multiple meanings
• Different sentence structures

----------------------------------------------------------
Example
----------------------------------------------------------

  "It's raining cats and dogs."

A human understands that this means it is raining heavily, not that animals are falling from the sky.


==========================================================
11. CHANGING MEANING
==========================================================

The meaning of words can change depending on the field or situation.

----------------------------------------------------------
Example
----------------------------------------------------------

"Mouse"

Could mean:

• An animal 🐭
• A computer device 🖱️

The machine must determine the meaning from context.

==========================================================
SUMMARY TABLE
==========================================================

+-------------------------------+--------------------------------------+--------------------------------------+
| Factor                        | Why It Is Difficult                  | Example                              |
+-------------------------------+--------------------------------------+--------------------------------------+
| Ambiguity                     | One word can have multiple meanings  | Bank                                 |
| Context                       | Meaning depends on situation         | "It's cold here"                     |
| Common Sense                  | Some knowledge is assumed            | Glass can break                      |
| Different Expressions         | Same idea can be said differently    | "Turn off the fan"                   |
| Incomplete Information        | People don't explain everything      | "It's on the table"                  |
| Pronouns                      | Difficult to identify references     | He, She, It                          |
| Sarcasm                       | Meaning differs from literal meaning | "You're really early!"               |
| Emotions                      | Feelings may not be directly stated  | "Great! Another exam!"               |
| World Knowledge               | Needs real-world knowledge           | Hungry → Eat                         |
| Language Complexity           | Idioms and metaphors are difficult   | "Raining cats and dogs"              |
| Changing Meaning              | Words have different meanings        | Mouse                                |
+-------------------------------+--------------------------------------+--------------------------------------+

==========================================================
EASY WAY TO REMEMBER
==========================================================

The biggest problems are:

A → Ambiguity
C → Context
C → Common Sense
E → Emotions
S → Sarcasm
W → World Knowledge

Think:

Machines struggle because humans don't always say exactly what they mean.

==========================================================
SHORT EXAM ANSWER
==========================================================

Understanding is difficult for machines because human communication is complex and often depends on 
context, common sense, background knowledge, ambiguity, emotions, sarcasm, pronouns, incomplete 
information, and different ways of expressing the same idea.

For example, the word "bank" can mean a financial institution or the side of a river.

Therefore, an AI system must understand the context rather than simply process individual words.
      
      `},{id:33,question:"33. Common sense tells us that the glass may break when it falls.",answer:"",codeExample:`
==========================================================
       UNDERSTANDING AS CONSTRAINT SATISFACTION
==========================================================

This sounds difficult, but the basic idea is actually simple:

Understanding can be viewed as finding an interpretation that satisfies all the available constraints.

In other words, when a machine receives information, there may be many possible meanings. The machine 
uses different constraints to remove incorrect meanings and find the most suitable one.


==========================================================
1. WHAT IS A CONSTRAINT?
==========================================================

A constraint is a rule or condition that must be satisfied.

----------------------------------------------------------
Simple Example
----------------------------------------------------------

Suppose I say:

  "I went to the bank."

The word **bank** has two possible meanings:

🏦 Financial bank
🌊 Side of a river

Now suppose the full sentence is:

  "I went to the bank to deposit money."

The phrase **"deposit money"** is a constraint.


It tells the AI:

  Bank = Financial Institution 🏦

So the incorrect meaning is removed.


==========================================================
2. UNDERSTANDING AS CONSTRAINT SATISFACTION
==========================================================

When AI tries to understand something, it can follow this process:


             Input
               │
               ▼
      Possible Meanings
               │
               ▼
      Apply Constraints
               │
               ▼
     Remove Wrong Meanings
               │
               ▼
      Select Best Meaning
               │
               ▼
         Understanding

The AI looks for an interpretation that satisfies all relevant constraints.


==========================================================
3. EXAMPLE
==========================================================

"The boy saw the man with a telescope."

This sentence can have different interpretations.

----------------------------------------------------------
Meaning 1
----------------------------------------------------------

The boy used a telescope to see the man.

Boy ──used──> Telescope
 │
 └──saw──> Man

----------------------------------------------------------
Meaning 2
----------------------------------------------------------

The man had a telescope.

Boy
 │
 └──saw──> Man ──has──> Telescope


So the AI needs to determine which interpretation is correct.

It can use constraints such as:

• Grammar
• Meaning of words
• Previous sentences
• Real-world knowledge
• Context

The interpretation that satisfies the available constraints best is selected.



==========================================================
4. TYPES OF CONSTRAINTS
==========================================================

Several types of constraints can help an AI understand language.

----------------------------------------------------------
1. Syntactic Constraint
----------------------------------------------------------

Deals with grammar and sentence structure.

Example:

"The dog chased the cat."

Grammar tells us that **dog** is likely the subject and **cat** is the object.

----------------------------------------------------------
2. Semantic Constraint
----------------------------------------------------------

Deals with the meaning of words.

Example:

  "The student drank water."

This makes sense because water can be drunk.

But:

  "The student drank a chair."

does not normally make sense.

----------------------------------------------------------
3. Contextual Constraint
----------------------------------------------------------

Uses the surrounding information.

Example:

"Rahul went to the bank. He deposited ₹5,000."

The second sentence gives context, so **bank** means a financial institution.

----------------------------------------------------------
4. Common-Sense Constraint
----------------------------------------------------------

Uses knowledge about the real world.

Example:

"The glass fell from the table."

Common sense tells us that the glass may break when it falls.



==========================================================
5. ANOTHER EASY EXAMPLE
==========================================================

Consider:

  "I saw a bat."

What does **bat** mean?

It could be:

🦇 An animal
🏏 Sports equipment

Now consider:

  "I saw a bat flying in the sky."

The constraint **"flying in the sky"** strongly supports:

  Bat = 🦇 Animal

But:

  "I bought a bat to play cricket."

The constraint **"play cricket"** supports:

  Bat = 🏏 Sports Equipment

So the AI uses constraints to select the correct meaning.


==========================================================
6. WHY IS THIS IMPORTANT?
==========================================================

Human language is often ambiguous. A word or sentence can have several possible interpretations.

Constraint satisfaction helps AI:

• Resolve ambiguity
• Understand sentence meaning
• Identify relationships between words
• Use context
• Select the most appropriate interpretation

==========================================================
SIMPLE EXAMPLE TO REMEMBER 🧠
==========================================================

Think of a puzzle.

You have:

Possible meanings:

A
B
C
D

Then you get some rules:

  Constraint 1 → A is wrong
  Constraint 2 → C is wrong
  Constraint 3 → D is wrong

Only B remains.

Therefore:

  B = The most suitable interpretation.**

That's the basic idea of **Understanding as Constraint Satisfaction.**


==========================================================
SHORT EXAM ANSWER
==========================================================

Understanding as Constraint Satisfaction means viewing understanding as the process of finding an  
interpretation that satisfies a set of constraints.

These constraints may come from grammar, word meanings, context, and common-sense knowledge.

For example, in the sentence:

"I went to the bank to deposit money,"

the phrase "deposit money" acts as a constraint and helps the AI understand that 
"bank" refers to a financial institution.

Thus, constraint satisfaction helps AI resolve ambiguity and select the most appropriate meaning.
      `},{id:34,question:"34. Differentiate between Understanding and Memorization.",answer:"",codeExample:`
==========================================================
    DIFFERENCE BETWEEN UNDERSTANDING AND MEMORIZATION
                      IN ARTIFICIAL INTELLIGENCE
==========================================================

The easiest way to remember is:

Memorization = Remembering information
Understanding = Knowing the meaning and using it correctly

==========================================================
1. UNDERSTANDING
==========================================================

Understanding means an AI system can identify the meaning, context, relationships, and purpose of 
information.

----------------------------------------------------------
Example
----------------------------------------------------------

Sentence:

  "The glass fell from the table."

An AI with understanding can recognize:

  • Glass is an object.
  • The glass was on the table.
  • It fell from the table.
  • The event may have caused the glass to break.

It is not just remembering the sentence; it is understanding the relationship between the events.


==========================================================
2. MEMORIZATION
==========================================================

Memorization means storing information and recalling it later without necessarily understanding its meaning.

----------------------------------------------------------
Example
----------------------------------------------------------

An AI stores:

  "The capital of India is New Delhi."

When asked:

  "What is the capital of India?"

It retrieves:

  "New Delhi."

The system may simply be recalling stored information.


==========================================================
MAIN DIFFERENCE
==========================================================

| Understanding                                             | Memorization                                |
|-----------------------------------------------------------|---------------------------------------------|
| Understands the meaning                                   | Stores information                          |
| Uses context                                              | Recalls stored information                  |
| Can apply knowledge to new situations                     | May struggle with new situations            |
| Identifies relationships                                  | Mainly remembers facts                      |
| Involves reasoning                                        | Mainly involves recall                      |
| More flexible                                             | Less flexible                               |
| Example: Understanding why a glass may break when dropped | Example: Remembering "glass falls → breaks" |


==========================================================
EASY EXAMPLE
==========================================================

Suppose you learn:

5 × 5 = 25

----------------------------------------------------------
Memorization
----------------------------------------------------------

You remember:

5 × 5 = 25

But if someone asks:

5 groups of 5 = ?

you may only know the answer because you memorized it.


----------------------------------------------------------
Understanding
----------------------------------------------------------

You know that:

5 + 5 + 5 + 5 + 5 = 25

So you understand why the answer is **25** and can apply the idea to similar problems.



==========================================================
ANOTHER AI EXAMPLE
==========================================================

Suppose an AI sees:

  "The dog is under the table."

----------------------------------------------------------
Memorization
----------------------------------------------------------

It stores the sentence and can repeat it later.

----------------------------------------------------------
Understanding
----------------------------------------------------------

It knows:

text

Dog
  ↓
is under
  ↓
Table


If asked:

  "Where is the dog?"

It can answer:

  "Under the table."

It has understood the relationship between the dog and the table.


==========================================================
WHY UNDERSTANDING IS BETTER
==========================================================

Understanding allows an AI to:

• Handle new situations
• Use context
• Make logical connections
• Resolve ambiguity
• Apply knowledge to different problems

Memorization is useful for remembering facts, but by itself it does not guarantee understanding.


==========================================================
🧠 EASY TRICK FOR EXAM
==========================================================

Remember:
Memorization → "I remember it."

Understanding → "I know what it means and can use it."

==========================================================
SHORT EXAM ANSWER
==========================================================

Memorization is the process of storing and recalling information, whereas Understanding is the ability to 
interpret the meaning, context, and relationships in that information and apply it appropriately.
Memorization mainly involves recall, while understanding involves meaning, reasoning, and application.
      `},{id:35,question:"35. Write a short note on the applications and challenges of Understanding in AI.",answer:"",codeExample:`
# Applications and Challenges of Understanding in AI

=========================================================
1. Applications of Understanding in AI
=========================================================

Definition:
Understanding in AI means that a machine can interpret the meaning, context, and purpose of information 
and use it appropriately.

---------------------------------------------------------
1. Natural Language Processing (NLP)
---------------------------------------------------------

Definition:
AI can understand human language and respond to questions.

Example:
• Chatbots understand a user's question and provide an appropriate answer.

---------------------------------------------------------
2. Voice Assistants
---------------------------------------------------------

Definition:
AI understands spoken commands.

Example:
Command:
"Set an alarm for 7 AM."

Result:
The voice assistant understands the command and creates the alarm.

---------------------------------------------------------
3. Machine Translation
---------------------------------------------------------

Definition:
AI understands the meaning of a sentence in one language and translates it into another language.

Example:
English → Hindi translation.

---------------------------------------------------------
4. Computer Vision
---------------------------------------------------------

Definition:
AI can understand the contents of images and videos.

Example:
• Identifying a car
• Identifying a person
• Identifying a traffic signal

---------------------------------------------------------
5. Robotics
---------------------------------------------------------

Definition:
Robots understand their environment and follow instructions.

Example:
Command:
"Pick up the box."

Result:
The robot identifies the correct object and picks it up.

---------------------------------------------------------
6. Medical AI
---------------------------------------------------------

Definition:
AI understands medical information and assists healthcare professionals in decision-making.

Example:
An AI system analyzes symptoms and medical information to provide decision support.

---------------------------------------------------------
7. Search Engines
---------------------------------------------------------

Definition:
Search systems understand the meaning and intent behind a user's query.

Example:

Search:
"Best phone for students"

Result:
The search engine understands that the user wants suitable phones instead of simply matching keywords.



=========================================================
2. Challenges of Understanding in AI
=========================================================

Definition:
Understanding is difficult because human communication and the real world are complex.

---------------------------------------------------------
1. Ambiguity
---------------------------------------------------------

Definition:
A word can have multiple meanings.

Example:
"I went to the bank."

Possible Meanings:
• Financial institution
• Side of a river

---------------------------------------------------------
2. Context
---------------------------------------------------------

Definition:
The meaning of a sentence changes depending on the situation.

Example:
"It's cold here."

Possible Meanings:
• Simply giving information
• Requesting someone to turn on the heater

---------------------------------------------------------
3. Common-Sense Knowledge
---------------------------------------------------------

Definition:
Humans naturally use common sense, but AI must learn or represent this knowledge.

Example:
"The glass fell from the table."

Human Understanding:
The glass may break after falling.

---------------------------------------------------------
4. Sarcasm and Humor
---------------------------------------------------------

Definition:
AI may struggle when the intended meaning differs from the literal meaning.

Example:
"Great! Another exam!"

Actual Meaning:
The speaker is expressing frustration, not happiness.

---------------------------------------------------------
5. Emotions
---------------------------------------------------------

Definition:
Understanding emotions from language is difficult.

Example:
"I waited for three hours!"

Possible Emotion:
• Anger
• Frustration

---------------------------------------------------------
6. Different Ways of Saying the Same Thing
---------------------------------------------------------

Definition:
People can express the same idea in different ways.

Examples:
• Turn off the fan.
• Switch the fan off.
• Can you stop the fan?

AI must understand that all three sentences have the same meaning.

---------------------------------------------------------
7. Incomplete Information
---------------------------------------------------------

Definition:
People often leave information unstated because it is understood from context.

Example:

A: "Where is my book?"
B: "It's on the table."

AI must understand that "it" refers to the book.

=========================================================
Applications vs Challenges
=========================================================

| Applications                  | Challenges                          |
|------------------------------|-------------------------------------|
| Natural Language Processing  | Ambiguous language                  |
| Voice Assistants             | Context                             |
| Machine Translation          | Common-sense knowledge              |
| Computer Vision              | Sarcasm and humor                   |
| Robotics                     | Emotions                            |
| Medical AI                   | Incomplete information              |
| Search Engines               | Different ways of expressing ideas  |

=========================================================
Easy Way to Remember 🧠
=========================================================

Applications:
Language
      ↓
Voice
      ↓
Translation
      ↓
Images
      ↓
Robots
      ↓
Medical
      ↓
Search

Remember:
Language → Voice → Translation → Images → Robots → Medical → Search

---------------------------------------------------------

Challenges:
Ambiguity
      ↓
Context
      ↓
Common Sense
      ↓
Sarcasm
      ↓
Emotions
      ↓
Different Expressions
      ↓
Incomplete Information

Remember:
Ambiguity → Context → Common Sense → Sarcasm → Emotions → Different Expressions → Incomplete Information

=========================================================
Short Exam Answer (3–5 Marks)
=========================================================

Understanding in AI enables machines to interpret the meaning, context, and purpose of information. It is 
widely used in Natural Language Processing (NLP), chatbots, voice assistants, machine translation, computer 
vision, robotics, medical AI, and search engines.

However, achieving human-like understanding is challenging because of ambiguity, context, lack of common-sense 
knowledge, sarcasm, emotions, incomplete information, and the many different ways people express the same idea. 
Therefore, understanding remains one of the biggest challenges in Artificial Intelligence.
      `},{id:41,question:"41. Explain Syntactic Processing in NLP with suitable examples.",answer:"",codeExample:`
# Syntactic Processing in NLP

=========================================================
Definition
=========================================================

Syntactic Processing is a step in Natural Language Processing (NLP) in which the computer checks the 
grammar and sentence structure to understand how the words are related.

---------------------------------------------------------
Simple Definition (Exam)
---------------------------------------------------------

Syntactic Processing is the process of analyzing the grammar and structure of a sentence to understand 
the relationship between words.


=========================================================
Easy Explanation
=========================================================

When we read a sentence, we naturally understand:

• Who is doing the action?
• What is the action?
• Who receives the action?

AI also finds these relationships using Syntactic Processing.

=========================================================
Example 1
=========================================================

Sentence:

"The boy plays football."

AI identifies:

Subject  → The boy
Verb     → plays
Object   → football

Result:
The AI understands the sentence structure correctly.

=========================================================
Example 2
=========================================================

Sentence:

"The cat chased the mouse."

AI identifies:

Subject  → The cat
Verb     → chased
Object   → the mouse

Understanding:

• The cat is performing the action.
• The mouse receives the action.


=========================================================
Steps in Syntactic Processing
=========================================================

---------------------------------------------------------
1. Tokenization
---------------------------------------------------------

Definition:
The sentence is divided into individual words (tokens).

Example:

"The boy plays football."

↓

The | boy | plays | football

---------------------------------------------------------
2. Part-of-Speech (POS) Tagging
---------------------------------------------------------

Definition:
Each word is assigned its grammatical role.

| Word      | POS Tag |
|-----------|---------|
| The       | Article |
| boy       | Noun    |
| plays     | Verb    |
| football  | Noun    |

---------------------------------------------------------
3. Parsing
---------------------------------------------------------

Definition:
The AI checks how the words are connected to form a grammatically correct sentence.

Example:

Sentence
│
├── Subject → The boy
├── Verb    → plays
└── Object  → football

This process is called **Parsing**.


=========================================================
Why is Syntactic Processing Important?
=========================================================

It helps AI to:

✔ Understand grammar.
✔ Identify the Subject, Verb, and Object.
✔ Detect grammatical errors.
✔ Prepare the sentence for Semantic Processing (meaning).


=========================================================
Applications
=========================================================

Syntactic Processing is used in:

🤖 Chatbots
🌐 Machine Translation
🎤 Voice Assistants
📝 Grammar Checkers
📧 Email and Text Analysis
🔍 Search Engines

=========================================================
Advantages
=========================================================

✔ Understands sentence structure.
✔ Detects grammar mistakes.
✔ Improves language understanding.
✔ Supports accurate translation and question answering.

=========================================================
Limitations
=========================================================

✘ Difficult for long or complex sentences.
✘ Ambiguous sentences may have more than one valid structure.
✘ Grammar alone cannot provide the complete meaning.


=========================================================
Example of Ambiguity
=========================================================

Sentence:

"I saw the man with a telescope."

Possible Meaning 1:
I used a telescope to see the man.

Possible Meaning 2:
The man had a telescope.

Conclusion:
Syntactic Processing analyzes the grammar, but Semantic Processing and Context are 
needed to determine the correct meaning.


=========================================================
Exam Points to Remember 📚
=========================================================

• Syntactic Processing = Analysis of grammar and sentence structure.

• Main Steps:
  1. Tokenization
  2. Part-of-Speech (POS) Tagging
  3. Parsing

• Identifies:
  → Subject
  → Verb
  → Object

• Used in:
  → NLP
  → Chatbots
  → Machine Translation
  → Grammar Checkers
  → Voice Assistants

=========================================================
Easy Way to Remember 🧠
=========================================================

Sentence
    ↓
Tokenization
    ↓
POS Tagging
    ↓
Parsing
    ↓
Understand Grammar
    ↓
Prepare for Meaning (Semantic Processing)

Remember:

Sentence → Tokenization → POS Tagging → Parsing → Grammar Understanding → Meaning

=========================================================
Short Conclusion (3–5 Marks)
=========================================================

Syntactic Processing is an important stage of Natural Language Processing (NLP) that analyzes the 
grammar and structure of sentences. It identifies the relationships between words through Tokenization, 
Part-of-Speech (POS) Tagging, and Parsing. This helps AI systems understand sentence structure, detect 
grammar errors, and prepare the sentence for Semantic Processing, resulting in more accurate language understanding.
      
      `},{id:42,question:"42. Explain Semantic Analysis in NLP with suitable examples.",answer:"",codeExample:`
# Semantic Analysis in NLP

=========================================================
Definition
=========================================================

Semantic Analysis is a stage of Natural Language Processing (NLP) in which the computer understands the 
meaning of words and sentences.

While Syntactic Processing checks the grammar, Semantic Analysis checks the meaning.


---------------------------------------------------------
Simple Definition (Exam)
---------------------------------------------------------

Semantic Analysis is the process of understanding the meaning of words, phrases, and sentences in 
Natural Language Processing (NLP).


=========================================================
Easy Explanation
=========================================================

Consider the sentence:

  "The boy eats an apple."

The AI understands:

Boy   → Person
Eats  → Action
Apple → Fruit

Result:
The AI understands the meaning of the sentence, not just its grammar.

=========================================================
Example 1
=========================================================

Sentence:

"The boy plays football."

Semantic Analysis understands:

Person (Boy)
      │
      │ plays
      ▼
Football (Game)

Meaning:

A boy is playing football.

=========================================================
Example 2
=========================================================

Sentence:

"The cat drinks milk."

The AI understands:

Cat    → Animal
Drinks → Action
Milk   → Liquid

Result:

Since cats can drink milk, the sentence is meaningful.

=========================================================
Example 3
=========================================================

Sentence:

"The cat drinks a laptop."

Grammar:
✔ Grammatically correct

Meaning:
✘ Semantically incorrect

Reason:

Cat     → Animal
Drinks  → Action
Laptop  → Electronic Device

A laptop cannot be drunk.

Therefore, the sentence is **semantically incorrect**.



=========================================================
Steps in Semantic Analysis
=========================================================

---------------------------------------------------------
1. Identify Word Meaning
---------------------------------------------------------

Definition:
The AI finds the meaning of each individual word.

Examples:

Apple   → Fruit
Run     → Action
Teacher → Person

---------------------------------------------------------
2. Understand Sentence Meaning
---------------------------------------------------------

Definition:
The AI combines the meanings of all words to understand the complete sentence.

Example:

"The girl reads a book."

AI understands:

Girl  → Person
Reads → Action
Book  → Object

---------------------------------------------------------
3. Resolve Ambiguity
---------------------------------------------------------

Definition:
Some words have more than one meaning. AI uses context to determine the correct meaning.

Example:

"I went to the bank."

Possible Meanings:

🏦 Bank = Financial Institution
🌊 Bank = River Bank

Context Example:

"I went to the bank to deposit money."

Correct Meaning:

Bank = Financial Institution



=========================================================
Difference Between Syntactic and Semantic Analysis
=========================================================

| Syntactic Analysis                                     | Semantic Analysis                                     |
|--------------------------------------------------------|-------------------------------------------------------|
| Checks grammar                                         | Checks meaning                                        |
| Focuses on sentence structure                          | Focuses on word and sentence meaning                  |
| Finds Subject, Verb, and Object                        | Understands what the sentence means                   |
| Example: "The cat drinks laptop." → Grammar is correct | Meaning is incorrect because a laptop cannot be drunk |


=========================================================
Applications of Semantic Analysis
=========================================================

Semantic Analysis is used in:

🤖 Chatbots
🎤 Voice Assistants
🌐 Machine Translation
😊 Sentiment Analysis
🔍 Search Engines
❓ Question Answering Systems
📧 Email Classification


=========================================================
Advantages
=========================================================

✔ Understands the meaning of language.
✔ Resolves ambiguity.
✔ Improves chatbot responses.
✔ Helps in language translation.
✔ Makes AI systems more intelligent.

=========================================================
Limitations
=========================================================

✘ Difficult for ambiguous words.
✘ Requires background and common-sense knowledge.
✘ Hard to understand sarcasm and idioms.
✘ Context-dependent meanings can be challenging.


=========================================================
Example of Semantic Analysis
=========================================================

Sentence:

"Rahul deposited money in the bank."

AI understands:

Rahul      → Person
Deposited  → Action
Money      → Object
Bank       → Financial Institution

Result:

The AI correctly understands the complete meaning of the sentence.


=========================================================
Real-Life Example
=========================================================

Voice Assistant Command:

"Play romantic songs."

AI understands:

Play      → Action
Romantic → Music Category
Songs     → Audio Files

Result:

The assistant plays suitable romantic songs.


=========================================================
Exam Points to Remember 📚
=========================================================

• Semantic Analysis = Understanding Meaning.
• It identifies the meaning of words and sentences.
• It resolves ambiguity.
• It uses context to determine the correct meaning.
• Used in:
  → Chatbots
  → Voice Assistants
  → Machine Translation
  → Search Engines
  → Question Answering Systems



=========================================================
Easy Way to Remember 🧠
=========================================================

Sentence
    ↓
Understand Words
    ↓
Find Meaning
    ↓
Use Context
    ↓
Resolve Ambiguity
    ↓
Understand Complete Sentence

Remember:

Sentence → Word Meaning → Context → Ambiguity Resolution → Complete Meaning

=========================================================
Short Conclusion (3–5 Marks)
=========================================================

Semantic Analysis is an important stage of Natural Language Processing (NLP) that focuses on 
understanding the meaning of words and sentences. It helps AI identify the correct meaning, resolve 
ambiguity, and improve communication with users. It is widely used in chatbots, voice assistants, machine 
translation, search engines, sentiment analysis, and question-answering systems.
      `},{id:43,question:"43. Explain Discourse Processing and Pragmatic Processing with examples.",answer:"",codeExample:`
============================================================
        Discourse Processing and Pragmatic Processing in NLP
============================================================

These are the last two stages of Natural Language Processing (NLP).

The five stages of NLP are:

• Lexical Analysis
• Syntactic Analysis
• Semantic Analysis
• Discourse Processing
• Pragmatic Processing


============================================================
1. Discourse Processing
============================================================

Definition

Discourse Processing is the process of understanding the
relationship between multiple sentences in a conversation or
paragraph.

------------------------------------------------------------
Simple Definition (Exam)
------------------------------------------------------------

Discourse Processing is the process of understanding how
different sentences are connected to each other.

------------------------------------------------------------
Easy Explanation
------------------------------------------------------------

Sometimes, one sentence depends on another sentence.

AI must understand:

• Who is being talked about?
• What does "he", "she", "it", or "they" refer to?
• How are the sentences connected?

------------------------------------------------------------
Example 1
------------------------------------------------------------

Sentence:

Rahul bought a new laptop. He is very happy.

AI understands:

• Rahul bought a laptop.
• "He" = Rahul.

So the second sentence refers to Rahul.

------------------------------------------------------------
Example 2
------------------------------------------------------------

Sentence:

Rita has a dog. It is very friendly.

AI understands:

• "It" = Dog

So "It" refers to the dog, not Rita.

------------------------------------------------------------
Example 3
------------------------------------------------------------

Sentence:

The teacher entered the classroom. The students stood up.

AI understands:

• The students stood up because the teacher entered.

It recognizes the relationship between the two sentences.

------------------------------------------------------------
Applications of Discourse Processing
------------------------------------------------------------

• 🤖 Chatbots
• 📖 Story understanding
• 📄 Text summarization
• 🌐 Machine translation
• ❓ Question-answering systems


============================================================
2. Pragmatic Processing
============================================================

Definition

Pragmatic Processing is the process of understanding the
speaker's actual intention by using context and real-world
knowledge.

------------------------------------------------------------
Simple Definition (Exam)
------------------------------------------------------------

Pragmatic Processing is the process of understanding the
intended meaning of a sentence using context and common
sense.

------------------------------------------------------------
Easy Explanation
------------------------------------------------------------

Sometimes people do not say exactly what they mean.

AI must understand the real intention behind the words.

------------------------------------------------------------
Example 1
------------------------------------------------------------

Sentence:

"Can you open the window?"

Literal meaning:

The speaker is asking whether you are able to open the
window.

Actual meaning:

The speaker is requesting someone to open the window.

Pragmatic Processing understands the real intention.

------------------------------------------------------------
Example 2
------------------------------------------------------------

Sentence:

"It's very cold here."

Literal meaning:

The room is cold.

Actual meaning:

The speaker may want someone to:

• Close the window.
• Turn off the fan.
• Turn on the heater.

AI uses context to understand the intended meaning.

------------------------------------------------------------
Example 3
------------------------------------------------------------

Sentence:

"Great! Another exam!"

Literal meaning:

Something good happened.

Actual meaning:

The speaker may actually be unhappy or frustrated.

Pragmatic Processing understands this from the context.


============================================================
Difference Between Discourse Processing and Pragmatic Processing
============================================================


| Discourse Processing                                       | Pragmatic Processing                                  |
| ---------------------------------------------------------- | ----------------------------------------------------- |
| Understands the relationship between sentences             | Understands the speaker's intention                   |
| Focuses on connecting multiple sentences                   | Focuses on context and real-world knowledge           |
| Resolves references like "he", "she", "it"                 | Understands implied meaning                           |
| Example: "Rahul bought a car. He loves it." → "He" = Rahul | Example: "Can you open the window?" → It is a request |



============================================================
Easy Example to Remember
============================================================

Discourse Processing

Rahul has a dog.

It is brown.

"It" = Dog

The AI connects the two sentences.

------------------------------------------------------------

Pragmatic Processing

It's very hot here.

AI understands the speaker probably wants:

• Turn on the fan or AC.

It understands the intended meaning, not just the words.


============================================================
Applications
============================================================

Discourse Processing

• Chatbots
• Story understanding
• Text summarization
• Machine translation
• Question-answering

------------------------------------------------------------

Pragmatic Processing

• Voice assistants
• Chatbots
• Human-computer interaction
• Smart home systems
• Customer support systems


============================================================
🧠 Easy Memory Trick
============================================================

Discourse = Connection

👉 Connects one sentence with another.

Think:
"Which sentence is connected to which?"

------------------------------------------------------------

Pragmatic = Intention

👉 Understands what the speaker really means.

Think:
"What does the speaker actually want?"


============================================================
Short Exam Answer 📚
============================================================

Discourse Processing

Discourse Processing is the NLP stage that understands the
relationship between multiple sentences in a paragraph or
conversation. It resolves references such as he, she, it,
and they and maintains the continuity of meaning. For
example, in "Rahul bought a new laptop. He is happy," the
word "He" refers to Rahul.

------------------------------------------------------------

Pragmatic Processing

Pragmatic Processing is the NLP stage that understands the
speaker's intended meaning using context and real-world
knowledge. For example, "Can you open the window?" is
understood as a request to open the window, not merely a
question about ability.
      
      `},{id:44,question:"44. Explain Spell Checking in NLP. Discuss error detection and correction techniques.",answer:"",codeExample:`
============================================================
                   Spell Checking in NLP
============================================================

Definition

Spell Checking is an application of Natural Language Processing
(NLP) that detects and corrects spelling mistakes in words.

------------------------------------------------------------
Simple Definition (Exam)
------------------------------------------------------------

Spell Checking is the process of identifying and correcting
spelling errors in a text.

------------------------------------------------------------
Easy Explanation
------------------------------------------------------------

When we type a document, email, or message, we may make
spelling mistakes.

A spell checker compares the typed word with a dictionary of
correct words.

• If the word is correct → No change.
• If the word is incorrect → The system suggests the correct spelling.

------------------------------------------------------------
Example
------------------------------------------------------------

Typed sentence:

I am studing Artificial Inteligence.

Spell Checker suggests:

I am studying Artificial Intelligence.

Here:

• studing → studying
• Inteligence → Intelligence


============================================================
How Spell Checking Works
============================================================

User Types Text
        │
        ▼
Check Each Word
        │
        ▼
Compare with Dictionary
        │
 ┌──────┴──────┐
 │             │
Correct     Incorrect
 │             │
 ▼             ▼
Keep Word   Suggest Correct Word


============================================================
Error Detection
============================================================

Definition

Error Detection is the process of finding incorrect or
misspelled words.

------------------------------------------------------------
Example
------------------------------------------------------------

Sentence:
  I have a blu car.

The word:
  blu

is not found in the dictionary.
So the system detects it as an error.


============================================================
Types of Errors
============================================================

------------------------------------------------------------
1. Non-Word Error
------------------------------------------------------------

A word does not exist in the dictionary.

Example

recieve

Correct spelling:

receive

The spell checker easily detects this error.

------------------------------------------------------------
2. Real-Word Error
------------------------------------------------------------

The word exists in the dictionary but is wrong in the sentence.

Example

I went too school.

Both:

too
school

are correct words.

But the correct sentence is:

I went to school.

This type of error is harder to detect because "too" is a
valid English word.


============================================================
Error Correction
============================================================

Definition

Error Correction is the process of suggesting or replacing the
incorrect word with the correct one.

------------------------------------------------------------
Example
------------------------------------------------------------

Typed:

enviroment

Suggested:

environment


============================================================
Error Correction Techniques
============================================================

------------------------------------------------------------
1. Dictionary-Based Technique
------------------------------------------------------------

The system compares each word with a dictionary.

If the word is missing, suggestions are generated.

Example

techer

Suggestion:

teacher

------------------------------------------------------------
2. Edit Distance Technique
------------------------------------------------------------

The system finds words that need the fewest changes.

Possible changes:

• Insert a letter
• Delete a letter
• Replace a letter
• Swap two letters

Example

Typed:

studnt

Correct:

student

Only one letter (e) is missing, so student is suggested.

------------------------------------------------------------
3. Context-Based Technique
------------------------------------------------------------

The system checks the meaning of the sentence before
suggesting corrections.

Example

I went too school.

The AI understands that:

to

fits the sentence better than:

too

------------------------------------------------------------
4. Statistical / Machine Learning Technique
------------------------------------------------------------

The system learns from a large amount of text and predicts the
most likely correct word.

Example

If users often type:

goverment

the AI learns that the intended word is usually:

government


============================================================
Applications of Spell Checking
============================================================

Spell checking is used in:

• 📝 Microsoft Word
• 📧 Email applications
• 📱 Mobile keyboards
• 🌐 Search engines
• 🤖 Chatbots
• 📄 Text editors
• 💬 Messaging apps


============================================================
Advantages
============================================================

• Detects spelling mistakes.
• Improves writing quality.
• Saves time.
• Helps users write correctly.
• Increases document accuracy.


============================================================
Limitations
============================================================

• Cannot always detect real-word errors.
• May suggest multiple possible corrections.
• Can struggle with names or uncommon words.
• Depends on dictionary quality and context.


============================================================
Difference Between Error Detection and Error Correction
============================================================

| Error Detection           | Error Correction          |
| ------------------------- | ------------------------- |
| Finds spelling mistakes   | Fixes spelling mistakes   |
| Detects incorrect words   | Suggests the correct word |
| First step                | Second step               |
| Example: Detect "studing" | Suggest "studying"        |



============================================================
🧠 Easy Memory Trick
============================================================

Spell Checking

👉 Finds and fixes spelling mistakes

------------------------------------------------------------

Error Detection

👉 Find the mistake

------------------------------------------------------------

Error Correction

👉 Correct the mistake


============================================================
Short Exam Answer 📚
============================================================

Spell Checking is an NLP application that detects and corrects
spelling mistakes in text. It first performs error detection
by identifying incorrect words using a dictionary or context.
Then it performs error correction by suggesting the most
appropriate spelling using techniques such as dictionary-based
methods, edit distance, context-based methods, and
statistical/machine learning techniques. Spell checking is
widely used in word processors, email applications, mobile
keyboards, search engines, and chatbots.
      `},{id:51,question:"51. Explain Biological Neuron and Artificial Neuron. Compare both with a neat diagram.",answer:"",codeExample:`
============================================================
           Biological Neuron and Artificial Neuron
============================================================

A neuron is the basic unit of the nervous system. It receives
information, processes it, and sends signals to other neurons.

In Artificial Intelligence (AI), scientists designed the
Artificial Neuron by taking inspiration from the Biological
Neuron.


============================================================
1. Biological Neuron
============================================================

Definition

A Biological Neuron is a nerve cell found in the human brain
and nervous system. It receives signals from other neurons,
processes them, and sends signals to other neurons.

------------------------------------------------------------
Diagram
------------------------------------------------------------

          Dendrites
        /    |    \\
       /     |     \\
      ▼      ▼      ▼
   +-------------------+
   |    Cell Body      |
   |     (Soma)        |
   +-------------------+
            │
            │
          Axon
            │
            ▼
    Axon Terminals
            │
            ▼
      Next Neuron

------------------------------------------------------------
Parts of a Biological Neuron
------------------------------------------------------------

1. Dendrites

• Receive signals from other neurons.

------------------------------------------------------------

2. Cell Body (Soma)

• Processes the received signals.

------------------------------------------------------------

3. Axon

• Carries the signal away from the cell body.

------------------------------------------------------------

4. Axon Terminals

• Pass the signal to the next neuron.

------------------------------------------------------------
Working of a Biological Neuron
------------------------------------------------------------

Dendrites
     ↓
Receive Signals
     ↓
Cell Body Processes Signals
     ↓
Axon Sends Signal
     ↓
Next Neuron

------------------------------------------------------------
Example
------------------------------------------------------------

When you touch a hot object:

• Dendrites receive the signal.
• Cell body processes it.
• Axon carries the signal.
• Your hand quickly moves away.


============================================================
2. Artificial Neuron
============================================================

Definition

An Artificial Neuron is a mathematical model inspired by the
biological neuron. It receives inputs, processes them using
weights and an activation function, and produces an output.

------------------------------------------------------------
Diagram
------------------------------------------------------------

x1 ──►(w1)──\\
             \\
x2 ──►(w2)────► [ Σ ] ─► Activation Function ─► Output (Y)
             /
x3 ──►(w3)──/

------------------------------------------------------------
Components of an Artificial Neuron
------------------------------------------------------------

1. Inputs (x1, x2, x3)

• Information given to the neuron.

------------------------------------------------------------

2. Weights (w1, w2, w3)

• Show the importance of each input.

------------------------------------------------------------

3. Summation (Σ)

• Adds all weighted inputs.

------------------------------------------------------------

4. Activation Function

• Decides whether the neuron should produce an output.

------------------------------------------------------------

5. Output (Y)

• The final result produced by the neuron.

------------------------------------------------------------
Working of an Artificial Neuron
------------------------------------------------------------

Inputs
   ↓
Multiply by Weights
   ↓
Add All Values (Σ)
   ↓
Activation Function
   ↓
Output

------------------------------------------------------------
Example
------------------------------------------------------------

Suppose:

x1 = 2

x2 = 3

w1 = 0.5

w2 = 1

Weighted sum:

(2 × 0.5) + (3 × 1)

= 1 + 3

= 4

The activation function checks the value (4) and produces the
final output.


============================================================
Comparison Between Biological Neuron and Artificial Neuron
============================================================

+------------------------------------------------------+------------------------------------------------------+
| Biological Neuron                                    | Artificial Neuron                                    |
+------------------------------------------------------+------------------------------------------------------+
| Natural nerve cell                                   | Mathematical/computer model                          |
+------------------------------------------------------+------------------------------------------------------+
| Found in the human brain                             | Used in Artificial Neural Networks (ANN)             |
+------------------------------------------------------+------------------------------------------------------+
| Receives signals through dendrites                   | Receives input values                                |
+------------------------------------------------------+------------------------------------------------------+
| Processes signals in the cell body                   | Processes inputs using weighted sum                  |
+------------------------------------------------------+------------------------------------------------------+
| Sends signals through the axon                       | Produces an output                                   |
+------------------------------------------------------+------------------------------------------------------+
| Learns through biological changes                    | Learns by adjusting weights                          |
+------------------------------------------------------+------------------------------------------------------+
| Very complex                                         | Simpler than a real neuron                           |
+------------------------------------------------------+------------------------------------------------------+


============================================================
Mapping Between Biological and Artificial Neuron
============================================================

+------------------------------------------------------+------------------------------------------------------+
| Biological Neuron                                    | Artificial Neuron                                    |
+------------------------------------------------------+------------------------------------------------------+
| Dendrites                                            | Inputs (x1, x2, x3)                                  |
+------------------------------------------------------+------------------------------------------------------+
| Synapses                                             | Weights (w1, w2, w3)                                 |
+------------------------------------------------------+------------------------------------------------------+
| Cell Body (Soma)                                     | Summation (Σ)                                        |
+------------------------------------------------------+------------------------------------------------------+
| Axon                                                 | Output                                               |
+------------------------------------------------------+------------------------------------------------------+
| Brain Learning                                       | Weight Adjustment                                    |
+------------------------------------------------------+------+


============================================================
🧠 Easy Trick to Remember
============================================================

Biological Neuron

Receive
   ↓
Process
   ↓
Send

------------------------------------------------------------

Artificial Neuron

Input
   ↓
Weight
   ↓
Sum
   ↓
Activation
   ↓
Output


============================================================
Applications of Artificial Neurons
============================================================

Artificial neurons are used in:

• 🤖 Artificial Neural Networks (ANN)
• 😊 Face Recognition
• 🗣️ Speech Recognition
• ✍️ Handwriting Recognition
• 🌐 Machine Translation
• 🚗 Self-driving Cars
• 📧 Spam Email Detection
• 🏥 Medical Diagnosis


============================================================
Short Exam Answer 📚
============================================================

A Biological Neuron is a natural nerve cell that receives,
processes, and transmits signals in the human brain. It
consists of dendrites, cell body (soma), axon, and axon
terminals.

An Artificial Neuron is a mathematical model inspired by the
biological neuron. It receives inputs, multiplies them by
weights, computes their sum, applies an activation function,
and produces an output.

Artificial neurons are the basic building blocks of
Artificial Neural Networks (ANNs) and are widely used in AI
applications such as image recognition, speech recognition,
and medical diagnosis.
      `},{id:52,question:"52. Explain the Architecture of Artificial Neural Networks (ANN).",answer:"",codeExample:`
============================================================
          Architecture of Artificial Neural Networks (ANN)
============================================================

Definition

An Artificial Neural Network (ANN) is a computer model inspired
by the human brain. It consists of many artificial neurons
connected together to process information and solve problems.

------------------------------------------------------------
Simple Definition (Exam)
------------------------------------------------------------

An Artificial Neural Network (ANN) is a network of
interconnected artificial neurons organized into layers that
learn from data to produce the desired output.


============================================================
Architecture of ANN
============================================================

An ANN is mainly made up of three layers:

• Input Layer
• Hidden Layer(s)
• Output Layer


============================================================
Diagram
============================================================

             Artificial Neural Network (ANN)

        Input Layer      Hidden Layer      Output Layer

        x1  ○  --------\\
                         \\
        x2  ○  --------- ○ ------\\
                         /        \\
        x3  ○  -------- ○ -------- ○  Output (Y)
                         \\        /
        x4  ○  --------- ○ ------/


============================================================
1. Input Layer
============================================================

Definition

The Input Layer receives data from the outside world.

------------------------------------------------------------
Functions
------------------------------------------------------------

• Receives input data.
• Passes the data to the hidden layer.
• Does not perform calculations.

------------------------------------------------------------
Example
------------------------------------------------------------

Suppose we want to predict whether a student will pass.

Inputs may be:

• Study Hours
• Attendance
• Marks

These values are given to the input layer.


============================================================
2. Hidden Layer
============================================================

Definition

The Hidden Layer processes the input data and learns patterns.

------------------------------------------------------------
Functions
------------------------------------------------------------

• Receives data from the input layer.
• Performs calculations using weights and activation functions.
• Extracts useful features.
• Passes the processed data to the output layer.

There can be:

• One hidden layer
• Two hidden layers
• Many hidden layers (Deep Learning)

------------------------------------------------------------
Example
------------------------------------------------------------

The hidden layer learns relationships such as:

• More study hours → Higher chance of passing.
• Better attendance → Better performance.


============================================================
3. Output Layer
============================================================

Definition

The Output Layer produces the final result.

------------------------------------------------------------
Functions
------------------------------------------------------------

• Receives processed data from the hidden layer.
• Gives the final prediction or classification.

------------------------------------------------------------
Example
------------------------------------------------------------

Output:

Pass

or

Fail


============================================================
Working of ANN
============================================================

Input Data
      │
      ▼
Input Layer
      │
      ▼
Hidden Layer
(Process & Learn)
      │
      ▼
Output Layer
      │
      ▼
Final Result


============================================================
Example
============================================================

Suppose an ANN predicts whether an email is spam.

------------------------------------------------------------
Input Layer
------------------------------------------------------------

Inputs:

• Word Count
• Number of Links
• Sender Address

            ↓

------------------------------------------------------------
Hidden Layer
------------------------------------------------------------

Analyzes patterns and relationships in the data.

            ↓

------------------------------------------------------------
Output Layer
------------------------------------------------------------

Produces:

Spam

or

Not Spam


============================================================
Components of ANN
============================================================

------------------------------------------------------------
1. Neurons (Nodes)
------------------------------------------------------------

Basic processing units that receive inputs and produce outputs.

------------------------------------------------------------
2. Weights
------------------------------------------------------------

Each connection has a weight that shows the importance of the
input.

------------------------------------------------------------
3. Bias
------------------------------------------------------------

A value added to help the neuron make better decisions.

------------------------------------------------------------
4. Activation Function
------------------------------------------------------------

Decides whether the neuron should produce an output.

Examples:

• Sigmoid
• ReLU
• Tanh


============================================================
Types of ANN Architecture
============================================================

------------------------------------------------------------
1. Single-Layer Feedforward Network
------------------------------------------------------------

• One input layer
• One output layer
• No hidden layer

Input → Output

------------------------------------------------------------
2. Multi-Layer Feedforward Network
------------------------------------------------------------

• Input layer
• One or more hidden layers
• Output layer

Input → Hidden → Output

------------------------------------------------------------
3. Recurrent Neural Network (RNN)
------------------------------------------------------------

• Neurons have feedback connections.
• Used for sequence data such as text and speech.


============================================================
Advantages of ANN
============================================================

• Learns from data.
• Recognizes patterns.
• Handles complex problems.
• Can work with noisy or incomplete data.
• Improves performance through training.


============================================================
Applications of ANN
============================================================

ANNs are used in:

• 😊 Face Recognition
• 🗣️ Speech Recognition
• ✍️ Handwriting Recognition
• 🌐 Machine Translation
• 🚗 Self-Driving Cars
• 📧 Spam Email Detection
• 🏥 Medical Diagnosis
• 💳 Fraud Detection
• 📈 Stock Market Prediction


============================================================
🧠 Easy Memory Trick
============================================================

Remember the three layers:

Input
   ↓
Hidden
   ↓
Output

Think:

Input Layer → Receives data.

Hidden Layer → Learns and processes.

Output Layer → Gives the final answer.


============================================================
Short Exam Answer 📚
============================================================

Artificial Neural Network (ANN) is a network of
interconnected artificial neurons inspired by the human brain.
Its architecture consists of three main layers: Input Layer,
Hidden Layer, and Output Layer. The Input Layer receives data,
the Hidden Layer processes and learns patterns using weights
and activation functions, and the Output Layer produces the
final result. ANNs are widely used in image recognition,
speech recognition, medical diagnosis, spam detection, and
self-driving cars.
      
      `},{id:53,question:"53. Explain the Advantages and Disadvantages of Neural Networks.",answer:"",codeExample:`
============================================================
      Advantages and Disadvantages of Artificial Neural Networks (ANN)
============================================================

An Artificial Neural Network (ANN) is a computer system
inspired by the human brain. It can learn from data,
recognize patterns, and make predictions.


============================================================
Advantages of Neural Networks
============================================================

------------------------------------------------------------
1. Learns from Data
------------------------------------------------------------

ANN can learn from examples without being explicitly
programmed.

Example

A neural network learns to recognize cats and dogs by
training on many images.


------------------------------------------------------------
2. Pattern Recognition
------------------------------------------------------------

ANN is very good at finding patterns in large amounts of data.

Example

• Face recognition
• Handwriting recognition
• Fingerprint recognition


------------------------------------------------------------
3. Handles Complex Problems
------------------------------------------------------------

ANN can solve problems that are difficult for traditional
programs.

Example

• Weather prediction
• Stock market prediction
• Medical diagnosis


------------------------------------------------------------
4. Works with Noisy or Incomplete Data
------------------------------------------------------------

Even if some data is missing or contains errors, ANN can
still make useful predictions.

Example

A blurred handwritten number can still be recognized.


------------------------------------------------------------
5. High Accuracy
------------------------------------------------------------

After proper training, ANN often gives accurate results.

Example

Email spam detection with high accuracy.


------------------------------------------------------------
6. Self-Learning and Adaptation
------------------------------------------------------------

ANN improves its performance by learning from new data.

Example

A recommendation system becomes better as it learns a user's
preferences.


------------------------------------------------------------
7. Parallel Processing
------------------------------------------------------------

Many neurons work together at the same time, making
processing efficient.

Example

Image recognition systems process many image features
simultaneously.


============================================================
Disadvantages of Neural Networks
============================================================

------------------------------------------------------------
1. Requires Large Amounts of Data
------------------------------------------------------------

ANN usually needs a lot of training data to perform well.

Example

Thousands of images may be needed to train a face
recognition system.


------------------------------------------------------------
2. Long Training Time
------------------------------------------------------------

Training a neural network can take a long time, especially
for large models.

Example

Training a deep learning model may take hours or even days.


------------------------------------------------------------
3. High Computational Cost
------------------------------------------------------------

ANN requires powerful computers (such as GPUs) and a large
amount of memory for complex tasks.


------------------------------------------------------------
4. Black Box Nature
------------------------------------------------------------

It is often difficult to understand how the neural network
reached its decision.

Example

A medical AI predicts a disease but may not clearly explain
why it made that prediction.


------------------------------------------------------------
5. Overfitting
------------------------------------------------------------

Sometimes the network memorizes the training data instead of
learning general patterns.

As a result, it performs poorly on new, unseen data.


------------------------------------------------------------
6. Difficult to Design
------------------------------------------------------------

Choosing the right number of layers, neurons, and other
settings requires experience.


------------------------------------------------------------
7. Expensive
------------------------------------------------------------

Developing and training large neural networks can require
expensive hardware and resources.


============================================================
Advantages vs Disadvantages
============================================================

+------------------------------------------------+------------------------------------------------+
| Advantages                                     | Disadvantages                                  |
+------------------------------------------------+------------------------------------------------+
| Learns from data                               | Requires large training data                   |
+------------------------------------------------+------------------------------------------------+
| Recognizes patterns                            | Long training time                             |
+------------------------------------------------+------------------------------------------------+
| Solves complex problems                        | High computational cost                        |
+------------------------------------------------+------------------------------------------------+
| Handles noisy data                             | Black box (hard to explain decisions)          |
+------------------------------------------------+------------------------------------------------+
| High accuracy                                  | Overfitting may occur                          |
+------------------------------------------------+------------------------------------------------+
| Self-learning                                  | Difficult to design                            |
+------------------------------------------------+------------------------------------------------+
| Parallel processing                            | Expensive to train and maintain                |
+------------------------------------------------+------------------------------------------------+


============================================================
Applications of ANN
============================================================

Neural Networks are used in:

• 😊 Face Recognition
• 🗣️ Speech Recognition
• ✍️ Handwriting Recognition
• 🌐 Machine Translation
• 🚗 Self-Driving Cars
• 📧 Spam Email Detection
• 🏥 Medical Diagnosis
• 💳 Fraud Detection
• 📈 Stock Market Prediction


============================================================
🧠 Easy Memory Trick
============================================================

Advantages → LPPAHSP

L → Learns from data

P → Pattern recognition

P → Problem solving

A → Accurate results

H → Handles noisy data

S → Self-learning

P → Parallel processing


------------------------------------------------------------

Disadvantages → DLHBODE

D → Difficult to design

L → Large data required

H → High computational cost

B → Black box

O → Overfitting

D → Long training duration

E → Expensive


============================================================
Short Exam Answer 📚
============================================================

Advantages of ANN: Neural Networks can learn from data,
recognize patterns, solve complex problems, handle noisy
data, provide high accuracy, adapt through learning, and
perform parallel processing.

Disadvantages of ANN: They require large amounts of training
data, take a long time to train, need powerful computing
resources, are difficult to interpret (black box), may
overfit the training data, are difficult to design, and can
be expensive to develop and maintain.
      
      `},{id:54,question:"54. Explain the Applications of Neural Networks.",answer:"",codeExample:`
============================================================
          Applications of Artificial Neural Networks (ANN)
============================================================

Definition

Artificial Neural Networks (ANNs) are used to solve problems
that involve learning, pattern recognition, prediction, and
decision-making. They are widely used in many real-world
applications.

------------------------------------------------------------
Simple Definition (Exam)
------------------------------------------------------------

Artificial Neural Networks are used in various fields such as
image recognition, speech recognition, medical diagnosis,
robotics, finance, and many other AI applications.


============================================================
1. Image Recognition
============================================================

ANN can identify objects, faces, animals, and other items in
images.

Example

• Face Unlock on smartphones
• Recognizing cats and dogs in photos


============================================================
2. Handwriting Recognition
============================================================

ANN can recognize handwritten letters and numbers.

Example

• Reading handwritten exam papers
• Postal code recognition
• Bank cheque processing


============================================================
3. Speech Recognition
============================================================

ANN converts spoken words into text.

Example

When you say:

"Call Mom."

The AI understands your speech and performs the action.

Examples:

• Google Voice Typing
• Siri
• Alexa


============================================================
4. Medical Diagnosis
============================================================

ANN helps doctors detect diseases by analyzing medical data.

Example

• Detecting cancer from X-rays
• Heart disease prediction
• Diabetes prediction


============================================================
5. Spam Email Detection
============================================================

ANN identifies whether an email is Spam or Not Spam.

Example

Congratulations! You won ₹10,00,000.

The ANN classifies it as Spam.


============================================================
6. Weather Forecasting
============================================================

ANN analyzes weather data to predict future weather
conditions.

Example

Predicting:

• Rain
• Temperature
• Storms


============================================================
7. Stock Market Prediction
============================================================

ANN studies previous market data to predict future price
trends.

Example

Predicting whether a stock price may increase or decrease.


============================================================
8. Self-Driving Cars
============================================================

ANN helps autonomous vehicles understand their surroundings.

Example

The car can recognize:

• Traffic lights
• Road signs
• Pedestrians
• Other vehicles

and make driving decisions.


============================================================
9. Robotics
============================================================

ANN helps robots learn tasks and make decisions.

Example

A robot can:

• Pick up objects
• Avoid obstacles
• Navigate a room


============================================================
10. Machine Translation
============================================================

ANN translates text from one language to another.

Example

English:

Good Morning

↓

Hindi:

सुप्रभात


============================================================
11. Recommendation Systems
============================================================

ANN recommends products, movies, or songs based on user
preferences.

Example

• Netflix recommends movies.
• YouTube recommends videos.
• Amazon suggests products.


============================================================
12. Fraud Detection
============================================================

Banks use ANN to detect unusual or suspicious transactions.

Example

If someone suddenly uses your card in another country, the
system may flag it as suspicious.


============================================================
Applications Summary
============================================================

| Application             | Example                  |
| ----------------------- | ------------------------ |
| Image Recognition       | Face Unlock              |
| Handwriting Recognition | Reading handwritten text |
| Speech Recognition      | Voice assistants         |
| Medical Diagnosis       | Disease detection        |
| Spam Detection          | Spam email filtering     |
| Weather Forecasting     | Rain prediction          |
| Stock Market Prediction | Share price prediction   |
| Self-Driving Cars       | Detect traffic signs     |
| Robotics                | Object handling          |
| Machine Translation     | English → Hindi          |
| Recommendation Systems  | Netflix, YouTube         |
| Fraud Detection         | Banking security         |


============================================================
🧠 Easy Memory Trick
============================================================

Remember the keyword:

"ISMSWSRFMRF"

I → Image Recognition
S → Speech Recognition
M → Medical Diagnosis
S → Spam Detection
W → Weather Forecasting
S → Stock Market Prediction
R → Robotics
F → Fraud Detection
M → Machine Translation
R → Recommendation Systems
F → Face Recognition (Image Recognition example)

------------------------------------------------------------

Or simply remember the most common applications:

📷 Image Recognition
🗣️ Speech Recognition
🏥 Medical Diagnosis
📧 Spam Detection
🚗 Self-Driving Cars
🤖 Robotics
🌐 Machine Translation
📺 Recommendation Systems
💳 Fraud Detection
📈 Stock Market Prediction


============================================================
Short Exam Answer 📚
============================================================

Artificial Neural Networks (ANNs) are widely used in many
real-world applications. These include image recognition,
handwriting recognition, speech recognition, medical
diagnosis, spam email detection, weather forecasting, stock
market prediction, self-driving cars, robotics, machine
translation, recommendation systems, and fraud detection.
ANNs learn from data, recognize patterns, and make accurate
predictions, making them an important technology in modern
Artificial Intelligence.
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:11111,question:"Mid paper solution.",answer:"",codeExample:`
===========================================================
ADVANCED ARTIFICIAL INTELLIGENCE
MID-TERM EXAMINATION – SOLVED ANSWERS
===========================================================


Q.1 (a) SHORT QUESTIONS – 1 MARK
===========================================================

Q1. What is the key idea behind learning in problem-solving?

Answer:

The key idea is that an AI system learns from previous
problem-solving experiences and uses that knowledge to
solve similar problems more efficiently in the future.

In short:

Experience → Learning → Better Problem Solving


-----------------------------------------------------------

Q2. What is the primary objective of Goal Stack Planning
   in AI?

Answer:

The main objective of Goal Stack Planning is to achieve the
final goal by breaking it into smaller sub-goals and solving
them one by one.

In short:

Main Goal
   ↓
Sub-goals
   ↓
Actions
   ↓
Final Goal


-----------------------------------------------------------

Q3. Describe how fuzzy inference works in a fuzzy control
   system.

Answer:

Fuzzy inference converts input values into fuzzy values,
applies IF-THEN rules, and produces an output.

Steps:

Input
  ↓
Fuzzification
  ↓
Apply IF-THEN Rules
  ↓
Inference
  ↓
Defuzzification
  ↓
Output


===========================================================
Q.1 (b) MCQs – 1 MARK
===========================================================

Q1. Which of the following best defines rote learning?

(A) Learning by repetition
(B) Learning by reasoning
(C) Learning through problem-solving
(D) Learning by making inferences

Answer:
(A) Learning by repetition


-----------------------------------------------------------

Q2. Which of the following is a type of neural network
   architecture?

(A) Decision Tree
(B) Feedforward Neural Network
(C) Support Vector Machine
(D) K-Nearest Neighbor

Answer:
(B) Feedforward Neural Network



===========================================================
Q.2 – 3 MARK QUESTIONS
===========================================================

Q1. Discuss the significance of context in pragmatic
   processing and its effect on interpretation.

Answer:

Pragmatic processing means understanding the intended meaning
of a sentence using context.

Context is important because the same sentence can have
different meanings in different situations.

Example:

Sentence:
"It is cold here."

Possible meaning:
- Simple statement about temperature.
- A request to close the window.

Importance of context:

1. Helps understand the speaker's real intention.
2. Resolves ambiguity in language.
3. Helps understand indirect requests.
4. Improves human-computer communication.

Conclusion:

Context helps AI systems understand what the speaker actually
means rather than only understanding the literal words.


-----------------------------------------------------------

Q2. Discuss the limitations of neural networks compared to
   traditional machine learning algorithms.

Answer:

Neural networks are powerful but have some limitations.

1. Large Data Requirement:
   Neural networks generally require a large amount of
   training data.

2. High Computational Cost:
   Training deep neural networks requires high processing
   power and memory.

3. Difficult to Explain:
   Neural networks are often considered "black box" models
   because their decisions can be difficult to explain.

4. Training Time:
   Large neural networks may take a long time to train.

5. Overfitting:
   Neural networks can perform poorly on unseen data if
   they are not properly trained.

Example:

Decision Tree
→ Easier to understand

Neural Network
→ More complex but can learn complicated patterns


-----------------------------------------------------------

Q3. Evaluate the ethical implications of Google Duplex
   interacting with users without clearly indicating it is
   an AI system. What improvements could be made?

Answer:

Google Duplex is an AI system that can communicate with
people to perform tasks such as making appointments.

Ethical problems:

1. Lack of Transparency:
   Users may not know that they are talking to an AI.

2. Deception:
   People may feel misled if the AI behaves like a human
   without clearly identifying itself.

3. Privacy:
   Conversations may involve personal information.

4. Trust:
   Lack of transparency can reduce trust in AI systems.

Improvements:

- Clearly identify the system as an AI.
- Inform the user before the conversation starts.
- Provide options to stop the interaction.
- Protect personal data.
- Follow privacy and ethical guidelines.

Conclusion:

AI systems should be transparent, responsible and clearly
inform users when they are interacting with AI.


-----------------------------------------------------------

Q4. How would you modify a planning system to include
   uncertain information?

Answer:

A planning system can be modified to handle uncertainty by
using probabilities and possible outcomes.

Methods:

1. Represent uncertain facts using probabilities.
2. Assign probabilities to possible actions.
3. Consider multiple possible outcomes.
4. Select the action with the best expected result.
5. Update probabilities when new information is received.

Example:

Weather prediction:

Action → Go outside

Possible outcomes:
- Sunny → 80%
- Rain → 20%

The planning system considers these probabilities before
selecting an action.

In short:

Uncertain Information
        ↓
Possible Outcomes
        ↓
Probability
        ↓
Evaluate Actions
        ↓
Best Action


-----------------------------------------------------------

Q5. Define a Constraint Satisfaction Problem (CSP) in AI.

Answer:

A Constraint Satisfaction Problem (CSP) is a problem in which
we must assign values to variables while satisfying a set of
constraints.

A CSP has three main components:

1. Variables
2. Domains
3. Constraints

Example: Map Colouring

Variables:
A, B, C

Domain:
{Red, Green, Blue}

Constraint:
Adjacent regions cannot have the same colour.

Example:

A = Red
B = Green
C = Blue

Therefore, all constraints are satisfied.

In short:

CSP = Variables + Domains + Constraints


-----------------------------------------------------------

Q6. Investigate the challenges of implementing fuzzy logic
   in real-world systems.

Answer:

Fuzzy logic is useful for handling uncertain or approximate
information, but its implementation has some challenges.

Main challenges:

1. Rule Design:
   Creating correct IF-THEN rules can be difficult.

2. Membership Functions:
   Choosing suitable membership functions requires knowledge
   of the problem.

3. Large Number of Rules:
   Complex systems may require many fuzzy rules.

4. Performance:
   Processing many rules can increase computational cost.

5. Subjectivity:
   Fuzzy values such as "high", "low" and "medium" may depend
   on human judgement.

Example:

Temperature = 30°C

It may be considered:
Warm = 0.7
Hot  = 0.3

The exact membership values depend on the designed system.

Conclusion:

Fuzzy logic is powerful, but designing rules and membership
functions correctly is the main challenge.



===========================================================
Q.3 – 5 MARK QUESTIONS
===========================================================


Q1. Explain how fuzzification is applied to a real-world
   scenario, such as controlling room temperature.

Answer:

Fuzzification is the process of converting a crisp input
value into fuzzy values using membership functions.

Example:

Consider an automatic room temperature control system.

Input:
Temperature = 30°C

Fuzzy sets:

Temperature
    |
    |---- Cold
    |---- Warm
    |---- Hot

Suppose at 30°C:

Warm = 0.7
Hot  = 0.3
Cold = 0.0

This means the temperature is mostly "Warm" but also partly
"Hot".

Step 1: Take Input

Temperature = 30°C

        ↓

Step 2: Fuzzification

30°C → Warm = 0.7
30°C → Hot  = 0.3

        ↓

Step 3: Apply Rules

Rule 1:
IF temperature is Cold
THEN heater = High

Rule 2:
IF temperature is Warm
THEN heater = Medium

Rule 3:
IF temperature is Hot
THEN heater = OFF

        ↓

Step 4: Fuzzy Inference

The system evaluates the rules according to the fuzzy
membership values.

        ↓

Step 5: Defuzzification

The fuzzy output is converted into a crisp value.

Example:

Heater power = 40%

        ↓

Room temperature is controlled automatically.


Diagram:

Temperature Sensor
       ↓
   Fuzzification
       ↓
   Fuzzy Rules
       ↓
 Fuzzy Inference
       ↓
 Defuzzification
       ↓
 Heater / AC
       ↓
Room Temperature


Conclusion:

Fuzzification allows a control system to handle values such
as "cold", "warm" and "hot" instead of using only strict
YES/NO decisions.


-----------------------------------------------------------

Q2. Explain how understanding, as a cognitive task, is
   modeled in AI systems.

Answer:

Understanding in AI means interpreting information and
determining its meaning, context and intention.

AI models understanding through several steps.

1. Perception:
   AI receives input such as text, speech or images.

2. Processing:
   The system processes the input and identifies important
   information.

3. Knowledge Representation:
   Information is stored in a form that the AI can understand.

4. Reasoning:
   AI uses rules and knowledge to draw conclusions.

5. Context Understanding:
   AI considers the situation and previous information.

6. Decision/Response:
   AI produces an appropriate answer or action.

Example:

User:
"Can you book a table for tonight?"

AI processing:

Speech/Text
    ↓
Understand words
    ↓
Identify intention = Booking
    ↓
Understand context = Tonight
    ↓
Find available options
    ↓
Give response


Diagram:

Input
  ↓
Perception
  ↓
Language / Pattern Processing
  ↓
Knowledge Representation
  ↓
Reasoning
  ↓
Decision
  ↓
Response


Conclusion:

AI models cognitive understanding by combining perception,
knowledge, reasoning and context to produce meaningful
responses.


-----------------------------------------------------------

Q3. Evaluate the effectiveness of Alpha-Beta pruning in
   reducing computational time in a specific game.
   Provide metrics to support your argument.

Answer:

Alpha-Beta pruning is an optimization technique used with
the Minimax algorithm in games such as Chess, Tic-Tac-Toe
and Checkers.

It removes branches of the game tree that cannot affect the
final decision.

Basic idea:

Without Alpha-Beta:

              MAX
            /     \\
          MIN     MIN
         /  \\     /  \\
        A    B   C    D

Many branches are evaluated.

With Alpha-Beta:

Some branches are skipped because they cannot improve the
final decision.

              MAX
            /     \\
          MIN     MIN
         /  \\       \\
        A    B       X
                  PRUNED


Important terms:

Alpha (α):
Best value found so far for MAX.

Beta (β):
Best value found so far for MIN.

Pruning condition:

        α >= β

When α >= β, remaining branches can be ignored.

Example metrics:

Assume a game tree has:

Branching factor = 4
Search depth = 6

Without pruning:

Approximate nodes:

4^6 = 4096 nodes

With good move ordering, Alpha-Beta can reduce the number
of nodes significantly, ideally approaching:

2^(6) = 64 nodes

So:

Without pruning → about 4096 nodes
With ideal pruning → about 64 nodes

This means much less computation.

Advantages:

1. Reduces number of nodes evaluated.
2. Reduces computational time.
3. Allows deeper game searches.
4. Produces the same optimal Minimax result.
5. Works especially well with good move ordering.

Conclusion:

Alpha-Beta pruning greatly improves Minimax performance by
avoiding unnecessary branches while still producing the same
best move.


-----------------------------------------------------------

Q4. Discuss the role of machine learning in enhancing
   semantic analysis and provide an example.

Answer:

Semantic analysis means understanding the meaning of words,
sentences and text.

Machine Learning helps AI learn patterns from large amounts
of text and understand the meaning automatically.

Main roles:

1. Sentiment Analysis:
   Determines whether text is positive, negative or neutral.

2. Text Classification:
   Categorizes text into different groups.

3. Word Meaning:
   Understands the meaning of words based on context.

4. Intent Detection:
   Identifies what the user wants.

5. Named Entity Recognition:
   Identifies people, places, organizations, dates, etc.

Example:

Input:

"I really enjoyed this movie."

Machine Learning model:

Text
 ↓
Semantic Analysis
 ↓
Identify meaning
 ↓
Sentiment = Positive

Another example:

User:
"Where is the nearest hospital?"

AI understands:

Intent = Find location
Entity = Hospital


Diagram:

Text Input
    ↓
Machine Learning Model
    ↓
Semantic Analysis
    ↓
Meaning / Intent / Sentiment
    ↓
Output


Conclusion:

Machine Learning improves semantic analysis by learning
language patterns from data and helping AI understand the
meaning and intention of human language.


===========================================================
QUICK REVISION – REMEMBER THESE
===========================================================

1. Learning in problem-solving
   → Experience → Learning → Better solution

2. Goal Stack Planning
   → Main Goal → Sub-goals → Actions → Goal

3. Fuzzy Inference
   → Fuzzification → Rules → Inference → Defuzzification

4. Rote Learning
   → Learning by repetition

5. Feedforward Neural Network
   → Neural Network Architecture

6. Pragmatic Context
   → Helps understand actual intention

7. Neural Network Limitation
   → Data + Time + Computation + Black Box

8. Uncertain Planning
   → Probability + Possible outcomes + Best action

9. CSP
   → Variables + Domains + Constraints

10. Fuzzy Logic Challenge
    → Rule design + Membership functions

11. Fuzzification
    → Crisp value → Fuzzy value

12. Understanding in AI
    → Input → Knowledge → Reasoning → Response

13. Alpha-Beta
    → Removes unnecessary Minimax branches

14. Alpha-Beta condition
    → α >= β → PRUNE

15. Semantic Analysis
    → Understand meaning of text

===========================================================
5-MARK ANSWER FORMULA
===========================================================

For any 5-mark question, write:

1. Definition
2. Explanation
3. 4–6 important points
4. Example
5. Simple diagram
6. Conclusion

This structure makes the answer look complete and is easy
to remember during the exam.
===========================================================
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:61,question:"61. What is a Genetic Algorithm? Explain its basic concept and working.",answer:"",codeExample:`
Genetic Algorithm (GA)


1. What is Genetic Algorithm?

A Genetic Algorithm (GA) is an AI search and optimization technique
inspired by natural evolution.

It tries to find the best solution to a problem by using ideas like
selection, crossover, and mutation.

Simple meaning:

Genetic Algorithm = Find the best solution by improving a population
of possible solutions.


2. Basic Concept

GA works like natural selection:

Population
    ↓
Select best solutions
    ↓
Crossover
    ↓
Mutation
    ↓
New Population
    ↓
Repeat
    ↓
Best Solution


Important terms

Term             Meaning
------------------------------------------------
Population       Group of possible solutions
Chromosome       One possible solution
Fitness          Measures how good a solution is
Selection        Select better solutions
Crossover        Combine two solutions
Mutation         Make a small random change
Generation       One complete cycle


3. Working of Genetic Algorithm

Step 1: Initial Population

Create some random solutions.

10110
11001
10011
11100

Each is a possible solution.


Step 2: Fitness Evaluation

Check how good each solution is.

10110 → Fitness = 3
11001 → Fitness = 3
10011 → Fitness = 3
11100 → Fitness = 3


Step 3: Selection

Select the better solutions as parents.

Parent 1 → 10110
Parent 2 → 11100


Step 4: Crossover

Combine parents to create new solutions.

Parent 1 → 101 | 10
Parent 2 → 111 | 00

Child → 101 | 00


Step 5: Mutation

Make a small random change.

Before → 10100
After  → 10101


Step 6: Repeat

Again calculate fitness, select, crossover, and mutate until a good
solution is found.


4. Simple Diagram

Initial Population
        ↓
 Fitness Evaluation
        ↓
     Selection
        ↓
     Crossover
        ↓
      Mutation
        ↓
 New Population
        ↓
   Repeat Process
        ↓
  Best Solution


5. Advantages

- Finds good solutions for complex problems.
- Useful when traditional methods are difficult.
- Can search a large solution space.
- Does not always require mathematical formulas.


6. Applications

- Scheduling
- Optimization
- Machine learning
- Route planning
- Engineering design
- Game AI


Easy exam definition

Genetic Algorithm is an AI optimization technique inspired by natural
evolution. It finds good solutions using selection, crossover, and
mutation.


Remember:

GA = Selection + Crossover + Mutation → Better Solution
      `},{id:62,question:"62. Explain the basic terminology used in Genetic Algorithms.",answer:"",codeExample:`
Basic Terminology of Genetic Algorithm

Genetic Algorithm (GA) uses some terms that are taken from natural
evolution. Let's understand them in very simple words.


1. Population

A population is a group of possible solutions to a problem.

Example:

Population:

10110
11001
10011
11100

Here, all 4 solutions together are called a population.

Population = Group of solutions


2. Chromosome

A chromosome represents one complete solution.

Example:

10110

Here, 10110 is one chromosome.

If we have:

10110
11001
10011

then there are 3 chromosomes.

Chromosome = One possible solution


3. Gene

A gene is a single part/value of a chromosome.

Example:

Chromosome = 10110

             ↓↓↓↓↓
Genes      = 1 0 1 1 0

Each 1 or 0 is a gene.

Gene = Smallest part of a chromosome


4. Fitness Function

A fitness function checks how good a solution is.

Example:

Suppose we want to find a solution containing maximum 1s.

10110 → 3 ones → Fitness = 3

11110 → 4 ones → Fitness = 4

So 11110 is better because it has a higher fitness.

Fitness Function = Measures the quality of a solution


5. Selection

Selection means choosing the better chromosomes to become parents
for the next generation.

Example:

10110 → Fitness 3
11110 → Fitness 4
10000 → Fitness 1
11011 → Fitness 4

Better chromosomes:

11110
11011

These are selected for reproduction.

Selection = Choose better solutions


6. Crossover

Crossover means combining two parent chromosomes to create a
new chromosome.

Example:

Parent 1 = 101 | 10
Parent 2 = 110 | 01

After crossover:

Child = 101 | 01

Child = 10101

So information from both parents is combined.

Crossover = Combine two parents to create a child


7. Mutation

Mutation means making a small random change in a chromosome.

Example:

Before mutation = 10110

After mutation  = 10010
                    ↑
                 Changed

One gene changed from 1 to 0.

Mutation = Small random change


Easy Table for Exam

Term                 Simple Meaning
------------------------------------------------
Population            Group of solutions
Chromosome            One complete solution
Gene                  Part of a chromosome
Fitness Function      Measures solution quality
Selection             Chooses better solutions
Crossover             Combines two parents
Mutation              Makes a small random change


Easy Memory Trick

Population → Many solutions
Chromosome → One solution
Gene       → Part of solution
Fitness    → How good?
Selection  → Choose best
Crossover  → Combine
Mutation   → Change


One-line summary:

GA starts with a population → selects good chromosomes → performs
crossover → applies mutation → produces better solutions.
      
      `},{id:63,question:"63. Explain the Genetic Algorithm (GA) Cycle with a neat diagram.",answer:"",codeExample:`
Genetic Algorithm (GA) Cycle

The Genetic Algorithm cycle is the repeated process used by GA to
find a better or best solution to a problem.


GA Cycle

        ┌─────────────────────┐
        │ Initial Population  │
        └──────────┬──────────┘
                   ↓
        ┌─────────────────────┐
        │ Fitness Evaluation  │
        └──────────┬──────────┘
                   ↓
        ┌─────────────────────┐
        │     Selection       │
        └──────────┬──────────┘
                   ↓
        ┌─────────────────────┐
        │     Crossover       │
        └──────────┬──────────┘
                   ↓
        ┌─────────────────────┐
        │      Mutation       │
        └──────────┬──────────┘
                   ↓
        ┌─────────────────────┐
        │ New Population      │
        └──────────┬──────────┘
                   │
                   ↓
             Good solution?
              /         \\
            No           Yes
            ↓             ↓
      Repeat Cycle    Best Solution


Steps of GA Cycle


1. Initial Population

First, GA creates a group of random possible solutions.

Example:

10110
11001
10011
11100

These are the initial chromosomes.


2. Fitness Evaluation

The fitness function checks how good each solution is.

10110 → Fitness = 3
11001 → Fitness = 3
10011 → Fitness = 3
11100 → Fitness = 3


3. Selection

The better solutions are selected as parents.

Parent 1 → 10110
Parent 2 → 11100


4. Crossover

The selected parents are combined to create new children.

Parent 1 → 101 | 10
Parent 2 → 111 | 00

Child → 101 | 00


5. Mutation

A small random change is made in the child.

Before → 10100
After  → 10101


6. New Population

The new children form the next generation.

The process starts again:

New Population
      ↓
Fitness
      ↓
Selection
      ↓
Crossover
      ↓
Mutation

This cycle continues until a good or satisfactory solution is
obtained.


Easy Memory Trick

Population → Fitness → Selection → Crossover → Mutation
→ New Population → Repeat


Exam Definition

The Genetic Algorithm cycle is a repeated process of creating a
population, evaluating fitness, selecting good solutions, performing
crossover and mutation, and generating a new population until a
satisfactory solution is obtained.
      `},{id:64,question:"64. Explain Edge Recombination Schema in Genetic Algorithms.",answer:"",codeExample:`
Edge Recombination Schema in Genetic Algorithms


1. What is Edge Recombination?

Edge Recombination is a crossover technique used in Genetic
Algorithms, especially for problems where the order of elements is
important, such as the Travelling Salesman Problem (TSP).

It creates a new child by preserving as many connections (edges)
between elements as possible from the parent chromosomes.

Simple meaning:

Edge Recombination = Create a child by preserving useful connections
between elements of the parents.


2. Why is it used?

Normal crossover may break the order or connections between cities.

For example:

Parent 1 → A → B → C → D
Parent 2 → A → C → D → B

Edge recombination tries to keep useful connections such as:

A-B, B-C, C-D
A-C, C-D, D-B


3. Working of Edge Recombination

Suppose we have two parents:

Parent 1: A → B → C → D → E

Parent 2: A → C → E → B → D


Step 1: Create an Edge Table

For each city, write its neighboring cities from both parents.

A → B, C
B → A, C, E
C → B, D, A, E
D → C, E, B
E → D, A, C, B

This is called the edge table.


Step 2: Select Starting Element

Start with one element, for example:

A


Step 3: Choose Next Element

Look at the neighbors of A:

A → B, C

Choose one of the available connected elements.

For example:

A → B


Step 4: Continue

Continue selecting elements while trying to preserve the parent
connections.

Example child:

A → B → E → C → D

The exact child depends on the edge-selection rules.


4. Simple Diagram

Parent 1                  Parent 2
A → B → C → D → E        A → C → E → B → D
        \\                     /
         \\                   /
          ↓                 ↓
             Edge Table
                 ↓
          Preserve Edges
                 ↓
             Child
       A → B → E → C → D


5. Advantages

- Preserves useful connections from parents.
- Very useful for TSP and routing problems.
- Helps maintain the order/relationship between elements.
- Produces valid permutations without duplicate elements when
  implemented correctly.


Easy Memory Trick

Normal Crossover → Focuses on positions.
Edge Recombination → Focuses on connections.

Parent 1 + Parent 2
        ↓
   Edge Table
        ↓
 Preserve Edges
        ↓
      Child


Exam Definition

Edge Recombination is a crossover technique in Genetic Algorithms
that creates a child chromosome by preserving useful connections or
edges between elements of two parent chromosomes. It is mainly used
for permutation-based problems such as the Travelling Salesman
Problem (TSP).
      `},{id:71,question:"71. What is an Expert System? Explain its characteristics and advantages.",answer:"",codeExample:`
Expert System

1. What is an Expert System?

An Expert System is an AI-based computer system that uses the
knowledge and reasoning of a human expert to solve problems and
make decisions in a specific area.

Simple meaning:

Expert System = Computer program that thinks and gives advice
like a human expert in a particular field.

Example:

Medical expert system can ask:

Fever? → Yes
Cough? → Yes
Cold? → No

Then it uses its stored knowledge to suggest a possible condition.


2. Basic Structure

             User
               ↓
       ┌──────────────┐
       │ User Interface│
       └───────┬──────┘
               ↓
       ┌──────────────┐
       │   Inference  │
       │    Engine    │
       └───────┬──────┘
          ↙           ↘
         ↓             ↓
┌────────────────┐ ┌──────────────┐
│ Knowledge Base │ │ Working      │
│                │ │ Memory       │
└────────────────┘ └──────────────┘

Main parts:

- Knowledge Base → Stores expert knowledge and rules.
- Inference Engine → Uses rules to find a solution.
- User Interface → Allows user to communicate with the system.
- Working Memory → Stores current facts and information.


3. Characteristics of Expert System

1. Knowledge Based

It contains a large amount of expert knowledge.

2. Reasoning Ability

It uses rules and logic to reach a conclusion.

3. Domain Specific

It is designed for a specific area such as medical diagnosis,
finance, or agriculture.

4. Consistent Decision Making

It gives decisions based on stored rules and knowledge.

5. Explanation Facility

It can explain how or why it reached a particular conclusion.

6. User Friendly

Users can interact with the system through a user interface.

7. Fast Response

It can provide solutions quickly.


4. Advantages of Expert System

1. Available 24/7 — It does not need rest.

2. Fast decision making — Provides answers quickly.

3. Consistent results — Does not get tired or emotional.

4. Stores expert knowledge — Knowledge can be preserved and reused.

5. Reduces cost — Can reduce the need for repeated expert
   consultation.

6. Useful for training — Can help students or beginners learn
   from expert knowledge.

7. Works in dangerous areas — Can be used where human experts
   may be at risk.


Easy Example

A medical expert system:

Patient Information
        ↓
   Knowledge Base
        ↓
 Inference Engine
        ↓
 Possible Diagnosis
        ↓
    Recommendation


Exam Definition — 2 Marks

An Expert System is an AI system that uses stored expert knowledge
and reasoning techniques to solve problems and make decisions in a
specific domain.


Easy Memory Trick:

Expert System = Knowledge Base + Inference Engine + User Interface

Characteristics:
Knowledge + Reasoning + Domain-specific + Explanation + Fast response

Advantages:
Fast + Consistent + 24/7 + Saves expert knowledge + Reduces cost
      `},{id:72,question:"72. Explain the architecture/components of an Expert System.",answer:"",codeExample:`
Architecture / Components of an Expert System

An Expert System is made up of several components that work
together to solve a problem like a human expert.


1. Architecture Diagram

                    USER
                      ↓
             ┌─────────────────┐
             │ User Interface  │
             └────────┬────────┘
                      ↓
             ┌─────────────────┐
             │ Inference Engine│
             └───────┬─┬───────┘
                     │ │
          ┌──────────┘ └──────────┐
          ↓                       ↓
 ┌─────────────────┐     ┌─────────────────┐
 │ Knowledge Base  │     │ Working Memory  │
 └─────────────────┘     └─────────────────┘
          ↑
          │
 ┌─────────────────┐
 │ Knowledge       │
 │ Acquisition     │
 └─────────────────┘

             Explanation Facility
                    ↓
             Explains the result


2. Main Components

1. Knowledge Base

The Knowledge Base stores the knowledge of the human expert.

It contains:

- Facts
- Rules
- Information

Example:

IF temperature is high
AND patient has cough
THEN possible infection

Knowledge Base = Stores expert knowledge


2. Inference Engine

The Inference Engine is the main reasoning part of the
expert system.

It applies the rules from the Knowledge Base to the available
facts and finds a conclusion.

Example:

Fact:
Temperature = High

Rule:
IF temperature is high
THEN patient has fever

Result:
Patient has fever

Inference Engine = Thinks / reasons using rules


3. Working Memory

Working Memory stores the current information or facts
provided by the user.

Example:

Patient:
Age = 20
Temperature = High
Cough = Yes

Working Memory = Stores current facts


4. User Interface

The User Interface allows the user to communicate with the
expert system.

The user can:

- Enter information
- Ask questions
- Receive results

Example:

Enter temperature: 102
Enter cough: Yes

Result: Possible infection

User Interface = Communication between user and system


5. Explanation Facility

The Explanation Facility explains how the system reached
its conclusion.

For example:

Why is infection suspected?

Because:
Temperature = High
Cough = Yes

Explanation Facility = Explains the reasoning


6. Knowledge Acquisition

Knowledge Acquisition is the process of collecting knowledge
from human experts and putting it into the Knowledge Base.

Example:

Human Expert
      ↓
Knowledge Collection
      ↓
Knowledge Base

Knowledge Acquisition = Collects expert knowledge


Easy Table

Component                  Simple Meaning
------------------------------------------------------------
Knowledge Base             Stores expert knowledge
Inference Engine           Performs reasoning
Working Memory             Stores current facts
User Interface             Communicates with user
Explanation Facility       Explains the result
Knowledge Acquisition      Collects expert knowledge


Easy Memory Trick

KB → IE → WM → UI → Explanation → Knowledge Acquisition

Or simply remember:

Knowledge Base stores,
Inference Engine thinks,
Working Memory remembers,
User Interface communicates,
Explanation explains.


Exam Definition

The architecture of an Expert System consists of components such
as Knowledge Base, Inference Engine, Working Memory, User Interface,
Explanation Facility, and Knowledge Acquisition. These components
work together to solve problems using expert knowledge.
      `},{id:73,question:"73. What is Knowledge Engineering? Explain the role of a Knowledge Engineer.",answer:"",codeExample:`
Knowledge Engineering

1. What is Knowledge Engineering?

Knowledge Engineering is the process of collecting, organizing,
representing, and using expert knowledge in an AI system or
Expert System.

Simple meaning:

Knowledge Engineering = Taking knowledge from experts and
putting it into an AI system.

Example:

Human Expert
     ↓
Collect Knowledge
     ↓
Convert into Rules/Facts
     ↓
Knowledge Base
     ↓
Expert System


2. What is a Knowledge Engineer?

A Knowledge Engineer is a person who collects knowledge from
human experts and converts it into a form that an AI or
Expert System can understand and use.

Simple example:

Suppose we are creating a medical Expert System.

Doctor
  ↓
Gives medical knowledge
  ↓
Knowledge Engineer
  ↓
Creates rules
  ↓
Knowledge Base

Example rule:

IF patient has fever
AND patient has cough
THEN possible infection


3. Role of a Knowledge Engineer

1. Collect Knowledge

The knowledge engineer collects information from:

- Human experts
- Books
- Documents
- Databases
- Other reliable sources


2. Analyze Knowledge

They understand and organize the collected knowledge.

Example:

Symptoms → Disease
Fever + Cough → Possible infection


3. Represent Knowledge

They convert knowledge into a form that the AI system can
understand.

For example:

IF fever = high
AND cough = yes
THEN possible infection


4. Build Knowledge Base

They add the facts and rules to the Knowledge Base.

Knowledge Base
-------------------------
Fact  → Fever = High
Fact  → Cough = Yes
Rule  → Fever + Cough
        → Possible infection


5. Test the System

They check whether the Expert System gives correct results.


6. Update Knowledge

When new information becomes available, the knowledge engineer
updates the Knowledge Base.


Easy Flow

Expert
  ↓
Knowledge Engineer
  ↓
Collect & Analyze Knowledge
  ↓
Represent Knowledge
  ↓
Knowledge Base
  ↓
Expert System
  ↓
Solution


Easy Table

Role          Meaning
------------------------------------------------------------
Collect       Gets knowledge from experts
Analyze       Understands and organizes knowledge
Represent     Converts knowledge into rules/facts
Build         Creates Knowledge Base
Test          Checks system results
Update        Adds new knowledge


Exam Definition — 2 Marks

Knowledge Engineering is the process of acquiring, organizing,
representing, and maintaining knowledge for use in an AI or
Expert System. A Knowledge Engineer collects knowledge from
experts and converts it into rules and facts that the system
can use for reasoning.


Remember:

Knowledge Engineer = Expert's knowledge → AI Knowledge Base
      
      `},{id:74,question:"74. Explain the steps involved in developing an Expert System. Explain the applications of Expert Systems in different fields. Write a short note on recent developments in Expert Systems.",answer:"",codeExample:`
Expert System — Development, Applications and Recent Developments

1. Steps involved in developing an Expert System

Developing an Expert System involves collecting expert knowledge
and converting it into a system that can solve problems.

Steps:

Identify Problem
      ↓
Knowledge Acquisition
      ↓
Knowledge Representation
      ↓
Build Knowledge Base
      ↓
Develop Inference Engine
      ↓
Test & Validate
      ↓
Deploy System
      ↓
Maintain & Update


1. Identify the Problem

First, decide what problem the Expert System will solve.

Example: Medical disease diagnosis.


2. Knowledge Acquisition

Collect knowledge from human experts, books, documents,
and databases.


3. Knowledge Representation

Convert the collected knowledge into facts, rules, frames, etc.

Example:

IF fever = high
AND cough = yes
THEN possible infection


4. Build Knowledge Base

Store all the facts and rules in the Knowledge Base.


5. Develop Inference Engine

Create the reasoning mechanism that uses the knowledge and
rules to find a solution.


6. Testing and Validation

Check whether the system gives correct and reliable results.


7. Deployment

Make the Expert System available to users.


8. Maintenance

Update the system when new knowledge or rules become available.


2. Applications of Expert Systems

Expert Systems are used in many fields.

Field                  Application
----------------------------------------------------------------
Medical                Disease diagnosis and treatment suggestions
Finance                Loan approval and financial analysis
Agriculture             Crop and plant disease diagnosis
Education               Student guidance and learning systems
Manufacturing           Machine fault detection
Engineering             Equipment design and troubleshooting
Law                     Legal advice and case analysis
Cybersecurity           Detecting suspicious activities
Customer Service        Automated problem solving
Geology                 Finding minerals and natural resources


Example

In medicine:

Symptoms
   ↓
Expert System
   ↓
Knowledge Base + Rules
   ↓
Possible Disease


3. Recent Developments in Expert Systems

Modern Expert Systems are becoming more powerful because they
are being combined with AI, Machine Learning, Natural Language
Processing, and modern data technologies.


1. Integration with Machine Learning

Modern systems can learn patterns from data instead of depending
only on manually written rules.


2. Natural Language Processing

Users can interact with systems using normal human language
instead of complex commands.


3. Explainable AI

Modern AI systems increasingly provide explanations about why
a particular result was produced.


4. Cloud-Based Expert Systems

Expert Systems can be deployed on cloud platforms, making them
easier to access and scale.


5. Integration with Big Data

Expert Systems can use large amounts of data to improve analysis
and decision-making.


6. AI + Expert Systems

Modern systems often combine:

Expert Knowledge
       +
Machine Learning
       +
Natural Language Processing
       ↓
Advanced Intelligent System


7. Generative AI and LLMs

Modern AI systems can combine large language models with
knowledge bases and retrieval systems to provide more flexible,
natural-language assistance while grounding answers in specific
information.


Easy Exam Summary

Development Steps:

Problem Identification → Knowledge Acquisition →
Knowledge Representation → Knowledge Base →
Inference Engine → Testing → Deployment → Maintenance


Applications:

Medical, Finance, Agriculture, Education, Manufacturing,
Engineering, Law, Cybersecurity


Recent Developments:

Machine Learning + NLP + Explainable AI + Cloud +
Big Data + Generative AI


One-line conclusion:

Expert Systems have evolved from rule-based systems into more
intelligent systems that can combine expert knowledge with
data-driven AI techniques.
      `},{id:81,question:"81. What is Prolog? Explain the basic components of a Prolog program. Explain Prolog syntax, predicates, functions and conditional statements with examples.",answer:"",codeExample:`
Prolog

1. What is Prolog?

Prolog stands for PROgramming in LOGic.

It is a logic programming language mainly used in Artificial
Intelligence (AI) and knowledge-based systems.

In Prolog, we give:

- Facts → Information
- Rules → Relationships or conditions
- Queries → Questions


Simple Example

% Fact
student(raj).

% Rule
smart(X) :- student(X).

% Query
?- smart(raj).

Answer: true

Here:

student(raj) = Fact
smart(X) :- student(X) = Rule
?- smart(raj) = Query


2. Basic Components of a Prolog Program

A Prolog program mainly contains Facts, Rules, and Queries.


1. Facts

Facts represent information that is true.

% Raj is a student
student(raj).

% Raj is 20 years old
age(raj, 20).


2. Rules

Rules define a relationship or condition.

% If someone is a student, then that person is eligible.
eligible(X) :- student(X).

Here :- means "if".


3. Queries

Queries are questions asked to Prolog.

?- student(raj).

Output:

true

Another query:

?- age(raj, X).

Output:

X = 20


Easy Memory

Prolog = Facts + Rules + Queries


3. Prolog Syntax

Basic syntax rules:


Facts

predicate(value).

Example:

student(raj).

Every statement ends with a period .


Variables

Variables start with a capital letter or underscore _.

student(X).

Here X is a variable.


Constants

Constants usually start with a small letter.

raj
john
student


Predicate

A predicate describes a relationship or property.

likes(raj, pizza).

Here:

likes = predicate
raj and pizza = arguments


4. Predicates in Prolog

A predicate represents a relationship between objects or a
property of an object.

Example:

likes(raj, pizza).
likes(raj, mango).

Here likes is a predicate with 2 arguments.

We can ask:

?- likes(raj, pizza).

Output:

true


Another Example

parent(rahul, raj).

parent is the predicate.

It means:

Rahul is the parent of Raj.


5. Functions in Prolog

Prolog does not use functions in exactly the same way as
languages like C, Java, or Python.

Instead, predicates are used to perform operations or represent
relationships.

For arithmetic calculations, Prolog uses operators such as is.

Example:

sum(A, B, C) :-
    C is A + B.

Query:

?- sum(10, 20, X).

Output:

X = 30


Another Example

square(X, Y) :-
    Y is X * X.

Query:

?- square(5, X).

Output:

X = 25


6. Conditional Statements in Prolog

Prolog uses rules to represent conditions.

The basic form is:

condition :- result.

It means:

result is true if condition is true.


Example

student(raj).

eligible(X) :-
    student(X).

If student(raj) is true, then:

?- eligible(raj).

Output:

true


If-Then-Else in Prolog

Prolog also supports:

Condition -> Then ; Else

Example:

check_age(Age, Result) :-
    (Age >= 18 ->
        Result = adult
    ;
        Result = minor
    ).

Query:

?- check_age(20, X).

Output:

X = adult

For:

?- check_age(15, X).

Output:

X = minor


Meaning

Condition -> Then ; Else

means:

If condition is true → Then,
otherwise → Else.


Exam Summary

Component       Meaning
------------------------------------------------------------
Fact            Represents true information
Rule            Defines a condition/relationship
Query           Question given to Prolog
Predicate        Represents property or relationship
Variable        Starts with capital letter
Constant        Usually starts with lowercase letter
:-              Means "if"
.               Ends a Prolog statement
?-              Starts a query
->              Then
;               Else


One-line memory trick:

Prolog program = Facts + Rules → Query → Answer
      `},{id:82,question:"82. Explain lists in Prolog and basic list manipulation functions with examples.",answer:"",codeExample:`
Lists in Prolog

A list in Prolog is a collection of elements written inside
square brackets [ ].

Lists can contain numbers, atoms, variables, or even other lists.

Examples:

[1, 2, 3, 4]

[apple, mango, banana]

[raj, john, X]

An empty list is:

[]


1. Head and Tail

Every non-empty list has two important parts:

- Head → first element
- Tail → remaining elements

Example:

[10, 20, 30, 40]

Head = 10
Tail = [20, 30, 40]

We can represent it as:

[Head | Tail]

Example:

[H | T] = [10, 20, 30, 40].

Result:

H = 10
T = [20, 30, 40]


2. Basic List Manipulation Functions


A. Find the First Element

We can get the first element using Head.

first([H|_], H).

Query:

?- first([10,20,30], X).

Output:

X = 10

Here _ means we don't care about the remaining elements.


B. Find the Remaining Elements

rest([_|T], T).

Query:

?- rest([10,20,30], X).

Output:

X = [20,30]


C. Check Whether an Element Exists

Prolog provides the member predicate.

?- member(20, [10,20,30]).

Output:

true

If the element does not exist:

?- member(50, [10,20,30]).

Output:

false


D. Find Length of a List

Prolog provides length/2.

?- length([10,20,30,40], X).

Output:

X = 4


E. Append Two Lists

The append/3 predicate joins two lists.

?- append([1,2], [3,4], X).

Output:

X = [1,2,3,4]

So:

[1,2] + [3,4]
       ↓
[1,2,3,4]


F. Reverse a List

Prolog provides reverse/2.

?- reverse([1,2,3,4], X).

Output:

X = [4,3,2,1]


G. Check Empty List

We can check whether a list is empty:

?- [] = [].

Output:

true

Or define:

empty([]).

Query:

?- empty([]).

Output:

true


3. User-Defined List Example

We can write our own predicate to find the sum of list elements:

sum_list([], 0).

sum_list([H|T], Sum) :-
    sum_list(T, Rest),
    Sum is H + Rest.

Query:

?- sum_list([10,20,30], X).

Working:

10 + 20 + 30
     ↓
X = 60

Output:

X = 60


Important List Functions

Function      Purpose              Example
--------------------------------------------------------------
member/2      Check element        member(2,[1,2,3])
length/2      Find length          length([1,2,3],X)
append/3      Join lists           append([1],[2],X)
reverse/2     Reverse list         reverse([1,2,3],X)
[H|T]         Get head and tail     [H|T]=[1,2,3]


Easy Memory Trick

List = [Head | Tail]

For example:

[10, 20, 30, 40]
 ↓
Head = 10
Tail = [20,30,40]

So for exams, remember:

Head, Tail, Member, Length, Append, Reverse
      `},{id:83,question:"83. Explain Prolog queries and the mechanism of backtracking with an example.",answer:"",codeExample:`
Prolog Queries and Backtracking

1. Prolog Query

A query is a question given to a Prolog program to find whether
something is true or false, or to find a value.

A query starts with ?-.

Example:

student(raj).
student(john).
student(amit).

Query:

?- student(raj).

Output:

true

Because student(raj) is a fact.

Another query:

?- student(ravi).

Output:

false

Because Ravi is not in the facts.


2. Query with a Variable

We can use a variable to find information.

student(raj).
student(john).
student(amit).

Query:

?- student(X).

Prolog gives:

X = raj
X = john
X = amit

This is where backtracking happens.


3. What is Backtracking?

Backtracking is the process by which Prolog goes back and tries
another possible solution when the current solution does not work
or when the user asks for another answer.

Simple Meaning:

Try → Check → If failure, go back → Try another choice

Prolog automatically performs backtracking.


4. Example of Backtracking

Consider:

likes(raj, mango).
likes(raj, apple).
likes(raj, pizza).

Query:

?- likes(raj, X).


Step 1

Prolog checks the first fact:

X = mango

So first answer is:

X = mango


Step 2

If we ask for another answer (;), Prolog backtracks.

It goes back and checks the next possibility:

X = apple


Step 3

Ask again:

;

Prolog backtracks again:

X = pizza


Step 4

Ask again:

;

No more facts are available:

false


Backtracking Flow

Query: likes(raj, X)
          ↓
     X = mango
          ↓
      Ask again
          ↓
     Backtrack
          ↓
     X = apple
          ↓
      Ask again
          ↓
     Backtrack
          ↓
     X = pizza
          ↓
      Ask again
          ↓
       false


Easy Memory Trick

Backtracking = Go Back + Try Another Choice


Exam Definition

Backtracking in Prolog is an automatic search mechanism in which
Prolog goes back to a previous choice point and tries another
possible solution when the current path fails or when another
answer is requested.
      `},{id:84,question:"84. Explain arithmetic operations, numeric functions, input/output and local variables in Prolog.",answer:"",codeExample:`
Arithmetic Operations, Numeric Functions, I/O and Local Variables in Prolog

Prolog supports arithmetic calculations, numeric functions,
input/output operations, and variables.


1. Arithmetic Operations in Prolog

Prolog provides operators for basic mathematical calculations.

Operation          Operator    Example
------------------------------------------------
Addition           +           10 + 5
Subtraction        -           10 - 5
Multiplication     *           10 * 5
Division            /           10 / 5
Integer division   //          10 // 3
Remainder          mod         10 mod 3


Example:

calculate :-
    A is 10 + 5,       % A = 15
    B is 10 - 5,       % B = 5
    C is 10 * 5,       % C = 50
    D is 10 / 5.       % D = 2.0


Important: is

The is operator is used to evaluate an arithmetic expression.

X is 10 + 20.

Result:

X = 30

Without is, Prolog treats 10 + 20 as a symbolic expression
rather than calculating it.


2. Numeric Functions

Prolog provides several built-in numeric functions.

Common Numeric Functions

Function       Meaning          Example
------------------------------------------------------------
abs(X)         Absolute value   abs(-10) → 10
sqrt(X)        Square root      sqrt(25) → 5.0
max(X,Y)       Larger value     max(10,20) → 20
min(X,Y)       Smaller value    min(10,20) → 10
round(X)       Round number     round(4.6) → 5
floor(X)       Lower integer    floor(4.8) → 4
ceiling(X)     Higher integer   ceiling(4.2) → 5


Example:

calculate(X, Y) :-
    A is abs(X),
    B is sqrt(Y).

Query:

?- calculate(-10, 25).

Values:

A = 10
B = 5.0


3. Input and Output in Prolog

Prolog provides predicates for taking input and displaying
output.


Output

write/1

Used to display information.

show :-
    write('Hello Raj').

Output:

Hello Raj


writeln/1

Displays information and moves to a new line.

show :-
    writeln('Hello'),
    writeln('Welcome to Prolog').

Output:

Hello
Welcome to Prolog


Input

read/1

Used to take input from the user.

get_name :-
    write('Enter your name: '),
    read(Name),
    write('Your name is: '),
    write(Name).

Example input:

raj.

Output:

Enter your name: raj.
Your name is: raj


Note:

In Prolog, input entered with read/1 is normally terminated
with a period .
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1.1,question:"1. Write a program to implement Single Player Game (Using Heuristic Function)",answer:"",codeExample:`
import random

# Generate a random target number
target = random.randint(1, 100)

print("=== Single Player Guess the Number Game ===")
print("Guess a number between 1 and 100.")

attempts = 0

while True:
    guess = int(input("Enter your guess: "))
    attempts += 1

    if guess == target:
        print("🎉 Congratulations! You guessed the correct number.")
        print("Total Attempts:", attempts)
        break

    # Heuristic Function (Difference from target)
    heuristic = abs(target - guess)

    if heuristic <= 5:
        print("🔥 Very Hot! You are extremely close.")
    elif heuristic <= 10:
        print("😊 Hot! You are close.")
    elif heuristic <= 20:
        print("🙂 Warm! Getting closer.")
    else:
        print("❄️ Cold! You are far away.")

    if guess < target:
        print("Hint: Try a Higher Number.
")
    else:
        print("Hint: Try a Lower Number.
")

OUTPUT:

=== Single Player Guess the Number Game ===
Guess a number between 1 and 100.
Enter your guess: 30
😊 Hot! You are close.
Hint: Try a Lower Number.

Enter your guess: 20
🔥 Very Hot! You are extremely close.
Hint: Try a Higher Number.

Enter your guess: 22
🎉 Congratulations! You guessed the correct number.
Total Attempts: 3
      
      `},{id:2.2,question:"2. Write a program to implement DFS 8 Puzzle problem",answer:"",codeExample:`
goal = (1,2,3,4,5,6,7,8,0)

def print_grid(state):
    for i in range(0, 9, 3):
        print(state[i:i+3])
    print()


def dfs(start):
    stack = [(start, start.index(0), [])]
    visited = set([start])   # Mark start as visited

    while stack:
        state, blank, path = stack.pop()

        if state == goal:
            return path + [state]

        moves = []
        r, c = divmod(blank, 3)

        if r > 0:
            moves.append(blank - 3)   # Up
        if r < 2:
            moves.append(blank + 3)   # Down
        if c > 0:
            moves.append(blank - 1)   # Left
        if c < 2:
            moves.append(blank + 1)   # Right

        for m in moves:
            new = list(state)
            new[blank], new[m] = new[m], new[blank]
            new_state = tuple(new)

            if new_state not in visited:
                visited.add(new_state)
                stack.append((new_state, m, path + [state]))

    return None


# Example start state (1 move away from goal)
start = (1,2,3,
         4,5,6,
         7,0,8)

solution = dfs(start)

if solution:
    print("Solution Found!\\n")
    for step in solution:
        print_grid(step)
else:
    print("No solution found.")


Output: 

Solution Found!

(1, 2, 3)
(4, 5, 6)
(7, 0, 8)

(1, 2, 3)
(4, 5, 6)
(7, 8, 0)

      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],p=D=>{fe(M===D?null:D)};return Ue.jsxs("div",{className:"app-container",children:[Ue.jsx("h1",{children:"AI2 Interview Questions"}),Ue.jsx("div",{className:"questions-container",children:K.map(D=>Ue.jsxs("div",{className:"question-item",children:[Ue.jsx("button",{className:`question-button ${M===D.id?"active":""}`,onClick:()=>p(D.id),children:D.question}),M===D.id&&Ue.jsxs("div",{className:"answer-container",children:[Ue.jsxs("div",{className:"answer",children:[Ue.jsx("h3",{children:"Answer:"}),Ue.jsx("p",{children:D.answer})]}),D.codeExample&&Ue.jsxs("div",{className:"code-example",children:[Ue.jsx("h3",{children:"Code Example:"}),Ue.jsx("pre",{children:Ue.jsx("code",{children:D.codeExample})})]})]})]},D.id))})]})}ap.createRoot(document.getElementById("root")).render(Ue.jsx(Tm.StrictMode,{children:Ue.jsx(np,{})}));
