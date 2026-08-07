(function(){const fe=document.createElement("link").relList;if(fe&&fe.supports&&fe.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))g(w);new MutationObserver(w=>{for(const Q of w)if(Q.type==="childList")for(const he of Q.addedNodes)he.tagName==="LINK"&&he.rel==="modulepreload"&&g(he)}).observe(document,{childList:!0,subtree:!0});function J(w){const Q={};return w.integrity&&(Q.integrity=w.integrity),w.referrerPolicy&&(Q.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?Q.credentials="include":w.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function g(w){if(w.ep)return;w.ep=!0;const Q=J(w);fetch(w.href,Q)}})();var no={exports:{}},Ai={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Vh(){if(dm)return Ai;dm=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.fragment");function J(g,w,Q){var he=null;if(Q!==void 0&&(he=""+Q),w.key!==void 0&&(he=""+w.key),"key"in w){Q={};for(var we in w)we!=="key"&&(Q[we]=w[we])}else Q=w;return w=Q.ref,{$$typeof:M,type:g,key:he,ref:w!==void 0?w:null,props:Q}}return Ai.Fragment=fe,Ai.jsx=J,Ai.jsxs=J,Ai}var hm;function Qh(){return hm||(hm=1,no.exports=Vh()),no.exports}var Le=Qh(),io={exports:{}},U={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Kh(){if(gm)return U;gm=1;var M=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),he=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),ce=Symbol.iterator;function Qe(r){return r===null||typeof r!="object"?null:(r=ce&&r[ce]||r["@@iterator"],typeof r=="function"?r:null)}var Be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,Ot={};function Ke(r,b,N){this.props=r,this.context=b,this.refs=Ot,this.updater=N||Be}Ke.prototype.isReactComponent={},Ke.prototype.setState=function(r,b){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,b,"setState")},Ke.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Qt(){}Qt.prototype=Ke.prototype;function De(r,b,N){this.props=r,this.context=b,this.refs=Ot,this.updater=N||Be}var st=De.prototype=new Qt;st.constructor=De,He(st,Ke.prototype),st.isPureReactComponent=!0;var bt=Array.isArray;function Ge(){}var X={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function Et(r,b,N){var C=N.ref;return{$$typeof:M,type:r,key:b,ref:C!==void 0?C:null,props:N}}function qa(r,b){return Et(r.type,b,r.props)}function Tt(r){return typeof r=="object"&&r!==null&&r.$$typeof===M}function qe(r){var b={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(N){return b[N]})}var Sa=/\/+/g;function xt(r,b){return typeof r=="object"&&r!==null&&r.key!=null?qe(""+r.key):b.toString(36)}function yt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Ge,Ge):(r.status="pending",r.then(function(b){r.status==="pending"&&(r.status="fulfilled",r.value=b)},function(b){r.status==="pending"&&(r.status="rejected",r.reason=b)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function v(r,b,N,C,L){var _=typeof r;(_==="undefined"||_==="boolean")&&(r=null);var W=!1;if(r===null)W=!0;else switch(_){case"bigint":case"string":case"number":W=!0;break;case"object":switch(r.$$typeof){case M:case fe:W=!0;break;case P:return W=r._init,v(W(r._payload),b,N,C,L)}}if(W)return L=L(r),W=C===""?"."+xt(r,0):C,bt(L)?(N="",W!=null&&(N=W.replace(Sa,"$&/")+"/"),v(L,b,N,"",function(Mn){return Mn})):L!=null&&(Tt(L)&&(L=qa(L,N+(L.key==null||r&&r.key===L.key?"":(""+L.key).replace(Sa,"$&/")+"/")+W)),b.push(L)),1;W=0;var Ie=C===""?".":C+":";if(bt(r))for(var ge=0;ge<r.length;ge++)C=r[ge],_=Ie+xt(C,ge),W+=v(C,b,N,_,L);else if(ge=Qe(r),typeof ge=="function")for(r=ge.call(r),ge=0;!(C=r.next()).done;)C=C.value,_=Ie+xt(C,ge++),W+=v(C,b,N,_,L);else if(_==="object"){if(typeof r.then=="function")return v(yt(r),b,N,C,L);throw b=String(r),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return W}function T(r,b,N){if(r==null)return r;var C=[],L=0;return v(r,C,"","",function(_){return b.call(N,_,L++)}),C}function I(r){if(r._status===-1){var b=r._result;b=b(),b.then(function(N){(r._status===0||r._status===-1)&&(r._status=1,r._result=N)},function(N){(r._status===0||r._status===-1)&&(r._status=2,r._result=N)}),r._status===-1&&(r._status=0,r._result=b)}if(r._status===1)return r._result.default;throw r._result}var te=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},le={map:T,forEach:function(r,b,N){T(r,function(){b.apply(this,arguments)},N)},count:function(r){var b=0;return T(r,function(){b++}),b},toArray:function(r){return T(r,function(b){return b})||[]},only:function(r){if(!Tt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return U.Activity=H,U.Children=le,U.Component=Ke,U.Fragment=J,U.Profiler=w,U.PureComponent=De,U.StrictMode=g,U.Suspense=D,U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,U.__COMPILER_RUNTIME={__proto__:null,c:function(r){return X.H.useMemoCache(r)}},U.cache=function(r){return function(){return r.apply(null,arguments)}},U.cacheSignal=function(){return null},U.cloneElement=function(r,b,N){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var C=He({},r.props),L=r.key;if(b!=null)for(_ in b.key!==void 0&&(L=""+b.key),b)!_e.call(b,_)||_==="key"||_==="__self"||_==="__source"||_==="ref"&&b.ref===void 0||(C[_]=b[_]);var _=arguments.length-2;if(_===1)C.children=N;else if(1<_){for(var W=Array(_),Ie=0;Ie<_;Ie++)W[Ie]=arguments[Ie+2];C.children=W}return Et(r.type,L,C)},U.createContext=function(r){return r={$$typeof:he,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:Q,_context:r},r},U.createElement=function(r,b,N){var C,L={},_=null;if(b!=null)for(C in b.key!==void 0&&(_=""+b.key),b)_e.call(b,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(L[C]=b[C]);var W=arguments.length-2;if(W===1)L.children=N;else if(1<W){for(var Ie=Array(W),ge=0;ge<W;ge++)Ie[ge]=arguments[ge+2];L.children=Ie}if(r&&r.defaultProps)for(C in W=r.defaultProps,W)L[C]===void 0&&(L[C]=W[C]);return Et(r,_,L)},U.createRef=function(){return{current:null}},U.forwardRef=function(r){return{$$typeof:we,render:r}},U.isValidElement=Tt,U.lazy=function(r){return{$$typeof:P,_payload:{_status:-1,_result:r},_init:I}},U.memo=function(r,b){return{$$typeof:E,type:r,compare:b===void 0?null:b}},U.startTransition=function(r){var b=X.T,N={};X.T=N;try{var C=r(),L=X.S;L!==null&&L(N,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(Ge,te)}catch(_){te(_)}finally{b!==null&&N.types!==null&&(b.types=N.types),X.T=b}},U.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},U.use=function(r){return X.H.use(r)},U.useActionState=function(r,b,N){return X.H.useActionState(r,b,N)},U.useCallback=function(r,b){return X.H.useCallback(r,b)},U.useContext=function(r){return X.H.useContext(r)},U.useDebugValue=function(){},U.useDeferredValue=function(r,b){return X.H.useDeferredValue(r,b)},U.useEffect=function(r,b){return X.H.useEffect(r,b)},U.useEffectEvent=function(r){return X.H.useEffectEvent(r)},U.useId=function(){return X.H.useId()},U.useImperativeHandle=function(r,b,N){return X.H.useImperativeHandle(r,b,N)},U.useInsertionEffect=function(r,b){return X.H.useInsertionEffect(r,b)},U.useLayoutEffect=function(r,b){return X.H.useLayoutEffect(r,b)},U.useMemo=function(r,b){return X.H.useMemo(r,b)},U.useOptimistic=function(r,b){return X.H.useOptimistic(r,b)},U.useReducer=function(r,b,N){return X.H.useReducer(r,b,N)},U.useRef=function(r){return X.H.useRef(r)},U.useState=function(r){return X.H.useState(r)},U.useSyncExternalStore=function(r,b,N){return X.H.useSyncExternalStore(r,b,N)},U.useTransition=function(){return X.H.useTransition()},U.version="19.2.7",U}var pm;function co(){return pm||(pm=1,io.exports=Kh()),io.exports}var Tm=co(),lo={exports:{}},Si={},so={exports:{}},uo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Jh(){return ym||(ym=1,(function(M){function fe(v,T){var I=v.length;v.push(T);e:for(;0<I;){var te=I-1>>>1,le=v[te];if(0<w(le,T))v[te]=T,v[I]=le,I=te;else break e}}function J(v){return v.length===0?null:v[0]}function g(v){if(v.length===0)return null;var T=v[0],I=v.pop();if(I!==T){v[0]=I;e:for(var te=0,le=v.length,r=le>>>1;te<r;){var b=2*(te+1)-1,N=v[b],C=b+1,L=v[C];if(0>w(N,I))C<le&&0>w(L,N)?(v[te]=L,v[C]=I,te=C):(v[te]=N,v[b]=I,te=b);else if(C<le&&0>w(L,I))v[te]=L,v[C]=I,te=C;else break e}}return T}function w(v,T){var I=v.sortIndex-T.sortIndex;return I!==0?I:v.id-T.id}if(M.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;M.unstable_now=function(){return Q.now()}}else{var he=Date,we=he.now();M.unstable_now=function(){return he.now()-we}}var D=[],E=[],P=1,H=null,ce=3,Qe=!1,Be=!1,He=!1,Ot=!1,Ke=typeof setTimeout=="function"?setTimeout:null,Qt=typeof clearTimeout=="function"?clearTimeout:null,De=typeof setImmediate<"u"?setImmediate:null;function st(v){for(var T=J(E);T!==null;){if(T.callback===null)g(E);else if(T.startTime<=v)g(E),T.sortIndex=T.expirationTime,fe(D,T);else break;T=J(E)}}function bt(v){if(He=!1,st(v),!Be)if(J(D)!==null)Be=!0,Ge||(Ge=!0,qe());else{var T=J(E);T!==null&&yt(bt,T.startTime-v)}}var Ge=!1,X=-1,_e=5,Et=-1;function qa(){return Ot?!0:!(M.unstable_now()-Et<_e)}function Tt(){if(Ot=!1,Ge){var v=M.unstable_now();Et=v;var T=!0;try{e:{Be=!1,He&&(He=!1,Qt(X),X=-1),Qe=!0;var I=ce;try{t:{for(st(v),H=J(D);H!==null&&!(H.expirationTime>v&&qa());){var te=H.callback;if(typeof te=="function"){H.callback=null,ce=H.priorityLevel;var le=te(H.expirationTime<=v);if(v=M.unstable_now(),typeof le=="function"){H.callback=le,st(v),T=!0;break t}H===J(D)&&g(D),st(v)}else g(D);H=J(D)}if(H!==null)T=!0;else{var r=J(E);r!==null&&yt(bt,r.startTime-v),T=!1}}break e}finally{H=null,ce=I,Qe=!1}T=void 0}}finally{T?qe():Ge=!1}}}var qe;if(typeof De=="function")qe=function(){De(Tt)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,xt=Sa.port2;Sa.port1.onmessage=Tt,qe=function(){xt.postMessage(null)}}else qe=function(){Ke(Tt,0)};function yt(v,T){X=Ke(function(){v(M.unstable_now())},T)}M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(v){v.callback=null},M.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<v?Math.floor(1e3/v):5},M.unstable_getCurrentPriorityLevel=function(){return ce},M.unstable_next=function(v){switch(ce){case 1:case 2:case 3:var T=3;break;default:T=ce}var I=ce;ce=T;try{return v()}finally{ce=I}},M.unstable_requestPaint=function(){Ot=!0},M.unstable_runWithPriority=function(v,T){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var I=ce;ce=v;try{return T()}finally{ce=I}},M.unstable_scheduleCallback=function(v,T,I){var te=M.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?te+I:te):I=te,v){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=I+le,v={id:P++,callback:T,priorityLevel:v,startTime:I,expirationTime:le,sortIndex:-1},I>te?(v.sortIndex=I,fe(E,v),J(D)===null&&v===J(E)&&(He?(Qt(X),X=-1):He=!0,yt(bt,I-te))):(v.sortIndex=le,fe(D,v),Be||Qe||(Be=!0,Ge||(Ge=!0,qe()))),v},M.unstable_shouldYield=qa,M.unstable_wrapCallback=function(v){var T=ce;return function(){var I=ce;ce=T;try{return v.apply(this,arguments)}finally{ce=I}}}})(uo)),uo}var vm;function Ph(){return vm||(vm=1,so.exports=Jh()),so.exports}var oo={exports:{}},Re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function Wh(){if(Am)return Re;Am=1;var M=co();function fe(D){var E="https://react.dev/errors/"+D;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)E+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+D+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function J(){}var g={d:{f:J,r:function(){throw Error(fe(522))},D:J,C:J,L:J,m:J,X:J,S:J,M:J},p:0,findDOMNode:null},w=Symbol.for("react.portal");function Q(D,E,P){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:H==null?null:""+H,children:D,containerInfo:E,implementation:P}}var he=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function we(D,E){if(D==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Re.createPortal=function(D,E){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(fe(299));return Q(D,E,null,P)},Re.flushSync=function(D){var E=he.T,P=g.p;try{if(he.T=null,g.p=2,D)return D()}finally{he.T=E,g.p=P,g.d.f()}},Re.preconnect=function(D,E){typeof D=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,g.d.C(D,E))},Re.prefetchDNS=function(D){typeof D=="string"&&g.d.D(D)},Re.preinit=function(D,E){if(typeof D=="string"&&E&&typeof E.as=="string"){var P=E.as,H=we(P,E.crossOrigin),ce=typeof E.integrity=="string"?E.integrity:void 0,Qe=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;P==="style"?g.d.S(D,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:H,integrity:ce,fetchPriority:Qe}):P==="script"&&g.d.X(D,{crossOrigin:H,integrity:ce,fetchPriority:Qe,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Re.preinitModule=function(D,E){if(typeof D=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var P=we(E.as,E.crossOrigin);g.d.M(D,{crossOrigin:P,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&g.d.M(D)},Re.preload=function(D,E){if(typeof D=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var P=E.as,H=we(P,E.crossOrigin);g.d.L(D,P,{crossOrigin:H,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Re.preloadModule=function(D,E){if(typeof D=="string")if(E){var P=we(E.as,E.crossOrigin);g.d.m(D,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:P,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else g.d.m(D)},Re.requestFormReset=function(D){g.d.r(D)},Re.unstable_batchedUpdates=function(D,E){return D(E)},Re.useFormState=function(D,E,P){return he.H.useFormState(D,E,P)},Re.useFormStatus=function(){return he.H.useHostTransitionStatus()},Re.version="19.2.7",Re}var Sm;function $h(){if(Sm)return oo.exports;Sm=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),oo.exports=Wh(),oo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function eg(){if(bm)return Si;bm=1;var M=Ph(),fe=co(),J=$h();function g(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Q(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function he(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function we(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(Q(e)!==e)throw Error(g(188))}function E(e){var t=e.alternate;if(!t){if(t=Q(e),t===null)throw Error(g(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===a)return D(i),e;if(l===n)return D(i),t;l=l.sibling}throw Error(g(188))}if(a.return!==n.return)a=i,n=l;else{for(var s=!1,u=i.child;u;){if(u===a){s=!0,a=i,n=l;break}if(u===n){s=!0,n=i,a=l;break}u=u.sibling}if(!s){for(u=l.child;u;){if(u===a){s=!0,a=l,n=i;break}if(u===n){s=!0,n=l,a=i;break}u=u.sibling}if(!s)throw Error(g(189))}}if(a.alternate!==n)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?e:t}function P(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=P(e),t!==null)return t;e=e.sibling}return null}var H=Object.assign,ce=Symbol.for("react.element"),Qe=Symbol.for("react.transitional.element"),Be=Symbol.for("react.portal"),He=Symbol.for("react.fragment"),Ot=Symbol.for("react.strict_mode"),Ke=Symbol.for("react.profiler"),Qt=Symbol.for("react.consumer"),De=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),bt=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),qa=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=Tt&&e[Tt]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function xt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case He:return"Fragment";case Ke:return"Profiler";case Ot:return"StrictMode";case bt:return"Suspense";case Ge:return"SuspenseList";case Et:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Be:return"Portal";case De:return e.displayName||"Context";case Qt:return(e._context.displayName||"Context")+".Consumer";case st:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:xt(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return xt(e(t))}catch{}}return null}var yt=Array.isArray,v=fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=J.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},te=[],le=-1;function r(e){return{current:e}}function b(e){0>le||(e.current=te[le],te[le]=null,le--)}function N(e,t){le++,te[le]=e.current,e.current=t}var C=r(null),L=r(null),_=r(null),W=r(null);function Ie(e,t){switch(N(_,t),N(L,e),N(C,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Lf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Lf(t),e=Bf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}b(C),N(C,e)}function ge(){b(C),b(L),b(_)}function Mn(e){e.memoizedState!==null&&N(W,e);var t=C.current,a=Bf(t,e.type);t!==a&&(N(L,e),N(C,a))}function bi(e){L.current===e&&(b(C),b(L)),W.current===e&&(b(W),gi._currentValue=I)}var _l,ro;function ba(e){if(_l===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||"",ro=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_l+e+ro}var ql=!1;function kl(e,t){if(!e||ql)return"";ql=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(p){var h=p}Reflect.construct(e,[],S)}else{try{S.call()}catch(p){h=p}e.call(S.prototype)}}else{try{throw Error()}catch(p){h=p}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),s=l[0],u=l[1];if(s&&u){var o=s.split(`
`),d=u.split(`
`);for(i=n=0;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;for(;i<d.length&&!d[i].includes("DetermineComponentFrameRoot");)i++;if(n===o.length||i===d.length)for(n=o.length-1,i=d.length-1;1<=n&&0<=i&&o[n]!==d[i];)i--;for(;1<=n&&0<=i;n--,i--)if(o[n]!==d[i]){if(n!==1||i!==1)do if(n--,i--,0>i||o[n]!==d[i]){var y=`
`+o[n].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=n&&0<=i);break}}}finally{ql=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ba(a):""}function Nm(e,t){switch(e.tag){case 26:case 27:case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return e.child!==t&&t!==null?ba("Suspense Fallback"):ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return kl(e.type,!1);case 11:return kl(e.type.render,!1);case 1:return kl(e.type,!0);case 31:return ba("Activity");default:return""}}function fo(e){try{var t="",a=null;do t+=Nm(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Fl=Object.prototype.hasOwnProperty,Yl=M.unstable_scheduleCallback,Xl=M.unstable_cancelCallback,zm=M.unstable_shouldYield,Mm=M.unstable_requestPaint,Je=M.unstable_now,Cm=M.unstable_getCurrentPriorityLevel,mo=M.unstable_ImmediatePriority,ho=M.unstable_UserBlockingPriority,Ei=M.unstable_NormalPriority,Om=M.unstable_LowPriority,go=M.unstable_IdlePriority,xm=M.log,Dm=M.unstable_setDisableYieldValue,Cn=null,Pe=null;function Kt(e){if(typeof xm=="function"&&Dm(e),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(Cn,e)}catch{}}var We=Math.clz32?Math.clz32:Hm,Rm=Math.log,wm=Math.LN2;function Hm(e){return e>>>=0,e===0?32:31-(Rm(e)/wm|0)|0}var Ti=256,Ni=262144,zi=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=n&134217727;return u!==0?(n=u&~l,n!==0?i=Ea(n):(s&=u,s!==0?i=Ea(s):a||(a=u&~e,a!==0&&(i=Ea(a))))):(u=n&~l,u!==0?i=Ea(u):s!==0?i=Ea(s):a||(a=n&~e,a!==0&&(i=Ea(a)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:i}function On(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Im(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function po(){var e=zi;return zi<<=1,(zi&62914560)===0&&(zi=4194304),e}function Zl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function xn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Um(e,t,a,n,i,l){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,o=e.expirationTimes,d=e.hiddenUpdates;for(a=s&~a;0<a;){var y=31-We(a),S=1<<y;u[y]=0,o[y]=-1;var h=d[y];if(h!==null)for(d[y]=null,y=0;y<h.length;y++){var p=h[y];p!==null&&(p.lane&=-536870913)}a&=~S}n!==0&&yo(e,n,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~t))}function yo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-We(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function vo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-We(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Ao(e,t){var a=t&-t;return a=(a&42)!==0?1:jl(a),(a&(e.suspendedLanes|t))!==0?0:a}function jl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function So(){var e=T.p;return e!==0?e:(e=window.event,e===void 0?32:sm(e.type))}function bo(e,t){var a=T.p;try{return T.p=e,t()}finally{T.p=a}}var Jt=Math.random().toString(36).slice(2),ze="__reactFiber$"+Jt,ke="__reactProps$"+Jt,ka="__reactContainer$"+Jt,Ql="__reactEvents$"+Jt,Lm="__reactListeners$"+Jt,Bm="__reactHandles$"+Jt,Eo="__reactResources$"+Jt,Dn="__reactMarker$"+Jt;function Kl(e){delete e[ze],delete e[ke],delete e[Ql],delete e[Lm],delete e[Bm]}function Fa(e){var t=e[ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ka]||a[ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xf(e);e!==null;){if(a=e[ze])return a;e=Xf(e)}return t}e=a,a=e.parentNode}return null}function Ya(e){if(e=e[ze]||e[ka]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(g(33))}function Xa(e){var t=e[Eo];return t||(t=e[Eo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Te(e){e[Dn]=!0}var To=new Set,No={};function Ta(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(No[e]=t,e=0;e<t.length;e++)To.add(t[e])}var Gm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zo={},Mo={};function _m(e){return Fl.call(Mo,e)?!0:Fl.call(zo,e)?!1:Gm.test(e)?Mo[e]=!0:(zo[e]=!0,!1)}function Ci(e,t,a){if(_m(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Oi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Dt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Co(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qm(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jl(e){if(!e._valueTracker){var t=Co(e)?"checked":"value";e._valueTracker=qm(e,t,""+e[t])}}function Oo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Co(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var km=/[\n"\\]/g;function ot(e){return e.replace(km,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pl(e,t,a,n,i,l,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Wl(e,s,ut(t)):a!=null?Wl(e,s,ut(a)):n!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ut(u):e.removeAttribute("name")}function xo(e,t,a,n,i,l,s,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Jl(e);return}a=a!=null?""+ut(a):"",t=t!=null?""+ut(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Jl(e)}function Wl(e,t,a){t==="number"&&xi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ja(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ut(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Do(e,t,a){if(t!=null&&(t=""+ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ut(a):""}function Ro(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(g(92));if(yt(n)){if(1<n.length)throw Error(g(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ut(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Jl(e)}function Va(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wo(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Fm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ho(e,t,a){if(t!=null&&typeof t!="object")throw Error(g(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&wo(e,i,n)}else for(var l in t)t.hasOwnProperty(l)&&wo(e,l,t[l])}function $l(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ym=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Di(e){return Xm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rt(){}var es=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,Ka=null;function Io(e){var t=Ya(e);if(t&&(e=t.stateNode)){var a=e[ke]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ke]||null;if(!i)throw Error(g(90));Pl(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Oo(n)}break e;case"textarea":Do(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ja(e,!!a.multiple,t,!1)}}}var as=!1;function Uo(e,t,a){if(as)return e(t,a);as=!0;try{var n=e(t);return n}finally{if(as=!1,(Qa!==null||Ka!==null)&&(yl(),Qa&&(t=Qa,e=Ka,Ka=Qa=null,Io(t),e)))for(t=0;t<e.length;t++)Io(e[t])}}function wn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ke]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(g(231,t,typeof a));return a}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=!1;if(wt)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{ns=!1}var Pt=null,is=null,Ri=null;function Lo(){if(Ri)return Ri;var e,t=is,a=t.length,n,i="value"in Pt?Pt.value:Pt.textContent,l=i.length;for(e=0;e<a&&t[e]===i[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===i[l-n];n++);return Ri=i.slice(e,1<n?1-n:void 0)}function wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function Bo(){return!1}function Fe(e){function t(a,n,i,l,s){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Hi:Bo,this.isPropagationStopped=Bo,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ii=Fe(Na),In=H({},Na,{view:0,detail:0}),Zm=Fe(In),ls,ss,Un,Ui=H({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(ls=e.screenX-Un.screenX,ss=e.screenY-Un.screenY):ss=ls=0,Un=e),ls)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),Go=Fe(Ui),jm=H({},Ui,{dataTransfer:0}),Vm=Fe(jm),Qm=H({},In,{relatedTarget:0}),us=Fe(Qm),Km=H({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),Jm=Fe(Km),Pm=H({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wm=Fe(Pm),$m=H({},Na,{data:0}),_o=Fe($m),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ad[e])?!!t[e]:!1}function os(){return nd}var id=H({},In,{key:function(e){if(e.key){var t=ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:os,charCode:function(e){return e.type==="keypress"?wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ld=Fe(id),sd=H({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=Fe(sd),ud=H({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:os}),od=Fe(ud),cd=H({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),rd=Fe(cd),fd=H({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),md=Fe(fd),dd=H({},Na,{newState:0,oldState:0}),hd=Fe(dd),gd=[9,13,27,32],cs=wt&&"CompositionEvent"in window,Ln=null;wt&&"documentMode"in document&&(Ln=document.documentMode);var pd=wt&&"TextEvent"in window&&!Ln,ko=wt&&(!cs||Ln&&8<Ln&&11>=Ln),Fo=" ",Yo=!1;function Xo(e,t){switch(e){case"keyup":return gd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ja=!1;function yd(e,t){switch(e){case"compositionend":return Zo(t);case"keypress":return t.which!==32?null:(Yo=!0,Fo);case"textInput":return e=t.data,e===Fo&&Yo?null:e;default:return null}}function vd(e,t){if(Ja)return e==="compositionend"||!cs&&Xo(e,t)?(e=Lo(),Ri=is=Pt=null,Ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ko&&t.locale!=="ko"?null:t.data;default:return null}}var Ad={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ad[e.type]:t==="textarea"}function Vo(e,t,a,n){Qa?Ka?Ka.push(n):Ka=[n]:Qa=n,t=Nl(t,"onChange"),0<t.length&&(a=new Ii("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Bn=null,Gn=null;function Sd(e){Df(e,0)}function Li(e){var t=Rn(e);if(Oo(t))return e}function Qo(e,t){if(e==="change")return t}var Ko=!1;if(wt){var rs;if(wt){var fs="oninput"in document;if(!fs){var Jo=document.createElement("div");Jo.setAttribute("oninput","return;"),fs=typeof Jo.oninput=="function"}rs=fs}else rs=!1;Ko=rs&&(!document.documentMode||9<document.documentMode)}function Po(){Bn&&(Bn.detachEvent("onpropertychange",Wo),Gn=Bn=null)}function Wo(e){if(e.propertyName==="value"&&Li(Gn)){var t=[];Vo(t,Gn,e,ts(e)),Uo(Sd,t)}}function bd(e,t,a){e==="focusin"?(Po(),Bn=t,Gn=a,Bn.attachEvent("onpropertychange",Wo)):e==="focusout"&&Po()}function Ed(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Gn)}function Td(e,t){if(e==="click")return Li(t)}function Nd(e,t){if(e==="input"||e==="change")return Li(t)}function zd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:zd;function _n(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Fl.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function $o(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,t){var a=$o(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$o(a)}}function tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=xi(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Md=wt&&"documentMode"in document&&11>=document.documentMode,Pa=null,ds=null,qn=null,hs=!1;function nc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hs||Pa==null||Pa!==xi(n)||(n=Pa,"selectionStart"in n&&ms(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),qn&&_n(qn,n)||(qn=n,n=Nl(ds,"onSelect"),0<n.length&&(t=new Ii("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Pa)))}function za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Wa={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},gs={},ic={};wt&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function Ma(e){if(gs[e])return gs[e];if(!Wa[e])return e;var t=Wa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ic)return gs[e]=t[a];return e}var lc=Ma("animationend"),sc=Ma("animationiteration"),uc=Ma("animationstart"),Cd=Ma("transitionrun"),Od=Ma("transitionstart"),xd=Ma("transitioncancel"),oc=Ma("transitionend"),cc=new Map,ps="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ps.push("scrollEnd");function vt(e,t){cc.set(e,t),Ta(t,[e])}var Bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],$a=0,ys=0;function Gi(){for(var e=$a,t=ys=$a=0;t<e;){var a=ct[t];ct[t++]=null;var n=ct[t];ct[t++]=null;var i=ct[t];ct[t++]=null;var l=ct[t];if(ct[t++]=null,n!==null&&i!==null){var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}l!==0&&rc(a,i,l)}}function _i(e,t,a,n){ct[$a++]=e,ct[$a++]=t,ct[$a++]=a,ct[$a++]=n,ys|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function vs(e,t,a,n){return _i(e,t,a,n),qi(e)}function Ca(e,t){return _i(e,null,null,t),qi(e)}function rc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,l=e.return;l!==null;)l.childLanes|=a,n=l.alternate,n!==null&&(n.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-We(a),e=l.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),l):null}function qi(e){if(50<oi)throw oi=0,Cu=null,Error(g(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var en={};function Dd(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,n){return new Dd(e,t,a,n)}function As(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ki(e,t,a,n,i,l){var s=0;if(n=e,typeof e=="function")As(e)&&(s=1);else if(typeof e=="string")s=Uh(e,a,C.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Et:return e=et(31,a,t,i),e.elementType=Et,e.lanes=l,e;case He:return Oa(a.children,i,l,t);case Ot:s=8,i|=24;break;case Ke:return e=et(12,a,t,i|2),e.elementType=Ke,e.lanes=l,e;case bt:return e=et(13,a,t,i),e.elementType=bt,e.lanes=l,e;case Ge:return e=et(19,a,t,i),e.elementType=Ge,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case De:s=10;break e;case Qt:s=9;break e;case st:s=11;break e;case X:s=14;break e;case _e:s=16,n=null;break e}s=29,a=Error(g(130,e===null?"null":typeof e,"")),n=null}return t=et(s,a,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function Oa(e,t,a,n){return e=et(7,e,n,t),e.lanes=a,e}function Ss(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function mc(e){var t=et(18,null,null,0);return t.stateNode=e,t}function bs(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var dc=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var a=dc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fo(t)},dc.set(e,t),t)}return{value:e,source:t,stack:fo(t)}}var tn=[],an=0,Fi=null,kn=0,ft=[],mt=0,Wt=null,Nt=1,zt="";function It(e,t){tn[an++]=kn,tn[an++]=Fi,Fi=e,kn=t}function hc(e,t,a){ft[mt++]=Nt,ft[mt++]=zt,ft[mt++]=Wt,Wt=e;var n=Nt;e=zt;var i=32-We(n)-1;n&=~(1<<i),a+=1;var l=32-We(t)+i;if(30<l){var s=i-i%5;l=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Nt=1<<32-We(t)+i|a<<i|n,zt=l+e}else Nt=1<<l|a<<i|n,zt=e}function Es(e){e.return!==null&&(It(e,1),hc(e,1,0))}function Ts(e){for(;e===Fi;)Fi=tn[--an],tn[an]=null,kn=tn[--an],tn[an]=null;for(;e===Wt;)Wt=ft[--mt],ft[mt]=null,zt=ft[--mt],ft[mt]=null,Nt=ft[--mt],ft[mt]=null}function gc(e,t){ft[mt++]=Nt,ft[mt++]=zt,ft[mt++]=Wt,Nt=t.id,zt=t.overflow,Wt=e}var Me=null,ue=null,Z=!1,$t=null,dt=!1,Ns=Error(g(519));function ea(e){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fn(rt(t,e)),Ns}function pc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[ze]=e,t[ke]=n,a){case"dialog":k("cancel",t),k("close",t);break;case"iframe":case"object":case"embed":k("load",t);break;case"video":case"audio":for(a=0;a<ri.length;a++)k(ri[a],t);break;case"source":k("error",t);break;case"img":case"image":case"link":k("error",t),k("load",t);break;case"details":k("toggle",t);break;case"input":k("invalid",t),xo(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":k("invalid",t);break;case"textarea":k("invalid",t),Ro(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||If(t.textContent,a)?(n.popover!=null&&(k("beforetoggle",t),k("toggle",t)),n.onScroll!=null&&k("scroll",t),n.onScrollEnd!=null&&k("scrollend",t),n.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||ea(e,!0)}function yc(e){for(Me=e.return;Me;)switch(Me.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:Me=Me.return}}function nn(e){if(e!==Me)return!1;if(!Z)return yc(e),Z=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Fu(e.type,e.memoizedProps)),a=!a),a&&ue&&ea(e),yc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));ue=Yf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));ue=Yf(e)}else t===27?(t=ue,ha(e.type)?(e=Vu,Vu=null,ue=e):ue=t):ue=Me?gt(e.stateNode.nextSibling):null;return!0}function xa(){ue=Me=null,Z=!1}function zs(){var e=$t;return e!==null&&(je===null?je=e:je.push.apply(je,e),$t=null),e}function Fn(e){$t===null?$t=[e]:$t.push(e)}var Ms=r(null),Da=null,Ut=null;function ta(e,t,a){N(Ms,t._currentValue),t._currentValue=a}function Lt(e){e._currentValue=Ms.current,b(Ms)}function Cs(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Os(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;e:for(;l!==null;){var u=l;l=i;for(var o=0;o<t.length;o++)if(u.context===t[o]){l.lanes|=a,u=l.alternate,u!==null&&(u.lanes|=a),Cs(l.return,a,e),n||(s=null);break e}l=u.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(g(341));s.lanes|=a,l=s.alternate,l!==null&&(l.lanes|=a),Cs(s,a,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function ln(e,t,a,n){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(g(387));if(s=s.memoizedProps,s!==null){var u=i.type;$e(i.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(i===W.current){if(s=i.alternate,s===null)throw Error(g(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(gi):e=[gi])}i=i.return}e!==null&&Os(t,e,a,n),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){Da=e,Ut=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ce(e){return vc(Da,e)}function Xi(e,t){return Da===null&&Ra(e),vc(e,t)}function vc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ut===null){if(e===null)throw Error(g(308));Ut=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ut=Ut.next=t;return a}var Rd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},wd=M.unstable_scheduleCallback,Hd=M.unstable_NormalPriority,ve={$$typeof:De,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xs(){return{controller:new Rd,data:new Map,refCount:0}}function Yn(e){e.refCount--,e.refCount===0&&wd(Hd,function(){e.controller.abort()})}var Xn=null,Ds=0,sn=0,un=null;function Id(e,t){if(Xn===null){var a=Xn=[];Ds=0,sn=Hu(),un={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ds++,t.then(Ac,Ac),t}function Ac(){if(--Ds===0&&Xn!==null){un!==null&&(un.status="fulfilled");var e=Xn;Xn=null,sn=0,un=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ud(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Sc=v.S;v.S=function(e,t){nf=Je(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Id(e,t),Sc!==null&&Sc(e,t)};var wa=r(null);function Rs(){var e=wa.current;return e!==null?e:se.pooledCache}function Zi(e,t){t===null?N(wa,wa.current):N(wa,t.pool)}function bc(){var e=Rs();return e===null?null:{parent:ve._currentValue,pool:e}}var on=Error(g(460)),ws=Error(g(474)),ji=Error(g(542)),Vi={then:function(){}};function Ec(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Rt,Rt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zc(e),e;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(g(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zc(e),e}throw Ia=t,on}}function Ha(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ia=a,on):a}}var Ia=null;function Nc(){if(Ia===null)throw Error(g(459));var e=Ia;return Ia=null,e}function zc(e){if(e===on||e===ji)throw Error(g(483))}var cn=null,Zn=0;function Qi(e){var t=Zn;return Zn+=1,cn===null&&(cn=[]),Tc(cn,e,t)}function jn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ki(e,t){throw t.$$typeof===ce?Error(g(525)):(e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mc(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function a(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function n(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function i(f,c){return f=Ht(f,c),f.index=0,f.sibling=null,f}function l(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=67108866,c):m):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function u(f,c,m,A){return c===null||c.tag!==6?(c=Ss(m,f.mode,A),c.return=f,c):(c=i(c,m),c.return=f,c)}function o(f,c,m,A){var x=m.type;return x===He?y(f,c,m.props.children,A,m.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===_e&&Ha(x)===c.type)?(c=i(c,m.props),jn(c,m),c.return=f,c):(c=ki(m.type,m.key,m.props,null,f.mode,A),jn(c,m),c.return=f,c)}function d(f,c,m,A){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=bs(m,f.mode,A),c.return=f,c):(c=i(c,m.children||[]),c.return=f,c)}function y(f,c,m,A,x){return c===null||c.tag!==7?(c=Oa(m,f.mode,A,x),c.return=f,c):(c=i(c,m),c.return=f,c)}function S(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Ss(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qe:return m=ki(c.type,c.key,c.props,null,f.mode,m),jn(m,c),m.return=f,m;case Be:return c=bs(c,f.mode,m),c.return=f,c;case _e:return c=Ha(c),S(f,c,m)}if(yt(c)||qe(c))return c=Oa(c,f.mode,m,null),c.return=f,c;if(typeof c.then=="function")return S(f,Qi(c),m);if(c.$$typeof===De)return S(f,Xi(f,c),m);Ki(f,c)}return null}function h(f,c,m,A){var x=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return x!==null?null:u(f,c,""+m,A);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qe:return m.key===x?o(f,c,m,A):null;case Be:return m.key===x?d(f,c,m,A):null;case _e:return m=Ha(m),h(f,c,m,A)}if(yt(m)||qe(m))return x!==null?null:y(f,c,m,A,null);if(typeof m.then=="function")return h(f,c,Qi(m),A);if(m.$$typeof===De)return h(f,c,Xi(f,m),A);Ki(f,m)}return null}function p(f,c,m,A,x){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return f=f.get(m)||null,u(c,f,""+A,x);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Qe:return f=f.get(A.key===null?m:A.key)||null,o(c,f,A,x);case Be:return f=f.get(A.key===null?m:A.key)||null,d(c,f,A,x);case _e:return A=Ha(A),p(f,c,m,A,x)}if(yt(A)||qe(A))return f=f.get(m)||null,y(c,f,A,x,null);if(typeof A.then=="function")return p(f,c,m,Qi(A),x);if(A.$$typeof===De)return p(f,c,m,Xi(c,A),x);Ki(c,A)}return null}function z(f,c,m,A){for(var x=null,j=null,O=c,G=c=0,Y=null;O!==null&&G<m.length;G++){O.index>G?(Y=O,O=null):Y=O.sibling;var V=h(f,O,m[G],A);if(V===null){O===null&&(O=Y);break}e&&O&&V.alternate===null&&t(f,O),c=l(V,c,G),j===null?x=V:j.sibling=V,j=V,O=Y}if(G===m.length)return a(f,O),Z&&It(f,G),x;if(O===null){for(;G<m.length;G++)O=S(f,m[G],A),O!==null&&(c=l(O,c,G),j===null?x=O:j.sibling=O,j=O);return Z&&It(f,G),x}for(O=n(O);G<m.length;G++)Y=p(O,f,G,m[G],A),Y!==null&&(e&&Y.alternate!==null&&O.delete(Y.key===null?G:Y.key),c=l(Y,c,G),j===null?x=Y:j.sibling=Y,j=Y);return e&&O.forEach(function(Aa){return t(f,Aa)}),Z&&It(f,G),x}function R(f,c,m,A){if(m==null)throw Error(g(151));for(var x=null,j=null,O=c,G=c=0,Y=null,V=m.next();O!==null&&!V.done;G++,V=m.next()){O.index>G?(Y=O,O=null):Y=O.sibling;var Aa=h(f,O,V.value,A);if(Aa===null){O===null&&(O=Y);break}e&&O&&Aa.alternate===null&&t(f,O),c=l(Aa,c,G),j===null?x=Aa:j.sibling=Aa,j=Aa,O=Y}if(V.done)return a(f,O),Z&&It(f,G),x;if(O===null){for(;!V.done;G++,V=m.next())V=S(f,V.value,A),V!==null&&(c=l(V,c,G),j===null?x=V:j.sibling=V,j=V);return Z&&It(f,G),x}for(O=n(O);!V.done;G++,V=m.next())V=p(O,f,G,V.value,A),V!==null&&(e&&V.alternate!==null&&O.delete(V.key===null?G:V.key),c=l(V,c,G),j===null?x=V:j.sibling=V,j=V);return e&&O.forEach(function(jh){return t(f,jh)}),Z&&It(f,G),x}function ie(f,c,m,A){if(typeof m=="object"&&m!==null&&m.type===He&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Qe:e:{for(var x=m.key;c!==null;){if(c.key===x){if(x=m.type,x===He){if(c.tag===7){a(f,c.sibling),A=i(c,m.props.children),A.return=f,f=A;break e}}else if(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===_e&&Ha(x)===c.type){a(f,c.sibling),A=i(c,m.props),jn(A,m),A.return=f,f=A;break e}a(f,c);break}else t(f,c);c=c.sibling}m.type===He?(A=Oa(m.props.children,f.mode,A,m.key),A.return=f,f=A):(A=ki(m.type,m.key,m.props,null,f.mode,A),jn(A,m),A.return=f,f=A)}return s(f);case Be:e:{for(x=m.key;c!==null;){if(c.key===x)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){a(f,c.sibling),A=i(c,m.children||[]),A.return=f,f=A;break e}else{a(f,c);break}else t(f,c);c=c.sibling}A=bs(m,f.mode,A),A.return=f,f=A}return s(f);case _e:return m=Ha(m),ie(f,c,m,A)}if(yt(m))return z(f,c,m,A);if(qe(m)){if(x=qe(m),typeof x!="function")throw Error(g(150));return m=x.call(m),R(f,c,m,A)}if(typeof m.then=="function")return ie(f,c,Qi(m),A);if(m.$$typeof===De)return ie(f,c,Xi(f,m),A);Ki(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,c!==null&&c.tag===6?(a(f,c.sibling),A=i(c,m),A.return=f,f=A):(a(f,c),A=Ss(m,f.mode,A),A.return=f,f=A),s(f)):a(f,c)}return function(f,c,m,A){try{Zn=0;var x=ie(f,c,m,A);return cn=null,x}catch(O){if(O===on||O===ji)throw O;var j=et(29,O,null,f.mode);return j.lanes=A,j.return=f,j}finally{}}}var Ua=Mc(!0),Cc=Mc(!1),aa=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Is(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(K&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=qi(e),rc(e,null,a),t}return _i(e,n,t,a),qi(e)}function Vn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,vo(e,a)}}function Us(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,a=a.next}while(a!==null);l===null?i=l=t:l=l.next=t}else i=l=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ls=!1;function Qn(){if(Ls){var e=un;if(e!==null)throw e}}function Kn(e,t,a,n){Ls=!1;var i=e.updateQueue;aa=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var o=u,d=o.next;o.next=null,s===null?l=d:s.next=d,s=o;var y=e.alternate;y!==null&&(y=y.updateQueue,u=y.lastBaseUpdate,u!==s&&(u===null?y.firstBaseUpdate=d:u.next=d,y.lastBaseUpdate=o))}if(l!==null){var S=i.baseState;s=0,y=d=o=null,u=l;do{var h=u.lane&-536870913,p=h!==u.lane;if(p?(F&h)===h:(n&h)===h){h!==0&&h===sn&&(Ls=!0),y!==null&&(y=y.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var z=e,R=u;h=t;var ie=a;switch(R.tag){case 1:if(z=R.payload,typeof z=="function"){S=z.call(ie,S,h);break e}S=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=R.payload,h=typeof z=="function"?z.call(ie,S,h):z,h==null)break e;S=H({},S,h);break e;case 2:aa=!0}}h=u.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[h]:p.push(h))}else p={lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},y===null?(d=y=p,o=S):y=y.next=p,s|=h;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);y===null&&(o=S),i.baseState=o,i.firstBaseUpdate=d,i.lastBaseUpdate=y,l===null&&(i.shared.lanes=0),ca|=s,e.lanes=s,e.memoizedState=S}}function Oc(e,t){if(typeof e!="function")throw Error(g(191,e));e.call(t)}function xc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Oc(a[e],t)}var rn=r(null),Ji=r(0);function Dc(e,t){e=Zt,N(Ji,e),N(rn,t),Zt=e|t.baseLanes}function Bs(){N(Ji,Zt),N(rn,rn.current)}function Gs(){Zt=Ji.current,b(rn),b(Ji)}var tt=r(null),ht=null;function la(e){var t=e.alternate;N(pe,pe.current&1),N(tt,e),ht===null&&(t===null||rn.current!==null||t.memoizedState!==null)&&(ht=e)}function _s(e){N(pe,pe.current),N(tt,e),ht===null&&(ht=e)}function Rc(e){e.tag===22?(N(pe,pe.current),N(tt,e),ht===null&&(ht=e)):sa()}function sa(){N(pe,pe.current),N(tt,tt.current)}function at(e){b(tt),ht===e&&(ht=null),b(pe)}var pe=r(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zu(a)||ju(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bt=0,B=null,ae=null,Ae=null,Wi=!1,fn=!1,La=!1,$i=0,Jn=0,mn=null,Ld=0;function me(){throw Error(g(321))}function qs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function ks(e,t,a,n,i,l){return Bt=l,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?hr:au,La=!1,l=a(n,i),La=!1,fn&&(l=Hc(t,a,n,i)),wc(e),l}function wc(e){v.H=$n;var t=ae!==null&&ae.next!==null;if(Bt=0,Ae=ae=B=null,Wi=!1,Jn=0,mn=null,t)throw Error(g(300));e===null||Se||(e=e.dependencies,e!==null&&Yi(e)&&(Se=!0))}function Hc(e,t,a,n){B=e;var i=0;do{if(fn&&(mn=null),Jn=0,fn=!1,25<=i)throw Error(g(301));if(i+=1,Ae=ae=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}v.H=gr,l=t(a,n)}while(fn);return l}function Bd(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Pn(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(B.flags|=1024),t}function Fs(){var e=$i!==0;return $i=0,e}function Ys(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xs(e){if(Wi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wi=!1}Bt=0,Ae=ae=B=null,fn=!1,Jn=$i=0,mn=null}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?B.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function ye(){if(ae===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=Ae===null?B.memoizedState:Ae.next;if(t!==null)Ae=t,ae=e;else{if(e===null)throw B.alternate===null?Error(g(467)):Error(g(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},Ae===null?B.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function el(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pn(e){var t=Jn;return Jn+=1,mn===null&&(mn=[]),e=Tc(mn,e,t),t=B,(Ae===null?t.memoizedState:Ae.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?hr:au),e}function tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pn(e);if(e.$$typeof===De)return Ce(e)}throw Error(g(438,String(e)))}function Zs(e){var t=null,a=B.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=B.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=el(),B.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=qa;return t.index++,a}function Gt(e,t){return typeof t=="function"?t(e):t}function al(e){var t=ye();return js(t,ae,e)}function js(e,t,a){var n=e.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=a;var i=e.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}t.baseQueue=i=l,n.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var u=s=null,o=null,d=t,y=!1;do{var S=d.lane&-536870913;if(S!==d.lane?(F&S)===S:(Bt&S)===S){var h=d.revertLane;if(h===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),S===sn&&(y=!0);else if((Bt&h)===h){d=d.next,h===sn&&(y=!0);continue}else S={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(u=o=S,s=l):o=o.next=S,B.lanes|=h,ca|=h;S=d.action,La&&a(l,S),l=d.hasEagerState?d.eagerState:a(l,S)}else h={lane:S,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(u=o=h,s=l):o=o.next=h,B.lanes|=S,ca|=S;d=d.next}while(d!==null&&d!==t);if(o===null?s=l:o.next=u,!$e(l,e.memoizedState)&&(Se=!0,y&&(a=un,a!==null)))throw a;e.memoizedState=l,e.baseState=s,e.baseQueue=o,n.lastRenderedState=l}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Vs(e){var t=ye(),a=t.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,l=t.memoizedState;if(i!==null){a.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);$e(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,n]}function Ic(e,t,a){var n=B,i=ye(),l=Z;if(l){if(a===void 0)throw Error(g(407));a=a()}else a=t();var s=!$e((ae||i).memoizedState,a);if(s&&(i.memoizedState=a,Se=!0),i=i.queue,Js(Bc.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,dn(9,{destroy:void 0},Lc.bind(null,n,i,a,t),null),se===null)throw Error(g(349));l||(Bt&127)!==0||Uc(n,t,a)}return a}function Uc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=B.updateQueue,t===null?(t=el(),B.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Lc(e,t,a,n){t.value=a,t.getSnapshot=n,Gc(t)&&_c(e)}function Bc(e,t,a){return a(function(){Gc(t)&&_c(e)})}function Gc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function _c(e){var t=Ca(e,2);t!==null&&Ve(t,e,2)}function Qs(e){var t=Ue();if(typeof e=="function"){var a=e;if(e=a(),La){Kt(!0);try{a()}finally{Kt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},t}function qc(e,t,a,n){return e.baseState=a,js(e,ae,typeof n=="function"?n:Gt)}function Gd(e,t,a,n,i){if(ll(e))throw Error(g(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};v.T!==null?a(!0):l.isTransition=!1,n(l),a=t.pending,a===null?(l.next=t.pending=l,kc(t,l)):(l.next=a.next,t.pending=a.next=l)}}function kc(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var l=v.T,s={};v.T=s;try{var u=a(i,n),o=v.S;o!==null&&o(s,u),Fc(e,t,u)}catch(d){Ks(e,t,d)}finally{l!==null&&s.types!==null&&(l.types=s.types),v.T=l}}else try{l=a(i,n),Fc(e,t,l)}catch(d){Ks(e,t,d)}}function Fc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Yc(e,t,n)},function(n){return Ks(e,t,n)}):Yc(e,t,a)}function Yc(e,t,a){t.status="fulfilled",t.value=a,Xc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,kc(e,a)))}function Ks(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Xc(t),t=t.next;while(t!==n)}e.action=null}function Xc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zc(e,t){return t}function jc(e,t){if(Z){var a=se.formState;if(a!==null){e:{var n=B;if(Z){if(ue){t:{for(var i=ue,l=dt;i.nodeType!==8;){if(!l){i=null;break t}if(i=gt(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){ue=gt(i.nextSibling),n=i.data==="F!";break e}}ea(n)}n=!1}n&&(t=a[0])}}return a=Ue(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zc,lastRenderedState:t},a.queue=n,a=fr.bind(null,B,n),n.dispatch=a,n=Qs(!1),l=tu.bind(null,B,!1,n.queue),n=Ue(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Gd.bind(null,B,i,l,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Vc(e){var t=ye();return Qc(t,ae,e)}function Qc(e,t,a){if(t=js(e,t,Zc)[0],e=al(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Pn(t)}catch(s){throw s===on?ji:s}else n=t;t=ye();var i=t.queue,l=i.dispatch;return a!==t.memoizedState&&(B.flags|=2048,dn(9,{destroy:void 0},_d.bind(null,i,a),null)),[n,l,e]}function _d(e,t){e.action=t}function Kc(e){var t=ye(),a=ae;if(a!==null)return Qc(t,a,e);ye(),t=t.memoizedState,a=ye();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function dn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=B.updateQueue,t===null&&(t=el(),B.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Jc(){return ye().memoizedState}function nl(e,t,a,n){var i=Ue();B.flags|=e,i.memoizedState=dn(1|t,{destroy:void 0},a,n===void 0?null:n)}function il(e,t,a,n){var i=ye();n=n===void 0?null:n;var l=i.memoizedState.inst;ae!==null&&n!==null&&qs(n,ae.memoizedState.deps)?i.memoizedState=dn(t,l,a,n):(B.flags|=e,i.memoizedState=dn(1|t,l,a,n))}function Pc(e,t){nl(8390656,8,e,t)}function Js(e,t){il(2048,8,e,t)}function qd(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=el(),B.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Wc(e){var t=ye().memoizedState;return qd({ref:t,nextImpl:e}),function(){if((K&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function $c(e,t){return il(4,2,e,t)}function er(e,t){return il(4,4,e,t)}function tr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ar(e,t,a){a=a!=null?a.concat([e]):null,il(4,4,tr.bind(null,t,e),a)}function Ps(){}function nr(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&qs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function ir(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&qs(t,n[1]))return n[0];if(n=e(),La){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[n,t],n}function Ws(e,t,a){return a===void 0||(Bt&1073741824)!==0&&(F&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=sf(),B.lanes|=e,ca|=e,a)}function lr(e,t,a,n){return $e(a,t)?a:rn.current!==null?(e=Ws(e,a,n),$e(e,t)||(Se=!0),e):(Bt&42)===0||(Bt&1073741824)!==0&&(F&261930)===0?(Se=!0,e.memoizedState=a):(e=sf(),B.lanes|=e,ca|=e,t)}function sr(e,t,a,n,i){var l=T.p;T.p=l!==0&&8>l?l:8;var s=v.T,u={};v.T=u,tu(e,!1,t,a);try{var o=i(),d=v.S;if(d!==null&&d(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var y=Ud(o,n);Wn(e,t,y,lt(e))}else Wn(e,t,n,lt(e))}catch(S){Wn(e,t,{then:function(){},status:"rejected",reason:S},lt())}finally{T.p=l,s!==null&&u.types!==null&&(s.types=u.types),v.T=s}}function kd(){}function $s(e,t,a,n){if(e.tag!==5)throw Error(g(476));var i=ur(e).queue;sr(e,i,t,I,a===null?kd:function(){return or(e),a(n)})}function ur(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function or(e){var t=ur(e);t.next===null&&(t=e.alternate.memoizedState),Wn(e,t.next.queue,{},lt())}function eu(){return Ce(gi)}function cr(){return ye().memoizedState}function rr(){return ye().memoizedState}function Fd(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=lt();e=na(a);var n=ia(t,e,a);n!==null&&(Ve(n,t,a),Vn(n,t,a)),t={cache:xs()},e.payload=t;return}t=t.return}}function Yd(e,t,a){var n=lt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ll(e)?mr(t,a):(a=vs(e,t,a,n),a!==null&&(Ve(a,e,n),dr(a,t,n)))}function fr(e,t,a){var n=lt();Wn(e,t,a,n)}function Wn(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ll(e))mr(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,u=l(s,a);if(i.hasEagerState=!0,i.eagerState=u,$e(u,s))return _i(e,t,i,0),se===null&&Gi(),!1}catch{}finally{}if(a=vs(e,t,i,n),a!==null)return Ve(a,e,n),dr(a,t,n),!0}return!1}function tu(e,t,a,n){if(n={lane:2,revertLane:Hu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ll(e)){if(t)throw Error(g(479))}else t=vs(e,a,n,2),t!==null&&Ve(t,e,2)}function ll(e){var t=e.alternate;return e===B||t!==null&&t===B}function mr(e,t){fn=Wi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function dr(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,vo(e,a)}}var $n={readContext:Ce,use:tl,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me};$n.useEffectEvent=me;var hr={readContext:Ce,use:tl,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Pc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,nl(4194308,4,tr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){nl(4,2,e,t)},useMemo:function(e,t){var a=Ue();t=t===void 0?null:t;var n=e();if(La){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Ue();if(a!==void 0){var i=a(t);if(La){Kt(!0);try{a(t)}finally{Kt(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Yd.bind(null,B,e),[n.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:function(e){e=Qs(e);var t=e.queue,a=fr.bind(null,B,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ps,useDeferredValue:function(e,t){var a=Ue();return Ws(a,e,t)},useTransition:function(){var e=Qs(!1);return e=sr.bind(null,B,e.queue,!0,!1),Ue().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=B,i=Ue();if(Z){if(a===void 0)throw Error(g(407));a=a()}else{if(a=t(),se===null)throw Error(g(349));(F&127)!==0||Uc(n,t,a)}i.memoizedState=a;var l={value:a,getSnapshot:t};return i.queue=l,Pc(Bc.bind(null,n,l,e),[e]),n.flags|=2048,dn(9,{destroy:void 0},Lc.bind(null,n,l,a,t),null),a},useId:function(){var e=Ue(),t=se.identifierPrefix;if(Z){var a=zt,n=Nt;a=(n&~(1<<32-We(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=$i++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Ld++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eu,useFormState:jc,useActionState:jc,useOptimistic:function(e){var t=Ue();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=tu.bind(null,B,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zs,useCacheRefresh:function(){return Ue().memoizedState=Fd.bind(null,B)},useEffectEvent:function(e){var t=Ue(),a={impl:e};return t.memoizedState=a,function(){if((K&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}},au={readContext:Ce,use:tl,useCallback:nr,useContext:Ce,useEffect:Js,useImperativeHandle:ar,useInsertionEffect:$c,useLayoutEffect:er,useMemo:ir,useReducer:al,useRef:Jc,useState:function(){return al(Gt)},useDebugValue:Ps,useDeferredValue:function(e,t){var a=ye();return lr(a,ae.memoizedState,e,t)},useTransition:function(){var e=al(Gt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Pn(e),t]},useSyncExternalStore:Ic,useId:cr,useHostTransitionStatus:eu,useFormState:Vc,useActionState:Vc,useOptimistic:function(e,t){var a=ye();return qc(a,ae,e,t)},useMemoCache:Zs,useCacheRefresh:rr};au.useEffectEvent=Wc;var gr={readContext:Ce,use:tl,useCallback:nr,useContext:Ce,useEffect:Js,useImperativeHandle:ar,useInsertionEffect:$c,useLayoutEffect:er,useMemo:ir,useReducer:Vs,useRef:Jc,useState:function(){return Vs(Gt)},useDebugValue:Ps,useDeferredValue:function(e,t){var a=ye();return ae===null?Ws(a,e,t):lr(a,ae.memoizedState,e,t)},useTransition:function(){var e=Vs(Gt)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Pn(e),t]},useSyncExternalStore:Ic,useId:cr,useHostTransitionStatus:eu,useFormState:Kc,useActionState:Kc,useOptimistic:function(e,t){var a=ye();return ae!==null?qc(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zs,useCacheRefresh:rr};gr.useEffectEvent=Wc;function nu(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:H({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var iu={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=lt(),i=na(n);i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(Ve(t,e,n),Vn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=lt(),i=na(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(Ve(t,e,n),Vn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=lt(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=ia(e,n,a),t!==null&&(Ve(t,e,a),Vn(t,e,a))}};function pr(e,t,a,n,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,s):t.prototype&&t.prototype.isPureReactComponent?!_n(a,n)||!_n(i,l):!0}function yr(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&iu.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=H({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function vr(e){Bi(e)}function Ar(e){console.error(e)}function Sr(e){Bi(e)}function sl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function br(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function lu(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){sl(e,t)},a}function Er(e){return e=na(e),e.tag=3,e}function Tr(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;e.payload=function(){return i(l)},e.callback=function(){br(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){br(t,a,n),typeof i!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function Xd(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ln(t,a,i,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return ht===null?vl():a.alternate===null&&de===0&&(de=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Vi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Du(e,n,i)),!1;case 22:return a.flags|=65536,n===Vi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Du(e,n,i)),!1}throw Error(g(435,a.tag))}return Du(e,n,i),vl(),!1}if(Z)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Ns&&(e=Error(g(422),{cause:n}),Fn(rt(e,a)))):(n!==Ns&&(t=Error(g(423),{cause:n}),Fn(rt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=rt(n,a),i=lu(e.stateNode,n,i),Us(e,i),de!==4&&(de=2)),!1;var l=Error(g(520),{cause:n});if(l=rt(l,a),ui===null?ui=[l]:ui.push(l),de!==4&&(de=2),t===null)return!0;n=rt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=lu(a.stateNode,n,e),Us(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ra===null||!ra.has(l))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Er(i),Tr(i,e,a,n),Us(a,i),!1}a=a.return}while(a!==null);return!1}var su=Error(g(461)),Se=!1;function Oe(e,t,a,n){t.child=e===null?Cc(t,null,a,n):Ua(t,e.child,a,n)}function Nr(e,t,a,n,i){a=a.render;var l=t.ref;if("ref"in n){var s={};for(var u in n)u!=="ref"&&(s[u]=n[u])}else s=n;return Ra(t),n=ks(e,t,a,s,l,i),u=Fs(),e!==null&&!Se?(Ys(e,t,i),_t(e,t,i)):(Z&&u&&Es(t),t.flags|=1,Oe(e,t,n,i),t.child)}function zr(e,t,a,n,i){if(e===null){var l=a.type;return typeof l=="function"&&!As(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,Mr(e,t,l,n,i)):(e=ki(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!hu(e,i)){var s=l.memoizedProps;if(a=a.compare,a=a!==null?a:_n,a(s,n)&&e.ref===t.ref)return _t(e,t,i)}return t.flags|=1,e=Ht(l,n),e.ref=t.ref,e.return=t,t.child=e}function Mr(e,t,a,n,i){if(e!==null){var l=e.memoizedProps;if(_n(l,n)&&e.ref===t.ref)if(Se=!1,t.pendingProps=n=l,hu(e,i))(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,_t(e,t,i)}return uu(e,t,a,n,i)}function Cr(e,t,a,n){var i=n.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~l}else n=0,t.child=null;return Or(e,t,l,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zi(t,l!==null?l.cachePool:null),l!==null?Dc(t,l):Bs(),Rc(t);else return n=t.lanes=536870912,Or(e,t,l!==null?l.baseLanes|a:a,a,n)}else l!==null?(Zi(t,l.cachePool),Dc(t,l),sa(),t.memoizedState=null):(e!==null&&Zi(t,null),Bs(),sa());return Oe(e,t,i,a),t.child}function ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Or(e,t,a,n,i){var l=Rs();return l=l===null?null:{parent:ve._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&Zi(t,null),Bs(),Rc(t),e!==null&&ln(e,t,n,!0),t.childLanes=i,null}function ul(e,t){return t=cl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xr(e,t,a){return Ua(t,e.child,null,a),e=ul(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Zd(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Z){if(n.mode==="hidden")return e=ul(t,n),t.lanes=536870912,ei(null,e);if(_s(t),(e=ue)?(e=Ff(e,dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wt!==null?{id:Nt,overflow:zt}:null,retryLane:536870912,hydrationErrors:null},a=mc(e),a.return=t,t.child=a,Me=t,ue=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return ul(t,n)}var l=e.memoizedState;if(l!==null){var s=l.dehydrated;if(_s(t),i)if(t.flags&256)t.flags&=-257,t=xr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(g(558));else if(Se||ln(e,t,a,!1),i=(a&e.childLanes)!==0,Se||i){if(n=se,n!==null&&(s=Ao(n,a),s!==0&&s!==l.retryLane))throw l.retryLane=s,Ca(e,s),Ve(n,e,s),su;vl(),t=xr(e,t,a)}else e=l.treeContext,ue=gt(s.nextSibling),Me=t,Z=!0,$t=null,dt=!1,e!==null&&gc(t,e),t=ul(t,n),t.flags|=4096;return t}return e=Ht(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ol(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function uu(e,t,a,n,i){return Ra(t),a=ks(e,t,a,n,void 0,i),n=Fs(),e!==null&&!Se?(Ys(e,t,i),_t(e,t,i)):(Z&&n&&Es(t),t.flags|=1,Oe(e,t,a,i),t.child)}function Dr(e,t,a,n,i,l){return Ra(t),t.updateQueue=null,a=Hc(t,n,a,i),wc(e),n=Fs(),e!==null&&!Se?(Ys(e,t,l),_t(e,t,l)):(Z&&n&&Es(t),t.flags|=1,Oe(e,t,a,l),t.child)}function Rr(e,t,a,n,i){if(Ra(t),t.stateNode===null){var l=en,s=a.contextType;typeof s=="object"&&s!==null&&(l=Ce(s)),l=new a(n,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=iu,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=n,l.state=t.memoizedState,l.refs={},Hs(t),s=a.contextType,l.context=typeof s=="object"&&s!==null?Ce(s):en,l.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(nu(t,a,s,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&iu.enqueueReplaceState(l,l.state,null),Kn(t,n,l,i),Qn(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){l=t.stateNode;var u=t.memoizedProps,o=Ba(a,u);l.props=o;var d=l.context,y=a.contextType;s=en,typeof y=="object"&&y!==null&&(s=Ce(y));var S=a.getDerivedStateFromProps;y=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||d!==s)&&yr(t,l,n,s),aa=!1;var h=t.memoizedState;l.state=h,Kn(t,n,l,i),Qn(),d=t.memoizedState,u||h!==d||aa?(typeof S=="function"&&(nu(t,a,S,n),d=t.memoizedState),(o=aa||pr(t,a,o,n,h,d,s))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=d),l.props=n,l.state=d,l.context=s,n=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,Is(e,t),s=t.memoizedProps,y=Ba(a,s),l.props=y,S=t.pendingProps,h=l.context,d=a.contextType,o=en,typeof d=="object"&&d!==null&&(o=Ce(d)),u=a.getDerivedStateFromProps,(d=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==S||h!==o)&&yr(t,l,n,o),aa=!1,h=t.memoizedState,l.state=h,Kn(t,n,l,i),Qn();var p=t.memoizedState;s!==S||h!==p||aa||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof u=="function"&&(nu(t,a,u,n),p=t.memoizedState),(y=aa||pr(t,a,y,n,h,p,o)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,p,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,p,o)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),l.props=n,l.state=p,l.context=o,n=y):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return l=n,ol(e,t),n=(t.flags&128)!==0,l||n?(l=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&n?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,a,i)):Oe(e,t,a,i),t.memoizedState=l.state,e=t.child):e=_t(e,t,i),e}function wr(e,t,a,n){return xa(),t.flags|=256,Oe(e,t,a,n),t.child}var ou={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cu(e){return{baseLanes:e,cachePool:bc()}}function ru(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=it),e}function Hr(e,t,a){var n=t.pendingProps,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(pe.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Z){if(i?la(t):sa(),(e=ue)?(e=Ff(e,dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wt!==null?{id:Nt,overflow:zt}:null,retryLane:536870912,hydrationErrors:null},a=mc(e),a.return=t,t.child=a,Me=t,ue=null)):e=null,e===null)throw ea(t);return ju(e)?t.lanes=32:t.lanes=536870912,null}var u=n.children;return n=n.fallback,i?(sa(),i=t.mode,u=cl({mode:"hidden",children:u},i),n=Oa(n,i,a,null),u.return=t,n.return=t,u.sibling=n,t.child=u,n=t.child,n.memoizedState=cu(a),n.childLanes=ru(e,s,a),t.memoizedState=ou,ei(null,n)):(la(t),fu(t,u))}var o=e.memoizedState;if(o!==null&&(u=o.dehydrated,u!==null)){if(l)t.flags&256?(la(t),t.flags&=-257,t=mu(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),u=n.fallback,i=t.mode,n=cl({mode:"visible",children:n.children},i),u=Oa(u,i,a,null),u.flags|=2,n.return=t,u.return=t,n.sibling=u,t.child=n,Ua(t,e.child,null,a),n=t.child,n.memoizedState=cu(a),n.childLanes=ru(e,s,a),t.memoizedState=ou,t=ei(null,n));else if(la(t),ju(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var d=s.dgst;s=d,n=Error(g(419)),n.stack="",n.digest=s,Fn({value:n,source:null,stack:null}),t=mu(e,t,a)}else if(Se||ln(e,t,a,!1),s=(a&e.childLanes)!==0,Se||s){if(s=se,s!==null&&(n=Ao(s,a),n!==0&&n!==o.retryLane))throw o.retryLane=n,Ca(e,n),Ve(s,e,n),su;Zu(u)||vl(),t=mu(e,t,a)}else Zu(u)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,ue=gt(u.nextSibling),Me=t,Z=!0,$t=null,dt=!1,e!==null&&gc(t,e),t=fu(t,n.children),t.flags|=4096);return t}return i?(sa(),u=n.fallback,i=t.mode,o=e.child,d=o.sibling,n=Ht(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&65011712,d!==null?u=Ht(d,u):(u=Oa(u,i,a,null),u.flags|=2),u.return=t,n.return=t,n.sibling=u,t.child=n,ei(null,n),n=t.child,u=e.child.memoizedState,u===null?u=cu(a):(i=u.cachePool,i!==null?(o=ve._currentValue,i=i.parent!==o?{parent:o,pool:o}:i):i=bc(),u={baseLanes:u.baseLanes|a,cachePool:i}),n.memoizedState=u,n.childLanes=ru(e,s,a),t.memoizedState=ou,ei(e.child,n)):(la(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function fu(e,t){return t=cl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function cl(e,t){return e=et(22,e,null,t),e.lanes=0,e}function mu(e,t,a){return Ua(t,e.child,null,a),e=fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ir(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Cs(e.return,t,a)}function du(e,t,a,n,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=i,s.treeForkCount=l)}function Ur(e,t,a){var n=t.pendingProps,i=n.revealOrder,l=n.tail;n=n.children;var s=pe.current,u=(s&2)!==0;if(u?(s=s&1|2,t.flags|=128):s&=1,N(pe,s),Oe(e,t,n,a),n=Z?kn:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ir(e,a,t);else if(e.tag===19)Ir(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Pi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),du(t,!1,i,a,l,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Pi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}du(t,!0,a,null,l,n);break;case"together":du(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function _t(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ln(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function hu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Yi(e)))}function jd(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),ta(t,ve,e.memoizedState.cache),xa();break;case 27:case 5:Mn(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,_s(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(la(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Hr(e,t,a):(la(t),e=_t(e,t,a),e!==null?e.sibling:null);la(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ln(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Ur(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(pe,pe.current),n)break;return null;case 22:return t.lanes=0,Cr(e,t,a,t.pendingProps);case 24:ta(t,ve,e.memoizedState.cache)}return _t(e,t,a)}function Lr(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Se=!0;else{if(!hu(e,a)&&(t.flags&128)===0)return Se=!1,jd(e,t,a);Se=(e.flags&131072)!==0}else Se=!1,Z&&(t.flags&1048576)!==0&&hc(t,kn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ha(t.elementType),t.type=e,typeof e=="function")As(e)?(n=Ba(e,n),t.tag=1,t=Rr(null,t,e,n,a)):(t.tag=0,t=uu(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===st){t.tag=11,t=Nr(null,t,e,n,a);break e}else if(i===X){t.tag=14,t=zr(null,t,e,n,a);break e}}throw t=xt(e)||e,Error(g(306,t,""))}}return t;case 0:return uu(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ba(n,t.pendingProps),Rr(e,t,n,i,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(g(387));n=t.pendingProps;var l=t.memoizedState;i=l.element,Is(e,t),Kn(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ta(t,ve,n),n!==l.cache&&Os(t,[ve],a,!0),Qn(),n=s.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=wr(e,t,n,a);break e}else if(n!==i){i=rt(Error(g(424)),t),Fn(i),t=wr(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ue=gt(e.firstChild),Me=t,Z=!0,$t=null,dt=!0,a=Cc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xa(),n===i){t=_t(e,t,a);break e}Oe(e,t,n,a)}t=t.child}return t;case 26:return ol(e,t),e===null?(a=Qf(t.type,null,t.pendingProps,null))?t.memoizedState=a:Z||(a=t.type,e=t.pendingProps,n=zl(_.current).createElement(a),n[ze]=t,n[ke]=e,xe(n,a,e),Te(n),t.stateNode=n):t.memoizedState=Qf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mn(t),e===null&&Z&&(n=t.stateNode=Zf(t.type,t.pendingProps,_.current),Me=t,dt=!0,i=ue,ha(t.type)?(Vu=i,ue=gt(n.firstChild)):ue=i),Oe(e,t,t.pendingProps.children,a),ol(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Z&&((i=n=ue)&&(n=Eh(n,t.type,t.pendingProps,dt),n!==null?(t.stateNode=n,Me=t,ue=gt(n.firstChild),dt=!1,i=!0):i=!1),i||ea(t)),Mn(t),i=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,n=l.children,Fu(i,l)?n=null:s!==null&&Fu(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=ks(e,t,Bd,null,null,a),gi._currentValue=i),ol(e,t),Oe(e,t,n,a),t.child;case 6:return e===null&&Z&&((e=a=ue)&&(a=Th(a,t.pendingProps,dt),a!==null?(t.stateNode=a,Me=t,ue=null,e=!0):e=!1),e||ea(t)),null;case 13:return Hr(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ua(t,null,n,a):Oe(e,t,n,a),t.child;case 11:return Nr(e,t,t.type,t.pendingProps,a);case 7:return Oe(e,t,t.pendingProps,a),t.child;case 8:return Oe(e,t,t.pendingProps.children,a),t.child;case 12:return Oe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Oe(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Ra(t),i=Ce(i),n=n(i),t.flags|=1,Oe(e,t,n,a),t.child;case 14:return zr(e,t,t.type,t.pendingProps,a);case 15:return Mr(e,t,t.type,t.pendingProps,a);case 19:return Ur(e,t,a);case 31:return Zd(e,t,a);case 22:return Cr(e,t,a,t.pendingProps);case 24:return Ra(t),n=Ce(ve),e===null?(i=Rs(),i===null&&(i=se,l=xs(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=a),i=l),t.memoizedState={parent:n,cache:i},Hs(t),ta(t,ve,i)):((e.lanes&a)!==0&&(Is(e,t),Kn(t,null,null,a),Qn()),i=e.memoizedState,l=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,ve,n)):(n=l.cache,ta(t,ve,n),n!==i.cache&&Os(t,[ve],a,!0))),Oe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function qt(e){e.flags|=4}function gu(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(rf())e.flags|=8192;else throw Ia=Vi,ws}else e.flags&=-16777217}function Br(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$f(t))if(rf())e.flags|=8192;else throw Ia=Vi,ws}function rl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?po():536870912,e.lanes|=t,yn|=t)}function ti(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Vd(e,t,a){var n=t.pendingProps;switch(Ts(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return oe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Lt(ve),ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nn(t)?qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zs())),oe(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(qt(t),l!==null?(oe(t),Br(t,l)):(oe(t),gu(t,i,null,n,a))):l?l!==e.memoizedState?(qt(t),oe(t),Br(t,l)):(oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&qt(t),oe(t),gu(t,i,e,n,a)),null;case 27:if(bi(t),a=_.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&qt(t);else{if(!n){if(t.stateNode===null)throw Error(g(166));return oe(t),null}e=C.current,nn(t)?pc(t):(e=Zf(i,n,a),t.stateNode=e,qt(t))}return oe(t),null;case 5:if(bi(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&qt(t);else{if(!n){if(t.stateNode===null)throw Error(g(166));return oe(t),null}if(l=C.current,nn(t))pc(t);else{var s=zl(_.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?l.multiple=!0:n.size&&(l.size=n.size);break;default:l=typeof n.is=="string"?s.createElement(i,{is:n.is}):s.createElement(i)}}l[ze]=t,l[ke]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=l;e:switch(xe(l,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&qt(t)}}return oe(t),gu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&qt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(g(166));if(e=_.current,nn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Me,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[ze]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||If(e.nodeValue,a)),e||ea(t,!0)}else e=zl(e).createTextNode(n),e[ze]=t,t.stateNode=e}return oe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=nn(t),a!==null){if(e===null){if(!n)throw Error(g(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(557));e[ze]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;oe(t),e=!1}else a=zs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(g(558))}return oe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=nn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[ze]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else i=zs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),rl(t,t.updateQueue),oe(t),null);case 4:return ge(),e===null&&Bu(t.stateNode.containerInfo),oe(t),null;case 10:return Lt(t.type),oe(t),null;case 19:if(b(pe),n=t.memoizedState,n===null)return oe(t),null;if(i=(t.flags&128)!==0,l=n.rendering,l===null)if(i)ti(n,!1);else{if(de!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Pi(e),l!==null){for(t.flags|=128,ti(n,!1),e=l.updateQueue,t.updateQueue=e,rl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fc(a,e),a=a.sibling;return N(pe,pe.current&1|2),Z&&It(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Je()>gl&&(t.flags|=128,i=!0,ti(n,!1),t.lanes=4194304)}else{if(!i)if(e=Pi(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,rl(t,e),ti(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!Z)return oe(t),null}else 2*Je()-n.renderingStartTime>gl&&a!==536870912&&(t.flags|=128,i=!0,ti(n,!1),t.lanes=4194304);n.isBackwards?(l.sibling=t.child,t.child=l):(e=n.last,e!==null?e.sibling=l:t.child=l,n.last=l)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Je(),e.sibling=null,a=pe.current,N(pe,i?a&1|2:a&1),Z&&It(t,n.treeForkCount),e):(oe(t),null);case 22:case 23:return at(t),Gs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),a=t.updateQueue,a!==null&&rl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&b(wa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Lt(ve),oe(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function Qd(e,t){switch(Ts(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lt(ve),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bi(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(g(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(pe),null;case 4:return ge(),null;case 10:return Lt(t.type),null;case 22:case 23:return at(t),Gs(),e!==null&&b(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Lt(ve),null;case 25:return null;default:return null}}function Gr(e,t){switch(Ts(t),t.tag){case 3:Lt(ve),ge();break;case 26:case 27:case 5:bi(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:b(pe);break;case 10:Lt(t.type);break;case 22:case 23:at(t),Gs(),e!==null&&b(wa);break;case 24:Lt(ve)}}function ai(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var l=a.create,s=a.inst;n=l(),s.destroy=n}a=a.next}while(a!==i)}}catch(u){ee(t,t.return,u)}}function ua(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){var s=n.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,i=t;var o=a,d=u;try{d()}catch(y){ee(i,o,y)}}}n=n.next}while(n!==l)}}catch(y){ee(t,t.return,y)}}function _r(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{xc(t,a)}catch(n){ee(e,e.return,n)}}}function qr(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ee(e,t,n)}}function ni(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){ee(e,t,i)}}function Mt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){ee(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ee(e,t,i)}else a.current=null}function kr(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){ee(e,e.return,i)}}function pu(e,t,a){try{var n=e.stateNode;ph(n,e.type,a,t),n[ke]=t}catch(i){ee(e,e.return,i)}}function Fr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vu(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Rt));else if(n!==4&&(n===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(vu(e,t,a),e=e.sibling;e!==null;)vu(e,t,a),e=e.sibling}function fl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fl(e,t,a),e=e.sibling;e!==null;)fl(e,t,a),e=e.sibling}function Yr(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);xe(t,n,a),t[ze]=e,t[ke]=a}catch(l){ee(e,e.return,l)}}var kt=!1,be=!1,Au=!1,Xr=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Kd(e,t){if(e=e.containerInfo,qu=wl,e=ac(e),ms(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var s=0,u=-1,o=-1,d=0,y=0,S=e,h=null;t:for(;;){for(var p;S!==a||i!==0&&S.nodeType!==3||(u=s+i),S!==l||n!==0&&S.nodeType!==3||(o=s+n),S.nodeType===3&&(s+=S.nodeValue.length),(p=S.firstChild)!==null;)h=S,S=p;for(;;){if(S===e)break t;if(h===a&&++d===i&&(u=s),h===l&&++y===n&&(o=s),(p=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=p}a=u===-1||o===-1?null:{start:u,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(ku={focusedElem:e,selectionRange:a},wl=!1,Ne=t;Ne!==null;)if(t=Ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ne=e;else for(;Ne!==null;){switch(t=Ne,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,i=l.memoizedProps,l=l.memoizedState,n=a.stateNode;try{var z=Ba(a.type,i);e=n.getSnapshotBeforeUpdate(z,l),n.__reactInternalSnapshotBeforeUpdate=e}catch(R){ee(a,a.return,R)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Xu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(g(163))}if(e=t.sibling,e!==null){e.return=t.return,Ne=e;break}Ne=t.return}}function Zr(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Yt(e,a),n&4&&ai(5,a);break;case 1:if(Yt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ee(a,a.return,s)}else{var i=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ee(a,a.return,s)}}n&64&&_r(a),n&512&&ni(a,a.return);break;case 3:if(Yt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{xc(e,t)}catch(s){ee(a,a.return,s)}}break;case 27:t===null&&n&4&&Yr(a);case 26:case 5:Yt(e,a),t===null&&n&4&&kr(a),n&512&&ni(a,a.return);break;case 12:Yt(e,a);break;case 31:Yt(e,a),n&4&&Qr(e,a);break;case 13:Yt(e,a),n&4&&Kr(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ih.bind(null,a),Nh(e,a))));break;case 22:if(n=a.memoizedState!==null||kt,!n){t=t!==null&&t.memoizedState!==null||be,i=kt;var l=be;kt=n,(be=t)&&!l?Xt(e,a,(a.subtreeFlags&8772)!==0):Yt(e,a),kt=i,be=l}break;case 30:break;default:Yt(e,a)}}function jr(e){var t=e.alternate;t!==null&&(e.alternate=null,jr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Kl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Ye=!1;function Ft(e,t,a){for(a=a.child;a!==null;)Vr(e,t,a),a=a.sibling}function Vr(e,t,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(Cn,a)}catch{}switch(a.tag){case 26:be||Mt(a,t),Ft(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:be||Mt(a,t);var n=re,i=Ye;ha(a.type)&&(re=a.stateNode,Ye=!1),Ft(e,t,a),mi(a.stateNode),re=n,Ye=i;break;case 5:be||Mt(a,t);case 6:if(n=re,i=Ye,re=null,Ft(e,t,a),re=n,Ye=i,re!==null)if(Ye)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(a.stateNode)}catch(l){ee(a,t,l)}else try{re.removeChild(a.stateNode)}catch(l){ee(a,t,l)}break;case 18:re!==null&&(Ye?(e=re,qf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zn(e)):qf(re,a.stateNode));break;case 4:n=re,i=Ye,re=a.stateNode.containerInfo,Ye=!0,Ft(e,t,a),re=n,Ye=i;break;case 0:case 11:case 14:case 15:ua(2,a,t),be||ua(4,a,t),Ft(e,t,a);break;case 1:be||(Mt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&qr(a,t,n)),Ft(e,t,a);break;case 21:Ft(e,t,a);break;case 22:be=(n=be)||a.memoizedState!==null,Ft(e,t,a),be=n;break;default:Ft(e,t,a)}}function Qr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zn(e)}catch(a){ee(t,t.return,a)}}}function Kr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zn(e)}catch(a){ee(t,t.return,a)}}function Jd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xr),t;default:throw Error(g(435,e.tag))}}function ml(e,t){var a=Jd(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=lh.bind(null,e,n);n.then(i,i)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],l=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 27:if(ha(u.type)){re=u.stateNode,Ye=!1;break e}break;case 5:re=u.stateNode,Ye=!1;break e;case 3:case 4:re=u.stateNode.containerInfo,Ye=!0;break e}u=u.return}if(re===null)throw Error(g(160));Vr(l,s,i),re=null,Ye=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Jr(t,e),t=t.sibling}var At=null;function Jr(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),Ze(e),n&4&&(ua(3,e,e.return),ai(3,e),ua(5,e,e.return));break;case 1:Xe(t,e),Ze(e),n&512&&(be||a===null||Mt(a,a.return)),n&64&&kt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=At;if(Xe(t,e),Ze(e),n&512&&(be||a===null||Mt(a,a.return)),n&4){var l=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Dn]||l[ze]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),xe(l,n,a),l[ze]=e,Te(l),n=l;break e;case"link":var s=Pf("link","href",i).get(n+(a.href||""));if(s){for(var u=0;u<s.length;u++)if(l=s[u],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(u,1);break t}}l=i.createElement(n),xe(l,n,a),i.head.appendChild(l);break;case"meta":if(s=Pf("meta","content",i).get(n+(a.content||""))){for(u=0;u<s.length;u++)if(l=s[u],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(u,1);break t}}l=i.createElement(n),xe(l,n,a),i.head.appendChild(l);break;default:throw Error(g(468,n))}l[ze]=e,Te(l),n=l}e.stateNode=n}else Wf(i,e.type,e.stateNode);else e.stateNode=Jf(i,n,e.memoizedProps);else l!==n?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,n===null?Wf(i,e.type,e.stateNode):Jf(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&pu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),Ze(e),n&512&&(be||a===null||Mt(a,a.return)),a!==null&&n&4&&pu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),Ze(e),n&512&&(be||a===null||Mt(a,a.return)),e.flags&32){i=e.stateNode;try{Va(i,"")}catch(z){ee(e,e.return,z)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,pu(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Au=!0);break;case 6:if(Xe(t,e),Ze(e),n&4){if(e.stateNode===null)throw Error(g(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(z){ee(e,e.return,z)}}break;case 3:if(Ol=null,i=At,At=Ml(t.containerInfo),Xe(t,e),At=i,Ze(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(z){ee(e,e.return,z)}Au&&(Au=!1,Pr(e));break;case 4:n=At,At=Ml(e.stateNode.containerInfo),Xe(t,e),Ze(e),At=n;break;case 12:Xe(t,e),Ze(e);break;case 31:Xe(t,e),Ze(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ml(e,n)));break;case 13:Xe(t,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hl=Je()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ml(e,n)));break;case 22:i=e.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,d=kt,y=be;if(kt=d||i,be=y||o,Xe(t,e),be=y,kt=d,Ze(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||o||kt||be||Ga(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){o=a=t;try{if(l=o.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=o.stateNode;var S=o.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;u.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(z){ee(o,o.return,z)}}}else if(t.tag===6){if(a===null){o=t;try{o.stateNode.nodeValue=i?"":o.memoizedProps}catch(z){ee(o,o.return,z)}}}else if(t.tag===18){if(a===null){o=t;try{var p=o.stateNode;i?kf(p,!0):kf(o.stateNode,!1)}catch(z){ee(o,o.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ml(e,a))));break;case 19:Xe(t,e),Ze(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ml(e,n)));break;case 30:break;case 21:break;default:Xe(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Fr(n)){a=n;break}n=n.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var i=a.stateNode,l=yu(e);fl(e,l,i);break;case 5:var s=a.stateNode;a.flags&32&&(Va(s,""),a.flags&=-33);var u=yu(e);fl(e,u,s);break;case 3:case 4:var o=a.stateNode.containerInfo,d=yu(e);vu(e,d,o);break;default:throw Error(g(161))}}catch(y){ee(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zr(e,t.alternate,t),t=t.sibling}function Ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ua(4,t,t.return),Ga(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&qr(t,t.return,a),Ga(t);break;case 27:mi(t.stateNode);case 26:case 5:Mt(t,t.return),Ga(t);break;case 22:t.memoizedState===null&&Ga(t);break;case 30:Ga(t);break;default:Ga(t)}e=e.sibling}}function Xt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,l=t,s=l.flags;switch(l.tag){case 0:case 11:case 15:Xt(i,l,a),ai(4,l);break;case 1:if(Xt(i,l,a),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(d){ee(n,n.return,d)}if(n=l,i=n.updateQueue,i!==null){var u=n.stateNode;try{var o=i.shared.hiddenCallbacks;if(o!==null)for(i.shared.hiddenCallbacks=null,i=0;i<o.length;i++)Oc(o[i],u)}catch(d){ee(n,n.return,d)}}a&&s&64&&_r(l),ni(l,l.return);break;case 27:Yr(l);case 26:case 5:Xt(i,l,a),a&&n===null&&s&4&&kr(l),ni(l,l.return);break;case 12:Xt(i,l,a);break;case 31:Xt(i,l,a),a&&s&4&&Qr(i,l);break;case 13:Xt(i,l,a),a&&s&4&&Kr(i,l);break;case 22:l.memoizedState===null&&Xt(i,l,a),ni(l,l.return);break;case 30:break;default:Xt(i,l,a)}t=t.sibling}}function Su(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yn(a))}function bu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e))}function St(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wr(e,t,a,n),t=t.sibling}function Wr(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,n),i&2048&&ai(9,t);break;case 1:St(e,t,a,n);break;case 3:St(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yn(e)));break;case 12:if(i&2048){St(e,t,a,n),e=t.stateNode;try{var l=t.memoizedProps,s=l.id,u=l.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){ee(t,t.return,o)}}else St(e,t,a,n);break;case 31:St(e,t,a,n);break;case 13:St(e,t,a,n);break;case 23:break;case 22:l=t.stateNode,s=t.alternate,t.memoizedState!==null?l._visibility&2?St(e,t,a,n):ii(e,t):l._visibility&2?St(e,t,a,n):(l._visibility|=2,hn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Su(s,t);break;case 24:St(e,t,a,n),i&2048&&bu(t.alternate,t);break;default:St(e,t,a,n)}}function hn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,s=t,u=a,o=n,d=s.flags;switch(s.tag){case 0:case 11:case 15:hn(l,s,u,o,i),ai(8,s);break;case 23:break;case 22:var y=s.stateNode;s.memoizedState!==null?y._visibility&2?hn(l,s,u,o,i):ii(l,s):(y._visibility|=2,hn(l,s,u,o,i)),i&&d&2048&&Su(s.alternate,s);break;case 24:hn(l,s,u,o,i),i&&d&2048&&bu(s.alternate,s);break;default:hn(l,s,u,o,i)}t=t.sibling}}function ii(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:ii(a,n),i&2048&&Su(n.alternate,n);break;case 24:ii(a,n),i&2048&&bu(n.alternate,n);break;default:ii(a,n)}t=t.sibling}}var li=8192;function gn(e,t,a){if(e.subtreeFlags&li)for(e=e.child;e!==null;)$r(e,t,a),e=e.sibling}function $r(e,t,a){switch(e.tag){case 26:gn(e,t,a),e.flags&li&&e.memoizedState!==null&&Lh(a,At,e.memoizedState,e.memoizedProps);break;case 5:gn(e,t,a);break;case 3:case 4:var n=At;At=Ml(e.stateNode.containerInfo),gn(e,t,a),At=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=li,li=16777216,gn(e,t,a),li=n):gn(e,t,a));break;default:gn(e,t,a)}}function ef(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ne=n,af(n,e)}ef(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tf(e),e=e.sibling}function tf(e){switch(e.tag){case 0:case 11:case 15:si(e),e.flags&2048&&ua(9,e,e.return);break;case 3:si(e);break;case 12:si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,dl(e)):si(e);break;default:si(e)}}function dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ne=n,af(n,e)}ef(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ua(8,t,t.return),dl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,dl(t));break;default:dl(t)}e=e.sibling}}function af(e,t){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:ua(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Yn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ne=n;else e:for(a=e;Ne!==null;){n=Ne;var i=n.sibling,l=n.return;if(jr(n),n===a){Ne=null;break e}if(i!==null){i.return=l,Ne=i;break e}Ne=l}}}var Pd={getCacheForType:function(e){var t=Ce(ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ce(ve).controller.signal}},Wd=typeof WeakMap=="function"?WeakMap:Map,K=0,se=null,q=null,F=0,$=0,nt=null,oa=!1,pn=!1,Eu=!1,Zt=0,de=0,ca=0,_a=0,Tu=0,it=0,yn=0,ui=null,je=null,Nu=!1,hl=0,nf=0,gl=1/0,pl=null,ra=null,Ee=0,fa=null,vn=null,jt=0,zu=0,Mu=null,lf=null,oi=0,Cu=null;function lt(){return(K&2)!==0&&F!==0?F&-F:v.T!==null?Hu():So()}function sf(){if(it===0)if((F&536870912)===0||Z){var e=Ni;Ni<<=1,(Ni&3932160)===0&&(Ni=262144),it=e}else it=536870912;return e=tt.current,e!==null&&(e.flags|=32),it}function Ve(e,t,a){(e===se&&($===2||$===9)||e.cancelPendingCommit!==null)&&(An(e,0),ma(e,F,it,!1)),xn(e,a),((K&2)===0||e!==se)&&(e===se&&((K&2)===0&&(_a|=a),de===4&&ma(e,F,it,!1)),Ct(e))}function uf(e,t,a){if((K&6)!==0)throw Error(g(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||On(e,t),i=n?th(e,t):xu(e,t,!0),l=n;do{if(i===0){pn&&!n&&ma(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!$d(a)){i=xu(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var u=e;i=ui;var o=u.current.memoizedState.isDehydrated;if(o&&(An(u,s).flags|=256),s=xu(u,s,!1),s!==2){if(Eu&&!o){u.errorRecoveryDisabledLanes|=l,_a|=l,i=4;break e}l=je,je=i,l!==null&&(je===null?je=l:je.push.apply(je,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){An(e,0),ma(e,t,0,!0);break}e:{switch(n=e,l=i,l){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:ma(n,t,it,!oa);break e;case 2:je=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(i=hl+300-Je(),10<i)){if(ma(n,t,it,!oa),Mi(n,0,!0)!==0)break e;jt=t,n.timeoutHandle=Gf(of.bind(null,n,a,je,pl,Nu,t,it,_a,yn,oa,l,"Throttled",-0,0),i);break e}of(n,a,je,pl,Nu,t,it,_a,yn,oa,l,null,-0,0)}}break}while(!0);Ct(e)}function of(e,t,a,n,i,l,s,u,o,d,y,S,h,p){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},$r(t,l,S);var z=(l&62914560)===l?hl-Je():(l&4194048)===l?nf-Je():0;if(z=Bh(S,z),z!==null){jt=l,e.cancelPendingCommit=z(pf.bind(null,e,t,l,a,n,i,s,u,o,y,S,null,h,p)),ma(e,l,s,!d);return}}pf(e,t,l,a,n,i,s,u,o)}function $d(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],l=i.getSnapshot;i=i.value;try{if(!$e(l(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(e,t,a,n){t&=~Tu,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var l=31-We(i),s=1<<l;n[l]=-1,i&=~s}a!==0&&yo(e,a,t)}function yl(){return(K&6)===0?(ci(0),!1):!0}function Ou(){if(q!==null){if($===0)var e=q.return;else e=q,Ut=Da=null,Xs(e),cn=null,Zn=0,e=q;for(;e!==null;)Gr(e.alternate,e),e=e.return;q=null}}function An(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ah(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),jt=0,Ou(),se=e,q=a=Ht(e.current,null),F=t,$=0,nt=null,oa=!1,pn=On(e,t),Eu=!1,yn=it=Tu=_a=ca=de=0,je=ui=null,Nu=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-We(n),l=1<<i;t|=e[i],n&=~l}return Zt=t,Gi(),a}function cf(e,t){B=null,v.H=$n,t===on||t===ji?(t=Nc(),$=3):t===ws?(t=Nc(),$=4):$=t===su?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,q===null&&(de=1,sl(e,rt(t,e.current)))}function rf(){var e=tt.current;return e===null?!0:(F&4194048)===F?ht===null:(F&62914560)===F||(F&536870912)!==0?e===ht:!1}function ff(){var e=v.H;return v.H=$n,e===null?$n:e}function mf(){var e=v.A;return v.A=Pd,e}function vl(){de=4,oa||(F&4194048)!==F&&tt.current!==null||(pn=!0),(ca&134217727)===0&&(_a&134217727)===0||se===null||ma(se,F,it,!1)}function xu(e,t,a){var n=K;K|=2;var i=ff(),l=mf();(se!==e||F!==t)&&(pl=null,An(e,t)),t=!1;var s=de;e:do try{if($!==0&&q!==null){var u=q,o=nt;switch($){case 8:Ou(),s=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var d=$;if($=0,nt=null,Sn(e,u,o,d),a&&pn){s=0;break e}break;default:d=$,$=0,nt=null,Sn(e,u,o,d)}}eh(),s=de;break}catch(y){cf(e,y)}while(!0);return t&&e.shellSuspendCounter++,Ut=Da=null,K=n,v.H=i,v.A=l,q===null&&(se=null,F=0,Gi()),s}function eh(){for(;q!==null;)df(q)}function th(e,t){var a=K;K|=2;var n=ff(),i=mf();se!==e||F!==t?(pl=null,gl=Je()+500,An(e,t)):pn=On(e,t);e:do try{if($!==0&&q!==null){t=q;var l=nt;t:switch($){case 1:$=0,nt=null,Sn(e,t,l,1);break;case 2:case 9:if(Ec(l)){$=0,nt=null,hf(t);break}t=function(){$!==2&&$!==9||se!==e||($=7),Ct(e)},l.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Ec(l)?($=0,nt=null,hf(t)):($=0,nt=null,Sn(e,t,l,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var u=q;if(s?$f(s):u.stateNode.complete){$=0,nt=null;var o=u.sibling;if(o!==null)q=o;else{var d=u.return;d!==null?(q=d,Al(d)):q=null}break t}}$=0,nt=null,Sn(e,t,l,5);break;case 6:$=0,nt=null,Sn(e,t,l,6);break;case 8:Ou(),de=6;break e;default:throw Error(g(462))}}ah();break}catch(y){cf(e,y)}while(!0);return Ut=Da=null,v.H=n,v.A=i,K=a,q!==null?0:(se=null,F=0,Gi(),de)}function ah(){for(;q!==null&&!zm();)df(q)}function df(e){var t=Lr(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?Al(e):q=t}function hf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Dr(a,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Dr(a,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:Xs(t);default:Gr(a,t),t=q=fc(t,Zt),t=Lr(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?Al(e):q=t}function Sn(e,t,a,n){Ut=Da=null,Xs(t),cn=null,Zn=0;var i=t.return;try{if(Xd(e,i,t,a,F)){de=1,sl(e,rt(a,e.current)),q=null;return}}catch(l){if(i!==null)throw q=i,l;de=1,sl(e,rt(a,e.current)),q=null;return}t.flags&32768?(Z||n===1?e=!0:pn||(F&536870912)!==0?e=!1:(oa=e=!0,(n===2||n===9||n===3||n===6)&&(n=tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),gf(t,e)):Al(t)}function Al(e){var t=e;do{if((t.flags&32768)!==0){gf(t,oa);return}e=t.return;var a=Vd(t.alternate,t,Zt);if(a!==null){q=a;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);de===0&&(de=5)}function gf(e,t){do{var a=Qd(e.alternate,e);if(a!==null){a.flags&=32767,q=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=a}while(e!==null);de=6,q=null}function pf(e,t,a,n,i,l,s,u,o){e.cancelPendingCommit=null;do Sl();while(Ee!==0);if((K&6)!==0)throw Error(g(327));if(t!==null){if(t===e.current)throw Error(g(177));if(l=t.lanes|t.childLanes,l|=ys,Um(e,a,l,s,u,o),e===se&&(q=se=null,F=0),vn=t,fa=e,jt=a,zu=l,Mu=i,lf=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sh(Ei,function(){return bf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=v.T,v.T=null,i=T.p,T.p=2,s=K,K|=4;try{Kd(e,t,a)}finally{K=s,T.p=i,v.T=n}}Ee=1,yf(),vf(),Af()}}function yf(){if(Ee===1){Ee=0;var e=fa,t=vn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var n=T.p;T.p=2;var i=K;K|=4;try{Jr(t,e);var l=ku,s=ac(e.containerInfo),u=l.focusedElem,o=l.selectionRange;if(s!==u&&u&&u.ownerDocument&&tc(u.ownerDocument.documentElement,u)){if(o!==null&&ms(u)){var d=o.start,y=o.end;if(y===void 0&&(y=d),"selectionStart"in u)u.selectionStart=d,u.selectionEnd=Math.min(y,u.value.length);else{var S=u.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var p=h.getSelection(),z=u.textContent.length,R=Math.min(o.start,z),ie=o.end===void 0?R:Math.min(o.end,z);!p.extend&&R>ie&&(s=ie,ie=R,R=s);var f=ec(u,R),c=ec(u,ie);if(f&&c&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==c.node||p.focusOffset!==c.offset)){var m=S.createRange();m.setStart(f.node,f.offset),p.removeAllRanges(),R>ie?(p.addRange(m),p.extend(c.node,c.offset)):(m.setEnd(c.node,c.offset),p.addRange(m))}}}}for(S=[],p=u;p=p.parentNode;)p.nodeType===1&&S.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<S.length;u++){var A=S[u];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}wl=!!qu,ku=qu=null}finally{K=i,T.p=n,v.T=a}}e.current=t,Ee=2}}function vf(){if(Ee===2){Ee=0;var e=fa,t=vn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var n=T.p;T.p=2;var i=K;K|=4;try{Zr(e,t.alternate,t)}finally{K=i,T.p=n,v.T=a}}Ee=3}}function Af(){if(Ee===4||Ee===3){Ee=0,Mm();var e=fa,t=vn,a=jt,n=lf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ee=5:(Ee=0,vn=fa=null,Sf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ra=null),Vl(a),t=t.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(Cn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=v.T,i=T.p,T.p=2,v.T=null;try{for(var l=e.onRecoverableError,s=0;s<n.length;s++){var u=n[s];l(u.value,{componentStack:u.stack})}}finally{v.T=t,T.p=i}}(jt&3)!==0&&Sl(),Ct(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Cu?oi++:(oi=0,Cu=e):oi=0,ci(0)}}function Sf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yn(t)))}function Sl(){return yf(),vf(),Af(),bf()}function bf(){if(Ee!==5)return!1;var e=fa,t=zu;zu=0;var a=Vl(jt),n=v.T,i=T.p;try{T.p=32>a?32:a,v.T=null,a=Mu,Mu=null;var l=fa,s=jt;if(Ee=0,vn=fa=null,jt=0,(K&6)!==0)throw Error(g(331));var u=K;if(K|=4,tf(l.current),Wr(l,l.current,s,a),K=u,ci(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(Cn,l)}catch{}return!0}finally{T.p=i,v.T=n,Sf(e,t)}}function Ef(e,t,a){t=rt(a,t),t=lu(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(xn(e,2),Ct(e))}function ee(e,t,a){if(e.tag===3)Ef(e,e,a);else for(;t!==null;){if(t.tag===3){Ef(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ra===null||!ra.has(n))){e=rt(a,e),a=Er(2),n=ia(t,a,2),n!==null&&(Tr(a,n,t,e),xn(n,2),Ct(n));break}}t=t.return}}function Du(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Wd;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Eu=!0,i.add(a),e=nh.bind(null,e,t,a),t.then(e,e))}function nh(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,se===e&&(F&a)===a&&(de===4||de===3&&(F&62914560)===F&&300>Je()-hl?(K&2)===0&&An(e,0):Tu|=a,yn===F&&(yn=0)),Ct(e)}function Tf(e,t){t===0&&(t=po()),e=Ca(e,t),e!==null&&(xn(e,t),Ct(e))}function ih(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Tf(e,a)}function lh(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(g(314))}n!==null&&n.delete(t),Tf(e,a)}function sh(e,t){return Yl(e,t)}var bl=null,bn=null,Ru=!1,El=!1,wu=!1,da=0;function Ct(e){e!==bn&&e.next===null&&(bn===null?bl=bn=e:bn=bn.next=e),El=!0,Ru||(Ru=!0,oh())}function ci(e,t){if(!wu&&El){wu=!0;do for(var a=!1,n=bl;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var s=n.suspendedLanes,u=n.pingedLanes;l=(1<<31-We(42|e)+1)-1,l&=i&~(s&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,Cf(n,l))}else l=F,l=Mi(n,n===se?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||On(n,l)||(a=!0,Cf(n,l));n=n.next}while(a);wu=!1}}function uh(){Nf()}function Nf(){El=Ru=!1;var e=0;da!==0&&vh()&&(e=da);for(var t=Je(),a=null,n=bl;n!==null;){var i=n.next,l=zf(n,t);l===0?(n.next=null,a===null?bl=i:a.next=i,i===null&&(bn=a)):(a=n,(e!==0||(l&3)!==0)&&(El=!0)),n=i}Ee!==0&&Ee!==5||ci(e),da!==0&&(da=0)}function zf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-We(l),u=1<<s,o=i[s];o===-1?((u&a)===0||(u&n)!==0)&&(i[s]=Im(u,t)):o<=t&&(e.expiredLanes|=u),l&=~u}if(t=se,a=F,a=Mi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Xl(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||On(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Xl(n),Vl(a)){case 2:case 8:a=ho;break;case 32:a=Ei;break;case 268435456:a=go;break;default:a=Ei}return n=Mf.bind(null,e),a=Yl(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Xl(n),e.callbackPriority=2,e.callbackNode=null,2}function Mf(e,t){if(Ee!==0&&Ee!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sl()&&e.callbackNode!==a)return null;var n=F;return n=Mi(e,e===se?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(uf(e,n,t),zf(e,Je()),e.callbackNode!=null&&e.callbackNode===a?Mf.bind(null,e):null)}function Cf(e,t){if(Sl())return null;uf(e,t,!0)}function oh(){Sh(function(){(K&6)!==0?Yl(mo,uh):Nf()})}function Hu(){if(da===0){var e=sn;e===0&&(e=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),da=e}return da}function Of(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Di(""+e)}function xf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ch(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var l=Of((i[ke]||null).action),s=n.submitter;s&&(t=(t=s[ke]||null)?Of(t.formAction):s.getAttribute("formAction"),t!==null&&(l=t,s=null));var u=new Ii("action","action",null,n,i);e.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(da!==0){var o=s?xf(i,s):new FormData(i);$s(a,{pending:!0,data:o,method:i.method,action:l},null,o)}}else typeof l=="function"&&(u.preventDefault(),o=s?xf(i,s):new FormData(i),$s(a,{pending:!0,data:o,method:i.method,action:l},l,o))},currentTarget:i}]})}}for(var Iu=0;Iu<ps.length;Iu++){var Uu=ps[Iu],rh=Uu.toLowerCase(),fh=Uu[0].toUpperCase()+Uu.slice(1);vt(rh,"on"+fh)}vt(lc,"onAnimationEnd"),vt(sc,"onAnimationIteration"),vt(uc,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(Cd,"onTransitionRun"),vt(Od,"onTransitionStart"),vt(xd,"onTransitionCancel"),vt(oc,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ri));function Df(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var s=n.length-1;0<=s;s--){var u=n[s],o=u.instance,d=u.currentTarget;if(u=u.listener,o!==l&&i.isPropagationStopped())break e;l=u,i.currentTarget=d;try{l(i)}catch(y){Bi(y)}i.currentTarget=null,l=o}else for(s=0;s<n.length;s++){if(u=n[s],o=u.instance,d=u.currentTarget,u=u.listener,o!==l&&i.isPropagationStopped())break e;l=u,i.currentTarget=d;try{l(i)}catch(y){Bi(y)}i.currentTarget=null,l=o}}}}function k(e,t){var a=t[Ql];a===void 0&&(a=t[Ql]=new Set);var n=e+"__bubble";a.has(n)||(Rf(t,e,2,!1),a.add(n))}function Lu(e,t,a){var n=0;t&&(n|=4),Rf(a,e,n,t)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Bu(e){if(!e[Tl]){e[Tl]=!0,To.forEach(function(a){a!=="selectionchange"&&(mh.has(a)||Lu(a,!1,e),Lu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tl]||(t[Tl]=!0,Lu("selectionchange",!1,t))}}function Rf(e,t,a,n){switch(sm(t)){case 2:var i=qh;break;case 8:i=kh;break;default:i=Wu}a=i.bind(null,t,a,e),i=void 0,!ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Gu(e,t,a,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var u=n.stateNode.containerInfo;if(u===i)break;if(s===4)for(s=n.return;s!==null;){var o=s.tag;if((o===3||o===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;u!==null;){if(s=Fa(u),s===null)return;if(o=s.tag,o===5||o===6||o===26||o===27){n=l=s;continue e}u=u.parentNode}}n=n.return}Uo(function(){var d=l,y=ts(a),S=[];e:{var h=cc.get(e);if(h!==void 0){var p=Ii,z=e;switch(e){case"keypress":if(wi(a)===0)break e;case"keydown":case"keyup":p=ld;break;case"focusin":z="focus",p=us;break;case"focusout":z="blur",p=us;break;case"beforeblur":case"afterblur":p=us;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=od;break;case lc:case sc:case uc:p=Jm;break;case oc:p=rd;break;case"scroll":case"scrollend":p=Zm;break;case"wheel":p=md;break;case"copy":case"cut":case"paste":p=Wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qo;break;case"toggle":case"beforetoggle":p=hd}var R=(t&4)!==0,ie=!R&&(e==="scroll"||e==="scrollend"),f=R?h!==null?h+"Capture":null:h;R=[];for(var c=d,m;c!==null;){var A=c;if(m=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||m===null||f===null||(A=wn(c,f),A!=null&&R.push(fi(c,A,m))),ie)break;c=c.return}0<R.length&&(h=new p(h,z,null,a,y),S.push({event:h,listeners:R}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&a!==es&&(z=a.relatedTarget||a.fromElement)&&(Fa(z)||z[ka]))break e;if((p||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,p?(z=a.relatedTarget||a.toElement,p=d,z=z?Fa(z):null,z!==null&&(ie=Q(z),R=z.tag,z!==ie||R!==5&&R!==27&&R!==6)&&(z=null)):(p=null,z=d),p!==z)){if(R=Go,A="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(R=qo,A="onPointerLeave",f="onPointerEnter",c="pointer"),ie=p==null?h:Rn(p),m=z==null?h:Rn(z),h=new R(A,c+"leave",p,a,y),h.target=ie,h.relatedTarget=m,A=null,Fa(y)===d&&(R=new R(f,c+"enter",z,a,y),R.target=m,R.relatedTarget=ie,A=R),ie=A,p&&z)t:{for(R=dh,f=p,c=z,m=0,A=f;A;A=R(A))m++;A=0;for(var x=c;x;x=R(x))A++;for(;0<m-A;)f=R(f),m--;for(;0<A-m;)c=R(c),A--;for(;m--;){if(f===c||c!==null&&f===c.alternate){R=f;break t}f=R(f),c=R(c)}R=null}else R=null;p!==null&&wf(S,h,p,R,!1),z!==null&&ie!==null&&wf(S,ie,z,R,!0)}}e:{if(h=d?Rn(d):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var j=Qo;else if(jo(h))if(Ko)j=Nd;else{j=Ed;var O=bd}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?d&&$l(d.elementType)&&(j=Qo):j=Td;if(j&&(j=j(e,d))){Vo(S,j,a,y);break e}O&&O(e,h,d),e==="focusout"&&d&&h.type==="number"&&d.memoizedProps.value!=null&&Wl(h,"number",h.value)}switch(O=d?Rn(d):window,e){case"focusin":(jo(O)||O.contentEditable==="true")&&(Pa=O,ds=d,qn=null);break;case"focusout":qn=ds=Pa=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,nc(S,a,y);break;case"selectionchange":if(Md)break;case"keydown":case"keyup":nc(S,a,y)}var G;if(cs)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Ja?Xo(e,a)&&(Y="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Y="onCompositionStart");Y&&(ko&&a.locale!=="ko"&&(Ja||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Ja&&(G=Lo()):(Pt=y,is="value"in Pt?Pt.value:Pt.textContent,Ja=!0)),O=Nl(d,Y),0<O.length&&(Y=new _o(Y,e,null,a,y),S.push({event:Y,listeners:O}),G?Y.data=G:(G=Zo(a),G!==null&&(Y.data=G)))),(G=pd?yd(e,a):vd(e,a))&&(Y=Nl(d,"onBeforeInput"),0<Y.length&&(O=new _o("onBeforeInput","beforeinput",null,a,y),S.push({event:O,listeners:Y}),O.data=G)),ch(S,e,d,a,y)}Df(S,t)})}function fi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Nl(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=wn(e,a),i!=null&&n.unshift(fi(e,i,l)),i=wn(e,t),i!=null&&n.push(fi(e,i,l))),e.tag===3)return n;e=e.return}return[]}function dh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wf(e,t,a,n,i){for(var l=t._reactName,s=[];a!==null&&a!==n;){var u=a,o=u.alternate,d=u.stateNode;if(u=u.tag,o!==null&&o===n)break;u!==5&&u!==26&&u!==27||d===null||(o=d,i?(d=wn(a,l),d!=null&&s.unshift(fi(a,d,o))):i||(d=wn(a,l),d!=null&&s.push(fi(a,d,o)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var hh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function Hf(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(gh,"")}function If(e,t){return t=Hf(t),Hf(e)===t}function ne(e,t,a,n,i,l){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Va(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Va(e,""+n);break;case"className":Oi(e,"class",n);break;case"tabIndex":Oi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(e,a,n);break;case"style":Ho(e,n,l);break;case"data":if(t!=="object"){Oi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Di(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&ne(e,t,"name",i.name,i,null),ne(e,t,"formEncType",i.formEncType,i,null),ne(e,t,"formMethod",i.formMethod,i,null),ne(e,t,"formTarget",i.formTarget,i,null)):(ne(e,t,"encType",i.encType,i,null),ne(e,t,"method",i.method,i,null),ne(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Di(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Rt);break;case"onScroll":n!=null&&k("scroll",e);break;case"onScrollEnd":n!=null&&k("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(g(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Di(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":k("beforetoggle",e),k("toggle",e),Ci(e,"popover",n);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ci(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ym.get(a)||a,Ci(e,a,n))}}function _u(e,t,a,n,i,l){switch(a){case"style":Ho(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(g(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(g(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Va(e,n):(typeof n=="number"||typeof n=="bigint")&&Va(e,""+n);break;case"onScroll":n!=null&&k("scroll",e);break;case"onScrollEnd":n!=null&&k("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!No.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),l=e[ke]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ci(e,a,n)}}}function xe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":k("error",e),k("load",e);var n=!1,i=!1,l;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];if(s!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:ne(e,t,l,s,a,null)}}i&&ne(e,t,"srcSet",a.srcSet,a,null),n&&ne(e,t,"src",a.src,a,null);return;case"input":k("invalid",e);var u=l=s=i=null,o=null,d=null;for(n in a)if(a.hasOwnProperty(n)){var y=a[n];if(y!=null)switch(n){case"name":i=y;break;case"type":s=y;break;case"checked":o=y;break;case"defaultChecked":d=y;break;case"value":l=y;break;case"defaultValue":u=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,t));break;default:ne(e,t,n,y,a,null)}}xo(e,l,u,o,d,s,i,!1);return;case"select":k("invalid",e),n=s=l=null;for(i in a)if(a.hasOwnProperty(i)&&(u=a[i],u!=null))switch(i){case"value":l=u;break;case"defaultValue":s=u;break;case"multiple":n=u;default:ne(e,t,i,u,a,null)}t=l,a=s,e.multiple=!!n,t!=null?ja(e,!!n,t,!1):a!=null&&ja(e,!!n,a,!0);return;case"textarea":k("invalid",e),l=i=n=null;for(s in a)if(a.hasOwnProperty(s)&&(u=a[s],u!=null))switch(s){case"value":n=u;break;case"defaultValue":i=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(g(91));break;default:ne(e,t,s,u,a,null)}Ro(e,n,i,l);return;case"option":for(o in a)if(a.hasOwnProperty(o)&&(n=a[o],n!=null))switch(o){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ne(e,t,o,n,a,null)}return;case"dialog":k("beforetoggle",e),k("toggle",e),k("cancel",e),k("close",e);break;case"iframe":case"object":k("load",e);break;case"video":case"audio":for(n=0;n<ri.length;n++)k(ri[n],e);break;case"image":k("error",e),k("load",e);break;case"details":k("toggle",e);break;case"embed":case"source":case"link":k("error",e),k("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(n=a[d],n!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:ne(e,t,d,n,a,null)}return;default:if($l(t)){for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!==void 0&&_u(e,t,y,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&ne(e,t,u,n,a,null))}function ph(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,u=null,o=null,d=null,y=null;for(p in a){var S=a[p];if(a.hasOwnProperty(p)&&S!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":o=S;default:n.hasOwnProperty(p)||ne(e,t,p,null,n,S)}}for(var h in n){var p=n[h];if(S=a[h],n.hasOwnProperty(h)&&(p!=null||S!=null))switch(h){case"type":l=p;break;case"name":i=p;break;case"checked":d=p;break;case"defaultChecked":y=p;break;case"value":s=p;break;case"defaultValue":u=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(g(137,t));break;default:p!==S&&ne(e,t,h,p,n,S)}}Pl(e,s,u,o,d,y,l,i);return;case"select":p=s=u=h=null;for(l in a)if(o=a[l],a.hasOwnProperty(l)&&o!=null)switch(l){case"value":break;case"multiple":p=o;default:n.hasOwnProperty(l)||ne(e,t,l,null,n,o)}for(i in n)if(l=n[i],o=a[i],n.hasOwnProperty(i)&&(l!=null||o!=null))switch(i){case"value":h=l;break;case"defaultValue":u=l;break;case"multiple":s=l;default:l!==o&&ne(e,t,i,l,n,o)}t=u,a=s,n=p,h!=null?ja(e,!!a,h,!1):!!n!=!!a&&(t!=null?ja(e,!!a,t,!0):ja(e,!!a,a?[]:"",!1));return;case"textarea":p=h=null;for(u in a)if(i=a[u],a.hasOwnProperty(u)&&i!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ne(e,t,u,null,n,i)}for(s in n)if(i=n[s],l=a[s],n.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":h=i;break;case"defaultValue":p=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(g(91));break;default:i!==l&&ne(e,t,s,i,n,l)}Do(e,h,p);return;case"option":for(var z in a)if(h=a[z],a.hasOwnProperty(z)&&h!=null&&!n.hasOwnProperty(z))switch(z){case"selected":e.selected=!1;break;default:ne(e,t,z,null,n,h)}for(o in n)if(h=n[o],p=a[o],n.hasOwnProperty(o)&&h!==p&&(h!=null||p!=null))switch(o){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ne(e,t,o,h,n,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var R in a)h=a[R],a.hasOwnProperty(R)&&h!=null&&!n.hasOwnProperty(R)&&ne(e,t,R,null,n,h);for(d in n)if(h=n[d],p=a[d],n.hasOwnProperty(d)&&h!==p&&(h!=null||p!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(g(137,t));break;default:ne(e,t,d,h,n,p)}return;default:if($l(t)){for(var ie in a)h=a[ie],a.hasOwnProperty(ie)&&h!==void 0&&!n.hasOwnProperty(ie)&&_u(e,t,ie,void 0,n,h);for(y in n)h=n[y],p=a[y],!n.hasOwnProperty(y)||h===p||h===void 0&&p===void 0||_u(e,t,y,h,n,p);return}}for(var f in a)h=a[f],a.hasOwnProperty(f)&&h!=null&&!n.hasOwnProperty(f)&&ne(e,t,f,null,n,h);for(S in n)h=n[S],p=a[S],!n.hasOwnProperty(S)||h===p||h==null&&p==null||ne(e,t,S,h,n,p)}function Uf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],l=i.transferSize,s=i.initiatorType,u=i.duration;if(l&&u&&Uf(s)){for(s=0,u=i.responseEnd,n+=1;n<a.length;n++){var o=a[n],d=o.startTime;if(d>u)break;var y=o.transferSize,S=o.initiatorType;y&&Uf(S)&&(o=o.responseEnd,s+=y*(o<u?1:(u-d)/(o-d)))}if(--n,t+=8*(l+s)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qu=null,ku=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function Lf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yu=null;function vh(){var e=window.event;return e&&e.type==="popstate"?e===Yu?!1:(Yu=e,!0):(Yu=null,!1)}var Gf=typeof setTimeout=="function"?setTimeout:void 0,Ah=typeof clearTimeout=="function"?clearTimeout:void 0,_f=typeof Promise=="function"?Promise:void 0,Sh=typeof queueMicrotask=="function"?queueMicrotask:typeof _f<"u"?function(e){return _f.resolve(null).then(e).catch(bh)}:Gf;function bh(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function qf(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),zn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")mi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mi(a);for(var l=a.firstChild;l;){var s=l.nextSibling,u=l.nodeName;l[Dn]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=s}}else a==="body"&&mi(e.ownerDocument.body);a=i}while(a);zn(t)}function kf(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Xu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xu(a),Kl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Eh(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Dn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=gt(e.nextSibling),e===null)break}return null}function Th(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gt(e.nextSibling),e===null))return null;return e}function Ff(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gt(e.nextSibling),e===null))return null;return e}function Zu(e){return e.data==="$?"||e.data==="$~"}function ju(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Nh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Vu=null;function Yf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return gt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Zf(e,t,a){switch(t=zl(a),e){case"html":if(e=t.documentElement,!e)throw Error(g(452));return e;case"head":if(e=t.head,!e)throw Error(g(453));return e;case"body":if(e=t.body,!e)throw Error(g(454));return e;default:throw Error(g(451))}}function mi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Kl(e)}var pt=new Map,jf=new Set;function Ml(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vt=T.d;T.d={f:zh,r:Mh,D:Ch,C:Oh,L:xh,m:Dh,X:wh,S:Rh,M:Hh};function zh(){var e=Vt.f(),t=yl();return e||t}function Mh(e){var t=Ya(e);t!==null&&t.tag===5&&t.type==="form"?or(t):Vt.r(e)}var En=typeof document>"u"?null:document;function Vf(e,t,a){var n=En;if(n&&typeof t=="string"&&t){var i=ot(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),jf.has(i)||(jf.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),xe(t,"link",e),Te(t),n.head.appendChild(t)))}}function Ch(e){Vt.D(e),Vf("dns-prefetch",e,null)}function Oh(e,t){Vt.C(e,t),Vf("preconnect",e,t)}function xh(e,t,a){Vt.L(e,t,a);var n=En;if(n&&e&&t){var i='link[rel="preload"][as="'+ot(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ot(a.imageSizes)+'"]')):i+='[href="'+ot(e)+'"]';var l=i;switch(t){case"style":l=Tn(e);break;case"script":l=Nn(e)}pt.has(l)||(e=H({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),pt.set(l,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(di(l))||t==="script"&&n.querySelector(hi(l))||(t=n.createElement("link"),xe(t,"link",e),Te(t),n.head.appendChild(t)))}}function Dh(e,t){Vt.m(e,t);var a=En;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ot(n)+'"][href="'+ot(e)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Nn(e)}if(!pt.has(l)&&(e=H({rel:"modulepreload",href:e},t),pt.set(l,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hi(l)))return}n=a.createElement("link"),xe(n,"link",e),Te(n),a.head.appendChild(n)}}}function Rh(e,t,a){Vt.S(e,t,a);var n=En;if(n&&e){var i=Xa(n).hoistableStyles,l=Tn(e);t=t||"default";var s=i.get(l);if(!s){var u={loading:0,preload:null};if(s=n.querySelector(di(l)))u.loading=5;else{e=H({rel:"stylesheet",href:e,"data-precedence":t},a),(a=pt.get(l))&&Qu(e,a);var o=s=n.createElement("link");Te(o),xe(o,"link",e),o._p=new Promise(function(d,y){o.onload=d,o.onerror=y}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Cl(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:u},i.set(l,s)}}}function wh(e,t){Vt.X(e,t);var a=En;if(a&&e){var n=Xa(a).hoistableScripts,i=Nn(e),l=n.get(i);l||(l=a.querySelector(hi(i)),l||(e=H({src:e,async:!0},t),(t=pt.get(i))&&Ku(e,t),l=a.createElement("script"),Te(l),xe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Hh(e,t){Vt.M(e,t);var a=En;if(a&&e){var n=Xa(a).hoistableScripts,i=Nn(e),l=n.get(i);l||(l=a.querySelector(hi(i)),l||(e=H({src:e,async:!0,type:"module"},t),(t=pt.get(i))&&Ku(e,t),l=a.createElement("script"),Te(l),xe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Qf(e,t,a,n){var i=(i=_.current)?Ml(i):null;if(!i)throw Error(g(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tn(a.href),a=Xa(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tn(a.href);var l=Xa(i).hoistableStyles,s=l.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=i.querySelector(di(e)))&&!l._p&&(s.instance=l,s.state.loading=5),pt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pt.set(e,a),l||Ih(i,e,a,s.state))),t&&n===null)throw Error(g(528,""));return s}if(t&&n!==null)throw Error(g(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nn(a),a=Xa(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,e))}}function Tn(e){return'href="'+ot(e)+'"'}function di(e){return'link[rel="stylesheet"]['+e+"]"}function Kf(e){return H({},e,{"data-precedence":e.precedence,precedence:null})}function Ih(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),xe(t,"link",a),Te(t),e.head.appendChild(t))}function Nn(e){return'[src="'+ot(e)+'"]'}function hi(e){return"script[async]"+e}function Jf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ot(a.href)+'"]');if(n)return t.instance=n,Te(n),n;var i=H({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Te(n),xe(n,"style",i),Cl(n,a.precedence,e),t.instance=n;case"stylesheet":i=Tn(a.href);var l=e.querySelector(di(i));if(l)return t.state.loading|=4,t.instance=l,Te(l),l;n=Kf(a),(i=pt.get(i))&&Qu(n,i),l=(e.ownerDocument||e).createElement("link"),Te(l);var s=l;return s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),xe(l,"link",n),t.state.loading|=4,Cl(l,a.precedence,e),t.instance=l;case"script":return l=Nn(a.src),(i=e.querySelector(hi(l)))?(t.instance=i,Te(i),i):(n=a,(i=pt.get(l))&&(n=H({},a),Ku(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Te(i),xe(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Cl(n,a.precedence,e));return t.instance}function Cl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,s=0;s<n.length;s++){var u=n[s];if(u.dataset.precedence===t)l=u;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Qu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ku(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ol=null;function Pf(e,t,a){if(Ol===null){var n=new Map,i=Ol=new Map;i.set(a,n)}else i=Ol,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var l=a[i];if(!(l[Dn]||l[ze]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(t)||"";s=e+s;var u=n.get(s);u?u.push(l):n.set(s,[l])}}return n}function Wf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Uh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $f(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Lh(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Tn(n.href),l=t.querySelector(di(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,Te(l);return}l=t.ownerDocument||t,n=Kf(n),(i=pt.get(i))&&Qu(n,i),l=l.createElement("link"),Te(l);var s=l;s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),xe(l,"link",n),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=xl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ju=0;function Bh(e,t){return e.stylesheets&&e.count===0&&Rl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Rl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Ju===0&&(Ju=62500*yh());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Ju?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dl=null;function Rl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dl=new Map,t.forEach(Gh,e),Dl=null,xl.call(e))}function Gh(e,t){if(!(t.state.loading&4)){var a=Dl.get(e);if(a)var n=a.get(null);else{a=new Map,Dl.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}i=t.instance,s=i.getAttribute("data-precedence"),l=a.get(s)||n,l===n&&a.set(null,i),a.set(s,i),this.count++,n=xl.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var gi={$$typeof:De,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function _h(e,t,a,n,i,l,s,u,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.hiddenUpdates=Zl(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function em(e,t,a,n,i,l,s,u,o,d,y,S){return e=new _h(e,t,a,s,o,d,y,S,u),t=1,l===!0&&(t|=24),l=et(3,null,null,t),e.current=l,l.stateNode=e,t=xs(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:n,isDehydrated:a,cache:t},Hs(l),e}function tm(e){return e?(e=en,e):en}function am(e,t,a,n,i,l){i=tm(i),n.context===null?n.context=i:n.pendingContext=i,n=na(t),n.payload={element:a},l=l===void 0?null:l,l!==null&&(n.callback=l),a=ia(e,n,t),a!==null&&(Ve(a,e,t),Vn(a,e,t))}function nm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Pu(e,t){nm(e,t),(e=e.alternate)&&nm(e,t)}function im(e){if(e.tag===13||e.tag===31){var t=Ca(e,67108864);t!==null&&Ve(t,e,67108864),Pu(e,67108864)}}function lm(e){if(e.tag===13||e.tag===31){var t=lt();t=jl(t);var a=Ca(e,t);a!==null&&Ve(a,e,t),Pu(e,t)}}var wl=!0;function qh(e,t,a,n){var i=v.T;v.T=null;var l=T.p;try{T.p=2,Wu(e,t,a,n)}finally{T.p=l,v.T=i}}function kh(e,t,a,n){var i=v.T;v.T=null;var l=T.p;try{T.p=8,Wu(e,t,a,n)}finally{T.p=l,v.T=i}}function Wu(e,t,a,n){if(wl){var i=$u(n);if(i===null)Gu(e,t,n,Hl,a),um(e,n);else if(Yh(i,e,t,a,n))n.stopPropagation();else if(um(e,n),t&4&&-1<Fh.indexOf(e)){for(;i!==null;){var l=Ya(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Ea(l.pendingLanes);if(s!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var o=1<<31-We(s);u.entanglements[1]|=o,s&=~o}Ct(l),(K&6)===0&&(gl=Je()+500,ci(0))}}break;case 31:case 13:u=Ca(l,2),u!==null&&Ve(u,l,2),yl(),Pu(l,2)}if(l=$u(n),l===null&&Gu(e,t,n,Hl,a),l===i)break;i=l}i!==null&&n.stopPropagation()}else Gu(e,t,n,null,a)}}function $u(e){return e=ts(e),eo(e)}var Hl=null;function eo(e){if(Hl=null,e=Fa(e),e!==null){var t=Q(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=he(t),e!==null)return e;e=null}else if(a===31){if(e=we(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hl=e,null}function sm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cm()){case mo:return 2;case ho:return 8;case Ei:case Om:return 32;case go:return 268435456;default:return 32}default:return 32}}var to=!1,ga=null,pa=null,ya=null,pi=new Map,yi=new Map,va=[],Fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function um(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function vi(e,t,a,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Ya(t),t!==null&&im(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yh(e,t,a,n,i){switch(t){case"focusin":return ga=vi(ga,e,t,a,n,i),!0;case"dragenter":return pa=vi(pa,e,t,a,n,i),!0;case"mouseover":return ya=vi(ya,e,t,a,n,i),!0;case"pointerover":var l=i.pointerId;return pi.set(l,vi(pi.get(l)||null,e,t,a,n,i)),!0;case"gotpointercapture":return l=i.pointerId,yi.set(l,vi(yi.get(l)||null,e,t,a,n,i)),!0}return!1}function om(e){var t=Fa(e.target);if(t!==null){var a=Q(t);if(a!==null){if(t=a.tag,t===13){if(t=he(a),t!==null){e.blockedOn=t,bo(e.priority,function(){lm(a)});return}}else if(t===31){if(t=we(a),t!==null){e.blockedOn=t,bo(e.priority,function(){lm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Il(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=$u(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);es=n,a.target.dispatchEvent(n),es=null}else return t=Ya(a),t!==null&&im(t),e.blockedOn=a,!1;t.shift()}return!0}function cm(e,t,a){Il(e)&&a.delete(t)}function Xh(){to=!1,ga!==null&&Il(ga)&&(ga=null),pa!==null&&Il(pa)&&(pa=null),ya!==null&&Il(ya)&&(ya=null),pi.forEach(cm),yi.forEach(cm)}function Ul(e,t){e.blockedOn===t&&(e.blockedOn=null,to||(to=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,Xh)))}var Ll=null;function rm(e){Ll!==e&&(Ll=e,M.unstable_scheduleCallback(M.unstable_NormalPriority,function(){Ll===e&&(Ll=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(eo(n||a)===null)continue;break}var l=Ya(a);l!==null&&(e.splice(t,3),t-=3,$s(l,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function zn(e){function t(o){return Ul(o,e)}ga!==null&&Ul(ga,e),pa!==null&&Ul(pa,e),ya!==null&&Ul(ya,e),pi.forEach(t),yi.forEach(t);for(var a=0;a<va.length;a++){var n=va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<va.length&&(a=va[0],a.blockedOn===null);)om(a),a.blockedOn===null&&va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],l=a[n+1],s=i[ke]||null;if(typeof l=="function")s||rm(a);else if(s){var u=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[ke]||null)u=s.formAction;else if(eo(i)!==null)continue}else u=s.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),rm(a)}}}function fm(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function ao(e){this._internalRoot=e}Bl.prototype.render=ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));var a=t.current,n=lt();am(a,n,e,t,null,null)},Bl.prototype.unmount=ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;am(e.current,2,null,e,null,null),yl(),t[ka]=null}};function Bl(e){this._internalRoot=e}Bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=So();e={blockedOn:null,target:e,priority:t};for(var a=0;a<va.length&&t!==0&&t<va[a].priority;a++);va.splice(a,0,e),a===0&&om(e)}};var mm=fe.version;if(mm!=="19.2.7")throw Error(g(527,mm,"19.2.7"));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=E(t),e=e!==null?P(e):null,e=e===null?null:e.stateNode,e};var Zh={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{Cn=Gl.inject(Zh),Pe=Gl}catch{}}return Si.createRoot=function(e,t){if(!w(e))throw Error(g(299));var a=!1,n="",i=vr,l=Ar,s=Sr;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=em(e,1,!1,null,null,a,n,null,i,l,s,fm),e[ka]=t.current,Bu(e),new ao(t)},Si.hydrateRoot=function(e,t,a){if(!w(e))throw Error(g(299));var n=!1,i="",l=vr,s=Ar,u=Sr,o=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),t=em(e,1,!0,t,a??null,n,i,o,l,s,u,fm),t.context=tm(null),a=t.current,n=lt(),n=jl(n),i=na(n),i.callback=null,ia(a,i,n),a=n,t.current.lanes=a,xn(t,a),Ct(t),e[ka]=t.current,Bu(e),new Bl(t)},Si.version="19.2.7",Si}var Em;function tg(){if(Em)return lo.exports;Em=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(fe){console.error(fe)}}return M(),lo.exports=eg(),lo.exports}var ag=tg();function ng(){const[M,fe]=Tm.useState(null),J=[{id:1,question:"1. Explain Google Duplex as a case study in Artificial Intelligence.",answer:"",codeExample:`
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
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1.1,question:"1. Write a program to implement Single Player Game (Using Heuristic Function)",answer:"",codeExample:`
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

      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],g=w=>{fe(M===w?null:w)};return Le.jsxs("div",{className:"app-container",children:[Le.jsx("h1",{children:"AI2 Interview Questions"}),Le.jsx("div",{className:"questions-container",children:J.map(w=>Le.jsxs("div",{className:"question-item",children:[Le.jsx("button",{className:`question-button ${M===w.id?"active":""}`,onClick:()=>g(w.id),children:w.question}),M===w.id&&Le.jsxs("div",{className:"answer-container",children:[Le.jsxs("div",{className:"answer",children:[Le.jsx("h3",{children:"Answer:"}),Le.jsx("p",{children:w.answer})]}),w.codeExample&&Le.jsxs("div",{className:"code-example",children:[Le.jsx("h3",{children:"Code Example:"}),Le.jsx("pre",{children:Le.jsx("code",{children:w.codeExample})})]})]})]},w.id))})]})}ag.createRoot(document.getElementById("root")).render(Le.jsx(Tm.StrictMode,{children:Le.jsx(ng,{})}));
