var OC=Object.defineProperty;var DC=(e,t,n)=>t in e?OC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Uc=(e,t,n)=>DC(e,typeof t!="symbol"?t+"":t,n);function NC(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function w_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $g={exports:{}},$c={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1;function kC(){if(N1)return $c;N1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(i,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:l}}return $c.Fragment=t,$c.jsx=n,$c.jsxs=n,$c}var k1;function PC(){return k1||(k1=1,$g.exports=kC()),$g.exports}var v=PC(),Hg={exports:{}},Bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1;function jC(){if(P1)return Bt;P1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,R={};function P(U,tt,ht){this.props=U,this.context=tt,this.refs=R,this.updater=ht||w}P.prototype.isReactComponent={},P.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},P.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function V(){}V.prototype=P.prototype;function F(U,tt,ht){this.props=U,this.context=tt,this.refs=R,this.updater=ht||w}var z=F.prototype=new V;z.constructor=F,C(z,P.prototype),z.isPureReactComponent=!0;var $=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function D(U,tt,ht,dt,bt,jt){return ht=jt.ref,{$$typeof:e,type:U,key:tt,ref:ht!==void 0?ht:null,props:jt}}function M(U,tt){return D(U.type,tt,void 0,void 0,void 0,U.props)}function O(U){return typeof U=="object"&&U!==null&&U.$$typeof===e}function S(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ht){return tt[ht]})}var j=/\/+/g;function L(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?S(""+U.key):tt.toString(36)}function k(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(k,k):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function lt(U,tt,ht,dt,bt){var jt=typeof U;(jt==="undefined"||jt==="boolean")&&(U=null);var _t=!1;if(U===null)_t=!0;else switch(jt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(U.$$typeof){case e:case t:_t=!0;break;case y:return _t=U._init,lt(_t(U._payload),tt,ht,dt,bt)}}if(_t)return bt=bt(U),_t=dt===""?"."+L(U,0):dt,$(bt)?(ht="",_t!=null&&(ht=_t.replace(j,"$&/")+"/"),lt(bt,tt,ht,"",function(dn){return dn})):bt!=null&&(O(bt)&&(bt=M(bt,ht+(bt.key==null||U&&U.key===bt.key?"":(""+bt.key).replace(j,"$&/")+"/")+_t)),tt.push(bt)),1;_t=0;var Ce=dt===""?".":dt+":";if($(U))for(var Wt=0;Wt<U.length;Wt++)dt=U[Wt],jt=Ce+L(dt,Wt),_t+=lt(dt,tt,ht,jt,bt);else if(Wt=_(U),typeof Wt=="function")for(U=Wt.call(U),Wt=0;!(dt=U.next()).done;)dt=dt.value,jt=Ce+L(dt,Wt++),_t+=lt(dt,tt,ht,jt,bt);else if(jt==="object"){if(typeof U.then=="function")return lt(ft(U),tt,ht,dt,bt);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return _t}function q(U,tt,ht){if(U==null)return U;var dt=[],bt=0;return lt(U,dt,"","",function(jt){return tt.call(ht,jt,bt++)}),dt}function nt(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(ht){(U._status===0||U._status===-1)&&(U._status=1,U._result=ht)},function(ht){(U._status===0||U._status===-1)&&(U._status=2,U._result=ht)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var at=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function it(){}return Bt.Children={map:q,forEach:function(U,tt,ht){q(U,function(){tt.apply(this,arguments)},ht)},count:function(U){var tt=0;return q(U,function(){tt++}),tt},toArray:function(U){return q(U,function(tt){return tt})||[]},only:function(U){if(!O(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Bt.Component=P,Bt.Fragment=n,Bt.Profiler=o,Bt.PureComponent=F,Bt.StrictMode=i,Bt.Suspense=p,Bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,Bt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},Bt.cache=function(U){return function(){return U.apply(null,arguments)}},Bt.cloneElement=function(U,tt,ht){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var dt=C({},U.props),bt=U.key,jt=void 0;if(tt!=null)for(_t in tt.ref!==void 0&&(jt=void 0),tt.key!==void 0&&(bt=""+tt.key),tt)!X.call(tt,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&tt.ref===void 0||(dt[_t]=tt[_t]);var _t=arguments.length-2;if(_t===1)dt.children=ht;else if(1<_t){for(var Ce=Array(_t),Wt=0;Wt<_t;Wt++)Ce[Wt]=arguments[Wt+2];dt.children=Ce}return D(U.type,bt,void 0,void 0,jt,dt)},Bt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:l,_context:U},U},Bt.createElement=function(U,tt,ht){var dt,bt={},jt=null;if(tt!=null)for(dt in tt.key!==void 0&&(jt=""+tt.key),tt)X.call(tt,dt)&&dt!=="key"&&dt!=="__self"&&dt!=="__source"&&(bt[dt]=tt[dt]);var _t=arguments.length-2;if(_t===1)bt.children=ht;else if(1<_t){for(var Ce=Array(_t),Wt=0;Wt<_t;Wt++)Ce[Wt]=arguments[Wt+2];bt.children=Ce}if(U&&U.defaultProps)for(dt in _t=U.defaultProps,_t)bt[dt]===void 0&&(bt[dt]=_t[dt]);return D(U,jt,void 0,void 0,null,bt)},Bt.createRef=function(){return{current:null}},Bt.forwardRef=function(U){return{$$typeof:f,render:U}},Bt.isValidElement=O,Bt.lazy=function(U){return{$$typeof:y,_payload:{_status:-1,_result:U},_init:nt}},Bt.memo=function(U,tt){return{$$typeof:g,type:U,compare:tt===void 0?null:tt}},Bt.startTransition=function(U){var tt=B.T,ht={};B.T=ht;try{var dt=U(),bt=B.S;bt!==null&&bt(ht,dt),typeof dt=="object"&&dt!==null&&typeof dt.then=="function"&&dt.then(it,at)}catch(jt){at(jt)}finally{B.T=tt}},Bt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},Bt.use=function(U){return B.H.use(U)},Bt.useActionState=function(U,tt,ht){return B.H.useActionState(U,tt,ht)},Bt.useCallback=function(U,tt){return B.H.useCallback(U,tt)},Bt.useContext=function(U){return B.H.useContext(U)},Bt.useDebugValue=function(){},Bt.useDeferredValue=function(U,tt){return B.H.useDeferredValue(U,tt)},Bt.useEffect=function(U,tt,ht){var dt=B.H;if(typeof ht=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return dt.useEffect(U,tt)},Bt.useId=function(){return B.H.useId()},Bt.useImperativeHandle=function(U,tt,ht){return B.H.useImperativeHandle(U,tt,ht)},Bt.useInsertionEffect=function(U,tt){return B.H.useInsertionEffect(U,tt)},Bt.useLayoutEffect=function(U,tt){return B.H.useLayoutEffect(U,tt)},Bt.useMemo=function(U,tt){return B.H.useMemo(U,tt)},Bt.useOptimistic=function(U,tt){return B.H.useOptimistic(U,tt)},Bt.useReducer=function(U,tt,ht){return B.H.useReducer(U,tt,ht)},Bt.useRef=function(U){return B.H.useRef(U)},Bt.useState=function(U){return B.H.useState(U)},Bt.useSyncExternalStore=function(U,tt,ht){return B.H.useSyncExternalStore(U,tt,ht)},Bt.useTransition=function(){return B.H.useTransition()},Bt.version="19.1.0",Bt}var j1;function dy(){return j1||(j1=1,Hg.exports=jC()),Hg.exports}var A=dy();const Dn=w_(A),jf=NC({__proto__:null,default:Dn},[A]);var Fg={exports:{}},Hc={},qg={exports:{}},Gg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1;function VC(){return V1||(V1=1,function(e){function t(q,nt){var at=q.length;q.push(nt);t:for(;0<at;){var it=at-1>>>1,U=q[it];if(0<o(U,nt))q[it]=nt,q[at]=U,at=it;else break t}}function n(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var nt=q[0],at=q.pop();if(at!==nt){q[0]=at;t:for(var it=0,U=q.length,tt=U>>>1;it<tt;){var ht=2*(it+1)-1,dt=q[ht],bt=ht+1,jt=q[bt];if(0>o(dt,at))bt<U&&0>o(jt,dt)?(q[it]=jt,q[bt]=at,it=bt):(q[it]=dt,q[ht]=at,it=ht);else if(bt<U&&0>o(jt,at))q[it]=jt,q[bt]=at,it=bt;else break t}}return nt}function o(q,nt){var at=q.sortIndex-nt.sortIndex;return at!==0?at:q.id-nt.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],g=[],y=1,x=null,_=3,w=!1,C=!1,R=!1,P=!1,V=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function $(q){for(var nt=n(g);nt!==null;){if(nt.callback===null)i(g);else if(nt.startTime<=q)i(g),nt.sortIndex=nt.expirationTime,t(p,nt);else break;nt=n(g)}}function B(q){if(R=!1,$(q),!C)if(n(p)!==null)C=!0,X||(X=!0,L());else{var nt=n(g);nt!==null&&lt(B,nt.startTime-q)}}var X=!1,D=-1,M=5,O=-1;function S(){return P?!0:!(e.unstable_now()-O<M)}function j(){if(P=!1,X){var q=e.unstable_now();O=q;var nt=!0;try{t:{C=!1,R&&(R=!1,F(D),D=-1),w=!0;var at=_;try{e:{for($(q),x=n(p);x!==null&&!(x.expirationTime>q&&S());){var it=x.callback;if(typeof it=="function"){x.callback=null,_=x.priorityLevel;var U=it(x.expirationTime<=q);if(q=e.unstable_now(),typeof U=="function"){x.callback=U,$(q),nt=!0;break e}x===n(p)&&i(p),$(q)}else i(p);x=n(p)}if(x!==null)nt=!0;else{var tt=n(g);tt!==null&&lt(B,tt.startTime-q),nt=!1}}break t}finally{x=null,_=at,w=!1}nt=void 0}}finally{nt?L():X=!1}}}var L;if(typeof z=="function")L=function(){z(j)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,ft=k.port2;k.port1.onmessage=j,L=function(){ft.postMessage(null)}}else L=function(){V(j,0)};function lt(q,nt){D=V(function(){q(e.unstable_now())},nt)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(q){switch(_){case 1:case 2:case 3:var nt=3;break;default:nt=_}var at=_;_=nt;try{return q()}finally{_=at}},e.unstable_requestPaint=function(){P=!0},e.unstable_runWithPriority=function(q,nt){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var at=_;_=q;try{return nt()}finally{_=at}},e.unstable_scheduleCallback=function(q,nt,at){var it=e.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?it+at:it):at=it,q){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=at+U,q={id:y++,callback:nt,priorityLevel:q,startTime:at,expirationTime:U,sortIndex:-1},at>it?(q.sortIndex=at,t(g,q),n(p)===null&&q===n(g)&&(R?(F(D),D=-1):R=!0,lt(B,at-it))):(q.sortIndex=U,t(p,q),C||w||(C=!0,X||(X=!0,L()))),q},e.unstable_shouldYield=S,e.unstable_wrapCallback=function(q){var nt=_;return function(){var at=_;_=nt;try{return q.apply(this,arguments)}finally{_=at}}}}(Gg)),Gg}var z1;function zC(){return z1||(z1=1,qg.exports=VC()),qg.exports}var Kg={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1;function LC(){if(L1)return zn;L1=1;var e=dy();function t(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:p,containerInfo:g,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,zn.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return l(p,g,null,y)},zn.flushSync=function(p){var g=u.T,y=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=g,i.p=y,i.d.f()}},zn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},zn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},zn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,x=f(y,g.crossOrigin),_=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:w}):y==="script"&&i.d.X(p,{crossOrigin:x,integrity:_,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},zn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=f(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},zn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=f(y,g.crossOrigin);i.d.L(p,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},zn.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=f(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},zn.requestFormReset=function(p){i.d.r(p)},zn.unstable_batchedUpdates=function(p,g){return p(g)},zn.useFormState=function(p,g,y){return u.H.useFormState(p,g,y)},zn.useFormStatus=function(){return u.H.useHostTransitionStatus()},zn.version="19.1.0",zn}var B1;function C_(){if(B1)return Kg.exports;B1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Kg.exports=LC(),Kg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1;function BC(){if(U1)return Hc;U1=1;var e=zC(),t=dy(),n=C_();function i(r){var a="https://react.dev/errors/"+r;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+r+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var a=r,s=r;if(r.alternate)for(;a.return;)a=a.return;else{r=a;do a=r,(a.flags&4098)!==0&&(s=a.return),r=a.return;while(r)}return a.tag===3?s:null}function u(r){if(r.tag===13){var a=r.memoizedState;if(a===null&&(r=r.alternate,r!==null&&(a=r.memoizedState)),a!==null)return a.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(i(188))}function p(r){var a=r.alternate;if(!a){if(a=l(r),a===null)throw Error(i(188));return a!==r?null:r}for(var s=r,c=a;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return f(h),r;if(m===c)return f(h),a;m=m.sibling}throw Error(i(188))}if(s.return!==c.return)s=h,c=m;else{for(var T=!1,I=h.child;I;){if(I===s){T=!0,s=h,c=m;break}if(I===c){T=!0,c=h,s=m;break}I=I.sibling}if(!T){for(I=m.child;I;){if(I===s){T=!0,s=m,c=h;break}if(I===c){T=!0,c=m,s=h;break}I=I.sibling}if(!T)throw Error(i(189))}}if(s.alternate!==c)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?r:a}function g(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r;for(r=r.child;r!==null;){if(a=g(r),a!==null)return a;r=r.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),S=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function L(r){return r===null||typeof r!="object"?null:(r=j&&r[j]||r["@@iterator"],typeof r=="function"?r:null)}var k=Symbol.for("react.client.reference");function ft(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===k?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case C:return"Fragment";case P:return"Profiler";case R:return"StrictMode";case B:return"Suspense";case X:return"SuspenseList";case O:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case w:return"Portal";case z:return(r.displayName||"Context")+".Provider";case F:return(r._context.displayName||"Context")+".Consumer";case $:var a=r.render;return r=r.displayName,r||(r=a.displayName||a.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case D:return a=r.displayName||null,a!==null?a:ft(r.type)||"Memo";case M:a=r._payload,r=r._init;try{return ft(r(a))}catch{}}return null}var lt=Array.isArray,q=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},it=[],U=-1;function tt(r){return{current:r}}function ht(r){0>U||(r.current=it[U],it[U]=null,U--)}function dt(r,a){U++,it[U]=r.current,r.current=a}var bt=tt(null),jt=tt(null),_t=tt(null),Ce=tt(null);function Wt(r,a){switch(dt(_t,a),dt(jt,r),dt(bt,null),a.nodeType){case 9:case 11:r=(r=a.documentElement)&&(r=r.namespaceURI)?s1(r):0;break;default:if(r=a.tagName,a=a.namespaceURI)a=s1(a),r=l1(a,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ht(bt),dt(bt,r)}function dn(){ht(bt),ht(jt),ht(_t)}function Nt(r){r.memoizedState!==null&&dt(Ce,r);var a=bt.current,s=l1(a,r.type);a!==s&&(dt(jt,r),dt(bt,s))}function Qt(r){jt.current===r&&(ht(bt),ht(jt)),Ce.current===r&&(ht(Ce),jc._currentValue=at)}var le=Object.prototype.hasOwnProperty,Sn=e.unstable_scheduleCallback,Fe=e.unstable_cancelCallback,kn=e.unstable_shouldYield,xr=e.unstable_requestPaint,ge=e.unstable_now,Qe=e.unstable_getCurrentPriorityLevel,_n=e.unstable_ImmediatePriority,Hn=e.unstable_UserBlockingPriority,Ae=e.unstable_NormalPriority,Vt=e.unstable_LowPriority,Ni=e.unstable_IdlePriority,ya=e.log,bs=e.unstable_setDisableYieldValue,De=null,ce=null;function fn(r){if(typeof ya=="function"&&bs(r),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(De,r)}catch{}}var hn=Math.clz32?Math.clz32:ti,xs=Math.log,Ss=Math.LN2;function ti(r){return r>>>=0,r===0?32:31-(xs(r)/Ss|0)|0}var ki=256,ei=4194304;function Pn(r){var a=r&42;if(a!==0)return a;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function va(r,a,s){var c=r.pendingLanes;if(c===0)return 0;var h=0,m=r.suspendedLanes,T=r.pingedLanes;r=r.warmLanes;var I=c&134217727;return I!==0?(c=I&~m,c!==0?h=Pn(c):(T&=I,T!==0?h=Pn(T):s||(s=I&~r,s!==0&&(h=Pn(s))))):(I=c&~m,I!==0?h=Pn(I):T!==0?h=Pn(T):s||(s=c&~r,s!==0&&(h=Pn(s)))),h===0?0:a!==0&&a!==h&&(a&m)===0&&(m=h&-h,s=a&-a,m>=s||m===32&&(s&4194048)!==0)?a:h}function Pi(r,a){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&a)===0}function ba(r,a){switch(r){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ni(){var r=ki;return ki<<=1,(ki&4194048)===0&&(ki=256),r}function po(){var r=ei;return ei<<=1,(ei&62914560)===0&&(ei=4194304),r}function Lr(r){for(var a=[],s=0;31>s;s++)a.push(r);return a}function ar(r,a){r.pendingLanes|=a,a!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function go(r,a,s,c,h,m){var T=r.pendingLanes;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=s,r.entangledLanes&=s,r.errorRecoveryDisabledLanes&=s,r.shellSuspendCounter=0;var I=r.entanglements,H=r.expirationTimes,Q=r.hiddenUpdates;for(s=T&~s;0<s;){var ot=31-hn(s),ct=1<<ot;I[ot]=0,H[ot]=-1;var Z=Q[ot];if(Z!==null)for(Q[ot]=null,ot=0;ot<Z.length;ot++){var J=Z[ot];J!==null&&(J.lane&=-536870913)}s&=~ct}c!==0&&Sr(r,c,0),m!==0&&h===0&&r.tag!==0&&(r.suspendedLanes|=m&~(T&~a))}function Sr(r,a,s){r.pendingLanes|=a,r.suspendedLanes&=~a;var c=31-hn(a);r.entangledLanes|=a,r.entanglements[c]=r.entanglements[c]|1073741824|s&4194090}function mo(r,a){var s=r.entangledLanes|=a;for(r=r.entanglements;s;){var c=31-hn(s),h=1<<c;h&a|r[c]&a&&(r[c]|=a),s&=~h}}function ri(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function xa(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function ii(){var r=nt.p;return r!==0?r:(r=window.event,r===void 0?32:A1(r.type))}function vt(r,a){var s=nt.p;try{return nt.p=r,a()}finally{nt.p=s}}var yt=Math.random().toString(36).slice(2),Rt="__reactFiber$"+yt,It="__reactProps$"+yt,Xt="__reactContainer$"+yt,jn="__reactEvents$"+yt,Br="__reactListeners$"+yt,Xn="__reactHandles$"+yt,yo="__reactResources$"+yt,Ur="__reactMarker$"+yt;function Sa(r){delete r[Rt],delete r[It],delete r[jn],delete r[Br],delete r[Xn]}function ji(r){var a=r[Rt];if(a)return a;for(var s=r.parentNode;s;){if(a=s[Xt]||s[Rt]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(r=f1(r);r!==null;){if(s=r[Rt])return s;r=f1(r)}return a}r=s,s=r.parentNode}return null}function ai(r){if(r=r[Rt]||r[Xt]){var a=r.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return r}return null}function oi(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r.stateNode;throw Error(i(33))}function Fn(r){var a=r[yo];return a||(a=r[yo]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function qe(r){r[Ur]=!0}var $l=new Set,_s={};function $r(r,a){Vi(r,a),Vi(r+"Capture",a)}function Vi(r,a){for(_s[r]=a,r=0;r<a.length;r++)$l.add(a[r])}var Uu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$u={},vo={};function Hu(r){return le.call(vo,r)?!0:le.call($u,r)?!1:Uu.test(r)?vo[r]=!0:($u[r]=!0,!1)}function _a(r,a,s){if(Hu(a))if(s===null)r.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":r.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(a);return}}r.setAttribute(a,""+s)}}function si(r,a,s){if(s===null)r.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttribute(a,""+s)}}function En(r,a,s,c){if(c===null)r.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttributeNS(a,s,""+c)}}var bo,Fu;function zi(r){if(bo===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);bo=a&&a[1]||"",Fu=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bo+r+Fu}var Es=!1;function Ts(r,a){if(!r||Es)return"";Es=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var ct=function(){throw Error()};if(Object.defineProperty(ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ct,[])}catch(J){var Z=J}Reflect.construct(r,[],ct)}else{try{ct.call()}catch(J){Z=J}r.call(ct.prototype)}}else{try{throw Error()}catch(J){Z=J}(ct=r())&&typeof ct.catch=="function"&&ct.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),T=m[0],I=m[1];if(T&&I){var H=T.split(`
`),Q=I.split(`
`);for(h=c=0;c<H.length&&!H[c].includes("DetermineComponentFrameRoot");)c++;for(;h<Q.length&&!Q[h].includes("DetermineComponentFrameRoot");)h++;if(c===H.length||h===Q.length)for(c=H.length-1,h=Q.length-1;1<=c&&0<=h&&H[c]!==Q[h];)h--;for(;1<=c&&0<=h;c--,h--)if(H[c]!==Q[h]){if(c!==1||h!==1)do if(c--,h--,0>h||H[c]!==Q[h]){var ot=`
`+H[c].replace(" at new "," at ");return r.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",r.displayName)),ot}while(1<=c&&0<=h);break}}}finally{Es=!1,Error.prepareStackTrace=s}return(s=r?r.displayName||r.name:"")?zi(s):""}function Hl(r){switch(r.tag){case 26:case 27:case 5:return zi(r.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 15:return Ts(r.type,!1);case 11:return Ts(r.type.render,!1);case 1:return Ts(r.type,!0);case 31:return zi("Activity");default:return""}}function ws(r){try{var a="";do a+=Hl(r),r=r.return;while(r);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function qn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Fl(r){var a=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Gh(r){var a=Fl(r)?"checked":"value",s=Object.getOwnPropertyDescriptor(r.constructor.prototype,a),c=""+r[a];if(!r.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,m=s.set;return Object.defineProperty(r,a,{configurable:!0,get:function(){return h.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(r,a,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){r._valueTracker=null,delete r[a]}}}}function Cs(r){r._valueTracker||(r._valueTracker=Gh(r))}function ql(r){if(!r)return!1;var a=r._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return r&&(c=Fl(r)?r.checked?"true":"false":r.value),r=c,r!==s?(a.setValue(r),!0):!1}function xo(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Kh=/[\n"\\]/g;function Xe(r){return r.replace(Kh,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function or(r,a,s,c,h,m,T,I){r.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.type=T:r.removeAttribute("type"),a!=null?T==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+qn(a)):r.value!==""+qn(a)&&(r.value=""+qn(a)):T!=="submit"&&T!=="reset"||r.removeAttribute("value"),a!=null?Ea(r,T,qn(a)):s!=null?Ea(r,T,qn(s)):c!=null&&r.removeAttribute("value"),h==null&&m!=null&&(r.defaultChecked=!!m),h!=null&&(r.checked=h&&typeof h!="function"&&typeof h!="symbol"),I!=null&&typeof I!="function"&&typeof I!="symbol"&&typeof I!="boolean"?r.name=""+qn(I):r.removeAttribute("name")}function So(r,a,s,c,h,m,T,I){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),a!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;s=s!=null?""+qn(s):"",a=a!=null?""+qn(a):s,I||a===r.value||(r.value=a),r.defaultValue=a}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=I?r.checked:!!c,r.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(r.name=T)}function Ea(r,a,s){a==="number"&&xo(r.ownerDocument)===r||r.defaultValue===""+s||(r.defaultValue=""+s)}function Li(r,a,s,c){if(r=r.options,a){a={};for(var h=0;h<s.length;h++)a["$"+s[h]]=!0;for(s=0;s<r.length;s++)h=a.hasOwnProperty("$"+r[s].value),r[s].selected!==h&&(r[s].selected=h),h&&c&&(r[s].defaultSelected=!0)}else{for(s=""+qn(s),a=null,h=0;h<r.length;h++){if(r[h].value===s){r[h].selected=!0,c&&(r[h].defaultSelected=!0);return}a!==null||r[h].disabled||(a=r[h])}a!==null&&(a.selected=!0)}}function Se(r,a,s){if(a!=null&&(a=""+qn(a),a!==r.value&&(r.value=a),s==null)){r.defaultValue!==a&&(r.defaultValue=a);return}r.defaultValue=s!=null?""+qn(s):""}function _o(r,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(i(92));if(lt(c)){if(1<c.length)throw Error(i(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=qn(a),r.defaultValue=s,c=r.textContent,c===s&&c!==""&&c!==null&&(r.value=c)}function _r(r,a){if(a){var s=r.firstChild;if(s&&s===r.lastChild&&s.nodeType===3){s.nodeValue=a;return}}r.textContent=a}var Eo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qu(r,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?r.setProperty(a,""):a==="float"?r.cssFloat="":r[a]="":c?r.setProperty(a,s):typeof s!="number"||s===0||Eo.has(a)?a==="float"?r.cssFloat=s:r[a]=(""+s).trim():r[a]=s+"px"}function Gl(r,a,s){if(a!=null&&typeof a!="object")throw Error(i(62));if(r=r.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var h in a)c=a[h],a.hasOwnProperty(h)&&s[h]!==c&&qu(r,h,c)}else for(var m in a)a.hasOwnProperty(m)&&qu(r,m,a[m])}function Kl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function As(r){return Wh.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Bi=null;function Er(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ui=null,$i=null;function Yl(r){var a=ai(r);if(a&&(r=a.stateNode)){var s=r[It]||null;t:switch(r=a.stateNode,a.type){case"input":if(or(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=r;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Xe(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==r&&c.form===r.form){var h=c[It]||null;if(!h)throw Error(i(90));or(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===r.form&&ql(c)}break t;case"textarea":Se(r,s.value,s.defaultValue);break t;case"select":a=s.value,a!=null&&Li(r,!!s.multiple,a,!1)}}}var li=!1;function Gu(r,a,s){if(li)return r(a,s);li=!0;try{var c=r(a);return c}finally{if(li=!1,(Ui!==null||$i!==null)&&(Ld(),Ui&&(a=Ui,r=$i,$i=Ui=null,Yl(a),r)))for(a=0;a<r.length;a++)Yl(r[a])}}function To(r,a){var s=r.stateNode;if(s===null)return null;var c=s[It]||null;if(c===null)return null;s=c[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break t;default:r=!1}if(r)return null;if(s&&typeof s!="function")throw Error(i(231,a,typeof s));return s}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tr=!1;if(Hr)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Tr=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Tr=!1}var ci=null,Ta=null,Hi=null;function Wl(){if(Hi)return Hi;var r,a=Ta,s=a.length,c,h="value"in ci?ci.value:ci.textContent,m=h.length;for(r=0;r<s&&a[r]===h[r];r++);var T=s-r;for(c=1;c<=T&&a[s-c]===h[m-c];c++);return Hi=h.slice(r,1<c?1-c:void 0)}function ui(r){var a=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&a===13&&(r=13)):r=a,r===10&&(r=13),32<=r||r===13?r:0}function di(){return!0}function Ql(){return!1}function pn(r){function a(s,c,h,m,T){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var I in r)r.hasOwnProperty(I)&&(s=r[I],this[I]=s?s(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?di:Ql,this.isPropagationStopped=Ql,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),a}var me={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=pn(me),Co=y({},me,{view:0,detail:0}),Ku=pn(Co),Is,Ms,fi,Ao=y({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mo,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==fi&&(fi&&r.type==="mousemove"?(Is=r.screenX-fi.screenX,Ms=r.screenY-fi.screenY):Ms=Is=0,fi=r),Is)},movementY:function(r){return"movementY"in r?r.movementY:Ms}}),wr=pn(Ao),Yu=y({},Ao,{dataTransfer:0}),Qh=pn(Yu),Ro=y({},Co,{relatedTarget:0}),Os=pn(Ro),Xl=y({},me,{animationName:0,elapsedTime:0,pseudoElement:0}),Ds=pn(Xl),Wu=y({},me,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ns=pn(Wu),Xh=y({},me,{data:0}),Zl=pn(Xh),Io={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jl(r){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(r):(r=Xu[r])?!!a[r]:!1}function Mo(){return Jl}var Zu=y({},Co,{key:function(r){if(r.key){var a=Io[r.key]||r.key;if(a!=="Unidentified")return a}return r.type==="keypress"?(r=ui(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Qu[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mo,charCode:function(r){return r.type==="keypress"?ui(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ui(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ks=pn(Zu),Ju=y({},Ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tc=pn(Ju),Fi=y({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mo}),td=pn(Fi),ed=y({},me,{propertyName:0,elapsedTime:0,pseudoElement:0}),nd=pn(ed),rd=y({},Ao,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ps=pn(rd),Gn=y({},me,{newState:0,oldState:0}),id=pn(Gn),ad=[9,13,27,32],hi=Hr&&"CompositionEvent"in window,d=null;Hr&&"documentMode"in document&&(d=document.documentMode);var b=Hr&&"TextEvent"in window&&!d,E=Hr&&(!hi||d&&8<d&&11>=d),N=" ",Y=!1;function et(r,a){switch(r){case"keyup":return ad.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mt(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Jt=!1;function rn(r,a){switch(r){case"compositionend":return mt(a);case"keypress":return a.which!==32?null:(Y=!0,N);case"textInput":return r=a.data,r===N&&Y?null:r;default:return null}}function te(r,a){if(Jt)return r==="compositionend"||!hi&&et(r,a)?(r=Wl(),Hi=Ta=ci=null,Jt=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return E&&a.locale!=="ko"?null:a.data;default:return null}}var gn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function an(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a==="input"?!!gn[r.type]:a==="textarea"}function qi(r,a,s,c){Ui?$i?$i.push(c):$i=[c]:Ui=c,a=qd(a,"onChange"),0<a.length&&(s=new Rs("onChange","change",null,s,c),r.push({event:s,listeners:a}))}var Tn=null,pi=null;function ec(r){n1(r,0)}function od(r){var a=oi(r);if(ql(a))return r}function E0(r,a){if(r==="change")return a}var T0=!1;if(Hr){var Zh;if(Hr){var Jh="oninput"in document;if(!Jh){var w0=document.createElement("div");w0.setAttribute("oninput","return;"),Jh=typeof w0.oninput=="function"}Zh=Jh}else Zh=!1;T0=Zh&&(!document.documentMode||9<document.documentMode)}function C0(){Tn&&(Tn.detachEvent("onpropertychange",A0),pi=Tn=null)}function A0(r){if(r.propertyName==="value"&&od(pi)){var a=[];qi(a,pi,r,Er(r)),Gu(ec,a)}}function sw(r,a,s){r==="focusin"?(C0(),Tn=a,pi=s,Tn.attachEvent("onpropertychange",A0)):r==="focusout"&&C0()}function lw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return od(pi)}function cw(r,a){if(r==="click")return od(a)}function uw(r,a){if(r==="input"||r==="change")return od(a)}function dw(r,a){return r===a&&(r!==0||1/r===1/a)||r!==r&&a!==a}var sr=typeof Object.is=="function"?Object.is:dw;function nc(r,a){if(sr(r,a))return!0;if(typeof r!="object"||r===null||typeof a!="object"||a===null)return!1;var s=Object.keys(r),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!le.call(a,h)||!sr(r[h],a[h]))return!1}return!0}function R0(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function I0(r,a){var s=R0(r);r=0;for(var c;s;){if(s.nodeType===3){if(c=r+s.textContent.length,r<=a&&c>=a)return{node:s,offset:a-r};r=c}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=R0(s)}}function M0(r,a){return r&&a?r===a?!0:r&&r.nodeType===3?!1:a&&a.nodeType===3?M0(r,a.parentNode):"contains"in r?r.contains(a):r.compareDocumentPosition?!!(r.compareDocumentPosition(a)&16):!1:!1}function O0(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var a=xo(r.document);a instanceof r.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)r=a.contentWindow;else break;a=xo(r.document)}return a}function tp(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a&&(a==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||a==="textarea"||r.contentEditable==="true")}var fw=Hr&&"documentMode"in document&&11>=document.documentMode,js=null,ep=null,rc=null,np=!1;function D0(r,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;np||js==null||js!==xo(c)||(c=js,"selectionStart"in c&&tp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),rc&&nc(rc,c)||(rc=c,c=qd(ep,"onSelect"),0<c.length&&(a=new Rs("onSelect","select",null,a,s),r.push({event:a,listeners:c}),a.target=js)))}function Oo(r,a){var s={};return s[r.toLowerCase()]=a.toLowerCase(),s["Webkit"+r]="webkit"+a,s["Moz"+r]="moz"+a,s}var Vs={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionrun:Oo("Transition","TransitionRun"),transitionstart:Oo("Transition","TransitionStart"),transitioncancel:Oo("Transition","TransitionCancel"),transitionend:Oo("Transition","TransitionEnd")},rp={},N0={};Hr&&(N0=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function Do(r){if(rp[r])return rp[r];if(!Vs[r])return r;var a=Vs[r],s;for(s in a)if(a.hasOwnProperty(s)&&s in N0)return rp[r]=a[s];return r}var k0=Do("animationend"),P0=Do("animationiteration"),j0=Do("animationstart"),hw=Do("transitionrun"),pw=Do("transitionstart"),gw=Do("transitioncancel"),V0=Do("transitionend"),z0=new Map,ip="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ip.push("scrollEnd");function Fr(r,a){z0.set(r,a),$r(a,[r])}var L0=new WeakMap;function Cr(r,a){if(typeof r=="object"&&r!==null){var s=L0.get(r);return s!==void 0?s:(a={value:r,source:a,stack:ws(a)},L0.set(r,a),a)}return{value:r,source:a,stack:ws(a)}}var Ar=[],zs=0,ap=0;function sd(){for(var r=zs,a=ap=zs=0;a<r;){var s=Ar[a];Ar[a++]=null;var c=Ar[a];Ar[a++]=null;var h=Ar[a];Ar[a++]=null;var m=Ar[a];if(Ar[a++]=null,c!==null&&h!==null){var T=c.pending;T===null?h.next=h:(h.next=T.next,T.next=h),c.pending=h}m!==0&&B0(s,h,m)}}function ld(r,a,s,c){Ar[zs++]=r,Ar[zs++]=a,Ar[zs++]=s,Ar[zs++]=c,ap|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function op(r,a,s,c){return ld(r,a,s,c),cd(r)}function Ls(r,a){return ld(r,null,null,a),cd(r)}function B0(r,a,s){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s);for(var h=!1,m=r.return;m!==null;)m.childLanes|=s,c=m.alternate,c!==null&&(c.childLanes|=s),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(h=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,h&&a!==null&&(h=31-hn(s),r=m.hiddenUpdates,c=r[h],c===null?r[h]=[a]:c.push(a),a.lane=s|536870912),m):null}function cd(r){if(50<Rc)throw Rc=0,fg=null,Error(i(185));for(var a=r.return;a!==null;)r=a,a=r.return;return r.tag===3?r.stateNode:null}var Bs={};function mw(r,a,s,c){this.tag=r,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lr(r,a,s,c){return new mw(r,a,s,c)}function sp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Gi(r,a){var s=r.alternate;return s===null?(s=lr(r.tag,a,r.key,r.mode),s.elementType=r.elementType,s.type=r.type,s.stateNode=r.stateNode,s.alternate=r,r.alternate=s):(s.pendingProps=a,s.type=r.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=r.flags&65011712,s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,a=r.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=r.sibling,s.index=r.index,s.ref=r.ref,s.refCleanup=r.refCleanup,s}function U0(r,a){r.flags&=65011714;var s=r.alternate;return s===null?(r.childLanes=0,r.lanes=a,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=s.childLanes,r.lanes=s.lanes,r.child=s.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=s.memoizedProps,r.memoizedState=s.memoizedState,r.updateQueue=s.updateQueue,r.type=s.type,a=s.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),r}function ud(r,a,s,c,h,m){var T=0;if(c=r,typeof r=="function")sp(r)&&(T=1);else if(typeof r=="string")T=vC(r,s,bt.current)?26:r==="html"||r==="head"||r==="body"?27:5;else t:switch(r){case O:return r=lr(31,s,a,h),r.elementType=O,r.lanes=m,r;case C:return No(s.children,h,m,a);case R:T=8,h|=24;break;case P:return r=lr(12,s,a,h|2),r.elementType=P,r.lanes=m,r;case B:return r=lr(13,s,a,h),r.elementType=B,r.lanes=m,r;case X:return r=lr(19,s,a,h),r.elementType=X,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case V:case z:T=10;break t;case F:T=9;break t;case $:T=11;break t;case D:T=14;break t;case M:T=16,c=null;break t}T=29,s=Error(i(130,r===null?"null":typeof r,"")),c=null}return a=lr(T,s,a,h),a.elementType=r,a.type=c,a.lanes=m,a}function No(r,a,s,c){return r=lr(7,r,c,a),r.lanes=s,r}function lp(r,a,s){return r=lr(6,r,null,a),r.lanes=s,r}function cp(r,a,s){return a=lr(4,r.children!==null?r.children:[],r.key,a),a.lanes=s,a.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},a}var Us=[],$s=0,dd=null,fd=0,Rr=[],Ir=0,ko=null,Ki=1,Yi="";function Po(r,a){Us[$s++]=fd,Us[$s++]=dd,dd=r,fd=a}function $0(r,a,s){Rr[Ir++]=Ki,Rr[Ir++]=Yi,Rr[Ir++]=ko,ko=r;var c=Ki;r=Yi;var h=32-hn(c)-1;c&=~(1<<h),s+=1;var m=32-hn(a)+h;if(30<m){var T=h-h%5;m=(c&(1<<T)-1).toString(32),c>>=T,h-=T,Ki=1<<32-hn(a)+h|s<<h|c,Yi=m+r}else Ki=1<<m|s<<h|c,Yi=r}function up(r){r.return!==null&&(Po(r,1),$0(r,1,0))}function dp(r){for(;r===dd;)dd=Us[--$s],Us[$s]=null,fd=Us[--$s],Us[$s]=null;for(;r===ko;)ko=Rr[--Ir],Rr[Ir]=null,Yi=Rr[--Ir],Rr[Ir]=null,Ki=Rr[--Ir],Rr[Ir]=null}var Kn=null,Be=null,ue=!1,jo=null,gi=!1,fp=Error(i(519));function Vo(r){var a=Error(i(418,""));throw oc(Cr(a,r)),fp}function H0(r){var a=r.stateNode,s=r.type,c=r.memoizedProps;switch(a[Rt]=r,a[It]=c,s){case"dialog":Gt("cancel",a),Gt("close",a);break;case"iframe":case"object":case"embed":Gt("load",a);break;case"video":case"audio":for(s=0;s<Mc.length;s++)Gt(Mc[s],a);break;case"source":Gt("error",a);break;case"img":case"image":case"link":Gt("error",a),Gt("load",a);break;case"details":Gt("toggle",a);break;case"input":Gt("invalid",a),So(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Cs(a);break;case"select":Gt("invalid",a);break;case"textarea":Gt("invalid",a),_o(a,c.value,c.defaultValue,c.children),Cs(a)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||o1(a.textContent,s)?(c.popover!=null&&(Gt("beforetoggle",a),Gt("toggle",a)),c.onScroll!=null&&Gt("scroll",a),c.onScrollEnd!=null&&Gt("scrollend",a),c.onClick!=null&&(a.onclick=Gd),a=!0):a=!1,a||Vo(r)}function F0(r){for(Kn=r.return;Kn;)switch(Kn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Kn=Kn.return}}function ic(r){if(r!==Kn)return!1;if(!ue)return F0(r),ue=!0,!1;var a=r.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=r.type,s=!(s!=="form"&&s!=="button")||Rg(r.type,r.memoizedProps)),s=!s),s&&Be&&Vo(r),F0(r),a===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));t:{for(r=r.nextSibling,a=0;r;){if(r.nodeType===8)if(s=r.data,s==="/$"){if(a===0){Be=Gr(r.nextSibling);break t}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;r=r.nextSibling}Be=null}}else a===27?(a=Be,Ba(r.type)?(r=Dg,Dg=null,Be=r):Be=a):Be=Kn?Gr(r.stateNode.nextSibling):null;return!0}function ac(){Be=Kn=null,ue=!1}function q0(){var r=jo;return r!==null&&(tr===null?tr=r:tr.push.apply(tr,r),jo=null),r}function oc(r){jo===null?jo=[r]:jo.push(r)}var hp=tt(null),zo=null,Wi=null;function wa(r,a,s){dt(hp,a._currentValue),a._currentValue=s}function Qi(r){r._currentValue=hp.current,ht(hp)}function pp(r,a,s){for(;r!==null;){var c=r.alternate;if((r.childLanes&a)!==a?(r.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),r===s)break;r=r.return}}function gp(r,a,s,c){var h=r.child;for(h!==null&&(h.return=r);h!==null;){var m=h.dependencies;if(m!==null){var T=h.child;m=m.firstContext;t:for(;m!==null;){var I=m;m=h;for(var H=0;H<a.length;H++)if(I.context===a[H]){m.lanes|=s,I=m.alternate,I!==null&&(I.lanes|=s),pp(m.return,s,r),c||(T=null);break t}m=I.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(i(341));T.lanes|=s,m=T.alternate,m!==null&&(m.lanes|=s),pp(T,s,r),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===r){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function sc(r,a,s,c){r=null;for(var h=a,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var I=h.type;sr(h.pendingProps.value,T.value)||(r!==null?r.push(I):r=[I])}}else if(h===Ce.current){if(T=h.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(r!==null?r.push(jc):r=[jc])}h=h.return}r!==null&&gp(a,r,s,c),a.flags|=262144}function hd(r){for(r=r.firstContext;r!==null;){if(!sr(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Lo(r){zo=r,Wi=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Vn(r){return G0(zo,r)}function pd(r,a){return zo===null&&Lo(r),G0(r,a)}function G0(r,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Wi===null){if(r===null)throw Error(i(308));Wi=a,r.dependencies={lanes:0,firstContext:a},r.flags|=524288}else Wi=Wi.next=a;return s}var yw=typeof AbortController<"u"?AbortController:function(){var r=[],a=this.signal={aborted:!1,addEventListener:function(s,c){r.push(c)}};this.abort=function(){a.aborted=!0,r.forEach(function(s){return s()})}},vw=e.unstable_scheduleCallback,bw=e.unstable_NormalPriority,on={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mp(){return{controller:new yw,data:new Map,refCount:0}}function lc(r){r.refCount--,r.refCount===0&&vw(bw,function(){r.controller.abort()})}var cc=null,yp=0,Hs=0,Fs=null;function xw(r,a){if(cc===null){var s=cc=[];yp=0,Hs=bg(),Fs={status:"pending",value:void 0,then:function(c){s.push(c)}}}return yp++,a.then(K0,K0),a}function K0(){if(--yp===0&&cc!==null){Fs!==null&&(Fs.status="fulfilled");var r=cc;cc=null,Hs=0,Fs=null;for(var a=0;a<r.length;a++)(0,r[a])()}}function Sw(r,a){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return r.then(function(){c.status="fulfilled",c.value=a;for(var h=0;h<s.length;h++)(0,s[h])(a)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var Y0=q.S;q.S=function(r,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&xw(r,a),Y0!==null&&Y0(r,a)};var Bo=tt(null);function vp(){var r=Bo.current;return r!==null?r:Oe.pooledCache}function gd(r,a){a===null?dt(Bo,Bo.current):dt(Bo,a.pool)}function W0(){var r=vp();return r===null?null:{parent:on._currentValue,pool:r}}var uc=Error(i(460)),Q0=Error(i(474)),md=Error(i(542)),bp={then:function(){}};function X0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function yd(){}function Z0(r,a,s){switch(s=r[s],s===void 0?r.push(a):s!==a&&(a.then(yd,yd),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,tv(r),r;default:if(typeof a.status=="string")a.then(yd,yd);else{if(r=Oe,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=a,r.status="pending",r.then(function(c){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=c}},function(c){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,tv(r),r}throw dc=a,uc}}var dc=null;function J0(){if(dc===null)throw Error(i(459));var r=dc;return dc=null,r}function tv(r){if(r===uc||r===md)throw Error(i(483))}var Ca=!1;function xp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sp(r,a){r=r.updateQueue,a.updateQueue===r&&(a.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Aa(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ra(r,a,s){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var h=c.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a,a=cd(r),B0(r,null,s),a}return ld(r,c,a,s),cd(r)}function fc(r,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var c=a.lanes;c&=r.pendingLanes,s|=c,a.lanes=s,mo(r,s)}}function _p(r,a){var s=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=T:m=m.next=T,s=s.next}while(s!==null);m===null?h=m=a:m=m.next=a}else h=m=a;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=s;return}r=s.lastBaseUpdate,r===null?s.firstBaseUpdate=a:r.next=a,s.lastBaseUpdate=a}var Ep=!1;function hc(){if(Ep){var r=Fs;if(r!==null)throw r}}function pc(r,a,s,c){Ep=!1;var h=r.updateQueue;Ca=!1;var m=h.firstBaseUpdate,T=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var H=I,Q=H.next;H.next=null,T===null?m=Q:T.next=Q,T=H;var ot=r.alternate;ot!==null&&(ot=ot.updateQueue,I=ot.lastBaseUpdate,I!==T&&(I===null?ot.firstBaseUpdate=Q:I.next=Q,ot.lastBaseUpdate=H))}if(m!==null){var ct=h.baseState;T=0,ot=Q=H=null,I=m;do{var Z=I.lane&-536870913,J=Z!==I.lane;if(J?(ee&Z)===Z:(c&Z)===Z){Z!==0&&Z===Hs&&(Ep=!0),ot!==null&&(ot=ot.next={lane:0,tag:I.tag,payload:I.payload,callback:null,next:null});t:{var Pt=r,Ot=I;Z=a;var Te=s;switch(Ot.tag){case 1:if(Pt=Ot.payload,typeof Pt=="function"){ct=Pt.call(Te,ct,Z);break t}ct=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Ot.payload,Z=typeof Pt=="function"?Pt.call(Te,ct,Z):Pt,Z==null)break t;ct=y({},ct,Z);break t;case 2:Ca=!0}}Z=I.callback,Z!==null&&(r.flags|=64,J&&(r.flags|=8192),J=h.callbacks,J===null?h.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ot===null?(Q=ot=J,H=ct):ot=ot.next=J,T|=Z;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;J=I,I=J.next,J.next=null,h.lastBaseUpdate=J,h.shared.pending=null}}while(!0);ot===null&&(H=ct),h.baseState=H,h.firstBaseUpdate=Q,h.lastBaseUpdate=ot,m===null&&(h.shared.lanes=0),ja|=T,r.lanes=T,r.memoizedState=ct}}function ev(r,a){if(typeof r!="function")throw Error(i(191,r));r.call(a)}function nv(r,a){var s=r.callbacks;if(s!==null)for(r.callbacks=null,r=0;r<s.length;r++)ev(s[r],a)}var qs=tt(null),vd=tt(0);function rv(r,a){r=ra,dt(vd,r),dt(qs,a),ra=r|a.baseLanes}function Tp(){dt(vd,ra),dt(qs,qs.current)}function wp(){ra=vd.current,ht(qs),ht(vd)}var Ia=0,Ut=null,_e=null,Ze=null,bd=!1,Gs=!1,Uo=!1,xd=0,gc=0,Ks=null,_w=0;function Ge(){throw Error(i(321))}function Cp(r,a){if(a===null)return!1;for(var s=0;s<a.length&&s<r.length;s++)if(!sr(r[s],a[s]))return!1;return!0}function Ap(r,a,s,c,h,m){return Ia=m,Ut=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,q.H=r===null||r.memoizedState===null?Bv:Uv,Uo=!1,m=s(c,h),Uo=!1,Gs&&(m=av(a,s,c,h)),iv(r),m}function iv(r){q.H=Cd;var a=_e!==null&&_e.next!==null;if(Ia=0,Ze=_e=Ut=null,bd=!1,gc=0,Ks=null,a)throw Error(i(300));r===null||mn||(r=r.dependencies,r!==null&&hd(r)&&(mn=!0))}function av(r,a,s,c){Ut=r;var h=0;do{if(Gs&&(Ks=null),gc=0,Gs=!1,25<=h)throw Error(i(301));if(h+=1,Ze=_e=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}q.H=Iw,m=a(s,c)}while(Gs);return m}function Ew(){var r=q.H,a=r.useState()[0];return a=typeof a.then=="function"?mc(a):a,r=r.useState()[0],(_e!==null?_e.memoizedState:null)!==r&&(Ut.flags|=1024),a}function Rp(){var r=xd!==0;return xd=0,r}function Ip(r,a,s){a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~s}function Mp(r){if(bd){for(r=r.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}bd=!1}Ia=0,Ze=_e=Ut=null,Gs=!1,gc=xd=0,Ks=null}function Zn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ut.memoizedState=Ze=r:Ze=Ze.next=r,Ze}function Je(){if(_e===null){var r=Ut.alternate;r=r!==null?r.memoizedState:null}else r=_e.next;var a=Ze===null?Ut.memoizedState:Ze.next;if(a!==null)Ze=a,_e=r;else{if(r===null)throw Ut.alternate===null?Error(i(467)):Error(i(310));_e=r,r={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ze===null?Ut.memoizedState=Ze=r:Ze=Ze.next=r}return Ze}function Op(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mc(r){var a=gc;return gc+=1,Ks===null&&(Ks=[]),r=Z0(Ks,r,a),a=Ut,(Ze===null?a.memoizedState:Ze.next)===null&&(a=a.alternate,q.H=a===null||a.memoizedState===null?Bv:Uv),r}function Sd(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return mc(r);if(r.$$typeof===z)return Vn(r)}throw Error(i(438,String(r)))}function Dp(r){var a=null,s=Ut.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=Ut.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=Op(),Ut.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(r),c=0;c<r;c++)s[c]=S;return a.index++,s}function Xi(r,a){return typeof a=="function"?a(r):a}function _d(r){var a=Je();return Np(a,_e,r)}function Np(r,a,s){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=s;var h=r.baseQueue,m=c.pending;if(m!==null){if(h!==null){var T=h.next;h.next=m.next,m.next=T}a.baseQueue=h=m,c.pending=null}if(m=r.baseState,h===null)r.memoizedState=m;else{a=h.next;var I=T=null,H=null,Q=a,ot=!1;do{var ct=Q.lane&-536870913;if(ct!==Q.lane?(ee&ct)===ct:(Ia&ct)===ct){var Z=Q.revertLane;if(Z===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ct===Hs&&(ot=!0);else if((Ia&Z)===Z){Q=Q.next,Z===Hs&&(ot=!0);continue}else ct={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},H===null?(I=H=ct,T=m):H=H.next=ct,Ut.lanes|=Z,ja|=Z;ct=Q.action,Uo&&s(m,ct),m=Q.hasEagerState?Q.eagerState:s(m,ct)}else Z={lane:ct,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},H===null?(I=H=Z,T=m):H=H.next=Z,Ut.lanes|=ct,ja|=ct;Q=Q.next}while(Q!==null&&Q!==a);if(H===null?T=m:H.next=I,!sr(m,r.memoizedState)&&(mn=!0,ot&&(s=Fs,s!==null)))throw s;r.memoizedState=m,r.baseState=T,r.baseQueue=H,c.lastRenderedState=m}return h===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function kp(r){var a=Je(),s=a.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=r;var c=s.dispatch,h=s.pending,m=a.memoizedState;if(h!==null){s.pending=null;var T=h=h.next;do m=r(m,T.action),T=T.next;while(T!==h);sr(m,a.memoizedState)||(mn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),s.lastRenderedState=m}return[m,c]}function ov(r,a,s){var c=Ut,h=Je(),m=ue;if(m){if(s===void 0)throw Error(i(407));s=s()}else s=a();var T=!sr((_e||h).memoizedState,s);T&&(h.memoizedState=s,mn=!0),h=h.queue;var I=cv.bind(null,c,h,r);if(yc(2048,8,I,[r]),h.getSnapshot!==a||T||Ze!==null&&Ze.memoizedState.tag&1){if(c.flags|=2048,Ys(9,Ed(),lv.bind(null,c,h,s,a),null),Oe===null)throw Error(i(349));m||(Ia&124)!==0||sv(c,a,s)}return s}function sv(r,a,s){r.flags|=16384,r={getSnapshot:a,value:s},a=Ut.updateQueue,a===null?(a=Op(),Ut.updateQueue=a,a.stores=[r]):(s=a.stores,s===null?a.stores=[r]:s.push(r))}function lv(r,a,s,c){a.value=s,a.getSnapshot=c,uv(a)&&dv(r)}function cv(r,a,s){return s(function(){uv(a)&&dv(r)})}function uv(r){var a=r.getSnapshot;r=r.value;try{var s=a();return!sr(r,s)}catch{return!0}}function dv(r){var a=Ls(r,2);a!==null&&hr(a,r,2)}function Pp(r){var a=Zn();if(typeof r=="function"){var s=r;if(r=s(),Uo){fn(!0);try{s()}finally{fn(!1)}}}return a.memoizedState=a.baseState=r,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:r},a}function fv(r,a,s,c){return r.baseState=s,Np(r,_e,typeof c=="function"?c:Xi)}function Tw(r,a,s,c,h){if(wd(r))throw Error(i(485));if(r=a.action,r!==null){var m={payload:h,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};q.T!==null?s(!0):m.isTransition=!1,c(m),s=a.pending,s===null?(m.next=a.pending=m,hv(a,m)):(m.next=s.next,a.pending=s.next=m)}}function hv(r,a){var s=a.action,c=a.payload,h=r.state;if(a.isTransition){var m=q.T,T={};q.T=T;try{var I=s(h,c),H=q.S;H!==null&&H(T,I),pv(r,a,I)}catch(Q){jp(r,a,Q)}finally{q.T=m}}else try{m=s(h,c),pv(r,a,m)}catch(Q){jp(r,a,Q)}}function pv(r,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){gv(r,a,c)},function(c){return jp(r,a,c)}):gv(r,a,s)}function gv(r,a,s){a.status="fulfilled",a.value=s,mv(a),r.state=s,a=r.pending,a!==null&&(s=a.next,s===a?r.pending=null:(s=s.next,a.next=s,hv(r,s)))}function jp(r,a,s){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,mv(a),a=a.next;while(a!==c)}r.action=null}function mv(r){r=r.listeners;for(var a=0;a<r.length;a++)(0,r[a])()}function yv(r,a){return a}function vv(r,a){if(ue){var s=Oe.formState;if(s!==null){t:{var c=Ut;if(ue){if(Be){e:{for(var h=Be,m=gi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Gr(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Be=Gr(h.nextSibling),c=h.data==="F!";break t}}Vo(c)}c=!1}c&&(a=s[0])}}return s=Zn(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yv,lastRenderedState:a},s.queue=c,s=Vv.bind(null,Ut,c),c.dispatch=s,c=Pp(!1),m=Up.bind(null,Ut,!1,c.queue),c=Zn(),h={state:a,dispatch:null,action:r,pending:null},c.queue=h,s=Tw.bind(null,Ut,h,m,s),h.dispatch=s,c.memoizedState=r,[a,s,!1]}function bv(r){var a=Je();return xv(a,_e,r)}function xv(r,a,s){if(a=Np(r,a,yv)[0],r=_d(Xi)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=mc(a)}catch(T){throw T===uc?md:T}else c=a;a=Je();var h=a.queue,m=h.dispatch;return s!==a.memoizedState&&(Ut.flags|=2048,Ys(9,Ed(),ww.bind(null,h,s),null)),[c,m,r]}function ww(r,a){r.action=a}function Sv(r){var a=Je(),s=_e;if(s!==null)return xv(a,s,r);Je(),a=a.memoizedState,s=Je();var c=s.queue.dispatch;return s.memoizedState=r,[a,c,!1]}function Ys(r,a,s,c){return r={tag:r,create:s,deps:c,inst:a,next:null},a=Ut.updateQueue,a===null&&(a=Op(),Ut.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=r.next=r:(c=s.next,s.next=r,r.next=c,a.lastEffect=r),r}function Ed(){return{destroy:void 0,resource:void 0}}function _v(){return Je().memoizedState}function Td(r,a,s,c){var h=Zn();c=c===void 0?null:c,Ut.flags|=r,h.memoizedState=Ys(1|a,Ed(),s,c)}function yc(r,a,s,c){var h=Je();c=c===void 0?null:c;var m=h.memoizedState.inst;_e!==null&&c!==null&&Cp(c,_e.memoizedState.deps)?h.memoizedState=Ys(a,m,s,c):(Ut.flags|=r,h.memoizedState=Ys(1|a,m,s,c))}function Ev(r,a){Td(8390656,8,r,a)}function Tv(r,a){yc(2048,8,r,a)}function wv(r,a){return yc(4,2,r,a)}function Cv(r,a){return yc(4,4,r,a)}function Av(r,a){if(typeof a=="function"){r=r();var s=a(r);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return r=r(),a.current=r,function(){a.current=null}}function Rv(r,a,s){s=s!=null?s.concat([r]):null,yc(4,4,Av.bind(null,a,r),s)}function Vp(){}function Iv(r,a){var s=Je();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&Cp(a,c[1])?c[0]:(s.memoizedState=[r,a],r)}function Mv(r,a){var s=Je();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&Cp(a,c[1]))return c[0];if(c=r(),Uo){fn(!0);try{r()}finally{fn(!1)}}return s.memoizedState=[c,a],c}function zp(r,a,s){return s===void 0||(Ia&1073741824)!==0?r.memoizedState=a:(r.memoizedState=s,r=Nb(),Ut.lanes|=r,ja|=r,s)}function Ov(r,a,s,c){return sr(s,a)?s:qs.current!==null?(r=zp(r,s,c),sr(r,a)||(mn=!0),r):(Ia&42)===0?(mn=!0,r.memoizedState=s):(r=Nb(),Ut.lanes|=r,ja|=r,a)}function Dv(r,a,s,c,h){var m=nt.p;nt.p=m!==0&&8>m?m:8;var T=q.T,I={};q.T=I,Up(r,!1,a,s);try{var H=h(),Q=q.S;if(Q!==null&&Q(I,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ot=Sw(H,c);vc(r,a,ot,fr(r))}else vc(r,a,c,fr(r))}catch(ct){vc(r,a,{then:function(){},status:"rejected",reason:ct},fr())}finally{nt.p=m,q.T=T}}function Cw(){}function Lp(r,a,s,c){if(r.tag!==5)throw Error(i(476));var h=Nv(r).queue;Dv(r,h,a,at,s===null?Cw:function(){return kv(r),s(c)})}function Nv(r){var a=r.memoizedState;if(a!==null)return a;a={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:at},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:s},next:null},r.memoizedState=a,r=r.alternate,r!==null&&(r.memoizedState=a),a}function kv(r){var a=Nv(r).next.queue;vc(r,a,{},fr())}function Bp(){return Vn(jc)}function Pv(){return Je().memoizedState}function jv(){return Je().memoizedState}function Aw(r){for(var a=r.return;a!==null;){switch(a.tag){case 24:case 3:var s=fr();r=Aa(s);var c=Ra(a,r,s);c!==null&&(hr(c,a,s),fc(c,a,s)),a={cache:mp()},r.payload=a;return}a=a.return}}function Rw(r,a,s){var c=fr();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},wd(r)?zv(a,s):(s=op(r,a,s,c),s!==null&&(hr(s,r,c),Lv(s,a,c)))}function Vv(r,a,s){var c=fr();vc(r,a,s,c)}function vc(r,a,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(wd(r))zv(a,h);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var T=a.lastRenderedState,I=m(T,s);if(h.hasEagerState=!0,h.eagerState=I,sr(I,T))return ld(r,a,h,0),Oe===null&&sd(),!1}catch{}finally{}if(s=op(r,a,h,c),s!==null)return hr(s,r,c),Lv(s,a,c),!0}return!1}function Up(r,a,s,c){if(c={lane:2,revertLane:bg(),action:c,hasEagerState:!1,eagerState:null,next:null},wd(r)){if(a)throw Error(i(479))}else a=op(r,s,c,2),a!==null&&hr(a,r,2)}function wd(r){var a=r.alternate;return r===Ut||a!==null&&a===Ut}function zv(r,a){Gs=bd=!0;var s=r.pending;s===null?a.next=a:(a.next=s.next,s.next=a),r.pending=a}function Lv(r,a,s){if((s&4194048)!==0){var c=a.lanes;c&=r.pendingLanes,s|=c,a.lanes=s,mo(r,s)}}var Cd={readContext:Vn,use:Sd,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge},Bv={readContext:Vn,use:Sd,useCallback:function(r,a){return Zn().memoizedState=[r,a===void 0?null:a],r},useContext:Vn,useEffect:Ev,useImperativeHandle:function(r,a,s){s=s!=null?s.concat([r]):null,Td(4194308,4,Av.bind(null,a,r),s)},useLayoutEffect:function(r,a){return Td(4194308,4,r,a)},useInsertionEffect:function(r,a){Td(4,2,r,a)},useMemo:function(r,a){var s=Zn();a=a===void 0?null:a;var c=r();if(Uo){fn(!0);try{r()}finally{fn(!1)}}return s.memoizedState=[c,a],c},useReducer:function(r,a,s){var c=Zn();if(s!==void 0){var h=s(a);if(Uo){fn(!0);try{s(a)}finally{fn(!1)}}}else h=a;return c.memoizedState=c.baseState=h,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:h},c.queue=r,r=r.dispatch=Rw.bind(null,Ut,r),[c.memoizedState,r]},useRef:function(r){var a=Zn();return r={current:r},a.memoizedState=r},useState:function(r){r=Pp(r);var a=r.queue,s=Vv.bind(null,Ut,a);return a.dispatch=s,[r.memoizedState,s]},useDebugValue:Vp,useDeferredValue:function(r,a){var s=Zn();return zp(s,r,a)},useTransition:function(){var r=Pp(!1);return r=Dv.bind(null,Ut,r.queue,!0,!1),Zn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,a,s){var c=Ut,h=Zn();if(ue){if(s===void 0)throw Error(i(407));s=s()}else{if(s=a(),Oe===null)throw Error(i(349));(ee&124)!==0||sv(c,a,s)}h.memoizedState=s;var m={value:s,getSnapshot:a};return h.queue=m,Ev(cv.bind(null,c,m,r),[r]),c.flags|=2048,Ys(9,Ed(),lv.bind(null,c,m,s,a),null),s},useId:function(){var r=Zn(),a=Oe.identifierPrefix;if(ue){var s=Yi,c=Ki;s=(c&~(1<<32-hn(c)-1)).toString(32)+s,a="«"+a+"R"+s,s=xd++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=_w++,a="«"+a+"r"+s.toString(32)+"»";return r.memoizedState=a},useHostTransitionStatus:Bp,useFormState:vv,useActionState:vv,useOptimistic:function(r){var a=Zn();a.memoizedState=a.baseState=r;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=Up.bind(null,Ut,!0,s),s.dispatch=a,[r,a]},useMemoCache:Dp,useCacheRefresh:function(){return Zn().memoizedState=Aw.bind(null,Ut)}},Uv={readContext:Vn,use:Sd,useCallback:Iv,useContext:Vn,useEffect:Tv,useImperativeHandle:Rv,useInsertionEffect:wv,useLayoutEffect:Cv,useMemo:Mv,useReducer:_d,useRef:_v,useState:function(){return _d(Xi)},useDebugValue:Vp,useDeferredValue:function(r,a){var s=Je();return Ov(s,_e.memoizedState,r,a)},useTransition:function(){var r=_d(Xi)[0],a=Je().memoizedState;return[typeof r=="boolean"?r:mc(r),a]},useSyncExternalStore:ov,useId:Pv,useHostTransitionStatus:Bp,useFormState:bv,useActionState:bv,useOptimistic:function(r,a){var s=Je();return fv(s,_e,r,a)},useMemoCache:Dp,useCacheRefresh:jv},Iw={readContext:Vn,use:Sd,useCallback:Iv,useContext:Vn,useEffect:Tv,useImperativeHandle:Rv,useInsertionEffect:wv,useLayoutEffect:Cv,useMemo:Mv,useReducer:kp,useRef:_v,useState:function(){return kp(Xi)},useDebugValue:Vp,useDeferredValue:function(r,a){var s=Je();return _e===null?zp(s,r,a):Ov(s,_e.memoizedState,r,a)},useTransition:function(){var r=kp(Xi)[0],a=Je().memoizedState;return[typeof r=="boolean"?r:mc(r),a]},useSyncExternalStore:ov,useId:Pv,useHostTransitionStatus:Bp,useFormState:Sv,useActionState:Sv,useOptimistic:function(r,a){var s=Je();return _e!==null?fv(s,_e,r,a):(s.baseState=r,[r,s.queue.dispatch])},useMemoCache:Dp,useCacheRefresh:jv},Ws=null,bc=0;function Ad(r){var a=bc;return bc+=1,Ws===null&&(Ws=[]),Z0(Ws,r,a)}function xc(r,a){a=a.props.ref,r.ref=a!==void 0?a:null}function Rd(r,a){throw a.$$typeof===x?Error(i(525)):(r=Object.prototype.toString.call(a),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":r)))}function $v(r){var a=r._init;return a(r._payload)}function Hv(r){function a(K,G){if(r){var W=K.deletions;W===null?(K.deletions=[G],K.flags|=16):W.push(G)}}function s(K,G){if(!r)return null;for(;G!==null;)a(K,G),G=G.sibling;return null}function c(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function h(K,G){return K=Gi(K,G),K.index=0,K.sibling=null,K}function m(K,G,W){return K.index=W,r?(W=K.alternate,W!==null?(W=W.index,W<G?(K.flags|=67108866,G):W):(K.flags|=67108866,G)):(K.flags|=1048576,G)}function T(K){return r&&K.alternate===null&&(K.flags|=67108866),K}function I(K,G,W,st){return G===null||G.tag!==6?(G=lp(W,K.mode,st),G.return=K,G):(G=h(G,W),G.return=K,G)}function H(K,G,W,st){var St=W.type;return St===C?ot(K,G,W.props.children,st,W.key):G!==null&&(G.elementType===St||typeof St=="object"&&St!==null&&St.$$typeof===M&&$v(St)===G.type)?(G=h(G,W.props),xc(G,W),G.return=K,G):(G=ud(W.type,W.key,W.props,null,K.mode,st),xc(G,W),G.return=K,G)}function Q(K,G,W,st){return G===null||G.tag!==4||G.stateNode.containerInfo!==W.containerInfo||G.stateNode.implementation!==W.implementation?(G=cp(W,K.mode,st),G.return=K,G):(G=h(G,W.children||[]),G.return=K,G)}function ot(K,G,W,st,St){return G===null||G.tag!==7?(G=No(W,K.mode,st,St),G.return=K,G):(G=h(G,W),G.return=K,G)}function ct(K,G,W){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=lp(""+G,K.mode,W),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case _:return W=ud(G.type,G.key,G.props,null,K.mode,W),xc(W,G),W.return=K,W;case w:return G=cp(G,K.mode,W),G.return=K,G;case M:var st=G._init;return G=st(G._payload),ct(K,G,W)}if(lt(G)||L(G))return G=No(G,K.mode,W,null),G.return=K,G;if(typeof G.then=="function")return ct(K,Ad(G),W);if(G.$$typeof===z)return ct(K,pd(K,G),W);Rd(K,G)}return null}function Z(K,G,W,st){var St=G!==null?G.key:null;if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return St!==null?null:I(K,G,""+W,st);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case _:return W.key===St?H(K,G,W,st):null;case w:return W.key===St?Q(K,G,W,st):null;case M:return St=W._init,W=St(W._payload),Z(K,G,W,st)}if(lt(W)||L(W))return St!==null?null:ot(K,G,W,st,null);if(typeof W.then=="function")return Z(K,G,Ad(W),st);if(W.$$typeof===z)return Z(K,G,pd(K,W),st);Rd(K,W)}return null}function J(K,G,W,st,St){if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return K=K.get(W)||null,I(G,K,""+st,St);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case _:return K=K.get(st.key===null?W:st.key)||null,H(G,K,st,St);case w:return K=K.get(st.key===null?W:st.key)||null,Q(G,K,st,St);case M:var Ft=st._init;return st=Ft(st._payload),J(K,G,W,st,St)}if(lt(st)||L(st))return K=K.get(W)||null,ot(G,K,st,St,null);if(typeof st.then=="function")return J(K,G,W,Ad(st),St);if(st.$$typeof===z)return J(K,G,W,pd(G,st),St);Rd(G,st)}return null}function Pt(K,G,W,st){for(var St=null,Ft=null,Tt=G,Dt=G=0,vn=null;Tt!==null&&Dt<W.length;Dt++){Tt.index>Dt?(vn=Tt,Tt=null):vn=Tt.sibling;var ae=Z(K,Tt,W[Dt],st);if(ae===null){Tt===null&&(Tt=vn);break}r&&Tt&&ae.alternate===null&&a(K,Tt),G=m(ae,G,Dt),Ft===null?St=ae:Ft.sibling=ae,Ft=ae,Tt=vn}if(Dt===W.length)return s(K,Tt),ue&&Po(K,Dt),St;if(Tt===null){for(;Dt<W.length;Dt++)Tt=ct(K,W[Dt],st),Tt!==null&&(G=m(Tt,G,Dt),Ft===null?St=Tt:Ft.sibling=Tt,Ft=Tt);return ue&&Po(K,Dt),St}for(Tt=c(Tt);Dt<W.length;Dt++)vn=J(Tt,K,Dt,W[Dt],st),vn!==null&&(r&&vn.alternate!==null&&Tt.delete(vn.key===null?Dt:vn.key),G=m(vn,G,Dt),Ft===null?St=vn:Ft.sibling=vn,Ft=vn);return r&&Tt.forEach(function(qa){return a(K,qa)}),ue&&Po(K,Dt),St}function Ot(K,G,W,st){if(W==null)throw Error(i(151));for(var St=null,Ft=null,Tt=G,Dt=G=0,vn=null,ae=W.next();Tt!==null&&!ae.done;Dt++,ae=W.next()){Tt.index>Dt?(vn=Tt,Tt=null):vn=Tt.sibling;var qa=Z(K,Tt,ae.value,st);if(qa===null){Tt===null&&(Tt=vn);break}r&&Tt&&qa.alternate===null&&a(K,Tt),G=m(qa,G,Dt),Ft===null?St=qa:Ft.sibling=qa,Ft=qa,Tt=vn}if(ae.done)return s(K,Tt),ue&&Po(K,Dt),St;if(Tt===null){for(;!ae.done;Dt++,ae=W.next())ae=ct(K,ae.value,st),ae!==null&&(G=m(ae,G,Dt),Ft===null?St=ae:Ft.sibling=ae,Ft=ae);return ue&&Po(K,Dt),St}for(Tt=c(Tt);!ae.done;Dt++,ae=W.next())ae=J(Tt,K,Dt,ae.value,st),ae!==null&&(r&&ae.alternate!==null&&Tt.delete(ae.key===null?Dt:ae.key),G=m(ae,G,Dt),Ft===null?St=ae:Ft.sibling=ae,Ft=ae);return r&&Tt.forEach(function(MC){return a(K,MC)}),ue&&Po(K,Dt),St}function Te(K,G,W,st){if(typeof W=="object"&&W!==null&&W.type===C&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case _:t:{for(var St=W.key;G!==null;){if(G.key===St){if(St=W.type,St===C){if(G.tag===7){s(K,G.sibling),st=h(G,W.props.children),st.return=K,K=st;break t}}else if(G.elementType===St||typeof St=="object"&&St!==null&&St.$$typeof===M&&$v(St)===G.type){s(K,G.sibling),st=h(G,W.props),xc(st,W),st.return=K,K=st;break t}s(K,G);break}else a(K,G);G=G.sibling}W.type===C?(st=No(W.props.children,K.mode,st,W.key),st.return=K,K=st):(st=ud(W.type,W.key,W.props,null,K.mode,st),xc(st,W),st.return=K,K=st)}return T(K);case w:t:{for(St=W.key;G!==null;){if(G.key===St)if(G.tag===4&&G.stateNode.containerInfo===W.containerInfo&&G.stateNode.implementation===W.implementation){s(K,G.sibling),st=h(G,W.children||[]),st.return=K,K=st;break t}else{s(K,G);break}else a(K,G);G=G.sibling}st=cp(W,K.mode,st),st.return=K,K=st}return T(K);case M:return St=W._init,W=St(W._payload),Te(K,G,W,st)}if(lt(W))return Pt(K,G,W,st);if(L(W)){if(St=L(W),typeof St!="function")throw Error(i(150));return W=St.call(W),Ot(K,G,W,st)}if(typeof W.then=="function")return Te(K,G,Ad(W),st);if(W.$$typeof===z)return Te(K,G,pd(K,W),st);Rd(K,W)}return typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint"?(W=""+W,G!==null&&G.tag===6?(s(K,G.sibling),st=h(G,W),st.return=K,K=st):(s(K,G),st=lp(W,K.mode,st),st.return=K,K=st),T(K)):s(K,G)}return function(K,G,W,st){try{bc=0;var St=Te(K,G,W,st);return Ws=null,St}catch(Tt){if(Tt===uc||Tt===md)throw Tt;var Ft=lr(29,Tt,null,K.mode);return Ft.lanes=st,Ft.return=K,Ft}finally{}}}var Qs=Hv(!0),Fv=Hv(!1),Mr=tt(null),mi=null;function Ma(r){var a=r.alternate;dt(sn,sn.current&1),dt(Mr,r),mi===null&&(a===null||qs.current!==null||a.memoizedState!==null)&&(mi=r)}function qv(r){if(r.tag===22){if(dt(sn,sn.current),dt(Mr,r),mi===null){var a=r.alternate;a!==null&&a.memoizedState!==null&&(mi=r)}}else Oa()}function Oa(){dt(sn,sn.current),dt(Mr,Mr.current)}function Zi(r){ht(Mr),mi===r&&(mi=null),ht(sn)}var sn=tt(0);function Id(r){for(var a=r;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Og(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function $p(r,a,s,c){a=r.memoizedState,s=s(c,a),s=s==null?a:y({},a,s),r.memoizedState=s,r.lanes===0&&(r.updateQueue.baseState=s)}var Hp={enqueueSetState:function(r,a,s){r=r._reactInternals;var c=fr(),h=Aa(c);h.payload=a,s!=null&&(h.callback=s),a=Ra(r,h,c),a!==null&&(hr(a,r,c),fc(a,r,c))},enqueueReplaceState:function(r,a,s){r=r._reactInternals;var c=fr(),h=Aa(c);h.tag=1,h.payload=a,s!=null&&(h.callback=s),a=Ra(r,h,c),a!==null&&(hr(a,r,c),fc(a,r,c))},enqueueForceUpdate:function(r,a){r=r._reactInternals;var s=fr(),c=Aa(s);c.tag=2,a!=null&&(c.callback=a),a=Ra(r,c,s),a!==null&&(hr(a,r,s),fc(a,r,s))}};function Gv(r,a,s,c,h,m,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,T):a.prototype&&a.prototype.isPureReactComponent?!nc(s,c)||!nc(h,m):!0}function Kv(r,a,s,c){r=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==r&&Hp.enqueueReplaceState(a,a.state,null)}function $o(r,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(r=r.defaultProps){s===a&&(s=y({},s));for(var h in r)s[h]===void 0&&(s[h]=r[h])}return s}var Md=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Yv(r){Md(r)}function Wv(r){console.error(r)}function Qv(r){Md(r)}function Od(r,a){try{var s=r.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function Xv(r,a,s){try{var c=r.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Fp(r,a,s){return s=Aa(s),s.tag=3,s.payload={element:null},s.callback=function(){Od(r,a)},s}function Zv(r){return r=Aa(r),r.tag=3,r}function Jv(r,a,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=c.value;r.payload=function(){return h(m)},r.callback=function(){Xv(a,s,c)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(r.callback=function(){Xv(a,s,c),typeof h!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var I=c.stack;this.componentDidCatch(c.value,{componentStack:I!==null?I:""})})}function Mw(r,a,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&sc(a,s,h,!0),s=Mr.current,s!==null){switch(s.tag){case 13:return mi===null?pg():s.alternate===null&&Ue===0&&(Ue=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===bp?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),mg(r,c,h)),!1;case 22:return s.flags|=65536,c===bp?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),mg(r,c,h)),!1}throw Error(i(435,s.tag))}return mg(r,c,h),pg(),!1}if(ue)return a=Mr.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,c!==fp&&(r=Error(i(422),{cause:c}),oc(Cr(r,s)))):(c!==fp&&(a=Error(i(423),{cause:c}),oc(Cr(a,s))),r=r.current.alternate,r.flags|=65536,h&=-h,r.lanes|=h,c=Cr(c,s),h=Fp(r.stateNode,c,h),_p(r,h),Ue!==4&&(Ue=2)),!1;var m=Error(i(520),{cause:c});if(m=Cr(m,s),Ac===null?Ac=[m]:Ac.push(m),Ue!==4&&(Ue=2),a===null)return!0;c=Cr(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,r=h&-h,s.lanes|=r,r=Fp(s.stateNode,c,r),_p(s,r),!1;case 1:if(a=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Va===null||!Va.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Zv(h),Jv(h,r,s,c),_p(s,h),!1}s=s.return}while(s!==null);return!1}var tb=Error(i(461)),mn=!1;function wn(r,a,s,c){a.child=r===null?Fv(a,null,s,c):Qs(a,r.child,s,c)}function eb(r,a,s,c,h){s=s.render;var m=a.ref;if("ref"in c){var T={};for(var I in c)I!=="ref"&&(T[I]=c[I])}else T=c;return Lo(a),c=Ap(r,a,s,T,m,h),I=Rp(),r!==null&&!mn?(Ip(r,a,h),Ji(r,a,h)):(ue&&I&&up(a),a.flags|=1,wn(r,a,c,h),a.child)}function nb(r,a,s,c,h){if(r===null){var m=s.type;return typeof m=="function"&&!sp(m)&&m.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=m,rb(r,a,m,c,h)):(r=ud(s.type,null,c,a,a.mode,h),r.ref=a.ref,r.return=a,a.child=r)}if(m=r.child,!Zp(r,h)){var T=m.memoizedProps;if(s=s.compare,s=s!==null?s:nc,s(T,c)&&r.ref===a.ref)return Ji(r,a,h)}return a.flags|=1,r=Gi(m,c),r.ref=a.ref,r.return=a,a.child=r}function rb(r,a,s,c,h){if(r!==null){var m=r.memoizedProps;if(nc(m,c)&&r.ref===a.ref)if(mn=!1,a.pendingProps=c=m,Zp(r,h))(r.flags&131072)!==0&&(mn=!0);else return a.lanes=r.lanes,Ji(r,a,h)}return qp(r,a,s,c,h)}function ib(r,a,s){var c=a.pendingProps,h=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=m!==null?m.baseLanes|s:s,r!==null){for(h=a.child=r.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;a.childLanes=m&~c}else a.childLanes=0,a.child=null;return ab(r,a,c,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},r!==null&&gd(a,m!==null?m.cachePool:null),m!==null?rv(a,m):Tp(),qv(a);else return a.lanes=a.childLanes=536870912,ab(r,a,m!==null?m.baseLanes|s:s,s)}else m!==null?(gd(a,m.cachePool),rv(a,m),Oa(),a.memoizedState=null):(r!==null&&gd(a,null),Tp(),Oa());return wn(r,a,h,s),a.child}function ab(r,a,s,c){var h=vp();return h=h===null?null:{parent:on._currentValue,pool:h},a.memoizedState={baseLanes:s,cachePool:h},r!==null&&gd(a,null),Tp(),qv(a),r!==null&&sc(r,a,c,!0),null}function Dd(r,a){var s=a.ref;if(s===null)r!==null&&r.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(r===null||r.ref!==s)&&(a.flags|=4194816)}}function qp(r,a,s,c,h){return Lo(a),s=Ap(r,a,s,c,void 0,h),c=Rp(),r!==null&&!mn?(Ip(r,a,h),Ji(r,a,h)):(ue&&c&&up(a),a.flags|=1,wn(r,a,s,h),a.child)}function ob(r,a,s,c,h,m){return Lo(a),a.updateQueue=null,s=av(a,c,s,h),iv(r),c=Rp(),r!==null&&!mn?(Ip(r,a,m),Ji(r,a,m)):(ue&&c&&up(a),a.flags|=1,wn(r,a,s,m),a.child)}function sb(r,a,s,c,h){if(Lo(a),a.stateNode===null){var m=Bs,T=s.contextType;typeof T=="object"&&T!==null&&(m=Vn(T)),m=new s(c,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Hp,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=c,m.state=a.memoizedState,m.refs={},xp(a),T=s.contextType,m.context=typeof T=="object"&&T!==null?Vn(T):Bs,m.state=a.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&($p(a,s,T,c),m.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&Hp.enqueueReplaceState(m,m.state,null),pc(a,c,m,h),hc(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(r===null){m=a.stateNode;var I=a.memoizedProps,H=$o(s,I);m.props=H;var Q=m.context,ot=s.contextType;T=Bs,typeof ot=="object"&&ot!==null&&(T=Vn(ot));var ct=s.getDerivedStateFromProps;ot=typeof ct=="function"||typeof m.getSnapshotBeforeUpdate=="function",I=a.pendingProps!==I,ot||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(I||Q!==T)&&Kv(a,m,c,T),Ca=!1;var Z=a.memoizedState;m.state=Z,pc(a,c,m,h),hc(),Q=a.memoizedState,I||Z!==Q||Ca?(typeof ct=="function"&&($p(a,s,ct,c),Q=a.memoizedState),(H=Ca||Gv(a,s,H,c,Z,Q,T))?(ot||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=Q),m.props=c,m.state=Q,m.context=T,c=H):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{m=a.stateNode,Sp(r,a),T=a.memoizedProps,ot=$o(s,T),m.props=ot,ct=a.pendingProps,Z=m.context,Q=s.contextType,H=Bs,typeof Q=="object"&&Q!==null&&(H=Vn(Q)),I=s.getDerivedStateFromProps,(Q=typeof I=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==ct||Z!==H)&&Kv(a,m,c,H),Ca=!1,Z=a.memoizedState,m.state=Z,pc(a,c,m,h),hc();var J=a.memoizedState;T!==ct||Z!==J||Ca||r!==null&&r.dependencies!==null&&hd(r.dependencies)?(typeof I=="function"&&($p(a,s,I,c),J=a.memoizedState),(ot=Ca||Gv(a,s,ot,c,Z,J,H)||r!==null&&r.dependencies!==null&&hd(r.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,J,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,J,H)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===r.memoizedProps&&Z===r.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&Z===r.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=J),m.props=c,m.state=J,m.context=H,c=ot):(typeof m.componentDidUpdate!="function"||T===r.memoizedProps&&Z===r.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&Z===r.memoizedState||(a.flags|=1024),c=!1)}return m=c,Dd(r,a),c=(a.flags&128)!==0,m||c?(m=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,r!==null&&c?(a.child=Qs(a,r.child,null,h),a.child=Qs(a,null,s,h)):wn(r,a,s,h),a.memoizedState=m.state,r=a.child):r=Ji(r,a,h),r}function lb(r,a,s,c){return ac(),a.flags|=256,wn(r,a,s,c),a.child}var Gp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kp(r){return{baseLanes:r,cachePool:W0()}}function Yp(r,a,s){return r=r!==null?r.childLanes&~s:0,a&&(r|=Or),r}function cb(r,a,s){var c=a.pendingProps,h=!1,m=(a.flags&128)!==0,T;if((T=m)||(T=r!==null&&r.memoizedState===null?!1:(sn.current&2)!==0),T&&(h=!0,a.flags&=-129),T=(a.flags&32)!==0,a.flags&=-33,r===null){if(ue){if(h?Ma(a):Oa(),ue){var I=Be,H;if(H=I){t:{for(H=I,I=gi;H.nodeType!==8;){if(!I){I=null;break t}if(H=Gr(H.nextSibling),H===null){I=null;break t}}I=H}I!==null?(a.memoizedState={dehydrated:I,treeContext:ko!==null?{id:Ki,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},H=lr(18,null,null,0),H.stateNode=I,H.return=a,a.child=H,Kn=a,Be=null,H=!0):H=!1}H||Vo(a)}if(I=a.memoizedState,I!==null&&(I=I.dehydrated,I!==null))return Og(I)?a.lanes=32:a.lanes=536870912,null;Zi(a)}return I=c.children,c=c.fallback,h?(Oa(),h=a.mode,I=Nd({mode:"hidden",children:I},h),c=No(c,h,s,null),I.return=a,c.return=a,I.sibling=c,a.child=I,h=a.child,h.memoizedState=Kp(s),h.childLanes=Yp(r,T,s),a.memoizedState=Gp,c):(Ma(a),Wp(a,I))}if(H=r.memoizedState,H!==null&&(I=H.dehydrated,I!==null)){if(m)a.flags&256?(Ma(a),a.flags&=-257,a=Qp(r,a,s)):a.memoizedState!==null?(Oa(),a.child=r.child,a.flags|=128,a=null):(Oa(),h=c.fallback,I=a.mode,c=Nd({mode:"visible",children:c.children},I),h=No(h,I,s,null),h.flags|=2,c.return=a,h.return=a,c.sibling=h,a.child=c,Qs(a,r.child,null,s),c=a.child,c.memoizedState=Kp(s),c.childLanes=Yp(r,T,s),a.memoizedState=Gp,a=h);else if(Ma(a),Og(I)){if(T=I.nextSibling&&I.nextSibling.dataset,T)var Q=T.dgst;T=Q,c=Error(i(419)),c.stack="",c.digest=T,oc({value:c,source:null,stack:null}),a=Qp(r,a,s)}else if(mn||sc(r,a,s,!1),T=(s&r.childLanes)!==0,mn||T){if(T=Oe,T!==null&&(c=s&-s,c=(c&42)!==0?1:ri(c),c=(c&(T.suspendedLanes|s))!==0?0:c,c!==0&&c!==H.retryLane))throw H.retryLane=c,Ls(r,c),hr(T,r,c),tb;I.data==="$?"||pg(),a=Qp(r,a,s)}else I.data==="$?"?(a.flags|=192,a.child=r.child,a=null):(r=H.treeContext,Be=Gr(I.nextSibling),Kn=a,ue=!0,jo=null,gi=!1,r!==null&&(Rr[Ir++]=Ki,Rr[Ir++]=Yi,Rr[Ir++]=ko,Ki=r.id,Yi=r.overflow,ko=a),a=Wp(a,c.children),a.flags|=4096);return a}return h?(Oa(),h=c.fallback,I=a.mode,H=r.child,Q=H.sibling,c=Gi(H,{mode:"hidden",children:c.children}),c.subtreeFlags=H.subtreeFlags&65011712,Q!==null?h=Gi(Q,h):(h=No(h,I,s,null),h.flags|=2),h.return=a,c.return=a,c.sibling=h,a.child=c,c=h,h=a.child,I=r.child.memoizedState,I===null?I=Kp(s):(H=I.cachePool,H!==null?(Q=on._currentValue,H=H.parent!==Q?{parent:Q,pool:Q}:H):H=W0(),I={baseLanes:I.baseLanes|s,cachePool:H}),h.memoizedState=I,h.childLanes=Yp(r,T,s),a.memoizedState=Gp,c):(Ma(a),s=r.child,r=s.sibling,s=Gi(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,r!==null&&(T=a.deletions,T===null?(a.deletions=[r],a.flags|=16):T.push(r)),a.child=s,a.memoizedState=null,s)}function Wp(r,a){return a=Nd({mode:"visible",children:a},r.mode),a.return=r,r.child=a}function Nd(r,a){return r=lr(22,r,null,a),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Qp(r,a,s){return Qs(a,r.child,null,s),r=Wp(a,a.pendingProps.children),r.flags|=2,a.memoizedState=null,r}function ub(r,a,s){r.lanes|=a;var c=r.alternate;c!==null&&(c.lanes|=a),pp(r.return,a,s)}function Xp(r,a,s,c,h){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=s,m.tailMode=h)}function db(r,a,s){var c=a.pendingProps,h=c.revealOrder,m=c.tail;if(wn(r,a,c.children,s),c=sn.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(r!==null&&(r.flags&128)!==0)t:for(r=a.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ub(r,s,a);else if(r.tag===19)ub(r,s,a);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break t;for(;r.sibling===null;){if(r.return===null||r.return===a)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(dt(sn,c),h){case"forwards":for(s=a.child,h=null;s!==null;)r=s.alternate,r!==null&&Id(r)===null&&(h=s),s=s.sibling;s=h,s===null?(h=a.child,a.child=null):(h=s.sibling,s.sibling=null),Xp(a,!1,h,s,m);break;case"backwards":for(s=null,h=a.child,a.child=null;h!==null;){if(r=h.alternate,r!==null&&Id(r)===null){a.child=h;break}r=h.sibling,h.sibling=s,s=h,h=r}Xp(a,!0,s,null,m);break;case"together":Xp(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ji(r,a,s){if(r!==null&&(a.dependencies=r.dependencies),ja|=a.lanes,(s&a.childLanes)===0)if(r!==null){if(sc(r,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(r!==null&&a.child!==r.child)throw Error(i(153));if(a.child!==null){for(r=a.child,s=Gi(r,r.pendingProps),a.child=s,s.return=a;r.sibling!==null;)r=r.sibling,s=s.sibling=Gi(r,r.pendingProps),s.return=a;s.sibling=null}return a.child}function Zp(r,a){return(r.lanes&a)!==0?!0:(r=r.dependencies,!!(r!==null&&hd(r)))}function Ow(r,a,s){switch(a.tag){case 3:Wt(a,a.stateNode.containerInfo),wa(a,on,r.memoizedState.cache),ac();break;case 27:case 5:Nt(a);break;case 4:Wt(a,a.stateNode.containerInfo);break;case 10:wa(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Ma(a),a.flags|=128,null):(s&a.child.childLanes)!==0?cb(r,a,s):(Ma(a),r=Ji(r,a,s),r!==null?r.sibling:null);Ma(a);break;case 19:var h=(r.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(sc(r,a,s,!1),c=(s&a.childLanes)!==0),h){if(c)return db(r,a,s);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),dt(sn,sn.current),c)break;return null;case 22:case 23:return a.lanes=0,ib(r,a,s);case 24:wa(a,on,r.memoizedState.cache)}return Ji(r,a,s)}function fb(r,a,s){if(r!==null)if(r.memoizedProps!==a.pendingProps)mn=!0;else{if(!Zp(r,s)&&(a.flags&128)===0)return mn=!1,Ow(r,a,s);mn=(r.flags&131072)!==0}else mn=!1,ue&&(a.flags&1048576)!==0&&$0(a,fd,a.index);switch(a.lanes=0,a.tag){case 16:t:{r=a.pendingProps;var c=a.elementType,h=c._init;if(c=h(c._payload),a.type=c,typeof c=="function")sp(c)?(r=$o(c,r),a.tag=1,a=sb(null,a,c,r,s)):(a.tag=0,a=qp(null,a,c,r,s));else{if(c!=null){if(h=c.$$typeof,h===$){a.tag=11,a=eb(null,a,c,r,s);break t}else if(h===D){a.tag=14,a=nb(null,a,c,r,s);break t}}throw a=ft(c)||c,Error(i(306,a,""))}}return a;case 0:return qp(r,a,a.type,a.pendingProps,s);case 1:return c=a.type,h=$o(c,a.pendingProps),sb(r,a,c,h,s);case 3:t:{if(Wt(a,a.stateNode.containerInfo),r===null)throw Error(i(387));c=a.pendingProps;var m=a.memoizedState;h=m.element,Sp(r,a),pc(a,c,null,s);var T=a.memoizedState;if(c=T.cache,wa(a,on,c),c!==m.cache&&gp(a,[on],s,!0),hc(),c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=lb(r,a,c,s);break t}else if(c!==h){h=Cr(Error(i(424)),a),oc(h),a=lb(r,a,c,s);break t}else{switch(r=a.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Be=Gr(r.firstChild),Kn=a,ue=!0,jo=null,gi=!0,s=Fv(a,null,c,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ac(),c===h){a=Ji(r,a,s);break t}wn(r,a,c,s)}a=a.child}return a;case 26:return Dd(r,a),r===null?(s=m1(a.type,null,a.pendingProps,null))?a.memoizedState=s:ue||(s=a.type,r=a.pendingProps,c=Kd(_t.current).createElement(s),c[Rt]=a,c[It]=r,An(c,s,r),qe(c),a.stateNode=c):a.memoizedState=m1(a.type,r.memoizedProps,a.pendingProps,r.memoizedState),null;case 27:return Nt(a),r===null&&ue&&(c=a.stateNode=h1(a.type,a.pendingProps,_t.current),Kn=a,gi=!0,h=Be,Ba(a.type)?(Dg=h,Be=Gr(c.firstChild)):Be=h),wn(r,a,a.pendingProps.children,s),Dd(r,a),r===null&&(a.flags|=4194304),a.child;case 5:return r===null&&ue&&((h=c=Be)&&(c=aC(c,a.type,a.pendingProps,gi),c!==null?(a.stateNode=c,Kn=a,Be=Gr(c.firstChild),gi=!1,h=!0):h=!1),h||Vo(a)),Nt(a),h=a.type,m=a.pendingProps,T=r!==null?r.memoizedProps:null,c=m.children,Rg(h,m)?c=null:T!==null&&Rg(h,T)&&(a.flags|=32),a.memoizedState!==null&&(h=Ap(r,a,Ew,null,null,s),jc._currentValue=h),Dd(r,a),wn(r,a,c,s),a.child;case 6:return r===null&&ue&&((r=s=Be)&&(s=oC(s,a.pendingProps,gi),s!==null?(a.stateNode=s,Kn=a,Be=null,r=!0):r=!1),r||Vo(a)),null;case 13:return cb(r,a,s);case 4:return Wt(a,a.stateNode.containerInfo),c=a.pendingProps,r===null?a.child=Qs(a,null,c,s):wn(r,a,c,s),a.child;case 11:return eb(r,a,a.type,a.pendingProps,s);case 7:return wn(r,a,a.pendingProps,s),a.child;case 8:return wn(r,a,a.pendingProps.children,s),a.child;case 12:return wn(r,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,wa(a,a.type,c.value),wn(r,a,c.children,s),a.child;case 9:return h=a.type._context,c=a.pendingProps.children,Lo(a),h=Vn(h),c=c(h),a.flags|=1,wn(r,a,c,s),a.child;case 14:return nb(r,a,a.type,a.pendingProps,s);case 15:return rb(r,a,a.type,a.pendingProps,s);case 19:return db(r,a,s);case 31:return c=a.pendingProps,s=a.mode,c={mode:c.mode,children:c.children},r===null?(s=Nd(c,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=Gi(r.child,c),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return ib(r,a,s);case 24:return Lo(a),c=Vn(on),r===null?(h=vp(),h===null&&(h=Oe,m=mp(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),a.memoizedState={parent:c,cache:h},xp(a),wa(a,on,h)):((r.lanes&s)!==0&&(Sp(r,a),pc(a,null,null,s),hc()),h=r.memoizedState,m=a.memoizedState,h.parent!==c?(h={parent:c,cache:c},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),wa(a,on,c)):(c=m.cache,wa(a,on,c),c!==h.cache&&gp(a,[on],s,!0))),wn(r,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function ta(r){r.flags|=4}function hb(r,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!S1(a)){if(a=Mr.current,a!==null&&((ee&4194048)===ee?mi!==null:(ee&62914560)!==ee&&(ee&536870912)===0||a!==mi))throw dc=bp,Q0;r.flags|=8192}}function kd(r,a){a!==null&&(r.flags|=4),r.flags&16384&&(a=r.tag!==22?po():536870912,r.lanes|=a,tl|=a)}function Sc(r,a){if(!ue)switch(r.tailMode){case"hidden":a=r.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?r.tail=null:s.sibling=null;break;case"collapsed":s=r.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ve(r){var a=r.alternate!==null&&r.alternate.child===r.child,s=0,c=0;if(a)for(var h=r.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=c,r.childLanes=s,a}function Dw(r,a,s){var c=a.pendingProps;switch(dp(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(a),null;case 1:return Ve(a),null;case 3:return s=a.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),Qi(on),dn(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(r===null||r.child===null)&&(ic(a)?ta(a):r===null||r.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,q0())),Ve(a),null;case 26:return s=a.memoizedState,r===null?(ta(a),s!==null?(Ve(a),hb(a,s)):(Ve(a),a.flags&=-16777217)):s?s!==r.memoizedState?(ta(a),Ve(a),hb(a,s)):(Ve(a),a.flags&=-16777217):(r.memoizedProps!==c&&ta(a),Ve(a),a.flags&=-16777217),null;case 27:Qt(a),s=_t.current;var h=a.type;if(r!==null&&a.stateNode!=null)r.memoizedProps!==c&&ta(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return Ve(a),null}r=bt.current,ic(a)?H0(a):(r=h1(h,c,s),a.stateNode=r,ta(a))}return Ve(a),null;case 5:if(Qt(a),s=a.type,r!==null&&a.stateNode!=null)r.memoizedProps!==c&&ta(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return Ve(a),null}if(r=bt.current,ic(a))H0(a);else{switch(h=Kd(_t.current),r){case 1:r=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=h.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}r[Rt]=a,r[It]=c;t:for(h=a.child;h!==null;){if(h.tag===5||h.tag===6)r.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===a)break t;for(;h.sibling===null;){if(h.return===null||h.return===a)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}a.stateNode=r;t:switch(An(r,s,c),s){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ta(a)}}return Ve(a),a.flags&=-16777217,null;case 6:if(r&&a.stateNode!=null)r.memoizedProps!==c&&ta(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(r=_t.current,ic(a)){if(r=a.stateNode,s=a.memoizedProps,c=null,h=Kn,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}r[Rt]=a,r=!!(r.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||o1(r.nodeValue,s)),r||Vo(a)}else r=Kd(r).createTextNode(c),r[Rt]=a,a.stateNode=r}return Ve(a),null;case 13:if(c=a.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(h=ic(a),c!==null&&c.dehydrated!==null){if(r===null){if(!h)throw Error(i(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Rt]=a}else ac(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ve(a),h=!1}else h=q0(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(Zi(a),a):(Zi(a),null)}if(Zi(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=c!==null,r=r!==null&&r.memoizedState!==null,s){c=a.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==h&&(c.flags|=2048)}return s!==r&&s&&(a.child.flags|=8192),kd(a,a.updateQueue),Ve(a),null;case 4:return dn(),r===null&&Eg(a.stateNode.containerInfo),Ve(a),null;case 10:return Qi(a.type),Ve(a),null;case 19:if(ht(sn),h=a.memoizedState,h===null)return Ve(a),null;if(c=(a.flags&128)!==0,m=h.rendering,m===null)if(c)Sc(h,!1);else{if(Ue!==0||r!==null&&(r.flags&128)!==0)for(r=a.child;r!==null;){if(m=Id(r),m!==null){for(a.flags|=128,Sc(h,!1),r=m.updateQueue,a.updateQueue=r,kd(a,r),a.subtreeFlags=0,r=s,s=a.child;s!==null;)U0(s,r),s=s.sibling;return dt(sn,sn.current&1|2),a.child}r=r.sibling}h.tail!==null&&ge()>Vd&&(a.flags|=128,c=!0,Sc(h,!1),a.lanes=4194304)}else{if(!c)if(r=Id(m),r!==null){if(a.flags|=128,c=!0,r=r.updateQueue,a.updateQueue=r,kd(a,r),Sc(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!ue)return Ve(a),null}else 2*ge()-h.renderingStartTime>Vd&&s!==536870912&&(a.flags|=128,c=!0,Sc(h,!1),a.lanes=4194304);h.isBackwards?(m.sibling=a.child,a.child=m):(r=h.last,r!==null?r.sibling=m:a.child=m,h.last=m)}return h.tail!==null?(a=h.tail,h.rendering=a,h.tail=a.sibling,h.renderingStartTime=ge(),a.sibling=null,r=sn.current,dt(sn,c?r&1|2:r&1),a):(Ve(a),null);case 22:case 23:return Zi(a),wp(),c=a.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&(Ve(a),a.subtreeFlags&6&&(a.flags|=8192)):Ve(a),s=a.updateQueue,s!==null&&kd(a,s.retryQueue),s=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),r!==null&&ht(Bo),null;case 24:return s=null,r!==null&&(s=r.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Qi(on),Ve(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function Nw(r,a){switch(dp(a),a.tag){case 1:return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 3:return Qi(on),dn(),r=a.flags,(r&65536)!==0&&(r&128)===0?(a.flags=r&-65537|128,a):null;case 26:case 27:case 5:return Qt(a),null;case 13:if(Zi(a),r=a.memoizedState,r!==null&&r.dehydrated!==null){if(a.alternate===null)throw Error(i(340));ac()}return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 19:return ht(sn),null;case 4:return dn(),null;case 10:return Qi(a.type),null;case 22:case 23:return Zi(a),wp(),r!==null&&ht(Bo),r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 24:return Qi(on),null;case 25:return null;default:return null}}function pb(r,a){switch(dp(a),a.tag){case 3:Qi(on),dn();break;case 26:case 27:case 5:Qt(a);break;case 4:dn();break;case 13:Zi(a);break;case 19:ht(sn);break;case 10:Qi(a.type);break;case 22:case 23:Zi(a),wp(),r!==null&&ht(Bo);break;case 24:Qi(on)}}function _c(r,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&r)===r){c=void 0;var m=s.create,T=s.inst;c=m(),T.destroy=c}s=s.next}while(s!==h)}}catch(I){Re(a,a.return,I)}}function Da(r,a,s){try{var c=a.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var m=h.next;c=m;do{if((c.tag&r)===r){var T=c.inst,I=T.destroy;if(I!==void 0){T.destroy=void 0,h=a;var H=s,Q=I;try{Q()}catch(ot){Re(h,H,ot)}}}c=c.next}while(c!==m)}}catch(ot){Re(a,a.return,ot)}}function gb(r){var a=r.updateQueue;if(a!==null){var s=r.stateNode;try{nv(a,s)}catch(c){Re(r,r.return,c)}}}function mb(r,a,s){s.props=$o(r.type,r.memoizedProps),s.state=r.memoizedState;try{s.componentWillUnmount()}catch(c){Re(r,a,c)}}function Ec(r,a){try{var s=r.ref;if(s!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof s=="function"?r.refCleanup=s(c):s.current=c}}catch(h){Re(r,a,h)}}function yi(r,a){var s=r.ref,c=r.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){Re(r,a,h)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Re(r,a,h)}else s.current=null}function yb(r){var a=r.type,s=r.memoizedProps,c=r.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break t;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){Re(r,r.return,h)}}function Jp(r,a,s){try{var c=r.stateNode;tC(c,r.type,s,a),c[It]=a}catch(h){Re(r,r.return,h)}}function vb(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Ba(r.type)||r.tag===4}function tg(r){t:for(;;){for(;r.sibling===null;){if(r.return===null||vb(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Ba(r.type)||r.flags&2||r.child===null||r.tag===4)continue t;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function eg(r,a,s){var c=r.tag;if(c===5||c===6)r=r.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(r,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(r),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Gd));else if(c!==4&&(c===27&&Ba(r.type)&&(s=r.stateNode,a=null),r=r.child,r!==null))for(eg(r,a,s),r=r.sibling;r!==null;)eg(r,a,s),r=r.sibling}function Pd(r,a,s){var c=r.tag;if(c===5||c===6)r=r.stateNode,a?s.insertBefore(r,a):s.appendChild(r);else if(c!==4&&(c===27&&Ba(r.type)&&(s=r.stateNode),r=r.child,r!==null))for(Pd(r,a,s),r=r.sibling;r!==null;)Pd(r,a,s),r=r.sibling}function bb(r){var a=r.stateNode,s=r.memoizedProps;try{for(var c=r.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);An(a,c,s),a[Rt]=r,a[It]=s}catch(m){Re(r,r.return,m)}}var ea=!1,Ke=!1,ng=!1,xb=typeof WeakSet=="function"?WeakSet:Set,yn=null;function kw(r,a){if(r=r.containerInfo,Cg=Jd,r=O0(r),tp(r)){if("selectionStart"in r)var s={start:r.selectionStart,end:r.selectionEnd};else t:{s=(s=r.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var T=0,I=-1,H=-1,Q=0,ot=0,ct=r,Z=null;e:for(;;){for(var J;ct!==s||h!==0&&ct.nodeType!==3||(I=T+h),ct!==m||c!==0&&ct.nodeType!==3||(H=T+c),ct.nodeType===3&&(T+=ct.nodeValue.length),(J=ct.firstChild)!==null;)Z=ct,ct=J;for(;;){if(ct===r)break e;if(Z===s&&++Q===h&&(I=T),Z===m&&++ot===c&&(H=T),(J=ct.nextSibling)!==null)break;ct=Z,Z=ct.parentNode}ct=J}s=I===-1||H===-1?null:{start:I,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ag={focusedElem:r,selectionRange:s},Jd=!1,yn=a;yn!==null;)if(a=yn,r=a.child,(a.subtreeFlags&1024)!==0&&r!==null)r.return=a,yn=r;else for(;yn!==null;){switch(a=yn,m=a.alternate,r=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,s=a,h=m.memoizedProps,m=m.memoizedState,c=s.stateNode;try{var Pt=$o(s.type,h,s.elementType===s.type);r=c.getSnapshotBeforeUpdate(Pt,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Ot){Re(s,s.return,Ot)}}break;case 3:if((r&1024)!==0){if(r=a.stateNode.containerInfo,s=r.nodeType,s===9)Mg(r);else if(s===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Mg(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=a.sibling,r!==null){r.return=a.return,yn=r;break}yn=a.return}}function Sb(r,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Na(r,s),c&4&&_c(5,s);break;case 1:if(Na(r,s),c&4)if(r=s.stateNode,a===null)try{r.componentDidMount()}catch(T){Re(s,s.return,T)}else{var h=$o(s.type,a.memoizedProps);a=a.memoizedState;try{r.componentDidUpdate(h,a,r.__reactInternalSnapshotBeforeUpdate)}catch(T){Re(s,s.return,T)}}c&64&&gb(s),c&512&&Ec(s,s.return);break;case 3:if(Na(r,s),c&64&&(r=s.updateQueue,r!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{nv(r,a)}catch(T){Re(s,s.return,T)}}break;case 27:a===null&&c&4&&bb(s);case 26:case 5:Na(r,s),a===null&&c&4&&yb(s),c&512&&Ec(s,s.return);break;case 12:Na(r,s);break;case 13:Na(r,s),c&4&&Tb(r,s),c&64&&(r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(s=Hw.bind(null,s),sC(r,s))));break;case 22:if(c=s.memoizedState!==null||ea,!c){a=a!==null&&a.memoizedState!==null||Ke,h=ea;var m=Ke;ea=c,(Ke=a)&&!m?ka(r,s,(s.subtreeFlags&8772)!==0):Na(r,s),ea=h,Ke=m}break;case 30:break;default:Na(r,s)}}function _b(r){var a=r.alternate;a!==null&&(r.alternate=null,_b(a)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(a=r.stateNode,a!==null&&Sa(a)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var Ne=null,Jn=!1;function na(r,a,s){for(s=s.child;s!==null;)Eb(r,a,s),s=s.sibling}function Eb(r,a,s){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(De,s)}catch{}switch(s.tag){case 26:Ke||yi(s,a),na(r,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ke||yi(s,a);var c=Ne,h=Jn;Ba(s.type)&&(Ne=s.stateNode,Jn=!1),na(r,a,s),Dc(s.stateNode),Ne=c,Jn=h;break;case 5:Ke||yi(s,a);case 6:if(c=Ne,h=Jn,Ne=null,na(r,a,s),Ne=c,Jn=h,Ne!==null)if(Jn)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(s.stateNode)}catch(m){Re(s,a,m)}else try{Ne.removeChild(s.stateNode)}catch(m){Re(s,a,m)}break;case 18:Ne!==null&&(Jn?(r=Ne,d1(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,s.stateNode),Bc(r)):d1(Ne,s.stateNode));break;case 4:c=Ne,h=Jn,Ne=s.stateNode.containerInfo,Jn=!0,na(r,a,s),Ne=c,Jn=h;break;case 0:case 11:case 14:case 15:Ke||Da(2,s,a),Ke||Da(4,s,a),na(r,a,s);break;case 1:Ke||(yi(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&mb(s,a,c)),na(r,a,s);break;case 21:na(r,a,s);break;case 22:Ke=(c=Ke)||s.memoizedState!==null,na(r,a,s),Ke=c;break;default:na(r,a,s)}}function Tb(r,a){if(a.memoizedState===null&&(r=a.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Bc(r)}catch(s){Re(a,a.return,s)}}function Pw(r){switch(r.tag){case 13:case 19:var a=r.stateNode;return a===null&&(a=r.stateNode=new xb),a;case 22:return r=r.stateNode,a=r._retryCache,a===null&&(a=r._retryCache=new xb),a;default:throw Error(i(435,r.tag))}}function rg(r,a){var s=Pw(r);a.forEach(function(c){var h=Fw.bind(null,r,c);s.has(c)||(s.add(c),c.then(h,h))})}function cr(r,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],m=r,T=a,I=T;t:for(;I!==null;){switch(I.tag){case 27:if(Ba(I.type)){Ne=I.stateNode,Jn=!1;break t}break;case 5:Ne=I.stateNode,Jn=!1;break t;case 3:case 4:Ne=I.stateNode.containerInfo,Jn=!0;break t}I=I.return}if(Ne===null)throw Error(i(160));Eb(m,T,h),Ne=null,Jn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)wb(a,r),a=a.sibling}var qr=null;function wb(r,a){var s=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:cr(a,r),ur(r),c&4&&(Da(3,r,r.return),_c(3,r),Da(5,r,r.return));break;case 1:cr(a,r),ur(r),c&512&&(Ke||s===null||yi(s,s.return)),c&64&&ea&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(s=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=qr;if(cr(a,r),ur(r),c&512&&(Ke||s===null||yi(s,s.return)),c&4){var m=s!==null?s.memoizedState:null;if(c=r.memoizedState,s===null)if(c===null)if(r.stateNode===null){t:{c=r.type,s=r.memoizedProps,h=h.ownerDocument||h;e:switch(c){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Ur]||m[Rt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(c),h.head.insertBefore(m,h.querySelector("head > title"))),An(m,c,s),m[Rt]=r,qe(m),c=m;break t;case"link":var T=b1("link","href",h).get(c+(s.href||""));if(T){for(var I=0;I<T.length;I++)if(m=T[I],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(I,1);break e}}m=h.createElement(c),An(m,c,s),h.head.appendChild(m);break;case"meta":if(T=b1("meta","content",h).get(c+(s.content||""))){for(I=0;I<T.length;I++)if(m=T[I],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(I,1);break e}}m=h.createElement(c),An(m,c,s),h.head.appendChild(m);break;default:throw Error(i(468,c))}m[Rt]=r,qe(m),c=m}r.stateNode=c}else x1(h,r.type,r.stateNode);else r.stateNode=v1(h,c,r.memoizedProps);else m!==c?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,c===null?x1(h,r.type,r.stateNode):v1(h,c,r.memoizedProps)):c===null&&r.stateNode!==null&&Jp(r,r.memoizedProps,s.memoizedProps)}break;case 27:cr(a,r),ur(r),c&512&&(Ke||s===null||yi(s,s.return)),s!==null&&c&4&&Jp(r,r.memoizedProps,s.memoizedProps);break;case 5:if(cr(a,r),ur(r),c&512&&(Ke||s===null||yi(s,s.return)),r.flags&32){h=r.stateNode;try{_r(h,"")}catch(J){Re(r,r.return,J)}}c&4&&r.stateNode!=null&&(h=r.memoizedProps,Jp(r,h,s!==null?s.memoizedProps:h)),c&1024&&(ng=!0);break;case 6:if(cr(a,r),ur(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,s=r.stateNode;try{s.nodeValue=c}catch(J){Re(r,r.return,J)}}break;case 3:if(Qd=null,h=qr,qr=Yd(a.containerInfo),cr(a,r),qr=h,ur(r),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Bc(a.containerInfo)}catch(J){Re(r,r.return,J)}ng&&(ng=!1,Cb(r));break;case 4:c=qr,qr=Yd(r.stateNode.containerInfo),cr(a,r),ur(r),qr=c;break;case 12:cr(a,r),ur(r);break;case 13:cr(a,r),ur(r),r.child.flags&8192&&r.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(cg=ge()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,rg(r,c)));break;case 22:h=r.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,Q=ea,ot=Ke;if(ea=Q||h,Ke=ot||H,cr(a,r),Ke=ot,ea=Q,ur(r),c&8192)t:for(a=r.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(s===null||H||ea||Ke||Ho(r)),s=null,a=r;;){if(a.tag===5||a.tag===26){if(s===null){H=s=a;try{if(m=H.stateNode,h)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{I=H.stateNode;var ct=H.memoizedProps.style,Z=ct!=null&&ct.hasOwnProperty("display")?ct.display:null;I.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){Re(H,H.return,J)}}}else if(a.tag===6){if(s===null){H=a;try{H.stateNode.nodeValue=h?"":H.memoizedProps}catch(J){Re(H,H.return,J)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===r)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break t;for(;a.sibling===null;){if(a.return===null||a.return===r)break t;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=r.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,rg(r,s))));break;case 19:cr(a,r),ur(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,rg(r,c)));break;case 30:break;case 21:break;default:cr(a,r),ur(r)}}function ur(r){var a=r.flags;if(a&2){try{for(var s,c=r.return;c!==null;){if(vb(c)){s=c;break}c=c.return}if(s==null)throw Error(i(160));switch(s.tag){case 27:var h=s.stateNode,m=tg(r);Pd(r,m,h);break;case 5:var T=s.stateNode;s.flags&32&&(_r(T,""),s.flags&=-33);var I=tg(r);Pd(r,I,T);break;case 3:case 4:var H=s.stateNode.containerInfo,Q=tg(r);eg(r,Q,H);break;default:throw Error(i(161))}}catch(ot){Re(r,r.return,ot)}r.flags&=-3}a&4096&&(r.flags&=-4097)}function Cb(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var a=r;Cb(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),r=r.sibling}}function Na(r,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Sb(r,a.alternate,a),a=a.sibling}function Ho(r){for(r=r.child;r!==null;){var a=r;switch(a.tag){case 0:case 11:case 14:case 15:Da(4,a,a.return),Ho(a);break;case 1:yi(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&mb(a,a.return,s),Ho(a);break;case 27:Dc(a.stateNode);case 26:case 5:yi(a,a.return),Ho(a);break;case 22:a.memoizedState===null&&Ho(a);break;case 30:Ho(a);break;default:Ho(a)}r=r.sibling}}function ka(r,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,h=r,m=a,T=m.flags;switch(m.tag){case 0:case 11:case 15:ka(h,m,s),_c(4,m);break;case 1:if(ka(h,m,s),c=m,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(Q){Re(c,c.return,Q)}if(c=m,h=c.updateQueue,h!==null){var I=c.stateNode;try{var H=h.shared.hiddenCallbacks;if(H!==null)for(h.shared.hiddenCallbacks=null,h=0;h<H.length;h++)ev(H[h],I)}catch(Q){Re(c,c.return,Q)}}s&&T&64&&gb(m),Ec(m,m.return);break;case 27:bb(m);case 26:case 5:ka(h,m,s),s&&c===null&&T&4&&yb(m),Ec(m,m.return);break;case 12:ka(h,m,s);break;case 13:ka(h,m,s),s&&T&4&&Tb(h,m);break;case 22:m.memoizedState===null&&ka(h,m,s),Ec(m,m.return);break;case 30:break;default:ka(h,m,s)}a=a.sibling}}function ig(r,a){var s=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==s&&(r!=null&&r.refCount++,s!=null&&lc(s))}function ag(r,a){r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&lc(r))}function vi(r,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Ab(r,a,s,c),a=a.sibling}function Ab(r,a,s,c){var h=a.flags;switch(a.tag){case 0:case 11:case 15:vi(r,a,s,c),h&2048&&_c(9,a);break;case 1:vi(r,a,s,c);break;case 3:vi(r,a,s,c),h&2048&&(r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&lc(r)));break;case 12:if(h&2048){vi(r,a,s,c),r=a.stateNode;try{var m=a.memoizedProps,T=m.id,I=m.onPostCommit;typeof I=="function"&&I(T,a.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(H){Re(a,a.return,H)}}else vi(r,a,s,c);break;case 13:vi(r,a,s,c);break;case 23:break;case 22:m=a.stateNode,T=a.alternate,a.memoizedState!==null?m._visibility&2?vi(r,a,s,c):Tc(r,a):m._visibility&2?vi(r,a,s,c):(m._visibility|=2,Xs(r,a,s,c,(a.subtreeFlags&10256)!==0)),h&2048&&ig(T,a);break;case 24:vi(r,a,s,c),h&2048&&ag(a.alternate,a);break;default:vi(r,a,s,c)}}function Xs(r,a,s,c,h){for(h=h&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=r,T=a,I=s,H=c,Q=T.flags;switch(T.tag){case 0:case 11:case 15:Xs(m,T,I,H,h),_c(8,T);break;case 23:break;case 22:var ot=T.stateNode;T.memoizedState!==null?ot._visibility&2?Xs(m,T,I,H,h):Tc(m,T):(ot._visibility|=2,Xs(m,T,I,H,h)),h&&Q&2048&&ig(T.alternate,T);break;case 24:Xs(m,T,I,H,h),h&&Q&2048&&ag(T.alternate,T);break;default:Xs(m,T,I,H,h)}a=a.sibling}}function Tc(r,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=r,c=a,h=c.flags;switch(c.tag){case 22:Tc(s,c),h&2048&&ig(c.alternate,c);break;case 24:Tc(s,c),h&2048&&ag(c.alternate,c);break;default:Tc(s,c)}a=a.sibling}}var wc=8192;function Zs(r){if(r.subtreeFlags&wc)for(r=r.child;r!==null;)Rb(r),r=r.sibling}function Rb(r){switch(r.tag){case 26:Zs(r),r.flags&wc&&r.memoizedState!==null&&xC(qr,r.memoizedState,r.memoizedProps);break;case 5:Zs(r);break;case 3:case 4:var a=qr;qr=Yd(r.stateNode.containerInfo),Zs(r),qr=a;break;case 22:r.memoizedState===null&&(a=r.alternate,a!==null&&a.memoizedState!==null?(a=wc,wc=16777216,Zs(r),wc=a):Zs(r));break;default:Zs(r)}}function Ib(r){var a=r.alternate;if(a!==null&&(r=a.child,r!==null)){a.child=null;do a=r.sibling,r.sibling=null,r=a;while(r!==null)}}function Cc(r){var a=r.deletions;if((r.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];yn=c,Ob(c,r)}Ib(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Mb(r),r=r.sibling}function Mb(r){switch(r.tag){case 0:case 11:case 15:Cc(r),r.flags&2048&&Da(9,r,r.return);break;case 3:Cc(r);break;case 12:Cc(r);break;case 22:var a=r.stateNode;r.memoizedState!==null&&a._visibility&2&&(r.return===null||r.return.tag!==13)?(a._visibility&=-3,jd(r)):Cc(r);break;default:Cc(r)}}function jd(r){var a=r.deletions;if((r.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];yn=c,Ob(c,r)}Ib(r)}for(r=r.child;r!==null;){switch(a=r,a.tag){case 0:case 11:case 15:Da(8,a,a.return),jd(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,jd(a));break;default:jd(a)}r=r.sibling}}function Ob(r,a){for(;yn!==null;){var s=yn;switch(s.tag){case 0:case 11:case 15:Da(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:lc(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,yn=c;else t:for(s=r;yn!==null;){c=yn;var h=c.sibling,m=c.return;if(_b(c),c===s){yn=null;break t}if(h!==null){h.return=m,yn=h;break t}yn=m}}}var jw={getCacheForType:function(r){var a=Vn(on),s=a.data.get(r);return s===void 0&&(s=r(),a.data.set(r,s)),s}},Vw=typeof WeakMap=="function"?WeakMap:Map,be=0,Oe=null,qt=null,ee=0,xe=0,dr=null,Pa=!1,Js=!1,og=!1,ra=0,Ue=0,ja=0,Fo=0,sg=0,Or=0,tl=0,Ac=null,tr=null,lg=!1,cg=0,Vd=1/0,zd=null,Va=null,Cn=0,za=null,el=null,nl=0,ug=0,dg=null,Db=null,Rc=0,fg=null;function fr(){if((be&2)!==0&&ee!==0)return ee&-ee;if(q.T!==null){var r=Hs;return r!==0?r:bg()}return ii()}function Nb(){Or===0&&(Or=(ee&536870912)===0||ue?ni():536870912);var r=Mr.current;return r!==null&&(r.flags|=32),Or}function hr(r,a,s){(r===Oe&&(xe===2||xe===9)||r.cancelPendingCommit!==null)&&(rl(r,0),La(r,ee,Or,!1)),ar(r,s),((be&2)===0||r!==Oe)&&(r===Oe&&((be&2)===0&&(Fo|=s),Ue===4&&La(r,ee,Or,!1)),bi(r))}function kb(r,a,s){if((be&6)!==0)throw Error(i(327));var c=!s&&(a&124)===0&&(a&r.expiredLanes)===0||Pi(r,a),h=c?Bw(r,a):gg(r,a,!0),m=c;do{if(h===0){Js&&!c&&La(r,a,0,!1);break}else{if(s=r.current.alternate,m&&!zw(s)){h=gg(r,a,!1),m=!1;continue}if(h===2){if(m=a,r.errorRecoveryDisabledLanes&m)var T=0;else T=r.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){a=T;t:{var I=r;h=Ac;var H=I.current.memoizedState.isDehydrated;if(H&&(rl(I,T).flags|=256),T=gg(I,T,!1),T!==2){if(og&&!H){I.errorRecoveryDisabledLanes|=m,Fo|=m,h=4;break t}m=tr,tr=h,m!==null&&(tr===null?tr=m:tr.push.apply(tr,m))}h=T}if(m=!1,h!==2)continue}}if(h===1){rl(r,0),La(r,a,0,!0);break}t:{switch(c=r,m=h,m){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:La(c,a,Or,!Pa);break t;case 2:tr=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(h=cg+300-ge(),10<h)){if(La(c,a,Or,!Pa),va(c,0,!0)!==0)break t;c.timeoutHandle=c1(Pb.bind(null,c,s,tr,zd,lg,a,Or,Fo,tl,Pa,m,2,-0,0),h);break t}Pb(c,s,tr,zd,lg,a,Or,Fo,tl,Pa,m,0,-0,0)}}break}while(!0);bi(r)}function Pb(r,a,s,c,h,m,T,I,H,Q,ot,ct,Z,J){if(r.timeoutHandle=-1,ct=a.subtreeFlags,(ct&8192||(ct&16785408)===16785408)&&(Pc={stylesheets:null,count:0,unsuspend:bC},Rb(a),ct=SC(),ct!==null)){r.cancelPendingCommit=ct($b.bind(null,r,a,m,s,c,h,T,I,H,ot,1,Z,J)),La(r,m,T,!Q);return}$b(r,a,m,s,c,h,T,I,H)}function zw(r){for(var a=r;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],m=h.getSnapshot;h=h.value;try{if(!sr(m(),h))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function La(r,a,s,c){a&=~sg,a&=~Fo,r.suspendedLanes|=a,r.pingedLanes&=~a,c&&(r.warmLanes|=a),c=r.expirationTimes;for(var h=a;0<h;){var m=31-hn(h),T=1<<m;c[m]=-1,h&=~T}s!==0&&Sr(r,s,a)}function Ld(){return(be&6)===0?(Ic(0),!1):!0}function hg(){if(qt!==null){if(xe===0)var r=qt.return;else r=qt,Wi=zo=null,Mp(r),Ws=null,bc=0,r=qt;for(;r!==null;)pb(r.alternate,r),r=r.return;qt=null}}function rl(r,a){var s=r.timeoutHandle;s!==-1&&(r.timeoutHandle=-1,nC(s)),s=r.cancelPendingCommit,s!==null&&(r.cancelPendingCommit=null,s()),hg(),Oe=r,qt=s=Gi(r.current,null),ee=a,xe=0,dr=null,Pa=!1,Js=Pi(r,a),og=!1,tl=Or=sg=Fo=ja=Ue=0,tr=Ac=null,lg=!1,(a&8)!==0&&(a|=a&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=a;0<c;){var h=31-hn(c),m=1<<h;a|=r[h],c&=~m}return ra=a,sd(),s}function jb(r,a){Ut=null,q.H=Cd,a===uc||a===md?(a=J0(),xe=3):a===Q0?(a=J0(),xe=4):xe=a===tb?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,dr=a,qt===null&&(Ue=1,Od(r,Cr(a,r.current)))}function Vb(){var r=q.H;return q.H=Cd,r===null?Cd:r}function zb(){var r=q.A;return q.A=jw,r}function pg(){Ue=4,Pa||(ee&4194048)!==ee&&Mr.current!==null||(Js=!0),(ja&134217727)===0&&(Fo&134217727)===0||Oe===null||La(Oe,ee,Or,!1)}function gg(r,a,s){var c=be;be|=2;var h=Vb(),m=zb();(Oe!==r||ee!==a)&&(zd=null,rl(r,a)),a=!1;var T=Ue;t:do try{if(xe!==0&&qt!==null){var I=qt,H=dr;switch(xe){case 8:hg(),T=6;break t;case 3:case 2:case 9:case 6:Mr.current===null&&(a=!0);var Q=xe;if(xe=0,dr=null,il(r,I,H,Q),s&&Js){T=0;break t}break;default:Q=xe,xe=0,dr=null,il(r,I,H,Q)}}Lw(),T=Ue;break}catch(ot){jb(r,ot)}while(!0);return a&&r.shellSuspendCounter++,Wi=zo=null,be=c,q.H=h,q.A=m,qt===null&&(Oe=null,ee=0,sd()),T}function Lw(){for(;qt!==null;)Lb(qt)}function Bw(r,a){var s=be;be|=2;var c=Vb(),h=zb();Oe!==r||ee!==a?(zd=null,Vd=ge()+500,rl(r,a)):Js=Pi(r,a);t:do try{if(xe!==0&&qt!==null){a=qt;var m=dr;e:switch(xe){case 1:xe=0,dr=null,il(r,a,m,1);break;case 2:case 9:if(X0(m)){xe=0,dr=null,Bb(a);break}a=function(){xe!==2&&xe!==9||Oe!==r||(xe=7),bi(r)},m.then(a,a);break t;case 3:xe=7;break t;case 4:xe=5;break t;case 7:X0(m)?(xe=0,dr=null,Bb(a)):(xe=0,dr=null,il(r,a,m,7));break;case 5:var T=null;switch(qt.tag){case 26:T=qt.memoizedState;case 5:case 27:var I=qt;if(!T||S1(T)){xe=0,dr=null;var H=I.sibling;if(H!==null)qt=H;else{var Q=I.return;Q!==null?(qt=Q,Bd(Q)):qt=null}break e}}xe=0,dr=null,il(r,a,m,5);break;case 6:xe=0,dr=null,il(r,a,m,6);break;case 8:hg(),Ue=6;break t;default:throw Error(i(462))}}Uw();break}catch(ot){jb(r,ot)}while(!0);return Wi=zo=null,q.H=c,q.A=h,be=s,qt!==null?0:(Oe=null,ee=0,sd(),Ue)}function Uw(){for(;qt!==null&&!kn();)Lb(qt)}function Lb(r){var a=fb(r.alternate,r,ra);r.memoizedProps=r.pendingProps,a===null?Bd(r):qt=a}function Bb(r){var a=r,s=a.alternate;switch(a.tag){case 15:case 0:a=ob(s,a,a.pendingProps,a.type,void 0,ee);break;case 11:a=ob(s,a,a.pendingProps,a.type.render,a.ref,ee);break;case 5:Mp(a);default:pb(s,a),a=qt=U0(a,ra),a=fb(s,a,ra)}r.memoizedProps=r.pendingProps,a===null?Bd(r):qt=a}function il(r,a,s,c){Wi=zo=null,Mp(a),Ws=null,bc=0;var h=a.return;try{if(Mw(r,h,a,s,ee)){Ue=1,Od(r,Cr(s,r.current)),qt=null;return}}catch(m){if(h!==null)throw qt=h,m;Ue=1,Od(r,Cr(s,r.current)),qt=null;return}a.flags&32768?(ue||c===1?r=!0:Js||(ee&536870912)!==0?r=!1:(Pa=r=!0,(c===2||c===9||c===3||c===6)&&(c=Mr.current,c!==null&&c.tag===13&&(c.flags|=16384))),Ub(a,r)):Bd(a)}function Bd(r){var a=r;do{if((a.flags&32768)!==0){Ub(a,Pa);return}r=a.return;var s=Dw(a.alternate,a,ra);if(s!==null){qt=s;return}if(a=a.sibling,a!==null){qt=a;return}qt=a=r}while(a!==null);Ue===0&&(Ue=5)}function Ub(r,a){do{var s=Nw(r.alternate,r);if(s!==null){s.flags&=32767,qt=s;return}if(s=r.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(r=r.sibling,r!==null)){qt=r;return}qt=r=s}while(r!==null);Ue=6,qt=null}function $b(r,a,s,c,h,m,T,I,H){r.cancelPendingCommit=null;do Ud();while(Cn!==0);if((be&6)!==0)throw Error(i(327));if(a!==null){if(a===r.current)throw Error(i(177));if(m=a.lanes|a.childLanes,m|=ap,go(r,s,m,T,I,H),r===Oe&&(qt=Oe=null,ee=0),el=a,za=r,nl=s,ug=m,dg=h,Db=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,qw(Ae,function(){return Kb(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=q.T,q.T=null,h=nt.p,nt.p=2,T=be,be|=4;try{kw(r,a,s)}finally{be=T,nt.p=h,q.T=c}}Cn=1,Hb(),Fb(),qb()}}function Hb(){if(Cn===1){Cn=0;var r=za,a=el,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=q.T,q.T=null;var c=nt.p;nt.p=2;var h=be;be|=4;try{wb(a,r);var m=Ag,T=O0(r.containerInfo),I=m.focusedElem,H=m.selectionRange;if(T!==I&&I&&I.ownerDocument&&M0(I.ownerDocument.documentElement,I)){if(H!==null&&tp(I)){var Q=H.start,ot=H.end;if(ot===void 0&&(ot=Q),"selectionStart"in I)I.selectionStart=Q,I.selectionEnd=Math.min(ot,I.value.length);else{var ct=I.ownerDocument||document,Z=ct&&ct.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),Pt=I.textContent.length,Ot=Math.min(H.start,Pt),Te=H.end===void 0?Ot:Math.min(H.end,Pt);!J.extend&&Ot>Te&&(T=Te,Te=Ot,Ot=T);var K=I0(I,Ot),G=I0(I,Te);if(K&&G&&(J.rangeCount!==1||J.anchorNode!==K.node||J.anchorOffset!==K.offset||J.focusNode!==G.node||J.focusOffset!==G.offset)){var W=ct.createRange();W.setStart(K.node,K.offset),J.removeAllRanges(),Ot>Te?(J.addRange(W),J.extend(G.node,G.offset)):(W.setEnd(G.node,G.offset),J.addRange(W))}}}}for(ct=[],J=I;J=J.parentNode;)J.nodeType===1&&ct.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof I.focus=="function"&&I.focus(),I=0;I<ct.length;I++){var st=ct[I];st.element.scrollLeft=st.left,st.element.scrollTop=st.top}}Jd=!!Cg,Ag=Cg=null}finally{be=h,nt.p=c,q.T=s}}r.current=a,Cn=2}}function Fb(){if(Cn===2){Cn=0;var r=za,a=el,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=q.T,q.T=null;var c=nt.p;nt.p=2;var h=be;be|=4;try{Sb(r,a.alternate,a)}finally{be=h,nt.p=c,q.T=s}}Cn=3}}function qb(){if(Cn===4||Cn===3){Cn=0,xr();var r=za,a=el,s=nl,c=Db;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Cn=5:(Cn=0,el=za=null,Gb(r,r.pendingLanes));var h=r.pendingLanes;if(h===0&&(Va=null),xa(s),a=a.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(De,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=q.T,h=nt.p,nt.p=2,q.T=null;try{for(var m=r.onRecoverableError,T=0;T<c.length;T++){var I=c[T];m(I.value,{componentStack:I.stack})}}finally{q.T=a,nt.p=h}}(nl&3)!==0&&Ud(),bi(r),h=r.pendingLanes,(s&4194090)!==0&&(h&42)!==0?r===fg?Rc++:(Rc=0,fg=r):Rc=0,Ic(0)}}function Gb(r,a){(r.pooledCacheLanes&=a)===0&&(a=r.pooledCache,a!=null&&(r.pooledCache=null,lc(a)))}function Ud(r){return Hb(),Fb(),qb(),Kb()}function Kb(){if(Cn!==5)return!1;var r=za,a=ug;ug=0;var s=xa(nl),c=q.T,h=nt.p;try{nt.p=32>s?32:s,q.T=null,s=dg,dg=null;var m=za,T=nl;if(Cn=0,el=za=null,nl=0,(be&6)!==0)throw Error(i(331));var I=be;if(be|=4,Mb(m.current),Ab(m,m.current,T,s),be=I,Ic(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(De,m)}catch{}return!0}finally{nt.p=h,q.T=c,Gb(r,a)}}function Yb(r,a,s){a=Cr(s,a),a=Fp(r.stateNode,a,2),r=Ra(r,a,2),r!==null&&(ar(r,2),bi(r))}function Re(r,a,s){if(r.tag===3)Yb(r,r,s);else for(;a!==null;){if(a.tag===3){Yb(a,r,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Va===null||!Va.has(c))){r=Cr(s,r),s=Zv(2),c=Ra(a,s,2),c!==null&&(Jv(s,c,a,r),ar(c,2),bi(c));break}}a=a.return}}function mg(r,a,s){var c=r.pingCache;if(c===null){c=r.pingCache=new Vw;var h=new Set;c.set(a,h)}else h=c.get(a),h===void 0&&(h=new Set,c.set(a,h));h.has(s)||(og=!0,h.add(s),r=$w.bind(null,r,a,s),a.then(r,r))}function $w(r,a,s){var c=r.pingCache;c!==null&&c.delete(a),r.pingedLanes|=r.suspendedLanes&s,r.warmLanes&=~s,Oe===r&&(ee&s)===s&&(Ue===4||Ue===3&&(ee&62914560)===ee&&300>ge()-cg?(be&2)===0&&rl(r,0):sg|=s,tl===ee&&(tl=0)),bi(r)}function Wb(r,a){a===0&&(a=po()),r=Ls(r,a),r!==null&&(ar(r,a),bi(r))}function Hw(r){var a=r.memoizedState,s=0;a!==null&&(s=a.retryLane),Wb(r,s)}function Fw(r,a){var s=0;switch(r.tag){case 13:var c=r.stateNode,h=r.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),Wb(r,s)}function qw(r,a){return Sn(r,a)}var $d=null,al=null,yg=!1,Hd=!1,vg=!1,qo=0;function bi(r){r!==al&&r.next===null&&(al===null?$d=al=r:al=al.next=r),Hd=!0,yg||(yg=!0,Kw())}function Ic(r,a){if(!vg&&Hd){vg=!0;do for(var s=!1,c=$d;c!==null;){if(r!==0){var h=c.pendingLanes;if(h===0)var m=0;else{var T=c.suspendedLanes,I=c.pingedLanes;m=(1<<31-hn(42|r)+1)-1,m&=h&~(T&~I),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Jb(c,m))}else m=ee,m=va(c,c===Oe?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Pi(c,m)||(s=!0,Jb(c,m));c=c.next}while(s);vg=!1}}function Gw(){Qb()}function Qb(){Hd=yg=!1;var r=0;qo!==0&&(eC()&&(r=qo),qo=0);for(var a=ge(),s=null,c=$d;c!==null;){var h=c.next,m=Xb(c,a);m===0?(c.next=null,s===null?$d=h:s.next=h,h===null&&(al=s)):(s=c,(r!==0||(m&3)!==0)&&(Hd=!0)),c=h}Ic(r)}function Xb(r,a){for(var s=r.suspendedLanes,c=r.pingedLanes,h=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var T=31-hn(m),I=1<<T,H=h[T];H===-1?((I&s)===0||(I&c)!==0)&&(h[T]=ba(I,a)):H<=a&&(r.expiredLanes|=I),m&=~I}if(a=Oe,s=ee,s=va(r,r===a?s:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,s===0||r===a&&(xe===2||xe===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&Fe(c),r.callbackNode=null,r.callbackPriority=0;if((s&3)===0||Pi(r,s)){if(a=s&-s,a===r.callbackPriority)return a;switch(c!==null&&Fe(c),xa(s)){case 2:case 8:s=Hn;break;case 32:s=Ae;break;case 268435456:s=Ni;break;default:s=Ae}return c=Zb.bind(null,r),s=Sn(s,c),r.callbackPriority=a,r.callbackNode=s,a}return c!==null&&c!==null&&Fe(c),r.callbackPriority=2,r.callbackNode=null,2}function Zb(r,a){if(Cn!==0&&Cn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var s=r.callbackNode;if(Ud()&&r.callbackNode!==s)return null;var c=ee;return c=va(r,r===Oe?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(kb(r,c,a),Xb(r,ge()),r.callbackNode!=null&&r.callbackNode===s?Zb.bind(null,r):null)}function Jb(r,a){if(Ud())return null;kb(r,a,!0)}function Kw(){rC(function(){(be&6)!==0?Sn(_n,Gw):Qb()})}function bg(){return qo===0&&(qo=ni()),qo}function t1(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:As(""+r)}function e1(r,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,r.id&&s.setAttribute("form",r.id),a.parentNode.insertBefore(s,a),r=new FormData(r),s.parentNode.removeChild(s),r}function Yw(r,a,s,c,h){if(a==="submit"&&s&&s.stateNode===h){var m=t1((h[It]||null).action),T=c.submitter;T&&(a=(a=T[It]||null)?t1(a.formAction):T.getAttribute("formAction"),a!==null&&(m=a,T=null));var I=new Rs("action","action",null,c,h);r.push({event:I,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(qo!==0){var H=T?e1(h,T):new FormData(h);Lp(s,{pending:!0,data:H,method:h.method,action:m},null,H)}}else typeof m=="function"&&(I.preventDefault(),H=T?e1(h,T):new FormData(h),Lp(s,{pending:!0,data:H,method:h.method,action:m},m,H))},currentTarget:h}]})}}for(var xg=0;xg<ip.length;xg++){var Sg=ip[xg],Ww=Sg.toLowerCase(),Qw=Sg[0].toUpperCase()+Sg.slice(1);Fr(Ww,"on"+Qw)}Fr(k0,"onAnimationEnd"),Fr(P0,"onAnimationIteration"),Fr(j0,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(hw,"onTransitionRun"),Fr(pw,"onTransitionStart"),Fr(gw,"onTransitionCancel"),Fr(V0,"onTransitionEnd"),Vi("onMouseEnter",["mouseout","mouseover"]),Vi("onMouseLeave",["mouseout","mouseover"]),Vi("onPointerEnter",["pointerout","pointerover"]),Vi("onPointerLeave",["pointerout","pointerover"]),$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$r("onBeforeInput",["compositionend","keypress","textInput","paste"]),$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mc));function n1(r,a){a=(a&4)!==0;for(var s=0;s<r.length;s++){var c=r[s],h=c.event;c=c.listeners;t:{var m=void 0;if(a)for(var T=c.length-1;0<=T;T--){var I=c[T],H=I.instance,Q=I.currentTarget;if(I=I.listener,H!==m&&h.isPropagationStopped())break t;m=I,h.currentTarget=Q;try{m(h)}catch(ot){Md(ot)}h.currentTarget=null,m=H}else for(T=0;T<c.length;T++){if(I=c[T],H=I.instance,Q=I.currentTarget,I=I.listener,H!==m&&h.isPropagationStopped())break t;m=I,h.currentTarget=Q;try{m(h)}catch(ot){Md(ot)}h.currentTarget=null,m=H}}}}function Gt(r,a){var s=a[jn];s===void 0&&(s=a[jn]=new Set);var c=r+"__bubble";s.has(c)||(r1(a,r,2,!1),s.add(c))}function _g(r,a,s){var c=0;a&&(c|=4),r1(s,r,c,a)}var Fd="_reactListening"+Math.random().toString(36).slice(2);function Eg(r){if(!r[Fd]){r[Fd]=!0,$l.forEach(function(s){s!=="selectionchange"&&(Xw.has(s)||_g(s,!1,r),_g(s,!0,r))});var a=r.nodeType===9?r:r.ownerDocument;a===null||a[Fd]||(a[Fd]=!0,_g("selectionchange",!1,a))}}function r1(r,a,s,c){switch(A1(a)){case 2:var h=TC;break;case 8:h=wC;break;default:h=Vg}s=h.bind(null,a,s,r),h=void 0,!Tr||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),c?h!==void 0?r.addEventListener(a,s,{capture:!0,passive:h}):r.addEventListener(a,s,!0):h!==void 0?r.addEventListener(a,s,{passive:h}):r.addEventListener(a,s,!1)}function Tg(r,a,s,c,h){var m=c;if((a&1)===0&&(a&2)===0&&c!==null)t:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var I=c.stateNode.containerInfo;if(I===h)break;if(T===4)for(T=c.return;T!==null;){var H=T.tag;if((H===3||H===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;I!==null;){if(T=ji(I),T===null)return;if(H=T.tag,H===5||H===6||H===26||H===27){c=m=T;continue t}I=I.parentNode}}c=c.return}Gu(function(){var Q=m,ot=Er(s),ct=[];t:{var Z=z0.get(r);if(Z!==void 0){var J=Rs,Pt=r;switch(r){case"keypress":if(ui(s)===0)break t;case"keydown":case"keyup":J=ks;break;case"focusin":Pt="focus",J=Os;break;case"focusout":Pt="blur",J=Os;break;case"beforeblur":case"afterblur":J=Os;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=wr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Qh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=td;break;case k0:case P0:case j0:J=Ds;break;case V0:J=nd;break;case"scroll":case"scrollend":J=Ku;break;case"wheel":J=Ps;break;case"copy":case"cut":case"paste":J=Ns;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=tc;break;case"toggle":case"beforetoggle":J=id}var Ot=(a&4)!==0,Te=!Ot&&(r==="scroll"||r==="scrollend"),K=Ot?Z!==null?Z+"Capture":null:Z;Ot=[];for(var G=Q,W;G!==null;){var st=G;if(W=st.stateNode,st=st.tag,st!==5&&st!==26&&st!==27||W===null||K===null||(st=To(G,K),st!=null&&Ot.push(Oc(G,st,W))),Te)break;G=G.return}0<Ot.length&&(Z=new J(Z,Pt,null,s,ot),ct.push({event:Z,listeners:Ot}))}}if((a&7)===0){t:{if(Z=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",Z&&s!==Bi&&(Pt=s.relatedTarget||s.fromElement)&&(ji(Pt)||Pt[Xt]))break t;if((J||Z)&&(Z=ot.window===ot?ot:(Z=ot.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(Pt=s.relatedTarget||s.toElement,J=Q,Pt=Pt?ji(Pt):null,Pt!==null&&(Te=l(Pt),Ot=Pt.tag,Pt!==Te||Ot!==5&&Ot!==27&&Ot!==6)&&(Pt=null)):(J=null,Pt=Q),J!==Pt)){if(Ot=wr,st="onMouseLeave",K="onMouseEnter",G="mouse",(r==="pointerout"||r==="pointerover")&&(Ot=tc,st="onPointerLeave",K="onPointerEnter",G="pointer"),Te=J==null?Z:oi(J),W=Pt==null?Z:oi(Pt),Z=new Ot(st,G+"leave",J,s,ot),Z.target=Te,Z.relatedTarget=W,st=null,ji(ot)===Q&&(Ot=new Ot(K,G+"enter",Pt,s,ot),Ot.target=W,Ot.relatedTarget=Te,st=Ot),Te=st,J&&Pt)e:{for(Ot=J,K=Pt,G=0,W=Ot;W;W=ol(W))G++;for(W=0,st=K;st;st=ol(st))W++;for(;0<G-W;)Ot=ol(Ot),G--;for(;0<W-G;)K=ol(K),W--;for(;G--;){if(Ot===K||K!==null&&Ot===K.alternate)break e;Ot=ol(Ot),K=ol(K)}Ot=null}else Ot=null;J!==null&&i1(ct,Z,J,Ot,!1),Pt!==null&&Te!==null&&i1(ct,Te,Pt,Ot,!0)}}t:{if(Z=Q?oi(Q):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var St=E0;else if(an(Z))if(T0)St=uw;else{St=lw;var Ft=sw}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?Q&&Kl(Q.elementType)&&(St=E0):St=cw;if(St&&(St=St(r,Q))){qi(ct,St,s,ot);break t}Ft&&Ft(r,Z,Q),r==="focusout"&&Q&&Z.type==="number"&&Q.memoizedProps.value!=null&&Ea(Z,"number",Z.value)}switch(Ft=Q?oi(Q):window,r){case"focusin":(an(Ft)||Ft.contentEditable==="true")&&(js=Ft,ep=Q,rc=null);break;case"focusout":rc=ep=js=null;break;case"mousedown":np=!0;break;case"contextmenu":case"mouseup":case"dragend":np=!1,D0(ct,s,ot);break;case"selectionchange":if(fw)break;case"keydown":case"keyup":D0(ct,s,ot)}var Tt;if(hi)t:{switch(r){case"compositionstart":var Dt="onCompositionStart";break t;case"compositionend":Dt="onCompositionEnd";break t;case"compositionupdate":Dt="onCompositionUpdate";break t}Dt=void 0}else Jt?et(r,s)&&(Dt="onCompositionEnd"):r==="keydown"&&s.keyCode===229&&(Dt="onCompositionStart");Dt&&(E&&s.locale!=="ko"&&(Jt||Dt!=="onCompositionStart"?Dt==="onCompositionEnd"&&Jt&&(Tt=Wl()):(ci=ot,Ta="value"in ci?ci.value:ci.textContent,Jt=!0)),Ft=qd(Q,Dt),0<Ft.length&&(Dt=new Zl(Dt,r,null,s,ot),ct.push({event:Dt,listeners:Ft}),Tt?Dt.data=Tt:(Tt=mt(s),Tt!==null&&(Dt.data=Tt)))),(Tt=b?rn(r,s):te(r,s))&&(Dt=qd(Q,"onBeforeInput"),0<Dt.length&&(Ft=new Zl("onBeforeInput","beforeinput",null,s,ot),ct.push({event:Ft,listeners:Dt}),Ft.data=Tt)),Yw(ct,r,Q,s,ot)}n1(ct,a)})}function Oc(r,a,s){return{instance:r,listener:a,currentTarget:s}}function qd(r,a){for(var s=a+"Capture",c=[];r!==null;){var h=r,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=To(r,s),h!=null&&c.unshift(Oc(r,h,m)),h=To(r,a),h!=null&&c.push(Oc(r,h,m))),r.tag===3)return c;r=r.return}return[]}function ol(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function i1(r,a,s,c,h){for(var m=a._reactName,T=[];s!==null&&s!==c;){var I=s,H=I.alternate,Q=I.stateNode;if(I=I.tag,H!==null&&H===c)break;I!==5&&I!==26&&I!==27||Q===null||(H=Q,h?(Q=To(s,m),Q!=null&&T.unshift(Oc(s,Q,H))):h||(Q=To(s,m),Q!=null&&T.push(Oc(s,Q,H)))),s=s.return}T.length!==0&&r.push({event:a,listeners:T})}var Zw=/\r\n?/g,Jw=/\u0000|\uFFFD/g;function a1(r){return(typeof r=="string"?r:""+r).replace(Zw,`
`).replace(Jw,"")}function o1(r,a){return a=a1(a),a1(r)===a}function Gd(){}function Ee(r,a,s,c,h,m){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||_r(r,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&_r(r,""+c);break;case"className":si(r,"class",c);break;case"tabIndex":si(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":si(r,s,c);break;case"style":Gl(r,c,m);break;case"data":if(a!=="object"){si(r,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){r.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(s);break}c=As(""+c),r.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(a!=="input"&&Ee(r,a,"name",h.name,h,null),Ee(r,a,"formEncType",h.formEncType,h,null),Ee(r,a,"formMethod",h.formMethod,h,null),Ee(r,a,"formTarget",h.formTarget,h,null)):(Ee(r,a,"encType",h.encType,h,null),Ee(r,a,"method",h.method,h,null),Ee(r,a,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(s);break}c=As(""+c),r.setAttribute(s,c);break;case"onClick":c!=null&&(r.onclick=Gd);break;case"onScroll":c!=null&&Gt("scroll",r);break;case"onScrollEnd":c!=null&&Gt("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));r.innerHTML=s}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}s=As(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(s,""+c):r.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(s,""):r.removeAttribute(s);break;case"capture":case"download":c===!0?r.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(s,c):r.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(s,c):r.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(s):r.setAttribute(s,c);break;case"popover":Gt("beforetoggle",r),Gt("toggle",r),_a(r,"popover",c);break;case"xlinkActuate":En(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":En(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":En(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":En(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":En(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":En(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":En(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":En(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":En(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":_a(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Yh.get(s)||s,_a(r,s,c))}}function wg(r,a,s,c,h,m){switch(s){case"style":Gl(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));r.innerHTML=s}}break;case"children":typeof c=="string"?_r(r,c):(typeof c=="number"||typeof c=="bigint")&&_r(r,""+c);break;case"onScroll":c!=null&&Gt("scroll",r);break;case"onScrollEnd":c!=null&&Gt("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Gd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_s.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),a=s.slice(2,h?s.length-7:void 0),m=r[It]||null,m=m!=null?m[s]:null,typeof m=="function"&&r.removeEventListener(a,m,h),typeof c=="function")){typeof m!="function"&&m!==null&&(s in r?r[s]=null:r.hasAttribute(s)&&r.removeAttribute(s)),r.addEventListener(a,c,h);break t}s in r?r[s]=c:c===!0?r.setAttribute(s,""):_a(r,s,c)}}}function An(r,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Gt("error",r),Gt("load",r);var c=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var T=s[m];if(T!=null)switch(m){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Ee(r,a,m,T,s,null)}}h&&Ee(r,a,"srcSet",s.srcSet,s,null),c&&Ee(r,a,"src",s.src,s,null);return;case"input":Gt("invalid",r);var I=m=T=h=null,H=null,Q=null;for(c in s)if(s.hasOwnProperty(c)){var ot=s[c];if(ot!=null)switch(c){case"name":h=ot;break;case"type":T=ot;break;case"checked":H=ot;break;case"defaultChecked":Q=ot;break;case"value":m=ot;break;case"defaultValue":I=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(i(137,a));break;default:Ee(r,a,c,ot,s,null)}}So(r,m,I,H,Q,T,h,!1),Cs(r);return;case"select":Gt("invalid",r),c=T=m=null;for(h in s)if(s.hasOwnProperty(h)&&(I=s[h],I!=null))switch(h){case"value":m=I;break;case"defaultValue":T=I;break;case"multiple":c=I;default:Ee(r,a,h,I,s,null)}a=m,s=T,r.multiple=!!c,a!=null?Li(r,!!c,a,!1):s!=null&&Li(r,!!c,s,!0);return;case"textarea":Gt("invalid",r),m=h=c=null;for(T in s)if(s.hasOwnProperty(T)&&(I=s[T],I!=null))switch(T){case"value":c=I;break;case"defaultValue":h=I;break;case"children":m=I;break;case"dangerouslySetInnerHTML":if(I!=null)throw Error(i(91));break;default:Ee(r,a,T,I,s,null)}_o(r,c,h,m),Cs(r);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(c=s[H],c!=null))switch(H){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Ee(r,a,H,c,s,null)}return;case"dialog":Gt("beforetoggle",r),Gt("toggle",r),Gt("cancel",r),Gt("close",r);break;case"iframe":case"object":Gt("load",r);break;case"video":case"audio":for(c=0;c<Mc.length;c++)Gt(Mc[c],r);break;case"image":Gt("error",r),Gt("load",r);break;case"details":Gt("toggle",r);break;case"embed":case"source":case"link":Gt("error",r),Gt("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in s)if(s.hasOwnProperty(Q)&&(c=s[Q],c!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Ee(r,a,Q,c,s,null)}return;default:if(Kl(a)){for(ot in s)s.hasOwnProperty(ot)&&(c=s[ot],c!==void 0&&wg(r,a,ot,c,s,void 0));return}}for(I in s)s.hasOwnProperty(I)&&(c=s[I],c!=null&&Ee(r,a,I,c,s,null))}function tC(r,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,T=null,I=null,H=null,Q=null,ot=null;for(J in s){var ct=s[J];if(s.hasOwnProperty(J)&&ct!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":H=ct;default:c.hasOwnProperty(J)||Ee(r,a,J,null,c,ct)}}for(var Z in c){var J=c[Z];if(ct=s[Z],c.hasOwnProperty(Z)&&(J!=null||ct!=null))switch(Z){case"type":m=J;break;case"name":h=J;break;case"checked":Q=J;break;case"defaultChecked":ot=J;break;case"value":T=J;break;case"defaultValue":I=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,a));break;default:J!==ct&&Ee(r,a,Z,J,c,ct)}}or(r,T,I,H,Q,ot,m,h);return;case"select":J=T=I=Z=null;for(m in s)if(H=s[m],s.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":J=H;default:c.hasOwnProperty(m)||Ee(r,a,m,null,c,H)}for(h in c)if(m=c[h],H=s[h],c.hasOwnProperty(h)&&(m!=null||H!=null))switch(h){case"value":Z=m;break;case"defaultValue":I=m;break;case"multiple":T=m;default:m!==H&&Ee(r,a,h,m,c,H)}a=I,s=T,c=J,Z!=null?Li(r,!!s,Z,!1):!!c!=!!s&&(a!=null?Li(r,!!s,a,!0):Li(r,!!s,s?[]:"",!1));return;case"textarea":J=Z=null;for(I in s)if(h=s[I],s.hasOwnProperty(I)&&h!=null&&!c.hasOwnProperty(I))switch(I){case"value":break;case"children":break;default:Ee(r,a,I,null,c,h)}for(T in c)if(h=c[T],m=s[T],c.hasOwnProperty(T)&&(h!=null||m!=null))switch(T){case"value":Z=h;break;case"defaultValue":J=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==m&&Ee(r,a,T,h,c,m)}Se(r,Z,J);return;case"option":for(var Pt in s)if(Z=s[Pt],s.hasOwnProperty(Pt)&&Z!=null&&!c.hasOwnProperty(Pt))switch(Pt){case"selected":r.selected=!1;break;default:Ee(r,a,Pt,null,c,Z)}for(H in c)if(Z=c[H],J=s[H],c.hasOwnProperty(H)&&Z!==J&&(Z!=null||J!=null))switch(H){case"selected":r.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:Ee(r,a,H,Z,c,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ot in s)Z=s[Ot],s.hasOwnProperty(Ot)&&Z!=null&&!c.hasOwnProperty(Ot)&&Ee(r,a,Ot,null,c,Z);for(Q in c)if(Z=c[Q],J=s[Q],c.hasOwnProperty(Q)&&Z!==J&&(Z!=null||J!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,a));break;default:Ee(r,a,Q,Z,c,J)}return;default:if(Kl(a)){for(var Te in s)Z=s[Te],s.hasOwnProperty(Te)&&Z!==void 0&&!c.hasOwnProperty(Te)&&wg(r,a,Te,void 0,c,Z);for(ot in c)Z=c[ot],J=s[ot],!c.hasOwnProperty(ot)||Z===J||Z===void 0&&J===void 0||wg(r,a,ot,Z,c,J);return}}for(var K in s)Z=s[K],s.hasOwnProperty(K)&&Z!=null&&!c.hasOwnProperty(K)&&Ee(r,a,K,null,c,Z);for(ct in c)Z=c[ct],J=s[ct],!c.hasOwnProperty(ct)||Z===J||Z==null&&J==null||Ee(r,a,ct,Z,c,J)}var Cg=null,Ag=null;function Kd(r){return r.nodeType===9?r:r.ownerDocument}function s1(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l1(r,a){if(r===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&a==="foreignObject"?0:r}function Rg(r,a){return r==="textarea"||r==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ig=null;function eC(){var r=window.event;return r&&r.type==="popstate"?r===Ig?!1:(Ig=r,!0):(Ig=null,!1)}var c1=typeof setTimeout=="function"?setTimeout:void 0,nC=typeof clearTimeout=="function"?clearTimeout:void 0,u1=typeof Promise=="function"?Promise:void 0,rC=typeof queueMicrotask=="function"?queueMicrotask:typeof u1<"u"?function(r){return u1.resolve(null).then(r).catch(iC)}:c1;function iC(r){setTimeout(function(){throw r})}function Ba(r){return r==="head"}function d1(r,a){var s=a,c=0,h=0;do{var m=s.nextSibling;if(r.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<c&&8>c){s=c;var T=r.ownerDocument;if(s&1&&Dc(T.documentElement),s&2&&Dc(T.body),s&4)for(s=T.head,Dc(s),T=s.firstChild;T;){var I=T.nextSibling,H=T.nodeName;T[Ur]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&T.rel.toLowerCase()==="stylesheet"||s.removeChild(T),T=I}}if(h===0){r.removeChild(m),Bc(a);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=m}while(s);Bc(a)}function Mg(r){var a=r.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Mg(s),Sa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}r.removeChild(s)}}function aC(r,a,s,c){for(;r.nodeType===1;){var h=s;if(r.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[Ur])switch(a){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==h.rel||r.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||r.getAttribute("title")!==(h.title==null?null:h.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(h.src==null?null:h.src)||r.getAttribute("type")!==(h.type==null?null:h.type)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(a==="input"&&r.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Gr(r.nextSibling),r===null)break}return null}function oC(r,a,s){if(a==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!s||(r=Gr(r.nextSibling),r===null))return null;return r}function Og(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function sC(r,a){var s=r.ownerDocument;if(r.data!=="$?"||s.readyState==="complete")a();else{var c=function(){a(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function Gr(r){for(;r!=null;r=r.nextSibling){var a=r.nodeType;if(a===1||a===3)break;if(a===8){if(a=r.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return r}var Dg=null;function f1(r){r=r.previousSibling;for(var a=0;r;){if(r.nodeType===8){var s=r.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return r;a--}else s==="/$"&&a++}r=r.previousSibling}return null}function h1(r,a,s){switch(a=Kd(s),r){case"html":if(r=a.documentElement,!r)throw Error(i(452));return r;case"head":if(r=a.head,!r)throw Error(i(453));return r;case"body":if(r=a.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Dc(r){for(var a=r.attributes;a.length;)r.removeAttributeNode(a[0]);Sa(r)}var Dr=new Map,p1=new Set;function Yd(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var ia=nt.d;nt.d={f:lC,r:cC,D:uC,C:dC,L:fC,m:hC,X:gC,S:pC,M:mC};function lC(){var r=ia.f(),a=Ld();return r||a}function cC(r){var a=ai(r);a!==null&&a.tag===5&&a.type==="form"?kv(a):ia.r(r)}var sl=typeof document>"u"?null:document;function g1(r,a,s){var c=sl;if(c&&typeof a=="string"&&a){var h=Xe(a);h='link[rel="'+r+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),p1.has(h)||(p1.add(h),r={rel:r,crossOrigin:s,href:a},c.querySelector(h)===null&&(a=c.createElement("link"),An(a,"link",r),qe(a),c.head.appendChild(a)))}}function uC(r){ia.D(r),g1("dns-prefetch",r,null)}function dC(r,a){ia.C(r,a),g1("preconnect",r,a)}function fC(r,a,s){ia.L(r,a,s);var c=sl;if(c&&r&&a){var h='link[rel="preload"][as="'+Xe(a)+'"]';a==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Xe(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Xe(s.imageSizes)+'"]')):h+='[href="'+Xe(r)+'"]';var m=h;switch(a){case"style":m=ll(r);break;case"script":m=cl(r)}Dr.has(m)||(r=y({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:r,as:a},s),Dr.set(m,r),c.querySelector(h)!==null||a==="style"&&c.querySelector(Nc(m))||a==="script"&&c.querySelector(kc(m))||(a=c.createElement("link"),An(a,"link",r),qe(a),c.head.appendChild(a)))}}function hC(r,a){ia.m(r,a);var s=sl;if(s&&r){var c=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+Xe(c)+'"][href="'+Xe(r)+'"]',m=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=cl(r)}if(!Dr.has(m)&&(r=y({rel:"modulepreload",href:r},a),Dr.set(m,r),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(kc(m)))return}c=s.createElement("link"),An(c,"link",r),qe(c),s.head.appendChild(c)}}}function pC(r,a,s){ia.S(r,a,s);var c=sl;if(c&&r){var h=Fn(c).hoistableStyles,m=ll(r);a=a||"default";var T=h.get(m);if(!T){var I={loading:0,preload:null};if(T=c.querySelector(Nc(m)))I.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":a},s),(s=Dr.get(m))&&Ng(r,s);var H=T=c.createElement("link");qe(H),An(H,"link",r),H._p=new Promise(function(Q,ot){H.onload=Q,H.onerror=ot}),H.addEventListener("load",function(){I.loading|=1}),H.addEventListener("error",function(){I.loading|=2}),I.loading|=4,Wd(T,a,c)}T={type:"stylesheet",instance:T,count:1,state:I},h.set(m,T)}}}function gC(r,a){ia.X(r,a);var s=sl;if(s&&r){var c=Fn(s).hoistableScripts,h=cl(r),m=c.get(h);m||(m=s.querySelector(kc(h)),m||(r=y({src:r,async:!0},a),(a=Dr.get(h))&&kg(r,a),m=s.createElement("script"),qe(m),An(m,"link",r),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function mC(r,a){ia.M(r,a);var s=sl;if(s&&r){var c=Fn(s).hoistableScripts,h=cl(r),m=c.get(h);m||(m=s.querySelector(kc(h)),m||(r=y({src:r,async:!0,type:"module"},a),(a=Dr.get(h))&&kg(r,a),m=s.createElement("script"),qe(m),An(m,"link",r),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function m1(r,a,s,c){var h=(h=_t.current)?Yd(h):null;if(!h)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=ll(s.href),s=Fn(h).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){r=ll(s.href);var m=Fn(h).hoistableStyles,T=m.get(r);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,T),(m=h.querySelector(Nc(r)))&&!m._p&&(T.instance=m,T.state.loading=5),Dr.has(r)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Dr.set(r,s),m||yC(h,r,s,T.state))),a&&c===null)throw Error(i(528,""));return T}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=cl(s),s=Fn(h).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function ll(r){return'href="'+Xe(r)+'"'}function Nc(r){return'link[rel="stylesheet"]['+r+"]"}function y1(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function yC(r,a,s,c){r.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=r.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),An(a,"link",s),qe(a),r.head.appendChild(a))}function cl(r){return'[src="'+Xe(r)+'"]'}function kc(r){return"script[async]"+r}function v1(r,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=r.querySelector('style[data-href~="'+Xe(s.href)+'"]');if(c)return a.instance=c,qe(c),c;var h=y({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),qe(c),An(c,"style",h),Wd(c,s.precedence,r),a.instance=c;case"stylesheet":h=ll(s.href);var m=r.querySelector(Nc(h));if(m)return a.state.loading|=4,a.instance=m,qe(m),m;c=y1(s),(h=Dr.get(h))&&Ng(c,h),m=(r.ownerDocument||r).createElement("link"),qe(m);var T=m;return T._p=new Promise(function(I,H){T.onload=I,T.onerror=H}),An(m,"link",c),a.state.loading|=4,Wd(m,s.precedence,r),a.instance=m;case"script":return m=cl(s.src),(h=r.querySelector(kc(m)))?(a.instance=h,qe(h),h):(c=s,(h=Dr.get(m))&&(c=y({},s),kg(c,h)),r=r.ownerDocument||r,h=r.createElement("script"),qe(h),An(h,"link",c),r.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Wd(c,s.precedence,r));return a.instance}function Wd(r,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,m=h,T=0;T<c.length;T++){var I=c[T];if(I.dataset.precedence===a)m=I;else if(m!==h)break}m?m.parentNode.insertBefore(r,m.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(r,a.firstChild))}function Ng(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.title==null&&(r.title=a.title)}function kg(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.integrity==null&&(r.integrity=a.integrity)}var Qd=null;function b1(r,a,s){if(Qd===null){var c=new Map,h=Qd=new Map;h.set(s,c)}else h=Qd,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(r))return c;for(c.set(r,null),s=s.getElementsByTagName(r),h=0;h<s.length;h++){var m=s[h];if(!(m[Ur]||m[Rt]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(a)||"";T=r+T;var I=c.get(T);I?I.push(m):c.set(T,[m])}}return c}function x1(r,a,s){r=r.ownerDocument||r,r.head.insertBefore(s,a==="title"?r.querySelector("head > title"):null)}function vC(r,a,s){if(s===1||a.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return r=a.disabled,typeof a.precedence=="string"&&r==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function S1(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Pc=null;function bC(){}function xC(r,a,s){if(Pc===null)throw Error(i(475));var c=Pc;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=ll(s.href),m=r.querySelector(Nc(h));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=Xd.bind(c),r.then(c,c)),a.state.loading|=4,a.instance=m,qe(m);return}m=r.ownerDocument||r,s=y1(s),(h=Dr.get(h))&&Ng(s,h),m=m.createElement("link"),qe(m);var T=m;T._p=new Promise(function(I,H){T.onload=I,T.onerror=H}),An(m,"link",s),a.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,r),(r=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Xd.bind(c),r.addEventListener("load",a),r.addEventListener("error",a))}}function SC(){if(Pc===null)throw Error(i(475));var r=Pc;return r.stylesheets&&r.count===0&&Pg(r,r.stylesheets),0<r.count?function(a){var s=setTimeout(function(){if(r.stylesheets&&Pg(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=a,function(){r.unsuspend=null,clearTimeout(s)}}:null}function Xd(){if(this.count--,this.count===0){if(this.stylesheets)Pg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Zd=null;function Pg(r,a){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Zd=new Map,a.forEach(_C,r),Zd=null,Xd.call(r))}function _C(r,a){if(!(a.state.loading&4)){var s=Zd.get(r);if(s)var c=s.get(null);else{s=new Map,Zd.set(r,s);for(var h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var T=h[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),c=T)}c&&s.set(null,c)}h=a.instance,T=h.getAttribute("data-precedence"),m=s.get(T)||c,m===c&&s.set(null,h),s.set(T,h),this.count++,c=Xd.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),m?m.parentNode.insertBefore(h,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(h,r.firstChild)),a.state.loading|=4}}var jc={$$typeof:z,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function EC(r,a,s,c,h,m,T,I){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.hiddenUpdates=Lr(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function _1(r,a,s,c,h,m,T,I,H,Q,ot,ct){return r=new EC(r,a,s,T,I,H,Q,ct),a=1,m===!0&&(a|=24),m=lr(3,null,null,a),r.current=m,m.stateNode=r,a=mp(),a.refCount++,r.pooledCache=a,a.refCount++,m.memoizedState={element:c,isDehydrated:s,cache:a},xp(m),r}function E1(r){return r?(r=Bs,r):Bs}function T1(r,a,s,c,h,m){h=E1(h),c.context===null?c.context=h:c.pendingContext=h,c=Aa(a),c.payload={element:s},m=m===void 0?null:m,m!==null&&(c.callback=m),s=Ra(r,c,a),s!==null&&(hr(s,r,a),fc(s,r,a))}function w1(r,a){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var s=r.retryLane;r.retryLane=s!==0&&s<a?s:a}}function jg(r,a){w1(r,a),(r=r.alternate)&&w1(r,a)}function C1(r){if(r.tag===13){var a=Ls(r,67108864);a!==null&&hr(a,r,67108864),jg(r,67108864)}}var Jd=!0;function TC(r,a,s,c){var h=q.T;q.T=null;var m=nt.p;try{nt.p=2,Vg(r,a,s,c)}finally{nt.p=m,q.T=h}}function wC(r,a,s,c){var h=q.T;q.T=null;var m=nt.p;try{nt.p=8,Vg(r,a,s,c)}finally{nt.p=m,q.T=h}}function Vg(r,a,s,c){if(Jd){var h=zg(c);if(h===null)Tg(r,a,c,tf,s),R1(r,c);else if(AC(h,r,a,s,c))c.stopPropagation();else if(R1(r,c),a&4&&-1<CC.indexOf(r)){for(;h!==null;){var m=ai(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=Pn(m.pendingLanes);if(T!==0){var I=m;for(I.pendingLanes|=2,I.entangledLanes|=2;T;){var H=1<<31-hn(T);I.entanglements[1]|=H,T&=~H}bi(m),(be&6)===0&&(Vd=ge()+500,Ic(0))}}break;case 13:I=Ls(m,2),I!==null&&hr(I,m,2),Ld(),jg(m,2)}if(m=zg(c),m===null&&Tg(r,a,c,tf,s),m===h)break;h=m}h!==null&&c.stopPropagation()}else Tg(r,a,c,null,s)}}function zg(r){return r=Er(r),Lg(r)}var tf=null;function Lg(r){if(tf=null,r=ji(r),r!==null){var a=l(r);if(a===null)r=null;else{var s=a.tag;if(s===13){if(r=u(a),r!==null)return r;r=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null)}}return tf=r,null}function A1(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case _n:return 2;case Hn:return 8;case Ae:case Vt:return 32;case Ni:return 268435456;default:return 32}default:return 32}}var Bg=!1,Ua=null,$a=null,Ha=null,Vc=new Map,zc=new Map,Fa=[],CC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R1(r,a){switch(r){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Vc.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":zc.delete(a.pointerId)}}function Lc(r,a,s,c,h,m){return r===null||r.nativeEvent!==m?(r={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},a!==null&&(a=ai(a),a!==null&&C1(a)),r):(r.eventSystemFlags|=c,a=r.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),r)}function AC(r,a,s,c,h){switch(a){case"focusin":return Ua=Lc(Ua,r,a,s,c,h),!0;case"dragenter":return $a=Lc($a,r,a,s,c,h),!0;case"mouseover":return Ha=Lc(Ha,r,a,s,c,h),!0;case"pointerover":var m=h.pointerId;return Vc.set(m,Lc(Vc.get(m)||null,r,a,s,c,h)),!0;case"gotpointercapture":return m=h.pointerId,zc.set(m,Lc(zc.get(m)||null,r,a,s,c,h)),!0}return!1}function I1(r){var a=ji(r.target);if(a!==null){var s=l(a);if(s!==null){if(a=s.tag,a===13){if(a=u(s),a!==null){r.blockedOn=a,vt(r.priority,function(){if(s.tag===13){var c=fr();c=ri(c);var h=Ls(s,c);h!==null&&hr(h,s,c),jg(s,c)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){r.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}r.blockedOn=null}function ef(r){if(r.blockedOn!==null)return!1;for(var a=r.targetContainers;0<a.length;){var s=zg(r.nativeEvent);if(s===null){s=r.nativeEvent;var c=new s.constructor(s.type,s);Bi=c,s.target.dispatchEvent(c),Bi=null}else return a=ai(s),a!==null&&C1(a),r.blockedOn=s,!1;a.shift()}return!0}function M1(r,a,s){ef(r)&&s.delete(a)}function RC(){Bg=!1,Ua!==null&&ef(Ua)&&(Ua=null),$a!==null&&ef($a)&&($a=null),Ha!==null&&ef(Ha)&&(Ha=null),Vc.forEach(M1),zc.forEach(M1)}function nf(r,a){r.blockedOn===a&&(r.blockedOn=null,Bg||(Bg=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,RC)))}var rf=null;function O1(r){rf!==r&&(rf=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){rf===r&&(rf=null);for(var a=0;a<r.length;a+=3){var s=r[a],c=r[a+1],h=r[a+2];if(typeof c!="function"){if(Lg(c||s)===null)continue;break}var m=ai(s);m!==null&&(r.splice(a,3),a-=3,Lp(m,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function Bc(r){function a(H){return nf(H,r)}Ua!==null&&nf(Ua,r),$a!==null&&nf($a,r),Ha!==null&&nf(Ha,r),Vc.forEach(a),zc.forEach(a);for(var s=0;s<Fa.length;s++){var c=Fa[s];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Fa.length&&(s=Fa[0],s.blockedOn===null);)I1(s),s.blockedOn===null&&Fa.shift();if(s=(r.ownerDocument||r).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],m=s[c+1],T=h[It]||null;if(typeof m=="function")T||O1(s);else if(T){var I=null;if(m&&m.hasAttribute("formAction")){if(h=m,T=m[It]||null)I=T.formAction;else if(Lg(h)!==null)continue}else I=T.action;typeof I=="function"?s[c+1]=I:(s.splice(c,3),c-=3),O1(s)}}}function Ug(r){this._internalRoot=r}af.prototype.render=Ug.prototype.render=function(r){var a=this._internalRoot;if(a===null)throw Error(i(409));var s=a.current,c=fr();T1(s,c,r,a,null,null)},af.prototype.unmount=Ug.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var a=r.containerInfo;T1(r.current,2,null,r,null,null),Ld(),a[Xt]=null}};function af(r){this._internalRoot=r}af.prototype.unstable_scheduleHydration=function(r){if(r){var a=ii();r={blockedOn:null,target:r,priority:a};for(var s=0;s<Fa.length&&a!==0&&a<Fa[s].priority;s++);Fa.splice(s,0,r),s===0&&I1(r)}};var D1=t.version;if(D1!=="19.1.0")throw Error(i(527,D1,"19.1.0"));nt.findDOMNode=function(r){var a=r._reactInternals;if(a===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(a),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var IC={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var of=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!of.isDisabled&&of.supportsFiber)try{De=of.inject(IC),ce=of}catch{}}return Hc.createRoot=function(r,a){if(!o(r))throw Error(i(299));var s=!1,c="",h=Yv,m=Wv,T=Qv,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks)),a=_1(r,1,!1,null,null,s,c,h,m,T,I,null),r[Xt]=a.current,Eg(r),new Ug(a)},Hc.hydrateRoot=function(r,a,s){if(!o(r))throw Error(i(299));var c=!1,h="",m=Yv,T=Wv,I=Qv,H=null,Q=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(I=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&(Q=s.formState)),a=_1(r,1,!0,a,s??null,c,h,m,T,I,H,Q),a.context=E1(null),s=a.current,c=fr(),c=ri(c),h=Aa(c),h.callback=null,Ra(s,h,c),s=c,a.current.lanes=s,ar(a,s),bi(a),r[Xt]=a.current,Eg(r),new af(a)},Hc.version="19.1.0",Hc}var $1;function UC(){if($1)return Fg.exports;$1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Fg.exports=BC(),Fg.exports}var $C=UC(),Fc={},H1;function HC(){if(H1)return Fc;H1=1,Object.defineProperty(Fc,"__esModule",{value:!0}),Fc.parse=u,Fc.serialize=g;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function u(_,w){const C=new l,R=_.length;if(R<2)return C;const P=(w==null?void 0:w.decode)||y;let V=0;do{const F=_.indexOf("=",V);if(F===-1)break;const z=_.indexOf(";",V),$=z===-1?R:z;if(F>$){V=_.lastIndexOf(";",F-1)+1;continue}const B=f(_,V,F),X=p(_,F,B),D=_.slice(B,X);if(C[D]===void 0){let M=f(_,F+1,$),O=p(_,$,M);const S=P(_.slice(M,O));C[D]=S}V=$+1}while(V<R);return C}function f(_,w,C){do{const R=_.charCodeAt(w);if(R!==32&&R!==9)return w}while(++w<C);return C}function p(_,w,C){for(;w>C;){const R=_.charCodeAt(--w);if(R!==32&&R!==9)return w+1}return C}function g(_,w,C){const R=(C==null?void 0:C.encode)||encodeURIComponent;if(!e.test(_))throw new TypeError(`argument name is invalid: ${_}`);const P=R(w);if(!t.test(P))throw new TypeError(`argument val is invalid: ${w}`);let V=_+"="+P;if(!C)return V;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);V+="; Max-Age="+C.maxAge}if(C.domain){if(!n.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);V+="; Domain="+C.domain}if(C.path){if(!i.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);V+="; Path="+C.path}if(C.expires){if(!x(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);V+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&(V+="; HttpOnly"),C.secure&&(V+="; Secure"),C.partitioned&&(V+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":V+="; Priority=Low";break;case"medium":V+="; Priority=Medium";break;case"high":V+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":V+="; SameSite=Strict";break;case"lax":V+="; SameSite=Lax";break;case"none":V+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return V}function y(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function x(_){return o.call(_)==="[object Date]"}return Fc}HC();var F1="popstate";function FC(e={}){function t(i,o){let{pathname:l,search:u,hash:f}=i.location;return _m("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:uu(o)}return GC(t,n,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ii(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qC(){return Math.random().toString(36).substring(2,10)}function q1(e,t){return{usr:e.state,key:e.key,idx:t}}function _m(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?kl(t):t,state:n,key:t&&t.key||i||qC()}}function uu({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function kl(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function GC(e,t,n,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,f="POP",p=null,g=y();g==null&&(g=0,u.replaceState({...u.state,idx:g},""));function y(){return(u.state||{idx:null}).idx}function x(){f="POP";let P=y(),V=P==null?null:P-g;g=P,p&&p({action:f,location:R.location,delta:V})}function _(P,V){f="PUSH";let F=_m(R.location,P,V);g=y()+1;let z=q1(F,g),$=R.createHref(F);try{u.pushState(z,"",$)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;o.location.assign($)}l&&p&&p({action:f,location:R.location,delta:1})}function w(P,V){f="REPLACE";let F=_m(R.location,P,V);g=y();let z=q1(F,g),$=R.createHref(F);u.replaceState(z,"",$),l&&p&&p({action:f,location:R.location,delta:0})}function C(P){let V=o.location.origin!=="null"?o.location.origin:o.location.href,F=typeof P=="string"?P:uu(P);return F=F.replace(/ $/,"%20"),ze(V,`No window.location.(origin|href) available to create URL for href: ${F}`),new URL(F,V)}let R={get action(){return f},get location(){return e(o,u)},listen(P){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(F1,x),p=P,()=>{o.removeEventListener(F1,x),p=null}},createHref(P){return t(o,P)},createURL:C,encodeLocation(P){let V=C(P);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:_,replace:w,go(P){return u.go(P)}};return R}function A_(e,t,n="/"){return KC(e,t,n,!1)}function KC(e,t,n,i){let o=typeof t=="string"?kl(t):t,l=ua(o.pathname||"/",n);if(l==null)return null;let u=R_(e);YC(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let g=aA(l);f=rA(u[p],g,i)}return f}function R_(e,t=[],n=[],i=""){let o=(l,u,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};p.relativePath.startsWith("/")&&(ze(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let g=sa([i,p.relativePath]),y=n.concat(p);l.children&&l.children.length>0&&(ze(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),R_(l.children,t,y,g)),!(l.path==null&&!l.index)&&t.push({path:g,score:eA(g,l.index),routesMeta:y})};return e.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,u);else for(let p of I_(l.path))o(l,u,p)}),t}function I_(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=I_(i.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function YC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nA(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var WC=/^:[\w-]+$/,QC=3,XC=2,ZC=1,JC=10,tA=-2,G1=e=>e==="*";function eA(e,t){let n=e.split("/"),i=n.length;return n.some(G1)&&(i+=tA),t&&(i+=XC),n.filter(o=>!G1(o)).reduce((o,l)=>o+(WC.test(l)?QC:l===""?ZC:JC),i)}function nA(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function rA(e,t,n=!1){let{routesMeta:i}=e,o={},l="/",u=[];for(let f=0;f<i.length;++f){let p=i[f],g=f===i.length-1,y=l==="/"?t:t.slice(l.length)||"/",x=Vf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),_=p.route;if(!x&&g&&n&&!i[i.length-1].route.index&&(x=Vf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:sa([l,x.pathname]),pathnameBase:cA(sa([l,x.pathnameBase])),route:_}),x.pathnameBase!=="/"&&(l=sa([l,x.pathnameBase]))}return u}function Vf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=iA(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((g,{paramName:y,isOptional:x},_)=>{if(y==="*"){let C=f[_]||"";u=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const w=f[_];return x&&!w?g[y]=void 0:g[y]=(w||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:u,pattern:e}}function iA(e,t=!1,n=!0){Ii(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function aA(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ii(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ua(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function oA(e,t="/"){let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?kl(e):e;return{pathname:n?n.startsWith("/")?n:sA(n,t):t,search:uA(i),hash:dA(o)}}function sA(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Yg(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lA(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function M_(e){let t=lA(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function O_(e,t,n,i=!1){let o;typeof e=="string"?o=kl(e):(o={...e},ze(!o.pathname||!o.pathname.includes("?"),Yg("?","pathname","search",o)),ze(!o.pathname||!o.pathname.includes("#"),Yg("#","pathname","hash",o)),ze(!o.search||!o.search.includes("#"),Yg("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=n;else{let x=t.length-1;if(!i&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),x-=1;o.pathname=_.join("/")}f=x>=0?t[x]:"/"}let p=oA(o,f),g=u&&u!=="/"&&u.endsWith("/"),y=(l||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var sa=e=>e.join("/").replace(/\/\/+/g,"/"),cA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uA=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dA=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var D_=["POST","PUT","PATCH","DELETE"];new Set(D_);var hA=["GET",...D_];new Set(hA);var Pl=A.createContext(null);Pl.displayName="DataRouter";var uh=A.createContext(null);uh.displayName="DataRouterState";var N_=A.createContext({isTransitioning:!1});N_.displayName="ViewTransition";var pA=A.createContext(new Map);pA.displayName="Fetchers";var gA=A.createContext(null);gA.displayName="Await";var Di=A.createContext(null);Di.displayName="Navigation";var Cu=A.createContext(null);Cu.displayName="Location";var ma=A.createContext({outlet:null,matches:[],isDataRoute:!1});ma.displayName="Route";var fy=A.createContext(null);fy.displayName="RouteError";function mA(e,{relative:t}={}){ze(Au(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=A.useContext(Di),{hash:o,pathname:l,search:u}=Ru(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:sa([n,l])),i.createHref({pathname:f,search:u,hash:o})}function Au(){return A.useContext(Cu)!=null}function uo(){return ze(Au(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Cu).location}var k_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function P_(e){A.useContext(Di).static||A.useLayoutEffect(e)}function Xr(){let{isDataRoute:e}=A.useContext(ma);return e?IA():yA()}function yA(){ze(Au(),"useNavigate() may be used only in the context of a <Router> component.");let e=A.useContext(Pl),{basename:t,navigator:n}=A.useContext(Di),{matches:i}=A.useContext(ma),{pathname:o}=uo(),l=JSON.stringify(M_(i)),u=A.useRef(!1);return P_(()=>{u.current=!0}),A.useCallback((p,g={})=>{if(Ii(u.current,k_),!u.current)return;if(typeof p=="number"){n.go(p);return}let y=O_(p,JSON.parse(l),o,g.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:sa([t,y.pathname])),(g.replace?n.replace:n.push)(y,g.state,g)},[t,n,l,o,e])}A.createContext(null);function Ru(e,{relative:t}={}){let{matches:n}=A.useContext(ma),{pathname:i}=uo(),o=JSON.stringify(M_(n));return A.useMemo(()=>O_(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function vA(e,t){return j_(e,t)}function j_(e,t,n,i){var F;ze(Au(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=A.useContext(Di),{matches:u}=A.useContext(ma),f=u[u.length-1],p=f?f.params:{},g=f?f.pathname:"/",y=f?f.pathnameBase:"/",x=f&&f.route;{let z=x&&x.path||"";V_(g,!x||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let _=uo(),w;if(t){let z=typeof t=="string"?kl(t):t;ze(y==="/"||((F=z.pathname)==null?void 0:F.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${z.pathname}" was given in the \`location\` prop.`),w=z}else w=_;let C=w.pathname||"/",R=C;if(y!=="/"){let z=y.replace(/^\//,"").split("/");R="/"+C.replace(/^\//,"").split("/").slice(z.length).join("/")}let P=!l&&n&&n.matches&&n.matches.length>0?n.matches:A_(e,{pathname:R});Ii(x||P!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Ii(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=EA(P&&P.map(z=>Object.assign({},z,{params:Object.assign({},p,z.params),pathname:sa([y,o.encodeLocation?o.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?y:sa([y,o.encodeLocation?o.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),u,n,i);return t&&V?A.createElement(Cu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},V):V}function bA(){let e=RA(),t=fA(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:l},"ErrorBoundary")," or"," ",A.createElement("code",{style:l},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},t),n?A.createElement("pre",{style:o},n):null,u)}var xA=A.createElement(bA,null),SA=class extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?A.createElement(ma.Provider,{value:this.props.routeContext},A.createElement(fy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _A({routeContext:e,match:t,children:n}){let i=A.useContext(Pl);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),A.createElement(ma.Provider,{value:e},n)}function EA(e,t=[],n=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=n==null?void 0:n.errors;if(l!=null){let p=o.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);ze(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,f=-1;if(n)for(let p=0;p<o.length;p++){let g=o[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(f=p),g.route.id){let{loaderData:y,errors:x}=n,_=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||_){u=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,g,y)=>{let x,_=!1,w=null,C=null;n&&(x=l&&g.route.id?l[g.route.id]:void 0,w=g.route.errorElement||xA,u&&(f<0&&y===0?(V_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,C=null):f===y&&(_=!0,C=g.route.hydrateFallbackElement||null)));let R=t.concat(o.slice(0,y+1)),P=()=>{let V;return x?V=w:_?V=C:g.route.Component?V=A.createElement(g.route.Component,null):g.route.element?V=g.route.element:V=p,A.createElement(_A,{match:g,routeContext:{outlet:p,matches:R,isDataRoute:n!=null},children:V})};return n&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?A.createElement(SA,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:P(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):P()},null)}function hy(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TA(e){let t=A.useContext(Pl);return ze(t,hy(e)),t}function wA(e){let t=A.useContext(uh);return ze(t,hy(e)),t}function CA(e){let t=A.useContext(ma);return ze(t,hy(e)),t}function py(e){let t=CA(e),n=t.matches[t.matches.length-1];return ze(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function AA(){return py("useRouteId")}function RA(){var i;let e=A.useContext(fy),t=wA("useRouteError"),n=py("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[n]}function IA(){let{router:e}=TA("useNavigate"),t=py("useNavigate"),n=A.useRef(!1);return P_(()=>{n.current=!0}),A.useCallback(async(o,l={})=>{Ii(n.current,k_),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var K1={};function V_(e,t,n){!t&&!K1[e]&&(K1[e]=!0,Ii(!1,n))}A.memo(MA);function MA({routes:e,future:t,state:n}){return j_(e,void 0,n,t)}function pr(e){ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function OA({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:o,static:l=!1}){ze(!Au(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=A.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof n=="string"&&(n=kl(n));let{pathname:p="/",search:g="",hash:y="",state:x=null,key:_="default"}=n,w=A.useMemo(()=>{let C=ua(p,u);return C==null?null:{location:{pathname:C,search:g,hash:y,state:x,key:_},navigationType:i}},[u,p,g,y,x,_,i]);return Ii(w!=null,`<Router basename="${u}"> is not able to match the URL "${p}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:A.createElement(Di.Provider,{value:f},A.createElement(Cu.Provider,{children:t,value:w}))}function DA({children:e,location:t}){return vA(Em(e),t)}function Em(e,t=[]){let n=[];return A.Children.forEach(e,(i,o)=>{if(!A.isValidElement(i))return;let l=[...t,o];if(i.type===A.Fragment){n.push.apply(n,Em(i.props.children,l));return}ze(i.type===pr,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ze(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Em(i.props.children,l)),n.push(u)}),n}var Tf="get",wf="application/x-www-form-urlencoded";function dh(e){return e!=null&&typeof e.tagName=="string"}function NA(e){return dh(e)&&e.tagName.toLowerCase()==="button"}function kA(e){return dh(e)&&e.tagName.toLowerCase()==="form"}function PA(e){return dh(e)&&e.tagName.toLowerCase()==="input"}function jA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function VA(e,t){return e.button===0&&(!t||t==="_self")&&!jA(e)}var sf=null;function zA(){if(sf===null)try{new FormData(document.createElement("form"),0),sf=!1}catch{sf=!0}return sf}var LA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wg(e){return e!=null&&!LA.has(e)?(Ii(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wf}"`),null):e}function BA(e,t){let n,i,o,l,u;if(kA(e)){let f=e.getAttribute("action");i=f?ua(f,t):null,n=e.getAttribute("method")||Tf,o=Wg(e.getAttribute("enctype"))||wf,l=new FormData(e)}else if(NA(e)||PA(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(i=p?ua(p,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||Tf,o=Wg(e.getAttribute("formenctype"))||Wg(f.getAttribute("enctype"))||wf,l=new FormData(f,e),!zA()){let{name:g,type:y,value:x}=e;if(y==="image"){let _=g?`${g}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else g&&l.append(g,x)}}else{if(dh(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Tf,i=null,o=wf,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:l,body:u}}function gy(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function UA(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $A(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function HA(e,t,n){let i=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await UA(l,n);return u.links?u.links():[]}return[]}));return KA(i.flat(1).filter($A).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Y1(e,t,n,i,o,l){let u=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,f=(p,g)=>{var y;return n[g].pathname!==p.pathname||((y=n[g].route.path)==null?void 0:y.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return l==="assets"?t.filter((p,g)=>u(p,g)||f(p,g)):l==="data"?t.filter((p,g)=>{var x;let y=i.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(u(p,g)||f(p,g))return!0;if(p.route.shouldRevalidate){let _=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=n[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function FA(e,t,{includeHydrateFallback:n}={}){return qA(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function qA(e){return[...new Set(e)]}function GA(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function KA(e,t){let n=new Set;return new Set(t),e.reduce((i,o)=>{let l=JSON.stringify(GA(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}var YA=new Set([100,101,204,205]);function WA(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&ua(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function z_(){let e=A.useContext(Pl);return gy(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function QA(){let e=A.useContext(uh);return gy(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var my=A.createContext(void 0);my.displayName="FrameworkContext";function L_(){let e=A.useContext(my);return gy(e,"You must render this element inside a <HydratedRouter> element"),e}function XA(e,t){let n=A.useContext(my),[i,o]=A.useState(!1),[l,u]=A.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:x}=t,_=A.useRef(null);A.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let R=V=>{V.forEach(F=>{u(F.isIntersecting)})},P=new IntersectionObserver(R,{threshold:.5});return _.current&&P.observe(_.current),()=>{P.disconnect()}}},[e]),A.useEffect(()=>{if(i){let R=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(R)}}},[i]);let w=()=>{o(!0)},C=()=>{o(!1),u(!1)};return n?e!=="intent"?[l,_,{}]:[l,_,{onFocus:qc(f,w),onBlur:qc(p,C),onMouseEnter:qc(g,w),onMouseLeave:qc(y,C),onTouchStart:qc(x,w)}]:[!1,_,{}]}function qc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ZA({page:e,...t}){let{router:n}=z_(),i=A.useMemo(()=>A_(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?A.createElement(tR,{page:e,matches:i,...t}):null}function JA(e){let{manifest:t,routeModules:n}=L_(),[i,o]=A.useState([]);return A.useEffect(()=>{let l=!1;return HA(e,t,n).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,n]),i}function tR({page:e,matches:t,...n}){let i=uo(),{manifest:o,routeModules:l}=L_(),{basename:u}=z_(),{loaderData:f,matches:p}=QA(),g=A.useMemo(()=>Y1(e,t,p,o,i,"data"),[e,t,p,o,i]),y=A.useMemo(()=>Y1(e,t,p,o,i,"assets"),[e,t,p,o,i]),x=A.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let C=new Set,R=!1;if(t.forEach(V=>{var z;let F=o.routes[V.route.id];!F||!F.hasLoader||(!g.some($=>$.route.id===V.route.id)&&V.route.id in f&&((z=l[V.route.id])!=null&&z.shouldRevalidate)||F.hasClientLoader?R=!0:C.add(V.route.id))}),C.size===0)return[];let P=WA(e,u);return R&&C.size>0&&P.searchParams.set("_routes",t.filter(V=>C.has(V.route.id)).map(V=>V.route.id).join(",")),[P.pathname+P.search]},[u,f,i,o,g,t,e,l]),_=A.useMemo(()=>FA(y,o),[y,o]),w=JA(y);return A.createElement(A.Fragment,null,x.map(C=>A.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...n})),_.map(C=>A.createElement("link",{key:C,rel:"modulepreload",href:C,...n})),w.map(({key:C,link:R})=>A.createElement("link",{key:C,...R})))}function eR(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var B_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{B_&&(window.__reactRouterVersion="7.5.3")}catch{}function nR({basename:e,children:t,window:n}){let i=A.useRef();i.current==null&&(i.current=FC({window:n,v5Compat:!0}));let o=i.current,[l,u]=A.useState({action:o.action,location:o.location}),f=A.useCallback(p=>{A.startTransition(()=>u(p))},[u]);return A.useLayoutEffect(()=>o.listen(f),[o,f]),A.createElement(OA,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o})}var U_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$_=A.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:f,target:p,to:g,preventScrollReset:y,viewTransition:x,..._},w){let{basename:C}=A.useContext(Di),R=typeof g=="string"&&U_.test(g),P,V=!1;if(typeof g=="string"&&R&&(P=g,B_))try{let O=new URL(window.location.href),S=g.startsWith("//")?new URL(O.protocol+g):new URL(g),j=ua(S.pathname,C);S.origin===O.origin&&j!=null?g=j+S.search+S.hash:V=!0}catch{Ii(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let F=mA(g,{relative:o}),[z,$,B]=XA(i,_),X=oR(g,{replace:u,state:f,target:p,preventScrollReset:y,relative:o,viewTransition:x});function D(O){t&&t(O),O.defaultPrevented||X(O)}let M=A.createElement("a",{..._,...B,href:P||F,onClick:V||l?t:D,ref:eR(w,$),target:p,"data-discover":!R&&n==="render"?"true":void 0});return z&&!R?A.createElement(A.Fragment,null,M,A.createElement(ZA,{page:F})):M});$_.displayName="Link";var rR=A.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:f,children:p,...g},y){let x=Ru(u,{relative:g.relative}),_=uo(),w=A.useContext(uh),{navigator:C,basename:R}=A.useContext(Di),P=w!=null&&dR(x)&&f===!0,V=C.encodeLocation?C.encodeLocation(x).pathname:x.pathname,F=_.pathname,z=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(F=F.toLowerCase(),z=z?z.toLowerCase():null,V=V.toLowerCase()),z&&R&&(z=ua(z,R)||z);const $=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let B=F===V||!o&&F.startsWith(V)&&F.charAt($)==="/",X=z!=null&&(z===V||!o&&z.startsWith(V)&&z.charAt(V.length)==="/"),D={isActive:B,isPending:X,isTransitioning:P},M=B?t:void 0,O;typeof i=="function"?O=i(D):O=[i,B?"active":null,X?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let S=typeof l=="function"?l(D):l;return A.createElement($_,{...g,"aria-current":M,className:O,ref:y,style:S,to:u,viewTransition:f},typeof p=="function"?p(D):p)});rR.displayName="NavLink";var iR=A.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:o,state:l,method:u=Tf,action:f,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:x,..._},w)=>{let C=cR(),R=uR(f,{relative:g}),P=u.toLowerCase()==="get"?"get":"post",V=typeof f=="string"&&U_.test(f),F=z=>{if(p&&p(z),z.defaultPrevented)return;z.preventDefault();let $=z.nativeEvent.submitter,B=($==null?void 0:$.getAttribute("formmethod"))||u;C($||z.currentTarget,{fetcherKey:t,method:B,navigate:n,replace:o,state:l,relative:g,preventScrollReset:y,viewTransition:x})};return A.createElement("form",{ref:w,method:P,action:R,onSubmit:i?p:F,..._,"data-discover":!V&&e==="render"?"true":void 0})});iR.displayName="Form";function aR(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function H_(e){let t=A.useContext(Pl);return ze(t,aR(e)),t}function oR(e,{target:t,replace:n,state:i,preventScrollReset:o,relative:l,viewTransition:u}={}){let f=Xr(),p=uo(),g=Ru(e,{relative:l});return A.useCallback(y=>{if(VA(y,t)){y.preventDefault();let x=n!==void 0?n:uu(p)===uu(g);f(e,{replace:x,state:i,preventScrollReset:o,relative:l,viewTransition:u})}},[p,f,g,n,i,t,e,o,l,u])}var sR=0,lR=()=>`__${String(++sR)}__`;function cR(){let{router:e}=H_("useSubmit"),{basename:t}=A.useContext(Di),n=AA();return A.useCallback(async(i,o={})=>{let{action:l,method:u,encType:f,formData:p,body:g}=BA(i,t);if(o.navigate===!1){let y=o.fetcherKey||lR();await e.fetch(y,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function uR(e,{relative:t}={}){let{basename:n}=A.useContext(Di),i=A.useContext(ma);ze(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...Ru(e||".",{relative:t})},u=uo();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(y=>y==="")){f.delete("index"),p.filter(x=>x).forEach(x=>f.append("index",x));let y=f.toString();l.search=y?`?${y}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:sa([n,l.pathname])),uu(l)}function dR(e,t={}){let n=A.useContext(N_);ze(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=H_("useViewTransitionState"),o=Ru(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=ua(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=ua(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Vf(o.pathname,u)!=null||Vf(o.pathname,l)!=null}new TextEncoder;[...YA];var F_=C_();const lf=w_(F_),du={black:"#000",white:"#fff"},ul={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},dl={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},fl={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},hl={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},pl={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},Gc={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},fR={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function es(e,...t){const n=new URL(`https://mui.com/production-error/?code=${e}`);return t.forEach(i=>n.searchParams.append("args[]",i)),`Minified MUI error #${e}; visit ${n} for the full message.`}const fh="$$material";function zf(){return zf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},zf.apply(null,arguments)}function hR(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function pR(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var gR=function(){function e(n){var i=this;this._insertTag=function(o){var l;i.tags.length===0?i.insertionPoint?l=i.insertionPoint.nextSibling:i.prepend?l=i.container.firstChild:l=i.before:l=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(o,l),i.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(pR(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=hR(o);try{l.insertRule(i,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){var o;return(o=i.parentNode)==null?void 0:o.removeChild(i)}),this.tags=[],this.ctr=0},e}(),Bn="-ms-",Lf="-moz-",de="-webkit-",q_="comm",yy="rule",vy="decl",mR="@import",G_="@keyframes",yR="@layer",vR=Math.abs,hh=String.fromCharCode,bR=Object.assign;function xR(e,t){return Mn(e,0)^45?(((t<<2^Mn(e,0))<<2^Mn(e,1))<<2^Mn(e,2))<<2^Mn(e,3):0}function K_(e){return e.trim()}function SR(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,n){return e.replace(t,n)}function Tm(e,t){return e.indexOf(t)}function Mn(e,t){return e.charCodeAt(t)|0}function fu(e,t,n){return e.slice(t,n)}function _i(e){return e.length}function by(e){return e.length}function cf(e,t){return t.push(e),e}function _R(e,t){return e.map(t).join("")}var ph=1,wl=1,Y_=0,ir=0,en=0,jl="";function gh(e,t,n,i,o,l,u){return{value:e,root:t,parent:n,type:i,props:o,children:l,line:ph,column:wl,length:u,return:""}}function Kc(e,t){return bR(gh("",null,null,"",null,null,0),e,{length:-e.length},t)}function ER(){return en}function TR(){return en=ir>0?Mn(jl,--ir):0,wl--,en===10&&(wl=1,ph--),en}function mr(){return en=ir<Y_?Mn(jl,ir++):0,wl++,en===10&&(wl=1,ph++),en}function wi(){return Mn(jl,ir)}function Cf(){return ir}function Iu(e,t){return fu(jl,e,t)}function hu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W_(e){return ph=wl=1,Y_=_i(jl=e),ir=0,[]}function Q_(e){return jl="",e}function Af(e){return K_(Iu(ir-1,wm(e===91?e+2:e===40?e+1:e)))}function wR(e){for(;(en=wi())&&en<33;)mr();return hu(e)>2||hu(en)>3?"":" "}function CR(e,t){for(;--t&&mr()&&!(en<48||en>102||en>57&&en<65||en>70&&en<97););return Iu(e,Cf()+(t<6&&wi()==32&&mr()==32))}function wm(e){for(;mr();)switch(en){case e:return ir;case 34:case 39:e!==34&&e!==39&&wm(en);break;case 40:e===41&&wm(e);break;case 92:mr();break}return ir}function AR(e,t){for(;mr()&&e+en!==57;)if(e+en===84&&wi()===47)break;return"/*"+Iu(t,ir-1)+"*"+hh(e===47?e:mr())}function RR(e){for(;!hu(wi());)mr();return Iu(e,ir)}function IR(e){return Q_(Rf("",null,null,null,[""],e=W_(e),0,[0],e))}function Rf(e,t,n,i,o,l,u,f,p){for(var g=0,y=0,x=u,_=0,w=0,C=0,R=1,P=1,V=1,F=0,z="",$=o,B=l,X=i,D=z;P;)switch(C=F,F=mr()){case 40:if(C!=108&&Mn(D,x-1)==58){Tm(D+=fe(Af(F),"&","&\f"),"&\f")!=-1&&(V=-1);break}case 34:case 39:case 91:D+=Af(F);break;case 9:case 10:case 13:case 32:D+=wR(C);break;case 92:D+=CR(Cf()-1,7);continue;case 47:switch(wi()){case 42:case 47:cf(MR(AR(mr(),Cf()),t,n),p);break;default:D+="/"}break;case 123*R:f[g++]=_i(D)*V;case 125*R:case 59:case 0:switch(F){case 0:case 125:P=0;case 59+y:V==-1&&(D=fe(D,/\f/g,"")),w>0&&_i(D)-x&&cf(w>32?Q1(D+";",i,n,x-1):Q1(fe(D," ","")+";",i,n,x-2),p);break;case 59:D+=";";default:if(cf(X=W1(D,t,n,g,y,o,f,z,$=[],B=[],x),l),F===123)if(y===0)Rf(D,t,X,X,$,l,x,f,B);else switch(_===99&&Mn(D,3)===110?100:_){case 100:case 108:case 109:case 115:Rf(e,X,X,i&&cf(W1(e,X,X,0,0,o,f,z,o,$=[],x),B),o,B,x,f,i?$:B);break;default:Rf(D,X,X,X,[""],B,0,f,B)}}g=y=w=0,R=V=1,z=D="",x=u;break;case 58:x=1+_i(D),w=C;default:if(R<1){if(F==123)--R;else if(F==125&&R++==0&&TR()==125)continue}switch(D+=hh(F),F*R){case 38:V=y>0?1:(D+="\f",-1);break;case 44:f[g++]=(_i(D)-1)*V,V=1;break;case 64:wi()===45&&(D+=Af(mr())),_=wi(),y=x=_i(z=D+=RR(Cf())),F++;break;case 45:C===45&&_i(D)==2&&(R=0)}}return l}function W1(e,t,n,i,o,l,u,f,p,g,y){for(var x=o-1,_=o===0?l:[""],w=by(_),C=0,R=0,P=0;C<i;++C)for(var V=0,F=fu(e,x+1,x=vR(R=u[C])),z=e;V<w;++V)(z=K_(R>0?_[V]+" "+F:fe(F,/&\f/g,_[V])))&&(p[P++]=z);return gh(e,t,n,o===0?yy:f,p,g,y)}function MR(e,t,n){return gh(e,t,n,q_,hh(ER()),fu(e,2,-2),0)}function Q1(e,t,n,i){return gh(e,t,n,vy,fu(e,0,i),fu(e,i+1,-1),i)}function Sl(e,t){for(var n="",i=by(e),o=0;o<i;o++)n+=t(e[o],o,e,t)||"";return n}function OR(e,t,n,i){switch(e.type){case yR:if(e.children.length)break;case mR:case vy:return e.return=e.return||e.value;case q_:return"";case G_:return e.return=e.value+"{"+Sl(e.children,i)+"}";case yy:e.value=e.props.join(",")}return _i(n=Sl(e.children,i))?e.return=e.value+"{"+n+"}":""}function DR(e){var t=by(e);return function(n,i,o,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,o,l)||"";return u}}function NR(e){return function(t){t.root||(t=t.return)&&e(t)}}function X_(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var kR=function(t,n,i){for(var o=0,l=0;o=l,l=wi(),o===38&&l===12&&(n[i]=1),!hu(l);)mr();return Iu(t,ir)},PR=function(t,n){var i=-1,o=44;do switch(hu(o)){case 0:o===38&&wi()===12&&(n[i]=1),t[i]+=kR(ir-1,n,i);break;case 2:t[i]+=Af(o);break;case 4:if(o===44){t[++i]=wi()===58?"&\f":"",n[i]=t[i].length;break}default:t[i]+=hh(o)}while(o=mr());return t},jR=function(t,n){return Q_(PR(W_(t),n))},X1=new WeakMap,VR=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,i=t.parent,o=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!X1.get(i))&&!o){X1.set(t,!0);for(var l=[],u=jR(n,l),f=i.props,p=0,g=0;p<u.length;p++)for(var y=0;y<f.length;y++,g++)t.props[g]=l[p]?u[p].replace(/&\f/g,f[y]):f[y]+" "+u[p]}}},zR=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Z_(e,t){switch(xR(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+Lf+e+Bn+e+e;case 6828:case 4268:return de+e+Bn+e+e;case 6165:return de+e+Bn+"flex-"+e+e;case 5187:return de+e+fe(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+Bn+"flex-$1$2")+e;case 5443:return de+e+Bn+"flex-item-"+fe(e,/flex-|-self/,"")+e;case 4675:return de+e+Bn+"flex-line-pack"+fe(e,/align-content|flex-|-self/,"")+e;case 5548:return de+e+Bn+fe(e,"shrink","negative")+e;case 5292:return de+e+Bn+fe(e,"basis","preferred-size")+e;case 6060:return de+"box-"+fe(e,"-grow","")+de+e+Bn+fe(e,"grow","positive")+e;case 4554:return de+fe(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+Bn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_i(e)-1-t>6)switch(Mn(e,t+1)){case 109:if(Mn(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+Lf+(Mn(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Tm(e,"stretch")?Z_(fe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Mn(e,t+1)!==115)break;case 6444:switch(Mn(e,_i(e)-3-(~Tm(e,"!important")&&10))){case 107:return fe(e,":",":"+de)+e;case 101:return fe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+de+(Mn(e,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+Bn+"$2box$3")+e}break;case 5936:switch(Mn(e,t+11)){case 114:return de+e+Bn+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+Bn+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+Bn+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return de+e+Bn+e+e}return e}var LR=function(t,n,i,o){if(t.length>-1&&!t.return)switch(t.type){case vy:t.return=Z_(t.value,t.length);break;case G_:return Sl([Kc(t,{value:fe(t.value,"@","@"+de)})],o);case yy:if(t.length)return _R(t.props,function(l){switch(SR(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Sl([Kc(t,{props:[fe(l,/:(read-\w+)/,":"+Lf+"$1")]})],o);case"::placeholder":return Sl([Kc(t,{props:[fe(l,/:(plac\w+)/,":"+de+"input-$1")]}),Kc(t,{props:[fe(l,/:(plac\w+)/,":"+Lf+"$1")]}),Kc(t,{props:[fe(l,/:(plac\w+)/,Bn+"input-$1")]})],o)}return""})}},BR=[LR],UR=function(t){var n=t.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(R){var P=R.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(R),R.setAttribute("data-s",""))})}var o=t.stylisPlugins||BR,l={},u,f=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(R){for(var P=R.getAttribute("data-emotion").split(" "),V=1;V<P.length;V++)l[P[V]]=!0;f.push(R)});var p,g=[VR,zR];{var y,x=[OR,NR(function(R){y.insert(R)})],_=DR(g.concat(o,x)),w=function(P){return Sl(IR(P),_)};p=function(P,V,F,z){y=F,w(P?P+"{"+V.styles+"}":V.styles),z&&(C.inserted[V.name]=!0)}}var C={key:n,sheet:new gR({key:n,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:p};return C.sheet.hydrate(f),C},Qg={exports:{}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1;function $R(){if(Z1)return ye;Z1=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,g=e?Symbol.for("react.concurrent_mode"):60111,y=e?Symbol.for("react.forward_ref"):60112,x=e?Symbol.for("react.suspense"):60113,_=e?Symbol.for("react.suspense_list"):60120,w=e?Symbol.for("react.memo"):60115,C=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,P=e?Symbol.for("react.fundamental"):60117,V=e?Symbol.for("react.responder"):60118,F=e?Symbol.for("react.scope"):60119;function z(B){if(typeof B=="object"&&B!==null){var X=B.$$typeof;switch(X){case t:switch(B=B.type,B){case p:case g:case i:case l:case o:case x:return B;default:switch(B=B&&B.$$typeof,B){case f:case y:case C:case w:case u:return B;default:return X}}case n:return X}}}function $(B){return z(B)===g}return ye.AsyncMode=p,ye.ConcurrentMode=g,ye.ContextConsumer=f,ye.ContextProvider=u,ye.Element=t,ye.ForwardRef=y,ye.Fragment=i,ye.Lazy=C,ye.Memo=w,ye.Portal=n,ye.Profiler=l,ye.StrictMode=o,ye.Suspense=x,ye.isAsyncMode=function(B){return $(B)||z(B)===p},ye.isConcurrentMode=$,ye.isContextConsumer=function(B){return z(B)===f},ye.isContextProvider=function(B){return z(B)===u},ye.isElement=function(B){return typeof B=="object"&&B!==null&&B.$$typeof===t},ye.isForwardRef=function(B){return z(B)===y},ye.isFragment=function(B){return z(B)===i},ye.isLazy=function(B){return z(B)===C},ye.isMemo=function(B){return z(B)===w},ye.isPortal=function(B){return z(B)===n},ye.isProfiler=function(B){return z(B)===l},ye.isStrictMode=function(B){return z(B)===o},ye.isSuspense=function(B){return z(B)===x},ye.isValidElementType=function(B){return typeof B=="string"||typeof B=="function"||B===i||B===g||B===l||B===o||B===x||B===_||typeof B=="object"&&B!==null&&(B.$$typeof===C||B.$$typeof===w||B.$$typeof===u||B.$$typeof===f||B.$$typeof===y||B.$$typeof===P||B.$$typeof===V||B.$$typeof===F||B.$$typeof===R)},ye.typeOf=z,ye}var J1;function HR(){return J1||(J1=1,Qg.exports=$R()),Qg.exports}var Xg,tx;function FR(){if(tx)return Xg;tx=1;var e=HR(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=i,l[e.Memo]=o;function u(C){return e.isMemo(C)?o:l[C.$$typeof]||t}var f=Object.defineProperty,p=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,_=Object.prototype;function w(C,R,P){if(typeof R!="string"){if(_){var V=x(R);V&&V!==_&&w(C,V,P)}var F=p(R);g&&(F=F.concat(g(R)));for(var z=u(C),$=u(R),B=0;B<F.length;++B){var X=F[B];if(!n[X]&&!(P&&P[X])&&!($&&$[X])&&!(z&&z[X])){var D=y(R,X);try{f(C,X,D)}catch{}}}}return C}return Xg=w,Xg}FR();var qR=!0;function J_(e,t,n){var i="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(i+=o+" ")}),i}var xy=function(t,n,i){var o=t.key+"-"+n.name;(i===!1||qR===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},tE=function(t,n,i){xy(t,n,i);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function GR(e){for(var t=0,n,i=0,o=e.length;o>=4;++i,o-=4)n=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var KR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},YR=/[A-Z]|^ms/g,WR=/_EMO_([^_]+?)_([^]*?)_EMO_/g,eE=function(t){return t.charCodeAt(1)===45},ex=function(t){return t!=null&&typeof t!="boolean"},Zg=X_(function(e){return eE(e)?e:e.replace(YR,"-$&").toLowerCase()}),nx=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(WR,function(i,o,l){return Ei={name:o,styles:l,next:Ei},o})}return KR[t]!==1&&!eE(t)&&typeof n=="number"&&n!==0?n+"px":n};function pu(e,t,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return Ei={name:o.name,styles:o.styles,next:Ei},o.name;var l=n;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)Ei={name:u.name,styles:u.styles,next:Ei},u=u.next;var f=l.styles+";";return f}return QR(e,t,n)}case"function":{if(e!==void 0){var p=Ei,g=n(e);return Ei=p,pu(e,t,g)}break}}var y=n;if(t==null)return y;var x=t[y];return x!==void 0?x:y}function QR(e,t,n){var i="";if(Array.isArray(n))for(var o=0;o<n.length;o++)i+=pu(e,t,n[o])+";";else for(var l in n){var u=n[l];if(typeof u!="object"){var f=u;t!=null&&t[f]!==void 0?i+=l+"{"+t[f]+"}":ex(f)&&(i+=Zg(l)+":"+nx(l,f)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&(t==null||t[u[0]]===void 0))for(var p=0;p<u.length;p++)ex(u[p])&&(i+=Zg(l)+":"+nx(l,u[p])+";");else{var g=pu(e,t,u);switch(l){case"animation":case"animationName":{i+=Zg(l)+":"+g+";";break}default:i+=l+"{"+g+"}"}}}return i}var rx=/label:\s*([^\s;{]+)\s*(;|$)/g,Ei;function mh(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";Ei=void 0;var l=e[0];if(l==null||l.raw===void 0)i=!1,o+=pu(n,t,l);else{var u=l;o+=u[0]}for(var f=1;f<e.length;f++)if(o+=pu(n,t,e[f]),i){var p=l;o+=p[f]}rx.lastIndex=0;for(var g="",y;(y=rx.exec(o))!==null;)g+="-"+y[1];var x=GR(o)+g;return{name:x,styles:o,next:Ei}}var XR=function(t){return t()},ZR=jf.useInsertionEffect?jf.useInsertionEffect:!1,nE=ZR||XR,rE=A.createContext(typeof HTMLElement<"u"?UR({key:"css"}):null);rE.Provider;var iE=function(t){return A.forwardRef(function(n,i){var o=A.useContext(rE);return t(n,o,i)})},Sy=A.createContext({}),_y={}.hasOwnProperty,Cm="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",JR=function(t,n){var i={};for(var o in n)_y.call(n,o)&&(i[o]=n[o]);return i[Cm]=t,i},t4=function(t){var n=t.cache,i=t.serialized,o=t.isStringTag;return xy(n,i,o),nE(function(){return tE(n,i,o)}),null},e4=iE(function(e,t,n){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var o=e[Cm],l=[i],u="";typeof e.className=="string"?u=J_(t.registered,l,e.className):e.className!=null&&(u=e.className+" ");var f=mh(l,void 0,A.useContext(Sy));u+=t.key+"-"+f.name;var p={};for(var g in e)_y.call(e,g)&&g!=="css"&&g!==Cm&&(p[g]=e[g]);return p.className=u,n&&(p.ref=n),A.createElement(A.Fragment,null,A.createElement(t4,{cache:t,serialized:f,isStringTag:typeof o=="string"}),A.createElement(o,p))}),n4=e4,ix=function(t,n){var i=arguments;if(n==null||!_y.call(n,"css"))return A.createElement.apply(void 0,i);var o=i.length,l=new Array(o);l[0]=n4,l[1]=JR(t,n);for(var u=2;u<o;u++)l[u]=i[u];return A.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(ix||(ix={}));function Ey(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return mh(t)}function Mu(){var e=Ey.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var r4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,i4=X_(function(e){return r4.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),a4=i4,o4=function(t){return t!=="theme"},ax=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?a4:o4},ox=function(t,n,i){var o;if(n){var l=n.shouldForwardProp;o=t.__emotion_forwardProp&&l?function(u){return t.__emotion_forwardProp(u)&&l(u)}:l}return typeof o!="function"&&i&&(o=t.__emotion_forwardProp),o},s4=function(t){var n=t.cache,i=t.serialized,o=t.isStringTag;return xy(n,i,o),nE(function(){return tE(n,i,o)}),null},l4=function e(t,n){var i=t.__emotion_real===t,o=i&&t.__emotion_base||t,l,u;n!==void 0&&(l=n.label,u=n.target);var f=ox(t,n,i),p=f||ax(o),g=!p("as");return function(){var y=arguments,x=i&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(l!==void 0&&x.push("label:"+l+";"),y[0]==null||y[0].raw===void 0)x.push.apply(x,y);else{var _=y[0];x.push(_[0]);for(var w=y.length,C=1;C<w;C++)x.push(y[C],_[C])}var R=iE(function(P,V,F){var z=g&&P.as||o,$="",B=[],X=P;if(P.theme==null){X={};for(var D in P)X[D]=P[D];X.theme=A.useContext(Sy)}typeof P.className=="string"?$=J_(V.registered,B,P.className):P.className!=null&&($=P.className+" ");var M=mh(x.concat(B),V.registered,X);$+=V.key+"-"+M.name,u!==void 0&&($+=" "+u);var O=g&&f===void 0?ax(z):p,S={};for(var j in P)g&&j==="as"||O(j)&&(S[j]=P[j]);return S.className=$,F&&(S.ref=F),A.createElement(A.Fragment,null,A.createElement(s4,{cache:V,serialized:M,isStringTag:typeof z=="string"}),A.createElement(z,S))});return R.displayName=l!==void 0?l:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",R.defaultProps=t.defaultProps,R.__emotion_real=R,R.__emotion_base=o,R.__emotion_styles=x,R.__emotion_forwardProp=f,Object.defineProperty(R,"toString",{value:function(){return"."+u}}),R.withComponent=function(P,V){var F=e(P,zf({},n,V,{shouldForwardProp:ox(R,V,!0)}));return F.apply(void 0,x)},R}},c4=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Am=l4.bind(null);c4.forEach(function(e){Am[e]=Am(e)});function aE(e,t){return Am(e,t)}function u4(e,t){Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))}const sx=[];function lx(e){return sx[0]=e,mh(sx)}var Jg={exports:{}},we={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx;function d4(){if(cx)return we;cx=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.view_transition"),w=Symbol.for("react.client.reference");function C(R){if(typeof R=="object"&&R!==null){var P=R.$$typeof;switch(P){case e:switch(R=R.type,R){case n:case o:case i:case p:case g:case _:return R;default:switch(R=R&&R.$$typeof,R){case u:case f:case x:case y:return R;case l:return R;default:return P}}case t:return P}}}return we.ContextConsumer=l,we.ContextProvider=u,we.Element=e,we.ForwardRef=f,we.Fragment=n,we.Lazy=x,we.Memo=y,we.Portal=t,we.Profiler=o,we.StrictMode=i,we.Suspense=p,we.SuspenseList=g,we.isContextConsumer=function(R){return C(R)===l},we.isContextProvider=function(R){return C(R)===u},we.isElement=function(R){return typeof R=="object"&&R!==null&&R.$$typeof===e},we.isForwardRef=function(R){return C(R)===f},we.isFragment=function(R){return C(R)===n},we.isLazy=function(R){return C(R)===x},we.isMemo=function(R){return C(R)===y},we.isPortal=function(R){return C(R)===t},we.isProfiler=function(R){return C(R)===o},we.isStrictMode=function(R){return C(R)===i},we.isSuspense=function(R){return C(R)===p},we.isSuspenseList=function(R){return C(R)===g},we.isValidElementType=function(R){return typeof R=="string"||typeof R=="function"||R===n||R===o||R===i||R===p||R===g||typeof R=="object"&&R!==null&&(R.$$typeof===x||R.$$typeof===y||R.$$typeof===u||R.$$typeof===l||R.$$typeof===f||R.$$typeof===w||R.getModuleId!==void 0)},we.typeOf=C,we}var ux;function f4(){return ux||(ux=1,Jg.exports=d4()),Jg.exports}var oE=f4();function Ti(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function sE(e){if(A.isValidElement(e)||oE.isValidElementType(e)||!Ti(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=sE(e[n])}),t}function yr(e,t,n={clone:!0}){const i=n.clone?{...e}:e;return Ti(e)&&Ti(t)&&Object.keys(t).forEach(o=>{A.isValidElement(t[o])||oE.isValidElementType(t[o])?i[o]=t[o]:Ti(t[o])&&Object.prototype.hasOwnProperty.call(e,o)&&Ti(e[o])?i[o]=yr(e[o],t[o],n):n.clone?i[o]=Ti(t[o])?sE(t[o]):t[o]:i[o]=t[o]}),i}const h4=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,i)=>n.val-i.val),t.reduce((n,i)=>({...n,[i.key]:i.val}),{})};function p4(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:i=5,...o}=e,l=h4(t),u=Object.keys(l);function f(_){return`@media (min-width:${typeof t[_]=="number"?t[_]:_}${n})`}function p(_){return`@media (max-width:${(typeof t[_]=="number"?t[_]:_)-i/100}${n})`}function g(_,w){const C=u.indexOf(w);return`@media (min-width:${typeof t[_]=="number"?t[_]:_}${n}) and (max-width:${(C!==-1&&typeof t[u[C]]=="number"?t[u[C]]:w)-i/100}${n})`}function y(_){return u.indexOf(_)+1<u.length?g(_,u[u.indexOf(_)+1]):f(_)}function x(_){const w=u.indexOf(_);return w===0?f(u[1]):w===u.length-1?p(u[w]):g(_,u[u.indexOf(_)+1]).replace("@media","@media not all and")}return{keys:u,values:l,up:f,down:p,between:g,only:y,not:x,unit:n,...o}}function g4(e,t){if(!e.containerQueries)return t;const n=Object.keys(t).filter(i=>i.startsWith("@container")).sort((i,o)=>{var u,f;const l=/min-width:\s*([0-9.]+)/;return+(((u=i.match(l))==null?void 0:u[1])||0)-+(((f=o.match(l))==null?void 0:f[1])||0)});return n.length?n.reduce((i,o)=>{const l=t[o];return delete i[o],i[o]=l,i},{...t}):t}function m4(e,t){return t==="@"||t.startsWith("@")&&(e.some(n=>t.startsWith(`@${n}`))||!!t.match(/^@\d/))}function y4(e,t){const n=t.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,i,o]=n,l=Number.isNaN(+i)?i||0:+i;return e.containerQueries(o).up(l)}function v4(e){const t=(l,u)=>l.replace("@media",u?`@container ${u}`:"@container");function n(l,u){l.up=(...f)=>t(e.breakpoints.up(...f),u),l.down=(...f)=>t(e.breakpoints.down(...f),u),l.between=(...f)=>t(e.breakpoints.between(...f),u),l.only=(...f)=>t(e.breakpoints.only(...f),u),l.not=(...f)=>{const p=t(e.breakpoints.not(...f),u);return p.includes("not all and")?p.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):p}}const i={},o=l=>(n(i,l),i);return n(o),{...e,containerQueries:o}}const b4={borderRadius:4};function ru(e,t){return t?yr(e,t,{clone:!1}):e}const yh={xs:0,sm:600,md:900,lg:1200,xl:1536},dx={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${yh[e]}px)`},x4={containerQueries:e=>({up:t=>{let n=typeof t=="number"?t:yh[t]||t;return typeof n=="number"&&(n=`${n}px`),e?`@container ${e} (min-width:${n})`:`@container (min-width:${n})`}})};function da(e,t,n){const i=e.theme||{};if(Array.isArray(t)){const l=i.breakpoints||dx;return t.reduce((u,f,p)=>(u[l.up(l.keys[p])]=n(t[p]),u),{})}if(typeof t=="object"){const l=i.breakpoints||dx;return Object.keys(t).reduce((u,f)=>{if(m4(l.keys,f)){const p=y4(i.containerQueries?i:x4,f);p&&(u[p]=n(t[f],f))}else if(Object.keys(l.values||yh).includes(f)){const p=l.up(f);u[p]=n(t[f],f)}else{const p=f;u[p]=t[p]}return u},{})}return n(t)}function S4(e={}){var n;return((n=e.keys)==null?void 0:n.reduce((i,o)=>{const l=e.up(o);return i[l]={},i},{}))||{}}function _4(e,t){return e.reduce((n,i)=>{const o=n[i];return(!o||Object.keys(o).length===0)&&delete n[i],n},t)}function gt(e){if(typeof e!="string")throw new Error(es(7));return e.charAt(0).toUpperCase()+e.slice(1)}function Ya(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const i=`vars.${t}`.split(".").reduce((o,l)=>o&&o[l]?o[l]:null,e);if(i!=null)return i}return t.split(".").reduce((i,o)=>i&&i[o]!=null?i[o]:null,e)}function Bf(e,t,n,i=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||i:o=Ya(e,n)||i,t&&(o=t(o,i,e)),o}function We(e){const{prop:t,cssProperty:n=e.prop,themeKey:i,transform:o}=e,l=u=>{if(u[t]==null)return null;const f=u[t],p=u.theme,g=Ya(p,i)||{};return da(u,f,x=>{let _=Bf(g,o,x);return x===_&&typeof x=="string"&&(_=Bf(g,o,`${t}${x==="default"?"":gt(x)}`,x)),n===!1?_:{[n]:_}})};return l.propTypes={},l.filterProps=[t],l}function E4(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const T4={m:"margin",p:"padding"},w4={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},fx={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},C4=E4(e=>{if(e.length>2)if(fx[e])e=fx[e];else return[e];const[t,n]=e.split(""),i=T4[t],o=w4[n]||"";return Array.isArray(o)?o.map(l=>i+l):[i+o]}),Ty=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],wy=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Ty,...wy];function Ou(e,t,n,i){const o=Ya(e,t,!0)??n;return typeof o=="number"||typeof o=="string"?l=>typeof l=="string"?l:typeof o=="string"?o.startsWith("var(")&&l===0?0:o.startsWith("var(")&&l===1?o:`calc(${l} * ${o})`:o*l:Array.isArray(o)?l=>{if(typeof l=="string")return l;const u=Math.abs(l),f=o[u];return l>=0?f:typeof f=="number"?-f:typeof f=="string"&&f.startsWith("var(")?`calc(-1 * ${f})`:`-${f}`}:typeof o=="function"?o:()=>{}}function Cy(e){return Ou(e,"spacing",8)}function Du(e,t){return typeof t=="string"||t==null?t:e(t)}function A4(e,t){return n=>e.reduce((i,o)=>(i[o]=Du(t,n),i),{})}function R4(e,t,n,i){if(!t.includes(n))return null;const o=C4(n),l=A4(o,i),u=e[n];return da(e,u,l)}function lE(e,t){const n=Cy(e.theme);return Object.keys(e).map(i=>R4(e,t,i,n)).reduce(ru,{})}function $e(e){return lE(e,Ty)}$e.propTypes={};$e.filterProps=Ty;function He(e){return lE(e,wy)}He.propTypes={};He.filterProps=wy;function cE(e=8,t=Cy({spacing:e})){if(e.mui)return e;const n=(...i)=>(i.length===0?[1]:i).map(l=>{const u=t(l);return typeof u=="number"?`${u}px`:u}).join(" ");return n.mui=!0,n}function vh(...e){const t=e.reduce((i,o)=>(o.filterProps.forEach(l=>{i[l]=o}),i),{}),n=i=>Object.keys(i).reduce((o,l)=>t[l]?ru(o,t[l](i)):o,{});return n.propTypes={},n.filterProps=e.reduce((i,o)=>i.concat(o.filterProps),[]),n}function Pr(e){return typeof e!="number"?e:`${e}px solid`}function zr(e,t){return We({prop:e,themeKey:"borders",transform:t})}const I4=zr("border",Pr),M4=zr("borderTop",Pr),O4=zr("borderRight",Pr),D4=zr("borderBottom",Pr),N4=zr("borderLeft",Pr),k4=zr("borderColor"),P4=zr("borderTopColor"),j4=zr("borderRightColor"),V4=zr("borderBottomColor"),z4=zr("borderLeftColor"),L4=zr("outline",Pr),B4=zr("outlineColor"),bh=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Ou(e.theme,"shape.borderRadius",4),n=i=>({borderRadius:Du(t,i)});return da(e,e.borderRadius,n)}return null};bh.propTypes={};bh.filterProps=["borderRadius"];vh(I4,M4,O4,D4,N4,k4,P4,j4,V4,z4,bh,L4,B4);const xh=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Ou(e.theme,"spacing",8),n=i=>({gap:Du(t,i)});return da(e,e.gap,n)}return null};xh.propTypes={};xh.filterProps=["gap"];const Sh=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Ou(e.theme,"spacing",8),n=i=>({columnGap:Du(t,i)});return da(e,e.columnGap,n)}return null};Sh.propTypes={};Sh.filterProps=["columnGap"];const _h=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Ou(e.theme,"spacing",8),n=i=>({rowGap:Du(t,i)});return da(e,e.rowGap,n)}return null};_h.propTypes={};_h.filterProps=["rowGap"];const U4=We({prop:"gridColumn"}),$4=We({prop:"gridRow"}),H4=We({prop:"gridAutoFlow"}),F4=We({prop:"gridAutoColumns"}),q4=We({prop:"gridAutoRows"}),G4=We({prop:"gridTemplateColumns"}),K4=We({prop:"gridTemplateRows"}),Y4=We({prop:"gridTemplateAreas"}),W4=We({prop:"gridArea"});vh(xh,Sh,_h,U4,$4,H4,F4,q4,G4,K4,Y4,W4);function _l(e,t){return t==="grey"?t:e}const Q4=We({prop:"color",themeKey:"palette",transform:_l}),X4=We({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:_l}),Z4=We({prop:"backgroundColor",themeKey:"palette",transform:_l});vh(Q4,X4,Z4);function gr(e){return e<=1&&e!==0?`${e*100}%`:e}const J4=We({prop:"width",transform:gr}),Ay=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var o,l,u,f,p;const i=((u=(l=(o=e.theme)==null?void 0:o.breakpoints)==null?void 0:l.values)==null?void 0:u[n])||yh[n];return i?((p=(f=e.theme)==null?void 0:f.breakpoints)==null?void 0:p.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:gr(n)}};return da(e,e.maxWidth,t)}return null};Ay.filterProps=["maxWidth"];const t5=We({prop:"minWidth",transform:gr}),e5=We({prop:"height",transform:gr}),n5=We({prop:"maxHeight",transform:gr}),r5=We({prop:"minHeight",transform:gr});We({prop:"size",cssProperty:"width",transform:gr});We({prop:"size",cssProperty:"height",transform:gr});const i5=We({prop:"boxSizing"});vh(J4,Ay,t5,e5,n5,r5,i5);const Nu={border:{themeKey:"borders",transform:Pr},borderTop:{themeKey:"borders",transform:Pr},borderRight:{themeKey:"borders",transform:Pr},borderBottom:{themeKey:"borders",transform:Pr},borderLeft:{themeKey:"borders",transform:Pr},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Pr},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:bh},color:{themeKey:"palette",transform:_l},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:_l},backgroundColor:{themeKey:"palette",transform:_l},p:{style:He},pt:{style:He},pr:{style:He},pb:{style:He},pl:{style:He},px:{style:He},py:{style:He},padding:{style:He},paddingTop:{style:He},paddingRight:{style:He},paddingBottom:{style:He},paddingLeft:{style:He},paddingX:{style:He},paddingY:{style:He},paddingInline:{style:He},paddingInlineStart:{style:He},paddingInlineEnd:{style:He},paddingBlock:{style:He},paddingBlockStart:{style:He},paddingBlockEnd:{style:He},m:{style:$e},mt:{style:$e},mr:{style:$e},mb:{style:$e},ml:{style:$e},mx:{style:$e},my:{style:$e},margin:{style:$e},marginTop:{style:$e},marginRight:{style:$e},marginBottom:{style:$e},marginLeft:{style:$e},marginX:{style:$e},marginY:{style:$e},marginInline:{style:$e},marginInlineStart:{style:$e},marginInlineEnd:{style:$e},marginBlock:{style:$e},marginBlockStart:{style:$e},marginBlockEnd:{style:$e},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:xh},rowGap:{style:_h},columnGap:{style:Sh},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:gr},maxWidth:{style:Ay},minWidth:{transform:gr},height:{transform:gr},maxHeight:{transform:gr},minHeight:{transform:gr},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function a5(...e){const t=e.reduce((i,o)=>i.concat(Object.keys(o)),[]),n=new Set(t);return e.every(i=>n.size===Object.keys(i).length)}function o5(e,t){return typeof e=="function"?e(t):e}function s5(){function e(n,i,o,l){const u={[n]:i,theme:o},f=l[n];if(!f)return{[n]:i};const{cssProperty:p=n,themeKey:g,transform:y,style:x}=f;if(i==null)return null;if(g==="typography"&&i==="inherit")return{[n]:i};const _=Ya(o,g)||{};return x?x(u):da(u,i,C=>{let R=Bf(_,y,C);return C===R&&typeof C=="string"&&(R=Bf(_,y,`${n}${C==="default"?"":gt(C)}`,C)),p===!1?R:{[p]:R}})}function t(n){const{sx:i,theme:o={}}=n||{};if(!i)return null;const l=o.unstable_sxConfig??Nu;function u(f){let p=f;if(typeof f=="function")p=f(o);else if(typeof f!="object")return f;if(!p)return null;const g=S4(o.breakpoints),y=Object.keys(g);let x=g;return Object.keys(p).forEach(_=>{const w=o5(p[_],o);if(w!=null)if(typeof w=="object")if(l[_])x=ru(x,e(_,w,o,l));else{const C=da({theme:o},w,R=>({[_]:R}));a5(C,w)?x[_]=t({sx:w,theme:o}):x=ru(x,C)}else x=ru(x,e(_,w,o,l))}),g4(o,_4(y,x))}return Array.isArray(i)?i.map(u):u(i)}return t}const ns=s5();ns.filterProps=["sx"];function l5(e,t){var i;const n=this;if(n.vars){if(!((i=n.colorSchemes)!=null&&i[e])||typeof n.getColorSchemeSelector!="function")return{};let o=n.getColorSchemeSelector(e);return o==="&"?t:((o.includes("data-")||o.includes("."))&&(o=`*:where(${o.replace(/\s*&$/,"")}) &`),{[o]:t})}return n.palette.mode===e?t:{}}function ku(e={},...t){const{breakpoints:n={},palette:i={},spacing:o,shape:l={},...u}=e,f=p4(n),p=cE(o);let g=yr({breakpoints:f,direction:"ltr",components:{},palette:{mode:"light",...i},spacing:p,shape:{...b4,...l}},u);return g=v4(g),g.applyStyles=l5,g=t.reduce((y,x)=>yr(y,x),g),g.unstable_sxConfig={...Nu,...u==null?void 0:u.unstable_sxConfig},g.unstable_sx=function(x){return ns({sx:x,theme:this})},g}function c5(e){return Object.keys(e).length===0}function uE(e=null){const t=A.useContext(Sy);return!t||c5(t)?e:t}const u5=ku();function Eh(e=u5){return uE(e)}const d5=e=>{var i;const t={systemProps:{},otherProps:{}},n=((i=e==null?void 0:e.theme)==null?void 0:i.unstable_sxConfig)??Nu;return Object.keys(e).forEach(o=>{n[o]?t.systemProps[o]=e[o]:t.otherProps[o]=e[o]}),t};function Ry(e){const{sx:t,...n}=e,{systemProps:i,otherProps:o}=d5(n);let l;return Array.isArray(t)?l=[i,...t]:typeof t=="function"?l=(...u)=>{const f=t(...u);return Ti(f)?{...i,...f}:i}:l={...i,...t},{...o,sx:l}}const hx=e=>e,f5=()=>{let e=hx;return{configure(t){e=t},generate(t){return e(t)},reset(){e=hx}}},dE=f5();function fE(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=fE(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function Et(){for(var e,t,n=0,i="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=fE(e))&&(i&&(i+=" "),i+=t);return i}function h5(e={}){const{themeId:t,defaultTheme:n,defaultClassName:i="MuiBox-root",generateClassName:o}=e,l=aE("div",{shouldForwardProp:f=>f!=="theme"&&f!=="sx"&&f!=="as"})(ns);return A.forwardRef(function(p,g){const y=Eh(n),{className:x,component:_="div",...w}=Ry(p);return v.jsx(l,{as:_,ref:g,className:Et(x,o?o(i):i),theme:t&&y[t]||y,...w})})}const p5={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function oe(e,t,n="Mui"){const i=p5[t];return i?`${n}-${i}`:`${dE.generate(e)}-${t}`}function ie(e,t,n="Mui"){const i={};return t.forEach(o=>{i[o]=oe(e,o,n)}),i}function hE(e){const{variants:t,...n}=e,i={variants:t,style:lx(n),isProcessed:!0};return i.style===n||t&&t.forEach(o=>{typeof o.style!="function"&&(o.style=lx(o.style))}),i}const g5=ku();function tm(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}function m5(e){return e?(t,n)=>n[e]:null}function y5(e,t,n){e.theme=b5(e.theme)?n:e.theme[t]||e.theme}function If(e,t){const n=typeof t=="function"?t(e):t;if(Array.isArray(n))return n.flatMap(i=>If(e,i));if(Array.isArray(n==null?void 0:n.variants)){let i;if(n.isProcessed)i=n.style;else{const{variants:o,...l}=n;i=l}return pE(e,n.variants,[i])}return n!=null&&n.isProcessed?n.style:n}function pE(e,t,n=[]){var o;let i;t:for(let l=0;l<t.length;l+=1){const u=t[l];if(typeof u.props=="function"){if(i??(i={...e,...e.ownerState,ownerState:e.ownerState}),!u.props(i))continue}else for(const f in u.props)if(e[f]!==u.props[f]&&((o=e.ownerState)==null?void 0:o[f])!==u.props[f])continue t;typeof u.style=="function"?(i??(i={...e,...e.ownerState,ownerState:e.ownerState}),n.push(u.style(i))):n.push(u.style)}return n}function gE(e={}){const{themeId:t,defaultTheme:n=g5,rootShouldForwardProp:i=tm,slotShouldForwardProp:o=tm}=e;function l(f){y5(f,t,n)}return(f,p={})=>{u4(f,B=>B.filter(X=>X!==ns));const{name:g,slot:y,skipVariantsResolver:x,skipSx:_,overridesResolver:w=m5(S5(y)),...C}=p,R=x!==void 0?x:y&&y!=="Root"&&y!=="root"||!1,P=_||!1;let V=tm;y==="Root"||y==="root"?V=i:y?V=o:x5(f)&&(V=void 0);const F=aE(f,{shouldForwardProp:V,label:v5(),...C}),z=B=>{if(typeof B=="function"&&B.__emotion_real!==B)return function(D){return If(D,B)};if(Ti(B)){const X=hE(B);return X.variants?function(M){return If(M,X)}:X.style}return B},$=(...B)=>{const X=[],D=B.map(z),M=[];if(X.push(l),g&&w&&M.push(function(L){var q,nt;const ft=(nt=(q=L.theme.components)==null?void 0:q[g])==null?void 0:nt.styleOverrides;if(!ft)return null;const lt={};for(const at in ft)lt[at]=If(L,ft[at]);return w(L,lt)}),g&&!R&&M.push(function(L){var lt,q;const k=L.theme,ft=(q=(lt=k==null?void 0:k.components)==null?void 0:lt[g])==null?void 0:q.variants;return ft?pE(L,ft):null}),P||M.push(ns),Array.isArray(D[0])){const j=D.shift(),L=new Array(X.length).fill(""),k=new Array(M.length).fill("");let ft;ft=[...L,...j,...k],ft.raw=[...L,...j.raw,...k],X.unshift(ft)}const O=[...X,...D,...M],S=F(...O);return f.muiName&&(S.muiName=f.muiName),S};return F.withConfig&&($.withConfig=F.withConfig),$}}function v5(e,t){return void 0}function b5(e){for(const t in e)return!1;return!0}function x5(e){return typeof e=="string"&&e.charCodeAt(0)>96}function S5(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}const mE=gE();function gu(e,t){const n={...t};for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)){const o=i;if(o==="components"||o==="slots")n[o]={...e[o],...n[o]};else if(o==="componentsProps"||o==="slotProps"){const l=e[o],u=t[o];if(!u)n[o]=l||{};else if(!l)n[o]=u;else{n[o]={...u};for(const f in l)if(Object.prototype.hasOwnProperty.call(l,f)){const p=f;n[o][p]=gu(l[p],u[p])}}}else n[o]===void 0&&(n[o]=e[o])}return n}function yE(e){const{theme:t,name:n,props:i}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?i:gu(t.components[n].defaultProps,i)}function vE({props:e,name:t,defaultTheme:n,themeId:i}){let o=Eh(n);return i&&(o=o[i]||o),yE({theme:o,name:t,props:e})}const rs=typeof window<"u"?A.useLayoutEffect:A.useEffect;function _5(e,t,n,i,o){const[l,u]=A.useState(()=>o&&n?n(e).matches:i?i(e).matches:t);return rs(()=>{if(!n)return;const f=n(e),p=()=>{u(f.matches)};return p(),f.addEventListener("change",p),()=>{f.removeEventListener("change",p)}},[e,n]),l}const E5={...jf},bE=E5.useSyncExternalStore;function T5(e,t,n,i,o){const l=A.useCallback(()=>t,[t]),u=A.useMemo(()=>{if(o&&n)return()=>n(e).matches;if(i!==null){const{matches:y}=i(e);return()=>y}return l},[l,e,i,o,n]),[f,p]=A.useMemo(()=>{if(n===null)return[l,()=>()=>{}];const y=n(e);return[()=>y.matches,x=>(y.addEventListener("change",x),()=>{y.removeEventListener("change",x)})]},[l,n,e]);return bE(p,f,u)}function xE(e={}){const{themeId:t}=e;return function(i,o={}){let l=uE();l&&t&&(l=l[t]||l);const u=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:f=!1,matchMedia:p=u?window.matchMedia:null,ssrMatchMedia:g=null,noSsr:y=!1}=yE({name:"MuiUseMediaQuery",props:o,theme:l});let x=typeof i=="function"?i(l):i;return x=x.replace(/^@media( ?)/m,""),(bE!==void 0?T5:_5)(x,f,p,g,y)}}xE();function w5(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}function Iy(e,t=0,n=1){return w5(e,t,n)}function C5(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(i=>i+i)),n?`rgb${n.length===4?"a":""}(${n.map((i,o)=>o<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function eo(e){if(e.type)return e;if(e.charAt(0)==="#")return eo(C5(e));const t=e.indexOf("("),n=e.substring(0,t);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(es(9,e));let i=e.substring(t+1,e.length-1),o;if(n==="color"){if(i=i.split(" "),o=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(o))throw new Error(es(10,o))}else i=i.split(",");return i=i.map(l=>parseFloat(l)),{type:n,values:i,colorSpace:o}}const A5=e=>{const t=eo(e);return t.values.slice(0,3).map((n,i)=>t.type.includes("hsl")&&i!==0?`${n}%`:n).join(" ")},Xc=(e,t)=>{try{return A5(e)}catch{return e}};function Th(e){const{type:t,colorSpace:n}=e;let{values:i}=e;return t.includes("rgb")?i=i.map((o,l)=>l<3?parseInt(o,10):o):t.includes("hsl")&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),t.includes("color")?i=`${n} ${i.join(" ")}`:i=`${i.join(", ")}`,`${t}(${i})`}function SE(e){e=eo(e);const{values:t}=e,n=t[0],i=t[1]/100,o=t[2]/100,l=i*Math.min(o,1-o),u=(g,y=(g+n/30)%12)=>o-l*Math.max(Math.min(y-3,9-y,1),-1);let f="rgb";const p=[Math.round(u(0)*255),Math.round(u(8)*255),Math.round(u(4)*255)];return e.type==="hsla"&&(f+="a",p.push(t[3])),Th({type:f,values:p})}function Rm(e){e=eo(e);let t=e.type==="hsl"||e.type==="hsla"?eo(SE(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function R5(e,t){const n=Rm(e),i=Rm(t);return(Math.max(n,i)+.05)/(Math.min(n,i)+.05)}function Zt(e,t){return e=eo(e),t=Iy(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,Th(e)}function uf(e,t,n){try{return Zt(e,t)}catch{return e}}function My(e,t){if(e=eo(e),t=Iy(t),e.type.includes("hsl"))e.values[2]*=1-t;else if(e.type.includes("rgb")||e.type.includes("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Th(e)}function Ie(e,t,n){try{return My(e,t)}catch{return e}}function Oy(e,t){if(e=eo(e),t=Iy(t),e.type.includes("hsl"))e.values[2]+=(100-e.values[2])*t;else if(e.type.includes("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.includes("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Th(e)}function Me(e,t,n){try{return Oy(e,t)}catch{return e}}function I5(e,t=.15){return Rm(e)>.5?My(e,t):Oy(e,t)}function df(e,t,n){try{return I5(e,t)}catch{return e}}function px(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function wh(e,t=166){let n;function i(...o){const l=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(l,t)}return i.clear=()=>{clearTimeout(n)},i}function M5(e,t){var n,i,o;return A.isValidElement(e)&&t.indexOf(e.type.muiName??((o=(i=(n=e.type)==null?void 0:n._payload)==null?void 0:i.value)==null?void 0:o.muiName))!==-1}function Wr(e){return e&&e.ownerDocument||document}function Qr(e){return Wr(e).defaultView||window}function gx(e,t){typeof e=="function"?e(t):e&&(e.current=t)}let mx=0;function O5(e){const[t,n]=A.useState(e),i=e||t;return A.useEffect(()=>{t==null&&(mx+=1,n(`mui-${mx}`))},[t]),i}const D5={...jf},yx=D5.useId;function _E(e){if(yx!==void 0){const t=yx();return e??t}return O5(e)}function N5({controlled:e,default:t,name:n,state:i="value"}){const{current:o}=A.useRef(e!==void 0),[l,u]=A.useState(t),f=o?e:l,p=A.useCallback(g=>{o||u(g)},[]);return[f,p]}function la(e){const t=A.useRef(e);return rs(()=>{t.current=e}),A.useRef((...n)=>(0,t.current)(...n)).current}function br(...e){const t=A.useRef(void 0),n=A.useCallback(i=>{const o=e.map(l=>{if(l==null)return null;if(typeof l=="function"){const u=l,f=u(i);return typeof f=="function"?f:()=>{u(null)}}return l.current=i,()=>{l.current=null}});return()=>{o.forEach(l=>l==null?void 0:l())}},e);return A.useMemo(()=>e.every(i=>i==null)?null:i=>{t.current&&(t.current(),t.current=void 0),i!=null&&(t.current=n(i))},e)}const vx={};function EE(e,t){const n=A.useRef(vx);return n.current===vx&&(n.current=e(t)),n}const k5=[];function P5(e){A.useEffect(e,k5)}class Dy{constructor(){Uc(this,"currentId",null);Uc(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Uc(this,"disposeEffect",()=>this.clear)}static create(){return new Dy}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function TE(){const e=EE(Dy.create).current;return P5(e.disposeEffect),e}function Uf(e){try{return e.matches(":focus-visible")}catch{}return!1}function wE(e=window){const t=e.document.documentElement.clientWidth;return e.innerWidth-t}const CE=e=>{const t=A.useRef({});return A.useEffect(()=>{t.current=e}),t.current};function he(e,t,n=void 0){const i={};for(const o in e){const l=e[o];let u="",f=!0;for(let p=0;p<l.length;p+=1){const g=l[p];g&&(u+=(f===!0?"":" ")+t(g),f=!1,n&&n[g]&&(u+=" "+n[g]))}i[o]=u}return i}function j5(e){return typeof e=="string"}function AE(e,t,n){return e===void 0||j5(e)?t:{...t,ownerState:{...t.ownerState,...n}}}function RE(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(i=>i.match(/^on[A-Z]/)&&typeof e[i]=="function"&&!t.includes(i)).forEach(i=>{n[i]=e[i]}),n}function bx(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function IE(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:i,externalForwardedProps:o,className:l}=e;if(!t){const w=Et(n==null?void 0:n.className,l,o==null?void 0:o.className,i==null?void 0:i.className),C={...n==null?void 0:n.style,...o==null?void 0:o.style,...i==null?void 0:i.style},R={...n,...o,...i};return w.length>0&&(R.className=w),Object.keys(C).length>0&&(R.style=C),{props:R,internalRef:void 0}}const u=RE({...o,...i}),f=bx(i),p=bx(o),g=t(u),y=Et(g==null?void 0:g.className,n==null?void 0:n.className,l,o==null?void 0:o.className,i==null?void 0:i.className),x={...g==null?void 0:g.style,...n==null?void 0:n.style,...o==null?void 0:o.style,...i==null?void 0:i.style},_={...g,...n,...p,...f};return y.length>0&&(_.className=y),Object.keys(x).length>0&&(_.style=x),{props:_,internalRef:g.ref}}function ME(e,t,n){return typeof e=="function"?e(t,n):e}function is(e){var x;const{elementType:t,externalSlotProps:n,ownerState:i,skipResolvingSlotProps:o=!1,...l}=e,u=o?{}:ME(n,i),{props:f,internalRef:p}=IE({...l,externalSlotProps:u}),g=br(p,u==null?void 0:u.ref,(x=e.additionalProps)==null?void 0:x.ref);return AE(t,{...f,ref:g},i)}function Pu(e){var t;return parseInt(A.version,10)>=19?((t=e==null?void 0:e.props)==null?void 0:t.ref)||null:(e==null?void 0:e.ref)||null}const V5=A.createContext(),Ch=()=>A.useContext(V5)??!1,z5=A.createContext(void 0);function L5(e){const{theme:t,name:n,props:i}=e;if(!t||!t.components||!t.components[n])return i;const o=t.components[n];return o.defaultProps?gu(o.defaultProps,i):!o.styleOverrides&&!o.variants?gu(o,i):i}function B5({props:e,name:t}){const n=A.useContext(z5);return L5({props:e,name:t,theme:{components:n}})}const xx={theme:void 0};function U5(e){let t,n;return function(o){let l=t;return(l===void 0||o.theme!==n)&&(xx.theme=o.theme,l=hE(e(xx)),t=l,n=o.theme),l}}function $5(e=""){function t(...i){if(!i.length)return"";const o=i[0];return typeof o=="string"&&!o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${e?`${e}-`:""}${o}${t(...i.slice(1))})`:`, ${o}`}return(i,...o)=>`var(--${e?`${e}-`:""}${i}${t(...o)})`}const Sx=(e,t,n,i=[])=>{let o=e;t.forEach((l,u)=>{u===t.length-1?Array.isArray(o)?o[Number(l)]=n:o&&typeof o=="object"&&(o[l]=n):o&&typeof o=="object"&&(o[l]||(o[l]=i.includes(l)?[]:{}),o=o[l])})},H5=(e,t,n)=>{function i(o,l=[],u=[]){Object.entries(o).forEach(([f,p])=>{(!n||n&&!n([...l,f]))&&p!=null&&(typeof p=="object"&&Object.keys(p).length>0?i(p,[...l,f],Array.isArray(p)?[...u,f]:u):t([...l,f],p,u))})}i(e)},F5=(e,t)=>typeof t=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(i=>e.includes(i))||e[e.length-1].toLowerCase().includes("opacity")?t:`${t}px`:t;function em(e,t){const{prefix:n,shouldSkipGeneratingVar:i}=t||{},o={},l={},u={};return H5(e,(f,p,g)=>{if((typeof p=="string"||typeof p=="number")&&(!i||!i(f,p))){const y=`--${n?`${n}-`:""}${f.join("-")}`,x=F5(f,p);Object.assign(o,{[y]:x}),Sx(l,f,`var(${y})`,g),Sx(u,f,`var(${y}, ${x})`,g)}},f=>f[0]==="vars"),{css:o,vars:l,varsWithDefaults:u}}function q5(e,t={}){const{getSelector:n=P,disableCssColorScheme:i,colorSchemeSelector:o}=t,{colorSchemes:l={},components:u,defaultColorScheme:f="light",...p}=e,{vars:g,css:y,varsWithDefaults:x}=em(p,t);let _=x;const w={},{[f]:C,...R}=l;if(Object.entries(R||{}).forEach(([z,$])=>{const{vars:B,css:X,varsWithDefaults:D}=em($,t);_=yr(_,D),w[z]={css:X,vars:B}}),C){const{css:z,vars:$,varsWithDefaults:B}=em(C,t);_=yr(_,B),w[f]={css:z,vars:$}}function P(z,$){var X,D;let B=o;if(o==="class"&&(B=".%s"),o==="data"&&(B="[data-%s]"),o!=null&&o.startsWith("data-")&&!o.includes("%s")&&(B=`[${o}="%s"]`),z){if(B==="media")return e.defaultColorScheme===z?":root":{[`@media (prefers-color-scheme: ${((D=(X=l[z])==null?void 0:X.palette)==null?void 0:D.mode)||z})`]:{":root":$}};if(B)return e.defaultColorScheme===z?`:root, ${B.replace("%s",String(z))}`:B.replace("%s",String(z))}return":root"}return{vars:_,generateThemeVars:()=>{let z={...g};return Object.entries(w).forEach(([,{vars:$}])=>{z=yr(z,$)}),z},generateStyleSheets:()=>{var M,O;const z=[],$=e.defaultColorScheme||"light";function B(S,j){Object.keys(j).length&&z.push(typeof S=="string"?{[S]:{...j}}:S)}B(n(void 0,{...y}),y);const{[$]:X,...D}=w;if(X){const{css:S}=X,j=(O=(M=l[$])==null?void 0:M.palette)==null?void 0:O.mode,L=!i&&j?{colorScheme:j,...S}:{...S};B(n($,{...L}),L)}return Object.entries(D).forEach(([S,{css:j}])=>{var ft,lt;const L=(lt=(ft=l[S])==null?void 0:ft.palette)==null?void 0:lt.mode,k=!i&&L?{colorScheme:L,...j}:{...j};B(n(S,{...k}),k)}),z}}}function G5(e){return function(n){return e==="media"?`@media (prefers-color-scheme: ${n})`:e?e.startsWith("data-")&&!e.includes("%s")?`[${e}="${n}"] &`:e==="class"?`.${n} &`:e==="data"?`[data-${n}] &`:`${e.replace("%s",n)} &`:"&"}}const K5=ku(),Y5=mE("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${gt(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),W5=e=>vE({props:e,name:"MuiContainer",defaultTheme:K5}),Q5=(e,t)=>{const n=p=>oe(t,p),{classes:i,fixed:o,disableGutters:l,maxWidth:u}=e,f={root:["root",u&&`maxWidth${gt(String(u))}`,o&&"fixed",l&&"disableGutters"]};return he(f,n,i)};function X5(e={}){const{createStyledComponent:t=Y5,useThemeProps:n=W5,componentName:i="MuiContainer"}=e,o=t(({theme:u,ownerState:f})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!f.disableGutters&&{paddingLeft:u.spacing(2),paddingRight:u.spacing(2),[u.breakpoints.up("sm")]:{paddingLeft:u.spacing(3),paddingRight:u.spacing(3)}}}),({theme:u,ownerState:f})=>f.fixed&&Object.keys(u.breakpoints.values).reduce((p,g)=>{const y=g,x=u.breakpoints.values[y];return x!==0&&(p[u.breakpoints.up(y)]={maxWidth:`${x}${u.breakpoints.unit}`}),p},{}),({theme:u,ownerState:f})=>({...f.maxWidth==="xs"&&{[u.breakpoints.up("xs")]:{maxWidth:Math.max(u.breakpoints.values.xs,444)}},...f.maxWidth&&f.maxWidth!=="xs"&&{[u.breakpoints.up(f.maxWidth)]:{maxWidth:`${u.breakpoints.values[f.maxWidth]}${u.breakpoints.unit}`}}}));return A.forwardRef(function(f,p){const g=n(f),{className:y,component:x="div",disableGutters:_=!1,fixed:w=!1,maxWidth:C="lg",classes:R,...P}=g,V={...g,component:x,disableGutters:_,fixed:w,maxWidth:C},F=Q5(V,i);return v.jsx(o,{as:x,ownerState:V,className:Et(F.root,y),ref:p,...P})})}const Z5=(e,t)=>e.filter(n=>t.includes(n)),Vl=(e,t,n)=>{const i=e.keys[0];Array.isArray(t)?t.forEach((o,l)=>{n((u,f)=>{l<=e.keys.length-1&&(l===0?Object.assign(u,f):u[e.up(e.keys[l])]=f)},o)}):t&&typeof t=="object"?(Object.keys(t).length>e.keys.length?e.keys:Z5(e.keys,Object.keys(t))).forEach(l=>{if(e.keys.includes(l)){const u=t[l];u!==void 0&&n((f,p)=>{i===l?Object.assign(f,p):f[e.up(l)]=p},u)}}):(typeof t=="number"||typeof t=="string")&&n((o,l)=>{Object.assign(o,l)},t)};function $f(e){return`--Grid-${e}Spacing`}function Ah(e){return`--Grid-parent-${e}Spacing`}const _x="--Grid-columns",El="--Grid-parent-columns",J5=({theme:e,ownerState:t})=>{const n={};return Vl(e.breakpoints,t.size,(i,o)=>{let l={};o==="grow"&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),o==="auto"&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof o=="number"&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${o} / var(${El}) - (var(${El}) - ${o}) * (var(${Ah("column")}) / var(${El})))`}),i(n,l)}),n},tI=({theme:e,ownerState:t})=>{const n={};return Vl(e.breakpoints,t.offset,(i,o)=>{let l={};o==="auto"&&(l={marginLeft:"auto"}),typeof o=="number"&&(l={marginLeft:o===0?"0px":`calc(100% * ${o} / var(${El}) + var(${Ah("column")}) * ${o} / var(${El}))`}),i(n,l)}),n},eI=({theme:e,ownerState:t})=>{if(!t.container)return{};const n={[_x]:12};return Vl(e.breakpoints,t.columns,(i,o)=>{const l=o??12;i(n,{[_x]:l,"> *":{[El]:l}})}),n},nI=({theme:e,ownerState:t})=>{if(!t.container)return{};const n={};return Vl(e.breakpoints,t.rowSpacing,(i,o)=>{var u;const l=typeof o=="string"?o:(u=e.spacing)==null?void 0:u.call(e,o);i(n,{[$f("row")]:l,"> *":{[Ah("row")]:l}})}),n},rI=({theme:e,ownerState:t})=>{if(!t.container)return{};const n={};return Vl(e.breakpoints,t.columnSpacing,(i,o)=>{var u;const l=typeof o=="string"?o:(u=e.spacing)==null?void 0:u.call(e,o);i(n,{[$f("column")]:l,"> *":{[Ah("column")]:l}})}),n},iI=({theme:e,ownerState:t})=>{if(!t.container)return{};const n={};return Vl(e.breakpoints,t.direction,(i,o)=>{i(n,{flexDirection:o})}),n},aI=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`var(${$f("row")}) var(${$f("column")})`}}),oI=e=>{const t=[];return Object.entries(e).forEach(([n,i])=>{i!==!1&&i!==void 0&&t.push(`grid-${n}-${String(i)}`)}),t},sI=(e,t="xs")=>{function n(i){return i===void 0?!1:typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"&&i>0}if(n(e))return[`spacing-${t}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const i=[];return Object.entries(e).forEach(([o,l])=>{n(l)&&i.push(`spacing-${o}-${String(l)}`)}),i}return[]},lI=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([t,n])=>`direction-${t}-${n}`):[`direction-xs-${String(e)}`];function cI(e,t){e.item!==void 0&&delete e.item,e.zeroMinWidth!==void 0&&delete e.zeroMinWidth,t.keys.forEach(n=>{e[n]!==void 0&&delete e[n]})}const uI=ku(),dI=mE("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function fI(e){return vE({props:e,name:"MuiGrid",defaultTheme:uI})}function hI(e={}){const{createStyledComponent:t=dI,useThemeProps:n=fI,useTheme:i=Eh,componentName:o="MuiGrid"}=e,l=(g,y)=>{const{container:x,direction:_,spacing:w,wrap:C,size:R}=g,P={root:["root",x&&"container",C!=="wrap"&&`wrap-xs-${String(C)}`,...lI(_),...oI(R),...x?sI(w,y.breakpoints.keys[0]):[]]};return he(P,V=>oe(o,V),{})};function u(g,y,x=()=>!0){const _={};return g===null||(Array.isArray(g)?g.forEach((w,C)=>{w!==null&&x(w)&&y.keys[C]&&(_[y.keys[C]]=w)}):typeof g=="object"?Object.keys(g).forEach(w=>{const C=g[w];C!=null&&x(C)&&(_[w]=C)}):_[y.keys[0]]=g),_}const f=t(eI,rI,nI,J5,iI,aI,tI),p=A.forwardRef(function(y,x){const _=i(),w=n(y),C=Ry(w);cI(C,_.breakpoints);const{className:R,children:P,columns:V=12,container:F=!1,component:z="div",direction:$="row",wrap:B="wrap",size:X={},offset:D={},spacing:M=0,rowSpacing:O=M,columnSpacing:S=M,unstable_level:j=0,...L}=C,k=u(X,_.breakpoints,tt=>tt!==!1),ft=u(D,_.breakpoints),lt=y.columns??(j?void 0:V),q=y.spacing??(j?void 0:M),nt=y.rowSpacing??y.spacing??(j?void 0:O),at=y.columnSpacing??y.spacing??(j?void 0:S),it={...C,level:j,columns:lt,container:F,direction:$,wrap:B,spacing:q,rowSpacing:nt,columnSpacing:at,size:k,offset:ft},U=l(it,_);return v.jsx(f,{ref:x,as:z,ownerState:it,className:Et(U.root,R),...L,children:A.Children.map(P,tt=>{var ht;return A.isValidElement(tt)&&M5(tt,["Grid"])&&F&&tt.props.container?A.cloneElement(tt,{unstable_level:((ht=tt.props)==null?void 0:ht.unstable_level)??j+1}):tt})})});return p.muiName="Grid",p}function OE(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:du.white,default:du.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const pI=OE();function DE(){return{text:{primary:du.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:du.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Ex=DE();function Tx(e,t,n,i){const o=i.light||i,l=i.dark||i*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Oy(e.main,o):t==="dark"&&(e.dark=My(e.main,l)))}function gI(e="light"){return e==="dark"?{main:fl[200],light:fl[50],dark:fl[400]}:{main:fl[700],light:fl[400],dark:fl[800]}}function mI(e="light"){return e==="dark"?{main:dl[200],light:dl[50],dark:dl[400]}:{main:dl[500],light:dl[300],dark:dl[700]}}function yI(e="light"){return e==="dark"?{main:ul[500],light:ul[300],dark:ul[700]}:{main:ul[700],light:ul[400],dark:ul[800]}}function vI(e="light"){return e==="dark"?{main:hl[400],light:hl[300],dark:hl[700]}:{main:hl[700],light:hl[500],dark:hl[900]}}function bI(e="light"){return e==="dark"?{main:pl[400],light:pl[300],dark:pl[700]}:{main:pl[800],light:pl[500],dark:pl[900]}}function xI(e="light"){return e==="dark"?{main:Gc[400],light:Gc[300],dark:Gc[700]}:{main:"#ed6c02",light:Gc[500],dark:Gc[900]}}function Ny(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:i=.2,...o}=e,l=e.primary||gI(t),u=e.secondary||mI(t),f=e.error||yI(t),p=e.info||vI(t),g=e.success||bI(t),y=e.warning||xI(t);function x(R){return R5(R,Ex.text.primary)>=n?Ex.text.primary:pI.text.primary}const _=({color:R,name:P,mainShade:V=500,lightShade:F=300,darkShade:z=700})=>{if(R={...R},!R.main&&R[V]&&(R.main=R[V]),!R.hasOwnProperty("main"))throw new Error(es(11,P?` (${P})`:"",V));if(typeof R.main!="string")throw new Error(es(12,P?` (${P})`:"",JSON.stringify(R.main)));return Tx(R,"light",F,i),Tx(R,"dark",z,i),R.contrastText||(R.contrastText=x(R.main)),R};let w;return t==="light"?w=OE():t==="dark"&&(w=DE()),yr({common:{...du},mode:t,primary:_({color:l,name:"primary"}),secondary:_({color:u,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:_({color:f,name:"error"}),warning:_({color:y,name:"warning"}),info:_({color:p,name:"info"}),success:_({color:g,name:"success"}),grey:fR,contrastThreshold:n,getContrastText:x,augmentColor:_,tonalOffset:i,...w},o)}function SI(e){const t={};return Object.entries(e).forEach(i=>{const[o,l]=i;typeof l=="object"&&(t[o]=`${l.fontStyle?`${l.fontStyle} `:""}${l.fontVariant?`${l.fontVariant} `:""}${l.fontWeight?`${l.fontWeight} `:""}${l.fontStretch?`${l.fontStretch} `:""}${l.fontSize||""}${l.lineHeight?`/${l.lineHeight} `:""}${l.fontFamily||""}`)}),t}function _I(e,t){return{toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}},...t}}function EI(e){return Math.round(e*1e5)/1e5}const wx={textTransform:"uppercase"},Cx='"Roboto", "Helvetica", "Arial", sans-serif';function TI(e,t){const{fontFamily:n=Cx,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:l=400,fontWeightMedium:u=500,fontWeightBold:f=700,htmlFontSize:p=16,allVariants:g,pxToRem:y,...x}=typeof t=="function"?t(e):t,_=i/14,w=y||(P=>`${P/p*_}rem`),C=(P,V,F,z,$)=>({fontFamily:n,fontWeight:P,fontSize:w(V),lineHeight:F,...n===Cx?{letterSpacing:`${EI(z/V)}em`}:{},...$,...g}),R={h1:C(o,96,1.167,-1.5),h2:C(o,60,1.2,-.5),h3:C(l,48,1.167,0),h4:C(l,34,1.235,.25),h5:C(l,24,1.334,0),h6:C(u,20,1.6,.15),subtitle1:C(l,16,1.75,.15),subtitle2:C(u,14,1.57,.1),body1:C(l,16,1.5,.15),body2:C(l,14,1.43,.15),button:C(u,14,1.75,.4,wx),caption:C(l,12,1.66,.4),overline:C(l,12,2.66,1,wx),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return yr({htmlFontSize:p,pxToRem:w,fontFamily:n,fontSize:i,fontWeightLight:o,fontWeightRegular:l,fontWeightMedium:u,fontWeightBold:f,...R},x,{clone:!1})}const wI=.2,CI=.14,AI=.12;function ke(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${wI})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${CI})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${AI})`].join(",")}const RI=["none",ke(0,2,1,-1,0,1,1,0,0,1,3,0),ke(0,3,1,-2,0,2,2,0,0,1,5,0),ke(0,3,3,-2,0,3,4,0,0,1,8,0),ke(0,2,4,-1,0,4,5,0,0,1,10,0),ke(0,3,5,-1,0,5,8,0,0,1,14,0),ke(0,3,5,-1,0,6,10,0,0,1,18,0),ke(0,4,5,-2,0,7,10,1,0,2,16,1),ke(0,5,5,-3,0,8,10,1,0,3,14,2),ke(0,5,6,-3,0,9,12,1,0,3,16,2),ke(0,6,6,-3,0,10,14,1,0,4,18,3),ke(0,6,7,-4,0,11,15,1,0,4,20,3),ke(0,7,8,-4,0,12,17,2,0,5,22,4),ke(0,7,8,-4,0,13,19,2,0,5,24,4),ke(0,7,9,-4,0,14,21,2,0,5,26,4),ke(0,8,9,-5,0,15,22,2,0,6,28,5),ke(0,8,10,-5,0,16,24,2,0,6,30,5),ke(0,8,11,-5,0,17,26,2,0,6,32,5),ke(0,9,11,-5,0,18,28,2,0,7,34,6),ke(0,9,12,-6,0,19,29,2,0,7,36,6),ke(0,10,13,-6,0,20,31,3,0,8,38,7),ke(0,10,13,-6,0,21,33,3,0,8,40,7),ke(0,10,14,-6,0,22,35,3,0,8,42,7),ke(0,11,14,-7,0,23,36,3,0,9,44,8),ke(0,11,15,-7,0,24,38,3,0,9,46,8)],II={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},MI={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ax(e){return`${Math.round(e)}ms`}function OI(e){if(!e)return 0;const t=e/36;return Math.min(Math.round((4+15*t**.25+t/5)*10),3e3)}function DI(e){const t={...II,...e.easing},n={...MI,...e.duration};return{getAutoHeightDuration:OI,create:(o=["all"],l={})=>{const{duration:u=n.standard,easing:f=t.easeInOut,delay:p=0,...g}=l;return(Array.isArray(o)?o:[o]).map(y=>`${y} ${typeof u=="string"?u:Ax(u)} ${f} ${typeof p=="string"?p:Ax(p)}`).join(",")},...e,easing:t,duration:n}}const NI={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function kI(e){return Ti(e)||typeof e>"u"||typeof e=="string"||typeof e=="boolean"||typeof e=="number"||Array.isArray(e)}function NE(e={}){const t={...e};function n(i){const o=Object.entries(i);for(let l=0;l<o.length;l++){const[u,f]=o[l];!kI(f)||u.startsWith("unstable_")?delete i[u]:Ti(f)&&(i[u]={...f},n(i[u]))}}return n(t),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Im(e={},...t){const{breakpoints:n,mixins:i={},spacing:o,palette:l={},transitions:u={},typography:f={},shape:p,...g}=e;if(e.vars&&e.generateThemeVars===void 0)throw new Error(es(20));const y=Ny(l),x=ku(e);let _=yr(x,{mixins:_I(x.breakpoints,i),palette:y,shadows:RI.slice(),typography:TI(y,f),transitions:DI(u),zIndex:{...NI}});return _=yr(_,g),_=t.reduce((w,C)=>yr(w,C),_),_.unstable_sxConfig={...Nu,...g==null?void 0:g.unstable_sxConfig},_.unstable_sx=function(C){return ns({sx:C,theme:this})},_.toRuntimeSource=NE,_}function Mm(e){let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,Math.round(t*10)/1e3}const PI=[...Array(25)].map((e,t)=>{if(t===0)return"none";const n=Mm(t);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function kE(e){return{inputPlaceholder:e==="dark"?.5:.42,inputUnderline:e==="dark"?.7:.42,switchTrackDisabled:e==="dark"?.2:.12,switchTrack:e==="dark"?.3:.38}}function PE(e){return e==="dark"?PI:[]}function jI(e){const{palette:t={mode:"light"},opacity:n,overlays:i,...o}=e,l=Ny(t);return{palette:l,opacity:{...kE(l.mode),...n},overlays:i||PE(l.mode),...o}}function VI(e){var t;return!!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!e[0].match(/sxConfig$/)||e[0]==="palette"&&!!((t=e[1])!=null&&t.match(/(mode|contrastThreshold|tonalOffset)/))}const zI=e=>[...[...Array(25)].map((t,n)=>`--${e?`${e}-`:""}overlays-${n}`),`--${e?`${e}-`:""}palette-AppBar-darkBg`,`--${e?`${e}-`:""}palette-AppBar-darkColor`],LI=e=>(t,n)=>{const i=e.rootSelector||":root",o=e.colorSchemeSelector;let l=o;if(o==="class"&&(l=".%s"),o==="data"&&(l="[data-%s]"),o!=null&&o.startsWith("data-")&&!o.includes("%s")&&(l=`[${o}="%s"]`),e.defaultColorScheme===t){if(t==="dark"){const u={};return zI(e.cssVarPrefix).forEach(f=>{u[f]=n[f],delete n[f]}),l==="media"?{[i]:n,"@media (prefers-color-scheme: dark)":{[i]:u}}:l?{[l.replace("%s",t)]:u,[`${i}, ${l.replace("%s",t)}`]:n}:{[i]:{...n,...u}}}if(l&&l!=="media")return`${i}, ${l.replace("%s",String(t))}`}else if(t){if(l==="media")return{[`@media (prefers-color-scheme: ${String(t)})`]:{[i]:n}};if(l)return l.replace("%s",String(t))}return i};function BI(e,t){t.forEach(n=>{e[n]||(e[n]={})})}function rt(e,t,n){!e[t]&&n&&(e[t]=n)}function Zc(e){return typeof e!="string"||!e.startsWith("hsl")?e:SE(e)}function aa(e,t){`${t}Channel`in e||(e[`${t}Channel`]=Xc(Zc(e[t])))}function UI(e){return typeof e=="number"?`${e}px`:typeof e=="string"||typeof e=="function"||Array.isArray(e)?e:"8px"}const xi=e=>{try{return e()}catch{}},$I=(e="mui")=>$5(e);function nm(e,t,n,i){if(!t)return;t=t===!0?{}:t;const o=i==="dark"?"dark":"light";if(!n){e[i]=jI({...t,palette:{mode:o,...t==null?void 0:t.palette}});return}const{palette:l,...u}=Im({...n,palette:{mode:o,...t==null?void 0:t.palette}});return e[i]={...t,palette:l,opacity:{...kE(o),...t==null?void 0:t.opacity},overlays:(t==null?void 0:t.overlays)||PE(o)},u}function HI(e={},...t){const{colorSchemes:n={light:!0},defaultColorScheme:i,disableCssColorScheme:o=!1,cssVarPrefix:l="mui",shouldSkipGeneratingVar:u=VI,colorSchemeSelector:f=n.light&&n.dark?"media":void 0,rootSelector:p=":root",...g}=e,y=Object.keys(n)[0],x=i||(n.light&&y!=="light"?"light":y),_=$I(l),{[x]:w,light:C,dark:R,...P}=n,V={...P};let F=w;if((x==="dark"&&!("dark"in n)||x==="light"&&!("light"in n))&&(F=!0),!F)throw new Error(es(21,x));const z=nm(V,F,g,x);C&&!V.light&&nm(V,C,void 0,"light"),R&&!V.dark&&nm(V,R,void 0,"dark");let $={defaultColorScheme:x,...z,cssVarPrefix:l,colorSchemeSelector:f,rootSelector:p,getCssVar:_,colorSchemes:V,font:{...SI(z.typography),...z.font},spacing:UI(g.spacing)};Object.keys($.colorSchemes).forEach(O=>{const S=$.colorSchemes[O].palette,j=L=>{const k=L.split("-"),ft=k[1],lt=k[2];return _(L,S[ft][lt])};if(S.mode==="light"&&(rt(S.common,"background","#fff"),rt(S.common,"onBackground","#000")),S.mode==="dark"&&(rt(S.common,"background","#000"),rt(S.common,"onBackground","#fff")),BI(S,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),S.mode==="light"){rt(S.Alert,"errorColor",Ie(S.error.light,.6)),rt(S.Alert,"infoColor",Ie(S.info.light,.6)),rt(S.Alert,"successColor",Ie(S.success.light,.6)),rt(S.Alert,"warningColor",Ie(S.warning.light,.6)),rt(S.Alert,"errorFilledBg",j("palette-error-main")),rt(S.Alert,"infoFilledBg",j("palette-info-main")),rt(S.Alert,"successFilledBg",j("palette-success-main")),rt(S.Alert,"warningFilledBg",j("palette-warning-main")),rt(S.Alert,"errorFilledColor",xi(()=>S.getContrastText(S.error.main))),rt(S.Alert,"infoFilledColor",xi(()=>S.getContrastText(S.info.main))),rt(S.Alert,"successFilledColor",xi(()=>S.getContrastText(S.success.main))),rt(S.Alert,"warningFilledColor",xi(()=>S.getContrastText(S.warning.main))),rt(S.Alert,"errorStandardBg",Me(S.error.light,.9)),rt(S.Alert,"infoStandardBg",Me(S.info.light,.9)),rt(S.Alert,"successStandardBg",Me(S.success.light,.9)),rt(S.Alert,"warningStandardBg",Me(S.warning.light,.9)),rt(S.Alert,"errorIconColor",j("palette-error-main")),rt(S.Alert,"infoIconColor",j("palette-info-main")),rt(S.Alert,"successIconColor",j("palette-success-main")),rt(S.Alert,"warningIconColor",j("palette-warning-main")),rt(S.AppBar,"defaultBg",j("palette-grey-100")),rt(S.Avatar,"defaultBg",j("palette-grey-400")),rt(S.Button,"inheritContainedBg",j("palette-grey-300")),rt(S.Button,"inheritContainedHoverBg",j("palette-grey-A100")),rt(S.Chip,"defaultBorder",j("palette-grey-400")),rt(S.Chip,"defaultAvatarColor",j("palette-grey-700")),rt(S.Chip,"defaultIconColor",j("palette-grey-700")),rt(S.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),rt(S.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),rt(S.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),rt(S.LinearProgress,"primaryBg",Me(S.primary.main,.62)),rt(S.LinearProgress,"secondaryBg",Me(S.secondary.main,.62)),rt(S.LinearProgress,"errorBg",Me(S.error.main,.62)),rt(S.LinearProgress,"infoBg",Me(S.info.main,.62)),rt(S.LinearProgress,"successBg",Me(S.success.main,.62)),rt(S.LinearProgress,"warningBg",Me(S.warning.main,.62)),rt(S.Skeleton,"bg",`rgba(${j("palette-text-primaryChannel")} / 0.11)`),rt(S.Slider,"primaryTrack",Me(S.primary.main,.62)),rt(S.Slider,"secondaryTrack",Me(S.secondary.main,.62)),rt(S.Slider,"errorTrack",Me(S.error.main,.62)),rt(S.Slider,"infoTrack",Me(S.info.main,.62)),rt(S.Slider,"successTrack",Me(S.success.main,.62)),rt(S.Slider,"warningTrack",Me(S.warning.main,.62));const L=df(S.background.default,.8);rt(S.SnackbarContent,"bg",L),rt(S.SnackbarContent,"color",xi(()=>S.getContrastText(L))),rt(S.SpeedDialAction,"fabHoverBg",df(S.background.paper,.15)),rt(S.StepConnector,"border",j("palette-grey-400")),rt(S.StepContent,"border",j("palette-grey-400")),rt(S.Switch,"defaultColor",j("palette-common-white")),rt(S.Switch,"defaultDisabledColor",j("palette-grey-100")),rt(S.Switch,"primaryDisabledColor",Me(S.primary.main,.62)),rt(S.Switch,"secondaryDisabledColor",Me(S.secondary.main,.62)),rt(S.Switch,"errorDisabledColor",Me(S.error.main,.62)),rt(S.Switch,"infoDisabledColor",Me(S.info.main,.62)),rt(S.Switch,"successDisabledColor",Me(S.success.main,.62)),rt(S.Switch,"warningDisabledColor",Me(S.warning.main,.62)),rt(S.TableCell,"border",Me(uf(S.divider,1),.88)),rt(S.Tooltip,"bg",uf(S.grey[700],.92))}if(S.mode==="dark"){rt(S.Alert,"errorColor",Me(S.error.light,.6)),rt(S.Alert,"infoColor",Me(S.info.light,.6)),rt(S.Alert,"successColor",Me(S.success.light,.6)),rt(S.Alert,"warningColor",Me(S.warning.light,.6)),rt(S.Alert,"errorFilledBg",j("palette-error-dark")),rt(S.Alert,"infoFilledBg",j("palette-info-dark")),rt(S.Alert,"successFilledBg",j("palette-success-dark")),rt(S.Alert,"warningFilledBg",j("palette-warning-dark")),rt(S.Alert,"errorFilledColor",xi(()=>S.getContrastText(S.error.dark))),rt(S.Alert,"infoFilledColor",xi(()=>S.getContrastText(S.info.dark))),rt(S.Alert,"successFilledColor",xi(()=>S.getContrastText(S.success.dark))),rt(S.Alert,"warningFilledColor",xi(()=>S.getContrastText(S.warning.dark))),rt(S.Alert,"errorStandardBg",Ie(S.error.light,.9)),rt(S.Alert,"infoStandardBg",Ie(S.info.light,.9)),rt(S.Alert,"successStandardBg",Ie(S.success.light,.9)),rt(S.Alert,"warningStandardBg",Ie(S.warning.light,.9)),rt(S.Alert,"errorIconColor",j("palette-error-main")),rt(S.Alert,"infoIconColor",j("palette-info-main")),rt(S.Alert,"successIconColor",j("palette-success-main")),rt(S.Alert,"warningIconColor",j("palette-warning-main")),rt(S.AppBar,"defaultBg",j("palette-grey-900")),rt(S.AppBar,"darkBg",j("palette-background-paper")),rt(S.AppBar,"darkColor",j("palette-text-primary")),rt(S.Avatar,"defaultBg",j("palette-grey-600")),rt(S.Button,"inheritContainedBg",j("palette-grey-800")),rt(S.Button,"inheritContainedHoverBg",j("palette-grey-700")),rt(S.Chip,"defaultBorder",j("palette-grey-700")),rt(S.Chip,"defaultAvatarColor",j("palette-grey-300")),rt(S.Chip,"defaultIconColor",j("palette-grey-300")),rt(S.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),rt(S.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),rt(S.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),rt(S.LinearProgress,"primaryBg",Ie(S.primary.main,.5)),rt(S.LinearProgress,"secondaryBg",Ie(S.secondary.main,.5)),rt(S.LinearProgress,"errorBg",Ie(S.error.main,.5)),rt(S.LinearProgress,"infoBg",Ie(S.info.main,.5)),rt(S.LinearProgress,"successBg",Ie(S.success.main,.5)),rt(S.LinearProgress,"warningBg",Ie(S.warning.main,.5)),rt(S.Skeleton,"bg",`rgba(${j("palette-text-primaryChannel")} / 0.13)`),rt(S.Slider,"primaryTrack",Ie(S.primary.main,.5)),rt(S.Slider,"secondaryTrack",Ie(S.secondary.main,.5)),rt(S.Slider,"errorTrack",Ie(S.error.main,.5)),rt(S.Slider,"infoTrack",Ie(S.info.main,.5)),rt(S.Slider,"successTrack",Ie(S.success.main,.5)),rt(S.Slider,"warningTrack",Ie(S.warning.main,.5));const L=df(S.background.default,.98);rt(S.SnackbarContent,"bg",L),rt(S.SnackbarContent,"color",xi(()=>S.getContrastText(L))),rt(S.SpeedDialAction,"fabHoverBg",df(S.background.paper,.15)),rt(S.StepConnector,"border",j("palette-grey-600")),rt(S.StepContent,"border",j("palette-grey-600")),rt(S.Switch,"defaultColor",j("palette-grey-300")),rt(S.Switch,"defaultDisabledColor",j("palette-grey-600")),rt(S.Switch,"primaryDisabledColor",Ie(S.primary.main,.55)),rt(S.Switch,"secondaryDisabledColor",Ie(S.secondary.main,.55)),rt(S.Switch,"errorDisabledColor",Ie(S.error.main,.55)),rt(S.Switch,"infoDisabledColor",Ie(S.info.main,.55)),rt(S.Switch,"successDisabledColor",Ie(S.success.main,.55)),rt(S.Switch,"warningDisabledColor",Ie(S.warning.main,.55)),rt(S.TableCell,"border",Ie(uf(S.divider,1),.68)),rt(S.Tooltip,"bg",uf(S.grey[700],.92))}aa(S.background,"default"),aa(S.background,"paper"),aa(S.common,"background"),aa(S.common,"onBackground"),aa(S,"divider"),Object.keys(S).forEach(L=>{const k=S[L];L!=="tonalOffset"&&k&&typeof k=="object"&&(k.main&&rt(S[L],"mainChannel",Xc(Zc(k.main))),k.light&&rt(S[L],"lightChannel",Xc(Zc(k.light))),k.dark&&rt(S[L],"darkChannel",Xc(Zc(k.dark))),k.contrastText&&rt(S[L],"contrastTextChannel",Xc(Zc(k.contrastText))),L==="text"&&(aa(S[L],"primary"),aa(S[L],"secondary")),L==="action"&&(k.active&&aa(S[L],"active"),k.selected&&aa(S[L],"selected")))})}),$=t.reduce((O,S)=>yr(O,S),$);const B={prefix:l,disableCssColorScheme:o,shouldSkipGeneratingVar:u,getSelector:LI($)},{vars:X,generateThemeVars:D,generateStyleSheets:M}=q5($,B);return $.vars=X,Object.entries($.colorSchemes[$.defaultColorScheme]).forEach(([O,S])=>{$[O]=S}),$.generateThemeVars=D,$.generateStyleSheets=M,$.generateSpacing=function(){return cE(g.spacing,Cy(this))},$.getColorSchemeSelector=G5(f),$.spacing=$.generateSpacing(),$.shouldSkipGeneratingVar=u,$.unstable_sxConfig={...Nu,...g==null?void 0:g.unstable_sxConfig},$.unstable_sx=function(S){return ns({sx:S,theme:this})},$.toRuntimeSource=NE,$}function Rx(e,t,n){e.colorSchemes&&n&&(e.colorSchemes[t]={...n!==!0&&n,palette:Ny({...n===!0?{}:n.palette,mode:t})})}function jE(e={},...t){const{palette:n,cssVariables:i=!1,colorSchemes:o=n?void 0:{light:!0},defaultColorScheme:l=n==null?void 0:n.mode,...u}=e,f=l||"light",p=o==null?void 0:o[f],g={...o,...n?{[f]:{...typeof p!="boolean"&&p,palette:n}}:void 0};if(i===!1){if(!("colorSchemes"in e))return Im(e,...t);let y=n;"palette"in e||g[f]&&(g[f]!==!0?y=g[f].palette:f==="dark"&&(y={mode:"dark"}));const x=Im({...e,palette:y},...t);return x.defaultColorScheme=f,x.colorSchemes=g,x.palette.mode==="light"&&(x.colorSchemes.light={...g.light!==!0&&g.light,palette:x.palette},Rx(x,"dark",g.dark)),x.palette.mode==="dark"&&(x.colorSchemes.dark={...g.dark!==!0&&g.dark,palette:x.palette},Rx(x,"light",g.light)),x}return!n&&!("light"in g)&&f==="light"&&(g.light=!0),HI({...u,colorSchemes:g,defaultColorScheme:f,...typeof i!="boolean"&&i},...t)}const VE=jE();function Zr(){const e=Eh(VE);return e[fh]||e}function FI(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Rh=e=>FI(e)&&e!=="classes",Ct=gE({themeId:fh,defaultTheme:VE,rootShouldForwardProp:Rh});function qI(){return Ry}const je=U5;function se(e){return B5(e)}function GI(e){return oe("MuiSvgIcon",e)}ie("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const KI=e=>{const{color:t,fontSize:n,classes:i}=e,o={root:["root",t!=="inherit"&&`color${gt(t)}`,`fontSize${gt(n)}`]};return he(o,GI,i)},YI=Ct("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${gt(n.color)}`],t[`fontSize${gt(n.fontSize)}`]]}})(je(({theme:e})=>{var t,n,i,o,l,u,f,p,g,y,x,_,w,C;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(o=(t=e.transitions)==null?void 0:t.create)==null?void 0:o.call(t,"fill",{duration:(i=(n=(e.vars??e).transitions)==null?void 0:n.duration)==null?void 0:i.shorter}),variants:[{props:R=>!R.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((u=(l=e.typography)==null?void 0:l.pxToRem)==null?void 0:u.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((p=(f=e.typography)==null?void 0:f.pxToRem)==null?void 0:p.call(f,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((y=(g=e.typography)==null?void 0:g.pxToRem)==null?void 0:y.call(g,35))||"2.1875rem"}},...Object.entries((e.vars??e).palette).filter(([,R])=>R&&R.main).map(([R])=>{var P,V;return{props:{color:R},style:{color:(V=(P=(e.vars??e).palette)==null?void 0:P[R])==null?void 0:V.main}}}),{props:{color:"action"},style:{color:(_=(x=(e.vars??e).palette)==null?void 0:x.action)==null?void 0:_.active}},{props:{color:"disabled"},style:{color:(C=(w=(e.vars??e).palette)==null?void 0:w.action)==null?void 0:C.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),Om=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiSvgIcon"}),{children:o,className:l,color:u="inherit",component:f="svg",fontSize:p="medium",htmlColor:g,inheritViewBox:y=!1,titleAccess:x,viewBox:_="0 0 24 24",...w}=i,C=A.isValidElement(o)&&o.type==="svg",R={...i,color:u,component:f,fontSize:p,instanceFontSize:t.fontSize,inheritViewBox:y,viewBox:_,hasSvgAsChild:C},P={};y||(P.viewBox=_);const V=KI(R);return v.jsxs(YI,{as:f,className:Et(V.root,l),focusable:"false",color:g,"aria-hidden":x?void 0:!0,role:x?"img":void 0,ref:n,...P,...w,...C&&o.props,ownerState:R,children:[C?o.props.children:o,x?v.jsx("title",{children:x}):null]})});Om.muiName="SvgIcon";function pe(e,t){function n(i,o){return v.jsx(Om,{"data-testid":void 0,ref:o,...i,children:e})}return n.muiName=Om.muiName,A.memo(A.forwardRef(n))}function WI(e,t){const n=e.charCodeAt(2);return e[0]==="o"&&e[1]==="n"&&n>=65&&n<=90&&typeof t=="function"}function QI(e,t){if(!e)return t;function n(u,f){const p={};return Object.keys(f).forEach(g=>{WI(g,f[g])&&typeof u[g]=="function"&&(p[g]=(...y)=>{u[g](...y),f[g](...y)})}),p}if(typeof e=="function"||typeof t=="function")return u=>{const f=typeof t=="function"?t(u):t,p=typeof e=="function"?e({...u,...f}):e,g=Et(u==null?void 0:u.className,f==null?void 0:f.className,p==null?void 0:p.className),y=n(p,f);return{...f,...p,...y,...!!g&&{className:g},...(f==null?void 0:f.style)&&(p==null?void 0:p.style)&&{style:{...f.style,...p.style}},...(f==null?void 0:f.sx)&&(p==null?void 0:p.sx)&&{sx:[...Array.isArray(f.sx)?f.sx:[f.sx],...Array.isArray(p.sx)?p.sx:[p.sx]]}}};const i=t,o=n(e,i),l=Et(i==null?void 0:i.className,e==null?void 0:e.className);return{...t,...e,...o,...!!l&&{className:l},...(i==null?void 0:i.style)&&(e==null?void 0:e.style)&&{style:{...i.style,...e.style}},...(i==null?void 0:i.sx)&&(e==null?void 0:e.sx)&&{sx:[...Array.isArray(i.sx)?i.sx:[i.sx],...Array.isArray(e.sx)?e.sx:[e.sx]]}}}function zE(e,t){if(e==null)return{};var n={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;n[i]=e[i]}return n}function Dm(e,t){return Dm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Dm(e,t)}function LE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Dm(e,t)}const Ix={disabled:!1},Hf=Dn.createContext(null);var XI=function(t){return t.scrollTop},Jc="unmounted",Ko="exited",Yo="entering",ml="entered",Nm="exiting",Jr=function(e){LE(t,e);function t(i,o){var l;l=e.call(this,i,o)||this;var u=o,f=u&&!u.isMounting?i.enter:i.appear,p;return l.appearStatus=null,i.in?f?(p=Ko,l.appearStatus=Yo):p=ml:i.unmountOnExit||i.mountOnEnter?p=Jc:p=Ko,l.state={status:p},l.nextCallback=null,l}t.getDerivedStateFromProps=function(o,l){var u=o.in;return u&&l.status===Jc?{status:Ko}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var l=null;if(o!==this.props){var u=this.state.status;this.props.in?u!==Yo&&u!==ml&&(l=Yo):(u===Yo||u===ml)&&(l=Nm)}this.updateStatus(!1,l)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,l,u,f;return l=u=f=o,o!=null&&typeof o!="number"&&(l=o.exit,u=o.enter,f=o.appear!==void 0?o.appear:u),{exit:l,enter:u,appear:f}},n.updateStatus=function(o,l){if(o===void 0&&(o=!1),l!==null)if(this.cancelNextCallback(),l===Yo){if(this.props.unmountOnExit||this.props.mountOnEnter){var u=this.props.nodeRef?this.props.nodeRef.current:lf.findDOMNode(this);u&&XI(u)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ko&&this.setState({status:Jc})},n.performEnter=function(o){var l=this,u=this.props.enter,f=this.context?this.context.isMounting:o,p=this.props.nodeRef?[f]:[lf.findDOMNode(this),f],g=p[0],y=p[1],x=this.getTimeouts(),_=f?x.appear:x.enter;if(!o&&!u||Ix.disabled){this.safeSetState({status:ml},function(){l.props.onEntered(g)});return}this.props.onEnter(g,y),this.safeSetState({status:Yo},function(){l.props.onEntering(g,y),l.onTransitionEnd(_,function(){l.safeSetState({status:ml},function(){l.props.onEntered(g,y)})})})},n.performExit=function(){var o=this,l=this.props.exit,u=this.getTimeouts(),f=this.props.nodeRef?void 0:lf.findDOMNode(this);if(!l||Ix.disabled){this.safeSetState({status:Ko},function(){o.props.onExited(f)});return}this.props.onExit(f),this.safeSetState({status:Nm},function(){o.props.onExiting(f),o.onTransitionEnd(u.exit,function(){o.safeSetState({status:Ko},function(){o.props.onExited(f)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,l){l=this.setNextCallback(l),this.setState(o,l)},n.setNextCallback=function(o){var l=this,u=!0;return this.nextCallback=function(f){u&&(u=!1,l.nextCallback=null,o(f))},this.nextCallback.cancel=function(){u=!1},this.nextCallback},n.onTransitionEnd=function(o,l){this.setNextCallback(l);var u=this.props.nodeRef?this.props.nodeRef.current:lf.findDOMNode(this),f=o==null&&!this.props.addEndListener;if(!u||f){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var p=this.props.nodeRef?[this.nextCallback]:[u,this.nextCallback],g=p[0],y=p[1];this.props.addEndListener(g,y)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Jc)return null;var l=this.props,u=l.children;l.in,l.mountOnEnter,l.unmountOnExit,l.appear,l.enter,l.exit,l.timeout,l.addEndListener,l.onEnter,l.onEntering,l.onEntered,l.onExit,l.onExiting,l.onExited,l.nodeRef;var f=zE(l,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Dn.createElement(Hf.Provider,{value:null},typeof u=="function"?u(o,f):Dn.cloneElement(Dn.Children.only(u),f))},t}(Dn.Component);Jr.contextType=Hf;Jr.propTypes={};function gl(){}Jr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:gl,onEntering:gl,onEntered:gl,onExit:gl,onExiting:gl,onExited:gl};Jr.UNMOUNTED=Jc;Jr.EXITED=Ko;Jr.ENTERING=Yo;Jr.ENTERED=ml;Jr.EXITING=Nm;function ZI(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ky(e,t){var n=function(l){return t&&A.isValidElement(l)?t(l):l},i=Object.create(null);return e&&A.Children.map(e,function(o){return o}).forEach(function(o){i[o.key]=n(o)}),i}function JI(e,t){e=e||{},t=t||{};function n(y){return y in t?t[y]:e[y]}var i=Object.create(null),o=[];for(var l in e)l in t?o.length&&(i[l]=o,o=[]):o.push(l);var u,f={};for(var p in t){if(i[p])for(u=0;u<i[p].length;u++){var g=i[p][u];f[i[p][u]]=n(g)}f[p]=n(p)}for(u=0;u<o.length;u++)f[o[u]]=n(o[u]);return f}function Xo(e,t,n){return n[t]!=null?n[t]:e.props[t]}function t3(e,t){return ky(e.children,function(n){return A.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Xo(n,"appear",e),enter:Xo(n,"enter",e),exit:Xo(n,"exit",e)})})}function e3(e,t,n){var i=ky(e.children),o=JI(t,i);return Object.keys(o).forEach(function(l){var u=o[l];if(A.isValidElement(u)){var f=l in t,p=l in i,g=t[l],y=A.isValidElement(g)&&!g.props.in;p&&(!f||y)?o[l]=A.cloneElement(u,{onExited:n.bind(null,u),in:!0,exit:Xo(u,"exit",e),enter:Xo(u,"enter",e)}):!p&&f&&!y?o[l]=A.cloneElement(u,{in:!1}):p&&f&&A.isValidElement(g)&&(o[l]=A.cloneElement(u,{onExited:n.bind(null,u),in:g.props.in,exit:Xo(u,"exit",e),enter:Xo(u,"enter",e)}))}}),o}var n3=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},r3={component:"div",childFactory:function(t){return t}},Py=function(e){LE(t,e);function t(i,o){var l;l=e.call(this,i,o)||this;var u=l.handleExited.bind(ZI(l));return l.state={contextValue:{isMounting:!0},handleExited:u,firstRender:!0},l}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,l){var u=l.children,f=l.handleExited,p=l.firstRender;return{children:p?t3(o,f):e3(o,u,f),firstRender:!1}},n.handleExited=function(o,l){var u=ky(this.props.children);o.key in u||(o.props.onExited&&o.props.onExited(l),this.mounted&&this.setState(function(f){var p=zf({},f.children);return delete p[o.key],{children:p}}))},n.render=function(){var o=this.props,l=o.component,u=o.childFactory,f=zE(o,["component","childFactory"]),p=this.state.contextValue,g=n3(this.state.children).map(u);return delete f.appear,delete f.enter,delete f.exit,l===null?Dn.createElement(Hf.Provider,{value:p},g):Dn.createElement(Hf.Provider,{value:p},Dn.createElement(l,f,g))},t}(Dn.Component);Py.propTypes={};Py.defaultProps=r3;const jy=e=>e.scrollTop;function Cl(e,t){const{timeout:n,easing:i,style:o={}}=e;return{duration:o.transitionDuration??(typeof n=="number"?n:n[t.mode]||0),easing:o.transitionTimingFunction??(typeof i=="object"?i[t.mode]:i),delay:o.transitionDelay}}function i3(e){return oe("MuiPaper",e)}ie("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const a3=e=>{const{square:t,elevation:n,variant:i,classes:o}=e,l={root:["root",i,!t&&"rounded",i==="elevation"&&`elevation${n}`]};return he(l,i3,o)},o3=Ct("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(je(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:t})=>!t.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),us=A.forwardRef(function(t,n){var w;const i=se({props:t,name:"MuiPaper"}),o=Zr(),{className:l,component:u="div",elevation:f=1,square:p=!1,variant:g="elevation",...y}=i,x={...i,component:u,elevation:f,square:p,variant:g},_=a3(x);return v.jsx(o3,{as:u,ownerState:x,className:Et(_.root,l),ref:n,...y,style:{...g==="elevation"&&{"--Paper-shadow":(o.vars||o).shadows[f],...o.vars&&{"--Paper-overlay":(w=o.vars.overlays)==null?void 0:w[f]},...!o.vars&&o.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${Zt("#fff",Mm(f))}, ${Zt("#fff",Mm(f))})`}},...y.style}})});function nn(e,t){const{className:n,elementType:i,ownerState:o,externalForwardedProps:l,internalForwardedProps:u,shouldForwardComponentProp:f=!1,...p}=t,{component:g,slots:y={[e]:void 0},slotProps:x={[e]:void 0},..._}=l,w=y[e]||i,C=ME(x[e],o),{props:{component:R,...P},internalRef:V}=IE({className:n,...p,externalForwardedProps:e==="root"?_:void 0,externalSlotProps:C}),F=br(V,C==null?void 0:C.ref,t.ref),z=e==="root"?R||g:R,$=AE(w,{...e==="root"&&!g&&!y[e]&&u,...e!=="root"&&!y[e]&&u,...P,...z&&!f&&{as:z},...z&&f&&{component:z},ref:F},o);return[w,$]}class Ff{constructor(){Uc(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new Ff}static use(){const t=EE(Ff.create).current,[n,i]=A.useState(!1);return t.shouldMount=n,t.setShouldMount=i,A.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=l3(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function s3(){return Ff.use()}function l3(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});return n.resolve=e,n.reject=t,n}function c3(e){const{className:t,classes:n,pulsate:i=!1,rippleX:o,rippleY:l,rippleSize:u,in:f,onExited:p,timeout:g}=e,[y,x]=A.useState(!1),_=Et(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),w={width:u,height:u,top:-(u/2)+l,left:-(u/2)+o},C=Et(n.child,y&&n.childLeaving,i&&n.childPulsate);return!f&&!y&&x(!0),A.useEffect(()=>{if(!f&&p!=null){const R=setTimeout(p,g);return()=>{clearTimeout(R)}}},[p,f,g]),v.jsx("span",{className:_,style:w,children:v.jsx("span",{className:C})})}const kr=ie("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),km=550,u3=80,d3=Mu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,f3=Mu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,h3=Mu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,p3=Ct("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),g3=Ct(c3,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${kr.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${d3};
    animation-duration: ${km}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${kr.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${kr.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${kr.childLeaving} {
    opacity: 0;
    animation-name: ${f3};
    animation-duration: ${km}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${kr.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${h3};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,m3=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:l={},className:u,...f}=i,[p,g]=A.useState([]),y=A.useRef(0),x=A.useRef(null);A.useEffect(()=>{x.current&&(x.current(),x.current=null)},[p]);const _=A.useRef(!1),w=TE(),C=A.useRef(null),R=A.useRef(null),P=A.useCallback($=>{const{pulsate:B,rippleX:X,rippleY:D,rippleSize:M,cb:O}=$;g(S=>[...S,v.jsx(g3,{classes:{ripple:Et(l.ripple,kr.ripple),rippleVisible:Et(l.rippleVisible,kr.rippleVisible),ripplePulsate:Et(l.ripplePulsate,kr.ripplePulsate),child:Et(l.child,kr.child),childLeaving:Et(l.childLeaving,kr.childLeaving),childPulsate:Et(l.childPulsate,kr.childPulsate)},timeout:km,pulsate:B,rippleX:X,rippleY:D,rippleSize:M},y.current)]),y.current+=1,x.current=O},[l]),V=A.useCallback(($={},B={},X=()=>{})=>{const{pulsate:D=!1,center:M=o||B.pulsate,fakeElement:O=!1}=B;if(($==null?void 0:$.type)==="mousedown"&&_.current){_.current=!1;return}($==null?void 0:$.type)==="touchstart"&&(_.current=!0);const S=O?null:R.current,j=S?S.getBoundingClientRect():{width:0,height:0,left:0,top:0};let L,k,ft;if(M||$===void 0||$.clientX===0&&$.clientY===0||!$.clientX&&!$.touches)L=Math.round(j.width/2),k=Math.round(j.height/2);else{const{clientX:lt,clientY:q}=$.touches&&$.touches.length>0?$.touches[0]:$;L=Math.round(lt-j.left),k=Math.round(q-j.top)}if(M)ft=Math.sqrt((2*j.width**2+j.height**2)/3),ft%2===0&&(ft+=1);else{const lt=Math.max(Math.abs((S?S.clientWidth:0)-L),L)*2+2,q=Math.max(Math.abs((S?S.clientHeight:0)-k),k)*2+2;ft=Math.sqrt(lt**2+q**2)}$!=null&&$.touches?C.current===null&&(C.current=()=>{P({pulsate:D,rippleX:L,rippleY:k,rippleSize:ft,cb:X})},w.start(u3,()=>{C.current&&(C.current(),C.current=null)})):P({pulsate:D,rippleX:L,rippleY:k,rippleSize:ft,cb:X})},[o,P,w]),F=A.useCallback(()=>{V({},{pulsate:!0})},[V]),z=A.useCallback(($,B)=>{if(w.clear(),($==null?void 0:$.type)==="touchend"&&C.current){C.current(),C.current=null,w.start(0,()=>{z($,B)});return}C.current=null,g(X=>X.length>0?X.slice(1):X),x.current=B},[w]);return A.useImperativeHandle(n,()=>({pulsate:F,start:V,stop:z}),[F,V,z]),v.jsx(p3,{className:Et(kr.root,l.root,u),ref:R,...f,children:v.jsx(Py,{component:null,exit:!0,children:p})})});function y3(e){return oe("MuiButtonBase",e)}const v3=ie("MuiButtonBase",["root","disabled","focusVisible"]),b3=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:i,classes:o}=e,u=he({root:["root",t&&"disabled",n&&"focusVisible"]},y3,o);return n&&i&&(u.root+=` ${i}`),u},x3=Ct("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${v3.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),no=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:l=!1,children:u,className:f,component:p="button",disabled:g=!1,disableRipple:y=!1,disableTouchRipple:x=!1,focusRipple:_=!1,focusVisibleClassName:w,LinkComponent:C="a",onBlur:R,onClick:P,onContextMenu:V,onDragLeave:F,onFocus:z,onFocusVisible:$,onKeyDown:B,onKeyUp:X,onMouseDown:D,onMouseLeave:M,onMouseUp:O,onTouchEnd:S,onTouchMove:j,onTouchStart:L,tabIndex:k=0,TouchRippleProps:ft,touchRippleRef:lt,type:q,...nt}=i,at=A.useRef(null),it=s3(),U=br(it.ref,lt),[tt,ht]=A.useState(!1);g&&tt&&ht(!1),A.useImperativeHandle(o,()=>({focusVisible:()=>{ht(!0),at.current.focus()}}),[]);const dt=it.shouldMount&&!y&&!g;A.useEffect(()=>{tt&&_&&!y&&it.pulsate()},[y,_,tt,it]);const bt=oa(it,"start",D,x),jt=oa(it,"stop",V,x),_t=oa(it,"stop",F,x),Ce=oa(it,"stop",O,x),Wt=oa(it,"stop",Vt=>{tt&&Vt.preventDefault(),M&&M(Vt)},x),dn=oa(it,"start",L,x),Nt=oa(it,"stop",S,x),Qt=oa(it,"stop",j,x),le=oa(it,"stop",Vt=>{Uf(Vt.target)||ht(!1),R&&R(Vt)},!1),Sn=la(Vt=>{at.current||(at.current=Vt.currentTarget),Uf(Vt.target)&&(ht(!0),$&&$(Vt)),z&&z(Vt)}),Fe=()=>{const Vt=at.current;return p&&p!=="button"&&!(Vt.tagName==="A"&&Vt.href)},kn=la(Vt=>{_&&!Vt.repeat&&tt&&Vt.key===" "&&it.stop(Vt,()=>{it.start(Vt)}),Vt.target===Vt.currentTarget&&Fe()&&Vt.key===" "&&Vt.preventDefault(),B&&B(Vt),Vt.target===Vt.currentTarget&&Fe()&&Vt.key==="Enter"&&!g&&(Vt.preventDefault(),P&&P(Vt))}),xr=la(Vt=>{_&&Vt.key===" "&&tt&&!Vt.defaultPrevented&&it.stop(Vt,()=>{it.pulsate(Vt)}),X&&X(Vt),P&&Vt.target===Vt.currentTarget&&Fe()&&Vt.key===" "&&!Vt.defaultPrevented&&P(Vt)});let ge=p;ge==="button"&&(nt.href||nt.to)&&(ge=C);const Qe={};ge==="button"?(Qe.type=q===void 0?"button":q,Qe.disabled=g):(!nt.href&&!nt.to&&(Qe.role="button"),g&&(Qe["aria-disabled"]=g));const _n=br(n,at),Hn={...i,centerRipple:l,component:p,disabled:g,disableRipple:y,disableTouchRipple:x,focusRipple:_,tabIndex:k,focusVisible:tt},Ae=b3(Hn);return v.jsxs(x3,{as:ge,className:Et(Ae.root,f),ownerState:Hn,onBlur:le,onClick:P,onContextMenu:jt,onFocus:Sn,onKeyDown:kn,onKeyUp:xr,onMouseDown:bt,onMouseLeave:Wt,onMouseUp:Ce,onDragLeave:_t,onTouchEnd:Nt,onTouchMove:Qt,onTouchStart:dn,ref:_n,tabIndex:g?-1:k,type:q,...Qe,...nt,children:[u,dt?v.jsx(m3,{ref:U,center:l,...ft}):null]})});function oa(e,t,n,i=!1){return la(o=>(n&&n(o),i||e[t](o),!0))}function S3(e){return typeof e.main=="string"}function _3(e,t=[]){if(!S3(e))return!1;for(const n of t)if(!e.hasOwnProperty(n)||typeof e[n]!="string")return!1;return!0}function nr(e=[]){return([,t])=>t&&_3(t,e)}function E3(e){return oe("MuiCircularProgress",e)}ie("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const Ga=44,Pm=Mu`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,jm=Mu`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,T3=typeof Pm!="string"?Ey`
        animation: ${Pm} 1.4s linear infinite;
      `:null,w3=typeof jm!="string"?Ey`
        animation: ${jm} 1.4s ease-in-out infinite;
      `:null,C3=e=>{const{classes:t,variant:n,color:i,disableShrink:o}=e,l={root:["root",n,`color${gt(i)}`],svg:["svg"],circle:["circle",`circle${gt(n)}`,o&&"circleDisableShrink"]};return he(l,E3,t)},A3=Ct("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`color${gt(n.color)}`]]}})(je(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:T3||{animation:`${Pm} 1.4s linear infinite`}},...Object.entries(e.palette).filter(nr()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),R3=Ct("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),I3=Ct("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.circle,t[`circle${gt(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(je(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink,style:w3||{animation:`${jm} 1.4s ease-in-out infinite`}}]}))),Vy=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiCircularProgress"}),{className:o,color:l="primary",disableShrink:u=!1,size:f=40,style:p,thickness:g=3.6,value:y=0,variant:x="indeterminate",..._}=i,w={...i,color:l,disableShrink:u,size:f,thickness:g,value:y,variant:x},C=C3(w),R={},P={},V={};if(x==="determinate"){const F=2*Math.PI*((Ga-g)/2);R.strokeDasharray=F.toFixed(3),V["aria-valuenow"]=Math.round(y),R.strokeDashoffset=`${((100-y)/100*F).toFixed(3)}px`,P.transform="rotate(-90deg)"}return v.jsx(A3,{className:Et(C.root,o),style:{width:f,height:f,...P,...p},ownerState:w,ref:n,role:"progressbar",...V,..._,children:v.jsx(R3,{className:C.svg,ownerState:w,viewBox:`${Ga/2} ${Ga/2} ${Ga} ${Ga}`,children:v.jsx(I3,{className:C.circle,style:R,ownerState:w,cx:Ga,cy:Ga,r:(Ga-g)/2,fill:"none",strokeWidth:g})})})});function M3(e){return oe("MuiIconButton",e)}const Mx=ie("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),O3=e=>{const{classes:t,disabled:n,color:i,edge:o,size:l,loading:u}=e,f={root:["root",u&&"loading",n&&"disabled",i!=="default"&&`color${gt(i)}`,o&&`edge${gt(o)}`,`size${gt(l)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return he(f,M3,t)},D3=Ct(no,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.loading&&t.loading,n.color!=="default"&&t[`color${gt(n.color)}`],n.edge&&t[`edge${gt(n.edge)}`],t[`size${gt(n.size)}`]]}})(je(({theme:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),variants:[{props:t=>!t.disableRipple,style:{"--IconButton-hoverBg":e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Zt(e.palette.action.active,e.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),je(({theme:e})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(e.palette).filter(nr()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(e.palette).filter(nr()).map(([t])=>({props:{color:t},style:{"--IconButton-hoverBg":e.vars?`rgba(${(e.vars||e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Zt((e.vars||e).palette[t].main,e.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${Mx.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled},[`&.${Mx.loading}`]:{color:"transparent"}}))),N3=Ct("span",{name:"MuiIconButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>t.loadingIndicator})(({theme:e})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(e.vars||e).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),jr=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiIconButton"}),{edge:o=!1,children:l,className:u,color:f="default",disabled:p=!1,disableFocusRipple:g=!1,size:y="medium",id:x,loading:_=null,loadingIndicator:w,...C}=i,R=_E(x),P=w??v.jsx(Vy,{"aria-labelledby":R,color:"inherit",size:16}),V={...i,edge:o,color:f,disabled:p,disableFocusRipple:g,loading:_,loadingIndicator:P,size:y},F=O3(V);return v.jsxs(D3,{id:_?R:x,className:Et(F.root,u),centerRipple:!0,focusRipple:!g,disabled:p||_,ref:n,...C,ownerState:V,children:[typeof _=="boolean"&&v.jsx("span",{className:F.loadingWrapper,style:{display:"contents"},children:v.jsx(N3,{className:F.loadingIndicator,ownerState:V,children:_&&P})}),l]})});function k3(e){return oe("MuiTypography",e)}ie("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const P3={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},j3=qI(),V3=e=>{const{align:t,gutterBottom:n,noWrap:i,paragraph:o,variant:l,classes:u}=e,f={root:["root",l,e.align!=="inherit"&&`align${gt(t)}`,n&&"gutterBottom",i&&"noWrap",o&&"paragraph"]};return he(f,k3,u)},z3=Ct("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${gt(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(je(({theme:e})=>{var t;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter(([n,i])=>n!=="inherit"&&i&&typeof i=="object").map(([n,i])=>({props:{variant:n},style:i})),...Object.entries(e.palette).filter(nr()).map(([n])=>({props:{color:n},style:{color:(e.vars||e).palette[n].main}})),...Object.entries(((t=e.palette)==null?void 0:t.text)||{}).filter(([,n])=>typeof n=="string").map(([n])=>({props:{color:`text${gt(n)}`},style:{color:(e.vars||e).palette.text[n]}})),{props:({ownerState:n})=>n.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:n})=>n.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:n})=>n.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:n})=>n.paragraph,style:{marginBottom:16}}]}})),Ox={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},wt=A.forwardRef(function(t,n){const{color:i,...o}=se({props:t,name:"MuiTypography"}),l=!P3[i],u=j3({...o,...l&&{color:i}}),{align:f="inherit",className:p,component:g,gutterBottom:y=!1,noWrap:x=!1,paragraph:_=!1,variant:w="body1",variantMapping:C=Ox,...R}=u,P={...u,align:f,color:i,className:p,component:g,gutterBottom:y,noWrap:x,paragraph:_,variant:w,variantMapping:C},V=g||(_?"p":C[w]||Ox[w])||"span",F=V3(P);return v.jsx(z3,{as:V,ref:n,className:Et(F.root,p),...R,ownerState:P,style:{...f!=="inherit"&&{"--Typography-textAlign":f},...R.style}})});function L3(e){return oe("MuiAppBar",e)}ie("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const B3=e=>{const{color:t,position:n,classes:i}=e,o={root:["root",`color${gt(t)}`,`position${gt(n)}`]};return he(o,L3,i)},Dx=(e,t)=>e?`${e==null?void 0:e.replace(")","")}, ${t})`:t,U3=Ct(us,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${gt(n.position)}`],t[`color${gt(n.color)}`]]}})(je(({theme:e})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":e.vars?e.vars.palette.AppBar.defaultBg:e.palette.grey[100],"--AppBar-color":e.vars?e.vars.palette.text.primary:e.palette.getContrastText(e.palette.grey[100]),...e.applyStyles("dark",{"--AppBar-background":e.vars?e.vars.palette.AppBar.defaultBg:e.palette.grey[900],"--AppBar-color":e.vars?e.vars.palette.text.primary:e.palette.getContrastText(e.palette.grey[900])})}},...Object.entries(e.palette).filter(nr(["contrastText"])).map(([t])=>({props:{color:t},style:{"--AppBar-background":(e.vars??e).palette[t].main,"--AppBar-color":(e.vars??e).palette[t].contrastText}})),{props:t=>t.enableColorOnDark===!0&&!["inherit","transparent"].includes(t.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:t=>t.enableColorOnDark===!1&&!["inherit","transparent"].includes(t.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...e.applyStyles("dark",{backgroundColor:e.vars?Dx(e.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:e.vars?Dx(e.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...e.applyStyles("dark",{backgroundImage:"none"})}}]}))),$3=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiAppBar"}),{className:o,color:l="primary",enableColorOnDark:u=!1,position:f="fixed",...p}=i,g={...i,color:l,position:f,enableColorOnDark:u},y=B3(g);return v.jsx(U3,{square:!0,component:"header",ownerState:g,elevation:4,className:Et(y.root,o,f==="fixed"&&"mui-fixed"),ref:n,...p})});function H3(e){return typeof e=="function"?e():e}const F3=A.forwardRef(function(t,n){const{children:i,container:o,disablePortal:l=!1}=t,[u,f]=A.useState(null),p=br(A.isValidElement(i)?Pu(i):null,n);if(rs(()=>{l||f(H3(o)||document.body)},[o,l]),rs(()=>{if(u&&!l)return gx(n,u),()=>{gx(n,null)}},[n,u,l]),l){if(A.isValidElement(i)){const g={ref:p};return A.cloneElement(i,g)}return i}return u&&F_.createPortal(i,u)}),q3=pe(v.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}));function G3(e){return oe("MuiChip",e)}const Kt=ie("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),K3=e=>{const{classes:t,disabled:n,size:i,color:o,iconColor:l,onDelete:u,clickable:f,variant:p}=e,g={root:["root",p,n&&"disabled",`size${gt(i)}`,`color${gt(o)}`,f&&"clickable",f&&`clickableColor${gt(o)}`,u&&"deletable",u&&`deletableColor${gt(o)}`,`${p}${gt(o)}`],label:["label",`label${gt(i)}`],avatar:["avatar",`avatar${gt(i)}`,`avatarColor${gt(o)}`],icon:["icon",`icon${gt(i)}`,`iconColor${gt(l)}`],deleteIcon:["deleteIcon",`deleteIcon${gt(i)}`,`deleteIconColor${gt(o)}`,`deleteIcon${gt(p)}Color${gt(o)}`]};return he(g,G3,t)},Y3=Ct("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{color:i,iconColor:o,clickable:l,onDelete:u,size:f,variant:p}=n;return[{[`& .${Kt.avatar}`]:t.avatar},{[`& .${Kt.avatar}`]:t[`avatar${gt(f)}`]},{[`& .${Kt.avatar}`]:t[`avatarColor${gt(i)}`]},{[`& .${Kt.icon}`]:t.icon},{[`& .${Kt.icon}`]:t[`icon${gt(f)}`]},{[`& .${Kt.icon}`]:t[`iconColor${gt(o)}`]},{[`& .${Kt.deleteIcon}`]:t.deleteIcon},{[`& .${Kt.deleteIcon}`]:t[`deleteIcon${gt(f)}`]},{[`& .${Kt.deleteIcon}`]:t[`deleteIconColor${gt(i)}`]},{[`& .${Kt.deleteIcon}`]:t[`deleteIcon${gt(p)}Color${gt(i)}`]},t.root,t[`size${gt(f)}`],t[`color${gt(i)}`],l&&t.clickable,l&&i!=="default"&&t[`clickableColor${gt(i)})`],u&&t.deletable,u&&i!=="default"&&t[`deletableColor${gt(i)}`],t[p],t[`${p}${gt(i)}`]]}})(je(({theme:e})=>{const t=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return{maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${Kt.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${Kt.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:t,fontSize:e.typography.pxToRem(12)},[`& .${Kt.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${Kt.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${Kt.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${Kt.icon}`]:{marginLeft:5,marginRight:-6},[`& .${Kt.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:Zt(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:Zt(e.palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${Kt.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${Kt.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(e.palette).filter(nr(["contrastText"])).map(([n])=>({props:{color:n},style:{backgroundColor:(e.vars||e).palette[n].main,color:(e.vars||e).palette[n].contrastText,[`& .${Kt.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)`:Zt(e.palette[n].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[n].contrastText}}}})),{props:n=>n.iconColor===n.color,style:{[`& .${Kt.icon}`]:{color:e.vars?e.vars.palette.Chip.defaultIconColor:t}}},{props:n=>n.iconColor===n.color&&n.color!=="default",style:{[`& .${Kt.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${Kt.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Zt(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}},...Object.entries(e.palette).filter(nr(["dark"])).map(([n])=>({props:{color:n,onDelete:!0},style:{[`&.${Kt.focusVisible}`]:{background:(e.vars||e).palette[n].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Zt(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${Kt.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Zt(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}}},...Object.entries(e.palette).filter(nr(["dark"])).map(([n])=>({props:{color:n,clickable:!0},style:{[`&:hover, &.${Kt.focusVisible}`]:{backgroundColor:(e.vars||e).palette[n].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${Kt.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${Kt.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${Kt.avatar}`]:{marginLeft:4},[`& .${Kt.avatarSmall}`]:{marginLeft:2},[`& .${Kt.icon}`]:{marginLeft:4},[`& .${Kt.iconSmall}`]:{marginLeft:2},[`& .${Kt.deleteIcon}`]:{marginRight:5},[`& .${Kt.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(e.palette).filter(nr()).map(([n])=>({props:{variant:"outlined",color:n},style:{color:(e.vars||e).palette[n].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[n].mainChannel} / 0.7)`:Zt(e.palette[n].main,.7)}`,[`&.${Kt.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Zt(e.palette[n].main,e.palette.action.hoverOpacity)},[`&.${Kt.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})`:Zt(e.palette[n].main,e.palette.action.focusOpacity)},[`& .${Kt.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[n].mainChannel} / 0.7)`:Zt(e.palette[n].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[n].main}}}}))]}})),W3=Ct("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:n}=e,{size:i}=n;return[t.label,t[`label${gt(i)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function Nx(e){return e.key==="Backspace"||e.key==="Delete"}const BE=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiChip"}),{avatar:o,className:l,clickable:u,color:f="default",component:p,deleteIcon:g,disabled:y=!1,icon:x,label:_,onClick:w,onDelete:C,onKeyDown:R,onKeyUp:P,size:V="medium",variant:F="filled",tabIndex:z,skipFocusWhenDisabled:$=!1,...B}=i,X=A.useRef(null),D=br(X,n),M=it=>{it.stopPropagation(),C&&C(it)},O=it=>{it.currentTarget===it.target&&Nx(it)&&it.preventDefault(),R&&R(it)},S=it=>{it.currentTarget===it.target&&C&&Nx(it)&&C(it),P&&P(it)},j=u!==!1&&w?!0:u,L=j||C?no:p||"div",k={...i,component:L,disabled:y,size:V,color:f,iconColor:A.isValidElement(x)&&x.props.color||f,onDelete:!!C,clickable:j,variant:F},ft=K3(k),lt=L===no?{component:p||"div",focusVisibleClassName:ft.focusVisible,...C&&{disableRipple:!0}}:{};let q=null;C&&(q=g&&A.isValidElement(g)?A.cloneElement(g,{className:Et(g.props.className,ft.deleteIcon),onClick:M}):v.jsx(q3,{className:Et(ft.deleteIcon),onClick:M}));let nt=null;o&&A.isValidElement(o)&&(nt=A.cloneElement(o,{className:Et(ft.avatar,o.props.className)}));let at=null;return x&&A.isValidElement(x)&&(at=A.cloneElement(x,{className:Et(ft.icon,x.props.className)})),v.jsxs(Y3,{as:L,className:Et(ft.root,l),disabled:j&&y?!0:void 0,onClick:w,onKeyDown:O,onKeyUp:S,ref:D,tabIndex:$&&y?-1:z,ownerState:k,...lt,...B,children:[nt||at,v.jsx(W3,{className:Et(ft.label),ownerState:k,children:_}),q]})});function Q3(e){return typeof e=="string"}const X3=pe(v.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function Z3(e){return oe("MuiAvatar",e)}ie("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const J3=e=>{const{classes:t,variant:n,colorDefault:i}=e;return he({root:["root",n,i&&"colorDefault"],img:["img"],fallback:["fallback"]},Z3,t)},tM=Ct("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})(je(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),eM=Ct("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),nM=Ct(X3,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function rM({crossOrigin:e,referrerPolicy:t,src:n,srcSet:i}){const[o,l]=A.useState(!1);return A.useEffect(()=>{if(!n&&!i)return;l(!1);let u=!0;const f=new Image;return f.onload=()=>{u&&l("loaded")},f.onerror=()=>{u&&l("error")},f.crossOrigin=e,f.referrerPolicy=t,f.src=n,i&&(f.srcset=i),()=>{u=!1}},[e,t,n,i]),o}const kx=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiAvatar"}),{alt:o,children:l,className:u,component:f="div",slots:p={},slotProps:g={},imgProps:y,sizes:x,src:_,srcSet:w,variant:C="circular",...R}=i;let P=null;const V={...i,component:f,variant:C},F=rM({...y,...typeof g.img=="function"?g.img(V):g.img,src:_,srcSet:w}),z=_||w,$=z&&F!=="error";V.colorDefault=!$,delete V.ownerState;const B=J3(V),[X,D]=nn("img",{className:B.img,elementType:eM,externalForwardedProps:{slots:p,slotProps:{img:{...y,...g.img}}},additionalProps:{alt:o,src:_,srcSet:w,sizes:x},ownerState:V});return $?P=v.jsx(X,{...D}):l||l===0?P=l:z&&o?P=o[0]:P=v.jsx(nM,{ownerState:V,className:B.fallback}),v.jsx(tM,{as:f,className:Et(B.root,u),ref:n,...R,ownerState:V,children:P})}),iM={entering:{opacity:1},entered:{opacity:1}},aM=A.forwardRef(function(t,n){const i=Zr(),o={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{addEndListener:l,appear:u=!0,children:f,easing:p,in:g,onEnter:y,onEntered:x,onEntering:_,onExit:w,onExited:C,onExiting:R,style:P,timeout:V=o,TransitionComponent:F=Jr,...z}=t,$=A.useRef(null),B=br($,Pu(f),n),X=ft=>lt=>{if(ft){const q=$.current;lt===void 0?ft(q):ft(q,lt)}},D=X(_),M=X((ft,lt)=>{jy(ft);const q=Cl({style:P,timeout:V,easing:p},{mode:"enter"});ft.style.webkitTransition=i.transitions.create("opacity",q),ft.style.transition=i.transitions.create("opacity",q),y&&y(ft,lt)}),O=X(x),S=X(R),j=X(ft=>{const lt=Cl({style:P,timeout:V,easing:p},{mode:"exit"});ft.style.webkitTransition=i.transitions.create("opacity",lt),ft.style.transition=i.transitions.create("opacity",lt),w&&w(ft)}),L=X(C),k=ft=>{l&&l($.current,ft)};return v.jsx(F,{appear:u,in:g,nodeRef:$,onEnter:M,onEntered:O,onEntering:D,onExit:j,onExited:L,onExiting:S,addEndListener:k,timeout:V,...z,children:(ft,{ownerState:lt,...q})=>A.cloneElement(f,{style:{opacity:0,visibility:ft==="exited"&&!g?"hidden":void 0,...iM[ft],...P,...f.props.style},ref:B,...q})})});function oM(e){return oe("MuiBackdrop",e)}ie("MuiBackdrop",["root","invisible"]);const sM=e=>{const{classes:t,invisible:n}=e;return he({root:["root",n&&"invisible"]},oM,t)},lM=Ct("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),cM=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiBackdrop"}),{children:o,className:l,component:u="div",invisible:f=!1,open:p,components:g={},componentsProps:y={},slotProps:x={},slots:_={},TransitionComponent:w,transitionDuration:C,...R}=i,P={...i,component:u,invisible:f},V=sM(P),F={transition:w,root:g.Root,..._},z={...y,...x},$={slots:F,slotProps:z},[B,X]=nn("root",{elementType:lM,externalForwardedProps:$,className:Et(V.root,l),ownerState:P}),[D,M]=nn("transition",{elementType:aM,externalForwardedProps:$,ownerState:P});return v.jsx(D,{in:p,timeout:C,...R,...M,children:v.jsx(B,{"aria-hidden":!0,...X,classes:V,ref:n,children:o})})});function uM(e){const{badgeContent:t,invisible:n=!1,max:i=99,showZero:o=!1}=e,l=CE({badgeContent:t,max:i});let u=n;n===!1&&t===0&&!o&&(u=!0);const{badgeContent:f,max:p=i}=u?l:e,g=f&&Number(f)>p?`${p}+`:f;return{badgeContent:f,invisible:u,max:p,displayValue:g}}function dM(e){return oe("MuiBadge",e)}const Ka=ie("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),rm=10,im=4,fM=e=>{const{color:t,anchorOrigin:n,invisible:i,overlap:o,variant:l,classes:u={}}=e,f={root:["root"],badge:["badge",l,i&&"invisible",`anchorOrigin${gt(n.vertical)}${gt(n.horizontal)}`,`anchorOrigin${gt(n.vertical)}${gt(n.horizontal)}${gt(o)}`,`overlap${gt(o)}`,t!=="default"&&`color${gt(t)}`]};return he(f,dM,u)},hM=Ct("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),pM=Ct("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.badge,t[n.variant],t[`anchorOrigin${gt(n.anchorOrigin.vertical)}${gt(n.anchorOrigin.horizontal)}${gt(n.overlap)}`],n.color!=="default"&&t[`color${gt(n.color)}`],n.invisible&&t.invisible]}})(je(({theme:e})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:rm*2,lineHeight:1,padding:"0 6px",height:rm*2,borderRadius:rm,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen}),variants:[...Object.entries(e.palette).filter(nr(["contrastText"])).map(([t])=>({props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main,color:(e.vars||e).palette[t].contrastText}})),{props:{variant:"dot"},style:{borderRadius:im,height:im*2,minWidth:im*2,padding:0}},{props:({ownerState:t})=>t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="rectangular",style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${Ka.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:t})=>t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="rectangular",style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${Ka.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:t})=>t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="rectangular",style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${Ka.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:t})=>t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="rectangular",style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${Ka.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:t})=>t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="circular",style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${Ka.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:t})=>t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="circular",style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${Ka.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:t})=>t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="circular",style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${Ka.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:t})=>t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="circular",style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${Ka.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}]})));function Px(e){return{vertical:(e==null?void 0:e.vertical)??"top",horizontal:(e==null?void 0:e.horizontal)??"right"}}const gM=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiBadge"}),{anchorOrigin:o,className:l,classes:u,component:f,components:p={},componentsProps:g={},children:y,overlap:x="rectangular",color:_="default",invisible:w=!1,max:C=99,badgeContent:R,slots:P,slotProps:V,showZero:F=!1,variant:z="standard",...$}=i,{badgeContent:B,invisible:X,max:D,displayValue:M}=uM({max:C,invisible:w,badgeContent:R,showZero:F}),O=CE({anchorOrigin:Px(o),color:_,overlap:x,variant:z,badgeContent:R}),S=X||B==null&&z!=="dot",{color:j=_,overlap:L=x,anchorOrigin:k,variant:ft=z}=S?O:i,lt=Px(k),q=ft!=="dot"?M:void 0,nt={...i,badgeContent:B,invisible:S,max:D,displayValue:q,showZero:F,anchorOrigin:lt,color:j,overlap:L,variant:ft},at=fM(nt),it=(P==null?void 0:P.root)??p.Root??hM,U=(P==null?void 0:P.badge)??p.Badge??pM,tt=(V==null?void 0:V.root)??g.root,ht=(V==null?void 0:V.badge)??g.badge,dt=is({elementType:it,externalSlotProps:tt,externalForwardedProps:$,additionalProps:{ref:n,as:f},ownerState:nt,className:Et(tt==null?void 0:tt.className,at.root,l)}),bt=is({elementType:U,externalSlotProps:ht,ownerState:nt,className:Et(at.badge,ht==null?void 0:ht.className)});return v.jsxs(it,{...dt,children:[y,v.jsx(U,{...bt,children:q})]})}),mM=ie("MuiBox",["root"]),yM=jE(),$t=h5({themeId:fh,defaultTheme:yM,defaultClassName:mM.root,generateClassName:dE.generate});function vM(e){return oe("MuiButton",e)}const Go=ie("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge","loading","loadingWrapper","loadingIconPlaceholder","loadingIndicator","loadingPositionCenter","loadingPositionStart","loadingPositionEnd"]),bM=A.createContext({}),xM=A.createContext(void 0),SM=e=>{const{color:t,disableElevation:n,fullWidth:i,size:o,variant:l,loading:u,loadingPosition:f,classes:p}=e,g={root:["root",u&&"loading",l,`${l}${gt(t)}`,`size${gt(o)}`,`${l}Size${gt(o)}`,`color${gt(t)}`,n&&"disableElevation",i&&"fullWidth",u&&`loadingPosition${gt(f)}`],startIcon:["icon","startIcon",`iconSize${gt(o)}`],endIcon:["icon","endIcon",`iconSize${gt(o)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]},y=he(g,vM,p);return{...p,...y}},UE=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],_M=Ct(no,{shouldForwardProp:e=>Rh(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${gt(n.color)}`],t[`size${gt(n.size)}`],t[`${n.variant}Size${gt(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth,n.loading&&t.loading]}})(je(({theme:e})=>{const t=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],n=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return{...e.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${Go.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(e.vars||e).shadows[2],"&:hover":{boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2]}},"&:active":{boxShadow:(e.vars||e).shadows[8]},[`&.${Go.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},[`&.${Go.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${Go.disabled}`]:{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(e.palette).filter(nr()).map(([i])=>({props:{color:i},style:{"--variant-textColor":(e.vars||e).palette[i].main,"--variant-outlinedColor":(e.vars||e).palette[i].main,"--variant-outlinedBorder":e.vars?`rgba(${e.vars.palette[i].mainChannel} / 0.5)`:Zt(e.palette[i].main,.5),"--variant-containedColor":(e.vars||e).palette[i].contrastText,"--variant-containedBg":(e.vars||e).palette[i].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(e.vars||e).palette[i].dark,"--variant-textBg":e.vars?`rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Zt(e.palette[i].main,e.palette.action.hoverOpacity),"--variant-outlinedBorder":(e.vars||e).palette[i].main,"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Zt(e.palette[i].main,e.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedHoverBg:n,"--variant-textBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:Zt(e.palette.text.primary,e.palette.action.hoverOpacity),"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:Zt(e.palette.text.primary,e.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Go.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Go.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{loadingPosition:"center"},style:{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${Go.loading}`]:{color:"transparent"}}}]}})),EM=Ct("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,n.loading&&t.startIconLoadingStart,t[`iconSize${gt(n.size)}`]]}})(({theme:e})=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},{props:{loadingPosition:"start",loading:!0},style:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"start",loading:!0,fullWidth:!0},style:{marginRight:-8}},...UE]})),TM=Ct("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,n.loading&&t.endIconLoadingEnd,t[`iconSize${gt(n.size)}`]]}})(({theme:e})=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},{props:{loadingPosition:"end",loading:!0},style:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"end",loading:!0,fullWidth:!0},style:{marginLeft:-8}},...UE]})),wM=Ct("span",{name:"MuiButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>t.loadingIndicator})(({theme:e})=>({display:"none",position:"absolute",visibility:"visible",variants:[{props:{loading:!0},style:{display:"flex"}},{props:{loadingPosition:"start"},style:{left:14}},{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled}},{props:{loadingPosition:"end"},style:{right:14}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:{loadingPosition:"start",fullWidth:!0},style:{position:"relative",left:-10}},{props:{loadingPosition:"end",fullWidth:!0},style:{position:"relative",right:-10}}]})),jx=Ct("span",{name:"MuiButton",slot:"LoadingIconPlaceholder",overridesResolver:(e,t)=>t.loadingIconPlaceholder})({display:"inline-block",width:"1em",height:"1em"}),Qo=A.forwardRef(function(t,n){const i=A.useContext(bM),o=A.useContext(xM),l=gu(i,t),u=se({props:l,name:"MuiButton"}),{children:f,color:p="primary",component:g="button",className:y,disabled:x=!1,disableElevation:_=!1,disableFocusRipple:w=!1,endIcon:C,focusVisibleClassName:R,fullWidth:P=!1,id:V,loading:F=null,loadingIndicator:z,loadingPosition:$="center",size:B="medium",startIcon:X,type:D,variant:M="text",...O}=u,S=_E(V),j=z??v.jsx(Vy,{"aria-labelledby":S,color:"inherit",size:16}),L={...u,color:p,component:g,disabled:x,disableElevation:_,disableFocusRipple:w,fullWidth:P,loading:F,loadingIndicator:j,loadingPosition:$,size:B,type:D,variant:M},k=SM(L),ft=(X||F&&$==="start")&&v.jsx(EM,{className:k.startIcon,ownerState:L,children:X||v.jsx(jx,{className:k.loadingIconPlaceholder,ownerState:L})}),lt=(C||F&&$==="end")&&v.jsx(TM,{className:k.endIcon,ownerState:L,children:C||v.jsx(jx,{className:k.loadingIconPlaceholder,ownerState:L})}),q=o||"",nt=typeof F=="boolean"?v.jsx("span",{className:k.loadingWrapper,style:{display:"contents"},children:F&&v.jsx(wM,{className:k.loadingIndicator,ownerState:L,children:j})}):null;return v.jsxs(_M,{ownerState:L,className:Et(i.className,k.root,y,q),component:g,disabled:x||F,focusRipple:!w,focusVisibleClassName:Et(k.focusVisible,R),ref:n,type:D,id:F?S:V,...O,classes:k,children:[ft,$!=="end"&&nt,f,$==="end"&&nt,lt]})});function CM(e){return oe("MuiCard",e)}ie("MuiCard",["root"]);const AM=e=>{const{classes:t}=e;return he({root:["root"]},CM,t)},RM=Ct(us,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})({overflow:"hidden"}),Vm=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiCard"}),{className:o,raised:l=!1,...u}=i,f={...i,raised:l},p=AM(f);return v.jsx(RM,{className:Et(p.root,o),elevation:l?8:void 0,ref:n,ownerState:f,...u})});function IM(e){return oe("MuiCardActions",e)}ie("MuiCardActions",["root","spacing"]);const MM=e=>{const{classes:t,disableSpacing:n}=e;return he({root:["root",!n&&"spacing"]},IM,t)},OM=Ct("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Vx=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiCardActions"}),{disableSpacing:o=!1,className:l,...u}=i,f={...i,disableSpacing:o},p=MM(f);return v.jsx(OM,{className:Et(p.root,l),ownerState:f,ref:n,...u})});function DM(e){return oe("MuiCardContent",e)}ie("MuiCardContent",["root"]);const NM=e=>{const{classes:t}=e;return he({root:["root"]},DM,t)},kM=Ct("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:16,"&:last-child":{paddingBottom:24}}),zm=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiCardContent"}),{className:o,component:l="div",...u}=i,f={...i,component:l},p=NM(f);return v.jsx(kM,{as:l,className:Et(p.root,o),ownerState:f,ref:n,...u})});function PM(e){return oe("MuiCardMedia",e)}ie("MuiCardMedia",["root","media","img"]);const jM=e=>{const{classes:t,isMediaComponent:n,isImageComponent:i}=e;return he({root:["root",n&&"media",i&&"img"]},PM,t)},VM=Ct("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{isMediaComponent:i,isImageComponent:o}=n;return[t.root,i&&t.media,o&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),zM=["video","audio","picture","iframe","img"],LM=["picture","img"],Lm=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiCardMedia"}),{children:o,className:l,component:u="div",image:f,src:p,style:g,...y}=i,x=zM.includes(u),_=!x&&f?{backgroundImage:`url("${f}")`,...g}:g,w={...i,component:u,isMediaComponent:x,isImageComponent:LM.includes(u)},C=jM(w);return v.jsx(VM,{className:Et(C.root,l),as:u,role:!x&&f?"img":void 0,ref:n,style:_,ownerState:w,src:x?f||p:void 0,...y,children:o})}),mu=X5({createStyledComponent:Ct("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${gt(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>se({props:e,name:"MuiContainer"})});function BM(e){const t=Wr(e);return t.body===e?Qr(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function iu(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function zx(e){return parseInt(Qr(e).getComputedStyle(e).paddingRight,10)||0}function UM(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(e.tagName),i=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||i}function Lx(e,t,n,i,o){const l=[t,n,...i];[].forEach.call(e.children,u=>{const f=!l.includes(u),p=!UM(u);f&&p&&iu(u,o)})}function am(e,t){let n=-1;return e.some((i,o)=>t(i)?(n=o,!0):!1),n}function $M(e,t){const n=[],i=e.container;if(!t.disableScrollLock){if(BM(i)){const u=wE(Qr(i));n.push({value:i.style.paddingRight,property:"padding-right",el:i}),i.style.paddingRight=`${zx(i)+u}px`;const f=Wr(i).querySelectorAll(".mui-fixed");[].forEach.call(f,p=>{n.push({value:p.style.paddingRight,property:"padding-right",el:p}),p.style.paddingRight=`${zx(p)+u}px`})}let l;if(i.parentNode instanceof DocumentFragment)l=Wr(i).body;else{const u=i.parentElement,f=Qr(i);l=(u==null?void 0:u.nodeName)==="HTML"&&f.getComputedStyle(u).overflowY==="scroll"?u:i}n.push({value:l.style.overflow,property:"overflow",el:l},{value:l.style.overflowX,property:"overflow-x",el:l},{value:l.style.overflowY,property:"overflow-y",el:l}),l.style.overflow="hidden"}return()=>{n.forEach(({value:l,el:u,property:f})=>{l?u.style.setProperty(f,l):u.style.removeProperty(f)})}}function HM(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class FM{constructor(){this.modals=[],this.containers=[]}add(t,n){let i=this.modals.indexOf(t);if(i!==-1)return i;i=this.modals.length,this.modals.push(t),t.modalRef&&iu(t.modalRef,!1);const o=HM(n);Lx(n,t.mount,t.modalRef,o,!0);const l=am(this.containers,u=>u.container===n);return l!==-1?(this.containers[l].modals.push(t),i):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:o}),i)}mount(t,n){const i=am(this.containers,l=>l.modals.includes(t)),o=this.containers[i];o.restore||(o.restore=$M(o,n))}remove(t,n=!0){const i=this.modals.indexOf(t);if(i===-1)return i;const o=am(this.containers,u=>u.modals.includes(t)),l=this.containers[o];if(l.modals.splice(l.modals.indexOf(t),1),this.modals.splice(i,1),l.modals.length===0)l.restore&&l.restore(),t.modalRef&&iu(t.modalRef,n),Lx(l.container,t.mount,t.modalRef,l.hiddenSiblings,!1),this.containers.splice(o,1);else{const u=l.modals[l.modals.length-1];u.modalRef&&iu(u.modalRef,!1)}return i}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const qM=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function GM(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function KM(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=i=>e.ownerDocument.querySelector(`input[type="radio"]${i}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function YM(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||KM(e))}function WM(e){const t=[],n=[];return Array.from(e.querySelectorAll(qM)).forEach((i,o)=>{const l=GM(i);l===-1||!YM(i)||(l===0?t.push(i):n.push({documentOrder:o,tabIndex:l,node:i}))}),n.sort((i,o)=>i.tabIndex===o.tabIndex?i.documentOrder-o.documentOrder:i.tabIndex-o.tabIndex).map(i=>i.node).concat(t)}function QM(){return!0}function XM(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:i=!1,disableRestoreFocus:o=!1,getTabbable:l=WM,isEnabled:u=QM,open:f}=e,p=A.useRef(!1),g=A.useRef(null),y=A.useRef(null),x=A.useRef(null),_=A.useRef(null),w=A.useRef(!1),C=A.useRef(null),R=br(Pu(t),C),P=A.useRef(null);A.useEffect(()=>{!f||!C.current||(w.current=!n)},[n,f]),A.useEffect(()=>{if(!f||!C.current)return;const z=Wr(C.current);return C.current.contains(z.activeElement)||(C.current.hasAttribute("tabIndex")||C.current.setAttribute("tabIndex","-1"),w.current&&C.current.focus()),()=>{o||(x.current&&x.current.focus&&(p.current=!0,x.current.focus()),x.current=null)}},[f]),A.useEffect(()=>{if(!f||!C.current)return;const z=Wr(C.current),$=D=>{P.current=D,!(i||!u()||D.key!=="Tab")&&z.activeElement===C.current&&D.shiftKey&&(p.current=!0,y.current&&y.current.focus())},B=()=>{var O,S;const D=C.current;if(D===null)return;if(!z.hasFocus()||!u()||p.current){p.current=!1;return}if(D.contains(z.activeElement)||i&&z.activeElement!==g.current&&z.activeElement!==y.current)return;if(z.activeElement!==_.current)_.current=null;else if(_.current!==null)return;if(!w.current)return;let M=[];if((z.activeElement===g.current||z.activeElement===y.current)&&(M=l(C.current)),M.length>0){const j=!!((O=P.current)!=null&&O.shiftKey&&((S=P.current)==null?void 0:S.key)==="Tab"),L=M[0],k=M[M.length-1];typeof L!="string"&&typeof k!="string"&&(j?k.focus():L.focus())}else D.focus()};z.addEventListener("focusin",B),z.addEventListener("keydown",$,!0);const X=setInterval(()=>{z.activeElement&&z.activeElement.tagName==="BODY"&&B()},50);return()=>{clearInterval(X),z.removeEventListener("focusin",B),z.removeEventListener("keydown",$,!0)}},[n,i,o,u,f,l]);const V=z=>{x.current===null&&(x.current=z.relatedTarget),w.current=!0,_.current=z.target;const $=t.props.onFocus;$&&$(z)},F=z=>{x.current===null&&(x.current=z.relatedTarget),w.current=!0};return v.jsxs(A.Fragment,{children:[v.jsx("div",{tabIndex:f?0:-1,onFocus:F,ref:g,"data-testid":"sentinelStart"}),A.cloneElement(t,{ref:R,onFocus:V}),v.jsx("div",{tabIndex:f?0:-1,onFocus:F,ref:y,"data-testid":"sentinelEnd"})]})}function ZM(e){return typeof e=="function"?e():e}function JM(e){return e?e.props.hasOwnProperty("in"):!1}const Bx=()=>{},ff=new FM;function t6(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:i=!1,closeAfterTransition:o=!1,onTransitionEnter:l,onTransitionExited:u,children:f,onClose:p,open:g,rootRef:y}=e,x=A.useRef({}),_=A.useRef(null),w=A.useRef(null),C=br(w,y),[R,P]=A.useState(!g),V=JM(f);let F=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(F=!1);const z=()=>Wr(_.current),$=()=>(x.current.modalRef=w.current,x.current.mount=_.current,x.current),B=()=>{ff.mount($(),{disableScrollLock:i}),w.current&&(w.current.scrollTop=0)},X=la(()=>{const lt=ZM(t)||z().body;ff.add($(),lt),w.current&&B()}),D=()=>ff.isTopModal($()),M=la(lt=>{_.current=lt,lt&&(g&&D()?B():w.current&&iu(w.current,F))}),O=A.useCallback(()=>{ff.remove($(),F)},[F]);A.useEffect(()=>()=>{O()},[O]),A.useEffect(()=>{g?X():(!V||!o)&&O()},[g,O,V,o,X]);const S=lt=>q=>{var nt;(nt=lt.onKeyDown)==null||nt.call(lt,q),!(q.key!=="Escape"||q.which===229||!D())&&(n||(q.stopPropagation(),p&&p(q,"escapeKeyDown")))},j=lt=>q=>{var nt;(nt=lt.onClick)==null||nt.call(lt,q),q.target===q.currentTarget&&p&&p(q,"backdropClick")};return{getRootProps:(lt={})=>{const q=RE(e);delete q.onTransitionEnter,delete q.onTransitionExited;const nt={...q,...lt};return{role:"presentation",...nt,onKeyDown:S(nt),ref:C}},getBackdropProps:(lt={})=>{const q=lt;return{"aria-hidden":!0,...q,onClick:j(q),open:g}},getTransitionProps:()=>{const lt=()=>{P(!1),l&&l()},q=()=>{P(!0),u&&u(),o&&O()};return{onEnter:px(lt,(f==null?void 0:f.props.onEnter)??Bx),onExited:px(q,(f==null?void 0:f.props.onExited)??Bx)}},rootRef:C,portalRef:M,isTopModal:D,exited:R,hasTransition:V}}function e6(e){return oe("MuiModal",e)}ie("MuiModal",["root","hidden","backdrop"]);const n6=e=>{const{open:t,exited:n,classes:i}=e;return he({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},e6,i)},r6=Ct("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(je(({theme:e})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:t})=>!t.open&&t.exited,style:{visibility:"hidden"}}]}))),i6=Ct(cM,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),a6=A.forwardRef(function(t,n){const i=se({name:"MuiModal",props:t}),{BackdropComponent:o=i6,BackdropProps:l,classes:u,className:f,closeAfterTransition:p=!1,children:g,container:y,component:x,components:_={},componentsProps:w={},disableAutoFocus:C=!1,disableEnforceFocus:R=!1,disableEscapeKeyDown:P=!1,disablePortal:V=!1,disableRestoreFocus:F=!1,disableScrollLock:z=!1,hideBackdrop:$=!1,keepMounted:B=!1,onClose:X,onTransitionEnter:D,onTransitionExited:M,open:O,slotProps:S={},slots:j={},theme:L,...k}=i,ft={...i,closeAfterTransition:p,disableAutoFocus:C,disableEnforceFocus:R,disableEscapeKeyDown:P,disablePortal:V,disableRestoreFocus:F,disableScrollLock:z,hideBackdrop:$,keepMounted:B},{getRootProps:lt,getBackdropProps:q,getTransitionProps:nt,portalRef:at,isTopModal:it,exited:U,hasTransition:tt}=t6({...ft,rootRef:n}),ht={...ft,exited:U},dt=n6(ht),bt={};if(g.props.tabIndex===void 0&&(bt.tabIndex="-1"),tt){const{onEnter:Nt,onExited:Qt}=nt();bt.onEnter=Nt,bt.onExited=Qt}const jt={slots:{root:_.Root,backdrop:_.Backdrop,...j},slotProps:{...w,...S}},[_t,Ce]=nn("root",{ref:n,elementType:r6,externalForwardedProps:{...jt,...k,component:x},getSlotProps:lt,ownerState:ht,className:Et(f,dt==null?void 0:dt.root,!ht.open&&ht.exited&&(dt==null?void 0:dt.hidden))}),[Wt,dn]=nn("backdrop",{ref:l==null?void 0:l.ref,elementType:o,externalForwardedProps:jt,shouldForwardComponentProp:!0,additionalProps:l,getSlotProps:Nt=>q({...Nt,onClick:Qt=>{Nt!=null&&Nt.onClick&&Nt.onClick(Qt)}}),className:Et(l==null?void 0:l.className,dt==null?void 0:dt.backdrop),ownerState:ht});return!B&&!O&&(!tt||U)?null:v.jsx(F3,{ref:at,container:y,disablePortal:V,children:v.jsxs(_t,{...Ce,children:[!$&&o?v.jsx(Wt,{...dn}):null,v.jsx(XM,{disableEnforceFocus:R,disableAutoFocus:C,disableRestoreFocus:F,isEnabled:it,open:O,children:A.cloneElement(g,bt)})]})})});function o6(e){return oe("MuiDivider",e)}const Ux=ie("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),s6=e=>{const{absolute:t,children:n,classes:i,flexItem:o,light:l,orientation:u,textAlign:f,variant:p}=e;return he({root:["root",t&&"absolute",p,l&&"light",u==="vertical"&&"vertical",o&&"flexItem",n&&"withChildren",n&&u==="vertical"&&"withChildrenVertical",f==="right"&&u!=="vertical"&&"textAlignRight",f==="left"&&u!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",u==="vertical"&&"wrapperVertical"]},o6,i)},l6=Ct("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,n.orientation==="vertical"&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&n.orientation==="vertical"&&t.withChildrenVertical,n.textAlign==="right"&&n.orientation!=="vertical"&&t.textAlignRight,n.textAlign==="left"&&n.orientation!=="vertical"&&t.textAlignLeft]}})(je(({theme:e})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:Zt(e.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:t})=>!!t.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:t})=>t.children&&t.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:t})=>t.orientation==="vertical"&&t.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:t})=>t.textAlign==="right"&&t.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:t})=>t.textAlign==="left"&&t.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),c6=Ct("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,n.orientation==="vertical"&&t.wrapperVertical]}})(je(({theme:e})=>({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}}]}))),yu=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiDivider"}),{absolute:o=!1,children:l,className:u,orientation:f="horizontal",component:p=l||f==="vertical"?"div":"hr",flexItem:g=!1,light:y=!1,role:x=p!=="hr"?"separator":void 0,textAlign:_="center",variant:w="fullWidth",...C}=i,R={...i,absolute:o,component:p,flexItem:g,light:y,orientation:f,role:x,textAlign:_,variant:w},P=s6(R);return v.jsx(l6,{as:p,className:Et(P.root,u),role:x,ref:n,ownerState:R,"aria-orientation":x==="separator"&&(p!=="hr"||f==="vertical")?f:void 0,...C,children:l?v.jsx(c6,{className:P.wrapper,ownerState:R,children:l}):null})});yu&&(yu.muiSkipListHighlight=!0);function u6(e,t,n){const i=t.getBoundingClientRect(),o=n&&n.getBoundingClientRect(),l=Qr(t);let u;if(t.fakeTransform)u=t.fakeTransform;else{const g=l.getComputedStyle(t);u=g.getPropertyValue("-webkit-transform")||g.getPropertyValue("transform")}let f=0,p=0;if(u&&u!=="none"&&typeof u=="string"){const g=u.split("(")[1].split(")")[0].split(",");f=parseInt(g[4],10),p=parseInt(g[5],10)}return e==="left"?o?`translateX(${o.right+f-i.left}px)`:`translateX(${l.innerWidth+f-i.left}px)`:e==="right"?o?`translateX(-${i.right-o.left-f}px)`:`translateX(-${i.left+i.width-f}px)`:e==="up"?o?`translateY(${o.bottom+p-i.top}px)`:`translateY(${l.innerHeight+p-i.top}px)`:o?`translateY(-${i.top-o.top+i.height-p}px)`:`translateY(-${i.top+i.height-p}px)`}function d6(e){return typeof e=="function"?e():e}function hf(e,t,n){const i=d6(n),o=u6(e,t,i);o&&(t.style.webkitTransform=o,t.style.transform=o)}const f6=A.forwardRef(function(t,n){const i=Zr(),o={enter:i.transitions.easing.easeOut,exit:i.transitions.easing.sharp},l={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{addEndListener:u,appear:f=!0,children:p,container:g,direction:y="down",easing:x=o,in:_,onEnter:w,onEntered:C,onEntering:R,onExit:P,onExited:V,onExiting:F,style:z,timeout:$=l,TransitionComponent:B=Jr,...X}=t,D=A.useRef(null),M=br(Pu(p),D,n),O=at=>it=>{at&&(it===void 0?at(D.current):at(D.current,it))},S=O((at,it)=>{hf(y,at,g),jy(at),w&&w(at,it)}),j=O((at,it)=>{const U=Cl({timeout:$,style:z,easing:x},{mode:"enter"});at.style.webkitTransition=i.transitions.create("-webkit-transform",{...U}),at.style.transition=i.transitions.create("transform",{...U}),at.style.webkitTransform="none",at.style.transform="none",R&&R(at,it)}),L=O(C),k=O(F),ft=O(at=>{const it=Cl({timeout:$,style:z,easing:x},{mode:"exit"});at.style.webkitTransition=i.transitions.create("-webkit-transform",it),at.style.transition=i.transitions.create("transform",it),hf(y,at,g),P&&P(at)}),lt=O(at=>{at.style.webkitTransition="",at.style.transition="",V&&V(at)}),q=at=>{u&&u(D.current,at)},nt=A.useCallback(()=>{D.current&&hf(y,D.current,g)},[y,g]);return A.useEffect(()=>{if(_||y==="down"||y==="right")return;const at=wh(()=>{D.current&&hf(y,D.current,g)}),it=Qr(D.current);return it.addEventListener("resize",at),()=>{at.clear(),it.removeEventListener("resize",at)}},[y,_,g]),A.useEffect(()=>{_||nt()},[_,nt]),v.jsx(B,{nodeRef:D,onEnter:S,onEntered:L,onEntering:j,onExit:ft,onExited:lt,onExiting:k,addEndListener:q,appear:f,in:_,timeout:$,...X,children:(at,{ownerState:it,...U})=>A.cloneElement(p,{ref:M,style:{visibility:at==="exited"&&!_?"hidden":void 0,...z,...p.props.style},...U})})}),xn=hI({createStyledComponent:Ct("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.container&&t.container]}}),componentName:"MuiGrid",useThemeProps:e=>se({props:e,name:"MuiGrid"}),useTheme:Zr});function Bm(e){return`scale(${e}, ${e**2})`}const h6={entering:{opacity:1,transform:Bm(1)},entered:{opacity:1,transform:"none"}},om=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Um=A.forwardRef(function(t,n){const{addEndListener:i,appear:o=!0,children:l,easing:u,in:f,onEnter:p,onEntered:g,onEntering:y,onExit:x,onExited:_,onExiting:w,style:C,timeout:R="auto",TransitionComponent:P=Jr,...V}=t,F=TE(),z=A.useRef(),$=Zr(),B=A.useRef(null),X=br(B,Pu(l),n),D=lt=>q=>{if(lt){const nt=B.current;q===void 0?lt(nt):lt(nt,q)}},M=D(y),O=D((lt,q)=>{jy(lt);const{duration:nt,delay:at,easing:it}=Cl({style:C,timeout:R,easing:u},{mode:"enter"});let U;R==="auto"?(U=$.transitions.getAutoHeightDuration(lt.clientHeight),z.current=U):U=nt,lt.style.transition=[$.transitions.create("opacity",{duration:U,delay:at}),$.transitions.create("transform",{duration:om?U:U*.666,delay:at,easing:it})].join(","),p&&p(lt,q)}),S=D(g),j=D(w),L=D(lt=>{const{duration:q,delay:nt,easing:at}=Cl({style:C,timeout:R,easing:u},{mode:"exit"});let it;R==="auto"?(it=$.transitions.getAutoHeightDuration(lt.clientHeight),z.current=it):it=q,lt.style.transition=[$.transitions.create("opacity",{duration:it,delay:nt}),$.transitions.create("transform",{duration:om?it:it*.666,delay:om?nt:nt||it*.333,easing:at})].join(","),lt.style.opacity=0,lt.style.transform=Bm(.75),x&&x(lt)}),k=D(_),ft=lt=>{R==="auto"&&F.start(z.current||0,lt),i&&i(B.current,lt)};return v.jsx(P,{appear:o,in:f,nodeRef:B,onEnter:O,onEntered:S,onEntering:M,onExit:L,onExited:k,onExiting:j,addEndListener:ft,timeout:R==="auto"?null:R,...V,children:(lt,{ownerState:q,...nt})=>A.cloneElement(l,{style:{opacity:0,transform:Bm(.75),visibility:lt==="exited"&&!f?"hidden":void 0,...h6[lt],...C,...l.props.style},ref:X,...nt})})});Um&&(Um.muiSupportAuto=!0);function p6(e){return oe("MuiLink",e)}const g6=ie("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),m6=({theme:e,ownerState:t})=>{const n=t.color,i=Ya(e,`palette.${n}.main`,!1)||Ya(e,`palette.${n}`,!1)||t.color,o=Ya(e,`palette.${n}.mainChannel`)||Ya(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:Zt(i,.4)},$x={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},y6=e=>{const{classes:t,component:n,focusVisible:i,underline:o}=e,l={root:["root",`underline${gt(o)}`,n==="button"&&"button",i&&"focusVisible"]};return he(l,p6,t)},v6=Ct(wt,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${gt(n.underline)}`],n.component==="button"&&t.button]}})(je(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:t,ownerState:n})=>t==="always"&&n.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter(nr()).map(([t])=>({props:{underline:"always",color:t},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.4)`:Zt(e.palette[t].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:Zt(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:Zt(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g6.focusVisible}`]:{outline:"auto"}}}]}))),sm=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiLink"}),o=Zr(),{className:l,color:u="primary",component:f="a",onBlur:p,onFocus:g,TypographyClasses:y,underline:x="always",variant:_="inherit",sx:w,...C}=i,[R,P]=A.useState(!1),V=B=>{Uf(B.target)||P(!1),p&&p(B)},F=B=>{Uf(B.target)&&P(!0),g&&g(B)},z={...i,color:u,component:f,focusVisible:R,underline:x,variant:_},$=y6(z);return v.jsx(v6,{color:u,className:Et($.root,l),classes:y,component:f,onBlur:V,onFocus:F,ref:n,ownerState:z,variant:_,...C,sx:[...$x[u]===void 0?[{color:u}]:[],...Array.isArray(w)?w:[w]],style:{...C.style,...x==="always"&&u!=="inherit"&&!$x[u]&&{"--Link-underlineColor":m6({theme:o,ownerState:z})}}})}),$m=A.createContext({});function b6(e){return oe("MuiList",e)}ie("MuiList",["root","padding","dense","subheader"]);const x6=e=>{const{classes:t,disablePadding:n,dense:i,subheader:o}=e;return he({root:["root",!n&&"padding",i&&"dense",o&&"subheader"]},b6,t)},S6=Ct("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>e.subheader,style:{paddingTop:0}}]}),_6=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiList"}),{children:o,className:l,component:u="ul",dense:f=!1,disablePadding:p=!1,subheader:g,...y}=i,x=A.useMemo(()=>({dense:f}),[f]),_={...i,component:u,dense:f,disablePadding:p},w=x6(_);return v.jsx($m.Provider,{value:x,children:v.jsxs(S6,{as:u,className:Et(w.root,l),ref:n,ownerState:_,...y,children:[g,o]})})}),Hx=ie("MuiListItemIcon",["root","alignItemsFlexStart"]),Fx=ie("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function lm(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function qx(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function $E(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.startsWith(t.keys.join(""))}function Yc(e,t,n,i,o,l){let u=!1,f=o(e,t,t?n:!1);for(;f;){if(f===e.firstChild){if(u)return!1;u=!0}const p=i?!1:f.disabled||f.getAttribute("aria-disabled")==="true";if(!f.hasAttribute("tabindex")||!$E(f,l)||p)f=o(e,f,n);else return f.focus(),!0}return!1}const E6=A.forwardRef(function(t,n){const{actions:i,autoFocus:o=!1,autoFocusItem:l=!1,children:u,className:f,disabledItemsFocusable:p=!1,disableListWrap:g=!1,onKeyDown:y,variant:x="selectedMenu",..._}=t,w=A.useRef(null),C=A.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});rs(()=>{o&&w.current.focus()},[o]),A.useImperativeHandle(i,()=>({adjustStyleForScrollbar:(z,{direction:$})=>{const B=!w.current.style.width;if(z.clientHeight<w.current.clientHeight&&B){const X=`${wE(Qr(z))}px`;w.current.style[$==="rtl"?"paddingLeft":"paddingRight"]=X,w.current.style.width=`calc(100% + ${X})`}return w.current}}),[]);const R=z=>{const $=w.current,B=z.key;if(z.ctrlKey||z.metaKey||z.altKey){y&&y(z);return}const D=Wr($).activeElement;if(B==="ArrowDown")z.preventDefault(),Yc($,D,g,p,lm);else if(B==="ArrowUp")z.preventDefault(),Yc($,D,g,p,qx);else if(B==="Home")z.preventDefault(),Yc($,null,g,p,lm);else if(B==="End")z.preventDefault(),Yc($,null,g,p,qx);else if(B.length===1){const M=C.current,O=B.toLowerCase(),S=performance.now();M.keys.length>0&&(S-M.lastTime>500?(M.keys=[],M.repeating=!0,M.previousKeyMatched=!0):M.repeating&&O!==M.keys[0]&&(M.repeating=!1)),M.lastTime=S,M.keys.push(O);const j=D&&!M.repeating&&$E(D,M);M.previousKeyMatched&&(j||Yc($,D,!1,p,lm,M))?z.preventDefault():M.previousKeyMatched=!1}y&&y(z)},P=br(w,n);let V=-1;A.Children.forEach(u,(z,$)=>{if(!A.isValidElement(z)){V===$&&(V+=1,V>=u.length&&(V=-1));return}z.props.disabled||(x==="selectedMenu"&&z.props.selected||V===-1)&&(V=$),V===$&&(z.props.disabled||z.props.muiSkipListHighlight||z.type.muiSkipListHighlight)&&(V+=1,V>=u.length&&(V=-1))});const F=A.Children.map(u,(z,$)=>{if($===V){const B={};return l&&(B.autoFocus=!0),z.props.tabIndex===void 0&&x==="selectedMenu"&&(B.tabIndex=0),A.cloneElement(z,B)}return z});return v.jsx(_6,{role:"menu",ref:P,className:f,onKeyDown:R,tabIndex:o?0:-1,..._,children:F})});function T6(e){return oe("MuiPopover",e)}ie("MuiPopover",["root","paper"]);function Gx(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Kx(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Yx(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function pf(e){return typeof e=="function"?e():e}const w6=e=>{const{classes:t}=e;return he({root:["root"],paper:["paper"]},T6,t)},C6=Ct(a6,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),HE=Ct(us,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),A6=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiPopover"}),{action:o,anchorEl:l,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:p="anchorEl",children:g,className:y,container:x,elevation:_=8,marginThreshold:w=16,open:C,PaperProps:R={},slots:P={},slotProps:V={},transformOrigin:F={vertical:"top",horizontal:"left"},TransitionComponent:z,transitionDuration:$="auto",TransitionProps:B={},disableScrollLock:X=!1,...D}=i,M=A.useRef(),O={...i,anchorOrigin:u,anchorReference:p,elevation:_,marginThreshold:w,transformOrigin:F,TransitionComponent:z,transitionDuration:$,TransitionProps:B},S=w6(O),j=A.useCallback(()=>{if(p==="anchorPosition")return f;const Nt=pf(l),le=(Nt&&Nt.nodeType===1?Nt:Wr(M.current).body).getBoundingClientRect();return{top:le.top+Gx(le,u.vertical),left:le.left+Kx(le,u.horizontal)}},[l,u.horizontal,u.vertical,f,p]),L=A.useCallback(Nt=>({vertical:Gx(Nt,F.vertical),horizontal:Kx(Nt,F.horizontal)}),[F.horizontal,F.vertical]),k=A.useCallback(Nt=>{const Qt={width:Nt.offsetWidth,height:Nt.offsetHeight},le=L(Qt);if(p==="none")return{top:null,left:null,transformOrigin:Yx(le)};const Sn=j();let Fe=Sn.top-le.vertical,kn=Sn.left-le.horizontal;const xr=Fe+Qt.height,ge=kn+Qt.width,Qe=Qr(pf(l)),_n=Qe.innerHeight-w,Hn=Qe.innerWidth-w;if(w!==null&&Fe<w){const Ae=Fe-w;Fe-=Ae,le.vertical+=Ae}else if(w!==null&&xr>_n){const Ae=xr-_n;Fe-=Ae,le.vertical+=Ae}if(w!==null&&kn<w){const Ae=kn-w;kn-=Ae,le.horizontal+=Ae}else if(ge>Hn){const Ae=ge-Hn;kn-=Ae,le.horizontal+=Ae}return{top:`${Math.round(Fe)}px`,left:`${Math.round(kn)}px`,transformOrigin:Yx(le)}},[l,p,j,L,w]),[ft,lt]=A.useState(C),q=A.useCallback(()=>{const Nt=M.current;if(!Nt)return;const Qt=k(Nt);Qt.top!==null&&Nt.style.setProperty("top",Qt.top),Qt.left!==null&&(Nt.style.left=Qt.left),Nt.style.transformOrigin=Qt.transformOrigin,lt(!0)},[k]);A.useEffect(()=>(X&&window.addEventListener("scroll",q),()=>window.removeEventListener("scroll",q)),[l,X,q]);const nt=()=>{q()},at=()=>{lt(!1)};A.useEffect(()=>{C&&q()}),A.useImperativeHandle(o,()=>C?{updatePosition:()=>{q()}}:null,[C,q]),A.useEffect(()=>{if(!C)return;const Nt=wh(()=>{q()}),Qt=Qr(pf(l));return Qt.addEventListener("resize",Nt),()=>{Nt.clear(),Qt.removeEventListener("resize",Nt)}},[l,C,q]);let it=$;const U={slots:{transition:z,...P},slotProps:{transition:B,paper:R,...V}},[tt,ht]=nn("transition",{elementType:Um,externalForwardedProps:U,ownerState:O,getSlotProps:Nt=>({...Nt,onEntering:(Qt,le)=>{var Sn;(Sn=Nt.onEntering)==null||Sn.call(Nt,Qt,le),nt()},onExited:Qt=>{var le;(le=Nt.onExited)==null||le.call(Nt,Qt),at()}}),additionalProps:{appear:!0,in:C}});$==="auto"&&!tt.muiSupportAuto&&(it=void 0);const dt=x||(l?Wr(pf(l)).body:void 0),[bt,{slots:jt,slotProps:_t,...Ce}]=nn("root",{ref:n,elementType:C6,externalForwardedProps:{...U,...D},shouldForwardComponentProp:!0,additionalProps:{slots:{backdrop:P.backdrop},slotProps:{backdrop:QI(typeof V.backdrop=="function"?V.backdrop(O):V.backdrop,{invisible:!0})},container:dt,open:C},ownerState:O,className:Et(S.root,y)}),[Wt,dn]=nn("paper",{ref:M,className:S.paper,elementType:HE,externalForwardedProps:U,shouldForwardComponentProp:!0,additionalProps:{elevation:_,style:ft?void 0:{opacity:0}},ownerState:O});return v.jsx(bt,{...Ce,...!Q3(bt)&&{slots:jt,slotProps:_t,disableScrollLock:X},children:v.jsx(tt,{...ht,timeout:it,children:v.jsx(Wt,{...dn,children:g})})})});function R6(e){return oe("MuiMenu",e)}ie("MuiMenu",["root","paper","list"]);const I6={vertical:"top",horizontal:"right"},M6={vertical:"top",horizontal:"left"},O6=e=>{const{classes:t}=e;return he({root:["root"],paper:["paper"],list:["list"]},R6,t)},D6=Ct(A6,{shouldForwardProp:e=>Rh(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),N6=Ct(HE,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),k6=Ct(E6,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Wc=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiMenu"}),{autoFocus:o=!0,children:l,className:u,disableAutoFocusItem:f=!1,MenuListProps:p={},onClose:g,open:y,PaperProps:x={},PopoverClasses:_,transitionDuration:w="auto",TransitionProps:{onEntering:C,...R}={},variant:P="selectedMenu",slots:V={},slotProps:F={},...z}=i,$=Ch(),B={...i,autoFocus:o,disableAutoFocusItem:f,MenuListProps:p,onEntering:C,PaperProps:x,transitionDuration:w,TransitionProps:R,variant:P},X=O6(B),D=o&&!f&&y,M=A.useRef(null),O=(it,U)=>{M.current&&M.current.adjustStyleForScrollbar(it,{direction:$?"rtl":"ltr"}),C&&C(it,U)},S=it=>{it.key==="Tab"&&(it.preventDefault(),g&&g(it,"tabKeyDown"))};let j=-1;A.Children.map(l,(it,U)=>{A.isValidElement(it)&&(it.props.disabled||(P==="selectedMenu"&&it.props.selected||j===-1)&&(j=U))});const L={slots:V,slotProps:{list:p,transition:R,paper:x,...F}},k=is({elementType:V.root,externalSlotProps:F.root,ownerState:B,className:[X.root,u]}),[ft,lt]=nn("paper",{className:X.paper,elementType:N6,externalForwardedProps:L,shouldForwardComponentProp:!0,ownerState:B}),[q,nt]=nn("list",{className:Et(X.list,p.className),elementType:k6,shouldForwardComponentProp:!0,externalForwardedProps:L,getSlotProps:it=>({...it,onKeyDown:U=>{var tt;S(U),(tt=it.onKeyDown)==null||tt.call(it,U)}}),ownerState:B}),at=typeof L.slotProps.transition=="function"?L.slotProps.transition(B):L.slotProps.transition;return v.jsx(D6,{onClose:g,anchorOrigin:{vertical:"bottom",horizontal:$?"right":"left"},transformOrigin:$?I6:M6,slots:{root:V.root,paper:ft,backdrop:V.backdrop,...V.transition&&{transition:V.transition}},slotProps:{root:k,paper:lt,backdrop:typeof F.backdrop=="function"?F.backdrop(B):F.backdrop,transition:{...at,onEntering:(...it)=>{var U;O(...it),(U=at==null?void 0:at.onEntering)==null||U.call(at,...it)}}},open:y,ref:n,transitionDuration:w,ownerState:B,...z,classes:_,children:v.jsx(q,{actions:M,autoFocus:o&&(j===-1||f),autoFocusItem:D,variant:P,...nt,children:l})})});function P6(e){return oe("MuiMenuItem",e)}const Qc=ie("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),j6=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},V6=e=>{const{disabled:t,dense:n,divider:i,disableGutters:o,selected:l,classes:u}=e,p=he({root:["root",n&&"dense",t&&"disabled",!o&&"gutters",i&&"divider",l&&"selected"]},P6,u);return{...u,...p}},z6=Ct(no,{shouldForwardProp:e=>Rh(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:j6})(je(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Qc.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Zt(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Qc.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Zt(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Qc.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Zt(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Zt(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Qc.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Qc.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${Ux.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${Ux.inset}`]:{marginLeft:52},[`& .${Fx.root}`]:{marginTop:0,marginBottom:0},[`& .${Fx.inset}`]:{paddingLeft:36},[`& .${Hx.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${Hx.root} svg`]:{fontSize:"1.25rem"}}}]}))),Rn=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiMenuItem"}),{autoFocus:o=!1,component:l="li",dense:u=!1,divider:f=!1,disableGutters:p=!1,focusVisibleClassName:g,role:y="menuitem",tabIndex:x,className:_,...w}=i,C=A.useContext($m),R=A.useMemo(()=>({dense:u||C.dense||!1,disableGutters:p}),[C.dense,u,p]),P=A.useRef(null);rs(()=>{o&&P.current&&P.current.focus()},[o]);const V={...i,dense:R.dense,divider:f,disableGutters:p},F=V6(i),z=br(P,n);let $;return i.disabled||($=x!==void 0?x:-1),v.jsx($m.Provider,{value:R,children:v.jsx(z6,{ref:z,role:y,tabIndex:$,component:l,focusVisibleClassName:Et(F.focusVisible,g),className:Et(F.root,_),...w,ownerState:V,classes:F})})});function L6(e){return oe("MuiPagination",e)}ie("MuiPagination",["root","ul","outlined","text"]);function B6(e={}){const{boundaryCount:t=1,componentName:n="usePagination",count:i=1,defaultPage:o=1,disabled:l=!1,hideNextButton:u=!1,hidePrevButton:f=!1,onChange:p,page:g,showFirstButton:y=!1,showLastButton:x=!1,siblingCount:_=1,...w}=e,[C,R]=N5({controlled:g,default:o,name:n,state:"page"}),P=(O,S)=>{g||R(S),p&&p(O,S)},V=(O,S)=>{const j=S-O+1;return Array.from({length:j},(L,k)=>O+k)},F=V(1,Math.min(t,i)),z=V(Math.max(i-t+1,t+1),i),$=Math.max(Math.min(C-_,i-t-_*2-1),t+2),B=Math.min(Math.max(C+_,t+_*2+2),i-t-1),X=[...y?["first"]:[],...f?[]:["previous"],...F,...$>t+2?["start-ellipsis"]:t+1<i-t?[t+1]:[],...V($,B),...B<i-t-1?["end-ellipsis"]:i-t>t?[i-t]:[],...z,...u?[]:["next"],...x?["last"]:[]],D=O=>{switch(O){case"first":return 1;case"previous":return C-1;case"next":return C+1;case"last":return i;default:return null}};return{items:X.map(O=>typeof O=="number"?{onClick:S=>{P(S,O)},type:"page",page:O,selected:O===C,disabled:l,"aria-current":O===C?"page":void 0}:{onClick:S=>{P(S,D(O))},type:O,page:D(O),selected:!1,disabled:l||!O.includes("ellipsis")&&(O==="next"||O==="last"?C>=i:C<=1)}),...w}}function U6(e){return oe("MuiPaginationItem",e)}const Yn=ie("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]),$6=pe(v.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})),H6=pe(v.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})),F6=pe(v.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),q6=pe(v.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),FE=(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`size${gt(n.size)}`],n.variant==="text"&&t[`text${gt(n.color)}`],n.variant==="outlined"&&t[`outlined${gt(n.color)}`],n.shape==="rounded"&&t.rounded,n.type==="page"&&t.page,(n.type==="start-ellipsis"||n.type==="end-ellipsis")&&t.ellipsis,(n.type==="previous"||n.type==="next")&&t.previousNext,(n.type==="first"||n.type==="last")&&t.firstLast]},G6=e=>{const{classes:t,color:n,disabled:i,selected:o,size:l,shape:u,type:f,variant:p}=e,g={root:["root",`size${gt(l)}`,p,u,n!=="standard"&&`color${gt(n)}`,n!=="standard"&&`${p}${gt(n)}`,i&&"disabled",o&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[f]],icon:["icon"]};return he(g,U6,t)},K6=Ct("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:FE})(je(({theme:e})=>({...e.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${Yn.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},variants:[{props:{size:"small"},style:{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"}},{props:{size:"large"},style:{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:e.typography.pxToRem(15)}}]}))),Y6=Ct(no,{name:"MuiPaginationItem",slot:"Root",overridesResolver:FE})(je(({theme:e})=>({...e.typography.body2,borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${Yn.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Yn.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Yn.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Zt(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${Yn.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Zt(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${Yn.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}},variants:[{props:{size:"small"},style:{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"}},{props:{size:"large"},style:{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:e.typography.pxToRem(15)}},{props:{shape:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"outlined"},style:{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${Yn.selected}`]:{[`&.${Yn.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}}}},{props:{variant:"text"},style:{[`&.${Yn.selected}`]:{[`&.${Yn.disabled}`]:{color:(e.vars||e).palette.action.disabled}}}},...Object.entries(e.palette).filter(nr(["dark","contrastText"])).map(([t])=>({props:{variant:"text",color:t},style:{[`&.${Yn.selected}`]:{color:(e.vars||e).palette[t].contrastText,backgroundColor:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:(e.vars||e).palette[t].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t].main}},[`&.${Yn.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t].dark},[`&.${Yn.disabled}`]:{color:(e.vars||e).palette.action.disabled}}}})),...Object.entries(e.palette).filter(nr(["light"])).map(([t])=>({props:{variant:"outlined",color:t},style:{[`&.${Yn.selected}`]:{color:(e.vars||e).palette[t].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.5)`:Zt(e.palette[t].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:Zt(e.palette[t].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Zt(e.palette[t].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Yn.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Zt(e.palette[t].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}}}}))]}))),W6=Ct("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})(je(({theme:e})=>({fontSize:e.typography.pxToRem(20),margin:"0 -8px",variants:[{props:{size:"small"},style:{fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:e.typography.pxToRem(22)}}]}))),Q6=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiPaginationItem"}),{className:o,color:l="standard",component:u,components:f={},disabled:p=!1,page:g,selected:y=!1,shape:x="circular",size:_="medium",slots:w={},slotProps:C={},type:R="page",variant:P="text",...V}=i,F={...i,color:l,disabled:p,selected:y,shape:x,size:_,type:R,variant:P},z=Ch(),$=G6(F),B={slots:{previous:w.previous??f.previous,next:w.next??f.next,first:w.first??f.first,last:w.last??f.last},slotProps:C},[X,D]=nn("previous",{elementType:F6,externalForwardedProps:B,ownerState:F}),[M,O]=nn("next",{elementType:q6,externalForwardedProps:B,ownerState:F}),[S,j]=nn("first",{elementType:$6,externalForwardedProps:B,ownerState:F}),[L,k]=nn("last",{elementType:H6,externalForwardedProps:B,ownerState:F}),ft=z?{previous:"next",next:"previous",first:"last",last:"first"}[R]:R,lt={previous:X,next:M,first:S,last:L}[ft],q={previous:D,next:O,first:j,last:k}[ft];return R==="start-ellipsis"||R==="end-ellipsis"?v.jsx(K6,{ref:n,ownerState:F,className:Et($.root,o),children:"…"}):v.jsxs(Y6,{ref:n,ownerState:F,component:u,disabled:p,className:Et($.root,o),...V,children:[R==="page"&&g,lt?v.jsx(W6,{...q,className:$.icon,as:lt}):null]})}),X6=e=>{const{classes:t,variant:n}=e;return he({root:["root",n],ul:["ul"]},L6,t)},Z6=Ct("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant]]}})({}),J6=Ct("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function tO(e,t,n){return e==="page"?`${n?"":"Go to "}page ${t}`:`Go to ${e} page`}const eO=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiPagination"}),{boundaryCount:o=1,className:l,color:u="standard",count:f=1,defaultPage:p=1,disabled:g=!1,getItemAriaLabel:y=tO,hideNextButton:x=!1,hidePrevButton:_=!1,onChange:w,page:C,renderItem:R=S=>v.jsx(Q6,{...S}),shape:P="circular",showFirstButton:V=!1,showLastButton:F=!1,siblingCount:z=1,size:$="medium",variant:B="text",...X}=i,{items:D}=B6({...i,componentName:"Pagination"}),M={...i,boundaryCount:o,color:u,count:f,defaultPage:p,disabled:g,getItemAriaLabel:y,hideNextButton:x,hidePrevButton:_,renderItem:R,shape:P,showFirstButton:V,showLastButton:F,siblingCount:z,size:$,variant:B},O=X6(M);return v.jsx(Z6,{"aria-label":"pagination navigation",className:Et(O.root,l),ownerState:M,ref:n,...X,children:v.jsx(J6,{className:O.ul,ownerState:M,children:D.map((S,j)=>v.jsx("li",{children:R({...S,color:u,"aria-label":y(S.type,S.page,S.selected),shape:P,size:$,variant:B})},j))})})});function nO(e){return oe("MuiTab",e)}const Nr=ie("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),rO=e=>{const{classes:t,textColor:n,fullWidth:i,wrapped:o,icon:l,label:u,selected:f,disabled:p}=e,g={root:["root",l&&u&&"labelIcon",`textColor${gt(n)}`,i&&"fullWidth",o&&"wrapped",f&&"selected",p&&"disabled"],icon:["iconWrapper","icon"]};return he(g,nO,t)},iO=Ct(no,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.label&&n.icon&&t.labelIcon,t[`textColor${gt(n.textColor)}`],n.fullWidth&&t.fullWidth,n.wrapped&&t.wrapped,{[`& .${Nr.iconWrapper}`]:t.iconWrapper},{[`& .${Nr.icon}`]:t.icon}]}})(je(({theme:e})=>({...e.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:t})=>t.label&&(t.iconPosition==="top"||t.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:t})=>t.label&&t.iconPosition!=="top"&&t.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:t})=>t.icon&&t.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:t,iconPosition:n})=>t.icon&&t.label&&n==="top",style:{[`& > .${Nr.icon}`]:{marginBottom:6}}},{props:({ownerState:t,iconPosition:n})=>t.icon&&t.label&&n==="bottom",style:{[`& > .${Nr.icon}`]:{marginTop:6}}},{props:({ownerState:t,iconPosition:n})=>t.icon&&t.label&&n==="start",style:{[`& > .${Nr.icon}`]:{marginRight:e.spacing(1)}}},{props:({ownerState:t,iconPosition:n})=>t.icon&&t.label&&n==="end",style:{[`& > .${Nr.icon}`]:{marginLeft:e.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${Nr.selected}`]:{opacity:1},[`&.${Nr.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${Nr.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${Nr.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${Nr.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${Nr.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:({ownerState:t})=>t.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:t})=>t.wrapped,style:{fontSize:e.typography.pxToRem(12)}}]}))),aO=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiTab"}),{className:o,disabled:l=!1,disableFocusRipple:u=!1,fullWidth:f,icon:p,iconPosition:g="top",indicator:y,label:x,onChange:_,onClick:w,onFocus:C,selected:R,selectionFollowsFocus:P,textColor:V="inherit",value:F,wrapped:z=!1,...$}=i,B={...i,disabled:l,disableFocusRipple:u,selected:R,icon:!!p,iconPosition:g,label:!!x,fullWidth:f,textColor:V,wrapped:z},X=rO(B),D=p&&x&&A.isValidElement(p)?A.cloneElement(p,{className:Et(X.icon,p.props.className)}):p,M=S=>{!R&&_&&_(S,F),w&&w(S)},O=S=>{P&&!R&&_&&_(S,F),C&&C(S)};return v.jsxs(iO,{focusRipple:!u,className:Et(X.root,o),ref:n,role:"tab","aria-selected":R,disabled:l,onClick:M,onFocus:O,ownerState:B,tabIndex:R?0:-1,...$,children:[g==="top"||g==="start"?v.jsxs(A.Fragment,{children:[D,x]}):v.jsxs(A.Fragment,{children:[x,D]}),y]})});function oO(e){return oe("MuiToolbar",e)}ie("MuiToolbar",["root","gutters","regular","dense"]);const sO=e=>{const{classes:t,disableGutters:n,variant:i}=e;return he({root:["root",!n&&"gutters",i]},oO,t)},lO=Ct("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})(je(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:e.mixins.toolbar}]}))),cO=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiToolbar"}),{className:o,component:l="div",disableGutters:u=!1,variant:f="regular",...p}=i,g={...i,component:l,disableGutters:u,variant:f},y=sO(g);return v.jsx(lO,{as:l,className:Et(y.root,o),ref:n,ownerState:g,...p})}),uO=pe(v.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})),dO=pe(v.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}));function fO(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function hO(e,t,n,i={},o=()=>{}){const{ease:l=fO,duration:u=300}=i;let f=null;const p=t[e];let g=!1;const y=()=>{g=!0},x=_=>{if(g){o(new Error("Animation cancelled"));return}f===null&&(f=_);const w=Math.min(1,(_-f)/u);if(t[e]=l(w)*(n-p)+p,w>=1){requestAnimationFrame(()=>{o(null)});return}requestAnimationFrame(x)};return p===n?(o(new Error("Element already at target position")),y):(requestAnimationFrame(x),y)}const pO={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function gO(e){const{onChange:t,...n}=e,i=A.useRef(),o=A.useRef(null),l=()=>{i.current=o.current.offsetHeight-o.current.clientHeight};return rs(()=>{const u=wh(()=>{const p=i.current;l(),p!==i.current&&t(i.current)}),f=Qr(o.current);return f.addEventListener("resize",u),()=>{u.clear(),f.removeEventListener("resize",u)}},[t]),A.useEffect(()=>{l(),t(i.current)},[t]),v.jsx("div",{style:pO,...n,ref:o})}function mO(e){return oe("MuiTabScrollButton",e)}const yO=ie("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),vO=e=>{const{classes:t,orientation:n,disabled:i}=e;return he({root:["root",n,i&&"disabled"]},mO,t)},bO=Ct(no,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.orientation&&t[n.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${yO.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),xO=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiTabScrollButton"}),{className:o,slots:l={},slotProps:u={},direction:f,orientation:p,disabled:g,...y}=i,x=Ch(),_={isRtl:x,...i},w=vO(_),C=l.StartScrollButtonIcon??uO,R=l.EndScrollButtonIcon??dO,P=is({elementType:C,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:_}),V=is({elementType:R,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:_});return v.jsx(bO,{component:"div",className:Et(w.root,o),ref:n,role:null,ownerState:_,tabIndex:null,...y,style:{...y.style,...p==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${x?-90:90}deg)`}},children:f==="left"?v.jsx(C,{...P}):v.jsx(R,{...V})})});function SO(e){return oe("MuiTabs",e)}const cm=ie("MuiTabs",["root","vertical","list","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Wx=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Qx=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,gf=(e,t,n)=>{let i=!1,o=n(e,t);for(;o;){if(o===e.firstChild){if(i)return;i=!0}const l=o.disabled||o.getAttribute("aria-disabled")==="true";if(!o.hasAttribute("tabindex")||l)o=n(e,o);else{o.focus();return}}},_O=e=>{const{vertical:t,fixed:n,hideScrollbar:i,scrollableX:o,scrollableY:l,centered:u,scrollButtonsHideMobile:f,classes:p}=e;return he({root:["root",t&&"vertical"],scroller:["scroller",n&&"fixed",i&&"hideScrollbar",o&&"scrollableX",l&&"scrollableY"],list:["list","flexContainer",t&&"flexContainerVertical",t&&"vertical",u&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",f&&"scrollButtonsHideMobile"],scrollableX:[o&&"scrollableX"],hideScrollbar:[i&&"hideScrollbar"]},SO,p)},EO=Ct("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${cm.scrollButtons}`]:t.scrollButtons},{[`& .${cm.scrollButtons}`]:n.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,n.vertical&&t.vertical]}})(je(({theme:e})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:t})=>t.vertical,style:{flexDirection:"column"}},{props:({ownerState:t})=>t.scrollButtonsHideMobile,style:{[`& .${cm.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}}}]}))),TO=Ct("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.scroller,n.fixed&&t.fixed,n.hideScrollbar&&t.hideScrollbar,n.scrollableX&&t.scrollableX,n.scrollableY&&t.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:e})=>e.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:e})=>e.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:e})=>e.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:e})=>e.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),wO=Ct("div",{name:"MuiTabs",slot:"List",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.list,t.flexContainer,n.vertical&&t.flexContainerVertical,n.centered&&t.centered]}})({display:"flex",variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:"column"}},{props:({ownerState:e})=>e.centered,style:{justifyContent:"center"}}]}),CO=Ct("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(je(({theme:e})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(e.vars||e).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(e.vars||e).palette.secondary.main}},{props:({ownerState:t})=>t.vertical,style:{height:"100%",width:2,right:0}}]}))),AO=Ct(gO)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Xx={},RO=A.forwardRef(function(t,n){const i=se({props:t,name:"MuiTabs"}),o=Zr(),l=Ch(),{"aria-label":u,"aria-labelledby":f,action:p,centered:g=!1,children:y,className:x,component:_="div",allowScrollButtonsMobile:w=!1,indicatorColor:C="primary",onChange:R,orientation:P="horizontal",ScrollButtonComponent:V,scrollButtons:F="auto",selectionFollowsFocus:z,slots:$={},slotProps:B={},TabIndicatorProps:X={},TabScrollButtonProps:D={},textColor:M="primary",value:O,variant:S="standard",visibleScrollbar:j=!1,...L}=i,k=S==="scrollable",ft=P==="vertical",lt=ft?"scrollTop":"scrollLeft",q=ft?"top":"left",nt=ft?"bottom":"right",at=ft?"clientHeight":"clientWidth",it=ft?"height":"width",U={...i,component:_,allowScrollButtonsMobile:w,indicatorColor:C,orientation:P,vertical:ft,scrollButtons:F,textColor:M,variant:S,visibleScrollbar:j,fixed:!k,hideScrollbar:k&&!j,scrollableX:k&&!ft,scrollableY:k&&ft,centered:g&&!k,scrollButtonsHideMobile:!w},tt=_O(U),ht=is({elementType:$.StartScrollButtonIcon,externalSlotProps:B.startScrollButtonIcon,ownerState:U}),dt=is({elementType:$.EndScrollButtonIcon,externalSlotProps:B.endScrollButtonIcon,ownerState:U}),[bt,jt]=A.useState(!1),[_t,Ce]=A.useState(Xx),[Wt,dn]=A.useState(!1),[Nt,Qt]=A.useState(!1),[le,Sn]=A.useState(!1),[Fe,kn]=A.useState({overflow:"hidden",scrollbarWidth:0}),xr=new Map,ge=A.useRef(null),Qe=A.useRef(null),_n={slots:$,slotProps:{indicator:X,scrollButton:D,...B}},Hn=()=>{const vt=ge.current;let yt;if(vt){const It=vt.getBoundingClientRect();yt={clientWidth:vt.clientWidth,scrollLeft:vt.scrollLeft,scrollTop:vt.scrollTop,scrollWidth:vt.scrollWidth,top:It.top,bottom:It.bottom,left:It.left,right:It.right}}let Rt;if(vt&&O!==!1){const It=Qe.current.children;if(It.length>0){const Xt=It[xr.get(O)];Rt=Xt?Xt.getBoundingClientRect():null}}return{tabsMeta:yt,tabMeta:Rt}},Ae=la(()=>{const{tabsMeta:vt,tabMeta:yt}=Hn();let Rt=0,It;ft?(It="top",yt&&vt&&(Rt=yt.top-vt.top+vt.scrollTop)):(It=l?"right":"left",yt&&vt&&(Rt=(l?-1:1)*(yt[It]-vt[It]+vt.scrollLeft)));const Xt={[It]:Rt,[it]:yt?yt[it]:0};if(typeof _t[It]!="number"||typeof _t[it]!="number")Ce(Xt);else{const jn=Math.abs(_t[It]-Xt[It]),Br=Math.abs(_t[it]-Xt[it]);(jn>=1||Br>=1)&&Ce(Xt)}}),Vt=(vt,{animation:yt=!0}={})=>{yt?hO(lt,ge.current,vt,{duration:o.transitions.duration.standard}):ge.current[lt]=vt},Ni=vt=>{let yt=ge.current[lt];ft?yt+=vt:yt+=vt*(l?-1:1),Vt(yt)},ya=()=>{const vt=ge.current[at];let yt=0;const Rt=Array.from(Qe.current.children);for(let It=0;It<Rt.length;It+=1){const Xt=Rt[It];if(yt+Xt[at]>vt){It===0&&(yt=vt);break}yt+=Xt[at]}return yt},bs=()=>{Ni(-1*ya())},De=()=>{Ni(ya())},[ce,{onChange:fn,...hn}]=nn("scrollbar",{className:Et(tt.scrollableX,tt.hideScrollbar),elementType:AO,shouldForwardComponentProp:!0,externalForwardedProps:_n,ownerState:U}),xs=A.useCallback(vt=>{fn==null||fn(vt),kn({overflow:null,scrollbarWidth:vt})},[fn]),[Ss,ti]=nn("scrollButtons",{className:Et(tt.scrollButtons,D.className),elementType:xO,externalForwardedProps:_n,ownerState:U,additionalProps:{orientation:P,slots:{StartScrollButtonIcon:$.startScrollButtonIcon||$.StartScrollButtonIcon,EndScrollButtonIcon:$.endScrollButtonIcon||$.EndScrollButtonIcon},slotProps:{startScrollButtonIcon:ht,endScrollButtonIcon:dt}}}),ki=()=>{const vt={};vt.scrollbarSizeListener=k?v.jsx(ce,{...hn,onChange:xs}):null;const Rt=k&&(F==="auto"&&(Wt||Nt)||F===!0);return vt.scrollButtonStart=Rt?v.jsx(Ss,{direction:l?"right":"left",onClick:bs,disabled:!Wt,...ti}):null,vt.scrollButtonEnd=Rt?v.jsx(Ss,{direction:l?"left":"right",onClick:De,disabled:!Nt,...ti}):null,vt},ei=la(vt=>{const{tabsMeta:yt,tabMeta:Rt}=Hn();if(!(!Rt||!yt)){if(Rt[q]<yt[q]){const It=yt[lt]+(Rt[q]-yt[q]);Vt(It,{animation:vt})}else if(Rt[nt]>yt[nt]){const It=yt[lt]+(Rt[nt]-yt[nt]);Vt(It,{animation:vt})}}}),Pn=la(()=>{k&&F!==!1&&Sn(!le)});A.useEffect(()=>{const vt=wh(()=>{ge.current&&Ae()});let yt;const Rt=jn=>{jn.forEach(Br=>{Br.removedNodes.forEach(Xn=>{yt==null||yt.unobserve(Xn)}),Br.addedNodes.forEach(Xn=>{yt==null||yt.observe(Xn)})}),vt(),Pn()},It=Qr(ge.current);It.addEventListener("resize",vt);let Xt;return typeof ResizeObserver<"u"&&(yt=new ResizeObserver(vt),Array.from(Qe.current.children).forEach(jn=>{yt.observe(jn)})),typeof MutationObserver<"u"&&(Xt=new MutationObserver(Rt),Xt.observe(Qe.current,{childList:!0})),()=>{vt.clear(),It.removeEventListener("resize",vt),Xt==null||Xt.disconnect(),yt==null||yt.disconnect()}},[Ae,Pn]),A.useEffect(()=>{const vt=Array.from(Qe.current.children),yt=vt.length;if(typeof IntersectionObserver<"u"&&yt>0&&k&&F!==!1){const Rt=vt[0],It=vt[yt-1],Xt={root:ge.current,threshold:.99},jn=Ur=>{dn(!Ur[0].isIntersecting)},Br=new IntersectionObserver(jn,Xt);Br.observe(Rt);const Xn=Ur=>{Qt(!Ur[0].isIntersecting)},yo=new IntersectionObserver(Xn,Xt);return yo.observe(It),()=>{Br.disconnect(),yo.disconnect()}}},[k,F,le,y==null?void 0:y.length]),A.useEffect(()=>{jt(!0)},[]),A.useEffect(()=>{Ae()}),A.useEffect(()=>{ei(Xx!==_t)},[ei,_t]),A.useImperativeHandle(p,()=>({updateIndicator:Ae,updateScrollButtons:Pn}),[Ae,Pn]);const[va,Pi]=nn("indicator",{className:Et(tt.indicator,X.className),elementType:CO,externalForwardedProps:_n,ownerState:U,additionalProps:{style:_t}}),ba=v.jsx(va,{...Pi});let ni=0;const po=A.Children.map(y,vt=>{if(!A.isValidElement(vt))return null;const yt=vt.props.value===void 0?ni:vt.props.value;xr.set(yt,ni);const Rt=yt===O;return ni+=1,A.cloneElement(vt,{fullWidth:S==="fullWidth",indicator:Rt&&!bt&&ba,selected:Rt,selectionFollowsFocus:z,onChange:R,textColor:M,value:yt,...ni===1&&O===!1&&!vt.props.tabIndex?{tabIndex:0}:{}})}),Lr=vt=>{if(vt.altKey||vt.shiftKey||vt.ctrlKey||vt.metaKey)return;const yt=Qe.current,Rt=Wr(yt).activeElement;if(Rt.getAttribute("role")!=="tab")return;let Xt=P==="horizontal"?"ArrowLeft":"ArrowUp",jn=P==="horizontal"?"ArrowRight":"ArrowDown";switch(P==="horizontal"&&l&&(Xt="ArrowRight",jn="ArrowLeft"),vt.key){case Xt:vt.preventDefault(),gf(yt,Rt,Qx);break;case jn:vt.preventDefault(),gf(yt,Rt,Wx);break;case"Home":vt.preventDefault(),gf(yt,null,Wx);break;case"End":vt.preventDefault(),gf(yt,null,Qx);break}},ar=ki(),[go,Sr]=nn("root",{ref:n,className:Et(tt.root,x),elementType:EO,externalForwardedProps:{..._n,...L,component:_},ownerState:U}),[mo,ri]=nn("scroller",{ref:ge,className:tt.scroller,elementType:TO,externalForwardedProps:_n,ownerState:U,additionalProps:{style:{overflow:Fe.overflow,[ft?`margin${l?"Left":"Right"}`:"marginBottom"]:j?void 0:-Fe.scrollbarWidth}}}),[xa,ii]=nn("list",{ref:Qe,className:Et(tt.list,tt.flexContainer),elementType:wO,externalForwardedProps:_n,ownerState:U,getSlotProps:vt=>({...vt,onKeyDown:yt=>{var Rt;Lr(yt),(Rt=vt.onKeyDown)==null||Rt.call(vt,yt)}})});return v.jsxs(go,{...Sr,children:[ar.scrollButtonStart,ar.scrollbarSizeListener,v.jsxs(mo,{...ri,children:[v.jsx(xa,{"aria-label":u,"aria-labelledby":f,"aria-orientation":P==="vertical"?"vertical":null,role:"tablist",...ii,children:po}),bt&&ba]}),ar.scrollButtonEnd]})}),qE=xE({themeId:fh}),GE=pe(v.jsx("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"})),IO=pe(v.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-5h2zm4 0h-2v-3h2zm0-5h-2v-2h2zm4 5h-2V7h2z"})),mf=pe(v.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"})),Zx=pe(v.jsx("path",{d:"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 4h5v8l-2.5-1.5L6 12z"})),Jx=pe(v.jsx("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2m0 15-5-2.18L7 18V5h10z"})),MO=pe(v.jsx("path",{d:"M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z"})),OO=pe(v.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),tS=pe(v.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})),zy=pe([v.jsx("path",{d:"M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2"},"0"),v.jsx("path",{d:"m15 9 .94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11 4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z"},"1")]),eS=pe(v.jsx("path",{d:"M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7"})),nS=pe(v.jsx("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"})),DO=pe(v.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"})),rS=pe([v.jsx("path",{d:"M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5z"},"0"),v.jsx("path",{d:"M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99M13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83m4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24"},"1")]),iS=pe(v.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"})),KE=pe(v.jsx("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"})),NO=pe(v.jsx("path",{d:"M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6"})),kO=pe(v.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"})),aS=pe(v.jsx("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"})),yf=pe(v.jsx("path",{d:"m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"})),PO=pe(v.jsx("path",{d:"m21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91M11 11H9v2H8v-2H6v-1h2V8h1v2h2zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"})),Zo=pe(v.jsx("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"})),jO=pe(v.jsx("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8"})),VO=pe(v.jsx("path",{fillRule:"evenodd",d:"M14 6V4h-4v2zM4 8v11h16V8zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"})),zO=()=>{const e=Zr();return v.jsx($t,{sx:{position:"relative",backgroundImage:"url(/gray-high-rise-building.jpg)",backgroundSize:"cover",backgroundPosition:"center bottom",color:"white",py:10,"&::before":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",zIndex:1}},children:v.jsxs(mu,{maxWidth:"lg",sx:{position:"relative",zIndex:2},children:[v.jsx(wt,{variant:"h3",component:"h2",gutterBottom:!0,sx:{fontWeight:700,mb:4,textAlign:"center",[e.breakpoints.up("md")]:{fontSize:"2.8rem"}},children:"Why Blocklight Stands Out"}),v.jsx(yu,{sx:{borderColor:"primary.main",width:100,height:4,mx:"auto",mb:6}}),v.jsx(wt,{variant:"h5",component:"p",sx:{textAlign:"center",maxWidth:800,mx:"auto",mb:8,lineHeight:1.6},children:"At Blocklight, we go beyond surface-level crypto content. We provide:"}),v.jsx(xn,{container:!0,spacing:4,sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(2, 1fr)",lg:"repeat(4, 1fr)"},gap:4,maxWidth:1400,mx:"auto",mb:4},children:[{title:"In-Depth Education",text:"From beginner fundamentals to advanced on-chain analysis, we break down complex topics in a clear, structured way."},{title:"Case Studies & Real-World Insights",text:"We analyze real blockchain events, trading patterns, and historical data to give you actionable knowledge."},{title:"Unique Trading Insights",text:"Our proprietary probabilistic trading approach helps you assess crypto market patterns based on session-based price action."},{title:"Yes Hype, Just Clarity",text:"We focus on facts, data, and fundamental insights—cutting through the noise of speculation and misleading narratives."}].map((t,n)=>v.jsx(xn,{item:!0,xs:12,md:4,sx:{display:"flex",justifyContent:"center",mb:4},children:v.jsxs($t,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",maxWidth:400,p:3,backgroundColor:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(8px)",borderRadius:2,borderLeft:"4px solid",borderColor:"primary.main"},children:[v.jsx(OO,{sx:{color:"primary.main",fontSize:32,mb:2}}),v.jsxs($t,{children:[v.jsx(wt,{variant:"h6",component:"h3",gutterBottom:!0,sx:{fontWeight:600},children:t.title}),v.jsx(wt,{variant:"body1",sx:{opacity:.9},children:t.text})]})]})},n))}),v.jsxs(wt,{variant:"h5",component:"p",sx:{textAlign:"center",mt:8,fontWeight:600,"& span":{color:"primary.main"}},children:["With ",v.jsx("span",{children:"Blocklight"}),", you don't just follow the market—you"," ",v.jsx("span",{children:"understand"})," it."]})]})})},LO=()=>v.jsxs($t,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-between",background:"linear-gradient(90deg, #e3f2fd 0%, #bbdefb 100%)",borderRadius:4,boxShadow:3,p:{xs:3,md:6},mt:6,mb:6,maxWidth:1200,mx:"auto",gap:6},children:[v.jsxs($t,{sx:{flex:1},children:[v.jsx(wt,{variant:"h3",sx:{fontWeight:700,mb:2,color:"#1a237e"},children:"Considering investing in crypto?"}),v.jsx(wt,{variant:"h6",sx:{mb:3,color:"#263238"},children:"Your go-to source for crypto education, daily market analysis, and all the latest news in one concise article."}),v.jsx(wt,{variant:"body1",sx:{mb:4,color:"#37474f"},children:"From beginner basics to advanced on-chain insights, we simplify crypto for you. Stay informed, stay ahead!"}),v.jsx(Qo,{variant:"contained",color:"primary",size:"large",sx:{borderRadius:2,px:4,py:1.5,fontWeight:600},onClick:()=>window.location.href="/blog",children:"Blogs"})]}),v.jsx($t,{component:"img",src:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",alt:"Crypto Investing",sx:{width:{xs:"100%",md:400},height:{xs:220,md:320},objectFit:"cover",borderRadius:3,boxShadow:2}})]}),BO=[{icon:v.jsx(KE,{sx:{fontSize:40,color:"primary.main"}}),title:"Beginner to Advanced Crypto Learning",desc:"Step-by-step guides and lessons for all levels, from Crypto 101 to advanced trading strategies."},{icon:v.jsx(zy,{sx:{fontSize:40,color:"primary.main"}}),title:"Expert Insights on Blockchain & On-Chain Analytics",desc:"Get deep dives and actionable analytics from experienced crypto professionals."},{icon:v.jsx(VO,{sx:{fontSize:40,color:"primary.main"}}),title:"Case Studies & Real-World Applications",desc:"Understand how blockchain is transforming industries with real-world examples."},{icon:v.jsx(Zo,{sx:{fontSize:40,color:"primary.main"}}),title:"Trading & Investment Strategies",desc:"Daily trade ideas, market analysis, and unique data mashups for traders and investors."}],UO=()=>v.jsxs($t,{sx:{py:{xs:6,md:10},background:"linear-gradient(135deg, #766478 0%, #b39ddb 100%)"},children:[v.jsx(wt,{variant:"h4",sx:{fontWeight:700,mb:4,textAlign:"center",color:"#3a4438",letterSpacing:1},children:"What we offer?"}),v.jsx(xn,{container:!0,spacing:4,sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(2, 1fr)",lg:"repeat(4, 1fr)"},gap:4,maxWidth:1400,mx:"auto",mb:4},children:BO.map((e,t)=>v.jsx(xn,{item:!0,xs:12,md:4,sx:{display:"flex",margin:3,justifyContent:"space-around",mb:4},children:v.jsxs(us,{elevation:4,sx:{p:4,height:"100%",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:3,background:"rgba(255,255,255,0.9)",boxShadow:"0 4px 24px 0 rgba(0,0,0,0.08)",textAlign:"center"},children:[e.icon,v.jsx(wt,{variant:"h6",sx:{fontWeight:600,mt:2,mb:1},children:e.title}),v.jsx(wt,{variant:"body2",sx:{color:"text.secondary"},children:e.desc})]})},t))})]}),$O=[{icon:v.jsx(IO,{fontSize:"large",color:"primary"}),title:"Market Analytics",content:"Real-time data visualization and predictive market trends analysis."},{icon:v.jsx(Zo,{fontSize:"large",color:"primary"}),title:"Portfolio Insights",content:"Deep analysis of your investment portfolio with risk assessment."},{icon:v.jsx(GE,{fontSize:"large",color:"primary"}),title:"Trading Signals",content:"AI-powered trading signals with 85% historical accuracy."},{icon:v.jsx(KE,{fontSize:"large",color:"primary"}),title:"Blockchain Education",content:"From fundamentals to advanced on-chain analysis."}],HO=()=>v.jsxs($t,{sx:{background:"linear-gradient(120deg, #f5f7fa 0%, #c3cfe2 100%)",py:{xs:4,md:8},px:{xs:2,md:6}},children:[v.jsx(wt,{variant:"h4",sx:{fontWeight:700,mb:4,textAlign:"center",color:"primary.main",letterSpacing:1},children:"Explore Our Features"}),v.jsx($t,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"repeat(2, 1fr)",lg:"repeat(4, 1fr)"},gap:4,maxWidth:1400,mx:"auto"},children:$O.map((e,t)=>v.jsxs(us,{elevation:6,sx:{p:4,borderRadius:4,display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"0 4px 24px 0 rgba(0,0,0,0.10)",background:"rgba(255,255,255,0.97)",transition:"transform 0.3s, box-shadow 0.3s","&:hover":{transform:"translateY(-8px) scale(1.03)",boxShadow:"0 8px 32px 0 rgba(0,0,0,0.18)"},textAlign:"center"},children:[e.icon,v.jsx(wt,{variant:"h6",sx:{fontWeight:700,mt:2,mb:1},children:e.title}),v.jsx(wt,{variant:"body2",sx:{color:"text.secondary"},children:e.content})]},t))})]});function FO(){return Xr(),v.jsxs("div",{children:[v.jsx(LO,{}),v.jsx(UO,{}),v.jsx(HO,{}),v.jsx(zO,{})]})}var YE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},oS=Dn.createContext&&Dn.createContext(YE),qO=["attr","size","title"];function GO(e,t){if(e==null)return{};var n=KO(e,t),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function KO(e,t){if(e==null)return{};var n={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;n[i]=e[i]}return n}function qf(){return qf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},qf.apply(this,arguments)}function sS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function Gf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sS(Object(n),!0).forEach(function(i){YO(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sS(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function YO(e,t,n){return t=WO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function WO(e){var t=QO(e,"string");return typeof t=="symbol"?t:t+""}function QO(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function WE(e){return e&&e.map((t,n)=>Dn.createElement(t.tag,Gf({key:n},t.attr),WE(t.child)))}function Ly(e){return t=>Dn.createElement(XO,qf({attr:Gf({},e.attr)},t),WE(e.child))}function XO(e){var t=n=>{var{attr:i,size:o,title:l}=e,u=GO(e,qO),f=o||n.size||"1em",p;return n.className&&(p=n.className),e.className&&(p=(p?p+" ":"")+e.className),Dn.createElement("svg",qf({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,u,{className:p,style:Gf(Gf({color:e.color||n.color},n.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Dn.createElement("title",null,l),e.children)};return oS!==void 0?Dn.createElement(oS.Consumer,null,n=>t(n)):t(YE)}function ds(e){return Ly({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function fs(e){return Ly({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function hs(e){return Ly({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}const ZO=()=>{};var lS={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},JO=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=e[n++];t[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=e[n++],u=e[n++],f=e[n++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;t[i++]=String.fromCharCode(55296+(p>>10)),t[i++]=String.fromCharCode(56320+(p&1023))}else{const l=e[n++],u=e[n++];t[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return t.join("")},XE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<e.length;o+=3){const l=e[o],u=o+1<e.length,f=u?e[o+1]:0,p=o+2<e.length,g=p?e[o+2]:0,y=l>>2,x=(l&3)<<4|f>>4;let _=(f&15)<<2|g>>6,w=g&63;p||(w=64,u||(_=64)),i.push(n[y],n[x],n[_],n[w])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(QE(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):JO(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<e.length;){const l=n[e.charAt(o++)],f=o<e.length?n[e.charAt(o)]:0;++o;const g=o<e.length?n[e.charAt(o)]:64;++o;const x=o<e.length?n[e.charAt(o)]:64;if(++o,l==null||f==null||g==null||x==null)throw new tD;const _=l<<2|f>>4;if(i.push(_),g!==64){const w=f<<4&240|g>>2;if(i.push(w),x!==64){const C=g<<6&192|x;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class tD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eD=function(e){const t=QE(e);return XE.encodeByteArray(t,!0)},Kf=function(e){return eD(e).replace(/\./g,"")},nD=function(e){try{return XE.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=()=>rD().__FIREBASE_DEFAULTS__,aD=()=>{if(typeof process>"u"||typeof lS>"u")return;const e=lS.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},oD=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&nD(e[1]);return t&&JSON.parse(t)},By=()=>{try{return ZO()||iD()||aD()||oD()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},sD=e=>{var t,n;return(n=(t=By())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},lD=e=>{const t=sD(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},ZE=()=>{var e;return(e=By())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",o=e.iat||0,l=e.sub||e.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Kf(JSON.stringify(n)),Kf(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fD(){var e;const t=(e=By())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hD(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function pD(){return!fD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JE(){try{return typeof indexedDB=="object"}catch{return!1}}function t2(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var l;t(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(n){t(n)}})}function gD(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD="FirebaseError";class fo extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=mD,Object.setPrototypeOf(this,fo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ih.prototype.create)}}class Ih{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},o=`${this.service}/${t}`,l=this.errors[t],u=l?yD(l,i):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new fo(o,f,i)}}function yD(e,t){return e.replace(vD,(n,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const vD=/\{\$([^}]+)}/g;function vu(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const l=e[o],u=t[o];if(cS(l)&&cS(u)){if(!vu(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function cS(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=1e3,xD=2,SD=4*60*60*1e3,_D=.5;function uS(e,t=bD,n=xD){const i=t*Math.pow(n,e),o=Math.round(_D*i*(Math.random()-.5)*2);return Math.min(SD,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(e){return e&&e._delegate?e._delegate:e}class fa{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new cD;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(wD(t))try{this.getOrInitializeService({instanceIdentifier:Wo})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(t=Wo){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Wo){return this.instances.has(t)}getOptions(t=Wo){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&u.resolve(o)}return o}onInit(t,n){var i;const o=this.normalizeInstanceIdentifier(n),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(t),this.onInitCallbacks.set(o,l);const u=this.instances.get(o);return u&&t(u,o),()=>{l.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:TD(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Wo){return this.component?this.component.multipleInstances?t:Wo:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TD(e){return e===Wo?void 0:e}function wD(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ED(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const AD={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},RD=re.INFO,ID={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},MD=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),o=ID[t];if(o)console[o](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Uy{constructor(t){this.name=t,this._logLevel=RD,this._logHandler=MD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?AD[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const OD=(e,t)=>t.some(n=>e instanceof n);let dS,fS;function DD(){return dS||(dS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ND(){return fS||(fS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e2=new WeakMap,Hm=new WeakMap,n2=new WeakMap,um=new WeakMap,$y=new WeakMap;function kD(e){const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("success",l),e.removeEventListener("error",u)},l=()=>{n(Qa(e.result)),o()},u=()=>{i(e.error),o()};e.addEventListener("success",l),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&e2.set(n,e)}).catch(()=>{}),$y.set(t,e),t}function PD(e){if(Hm.has(e))return;const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("complete",l),e.removeEventListener("error",u),e.removeEventListener("abort",u)},l=()=>{n(),o()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",l),e.addEventListener("error",u),e.addEventListener("abort",u)});Hm.set(e,t)}let Fm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Hm.get(e);if(t==="objectStoreNames")return e.objectStoreNames||n2.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qa(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function jD(e){Fm=e(Fm)}function VD(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(dm(this),t,...n);return n2.set(i,t.sort?t.sort():[t]),Qa(i)}:ND().includes(e)?function(...t){return e.apply(dm(this),t),Qa(e2.get(this))}:function(...t){return Qa(e.apply(dm(this),t))}}function zD(e){return typeof e=="function"?VD(e):(e instanceof IDBTransaction&&PD(e),OD(e,DD())?new Proxy(e,Fm):e)}function Qa(e){if(e instanceof IDBRequest)return kD(e);if(um.has(e))return um.get(e);const t=zD(e);return t!==e&&(um.set(e,t),$y.set(t,e)),t}const dm=e=>$y.get(e);function r2(e,t,{blocked:n,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(e,t),f=Qa(u);return i&&u.addEventListener("upgradeneeded",p=>{i(Qa(u.result),p.oldVersion,p.newVersion,Qa(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const LD=["get","getKey","getAll","getAllKeys","count"],BD=["put","add","delete","clear"],fm=new Map;function hS(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fm.get(t))return fm.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=BD.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||LD.includes(n)))return;const l=async function(u,...f){const p=this.transaction(u,o?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),o&&p.done]))[0]};return fm.set(t,l),l}jD(e=>({...e,get:(t,n,i)=>hS(t,n)||e.get(t,n,i),has:(t,n)=>!!hS(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($D(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function $D(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qm="@firebase/app",pS="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Uy("@firebase/app"),HD="@firebase/app-compat",FD="@firebase/analytics-compat",qD="@firebase/analytics",GD="@firebase/app-check-compat",KD="@firebase/app-check",YD="@firebase/auth",WD="@firebase/auth-compat",QD="@firebase/database",XD="@firebase/data-connect",ZD="@firebase/database-compat",JD="@firebase/functions",tN="@firebase/functions-compat",eN="@firebase/installations",nN="@firebase/installations-compat",rN="@firebase/messaging",iN="@firebase/messaging-compat",aN="@firebase/performance",oN="@firebase/performance-compat",sN="@firebase/remote-config",lN="@firebase/remote-config-compat",cN="@firebase/storage",uN="@firebase/storage-compat",dN="@firebase/firestore",fN="@firebase/vertexai",hN="@firebase/firestore-compat",pN="firebase",gN="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="[DEFAULT]",mN={[qm]:"fire-core",[HD]:"fire-core-compat",[qD]:"fire-analytics",[FD]:"fire-analytics-compat",[KD]:"fire-app-check",[GD]:"fire-app-check-compat",[YD]:"fire-auth",[WD]:"fire-auth-compat",[QD]:"fire-rtdb",[XD]:"fire-data-connect",[ZD]:"fire-rtdb-compat",[JD]:"fire-fn",[tN]:"fire-fn-compat",[eN]:"fire-iid",[nN]:"fire-iid-compat",[rN]:"fire-fcm",[iN]:"fire-fcm-compat",[aN]:"fire-perf",[oN]:"fire-perf-compat",[sN]:"fire-rc",[lN]:"fire-rc-compat",[cN]:"fire-gcs",[uN]:"fire-gcs-compat",[dN]:"fire-fst",[hN]:"fire-fst-compat",[fN]:"fire-vertex","fire-js":"fire-js",[pN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=new Map,yN=new Map,Km=new Map;function gS(e,t){try{e.container.addComponent(t)}catch(n){ha.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ro(e){const t=e.name;if(Km.has(t))return ha.debug(`There were multiple attempts to register component ${t}.`),!1;Km.set(t,e);for(const n of Yf.values())gS(n,e);for(const n of yN.values())gS(n,e);return!0}function ju(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function vN(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xa=new Ih("app","Firebase",bN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new fa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xa.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=gN;function i2(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Gm,automaticDataCollectionEnabled:!1},t),o=i.name;if(typeof o!="string"||!o)throw Xa.create("bad-app-name",{appName:String(o)});if(n||(n=ZE()),!n)throw Xa.create("no-options");const l=Yf.get(o);if(l){if(vu(n,l.options)&&vu(i,l.config))return l;throw Xa.create("duplicate-app",{appName:o})}const u=new CD(o);for(const p of Km.values())u.addComponent(p);const f=new xN(n,i,u);return Yf.set(o,f),f}function a2(e=Gm){const t=Yf.get(e);if(!t&&e===Gm&&ZE())return i2();if(!t)throw Xa.create("no-app",{appName:e});return t}function Ci(e,t,n){var i;let o=(i=mN[e])!==null&&i!==void 0?i:e;n&&(o+=`-${n}`);const l=o.match(/\s|\//),u=t.match(/\s|\//);if(l||u){const f=[`Unable to register library "${o}" with version "${t}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ha.warn(f.join(" "));return}ro(new fa(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N="firebase-heartbeat-database",EN=1,bu="firebase-heartbeat-store";let hm=null;function o2(){return hm||(hm=r2(_N,EN,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(bu)}catch(n){console.warn(n)}}}}).catch(e=>{throw Xa.create("idb-open",{originalErrorMessage:e.message})})),hm}async function TN(e){try{const n=(await o2()).transaction(bu),i=await n.objectStore(bu).get(s2(e));return await n.done,i}catch(t){if(t instanceof fo)ha.warn(t.message);else{const n=Xa.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ha.warn(n.message)}}}async function mS(e,t){try{const i=(await o2()).transaction(bu,"readwrite");await i.objectStore(bu).put(t,s2(e)),await i.done}catch(n){if(n instanceof fo)ha.warn(n.message);else{const i=Xa.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ha.warn(i.message)}}}function s2(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=1024,CN=30;class AN{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IN(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=yS();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>CN){const u=MN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ha.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yS(),{heartbeatsToSend:i,unsentEntries:o}=RN(this._heartbeatsCache.heartbeats),l=Kf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return ha.warn(n),""}}}function yS(){return new Date().toISOString().substring(0,10)}function RN(e,t=wN){const n=[];let i=e.slice();for(const o of e){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),vS(n)>t){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),vS(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class IN{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JE()?t2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return mS(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return mS(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function vS(e){return Kf(JSON.stringify({version:2,heartbeats:e})).length}function MN(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(e){ro(new fa("platform-logger",t=>new UD(t),"PRIVATE")),ro(new fa("heartbeat",t=>new AN(t),"PRIVATE")),Ci(qm,pS,e),Ci(qm,pS,"esm2017"),Ci("fire-js","")}ON("");var bS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Za,l2;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(D,M){function O(){}O.prototype=M.prototype,D.D=M.prototype,D.prototype=new O,D.prototype.constructor=D,D.C=function(S,j,L){for(var k=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)k[ft-2]=arguments[ft];return M.prototype[j].apply(S,k)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,M,O){O||(O=0);var S=Array(16);if(typeof M=="string")for(var j=0;16>j;++j)S[j]=M.charCodeAt(O++)|M.charCodeAt(O++)<<8|M.charCodeAt(O++)<<16|M.charCodeAt(O++)<<24;else for(j=0;16>j;++j)S[j]=M[O++]|M[O++]<<8|M[O++]<<16|M[O++]<<24;M=D.g[0],O=D.g[1],j=D.g[2];var L=D.g[3],k=M+(L^O&(j^L))+S[0]+3614090360&4294967295;M=O+(k<<7&4294967295|k>>>25),k=L+(j^M&(O^j))+S[1]+3905402710&4294967295,L=M+(k<<12&4294967295|k>>>20),k=j+(O^L&(M^O))+S[2]+606105819&4294967295,j=L+(k<<17&4294967295|k>>>15),k=O+(M^j&(L^M))+S[3]+3250441966&4294967295,O=j+(k<<22&4294967295|k>>>10),k=M+(L^O&(j^L))+S[4]+4118548399&4294967295,M=O+(k<<7&4294967295|k>>>25),k=L+(j^M&(O^j))+S[5]+1200080426&4294967295,L=M+(k<<12&4294967295|k>>>20),k=j+(O^L&(M^O))+S[6]+2821735955&4294967295,j=L+(k<<17&4294967295|k>>>15),k=O+(M^j&(L^M))+S[7]+4249261313&4294967295,O=j+(k<<22&4294967295|k>>>10),k=M+(L^O&(j^L))+S[8]+1770035416&4294967295,M=O+(k<<7&4294967295|k>>>25),k=L+(j^M&(O^j))+S[9]+2336552879&4294967295,L=M+(k<<12&4294967295|k>>>20),k=j+(O^L&(M^O))+S[10]+4294925233&4294967295,j=L+(k<<17&4294967295|k>>>15),k=O+(M^j&(L^M))+S[11]+2304563134&4294967295,O=j+(k<<22&4294967295|k>>>10),k=M+(L^O&(j^L))+S[12]+1804603682&4294967295,M=O+(k<<7&4294967295|k>>>25),k=L+(j^M&(O^j))+S[13]+4254626195&4294967295,L=M+(k<<12&4294967295|k>>>20),k=j+(O^L&(M^O))+S[14]+2792965006&4294967295,j=L+(k<<17&4294967295|k>>>15),k=O+(M^j&(L^M))+S[15]+1236535329&4294967295,O=j+(k<<22&4294967295|k>>>10),k=M+(j^L&(O^j))+S[1]+4129170786&4294967295,M=O+(k<<5&4294967295|k>>>27),k=L+(O^j&(M^O))+S[6]+3225465664&4294967295,L=M+(k<<9&4294967295|k>>>23),k=j+(M^O&(L^M))+S[11]+643717713&4294967295,j=L+(k<<14&4294967295|k>>>18),k=O+(L^M&(j^L))+S[0]+3921069994&4294967295,O=j+(k<<20&4294967295|k>>>12),k=M+(j^L&(O^j))+S[5]+3593408605&4294967295,M=O+(k<<5&4294967295|k>>>27),k=L+(O^j&(M^O))+S[10]+38016083&4294967295,L=M+(k<<9&4294967295|k>>>23),k=j+(M^O&(L^M))+S[15]+3634488961&4294967295,j=L+(k<<14&4294967295|k>>>18),k=O+(L^M&(j^L))+S[4]+3889429448&4294967295,O=j+(k<<20&4294967295|k>>>12),k=M+(j^L&(O^j))+S[9]+568446438&4294967295,M=O+(k<<5&4294967295|k>>>27),k=L+(O^j&(M^O))+S[14]+3275163606&4294967295,L=M+(k<<9&4294967295|k>>>23),k=j+(M^O&(L^M))+S[3]+4107603335&4294967295,j=L+(k<<14&4294967295|k>>>18),k=O+(L^M&(j^L))+S[8]+1163531501&4294967295,O=j+(k<<20&4294967295|k>>>12),k=M+(j^L&(O^j))+S[13]+2850285829&4294967295,M=O+(k<<5&4294967295|k>>>27),k=L+(O^j&(M^O))+S[2]+4243563512&4294967295,L=M+(k<<9&4294967295|k>>>23),k=j+(M^O&(L^M))+S[7]+1735328473&4294967295,j=L+(k<<14&4294967295|k>>>18),k=O+(L^M&(j^L))+S[12]+2368359562&4294967295,O=j+(k<<20&4294967295|k>>>12),k=M+(O^j^L)+S[5]+4294588738&4294967295,M=O+(k<<4&4294967295|k>>>28),k=L+(M^O^j)+S[8]+2272392833&4294967295,L=M+(k<<11&4294967295|k>>>21),k=j+(L^M^O)+S[11]+1839030562&4294967295,j=L+(k<<16&4294967295|k>>>16),k=O+(j^L^M)+S[14]+4259657740&4294967295,O=j+(k<<23&4294967295|k>>>9),k=M+(O^j^L)+S[1]+2763975236&4294967295,M=O+(k<<4&4294967295|k>>>28),k=L+(M^O^j)+S[4]+1272893353&4294967295,L=M+(k<<11&4294967295|k>>>21),k=j+(L^M^O)+S[7]+4139469664&4294967295,j=L+(k<<16&4294967295|k>>>16),k=O+(j^L^M)+S[10]+3200236656&4294967295,O=j+(k<<23&4294967295|k>>>9),k=M+(O^j^L)+S[13]+681279174&4294967295,M=O+(k<<4&4294967295|k>>>28),k=L+(M^O^j)+S[0]+3936430074&4294967295,L=M+(k<<11&4294967295|k>>>21),k=j+(L^M^O)+S[3]+3572445317&4294967295,j=L+(k<<16&4294967295|k>>>16),k=O+(j^L^M)+S[6]+76029189&4294967295,O=j+(k<<23&4294967295|k>>>9),k=M+(O^j^L)+S[9]+3654602809&4294967295,M=O+(k<<4&4294967295|k>>>28),k=L+(M^O^j)+S[12]+3873151461&4294967295,L=M+(k<<11&4294967295|k>>>21),k=j+(L^M^O)+S[15]+530742520&4294967295,j=L+(k<<16&4294967295|k>>>16),k=O+(j^L^M)+S[2]+3299628645&4294967295,O=j+(k<<23&4294967295|k>>>9),k=M+(j^(O|~L))+S[0]+4096336452&4294967295,M=O+(k<<6&4294967295|k>>>26),k=L+(O^(M|~j))+S[7]+1126891415&4294967295,L=M+(k<<10&4294967295|k>>>22),k=j+(M^(L|~O))+S[14]+2878612391&4294967295,j=L+(k<<15&4294967295|k>>>17),k=O+(L^(j|~M))+S[5]+4237533241&4294967295,O=j+(k<<21&4294967295|k>>>11),k=M+(j^(O|~L))+S[12]+1700485571&4294967295,M=O+(k<<6&4294967295|k>>>26),k=L+(O^(M|~j))+S[3]+2399980690&4294967295,L=M+(k<<10&4294967295|k>>>22),k=j+(M^(L|~O))+S[10]+4293915773&4294967295,j=L+(k<<15&4294967295|k>>>17),k=O+(L^(j|~M))+S[1]+2240044497&4294967295,O=j+(k<<21&4294967295|k>>>11),k=M+(j^(O|~L))+S[8]+1873313359&4294967295,M=O+(k<<6&4294967295|k>>>26),k=L+(O^(M|~j))+S[15]+4264355552&4294967295,L=M+(k<<10&4294967295|k>>>22),k=j+(M^(L|~O))+S[6]+2734768916&4294967295,j=L+(k<<15&4294967295|k>>>17),k=O+(L^(j|~M))+S[13]+1309151649&4294967295,O=j+(k<<21&4294967295|k>>>11),k=M+(j^(O|~L))+S[4]+4149444226&4294967295,M=O+(k<<6&4294967295|k>>>26),k=L+(O^(M|~j))+S[11]+3174756917&4294967295,L=M+(k<<10&4294967295|k>>>22),k=j+(M^(L|~O))+S[2]+718787259&4294967295,j=L+(k<<15&4294967295|k>>>17),k=O+(L^(j|~M))+S[9]+3951481745&4294967295,D.g[0]=D.g[0]+M&4294967295,D.g[1]=D.g[1]+(j+(k<<21&4294967295|k>>>11))&4294967295,D.g[2]=D.g[2]+j&4294967295,D.g[3]=D.g[3]+L&4294967295}i.prototype.u=function(D,M){M===void 0&&(M=D.length);for(var O=M-this.blockSize,S=this.B,j=this.h,L=0;L<M;){if(j==0)for(;L<=O;)o(this,D,L),L+=this.blockSize;if(typeof D=="string"){for(;L<M;)if(S[j++]=D.charCodeAt(L++),j==this.blockSize){o(this,S),j=0;break}}else for(;L<M;)if(S[j++]=D[L++],j==this.blockSize){o(this,S),j=0;break}}this.h=j,this.o+=M},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var M=1;M<D.length-8;++M)D[M]=0;var O=8*this.o;for(M=D.length-8;M<D.length;++M)D[M]=O&255,O/=256;for(this.u(D),D=Array(16),M=O=0;4>M;++M)for(var S=0;32>S;S+=8)D[O++]=this.g[M]>>>S&255;return D};function l(D,M){var O=f;return Object.prototype.hasOwnProperty.call(O,D)?O[D]:O[D]=M(D)}function u(D,M){this.h=M;for(var O=[],S=!0,j=D.length-1;0<=j;j--){var L=D[j]|0;S&&L==M||(O[j]=L,S=!1)}this.g=O}var f={};function p(D){return-128<=D&&128>D?l(D,function(M){return new u([M|0],0>M?-1:0)}):new u([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return x;if(0>D)return P(g(-D));for(var M=[],O=1,S=0;D>=O;S++)M[S]=D/O|0,O*=4294967296;return new u(M,0)}function y(D,M){if(D.length==0)throw Error("number format error: empty string");if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(D.charAt(0)=="-")return P(y(D.substring(1),M));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var O=g(Math.pow(M,8)),S=x,j=0;j<D.length;j+=8){var L=Math.min(8,D.length-j),k=parseInt(D.substring(j,j+L),M);8>L?(L=g(Math.pow(M,L)),S=S.j(L).add(g(k))):(S=S.j(O),S=S.add(g(k)))}return S}var x=p(0),_=p(1),w=p(16777216);e=u.prototype,e.m=function(){if(R(this))return-P(this).m();for(var D=0,M=1,O=0;O<this.g.length;O++){var S=this.i(O);D+=(0<=S?S:4294967296+S)*M,M*=4294967296}return D},e.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(C(this))return"0";if(R(this))return"-"+P(this).toString(D);for(var M=g(Math.pow(D,6)),O=this,S="";;){var j=$(O,M).g;O=V(O,j.j(M));var L=((0<O.g.length?O.g[0]:O.h)>>>0).toString(D);if(O=j,C(O))return L+S;for(;6>L.length;)L="0"+L;S=L+S}},e.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function C(D){if(D.h!=0)return!1;for(var M=0;M<D.g.length;M++)if(D.g[M]!=0)return!1;return!0}function R(D){return D.h==-1}e.l=function(D){return D=V(this,D),R(D)?-1:C(D)?0:1};function P(D){for(var M=D.g.length,O=[],S=0;S<M;S++)O[S]=~D.g[S];return new u(O,~D.h).add(_)}e.abs=function(){return R(this)?P(this):this},e.add=function(D){for(var M=Math.max(this.g.length,D.g.length),O=[],S=0,j=0;j<=M;j++){var L=S+(this.i(j)&65535)+(D.i(j)&65535),k=(L>>>16)+(this.i(j)>>>16)+(D.i(j)>>>16);S=k>>>16,L&=65535,k&=65535,O[j]=k<<16|L}return new u(O,O[O.length-1]&-2147483648?-1:0)};function V(D,M){return D.add(P(M))}e.j=function(D){if(C(this)||C(D))return x;if(R(this))return R(D)?P(this).j(P(D)):P(P(this).j(D));if(R(D))return P(this.j(P(D)));if(0>this.l(w)&&0>D.l(w))return g(this.m()*D.m());for(var M=this.g.length+D.g.length,O=[],S=0;S<2*M;S++)O[S]=0;for(S=0;S<this.g.length;S++)for(var j=0;j<D.g.length;j++){var L=this.i(S)>>>16,k=this.i(S)&65535,ft=D.i(j)>>>16,lt=D.i(j)&65535;O[2*S+2*j]+=k*lt,F(O,2*S+2*j),O[2*S+2*j+1]+=L*lt,F(O,2*S+2*j+1),O[2*S+2*j+1]+=k*ft,F(O,2*S+2*j+1),O[2*S+2*j+2]+=L*ft,F(O,2*S+2*j+2)}for(S=0;S<M;S++)O[S]=O[2*S+1]<<16|O[2*S];for(S=M;S<2*M;S++)O[S]=0;return new u(O,0)};function F(D,M){for(;(D[M]&65535)!=D[M];)D[M+1]+=D[M]>>>16,D[M]&=65535,M++}function z(D,M){this.g=D,this.h=M}function $(D,M){if(C(M))throw Error("division by zero");if(C(D))return new z(x,x);if(R(D))return M=$(P(D),M),new z(P(M.g),P(M.h));if(R(M))return M=$(D,P(M)),new z(P(M.g),M.h);if(30<D.g.length){if(R(D)||R(M))throw Error("slowDivide_ only works with positive integers.");for(var O=_,S=M;0>=S.l(D);)O=B(O),S=B(S);var j=X(O,1),L=X(S,1);for(S=X(S,2),O=X(O,2);!C(S);){var k=L.add(S);0>=k.l(D)&&(j=j.add(O),L=k),S=X(S,1),O=X(O,1)}return M=V(D,j.j(M)),new z(j,M)}for(j=x;0<=D.l(M);){for(O=Math.max(1,Math.floor(D.m()/M.m())),S=Math.ceil(Math.log(O)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),L=g(O),k=L.j(M);R(k)||0<k.l(D);)O-=S,L=g(O),k=L.j(M);C(L)&&(L=_),j=j.add(L),D=V(D,k)}return new z(j,D)}e.A=function(D){return $(this,D).h},e.and=function(D){for(var M=Math.max(this.g.length,D.g.length),O=[],S=0;S<M;S++)O[S]=this.i(S)&D.i(S);return new u(O,this.h&D.h)},e.or=function(D){for(var M=Math.max(this.g.length,D.g.length),O=[],S=0;S<M;S++)O[S]=this.i(S)|D.i(S);return new u(O,this.h|D.h)},e.xor=function(D){for(var M=Math.max(this.g.length,D.g.length),O=[],S=0;S<M;S++)O[S]=this.i(S)^D.i(S);return new u(O,this.h^D.h)};function B(D){for(var M=D.g.length+1,O=[],S=0;S<M;S++)O[S]=D.i(S)<<1|D.i(S-1)>>>31;return new u(O,D.h)}function X(D,M){var O=M>>5;M%=32;for(var S=D.g.length-O,j=[],L=0;L<S;L++)j[L]=0<M?D.i(L+O)>>>M|D.i(L+O+1)<<32-M:D.i(L+O);return new u(j,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l2=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=y,Za=u}).apply(typeof bS<"u"?bS:typeof self<"u"?self:typeof window<"u"?window:{});var vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var c2,tu,u2,Mf,Ym,d2,f2,h2;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(d,b,E){return d==Array.prototype||d==Object.prototype||(d[b]=E.value),d};function n(d){d=[typeof globalThis=="object"&&globalThis,d,typeof window=="object"&&window,typeof self=="object"&&self,typeof vf=="object"&&vf];for(var b=0;b<d.length;++b){var E=d[b];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=n(this);function o(d,b){if(b)t:{var E=i;d=d.split(".");for(var N=0;N<d.length-1;N++){var Y=d[N];if(!(Y in E))break t;E=E[Y]}d=d[d.length-1],N=E[d],b=b(N),b!=N&&b!=null&&t(E,d,{configurable:!0,writable:!0,value:b})}}function l(d,b){d instanceof String&&(d+="");var E=0,N=!1,Y={next:function(){if(!N&&E<d.length){var et=E++;return{value:b(et,d[et]),done:!1}}return N=!0,{done:!0,value:void 0}}};return Y[Symbol.iterator]=function(){return Y},Y}o("Array.prototype.values",function(d){return d||function(){return l(this,function(b,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function p(d){var b=typeof d;return b=b!="object"?b:d?Array.isArray(d)?"array":b:"null",b=="array"||b=="object"&&typeof d.length=="number"}function g(d){var b=typeof d;return b=="object"&&d!=null||b=="function"}function y(d,b,E){return d.call.apply(d.bind,arguments)}function x(d,b,E){if(!d)throw Error();if(2<arguments.length){var N=Array.prototype.slice.call(arguments,2);return function(){var Y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(Y,N),d.apply(b,Y)}}return function(){return d.apply(b,arguments)}}function _(d,b,E){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:x,_.apply(null,arguments)}function w(d,b){var E=Array.prototype.slice.call(arguments,1);return function(){var N=E.slice();return N.push.apply(N,arguments),d.apply(this,N)}}function C(d,b){function E(){}E.prototype=b.prototype,d.aa=b.prototype,d.prototype=new E,d.prototype.constructor=d,d.Qb=function(N,Y,et){for(var mt=Array(arguments.length-2),Jt=2;Jt<arguments.length;Jt++)mt[Jt-2]=arguments[Jt];return b.prototype[Y].apply(N,mt)}}function R(d){const b=d.length;if(0<b){const E=Array(b);for(let N=0;N<b;N++)E[N]=d[N];return E}return[]}function P(d,b){for(let E=1;E<arguments.length;E++){const N=arguments[E];if(p(N)){const Y=d.length||0,et=N.length||0;d.length=Y+et;for(let mt=0;mt<et;mt++)d[Y+mt]=N[mt]}else d.push(N)}}class V{constructor(b,E){this.i=b,this.j=E,this.h=0,this.g=null}get(){let b;return 0<this.h?(this.h--,b=this.g,this.g=b.next,b.next=null):b=this.i(),b}}function F(d){return/^[\s\xa0]*$/.test(d)}function z(){var d=f.navigator;return d&&(d=d.userAgent)?d:""}function $(d){return $[" "](d),d}$[" "]=function(){};var B=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function X(d,b,E){for(const N in d)b.call(E,d[N],N,d)}function D(d,b){for(const E in d)b.call(void 0,d[E],E,d)}function M(d){const b={};for(const E in d)b[E]=d[E];return b}const O="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(d,b){let E,N;for(let Y=1;Y<arguments.length;Y++){N=arguments[Y];for(E in N)d[E]=N[E];for(let et=0;et<O.length;et++)E=O[et],Object.prototype.hasOwnProperty.call(N,E)&&(d[E]=N[E])}}function j(d){var b=1;d=d.split(":");const E=[];for(;0<b&&d.length;)E.push(d.shift()),b--;return d.length&&E.push(d.join(":")),E}function L(d){f.setTimeout(()=>{throw d},0)}function k(){var d=it;let b=null;return d.g&&(b=d.g,d.g=d.g.next,d.g||(d.h=null),b.next=null),b}class ft{constructor(){this.h=this.g=null}add(b,E){const N=lt.get();N.set(b,E),this.h?this.h.next=N:this.g=N,this.h=N}}var lt=new V(()=>new q,d=>d.reset());class q{constructor(){this.next=this.g=this.h=null}set(b,E){this.h=b,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,at=!1,it=new ft,U=()=>{const d=f.Promise.resolve(void 0);nt=()=>{d.then(tt)}};var tt=()=>{for(var d;d=k();){try{d.h.call(d.g)}catch(E){L(E)}var b=lt;b.j(d),100>b.h&&(b.h++,d.next=b.g,b.g=d)}at=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(d,b){this.type=d,this.g=this.target=b,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var bt=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var d=!1,b=Object.defineProperty({},"passive",{get:function(){d=!0}});try{const E=()=>{};f.addEventListener("test",E,b),f.removeEventListener("test",E,b)}catch{}return d}();function jt(d,b){if(dt.call(this,d?d.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,d){var E=this.type=d.type,N=d.changedTouches&&d.changedTouches.length?d.changedTouches[0]:null;if(this.target=d.target||d.srcElement,this.g=b,b=d.relatedTarget){if(B){t:{try{$(b.nodeName);var Y=!0;break t}catch{}Y=!1}Y||(b=null)}}else E=="mouseover"?b=d.fromElement:E=="mouseout"&&(b=d.toElement);this.relatedTarget=b,N?(this.clientX=N.clientX!==void 0?N.clientX:N.pageX,this.clientY=N.clientY!==void 0?N.clientY:N.pageY,this.screenX=N.screenX||0,this.screenY=N.screenY||0):(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0),this.button=d.button,this.key=d.key||"",this.ctrlKey=d.ctrlKey,this.altKey=d.altKey,this.shiftKey=d.shiftKey,this.metaKey=d.metaKey,this.pointerId=d.pointerId||0,this.pointerType=typeof d.pointerType=="string"?d.pointerType:_t[d.pointerType]||"",this.state=d.state,this.i=d,d.defaultPrevented&&jt.aa.h.call(this)}}C(jt,dt);var _t={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var d=this.i;d.preventDefault?d.preventDefault():d.returnValue=!1};var Ce="closure_listenable_"+(1e6*Math.random()|0),Wt=0;function dn(d,b,E,N,Y){this.listener=d,this.proxy=null,this.src=b,this.type=E,this.capture=!!N,this.ha=Y,this.key=++Wt,this.da=this.fa=!1}function Nt(d){d.da=!0,d.listener=null,d.proxy=null,d.src=null,d.ha=null}function Qt(d){this.src=d,this.g={},this.h=0}Qt.prototype.add=function(d,b,E,N,Y){var et=d.toString();d=this.g[et],d||(d=this.g[et]=[],this.h++);var mt=Sn(d,b,N,Y);return-1<mt?(b=d[mt],E||(b.fa=!1)):(b=new dn(b,this.src,et,!!N,Y),b.fa=E,d.push(b)),b};function le(d,b){var E=b.type;if(E in d.g){var N=d.g[E],Y=Array.prototype.indexOf.call(N,b,void 0),et;(et=0<=Y)&&Array.prototype.splice.call(N,Y,1),et&&(Nt(b),d.g[E].length==0&&(delete d.g[E],d.h--))}}function Sn(d,b,E,N){for(var Y=0;Y<d.length;++Y){var et=d[Y];if(!et.da&&et.listener==b&&et.capture==!!E&&et.ha==N)return Y}return-1}var Fe="closure_lm_"+(1e6*Math.random()|0),kn={};function xr(d,b,E,N,Y){if(Array.isArray(b)){for(var et=0;et<b.length;et++)xr(d,b[et],E,N,Y);return null}return E=bs(E),d&&d[Ce]?d.K(b,E,g(N)?!!N.capture:!1,Y):ge(d,b,E,!1,N,Y)}function ge(d,b,E,N,Y,et){if(!b)throw Error("Invalid event type");var mt=g(Y)?!!Y.capture:!!Y,Jt=Ni(d);if(Jt||(d[Fe]=Jt=new Qt(d)),E=Jt.add(b,E,N,mt,et),E.proxy)return E;if(N=Qe(),E.proxy=N,N.src=d,N.listener=E,d.addEventListener)bt||(Y=mt),Y===void 0&&(Y=!1),d.addEventListener(b.toString(),N,Y);else if(d.attachEvent)d.attachEvent(Ae(b.toString()),N);else if(d.addListener&&d.removeListener)d.addListener(N);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Qe(){function d(E){return b.call(d.src,d.listener,E)}const b=Vt;return d}function _n(d,b,E,N,Y){if(Array.isArray(b))for(var et=0;et<b.length;et++)_n(d,b[et],E,N,Y);else N=g(N)?!!N.capture:!!N,E=bs(E),d&&d[Ce]?(d=d.i,b=String(b).toString(),b in d.g&&(et=d.g[b],E=Sn(et,E,N,Y),-1<E&&(Nt(et[E]),Array.prototype.splice.call(et,E,1),et.length==0&&(delete d.g[b],d.h--)))):d&&(d=Ni(d))&&(b=d.g[b.toString()],d=-1,b&&(d=Sn(b,E,N,Y)),(E=-1<d?b[d]:null)&&Hn(E))}function Hn(d){if(typeof d!="number"&&d&&!d.da){var b=d.src;if(b&&b[Ce])le(b.i,d);else{var E=d.type,N=d.proxy;b.removeEventListener?b.removeEventListener(E,N,d.capture):b.detachEvent?b.detachEvent(Ae(E),N):b.addListener&&b.removeListener&&b.removeListener(N),(E=Ni(b))?(le(E,d),E.h==0&&(E.src=null,b[Fe]=null)):Nt(d)}}}function Ae(d){return d in kn?kn[d]:kn[d]="on"+d}function Vt(d,b){if(d.da)d=!0;else{b=new jt(b,this);var E=d.listener,N=d.ha||d.src;d.fa&&Hn(d),d=E.call(N,b)}return d}function Ni(d){return d=d[Fe],d instanceof Qt?d:null}var ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function bs(d){return typeof d=="function"?d:(d[ya]||(d[ya]=function(b){return d.handleEvent(b)}),d[ya])}function De(){ht.call(this),this.i=new Qt(this),this.M=this,this.F=null}C(De,ht),De.prototype[Ce]=!0,De.prototype.removeEventListener=function(d,b,E,N){_n(this,d,b,E,N)};function ce(d,b){var E,N=d.F;if(N)for(E=[];N;N=N.F)E.push(N);if(d=d.M,N=b.type||b,typeof b=="string")b=new dt(b,d);else if(b instanceof dt)b.target=b.target||d;else{var Y=b;b=new dt(N,d),S(b,Y)}if(Y=!0,E)for(var et=E.length-1;0<=et;et--){var mt=b.g=E[et];Y=fn(mt,N,!0,b)&&Y}if(mt=b.g=d,Y=fn(mt,N,!0,b)&&Y,Y=fn(mt,N,!1,b)&&Y,E)for(et=0;et<E.length;et++)mt=b.g=E[et],Y=fn(mt,N,!1,b)&&Y}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var d=this.i,b;for(b in d.g){for(var E=d.g[b],N=0;N<E.length;N++)Nt(E[N]);delete d.g[b],d.h--}}this.F=null},De.prototype.K=function(d,b,E,N){return this.i.add(String(d),b,!1,E,N)},De.prototype.L=function(d,b,E,N){return this.i.add(String(d),b,!0,E,N)};function fn(d,b,E,N){if(b=d.i.g[String(b)],!b)return!0;b=b.concat();for(var Y=!0,et=0;et<b.length;++et){var mt=b[et];if(mt&&!mt.da&&mt.capture==E){var Jt=mt.listener,rn=mt.ha||mt.src;mt.fa&&le(d.i,mt),Y=Jt.call(rn,N)!==!1&&Y}}return Y&&!N.defaultPrevented}function hn(d,b,E){if(typeof d=="function")E&&(d=_(d,E));else if(d&&typeof d.handleEvent=="function")d=_(d.handleEvent,d);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:f.setTimeout(d,b||0)}function xs(d){d.g=hn(()=>{d.g=null,d.i&&(d.i=!1,xs(d))},d.l);const b=d.h;d.h=null,d.m.apply(null,b)}class Ss extends ht{constructor(b,E){super(),this.m=b,this.l=E,this.h=null,this.i=!1,this.g=null}j(b){this.h=arguments,this.g?this.i=!0:xs(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(d){ht.call(this),this.h=d,this.g={}}C(ti,ht);var ki=[];function ei(d){X(d.g,function(b,E){this.g.hasOwnProperty(E)&&Hn(b)},d),d.g={}}ti.prototype.N=function(){ti.aa.N.call(this),ei(this)},ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=f.JSON.stringify,va=f.JSON.parse,Pi=class{stringify(d){return f.JSON.stringify(d,void 0)}parse(d){return f.JSON.parse(d,void 0)}};function ba(){}ba.prototype.h=null;function ni(d){return d.h||(d.h=d.i())}function po(){}var Lr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ar(){dt.call(this,"d")}C(ar,dt);function go(){dt.call(this,"c")}C(go,dt);var Sr={},mo=null;function ri(){return mo=mo||new De}Sr.La="serverreachability";function xa(d){dt.call(this,Sr.La,d)}C(xa,dt);function ii(d){const b=ri();ce(b,new xa(b))}Sr.STAT_EVENT="statevent";function vt(d,b){dt.call(this,Sr.STAT_EVENT,d),this.stat=b}C(vt,dt);function yt(d){const b=ri();ce(b,new vt(b,d))}Sr.Ma="timingevent";function Rt(d,b){dt.call(this,Sr.Ma,d),this.size=b}C(Rt,dt);function It(d,b){if(typeof d!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){d()},b)}function Xt(){this.g=!0}Xt.prototype.xa=function(){this.g=!1};function jn(d,b,E,N,Y,et){d.info(function(){if(d.g)if(et)for(var mt="",Jt=et.split("&"),rn=0;rn<Jt.length;rn++){var te=Jt[rn].split("=");if(1<te.length){var gn=te[0];te=te[1];var an=gn.split("_");mt=2<=an.length&&an[1]=="type"?mt+(gn+"="+te+"&"):mt+(gn+"=redacted&")}}else mt=null;else mt=et;return"XMLHTTP REQ ("+N+") [attempt "+Y+"]: "+b+`
`+E+`
`+mt})}function Br(d,b,E,N,Y,et,mt){d.info(function(){return"XMLHTTP RESP ("+N+") [ attempt "+Y+"]: "+b+`
`+E+`
`+et+" "+mt})}function Xn(d,b,E,N){d.info(function(){return"XMLHTTP TEXT ("+b+"): "+Ur(d,E)+(N?" "+N:"")})}function yo(d,b){d.info(function(){return"TIMEOUT: "+b})}Xt.prototype.info=function(){};function Ur(d,b){if(!d.g)return b;if(!b)return null;try{var E=JSON.parse(b);if(E){for(d=0;d<E.length;d++)if(Array.isArray(E[d])){var N=E[d];if(!(2>N.length)){var Y=N[1];if(Array.isArray(Y)&&!(1>Y.length)){var et=Y[0];if(et!="noop"&&et!="stop"&&et!="close")for(var mt=1;mt<Y.length;mt++)Y[mt]=""}}}}return Pn(E)}catch{return b}}var Sa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ji={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ai;function oi(){}C(oi,ba),oi.prototype.g=function(){return new XMLHttpRequest},oi.prototype.i=function(){return{}},ai=new oi;function Fn(d,b,E,N){this.j=d,this.i=b,this.l=E,this.R=N||1,this.U=new ti(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qe}function qe(){this.i=null,this.g="",this.h=!1}var $l={},_s={};function $r(d,b,E){d.L=1,d.v=_o(or(b)),d.m=E,d.P=!0,Vi(d,null)}function Vi(d,b){d.F=Date.now(),vo(d),d.A=or(d.v);var E=d.A,N=d.R;Array.isArray(N)||(N=[String(N)]),Yl(E.i,"t",N),d.C=0,E=d.j.J,d.h=new qe,d.g=nd(d.j,E?b:null,!d.m),0<d.O&&(d.M=new Ss(_(d.Y,d,d.g),d.O)),b=d.U,E=d.g,N=d.ca;var Y="readystatechange";Array.isArray(Y)||(Y&&(ki[0]=Y.toString()),Y=ki);for(var et=0;et<Y.length;et++){var mt=xr(E,Y[et],N||b.handleEvent,!1,b.h||b);if(!mt)break;b.g[mt.key]=mt}b=d.H?M(d.H):{},d.m?(d.u||(d.u="POST"),b["Content-Type"]="application/x-www-form-urlencoded",d.g.ea(d.A,d.u,d.m,b)):(d.u="GET",d.g.ea(d.A,d.u,null,b)),ii(),jn(d.i,d.u,d.A,d.l,d.R,d.m)}Fn.prototype.ca=function(d){d=d.target;const b=this.M;b&&wr(d)==3?b.j():this.Y(d)},Fn.prototype.Y=function(d){try{if(d==this.g)t:{const an=wr(this.g);var b=this.g.Ba();const qi=this.g.Z();if(!(3>an)&&(an!=3||this.g&&(this.h.h||this.g.oa()||Yu(this.g)))){this.J||an!=4||b==7||(b==8||0>=qi?ii(3):ii(2)),_a(this);var E=this.g.Z();this.X=E;e:if(Uu(this)){var N=Yu(this.g);d="";var Y=N.length,et=wr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),si(this);var mt="";break e}this.h.i=new f.TextDecoder}for(b=0;b<Y;b++)this.h.h=!0,d+=this.h.i.decode(N[b],{stream:!(et&&b==Y-1)});N.length=0,this.h.g+=d,this.C=0,mt=this.h.g}else mt=this.g.oa();if(this.o=E==200,Br(this.i,this.u,this.A,this.l,this.R,an,E),this.o){if(this.T&&!this.K){e:{if(this.g){var Jt,rn=this.g;if((Jt=rn.g?rn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Jt)){var te=Jt;break e}}te=null}if(E=te)Xn(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bo(this,E);else{this.o=!1,this.s=3,yt(12),En(this),si(this);break t}}if(this.P){E=!0;let Tn;for(;!this.J&&this.C<mt.length;)if(Tn=$u(this,mt),Tn==_s){an==4&&(this.s=4,yt(14),E=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(Tn==$l){this.s=4,yt(15),Xn(this.i,this.l,mt,"[Invalid Chunk]"),E=!1;break}else Xn(this.i,this.l,Tn,null),bo(this,Tn);if(Uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),an!=4||mt.length!=0||this.h.h||(this.s=1,yt(16),E=!1),this.o=this.o&&E,!E)Xn(this.i,this.l,mt,"[Invalid Chunked Response]"),En(this),si(this);else if(0<mt.length&&!this.W){this.W=!0;var gn=this.j;gn.g==this&&gn.ba&&!gn.M&&(gn.j.info("Great, no buffering proxy detected. Bytes received: "+mt.length),Mo(gn),gn.M=!0,yt(11))}}else Xn(this.i,this.l,mt,null),bo(this,mt);an==4&&En(this),this.o&&!this.J&&(an==4?Ju(this.j,this):(this.o=!1,vo(this)))}else Qh(this.g),E==400&&0<mt.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),En(this),si(this)}}}catch{}finally{}};function Uu(d){return d.g?d.u=="GET"&&d.L!=2&&d.j.Ca:!1}function $u(d,b){var E=d.C,N=b.indexOf(`
`,E);return N==-1?_s:(E=Number(b.substring(E,N)),isNaN(E)?$l:(N+=1,N+E>b.length?_s:(b=b.slice(N,N+E),d.C=N+E,b)))}Fn.prototype.cancel=function(){this.J=!0,En(this)};function vo(d){d.S=Date.now()+d.I,Hu(d,d.I)}function Hu(d,b){if(d.B!=null)throw Error("WatchDog timer not null");d.B=It(_(d.ba,d),b)}function _a(d){d.B&&(f.clearTimeout(d.B),d.B=null)}Fn.prototype.ba=function(){this.B=null;const d=Date.now();0<=d-this.S?(yo(this.i,this.A),this.L!=2&&(ii(),yt(17)),En(this),this.s=2,si(this)):Hu(this,this.S-d)};function si(d){d.j.G==0||d.J||Ju(d.j,d)}function En(d){_a(d);var b=d.M;b&&typeof b.ma=="function"&&b.ma(),d.M=null,ei(d.U),d.g&&(b=d.g,d.g=null,b.abort(),b.ma())}function bo(d,b){try{var E=d.j;if(E.G!=0&&(E.g==d||Hl(E.h,d))){if(!d.K&&Hl(E.h,d)&&E.G==3){try{var N=E.Da.g.parse(b)}catch{N=null}if(Array.isArray(N)&&N.length==3){var Y=N;if(Y[0]==0){t:if(!E.u){if(E.g)if(E.g.F+3e3<d.F)ks(E),Ds(E);else break t;Jl(E),yt(18)}}else E.za=Y[1],0<E.za-E.T&&37500>Y[2]&&E.F&&E.v==0&&!E.C&&(E.C=It(_(E.Za,E),6e3));if(1>=Ts(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Fi(E,11)}else if((d.K||E.g==d)&&ks(E),!F(b))for(Y=E.Da.g.parse(b),b=0;b<Y.length;b++){let te=Y[b];if(E.T=te[0],te=te[1],E.G==2)if(te[0]=="c"){E.K=te[1],E.ia=te[2];const gn=te[3];gn!=null&&(E.la=gn,E.j.info("VER="+E.la));const an=te[4];an!=null&&(E.Aa=an,E.j.info("SVER="+E.Aa));const qi=te[5];qi!=null&&typeof qi=="number"&&0<qi&&(N=1.5*qi,E.L=N,E.j.info("backChannelRequestTimeoutMs_="+N)),N=E;const Tn=d.g;if(Tn){const pi=Tn.g?Tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pi){var et=N.h;et.g||pi.indexOf("spdy")==-1&&pi.indexOf("quic")==-1&&pi.indexOf("h2")==-1||(et.j=et.l,et.g=new Set,et.h&&(ws(et,et.h),et.h=null))}if(N.D){const ec=Tn.g?Tn.g.getResponseHeader("X-HTTP-Session-Id"):null;ec&&(N.ya=ec,Se(N.I,N.D,ec))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-d.F,E.j.info("Handshake RTT: "+E.R+"ms")),N=E;var mt=d;if(N.qa=ed(N,N.J?N.ia:null,N.W),mt.K){qn(N.h,mt);var Jt=mt,rn=N.L;rn&&(Jt.I=rn),Jt.B&&(_a(Jt),vo(Jt)),N.g=mt}else Xu(N);0<E.i.length&&Ns(E)}else te[0]!="stop"&&te[0]!="close"||Fi(E,7);else E.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?Fi(E,7):Xl(E):te[0]!="noop"&&E.l&&E.l.ta(te),E.v=0)}}ii(4)}catch{}}var Fu=class{constructor(d,b){this.g=d,this.map=b}};function zi(d){this.l=d||10,f.PerformanceNavigationTiming?(d=f.performance.getEntriesByType("navigation"),d=0<d.length&&(d[0].nextHopProtocol=="hq"||d[0].nextHopProtocol=="h2")):d=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=d?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Es(d){return d.h?!0:d.g?d.g.size>=d.j:!1}function Ts(d){return d.h?1:d.g?d.g.size:0}function Hl(d,b){return d.h?d.h==b:d.g?d.g.has(b):!1}function ws(d,b){d.g?d.g.add(b):d.h=b}function qn(d,b){d.h&&d.h==b?d.h=null:d.g&&d.g.has(b)&&d.g.delete(b)}zi.prototype.cancel=function(){if(this.i=Fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const d of this.g.values())d.cancel();this.g.clear()}};function Fl(d){if(d.h!=null)return d.i.concat(d.h.D);if(d.g!=null&&d.g.size!==0){let b=d.i;for(const E of d.g.values())b=b.concat(E.D);return b}return R(d.i)}function Gh(d){if(d.V&&typeof d.V=="function")return d.V();if(typeof Map<"u"&&d instanceof Map||typeof Set<"u"&&d instanceof Set)return Array.from(d.values());if(typeof d=="string")return d.split("");if(p(d)){for(var b=[],E=d.length,N=0;N<E;N++)b.push(d[N]);return b}b=[],E=0;for(N in d)b[E++]=d[N];return b}function Cs(d){if(d.na&&typeof d.na=="function")return d.na();if(!d.V||typeof d.V!="function"){if(typeof Map<"u"&&d instanceof Map)return Array.from(d.keys());if(!(typeof Set<"u"&&d instanceof Set)){if(p(d)||typeof d=="string"){var b=[];d=d.length;for(var E=0;E<d;E++)b.push(E);return b}b=[],E=0;for(const N in d)b[E++]=N;return b}}}function ql(d,b){if(d.forEach&&typeof d.forEach=="function")d.forEach(b,void 0);else if(p(d)||typeof d=="string")Array.prototype.forEach.call(d,b,void 0);else for(var E=Cs(d),N=Gh(d),Y=N.length,et=0;et<Y;et++)b.call(void 0,N[et],E&&E[et],d)}var xo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kh(d,b){if(d){d=d.split("&");for(var E=0;E<d.length;E++){var N=d[E].indexOf("="),Y=null;if(0<=N){var et=d[E].substring(0,N);Y=d[E].substring(N+1)}else et=d[E];b(et,Y?decodeURIComponent(Y.replace(/\+/g," ")):"")}}}function Xe(d){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,d instanceof Xe){this.h=d.h,So(this,d.j),this.o=d.o,this.g=d.g,Ea(this,d.s),this.l=d.l;var b=d.i,E=new Bi;E.i=b.i,b.g&&(E.g=new Map(b.g),E.h=b.h),Li(this,E),this.m=d.m}else d&&(b=String(d).match(xo))?(this.h=!1,So(this,b[1]||"",!0),this.o=_r(b[2]||""),this.g=_r(b[3]||"",!0),Ea(this,b[4]),this.l=_r(b[5]||"",!0),Li(this,b[6]||"",!0),this.m=_r(b[7]||"")):(this.h=!1,this.i=new Bi(null,this.h))}Xe.prototype.toString=function(){var d=[],b=this.j;b&&d.push(Eo(b,Gl,!0),":");var E=this.g;return(E||b=="file")&&(d.push("//"),(b=this.o)&&d.push(Eo(b,Gl,!0),"@"),d.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&d.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&d.push("/"),d.push(Eo(E,E.charAt(0)=="/"?Yh:Kl,!0))),(E=this.i.toString())&&d.push("?",E),(E=this.m)&&d.push("#",Eo(E,As)),d.join("")};function or(d){return new Xe(d)}function So(d,b,E){d.j=E?_r(b,!0):b,d.j&&(d.j=d.j.replace(/:$/,""))}function Ea(d,b){if(b){if(b=Number(b),isNaN(b)||0>b)throw Error("Bad port number "+b);d.s=b}else d.s=null}function Li(d,b,E){b instanceof Bi?(d.i=b,Gu(d.i,d.h)):(E||(b=Eo(b,Wh)),d.i=new Bi(b,d.h))}function Se(d,b,E){d.i.set(b,E)}function _o(d){return Se(d,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),d}function _r(d,b){return d?b?decodeURI(d.replace(/%25/g,"%2525")):decodeURIComponent(d):""}function Eo(d,b,E){return typeof d=="string"?(d=encodeURI(d).replace(b,qu),E&&(d=d.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d):null}function qu(d){return d=d.charCodeAt(0),"%"+(d>>4&15).toString(16)+(d&15).toString(16)}var Gl=/[#\/\?@]/g,Kl=/[#\?:]/g,Yh=/[#\?]/g,Wh=/[#\?@]/g,As=/#/g;function Bi(d,b){this.h=this.g=null,this.i=d||null,this.j=!!b}function Er(d){d.g||(d.g=new Map,d.h=0,d.i&&Kh(d.i,function(b,E){d.add(decodeURIComponent(b.replace(/\+/g," ")),E)}))}e=Bi.prototype,e.add=function(d,b){Er(this),this.i=null,d=li(this,d);var E=this.g.get(d);return E||this.g.set(d,E=[]),E.push(b),this.h+=1,this};function Ui(d,b){Er(d),b=li(d,b),d.g.has(b)&&(d.i=null,d.h-=d.g.get(b).length,d.g.delete(b))}function $i(d,b){return Er(d),b=li(d,b),d.g.has(b)}e.forEach=function(d,b){Er(this),this.g.forEach(function(E,N){E.forEach(function(Y){d.call(b,Y,N,this)},this)},this)},e.na=function(){Er(this);const d=Array.from(this.g.values()),b=Array.from(this.g.keys()),E=[];for(let N=0;N<b.length;N++){const Y=d[N];for(let et=0;et<Y.length;et++)E.push(b[N])}return E},e.V=function(d){Er(this);let b=[];if(typeof d=="string")$i(this,d)&&(b=b.concat(this.g.get(li(this,d))));else{d=Array.from(this.g.values());for(let E=0;E<d.length;E++)b=b.concat(d[E])}return b},e.set=function(d,b){return Er(this),this.i=null,d=li(this,d),$i(this,d)&&(this.h-=this.g.get(d).length),this.g.set(d,[b]),this.h+=1,this},e.get=function(d,b){return d?(d=this.V(d),0<d.length?String(d[0]):b):b};function Yl(d,b,E){Ui(d,b),0<E.length&&(d.i=null,d.g.set(li(d,b),R(E)),d.h+=E.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const d=[],b=Array.from(this.g.keys());for(var E=0;E<b.length;E++){var N=b[E];const et=encodeURIComponent(String(N)),mt=this.V(N);for(N=0;N<mt.length;N++){var Y=et;mt[N]!==""&&(Y+="="+encodeURIComponent(String(mt[N]))),d.push(Y)}}return this.i=d.join("&")};function li(d,b){return b=String(b),d.j&&(b=b.toLowerCase()),b}function Gu(d,b){b&&!d.j&&(Er(d),d.i=null,d.g.forEach(function(E,N){var Y=N.toLowerCase();N!=Y&&(Ui(this,N),Yl(this,Y,E))},d)),d.j=b}function To(d,b){const E=new Xt;if(f.Image){const N=new Image;N.onload=w(Tr,E,"TestLoadImage: loaded",!0,b,N),N.onerror=w(Tr,E,"TestLoadImage: error",!1,b,N),N.onabort=w(Tr,E,"TestLoadImage: abort",!1,b,N),N.ontimeout=w(Tr,E,"TestLoadImage: timeout",!1,b,N),f.setTimeout(function(){N.ontimeout&&N.ontimeout()},1e4),N.src=d}else b(!1)}function Hr(d,b){const E=new Xt,N=new AbortController,Y=setTimeout(()=>{N.abort(),Tr(E,"TestPingServer: timeout",!1,b)},1e4);fetch(d,{signal:N.signal}).then(et=>{clearTimeout(Y),et.ok?Tr(E,"TestPingServer: ok",!0,b):Tr(E,"TestPingServer: server error",!1,b)}).catch(()=>{clearTimeout(Y),Tr(E,"TestPingServer: error",!1,b)})}function Tr(d,b,E,N,Y){try{Y&&(Y.onload=null,Y.onerror=null,Y.onabort=null,Y.ontimeout=null),N(E)}catch{}}function wo(){this.g=new Pi}function ci(d,b,E){const N=E||"";try{ql(d,function(Y,et){let mt=Y;g(Y)&&(mt=Pn(Y)),b.push(N+et+"="+encodeURIComponent(mt))})}catch(Y){throw b.push(N+"type="+encodeURIComponent("_badmap")),Y}}function Ta(d){this.l=d.Ub||null,this.j=d.eb||!1}C(Ta,ba),Ta.prototype.g=function(){return new Hi(this.l,this.j)},Ta.prototype.i=function(d){return function(){return d}}({});function Hi(d,b){De.call(this),this.D=d,this.o=b,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Hi,De),e=Hi.prototype,e.open=function(d,b){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=d,this.A=b,this.readyState=1,di(this)},e.send=function(d){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const b={headers:this.u,method:this.B,credentials:this.m,cache:void 0};d&&(b.body=d),(this.D||f).fetch(new Request(this.A,b)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},e.Sa=function(d){if(this.g&&(this.l=d,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=d.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")d.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in d){if(this.j=d.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wl(this)}else d.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wl(d){d.j.read().then(d.Pa.bind(d)).catch(d.ga.bind(d))}e.Pa=function(d){if(this.g){if(this.o&&d.value)this.response.push(d.value);else if(!this.o){var b=d.value?d.value:new Uint8Array(0);(b=this.v.decode(b,{stream:!d.done}))&&(this.response=this.responseText+=b)}d.done?ui(this):di(this),this.readyState==3&&Wl(this)}},e.Ra=function(d){this.g&&(this.response=this.responseText=d,ui(this))},e.Qa=function(d){this.g&&(this.response=d,ui(this))},e.ga=function(){this.g&&ui(this)};function ui(d){d.readyState=4,d.l=null,d.j=null,d.v=null,di(d)}e.setRequestHeader=function(d,b){this.u.append(d,b)},e.getResponseHeader=function(d){return this.h&&this.h.get(d.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const d=[],b=this.h.entries();for(var E=b.next();!E.done;)E=E.value,d.push(E[0]+": "+E[1]),E=b.next();return d.join(`\r
`)};function di(d){d.onreadystatechange&&d.onreadystatechange.call(d)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(d){this.m=d?"include":"same-origin"}});function Ql(d){let b="";return X(d,function(E,N){b+=N,b+=":",b+=E,b+=`\r
`}),b}function pn(d,b,E){t:{for(N in E){var N=!1;break t}N=!0}N||(E=Ql(E),typeof d=="string"?E!=null&&encodeURIComponent(String(E)):Se(d,b,E))}function me(d){De.call(this),this.headers=new Map,this.o=d||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(me,De);var Rs=/^https?$/i,Co=["POST","PUT"];e=me.prototype,e.Ha=function(d){this.J=d},e.ea=function(d,b,E,N){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+d);b=b?b.toUpperCase():"GET",this.D=d,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ai.g(),this.v=this.o?ni(this.o):ni(ai),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(b,String(d),!0),this.B=!1}catch(et){Ku(this,et);return}if(d=E||"",E=new Map(this.headers),N)if(Object.getPrototypeOf(N)===Object.prototype)for(var Y in N)E.set(Y,N[Y]);else if(typeof N.keys=="function"&&typeof N.get=="function")for(const et of N.keys())E.set(et,N.get(et));else throw Error("Unknown input type for opt_headers: "+String(N));N=Array.from(E.keys()).find(et=>et.toLowerCase()=="content-type"),Y=f.FormData&&d instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Co,b,void 0))||N||Y||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[et,mt]of E)this.g.setRequestHeader(et,mt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ao(this),this.u=!0,this.g.send(d),this.u=!1}catch(et){Ku(this,et)}};function Ku(d,b){d.h=!1,d.g&&(d.j=!0,d.g.abort(),d.j=!1),d.l=b,d.m=5,Is(d),fi(d)}function Is(d){d.A||(d.A=!0,ce(d,"complete"),ce(d,"error"))}e.abort=function(d){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=d||7,ce(this,"complete"),ce(this,"abort"),fi(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fi(this,!0)),me.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ms(this):this.bb())},e.bb=function(){Ms(this)};function Ms(d){if(d.h&&typeof u<"u"&&(!d.v[1]||wr(d)!=4||d.Z()!=2)){if(d.u&&wr(d)==4)hn(d.Ea,0,d);else if(ce(d,"readystatechange"),wr(d)==4){d.h=!1;try{const mt=d.Z();t:switch(mt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var b=!0;break t;default:b=!1}var E;if(!(E=b)){var N;if(N=mt===0){var Y=String(d.D).match(xo)[1]||null;!Y&&f.self&&f.self.location&&(Y=f.self.location.protocol.slice(0,-1)),N=!Rs.test(Y?Y.toLowerCase():"")}E=N}if(E)ce(d,"complete"),ce(d,"success");else{d.m=6;try{var et=2<wr(d)?d.g.statusText:""}catch{et=""}d.l=et+" ["+d.Z()+"]",Is(d)}}finally{fi(d)}}}}function fi(d,b){if(d.g){Ao(d);const E=d.g,N=d.v[0]?()=>{}:null;d.g=null,d.v=null,b||ce(d,"ready");try{E.onreadystatechange=N}catch{}}}function Ao(d){d.I&&(f.clearTimeout(d.I),d.I=null)}e.isActive=function(){return!!this.g};function wr(d){return d.g?d.g.readyState:0}e.Z=function(){try{return 2<wr(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(d){if(this.g){var b=this.g.responseText;return d&&b.indexOf(d)==0&&(b=b.substring(d.length)),va(b)}};function Yu(d){try{if(!d.g)return null;if("response"in d.g)return d.g.response;switch(d.H){case"":case"text":return d.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in d.g)return d.g.mozResponseArrayBuffer}return null}catch{return null}}function Qh(d){const b={};d=(d.g&&2<=wr(d)&&d.g.getAllResponseHeaders()||"").split(`\r
`);for(let N=0;N<d.length;N++){if(F(d[N]))continue;var E=j(d[N]);const Y=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const et=b[Y]||[];b[Y]=et,et.push(E)}D(b,function(N){return N.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ro(d,b,E){return E&&E.internalChannelParams&&E.internalChannelParams[d]||b}function Os(d){this.Aa=0,this.i=[],this.j=new Xt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ro("failFast",!1,d),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ro("baseRetryDelayMs",5e3,d),this.cb=Ro("retryDelaySeedMs",1e4,d),this.Wa=Ro("forwardChannelMaxRetries",2,d),this.wa=Ro("forwardChannelRequestTimeoutMs",2e4,d),this.pa=d&&d.xmlHttpFactory||void 0,this.Xa=d&&d.Tb||void 0,this.Ca=d&&d.useFetchStreams||!1,this.L=void 0,this.J=d&&d.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(d&&d.concurrentRequestLimit),this.Da=new wo,this.P=d&&d.fastHandshake||!1,this.O=d&&d.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=d&&d.Rb||!1,d&&d.xa&&this.j.xa(),d&&d.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&d&&d.detectBufferingProxy||!1,this.ja=void 0,d&&d.longPollingTimeout&&0<d.longPollingTimeout&&(this.ja=d.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Os.prototype,e.la=8,e.G=1,e.connect=function(d,b,E,N){yt(0),this.W=d,this.H=b||{},E&&N!==void 0&&(this.H.OSID=E,this.H.OAID=N),this.F=this.X,this.I=ed(this,null,this.W),Ns(this)};function Xl(d){if(Wu(d),d.G==3){var b=d.U++,E=or(d.I);if(Se(E,"SID",d.K),Se(E,"RID",b),Se(E,"TYPE","terminate"),Io(d,E),b=new Fn(d,d.j,b),b.L=2,b.v=_o(or(E)),E=!1,f.navigator&&f.navigator.sendBeacon)try{E=f.navigator.sendBeacon(b.v.toString(),"")}catch{}!E&&f.Image&&(new Image().src=b.v,E=!0),E||(b.g=nd(b.j,null),b.g.ea(b.v)),b.F=Date.now(),vo(b)}td(d)}function Ds(d){d.g&&(Mo(d),d.g.cancel(),d.g=null)}function Wu(d){Ds(d),d.u&&(f.clearTimeout(d.u),d.u=null),ks(d),d.h.cancel(),d.s&&(typeof d.s=="number"&&f.clearTimeout(d.s),d.s=null)}function Ns(d){if(!Es(d.h)&&!d.s){d.s=!0;var b=d.Ga;nt||U(),at||(nt(),at=!0),it.add(b,d),d.B=0}}function Xh(d,b){return Ts(d.h)>=d.h.j-(d.s?1:0)?!1:d.s?(d.i=b.D.concat(d.i),!0):d.G==1||d.G==2||d.B>=(d.Va?0:d.Wa)?!1:(d.s=It(_(d.Ga,d,b),tc(d,d.B)),d.B++,!0)}e.Ga=function(d){if(this.s)if(this.s=null,this.G==1){if(!d){this.U=Math.floor(1e5*Math.random()),d=this.U++;const Y=new Fn(this,this.j,d);let et=this.o;if(this.S&&(et?(et=M(et),S(et,this.S)):et=this.S),this.m!==null||this.O||(Y.H=et,et=null),this.P)t:{for(var b=0,E=0;E<this.i.length;E++){e:{var N=this.i[E];if("__data__"in N.map&&(N=N.map.__data__,typeof N=="string")){N=N.length;break e}N=void 0}if(N===void 0)break;if(b+=N,4096<b){b=E;break t}if(b===4096||E===this.i.length-1){b=E+1;break t}}b=1e3}else b=1e3;b=Qu(this,Y,b),E=or(this.I),Se(E,"RID",d),Se(E,"CVER",22),this.D&&Se(E,"X-HTTP-Session-Id",this.D),Io(this,E),et&&(this.O?b="headers="+encodeURIComponent(String(Ql(et)))+"&"+b:this.m&&pn(E,this.m,et)),ws(this.h,Y),this.Ua&&Se(E,"TYPE","init"),this.P?(Se(E,"$req",b),Se(E,"SID","null"),Y.T=!0,$r(Y,E,null)):$r(Y,E,b),this.G=2}}else this.G==3&&(d?Zl(this,d):this.i.length==0||Es(this.h)||Zl(this))};function Zl(d,b){var E;b?E=b.l:E=d.U++;const N=or(d.I);Se(N,"SID",d.K),Se(N,"RID",E),Se(N,"AID",d.T),Io(d,N),d.m&&d.o&&pn(N,d.m,d.o),E=new Fn(d,d.j,E,d.B+1),d.m===null&&(E.H=d.o),b&&(d.i=b.D.concat(d.i)),b=Qu(d,E,1e3),E.I=Math.round(.5*d.wa)+Math.round(.5*d.wa*Math.random()),ws(d.h,E),$r(E,N,b)}function Io(d,b){d.H&&X(d.H,function(E,N){Se(b,N,E)}),d.l&&ql({},function(E,N){Se(b,N,E)})}function Qu(d,b,E){E=Math.min(d.i.length,E);var N=d.l?_(d.l.Na,d.l,d):null;t:{var Y=d.i;let et=-1;for(;;){const mt=["count="+E];et==-1?0<E?(et=Y[0].g,mt.push("ofs="+et)):et=0:mt.push("ofs="+et);let Jt=!0;for(let rn=0;rn<E;rn++){let te=Y[rn].g;const gn=Y[rn].map;if(te-=et,0>te)et=Math.max(0,Y[rn].g-100),Jt=!1;else try{ci(gn,mt,"req"+te+"_")}catch{N&&N(gn)}}if(Jt){N=mt.join("&");break t}}}return d=d.i.splice(0,E),b.D=d,N}function Xu(d){if(!d.g&&!d.u){d.Y=1;var b=d.Fa;nt||U(),at||(nt(),at=!0),it.add(b,d),d.v=0}}function Jl(d){return d.g||d.u||3<=d.v?!1:(d.Y++,d.u=It(_(d.Fa,d),tc(d,d.v)),d.v++,!0)}e.Fa=function(){if(this.u=null,Zu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var d=2*this.R;this.j.info("BP detection timer enabled: "+d),this.A=It(_(this.ab,this),d)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Ds(this),Zu(this))};function Mo(d){d.A!=null&&(f.clearTimeout(d.A),d.A=null)}function Zu(d){d.g=new Fn(d,d.j,"rpc",d.Y),d.m===null&&(d.g.H=d.o),d.g.O=0;var b=or(d.qa);Se(b,"RID","rpc"),Se(b,"SID",d.K),Se(b,"AID",d.T),Se(b,"CI",d.F?"0":"1"),!d.F&&d.ja&&Se(b,"TO",d.ja),Se(b,"TYPE","xmlhttp"),Io(d,b),d.m&&d.o&&pn(b,d.m,d.o),d.L&&(d.g.I=d.L);var E=d.g;d=d.ia,E.L=1,E.v=_o(or(b)),E.m=null,E.P=!0,Vi(E,d)}e.Za=function(){this.C!=null&&(this.C=null,Ds(this),Jl(this),yt(19))};function ks(d){d.C!=null&&(f.clearTimeout(d.C),d.C=null)}function Ju(d,b){var E=null;if(d.g==b){ks(d),Mo(d),d.g=null;var N=2}else if(Hl(d.h,b))E=b.D,qn(d.h,b),N=1;else return;if(d.G!=0){if(b.o)if(N==1){E=b.m?b.m.length:0,b=Date.now()-b.F;var Y=d.B;N=ri(),ce(N,new Rt(N,E)),Ns(d)}else Xu(d);else if(Y=b.s,Y==3||Y==0&&0<b.X||!(N==1&&Xh(d,b)||N==2&&Jl(d)))switch(E&&0<E.length&&(b=d.h,b.i=b.i.concat(E)),Y){case 1:Fi(d,5);break;case 4:Fi(d,10);break;case 3:Fi(d,6);break;default:Fi(d,2)}}}function tc(d,b){let E=d.Ta+Math.floor(Math.random()*d.cb);return d.isActive()||(E*=2),E*b}function Fi(d,b){if(d.j.info("Error code "+b),b==2){var E=_(d.fb,d),N=d.Xa;const Y=!N;N=new Xe(N||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||So(N,"https"),_o(N),Y?To(N.toString(),E):Hr(N.toString(),E)}else yt(2);d.G=0,d.l&&d.l.sa(b),td(d),Wu(d)}e.fb=function(d){d?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function td(d){if(d.G=0,d.ka=[],d.l){const b=Fl(d.h);(b.length!=0||d.i.length!=0)&&(P(d.ka,b),P(d.ka,d.i),d.h.i.length=0,R(d.i),d.i.length=0),d.l.ra()}}function ed(d,b,E){var N=E instanceof Xe?or(E):new Xe(E);if(N.g!="")b&&(N.g=b+"."+N.g),Ea(N,N.s);else{var Y=f.location;N=Y.protocol,b=b?b+"."+Y.hostname:Y.hostname,Y=+Y.port;var et=new Xe(null);N&&So(et,N),b&&(et.g=b),Y&&Ea(et,Y),E&&(et.l=E),N=et}return E=d.D,b=d.ya,E&&b&&Se(N,E,b),Se(N,"VER",d.la),Io(d,N),N}function nd(d,b,E){if(b&&!d.J)throw Error("Can't create secondary domain capable XhrIo object.");return b=d.Ca&&!d.pa?new me(new Ta({eb:E})):new me(d.pa),b.Ha(d.J),b}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function rd(){}e=rd.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Ps(){}Ps.prototype.g=function(d,b){return new Gn(d,b)};function Gn(d,b){De.call(this),this.g=new Os(b),this.l=d,this.h=b&&b.messageUrlParams||null,d=b&&b.messageHeaders||null,b&&b.clientProtocolHeaderRequired&&(d?d["X-Client-Protocol"]="webchannel":d={"X-Client-Protocol":"webchannel"}),this.g.o=d,d=b&&b.initMessageHeaders||null,b&&b.messageContentType&&(d?d["X-WebChannel-Content-Type"]=b.messageContentType:d={"X-WebChannel-Content-Type":b.messageContentType}),b&&b.va&&(d?d["X-WebChannel-Client-Profile"]=b.va:d={"X-WebChannel-Client-Profile":b.va}),this.g.S=d,(d=b&&b.Sb)&&!F(d)&&(this.g.m=d),this.v=b&&b.supportsCrossDomainXhr||!1,this.u=b&&b.sendRawJson||!1,(b=b&&b.httpSessionIdParam)&&!F(b)&&(this.g.D=b,d=this.h,d!==null&&b in d&&(d=this.h,b in d&&delete d[b])),this.j=new hi(this)}C(Gn,De),Gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gn.prototype.close=function(){Xl(this.g)},Gn.prototype.o=function(d){var b=this.g;if(typeof d=="string"){var E={};E.__data__=d,d=E}else this.u&&(E={},E.__data__=Pn(d),d=E);b.i.push(new Fu(b.Ya++,d)),b.G==3&&Ns(b)},Gn.prototype.N=function(){this.g.l=null,delete this.j,Xl(this.g),delete this.g,Gn.aa.N.call(this)};function id(d){ar.call(this),d.__headers__&&(this.headers=d.__headers__,this.statusCode=d.__status__,delete d.__headers__,delete d.__status__);var b=d.__sm__;if(b){t:{for(const E in b){d=E;break t}d=void 0}(this.i=d)&&(d=this.i,b=b!==null&&d in b?b[d]:void 0),this.data=b}else this.data=d}C(id,ar);function ad(){go.call(this),this.status=1}C(ad,go);function hi(d){this.g=d}C(hi,rd),hi.prototype.ua=function(){ce(this.g,"a")},hi.prototype.ta=function(d){ce(this.g,new id(d))},hi.prototype.sa=function(d){ce(this.g,new ad)},hi.prototype.ra=function(){ce(this.g,"b")},Ps.prototype.createWebChannel=Ps.prototype.g,Gn.prototype.send=Gn.prototype.o,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,h2=function(){return new Ps},f2=function(){return ri()},d2=Sr,Ym={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sa.NO_ERROR=0,Sa.TIMEOUT=8,Sa.HTTP_ERROR=6,Mf=Sa,ji.COMPLETE="complete",u2=ji,po.EventType=Lr,Lr.OPEN="a",Lr.CLOSE="b",Lr.ERROR="c",Lr.MESSAGE="d",De.prototype.listen=De.prototype.K,tu=po,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,c2=me}).apply(typeof vf<"u"?vf:typeof self<"u"?self:typeof window<"u"?window:{});const xS="@firebase/firestore",SS="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Un.UNAUTHENTICATED=new Un(null),Un.GOOGLE_CREDENTIALS=new Un("google-credentials-uid"),Un.FIRST_PARTY=new Un("first-party-uid"),Un.MOCK_USER=new Un("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Uy("@firebase/firestore");function yl(){return os.logLevel}function xt(e,...t){if(os.logLevel<=re.DEBUG){const n=t.map(Hy);os.debug(`Firestore (${zl}): ${e}`,...n)}}function pa(e,...t){if(os.logLevel<=re.ERROR){const n=t.map(Hy);os.error(`Firestore (${zl}): ${e}`,...n)}}function Al(e,...t){if(os.logLevel<=re.WARN){const n=t.map(Hy);os.warn(`Firestore (${zl}): ${e}`,...n)}}function Hy(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,p2(e,i,n)}function p2(e,t,n){let i=`FIRESTORE (${zl}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw pa(i),new Error(i)}function ve(e,t,n,i){let o="Unexpected state";typeof n=="string"?o=n:i=n,e||p2(t,o,i)}function Lt(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class At extends fo{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class DN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Un.UNAUTHENTICATED))}shutdown(){}}class NN{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kN{constructor(t){this.t=t,this.currentUser=Un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){ve(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,n(p)):Promise.resolve();let l=new Ja;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ja,t.enqueueRetryable(()=>o(this.currentUser))};const u=()=>{const p=l;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{xt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(xt("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ja)}},0),u()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(xt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ve(typeof i.accessToken=="string",31837,{l:i}),new g2(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ve(t===null||typeof t=="string",2055,{h:t}),new Un(t)}}class PN{constructor(t,n,i){this.P=t,this.T=n,this.I=i,this.type="FirstParty",this.user=Un.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class jN{constructor(t,n,i){this.P=t,this.T=n,this.I=i}getToken(){return Promise.resolve(new PN(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Un.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _S{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VN{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vN(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){ve(this.o===void 0,3512);const i=l=>{l.error!=null&&xt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,xt("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?n(l.token):Promise.resolve()};this.o=l=>{t.enqueueRetryable(()=>i(l))};const o=l=>{xt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):xt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _S(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new _S(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=zN(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<n&&(i+=t.charAt(o[l]%62))}return i}}function Ht(e,t){return e<t?-1:e>t?1:0}function Wm(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=e.codePointAt(n),o=t.codePointAt(n);if(i!==o){if(i<128&&o<128)return Ht(i,o);{const l=m2(),u=LN(l.encode(ES(e,n)),l.encode(ES(t,n)));return u!==0?u:Ht(i,o)}}n+=i>65535?2:1}return Ht(e.length,t.length)}function ES(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function LN(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return Ht(e[n],t[n]);return Ht(e.length,t.length)}function Rl(e,t,n){return e.length===t.length&&e.every((i,o)=>n(i,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=-62135596800,wS=1e6;class cn{static now(){return cn.fromMillis(Date.now())}static fromDate(t){return cn.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor((t-1e3*n)*wS);return new cn(n,i)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new At(pt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new At(pt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<TS)throw new At(pt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new At(pt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wS}_compareTo(t){return this.seconds===t.seconds?Ht(this.nanoseconds,t.nanoseconds):Ht(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-TS;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{static fromTimestamp(t){return new zt(t)}static min(){return new zt(new cn(0,0))}static max(){return new zt(new cn(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="__name__";class Si{constructor(t,n,i){n===void 0?n=0:n>t.length&&kt(637,{offset:n,range:t.length}),i===void 0?i=t.length-n:i>t.length-n&&kt(1746,{length:i,range:t.length-n}),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Si.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Si?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let o=0;o<i;o++){const l=Si.compareSegments(t.get(o),n.get(o));if(l!==0)return l}return Ht(t.length,n.length)}static compareSegments(t,n){const i=Si.isNumericId(t),o=Si.isNumericId(n);return i&&!o?-1:!i&&o?1:i&&o?Si.extractNumericId(t).compare(Si.extractNumericId(n)):Wm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Za.fromString(t.substring(4,t.length-2))}}class Pe extends Si{construct(t,n,i){return new Pe(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new At(pt.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(o=>o.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const BN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class On extends Si{construct(t,n,i){return new On(t,n,i)}static isValidIdentifier(t){return BN.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),On.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===CS}static keyField(){return new On([CS])}static fromServerFormat(t){const n=[];let i="",o=0;const l=()=>{if(i.length===0)throw new At(pt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let u=!1;for(;o<t.length;){const f=t[o];if(f==="\\"){if(o+1===t.length)throw new At(pt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new At(pt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=p,o+=2}else f==="`"?(u=!u,o++):f!=="."||u?(i+=f,o++):(l(),o++)}if(l(),u)throw new At(pt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new On(n)}static emptyPath(){return new On([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.path=t}static fromPath(t){return new Mt(Pe.fromString(t))}static fromName(t){return new Mt(Pe.fromString(t).popFirst(5))}static empty(){return new Mt(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Pe.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Pe.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Mt(new Pe(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=-1;function UN(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,o=zt.fromTimestamp(i===1e9?new cn(n+1,0):new cn(n,i));return new io(o,Mt.empty(),t)}function $N(e){return new io(e.readTime,e.key,xu)}class io{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new io(zt.min(),Mt.empty(),xu)}static max(){return new io(zt.max(),Mt.empty(),xu)}}function HN(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Mt.comparator(e.documentKey,t.documentKey),n!==0?n:Ht(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(e){if(e.code!==pt.FAILED_PRECONDITION||e.message!==FN)throw e;xt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&kt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new ut((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(t,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(n,l).next(i,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof ut?n:ut.resolve(n)}catch(n){return ut.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):ut.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):ut.reject(n)}static resolve(t){return new ut((n,i)=>{n(t)})}static reject(t){return new ut((n,i)=>{i(t)})}static waitFor(t){return new ut((n,i)=>{let o=0,l=0,u=!1;t.forEach(f=>{++o,f.next(()=>{++l,u&&l===o&&n()},p=>i(p))}),u=!0,l===o&&n()})}static or(t){let n=ut.resolve(!1);for(const i of t)n=n.next(o=>o?ut.resolve(o):i());return n}static forEach(t,n){const i=[];return t.forEach((o,l)=>{i.push(n.call(this,o,l))}),this.waitFor(i)}static mapArray(t,n){return new ut((i,o)=>{const l=t.length,u=new Array(l);let f=0;for(let p=0;p<l;p++){const g=p;n(t[g]).next(y=>{u[g]=y,++f,f===l&&i(u)},y=>o(y))}})}static doWhile(t,n){return new ut((i,o)=>{const l=()=>{t()===!0?n().next(()=>{l()},o):i()};l()})}}function GN(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bl(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>n.writeSequenceNumber(i))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Mh.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=-1;function Oh(e){return e==null}function Wf(e){return e===0&&1/e==-1/0}function KN(e){return typeof e=="number"&&Number.isInteger(e)&&!Wf(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2="";function YN(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=AS(t)),t=WN(e.get(n),t);return AS(t)}function WN(e,t){let n=t;const i=e.length;for(let o=0;o<i;o++){const l=e.charAt(o);switch(l){case"\0":n+="";break;case v2:n+="";break;default:n+=l}}return n}function AS(e){return e+v2+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ps(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function b2(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,n){this.comparator=t,this.root=n||In.EMPTY}insert(t,n){return new Le(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,In.BLACK,null,null))}remove(t){return new Le(this.comparator,this.root.remove(t,this.comparator).copy(null,null,In.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(t,i.key);if(o===0)return n+i.left.size;o<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new bf(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new bf(this.root,t,this.comparator,!1)}getReverseIterator(){return new bf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new bf(this.root,t,this.comparator,!0)}}class bf{constructor(t,n,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!t.isEmpty();)if(l=n?i(t.key,n):1,n&&o&&(l*=-1),l<0)t=this.isReverse?t.left:t.right;else{if(l===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class In{constructor(t,n,i,o,l){this.key=t,this.value=n,this.color=i??In.RED,this.left=o??In.EMPTY,this.right=l??In.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,o,l){return new In(t??this.key,n??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let o=this;const l=i(t,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(t,n,i),null):l===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return In.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return In.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,In.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,In.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw kt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw kt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw kt(27949);return t+(this.isRed()?0:1)}}In.EMPTY=null,In.RED=!0,In.BLACK=!1;In.EMPTY=new class{constructor(){this.size=0}get key(){throw kt(57766)}get value(){throw kt(16141)}get color(){throw kt(16727)}get left(){throw kt(29726)}get right(){throw kt(36894)}copy(t,n,i,o,l){return this}insert(t,n,i){return new In(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this.comparator=t,this.data=new Le(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new IS(this.data.getIterator())}getIteratorFrom(t){return new IS(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof un)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new un(this.comparator);return n.data=t,n}}class IS{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t){this.fields=t,t.sort(On.comparator)}static empty(){return new Kr([])}unionWith(t){let n=new un(On.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new Kr(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Rl(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new x2("Invalid base64 string: "+l):l}}(t);return new Nn(n)}static fromUint8Array(t){const n=function(o){let l="";for(let u=0;u<o.length;++u)l+=String.fromCharCode(o[u]);return l}(t);return new Nn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let o=0;o<n.length;o++)i[o]=n.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ht(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Nn.EMPTY_BYTE_STRING=new Nn("");const QN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ao(e){if(ve(!!e,39018),typeof e=="string"){let t=0;const n=QN.exec(e);if(ve(!!n,46558,{timestamp:e}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Ye(e.seconds),nanos:Ye(e.nanos)}}function Ye(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function oo(e){return typeof e=="string"?Nn.fromBase64String(e):Nn.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2="server_timestamp",_2="__type__",E2="__previous_value__",T2="__local_write_time__";function qy(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[_2])===null||n===void 0?void 0:n.stringValue)===S2}function Dh(e){const t=e.mapValue.fields[E2];return qy(t)?Dh(t):t}function Su(e){const t=ao(e.mapValue.fields[T2].timestampValue);return new cn(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(t,n,i,o,l,u,f,p,g){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g}}const Qf="(default)";class _u{constructor(t,n){this.projectId=t,this.database=n||Qf}static empty(){return new _u("","")}get isDefaultDatabase(){return this.database===Qf}isEqual(t){return t instanceof _u&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2="__type__",ZN="__max__",xf={mapValue:{}},C2="__vector__",Xf="value";function so(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?qy(e)?4:tk(e)?9007199254740991:JN(e)?10:11:kt(28295,{value:e})}function Mi(e,t){if(e===t)return!0;const n=so(e);if(n!==so(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Su(e).isEqual(Su(t));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const u=ao(o.timestampValue),f=ao(l.timestampValue);return u.seconds===f.seconds&&u.nanos===f.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(o,l){return oo(o.bytesValue).isEqual(oo(l.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(o,l){return Ye(o.geoPointValue.latitude)===Ye(l.geoPointValue.latitude)&&Ye(o.geoPointValue.longitude)===Ye(l.geoPointValue.longitude)}(e,t);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return Ye(o.integerValue)===Ye(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const u=Ye(o.doubleValue),f=Ye(l.doubleValue);return u===f?Wf(u)===Wf(f):isNaN(u)&&isNaN(f)}return!1}(e,t);case 9:return Rl(e.arrayValue.values||[],t.arrayValue.values||[],Mi);case 10:case 11:return function(o,l){const u=o.mapValue.fields||{},f=l.mapValue.fields||{};if(RS(u)!==RS(f))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(f[p]===void 0||!Mi(u[p],f[p])))return!1;return!0}(e,t);default:return kt(52216,{left:e})}}function Eu(e,t){return(e.values||[]).find(n=>Mi(n,t))!==void 0}function Il(e,t){if(e===t)return 0;const n=so(e),i=so(t);if(n!==i)return Ht(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ht(e.booleanValue,t.booleanValue);case 2:return function(l,u){const f=Ye(l.integerValue||l.doubleValue),p=Ye(u.integerValue||u.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(e,t);case 3:return MS(e.timestampValue,t.timestampValue);case 4:return MS(Su(e),Su(t));case 5:return Wm(e.stringValue,t.stringValue);case 6:return function(l,u){const f=oo(l),p=oo(u);return f.compareTo(p)}(e.bytesValue,t.bytesValue);case 7:return function(l,u){const f=l.split("/"),p=u.split("/");for(let g=0;g<f.length&&g<p.length;g++){const y=Ht(f[g],p[g]);if(y!==0)return y}return Ht(f.length,p.length)}(e.referenceValue,t.referenceValue);case 8:return function(l,u){const f=Ht(Ye(l.latitude),Ye(u.latitude));return f!==0?f:Ht(Ye(l.longitude),Ye(u.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return OS(e.arrayValue,t.arrayValue);case 10:return function(l,u){var f,p,g,y;const x=l.fields||{},_=u.fields||{},w=(f=x[Xf])===null||f===void 0?void 0:f.arrayValue,C=(p=_[Xf])===null||p===void 0?void 0:p.arrayValue,R=Ht(((g=w==null?void 0:w.values)===null||g===void 0?void 0:g.length)||0,((y=C==null?void 0:C.values)===null||y===void 0?void 0:y.length)||0);return R!==0?R:OS(w,C)}(e.mapValue,t.mapValue);case 11:return function(l,u){if(l===xf.mapValue&&u===xf.mapValue)return 0;if(l===xf.mapValue)return 1;if(u===xf.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),g=u.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let x=0;x<p.length&&x<y.length;++x){const _=Wm(p[x],y[x]);if(_!==0)return _;const w=Il(f[p[x]],g[y[x]]);if(w!==0)return w}return Ht(p.length,y.length)}(e.mapValue,t.mapValue);default:throw kt(23264,{Pe:n})}}function MS(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Ht(e,t);const n=ao(e),i=ao(t),o=Ht(n.seconds,i.seconds);return o!==0?o:Ht(n.nanos,i.nanos)}function OS(e,t){const n=e.values||[],i=t.values||[];for(let o=0;o<n.length&&o<i.length;++o){const l=Il(n[o],i[o]);if(l)return l}return Ht(n.length,i.length)}function Ml(e){return Qm(e)}function Qm(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=ao(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return oo(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Mt.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",o=!0;for(const l of n.values||[])o?o=!1:i+=",",i+=Qm(l);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let o="{",l=!0;for(const u of i)l?l=!1:o+=",",o+=`${u}:${Qm(n.fields[u])}`;return o+"}"}(e.mapValue):kt(61005,{value:e})}function Of(e){switch(so(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Dh(e);return t?16+Of(t):16;case 5:return 2*e.stringValue.length;case 6:return oo(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+Of(l),0)}(e.arrayValue);case 10:case 11:return function(i){let o=0;return ps(i.fields,(l,u)=>{o+=l.length+Of(u)}),o}(e.mapValue);default:throw kt(13486,{value:e})}}function Xm(e){return!!e&&"integerValue"in e}function Gy(e){return!!e&&"arrayValue"in e}function DS(e){return!!e&&"nullValue"in e}function NS(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Df(e){return!!e&&"mapValue"in e}function JN(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[w2])===null||n===void 0?void 0:n.stringValue)===C2}function au(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ps(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=au(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=au(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tk(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===ZN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t){this.value=t}static empty(){return new Vr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Df(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=au(n)}setAll(t){let n=On.emptyPath(),i={},o=[];t.forEach((u,f)=>{if(!n.isImmediateParentOf(f)){const p=this.getFieldsMap(n);this.applyChanges(p,i,o),i={},o=[],n=f.popLast()}u?i[f.lastSegment()]=au(u):o.push(f.lastSegment())});const l=this.getFieldsMap(n);this.applyChanges(l,i,o)}delete(t){const n=this.field(t.popLast());Df(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Mi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let o=n.mapValue.fields[t.get(i)];Df(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,i){ps(n,(o,l)=>t[o]=l);for(const o of i)delete t[o]}clone(){return new Vr(au(this.value))}}function A2(e){const t=[];return ps(e.fields,(n,i)=>{const o=new On([n]);if(Df(i)){const l=A2(i.mapValue).fields;if(l.length===0)t.push(o);else for(const u of l)t.push(o.child(u))}else t.push(o)}),new Kr(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,n,i,o,l,u,f){this.key=t,this.documentType=n,this.version=i,this.readTime=o,this.createTime=l,this.data=u,this.documentState=f}static newInvalidDocument(t){return new $n(t,0,zt.min(),zt.min(),zt.min(),Vr.empty(),0)}static newFoundDocument(t,n,i,o){return new $n(t,1,n,zt.min(),i,o,0)}static newNoDocument(t,n){return new $n(t,2,n,zt.min(),zt.min(),Vr.empty(),0)}static newUnknownDocument(t,n){return new $n(t,3,n,zt.min(),zt.min(),Vr.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(zt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=zt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $n&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t,n){this.position=t,this.inclusive=n}}function kS(e,t,n){let i=0;for(let o=0;o<e.position.length;o++){const l=t[o],u=e.position[o];if(l.field.isKeyField()?i=Mt.comparator(Mt.fromName(u.referenceValue),n.key):i=Il(u,n.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function PS(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Mi(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t,n="asc"){this.field=t,this.dir=n}}function ek(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{}class ln extends R2{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new rk(t,n,i):n==="array-contains"?new ok(t,i):n==="in"?new sk(t,i):n==="not-in"?new lk(t,i):n==="array-contains-any"?new ck(t,i):new ln(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new ik(t,i):new ak(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Il(n,this.value)):n!==null&&so(this.value)===so(n)&&this.matchesComparison(Il(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return kt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Oi extends R2{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new Oi(t,n)}matches(t){return I2(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function I2(e){return e.op==="and"}function M2(e){return nk(e)&&I2(e)}function nk(e){for(const t of e.filters)if(t instanceof Oi)return!1;return!0}function Zm(e){if(e instanceof ln)return e.field.canonicalString()+e.op.toString()+Ml(e.value);if(M2(e))return e.filters.map(t=>Zm(t)).join(",");{const t=e.filters.map(n=>Zm(n)).join(",");return`${e.op}(${t})`}}function O2(e,t){return e instanceof ln?function(i,o){return o instanceof ln&&i.op===o.op&&i.field.isEqual(o.field)&&Mi(i.value,o.value)}(e,t):e instanceof Oi?function(i,o){return o instanceof Oi&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,u,f)=>l&&O2(u,o.filters[f]),!0):!1}(e,t):void kt(19439)}function D2(e){return e instanceof ln?function(n){return`${n.field.canonicalString()} ${n.op} ${Ml(n.value)}`}(e):e instanceof Oi?function(n){return n.op.toString()+" {"+n.getFilters().map(D2).join(" ,")+"}"}(e):"Filter"}class rk extends ln{constructor(t,n,i){super(t,n,i),this.key=Mt.fromName(i.referenceValue)}matches(t){const n=Mt.comparator(t.key,this.key);return this.matchesComparison(n)}}class ik extends ln{constructor(t,n){super(t,"in",n),this.keys=N2("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ak extends ln{constructor(t,n){super(t,"not-in",n),this.keys=N2("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function N2(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Mt.fromName(i.referenceValue))}class ok extends ln{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Gy(n)&&Eu(n.arrayValue,this.value)}}class sk extends ln{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Eu(this.value.arrayValue,n)}}class lk extends ln{constructor(t,n){super(t,"not-in",n)}matches(t){if(Eu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Eu(this.value.arrayValue,n)}}class ck extends ln{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Gy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Eu(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(t,n=null,i=[],o=[],l=null,u=null,f=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=u,this.endAt=f,this.Ie=null}}function jS(e,t=null,n=[],i=[],o=null,l=null,u=null){return new uk(e,t,n,i,o,l,u)}function Ky(e){const t=Lt(e);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Zm(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Oh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Ml(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Ml(i)).join(",")),t.Ie=n}return t.Ie}function Yy(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ek(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!O2(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!PS(e.startAt,t.startAt)&&PS(e.endAt,t.endAt)}function Jm(e){return Mt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,n=null,i=[],o=[],l=null,u="F",f=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=u,this.startAt=f,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function dk(e,t,n,i,o,l,u,f){return new Nh(e,t,n,i,o,l,u,f)}function k2(e){return new Nh(e)}function VS(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function fk(e){return e.collectionGroup!==null}function ou(e){const t=Lt(e);if(t.Ee===null){t.Ee=[];const n=new Set;for(const l of t.explicitOrderBy)t.Ee.push(l),n.add(l.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let f=new un(On.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(f=f.add(g.field))})}),f})(t).forEach(l=>{n.has(l.canonicalString())||l.isKeyField()||t.Ee.push(new Jf(l,i))}),n.has(On.keyField().canonicalString())||t.Ee.push(new Jf(On.keyField(),i))}return t.Ee}function Ai(e){const t=Lt(e);return t.de||(t.de=hk(t,ou(e))),t.de}function hk(e,t){if(e.limitType==="F")return jS(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Jf(o.field,l)});const n=e.endAt?new Zf(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Zf(e.startAt.position,e.startAt.inclusive):null;return jS(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function ty(e,t,n){return new Nh(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function kh(e,t){return Yy(Ai(e),Ai(t))&&e.limitType===t.limitType}function P2(e){return`${Ky(Ai(e))}|lt:${e.limitType}`}function vl(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(o=>D2(o)).join(", ")}]`),Oh(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(o=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(o)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(o=>Ml(o)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(o=>Ml(o)).join(",")),`Target(${i})`}(Ai(e))}; limitType=${e.limitType})`}function Ph(e,t){return t.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Mt.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(e,t)&&function(i,o){for(const l of ou(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(e,t)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(e,t)&&function(i,o){return!(i.startAt&&!function(u,f,p){const g=kS(u,f,p);return u.inclusive?g<=0:g<0}(i.startAt,ou(i),o)||i.endAt&&!function(u,f,p){const g=kS(u,f,p);return u.inclusive?g>=0:g>0}(i.endAt,ou(i),o))}(e,t)}function pk(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function j2(e){return(t,n)=>{let i=!1;for(const o of ou(e)){const l=gk(o,t,n);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function gk(e,t,n){const i=e.field.isKeyField()?Mt.comparator(t.key,n.key):function(l,u,f){const p=u.data.field(l),g=f.data.field(l);return p!==null&&g!==null?Il(p,g):kt(42886)}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return kt(19790,{direction:e.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,t))return l}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),o=this.inner[i];if(o===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],t))return void(o[l]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return i.length===1?delete this.inner[n]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(t){ps(this.inner,(n,i)=>{for(const[o,l]of i)t(o,l)})}isEmpty(){return b2(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new Le(Mt.comparator);function ga(){return mk}const V2=new Le(Mt.comparator);function eu(...e){let t=V2;for(const n of e)t=t.insert(n.key,n);return t}function z2(e){let t=V2;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function Jo(){return su()}function L2(){return su()}function su(){return new gs(e=>e.toString(),(e,t)=>e.isEqual(t))}const yk=new Le(Mt.comparator),vk=new un(Mt.comparator);function Yt(...e){let t=vk;for(const n of e)t=t.add(n);return t}const bk=new un(Ht);function xk(){return bk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wf(t)?"-0":t}}function B2(e){return{integerValue:""+e}}function Sk(e,t){return KN(t)?B2(t):Wy(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this._=void 0}}function _k(e,t,n){return e instanceof th?function(o,l){const u={fields:{[_2]:{stringValue:S2},[T2]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&qy(l)&&(l=Dh(l)),l&&(u.fields[E2]=l),{mapValue:u}}(n,t):e instanceof Tu?$2(e,t):e instanceof wu?H2(e,t):function(o,l){const u=U2(o,l),f=zS(u)+zS(o.Re);return Xm(u)&&Xm(o.Re)?B2(f):Wy(o.serializer,f)}(e,t)}function Ek(e,t,n){return e instanceof Tu?$2(e,t):e instanceof wu?H2(e,t):n}function U2(e,t){return e instanceof eh?function(i){return Xm(i)||function(l){return!!l&&"doubleValue"in l}(i)}(t)?t:{integerValue:0}:null}class th extends jh{}class Tu extends jh{constructor(t){super(),this.elements=t}}function $2(e,t){const n=F2(t);for(const i of e.elements)n.some(o=>Mi(o,i))||n.push(i);return{arrayValue:{values:n}}}class wu extends jh{constructor(t){super(),this.elements=t}}function H2(e,t){let n=F2(t);for(const i of e.elements)n=n.filter(o=>!Mi(o,i));return{arrayValue:{values:n}}}class eh extends jh{constructor(t,n){super(),this.serializer=t,this.Re=n}}function zS(e){return Ye(e.integerValue||e.doubleValue)}function F2(e){return Gy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Tk(e,t){return e.field.isEqual(t.field)&&function(i,o){return i instanceof Tu&&o instanceof Tu||i instanceof wu&&o instanceof wu?Rl(i.elements,o.elements,Mi):i instanceof eh&&o instanceof eh?Mi(i.Re,o.Re):i instanceof th&&o instanceof th}(e.transform,t.transform)}class wk{constructor(t,n){this.version=t,this.transformResults=n}}class ca{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ca}static exists(t){return new ca(void 0,t)}static updateTime(t){return new ca(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nf(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Vh{}function q2(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new K2(e.key,ca.none()):new Vu(e.key,e.data,ca.none());{const n=e.data,i=Vr.empty();let o=new un(On.comparator);for(let l of t.fields)if(!o.has(l)){let u=n.field(l);u===null&&l.length>1&&(l=l.popLast(),u=n.field(l)),u===null?i.delete(l):i.set(l,u),o=o.add(l)}return new ms(e.key,i,new Kr(o.toArray()),ca.none())}}function Ck(e,t,n){e instanceof Vu?function(o,l,u){const f=o.value.clone(),p=BS(o.fieldTransforms,l,u.transformResults);f.setAll(p),l.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(e,t,n):e instanceof ms?function(o,l,u){if(!Nf(o.precondition,l))return void l.convertToUnknownDocument(u.version);const f=BS(o.fieldTransforms,l,u.transformResults),p=l.data;p.setAll(G2(o)),p.setAll(f),l.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(e,t,n):function(o,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,n)}function lu(e,t,n,i){return e instanceof Vu?function(l,u,f,p){if(!Nf(l.precondition,u))return f;const g=l.value.clone(),y=US(l.fieldTransforms,p,u);return g.setAll(y),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(e,t,n,i):e instanceof ms?function(l,u,f,p){if(!Nf(l.precondition,u))return f;const g=US(l.fieldTransforms,p,u),y=u.data;return y.setAll(G2(l)),y.setAll(g),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(x=>x.field))}(e,t,n,i):function(l,u,f){return Nf(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):f}(e,t,n)}function Ak(e,t){let n=null;for(const i of e.fieldTransforms){const o=t.data.field(i.field),l=U2(i.transform,o||null);l!=null&&(n===null&&(n=Vr.empty()),n.set(i.field,l))}return n||null}function LS(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Rl(i,o,(l,u)=>Tk(l,u))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Vu extends Vh{constructor(t,n,i,o=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ms extends Vh{constructor(t,n,i,o,l=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function G2(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function BS(e,t,n){const i=new Map;ve(e.length===n.length,32656,{Ve:n.length,me:e.length});for(let o=0;o<n.length;o++){const l=e[o],u=l.transform,f=t.data.field(l.field);i.set(l.field,Ek(u,f,n[o]))}return i}function US(e,t,n){const i=new Map;for(const o of e){const l=o.transform,u=n.data.field(o.field);i.set(o.field,_k(l,u,t))}return i}class K2 extends Vh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rk extends Vh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(t,n,i,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(t.key)&&Ck(l,t,i[o])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=lu(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=lu(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=L2();return this.mutations.forEach(o=>{const l=t.get(o.key),u=l.overlayedDocument;let f=this.applyToLocalView(u,l.mutatedFields);f=n.has(o.key)?null:f;const p=q2(u,f);p!==null&&i.set(o.key,p),u.isValidDocument()||u.convertToNoDocument(zt.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Yt())}isEqual(t){return this.batchId===t.batchId&&Rl(this.mutations,t.mutations,(n,i)=>LS(n,i))&&Rl(this.baseMutations,t.baseMutations,(n,i)=>LS(n,i))}}class Qy{constructor(t,n,i,o){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=o}static from(t,n,i){ve(t.mutations.length===i.length,58842,{fe:t.mutations.length,ge:i.length});let o=function(){return yk}();const l=t.mutations;for(let u=0;u<l.length;u++)o=o.insert(l[u].key,i[u].version);return new Qy(t,n,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn,ne;function Dk(e){switch(e){case pt.OK:return kt(64938);case pt.CANCELLED:case pt.UNKNOWN:case pt.DEADLINE_EXCEEDED:case pt.RESOURCE_EXHAUSTED:case pt.INTERNAL:case pt.UNAVAILABLE:case pt.UNAUTHENTICATED:return!1;case pt.INVALID_ARGUMENT:case pt.NOT_FOUND:case pt.ALREADY_EXISTS:case pt.PERMISSION_DENIED:case pt.FAILED_PRECONDITION:case pt.ABORTED:case pt.OUT_OF_RANGE:case pt.UNIMPLEMENTED:case pt.DATA_LOSS:return!0;default:return kt(15467,{code:e})}}function Y2(e){if(e===void 0)return pa("GRPC error has no .code"),pt.UNKNOWN;switch(e){case tn.OK:return pt.OK;case tn.CANCELLED:return pt.CANCELLED;case tn.UNKNOWN:return pt.UNKNOWN;case tn.DEADLINE_EXCEEDED:return pt.DEADLINE_EXCEEDED;case tn.RESOURCE_EXHAUSTED:return pt.RESOURCE_EXHAUSTED;case tn.INTERNAL:return pt.INTERNAL;case tn.UNAVAILABLE:return pt.UNAVAILABLE;case tn.UNAUTHENTICATED:return pt.UNAUTHENTICATED;case tn.INVALID_ARGUMENT:return pt.INVALID_ARGUMENT;case tn.NOT_FOUND:return pt.NOT_FOUND;case tn.ALREADY_EXISTS:return pt.ALREADY_EXISTS;case tn.PERMISSION_DENIED:return pt.PERMISSION_DENIED;case tn.FAILED_PRECONDITION:return pt.FAILED_PRECONDITION;case tn.ABORTED:return pt.ABORTED;case tn.OUT_OF_RANGE:return pt.OUT_OF_RANGE;case tn.UNIMPLEMENTED:return pt.UNIMPLEMENTED;case tn.DATA_LOSS:return pt.DATA_LOSS;default:return kt(39323,{code:e})}}(ne=tn||(tn={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new Za([4294967295,4294967295],0);function $S(e){const t=m2().encode(e),n=new l2;return n.update(t),new Uint8Array(n.digest())}function HS(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),o=t.getUint32(8,!0),l=t.getUint32(12,!0);return[new Za([n,i],0),new Za([o,l],0)]}class Xy{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new nu(`Invalid padding: ${n}`);if(i<0)throw new nu(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new nu(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new nu(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=Za.fromNumber(this.pe)}we(t,n,i){let o=t.add(n.multiply(Za.fromNumber(i)));return o.compare(Nk)===1&&(o=new Za([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=$S(t),[i,o]=HS(n);for(let l=0;l<this.hashCount;l++){const u=this.we(i,o,l);if(!this.be(u))return!1}return!0}static create(t,n,i){const o=t%8==0?0:8-t%8,l=new Uint8Array(Math.ceil(t/8)),u=new Xy(l,o,n);return i.forEach(f=>u.insert(f)),u}insert(t){if(this.pe===0)return;const n=$S(t),[i,o]=HS(n);for(let l=0;l<this.hashCount;l++){const u=this.we(i,o,l);this.Se(u)}}Se(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class nu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,n,i,o,l){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const o=new Map;return o.set(t,zu.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new zh(zt.min(),o,new Le(Ht),ga(),Yt())}}class zu{constructor(t,n,i,o,l){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new zu(i,n,Yt(),Yt(),Yt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,n,i,o){this.De=t,this.removedTargetIds=n,this.key=i,this.ve=o}}class W2{constructor(t,n){this.targetId=t,this.Ce=n}}class Q2{constructor(t,n,i=Nn.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=o}}class FS{constructor(){this.Fe=0,this.Me=qS(),this.xe=Nn.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Yt(),n=Yt(),i=Yt();return this.Me.forEach((o,l)=>{switch(l){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:i=i.add(o);break;default:kt(38017,{changeType:l})}}),new zu(this.xe,this.Oe,t,n,i)}Qe(){this.Ne=!1,this.Me=qS()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,ve(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class kk{constructor(t){this.ze=t,this.je=new Map,this.He=ga(),this.Je=Sf(),this.Ye=Sf(),this.Ze=new Le(Ht)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const i=this.rt(n);switch(t.state){case 0:this.it(n)&&i.ke(t.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(t.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(n);break;case 3:this.it(n)&&(i.Ge(),i.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),i.ke(t.resumeToken));break;default:kt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((i,o)=>{this.it(o)&&n(o)})}ot(t){const n=t.targetId,i=t.Ce.count,o=this._t(n);if(o){const l=o.target;if(Jm(l))if(i===0){const u=new Mt(l.path);this.tt(n,u,$n.newNoDocument(u,zt.min()))}else ve(i===1,20013,{expectedCount:i});else{const u=this.ut(n);if(u!==i){const f=this.ct(t),p=f?this.lt(f,t,u):1;if(p!==0){this.st(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,g)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=n;let u,f;try{u=oo(i).toUint8Array()}catch(p){if(p instanceof x2)return Al("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Xy(u,o,l)}catch(p){return Al(p instanceof nu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.pe===0?null:f}lt(t,n,i){return n.Ce.count===i-this.Tt(t,n.targetId)?0:2}Tt(t,n){const i=this.ze.getRemoteKeysForTarget(n);let o=0;return i.forEach(l=>{const u=this.ze.Pt(),f=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;t.mightContain(f)||(this.tt(n,l,null),o++)}),o}It(t){const n=new Map;this.je.forEach((l,u)=>{const f=this._t(u);if(f){if(l.current&&Jm(f.target)){const p=new Mt(f.target.path);this.Et(p).has(u)||this.dt(u,p)||this.tt(u,p,$n.newNoDocument(p,t))}l.Le&&(n.set(u,l.qe()),l.Qe())}});let i=Yt();this.Ye.forEach((l,u)=>{let f=!0;u.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(l))}),this.He.forEach((l,u)=>u.setReadTime(t));const o=new zh(t,n,this.Ze,this.He,i);return this.He=ga(),this.Je=Sf(),this.Ye=Sf(),this.Ze=new Le(Ht),o}et(t,n){if(!this.it(t))return;const i=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,i),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,i){if(!this.it(t))return;const o=this.rt(t);this.dt(t,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),i&&(this.He=this.He.insert(n,i))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new FS,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new un(Ht),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new un(Ht),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||xt("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new FS),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function Sf(){return new Le(Mt.comparator)}function qS(){return new Le(Mt.comparator)}const Pk={asc:"ASCENDING",desc:"DESCENDING"},jk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vk={and:"AND",or:"OR"};class zk{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ey(e,t){return e.useProto3Json||Oh(t)?t:{value:t}}function nh(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function X2(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Lk(e,t){return nh(e,t.toTimestamp())}function Ri(e){return ve(!!e,49232),zt.fromTimestamp(function(n){const i=ao(n);return new cn(i.seconds,i.nanos)}(e))}function Zy(e,t){return ny(e,t).canonicalString()}function ny(e,t){const n=function(o){return new Pe(["projects",o.projectId,"databases",o.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Z2(e){const t=Pe.fromString(e);return ve(rT(t),10190,{key:t.toString()}),t}function ry(e,t){return Zy(e.databaseId,t.path)}function pm(e,t){const n=Z2(t);if(n.get(1)!==e.databaseId.projectId)throw new At(pt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new At(pt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Mt(tT(n))}function J2(e,t){return Zy(e.databaseId,t)}function Bk(e){const t=Z2(e);return t.length===4?Pe.emptyPath():tT(t)}function iy(e){return new Pe(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tT(e){return ve(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function GS(e,t,n){return{name:ry(e,t),fields:n.value.mapValue.fields}}function Uk(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:kt(39313,{state:g})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?(ve(y===void 0||typeof y=="string",58123),Nn.fromBase64String(y||"")):(ve(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),Nn.fromUint8Array(y||new Uint8Array))}(e,t.targetChange.resumeToken),u=t.targetChange.cause,f=u&&function(g){const y=g.code===void 0?pt.UNKNOWN:Y2(g.code);return new At(y,g.message||"")}(u);n=new Q2(i,o,l,f||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const o=pm(e,i.document.name),l=Ri(i.document.updateTime),u=i.document.createTime?Ri(i.document.createTime):zt.min(),f=new Vr({mapValue:{fields:i.document.fields}}),p=$n.newFoundDocument(o,l,u,f),g=i.targetIds||[],y=i.removedTargetIds||[];n=new kf(g,y,p.key,p)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const o=pm(e,i.document),l=i.readTime?Ri(i.readTime):zt.min(),u=$n.newNoDocument(o,l),f=i.removedTargetIds||[];n=new kf([],f,u.key,u)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const o=pm(e,i.document),l=i.removedTargetIds||[];n=new kf([],l,o,null)}else{if(!("filter"in t))return kt(11601,{Vt:t});{t.filter;const i=t.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,u=new Ok(o,l),f=i.targetId;n=new W2(f,u)}}return n}function $k(e,t){let n;if(t instanceof Vu)n={update:GS(e,t.key,t.value)};else if(t instanceof K2)n={delete:ry(e,t.key)};else if(t instanceof ms)n={update:GS(e,t.key,t.data),updateMask:Xk(t.fieldMask)};else{if(!(t instanceof Rk))return kt(16599,{ft:t.type});n={verify:ry(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(l,u){const f=u.transform;if(f instanceof th)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Tu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof wu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof eh)return{fieldPath:u.field.canonicalString(),increment:f.Re};throw kt(20930,{transform:u.transform})}(0,i))),t.precondition.isNone||(n.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:Lk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:kt(27497)}(e,t.precondition)),n}function Hk(e,t){return e&&e.length>0?(ve(t!==void 0,14353),e.map(n=>function(o,l){let u=o.updateTime?Ri(o.updateTime):Ri(l);return u.isEqual(zt.min())&&(u=Ri(l)),new wk(u,o.transformResults||[])}(n,t))):[]}function Fk(e,t){return{documents:[J2(e,t.path)]}}function qk(e,t){const n={structuredQuery:{}},i=t.path;let o;t.collectionGroup!==null?(o=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=J2(e,o);const l=function(g){if(g.length!==0)return nT(Oi.create(g,"and"))}(t.filters);l&&(n.structuredQuery.where=l);const u=function(g){if(g.length!==0)return g.map(y=>function(_){return{field:bl(_.field),direction:Yk(_.dir)}}(y))}(t.orderBy);u&&(n.structuredQuery.orderBy=u);const f=ey(e,t.limit);return f!==null&&(n.structuredQuery.limit=f),t.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{gt:n,parent:o}}function Gk(e){let t=Bk(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let o=null;if(i>0){ve(i===1,65062);const y=n.from[0];y.allDescendants?o=y.collectionId:t=t.child(y.collectionId)}let l=[];n.where&&(l=function(x){const _=eT(x);return _ instanceof Oi&&M2(_)?_.getFilters():[_]}(n.where));let u=[];n.orderBy&&(u=function(x){return x.map(_=>function(C){return new Jf(xl(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(_))}(n.orderBy));let f=null;n.limit&&(f=function(x){let _;return _=typeof x=="object"?x.value:x,Oh(_)?null:_}(n.limit));let p=null;n.startAt&&(p=function(x){const _=!!x.before,w=x.values||[];return new Zf(w,_)}(n.startAt));let g=null;return n.endAt&&(g=function(x){const _=!x.before,w=x.values||[];return new Zf(w,_)}(n.endAt)),dk(t,o,u,l,f,"F",p,g)}function Kk(e,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return kt(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function eT(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=xl(n.unaryFilter.field);return ln.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=xl(n.unaryFilter.field);return ln.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=xl(n.unaryFilter.field);return ln.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=xl(n.unaryFilter.field);return ln.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return kt(61313);default:return kt(60726)}}(e):e.fieldFilter!==void 0?function(n){return ln.create(xl(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return kt(58110);default:return kt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Oi.create(n.compositeFilter.filters.map(i=>eT(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return kt(1026)}}(n.compositeFilter.op))}(e):kt(30097,{filter:e})}function Yk(e){return Pk[e]}function Wk(e){return jk[e]}function Qk(e){return Vk[e]}function bl(e){return{fieldPath:e.canonicalString()}}function xl(e){return On.fromServerFormat(e.fieldPath)}function nT(e){return e instanceof ln?function(n){if(n.op==="=="){if(NS(n.value))return{unaryFilter:{field:bl(n.field),op:"IS_NAN"}};if(DS(n.value))return{unaryFilter:{field:bl(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(NS(n.value))return{unaryFilter:{field:bl(n.field),op:"IS_NOT_NAN"}};if(DS(n.value))return{unaryFilter:{field:bl(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bl(n.field),op:Wk(n.op),value:n.value}}}(e):e instanceof Oi?function(n){const i=n.getFilters().map(o=>nT(o));return i.length===1?i[0]:{compositeFilter:{op:Qk(n.op),filters:i}}}(e):kt(54877,{filter:e})}function Xk(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function rT(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,n,i,o,l=zt.min(),u=zt.min(),f=Nn.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(t){return new Wa(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Wa(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(t){this.wt=t}}function Jk(e){const t=Gk({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ty(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t9{constructor(){this.yn=new e9}addToCollectionParentIndex(t,n){return this.yn.add(n),ut.resolve()}getCollectionParents(t,n){return ut.resolve(this.yn.getEntries(n))}addFieldIndex(t,n){return ut.resolve()}deleteFieldIndex(t,n){return ut.resolve()}deleteAllFieldIndexes(t){return ut.resolve()}createTargetIndexes(t,n){return ut.resolve()}getDocumentsMatchingTarget(t,n){return ut.resolve(null)}getIndexType(t,n){return ut.resolve(0)}getFieldIndexes(t,n){return ut.resolve([])}getNextCollectionGroupToUpdate(t){return ut.resolve(null)}getMinOffset(t,n){return ut.resolve(io.min())}getMinOffsetFromCollectionGroup(t,n){return ut.resolve(io.min())}updateCollectionGroup(t,n,i){return ut.resolve()}updateIndexEntries(t,n){return ut.resolve()}}class e9{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),o=this.index[n]||new un(Pe.comparator),l=!o.has(i);return this.index[n]=o.add(i),l}has(t){const n=t.lastSegment(),i=t.popLast(),o=this.index[n];return o&&o.has(i)}getEntries(t){return(this.index[t]||new un(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iT=41943040;class er{static withCacheSize(t){return new er(t,er.DEFAULT_COLLECTION_PERCENTILE,er.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er.DEFAULT_COLLECTION_PERCENTILE=10,er.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,er.DEFAULT=new er(iT,er.DEFAULT_COLLECTION_PERCENTILE,er.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),er.DISABLED=new er(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new Ol(0)}static ir(){return new Ol(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="LruGarbageCollector",n9=1048576;function WS([e,t],[n,i]){const o=Ht(e,n);return o===0?Ht(t,i):o}class r9{constructor(t){this.cr=t,this.buffer=new un(WS),this.lr=0}hr(){return++this.lr}Pr(t){const n=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();WS(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class i9{constructor(t,n,i){this.garbageCollector=t,this.asyncQueue=n,this.localStore=i,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){xt(YS,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bl(n)?xt(YS,"Ignoring IndexedDB error during garbage collection: ",n):await Ll(n)}await this.Ir(3e5)})}}class a9{constructor(t,n){this.Er=t,this.params=n}calculateTargetCount(t,n){return this.Er.dr(t).next(i=>Math.floor(n/100*i))}nthSequenceNumber(t,n){if(n===0)return ut.resolve(Mh.le);const i=new r9(n);return this.Er.forEachTarget(t,o=>i.Pr(o.sequenceNumber)).next(()=>this.Er.Ar(t,o=>i.Pr(o))).next(()=>i.maxValue)}removeTargets(t,n,i){return this.Er.removeTargets(t,n,i)}removeOrphanedDocuments(t,n){return this.Er.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(xt("LruGarbageCollector","Garbage collection skipped; disabled"),ut.resolve(KS)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(xt("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),KS):this.Rr(t,n))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,n){let i,o,l,u,f,p,g;const y=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(x=>(x>this.params.maximumSequenceNumbersToCollect?(xt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,u=Date.now(),this.nthSequenceNumber(t,o))).next(x=>(i=x,f=Date.now(),this.removeTargets(t,i,n))).next(x=>(l=x,p=Date.now(),this.removeOrphanedDocuments(t,i))).next(x=>(g=Date.now(),yl()<=re.DEBUG&&xt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${o} in `+(f-u)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${x} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),ut.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:x})))}}function o9(e,t){return new a9(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(){this.changes=new gs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,$n.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?ut.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l9{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c9{constructor(t,n,i,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=o}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(i=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(i!==null&&lu(i.mutation,o,Kr.empty(),cn.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,Yt()).next(()=>i))}getLocalViewOfDocuments(t,n,i=Yt()){const o=Jo();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,i).next(l=>{let u=eu();return l.forEach((f,p)=>{u=u.insert(f,p.overlayedDocument)}),u}))}getOverlayedDocuments(t,n){const i=Jo();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,Yt()))}populateOverlays(t,n,i){const o=[];return i.forEach(l=>{n.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(t,o).next(l=>{l.forEach((u,f)=>{n.set(u,f)})})}computeViews(t,n,i,o){let l=ga();const u=su(),f=function(){return su()}();return n.forEach((p,g)=>{const y=i.get(g.key);o.has(g.key)&&(y===void 0||y.mutation instanceof ms)?l=l.insert(g.key,g):y!==void 0?(u.set(g.key,y.mutation.getFieldMask()),lu(y.mutation,g,y.mutation.getFieldMask(),cn.now())):u.set(g.key,Kr.empty())}),this.recalculateAndSaveOverlays(t,l).next(p=>(p.forEach((g,y)=>u.set(g,y)),n.forEach((g,y)=>{var x;return f.set(g,new l9(y,(x=u.get(g))!==null&&x!==void 0?x:null))}),f))}recalculateAndSaveOverlays(t,n){const i=su();let o=new Le((u,f)=>u-f),l=Yt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(u=>{for(const f of u)f.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let y=i.get(p)||Kr.empty();y=f.applyToLocalView(g,y),i.set(p,y);const x=(o.get(f.batchId)||Yt()).add(p);o=o.insert(f.batchId,x)})}).next(()=>{const u=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,y=p.value,x=L2();y.forEach(_=>{if(!l.has(_)){const w=q2(n.get(_),i.get(_));w!==null&&x.set(_,w),l=l.add(_)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,x))}return ut.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,o){return function(u){return Mt.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):fk(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,o):this.getDocumentsMatchingCollectionQuery(t,n,i,o)}getNextDocuments(t,n,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,o).next(l=>{const u=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,o-l.size):ut.resolve(Jo());let f=xu,p=l;return u.next(g=>ut.forEach(g,(y,x)=>(f<x.largestBatchId&&(f=x.largestBatchId),l.get(y)?ut.resolve():this.remoteDocumentCache.getEntry(t,y).next(_=>{p=p.insert(y,_)}))).next(()=>this.populateOverlays(t,g,l)).next(()=>this.computeViews(t,p,g,Yt())).next(y=>({batchId:f,changes:z2(y)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Mt(n)).next(i=>{let o=eu();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,i,o){const l=n.collectionGroup;let u=eu();return this.indexManager.getCollectionParents(t,l).next(f=>ut.forEach(f,p=>{const g=function(x,_){return new Nh(_,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)}(n,p.child(l));return this.getDocumentsMatchingCollectionQuery(t,g,i,o).next(y=>{y.forEach((x,_)=>{u=u.insert(x,_)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,n,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,l,o))).next(u=>{l.forEach((p,g)=>{const y=g.getKey();u.get(y)===null&&(u=u.insert(y,$n.newInvalidDocument(y)))});let f=eu();return u.forEach((p,g)=>{const y=l.get(p);y!==void 0&&lu(y.mutation,g,Kr.empty(),cn.now()),Ph(n,g)&&(f=f.insert(p,g))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,n){return ut.resolve(this.Fr.get(n))}saveBundleMetadata(t,n){return this.Fr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:Ri(o.createTime)}}(n)),ut.resolve()}getNamedQuery(t,n){return ut.resolve(this.Mr.get(n))}saveNamedQuery(t,n){return this.Mr.set(n.name,function(o){return{name:o.name,query:Jk(o.bundledQuery),readTime:Ri(o.readTime)}}(n)),ut.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d9{constructor(){this.overlays=new Le(Mt.comparator),this.Or=new Map}getOverlay(t,n){return ut.resolve(this.overlays.get(n))}getOverlays(t,n){const i=Jo();return ut.forEach(n,o=>this.getOverlay(t,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((o,l)=>{this.St(t,n,l)}),ut.resolve()}removeOverlaysForBatchId(t,n,i){const o=this.Or.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Or.delete(i)),ut.resolve()}getOverlaysForCollection(t,n,i){const o=Jo(),l=n.length+1,u=new Mt(n.child("")),f=this.overlays.getIteratorFrom(u);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return ut.resolve(o)}getOverlaysForCollectionGroup(t,n,i,o){let l=new Le((g,y)=>g-y);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>i){let y=l.get(g.largestBatchId);y===null&&(y=Jo(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const f=Jo(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>f.set(g,y)),!(f.size()>=o)););return ut.resolve(f)}St(t,n,i){const o=this.overlays.get(i.key);if(o!==null){const u=this.Or.get(o.largestBatchId).delete(i.key);this.Or.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new Mk(n,i));let l=this.Or.get(n);l===void 0&&(l=Yt(),this.Or.set(n,l)),this.Or.set(n,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f9{constructor(){this.sessionToken=Nn.EMPTY_BYTE_STRING}getSessionToken(t){return ut.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,ut.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.Nr=new un(bn.Br),this.Lr=new un(bn.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,n){const i=new bn(t,n);this.Nr=this.Nr.add(i),this.Lr=this.Lr.add(i)}qr(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Qr(new bn(t,n))}$r(t,n){t.forEach(i=>this.removeReference(i,n))}Ur(t){const n=new Mt(new Pe([])),i=new bn(n,t),o=new bn(n,t+1),l=[];return this.Lr.forEachInRange([i,o],u=>{this.Qr(u),l.push(u.key)}),l}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const n=new Mt(new Pe([])),i=new bn(n,t),o=new bn(n,t+1);let l=Yt();return this.Lr.forEachInRange([i,o],u=>{l=l.add(u.key)}),l}containsKey(t){const n=new bn(t,0),i=this.Nr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class bn{constructor(t,n){this.key=t,this.Gr=n}static Br(t,n){return Mt.comparator(t.key,n.key)||Ht(t.Gr,n.Gr)}static kr(t,n){return Ht(t.Gr,n.Gr)||Mt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h9{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new un(bn.Br)}checkEmpty(t){return ut.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,o){const l=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Ik(l,n,i,o);this.mutationQueue.push(u);for(const f of o)this.zr=this.zr.add(new bn(f.key,l)),this.indexManager.addToCollectionParentIndex(t,f.key.path.popLast());return ut.resolve(u)}lookupMutationBatch(t,n){return ut.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,o=this.Hr(i),l=o<0?0:o;return ut.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ut.resolve(this.mutationQueue.length===0?Fy:this.Jn-1)}getAllMutationBatches(t){return ut.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new bn(n,0),o=new bn(n,Number.POSITIVE_INFINITY),l=[];return this.zr.forEachInRange([i,o],u=>{const f=this.jr(u.Gr);l.push(f)}),ut.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new un(Ht);return n.forEach(o=>{const l=new bn(o,0),u=new bn(o,Number.POSITIVE_INFINITY);this.zr.forEachInRange([l,u],f=>{i=i.add(f.Gr)})}),ut.resolve(this.Jr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,o=i.length+1;let l=i;Mt.isDocumentKey(l)||(l=l.child(""));const u=new bn(new Mt(l),0);let f=new un(Ht);return this.zr.forEachWhile(p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===o&&(f=f.add(p.Gr)),!0)},u),ut.resolve(this.Jr(f))}Jr(t){const n=[];return t.forEach(i=>{const o=this.jr(i);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){ve(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.zr;return ut.forEach(n.mutations,o=>{const l=new bn(o.key,n.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.zr=i})}Xn(t){}containsKey(t,n){const i=new bn(n,0),o=this.zr.firstAfterOrEqual(i);return ut.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,ut.resolve()}Yr(t,n){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const n=this.Hr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p9{constructor(t){this.Zr=t,this.docs=function(){return new Le(Mt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,o=this.docs.get(i),l=o?o.size:0,u=this.Zr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return ut.resolve(i?i.document.mutableCopy():$n.newInvalidDocument(n))}getEntries(t,n){let i=ga();return n.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():$n.newInvalidDocument(o))}),ut.resolve(i)}getDocumentsMatchingQuery(t,n,i,o){let l=ga();const u=n.path,f=new Mt(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||HN($N(y),i)<=0||(o.has(y.key)||Ph(n,y))&&(l=l.insert(y.key,y.mutableCopy()))}return ut.resolve(l)}getAllFromCollectionGroup(t,n,i,o){kt(9500)}Xr(t,n){return ut.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new g9(this)}getSize(t){return ut.resolve(this.size)}}class g9 extends s9{constructor(t){super(),this.vr=t}applyChanges(t){const n=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?n.push(this.vr.addEntry(t,o)):this.vr.removeEntry(i)}),ut.waitFor(n)}getFromCache(t,n){return this.vr.getEntry(t,n)}getAllFromCache(t,n){return this.vr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m9{constructor(t){this.persistence=t,this.ei=new gs(n=>Ky(n),Yy),this.lastRemoteSnapshotVersion=zt.min(),this.highestTargetId=0,this.ti=0,this.ni=new Jy,this.targetCount=0,this.ri=Ol.rr()}forEachTarget(t,n){return this.ei.forEach((i,o)=>n(o)),ut.resolve()}getLastRemoteSnapshotVersion(t){return ut.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ut.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),ut.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.ti&&(this.ti=n),ut.resolve()}ar(t){this.ei.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ri=new Ol(n),this.highestTargetId=n),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,n){return this.ar(n),this.targetCount+=1,ut.resolve()}updateTargetData(t,n){return this.ar(n),ut.resolve()}removeTargetData(t,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,ut.resolve()}removeTargets(t,n,i){let o=0;const l=[];return this.ei.forEach((u,f)=>{f.sequenceNumber<=n&&i.get(f.targetId)===null&&(this.ei.delete(u),l.push(this.removeMatchingKeysForTargetId(t,f.targetId)),o++)}),ut.waitFor(l).next(()=>o)}getTargetCount(t){return ut.resolve(this.targetCount)}getTargetData(t,n){const i=this.ei.get(n)||null;return ut.resolve(i)}addMatchingKeys(t,n,i){return this.ni.qr(n,i),ut.resolve()}removeMatchingKeys(t,n,i){this.ni.$r(n,i);const o=this.persistence.referenceDelegate,l=[];return o&&n.forEach(u=>{l.push(o.markPotentiallyOrphaned(t,u))}),ut.waitFor(l)}removeMatchingKeysForTargetId(t,n){return this.ni.Ur(n),ut.resolve()}getMatchingKeysForTargetId(t,n){const i=this.ni.Wr(n);return ut.resolve(i)}containsKey(t,n){return ut.resolve(this.ni.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(t,n){this.ii={},this.overlays={},this.si=new Mh(0),this.oi=!1,this.oi=!0,this._i=new f9,this.referenceDelegate=t(this),this.ai=new m9(this),this.indexManager=new t9,this.remoteDocumentCache=function(o){return new p9(o)}(i=>this.referenceDelegate.ui(i)),this.serializer=new Zk(n),this.ci=new u9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new d9,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.ii[t.toKey()];return i||(i=new h9(n,this.referenceDelegate),this.ii[t.toKey()]=i),i}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,n,i){xt("MemoryPersistence","Starting transaction:",t);const o=new y9(this.si.next());return this.referenceDelegate.li(),i(o).next(l=>this.referenceDelegate.hi(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Pi(t,n){return ut.or(Object.values(this.ii).map(i=>()=>i.containsKey(t,n)))}}class y9 extends qN{constructor(t){super(),this.currentSequenceNumber=t}}class t0{constructor(t){this.persistence=t,this.Ti=new Jy,this.Ii=null}static Ei(t){return new t0(t)}get di(){if(this.Ii)return this.Ii;throw kt(60996)}addReference(t,n,i){return this.Ti.addReference(i,n),this.di.delete(i.toString()),ut.resolve()}removeReference(t,n,i){return this.Ti.removeReference(i,n),this.di.add(i.toString()),ut.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),ut.resolve()}removeTarget(t,n){this.Ti.Ur(n.targetId).forEach(o=>this.di.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(l=>this.di.add(l.toString()))}).next(()=>i.removeTargetData(t,n))}li(){this.Ii=new Set}hi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ut.forEach(this.di,i=>{const o=Mt.fromPath(i);return this.Ai(t,o).next(l=>{l||n.removeEntry(o,zt.min())})}).next(()=>(this.Ii=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ai(t,n).next(i=>{i?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(t){return 0}Ai(t,n){return ut.or([()=>ut.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Pi(t,n)])}}class rh{constructor(t,n){this.persistence=t,this.Ri=new gs(i=>YN(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=o9(this,n)}static Ei(t,n){return new rh(t,n)}li(){}hi(t){return ut.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>n.next(o=>i+o))}Vr(t){let n=0;return this.Ar(t,i=>{n++}).next(()=>n)}Ar(t,n){return ut.forEach(this.Ri,(i,o)=>this.gr(t,i,o).next(l=>l?ut.resolve():n(o)))}removeTargets(t,n,i){return this.persistence.getTargetCache().removeTargets(t,n,i)}removeOrphanedDocuments(t,n){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Xr(t,u=>this.gr(t,u,n).next(f=>{f||(i++,l.removeEntry(u,zt.min()))})).next(()=>l.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,n){return this.Ri.set(n,t.currentSequenceNumber),ut.resolve()}removeTarget(t,n){const i=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,n,i){return this.Ri.set(i,t.currentSequenceNumber),ut.resolve()}removeReference(t,n,i){return this.Ri.set(i,t.currentSequenceNumber),ut.resolve()}updateLimboDocument(t,n){return this.Ri.set(n,t.currentSequenceNumber),ut.resolve()}ui(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Of(t.data.value)),n}gr(t,n,i){return ut.or([()=>this.persistence.Pi(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.Ri.get(n);return ut.resolve(o!==void 0&&o>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(t,n,i,o){this.targetId=t,this.fromCache=n,this.ls=i,this.hs=o}static Ps(t,n){let i=Yt(),o=Yt();for(const l of n.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new e0(t,n.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v9{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b9{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return pD()?8:GN(dD())>0?6:4}()}initialize(t,n){this.As=t,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(t,n,i,o){const l={result:null};return this.Rs(t,n).next(u=>{l.result=u}).next(()=>{if(!l.result)return this.Vs(t,n,o,i).next(u=>{l.result=u})}).next(()=>{if(l.result)return;const u=new v9;return this.fs(t,n,u).next(f=>{if(l.result=f,this.Is)return this.gs(t,n,u,f.size)})}).next(()=>l.result)}gs(t,n,i,o){return i.documentReadCount<this.Es?(yl()<=re.DEBUG&&xt("QueryEngine","SDK will not create cache indexes for query:",vl(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),ut.resolve()):(yl()<=re.DEBUG&&xt("QueryEngine","Query:",vl(n),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(yl()<=re.DEBUG&&xt("QueryEngine","The SDK decides to create cache indexes for query:",vl(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ai(n))):ut.resolve())}Rs(t,n){if(VS(n))return ut.resolve(null);let i=Ai(n);return this.indexManager.getIndexType(t,i).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=ty(n,null,"F"),i=Ai(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(l=>{const u=Yt(...l);return this.As.getDocuments(t,u).next(f=>this.indexManager.getMinOffset(t,i).next(p=>{const g=this.ps(n,f);return this.ys(n,g,u,p.readTime)?this.Rs(t,ty(n,null,"F")):this.ws(t,g,n,p)}))})))}Vs(t,n,i,o){return VS(n)||o.isEqual(zt.min())?ut.resolve(null):this.As.getDocuments(t,i).next(l=>{const u=this.ps(n,l);return this.ys(n,u,i,o)?ut.resolve(null):(yl()<=re.DEBUG&&xt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),vl(n)),this.ws(t,u,n,UN(o,xu)).next(f=>f))})}ps(t,n){let i=new un(j2(t));return n.forEach((o,l)=>{Ph(t,l)&&(i=i.add(l))}),i}ys(t,n,i,o){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const l=t.limitType==="F"?n.last():n.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}fs(t,n,i){return yl()<=re.DEBUG&&xt("QueryEngine","Using full collection scan to execute query:",vl(n)),this.As.getDocumentsMatchingQuery(t,n,io.min(),i)}ws(t,n,i,o){return this.As.getDocumentsMatchingQuery(t,i,o).next(l=>(n.forEach(u=>{l=l.insert(u.key,u)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="LocalStore",x9=3e8;class S9{constructor(t,n,i,o){this.persistence=t,this.bs=n,this.serializer=o,this.Ss=new Le(Ht),this.Ds=new gs(l=>Ky(l),Yy),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(i)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new c9(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ss))}}function _9(e,t,n,i){return new S9(e,t,n,i)}async function oT(e,t){const n=Lt(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let o;return n.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,n.Fs(t),n.mutationQueue.getAllMutationBatches(i))).next(l=>{const u=[],f=[];let p=Yt();for(const g of o){u.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){f.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return n.localDocuments.getDocuments(i,p).next(g=>({Ms:g,removedBatchIds:u,addedBatchIds:f}))})})}function E9(e,t){const n=Lt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=t.batch.keys(),l=n.Cs.newChangeBuffer({trackRemovals:!0});return function(f,p,g,y){const x=g.batch,_=x.keys();let w=ut.resolve();return _.forEach(C=>{w=w.next(()=>y.getEntry(p,C)).next(R=>{const P=g.docVersions.get(C);ve(P!==null,48541),R.version.compareTo(P)<0&&(x.applyToRemoteDocument(R,g),R.isValidDocument()&&(R.setReadTime(g.commitVersion),y.addEntry(R)))})}),w.next(()=>f.mutationQueue.removeMutationBatch(p,x))}(n,i,t,l).next(()=>l.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(f){let p=Yt();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p}(t))).next(()=>n.localDocuments.getDocuments(i,o))})}function sT(e){const t=Lt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.ai.getLastRemoteSnapshotVersion(n))}function T9(e,t){const n=Lt(e),i=t.snapshotVersion;let o=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const u=n.Cs.newChangeBuffer({trackRemovals:!0});o=n.Ss;const f=[];t.targetChanges.forEach((y,x)=>{const _=o.get(x);if(!_)return;f.push(n.ai.removeMatchingKeys(l,y.removedDocuments,x).next(()=>n.ai.addMatchingKeys(l,y.addedDocuments,x)));let w=_.withSequenceNumber(l.currentSequenceNumber);t.targetMismatches.get(x)!==null?w=w.withResumeToken(Nn.EMPTY_BYTE_STRING,zt.min()).withLastLimboFreeSnapshotVersion(zt.min()):y.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(y.resumeToken,i)),o=o.insert(x,w),function(R,P,V){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=x9?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(_,w,y)&&f.push(n.ai.updateTargetData(l,w))});let p=ga(),g=Yt();if(t.documentUpdates.forEach(y=>{t.resolvedLimboDocuments.has(y)&&f.push(n.persistence.referenceDelegate.updateLimboDocument(l,y))}),f.push(w9(l,u,t.documentUpdates).next(y=>{p=y.xs,g=y.Os})),!i.isEqual(zt.min())){const y=n.ai.getLastRemoteSnapshotVersion(l).next(x=>n.ai.setTargetsMetadata(l,l.currentSequenceNumber,i));f.push(y)}return ut.waitFor(f).next(()=>u.apply(l)).next(()=>n.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(n.Ss=o,l))}function w9(e,t,n){let i=Yt(),o=Yt();return n.forEach(l=>i=i.add(l)),t.getEntries(e,i).next(l=>{let u=ga();return n.forEach((f,p)=>{const g=l.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(zt.min())?(t.removeEntry(f,p.readTime),u=u.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),u=u.insert(f,p)):xt(n0,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)}),{xs:u,Os:o}})}function C9(e,t){const n=Lt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=Fy),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function A9(e,t){const n=Lt(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return n.ai.getTargetData(i,t).next(l=>l?(o=l,ut.resolve(o)):n.ai.allocateTargetId(i).next(u=>(o=new Wa(t,u,"TargetPurposeListen",i.currentSequenceNumber),n.ai.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=n.Ss.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(i.targetId,i),n.Ds.set(t,i.targetId)),i})}async function ay(e,t,n){const i=Lt(e),o=i.Ss.get(t),l=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",l,u=>i.persistence.referenceDelegate.removeTarget(u,o))}catch(u){if(!Bl(u))throw u;xt(n0,`Failed to update sequence numbers for target ${t}: ${u}`)}i.Ss=i.Ss.remove(t),i.Ds.delete(o.target)}function QS(e,t,n){const i=Lt(e);let o=zt.min(),l=Yt();return i.persistence.runTransaction("Execute query","readwrite",u=>function(p,g,y){const x=Lt(p),_=x.Ds.get(y);return _!==void 0?ut.resolve(x.Ss.get(_)):x.ai.getTargetData(g,y)}(i,u,Ai(t)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.ai.getMatchingKeysForTargetId(u,f.targetId).next(p=>{l=p})}).next(()=>i.bs.getDocumentsMatchingQuery(u,t,n?o:zt.min(),n?l:Yt())).next(f=>(R9(i,pk(t),f),{documents:f,Ns:l})))}function R9(e,t,n){let i=e.vs.get(t)||zt.min();n.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),e.vs.set(t,i)}class XS{constructor(){this.activeTargetIds=xk()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class I9{constructor(){this.So=new XS,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,n,i){this.Do[t]=n}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new XS,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M9{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="ConnectivityMonitor";class JS{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){xt(ZS,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){xt(ZS,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _f=null;function oy(){return _f===null?_f=function(){return 268435456+Math.round(2147483648*Math.random())}():_f++,"0x"+_f.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="RestConnection",O9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class D9{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+t.host,this.ko=`projects/${i}/databases/${o}`,this.qo=this.databaseId.database===Qf?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Qo(t,n,i,o,l){const u=oy(),f=this.$o(t,n.toUriEncodedString());xt(gm,`Sending RPC '${t}' ${u}:`,f,i);const p={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(p,o,l),this.Ko(t,f,p,i).then(g=>(xt(gm,`Received RPC '${t}' ${u}: `,g),g),g=>{throw Al(gm,`RPC '${t}' ${u} failed with error: `,g,"url: ",f,"request:",i),g})}Wo(t,n,i,o,l,u){return this.Qo(t,n,i,o,l)}Uo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zl}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,l)=>t[l]=o),i&&i.headers.forEach((o,l)=>t[l]=o)}$o(t,n){const i=O9[t];return`${this.Lo}/v1/${n}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N9{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="WebChannelConnection";class k9 extends D9{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,n,i,o){const l=oy();return new Promise((u,f)=>{const p=new c2;p.setWithCredentials(!0),p.listenOnce(u2.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Mf.NO_ERROR:const y=p.getResponseJson();xt(Ln,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(y)),u(y);break;case Mf.TIMEOUT:xt(Ln,`RPC '${t}' ${l} timed out`),f(new At(pt.DEADLINE_EXCEEDED,"Request time out"));break;case Mf.HTTP_ERROR:const x=p.getStatus();if(xt(Ln,`RPC '${t}' ${l} failed with status:`,x,"response text:",p.getResponseText()),x>0){let _=p.getResponseJson();Array.isArray(_)&&(_=_[0]);const w=_==null?void 0:_.error;if(w&&w.status&&w.message){const C=function(P){const V=P.toLowerCase().replace(/_/g,"-");return Object.values(pt).indexOf(V)>=0?V:pt.UNKNOWN}(w.status);f(new At(C,w.message))}else f(new At(pt.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new At(pt.UNAVAILABLE,"Connection failed."));break;default:kt(9055,{s_:t,streamId:l,o_:p.getLastErrorCode(),__:p.getLastError()})}}finally{xt(Ln,`RPC '${t}' ${l} completed.`)}});const g=JSON.stringify(o);xt(Ln,`RPC '${t}' ${l} sending request:`,o),p.send(n,"POST",g,i,15)})}a_(t,n,i){const o=oy(),l=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=h2(),f=f2(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Uo(p.initMessageHeaders,n,i),p.encodeInitMessageHeaders=!0;const y=l.join("");xt(Ln,`Creating RPC '${t}' stream ${o}: ${y}`,p);const x=u.createWebChannel(y,p);let _=!1,w=!1;const C=new N9({Go:P=>{w?xt(Ln,`Not sending because RPC '${t}' stream ${o} is closed:`,P):(_||(xt(Ln,`Opening RPC '${t}' stream ${o} transport.`),x.open(),_=!0),xt(Ln,`RPC '${t}' stream ${o} sending:`,P),x.send(P))},zo:()=>x.close()}),R=(P,V,F)=>{P.listen(V,z=>{try{F(z)}catch($){setTimeout(()=>{throw $},0)}})};return R(x,tu.EventType.OPEN,()=>{w||(xt(Ln,`RPC '${t}' stream ${o} transport opened.`),C.t_())}),R(x,tu.EventType.CLOSE,()=>{w||(w=!0,xt(Ln,`RPC '${t}' stream ${o} transport closed`),C.r_())}),R(x,tu.EventType.ERROR,P=>{w||(w=!0,Al(Ln,`RPC '${t}' stream ${o} transport errored. Name:`,P.name,"Message:",P.message),C.r_(new At(pt.UNAVAILABLE,"The operation could not be completed")))}),R(x,tu.EventType.MESSAGE,P=>{var V;if(!w){const F=P.data[0];ve(!!F,16349);const z=F,$=(z==null?void 0:z.error)||((V=z[0])===null||V===void 0?void 0:V.error);if($){xt(Ln,`RPC '${t}' stream ${o} received error:`,$);const B=$.status;let X=function(O){const S=tn[O];if(S!==void 0)return Y2(S)}(B),D=$.message;X===void 0&&(X=pt.INTERNAL,D="Unknown error status: "+B+" with message "+$.message),w=!0,C.r_(new At(X,D)),x.close()}else xt(Ln,`RPC '${t}' stream ${o} received:`,F),C.i_(F)}}),R(f,d2.STAT_EVENT,P=>{P.stat===Ym.PROXY?xt(Ln,`RPC '${t}' stream ${o} detected buffering proxy`):P.stat===Ym.NOPROXY&&xt(Ln,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{C.n_()},0),C}}function mm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(e){return new zk(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(t,n,i=1e3,o=1.5,l=6e4){this.bi=t,this.timerId=n,this.u_=i,this.c_=o,this.l_=l,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const n=Math.floor(this.h_+this.d_()),i=Math.max(0,Date.now()-this.T_),o=Math.max(0,n-i);o>0&&xt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,o,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="PersistentStream";class cT{constructor(t,n,i,o,l,u,f,p){this.bi=t,this.R_=i,this.V_=o,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new lT(t,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():n&&n.code===pt.RESOURCE_EXHAUSTED?(pa(n.toString()),pa("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===pt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.m_===n&&this.B_(i,o)},i=>{t(()=>{const o=new At(pt.UNKNOWN,"Fetching auth token failed: "+i.message);return this.L_(o)})})}B_(t,n){const i=this.N_(this.m_);this.stream=this.k_(t,n),this.stream.jo(()=>{i(()=>this.listener.jo())}),this.stream.Jo(()=>{i(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(o=>{i(()=>this.L_(o))}),this.stream.onMessage(o=>{i(()=>++this.p_==1?this.q_(o):this.onNext(o))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return xt(t_,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return n=>{this.bi.enqueueAndForget(()=>this.m_===t?n():(xt(t_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class P9 extends cT{constructor(t,n,i,o,l,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,o,u),this.serializer=l}k_(t,n){return this.connection.a_("Listen",t,n)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const n=Uk(this.serializer,t),i=function(l){if(!("targetChange"in l))return zt.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?zt.min():u.readTime?Ri(u.readTime):zt.min()}(t);return this.listener.Q_(n,i)}U_(t){const n={};n.database=iy(this.serializer),n.addTarget=function(l,u){let f;const p=u.target;if(f=Jm(p)?{documents:Fk(l,p)}:{query:qk(l,p).gt},f.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){f.resumeToken=X2(l,u.resumeToken);const g=ey(l,u.expectedCount);g!==null&&(f.expectedCount=g)}else if(u.snapshotVersion.compareTo(zt.min())>0){f.readTime=nh(l,u.snapshotVersion.toTimestamp());const g=ey(l,u.expectedCount);g!==null&&(f.expectedCount=g)}return f}(this.serializer,t);const i=Kk(this.serializer,t);i&&(n.labels=i),this.F_(n)}K_(t){const n={};n.database=iy(this.serializer),n.removeTarget=t,this.F_(n)}}class j9 extends cT{constructor(t,n,i,o,l,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,o,u),this.serializer=l}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,n){return this.connection.a_("Write",t,n)}q_(t){return ve(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ve(!t.writeResults||t.writeResults.length===0,55816),this.listener.z_()}onNext(t){ve(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const n=Hk(t.writeResults,t.commitTime),i=Ri(t.commitTime);return this.listener.j_(i,n)}H_(){const t={};t.database=iy(this.serializer),this.F_(t)}G_(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>$k(this.serializer,i))};this.F_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V9{}class z9 extends V9{constructor(t,n,i,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=o,this.J_=!1}Y_(){if(this.J_)throw new At(pt.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,n,i,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Qo(t,ny(n,i),o,l,u)).catch(l=>{throw l.name==="FirebaseError"?(l.code===pt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new At(pt.UNKNOWN,l.toString())})}Wo(t,n,i,o,l){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Wo(t,ny(n,i),o,u,f,l)).catch(u=>{throw u.name==="FirebaseError"?(u.code===pt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new At(pt.UNKNOWN,u.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class L9{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(pa(n),this.ea=!1):xt("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="RemoteStore";class B9{constructor(t,n,i,o,l){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=l,this.ca.vo(u=>{i.enqueueAndForget(async()=>{ys(this)&&(xt(ss,"Restarting streams for network reachability change."),await async function(p){const g=Lt(p);g.aa.add(4),await Lu(g),g.la.set("Unknown"),g.aa.delete(4),await Bh(g)}(this))})}),this.la=new L9(i,o)}}async function Bh(e){if(ys(e))for(const t of e.ua)await t(!0)}async function Lu(e){for(const t of e.ua)await t(!1)}function uT(e,t){const n=Lt(e);n._a.has(t.targetId)||(n._a.set(t.targetId,t),o0(n)?a0(n):Ul(n).b_()&&i0(n,t))}function r0(e,t){const n=Lt(e),i=Ul(n);n._a.delete(t),i.b_()&&dT(n,t),n._a.size===0&&(i.b_()?i.v_():ys(n)&&n.la.set("Unknown"))}function i0(e,t){if(e.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(zt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ul(e).U_(t)}function dT(e,t){e.ha.Ke(t),Ul(e).K_(t)}function a0(e){e.ha=new kk({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>e._a.get(t)||null,Pt:()=>e.datastore.serializer.databaseId}),Ul(e).start(),e.la.ta()}function o0(e){return ys(e)&&!Ul(e).w_()&&e._a.size>0}function ys(e){return Lt(e).aa.size===0}function fT(e){e.ha=void 0}async function U9(e){e.la.set("Online")}async function $9(e){e._a.forEach((t,n)=>{i0(e,t)})}async function H9(e,t){fT(e),o0(e)?(e.la.ia(t),a0(e)):e.la.set("Unknown")}async function F9(e,t,n){if(e.la.set("Online"),t instanceof Q2&&t.state===2&&t.cause)try{await async function(o,l){const u=l.cause;for(const f of l.targetIds)o._a.has(f)&&(await o.remoteSyncer.rejectListen(f,u),o._a.delete(f),o.ha.removeTarget(f))}(e,t)}catch(i){xt(ss,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await ih(e,i)}else if(t instanceof kf?e.ha.Xe(t):t instanceof W2?e.ha.ot(t):e.ha.nt(t),!n.isEqual(zt.min()))try{const i=await sT(e.localStore);n.compareTo(i)>=0&&await function(l,u){const f=l.ha.It(u);return f.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l._a.get(g);y&&l._a.set(g,y.withResumeToken(p.resumeToken,u))}}),f.targetMismatches.forEach((p,g)=>{const y=l._a.get(p);if(!y)return;l._a.set(p,y.withResumeToken(Nn.EMPTY_BYTE_STRING,y.snapshotVersion)),dT(l,p);const x=new Wa(y.target,p,g,y.sequenceNumber);i0(l,x)}),l.remoteSyncer.applyRemoteEvent(f)}(e,n)}catch(i){xt(ss,"Failed to raise snapshot:",i),await ih(e,i)}}async function ih(e,t,n){if(!Bl(t))throw t;e.aa.add(1),await Lu(e),e.la.set("Offline"),n||(n=()=>sT(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{xt(ss,"Retrying IndexedDB access"),await n(),e.aa.delete(1),await Bh(e)})}function hT(e,t){return t().catch(n=>ih(e,n,t))}async function Uh(e){const t=Lt(e),n=lo(t);let i=t.oa.length>0?t.oa[t.oa.length-1].batchId:Fy;for(;q9(t);)try{const o=await C9(t.localStore,i);if(o===null){t.oa.length===0&&n.v_();break}i=o.batchId,G9(t,o)}catch(o){await ih(t,o)}pT(t)&&gT(t)}function q9(e){return ys(e)&&e.oa.length<10}function G9(e,t){e.oa.push(t);const n=lo(e);n.b_()&&n.W_&&n.G_(t.mutations)}function pT(e){return ys(e)&&!lo(e).w_()&&e.oa.length>0}function gT(e){lo(e).start()}async function K9(e){lo(e).H_()}async function Y9(e){const t=lo(e);for(const n of e.oa)t.G_(n.mutations)}async function W9(e,t,n){const i=e.oa.shift(),o=Qy.from(i,t,n);await hT(e,()=>e.remoteSyncer.applySuccessfulWrite(o)),await Uh(e)}async function Q9(e,t){t&&lo(e).W_&&await async function(i,o){if(function(u){return Dk(u)&&u!==pt.ABORTED}(o.code)){const l=i.oa.shift();lo(i).D_(),await hT(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Uh(i)}}(e,t),pT(e)&&gT(e)}async function e_(e,t){const n=Lt(e);n.asyncQueue.verifyOperationInProgress(),xt(ss,"RemoteStore received new credentials");const i=ys(n);n.aa.add(3),await Lu(n),i&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.aa.delete(3),await Bh(n)}async function X9(e,t){const n=Lt(e);t?(n.aa.delete(2),await Bh(n)):t||(n.aa.add(2),await Lu(n),n.la.set("Unknown"))}function Ul(e){return e.Pa||(e.Pa=function(n,i,o){const l=Lt(n);return l.Y_(),new P9(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(e.datastore,e.asyncQueue,{jo:U9.bind(null,e),Jo:$9.bind(null,e),Zo:H9.bind(null,e),Q_:F9.bind(null,e)}),e.ua.push(async t=>{t?(e.Pa.D_(),o0(e)?a0(e):e.la.set("Unknown")):(await e.Pa.stop(),fT(e))})),e.Pa}function lo(e){return e.Ta||(e.Ta=function(n,i,o){const l=Lt(n);return l.Y_(),new j9(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(e.datastore,e.asyncQueue,{jo:()=>Promise.resolve(),Jo:K9.bind(null,e),Zo:Q9.bind(null,e),z_:Y9.bind(null,e),j_:W9.bind(null,e)}),e.ua.push(async t=>{t?(e.Ta.D_(),await Uh(e)):(await e.Ta.stop(),e.oa.length>0&&(xt(ss,`Stopping write stream with ${e.oa.length} pending writes`),e.oa=[]))})),e.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(t,n,i,o,l){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ja,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,o,l){const u=Date.now()+i,f=new s0(t,n,u,o,l);return f.start(i),f}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new At(pt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function l0(e,t){if(pa("AsyncQueue",`${t}: ${e}`),Bl(e))return new At(pt.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{static emptySet(t){return new Tl(t.comparator)}constructor(t){this.comparator=t?(n,i)=>t(n,i)||Mt.comparator(n.key,i.key):(n,i)=>Mt.comparator(n.key,i.key),this.keyedMap=eu(),this.sortedSet=new Le(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Tl)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Tl;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.Ia=new Le(Mt.comparator)}track(t){const n=t.doc.key,i=this.Ia.get(n);i?t.type!==0&&i.type===3?this.Ia=this.Ia.insert(n,t):t.type===3&&i.type!==1?this.Ia=this.Ia.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.Ia=this.Ia.remove(n):t.type===1&&i.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:t.doc}):kt(63341,{Vt:t,Ea:i}):this.Ia=this.Ia.insert(n,t)}da(){const t=[];return this.Ia.inorderTraversal((n,i)=>{t.push(i)}),t}}class Dl{constructor(t,n,i,o,l,u,f,p,g){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,n,i,o,l){const u=[];return n.forEach(f=>{u.push({type:0,doc:f})}),new Dl(t,n,Tl.emptySet(n),u,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==i[o].type||!n[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z9{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class J9{constructor(){this.queries=r_(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,i){const o=Lt(n),l=o.queries;o.queries=r_(),l.forEach((u,f)=>{for(const p of f.Ra)p.onError(i)})})(this,new At(pt.ABORTED,"Firestore shutting down"))}}function r_(){return new gs(e=>P2(e),kh)}async function tP(e,t){const n=Lt(e);let i=3;const o=t.query;let l=n.queries.get(o);l?!l.Va()&&t.ma()&&(i=2):(l=new Z9,i=t.ma()?0:1);try{switch(i){case 0:l.Aa=await n.onListen(o,!0);break;case 1:l.Aa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(u){const f=l0(u,`Initialization of query '${vl(t.query)}' failed`);return void t.onError(f)}n.queries.set(o,l),l.Ra.push(t),t.ga(n.onlineState),l.Aa&&t.pa(l.Aa)&&c0(n)}async function eP(e,t){const n=Lt(e),i=t.query;let o=3;const l=n.queries.get(i);if(l){const u=l.Ra.indexOf(t);u>=0&&(l.Ra.splice(u,1),l.Ra.length===0?o=t.ma()?0:1:!l.Va()&&t.ma()&&(o=2))}switch(o){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function nP(e,t){const n=Lt(e);let i=!1;for(const o of t){const l=o.query,u=n.queries.get(l);if(u){for(const f of u.Ra)f.pa(o)&&(i=!0);u.Aa=o}}i&&c0(n)}function rP(e,t,n){const i=Lt(e),o=i.queries.get(t);if(o)for(const l of o.Ra)l.onError(n);i.queries.delete(t)}function c0(e){e.fa.forEach(t=>{t.next()})}var sy,i_;(i_=sy||(sy={})).ya="default",i_.Cache="cache";class iP{constructor(t,n,i){this.query=t,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=i||{}}pa(t){if(!this.options.includeMetadataChanges){const i=[];for(const o of t.docChanges)o.type!==3&&i.push(o);t=new Dl(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ba?this.Da(t)&&(this.wa.next(t),n=!0):this.va(t,this.onlineState)&&(this.Ca(t),n=!0),this.Sa=t,n}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),n=!0),n}va(t,n){if(!t.fromCache||!this.ma())return!0;const i=n!=="Offline";return(!this.options.Fa||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(t){t=Dl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==sy.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(t){this.key=t}}class yT{constructor(t){this.key=t}}class aP{constructor(t,n){this.query=t,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Yt(),this.mutatedKeys=Yt(),this.Ua=j2(t),this.Ka=new Tl(this.Ua)}get Wa(){return this.qa}Ga(t,n){const i=n?n.za:new n_,o=n?n.Ka:this.Ka;let l=n?n.mutatedKeys:this.mutatedKeys,u=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((y,x)=>{const _=o.get(y),w=Ph(this.query,x)?x:null,C=!!_&&this.mutatedKeys.has(_.key),R=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;_&&w?_.data.isEqual(w.data)?C!==R&&(i.track({type:3,doc:w}),P=!0):this.ja(_,w)||(i.track({type:2,doc:w}),P=!0,(p&&this.Ua(w,p)>0||g&&this.Ua(w,g)<0)&&(f=!0)):!_&&w?(i.track({type:0,doc:w}),P=!0):_&&!w&&(i.track({type:1,doc:_}),P=!0,(p||g)&&(f=!0)),P&&(w?(u=u.add(w),l=R?l.add(y):l.delete(y)):(u=u.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),l=l.delete(y.key),i.track({type:1,doc:y})}return{Ka:u,za:i,ys:f,mutatedKeys:l}}ja(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,o){const l=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const u=t.za.da();u.sort((y,x)=>function(w,C){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return kt(20277,{Vt:P})}};return R(w)-R(C)}(y.type,x.type)||this.Ua(y.doc,x.doc)),this.Ha(i),o=o!=null&&o;const f=n&&!o?this.Ja():[],p=this.$a.size===0&&this.current&&!o?1:0,g=p!==this.Qa;return this.Qa=p,u.length!==0||g?{snapshot:new Dl(this.query,t.Ka,l,u,t.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ya:f}:{Ya:f}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new n_,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=Yt(),this.Ka.forEach(i=>{this.Za(i.key)&&(this.$a=this.$a.add(i.key))});const n=[];return t.forEach(i=>{this.$a.has(i)||n.push(new yT(i))}),this.$a.forEach(i=>{t.has(i)||n.push(new mT(i))}),n}Xa(t){this.qa=t.Ns,this.$a=Yt();const n=this.Ga(t.documents);return this.applyChanges(n,!0)}eu(){return Dl.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const u0="SyncEngine";class oP{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class sP{constructor(t){this.key=t,this.tu=!1}}class lP{constructor(t,n,i,o,l,u){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.nu={},this.ru=new gs(f=>P2(f),kh),this.iu=new Map,this.su=new Set,this.ou=new Le(Mt.comparator),this._u=new Map,this.au=new Jy,this.uu={},this.cu=new Map,this.lu=Ol.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function cP(e,t,n=!0){const i=ET(e);let o;const l=i.ru.get(t);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.eu()):o=await vT(i,t,n,!0),o}async function uP(e,t){const n=ET(e);await vT(n,t,!0,!1)}async function vT(e,t,n,i){const o=await A9(e.localStore,Ai(t)),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);let f;return i&&(f=await dP(e,t,l,u==="current",o.resumeToken)),e.isPrimaryClient&&n&&uT(e.remoteStore,o),f}async function dP(e,t,n,i,o){e.Pu=(x,_,w)=>async function(R,P,V,F){let z=P.view.Ga(V);z.ys&&(z=await QS(R.localStore,P.query,!1).then(({documents:D})=>P.view.Ga(D,z)));const $=F&&F.targetChanges.get(P.targetId),B=F&&F.targetMismatches.get(P.targetId)!=null,X=P.view.applyChanges(z,R.isPrimaryClient,$,B);return o_(R,P.targetId,X.Ya),X.snapshot}(e,x,_,w);const l=await QS(e.localStore,t,!0),u=new aP(t,l.Ns),f=u.Ga(l.documents),p=zu.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",o),g=u.applyChanges(f,e.isPrimaryClient,p);o_(e,n,g.Ya);const y=new oP(t,n,u);return e.ru.set(t,y),e.iu.has(n)?e.iu.get(n).push(t):e.iu.set(n,[t]),g.snapshot}async function fP(e,t,n){const i=Lt(e),o=i.ru.get(t),l=i.iu.get(o.targetId);if(l.length>1)return i.iu.set(o.targetId,l.filter(u=>!kh(u,t))),void i.ru.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await ay(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),n&&r0(i.remoteStore,o.targetId),ly(i,o.targetId)}).catch(Ll)):(ly(i,o.targetId),await ay(i.localStore,o.targetId,!0))}async function hP(e,t){const n=Lt(e),i=n.ru.get(t),o=n.iu.get(i.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),r0(n.remoteStore,i.targetId))}async function pP(e,t,n){const i=SP(e);try{const o=await function(u,f){const p=Lt(u),g=cn.now(),y=f.reduce((w,C)=>w.add(C.key),Yt());let x,_;return p.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=ga(),R=Yt();return p.Cs.getEntries(w,y).next(P=>{C=P,C.forEach((V,F)=>{F.isValidDocument()||(R=R.add(V))})}).next(()=>p.localDocuments.getOverlayedDocuments(w,C)).next(P=>{x=P;const V=[];for(const F of f){const z=Ak(F,x.get(F.key).overlayedDocument);z!=null&&V.push(new ms(F.key,z,A2(z.value.mapValue),ca.exists(!0)))}return p.mutationQueue.addMutationBatch(w,g,V,f)}).next(P=>{_=P;const V=P.applyToLocalDocumentSet(x,R);return p.documentOverlayCache.saveOverlays(w,P.batchId,V)})}).then(()=>({batchId:_.batchId,changes:z2(x)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(o.batchId),function(u,f,p){let g=u.uu[u.currentUser.toKey()];g||(g=new Le(Ht)),g=g.insert(f,p),u.uu[u.currentUser.toKey()]=g}(i,o.batchId,n),await Bu(i,o.changes),await Uh(i.remoteStore)}catch(o){const l=l0(o,"Failed to persist write");n.reject(l)}}async function bT(e,t){const n=Lt(e);try{const i=await T9(n.localStore,t);t.targetChanges.forEach((o,l)=>{const u=n._u.get(l);u&&(ve(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.tu=!0:o.modifiedDocuments.size>0?ve(u.tu,14607):o.removedDocuments.size>0&&(ve(u.tu,42227),u.tu=!1))}),await Bu(n,i,t)}catch(i){await Ll(i)}}function a_(e,t,n){const i=Lt(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const o=[];i.ru.forEach((l,u)=>{const f=u.view.ga(t);f.snapshot&&o.push(f.snapshot)}),function(u,f){const p=Lt(u);p.onlineState=f;let g=!1;p.queries.forEach((y,x)=>{for(const _ of x.Ra)_.ga(f)&&(g=!0)}),g&&c0(p)}(i.eventManager,t),o.length&&i.nu.Q_(o),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function gP(e,t,n){const i=Lt(e);i.sharedClientState.updateQueryState(t,"rejected",n);const o=i._u.get(t),l=o&&o.key;if(l){let u=new Le(Mt.comparator);u=u.insert(l,$n.newNoDocument(l,zt.min()));const f=Yt().add(l),p=new zh(zt.min(),new Map,new Le(Ht),u,f);await bT(i,p),i.ou=i.ou.remove(l),i._u.delete(t),d0(i)}else await ay(i.localStore,t,!1).then(()=>ly(i,t,n)).catch(Ll)}async function mP(e,t){const n=Lt(e),i=t.batch.batchId;try{const o=await E9(n.localStore,t);ST(n,i,null),xT(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Bu(n,o)}catch(o){await Ll(o)}}async function yP(e,t,n){const i=Lt(e);try{const o=await function(u,f){const p=Lt(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,f).next(x=>(ve(x!==null,37113),y=x.keys(),p.mutationQueue.removeMutationBatch(g,x))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(i.localStore,t);ST(i,t,n),xT(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Bu(i,o)}catch(o){await Ll(o)}}function xT(e,t){(e.cu.get(t)||[]).forEach(n=>{n.resolve()}),e.cu.delete(t)}function ST(e,t,n){const i=Lt(e);let o=i.uu[i.currentUser.toKey()];if(o){const l=o.get(t);l&&(n?l.reject(n):l.resolve(),o=o.remove(t)),i.uu[i.currentUser.toKey()]=o}}function ly(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.iu.get(t))e.ru.delete(i),n&&e.nu.Tu(i,n);e.iu.delete(t),e.isPrimaryClient&&e.au.Ur(t).forEach(i=>{e.au.containsKey(i)||_T(e,i)})}function _T(e,t){e.su.delete(t.path.canonicalString());const n=e.ou.get(t);n!==null&&(r0(e.remoteStore,n),e.ou=e.ou.remove(t),e._u.delete(n),d0(e))}function o_(e,t,n){for(const i of n)i instanceof mT?(e.au.addReference(i.key,t),vP(e,i)):i instanceof yT?(xt(u0,"Document no longer in limbo: "+i.key),e.au.removeReference(i.key,t),e.au.containsKey(i.key)||_T(e,i.key)):kt(19791,{Iu:i})}function vP(e,t){const n=t.key,i=n.path.canonicalString();e.ou.get(n)||e.su.has(i)||(xt(u0,"New document in limbo: "+n),e.su.add(i),d0(e))}function d0(e){for(;e.su.size>0&&e.ou.size<e.maxConcurrentLimboResolutions;){const t=e.su.values().next().value;e.su.delete(t);const n=new Mt(Pe.fromString(t)),i=e.lu.next();e._u.set(i,new sP(n)),e.ou=e.ou.insert(n,i),uT(e.remoteStore,new Wa(Ai(k2(n.path)),i,"TargetPurposeLimboResolution",Mh.le))}}async function Bu(e,t,n){const i=Lt(e),o=[],l=[],u=[];i.ru.isEmpty()||(i.ru.forEach((f,p)=>{u.push(i.Pu(p,t,n).then(g=>{var y;if((g||n)&&i.isPrimaryClient){const x=g?!g.fromCache:(y=n==null?void 0:n.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(p.targetId,x?"current":"not-current")}if(g){o.push(g);const x=e0.Ps(p.targetId,g);l.push(x)}}))}),await Promise.all(u),i.nu.Q_(o),await async function(p,g){const y=Lt(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",x=>ut.forEach(g,_=>ut.forEach(_.ls,w=>y.persistence.referenceDelegate.addReference(x,_.targetId,w)).next(()=>ut.forEach(_.hs,w=>y.persistence.referenceDelegate.removeReference(x,_.targetId,w)))))}catch(x){if(!Bl(x))throw x;xt(n0,"Failed to update sequence numbers: "+x)}for(const x of g){const _=x.targetId;if(!x.fromCache){const w=y.Ss.get(_),C=w.snapshotVersion,R=w.withLastLimboFreeSnapshotVersion(C);y.Ss=y.Ss.insert(_,R)}}}(i.localStore,l))}async function bP(e,t){const n=Lt(e);if(!n.currentUser.isEqual(t)){xt(u0,"User change. New user:",t.toKey());const i=await oT(n.localStore,t);n.currentUser=t,function(l,u){l.cu.forEach(f=>{f.forEach(p=>{p.reject(new At(pt.CANCELLED,u))})}),l.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Bu(n,i.Ms)}}function xP(e,t){const n=Lt(e),i=n._u.get(t);if(i&&i.tu)return Yt().add(i.key);{let o=Yt();const l=n.iu.get(t);if(!l)return o;for(const u of l){const f=n.ru.get(u);o=o.unionWith(f.view.Wa)}return o}}function ET(e){const t=Lt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=bT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xP.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=gP.bind(null,t),t.nu.Q_=nP.bind(null,t.eventManager),t.nu.Tu=rP.bind(null,t.eventManager),t}function SP(e){const t=Lt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=mP.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=yP.bind(null,t),t}class ah{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Lh(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,n){return null}fu(t,n){return null}Vu(t){return _9(this.persistence,new b9,t.initialUser,this.serializer)}Ru(t){return new aT(t0.Ei,this.serializer)}Au(t){return new I9}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ah.provider={build:()=>new ah};class _P extends ah{constructor(t){super(),this.cacheSizeBytes=t}mu(t,n){ve(this.persistence.referenceDelegate instanceof rh,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new i9(i,t.asyncQueue,n)}Ru(t){const n=this.cacheSizeBytes!==void 0?er.withCacheSize(this.cacheSizeBytes):er.DEFAULT;return new aT(i=>rh.Ei(i,n),this.serializer)}}class cy{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>a_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=bP.bind(null,this.syncEngine),await X9(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new J9}()}createDatastore(t){const n=Lh(t.databaseInfo.databaseId),i=function(l){return new k9(l)}(t.databaseInfo);return function(l,u,f,p){return new z9(l,u,f,p)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,o,l,u,f){return new B9(i,o,l,u,f)}(this.localStore,this.datastore,t.asyncQueue,n=>a_(this.syncEngine,n,0),function(){return JS.C()?new JS:new M9}())}createSyncEngine(t,n){return function(o,l,u,f,p,g,y){const x=new lP(o,l,u,f,p,g);return y&&(x.hu=!0),x}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const l=Lt(o);xt(ss,"RemoteStore shutting down."),l.aa.add(5),await Lu(l),l.ca.shutdown(),l.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}cy.provider={build:()=>new cy};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):pa("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="FirestoreClient";class TP{constructor(t,n,i,o,l){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=o,this.user=Un.UNAUTHENTICATED,this.clientId=y2.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async u=>{xt(co,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(xt(co,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ja;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=l0(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function ym(e,t){e.asyncQueue.verifyOperationInProgress(),xt(co,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async o=>{i.isEqual(o)||(await oT(t.localStore,o),i=o)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function s_(e,t){e.asyncQueue.verifyOperationInProgress();const n=await wP(e);xt(co,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>e_(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,o)=>e_(t.remoteStore,o)),e._onlineComponents=t}async function wP(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){xt(co,"Using user provided OfflineComponentProvider");try{await ym(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===pt.FAILED_PRECONDITION||o.code===pt.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Al("Error using user provided cache. Falling back to memory cache: "+n),await ym(e,new ah)}}else xt(co,"Using default OfflineComponentProvider"),await ym(e,new _P(void 0));return e._offlineComponents}async function TT(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(xt(co,"Using user provided OnlineComponentProvider"),await s_(e,e._uninitializedComponentsProvider._online)):(xt(co,"Using default OnlineComponentProvider"),await s_(e,new cy))),e._onlineComponents}function CP(e){return TT(e).then(t=>t.syncEngine)}async function AP(e){const t=await TT(e),n=t.eventManager;return n.onListen=cP.bind(null,t.syncEngine),n.onUnlisten=fP.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=uP.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=hP.bind(null,t.syncEngine),n}function RP(e,t,n={}){const i=new Ja;return e.asyncQueue.enqueueAndForget(async()=>function(l,u,f,p,g){const y=new EP({next:_=>{y.yu(),u.enqueueAndForget(()=>eP(l,x)),_.fromCache&&p.source==="server"?g.reject(new At(pt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(_)},error:_=>g.reject(_)}),x=new iP(f,y,{includeMetadataChanges:!0,Fa:!0});return tP(l,x)}(await AP(e),e.asyncQueue,t,n,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(e,t,n){if(!n)throw new At(pt.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function IP(e,t,n,i){if(t===!0&&i===!0)throw new At(pt.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function c_(e){if(!Mt.isDocumentKey(e))throw new At(pt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function u_(e){if(Mt.isDocumentKey(e))throw new At(pt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function f0(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":kt(12329,{type:typeof e})}function oh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new At(pt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=f0(e);throw new At(pt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="firestore.googleapis.com",d_=!0;class f_{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new At(pt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=AT,this.ssl=d_}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:d_;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=iT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<n9)throw new At(pt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}IP("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wT((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new At(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new At(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new At(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class $h{constructor(t,n,i,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new At(pt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new At(pt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f_(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new DN;switch(i.type){case"firstParty":return new jN(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new At(pt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=l_.get(n);i&&(xt("ComponentProvider","Removing Datastore"),l_.delete(n),i.terminate())}(this),Promise.resolve()}}function MP(e,t,n,i={}){var o;const l=(e=oh(e,$h))._getSettings(),u=Object.assign(Object.assign({},l),{emulatorOptions:e._getEmulatorOptions()}),f=`${t}:${n}`;l.host!==AT&&l.host!==f&&Al("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},l),{host:f,ssl:!1,emulatorOptions:i});if(!vu(p,u)&&(e._setSettings(p),i.mockUserToken)){let g,y;if(typeof i.mockUserToken=="string")g=i.mockUserToken,y=Un.MOCK_USER;else{g=uD(i.mockUserToken,(o=e._app)===null||o===void 0?void 0:o.options.projectId);const x=i.mockUserToken.sub||i.mockUserToken.user_id;if(!x)throw new At(pt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Un(x)}e._authCredentials=new NN(new g2(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Hh(this.firestore,t,this._query)}}class Yr{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new to(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Yr(this.firestore,t,this._key)}}class to extends Hh{constructor(t,n,i){super(t,n,k2(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Yr(this.firestore,null,new Mt(t))}withConverter(t){return new to(this.firestore,t,this._path)}}function Wn(e,t,...n){if(e=as(e),CT("collection","path",t),e instanceof $h){const i=Pe.fromString(t,...n);return u_(i),new to(e,null,i)}{if(!(e instanceof Yr||e instanceof to))throw new At(pt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Pe.fromString(t,...n));return u_(i),new to(e.firestore,null,i)}}function OP(e,t,...n){if(e=as(e),arguments.length===1&&(t=y2.newId()),CT("doc","path",t),e instanceof $h){const i=Pe.fromString(t,...n);return c_(i),new Yr(e,null,new Mt(i))}{if(!(e instanceof Yr||e instanceof to))throw new At(pt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Pe.fromString(t,...n));return c_(i),new Yr(e.firestore,e instanceof to?e.converter:null,new Mt(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="AsyncQueue";class p_{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new lT(this,"async_queue_retry"),this.ju=()=>{const i=mm();i&&xt(h_,"Visibility state changed to "+i.visibilityState),this.y_.A_()},this.Hu=t;const n=mm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const n=mm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Ja;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!Bl(t))throw t;xt(h_,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const n=this.Hu.then(()=>(this.Wu=!0,t().catch(i=>{throw this.Ku=i,this.Wu=!1,pa("INTERNAL UNHANDLED ERROR: ",g_(i)),i}).then(i=>(this.Wu=!1,i))));return this.Hu=n,n}enqueueAfterDelay(t,n,i){this.Ju(),this.zu.indexOf(t)>-1&&(n=0);const o=s0.createAndSchedule(this,t,n,i,l=>this.Xu(l));return this.Uu.push(o),o}Ju(){this.Ku&&kt(47125,{ec:g_(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const n of this.Uu)if(n.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const n=this.Uu.indexOf(t);this.Uu.splice(n,1)}}function g_(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class h0 extends $h{constructor(t,n,i,o){super(t,n,i,o),this.type="firestore",this._queue=new p_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new p_(t),this._firestoreClient=void 0,await t}}}function DP(e,t){const n=typeof e=="object"?e:a2(),i=typeof e=="string"?e:Qf,o=ju(n,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=lD("firestore");l&&MP(o,...l)}return o}function RT(e){if(e._terminated)throw new At(pt.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||NP(e),e._firestoreClient}function NP(e){var t,n,i;const o=e._freezeSettings(),l=function(f,p,g,y){return new XN(f,p,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,wT(y.experimentalLongPollingOptions),y.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,o);e._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),e._firestoreClient=new TP(e._authCredentials,e._appCheckCredentials,e._queue,l,e._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nl(Nn.fromBase64String(t))}catch(n){throw new At(pt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Nl(Nn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new At(pt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new On(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new At(pt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new At(pt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ht(this._lat,t._lat)||Ht(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=/^__.*__$/;class PP{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new ms(t,this.data,this.fieldMask,n,this.fieldTransforms):new Vu(t,this.data,n,this.fieldTransforms)}}function MT(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw kt(40011,{oc:e})}}class y0{constructor(t,n,i,o,l,u){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this._c(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new y0(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ac({path:i,cc:!1});return o.lc(t),o}hc(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ac({path:i,cc:!1});return o._c(),o}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return sh(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if(MT(this.oc)&&kP.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class jP{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||Lh(t)}dc(t,n,i,o=!1){return new y0({oc:t,methodName:n,Ec:i,path:On.emptyPath(),cc:!1,Ic:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VP(e){const t=e._freezeSettings(),n=Lh(e._databaseId);return new jP(e._databaseId,!!t.ignoreUndefinedProperties,n)}function zP(e,t,n,i,o,l={}){const u=e.dc(l.merge||l.mergeFields?2:0,t,n,o);kT("Data must be an object, but it was:",u,i);const f=DT(i,u);let p,g;if(l.merge)p=new Kr(u.fieldMask),g=u.fieldTransforms;else if(l.mergeFields){const y=[];for(const x of l.mergeFields){const _=LP(t,x,n);if(!u.contains(_))throw new At(pt.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);UP(y,_)||y.push(_)}p=new Kr(y),g=u.fieldTransforms.filter(x=>p.covers(x.field))}else p=null,g=u.fieldTransforms;return new PP(new Vr(f),p,g)}function OT(e,t){if(NT(e=as(e)))return kT("Unsupported field value:",t,e),DT(e,t);if(e instanceof IT)return function(i,o){if(!MT(o.oc))throw o.Tc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Tc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(i,o){const l=[];let u=0;for(const f of i){let p=OT(f,o.Pc(u));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),u++}return{arrayValue:{values:l}}}(e,t)}return function(i,o){if((i=as(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Sk(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=cn.fromDate(i);return{timestampValue:nh(o.serializer,l)}}if(i instanceof cn){const l=new cn(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:nh(o.serializer,l)}}if(i instanceof g0)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Nl)return{bytesValue:X2(o.serializer,i._byteString)};if(i instanceof Yr){const l=o.databaseId,u=i.firestore._databaseId;if(!u.isEqual(l))throw o.Tc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Zy(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof m0)return function(u,f){return{mapValue:{fields:{[w2]:{stringValue:C2},[Xf]:{arrayValue:{values:u.toArray().map(g=>{if(typeof g!="number")throw f.Tc("VectorValues must only contain numeric values.");return Wy(f.serializer,g)})}}}}}}(i,o);throw o.Tc(`Unsupported field value: ${f0(i)}`)}(e,t)}function DT(e,t){const n={};return b2(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ps(e,(i,o)=>{const l=OT(o,t.uc(i));l!=null&&(n[i]=l)}),{mapValue:{fields:n}}}function NT(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof cn||e instanceof g0||e instanceof Nl||e instanceof Yr||e instanceof IT||e instanceof m0)}function kT(e,t,n){if(!NT(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const i=f0(n);throw i==="an object"?t.Tc(e+" a custom object"):t.Tc(e+" "+i)}}function LP(e,t,n){if((t=as(t))instanceof p0)return t._internalPath;if(typeof t=="string")return PT(e,t);throw sh("Field path arguments must be of type string or ",e,!1,void 0,n)}const BP=new RegExp("[~\\*/\\[\\]]");function PT(e,t,n){if(t.search(BP)>=0)throw sh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new p0(...t.split("."))._internalPath}catch{throw sh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sh(e,t,n,i,o){const l=i&&!i.isEmpty(),u=o!==void 0;let f=`Function ${t}() called with invalid data`;n&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||u)&&(p+=" (found",l&&(p+=` in field ${i}`),u&&(p+=` in document ${o}`),p+=")"),new At(pt.INVALID_ARGUMENT,f+e+p)}function UP(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(t,n,i,o,l){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Yr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $P(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(VT("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $P extends jT{data(){return super.data()}}function VT(e,t){return typeof t=="string"?PT(e,t):t instanceof p0?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new At(pt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FP{convertValue(t,n="none"){switch(so(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ye(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(oo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw kt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return ps(t,(o,l)=>{i[o]=this.convertValue(l,n)}),i}convertVectorValue(t){var n,i,o;const l=(o=(i=(n=t.fields)===null||n===void 0?void 0:n[Xf].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(u=>Ye(u.doubleValue));return new m0(l)}convertGeoPoint(t){return new g0(Ye(t.latitude),Ye(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=Dh(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Su(t));default:return null}}convertTimestamp(t){const n=ao(t);return new cn(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=Pe.fromString(t);ve(rT(i),9688,{name:t});const o=new _u(i.get(1),i.get(3)),l=new Mt(i.popFirst(5));return o.isEqual(n)||pa(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(e,t,n){let i;return i=e?e.toFirestore(t):t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class GP extends jT{constructor(t,n,i,o,l,u){super(t,n,i,o,u),this._firestore=t,this._firestoreImpl=t,this.metadata=l}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Pf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(VT("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Pf extends GP{data(t={}){return super.data(t)}}class KP{constructor(t,n,i,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ef(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new Pf(this._firestore,this._userDataWriter,i.key,i,new Ef(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new At(pt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map(f=>{const p=new Pf(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ef(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const p=new Pf(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ef(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,y=-1;return f.type!==0&&(g=u.indexOf(f.doc.key),u=u.delete(f.doc.key)),f.type!==1&&(u=u.add(f.doc),y=u.indexOf(f.doc.key)),{type:YP(f.type),doc:p,oldIndex:g,newIndex:y}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YP(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return kt(61501,{type:e})}}class WP extends FP{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nl(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Yr(this.firestore,null,n)}}function ho(e){e=oh(e,Hh);const t=oh(e.firestore,h0),n=RT(t),i=new WP(t);return HP(e._query),RP(n,e._query).then(o=>new KP(t,i,e,o))}function vs(e,t){const n=oh(e.firestore,h0),i=OP(e),o=qP(e.converter,t);return QP(n,[zP(VP(e.firestore),"addDoc",i._key,o,e.converter!==null,{}).toMutation(i._key,ca.exists(!1))]).then(()=>i)}function QP(e,t){return function(i,o){const l=new Ja;return i.asyncQueue.enqueueAndForget(async()=>pP(await CP(i),o,l)),l.promise}(RT(e),t)}(function(t,n=!0){(function(o){zl=o})(SN),ro(new fa("firestore",(i,{instanceIdentifier:o,options:l})=>{const u=i.getProvider("app").getImmediate(),f=new h0(new kN(i.getProvider("auth-internal")),new VN(u,i.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new At(pt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _u(g.options.projectId,y)}(u,o),u);return l=Object.assign({useFetchStreams:n},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),Ci(xS,SS,t),Ci(xS,SS,"esm2017")})();var XP="firebase",ZP="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ci(XP,ZP,"app");const zT="@firebase/installations",v0="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=1e4,BT=`w:${v0}`,UT="FIS_v2",JP="https://firebaseinstallations.googleapis.com/v1",tj=60*60*1e3,ej="installations",nj="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ls=new Ih(ej,nj,rj);function $T(e){return e instanceof fo&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT({projectId:e}){return`${JP}/projects/${e}/installations`}function FT(e){return{token:e.token,requestStatus:2,expiresIn:aj(e.expiresIn),creationTime:Date.now()}}async function qT(e,t){const i=(await t.json()).error;return ls.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function GT({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ij(e,{refreshToken:t}){const n=GT(e);return n.append("Authorization",oj(t)),n}async function KT(e){const t=await e();return t.status>=500&&t.status<600?e():t}function aj(e){return Number(e.replace("s","000"))}function oj(e){return`${UT} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sj({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=HT(e),o=GT(e),l=t.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const u={fid:n,authVersion:UT,appId:e.appId,sdkVersion:BT},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await KT(()=>fetch(i,f));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:FT(g.authToken)}}else throw await qT("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lj(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cj=/^[cdef][\w-]{21}$/,uy="";function uj(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=dj(e);return cj.test(n)?n:uy}catch{return uy}}function dj(e){return lj(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new Map;function QT(e,t){const n=Fh(e);XT(n,t),fj(n,t)}function XT(e,t){const n=WT.get(e);if(n)for(const i of n)i(t)}function fj(e,t){const n=hj();n&&n.postMessage({key:e,fid:t}),pj()}let ts=null;function hj(){return!ts&&"BroadcastChannel"in self&&(ts=new BroadcastChannel("[Firebase] FID Change"),ts.onmessage=e=>{XT(e.data.key,e.data.fid)}),ts}function pj(){WT.size===0&&ts&&(ts.close(),ts=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gj="firebase-installations-database",mj=1,cs="firebase-installations-store";let vm=null;function b0(){return vm||(vm=r2(gj,mj,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cs)}}})),vm}async function lh(e,t){const n=Fh(e),o=(await b0()).transaction(cs,"readwrite"),l=o.objectStore(cs),u=await l.get(n);return await l.put(t,n),await o.done,(!u||u.fid!==t.fid)&&QT(e,t.fid),t}async function ZT(e){const t=Fh(e),i=(await b0()).transaction(cs,"readwrite");await i.objectStore(cs).delete(t),await i.done}async function qh(e,t){const n=Fh(e),o=(await b0()).transaction(cs,"readwrite"),l=o.objectStore(cs),u=await l.get(n),f=t(u);return f===void 0?await l.delete(n):await l.put(f,n),await o.done,f&&(!u||u.fid!==f.fid)&&QT(e,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(e){let t;const n=await qh(e.appConfig,i=>{const o=yj(i),l=vj(e,o);return t=l.registrationPromise,l.installationEntry});return n.fid===uy?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yj(e){const t=e||{fid:uj(),registrationStatus:0};return JT(t)}function vj(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ls.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=bj(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:xj(e)}:{installationEntry:t}}async function bj(e,t){try{const n=await sj(e,t);return lh(e.appConfig,n)}catch(n){throw $T(n)&&n.customData.serverCode===409?await ZT(e.appConfig):await lh(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function xj(e){let t=await m_(e.appConfig);for(;t.registrationStatus===1;)await YT(100),t=await m_(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await x0(e);return i||n}return t}function m_(e){return qh(e,t=>{if(!t)throw ls.create("installation-not-found");return JT(t)})}function JT(e){return Sj(e)?{fid:e.fid,registrationStatus:0}:e}function Sj(e){return e.registrationStatus===1&&e.registrationTime+LT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _j({appConfig:e,heartbeatServiceProvider:t},n){const i=Ej(e,n),o=ij(e,n),l=t.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const u={installation:{sdkVersion:BT,appId:e.appId}},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await KT(()=>fetch(i,f));if(p.ok){const g=await p.json();return FT(g)}else throw await qT("Generate Auth Token",p)}function Ej(e,{fid:t}){return`${HT(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S0(e,t=!1){let n;const i=await qh(e.appConfig,l=>{if(!tw(l))throw ls.create("not-registered");const u=l.authToken;if(!t&&Cj(u))return l;if(u.requestStatus===1)return n=Tj(e,t),l;{if(!navigator.onLine)throw ls.create("app-offline");const f=Rj(l);return n=wj(e,f),f}});return n?await n:i.authToken}async function Tj(e,t){let n=await y_(e.appConfig);for(;n.authToken.requestStatus===1;)await YT(100),n=await y_(e.appConfig);const i=n.authToken;return i.requestStatus===0?S0(e,t):i}function y_(e){return qh(e,t=>{if(!tw(t))throw ls.create("not-registered");const n=t.authToken;return Ij(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function wj(e,t){try{const n=await _j(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await lh(e.appConfig,i),n}catch(n){if($T(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ZT(e.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await lh(e.appConfig,i)}throw n}}function tw(e){return e!==void 0&&e.registrationStatus===2}function Cj(e){return e.requestStatus===2&&!Aj(e)}function Aj(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+tj}function Rj(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ij(e){return e.requestStatus===1&&e.requestTime+LT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mj(e){const t=e,{installationEntry:n,registrationPromise:i}=await x0(t);return i?i.catch(console.error):S0(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oj(e,t=!1){const n=e;return await Dj(n),(await S0(n,t)).token}async function Dj(e){const{registrationPromise:t}=await x0(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nj(e){if(!e||!e.options)throw bm("App Configuration");if(!e.name)throw bm("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw bm(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function bm(e){return ls.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="installations",kj="installations-internal",Pj=e=>{const t=e.getProvider("app").getImmediate(),n=Nj(t),i=ju(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},jj=e=>{const t=e.getProvider("app").getImmediate(),n=ju(t,ew).getImmediate();return{getId:()=>Mj(n),getToken:o=>Oj(n,o)}};function Vj(){ro(new fa(ew,Pj,"PUBLIC")),ro(new fa(kj,jj,"PRIVATE"))}Vj();Ci(zT,v0);Ci(zT,v0,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="analytics",zj="firebase_id",Lj="origin",Bj=60*1e3,Uj="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_0="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Uy("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $j={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vr=new Ih("analytics","Analytics",$j);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hj(e){if(!e.startsWith(_0)){const t=vr.create("invalid-gtag-resource",{gtagURL:e});return rr.warn(t.message),""}return e}function nw(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Fj(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function qj(e,t){const n=Fj("firebase-js-sdk-policy",{createScriptURL:Hj}),i=document.createElement("script"),o=`${_0}?l=${e}&id=${t}`;i.src=n?n==null?void 0:n.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function Gj(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Kj(e,t,n,i,o,l){const u=i[o];try{if(u)await t[u];else{const p=(await nw(n)).find(g=>g.measurementId===o);p&&await t[p.appId]}}catch(f){rr.error(f)}e("config",o,l)}async function Yj(e,t,n,i,o){try{let l=[];if(o&&o.send_to){let u=o.send_to;Array.isArray(u)||(u=[u]);const f=await nw(n);for(const p of u){const g=f.find(x=>x.measurementId===p),y=g&&t[g.appId];if(y)l.push(y);else{l=[];break}}}l.length===0&&(l=Object.values(t)),await Promise.all(l),e("event",i,o||{})}catch(l){rr.error(l)}}function Wj(e,t,n,i){async function o(l,...u){try{if(l==="event"){const[f,p]=u;await Yj(e,t,n,f,p)}else if(l==="config"){const[f,p]=u;await Kj(e,t,n,i,f,p)}else if(l==="consent"){const[f,p]=u;e("consent",f,p)}else if(l==="get"){const[f,p,g]=u;e("get",f,p,g)}else if(l==="set"){const[f]=u;e("set",f)}else e(l,...u)}catch(f){rr.error(f)}}return o}function Qj(e,t,n,i,o){let l=function(...u){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=Wj(l,e,t,n),{gtagCore:l,wrappedGtag:window[o]}}function Xj(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(_0)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zj=30,Jj=1e3;class tV{constructor(t={},n=Jj){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const rw=new tV;function eV(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function nV(e){var t;const{appId:n,apiKey:i}=e,o={method:"GET",headers:eV(i)},l=Uj.replace("{app-id}",n),u=await fetch(l,o);if(u.status!==200&&u.status!==304){let f="";try{const p=await u.json();!((t=p.error)===null||t===void 0)&&t.message&&(f=p.error.message)}catch{}throw vr.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function rV(e,t=rw,n){const{appId:i,apiKey:o,measurementId:l}=e.options;if(!i)throw vr.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw vr.create("no-api-key")}const u=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new oV;return setTimeout(async()=>{f.abort()},Bj),iw({appId:i,apiKey:o,measurementId:l},u,f,t)}async function iw(e,{throttleEndTimeMillis:t,backoffCount:n},i,o=rw){var l;const{appId:u,measurementId:f}=e;try{await iV(i,t)}catch(p){if(f)return rr.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:u,measurementId:f};throw p}try{const p=await nV(e);return o.deleteThrottleMetadata(u),p}catch(p){const g=p;if(!aV(g)){if(o.deleteThrottleMetadata(u),f)return rr.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:u,measurementId:f};throw p}const y=Number((l=g==null?void 0:g.customData)===null||l===void 0?void 0:l.httpStatus)===503?uS(n,o.intervalMillis,Zj):uS(n,o.intervalMillis),x={throttleEndTimeMillis:Date.now()+y,backoffCount:n+1};return o.setThrottleMetadata(u,x),rr.debug(`Calling attemptFetch again in ${y} millis`),iw(e,x,i,o)}}function iV(e,t){return new Promise((n,i)=>{const o=Math.max(t-Date.now(),0),l=setTimeout(n,o);e.addEventListener(()=>{clearTimeout(l),i(vr.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function aV(e){if(!(e instanceof fo)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class oV{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function sV(e,t,n,i,o){if(o&&o.global){e("event",n,i);return}else{const l=await t,u=Object.assign(Object.assign({},i),{send_to:l});e("event",n,u)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lV(){if(JE())try{await t2()}catch(e){return rr.warn(vr.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return rr.warn(vr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cV(e,t,n,i,o,l,u){var f;const p=rV(e);p.then(w=>{n[w.measurementId]=w.appId,e.options.measurementId&&w.measurementId!==e.options.measurementId&&rr.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>rr.error(w)),t.push(p);const g=lV().then(w=>{if(w)return i.getId()}),[y,x]=await Promise.all([p,g]);Xj(l)||qj(l,y.measurementId),o("js",new Date);const _=(f=u==null?void 0:u.config)!==null&&f!==void 0?f:{};return _[Lj]="firebase",_.update=!0,x!=null&&(_[zj]=x),o("config",y.measurementId,_),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(t){this.app=t}_delete(){return delete cu[this.app.options.appId],Promise.resolve()}}let cu={},v_=[];const b_={};let xm="dataLayer",dV="gtag",x_,aw,S_=!1;function fV(){const e=[];if(hD()&&e.push("This is a browser extension environment."),gD()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,o)=>`(${o+1}) ${i}`).join(" "),n=vr.create("invalid-analytics-context",{errorInfo:t});rr.warn(n.message)}}function hV(e,t,n){fV();const i=e.options.appId;if(!i)throw vr.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)rr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vr.create("no-api-key");if(cu[i]!=null)throw vr.create("already-exists",{id:i});if(!S_){Gj(xm);const{wrappedGtag:l,gtagCore:u}=Qj(cu,v_,b_,xm,dV);aw=l,x_=u,S_=!0}return cu[i]=cV(e,v_,b_,t,x_,xm,n),new uV(e)}function pV(e=a2()){e=as(e);const t=ju(e,ch);return t.isInitialized()?t.getImmediate():gV(e)}function gV(e,t={}){const n=ju(e,ch);if(n.isInitialized()){const o=n.getImmediate();if(vu(t,n.getOptions()))return o;throw vr.create("already-initialized")}return n.initialize({options:t})}function mV(e,t,n,i){e=as(e),sV(aw,cu[e.app.options.appId],t,n,i).catch(o=>rr.error(o))}const __="@firebase/analytics",E_="0.10.12";function yV(){ro(new fa(ch,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return hV(i,o,n)},"PUBLIC")),ro(new fa("analytics-internal",e,"PRIVATE")),Ci(__,E_),Ci(__,E_,"esm2017");function e(t){try{const n=t.getProvider(ch).getImmediate();return{logEvent:(i,o,l)=>mV(n,i,o,l)}}catch(n){throw vr.create("interop-component-reg-failed",{reason:n})}}}yV();const vV={apiKey:"AIzaSyDRbi57FvbqePXAJ6ejUqdScNRjQZRtS_E",authDomain:"blocklight-9401c.firebaseapp.com",projectId:"blocklight-9401c",storageBucket:"blocklight-9401c.firebasestorage.app",messagingSenderId:"467966017402",appId:"1:467966017402:web:1d5dcedaac8ddb137e20c3",measurementId:"G-ELX2F0T887"},ow=i2(vV);pV(ow);const Qn=DP(ow),bV=()=>{const e=Xr(),[t,n]=A.useState([]),[i,o]=A.useState(!0),[l,u]=A.useState(""),[f,p]=A.useState("");A.useEffect(()=>{(async()=>{const _=(await ho(Wn(Qn,"blogs"))).docs.map(w=>({id:w.id,...w.data()}));n(_),o(!1),console.log(_)})()},[]);const g=async y=>{if(y.preventDefault(),p(""),!l||!l.includes("@")){p("Please enter a valid email address.");return}try{await vs(Wn(Qn,"newsletter"),{email:l,created:new Date}),p("Thank you for subscribing!"),u("")}catch{p("Subscription failed. Please try again.")}};return v.jsxs("div",{className:"blog-container",children:[v.jsx("header",{className:"blog-header",children:v.jsxs("div",{className:"blog-header-content",children:[v.jsx("h1",{children:"Blocklight Blog"}),v.jsx("div",{className:"accent-bar"}),v.jsx("p",{children:"Insights, strategies, and the latest trends in blockchain and crypto—curated for the modern investor."})]})}),v.jsx("style",{jsx:!0,children:`
  .blog-header {
    text-align: center;
    margin-bottom: 48px;
    padding-bottom: 32px;
    background: linear-gradient(90deg, #f8fafc 0%, #e3f0ff 100%);
    border-radius: 16px;
    box-shadow: 0 4px 24px 0 rgba(44,62,80,0.04);
  }
  .blog-header-content {
    max-width: 700px;
    margin: 0 auto;
    padding: 48px 16px 32px 16px;
  }
  .blog-header h1 {
    font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #1a237e;
    margin-bottom: 12px;
    letter-spacing: 1px;
  }
  .accent-bar {
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, #1976d2 0%, #00c6fb 100%);
    border-radius: 3px;
    margin: 0 auto 24px auto;
  }
  .blog-header p {
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: #374151;
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2px;
  }
`}),v.jsxs("div",{className:"blog-content",children:[v.jsx("main",{className:"blog-posts",children:i?v.jsx("p",{children:"Loading..."}):t.map(y=>v.jsxs("article",{style:{cursor:"pointer"},onClick:()=>e("/general",{state:{study:y}}),className:"blog-card",children:[y.imageUrl&&v.jsxs("div",{className:"blog-card-image",children:[v.jsx("img",{src:y.imageUrl,alt:y.title}),y.category&&v.jsx("span",{className:"category-tag",children:y.category})]}),v.jsxs("div",{className:"blog-card-content",children:[v.jsx("h2",{children:y.title}),v.jsx("p",{className:"excerpt",children:y.excerpt}),v.jsxs("div",{className:"meta-info",children:[v.jsxs("span",{children:[v.jsx(hs,{})," ",y.author]}),v.jsxs("span",{children:[v.jsx(ds,{})," ",y.date]}),v.jsxs("span",{children:[v.jsx(fs,{})," ",y.readtime," mins read"]})]})]})]},y.id))}),v.jsx("aside",{className:"blog-sidebar",children:v.jsxs("div",{className:"sidebar-widget newsletter",children:[v.jsx("h3",{children:"Subscribe to Newsletter"}),v.jsx("p",{children:"Get the latest articles delivered to your inbox"}),v.jsxs("form",{onSubmit:g,children:[v.jsx("input",{type:"email",placeholder:"Your email address",value:l,onChange:y=>u(y.target.value),required:!0}),v.jsx("button",{type:"submit",children:"Subscribe"})]}),f&&v.jsx("div",{style:{marginTop:8,color:f.startsWith("Thank")?"green":"crimson",fontSize:"0.95rem"},children:f})]})})]}),v.jsx("style",{jsx:!0,children:`
        /* Base Styles */
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        
        .blog-header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .blog-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        .blog-header p {
          color: #7f8c8d;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }
        
        .search-bar {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .search-bar input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 1rem;
        }
        
        .search-bar button {
          padding: 0 15px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        
        /* Blog Content Layout */
        .blog-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
        }
        
        /* Blog Posts */
        .blog-posts {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .blog-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .blog-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .category-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #3498db;
          color: white;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .blog-card-content {
          padding: 20px;
        }
        
        .blog-card-content h2 {
          margin: 0 0 15px 0;
          font-size: 1.5rem;
          color: #2c3e50;
        }
        
        .excerpt {
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 15px;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .meta-info span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .post-stats {
          display: flex;
          gap: 20px;
          padding-top: 15px;
          border-top: 1px solid #eee;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .post-stats span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        /* Pagination */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }
        
        .pagination button {
          padding: 8px 15px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .pagination button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        /* Sidebar */
        .blog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .sidebar-widget {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sidebar-widget h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .categories-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .categories-list li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .categories-list li:hover {
          color: #3498db;
        }
        
        .popular-posts {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .popular-posts li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        
        .popular-posts li a {
          display: block;
          color: #2c3e50;
          text-decoration: none;
          margin-bottom: 5px;
        }
        
        .popular-posts li span {
          font-size: 0.8rem;
          color: #95a5a6;
        }
        
        .newsletter form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .newsletter input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .newsletter button {
          padding: 10px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-content {
            grid-template-columns: 1fr;
          }
          
          .blog-sidebar {
            order: -1;
          }
        }
      `})]})},T_=()=>{const e=Xr(),t=Zr(),n=qE(t.breakpoints.down("md")),[i,o]=A.useState(null),[l,u]=A.useState(null),[f,p]=A.useState(null),[g,y]=A.useState(null),[x,_]=A.useState(null),[w,C]=A.useState(null),R=!!l,P=!!f,V=!!g,F=!!x,z=!!w,$=()=>{u(null)},B=q=>{u(q.currentTarget)},X=q=>{p(q.currentTarget)},D=()=>{p(null)},M=q=>{y(q.currentTarget)},O=()=>{y(null)},S=q=>_(q.currentTarget),j=()=>_(null),L=q=>{C(q.currentTarget)},k=()=>{C(null)},ft="primary-search-account-menu-mobile",lt=v.jsxs(Wc,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:ft,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:R,onClose:$,PaperProps:{sx:{borderRadius:3,minWidth:220,boxShadow:"0 8px 32px 0 rgba(44,62,80,0.10)"}},children:[v.jsxs(Rn,{onClick:()=>{e("/"),$()},children:[v.jsx(jr,{size:"large",color:"primary",children:v.jsx(tS,{})}),v.jsx(wt,{sx:{ml:1,fontWeight:600},children:"Home"})]}),v.jsxs(Rn,{onClick:()=>{e("/casestudy"),$()},children:[v.jsx(jr,{size:"large",color:"primary",children:v.jsx(gM,{badgeContent:4,color:"error",children:v.jsx(mf,{})})}),v.jsx(wt,{sx:{ml:1,fontWeight:600},children:"Case Studies"})]}),v.jsxs(Rn,{onClick:L,children:[v.jsx(jr,{size:"large",color:"primary",children:v.jsx(Zo,{})}),v.jsx(wt,{sx:{ml:1,fontWeight:600},children:"Market Analysis"})]}),v.jsxs(Wc,{id:"mobile-market-menu",anchorEl:w,open:z,onClose:k,PaperProps:{sx:{borderRadius:3,minWidth:200,boxShadow:"0 8px 32px 0 rgba(44,62,80,0.10)"}},children:[v.jsxs(Rn,{onClick:()=>{k(),$(),e("/daily")},children:[v.jsx(yf,{sx:{mr:1,color:"primary.main"}})," Daily Analysis"]}),v.jsxs(Rn,{onClick:()=>{k(),$(),e("/weekly")},children:[v.jsx(Zo,{sx:{mr:1,color:"secondary.main"}})," Weekly Analysis"]}),v.jsxs(Rn,{onClick:()=>{k(),$(),e("/longterm")},children:[v.jsx(mf,{sx:{mr:1,color:"success.main"}})," Longterm Analysis"]})]}),v.jsxs(Rn,{onClick:M,children:[v.jsx(jr,{size:"large",color:"primary",children:v.jsx(eS,{})}),v.jsx(wt,{sx:{ml:1,fontWeight:600},children:"Learn"})]}),v.jsxs(Wc,{id:"mobile-learn-menu",anchorEl:g,open:V,onClose:O,PaperProps:{sx:{borderRadius:3,minWidth:200,boxShadow:"0 8px 32px 0 rgba(44,62,80,0.10)"}},children:[v.jsxs(Rn,{onClick:()=>{O(),$(),e("/crypto101")},children:[v.jsx(rS,{sx:{mr:1,color:"primary.main"}})," Crypto 101"]}),v.jsxs(Rn,{onClick:()=>{O(),$(),e("/blockchain101")},children:[v.jsx(nS,{sx:{mr:1,color:"secondary.main"}})," Blockchain 101"]}),v.jsxs(Rn,{onClick:()=>{O(),$(),e("/trading101")},children:[v.jsx(yf,{sx:{mr:1,color:"success.main"}})," Trading 101"]})]}),v.jsxs(Rn,{onClick:()=>{e("/blog"),$()},children:[v.jsx(jr,{size:"large",color:"primary",children:v.jsx(Zx,{})}),v.jsx(wt,{sx:{ml:1,fontWeight:600},children:"Blogs"})]})]});return v.jsxs($t,{sx:{flexGrow:1},children:[v.jsx(f6,{in:!0,direction:"down",timeout:600,children:v.jsx($3,{position:"sticky",color:"default",elevation:0,sx:{borderBottom:`1.5px solid ${t.palette.divider}`,background:"rgba(255,255,255,0.85)",backdropFilter:"blur(8px)",boxShadow:"0 2px 16px 0 rgba(44,62,80,0.06)"},children:v.jsx(mu,{maxWidth:"xl",children:v.jsxs(cO,{disableGutters:!0,sx:{minHeight:72},children:[v.jsx(wt,{variant:"h5",noWrap:!0,component:"div",sx:{mr:3,display:{xs:"none",md:"flex"},fontWeight:900,letterSpacing:2,color:t.palette.primary.main,fontFamily:"Montserrat, Arial",textShadow:"0 2px 8px rgba(25,118,210,0.06)"},children:"Blocklight.in"}),n&&v.jsx($t,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:v.jsx(jr,{size:"large","aria-label":"show more","aria-controls":ft,"aria-haspopup":"true",onClick:B,color:"primary",children:v.jsx(DO,{})})}),v.jsx(wt,{variant:"h5",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"},fontWeight:900,letterSpacing:2,color:t.palette.primary.main,fontFamily:"Montserrat, Arial",textShadow:"0 2px 8px rgba(25,118,210,0.06)"},children:"Blocklight.in"}),v.jsxs($t,{sx:{flexGrow:1,display:{xs:"none",md:"flex"},ml:4,gap:1},children:[v.jsx(Qo,{onClick:()=>e("/"),startIcon:v.jsx(tS,{}),sx:{my:2,color:"text.primary",fontWeight:600,fontFamily:"Montserrat, Arial",px:2.5,borderRadius:2,letterSpacing:1,transition:"all 0.2s","&:hover":{color:t.palette.primary.main,background:"rgba(25,118,210,0.07)"}},children:"Home"}),v.jsx(Qo,{startIcon:v.jsx(Zo,{}),sx:{my:2,color:"text.primary",fontWeight:600,fontFamily:"Montserrat, Arial",px:2.5,borderRadius:2,letterSpacing:1,transition:"all 0.2s","&:hover":{color:t.palette.primary.main,background:"rgba(25,118,210,0.07)"}},"aria-controls":F?"market-menu":void 0,"aria-haspopup":"true","aria-expanded":F?"true":void 0,onClick:S,children:"Market Analysis"}),v.jsxs(Wc,{id:"market-menu",anchorEl:x,open:F,onClose:j,PaperProps:{sx:{borderRadius:3,minWidth:220,boxShadow:"0 8px 32px 0 rgba(44,62,80,0.10)"}},children:[v.jsxs(Rn,{onClick:()=>{j(),e("/daily")},children:[v.jsx(yf,{sx:{mr:1,color:"primary.main"}}),"Daily Analysis"]}),v.jsxs(Rn,{onClick:()=>{j(),e("/weekly")},children:[v.jsx(Zo,{sx:{mr:1,color:"secondary.main"}}),"Weekly Analysis"]}),v.jsxs(Rn,{onClick:()=>{j(),e("/longterm")},children:[v.jsx(mf,{sx:{mr:1,color:"success.main"}}),"Longterm Analysis"]})]}),v.jsx(Qo,{onClick:()=>e("/casestudy"),startIcon:v.jsx(mf,{}),sx:{my:2,color:"text.primary",fontWeight:600,fontFamily:"Montserrat, Arial",px:2.5,borderRadius:2,letterSpacing:1,transition:"all 0.2s","&:hover":{color:t.palette.primary.main,background:"rgba(25,118,210,0.07)"}},children:"Case Studies"}),v.jsx(Qo,{startIcon:v.jsx(eS,{}),sx:{my:2,color:"text.primary",fontWeight:600,fontFamily:"Montserrat, Arial",px:2.5,borderRadius:2,letterSpacing:1,transition:"all 0.2s","&:hover":{color:t.palette.primary.main,background:"rgba(25,118,210,0.07)"}},"aria-controls":P?"learn-menu":void 0,"aria-haspopup":"true","aria-expanded":P?"true":void 0,onClick:X,children:"Learn"}),v.jsxs(Wc,{id:"learn-menu",anchorEl:f,open:P,onClose:D,MenuListProps:{"aria-labelledby":"learn-button"},PaperProps:{sx:{borderRadius:3,minWidth:200,boxShadow:"0 8px 32px 0 rgba(44,62,80,0.10)"}},children:[v.jsxs(Rn,{onClick:()=>{D(),e("/crypto101")},children:[v.jsx(rS,{sx:{mr:1,color:"primary.main"}})," Crypto 101"]}),v.jsxs(Rn,{onClick:()=>{D(),e("/blockchain101")},children:[v.jsx(nS,{sx:{mr:1,color:"secondary.main"}})," Blockchain 101"]}),v.jsxs(Rn,{onClick:()=>{D(),e("/trading101")},children:[v.jsx(yf,{sx:{mr:1,color:"success.main"}})," Trading 101"]})]}),v.jsx(Qo,{onClick:()=>e("/blog"),startIcon:v.jsx(Zx,{}),sx:{my:2,color:"text.primary",fontWeight:600,fontFamily:"Montserrat, Arial",px:2.5,borderRadius:2,letterSpacing:1,transition:"all 0.2s","&:hover":{color:t.palette.primary.main,background:"rgba(25,118,210,0.07)"}},children:"Blogs"})]})]})})})}),lt]})},xV=()=>v.jsx($t,{sx:{backgroundColor:"#333",color:"white",py:4,mt:4},children:v.jsxs(mu,{maxWidth:"lg",children:[v.jsxs(xn,{container:!0,spacing:4,children:[v.jsxs(xn,{item:!0,xs:12,sm:4,children:[v.jsx(wt,{variant:"h4",gutterBottom:!0,children:"About Us"}),v.jsx(wt,{variant:"body2",sx:{fontWeight:600,fontFamily:"Montserrat, Arial",color:"white",letterSpacing:1},children:"Blocklight is your premier source for crypto news, market insights, and in-depth articles—delivering accurate, timely, and actionable information for blockchain enthusiasts and investors. We cut through the noise with data-driven analysis, project breakdowns, and trend reports, helping you stay ahead in the fast-moving crypto space. Whether you're tracking DeFi, regulations, or emerging technologies, Blocklight provides the trusted knowledge you need to navigate Web3 with confidence."})]}),v.jsxs(xn,{item:!0,xs:12,sm:4,children:[v.jsx(wt,{variant:"h6",gutterBottom:!0,children:"Quick Links"}),v.jsx(sm,{href:"/",color:"inherit",underline:"hover",children:"Home"}),v.jsx("br",{}),v.jsx(sm,{href:"/casestudy",color:"inherit",underline:"hover",children:"CaseStudy"}),v.jsx("br",{}),v.jsx(sm,{href:"/blog",color:"inherit",underline:"hover",children:"Blog"})]}),v.jsxs(xn,{item:!0,xs:12,sm:4,children:[v.jsx(wt,{variant:"h6",gutterBottom:!0,children:"Contact Us"}),v.jsx(wt,{variant:"body2",children:"Email: support@blocklight.com"}),v.jsx(wt,{variant:"body2",children:"Phone: +91 8605846854"}),v.jsx(wt,{variant:"body2",children:"Address: Maharashtra, India"})]})]}),v.jsx($t,{sx:{textAlign:"center",mt:4,borderTop:"1px solid rgba(255, 255, 255, 0.2)",pt:2},children:v.jsxs(wt,{variant:"body2",children:["© ",new Date().getFullYear()," Blocklight Inc. All rights reserved."]})})]})}),SV=()=>{const e=Zr(),t=qE(e.breakpoints.down("sm")),[n,i]=A.useState(0),[o,l]=A.useState(""),u=[{id:1,title:"Global Tech Conference Announces Revolutionary AI Breakthroughs",summary:"Researchers unveil new AI models that outperform human capabilities in several benchmark tests.",category:"Technology",date:"2 hours ago",image:"https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg",author:"Tech Insights",trending:!0,bookmarked:!1},{id:2,title:"Stock Markets Reach All-Time High Amid Economic Recovery",summary:"Major indices surge as vaccination rates improve and consumer spending rebounds globally.",category:"Business",date:"5 hours ago",image:"https://source.unsplash.com/random/600x400/?stock",author:"Financial Times",trending:!0,bookmarked:!1},{id:3,title:"New Study Reveals Benefits of Mediterranean Diet",summary:"Long-term research confirms significant health improvements for followers of Mediterranean eating patterns.",category:"Health",date:"1 day ago",image:"https://source.unsplash.com/random/600x400/?food",author:"Health Journal",trending:!0,bookmarked:!1},{id:4,title:"SpaceX Launches Next Generation of Starlink Satellites",summary:"The company successfully deployed 60 new satellites as part of its global internet coverage plan.",category:"Science",date:"1 day ago",image:"https://source.unsplash.com/random/600x400/?space",author:"Space News",trending:!0,bookmarked:!1},{id:5,title:"Olympic Committee Announces Host City for 2032 Games",summary:"After extensive evaluation, the IOC has selected the next destination for the Summer Olympics.",category:"Sports",date:"2 days ago",image:"https://source.unsplash.com/random/600x400/?olympics",author:"Sports Daily",trending:!0,bookmarked:!1},{id:6,title:"Renewable Energy Investments Surpass Fossil Fuels for First Time",summary:"Global shift to clean energy accelerates as investment patterns show historic change.",category:"Environment",date:"3 days ago",image:"https://source.unsplash.com/random/600x400/?energy",author:"Green Planet",trending:!1,bookmarked:!1}],f=[{label:"All",icon:v.jsx(jO,{})},{label:"Crypto",icon:v.jsx(MO,{})},{label:"Bitcoin",icon:v.jsx(PO,{})},{label:"Blockchain",icon:v.jsx(NO,{})}],p=(_,w)=>{i(w)},g=_=>{console.log(`Toggled bookmark for article ${_}`)},y=u.filter(_=>{const w=_.title.toLowerCase().includes(o.toLowerCase())||_.summary.toLowerCase().includes(o.toLowerCase()),C=n===0||_.category.toLowerCase()===f[n].label.toLowerCase();return w&&C}),x=u.filter(_=>_.trending).slice(0,3);return v.jsxs($t,{sx:{bgcolor:"#f6f8fa",minHeight:"100vh"},children:[v.jsx($t,{sx:{background:"linear-gradient(90deg, #1976d2 0%, #00c6fb 100%)",color:"#fff",py:{xs:5,md:8},mb:3},children:v.jsxs(mu,{maxWidth:"lg",children:[v.jsx(wt,{variant:"h3",sx:{fontWeight:800,mb:1,fontFamily:"Montserrat, Arial"},children:"NewsTrends"}),v.jsx(wt,{variant:"h6",sx:{opacity:.9,fontFamily:"Inter, Arial"},children:"The latest in crypto, business, science, and more—curated for you."})]})}),v.jsxs(mu,{maxWidth:"lg",children:[v.jsx(us,{elevation:2,sx:{mb:4,borderRadius:3},children:v.jsx(RO,{value:n,onChange:p,variant:t?"scrollable":"standard",scrollButtons:"auto",allowScrollButtonsMobile:!0,sx:{px:2,pt:1,"& .MuiTab-root":{fontWeight:600,fontFamily:"Inter, Arial"}},TabIndicatorProps:{style:{background:"linear-gradient(90deg, #1976d2 0%, #00c6fb 100%)",height:4,borderRadius:2}},children:f.map((_,w)=>v.jsx(aO,{label:t?null:_.label,icon:_.icon,iconPosition:t?"top":"start",sx:{minWidth:72}},w))})}),v.jsx($t,{sx:{mb:5},children:v.jsx(xn,{container:!0,spacing:3,children:x.map(_=>v.jsx(xn,{item:!0,xs:12,md:4,children:v.jsxs(Vm,{sx:{display:"flex",flexDirection:"column",height:"100%",borderRadius:3,boxShadow:3,background:"linear-gradient(120deg, #e3f0ff 0%, #f8fafc 100%)",position:"relative",overflow:"hidden"},children:[v.jsx(Lm,{component:"img",height:"160",image:_.image,alt:_.title,sx:{objectFit:"cover"}}),v.jsxs(zm,{sx:{flexGrow:1},children:[v.jsxs(wt,{variant:"body2",color:"text.secondary",sx:{mb:1},children:[_.category," • ",_.date]}),v.jsx(wt,{variant:"h6",sx:{fontWeight:700,mb:1},children:_.title}),v.jsx(wt,{variant:"body2",color:"text.secondary",children:_.summary})]}),v.jsxs(Vx,{sx:{justifyContent:"space-between",px:2,pb:2},children:[v.jsxs($t,{sx:{display:"flex",alignItems:"center"},children:[v.jsx(kx,{sx:{width:28,height:28,mr:1,bgcolor:"primary.main",color:"#fff",fontWeight:700},children:_.author.charAt(0)}),v.jsx(wt,{variant:"caption",sx:{fontWeight:600},children:_.author})]}),v.jsxs($t,{children:[v.jsx(jr,{size:"small",onClick:()=>g(_.id),children:v.jsx(Jx,{fontSize:"small"})}),v.jsx(jr,{size:"small",children:v.jsx(aS,{fontSize:"small"})}),v.jsx(jr,{size:"small",children:v.jsx(iS,{fontSize:"small"})})]})]})]})},_.id))})}),v.jsx(xn,{container:!0,spacing:4,children:y.map(_=>v.jsx(xn,{item:!0,xs:12,sm:6,md:4,children:v.jsxs(Vm,{sx:{height:"100%",display:"flex",flexDirection:"column",borderRadius:3,boxShadow:2,transition:"transform 0.2s, box-shadow 0.2s","&:hover":{transform:"translateY(-6px) scale(1.02)",boxShadow:6},position:"relative",overflow:"hidden",background:"#fff"},children:[_.trending&&v.jsx(BE,{label:"TRENDING",color:"primary",size:"small",sx:{position:"absolute",top:16,left:16,zIndex:2,fontWeight:700,letterSpacing:1}}),v.jsx(Lm,{component:"img",height:"160",image:_.image,alt:_.title,sx:{objectFit:"cover"}}),v.jsxs(zm,{sx:{flexGrow:1},children:[v.jsxs(wt,{gutterBottom:!0,variant:"body2",color:"text.secondary",children:[_.category," • ",_.date]}),v.jsx(wt,{gutterBottom:!0,variant:"h6",component:"div",sx:{fontWeight:700},children:_.title}),v.jsx(wt,{variant:"body2",color:"text.secondary",children:_.summary})]}),v.jsxs(Vx,{sx:{justifyContent:"space-between",px:2,pb:2},children:[v.jsxs($t,{sx:{display:"flex",alignItems:"center"},children:[v.jsx(kx,{sx:{width:28,height:28,mr:1,bgcolor:"primary.main",color:"#fff",fontWeight:700},children:_.author.charAt(0)}),v.jsx(wt,{variant:"caption",sx:{fontWeight:600},children:_.author})]}),v.jsxs($t,{children:[v.jsx(jr,{size:"small",onClick:()=>g(_.id),children:v.jsx(Jx,{fontSize:"small"})}),v.jsx(jr,{size:"small",children:v.jsx(aS,{fontSize:"small"})}),v.jsx(jr,{size:"small",children:v.jsx(iS,{fontSize:"small"})})]})]})]})},_.id))}),y.length===0&&v.jsxs($t,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"200px",textAlign:"center"},children:[v.jsx(kO,{sx:{fontSize:48,color:"text.disabled",mb:2}}),v.jsx(wt,{variant:"h6",color:"text.secondary",children:"No articles found"}),v.jsx(wt,{variant:"body2",color:"text.secondary",children:"Try adjusting your search or filter criteria"})]})]})]})},_V={"Supply Chain":v.jsx(GE,{color:"primary",sx:{fontSize:32}}),Bitcoin:v.jsx(Zo,{color:"primary",sx:{fontSize:32}}),"AI & Blockchain":v.jsx(zy,{color:"primary",sx:{fontSize:32}})},Sm=9,EV=()=>{const e=Xr(),t=Zr(),[n,i]=A.useState([]),[o,l]=A.useState(!0),[u,f]=A.useState(1);A.useEffect(()=>{(async()=>{l(!0);try{const _=(await ho(Wn(Qn,"casestudy"))).docs.map(w=>({id:w.id,...w.data()}));i(_)}catch{i([])}l(!1)})()},[]);const p=Math.ceil(n.length/Sm),g=n.slice((u-1)*Sm,u*Sm);return v.jsxs($t,{sx:{bgcolor:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",minHeight:"100vh",py:{xs:5,md:8},px:{xs:1,md:0}},children:[v.jsxs($t,{sx:{maxWidth:1100,mx:"auto",mb:6,textAlign:"center",background:"rgba(255,255,255,0.85)",borderRadius:5,boxShadow:"0 4px 32px 0 rgba(44,62,80,0.10)",py:{xs:4,md:6},px:{xs:2,md:6}},children:[v.jsx(wt,{variant:"h3",sx:{fontWeight:800,mb:1,fontFamily:"Montserrat, Arial",color:t.palette.primary.main,letterSpacing:1,fontSize:{xs:"2rem",md:"2.7rem"}},children:"Case Studies"}),v.jsx(wt,{variant:"h6",sx:{color:"#374151",fontFamily:"Inter, Arial",mb:2,fontWeight:400,fontSize:{xs:"1rem",md:"1.25rem"}},children:"Real-world insights into blockchain, crypto, and emerging tech."}),v.jsx($t,{sx:{width:80,height:5,bgcolor:"primary.main",borderRadius:3,mx:"auto",my:2}}),v.jsx(yu,{sx:{maxWidth:300,mx:"auto",mb:2}})]}),o?v.jsx($t,{sx:{display:"flex",justifyContent:"center",mt:8},children:v.jsx(Vy,{color:"primary"})}):v.jsxs(v.Fragment,{children:[v.jsxs(xn,{container:!0,spacing:4,justifyContent:"center",sx:{maxWidth:1200,mx:"auto",mb:4,minHeight:200},children:[g.length===0&&v.jsx(xn,{item:!0,xs:12,children:v.jsx(wt,{variant:"h6",color:"text.secondary",align:"center",children:"No case studies found."})}),g.map((y,x)=>v.jsx(xn,{item:!0,xs:12,sm:6,md:4,sx:{display:"flex"},children:v.jsxs(Vm,{elevation:0,sx:{borderRadius:5,overflow:"hidden",boxShadow:"0 6px 32px 0 rgba(44,62,80,0.10)",transition:"transform 0.35s cubic-bezier(.21,1.02,.73,1), box-shadow 0.35s",background:"rgba(255,255,255,0.92)",backdropFilter:"blur(2px)",display:"flex",flexDirection:"column",height:"100%",position:"relative",minHeight:390,"&:hover":{transform:"translateY(-10px) scale(1.035)",boxShadow:"0 12px 40px 0 rgba(44,62,80,0.18)",background:"rgba(255,255,255,0.98)"}},children:[v.jsxs($t,{sx:{position:"relative"},children:[v.jsx(Lm,{component:"img",height:"170",image:y.image,alt:y.title,sx:{objectFit:"cover",filter:"brightness(0.97) saturate(1.08)",transition:"filter 0.3s",borderTopLeftRadius:20,borderTopRightRadius:20,minHeight:170}}),v.jsx(BE,{label:y.tag,color:"primary",size:"small",sx:{position:"absolute",top:16,left:16,fontWeight:600,letterSpacing:1,bgcolor:"primary.main",color:"#fff",boxShadow:"0 2px 8px 0 rgba(25,118,210,0.10)"}})]}),v.jsxs(zm,{sx:{flexGrow:1,display:"flex",flexDirection:"column",p:3},children:[v.jsxs($t,{sx:{display:"flex",alignItems:"center",mb:1},children:[_V[y.tag]||v.jsx(zy,{color:"primary",sx:{fontSize:32}}),v.jsx(wt,{variant:"subtitle2",sx:{ml:1,fontWeight:600,color:"primary.main",fontFamily:"Montserrat, Arial"},children:y.tag})]}),v.jsx(wt,{variant:"h6",sx:{fontWeight:700,mb:1,fontFamily:"Montserrat, Arial",color:"#22223b",minHeight:56},children:y.title}),v.jsx(wt,{variant:"body2",sx:{color:"#374151",mb:2,fontFamily:"Inter, Arial",minHeight:64},children:y.summary}),v.jsx(Qo,{variant:"contained",color:"primary",sx:{mt:"auto",borderRadius:2,fontWeight:600,fontFamily:"Montserrat, Arial",boxShadow:"0 2px 8px 0 rgba(25,118,210,0.10)",textTransform:"none",fontSize:"1rem"},fullWidth:!0,onClick:()=>e("/general",{state:{study:y}}),children:"Read Full Study"})]})]})},y.id||x))]}),p>1&&v.jsx($t,{sx:{display:"flex",justifyContent:"center",mt:4},children:v.jsx(eO,{count:p,page:u,onChange:(y,x)=>f(x),color:"primary",size:"large",sx:{"& .MuiPaginationItem-root":{borderRadius:2,fontWeight:600,fontFamily:"Montserrat, Arial"}}})})]})]})},TV=()=>{var i;const t=(i=uo().state)==null?void 0:i.study;if(!t)return v.jsx($t,{sx:{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center"},children:v.jsx(wt,{variant:"h6",color:"text.secondary",children:"No case study data provided."})});const n=o=>Array.isArray(o)?o.map((l,u)=>typeof l=="string"&&l.trim().startsWith("- ")?v.jsxs($t,{sx:{display:"flex",alignItems:"flex-start",mb:2,pl:2},children:[v.jsx($t,{component:"span",sx:{width:8,height:8,bgcolor:"primary.main",borderRadius:"50%",mt:"8px",mr:1.5,flexShrink:0}}),v.jsx(wt,{variant:"body1",sx:{fontSize:{xs:"1rem",sm:"1.15rem"},lineHeight:1.8,color:"#374151"},children:l.replace(/^- /,"")})]},u):typeof l=="string"&&l.trim().startsWith("##")?v.jsx(wt,{variant:"h5",sx:{mt:4,mb:2,fontWeight:700,color:"primary.main",fontFamily:"Montserrat, Arial"},children:l.replace(/^##\s*/,"")},u):typeof l=="string"&&l.trim().startsWith("#")?v.jsx(wt,{variant:"h4",sx:{mt:5,mb:2,fontWeight:800,color:"primary.main",fontFamily:"Montserrat, Arial"},children:l.replace(/^#\s*/,"")},u):typeof l=="object"&&l.type==="image"&&l.src?v.jsx($t,{sx:{width:"100%",my:3,display:"flex",justifyContent:"center"},children:v.jsx($t,{component:"img",src:l.src,alt:l.alt||"Case Study",sx:{maxWidth:"100%",maxHeight:320,borderRadius:3,boxShadow:2}})},u):typeof l=="string"&&(l.startsWith("http://")||l.startsWith("https://"))?v.jsx($t,{sx:{width:"100%",my:3,display:"flex",justifyContent:"center"},children:v.jsx($t,{component:"img",src:l,alt:"Case Study",sx:{maxWidth:"100%",maxHeight:320,borderRadius:3,boxShadow:2}})},u):v.jsx(wt,{variant:"body1",sx:{mb:3,fontSize:{xs:"1rem",sm:"1.15rem"},lineHeight:1.8,color:"#374151"},children:l},u)):v.jsx(wt,{variant:"body1",sx:{mb:3,fontSize:{xs:"1rem",sm:"1.15rem"},lineHeight:1.8,color:"#374151"},children:o});return v.jsx($t,{sx:{bgcolor:"linear-gradient(135deg, #f5f7fa 0%, #e0ecfc 100%)",minHeight:"100vh",py:{xs:4,md:8}},children:v.jsxs(us,{elevation:6,sx:{maxWidth:900,mx:"auto",p:{xs:2,sm:4,md:6},borderRadius:4,boxShadow:"0 8px 32px 0 rgba(44,62,80,0.10)",background:"linear-gradient(120deg, #e3f0ff 0%, #f8fafc 100%)"},children:[v.jsx(wt,{variant:"h4",sx:{fontWeight:800,mb:2,fontFamily:"Montserrat, Arial",color:"primary.main",letterSpacing:1,textAlign:"center"},children:t.title}),v.jsx(yu,{sx:{mb:3,maxWidth:120,mx:"auto"}}),v.jsxs(wt,{variant:"subtitle2",sx:{color:"text.secondary",mb:3,textAlign:"center",fontFamily:"Inter, Arial"},children:[t.author&&v.jsxs(v.Fragment,{children:["By ",t.author," • "]}),t.date]}),v.jsxs(xn,{container:!0,spacing:3,sx:{mb:3},children:[t.image&&v.jsx(xn,{item:!0,xs:12,md:t.image2?6:12,children:v.jsx($t,{component:"img",src:t.image,alt:t.title,sx:{width:"100%",height:{xs:200,md:260},objectFit:"cover",borderRadius:3,boxShadow:2}})}),t.image2&&v.jsx(xn,{item:!0,xs:12,md:6,children:v.jsx($t,{component:"img",src:t.image2,alt:t.title+" 2",sx:{width:"100%",height:{xs:200,md:260},objectFit:"cover",borderRadius:3,boxShadow:2}})})]}),n(t.content)]})})},wV=()=>{const e=Xr(),[t,n]=A.useState([]),[i,o]=A.useState(!0),[l,u]=A.useState(""),[f,p]=A.useState("");A.useEffect(()=>{(async()=>{const _=(await ho(Wn(Qn,"crypto"))).docs.map(w=>({id:w.id,...w.data()}));n(_),o(!1),console.log(_)})()},[]);const g=async y=>{if(y.preventDefault(),p(""),!l||!l.includes("@")){p("Please enter a valid email address.");return}try{await vs(Wn(Qn,"newsletter"),{email:l,created:new Date}),p("Thank you for subscribing!"),u("")}catch{p("Subscription failed. Please try again.")}};return v.jsxs("div",{className:"blog-container",children:[v.jsx("header",{className:"blog-header",children:v.jsx("div",{className:"blog-header-content",children:v.jsx("h1",{children:"Crypto Beginer's Guide"})})}),v.jsx("style",{jsx:!0,children:`
  .blog-header {
    text-align: center;
    margin-bottom: 48px;
    padding-bottom: 32px;
    background: linear-gradient(90deg, #f8fafc 0%, #e3f0ff 100%);
    border-radius: 16px;
    box-shadow: 0 4px 24px 0 rgba(44,62,80,0.04);
  }
  .blog-header-content {
    max-width: 700px;
    margin: 0 auto;
    padding: 48px 16px 32px 16px;
  }
  .blog-header h1 {
    font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #1a237e;
    margin-bottom: 12px;
    letter-spacing: 1px;
  }
  .accent-bar {
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, #1976d2 0%, #00c6fb 100%);
    border-radius: 3px;
    margin: 0 auto 24px auto;
  }
  .blog-header p {
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: #374151;
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2px;
  }
`}),v.jsxs("div",{className:"blog-content",children:[v.jsx("main",{className:"blog-posts",children:i?v.jsx("p",{children:"Loading..."}):t.map(y=>v.jsxs("article",{style:{cursor:"pointer"},onClick:()=>e("/general",{state:{study:y}}),className:"blog-card",children:[y.imageUrl&&v.jsxs("div",{className:"blog-card-image",children:[v.jsx("img",{src:y.imageUrl,alt:y.title}),y.category&&v.jsx("span",{className:"category-tag",children:y.category})]}),v.jsxs("div",{className:"blog-card-content",children:[v.jsx("h2",{children:y.title}),v.jsx("p",{className:"excerpt",children:y.excerpt}),v.jsxs("div",{className:"meta-info",children:[v.jsxs("span",{children:[v.jsx(hs,{})," ",y.author]}),v.jsxs("span",{children:[v.jsx(ds,{})," ",y.date]}),v.jsxs("span",{children:[v.jsx(fs,{})," ",y.readtime," read"]})]})]})]},y.id))}),v.jsx("aside",{className:"blog-sidebar",children:v.jsxs("div",{className:"sidebar-widget newsletter",children:[v.jsx("h3",{children:"Subscribe to Newsletter"}),v.jsx("p",{children:"Get the latest articles delivered to your inbox"}),v.jsxs("form",{onSubmit:g,children:[v.jsx("input",{type:"email",placeholder:"Your email address",value:l,onChange:y=>u(y.target.value),required:!0}),v.jsx("button",{type:"submit",children:"Subscribe"})]}),f&&v.jsx("div",{style:{marginTop:8,color:f.startsWith("Thank")?"green":"crimson",fontSize:"0.95rem"},children:f})]})})]}),v.jsx("style",{jsx:!0,children:`
        /* Base Styles */
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        
        .blog-header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .blog-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        .blog-header p {
          color: #7f8c8d;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }
        
        .search-bar {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .search-bar input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 1rem;
        }
        
        .search-bar button {
          padding: 0 15px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        
        /* Blog Content Layout */
        .blog-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
        }
        
        /* Blog Posts */
        .blog-posts {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .blog-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .blog-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .category-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #3498db;
          color: white;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .blog-card-content {
          padding: 20px;
        }
        
        .blog-card-content h2 {
          margin: 0 0 15px 0;
          font-size: 1.5rem;
          color: #2c3e50;
        }
        
        .excerpt {
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 15px;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .meta-info span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .post-stats {
          display: flex;
          gap: 20px;
          padding-top: 15px;
          border-top: 1px solid #eee;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .post-stats span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        /* Pagination */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }
        
        .pagination button {
          padding: 8px 15px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .pagination button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        /* Sidebar */
        .blog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .sidebar-widget {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sidebar-widget h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .categories-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .categories-list li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .categories-list li:hover {
          color: #3498db;
        }
        
        .popular-posts {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .popular-posts li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        
        .popular-posts li a {
          display: block;
          color: #2c3e50;
          text-decoration: none;
          margin-bottom: 5px;
        }
        
        .popular-posts li span {
          font-size: 0.8rem;
          color: #95a5a6;
        }
        
        .newsletter form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .newsletter input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .newsletter button {
          padding: 10px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-content {
            grid-template-columns: 1fr;
          }
          
          .blog-sidebar {
            order: -1;
          }
        }
      `})]})},CV=()=>{const[e,t]=A.useState(""),[n,i]=A.useState(""),[o,l]=A.useState([]),[u,f]=A.useState(!0),p=Xr();A.useEffect(()=>{(async()=>{const _=(await ho(Wn(Qn,"blockchain"))).docs.map(w=>({id:w.id,...w.data()}));l(_),f(!1)})()},[]);const g=async y=>{if(y.preventDefault(),i(""),!e||!e.includes("@")){i("Please enter a valid email address.");return}try{await vs(Wn(Qn,"newsletter"),{email:e,created:new Date}),i("Thank you for subscribing!"),t("")}catch{i("Subscription failed. Please try again.")}};return v.jsxs("div",{className:"blog-container",children:[v.jsx("header",{className:"blog-header",children:v.jsx("div",{className:"blog-header-content",children:v.jsx("h1",{children:"Blockchain Beginer's Guide"})})}),v.jsx("style",{jsx:!0,children:`
  .blog-header {
    text-align: center;
    margin-bottom: 48px;
    padding-bottom: 32px;
    background: linear-gradient(90deg, #f8fafc 0%, #e3f0ff 100%);
    border-radius: 16px;
    box-shadow: 0 4px 24px 0 rgba(44,62,80,0.04);
  }
  .blog-header-content {
    max-width: 700px;
    margin: 0 auto;
    padding: 48px 16px 32px 16px;
  }
  .blog-header h1 {
    font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #1a237e;
    margin-bottom: 12px;
    letter-spacing: 1px;
  }
  .accent-bar {
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, #1976d2 0%, #00c6fb 100%);
    border-radius: 3px;
    margin: 0 auto 24px auto;
  }
  .blog-header p {
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: #374151;
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2px;
  }
`}),v.jsxs("div",{className:"blog-content",children:[v.jsx("main",{className:"blog-posts",children:u?v.jsx("p",{children:"Loading..."}):o.map(y=>v.jsxs("article",{className:"blog-card",style:{cursor:"pointer"},onClick:()=>p("/general",{state:{study:y}}),children:[y.imageUrl&&v.jsxs("div",{className:"blog-card-image",children:[v.jsx("img",{src:y.imageUrl,alt:y.title}),y.category&&v.jsx("span",{className:"category-tag",children:y.category})]}),v.jsxs("div",{className:"blog-card-content",children:[v.jsx("h2",{children:y.title}),v.jsx("p",{className:"excerpt",children:y.excerpt}),v.jsxs("div",{className:"meta-info",children:[v.jsxs("span",{children:[v.jsx(hs,{})," ",y.author]}),v.jsxs("span",{children:[v.jsx(ds,{})," ",y.date]}),v.jsxs("span",{children:[v.jsx(fs,{})," ",y.readtime," read"]})]})]})]},y.id))}),v.jsx("aside",{className:"blog-sidebar",children:v.jsxs("div",{className:"sidebar-widget newsletter",children:[v.jsx("h3",{children:"Subscribe to Newsletter"}),v.jsx("p",{children:"Get the latest articles delivered to your inbox"}),v.jsxs("form",{onSubmit:g,children:[v.jsx("input",{type:"email",placeholder:"Your email address",value:e,onChange:y=>t(y.target.value),required:!0}),v.jsx("button",{type:"submit",children:"Subscribe"})]}),n&&v.jsx("div",{style:{marginTop:8,color:n.startsWith("Thank")?"green":"crimson",fontSize:"0.95rem"},children:n})]})})]}),v.jsx("style",{jsx:!0,children:`
        /* Base Styles */
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        
        .blog-header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .blog-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        .blog-header p {
          color: #7f8c8d;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }
        
        .search-bar {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .search-bar input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 1rem;
        }
        
        .search-bar button {
          padding: 0 15px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        
        /* Blog Content Layout */
        .blog-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
        }
        
        /* Blog Posts */
        .blog-posts {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .blog-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .blog-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .category-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #3498db;
          color: white;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .blog-card-content {
          padding: 20px;
        }
        
        .blog-card-content h2 {
          margin: 0 0 15px 0;
          font-size: 1.5rem;
          color: #2c3e50;
        }
        
        .excerpt {
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 15px;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .meta-info span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .post-stats {
          display: flex;
          gap: 20px;
          padding-top: 15px;
          border-top: 1px solid #eee;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .post-stats span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        /* Pagination */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }
        
        .pagination button {
          padding: 8px 15px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .pagination button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        /* Sidebar */
        .blog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .sidebar-widget {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sidebar-widget h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .categories-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .categories-list li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .categories-list li:hover {
          color: #3498db;
        }
        
        .popular-posts {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .popular-posts li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        
        .popular-posts li a {
          display: block;
          color: #2c3e50;
          text-decoration: none;
          margin-bottom: 5px;
        }
        
        .popular-posts li span {
          font-size: 0.8rem;
          color: #95a5a6;
        }
        
        .newsletter form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .newsletter input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .newsletter button {
          padding: 10px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-content {
            grid-template-columns: 1fr;
          }
          
          .blog-sidebar {
            order: -1;
          }
        }
      `})]})},AV=()=>{const e=Xr(),[t,n]=A.useState([]),[i,o]=A.useState(!0),[l,u]=A.useState(""),[f,p]=A.useState("");A.useEffect(()=>{(async()=>{const _=(await ho(Wn(Qn,"trading"))).docs.map(w=>({id:w.id,...w.data()}));n(_),o(!1),console.log(_)})()},[]);const g=async y=>{if(y.preventDefault(),p(""),!l||!l.includes("@")){p("Please enter a valid email address.");return}try{await vs(Wn(Qn,"newsletter"),{email:l,created:new Date}),p("Thank you for subscribing!"),u("")}catch{p("Subscription failed. Please try again.")}};return v.jsxs("div",{className:"blog-container",children:[v.jsx("header",{className:"blog-header",children:v.jsx("div",{className:"blog-header-content",children:v.jsx("h1",{children:"Trading Beginer's Guide"})})}),v.jsx("style",{jsx:!0,children:`
  .blog-header {
    text-align: center;
    margin-bottom: 48px;
    padding-bottom: 32px;
    background: linear-gradient(90deg, #f8fafc 0%, #e3f0ff 100%);
    border-radius: 16px;
    box-shadow: 0 4px 24px 0 rgba(44,62,80,0.04);
  }
  .blog-header-content {
    max-width: 700px;
    margin: 0 auto;
    padding: 48px 16px 32px 16px;
  }
  .blog-header h1 {
    font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #1a237e;
    margin-bottom: 12px;
    letter-spacing: 1px;
  }
  .accent-bar {
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, #1976d2 0%, #00c6fb 100%);
    border-radius: 3px;
    margin: 0 auto 24px auto;
  }
  .blog-header p {
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: #374151;
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2px;
  }
`}),v.jsxs("div",{className:"blog-content",children:[v.jsx("main",{className:"blog-posts",children:i?v.jsx("p",{children:"Loading..."}):t.map(y=>v.jsxs("article",{className:"blog-card",style:{cursor:"pointer"},onClick:()=>e("/general",{state:{study:y}}),children:[y.imageUrl&&v.jsxs("div",{className:"blog-card-image",children:[v.jsx("img",{src:y.imageUrl,alt:y.title}),y.category&&v.jsx("span",{className:"category-tag",children:y.category})]}),v.jsxs("div",{className:"blog-card-content",children:[v.jsx("h2",{children:y.title}),v.jsx("p",{className:"excerpt",children:y.excerpt}),v.jsxs("div",{className:"meta-info",children:[v.jsxs("span",{children:[v.jsx(hs,{})," ",y.author]}),v.jsxs("span",{children:[v.jsx(ds,{})," ",y.date]}),v.jsxs("span",{children:[v.jsx(fs,{})," ",y.readtime," read"]})]})]})]},y.id))}),v.jsx("aside",{className:"blog-sidebar",children:v.jsxs("div",{className:"sidebar-widget newsletter",children:[v.jsx("h3",{children:"Subscribe to Newsletter"}),v.jsx("p",{children:"Get the latest articles delivered to your inbox"}),v.jsxs("form",{onSubmit:g,children:[v.jsx("input",{type:"email",placeholder:"Your email address",value:l,onChange:y=>u(y.target.value),required:!0}),v.jsx("button",{type:"submit",children:"Subscribe"})]}),f&&v.jsx("div",{style:{marginTop:8,color:f.startsWith("Thank")?"green":"crimson",fontSize:"0.95rem"},children:f})]})})]}),v.jsx("style",{jsx:!0,children:`
        /* Base Styles */
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        
        .blog-header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .blog-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        .blog-header p {
          color: #7f8c8d;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }
        
        .search-bar {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .search-bar input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 1rem;
        }
        
        .search-bar button {
          padding: 0 15px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        
        /* Blog Content Layout */
        .blog-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
        }
        
        /* Blog Posts */
        .blog-posts {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .blog-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .blog-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .category-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #3498db;
          color: white;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .blog-card-content {
          padding: 20px;
        }
        
        .blog-card-content h2 {
          margin: 0 0 15px 0;
          font-size: 1.5rem;
          color: #2c3e50;
        }
        
        .excerpt {
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 15px;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .meta-info span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .post-stats {
          display: flex;
          gap: 20px;
          padding-top: 15px;
          border-top: 1px solid #eee;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .post-stats span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        /* Pagination */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }
        
        .pagination button {
          padding: 8px 15px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .pagination button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        /* Sidebar */
        .blog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .sidebar-widget {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sidebar-widget h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .categories-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .categories-list li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .categories-list li:hover {
          color: #3498db;
        }
        
        .popular-posts {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .popular-posts li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        
        .popular-posts li a {
          display: block;
          color: #2c3e50;
          text-decoration: none;
          margin-bottom: 5px;
        }
        
        .popular-posts li span {
          font-size: 0.8rem;
          color: #95a5a6;
        }
        
        .newsletter form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .newsletter input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .newsletter button {
          padding: 10px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-content {
            grid-template-columns: 1fr;
          }
          
          .blog-sidebar {
            order: -1;
          }
        }
      `})]})},RV=()=>{const e=Xr(),[t,n]=A.useState(""),[i,o]=A.useState(""),[l,u]=A.useState([]),[f,p]=A.useState(!0);A.useEffect(()=>{(async()=>{const _=(await ho(Wn(Qn,"daily"))).docs.map(w=>({id:w.id,...w.data()}));u(_),p(!1),console.log(_)})()},[]);const g=async y=>{if(y.preventDefault(),o(""),!t||!t.includes("@")){o("Please enter a valid email address.");return}try{await vs(Wn(Qn,"newsletter"),{email:t,created:new Date}),o("Thank you for subscribing!"),n("")}catch{o("Subscription failed. Please try again.")}};return v.jsxs("div",{className:"blog-container",children:[v.jsx("header",{className:"blog-header",children:v.jsx("div",{className:"blog-header-content",children:v.jsx("h1",{children:"Daily Analysis"})})}),v.jsx("style",{jsx:!0,children:`
  .blog-header {
    text-align: center;
    margin-bottom: 48px;
    padding-bottom: 32px;
    background: linear-gradient(90deg, #f8fafc 0%, #e3f0ff 100%);
    border-radius: 16px;
    box-shadow: 0 4px 24px 0 rgba(44,62,80,0.04);
  }
  .blog-header-content {
    max-width: 700px;
    margin: 0 auto;
    padding: 48px 16px 32px 16px;
  }
  .blog-header h1 {
    font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #1a237e;
    margin-bottom: 12px;
    letter-spacing: 1px;
  }
  .accent-bar {
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, #1976d2 0%, #00c6fb 100%);
    border-radius: 3px;
    margin: 0 auto 24px auto;
  }
  .blog-header p {
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: #374151;
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2px;
  }
`}),v.jsxs("div",{className:"blog-content",children:[v.jsx("main",{className:"blog-posts",children:f?v.jsx("p",{children:"Loading..."}):l.map(y=>v.jsxs("article",{style:{cursor:"pointer"},onClick:()=>e("/general",{state:{study:y}}),className:"blog-card",children:[y.imageUrl&&v.jsxs("div",{className:"blog-card-image",children:[v.jsx("img",{src:y.imageUrl,alt:y.title}),y.category&&v.jsx("span",{className:"category-tag",children:y.category})]}),v.jsxs("div",{className:"blog-card-content",children:[v.jsx("h2",{children:y.title}),v.jsx("p",{className:"excerpt",children:y.excerpt}),v.jsxs("div",{className:"meta-info",children:[v.jsxs("span",{children:[v.jsx(hs,{})," ",y.author]}),v.jsxs("span",{children:[v.jsx(ds,{})," ",y.date]}),v.jsxs("span",{children:[v.jsx(fs,{})," ",y.readtime," mins read"]})]})]})]},y.id))}),v.jsx("aside",{className:"blog-sidebar",children:v.jsxs("div",{className:"sidebar-widget newsletter",children:[v.jsx("h3",{children:"Subscribe to Newsletter"}),v.jsx("p",{children:"Get the latest articles delivered to your inbox"}),v.jsxs("form",{onSubmit:g,children:[v.jsx("input",{type:"email",placeholder:"Your email address",value:t,onChange:y=>n(y.target.value),required:!0}),v.jsx("button",{type:"submit",children:"Subscribe"})]}),i&&v.jsx("div",{style:{marginTop:8,color:i.startsWith("Thank")?"green":"crimson",fontSize:"0.95rem"},children:i})]})})]}),v.jsx("style",{jsx:!0,children:`
        /* Base Styles */
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        
        .blog-header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .blog-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        .blog-header p {
          color: #7f8c8d;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }
        
        .search-bar {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .search-bar input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 1rem;
        }
        
        .search-bar button {
          padding: 0 15px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        
        /* Blog Content Layout */
        .blog-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
        }
        
        /* Blog Posts */
        .blog-posts {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .blog-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .blog-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .category-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #3498db;
          color: white;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .blog-card-content {
          padding: 20px;
        }
        
        .blog-card-content h2 {
          margin: 0 0 15px 0;
          font-size: 1.5rem;
          color: #2c3e50;
        }
        
        .excerpt {
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 15px;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .meta-info span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .post-stats {
          display: flex;
          gap: 20px;
          padding-top: 15px;
          border-top: 1px solid #eee;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .post-stats span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        /* Pagination */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }
        
        .pagination button {
          padding: 8px 15px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .pagination button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        /* Sidebar */
        .blog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .sidebar-widget {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sidebar-widget h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .categories-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .categories-list li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .categories-list li:hover {
          color: #3498db;
        }
        
        .popular-posts {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .popular-posts li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        
        .popular-posts li a {
          display: block;
          color: #2c3e50;
          text-decoration: none;
          margin-bottom: 5px;
        }
        
        .popular-posts li span {
          font-size: 0.8rem;
          color: #95a5a6;
        }
        
        .newsletter form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .newsletter input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .newsletter button {
          padding: 10px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-content {
            grid-template-columns: 1fr;
          }
          
          .blog-sidebar {
            order: -1;
          }
        }
      `})]})},IV=()=>{const e=Xr(),[t,n]=A.useState([]),[i,o]=A.useState(!0),[l,u]=A.useState(""),[f,p]=A.useState("");A.useEffect(()=>{(async()=>{const _=(await ho(Wn(Qn,"weekly"))).docs.map(w=>({id:w.id,...w.data()}));n(_),o(!1),console.log(_)})()},[]);const g=async y=>{if(y.preventDefault(),p(""),!l||!l.includes("@")){p("Please enter a valid email address.");return}try{await vs(Wn(Qn,"newsletter"),{email:l,created:new Date}),p("Thank you for subscribing!"),u("")}catch{p("Subscription failed. Please try again.")}};return v.jsxs("div",{className:"blog-container",children:[v.jsx("header",{className:"blog-header",children:v.jsx("div",{className:"blog-header-content",children:v.jsx("h1",{children:"Weekly Analysis Guide"})})}),v.jsx("style",{jsx:!0,children:`
  .blog-header {
    text-align: center;
    margin-bottom: 48px;
    padding-bottom: 32px;
    background: linear-gradient(90deg, #f8fafc 0%, #e3f0ff 100%);
    border-radius: 16px;
    box-shadow: 0 4px 24px 0 rgba(44,62,80,0.04);
  }
  .blog-header-content {
    max-width: 700px;
    margin: 0 auto;
    padding: 48px 16px 32px 16px;
  }
  .blog-header h1 {
    font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #1a237e;
    margin-bottom: 12px;
    letter-spacing: 1px;
  }
  .accent-bar {
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, #1976d2 0%, #00c6fb 100%);
    border-radius: 3px;
    margin: 0 auto 24px auto;
  }
  .blog-header p {
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: #374151;
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2px;
  }
`}),v.jsxs("div",{className:"blog-content",children:[v.jsx("main",{className:"blog-posts",children:i?v.jsx("p",{children:"Loading..."}):t.map(y=>v.jsxs("article",{style:{cursor:"pointer"},onClick:()=>e("/general",{state:{study:y}}),className:"blog-card",children:[y.imageUrl&&v.jsxs("div",{className:"blog-card-image",children:[v.jsx("img",{src:y.imageUrl,alt:y.title}),y.category&&v.jsx("span",{className:"category-tag",children:y.category})]}),v.jsxs("div",{className:"blog-card-content",children:[v.jsx("h2",{children:y.title}),v.jsx("p",{className:"excerpt",children:y.excerpt}),v.jsxs("div",{className:"meta-info",children:[v.jsxs("span",{children:[v.jsx(hs,{})," ",y.author]}),v.jsxs("span",{children:[v.jsx(ds,{})," ",y.date]}),v.jsxs("span",{children:[v.jsx(fs,{})," ",y.readtime," mins read"]})]})]})]},y.id))}),v.jsx("aside",{className:"blog-sidebar",children:v.jsxs("div",{className:"sidebar-widget newsletter",children:[v.jsx("h3",{children:"Subscribe to Newsletter"}),v.jsx("p",{children:"Get the latest articles delivered to your inbox"}),v.jsxs("form",{onSubmit:g,children:[v.jsx("input",{type:"email",placeholder:"Your email address",value:l,onChange:y=>u(y.target.value),required:!0}),v.jsx("button",{type:"submit",children:"Subscribe"})]}),f&&v.jsx("div",{style:{marginTop:8,color:f.startsWith("Thank")?"green":"crimson",fontSize:"0.95rem"},children:f})]})})]}),v.jsx("style",{jsx:!0,children:`
        /* Base Styles */
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        
        .blog-header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .blog-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        .blog-header p {
          color: #7f8c8d;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }
        
        .search-bar {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .search-bar input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 1rem;
        }
        
        .search-bar button {
          padding: 0 15px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        
        /* Blog Content Layout */
        .blog-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
        }
        
        /* Blog Posts */
        .blog-posts {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .blog-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .blog-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .category-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #3498db;
          color: white;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .blog-card-content {
          padding: 20px;
        }
        
        .blog-card-content h2 {
          margin: 0 0 15px 0;
          font-size: 1.5rem;
          color: #2c3e50;
        }
        
        .excerpt {
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 15px;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .meta-info span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .post-stats {
          display: flex;
          gap: 20px;
          padding-top: 15px;
          border-top: 1px solid #eee;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .post-stats span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        /* Pagination */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }
        
        .pagination button {
          padding: 8px 15px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .pagination button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        /* Sidebar */
        .blog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .sidebar-widget {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sidebar-widget h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .categories-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .categories-list li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .categories-list li:hover {
          color: #3498db;
        }
        
        .popular-posts {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .popular-posts li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        
        .popular-posts li a {
          display: block;
          color: #2c3e50;
          text-decoration: none;
          margin-bottom: 5px;
        }
        
        .popular-posts li span {
          font-size: 0.8rem;
          color: #95a5a6;
        }
        
        .newsletter form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .newsletter input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .newsletter button {
          padding: 10px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-content {
            grid-template-columns: 1fr;
          }
          
          .blog-sidebar {
            order: -1;
          }
        }
      `})]})},MV=()=>{const e=Xr(),[t,n]=A.useState([]),[i,o]=A.useState(!0),[l,u]=A.useState(""),[f,p]=A.useState("");A.useEffect(()=>{(async()=>{const _=(await ho(Wn(Qn,"long"))).docs.map(w=>({id:w.id,...w.data()}));n(_),o(!1),console.log(_)})()},[]);const g=async y=>{if(y.preventDefault(),p(""),!l||!l.includes("@")){p("Please enter a valid email address.");return}try{await vs(Wn(Qn,"newsletter"),{email:l,created:new Date}),p("Thank you for subscribing!"),u("")}catch{p("Subscription failed. Please try again.")}};return v.jsxs("div",{className:"blog-container",children:[v.jsx("header",{className:"blog-header",children:v.jsx("div",{className:"blog-header-content",children:v.jsx("h1",{children:"Long Term Analysis"})})}),v.jsx("style",{jsx:!0,children:`
  .blog-header {
    text-align: center;
    margin-bottom: 48px;
    padding-bottom: 32px;
    background: linear-gradient(90deg, #f8fafc 0%, #e3f0ff 100%);
    border-radius: 16px;
    box-shadow: 0 4px 24px 0 rgba(44,62,80,0.04);
  }
  .blog-header-content {
    max-width: 700px;
    margin: 0 auto;
    padding: 48px 16px 32px 16px;
  }
  .blog-header h1 {
    font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #1a237e;
    margin-bottom: 12px;
    letter-spacing: 1px;
  }
  .accent-bar {
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, #1976d2 0%, #00c6fb 100%);
    border-radius: 3px;
    margin: 0 auto 24px auto;
  }
  .blog-header p {
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: #374151;
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2px;
  }
`}),v.jsxs("div",{className:"blog-content",children:[v.jsx("main",{className:"blog-posts",children:i?v.jsx("p",{children:"Loading..."}):t.map(y=>v.jsxs("article",{style:{cursor:"pointer"},onClick:()=>e("/general",{state:{study:y}}),className:"blog-card",children:[y.imageUrl&&v.jsxs("div",{className:"blog-card-image",children:[v.jsx("img",{src:y.imageUrl,alt:y.title}),y.category&&v.jsx("span",{className:"category-tag",children:y.category})]}),v.jsxs("div",{className:"blog-card-content",children:[v.jsx("h2",{children:y.title}),v.jsx("p",{className:"excerpt",children:y.excerpt}),v.jsxs("div",{className:"meta-info",children:[v.jsxs("span",{children:[v.jsx(hs,{})," ",y.author]}),v.jsxs("span",{children:[v.jsx(ds,{})," ",y.date]}),v.jsxs("span",{children:[v.jsx(fs,{})," ",y.readtime," mins read"]})]})]})]},y.id))}),v.jsx("aside",{className:"blog-sidebar",children:v.jsxs("div",{className:"sidebar-widget newsletter",children:[v.jsx("h3",{children:"Subscribe to Newsletter"}),v.jsx("p",{children:"Get the latest articles delivered to your inbox"}),v.jsxs("form",{onSubmit:g,children:[v.jsx("input",{type:"email",placeholder:"Your email address",value:l,onChange:y=>u(y.target.value),required:!0}),v.jsx("button",{type:"submit",children:"Subscribe"})]}),f&&v.jsx("div",{style:{marginTop:8,color:f.startsWith("Thank")?"green":"crimson",fontSize:"0.95rem"},children:f})]})})]}),v.jsx("style",{jsx:!0,children:`
        /* Base Styles */
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        
        .blog-header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .blog-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        .blog-header p {
          color: #7f8c8d;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }
        
        .search-bar {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .search-bar input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 1rem;
        }
        
        .search-bar button {
          padding: 0 15px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        
        /* Blog Content Layout */
        .blog-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
        }
        
        /* Blog Posts */
        .blog-posts {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .blog-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .blog-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .category-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #3498db;
          color: white;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .blog-card-content {
          padding: 20px;
        }
        
        .blog-card-content h2 {
          margin: 0 0 15px 0;
          font-size: 1.5rem;
          color: #2c3e50;
        }
        
        .excerpt {
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 15px;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .meta-info span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .post-stats {
          display: flex;
          gap: 20px;
          padding-top: 15px;
          border-top: 1px solid #eee;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .post-stats span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        /* Pagination */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }
        
        .pagination button {
          padding: 8px 15px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .pagination button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        /* Sidebar */
        .blog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .sidebar-widget {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sidebar-widget h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .categories-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .categories-list li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .categories-list li:hover {
          color: #3498db;
        }
        
        .popular-posts {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .popular-posts li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        
        .popular-posts li a {
          display: block;
          color: #2c3e50;
          text-decoration: none;
          margin-bottom: 5px;
        }
        
        .popular-posts li span {
          font-size: 0.8rem;
          color: #95a5a6;
        }
        
        .newsletter form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .newsletter input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .newsletter button {
          padding: 10px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-content {
            grid-template-columns: 1fr;
          }
          
          .blog-sidebar {
            order: -1;
          }
        }
      `})]})};function OV(){return v.jsxs("div",{className:"App",children:[v.jsxs(nR,{children:[v.jsx(T_,{}),v.jsxs(DA,{children:[v.jsx(pr,{path:"/",element:v.jsx(FO,{})}),v.jsx(pr,{path:"/blog",element:v.jsx(bV,{})}),v.jsx(pr,{path:"/navbar",element:v.jsx(T_,{})}),v.jsx(pr,{path:"/news",element:v.jsx(SV,{})}),v.jsx(pr,{path:"/casestudy",element:v.jsx(EV,{})}),v.jsx(pr,{path:"/general",element:v.jsx(TV,{})}),v.jsx(pr,{path:"crypto101",element:v.jsx(wV,{})}),v.jsx(pr,{path:"blockchain101",element:v.jsx(CV,{})}),v.jsx(pr,{path:"trading101",element:v.jsx(AV,{})}),v.jsx(pr,{path:"/daily",element:v.jsx(RV,{})}),v.jsx(pr,{path:"/weekly",element:v.jsx(IV,{})}),v.jsx(pr,{path:"/longterm",element:v.jsx(MV,{})})]})]}),v.jsx(xV,{})]})}$C.createRoot(document.getElementById("root")).render(v.jsx(A.StrictMode,{children:v.jsx(OV,{})}));
