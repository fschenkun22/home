(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var jf={exports:{}},Eo={};var vx;function bS(){if(vx)return Eo;vx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Eo.Fragment=e,Eo.jsx=i,Eo.jsxs=i,Eo}var Sx;function ES(){return Sx||(Sx=1,jf.exports=bS()),jf.exports}var at=ES(),Zf={exports:{}},se={};var yx;function TS(){if(yx)return se;yx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function g(O,$,yt){this.props=O,this.context=$,this.refs=y,this.updater=yt||T}g.prototype.isReactComponent={},g.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},g.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function U(){}U.prototype=g.prototype;function D(O,$,yt){this.props=O,this.context=$,this.refs=y,this.updater=yt||T}var z=D.prototype=new U;z.constructor=D,C(z,g.prototype),z.isPureReactComponent=!0;var H=Array.isArray;function L(){}var P={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function w(O,$,yt){var Tt=yt.ref;return{$$typeof:o,type:O,key:$,ref:Tt!==void 0?Tt:null,props:yt}}function R(O,$){return w(O.type,$,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function Q(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(yt){return $[yt]})}var lt=/\/+/g;function pt(O,$){return typeof O=="object"&&O!==null&&O.key!=null?Q(""+O.key):$.toString(36)}function ft(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(L,L):(O.status="pending",O.then(function($){O.status==="pending"&&(O.status="fulfilled",O.value=$)},function($){O.status==="pending"&&(O.status="rejected",O.reason=$)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,$,yt,Tt,zt){var st=typeof O;(st==="undefined"||st==="boolean")&&(O=null);var ut=!1;if(O===null)ut=!0;else switch(st){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(O.$$typeof){case o:case e:ut=!0;break;case _:return ut=O._init,B(ut(O._payload),$,yt,Tt,zt)}}if(ut)return zt=zt(O),ut=Tt===""?"."+pt(O,0):Tt,H(zt)?(yt="",ut!=null&&(yt=ut.replace(lt,"$&/")+"/"),B(zt,$,yt,"",function(Xt){return Xt})):zt!=null&&(V(zt)&&(zt=R(zt,yt+(zt.key==null||O&&O.key===zt.key?"":(""+zt.key).replace(lt,"$&/")+"/")+ut)),$.push(zt)),1;ut=0;var wt=Tt===""?".":Tt+":";if(H(O))for(var Ht=0;Ht<O.length;Ht++)Tt=O[Ht],st=wt+pt(Tt,Ht),ut+=B(Tt,$,yt,st,zt);else if(Ht=M(O),typeof Ht=="function")for(O=Ht.call(O),Ht=0;!(Tt=O.next()).done;)Tt=Tt.value,st=wt+pt(Tt,Ht++),ut+=B(Tt,$,yt,st,zt);else if(st==="object"){if(typeof O.then=="function")return B(ft(O),$,yt,Tt,zt);throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ut}function W(O,$,yt){if(O==null)return O;var Tt=[],zt=0;return B(O,Tt,"","",function(st){return $.call(yt,st,zt++)}),Tt}function X(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(yt){(O._status===0||O._status===-1)&&(O._status=1,O._result=yt)},function(yt){(O._status===0||O._status===-1)&&(O._status=2,O._result=yt)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var _t=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},vt={map:W,forEach:function(O,$,yt){W(O,function(){$.apply(this,arguments)},yt)},count:function(O){var $=0;return W(O,function(){$++}),$},toArray:function(O){return W(O,function($){return $})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return se.Activity=v,se.Children=vt,se.Component=g,se.Fragment=i,se.Profiler=l,se.PureComponent=D,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(O,$,yt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Tt=C({},O.props),zt=O.key;if($!=null)for(st in $.key!==void 0&&(zt=""+$.key),$)!j.call($,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&$.ref===void 0||(Tt[st]=$[st]);var st=arguments.length-2;if(st===1)Tt.children=yt;else if(1<st){for(var ut=Array(st),wt=0;wt<st;wt++)ut[wt]=arguments[wt+2];Tt.children=ut}return w(O.type,zt,Tt)},se.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},se.createElement=function(O,$,yt){var Tt,zt={},st=null;if($!=null)for(Tt in $.key!==void 0&&(st=""+$.key),$)j.call($,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(zt[Tt]=$[Tt]);var ut=arguments.length-2;if(ut===1)zt.children=yt;else if(1<ut){for(var wt=Array(ut),Ht=0;Ht<ut;Ht++)wt[Ht]=arguments[Ht+2];zt.children=wt}if(O&&O.defaultProps)for(Tt in ut=O.defaultProps,ut)zt[Tt]===void 0&&(zt[Tt]=ut[Tt]);return w(O,st,zt)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:h,render:O}},se.isValidElement=V,se.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:X}},se.memo=function(O,$){return{$$typeof:p,type:O,compare:$===void 0?null:$}},se.startTransition=function(O){var $=P.T,yt={};P.T=yt;try{var Tt=O(),zt=P.S;zt!==null&&zt(yt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(L,_t)}catch(st){_t(st)}finally{$!==null&&yt.types!==null&&($.types=yt.types),P.T=$}},se.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},se.use=function(O){return P.H.use(O)},se.useActionState=function(O,$,yt){return P.H.useActionState(O,$,yt)},se.useCallback=function(O,$){return P.H.useCallback(O,$)},se.useContext=function(O){return P.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,$){return P.H.useDeferredValue(O,$)},se.useEffect=function(O,$){return P.H.useEffect(O,$)},se.useEffectEvent=function(O){return P.H.useEffectEvent(O)},se.useId=function(){return P.H.useId()},se.useImperativeHandle=function(O,$,yt){return P.H.useImperativeHandle(O,$,yt)},se.useInsertionEffect=function(O,$){return P.H.useInsertionEffect(O,$)},se.useLayoutEffect=function(O,$){return P.H.useLayoutEffect(O,$)},se.useMemo=function(O,$){return P.H.useMemo(O,$)},se.useOptimistic=function(O,$){return P.H.useOptimistic(O,$)},se.useReducer=function(O,$,yt){return P.H.useReducer(O,$,yt)},se.useRef=function(O){return P.H.useRef(O)},se.useState=function(O){return P.H.useState(O)},se.useSyncExternalStore=function(O,$,yt){return P.H.useSyncExternalStore(O,$,yt)},se.useTransition=function(){return P.H.useTransition()},se.version="19.2.4",se}var Mx;function Eh(){return Mx||(Mx=1,Zf.exports=TS()),Zf.exports}var Un=Eh(),Kf={exports:{}},To={},Qf={exports:{}},Jf={};var bx;function AS(){return bx||(bx=1,(function(o){function e(B,W){var X=B.length;B.push(W);t:for(;0<X;){var _t=X-1>>>1,vt=B[_t];if(0<l(vt,W))B[_t]=W,B[X]=vt,X=_t;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var W=B[0],X=B.pop();if(X!==W){B[0]=X;t:for(var _t=0,vt=B.length,O=vt>>>1;_t<O;){var $=2*(_t+1)-1,yt=B[$],Tt=$+1,zt=B[Tt];if(0>l(yt,X))Tt<vt&&0>l(zt,yt)?(B[_t]=zt,B[Tt]=X,_t=Tt):(B[_t]=yt,B[$]=X,_t=$);else if(Tt<vt&&0>l(zt,X))B[_t]=zt,B[Tt]=X,_t=Tt;else break t}}return W}function l(B,W){var X=B.sortIndex-W.sortIndex;return X!==0?X:B.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,v=null,S=3,M=!1,T=!1,C=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function z(B){for(var W=i(p);W!==null;){if(W.callback===null)s(p);else if(W.startTime<=B)s(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=i(p)}}function H(B){if(C=!1,z(B),!T)if(i(m)!==null)T=!0,L||(L=!0,Q());else{var W=i(p);W!==null&&ft(H,W.startTime-B)}}var L=!1,P=-1,j=5,w=-1;function R(){return y?!0:!(o.unstable_now()-w<j)}function V(){if(y=!1,L){var B=o.unstable_now();w=B;var W=!0;try{t:{T=!1,C&&(C=!1,U(P),P=-1),M=!0;var X=S;try{e:{for(z(B),v=i(m);v!==null&&!(v.expirationTime>B&&R());){var _t=v.callback;if(typeof _t=="function"){v.callback=null,S=v.priorityLevel;var vt=_t(v.expirationTime<=B);if(B=o.unstable_now(),typeof vt=="function"){v.callback=vt,z(B),W=!0;break e}v===i(m)&&s(m),z(B)}else s(m);v=i(m)}if(v!==null)W=!0;else{var O=i(p);O!==null&&ft(H,O.startTime-B),W=!1}}break t}finally{v=null,S=X,M=!1}W=void 0}}finally{W?Q():L=!1}}}var Q;if(typeof D=="function")Q=function(){D(V)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,pt=lt.port2;lt.port1.onmessage=V,Q=function(){pt.postMessage(null)}}else Q=function(){g(V,0)};function ft(B,W){P=g(function(){B(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(B){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var X=S;S=W;try{return B()}finally{S=X}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=S;S=B;try{return W()}finally{S=X}},o.unstable_scheduleCallback=function(B,W,X){var _t=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?_t+X:_t):X=_t,B){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=X+vt,B={id:_++,callback:W,priorityLevel:B,startTime:X,expirationTime:vt,sortIndex:-1},X>_t?(B.sortIndex=X,e(p,B),i(m)===null&&B===i(p)&&(C?(U(P),P=-1):C=!0,ft(H,X-_t))):(B.sortIndex=vt,e(m,B),T||M||(T=!0,L||(L=!0,Q()))),B},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(B){var W=S;return function(){var X=S;S=W;try{return B.apply(this,arguments)}finally{S=X}}}})(Jf)),Jf}var Ex;function RS(){return Ex||(Ex=1,Qf.exports=AS()),Qf.exports}var $f={exports:{}},Cn={};var Tx;function CS(){if(Tx)return Cn;Tx=1;var o=Eh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Cn.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.2.4",Cn}var Ax;function wS(){if(Ax)return $f.exports;Ax=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),$f.exports=CS(),$f.exports}var Rx;function DS(){if(Rx)return To;Rx=1;var o=RS(),e=Eh(),i=wS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,r=f;break}if(E===r){x=!0,r=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,r=c;break}if(E===r){x=!0,r=f,a=c;break}E=E.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case L:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case D:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var ft=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},_t=[],vt=-1;function O(t){return{current:t}}function $(t){0>vt||(t.current=_t[vt],_t[vt]=null,vt--)}function yt(t,n){vt++,_t[vt]=t.current,t.current=n}var Tt=O(null),zt=O(null),st=O(null),ut=O(null);function wt(t,n){switch(yt(st,n),yt(zt,t),yt(Tt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Vm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Vm(n),t=km(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(Tt),yt(Tt,t)}function Ht(){$(Tt),$(zt),$(st)}function Xt(t){t.memoizedState!==null&&yt(ut,t);var n=Tt.current,a=km(n,t.type);n!==a&&(yt(zt,t),yt(Tt,a))}function le(t){zt.current===t&&($(Tt),$(zt)),ut.current===t&&($(ut),So._currentValue=X)}var en,de;function Re(t){if(en===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+de}var F=!1;function he(t,n){if(!t||F)return"";F=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ot){var it=ot}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(ot){it=ot}t.call(xt.prototype)}}else{try{throw Error()}catch(ot){it=ot}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ot){if(ot&&it&&typeof ot.stack=="string")return[ot.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var I=x.split(`
`),et=E.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===et.length)for(r=I.length-1,c=et.length-1;1<=r&&0<=c&&I[r]!==et[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==et[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==et[c]){var dt=`
`+I[r].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=r&&0<=c);break}}}finally{F=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Re(a):""}function me(t,n){switch(t.tag){case 26:case 27:case 5:return Re(t.type);case 16:return Re("Lazy");case 13:return t.child!==n&&n!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return he(t.type,!1);case 11:return he(t.type.render,!1);case 1:return he(t.type,!0);case 31:return Re("Activity");default:return""}}function ze(t){try{var n="",a=null;do n+=me(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Gt=Object.prototype.hasOwnProperty,Xe=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,ae=o.unstable_shouldYield,N=o.unstable_requestPaint,b=o.unstable_now,tt=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Qt=o.log,Wt=o.unstable_setDisableYieldValue,Mt=null,Et=null;function Yt(t){if(typeof Qt=="function"&&Wt(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,t)}catch{}}var Vt=Math.clz32?Math.clz32:G,Ot=Math.log,ne=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(Ot(t)/ne|0)|0}var Dt=256,Rt=262144,Ct=4194304;function bt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=bt(r):(x&=E,x!==0?c=bt(x):a||(a=E&~t,a!==0&&(c=bt(a))))):(E=r&~f,E!==0?c=bt(E):x!==0?c=bt(x):a||(a=r&~t,a!==0&&(c=bt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Bt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var t=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),t}function Ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Rn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jn(t,n,a,r,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,I=t.expirationTimes,et=t.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-Vt(a),xt=1<<dt;E[dt]=0,I[dt]=-1;var it=et[dt];if(it!==null)for(et[dt]=null,dt=0;dt<it.length;dt++){var ot=it[dt];ot!==null&&(ot.lane&=-536870913)}a&=~xt}r!==0&&Wo(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Wo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Vt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ur(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Vt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Lr(t,n){var a=n&-n;return a=(a&42)!==0?1:_i(a),(a&(t.suspendedLanes|n))!==0?0:a}function _i(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ja(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Nr(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:dx(t.type))}function Or(t,n){var a=W.p;try{return W.p=t,n()}finally{W.p=a}}var Zn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Zn,dn="__reactProps$"+Zn,Bi="__reactContainer$"+Zn,ws="__reactEvents$"+Zn,Gc="__reactListeners$"+Zn,Vc="__reactHandles$"+Zn,qo="__reactResources$"+Zn,$a="__reactMarker$"+Zn;function zr(t){delete t[rn],delete t[dn],delete t[ws],delete t[Gc],delete t[Vc]}function ga(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Bi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Km(t);t!==null;){if(a=t[rn])return a;t=Km(t)}return n}t=a,a=t.parentNode}return null}function A(t){if(t=t[rn]||t[Bi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function q(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function rt(t){var n=t[qo];return n||(n=t[qo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nt(t){t[$a]=!0}var Z=new Set,At={};function Ut(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for(At[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ee={};function Zt(t){return Gt.call(ee,t)?!0:Gt.call($t,t)?!1:It.test(t)?ee[t]=!0:($t[t]=!0,!1)}function ce(t,n,a){if(Zt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function we(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ye(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){if(!t._valueTracker){var n=Oe(t)?"checked":"value";t._valueTracker=Jt(t,n,""+t[n])}}function Me(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Oe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _a=/[\n"\\]/g;function Ye(t){return t.replace(_a,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ii(t,n,a,r,c,f,x,E){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ye(n)):t.value!==""+ye(n)&&(t.value=""+ye(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?_n(t,x,ye(n)):a!=null?_n(t,x,ye(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ye(E):t.removeAttribute("name")}function je(t,n,a,r,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(t);return}a=a!=null?""+ye(a):"",n=n!=null?""+ye(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),We(t)}function _n(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function hn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ye(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function vn(t,n,a){if(n!=null&&(n=""+ye(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ye(a):""}function Mn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ft(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ye(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),We(t)}function Ci(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Fi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fh(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Fi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Hh(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Fh(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Fh(t,f,n[f])}function kc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var v_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),S_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(t){return S_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hi(){}var Xc=null;function Wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ds=null,Us=null;function Gh(t){var n=A(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ii(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[dn]||null;if(!c)throw Error(s(90));Ii(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Me(r)}break t;case"textarea":vn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hn(t,!!a.multiple,n,!1)}}}var qc=!1;function Vh(t,n,a){if(qc)return t(n,a);qc=!0;try{var r=t(n);return r}finally{if(qc=!1,(Ds!==null||Us!==null)&&(Ol(),Ds&&(n=Ds,t=Us,Us=Ds=null,Gh(n),t)))for(n=0;n<t.length;n++)Gh(t[n])}}function Pr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[dn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(Gi)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{Yc=!1}var va=null,jc=null,jo=null;function kh(){if(jo)return jo;var t,n=jc,a=n.length,r,c="value"in va?va.value:va.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(r=1;r<=x&&n[a-r]===c[f-r];r++);return jo=c.slice(t,1<r?1-r:void 0)}function Zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function Xh(){return!1}function In(t){function n(a,r,c,f,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:Xh,this.isPropagationStopped=Xh,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=In(ts),Ir=v({},ts,{view:0,detail:0}),y_=In(Ir),Zc,Kc,Fr,Jo=v({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fr&&(Fr&&t.type==="mousemove"?(Zc=t.screenX-Fr.screenX,Kc=t.screenY-Fr.screenY):Kc=Zc=0,Fr=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Wh=In(Jo),M_=v({},Jo,{dataTransfer:0}),b_=In(M_),E_=v({},Ir,{relatedTarget:0}),Qc=In(E_),T_=v({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),A_=In(T_),R_=v({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),C_=In(R_),w_=v({},ts,{data:0}),qh=In(w_),D_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=L_[t])?!!n[t]:!1}function Jc(){return N_}var O_=v({},Ir,{key:function(t){if(t.key){var n=D_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),z_=In(O_),P_=v({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=In(P_),B_=v({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),I_=In(B_),F_=v({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),H_=In(F_),G_=v({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),V_=In(G_),k_=v({},ts,{newState:0,oldState:0}),X_=In(k_),W_=[9,13,27,32],$c=Gi&&"CompositionEvent"in window,Hr=null;Gi&&"documentMode"in document&&(Hr=document.documentMode);var q_=Gi&&"TextEvent"in window&&!Hr,jh=Gi&&(!$c||Hr&&8<Hr&&11>=Hr),Zh=" ",Kh=!1;function Qh(t,n){switch(t){case"keyup":return W_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function Y_(t,n){switch(t){case"compositionend":return Jh(n);case"keypress":return n.which!==32?null:(Kh=!0,Zh);case"textInput":return t=n.data,t===Zh&&Kh?null:t;default:return null}}function j_(t,n){if(Ls)return t==="compositionend"||!$c&&Qh(t,n)?(t=kh(),jo=jc=va=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jh&&n.locale!=="ko"?null:n.data;default:return null}}var Z_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Z_[t.type]:n==="textarea"}function tp(t,n,a,r){Ds?Us?Us.push(r):Us=[r]:Ds=r,n=Gl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Gr=null,Vr=null;function K_(t){Pm(t,0)}function $o(t){var n=q(t);if(Me(n))return t}function ep(t,n){if(t==="change")return n}var np=!1;if(Gi){var tu;if(Gi){var eu="oninput"in document;if(!eu){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),eu=typeof ip.oninput=="function"}tu=eu}else tu=!1;np=tu&&(!document.documentMode||9<document.documentMode)}function ap(){Gr&&(Gr.detachEvent("onpropertychange",sp),Vr=Gr=null)}function sp(t){if(t.propertyName==="value"&&$o(Vr)){var n=[];tp(n,Vr,t,Wc(t)),Vh(K_,n)}}function Q_(t,n,a){t==="focusin"?(ap(),Gr=n,Vr=a,Gr.attachEvent("onpropertychange",sp)):t==="focusout"&&ap()}function J_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $o(Vr)}function $_(t,n){if(t==="click")return $o(n)}function tv(t,n){if(t==="input"||t==="change")return $o(n)}function ev(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:ev;function kr(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Gt.call(n,c)||!Kn(t[c],n[c]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function op(t,n){var a=rp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rp(a)}}function lp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?lp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function cp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function nu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var nv=Gi&&"documentMode"in document&&11>=document.documentMode,Ns=null,iu=null,Xr=null,au=!1;function up(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||Ns==null||Ns!==gn(r)||(r=Ns,"selectionStart"in r&&nu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&kr(Xr,r)||(Xr=r,r=Gl(iu,"onSelect"),0<r.length&&(n=new Qo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ns)))}function es(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Os={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionrun:es("Transition","TransitionRun"),transitionstart:es("Transition","TransitionStart"),transitioncancel:es("Transition","TransitionCancel"),transitionend:es("Transition","TransitionEnd")},su={},fp={};Gi&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function ns(t){if(su[t])return su[t];if(!Os[t])return t;var n=Os[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in fp)return su[t]=n[a];return t}var dp=ns("animationend"),hp=ns("animationiteration"),pp=ns("animationstart"),iv=ns("transitionrun"),av=ns("transitionstart"),sv=ns("transitioncancel"),mp=ns("transitionend"),xp=new Map,ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ru.push("scrollEnd");function vi(t,n){xp.set(t,n),Ut(n,[t])}var tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],zs=0,ou=0;function el(){for(var t=zs,n=ou=zs=0;n<t;){var a=oi[n];oi[n++]=null;var r=oi[n];oi[n++]=null;var c=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}f!==0&&gp(a,c,f)}}function nl(t,n,a,r){oi[zs++]=t,oi[zs++]=n,oi[zs++]=a,oi[zs++]=r,ou|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function lu(t,n,a,r){return nl(t,n,a,r),il(t)}function is(t,n){return nl(t,null,null,n),il(t)}function gp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Vt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function il(t){if(50<ho)throw ho=0,_f=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ps={};function rv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,r){return new rv(t,n,a,r)}function cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vi(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function _p(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function al(t,n,a,r,c,f){var x=0;if(r=t,typeof t=="function")cu(t)&&(x=1);else if(typeof t=="string")x=fS(t,a,Tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Qn(31,a,n,c),t.elementType=w,t.lanes=f,t;case C:return as(a.children,c,f,n);case y:x=8,c|=24;break;case g:return t=Qn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case H:return t=Qn(13,a,n,c),t.elementType=H,t.lanes=f,t;case L:return t=Qn(19,a,n,c),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:x=10;break t;case U:x=9;break t;case z:x=11;break t;case P:x=14;break t;case j:x=16,r=null;break t}x=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Qn(x,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function as(t,n,a,r){return t=Qn(7,t,r,n),t.lanes=a,t}function uu(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function vp(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function fu(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Sp=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=Sp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ze(n)},Sp.set(t,n),n)}return{value:t,source:n,stack:ze(n)}}var Bs=[],Is=0,sl=null,Wr=0,ci=[],ui=0,Sa=null,wi=1,Di="";function ki(t,n){Bs[Is++]=Wr,Bs[Is++]=sl,sl=t,Wr=n}function yp(t,n,a){ci[ui++]=wi,ci[ui++]=Di,ci[ui++]=Sa,Sa=t;var r=wi;t=Di;var c=32-Vt(r)-1;r&=~(1<<c),a+=1;var f=32-Vt(n)+c;if(30<f){var x=c-c%5;f=(r&(1<<x)-1).toString(32),r>>=x,c-=x,wi=1<<32-Vt(n)+c|a<<c|r,Di=f+t}else wi=1<<f|a<<c|r,Di=t}function du(t){t.return!==null&&(ki(t,1),yp(t,1,0))}function hu(t){for(;t===sl;)sl=Bs[--Is],Bs[Is]=null,Wr=Bs[--Is],Bs[Is]=null;for(;t===Sa;)Sa=ci[--ui],ci[ui]=null,Di=ci[--ui],ci[ui]=null,wi=ci[--ui],ci[ui]=null}function Mp(t,n){ci[ui++]=wi,ci[ui++]=Di,ci[ui++]=Sa,wi=n.id,Di=n.overflow,Sa=t}var bn=null,Ze=null,be=!1,ya=null,fi=!1,pu=Error(s(519));function Ma(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qr(li(n,t)),pu}function bp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[rn]=t,n[dn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)ge(mo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),je(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Mn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Hm(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||Ma(t,!0)}function Ep(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:bn=bn.return}}function Fs(t){if(t!==bn)return!1;if(!be)return Ep(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Nf(t.type,t.memoizedProps)),a=!a),a&&Ze&&Ma(t),Ep(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=Zm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=Zm(t)}else n===27?(n=Ze,Pa(t.type)?(t=If,If=null,Ze=t):Ze=n):Ze=bn?hi(t.stateNode.nextSibling):null;return!0}function ss(){Ze=bn=null,be=!1}function mu(){var t=ya;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),ya=null),t}function qr(t){ya===null?ya=[t]:ya.push(t)}var xu=O(null),rs=null,Xi=null;function ba(t,n,a){yt(xu,n._currentValue),n._currentValue=a}function Wi(t){t._currentValue=xu.current,$(xu)}function gu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function _u(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var I=0;I<n.length;I++)if(E.context===n[I]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),gu(f.return,a,t),r||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),gu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Hs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var E=c.type;Kn(c.pendingProps.value,x.value)||(t!==null?t.push(E):t=[E])}}else if(c===ut.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}c=c.return}t!==null&&_u(n,t,a,r),n.flags|=262144}function rl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function os(t){rs=t,Xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return Tp(rs,t)}function ol(t,n){return rs===null&&os(t),Tp(t,n)}function Tp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(t===null)throw Error(s(308));Xi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Xi=Xi.next=n;return a}var ov=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},lv=o.unstable_scheduleCallback,cv=o.unstable_NormalPriority,on={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vu(){return{controller:new ov,data:new Map,refCount:0}}function Yr(t){t.refCount--,t.refCount===0&&lv(cv,function(){t.controller.abort()})}var jr=null,Su=0,Gs=0,Vs=null;function uv(t,n){if(jr===null){var a=jr=[];Su=0,Gs=Ef(),Vs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Su++,n.then(Ap,Ap),n}function Ap(){if(--Su===0&&jr!==null){Vs!==null&&(Vs.status="fulfilled");var t=jr;jr=null,Gs=0,Vs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Rp=B.S;B.S=function(t,n){um=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uv(t,n),Rp!==null&&Rp(t,n)};var ls=O(null);function yu(){var t=ls.current;return t!==null?t:qe.pooledCache}function ll(t,n){n===null?yt(ls,ls.current):yt(ls,n.pool)}function Cp(){var t=yu();return t===null?null:{parent:on._currentValue,pool:t}}var ks=Error(s(460)),Mu=Error(s(474)),cl=Error(s(542)),ul={then:function(){}};function wp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Dp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lp(t),t;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Lp(t),t}throw us=n,ks}}function cs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(us=a,ks):a}}var us=null;function Up(){if(us===null)throw Error(s(459));var t=us;return us=null,t}function Lp(t){if(t===ks||t===cl)throw Error(s(483))}var Xs=null,Zr=0;function fl(t){var n=Zr;return Zr+=1,Xs===null&&(Xs=[]),Dp(Xs,t,n)}function Kr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function dl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Np(t){function n(Y,k){if(t){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function a(Y,k){if(!t)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function r(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function c(Y,k){return Y=Vi(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function x(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,k,J,ht){return k===null||k.tag!==6?(k=uu(J,Y.mode,ht),k.return=Y,k):(k=c(k,J),k.return=Y,k)}function I(Y,k,J,ht){var Kt=J.type;return Kt===C?dt(Y,k,J.props.children,ht,J.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===j&&cs(Kt)===k.type)?(k=c(k,J.props),Kr(k,J),k.return=Y,k):(k=al(J.type,J.key,J.props,null,Y.mode,ht),Kr(k,J),k.return=Y,k)}function et(Y,k,J,ht){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=fu(J,Y.mode,ht),k.return=Y,k):(k=c(k,J.children||[]),k.return=Y,k)}function dt(Y,k,J,ht,Kt){return k===null||k.tag!==7?(k=as(J,Y.mode,ht,Kt),k.return=Y,k):(k=c(k,J),k.return=Y,k)}function xt(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=uu(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=al(k.type,k.key,k.props,null,Y.mode,J),Kr(J,k),J.return=Y,J;case T:return k=fu(k,Y.mode,J),k.return=Y,k;case j:return k=cs(k),xt(Y,k,J)}if(ft(k)||Q(k))return k=as(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return xt(Y,fl(k),J);if(k.$$typeof===D)return xt(Y,ol(Y,k),J);dl(Y,k)}return null}function it(Y,k,J,ht){var Kt=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Kt!==null?null:E(Y,k,""+J,ht);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Kt?I(Y,k,J,ht):null;case T:return J.key===Kt?et(Y,k,J,ht):null;case j:return J=cs(J),it(Y,k,J,ht)}if(ft(J)||Q(J))return Kt!==null?null:dt(Y,k,J,ht,null);if(typeof J.then=="function")return it(Y,k,fl(J),ht);if(J.$$typeof===D)return it(Y,k,ol(Y,J),ht);dl(Y,J)}return null}function ot(Y,k,J,ht,Kt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(J)||null,E(k,Y,""+ht,Kt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case M:return Y=Y.get(ht.key===null?J:ht.key)||null,I(k,Y,ht,Kt);case T:return Y=Y.get(ht.key===null?J:ht.key)||null,et(k,Y,ht,Kt);case j:return ht=cs(ht),ot(Y,k,J,ht,Kt)}if(ft(ht)||Q(ht))return Y=Y.get(J)||null,dt(k,Y,ht,Kt,null);if(typeof ht.then=="function")return ot(Y,k,J,fl(ht),Kt);if(ht.$$typeof===D)return ot(Y,k,J,ol(k,ht),Kt);dl(k,ht)}return null}function Ft(Y,k,J,ht){for(var Kt=null,De=null,kt=k,ue=k=0,ve=null;kt!==null&&ue<J.length;ue++){kt.index>ue?(ve=kt,kt=null):ve=kt.sibling;var Ue=it(Y,kt,J[ue],ht);if(Ue===null){kt===null&&(kt=ve);break}t&&kt&&Ue.alternate===null&&n(Y,kt),k=f(Ue,k,ue),De===null?Kt=Ue:De.sibling=Ue,De=Ue,kt=ve}if(ue===J.length)return a(Y,kt),be&&ki(Y,ue),Kt;if(kt===null){for(;ue<J.length;ue++)kt=xt(Y,J[ue],ht),kt!==null&&(k=f(kt,k,ue),De===null?Kt=kt:De.sibling=kt,De=kt);return be&&ki(Y,ue),Kt}for(kt=r(kt);ue<J.length;ue++)ve=ot(kt,Y,ue,J[ue],ht),ve!==null&&(t&&ve.alternate!==null&&kt.delete(ve.key===null?ue:ve.key),k=f(ve,k,ue),De===null?Kt=ve:De.sibling=ve,De=ve);return t&&kt.forEach(function(Ga){return n(Y,Ga)}),be&&ki(Y,ue),Kt}function te(Y,k,J,ht){if(J==null)throw Error(s(151));for(var Kt=null,De=null,kt=k,ue=k=0,ve=null,Ue=J.next();kt!==null&&!Ue.done;ue++,Ue=J.next()){kt.index>ue?(ve=kt,kt=null):ve=kt.sibling;var Ga=it(Y,kt,Ue.value,ht);if(Ga===null){kt===null&&(kt=ve);break}t&&kt&&Ga.alternate===null&&n(Y,kt),k=f(Ga,k,ue),De===null?Kt=Ga:De.sibling=Ga,De=Ga,kt=ve}if(Ue.done)return a(Y,kt),be&&ki(Y,ue),Kt;if(kt===null){for(;!Ue.done;ue++,Ue=J.next())Ue=xt(Y,Ue.value,ht),Ue!==null&&(k=f(Ue,k,ue),De===null?Kt=Ue:De.sibling=Ue,De=Ue);return be&&ki(Y,ue),Kt}for(kt=r(kt);!Ue.done;ue++,Ue=J.next())Ue=ot(kt,Y,ue,Ue.value,ht),Ue!==null&&(t&&Ue.alternate!==null&&kt.delete(Ue.key===null?ue:Ue.key),k=f(Ue,k,ue),De===null?Kt=Ue:De.sibling=Ue,De=Ue);return t&&kt.forEach(function(MS){return n(Y,MS)}),be&&ki(Y,ue),Kt}function Ge(Y,k,J,ht){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Kt=J.key;k!==null;){if(k.key===Kt){if(Kt=J.type,Kt===C){if(k.tag===7){a(Y,k.sibling),ht=c(k,J.props.children),ht.return=Y,Y=ht;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===j&&cs(Kt)===k.type){a(Y,k.sibling),ht=c(k,J.props),Kr(ht,J),ht.return=Y,Y=ht;break t}a(Y,k);break}else n(Y,k);k=k.sibling}J.type===C?(ht=as(J.props.children,Y.mode,ht,J.key),ht.return=Y,Y=ht):(ht=al(J.type,J.key,J.props,null,Y.mode,ht),Kr(ht,J),ht.return=Y,Y=ht)}return x(Y);case T:t:{for(Kt=J.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(Y,k.sibling),ht=c(k,J.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}ht=fu(J,Y.mode,ht),ht.return=Y,Y=ht}return x(Y);case j:return J=cs(J),Ge(Y,k,J,ht)}if(ft(J))return Ft(Y,k,J,ht);if(Q(J)){if(Kt=Q(J),typeof Kt!="function")throw Error(s(150));return J=Kt.call(J),te(Y,k,J,ht)}if(typeof J.then=="function")return Ge(Y,k,fl(J),ht);if(J.$$typeof===D)return Ge(Y,k,ol(Y,J),ht);dl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(Y,k.sibling),ht=c(k,J),ht.return=Y,Y=ht):(a(Y,k),ht=uu(J,Y.mode,ht),ht.return=Y,Y=ht),x(Y)):a(Y,k)}return function(Y,k,J,ht){try{Zr=0;var Kt=Ge(Y,k,J,ht);return Xs=null,Kt}catch(kt){if(kt===ks||kt===cl)throw kt;var De=Qn(29,kt,null,Y.mode);return De.lanes=ht,De.return=Y,De}}}var fs=Np(!0),Op=Np(!1),Ea=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ta(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Aa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=il(t),gp(t,null,a),n}return nl(t,r,n,a),il(t)}function Qr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ur(t,a)}}function Tu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Au=!1;function Jr(){if(Au){var t=Vs;if(t!==null)throw t}}function $r(t,n,a,r){Au=!1;var c=t.updateQueue;Ea=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var I=E,et=I.next;I.next=null,x===null?f=et:x.next=et,x=I;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,E=dt.lastBaseUpdate,E!==x&&(E===null?dt.firstBaseUpdate=et:E.next=et,dt.lastBaseUpdate=I))}if(f!==null){var xt=c.baseState;x=0,dt=et=I=null,E=f;do{var it=E.lane&-536870913,ot=it!==E.lane;if(ot?(_e&it)===it:(r&it)===it){it!==0&&it===Gs&&(Au=!0),dt!==null&&(dt=dt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ft=t,te=E;it=n;var Ge=a;switch(te.tag){case 1:if(Ft=te.payload,typeof Ft=="function"){xt=Ft.call(Ge,xt,it);break t}xt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=te.payload,it=typeof Ft=="function"?Ft.call(Ge,xt,it):Ft,it==null)break t;xt=v({},xt,it);break t;case 2:Ea=!0}}it=E.callback,it!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[it]:ot.push(it))}else ot={lane:it,tag:E.tag,payload:E.payload,callback:E.callback,next:null},dt===null?(et=dt=ot,I=xt):dt=dt.next=ot,x|=it;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ot=E,E=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);dt===null&&(I=xt),c.baseState=I,c.firstBaseUpdate=et,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),Ua|=x,t.lanes=x,t.memoizedState=xt}}function zp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Pp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)zp(a[t],n)}var Ws=O(null),hl=O(0);function Bp(t,n){t=ta,yt(hl,t),yt(Ws,n),ta=t|n.baseLanes}function Ru(){yt(hl,ta),yt(Ws,Ws.current)}function Cu(){ta=hl.current,$(Ws),$(hl)}var Jn=O(null),di=null;function Ra(t){var n=t.alternate;yt(nn,nn.current&1),yt(Jn,t),di===null&&(n===null||Ws.current!==null||n.memoizedState!==null)&&(di=t)}function wu(t){yt(nn,nn.current),yt(Jn,t),di===null&&(di=t)}function Ip(t){t.tag===22?(yt(nn,nn.current),yt(Jn,t),di===null&&(di=t)):Ca()}function Ca(){yt(nn,nn.current),yt(Jn,Jn.current)}function $n(t){$(Jn),di===t&&(di=null),$(nn)}var nn=O(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pf(a)||Bf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,oe=null,Fe=null,ln=null,ml=!1,qs=!1,ds=!1,xl=0,to=0,Ys=null,dv=0;function $e(){throw Error(s(321))}function Du(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Kn(t[a],n[a]))return!1;return!0}function Uu(t,n,a,r,c,f){return qi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?y0:qu,ds=!1,f=a(r,c),ds=!1,qs&&(f=Hp(n,a,r,c)),Fp(t),f}function Fp(t){B.H=io;var n=Fe!==null&&Fe.next!==null;if(qi=0,ln=Fe=oe=null,ml=!1,to=0,Ys=null,n)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&rl(t)&&(cn=!0))}function Hp(t,n,a,r){oe=t;var c=0;do{if(qs&&(Ys=null),to=0,qs=!1,25<=c)throw Error(s(301));if(c+=1,ln=Fe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=M0,f=n(a,r)}while(qs);return f}function hv(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(oe.flags|=1024),n}function Lu(){var t=xl!==0;return xl=0,t}function Nu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ou(t){if(ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ml=!1}qi=0,ln=Fe=oe=null,qs=!1,to=xl=0,Ys=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?oe.memoizedState=ln=t:ln=ln.next=t,ln}function an(){if(Fe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=ln===null?oe.memoizedState:ln.next;if(n!==null)ln=n,Fe=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},ln===null?oe.memoizedState=ln=t:ln=ln.next=t}return ln}function gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(t){var n=to;return to+=1,Ys===null&&(Ys=[]),t=Dp(Ys,t,n),n=oe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?y0:qu),t}function _l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===D)return En(t)}throw Error(s(438,String(t)))}function zu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=gl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=R;return n.index++,a}function Yi(t,n){return typeof n=="function"?n(t):n}function vl(t){var n=an();return Pu(n,Fe,t)}function Pu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=x=null,I=null,et=n,dt=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(_e&xt)===xt:(qi&xt)===xt){var it=et.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===Gs&&(dt=!0);else if((qi&it)===it){et=et.next,it===Gs&&(dt=!0);continue}else xt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(E=I=xt,x=f):I=I.next=xt,oe.lanes|=it,Ua|=it;xt=et.action,ds&&a(f,xt),f=et.hasEagerState?et.eagerState:a(f,xt)}else it={lane:xt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(E=I=it,x=f):I=I.next=it,oe.lanes|=xt,Ua|=xt;et=et.next}while(et!==null&&et!==n);if(I===null?x=f:I.next=E,!Kn(f,t.memoizedState)&&(cn=!0,dt&&(a=Vs,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Bu(t){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Kn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Gp(t,n,a){var r=oe,c=an(),f=be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Kn((Fe||c).memoizedState,a);if(x&&(c.memoizedState=a,cn=!0),c=c.queue,Hu(Xp.bind(null,r,c,t),[t]),c.getSnapshot!==n||x||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,js(9,{destroy:void 0},kp.bind(null,r,c,a,n),null),qe===null)throw Error(s(349));f||(qi&127)!==0||Vp(r,n,a)}return a}function Vp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=gl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function kp(t,n,a,r){n.value=a,n.getSnapshot=r,Wp(n)&&qp(t)}function Xp(t,n,a){return a(function(){Wp(n)&&qp(t)})}function Wp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Kn(t,a)}catch{return!0}}function qp(t){var n=is(t,2);n!==null&&kn(n,t,2)}function Iu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),ds){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},n}function Yp(t,n,a,r){return t.baseState=a,Pu(t,Fe,typeof r=="function"?r:Yi)}function pv(t,n,a,r,c){if(Ml(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};B.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function jp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=B.T,x={};B.T=x;try{var E=a(c,r),I=B.S;I!==null&&I(x,E),Zp(t,n,E)}catch(et){Fu(t,n,et)}finally{f!==null&&x.types!==null&&(f.types=x.types),B.T=f}}else try{f=a(c,r),Zp(t,n,f)}catch(et){Fu(t,n,et)}}function Zp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Kp(t,n,r)},function(r){return Fu(t,n,r)}):Kp(t,n,a)}function Kp(t,n,a){n.status="fulfilled",n.value=a,Qp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,jp(t,a)))}function Fu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Qp(n),n=n.next;while(n!==r)}t.action=null}function Qp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Jp(t,n){return n}function $p(t,n){if(be){var a=qe.formState;if(a!==null){t:{var r=oe;if(be){if(Ze){e:{for(var c=Ze,f=fi;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=hi(c.nextSibling),r=c.data==="F!";break t}}Ma(r)}r=!1}r&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:n},a.queue=r,a=_0.bind(null,oe,r),r.dispatch=a,r=Iu(!1),f=Wu.bind(null,oe,!1,r.queue),r=Nn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=pv.bind(null,oe,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function t0(t){var n=an();return e0(n,Fe,t)}function e0(t,n,a){if(n=Pu(t,n,Jp)[0],t=vl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=eo(n)}catch(x){throw x===ks?cl:x}else r=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,js(9,{destroy:void 0},mv.bind(null,c,a),null)),[r,f,t]}function mv(t,n){t.action=n}function n0(t){var n=an(),a=Fe;if(a!==null)return e0(n,a,t);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function js(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=gl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function i0(){return an().memoizedState}function Sl(t,n,a,r){var c=Nn();oe.flags|=t,c.memoizedState=js(1|n,{destroy:void 0},a,r===void 0?null:r)}function yl(t,n,a,r){var c=an();r=r===void 0?null:r;var f=c.memoizedState.inst;Fe!==null&&r!==null&&Du(r,Fe.memoizedState.deps)?c.memoizedState=js(n,f,a,r):(oe.flags|=t,c.memoizedState=js(1|n,f,a,r))}function a0(t,n){Sl(8390656,8,t,n)}function Hu(t,n){yl(2048,8,t,n)}function xv(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=gl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function s0(t){var n=an().memoizedState;return xv({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function r0(t,n){return yl(4,2,t,n)}function o0(t,n){return yl(4,4,t,n)}function l0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function c0(t,n,a){a=a!=null?a.concat([t]):null,yl(4,4,l0.bind(null,n,t),a)}function Gu(){}function u0(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Du(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function f0(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Du(n,r[1]))return r[0];if(r=t(),ds){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[r,n],r}function Vu(t,n,a){return a===void 0||(qi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=dm(),oe.lanes|=t,Ua|=t,a)}function d0(t,n,a,r){return Kn(a,n)?a:Ws.current!==null?(t=Vu(t,a,r),Kn(t,n)||(cn=!0),t):(qi&42)===0||(qi&1073741824)!==0&&(_e&261930)===0?(cn=!0,t.memoizedState=a):(t=dm(),oe.lanes|=t,Ua|=t,n)}function h0(t,n,a,r,c){var f=W.p;W.p=f!==0&&8>f?f:8;var x=B.T,E={};B.T=E,Wu(t,!1,n,a);try{var I=c(),et=B.S;if(et!==null&&et(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=fv(I,r);no(t,n,dt,ni(t))}else no(t,n,r,ni(t))}catch(xt){no(t,n,{then:function(){},status:"rejected",reason:xt},ni())}finally{W.p=f,x!==null&&E.types!==null&&(x.types=E.types),B.T=x}}function gv(){}function ku(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=p0(t).queue;h0(t,c,n,X,a===null?gv:function(){return m0(t),a(r)})}function p0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function m0(t){var n=p0(t);n.next===null&&(n=t.alternate.memoizedState),no(t,n.next.queue,{},ni())}function Xu(){return En(So)}function x0(){return an().memoizedState}function g0(){return an().memoizedState}function _v(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();t=Ta(a);var r=Aa(n,t,a);r!==null&&(kn(r,n,a),Qr(r,n,a)),n={cache:vu()},t.payload=n;return}n=n.return}}function vv(t,n,a){var r=ni();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(t)?v0(n,a):(a=lu(t,n,a,r),a!==null&&(kn(a,t,r),S0(a,n,r)))}function _0(t,n,a){var r=ni();no(t,n,a,r)}function no(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(t))v0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,Kn(E,x))return nl(t,n,c,0),qe===null&&el(),!1}catch{}if(a=lu(t,n,c,r),a!==null)return kn(a,t,r),S0(a,n,r),!0}return!1}function Wu(t,n,a,r){if(r={lane:2,revertLane:Ef(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ml(t)){if(n)throw Error(s(479))}else n=lu(t,a,r,2),n!==null&&kn(n,t,2)}function Ml(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function v0(t,n){qs=ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function S0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ur(t,a)}}var io={readContext:En,use:_l,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};io.useEffectEvent=$e;var y0={readContext:En,use:_l,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:a0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Sl(4194308,4,l0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Sl(4194308,4,t,n)},useInsertionEffect:function(t,n){Sl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var r=t();if(ds){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Nn();if(a!==void 0){var c=a(n);if(ds){Yt(!0);try{a(n)}finally{Yt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=vv.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Iu(t);var n=t.queue,a=_0.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Gu,useDeferredValue:function(t,n){var a=Nn();return Vu(a,t,n)},useTransition:function(){var t=Iu(!1);return t=h0.bind(null,oe,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,c=Nn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(_e&127)!==0||Vp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,a0(Xp.bind(null,r,f,t),[t]),r.flags|=2048,js(9,{destroy:void 0},kp.bind(null,r,f,a,n),null),a},useId:function(){var t=Nn(),n=qe.identifierPrefix;if(be){var a=Di,r=wi;a=(r&~(1<<32-Vt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Xu,useFormState:$p,useActionState:$p,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wu.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:zu,useCacheRefresh:function(){return Nn().memoizedState=_v.bind(null,oe)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},qu={readContext:En,use:_l,useCallback:u0,useContext:En,useEffect:Hu,useImperativeHandle:c0,useInsertionEffect:r0,useLayoutEffect:o0,useMemo:f0,useReducer:vl,useRef:i0,useState:function(){return vl(Yi)},useDebugValue:Gu,useDeferredValue:function(t,n){var a=an();return d0(a,Fe.memoizedState,t,n)},useTransition:function(){var t=vl(Yi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Gp,useId:x0,useHostTransitionStatus:Xu,useFormState:t0,useActionState:t0,useOptimistic:function(t,n){var a=an();return Yp(a,Fe,t,n)},useMemoCache:zu,useCacheRefresh:g0};qu.useEffectEvent=s0;var M0={readContext:En,use:_l,useCallback:u0,useContext:En,useEffect:Hu,useImperativeHandle:c0,useInsertionEffect:r0,useLayoutEffect:o0,useMemo:f0,useReducer:Bu,useRef:i0,useState:function(){return Bu(Yi)},useDebugValue:Gu,useDeferredValue:function(t,n){var a=an();return Fe===null?Vu(a,t,n):d0(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Bu(Yi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Gp,useId:x0,useHostTransitionStatus:Xu,useFormState:n0,useActionState:n0,useOptimistic:function(t,n){var a=an();return Fe!==null?Yp(a,Fe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:zu,useCacheRefresh:g0};M0.useEffectEvent=s0;function Yu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ju={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ni(),c=Ta(r);c.payload=n,a!=null&&(c.callback=a),n=Aa(t,c,r),n!==null&&(kn(n,t,r),Qr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ni(),c=Ta(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Aa(t,c,r),n!==null&&(kn(n,t,r),Qr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ni(),r=Ta(a);r.tag=2,n!=null&&(r.callback=n),n=Aa(t,r,a),n!==null&&(kn(n,t,a),Qr(n,t,a))}};function b0(t,n,a,r,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!kr(a,r)||!kr(c,f):!0}function E0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ju.enqueueReplaceState(n,n.state,null)}function hs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function T0(t){tl(t)}function A0(t){console.error(t)}function R0(t){tl(t)}function bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function C0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Zu(t,n,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(t,n)},a}function w0(t){return t=Ta(t),t.tag=3,t}function D0(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){C0(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){C0(n,a,r),typeof c!="function"&&(La===null?La=new Set([this]):La.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Sv(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Hs(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?zl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),yf(t,r,c)),!1;case 22:return a.flags|=65536,r===ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),yf(t,r,c)),!1}throw Error(s(435,a.tag))}return yf(t,r,c),zl(),!1}if(be)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==pu&&(t=Error(s(422),{cause:r}),qr(li(t,a)))):(r!==pu&&(n=Error(s(423),{cause:r}),qr(li(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=li(r,a),c=Zu(t.stateNode,r,c),Tu(t,c),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:r});if(f=li(f,a),fo===null?fo=[f]:fo.push(f),tn!==4&&(tn=2),n===null)return!0;r=li(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Zu(a.stateNode,r,t),Tu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(La===null||!La.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=w0(c),D0(c,t,a,r),Tu(a,c),!1}a=a.return}while(a!==null);return!1}var Ku=Error(s(461)),cn=!1;function Tn(t,n,a,r){n.child=t===null?Op(n,null,a,r):fs(n,t.child,a,r)}function U0(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var E in r)E!=="ref"&&(x[E]=r[E])}else x=r;return os(n),r=Uu(t,n,a,x,f,c),E=Lu(),t!==null&&!cn?(Nu(t,n,c),ji(t,n,c)):(be&&E&&du(n),n.flags|=1,Tn(t,n,r,c),n.child)}function L0(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,N0(t,n,f,r,c)):(t=al(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!sf(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:kr,a(x,r)&&t.ref===n.ref)return ji(t,n,c)}return n.flags|=1,t=Vi(f,r),t.ref=n.ref,t.return=n,n.child=t}function N0(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(kr(f,r)&&t.ref===n.ref)if(cn=!1,n.pendingProps=r=f,sf(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,ji(t,n,c)}return Qu(t,n,a,r,c)}function O0(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return z0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ll(n,f!==null?f.cachePool:null),f!==null?Bp(n,f):Ru(),Ip(n);else return r=n.lanes=536870912,z0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ll(n,f.cachePool),Bp(n,f),Ca(),n.memoizedState=null):(t!==null&&ll(n,null),Ru(),Ca());return Tn(t,n,c,a),n.child}function ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function z0(t,n,a,r,c){var f=yu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ll(n,null),Ru(),Ip(n),t!==null&&Hs(t,n,r,!0),n.childLanes=c,null}function El(t,n){return n=Al({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function P0(t,n,a){return fs(n,t.child,null,a),t=El(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function yv(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(be){if(r.mode==="hidden")return t=El(n,r),n.lanes=536870912,ao(null,t);if(wu(n),(t=Ze)?(t=jm(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Sa!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=vp(t),a.return=n,n.child=a,bn=n,Ze=null)):t=null,t===null)throw Ma(n);return n.lanes=536870912,null}return El(n,r)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(wu(n),c)if(n.flags&256)n.flags&=-257,n=P0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Hs(t,n,a,!1),c=(a&t.childLanes)!==0,cn||c){if(r=qe,r!==null&&(x=Lr(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,is(t,x),kn(r,t,x),Ku;zl(),n=P0(t,n,a)}else t=f.treeContext,Ze=hi(x.nextSibling),bn=n,be=!0,ya=null,fi=!1,t!==null&&Mp(n,t),n=El(n,r),n.flags|=4096;return n}return t=Vi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Tl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qu(t,n,a,r,c){return os(n),a=Uu(t,n,a,r,void 0,c),r=Lu(),t!==null&&!cn?(Nu(t,n,c),ji(t,n,c)):(be&&r&&du(n),n.flags|=1,Tn(t,n,a,c),n.child)}function B0(t,n,a,r,c,f){return os(n),n.updateQueue=null,a=Hp(n,r,a,c),Fp(t),r=Lu(),t!==null&&!cn?(Nu(t,n,f),ji(t,n,f)):(be&&r&&du(n),n.flags|=1,Tn(t,n,a,f),n.child)}function I0(t,n,a,r,c){if(os(n),n.stateNode===null){var f=Ps,x=a.contextType;typeof x=="object"&&x!==null&&(f=En(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},bu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?En(x):Ps,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Yu(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&ju.enqueueReplaceState(f,f.state,null),$r(n,r,f,c),Jr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,I=hs(a,E);f.props=I;var et=f.context,dt=a.contextType;x=Ps,typeof dt=="object"&&dt!==null&&(x=En(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||et!==x)&&E0(n,f,r,x),Ea=!1;var it=n.memoizedState;f.state=it,$r(n,r,f,c),Jr(),et=n.memoizedState,E||it!==et||Ea?(typeof xt=="function"&&(Yu(n,a,xt,r),et=n.memoizedState),(I=Ea||b0(n,a,I,r,it,et,x))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=et),f.props=r,f.state=et,f.context=x,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Eu(t,n),x=n.memoizedProps,dt=hs(a,x),f.props=dt,xt=n.pendingProps,it=f.context,et=a.contextType,I=Ps,typeof et=="object"&&et!==null&&(I=En(et)),E=a.getDerivedStateFromProps,(et=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==xt||it!==I)&&E0(n,f,r,I),Ea=!1,it=n.memoizedState,f.state=it,$r(n,r,f,c),Jr();var ot=n.memoizedState;x!==xt||it!==ot||Ea||t!==null&&t.dependencies!==null&&rl(t.dependencies)?(typeof E=="function"&&(Yu(n,a,E,r),ot=n.memoizedState),(dt=Ea||b0(n,a,dt,r,it,ot,I)||t!==null&&t.dependencies!==null&&rl(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=I,r=dt):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Tl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=fs(n,t.child,null,c),n.child=fs(n,null,a,c)):Tn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ji(t,n,c),t}function F0(t,n,a,r){return ss(),n.flags|=256,Tn(t,n,a,r),n.child}var Ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $u(t){return{baseLanes:t,cachePool:Cp()}}function tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function H0(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?Ra(n):Ca(),(t=Ze)?(t=jm(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Sa!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=vp(t),a.return=n,n.child=a,bn=n,Ze=null)):t=null,t===null)throw Ma(n);return Bf(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Ca(),c=n.mode,E=Al({mode:"hidden",children:E},c),r=as(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=$u(a),r.childLanes=tf(t,x,a),n.memoizedState=Ju,ao(null,r)):(Ra(n),ef(n,E))}var I=t.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(f)n.flags&256?(Ra(n),n.flags&=-257,n=nf(t,n,a)):n.memoizedState!==null?(Ca(),n.child=t.child,n.flags|=128,n=null):(Ca(),E=r.fallback,c=n.mode,r=Al({mode:"visible",children:r.children},c),E=as(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,fs(n,t.child,null,a),r=n.child,r.memoizedState=$u(a),r.childLanes=tf(t,x,a),n.memoizedState=Ju,n=ao(null,r));else if(Ra(n),Bf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var et=x.dgst;x=et,r=Error(s(419)),r.stack="",r.digest=x,qr({value:r,source:null,stack:null}),n=nf(t,n,a)}else if(cn||Hs(t,n,a,!1),x=(a&t.childLanes)!==0,cn||x){if(x=qe,x!==null&&(r=Lr(x,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,is(t,r),kn(x,t,r),Ku;Pf(E)||zl(),n=nf(t,n,a)}else Pf(E)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Ze=hi(E.nextSibling),bn=n,be=!0,ya=null,fi=!1,t!==null&&Mp(n,t),n=ef(n,r.children),n.flags|=4096);return n}return c?(Ca(),E=r.fallback,c=n.mode,I=t.child,et=I.sibling,r=Vi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,et!==null?E=Vi(et,E):(E=as(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,ao(null,r),r=n.child,E=t.child.memoizedState,E===null?E=$u(a):(c=E.cachePool,c!==null?(I=on._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Cp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=tf(t,x,a),n.memoizedState=Ju,ao(t.child,r)):(Ra(n),a=t.child,t=a.sibling,a=Vi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function ef(t,n){return n=Al({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Al(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function nf(t,n,a){return fs(n,t.child,null,a),t=ef(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function G0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),gu(t.return,n,a)}function af(t,n,a,r,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function V0(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var x=nn.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,yt(nn,x),Tn(t,n,r,a),r=be?Wr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&G0(t,a,n);else if(t.tag===19)G0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),af(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}af(n,!0,a,null,f,r);break;case"together":af(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ua|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Hs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Vi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Vi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&rl(t)))}function Mv(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),ba(n,on,t.memoizedState.cache),ss();break;case 27:case 5:Xt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,wu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ra(n),n.flags|=128,null):(a&n.child.childLanes)!==0?H0(t,n,a):(Ra(n),t=ji(t,n,a),t!==null?t.sibling:null);Ra(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Hs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return V0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(nn,nn.current),r)break;return null;case 22:return n.lanes=0,O0(t,n,a,n.pendingProps);case 24:ba(n,on,t.memoizedState.cache)}return ji(t,n,a)}function k0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!sf(t,a)&&(n.flags&128)===0)return cn=!1,Mv(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,be&&(n.flags&1048576)!==0&&yp(n,Wr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=cs(n.elementType),n.type=t,typeof t=="function")cu(t)?(r=hs(t,r),n.tag=1,n=I0(null,n,t,r,a)):(n.tag=0,n=Qu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===z){n.tag=11,n=U0(null,n,t,r,a);break t}else if(c===P){n.tag=14,n=L0(null,n,t,r,a);break t}}throw n=pt(t)||t,Error(s(306,n,""))}}return n;case 0:return Qu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=hs(r,n.pendingProps),I0(t,n,r,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Eu(t,n),$r(n,r,null,a);var x=n.memoizedState;if(r=x.cache,ba(n,on,r),r!==f.cache&&_u(n,[on],a,!0),Jr(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=F0(t,n,r,a);break t}else if(r!==c){c=li(Error(s(424)),n),qr(c),n=F0(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=hi(t.firstChild),bn=n,be=!0,ya=null,fi=!0,a=Op(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ss(),r===c){n=ji(t,n,a);break t}Tn(t,n,r,a)}n=n.child}return n;case 26:return Tl(t,n),t===null?(a=tx(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,r=Vl(st.current).createElement(a),r[rn]=n,r[dn]=t,An(r,a,t),nt(r),n.stateNode=r):n.memoizedState=tx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&be&&(r=n.stateNode=Qm(n.type,n.pendingProps,st.current),bn=n,fi=!0,c=Ze,Pa(n.type)?(If=c,Ze=hi(r.firstChild)):Ze=c),Tn(t,n,n.pendingProps.children,a),Tl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=r=Ze)&&(r=Jv(r,n.type,n.pendingProps,fi),r!==null?(n.stateNode=r,bn=n,Ze=hi(r.firstChild),fi=!1,c=!0):c=!1),c||Ma(n)),Xt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,r=f.children,Nf(c,f)?r=null:x!==null&&Nf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Uu(t,n,hv,null,null,a),So._currentValue=c),Tl(t,n),Tn(t,n,r,a),n.child;case 6:return t===null&&be&&((t=a=Ze)&&(a=$v(a,n.pendingProps,fi),a!==null?(n.stateNode=a,bn=n,Ze=null,t=!0):t=!1),t||Ma(n)),null;case 13:return H0(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=fs(n,null,r,a):Tn(t,n,r,a),n.child;case 11:return U0(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ba(n,n.type,r.value),Tn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,os(n),c=En(c),r=r(c),n.flags|=1,Tn(t,n,r,a),n.child;case 14:return L0(t,n,n.type,n.pendingProps,a);case 15:return N0(t,n,n.type,n.pendingProps,a);case 19:return V0(t,n,a);case 31:return yv(t,n,a);case 22:return O0(t,n,a,n.pendingProps);case 24:return os(n),r=En(on),t===null?(c=yu(),c===null&&(c=qe,f=vu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},bu(n),ba(n,on,c)):((t.lanes&a)!==0&&(Eu(t,n),$r(n,null,null,a),Jr()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ba(n,on,r)):(r=f.cache,ba(n,on,r),r!==c.cache&&_u(n,[on],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Zi(t){t.flags|=4}function rf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(xm())t.flags|=8192;else throw us=ul,Mu}else t.flags&=-16777217}function X0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!sx(n))if(xm())t.flags|=8192;else throw us=ul,Mu}function Rl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ie():536870912,t.lanes|=n,Js|=n)}function so(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function bv(t,n,a){var r=n.pendingProps;switch(hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Wi(on),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fs(n)?Zi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mu())),Ke(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Zi(n),f!==null?(Ke(n),X0(n,f)):(Ke(n),rf(n,c,null,r,a))):f?f!==t.memoizedState?(Zi(n),Ke(n),X0(n,f)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Zi(n),Ke(n),rf(n,c,t,r,a)),null;case 27:if(le(n),a=st.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}t=Tt.current,Fs(n)?bp(n):(t=Qm(c,r,a),n.stateNode=t,Zi(n))}return Ke(n),null;case 5:if(le(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=Tt.current,Fs(n))bp(n);else{var x=Vl(st.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}f[rn]=n,f[dn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(An(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Zi(n)}}return Ke(n),rf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Zi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=st.current,Fs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=bn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Hm(t.nodeValue,a)),t||Ma(n,!0)}else t=Vl(t).createTextNode(r),t[rn]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Fs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[rn]=n}else ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Fs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[rn]=n}else ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),Ke(n),null);case 4:return Ht(),t===null&&Cf(n.stateNode.containerInfo),Ke(n),null;case 10:return Wi(n.type),Ke(n),null;case 19:if($(nn),r=n.memoizedState,r===null)return Ke(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)so(r,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,so(r,!1),t=f.updateQueue,n.updateQueue=t,Rl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)_p(a,t),a=a.sibling;return yt(nn,nn.current&1|2),be&&ki(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&b()>Ll&&(n.flags|=128,c=!0,so(r,!1),n.lanes=4194304)}else{if(!c)if(t=pl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Rl(n,t),so(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!be)return Ke(n),null}else 2*b()-r.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,c=!0,so(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=b(),t.sibling=null,a=nn.current,yt(nn,c?a&1|2:a&1),be&&ki(n,r.treeForkCount),t):(Ke(n),null);case 22:case 23:return $n(n),Cu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&$(ls),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(on),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ev(t,n){switch(hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Wi(on),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $(nn),null;case 4:return Ht(),null;case 10:return Wi(n.type),null;case 22:case 23:return $n(n),Cu(),t!==null&&$(ls),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Wi(on),null;case 25:return null;default:return null}}function W0(t,n){switch(hu(n),n.tag){case 3:Wi(on),Ht();break;case 26:case 27:case 5:le(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:$(nn);break;case 10:Wi(n.type);break;case 22:case 23:$n(n),Cu(),t!==null&&$(ls);break;case 24:Wi(on)}}function ro(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==c)}}catch(E){Be(n,n.return,E)}}function wa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var x=r.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var I=a,et=E;try{et()}catch(dt){Be(c,I,dt)}}}r=r.next}while(r!==f)}}catch(dt){Be(n,n.return,dt)}}function q0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Pp(n,a)}catch(r){Be(t,t.return,r)}}}function Y0(t,n,a){a.props=hs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Be(t,n,r)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Be(t,n,c)}}function Ui(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function j0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function of(t,n,a){try{var r=t.stateNode;qv(r,t.type,a,n),r[dn]=n}catch(c){Be(t,t.return,c)}}function Z0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pa(t.type)||t.tag===4}function lf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Z0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(r!==4&&(r===27&&Pa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(cf(t,n,a),t=t.sibling;t!==null;)cf(t,n,a),t=t.sibling}function Cl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Pa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Cl(t,n,a),t=t.sibling;t!==null;)Cl(t,n,a),t=t.sibling}function K0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,r,a),n[rn]=t,n[dn]=a}catch(f){Be(t,t.return,f)}}var Ki=!1,un=!1,uf=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Tv(t,n){if(t=t.containerInfo,Uf=Zl,t=cp(t),nu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,I=-1,et=0,dt=0,xt=t,it=null;e:for(;;){for(var ot;xt!==a||c!==0&&xt.nodeType!==3||(E=x+c),xt!==f||r!==0&&xt.nodeType!==3||(I=x+r),xt.nodeType===3&&(x+=xt.nodeValue.length),(ot=xt.firstChild)!==null;)it=xt,xt=ot;for(;;){if(xt===t)break e;if(it===a&&++et===c&&(E=x),it===f&&++dt===r&&(I=x),(ot=xt.nextSibling)!==null)break;xt=it,it=xt.parentNode}xt=ot}a=E===-1||I===-1?null:{start:E,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:t,selectionRange:a},Zl=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ft=hs(a.type,c);t=r.getSnapshotBeforeUpdate(Ft,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){Be(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)zf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function J0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),r&4&&ro(5,a);break;case 1:if(Ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Be(a,a.return,x)}else{var c=hs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Be(a,a.return,x)}}r&64&&q0(a),r&512&&oo(a,a.return);break;case 3:if(Ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(t,n)}catch(x){Be(a,a.return,x)}}break;case 27:n===null&&r&4&&K0(a);case 26:case 5:Ji(t,a),n===null&&r&4&&j0(a),r&512&&oo(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),r&4&&em(t,a);break;case 13:Ji(t,a),r&4&&nm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ov.bind(null,a),tS(t,a))));break;case 22:if(r=a.memoizedState!==null||Ki,!r){n=n!==null&&n.memoizedState!==null||un,c=Ki;var f=un;Ki=r,(un=n)&&!f?$i(t,a,(a.subtreeFlags&8772)!==0):Ji(t,a),Ki=c,un=f}break;case 30:break;default:Ji(t,a)}}function $0(t){var n=t.alternate;n!==null&&(t.alternate=null,$0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,Fn=!1;function Qi(t,n,a){for(a=a.child;a!==null;)tm(t,n,a),a=a.sibling}function tm(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:un||Ui(a,n),Qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ui(a,n);var r=Qe,c=Fn;Pa(a.type)&&(Qe=a.stateNode,Fn=!1),Qi(t,n,a),go(a.stateNode),Qe=r,Fn=c;break;case 5:un||Ui(a,n);case 6:if(r=Qe,c=Fn,Qe=null,Qi(t,n,a),Qe=r,Fn=c,Qe!==null)if(Fn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Qe!==null&&(Fn?(t=Qe,qm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),rr(t)):qm(Qe,a.stateNode));break;case 4:r=Qe,c=Fn,Qe=a.stateNode.containerInfo,Fn=!0,Qi(t,n,a),Qe=r,Fn=c;break;case 0:case 11:case 14:case 15:wa(2,a,n),un||wa(4,a,n),Qi(t,n,a);break;case 1:un||(Ui(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Y0(a,n,r)),Qi(t,n,a);break;case 21:Qi(t,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,Qi(t,n,a),un=r;break;default:Qi(t,n,a)}}function em(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{rr(t)}catch(a){Be(n,n.return,a)}}}function nm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{rr(t)}catch(a){Be(n,n.return,a)}}function Av(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Q0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Q0),n;default:throw Error(s(435,t.tag))}}function wl(t,n){var a=Av(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=zv.bind(null,t,r);r.then(c,c)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(Pa(E.type)){Qe=E.stateNode,Fn=!1;break t}break;case 5:Qe=E.stateNode,Fn=!1;break t;case 3:case 4:Qe=E.stateNode.containerInfo,Fn=!0;break t}E=E.return}if(Qe===null)throw Error(s(160));tm(f,x,c),Qe=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)im(n,t),n=n.sibling}var Si=null;function im(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),r&4&&(wa(3,t,t.return),ro(3,t),wa(5,t,t.return));break;case 1:Hn(n,t),Gn(t),r&512&&(un||a===null||Ui(a,a.return)),r&64&&Ki&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Si;if(Hn(n,t),Gn(t),r&512&&(un||a===null||Ui(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[$a]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,r,a),f[rn]=t,nt(f),r=f;break t;case"link":var x=ix("link","href",c).get(r+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(r),An(f,r,a),c.head.appendChild(f);break;case"meta":if(x=ix("meta","content",c).get(r+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(r),An(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=t,nt(f),r=f}t.stateNode=r}else ax(c,t.type,t.stateNode);else t.stateNode=nx(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ax(c,t.type,t.stateNode):nx(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&of(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),r&512&&(un||a===null||Ui(a,a.return)),a!==null&&r&4&&of(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),r&512&&(un||a===null||Ui(a,a.return)),t.flags&32){c=t.stateNode;try{Ci(c,"")}catch(Ft){Be(t,t.return,Ft)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,of(t,c,a!==null?a.memoizedProps:c)),r&1024&&(uf=!0);break;case 6:if(Hn(n,t),Gn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ft){Be(t,t.return,Ft)}}break;case 3:if(Wl=null,c=Si,Si=kl(n.containerInfo),Hn(n,t),Si=c,Gn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{rr(n.containerInfo)}catch(Ft){Be(t,t.return,Ft)}uf&&(uf=!1,am(t));break;case 4:r=Si,Si=kl(t.stateNode.containerInfo),Hn(n,t),Gn(t),Si=r;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wl(t,r)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ul=b()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wl(t,r)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,et=Ki,dt=un;if(Ki=et||c,un=dt||I,Hn(n,t),un=dt,Ki=et,Gn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Ki||un||ps(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=I.stateNode;var xt=I.memoizedProps.style,it=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;E.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Ft){Be(I,I.return,Ft)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Ft){Be(I,I.return,Ft)}}}else if(n.tag===18){if(a===null){I=n;try{var ot=I.stateNode;c?Ym(ot,!0):Ym(I.stateNode,!1)}catch(Ft){Be(I,I.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,wl(t,a))));break;case 19:Hn(n,t),Gn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,wl(t,r)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Z0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=lf(t);Cl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ci(x,""),a.flags&=-33);var E=lf(t);Cl(t,E,x);break;case 3:case 4:var I=a.stateNode.containerInfo,et=lf(t);cf(t,et,I);break;default:throw Error(s(161))}}catch(dt){Be(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function am(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;am(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)J0(t,n.alternate,n),n=n.sibling}function ps(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),ps(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Y0(n,n.return,a),ps(n);break;case 27:go(n.stateNode);case 26:case 5:Ui(n,n.return),ps(n);break;case 22:n.memoizedState===null&&ps(n);break;case 30:ps(n);break;default:ps(n)}t=t.sibling}}function $i(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:$i(c,f,a),ro(4,f);break;case 1:if($i(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(et){Be(r,r.return,et)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)zp(I[c],E)}catch(et){Be(r,r.return,et)}}a&&x&64&&q0(f),oo(f,f.return);break;case 27:K0(f);case 26:case 5:$i(c,f,a),a&&r===null&&x&4&&j0(f),oo(f,f.return);break;case 12:$i(c,f,a);break;case 31:$i(c,f,a),a&&x&4&&em(c,f);break;case 13:$i(c,f,a),a&&x&4&&nm(c,f);break;case 22:f.memoizedState===null&&$i(c,f,a),oo(f,f.return);break;case 30:break;default:$i(c,f,a)}n=n.sibling}}function ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Yr(a))}function df(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Yr(t))}function yi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sm(t,n,a,r),n=n.sibling}function sm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,r),c&2048&&ro(9,n);break;case 1:yi(t,n,a,r);break;case 3:yi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Yr(t)));break;case 12:if(c&2048){yi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Be(n,n.return,I)}}else yi(t,n,a,r);break;case 31:yi(t,n,a,r);break;case 13:yi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,r):lo(t,n):f._visibility&2?yi(t,n,a,r):(f._visibility|=2,Zs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ff(x,n);break;case 24:yi(t,n,a,r),c&2048&&df(n.alternate,n);break;default:yi(t,n,a,r)}}function Zs(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,E=a,I=r,et=x.flags;switch(x.tag){case 0:case 11:case 15:Zs(f,x,E,I,c),ro(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?Zs(f,x,E,I,c):lo(f,x):(dt._visibility|=2,Zs(f,x,E,I,c)),c&&et&2048&&ff(x.alternate,x);break;case 24:Zs(f,x,E,I,c),c&&et&2048&&df(x.alternate,x);break;default:Zs(f,x,E,I,c)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:lo(a,r),c&2048&&ff(r.alternate,r);break;case 24:lo(a,r),c&2048&&df(r.alternate,r);break;default:lo(a,r)}n=n.sibling}}var co=8192;function Ks(t,n,a){if(t.subtreeFlags&co)for(t=t.child;t!==null;)rm(t,n,a),t=t.sibling}function rm(t,n,a){switch(t.tag){case 26:Ks(t,n,a),t.flags&co&&t.memoizedState!==null&&dS(a,Si,t.memoizedState,t.memoizedProps);break;case 5:Ks(t,n,a);break;case 3:case 4:var r=Si;Si=kl(t.stateNode.containerInfo),Ks(t,n,a),Si=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=co,co=16777216,Ks(t,n,a),co=r):Ks(t,n,a));break;default:Ks(t,n,a)}}function om(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,cm(r,t)}om(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)lm(t),t=t.sibling}function lm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&wa(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Dl(t)):uo(t);break;default:uo(t)}}function Dl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,cm(r,t)}om(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}t=t.sibling}}function cm(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Yr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Sn=r;else t:for(a=t;Sn!==null;){r=Sn;var c=r.sibling,f=r.return;if($0(r),r===a){Sn=null;break t}if(c!==null){c.return=f,Sn=c;break t}Sn=f}}}var Rv={getCacheForType:function(t){var n=En(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return En(on).controller.signal}},Cv=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,xe=null,_e=0,Pe=0,ti=null,Da=!1,Qs=!1,hf=!1,ta=0,tn=0,Ua=0,ms=0,pf=0,ei=0,Js=0,fo=null,Vn=null,mf=!1,Ul=0,um=0,Ll=1/0,Nl=null,La=null,pn=0,Na=null,$s=null,ea=0,xf=0,gf=null,fm=null,ho=0,_f=null;function ni(){return(Ne&2)!==0&&_e!==0?_e&-_e:B.T!==null?Ef():Nr()}function dm(){if(ei===0)if((_e&536870912)===0||be){var t=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ei=t}else ei=536870912;return t=Jn.current,t!==null&&(t.flags|=32),ei}function kn(t,n,a){(t===qe&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(tr(t,0),Oa(t,_e,ei,!1)),Rn(t,a),((Ne&2)===0||t!==qe)&&(t===qe&&((Ne&2)===0&&(ms|=a),tn===4&&Oa(t,_e,ei,!1)),Li(t))}function hm(t,n,a){if((Ne&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Bt(t,n),c=r?Uv(t,n):Sf(t,n,!0),f=r;do{if(c===0){Qs&&!r&&Oa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!wv(a)){c=Sf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=t;c=fo;var I=E.current.memoizedState.isDehydrated;if(I&&(tr(E,x).flags|=256),x=Sf(E,x,!1),x!==2){if(hf&&!I){E.errorRecoveryDisabledLanes|=f,ms|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){tr(t,0),Oa(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Oa(r,n,ei,!Da);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ul+300-b(),10<c)){if(Oa(r,n,ei,!Da),gt(r,0,!0)!==0)break t;ea=n,r.timeoutHandle=Xm(pm.bind(null,r,a,Vn,Nl,mf,n,ei,ms,Js,Da,f,"Throttled",-0,0),c);break t}pm(r,a,Vn,Nl,mf,n,ei,ms,Js,Da,f,null,-0,0)}}break}while(!0);Li(t)}function pm(t,n,a,r,c,f,x,E,I,et,dt,xt,it,ot){if(t.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},rm(n,f,xt);var Ft=(f&62914560)===f?Ul-b():(f&4194048)===f?um-b():0;if(Ft=hS(xt,Ft),Ft!==null){ea=f,t.cancelPendingCommit=Ft(Mm.bind(null,t,n,f,a,r,c,x,E,I,dt,xt,null,it,ot)),Oa(t,f,x,!et);return}}Mm(t,n,f,a,r,c,x,E,I)}function wv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(t,n,a,r){n&=~pf,n&=~ms,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Vt(c),x=1<<f;r[f]=-1,c&=~x}a!==0&&Wo(t,a,n)}function Ol(){return(Ne&6)===0?(po(0),!1):!0}function vf(){if(xe!==null){if(Pe===0)var t=xe.return;else t=xe,Xi=rs=null,Ou(t),Xs=null,Zr=0,t=xe;for(;t!==null;)W0(t.alternate,t),t=t.return;xe=null}}function tr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Zv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ea=0,vf(),qe=t,xe=a=Vi(t.current,null),_e=n,Pe=0,ti=null,Da=!1,Qs=Bt(t,n),hf=!1,Js=ei=pf=ms=Ua=tn=0,Vn=fo=null,mf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Vt(r),f=1<<c;n|=t[c],r&=~f}return ta=n,el(),a}function mm(t,n){oe=null,B.H=io,n===ks||n===cl?(n=Up(),Pe=3):n===Mu?(n=Up(),Pe=4):Pe=n===Ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,xe===null&&(tn=1,bl(t,li(n,t.current)))}function xm(){var t=Jn.current;return t===null?!0:(_e&4194048)===_e?di===null:(_e&62914560)===_e||(_e&536870912)!==0?t===di:!1}function gm(){var t=B.H;return B.H=io,t===null?io:t}function _m(){var t=B.A;return B.A=Rv,t}function zl(){tn=4,Da||(_e&4194048)!==_e&&Jn.current!==null||(Qs=!0),(Ua&134217727)===0&&(ms&134217727)===0||qe===null||Oa(qe,_e,ei,!1)}function Sf(t,n,a){var r=Ne;Ne|=2;var c=gm(),f=_m();(qe!==t||_e!==n)&&(Nl=null,tr(t,n)),n=!1;var x=tn;t:do try{if(Pe!==0&&xe!==null){var E=xe,I=ti;switch(Pe){case 8:vf(),x=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var et=Pe;if(Pe=0,ti=null,er(t,E,I,et),a&&Qs){x=0;break t}break;default:et=Pe,Pe=0,ti=null,er(t,E,I,et)}}Dv(),x=tn;break}catch(dt){mm(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Xi=rs=null,Ne=r,B.H=c,B.A=f,xe===null&&(qe=null,_e=0,el()),x}function Dv(){for(;xe!==null;)vm(xe)}function Uv(t,n){var a=Ne;Ne|=2;var r=gm(),c=_m();qe!==t||_e!==n?(Nl=null,Ll=b()+500,tr(t,n)):Qs=Bt(t,n);t:do try{if(Pe!==0&&xe!==null){n=xe;var f=ti;e:switch(Pe){case 1:Pe=0,ti=null,er(t,n,f,1);break;case 2:case 9:if(wp(f)){Pe=0,ti=null,Sm(n);break}n=function(){Pe!==2&&Pe!==9||qe!==t||(Pe=7),Li(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:wp(f)?(Pe=0,ti=null,Sm(n)):(Pe=0,ti=null,er(t,n,f,7));break;case 5:var x=null;switch(xe.tag){case 26:x=xe.memoizedState;case 5:case 27:var E=xe;if(x?sx(x):E.stateNode.complete){Pe=0,ti=null;var I=E.sibling;if(I!==null)xe=I;else{var et=E.return;et!==null?(xe=et,Pl(et)):xe=null}break e}}Pe=0,ti=null,er(t,n,f,5);break;case 6:Pe=0,ti=null,er(t,n,f,6);break;case 8:vf(),tn=6;break t;default:throw Error(s(462))}}Lv();break}catch(dt){mm(t,dt)}while(!0);return Xi=rs=null,B.H=r,B.A=c,Ne=a,xe!==null?0:(qe=null,_e=0,el(),tn)}function Lv(){for(;xe!==null&&!ae();)vm(xe)}function vm(t){var n=k0(t.alternate,t,ta);t.memoizedProps=t.pendingProps,n===null?Pl(t):xe=n}function Sm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=B0(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=B0(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Ou(n);default:W0(a,n),n=xe=_p(n,ta),n=k0(a,n,ta)}t.memoizedProps=t.pendingProps,n===null?Pl(t):xe=n}function er(t,n,a,r){Xi=rs=null,Ou(n),Xs=null,Zr=0;var c=n.return;try{if(Sv(t,c,n,a,_e)){tn=1,bl(t,li(a,t.current)),xe=null;return}}catch(f){if(c!==null)throw xe=c,f;tn=1,bl(t,li(a,t.current)),xe=null;return}n.flags&32768?(be||r===1?t=!0:Qs||(_e&536870912)!==0?t=!1:(Da=t=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),ym(n,t)):Pl(n)}function Pl(t){var n=t;do{if((n.flags&32768)!==0){ym(n,Da);return}t=n.return;var a=bv(n.alternate,n,ta);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);tn===0&&(tn=5)}function ym(t,n){do{var a=Ev(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);tn=6,xe=null}function Mm(t,n,a,r,c,f,x,E,I){t.cancelPendingCommit=null;do Bl();while(pn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=ou,jn(t,a,f,x,E,I),t===qe&&(xe=qe=null,_e=0),$s=n,Na=t,ea=a,xf=f,gf=c,fm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Pv(ct,function(){return Rm(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,c=W.p,W.p=2,x=Ne,Ne|=4;try{Tv(t,n,a)}finally{Ne=x,W.p=c,B.T=r}}pn=1,bm(),Em(),Tm()}}function bm(){if(pn===1){pn=0;var t=Na,n=$s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var r=W.p;W.p=2;var c=Ne;Ne|=4;try{im(n,t);var f=Lf,x=cp(t.containerInfo),E=f.focusedElem,I=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&lp(E.ownerDocument.documentElement,E)){if(I!==null&&nu(E)){var et=I.start,dt=I.end;if(dt===void 0&&(dt=et),"selectionStart"in E)E.selectionStart=et,E.selectionEnd=Math.min(dt,E.value.length);else{var xt=E.ownerDocument||document,it=xt&&xt.defaultView||window;if(it.getSelection){var ot=it.getSelection(),Ft=E.textContent.length,te=Math.min(I.start,Ft),Ge=I.end===void 0?te:Math.min(I.end,Ft);!ot.extend&&te>Ge&&(x=Ge,Ge=te,te=x);var Y=op(E,te),k=op(E,Ge);if(Y&&k&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var J=xt.createRange();J.setStart(Y.node,Y.offset),ot.removeAllRanges(),te>Ge?(ot.addRange(J),ot.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ot.addRange(J))}}}}for(xt=[],ot=E;ot=ot.parentNode;)ot.nodeType===1&&xt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<xt.length;E++){var ht=xt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Zl=!!Uf,Lf=Uf=null}finally{Ne=c,W.p=r,B.T=a}}t.current=n,pn=2}}function Em(){if(pn===2){pn=0;var t=Na,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var r=W.p;W.p=2;var c=Ne;Ne|=4;try{J0(t,n.alternate,n)}finally{Ne=c,W.p=r,B.T=a}}pn=3}}function Tm(){if(pn===4||pn===3){pn=0,N();var t=Na,n=$s,a=ea,r=fm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,$s=Na=null,Am(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(La=null),Ja(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,c=W.p,W.p=2,B.T=null;try{for(var f=t.onRecoverableError,x=0;x<r.length;x++){var E=r[x];f(E.value,{componentStack:E.stack})}}finally{B.T=n,W.p=c}}(ea&3)!==0&&Bl(),Li(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===_f?ho++:(ho=0,_f=t):ho=0,po(0)}}function Am(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Yr(n)))}function Bl(){return bm(),Em(),Tm(),Rm()}function Rm(){if(pn!==5)return!1;var t=Na,n=xf;xf=0;var a=Ja(ea),r=B.T,c=W.p;try{W.p=32>a?32:a,B.T=null,a=gf,gf=null;var f=Na,x=ea;if(pn=0,$s=Na=null,ea=0,(Ne&6)!==0)throw Error(s(331));var E=Ne;if(Ne|=4,lm(f.current),sm(f,f.current,x,a),Ne=E,po(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{W.p=c,B.T=r,Am(t,n)}}function Cm(t,n,a){n=li(a,n),n=Zu(t.stateNode,n,2),t=Aa(t,n,2),t!==null&&(Rn(t,2),Li(t))}function Be(t,n,a){if(t.tag===3)Cm(t,t,a);else for(;n!==null;){if(n.tag===3){Cm(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(La===null||!La.has(r))){t=li(a,t),a=w0(2),r=Aa(n,a,2),r!==null&&(D0(a,r,n,t),Rn(r,2),Li(r));break}}n=n.return}}function yf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Cv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(hf=!0,c.add(a),t=Nv.bind(null,t,n,a),n.then(t,t))}function Nv(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(_e&a)===a&&(tn===4||tn===3&&(_e&62914560)===_e&&300>b()-Ul?(Ne&2)===0&&tr(t,0):pf|=a,Js===_e&&(Js=0)),Li(t)}function wm(t,n){n===0&&(n=Ie()),t=is(t,n),t!==null&&(Rn(t,n),Li(t))}function Ov(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),wm(t,a)}function zv(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),wm(t,a)}function Pv(t,n){return Xe(t,n)}var Il=null,nr=null,Mf=!1,Fl=!1,bf=!1,za=0;function Li(t){t!==nr&&t.next===null&&(nr===null?Il=nr=t:nr=nr.next=t),Fl=!0,Mf||(Mf=!0,Iv())}function po(t,n){if(!bf&&Fl){bf=!0;do for(var a=!1,r=Il;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var x=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Vt(42|t)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Nm(r,f))}else f=_e,f=gt(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Bt(r,f)||(a=!0,Nm(r,f));r=r.next}while(a);bf=!1}}function Bv(){Dm()}function Dm(){Fl=Mf=!1;var t=0;za!==0&&jv()&&(t=za);for(var n=b(),a=null,r=Il;r!==null;){var c=r.next,f=Um(r,n);f===0?(r.next=null,a===null?Il=c:a.next=c,c===null&&(nr=a)):(a=r,(t!==0||(f&3)!==0)&&(Fl=!0)),r=c}pn!==0&&pn!==5||po(t),za!==0&&(za=0)}function Um(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Vt(f),E=1<<x,I=c[x];I===-1?((E&a)===0||(E&r)!==0)&&(c[x]=ie(E,n)):I<=n&&(t.expiredLanes|=E),f&=~E}if(n=qe,a=_e,a=gt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&jt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&jt(r),Ja(a)){case 2:case 8:a=St;break;case 32:a=ct;break;case 268435456:a=Lt;break;default:a=ct}return r=Lm.bind(null,t),a=Xe(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&jt(r),t.callbackPriority=2,t.callbackNode=null,2}function Lm(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bl()&&t.callbackNode!==a)return null;var r=_e;return r=gt(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(hm(t,r,n),Um(t,b()),t.callbackNode!=null&&t.callbackNode===a?Lm.bind(null,t):null)}function Nm(t,n){if(Bl())return null;hm(t,n,!0)}function Iv(){Kv(function(){(Ne&6)!==0?Xe(mt,Bv):Dm()})}function Ef(){if(za===0){var t=Gs;t===0&&(t=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),za=t}return za}function Om(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yo(""+t)}function zm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Fv(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Om((c[dn]||null).action),x=r.submitter;x&&(n=(n=x[dn]||null)?Om(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new Qo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(za!==0){var I=x?zm(c,x):new FormData(c);ku(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(E.preventDefault(),I=x?zm(c,x):new FormData(c),ku(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Tf=0;Tf<ru.length;Tf++){var Af=ru[Tf],Hv=Af.toLowerCase(),Gv=Af[0].toUpperCase()+Af.slice(1);vi(Hv,"on"+Gv)}vi(dp,"onAnimationEnd"),vi(hp,"onAnimationIteration"),vi(pp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(iv,"onTransitionRun"),vi(av,"onTransitionStart"),vi(sv,"onTransitionCancel"),vi(mp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Pm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var E=r[x],I=E.instance,et=E.currentTarget;if(E=E.listener,I!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=et;try{f(c)}catch(dt){tl(dt)}c.currentTarget=null,f=I}else for(x=0;x<r.length;x++){if(E=r[x],I=E.instance,et=E.currentTarget,E=E.listener,I!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=et;try{f(c)}catch(dt){tl(dt)}c.currentTarget=null,f=I}}}}function ge(t,n){var a=n[ws];a===void 0&&(a=n[ws]=new Set);var r=t+"__bubble";a.has(r)||(Bm(n,t,2,!1),a.add(r))}function Rf(t,n,a){var r=0;n&&(r|=4),Bm(a,t,r,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Cf(t){if(!t[Hl]){t[Hl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(Vv.has(a)||Rf(a,!1,t),Rf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,Rf("selectionchange",!1,n))}}function Bm(t,n,a,r){switch(dx(n)){case 2:var c=xS;break;case 8:c=gS;break;default:c=kf}a=c.bind(null,n,a,t),c=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function wf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var E=r.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=r.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=ga(E),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){r=f=x;continue t}E=E.parentNode}}r=r.return}Vh(function(){var et=f,dt=Wc(a),xt=[];t:{var it=xp.get(t);if(it!==void 0){var ot=Qo,Ft=t;switch(t){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":ot=z_;break;case"focusin":Ft="focus",ot=Qc;break;case"focusout":Ft="blur",ot=Qc;break;case"beforeblur":case"afterblur":ot=Qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=b_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=I_;break;case dp:case hp:case pp:ot=A_;break;case mp:ot=H_;break;case"scroll":case"scrollend":ot=y_;break;case"wheel":ot=V_;break;case"copy":case"cut":case"paste":ot=C_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Yh;break;case"toggle":case"beforetoggle":ot=X_}var te=(n&4)!==0,Ge=!te&&(t==="scroll"||t==="scrollend"),Y=te?it!==null?it+"Capture":null:it;te=[];for(var k=et,J;k!==null;){var ht=k;if(J=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||J===null||Y===null||(ht=Pr(k,Y),ht!=null&&te.push(xo(k,ht,J))),Ge)break;k=k.return}0<te.length&&(it=new ot(it,Ft,null,a,dt),xt.push({event:it,listeners:te}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",it&&a!==Xc&&(Ft=a.relatedTarget||a.fromElement)&&(ga(Ft)||Ft[Bi]))break t;if((ot||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,ot?(Ft=a.relatedTarget||a.toElement,ot=et,Ft=Ft?ga(Ft):null,Ft!==null&&(Ge=u(Ft),te=Ft.tag,Ft!==Ge||te!==5&&te!==27&&te!==6)&&(Ft=null)):(ot=null,Ft=et),ot!==Ft)){if(te=Wh,ht="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(te=Yh,ht="onPointerLeave",Y="onPointerEnter",k="pointer"),Ge=ot==null?it:q(ot),J=Ft==null?it:q(Ft),it=new te(ht,k+"leave",ot,a,dt),it.target=Ge,it.relatedTarget=J,ht=null,ga(dt)===et&&(te=new te(Y,k+"enter",Ft,a,dt),te.target=J,te.relatedTarget=Ge,ht=te),Ge=ht,ot&&Ft)e:{for(te=kv,Y=ot,k=Ft,J=0,ht=Y;ht;ht=te(ht))J++;ht=0;for(var Kt=k;Kt;Kt=te(Kt))ht++;for(;0<J-ht;)Y=te(Y),J--;for(;0<ht-J;)k=te(k),ht--;for(;J--;){if(Y===k||k!==null&&Y===k.alternate){te=Y;break e}Y=te(Y),k=te(k)}te=null}else te=null;ot!==null&&Im(xt,it,ot,te,!1),Ft!==null&&Ge!==null&&Im(xt,Ge,Ft,te,!0)}}t:{if(it=et?q(et):window,ot=it.nodeName&&it.nodeName.toLowerCase(),ot==="select"||ot==="input"&&it.type==="file")var De=ep;else if($h(it))if(np)De=tv;else{De=J_;var kt=Q_}else ot=it.nodeName,!ot||ot.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&kc(et.elementType)&&(De=ep):De=$_;if(De&&(De=De(t,et))){tp(xt,De,a,dt);break t}kt&&kt(t,it,et),t==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&_n(it,"number",it.value)}switch(kt=et?q(et):window,t){case"focusin":($h(kt)||kt.contentEditable==="true")&&(Ns=kt,iu=et,Xr=null);break;case"focusout":Xr=iu=Ns=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,up(xt,a,dt);break;case"selectionchange":if(nv)break;case"keydown":case"keyup":up(xt,a,dt)}var ue;if($c)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Ls?Qh(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(jh&&a.locale!=="ko"&&(Ls||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ls&&(ue=kh()):(va=dt,jc="value"in va?va.value:va.textContent,Ls=!0)),kt=Gl(et,ve),0<kt.length&&(ve=new qh(ve,t,null,a,dt),xt.push({event:ve,listeners:kt}),ue?ve.data=ue:(ue=Jh(a),ue!==null&&(ve.data=ue)))),(ue=q_?Y_(t,a):j_(t,a))&&(ve=Gl(et,"onBeforeInput"),0<ve.length&&(kt=new qh("onBeforeInput","beforeinput",null,a,dt),xt.push({event:kt,listeners:ve}),kt.data=ue)),Fv(xt,t,et,a,dt)}Pm(xt,n)})}function xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Pr(t,a),c!=null&&r.unshift(xo(t,c,f)),c=Pr(t,n),c!=null&&r.push(xo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function kv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Im(t,n,a,r,c){for(var f=n._reactName,x=[];a!==null&&a!==r;){var E=a,I=E.alternate,et=E.stateNode;if(E=E.tag,I!==null&&I===r)break;E!==5&&E!==26&&E!==27||et===null||(I=et,c?(et=Pr(a,f),et!=null&&x.unshift(xo(a,et,I))):c||(et=Pr(a,f),et!=null&&x.push(xo(a,et,I)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Xv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function Fm(t){return(typeof t=="string"?t:""+t).replace(Xv,`
`).replace(Wv,"")}function Hm(t,n){return n=Fm(n),Fm(t)===n}function He(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ci(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ci(t,""+r);break;case"className":Ae(t,"class",r);break;case"tabIndex":Ae(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(t,a,r);break;case"style":Hh(t,r,f);break;case"data":if(n!=="object"){Ae(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Yo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Hi);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Yo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ce(t,"popover",r);break;case"xlinkActuate":we(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":we(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":we(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":we(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":we(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":we(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":we(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":we(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":we(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ce(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=v_.get(a)||a,ce(t,a,r))}}function Df(t,n,a,r,c,f){switch(a){case"style":Hh(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Ci(t,r):(typeof r=="number"||typeof r=="bigint")&&Ci(t,""+r);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!At.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ce(t,a,r)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,f,x,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),r&&He(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var E=f=x=c=null,I=null,et=null;for(r in a)if(a.hasOwnProperty(r)){var dt=a[r];if(dt!=null)switch(r){case"name":c=dt;break;case"type":x=dt;break;case"checked":I=dt;break;case"defaultChecked":et=dt;break;case"value":f=dt;break;case"defaultValue":E=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:He(t,n,r,dt,a,null)}}je(t,f,E,I,et,x,c,!1);return;case"select":ge("invalid",t),r=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":r=E;default:He(t,n,c,E,a,null)}n=f,a=x,t.multiple=!!r,n!=null?hn(t,!!r,n,!1):a!=null&&hn(t,!!r,a,!0);return;case"textarea":ge("invalid",t),f=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:He(t,n,x,E,a,null)}Mn(t,r,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":He(t,n,I,r,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(r=0;r<mo.length;r++)ge(mo[r],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(r=a[et],r!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,et,r,a,null)}return;default:if(kc(n)){for(dt in a)a.hasOwnProperty(dt)&&(r=a[dt],r!==void 0&&Df(t,n,dt,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&He(t,n,E,r,a,null))}function qv(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,I=null,et=null,dt=null;for(ot in a){var xt=a[ot];if(a.hasOwnProperty(ot)&&xt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=xt;default:r.hasOwnProperty(ot)||He(t,n,ot,null,r,xt)}}for(var it in r){var ot=r[it];if(xt=a[it],r.hasOwnProperty(it)&&(ot!=null||xt!=null))switch(it){case"type":f=ot;break;case"name":c=ot;break;case"checked":et=ot;break;case"defaultChecked":dt=ot;break;case"value":x=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==xt&&He(t,n,it,ot,r,xt)}}Ii(t,x,E,I,et,dt,f,c);return;case"select":ot=x=E=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ot=I;default:r.hasOwnProperty(f)||He(t,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":it=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==I&&He(t,n,c,f,r,I)}n=E,a=x,r=ot,it!=null?hn(t,!!a,it,!1):!!r!=!!a&&(n!=null?hn(t,!!a,n,!0):hn(t,!!a,a?[]:"",!1));return;case"textarea":ot=it=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:He(t,n,E,null,r,c)}for(x in r)if(c=r[x],f=a[x],r.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":it=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&He(t,n,x,c,r,f)}vn(t,it,ot);return;case"option":for(var Ft in a)it=a[Ft],a.hasOwnProperty(Ft)&&it!=null&&!r.hasOwnProperty(Ft)&&(Ft==="selected"?t.selected=!1:He(t,n,Ft,null,r,it));for(I in r)it=r[I],ot=a[I],r.hasOwnProperty(I)&&it!==ot&&(it!=null||ot!=null)&&(I==="selected"?t.selected=it&&typeof it!="function"&&typeof it!="symbol":He(t,n,I,it,r,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)it=a[te],a.hasOwnProperty(te)&&it!=null&&!r.hasOwnProperty(te)&&He(t,n,te,null,r,it);for(et in r)if(it=r[et],ot=a[et],r.hasOwnProperty(et)&&it!==ot&&(it!=null||ot!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:He(t,n,et,it,r,ot)}return;default:if(kc(n)){for(var Ge in a)it=a[Ge],a.hasOwnProperty(Ge)&&it!==void 0&&!r.hasOwnProperty(Ge)&&Df(t,n,Ge,void 0,r,it);for(dt in r)it=r[dt],ot=a[dt],!r.hasOwnProperty(dt)||it===ot||it===void 0&&ot===void 0||Df(t,n,dt,it,r,ot);return}}for(var Y in a)it=a[Y],a.hasOwnProperty(Y)&&it!=null&&!r.hasOwnProperty(Y)&&He(t,n,Y,null,r,it);for(xt in r)it=r[xt],ot=a[xt],!r.hasOwnProperty(xt)||it===ot||it==null&&ot==null||He(t,n,xt,it,r,ot)}function Gm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Gm(x)){for(x=0,E=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],et=I.startTime;if(et>E)break;var dt=I.transferSize,xt=I.initiatorType;dt&&Gm(xt)&&(I=I.responseEnd,x+=dt*(I<E?1:(E-et)/(I-et)))}if(--r,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Uf=null,Lf=null;function Vl(t){return t.nodeType===9?t:t.ownerDocument}function Vm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function km(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Nf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Of=null;function jv(){var t=window.event;return t&&t.type==="popstate"?t===Of?!1:(Of=t,!0):(Of=null,!1)}var Xm=typeof setTimeout=="function"?setTimeout:void 0,Zv=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(t){return Wm.resolve(null).then(t).catch(Qv)}:Xm;function Qv(t){setTimeout(function(){throw t})}function Pa(t){return t==="head"}function qm(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),rr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[$a]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&go(t.ownerDocument.body);a=c}while(a);rr(n)}function Ym(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Jv(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[$a])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function $v(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function jm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=hi(t.nextSibling),t===null))return null;return t}function Pf(t){return t.data==="$?"||t.data==="$~"}function Bf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function tS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var If=null;function Zm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return hi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Km(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Qm(t,n,a){switch(n=Vl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zr(t)}var pi=new Map,Jm=new Set;function kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=W.d;W.d={f:eS,r:nS,D:iS,C:aS,L:sS,m:rS,X:lS,S:oS,M:cS};function eS(){var t=na.f(),n=Ol();return t||n}function nS(t){var n=A(t);n!==null&&n.tag===5&&n.type==="form"?m0(n):na.r(t)}var ir=typeof document>"u"?null:document;function $m(t,n,a){var r=ir;if(r&&typeof n=="string"&&n){var c=Ye(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Jm.has(c)||(Jm.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),An(n,"link",t),nt(n),r.head.appendChild(n)))}}function iS(t){na.D(t),$m("dns-prefetch",t,null)}function aS(t,n){na.C(t,n),$m("preconnect",t,n)}function sS(t,n,a){na.L(t,n,a);var r=ir;if(r&&t&&n){var c='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ye(a.imageSizes)+'"]')):c+='[href="'+Ye(t)+'"]';var f=c;switch(n){case"style":f=ar(t);break;case"script":f=sr(t)}pi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(_o(f))||n==="script"&&r.querySelector(vo(f))||(n=r.createElement("link"),An(n,"link",t),nt(n),r.head.appendChild(n)))}}function rS(t,n){na.m(t,n);var a=ir;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ye(r)+'"][href="'+Ye(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(t)}if(!pi.has(f)&&(t=v({rel:"modulepreload",href:t},n),pi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}r=a.createElement("link"),An(r,"link",t),nt(r),a.head.appendChild(r)}}}function oS(t,n,a){na.S(t,n,a);var r=ir;if(r&&t){var c=rt(r).hoistableStyles,f=ar(t);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=r.querySelector(_o(f)))E.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(f))&&Ff(t,a);var I=x=r.createElement("link");nt(I),An(I,"link",t),I._p=new Promise(function(et,dt){I.onload=et,I.onerror=dt}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Xl(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function lS(t,n){na.X(t,n);var a=ir;if(a&&t){var r=rt(a).hoistableScripts,c=sr(t),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(t=v({src:t,async:!0},n),(n=pi.get(c))&&Hf(t,n),f=a.createElement("script"),nt(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function cS(t,n){na.M(t,n);var a=ir;if(a&&t){var r=rt(a).hoistableScripts,c=sr(t),f=r.get(c);f||(f=a.querySelector(vo(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=pi.get(c))&&Hf(t,n),f=a.createElement("script"),nt(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function tx(t,n,a,r){var c=(c=st.current)?kl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=rt(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ar(a.href);var f=rt(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(_o(t)))&&!f._p&&(x.instance=f,x.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),f||uS(c,t,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=rt(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ar(t){return'href="'+Ye(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function ex(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function uS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),An(n,"link",a),nt(n),t.head.appendChild(n))}function sr(t){return'[src="'+Ye(t)+'"]'}function vo(t){return"script[async]"+t}function nx(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(r)return n.instance=r,nt(r),r;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),nt(r),An(r,"style",c),Xl(r,a.precedence,t),n.instance=r;case"stylesheet":c=ar(a.href);var f=t.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,nt(f),f;r=ex(a),(c=pi.get(c))&&Ff(r,c),f=(t.ownerDocument||t).createElement("link"),nt(f);var x=f;return x._p=new Promise(function(E,I){x.onload=E,x.onerror=I}),An(f,"link",r),n.state.loading|=4,Xl(f,a.precedence,t),n.instance=f;case"script":return f=sr(a.src),(c=t.querySelector(vo(f)))?(n.instance=c,nt(c),c):(r=a,(c=pi.get(f))&&(r=v({},a),Hf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),nt(c),An(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Xl(r,a.precedence,t));return n.instance}function Xl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,x=0;x<r.length;x++){var E=r[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ff(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Hf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Wl=null;function ix(t,n,a){if(Wl===null){var r=new Map,c=Wl=new Map;c.set(a,r)}else c=Wl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[$a]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var E=r.get(x);E?E.push(f):r.set(x,[f])}}return r}function ax(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function sx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ar(r.href),f=n.querySelector(_o(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ql.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,nt(f);return}f=n.ownerDocument||n,r=ex(r),(c=pi.get(c))&&Ff(r,c),f=f.createElement("link"),nt(f);var x=f;x._p=new Promise(function(E,I){x.onload=E,x.onerror=I}),An(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ql.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Gf=0;function hS(t,n){return t.stylesheets&&t.count===0&&jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Gf===0&&(Gf=62500*Yv());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Gf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yl=null;function jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yl=new Map,n.forEach(pS,t),Yl=null,ql.call(t))}function pS(t,n){if(!(n.state.loading&4)){var a=Yl.get(t);if(a)var r=a.get(null);else{a=new Map,Yl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,c),a.set(x,c),this.count++,r=ql.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var So={$$typeof:D,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function mS(t,n,a,r,c,f,x,E,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function rx(t,n,a,r,c,f,x,E,I,et,dt,xt){return t=new mS(t,n,a,x,I,et,dt,xt,E),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),t.current=f,f.stateNode=t,n=vu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},bu(f),t}function ox(t){return t?(t=Ps,t):Ps}function lx(t,n,a,r,c,f){c=ox(c),r.context===null?r.context=c:r.pendingContext=c,r=Ta(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Aa(t,r,n),a!==null&&(kn(a,t,n),Qr(a,t,n))}function cx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Vf(t,n){cx(t,n),(t=t.alternate)&&cx(t,n)}function ux(t){if(t.tag===13||t.tag===31){var n=is(t,67108864);n!==null&&kn(n,t,67108864),Vf(t,67108864)}}function fx(t){if(t.tag===13||t.tag===31){var n=ni();n=_i(n);var a=is(t,n);a!==null&&kn(a,t,n),Vf(t,n)}}var Zl=!0;function xS(t,n,a,r){var c=B.T;B.T=null;var f=W.p;try{W.p=2,kf(t,n,a,r)}finally{W.p=f,B.T=c}}function gS(t,n,a,r){var c=B.T;B.T=null;var f=W.p;try{W.p=8,kf(t,n,a,r)}finally{W.p=f,B.T=c}}function kf(t,n,a,r){if(Zl){var c=Xf(r);if(c===null)wf(t,n,r,Kl,a),hx(t,r);else if(vS(c,t,n,a,r))r.stopPropagation();else if(hx(t,r),n&4&&-1<_S.indexOf(t)){for(;c!==null;){var f=A(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=bt(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var I=1<<31-Vt(x);E.entanglements[1]|=I,x&=~I}Li(f),(Ne&6)===0&&(Ll=b()+500,po(0))}}break;case 31:case 13:E=is(f,2),E!==null&&kn(E,f,2),Ol(),Vf(f,2)}if(f=Xf(r),f===null&&wf(t,n,r,Kl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else wf(t,n,r,null,a)}}function Xf(t){return t=Wc(t),Wf(t)}var Kl=null;function Wf(t){if(Kl=null,t=ga(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Kl=t,null}function dx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case mt:return 2;case St:return 8;case ct:case qt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var qf=!1,Ba=null,Ia=null,Fa=null,yo=new Map,Mo=new Map,Ha=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hx(t,n){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function bo(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=A(n),n!==null&&ux(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function vS(t,n,a,r,c){switch(n){case"focusin":return Ba=bo(Ba,t,n,a,r,c),!0;case"dragenter":return Ia=bo(Ia,t,n,a,r,c),!0;case"mouseover":return Fa=bo(Fa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,bo(yo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,bo(Mo.get(f)||null,t,n,a,r,c)),!0}return!1}function px(t){var n=ga(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Or(t.priority,function(){fx(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Or(t.priority,function(){fx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Xf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Xc=r,a.target.dispatchEvent(r),Xc=null}else return n=A(a),n!==null&&ux(n),t.blockedOn=a,!1;n.shift()}return!0}function mx(t,n,a){Ql(t)&&a.delete(n)}function SS(){qf=!1,Ba!==null&&Ql(Ba)&&(Ba=null),Ia!==null&&Ql(Ia)&&(Ia=null),Fa!==null&&Ql(Fa)&&(Fa=null),yo.forEach(mx),Mo.forEach(mx)}function Jl(t,n){t.blockedOn===n&&(t.blockedOn=null,qf||(qf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,SS)))}var $l=null;function xx(t){$l!==t&&($l=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$l===t&&($l=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Wf(r||a)===null)continue;break}var f=A(a);f!==null&&(t.splice(n,3),n-=3,ku(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function rr(t){function n(I){return Jl(I,t)}Ba!==null&&Jl(Ba,t),Ia!==null&&Jl(Ia,t),Fa!==null&&Jl(Fa,t),yo.forEach(n),Mo.forEach(n);for(var a=0;a<Ha.length;a++){var r=Ha[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)px(a),a.blockedOn===null&&Ha.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],x=c[dn]||null;if(typeof f=="function")x||xx(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[dn]||null)E=x.formAction;else if(Wf(c)!==null)continue}else E=x.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),xx(a)}}}function gx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Yf(t){this._internalRoot=t}tc.prototype.render=Yf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ni();lx(a,r,t,n,null,null)},tc.prototype.unmount=Yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;lx(t.current,2,null,t,null,null),Ol(),n[Bi]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Nr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,t),a===0&&px(t)}};var _x=e.version;if(_x!=="19.2.4")throw Error(s(527,_x,"19.2.4"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var yS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Mt=ec.inject(yS),Et=ec}catch{}}return To.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=T0,f=A0,x=R0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=rx(t,1,!1,null,null,a,r,null,c,f,x,gx),t[Bi]=n.current,Cf(t),new Yf(n)},To.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=T0,x=A0,E=R0,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=rx(t,1,!0,n,a??null,r,c,I,f,x,E,gx),n.context=ox(null),a=n.current,r=ni(),r=_i(r),c=Ta(r),c.callback=null,Aa(a,c,r),a=r,n.current.lanes=a,Rn(n,a),Li(n),t[Bi]=n.current,Cf(t),new tc(n)},To.version="19.2.4",To}var Cx;function US(){if(Cx)return Kf.exports;Cx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Kf.exports=DS(),Kf.exports}var LS=US();const Pn={fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"};function Bn(o){return{width:o,height:o}}function NS({size:o=16,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("circle",{cx:"12",cy:"12",r:"9"}),at.jsx("path",{d:"M3 12h18"}),at.jsx("path",{d:"M12 3a14 14 0 0 1 0 18"}),at.jsx("path",{d:"M12 3a14 14 0 0 0 0 18"})]})}function OS({size:o=16,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("path",{d:"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8z"}),at.jsx("path",{d:"M17.5 4.5v2"}),at.jsx("path",{d:"M19.8 6.8h-2"})]})}function zS({size:o=18,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("circle",{cx:"12",cy:"8",r:"3.2"}),at.jsx("path",{d:"M5.2 19a6.8 6.8 0 0 1 13.6 0"}),at.jsx("path",{d:"M18.3 5.7l.9.9 1.6-1.6"})]})}function wx({size:o=17,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("rect",{x:"7",y:"7",width:"10",height:"10",rx:"2"}),at.jsx("path",{d:"M10 1v3M14 1v3M10 20v3M14 20v3M1 10h3M1 14h3M20 10h3M20 14h3"})]})}function PS({size:o=17,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("circle",{cx:"12",cy:"12",r:"3.2"}),at.jsx("path",{d:"M12 2.2v2.4M12 19.4v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.2 12h2.4M19.4 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"})]})}function BS({size:o=17,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("path",{d:"M3 20V8.5l6 3V8.5l6 3V20H3z"}),at.jsx("path",{d:"M21 20V5h-6v15"}),at.jsx("path",{d:"M7 20v-4M11 20v-4M15 20v-4"})]})}function IS({size:o=17,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("path",{d:"M19.5 4.8c-6 .2-10.1 2.3-12.3 6.2-1.7 3-1.5 6.1-1.5 6.1s3.1.2 6.1-1.5c4-2.2 6-6.3 6.2-12.3z"}),at.jsx("path",{d:"M7 17c2-3.1 4.5-5.6 8-8"})]})}function FS({size:o=17,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("path",{d:"M4 21V4h16v17"}),at.jsx("path",{d:"M9 21v-4h6v4M8 8h2M8 12h2M14 8h2M14 12h2"})]})}function Dx({size:o=17,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("path",{d:"M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z"}),at.jsx("path",{d:"M5 3l.7 1.8L7.5 5.5l-1.8.7L5 8l-.7-1.8L2.5 5.5l1.8-.7L5 3zM19 16l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9.9-2.3z"})]})}function HS({size:o=17,...e}){return at.jsx("svg",{...Pn,...Bn(o),...e,children:at.jsx("path",{d:"M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v7A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9z"})})}function GS({size:o=17,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("circle",{cx:"12",cy:"12",r:"9"}),at.jsx("path",{d:"M15.7 8.3l-2.2 5.2-5.2 2.2 2.2-5.2 5.2-2.2z"})]})}function VS({size:o=15,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),at.jsx("path",{d:"M12 7.5v4.7l2.8 1.8"})]})}function kS({size:o=15,...e}){return at.jsx("svg",{...Pn,...Bn(o),...e,children:at.jsx("path",{d:"M14.8 6.3a3.7 3.7 0 0 0-4.9 4.9L4.5 16.6a1.4 1.4 0 1 0 2 2l5.4-5.4a3.7 3.7 0 0 0 4.9-4.9l-2.2 2.2-2.7-2.7 2.9-1.5z"})})}function XS({size:o=15,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("path",{d:"M4 16l5.1-5.1 3.1 3.1L19 7.2"}),at.jsx("path",{d:"M14 7h5v5"})]})}function Ux({size:o=15,...e}){return at.jsxs("svg",{...Pn,...Bn(o),...e,children:[at.jsx("rect",{x:"3.5",y:"5.5",width:"17",height:"13",rx:"2.4"}),at.jsx("path",{d:"M4.5 7.2l7.5 5.6 7.5-5.6"})]})}const WS={en:{ui:{language:"Language",theme:"Theme",english:"EN",chinese:"中文",dark:"Dark",light:"Light"},hero:{eyebrow:"Independent System Engineer",title:"I build complete intelligent systems - from embedded hardware and sensors to automation, ERP, MES, smart manufacturing, and smart agriculture.",subtitle:"From devices to enterprise systems, I build the entire intelligent ecosystem for real operations.",note:"If you can describe the problem, I can build the solution.",primaryCta:"View selected work",secondaryCta:"Let's work together"},about:{kicker:"About",title:"About Me",paragraphs:["I am an independent developer focused on end-to-end system engineering for industrial and agricultural environments.","My work combines embedded firmware, sensor networks, automation logic, and enterprise software into one reliable operational stack.","I design practical systems that reduce manual work, improve data quality, and help teams run faster with better decision support."],tags:["Embedded & IoT Devices","Intelligent Automation","Smart Manufacturing","Smart Agriculture","ERP / MES Systems","Full-stack Delivery","AI-assisted Engineering"]},services:{kicker:"Capabilities",title:"What I Build",items:[{title:"Embedded & IoT Devices",description:"Build low-power devices and sensor systems with stable data acquisition and communication.",points:["Bluetooth ECG monitoring device","Temperature, humidity, and air-quality sensing","BLE communication and edge control logic","Device firmware for low-power operation"]},{title:"Intelligent Automation",description:"Turn manual workflows into sensor-driven, traceable, and real-time automation.",points:["Smart environmental automation","IoT-based control systems","Device linkage and live monitoring","Data-driven operational decisions"]},{title:"Smart Manufacturing",description:"Connect production flow, machines, and reporting into one execution system.",points:["Production workflow automation","Shop-floor data collection","Scheduling and quality management","MES and ERP integration"]},{title:"Smart Agriculture",description:"Design field-ready systems for sensing, control, and farm operation intelligence.",points:["Agricultural environment monitoring","Automated irrigation and climate control","Sensor network architecture","Farm data visualization and optimization"]},{title:"Enterprise Systems",description:"Deliver ERP, MES, and full-stack platforms aligned with real manufacturing and agriculture workflows.",points:["ERP customization and process automation","MES development and execution tracking","Full-stack business systems","AI-assisted development pipeline"]},{title:"Other",description:"I can also design websites for businesses or individuals and develop various applications.",points:["Business websites","Personal websites","Web applications","Custom software tools"]}]},projects:{kicker:"Projects",title:"Selected Systems",backgroundLabel:"Background",solutionLabel:"Solution",resultLabel:"Result",items:[{title:"Bluetooth ECG Monitoring Device",background:"Needed a portable, low-power ECG acquisition solution.",solution:"Developed embedded firmware, BLE communication, and real-time signal processing.",result:"Delivered a stable, accurate, mobile-ready ECG monitoring system."},{title:"Environmental Sensor and Automation System",background:"Manual monitoring of temperature, humidity, and air quality was inefficient.",solution:"Built a multi-sensor embedded system with automated control logic.",result:"Achieved fully automated environmental regulation with real-time data."},{title:"Smart Agriculture Monitoring and Irrigation",background:"Farms needed automated environmental control and irrigation.",solution:"Developed a sensor-driven system for soil moisture, climate monitoring, and automated irrigation.",result:"Improved crop stability and reduced manual labor."},{title:"Production MES Workflow System",background:"Production tracking lacked visibility and accuracy.",solution:"Designed a complete MES workflow including scheduling, tracking, and ERP integration.",result:"Improved data accuracy and reduced manual reporting time by over 60%."},{title:"ERP Customization for Manufacturing",background:"Standard ERP modules could not match real production workflows.",solution:"Customized modules and added automation logic for scheduling, quality, and reporting.",result:"Increased workflow accuracy and reduced manual adjustments."},{title:"Home Assistant MQTT Desktop Application",background:"Teams needed a lightweight desktop tool to monitor and control Home Assistant MQTT topics efficiently.",solution:"Built a cross-platform desktop application with MQTT connection management, real-time topic subscriptions, and device command publishing.",result:"Improved operational visibility and reduced manual debugging time for smart home and IoT workflows."}]},scope:{kicker:"End-to-End Scope",title:"One Engineer Across the Entire System Chain",description:"I work across the full stack of operational systems, so integration and delivery stay consistent from physical devices to enterprise workflows.",chain:["Sensors","Embedded firmware","IoT communication","Automation logic","Smart manufacturing","Smart agriculture","ERP / MES","Full-stack applications","AI-assisted optimization"]},contact:{kicker:"Contact",title:"Let's Work Together",paragraphs:["I can take any system from concept to deployment: hardware, embedded, IoT, automation, smart manufacturing, smart agriculture, ERP, MES, and full-stack software.","If you can describe the problem, I can build the solution."],email:"fs95808@gmail.com",buttonLabel:"Send Email"}},zh:{ui:{language:"语言",theme:"主题",english:"EN",chinese:"中文",dark:"暗黑",light:"明亮"},hero:{eyebrow:"独立系统工程师",title:"我构建完整的智能系统：从嵌入式硬件与传感器，到自动化、ERP、MES、智能制造与智慧农业。",subtitle:"从设备端到企业系统端，我可以完成整套智能生态的设计与交付。",note:"只要你能描述问题，我就能把解决方案做出来。",primaryCta:"查看代表项目",secondaryCta:"联系合作"},about:{kicker:"关于",title:"关于我",paragraphs:["我是独立开发者，专注于工业与农业场景下的端到端系统工程。","我的工作覆盖嵌入式固件、传感器网络、自动化逻辑与企业软件，并将它们整合为稳定可落地的业务系统。","我以工程实效为导向，帮助团队减少人工操作、提升数据质量，并加快决策效率。"],tags:["嵌入式与物联网设备","智能自动化","智能制造","智慧农业","ERP / MES 系统","全栈交付","AI 辅助工程"]},services:{kicker:"能力矩阵",title:"我能构建什么",items:[{title:"嵌入式与物联网设备",description:"构建低功耗设备与传感系统，实现稳定采集与通信。",points:["蓝牙 ECG 心电监测设备","温湿度与空气质量传感","BLE 通信与边缘控制逻辑","低功耗固件开发"]},{title:"智能自动化",description:"将人工流程升级为传感驱动、可追踪、实时联动的自动化系统。",points:["环境智能调控","IoT 控制系统","设备联动与实时监控","数据驱动决策"]},{title:"智能制造",description:"打通生产流程、设备数据与报表体系，形成一体化执行系统。",points:["生产流程自动化","车间数据采集","排产与质量管理","MES 与 ERP 集成"]},{title:"智慧农业",description:"为农业场景构建可落地的感知、控制与运营智能系统。",points:["农业环境监测","自动灌溉与气候控制","农业传感器网络","农业数据可视化与优化"]},{title:"企业系统",description:"交付匹配制造与农业业务流程的 ERP、MES 与全栈平台。",points:["ERP 定制与流程自动化","MES 开发与执行追踪","全栈业务系统","AI 辅助开发流程"]},{title:"其他",description:"当然我也可以为你设计企业或个人网站，开发各种应用程序。",points:["企业官网设计","个人网站设计","Web 应用开发","定制软件工具开发"]}]},projects:{kicker:"项目",title:"代表系统",backgroundLabel:"背景",solutionLabel:"方案",resultLabel:"结果",items:[{title:"蓝牙 ECG 心电监测设备",background:"需要一套便携、低功耗的心电采集方案。",solution:"开发嵌入式固件、BLE 通信与实时信号处理能力。",result:"交付稳定、准确、可移动化部署的心电监测系统。"},{title:"环境传感与自动控制系统",background:"温湿度与空气质量依靠人工监测，效率低且不稳定。",solution:"构建多传感器嵌入式系统并集成自动控制逻辑。",result:"实现环境调控自动化与实时数据可视化。"},{title:"智慧农业监测与灌溉系统",background:"农业场景需要环境与灌溉的自动控制能力。",solution:"构建基于土壤与气候数据的传感驱动系统与自动灌溉逻辑。",result:"提升作物稳定性并降低人工投入。"},{title:"生产 MES 流程系统",background:"生产追踪缺少可视化与准确性。",solution:"设计完整 MES 流程，覆盖排产、追踪与 ERP 联动。",result:"数据准确率提升，并将人工报表时间降低 60% 以上。"},{title:"制造业 ERP 定制系统",background:"标准 ERP 模块无法匹配真实生产流程。",solution:"定制排产、质量与报表模块，并加入自动化逻辑。",result:"流程准确性提升，人工调整明显减少。"},{title:"Home Assistant MQTT 桌面应用程序",background:"团队需要一个轻量桌面工具，用于高效监控和控制 Home Assistant 的 MQTT 主题。",solution:"开发跨平台桌面应用，集成 MQTT 连接管理、主题实时订阅与设备指令发布能力。",result:"显著提升智能家居与 IoT 场景的运维可视化能力，并减少人工排查时间。"}]},scope:{kicker:"全链路能力",title:"一个工程师覆盖整条系统链路",description:"我覆盖从物理设备到企业流程的软件硬件全栈，确保系统集成与交付的一致性。",chain:["传感器","嵌入式固件","IoT 通信","自动化逻辑","智能制造","智慧农业","ERP / MES","全栈应用","AI 辅助优化"]},contact:{kicker:"联系",title:"一起把系统落地",paragraphs:["我可以把任何系统从概念推进到上线交付：硬件、嵌入式、IoT、自动化、智能制造、智慧农业、ERP、MES 和全栈软件。","你描述业务问题，我负责把它做成可运行的系统。"],email:"fs95808@gmail.com",buttonLabel:"发送邮件"}}};function qS({content:o}){return at.jsx("section",{className:"section about-section",id:"about",children:at.jsx("div",{className:"container",children:at.jsx("div",{className:"about-panel",children:at.jsxs("div",{className:"about-layout",children:[at.jsxs("div",{className:"about-text",children:[at.jsx("p",{className:"section-kicker",children:o.kicker}),at.jsxs("h2",{className:"section-title with-icon",children:[at.jsx(zS,{}),o.title]}),o.paragraphs.map(i=>at.jsx("p",{className:"section-copy",children:i},i)),at.jsx("ul",{className:"tag-list","aria-label":"skills",children:o.tags.map(i=>at.jsx("li",{className:"tag",children:i},i))})]}),at.jsx("aside",{className:"about-photo-pane",children:at.jsx("div",{className:"about-photo-shell",children:at.jsx("img",{className:"about-photo",src:"/home/assets/me.png",alt:"Profile photo",loading:"lazy"})})})]})})})})}function Ig({href:o,children:e}){const i=o.startsWith("http");return at.jsx("a",{className:"btn-primary",href:o,target:i?"_blank":void 0,rel:i?"noreferrer":void 0,children:e})}function YS({content:o}){const e=o.email,[i,s]=Un.useState(!1),l=Un.useRef(null);Un.useEffect(()=>()=>{l.current&&window.clearTimeout(l.current)},[]);const u=m=>{const p=document.createElement("textarea");p.value=m,p.setAttribute("readonly",""),p.style.position="fixed",p.style.opacity="0",document.body.appendChild(p),p.select(),document.execCommand("copy"),document.body.removeChild(p)},d=async()=>{try{navigator.clipboard?.writeText?await navigator.clipboard.writeText(e):u(e),s(!0),l.current&&window.clearTimeout(l.current),l.current=window.setTimeout(()=>s(!1),1500)}catch{s(!1)}},h=typeof document<"u"&&document.documentElement.lang.startsWith("zh")?"已复制":"Copied";return at.jsx("section",{className:"section contact-section",id:"contact",children:at.jsxs("div",{className:"container contact-panel",children:[at.jsx("p",{className:"section-kicker",children:o.kicker}),at.jsxs("h2",{className:"section-title with-icon",children:[at.jsx(Ux,{}),o.title]}),o.paragraphs.map(m=>at.jsx("p",{className:"section-copy",children:m},m)),at.jsxs("div",{className:"contact-actions",children:[at.jsxs("button",{className:"contact-link contact-copy",type:"button",onClick:d,"aria-label":`Copy ${e} to clipboard`,children:[at.jsx(Ux,{}),e]}),i&&at.jsx("span",{className:"copy-hint",children:h}),at.jsx(Ig,{href:`mailto:${e}`,children:o.buttonLabel})]})]})})}const Th="181",jS=0,Lx=1,ZS=2,Fg=1,KS=2,ca=3,Qa=0,Wn=1,ua=2,ha=0,yr=1,Nx=2,Ox=3,zx=4,QS=5,bs=100,JS=101,$S=102,ty=103,ey=104,ny=200,iy=201,ay=202,sy=203,Nd=204,Od=205,ry=206,oy=207,ly=208,cy=209,uy=210,fy=211,dy=212,hy=213,py=214,zd=0,Pd=1,Bd=2,br=3,Id=4,Fd=5,Hd=6,Gd=7,Hg=0,my=1,xy=2,Ka=0,gy=1,_y=2,vy=3,Sy=4,yy=5,My=6,by=7,Gg=300,Er=301,Tr=302,Vd=303,kd=304,Bc=306,Xd=1e3,fa=1001,Wd=1002,ri=1003,Ey=1004,nc=1005,gi=1006,td=1007,Ts=1008,zi=1009,Vg=1010,kg=1011,zo=1012,Ah=1013,As=1014,da=1015,Cr=1016,Rh=1017,Ch=1018,Po=1020,Xg=35902,Wg=35899,qg=1021,Yg=1022,Ai=1023,Bo=1026,Io=1027,jg=1028,wh=1029,Dh=1030,Uh=1031,Lh=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,qd=35840,Yd=35841,jd=35842,Zd=35843,Kd=36196,Qd=37492,Jd=37496,$d=37808,th=37809,eh=37810,nh=37811,ih=37812,ah=37813,sh=37814,rh=37815,oh=37816,lh=37817,ch=37818,uh=37819,fh=37820,dh=37821,hh=36492,ph=36494,mh=36495,xh=36283,gh=36284,_h=36285,vh=36286,Ty=3200,Ay=3201,Zg=0,Ry=1,ja="",xi="srgb",Ar="srgb-linear",Lc="linear",Ve="srgb",or=7680,Px=519,Cy=512,wy=513,Dy=514,Kg=515,Uy=516,Ly=517,Ny=518,Oy=519,Bx=35044,Ix="300 es",Oi=2e3,Nc=2001;function Qg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Oc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function zy(){const o=Oc("canvas");return o.style.display="block",o}const Fx={};function Hx(...o){const e="THREE."+o.shift();console.log(e,...o)}function re(...o){const e="THREE."+o.shift();console.warn(e,...o)}function sn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Fo(...o){const e=o.join(" ");e in Fx||(Fx[e]=!0,re(...o))}function Py(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class wr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,Sh=180/Math.PI;function Ho(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function By(o,e){return(o%e+e)%e}function nd(o,e,i){return(1-i)*o+i*e}function Ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,i=0){Se.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Go{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],S=u[d+0],M=u[d+1],T=u[d+2],C=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v;return}if(h>=1){e[i+0]=S,e[i+1]=M,e[i+2]=T,e[i+3]=C;return}if(v!==C||m!==S||p!==M||_!==T){let y=m*S+p*M+_*T+v*C;y<0&&(S=-S,M=-M,T=-T,C=-C,y=-y);let g=1-h;if(y<.9995){const U=Math.acos(y),D=Math.sin(U);g=Math.sin(g*U)/D,h=Math.sin(h*U)/D,m=m*g+S*h,p=p*g+M*h,_=_*g+T*h,v=v*g+C*h}else{m=m*g+S*h,p=p*g+M*h,_=_*g+T*h,v=v*g+C*h;const U=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=U,p*=U,_*=U,v*=U}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=u[d],S=u[d+1],M=u[d+2],T=u[d+3];return e[i]=h*T+_*v+m*M-p*S,e[i+1]=m*T+_*S+p*v-h*M,e[i+2]=p*T+_*M+h*S-m*v,e[i+3]=_*T-h*v-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(u/2),S=m(s/2),M=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=S*_*v+p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v-S*M*T;break;case"YXZ":this._x=S*_*v+p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v+S*M*T;break;case"ZXY":this._x=S*_*v-p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v-S*M*T;break;case"ZYX":this._x=S*_*v-p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v+S*M*T;break;case"YZX":this._x=S*_*v+p*M*T,this._y=p*M*v+S*_*T,this._z=p*_*T-S*M*v,this._w=p*_*v-S*M*T;break;case"XZY":this._x=S*_*v-p*M*T,this._y=p*M*v-S*_*T,this._z=p*_*T+S*M*v,this._w=p*_*v+S*M*T;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],S=s+h+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(s>h&&s>v){const M=2*Math.sqrt(1+s-h-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-s-v);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-s*p,this._z=u*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,i=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Gx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Gx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),_=2*(h*i-u*l),v=2*(u*s-d*i);return this.x=i+m*p+d*v-h*_,this.y=s+m*_+h*p-u*v,this.z=l+m*v+u*_-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new K,Gx=new Go;class fe{constructor(e,i,s,l,u,d,h,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p)}set(e,i,s,l,u,d,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],S=s[2],M=s[5],T=s[8],C=l[0],y=l[3],g=l[6],U=l[1],D=l[4],z=l[7],H=l[2],L=l[5],P=l[8];return u[0]=d*C+h*U+m*H,u[3]=d*y+h*D+m*L,u[6]=d*g+h*z+m*P,u[1]=p*C+_*U+v*H,u[4]=p*y+_*D+v*L,u[7]=p*g+_*z+v*P,u[2]=S*C+M*U+T*H,u[5]=S*y+M*D+T*L,u[8]=S*g+M*z+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*d*_-i*h*p-s*u*_+s*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*d-h*p,S=h*m-_*u,M=p*u-d*m,T=i*v+s*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(l*p-_*s)*C,e[2]=(h*s-l*d)*C,e[3]=S*C,e[4]=(_*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(d*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ad.makeScale(e,i)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,i){return this.premultiply(ad.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new fe,Vx=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kx=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iy(){const o={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ve&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ve&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ja?Lc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ar]:{primaries:e,whitePoint:s,transfer:Lc,toXYZ:Vx,fromXYZ:kx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:s,transfer:Ve,toXYZ:Vx,fromXYZ:kx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),o}const Le=Iy();function pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let lr;class Fy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{lr===void 0&&(lr=Oc("canvas")),lr.width=e.width,lr.height=e.height;const l=lr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=lr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Oc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=pa(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(pa(i[s]/255)*255):i[s]=pa(i[s]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hy=0;class Nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(sd(l[d].image)):u.push(sd(l[d]))}else u=sd(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Fy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let Gy=0;const rd=new K;class zn extends wr{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,s=fa,l=fa,u=gi,d=Ts,h=Ai,m=zi,p=zn.DEFAULT_ANISOTROPY,_=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Ho(),this.name="",this.source=new Nh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case Wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case Wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Gg;zn.DEFAULT_ANISOTROPY=1;class ke{constructor(e=0,i=0,s=0,l=1){ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],_=m[4],v=m[8],S=m[1],M=m[5],T=m[9],C=m[2],y=m[6],g=m[10];if(Math.abs(_-S)<.01&&Math.abs(v-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+C)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,z=(M+1)/2,H=(g+1)/2,L=(_+S)/4,P=(v+C)/4,j=(T+y)/4;return D>z&&D>H?D<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(D),l=L/s,u=P/s):z>H?z<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(z),s=L/l,u=j/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=P/u,l=j/u),this.set(s,l,u,i),this}let U=Math.sqrt((y-T)*(y-T)+(v-C)*(v-C)+(S-_)*(S-_));return Math.abs(U)<.001&&(U=1),this.x=(y-T)/U,this.y=(v-C)/U,this.z=(S-_)/U,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vy extends wr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ke(0,0,e,i),this.scissorTest=!1,this.viewport=new ke(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new zn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Nh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends Vy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Jg extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ky extends zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Mi):Mi.fromBufferAttribute(u,d),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ic.copy(s.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),ac.subVectors(this.max,Ro),cr.subVectors(e.a,Ro),ur.subVectors(e.b,Ro),fr.subVectors(e.c,Ro),Va.subVectors(ur,cr),ka.subVectors(fr,ur),xs.subVectors(cr,fr);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-xs.z,xs.y,Va.z,0,-Va.x,ka.z,0,-ka.x,xs.z,0,-xs.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-xs.y,xs.x,0];return!od(i,cr,ur,fr,ac)||(i=[1,0,0,0,1,0,0,0,1],!od(i,cr,ur,fr,ac))?!1:(sc.crossVectors(Va,ka),i=[sc.x,sc.y,sc.z],od(i,cr,ur,fr,ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ia=[new K,new K,new K,new K,new K,new K,new K,new K],Mi=new K,ic=new Vo,cr=new K,ur=new K,fr=new K,Va=new K,ka=new K,xs=new K,Ro=new K,ac=new K,sc=new K,gs=new K;function od(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){gs.fromArray(o,u);const h=l.x*Math.abs(gs.x)+l.y*Math.abs(gs.y)+l.z*Math.abs(gs.z),m=e.dot(gs),p=i.dot(gs),_=s.dot(gs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Xy=new Vo,Co=new K,ld=new K;class ko{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Xy.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Co,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(ld)),this.expandByPoint(Co.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const aa=new K,cd=new K,rc=new K,Xa=new K,ud=new K,oc=new K,fd=new K;class Oh{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){cd.copy(e).add(i).multiplyScalar(.5),rc.copy(i).sub(e).normalize(),Xa.copy(this.origin).sub(cd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(rc),h=Xa.dot(this.direction),m=-Xa.dot(rc),p=Xa.lengthSq(),_=Math.abs(1-d*d);let v,S,M,T;if(_>0)if(v=d*m-h,S=d*h-m,T=u*_,v>=0)if(S>=-T)if(S<=T){const C=1/_;v*=C,S*=C,M=v*(v+d*S+2*h)+S*(d*v+S+2*m)+p}else S=u,v=Math.max(0,-(d*S+h)),M=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(d*S+h)),M=-v*v+S*(S+2*m)+p;else S<=-T?(v=Math.max(0,-(-d*u+h)),S=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p):S<=T?(v=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(v=Math.max(0,-(d*u+h)),S=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p);else S=d>0?-u:u,v=Math.max(0,-(d*S+h)),M=-v*v+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(cd).addScaledVector(rc,S),M}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const s=aa.dot(this.direction),l=aa.dot(aa)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(u=(e.min.y-S.y)*_,d=(e.max.y-S.y)*_):(u=(e.max.y-S.y)*_,d=(e.min.y-S.y)*_),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(h=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,s,l,u){ud.subVectors(i,e),oc.subVectors(s,e),fd.crossVectors(ud,oc);let d=this.direction.dot(fd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Xa.subVectors(this.origin,e);const m=h*this.direction.dot(oc.crossVectors(Xa,oc));if(m<0)return null;const p=h*this.direction.dot(ud.cross(Xa));if(p<0||m+p>d)return null;const _=-h*Xa.dot(fd);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,i,s,l,u,d,h,m,p,_,v,S,M,T,C,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p,_,v,S,M,T,C,y)}set(e,i,s,l,u,d,h,m,p,_,v,S,M,T,C,y){const g=this.elements;return g[0]=e,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=d,g[9]=h,g[13]=m,g[2]=p,g[6]=_,g[10]=v,g[14]=S,g[3]=M,g[7]=T,g[11]=C,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/dr.setFromMatrixColumn(e,0).length(),u=1/dr.setFromMatrixColumn(e,1).length(),d=1/dr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=d*_,M=d*v,T=h*_,C=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=T+M*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*_,M=m*v,T=p*_,C=p*v;i[0]=S+C*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*v,i[5]=d*_,i[9]=-h,i[2]=M*h-T,i[6]=C+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*_,M=m*v,T=p*_,C=p*v;i[0]=S-C*h,i[4]=-d*v,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*_,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*_,M=d*v,T=h*_,C=h*v;i[0]=m*_,i[4]=T*p-M,i[8]=S*p+C,i[1]=m*v,i[5]=C*p+S,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,M=d*p,T=h*m,C=h*p;i[0]=m*_,i[4]=C-S*v,i[8]=T*v+M,i[1]=v,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*v+T,i[10]=S-C*v}else if(e.order==="XZY"){const S=d*m,M=d*p,T=h*m,C=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=S*v+C,i[5]=d*_,i[9]=M*v-T,i[2]=T*v-M,i[6]=h*_,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wy,e,qy)}lookAt(e,i,s){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Wa.crossVectors(s,ii),Wa.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Wa.crossVectors(s,ii)),Wa.normalize(),lc.crossVectors(ii,Wa),l[0]=Wa.x,l[4]=lc.x,l[8]=ii.x,l[1]=Wa.y,l[5]=lc.y,l[9]=ii.y,l[2]=Wa.z,l[6]=lc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],S=s[9],M=s[13],T=s[2],C=s[6],y=s[10],g=s[14],U=s[3],D=s[7],z=s[11],H=s[15],L=l[0],P=l[4],j=l[8],w=l[12],R=l[1],V=l[5],Q=l[9],lt=l[13],pt=l[2],ft=l[6],B=l[10],W=l[14],X=l[3],_t=l[7],vt=l[11],O=l[15];return u[0]=d*L+h*R+m*pt+p*X,u[4]=d*P+h*V+m*ft+p*_t,u[8]=d*j+h*Q+m*B+p*vt,u[12]=d*w+h*lt+m*W+p*O,u[1]=_*L+v*R+S*pt+M*X,u[5]=_*P+v*V+S*ft+M*_t,u[9]=_*j+v*Q+S*B+M*vt,u[13]=_*w+v*lt+S*W+M*O,u[2]=T*L+C*R+y*pt+g*X,u[6]=T*P+C*V+y*ft+g*_t,u[10]=T*j+C*Q+y*B+g*vt,u[14]=T*w+C*lt+y*W+g*O,u[3]=U*L+D*R+z*pt+H*X,u[7]=U*P+D*V+z*ft+H*_t,u[11]=U*j+D*Q+z*B+H*vt,u[15]=U*w+D*lt+z*W+H*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],S=e[10],M=e[14],T=e[3],C=e[7],y=e[11],g=e[15];return T*(+u*m*v-l*p*v-u*h*S+s*p*S+l*h*M-s*m*M)+C*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*_-u*m*_)+y*(+i*p*v-i*h*M-u*d*v+s*d*M+u*h*_-s*p*_)+g*(-l*h*_-i*m*v+i*h*S+l*d*v-s*d*S+s*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],S=e[10],M=e[11],T=e[12],C=e[13],y=e[14],g=e[15],U=v*y*p-C*S*p+C*m*M-h*y*M-v*m*g+h*S*g,D=T*S*p-_*y*p-T*m*M+d*y*M+_*m*g-d*S*g,z=_*C*p-T*v*p+T*h*M-d*C*M-_*h*g+d*v*g,H=T*v*m-_*C*m-T*h*S+d*C*S+_*h*y-d*v*y,L=i*U+s*D+l*z+u*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=U*P,e[1]=(C*S*u-v*y*u-C*l*M+s*y*M+v*l*g-s*S*g)*P,e[2]=(h*y*u-C*m*u+C*l*p-s*y*p-h*l*g+s*m*g)*P,e[3]=(v*m*u-h*S*u-v*l*p+s*S*p+h*l*M-s*m*M)*P,e[4]=D*P,e[5]=(_*y*u-T*S*u+T*l*M-i*y*M-_*l*g+i*S*g)*P,e[6]=(T*m*u-d*y*u-T*l*p+i*y*p+d*l*g-i*m*g)*P,e[7]=(d*S*u-_*m*u+_*l*p-i*S*p-d*l*M+i*m*M)*P,e[8]=z*P,e[9]=(T*v*u-_*C*u-T*s*M+i*C*M+_*s*g-i*v*g)*P,e[10]=(d*C*u-T*h*u+T*s*p-i*C*p-d*s*g+i*h*g)*P,e[11]=(_*h*u-d*v*u-_*s*p+i*v*p+d*s*M-i*h*M)*P,e[12]=H*P,e[13]=(_*C*l-T*v*l+T*s*S-i*C*S-_*s*y+i*v*y)*P,e[14]=(T*h*l-d*C*l-T*s*m+i*C*m+d*s*y-i*h*y)*P,e[15]=(d*v*l-_*h*l+_*s*m-i*v*m-d*s*S+i*h*S)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,h=e.y,m=e.z,p=u*d,_=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,v=h+h,S=u*p,M=u*_,T=u*v,C=d*_,y=d*v,g=h*v,U=m*p,D=m*_,z=m*v,H=s.x,L=s.y,P=s.z;return l[0]=(1-(C+g))*H,l[1]=(M+z)*H,l[2]=(T-D)*H,l[3]=0,l[4]=(M-z)*L,l[5]=(1-(S+g))*L,l[6]=(y+U)*L,l[7]=0,l[8]=(T+D)*P,l[9]=(y-U)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=dr.set(l[0],l[1],l[2]).length();const d=dr.set(l[4],l[5],l[6]).length(),h=dr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const p=1/u,_=1/d,v=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=_,bi.elements[5]*=_,bi.elements[6]*=_,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,i.setFromRotationMatrix(bi),s.x=u,s.y=d,s.z=h,this}makePerspective(e,i,s,l,u,d,h=Oi,m=!1){const p=this.elements,_=2*u/(i-e),v=2*u/(s-l),S=(i+e)/(i-e),M=(s+l)/(s-l);let T,C;if(m)T=u/(d-u),C=d*u/(d-u);else if(h===Oi)T=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Nc)T=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,d,h=Oi,m=!1){const p=this.elements,_=2/(i-e),v=2/(s-l),S=-(i+e)/(i-e),M=-(s+l)/(s-l);let T,C;if(m)T=1/(d-u),C=d/(d-u);else if(h===Oi)T=-2/(d-u),C=-(d+u)/(d-u);else if(h===Nc)T=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const dr=new K,bi=new Je,Wy=new K(0,0,0),qy=new K(1,1,1),Wa=new K,lc=new K,ii=new K,Xx=new Je,Wx=new Go;class Pi{constructor(e=0,i=0,s=0,l=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Xx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Wx.setFromEuler(this),this.setFromQuaternion(Wx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class $g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yy=0;const qx=new K,hr=new Go,sa=new Je,cc=new K,wo=new K,jy=new K,Zy=new Go,Yx=new K(1,0,0),jx=new K(0,1,0),Zx=new K(0,0,1),Kx={type:"added"},Ky={type:"removed"},pr={type:"childadded",child:null},dd={type:"childremoved",child:null};class Ln extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new K,i=new Pi,s=new Go,l=new K(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new fe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return hr.setFromAxisAngle(e,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,i){return hr.setFromAxisAngle(e,i),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Yx,e)}rotateY(e){return this.rotateOnAxis(jx,e)}rotateZ(e){return this.rotateOnAxis(Zx,e)}translateOnAxis(e,i){return qx.copy(e).applyQuaternion(this.quaternion),this.position.add(qx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Yx,e)}translateY(e){return this.translateOnAxis(jx,e)}translateZ(e){return this.translateOnAxis(Zx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?cc.copy(e):cc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(wo,cc,this.up):sa.lookAt(cc,wo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(sa),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(sn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kx),pr.child=e,this.dispatchEvent(pr),pr.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ky),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kx),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,jy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,Zy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),_=d(e.images),v=d(e.shapes),S=d(e.skeletons),M=d(e.animations),T=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new K(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new K,ra=new K,hd=new K,oa=new K,mr=new K,xr=new K,Qx=new K,pd=new K,md=new K,xd=new K,gd=new ke,_d=new ke,vd=new ke;class Ti{constructor(e=new K,i=new K,s=new K){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ei.subVectors(e,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ei.subVectors(l,i),ra.subVectors(s,i),hd.subVectors(e,i);const d=Ei.dot(Ei),h=Ei.dot(ra),m=Ei.dot(hd),p=ra.dot(ra),_=ra.dot(hd),v=d*p-h*h;if(v===0)return u.set(0,0,0),null;const S=1/v,M=(p*m-h*_)*S,T=(d*_-h*m)*S;return u.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,s,l,u,d,h,m){return this.getBarycoord(e,i,s,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,oa.x),m.addScaledVector(d,oa.y),m.addScaledVector(h,oa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,d){return gd.setScalar(0),_d.setScalar(0),vd.setScalar(0),gd.fromBufferAttribute(e,i),_d.fromBufferAttribute(e,s),vd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(gd,u.x),d.addScaledVector(_d,u.y),d.addScaledVector(vd,u.z),d}static isFrontFacing(e,i,s,l){return Ei.subVectors(s,i),ra.subVectors(e,i),Ei.cross(ra).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),Ei.cross(ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ti.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,h;mr.subVectors(l,s),xr.subVectors(u,s),pd.subVectors(e,s);const m=mr.dot(pd),p=xr.dot(pd);if(m<=0&&p<=0)return i.copy(s);md.subVectors(e,l);const _=mr.dot(md),v=xr.dot(md);if(_>=0&&v<=_)return i.copy(l);const S=m*v-_*p;if(S<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(mr,d);xd.subVectors(e,u);const M=mr.dot(xd),T=xr.dot(xd);if(T>=0&&M<=T)return i.copy(u);const C=M*p-m*T;if(C<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(xr,h);const y=_*T-M*v;if(y<=0&&v-_>=0&&M-T>=0)return Qx.subVectors(u,l),h=(v-_)/(v-_+(M-T)),i.copy(l).addScaledVector(Qx,h);const g=1/(y+C+S);return d=C*g,h=S*g,i.copy(s).addScaledVector(mr,d).addScaledVector(xr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const t_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Sd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Le.workingColorSpace){if(e=By(e,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=Sd(d,u,e+1/3),this.g=Sd(d,u,e),this.b=Sd(d,u,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=xi){function s(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const s=t_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Le.workingToColorSpace(Dn.copy(this),e),Math.round(Ee(Dn.r*255,0,255))*65536+Math.round(Ee(Dn.g*255,0,255))*256+Math.round(Ee(Dn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,u=Dn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=_<=.5?v/(d+h):v/(2-d-h),d){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=xi){Le.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,s=Dn.g,l=Dn.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(qa),this.setHSL(qa.h+e,qa.s+i,qa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(qa),e.getHSL(uc);const s=nd(qa.h,uc.h,i),l=nd(qa.s,uc.s,i),u=nd(qa.l,uc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Te;Te.NAMES=t_;let Qy=0;class Cs extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=yr,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Od,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(s.blending=this.blending),this.side!==Qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Nd&&(s.blendSrc=this.blendSrc),this.blendDst!==Od&&(s.blendDst=this.blendDst),this.blendEquation!==bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Px&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class e_ extends Cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new K,fc=new Se;let Jy=0;class Ri{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Bx,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(e),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ao(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array),u=Xn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bx&&(e.usage=this.usage),e}}class n_ extends Ri{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class i_ extends Ri{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class qn extends Ri{constructor(e,i,s){super(new Float32Array(e),i,s)}}let $y=0;const mi=new Je,yd=new Ln,gr=new K,ai=new Vo,Do=new Vo,yn=new K;class Yn extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?i_:n_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new fe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,s){return mi.makeTranslation(e,i,s),this.applyMatrix4(mi),this}scale(e,i,s){return mi.makeScale(e,i,s),this.applyMatrix4(mi),this}lookAt(e){return yd.lookAt(e),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new qn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ai.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ai.min,Do.min),ai.expandByPoint(yn),yn.addVectors(ai.max,Do.max),ai.expandByPoint(yn)):(ai.expandByPoint(Do.min),ai.expandByPoint(Do.max))}ai.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)yn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)yn.fromBufferAttribute(h,p),m&&(gr.fromBufferAttribute(e,p),yn.add(gr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<s.count;j++)h[j]=new K,m[j]=new K;const p=new K,_=new K,v=new K,S=new Se,M=new Se,T=new Se,C=new K,y=new K;function g(j,w,R){p.fromBufferAttribute(s,j),_.fromBufferAttribute(s,w),v.fromBufferAttribute(s,R),S.fromBufferAttribute(u,j),M.fromBufferAttribute(u,w),T.fromBufferAttribute(u,R),_.sub(p),v.sub(p),M.sub(S),T.sub(S);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(V),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(V),h[j].add(C),h[w].add(C),h[R].add(C),m[j].add(y),m[w].add(y),m[R].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let j=0,w=U.length;j<w;++j){const R=U[j],V=R.start,Q=R.count;for(let lt=V,pt=V+Q;lt<pt;lt+=3)g(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const D=new K,z=new K,H=new K,L=new K;function P(j){H.fromBufferAttribute(l,j),L.copy(H);const w=h[j];D.copy(w),D.sub(H.multiplyScalar(H.dot(w))).normalize(),z.crossVectors(L,w);const V=z.dot(m[j])<0?-1:1;d.setXYZW(j,D.x,D.y,D.z,V)}for(let j=0,w=U.length;j<w;++j){const R=U[j],V=R.start,Q=R.count;for(let lt=V,pt=V+Q;lt<pt;lt+=3)P(e.getX(lt+0)),P(e.getX(lt+1)),P(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new K,u=new K,d=new K,h=new K,m=new K,p=new K,_=new K,v=new K;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),_.subVectors(d,u),v.subVectors(l,u),_.cross(v),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),h.add(_),m.add(_),p.add(_),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),v.subVectors(l,u),_.cross(v),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,S=new p.constructor(m.length*_);let M=0,T=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*_;for(let g=0;g<_;g++)S[T++]=p[M++]}return new Ri(S,_,v)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,v=p.length;_<v;_++){const S=p[_],M=e(S,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],v=u[p];for(let S=0,M=v.length;S<M;S++)_.push(v[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jx=new Je,_s=new Oh,dc=new ko,$x=new K,hc=new K,pc=new K,mc=new K,Md=new K,xc=new K,tg=new K,gc=new K;class ma extends Ln{constructor(e=new Yn,i=new e_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){xc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],v=u[m];_!==0&&(Md.fromBufferAttribute(v,e),d?xc.addScaledVector(Md,_):xc.addScaledVector(Md.sub(i),_))}i.add(xc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),dc.copy(s.boundingSphere),dc.applyMatrix4(u),_s.copy(e.ray).recast(e.near),!(dc.containsPoint(_s.origin)===!1&&(_s.intersectSphere(dc,$x)===null||_s.origin.distanceToSquared($x)>(e.far-e.near)**2))&&(Jx.copy(u).invert(),_s.copy(e.ray).applyMatrix4(Jx),!(s.boundingBox!==null&&_s.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,_s)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,C=S.length;T<C;T++){const y=S[T],g=d[y.materialIndex],U=Math.max(y.start,M.start),D=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let z=U,H=D;z<H;z+=3){const L=h.getX(z),P=h.getX(z+1),j=h.getX(z+2);l=_c(this,g,e,s,p,_,v,L,P,j),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=T,g=C;y<g;y+=3){const U=h.getX(y),D=h.getX(y+1),z=h.getX(y+2);l=_c(this,d,e,s,p,_,v,U,D,z),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=S.length;T<C;T++){const y=S[T],g=d[y.materialIndex],U=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let z=U,H=D;z<H;z+=3){const L=z,P=z+1,j=z+2;l=_c(this,g,e,s,p,_,v,L,P,j),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=T,g=C;y<g;y+=3){const U=y,D=y+1,z=y+2;l=_c(this,d,e,s,p,_,v,U,D,z),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function tM(o,e,i,s,l,u,d,h){let m;if(e.side===Wn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,e.side===Qa,h),m===null)return null;gc.copy(h),gc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(gc);return p<i.near||p>i.far?null:{distance:p,point:gc.clone(),object:o}}function _c(o,e,i,s,l,u,d,h,m,p){o.getVertexPosition(h,hc),o.getVertexPosition(m,pc),o.getVertexPosition(p,mc);const _=tM(o,e,i,s,hc,pc,mc,tg);if(_){const v=new K;Ti.getBarycoord(tg,hc,pc,mc,v),l&&(_.uv=Ti.getInterpolatedAttribute(l,h,m,p,v,new Se)),u&&(_.uv1=Ti.getInterpolatedAttribute(u,h,m,p,v,new Se)),d&&(_.normal=Ti.getInterpolatedAttribute(d,h,m,p,v,new K),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new K,materialIndex:0};Ti.getNormal(hc,pc,mc,S.normal),_.face=S,_.barycoord=v}return _}class Xo extends Yn{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],v=[];let S=0,M=0;T("z","y","x",-1,-1,s,i,e,d,u,0),T("z","y","x",1,-1,s,i,-e,d,u,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,u,4),T("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new qn(p,3)),this.setAttribute("normal",new qn(_,3)),this.setAttribute("uv",new qn(v,2));function T(C,y,g,U,D,z,H,L,P,j,w){const R=z/P,V=H/j,Q=z/2,lt=H/2,pt=L/2,ft=P+1,B=j+1;let W=0,X=0;const _t=new K;for(let vt=0;vt<B;vt++){const O=vt*V-lt;for(let $=0;$<ft;$++){const yt=$*R-Q;_t[C]=yt*U,_t[y]=O*D,_t[g]=pt,p.push(_t.x,_t.y,_t.z),_t[C]=0,_t[y]=0,_t[g]=L>0?1:-1,_.push(_t.x,_t.y,_t.z),v.push($/P),v.push(1-vt/j),W+=1}}for(let vt=0;vt<j;vt++)for(let O=0;O<P;O++){const $=S+O+ft*vt,yt=S+O+ft*(vt+1),Tt=S+(O+1)+ft*(vt+1),zt=S+(O+1)+ft*vt;m.push($,yt,zt),m.push(yt,Tt,zt),X+=6}h.addGroup(M,X,w),M+=X,S+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const s=Rr(o[i]);for(const l in s)e[l]=s[l]}return e}function eM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function a_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const nM={clone:Rr,merge:On};var iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xa extends Cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=aM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=eM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class s_ extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new K,eg=new Se,ng=new Se;class si extends s_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Sh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z)}getViewSize(e,i){return this.getViewBounds(e,eg,ng),i.subVectors(ng,eg)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ed*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _r=-90,vr=1;class sM extends Ln{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(_r,vr,e,i);l.layers=this.layers,this.add(l);const u=new si(_r,vr,e,i);u.layers=this.layers,this.add(u);const d=new si(_r,vr,e,i);d.layers=this.layers,this.add(d);const h=new si(_r,vr,e,i);h.layers=this.layers,this.add(h);const m=new si(_r,vr,e,i);m.layers=this.layers,this.add(m);const p=new si(_r,vr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Nc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(v,S,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class r_ extends zn{constructor(e=[],i=Er,s,l,u,d,h,m,p,_){super(e,i,s,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rM extends Rs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new r_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Xo(5,5,5),u=new xa({name:"CubemapFromEquirect",uniforms:Rr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ha});u.uniforms.tEquirect.value=i;const d=new ma(l,u),h=i.minFilter;return i.minFilter===Ts&&(i.minFilter=gi),new sM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}class vc extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oM={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),g=this._getHandJoint(p,C);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=_.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(oM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new vc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class zh{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=i,this.far=s}clone(){return new zh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let lM=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};class cM extends zn{constructor(e=null,i=1,s=1,l,u,d,h,m,p=ri,_=ri,v,S){super(null,d,h,m,p,_,l,u,v,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new K,uM=new K,fM=new fe;class Ms{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Ed.subVectors(s,i).cross(uM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Ed),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||fM.getNormalMatrix(e),l=this.coplanarPoint(Ed).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new ko,dM=new Se(.5,.5),Sc=new K;class Ph{constructor(e=new Ms,i=new Ms,s=new Ms,l=new Ms,u=new Ms,d=new Ms){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Oi,s=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],v=u[5],S=u[6],M=u[7],T=u[8],C=u[9],y=u[10],g=u[11],U=u[12],D=u[13],z=u[14],H=u[15];if(l[0].setComponents(p-d,M-_,g-T,H-U).normalize(),l[1].setComponents(p+d,M+_,g+T,H+U).normalize(),l[2].setComponents(p+h,M+v,g+C,H+D).normalize(),l[3].setComponents(p-h,M-v,g-C,H-D).normalize(),s)l[4].setComponents(m,S,y,z).normalize(),l[5].setComponents(p-m,M-S,g-y,H-z).normalize();else if(l[4].setComponents(p-m,M-S,g-y,H-z).normalize(),i===Oi)l[5].setComponents(p+m,M+S,g+y,H+z).normalize();else if(i===Nc)l[5].setComponents(m,S,y,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const i=dM.distanceTo(e.center);return vs.radius=.7071067811865476+i,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Sc.x=l.normal.x>0?e.max.x:e.min.x,Sc.y=l.normal.y>0?e.max.y:e.min.y,Sc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class o_ extends Cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new K,Pc=new K,ig=new Je,Uo=new Oh,yc=new ko,Td=new K,ag=new K;class hM extends Ln{constructor(e=new Yn,i=new o_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)zc.fromBufferAttribute(i,l-1),Pc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=zc.distanceTo(Pc);e.setAttribute("lineDistance",new qn(s,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(l),yc.radius+=u,e.ray.intersectsSphere(yc)===!1)return;ig.copy(l).invert(),Uo.copy(e.ray).applyMatrix4(ig);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=s.index,S=s.attributes.position;if(_!==null){const M=Math.max(0,d.start),T=Math.min(_.count,d.start+d.count);for(let C=M,y=T-1;C<y;C+=p){const g=_.getX(C),U=_.getX(C+1),D=Mc(this,e,Uo,m,g,U,C);D&&i.push(D)}if(this.isLineLoop){const C=_.getX(T-1),y=_.getX(M),g=Mc(this,e,Uo,m,C,y,T-1);g&&i.push(g)}}else{const M=Math.max(0,d.start),T=Math.min(S.count,d.start+d.count);for(let C=M,y=T-1;C<y;C+=p){const g=Mc(this,e,Uo,m,C,C+1,C);g&&i.push(g)}if(this.isLineLoop){const C=Mc(this,e,Uo,m,T-1,M,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Mc(o,e,i,s,l,u,d){const h=o.geometry.attributes.position;if(zc.fromBufferAttribute(h,l),Pc.fromBufferAttribute(h,u),i.distanceSqToSegment(zc,Pc,Td,ag)>s)return;Td.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Td);if(!(p<e.near||p>e.far))return{distance:p,point:ag.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const sg=new K,rg=new K;class pM extends hM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)sg.fromBufferAttribute(i,l),rg.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+sg.distanceTo(rg);e.setAttribute("lineDistance",new qn(s,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yh extends Cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const og=new Je,Mh=new Oh,bc=new ko,Ec=new K;class lg extends Ln{constructor(e=new Yn,i=new yh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(l),bc.radius+=u,e.ray.intersectsSphere(bc)===!1)return;og.copy(l).invert(),Mh.copy(e.ray).applyMatrix4(og);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,v=s.attributes.position;if(p!==null){const S=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let T=S,C=M;T<C;T++){const y=p.getX(T);Ec.fromBufferAttribute(v,y),cg(Ec,y,m,l,e,i,this)}}else{const S=Math.max(0,d.start),M=Math.min(v.count,d.start+d.count);for(let T=S,C=M;T<C;T++)Ec.fromBufferAttribute(v,T),cg(Ec,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function cg(o,e,i,s,l,u,d){const h=Mh.distanceSqToPoint(o);if(h<i){const m=new K;Mh.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class l_ extends zn{constructor(e,i,s=As,l,u,d,h=ri,m=ri,p,_=Bo,v=1){if(_!==Bo&&_!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,u,d,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class c_ extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bh extends Yn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const u=[],d=[];h(l),p(s),_(),this.setAttribute("position",new qn(u,3)),this.setAttribute("normal",new qn(u.slice(),3)),this.setAttribute("uv",new qn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(U){const D=new K,z=new K,H=new K;for(let L=0;L<i.length;L+=3)M(i[L+0],D),M(i[L+1],z),M(i[L+2],H),m(D,z,H,U)}function m(U,D,z,H){const L=H+1,P=[];for(let j=0;j<=L;j++){P[j]=[];const w=U.clone().lerp(z,j/L),R=D.clone().lerp(z,j/L),V=L-j;for(let Q=0;Q<=V;Q++)Q===0&&j===L?P[j][Q]=w:P[j][Q]=w.clone().lerp(R,Q/V)}for(let j=0;j<L;j++)for(let w=0;w<2*(L-j)-1;w++){const R=Math.floor(w/2);w%2===0?(S(P[j][R+1]),S(P[j+1][R]),S(P[j][R])):(S(P[j][R+1]),S(P[j+1][R+1]),S(P[j+1][R]))}}function p(U){const D=new K;for(let z=0;z<u.length;z+=3)D.x=u[z+0],D.y=u[z+1],D.z=u[z+2],D.normalize().multiplyScalar(U),u[z+0]=D.x,u[z+1]=D.y,u[z+2]=D.z}function _(){const U=new K;for(let D=0;D<u.length;D+=3){U.x=u[D+0],U.y=u[D+1],U.z=u[D+2];const z=y(U)/2/Math.PI+.5,H=g(U)/Math.PI+.5;d.push(z,1-H)}T(),v()}function v(){for(let U=0;U<d.length;U+=6){const D=d[U+0],z=d[U+2],H=d[U+4],L=Math.max(D,z,H),P=Math.min(D,z,H);L>.9&&P<.1&&(D<.2&&(d[U+0]+=1),z<.2&&(d[U+2]+=1),H<.2&&(d[U+4]+=1))}}function S(U){u.push(U.x,U.y,U.z)}function M(U,D){const z=U*3;D.x=e[z+0],D.y=e[z+1],D.z=e[z+2]}function T(){const U=new K,D=new K,z=new K,H=new K,L=new Se,P=new Se,j=new Se;for(let w=0,R=0;w<u.length;w+=9,R+=6){U.set(u[w+0],u[w+1],u[w+2]),D.set(u[w+3],u[w+4],u[w+5]),z.set(u[w+6],u[w+7],u[w+8]),L.set(d[R+0],d[R+1]),P.set(d[R+2],d[R+3]),j.set(d[R+4],d[R+5]),H.copy(U).add(D).add(z).divideScalar(3);const V=y(H);C(L,R+0,U,V),C(P,R+2,D,V),C(j,R+4,z,V)}}function C(U,D,z,H){H<0&&U.x===1&&(d[D]=U.x-1),z.x===0&&z.z===0&&(d[D]=H/2/Math.PI+.5)}function y(U){return Math.atan2(U.z,-U.x)}function g(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bh(e.vertices,e.indices,e.radius,e.details)}}class Ih extends Bh{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Ih(e.radius,e.detail)}}class Ic extends Yn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=e/h,S=i/m,M=[],T=[],C=[],y=[];for(let g=0;g<_;g++){const U=g*S-d;for(let D=0;D<p;D++){const z=D*v-u;T.push(z,-U,0),C.push(0,0,1),y.push(D/h),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let U=0;U<h;U++){const D=U+p*g,z=U+p*(g+1),H=U+1+p*(g+1),L=U+1+p*g;M.push(D,z,L),M.push(z,H,L)}this.setIndex(M),this.setAttribute("position",new qn(T,3)),this.setAttribute("normal",new qn(C,3)),this.setAttribute("uv",new qn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.width,e.height,e.widthSegments,e.heightSegments)}}class mM extends Cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zg,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xM extends Cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gM extends Cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class u_ extends Ln{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ad=new Je,ug=new K,fg=new K;class _M{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;ug.setFromMatrixPosition(e.matrixWorld),i.position.copy(ug),fg.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(fg),i.updateMatrixWorld(),Ad.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dg=new Je,Lo=new K,Rd=new K;class vM extends _M{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Lo.setFromMatrixPosition(e.matrixWorld),s.position.copy(Lo),Rd.copy(s.position),Rd.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Rd),s.updateMatrixWorld(),l.makeTranslation(-Lo.x,-Lo.y,-Lo.z),dg.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dg,s.coordinateSystem,s.reversedDepth)}}class hg extends u_{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new vM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class SM extends s_{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yM extends u_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class MM extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function pg(o,e,i,s){const l=EM(s);switch(i){case qg:return o*e;case jg:return o*e/l.components*l.byteLength;case wh:return o*e/l.components*l.byteLength;case Dh:return o*e*2/l.components*l.byteLength;case Uh:return o*e*2/l.components*l.byteLength;case Yg:return o*e*3/l.components*l.byteLength;case Ai:return o*e*4/l.components*l.byteLength;case Lh:return o*e*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yd:case Zd:return Math.max(o,16)*Math.max(e,8)/4;case qd:case jd:return Math.max(o,8)*Math.max(e,8)/2;case Kd:case Qd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case nh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ih:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ah:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case lh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ch:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case hh:case ph:case mh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case xh:case gh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case _h:case vh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function EM(o){switch(o){case zi:case Vg:return{byteLength:1,components:1};case zo:case kg:case Cr:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case As:case Ah:case da:return{byteLength:4,components:1};case Xg:case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);function f_(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function TM(o){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,_);else{v.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<v.length;M++){const T=v[S],C=v[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++S,v[S]=C)}v.length=S+1;for(let M=0,T=v.length;M<T;M++){const C=v[M];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var AM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ab=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_b=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Eb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,u1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,K1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,i3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:AM,alphahash_pars_fragment:RM,alphamap_fragment:CM,alphamap_pars_fragment:wM,alphatest_fragment:DM,alphatest_pars_fragment:UM,aomap_fragment:LM,aomap_pars_fragment:NM,batching_pars_vertex:OM,batching_vertex:zM,begin_vertex:PM,beginnormal_vertex:BM,bsdfs:IM,iridescence_fragment:FM,bumpmap_pars_fragment:HM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:VM,clipping_planes_pars_vertex:kM,clipping_planes_vertex:XM,color_fragment:WM,color_pars_fragment:qM,color_pars_vertex:YM,color_vertex:jM,common:ZM,cube_uv_reflection_fragment:KM,defaultnormal_vertex:QM,displacementmap_pars_vertex:JM,displacementmap_vertex:$M,emissivemap_fragment:tb,emissivemap_pars_fragment:eb,colorspace_fragment:nb,colorspace_pars_fragment:ib,envmap_fragment:ab,envmap_common_pars_fragment:sb,envmap_pars_fragment:rb,envmap_pars_vertex:ob,envmap_physical_pars_fragment:_b,envmap_vertex:lb,fog_vertex:cb,fog_pars_vertex:ub,fog_fragment:fb,fog_pars_fragment:db,gradientmap_pars_fragment:hb,lightmap_pars_fragment:pb,lights_lambert_fragment:mb,lights_lambert_pars_fragment:xb,lights_pars_begin:gb,lights_toon_fragment:vb,lights_toon_pars_fragment:Sb,lights_phong_fragment:yb,lights_phong_pars_fragment:Mb,lights_physical_fragment:bb,lights_physical_pars_fragment:Eb,lights_fragment_begin:Tb,lights_fragment_maps:Ab,lights_fragment_end:Rb,logdepthbuf_fragment:Cb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Db,logdepthbuf_vertex:Ub,map_fragment:Lb,map_pars_fragment:Nb,map_particle_fragment:Ob,map_particle_pars_fragment:zb,metalnessmap_fragment:Pb,metalnessmap_pars_fragment:Bb,morphinstance_vertex:Ib,morphcolor_vertex:Fb,morphnormal_vertex:Hb,morphtarget_pars_vertex:Gb,morphtarget_vertex:Vb,normal_fragment_begin:kb,normal_fragment_maps:Xb,normal_pars_fragment:Wb,normal_pars_vertex:qb,normal_vertex:Yb,normalmap_pars_fragment:jb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:Kb,clearcoat_pars_fragment:Qb,iridescence_pars_fragment:Jb,opaque_fragment:$b,packing:t1,premultiplied_alpha_fragment:e1,project_vertex:n1,dithering_fragment:i1,dithering_pars_fragment:a1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:o1,shadowmap_pars_vertex:l1,shadowmap_vertex:c1,shadowmask_pars_fragment:u1,skinbase_vertex:f1,skinning_pars_vertex:d1,skinning_vertex:h1,skinnormal_vertex:p1,specularmap_fragment:m1,specularmap_pars_fragment:x1,tonemapping_fragment:g1,tonemapping_pars_fragment:_1,transmission_fragment:v1,transmission_pars_fragment:S1,uv_pars_fragment:y1,uv_pars_vertex:M1,uv_vertex:b1,worldpos_vertex:E1,background_vert:T1,background_frag:A1,backgroundCube_vert:R1,backgroundCube_frag:C1,cube_vert:w1,cube_frag:D1,depth_vert:U1,depth_frag:L1,distanceRGBA_vert:N1,distanceRGBA_frag:O1,equirect_vert:z1,equirect_frag:P1,linedashed_vert:B1,linedashed_frag:I1,meshbasic_vert:F1,meshbasic_frag:H1,meshlambert_vert:G1,meshlambert_frag:V1,meshmatcap_vert:k1,meshmatcap_frag:X1,meshnormal_vert:W1,meshnormal_frag:q1,meshphong_vert:Y1,meshphong_frag:j1,meshphysical_vert:Z1,meshphysical_frag:K1,meshtoon_vert:Q1,meshtoon_frag:J1,points_vert:$1,points_frag:t3,shadow_vert:e3,shadow_frag:n3,sprite_vert:i3,sprite_frag:a3},Nt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ni={basic:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:On([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:On([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:On([Nt.points,Nt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:On([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:On([Nt.common,Nt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:On([Nt.sprite,Nt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:On([Nt.common,Nt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:On([Nt.lights,Nt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Ni.physical={uniforms:On([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Tc={r:0,b:0,g:0},Ss=new Pi,s3=new Je;function r3(o,e,i,s,l,u,d){const h=new Te(0);let m=u===!0?0:1,p,_,v=null,S=0,M=null;function T(D){let z=D.isScene===!0?D.background:null;return z&&z.isTexture&&(z=(D.backgroundBlurriness>0?i:e).get(z)),z}function C(D){let z=!1;const H=T(D);H===null?g(h,m):H&&H.isColor&&(g(H,1),z=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?s.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||z)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(D,z){const H=T(z);H&&(H.isCubeTexture||H.mapping===Bc)?(_===void 0&&(_=new ma(new Xo(1,1,1),new xa({name:"BackgroundCubeMaterial",uniforms:Rr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(L,P,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ss.copy(z.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(s3.makeRotationFromEuler(Ss)),_.material.toneMapped=Le.getTransfer(H.colorSpace)!==Ve,(v!==H||S!==H.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=H,S=H.version,M=o.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new ma(new Ic(2,2),new xa({name:"BackgroundMaterial",uniforms:Rr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Le.getTransfer(H.colorSpace)!==Ve,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||S!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=H,S=H.version,M=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function g(D,z){D.getRGB(Tc,a_(o)),s.buffers.color.setClear(Tc.r,Tc.g,Tc.b,z,d)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,z=1){h.set(D),m=z,g(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,g(h,m)},render:C,addToRenderList:y,dispose:U}}function o3(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,d=!1;function h(R,V,Q,lt,pt){let ft=!1;const B=v(lt,Q,V);u!==B&&(u=B,p(u.object)),ft=M(R,lt,Q,pt),ft&&T(R,lt,Q,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(ft||d)&&(d=!1,z(R,V,Q,lt),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function v(R,V,Q){const lt=Q.wireframe===!0;let pt=s[R.id];pt===void 0&&(pt={},s[R.id]=pt);let ft=pt[V.id];ft===void 0&&(ft={},pt[V.id]=ft);let B=ft[lt];return B===void 0&&(B=S(m()),ft[lt]=B),B}function S(R){const V=[],Q=[],lt=[];for(let pt=0;pt<i;pt++)V[pt]=0,Q[pt]=0,lt[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:lt,object:R,attributes:{},index:null}}function M(R,V,Q,lt){const pt=u.attributes,ft=V.attributes;let B=0;const W=Q.getAttributes();for(const X in W)if(W[X].location>=0){const vt=pt[X];let O=ft[X];if(O===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),vt===void 0||vt.attribute!==O||O&&vt.data!==O.data)return!0;B++}return u.attributesNum!==B||u.index!==lt}function T(R,V,Q,lt){const pt={},ft=V.attributes;let B=0;const W=Q.getAttributes();for(const X in W)if(W[X].location>=0){let vt=ft[X];vt===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(vt=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(vt=R.instanceColor));const O={};O.attribute=vt,vt&&vt.data&&(O.data=vt.data),pt[X]=O,B++}u.attributes=pt,u.attributesNum=B,u.index=lt}function C(){const R=u.newAttributes;for(let V=0,Q=R.length;V<Q;V++)R[V]=0}function y(R){g(R,0)}function g(R,V){const Q=u.newAttributes,lt=u.enabledAttributes,pt=u.attributeDivisors;Q[R]=1,lt[R]===0&&(o.enableVertexAttribArray(R),lt[R]=1),pt[R]!==V&&(o.vertexAttribDivisor(R,V),pt[R]=V)}function U(){const R=u.newAttributes,V=u.enabledAttributes;for(let Q=0,lt=V.length;Q<lt;Q++)V[Q]!==R[Q]&&(o.disableVertexAttribArray(Q),V[Q]=0)}function D(R,V,Q,lt,pt,ft,B){B===!0?o.vertexAttribIPointer(R,V,Q,pt,ft):o.vertexAttribPointer(R,V,Q,lt,pt,ft)}function z(R,V,Q,lt){C();const pt=lt.attributes,ft=Q.getAttributes(),B=V.defaultAttributeValues;for(const W in ft){const X=ft[W];if(X.location>=0){let _t=pt[W];if(_t===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor)),_t!==void 0){const vt=_t.normalized,O=_t.itemSize,$=e.get(_t);if($===void 0)continue;const yt=$.buffer,Tt=$.type,zt=$.bytesPerElement,st=Tt===o.INT||Tt===o.UNSIGNED_INT||_t.gpuType===Ah;if(_t.isInterleavedBufferAttribute){const ut=_t.data,wt=ut.stride,Ht=_t.offset;if(ut.isInstancedInterleavedBuffer){for(let Xt=0;Xt<X.locationSize;Xt++)g(X.location+Xt,ut.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Xt=0;Xt<X.locationSize;Xt++)y(X.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Xt=0;Xt<X.locationSize;Xt++)D(X.location+Xt,O/X.locationSize,Tt,vt,wt*zt,(Ht+O/X.locationSize*Xt)*zt,st)}else{if(_t.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)g(X.location+ut,_t.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ut=0;ut<X.locationSize;ut++)y(X.location+ut);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ut=0;ut<X.locationSize;ut++)D(X.location+ut,O/X.locationSize,Tt,vt,O*zt,O/X.locationSize*ut*zt,st)}}else if(B!==void 0){const vt=B[W];if(vt!==void 0)switch(vt.length){case 2:o.vertexAttrib2fv(X.location,vt);break;case 3:o.vertexAttrib3fv(X.location,vt);break;case 4:o.vertexAttrib4fv(X.location,vt);break;default:o.vertexAttrib1fv(X.location,vt)}}}}U()}function H(){j();for(const R in s){const V=s[R];for(const Q in V){const lt=V[Q];for(const pt in lt)_(lt[pt].object),delete lt[pt];delete V[Q]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const Q in V){const lt=V[Q];for(const pt in lt)_(lt[pt].object),delete lt[pt];delete V[Q]}delete s[R.id]}function P(R){for(const V in s){const Q=s[V];if(Q[R.id]===void 0)continue;const lt=Q[R.id];for(const pt in lt)_(lt[pt].object),delete lt[pt];delete Q[R.id]}}function j(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:U}}function l3(o,e,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function d(p,_,v){v!==0&&(o.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function h(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=_[T];i.update(M,s,1)}function m(p,_,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)d(p[T],_[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,v);let T=0;for(let C=0;C<v;C++)T+=_[C]*S[C];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function c3(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Ai&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const j=P===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==zi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==da&&!j)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(re("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),z=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,L=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:z,vertexTextures:H,maxSamples:L}}function u3(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new Ms,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||s!==0||l;return l=S,s=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,M){const T=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,g=o.get(v);if(!l||T===null||T.length===0||u&&!y)u?_(null):p();else{const U=u?0:s,D=U*4;let z=g.clippingState||null;m.value=z,z=_(T,S,D,M);for(let H=0;H!==D;++H)z[H]=i[H];g.clippingState=z,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,S,M,T){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,T!==!0||y===null){const g=M+C*4,U=S.matrixWorldInverse;h.getNormalMatrix(U),(y===null||y.length<g)&&(y=new Float32Array(g));for(let D=0,z=M;D!==C;++D,z+=4)d.copy(v[D]).applyMatrix4(U,h),d.normal.toArray(y,z),y[z+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function f3(o){let e=new WeakMap;function i(d,h){return h===Vd?d.mapping=Er:h===kd&&(d.mapping=Tr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Vd||h===kd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new rM(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Za=4,mg=[.125,.215,.35,.446,.526,.582],Es=20,d3=256,No=new SM,xg=new Te;let Cd=null,wd=0,Dd=0,Ud=!1;const h3=new K;class gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=h3}=u;Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,wd,Dd),this._renderer.xr.enabled=Ud,e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Cr,format:Ai,colorSpace:Ar,depthBuffer:!1},l=_g(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=p3(u)),this._blurMaterial=x3(u,e,i),this._ggxMaterial=m3(u,e,i)}return l}_compileMaterial(e){const i=new ma(new Yn,e);this._renderer.compile(i,No)}_sceneToCubeUV(e,i,s,l,u){const m=new si(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(xg),v.toneMapping=Ka,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ma(new Xo,new e_({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let g=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,g=!0):(y.color.copy(xg),g=!0);for(let D=0;D<6;D++){const z=D%3;z===0?(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[D],u.y,u.z)):z===1?(m.up.set(0,0,p[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[D],u.z)):(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[D]));const H=this._cubeSize;Sr(l,z*H,D>2?H:0,H,H),v.setRenderTarget(l),g&&v.render(C,m),v.render(e,m)}v.toneMapping=M,v.autoClear=S,e.background=U}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Er||e.mapping===Tr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Sr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,No)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),S=.05+p*.95,M=v*S,{_lodMax:T}=this,C=this._sizeLods[s],y=3*C*(s>T-Za?s-T+Za:0),g=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,Sr(u,y,g,3*C,2*C),l.setRenderTarget(u),l.render(h,No),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-s,Sr(e,y,g,3*C,2*C),l.setRenderTarget(e),l.render(h,No)}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const S=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Es-1),C=u/T,y=isFinite(u)?1+Math.floor(_*C):Es;y>Es&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Es}`);const g=[];let U=0;for(let P=0;P<Es;++P){const j=P/C,w=Math.exp(-j*j/2);g.push(w),P===0?U+=w:P<y&&(U+=2*w)}for(let P=0;P<g.length;P++)g[P]=g[P]/U;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=g,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:D}=this;S.dTheta.value=T,S.mipInt.value=D-s;const z=this._sizeLods[l],H=3*z*(l>D-Za?l-D+Za:0),L=4*(this._cubeSize-z);Sr(i,H,L,3*z,2*z),m.setRenderTarget(i),m.render(v,No)}}function p3(o){const e=[],i=[],s=[];let l=o;const u=o-Za+1+mg.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-Za?m=mg[d-o+Za-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,S=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,T=6,C=3,y=2,g=1,U=new Float32Array(C*T*M),D=new Float32Array(y*T*M),z=new Float32Array(g*T*M);for(let L=0;L<M;L++){const P=L%3*2/3-1,j=L>2?0:-1,w=[P,j,0,P+2/3,j,0,P+2/3,j+1,0,P,j,0,P+2/3,j+1,0,P,j+1,0];U.set(w,C*T*L),D.set(S,y*T*L);const R=[L,L,L,L,L,L];z.set(R,g*T*L)}const H=new Yn;H.setAttribute("position",new Ri(U,C)),H.setAttribute("uv",new Ri(D,y)),H.setAttribute("faceIndex",new Ri(z,g)),s.push(new ma(H,null)),l>Za&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function _g(o,e,i){const s=new Rs(o,e,i);return s.texture.mapping=Bc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Sr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function m3(o,e,i){return new xa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:d3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function x3(o,e,i){const s=new Float32Array(Es),l=new K(0,1,0);return new xa({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function vg(){return new xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Sg(){return new xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g3(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Vd||m===kd,_=m===Er||m===Tr;if(p||_){let v=e.get(h);const S=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new gg(o)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new gg(o)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function _3(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Fo("WebGLRenderer: "+s+" extension not supported."),l}}}function v3(o,e,i,s){const l={},u=new WeakMap;function d(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(v,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(v){const S=[],M=v.index,T=v.attributes.position;let C=0;if(M!==null){const U=M.array;C=M.version;for(let D=0,z=U.length;D<z;D+=3){const H=U[D+0],L=U[D+1],P=U[D+2];S.push(H,L,L,P,P,H)}}else if(T!==void 0){const U=T.array;C=T.version;for(let D=0,z=U.length/3-1;D<z;D+=3){const H=D+0,L=D+1,P=D+2;S.push(H,L,L,P,P,H)}}else return;const y=new(Qg(S)?i_:n_)(S,1);y.version=C;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const S=u.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function S3(o,e,i){let s;function l(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*d),i.update(M,s,1)}function p(S,M,T){T!==0&&(o.drawElementsInstanced(s,M,u,S*d,T),i.update(M,s,T))}function _(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,T);let y=0;for(let g=0;g<T;g++)y+=M[g];i.update(y,s,1)}function v(S,M,T,C){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<S.length;g++)p(S[g]/d,M[g],C[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,C,0,T);let g=0;for(let U=0;U<T;U++)g+=M[U]*C[U];i.update(g,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function y3(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:sn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function M3(o,e,i){const s=new WeakMap,l=new ke;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let S=s.get(h);if(S===void 0||S.count!==v){let R=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let z=0;T===!0&&(z=1),C===!0&&(z=2),y===!0&&(z=3);let H=h.attributes.position.count*z,L=1;H>e.maxTextureSize&&(L=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const P=new Float32Array(H*L*4*v),j=new Jg(P,H,L,v);j.type=da,j.needsUpdate=!0;const w=z*4;for(let V=0;V<v;V++){const Q=g[V],lt=U[V],pt=D[V],ft=H*L*4*V;for(let B=0;B<Q.count;B++){const W=B*w;T===!0&&(l.fromBufferAttribute(Q,B),P[ft+W+0]=l.x,P[ft+W+1]=l.y,P[ft+W+2]=l.z,P[ft+W+3]=0),C===!0&&(l.fromBufferAttribute(lt,B),P[ft+W+4]=l.x,P[ft+W+5]=l.y,P[ft+W+6]=l.z,P[ft+W+7]=0),y===!0&&(l.fromBufferAttribute(pt,B),P[ft+W+8]=l.x,P[ft+W+9]=l.y,P[ft+W+10]=l.z,P[ft+W+11]=pt.itemSize===4?l.w:1)}}S={count:v,texture:j,size:new Se(H,L)},s.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const C=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function b3(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const d_=new zn,yg=new l_(1,1),h_=new Jg,p_=new ky,m_=new r_,Mg=[],bg=[],Eg=new Float32Array(16),Tg=new Float32Array(9),Ag=new Float32Array(4);function Dr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=Mg[l];if(u===void 0&&(u=new Float32Array(l),Mg[l]=u),e!==0){s.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function xn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Hc(o,e){let i=bg[e];i===void 0&&(i=new Int32Array(e),bg[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function E3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function T3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),xn(i,e)}}function A3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),xn(i,e)}}function R3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),xn(i,e)}}function C3(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,s))return;Ag.set(s),o.uniformMatrix2fv(this.addr,!1,Ag),xn(i,s)}}function w3(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,s))return;Tg.set(s),o.uniformMatrix3fv(this.addr,!1,Tg),xn(i,s)}}function D3(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,s))return;Eg.set(s),o.uniformMatrix4fv(this.addr,!1,Eg),xn(i,s)}}function U3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function L3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),xn(i,e)}}function N3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),xn(i,e)}}function O3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),xn(i,e)}}function z3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function P3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),xn(i,e)}}function B3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),xn(i,e)}}function I3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),xn(i,e)}}function F3(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(yg.compareFunction=Kg,u=yg):u=d_,i.setTexture2D(e||u,l)}function H3(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||p_,l)}function G3(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||m_,l)}function V3(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||h_,l)}function k3(o){switch(o){case 5126:return E3;case 35664:return T3;case 35665:return A3;case 35666:return R3;case 35674:return C3;case 35675:return w3;case 35676:return D3;case 5124:case 35670:return U3;case 35667:case 35671:return L3;case 35668:case 35672:return N3;case 35669:case 35673:return O3;case 5125:return z3;case 36294:return P3;case 36295:return B3;case 36296:return I3;case 35678:case 36198:case 36298:case 36306:case 35682:return F3;case 35679:case 36299:case 36307:return H3;case 35680:case 36300:case 36308:case 36293:return G3;case 36289:case 36303:case 36311:case 36292:return V3}}function X3(o,e){o.uniform1fv(this.addr,e)}function W3(o,e){const i=Dr(e,this.size,2);o.uniform2fv(this.addr,i)}function q3(o,e){const i=Dr(e,this.size,3);o.uniform3fv(this.addr,i)}function Y3(o,e){const i=Dr(e,this.size,4);o.uniform4fv(this.addr,i)}function j3(o,e){const i=Dr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Z3(o,e){const i=Dr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function K3(o,e){const i=Dr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Q3(o,e){o.uniform1iv(this.addr,e)}function J3(o,e){o.uniform2iv(this.addr,e)}function $3(o,e){o.uniform3iv(this.addr,e)}function tE(o,e){o.uniform4iv(this.addr,e)}function eE(o,e){o.uniform1uiv(this.addr,e)}function nE(o,e){o.uniform2uiv(this.addr,e)}function iE(o,e){o.uniform3uiv(this.addr,e)}function aE(o,e){o.uniform4uiv(this.addr,e)}function sE(o,e,i){const s=this.cache,l=e.length,u=Hc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||d_,u[d])}function rE(o,e,i){const s=this.cache,l=e.length,u=Hc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||p_,u[d])}function oE(o,e,i){const s=this.cache,l=e.length,u=Hc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||m_,u[d])}function lE(o,e,i){const s=this.cache,l=e.length,u=Hc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||h_,u[d])}function cE(o){switch(o){case 5126:return X3;case 35664:return W3;case 35665:return q3;case 35666:return Y3;case 35674:return j3;case 35675:return Z3;case 35676:return K3;case 5124:case 35670:return Q3;case 35667:case 35671:return J3;case 35668:case 35672:return $3;case 35669:case 35673:return tE;case 5125:return eE;case 36294:return nE;case 36295:return iE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return sE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return lE}}class uE{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=k3(i.type)}}class fE{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cE(i.type)}}class dE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function Rg(o,e){o.seq.push(e),o.map[e.id]=e}function hE(o,e,i){const s=o.name,l=s.length;for(Ld.lastIndex=0;;){const u=Ld.exec(s),d=Ld.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Rg(i,p===void 0?new uE(h,o,e):new fE(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new dE(h),Rg(i,v)),i=v}}}class Uc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);hE(u,d,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Cg(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const pE=37297;let mE=0;function xE(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const wg=new fe;function gE(o){Le._getMatrix(wg,Le.workingColorSpace,o);const e=`mat3( ${wg.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case Lc:return[e,"LinearTransferOETF"];case Ve:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Dg(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+xE(o.getShaderSource(e),h)}else return u}function _E(o,e){const i=gE(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function vE(o,e){let i;switch(e){case gy:i="Linear";break;case _y:i="Reinhard";break;case vy:i="Cineon";break;case Sy:i="ACESFilmic";break;case My:i="AgX";break;case by:i="Neutral";break;case yy:i="Custom";break;default:re("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new K;function SE(){Le.getLuminanceCoefficients(Ac);const o=Ac.x.toFixed(4),e=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function ME(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function bE(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Oo(o){return o!==""}function Ug(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EE=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(o){return o.replace(EE,AE)}const TE=new Map;function AE(o,e){let i=pe[e];if(i===void 0){const s=TE.get(e);if(s!==void 0)i=pe[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return bh(i)}const RE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ng(o){return o.replace(RE,CE)}function CE(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Og(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Fg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===KS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ca&&(e="SHADOWMAP_TYPE_VSM"),e}function DE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Er:case Tr:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UE(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Tr&&(e="ENVMAP_MODE_REFRACTION"),e}function LE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Hg:e="ENVMAP_BLENDING_MULTIPLY";break;case my:e="ENVMAP_BLENDING_MIX";break;case xy:e="ENVMAP_BLENDING_ADD";break}return e}function NE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function OE(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=wE(i),p=DE(i),_=UE(i),v=LE(i),S=NE(i),M=yE(i),T=ME(u),C=l.createProgram();let y,g,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Oo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(y=[Og(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[Og(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?pe.tonemapping_pars_fragment:"",i.toneMapping!==Ka?vE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,_E("linearToOutputTexel",i.outputColorSpace),SE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),d=bh(d),d=Ug(d,i),d=Lg(d,i),h=bh(h),h=Ug(h,i),h=Lg(h,i),d=Ng(d),h=Ng(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===Ix?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ix?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=U+y+d,z=U+g+h,H=Cg(l,l.VERTEX_SHADER,D),L=Cg(l,l.FRAGMENT_SHADER,z);l.attachShader(C,H),l.attachShader(C,L),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(V){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",lt=l.getShaderInfoLog(H)||"",pt=l.getShaderInfoLog(L)||"",ft=Q.trim(),B=lt.trim(),W=pt.trim();let X=!0,_t=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(X=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,H,L);else{const vt=Dg(l,H,"vertex"),O=Dg(l,L,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ft+`
`+vt+`
`+O)}else ft!==""?re("WebGLProgram: Program Info Log:",ft):(B===""||W==="")&&(_t=!1);_t&&(V.diagnostics={runnable:X,programLog:ft,vertexShader:{log:B,prefix:y},fragmentShader:{log:W,prefix:g}})}l.deleteShader(H),l.deleteShader(L),j=new Uc(l,C),w=bE(l,C)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,pE)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=L,this}let zE=0;class PE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new BE(e),i.set(e,s)),s}}class BE{constructor(e){this.id=zE++,this.code=e,this.usedTimes=0}}function IE(o,e,i,s,l,u,d){const h=new $g,m=new PE,p=new Set,_=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,R,V,Q,lt){const pt=Q.fog,ft=lt.geometry,B=w.isMeshStandardMaterial?Q.environment:null,W=(w.isMeshStandardMaterial?i:e).get(w.envMap||B),X=W&&W.mapping===Bc?W.image.height:null,_t=T[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&re("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const vt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,O=vt!==void 0?vt.length:0;let $=0;ft.morphAttributes.position!==void 0&&($=1),ft.morphAttributes.normal!==void 0&&($=2),ft.morphAttributes.color!==void 0&&($=3);let yt,Tt,zt,st;if(_t){const Ce=Ni[_t];yt=Ce.vertexShader,Tt=Ce.fragmentShader}else yt=w.vertexShader,Tt=w.fragmentShader,m.update(w),zt=m.getVertexShaderID(w),st=m.getFragmentShaderID(w);const ut=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Ht=lt.isInstancedMesh===!0,Xt=lt.isBatchedMesh===!0,le=!!w.map,en=!!w.matcap,de=!!W,Re=!!w.aoMap,F=!!w.lightMap,he=!!w.bumpMap,me=!!w.normalMap,ze=!!w.displacementMap,Gt=!!w.emissiveMap,Xe=!!w.metalnessMap,jt=!!w.roughnessMap,ae=w.anisotropy>0,N=w.clearcoat>0,b=w.dispersion>0,tt=w.iridescence>0,mt=w.sheen>0,St=w.transmission>0,ct=ae&&!!w.anisotropyMap,qt=N&&!!w.clearcoatMap,Lt=N&&!!w.clearcoatNormalMap,Qt=N&&!!w.clearcoatRoughnessMap,Wt=tt&&!!w.iridescenceMap,Mt=tt&&!!w.iridescenceThicknessMap,Et=mt&&!!w.sheenColorMap,Yt=mt&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Ot=!!w.specularColorMap,ne=!!w.specularIntensityMap,G=St&&!!w.transmissionMap,Dt=St&&!!w.thicknessMap,Rt=!!w.gradientMap,Ct=!!w.alphaMap,bt=w.alphaTest>0,gt=!!w.alphaHash,Bt=!!w.extensions;let ie=Ka;w.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ie={shaderID:_t,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Tt,defines:w.defines,customVertexShaderID:zt,customFragmentShaderID:st,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Xt,batchingColor:Xt&&lt._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&lt.instanceColor!==null,instancingMorph:Ht&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ar,alphaToCoverage:!!w.alphaToCoverage,map:le,matcap:en,envMap:de,envMapMode:de&&W.mapping,envMapCubeUVHeight:X,aoMap:Re,lightMap:F,bumpMap:he,normalMap:me,displacementMap:S&&ze,emissiveMap:Gt,normalMapObjectSpace:me&&w.normalMapType===Ry,normalMapTangentSpace:me&&w.normalMapType===Zg,metalnessMap:Xe,roughnessMap:jt,anisotropy:ae,anisotropyMap:ct,clearcoat:N,clearcoatMap:qt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Qt,dispersion:b,iridescence:tt,iridescenceMap:Wt,iridescenceThicknessMap:Mt,sheen:mt,sheenColorMap:Et,sheenRoughnessMap:Yt,specularMap:Vt,specularColorMap:Ot,specularIntensityMap:ne,transmission:St,transmissionMap:G,thicknessMap:Dt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===yr&&w.alphaToCoverage===!1,alphaMap:Ct,alphaTest:bt,alphaHash:gt,combine:w.combine,mapUv:le&&C(w.map.channel),aoMapUv:Re&&C(w.aoMap.channel),lightMapUv:F&&C(w.lightMap.channel),bumpMapUv:he&&C(w.bumpMap.channel),normalMapUv:me&&C(w.normalMap.channel),displacementMapUv:ze&&C(w.displacementMap.channel),emissiveMapUv:Gt&&C(w.emissiveMap.channel),metalnessMapUv:Xe&&C(w.metalnessMap.channel),roughnessMapUv:jt&&C(w.roughnessMap.channel),anisotropyMapUv:ct&&C(w.anisotropyMap.channel),clearcoatMapUv:qt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&C(w.sheenRoughnessMap.channel),specularMapUv:Vt&&C(w.specularMap.channel),specularColorMapUv:Ot&&C(w.specularColorMap.channel),specularIntensityMapUv:ne&&C(w.specularIntensityMap.channel),transmissionMapUv:G&&C(w.transmissionMap.channel),thicknessMapUv:Dt&&C(w.thicknessMap.channel),alphaMapUv:Ct&&C(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(me||ae),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(le||Ct),fog:!!pt,useFog:w.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:wt,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:le&&w.map.isVideoTexture===!0&&Le.getTransfer(w.map.colorSpace)===Ve,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Le.getTransfer(w.emissiveMap.colorSpace)===Ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ua,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function g(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(U(R,w),D(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function U(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function D(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function z(w){const R=T[w.type];let V;if(R){const Q=Ni[R];V=nM.clone(Q.uniforms)}else V=w.uniforms;return V}function H(w,R){let V;for(let Q=0,lt=_.length;Q<lt;Q++){const pt=_[Q];if(pt.cacheKey===R){V=pt,++V.usedTimes;break}}return V===void 0&&(V=new OE(o,R,w,u),_.push(V)),V}function L(w){if(--w.usedTimes===0){const R=_.indexOf(w);_[R]=_[_.length-1],_.pop(),w.destroy()}}function P(w){m.remove(w)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:z,acquireProgram:H,releaseProgram:L,releaseShaderCache:P,programs:_,dispose:j}}function FE(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function HE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function zg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Pg(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(v,S,M,T,C,y){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:S,material:M,groupOrder:T,renderOrder:v.renderOrder,z:C,group:y},o[e]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=M,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=C,g.group=y),e++,g}function h(v,S,M,T,C,y){const g=d(v,S,M,T,C,y);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,S,M,T,C,y){const g=d(v,S,M,T,C,y);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,S){i.length>1&&i.sort(v||HE),s.length>1&&s.sort(S||zg),l.length>1&&l.sort(S||zg)}function _(){for(let v=e,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function GE(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new Pg,o.set(s,[d])):l>=u.length?(d=new Pg,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function VE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new Te};break;case"SpotLight":i={position:new K,direction:new K,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function kE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let XE=0;function WE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function qE(o){const e=new VE,i=kE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,u=new Je,d=new Je;function h(p){let _=0,v=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,T=0,C=0,y=0,g=0,U=0,D=0,z=0,H=0,L=0,P=0;p.sort(WE);for(let w=0,R=p.length;w<R;w++){const V=p[w],Q=V.color,lt=V.intensity,pt=V.distance,ft=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=Q.r*lt,v+=Q.g*lt,S+=Q.b*lt;else if(V.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(V.sh.coefficients[B],lt);P++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,X=i.get(V);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,s.directionalShadow[M]=X,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=V.shadow.matrix,U++}s.directional[M]=B,M++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(Q).multiplyScalar(lt),B.distance=pt,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,s.spot[C]=B;const W=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,W.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[C]=W.matrix,V.castShadow){const X=i.get(V);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,s.spotShadow[C]=X,s.spotShadowMap[C]=ft,z++}C++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(Q).multiplyScalar(lt),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=B,y++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const W=V.shadow,X=i.get(V);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,X.shadowCameraNear=W.camera.near,X.shadowCameraFar=W.camera.far,s.pointShadow[T]=X,s.pointShadowMap[T]=ft,s.pointShadowMatrix[T]=V.shadow.matrix,D++}s.point[T]=B,T++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(lt),B.groundColor.copy(V.groundColor).multiplyScalar(lt),s.hemi[g]=B,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=S;const j=s.hash;(j.directionalLength!==M||j.pointLength!==T||j.spotLength!==C||j.rectAreaLength!==y||j.hemiLength!==g||j.numDirectionalShadows!==U||j.numPointShadows!==D||j.numSpotShadows!==z||j.numSpotMaps!==H||j.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=T,s.hemi.length=g,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=z+H-L,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=P,j.directionalLength=M,j.pointLength=T,j.spotLength=C,j.rectAreaLength=y,j.hemiLength=g,j.numDirectionalShadows=U,j.numPointShadows=D,j.numSpotShadows=z,j.numSpotMaps=H,j.numLightProbes=P,s.version=XE++)}function m(p,_){let v=0,S=0,M=0,T=0,C=0;const y=_.matrixWorldInverse;for(let g=0,U=p.length;g<U;g++){const D=p[g];if(D.isDirectionalLight){const z=s.directional[v];z.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),v++}else if(D.isSpotLight){const z=s.spot[M];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(y),z.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const z=s.rectArea[T];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(y),d.identity(),u.copy(D.matrixWorld),u.premultiply(y),d.extractRotation(u),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),T++}else if(D.isPointLight){const z=s.point[S];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(y),S++}else if(D.isHemisphereLight){const z=s.hemi[C];z.direction.setFromMatrixPosition(D.matrixWorld),z.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:s}}function Bg(o){const e=new qE(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function d(_){s.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function YE(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new Bg(o),e.set(l,[h])):u>=d.length?(h=new Bg(o),d.push(h)):h=d[u],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const jE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KE(o,e,i){let s=new Ph;const l=new Se,u=new Se,d=new ke,h=new xM({depthPacking:Ay}),m=new gM,p={},_=i.maxTextureSize,v={[Qa]:Wn,[Wn]:Qa,[ua]:ua},S=new xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:jE,fragmentShader:ZE}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new Yn;T.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ma(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fg;let g=this.type;this.render=function(L,P,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(ha),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const lt=g!==ca&&this.type===ca,pt=g===ca&&this.type!==ca;for(let ft=0,B=L.length;ft<B;ft++){const W=L[ft],X=W.shadow;if(X===void 0){re("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const _t=X.getFrameExtents();if(l.multiply(_t),u.copy(X.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/_t.x),l.x=u.x*_t.x,X.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/_t.y),l.y=u.y*_t.y,X.mapSize.y=u.y)),X.map===null||lt===!0||pt===!0){const O=this.type!==ca?{minFilter:ri,magFilter:ri}:{};X.map!==null&&X.map.dispose(),X.map=new Rs(l.x,l.y,O),X.map.texture.name=W.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const vt=X.getViewportCount();for(let O=0;O<vt;O++){const $=X.getViewport(O);d.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),Q.viewport(d),X.updateMatrices(W,O),s=X.getFrustum(),z(P,j,X.camera,W,this.type)}X.isPointLightShadow!==!0&&this.type===ca&&U(X,j),X.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,V)};function U(L,P){const j=e.update(C);S.defines.VSM_SAMPLES!==L.blurSamples&&(S.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Rs(l.x,l.y)),S.uniforms.shadow_pass.value=L.map.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(P,null,j,S,C,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(P,null,j,M,C,null)}function D(L,P,j,w){let R=null;const V=j.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)R=V;else if(R=j.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Q=R.uuid,lt=P.uuid;let pt=p[Q];pt===void 0&&(pt={},p[Q]=pt);let ft=pt[lt];ft===void 0&&(ft=R.clone(),pt[lt]=ft,P.addEventListener("dispose",H)),R=ft}if(R.visible=P.visible,R.wireframe=P.wireframe,w===ca?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:v[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=o.properties.get(R);Q.light=j}return R}function z(L,P,j,w,R){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===ca)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,L.matrixWorld);const lt=e.update(L),pt=L.material;if(Array.isArray(pt)){const ft=lt.groups;for(let B=0,W=ft.length;B<W;B++){const X=ft[B],_t=pt[X.materialIndex];if(_t&&_t.visible){const vt=D(L,_t,w,R);L.onBeforeShadow(o,L,P,j,lt,vt,X),o.renderBufferDirect(j,null,lt,vt,L,X),L.onAfterShadow(o,L,P,j,lt,vt,X)}}}else if(pt.visible){const ft=D(L,pt,w,R);L.onBeforeShadow(o,L,P,j,lt,ft,null),o.renderBufferDirect(j,null,lt,ft,L,null),L.onAfterShadow(o,L,P,j,lt,ft,null)}}const Q=L.children;for(let lt=0,pt=Q.length;lt<pt;lt++)z(Q[lt],P,j,w,R)}function H(L){L.target.removeEventListener("dispose",H);for(const j in p){const w=p[j],R=L.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const QE={[zd]:Pd,[Bd]:Hd,[Id]:Gd,[br]:Fd,[Pd]:zd,[Hd]:Bd,[Gd]:Id,[Fd]:br};function JE(o,e){function i(){let G=!1;const Dt=new ke;let Rt=null;const Ct=new ke(0,0,0,0);return{setMask:function(bt){Rt!==bt&&!G&&(o.colorMask(bt,bt,bt,bt),Rt=bt)},setLocked:function(bt){G=bt},setClear:function(bt,gt,Bt,ie,Ie){Ie===!0&&(bt*=ie,gt*=ie,Bt*=ie),Dt.set(bt,gt,Bt,ie),Ct.equals(Dt)===!1&&(o.clearColor(bt,gt,Bt,ie),Ct.copy(Dt))},reset:function(){G=!1,Rt=null,Ct.set(-1,0,0,0)}}}function s(){let G=!1,Dt=!1,Rt=null,Ct=null,bt=null;return{setReversed:function(gt){if(Dt!==gt){const Bt=e.get("EXT_clip_control");gt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Dt=gt;const ie=bt;bt=null,this.setClear(ie)}},getReversed:function(){return Dt},setTest:function(gt){gt?ut(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(gt){Rt!==gt&&!G&&(o.depthMask(gt),Rt=gt)},setFunc:function(gt){if(Dt&&(gt=QE[gt]),Ct!==gt){switch(gt){case zd:o.depthFunc(o.NEVER);break;case Pd:o.depthFunc(o.ALWAYS);break;case Bd:o.depthFunc(o.LESS);break;case br:o.depthFunc(o.LEQUAL);break;case Id:o.depthFunc(o.EQUAL);break;case Fd:o.depthFunc(o.GEQUAL);break;case Hd:o.depthFunc(o.GREATER);break;case Gd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ct=gt}},setLocked:function(gt){G=gt},setClear:function(gt){bt!==gt&&(Dt&&(gt=1-gt),o.clearDepth(gt),bt=gt)},reset:function(){G=!1,Rt=null,Ct=null,bt=null,Dt=!1}}}function l(){let G=!1,Dt=null,Rt=null,Ct=null,bt=null,gt=null,Bt=null,ie=null,Ie=null;return{setTest:function(Ce){G||(Ce?ut(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Ce){Dt!==Ce&&!G&&(o.stencilMask(Ce),Dt=Ce)},setFunc:function(Ce,Rn,jn){(Rt!==Ce||Ct!==Rn||bt!==jn)&&(o.stencilFunc(Ce,Rn,jn),Rt=Ce,Ct=Rn,bt=jn)},setOp:function(Ce,Rn,jn){(gt!==Ce||Bt!==Rn||ie!==jn)&&(o.stencilOp(Ce,Rn,jn),gt=Ce,Bt=Rn,ie=jn)},setLocked:function(Ce){G=Ce},setClear:function(Ce){Ie!==Ce&&(o.clearStencil(Ce),Ie=Ce)},reset:function(){G=!1,Dt=null,Rt=null,Ct=null,bt=null,gt=null,Bt=null,ie=null,Ie=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},S=new WeakMap,M=[],T=null,C=!1,y=null,g=null,U=null,D=null,z=null,H=null,L=null,P=new Te(0,0,0),j=0,w=!1,R=null,V=null,Q=null,lt=null,pt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=W>=1):X.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=W>=2);let _t=null,vt={};const O=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),yt=new ke().fromArray(O),Tt=new ke().fromArray($);function zt(G,Dt,Rt,Ct){const bt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(G,gt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<Rt;Bt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Ct,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Dt+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return gt}const st={};st[o.TEXTURE_2D]=zt(o.TEXTURE_2D,o.TEXTURE_2D,1),st[o.TEXTURE_CUBE_MAP]=zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[o.TEXTURE_2D_ARRAY]=zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),st[o.TEXTURE_3D]=zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ut(o.DEPTH_TEST),d.setFunc(br),he(!1),me(Lx),ut(o.CULL_FACE),Re(ha);function ut(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function wt(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function Ht(G,Dt){return v[G]!==Dt?(o.bindFramebuffer(G,Dt),v[G]=Dt,G===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Dt),G===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Xt(G,Dt){let Rt=M,Ct=!1;if(G){Rt=S.get(Dt),Rt===void 0&&(Rt=[],S.set(Dt,Rt));const bt=G.textures;if(Rt.length!==bt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Bt=bt.length;gt<Bt;gt++)Rt[gt]=o.COLOR_ATTACHMENT0+gt;Rt.length=bt.length,Ct=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Ct=!0);Ct&&o.drawBuffers(Rt)}function le(G){return T!==G?(o.useProgram(G),T=G,!0):!1}const en={[bs]:o.FUNC_ADD,[JS]:o.FUNC_SUBTRACT,[$S]:o.FUNC_REVERSE_SUBTRACT};en[ty]=o.MIN,en[ey]=o.MAX;const de={[ny]:o.ZERO,[iy]:o.ONE,[ay]:o.SRC_COLOR,[Nd]:o.SRC_ALPHA,[uy]:o.SRC_ALPHA_SATURATE,[ly]:o.DST_COLOR,[ry]:o.DST_ALPHA,[sy]:o.ONE_MINUS_SRC_COLOR,[Od]:o.ONE_MINUS_SRC_ALPHA,[cy]:o.ONE_MINUS_DST_COLOR,[oy]:o.ONE_MINUS_DST_ALPHA,[fy]:o.CONSTANT_COLOR,[dy]:o.ONE_MINUS_CONSTANT_COLOR,[hy]:o.CONSTANT_ALPHA,[py]:o.ONE_MINUS_CONSTANT_ALPHA};function Re(G,Dt,Rt,Ct,bt,gt,Bt,ie,Ie,Ce){if(G===ha){C===!0&&(wt(o.BLEND),C=!1);return}if(C===!1&&(ut(o.BLEND),C=!0),G!==QS){if(G!==y||Ce!==w){if((g!==bs||z!==bs)&&(o.blendEquation(o.FUNC_ADD),g=bs,z=bs),Ce)switch(G){case yr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nx:o.blendFunc(o.ONE,o.ONE);break;case Ox:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:sn("WebGLState: Invalid blending: ",G);break}else switch(G){case yr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ox:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zx:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",G);break}U=null,D=null,H=null,L=null,P.set(0,0,0),j=0,y=G,w=Ce}return}bt=bt||Dt,gt=gt||Rt,Bt=Bt||Ct,(Dt!==g||bt!==z)&&(o.blendEquationSeparate(en[Dt],en[bt]),g=Dt,z=bt),(Rt!==U||Ct!==D||gt!==H||Bt!==L)&&(o.blendFuncSeparate(de[Rt],de[Ct],de[gt],de[Bt]),U=Rt,D=Ct,H=gt,L=Bt),(ie.equals(P)===!1||Ie!==j)&&(o.blendColor(ie.r,ie.g,ie.b,Ie),P.copy(ie),j=Ie),y=G,w=!1}function F(G,Dt){G.side===ua?wt(o.CULL_FACE):ut(o.CULL_FACE);let Rt=G.side===Wn;Dt&&(Rt=!Rt),he(Rt),G.blending===yr&&G.transparent===!1?Re(ha):Re(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const Ct=G.stencilWrite;h.setTest(Ct),Ct&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Gt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function he(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function me(G){G!==jS?(ut(o.CULL_FACE),G!==V&&(G===Lx?o.cullFace(o.BACK):G===ZS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),V=G}function ze(G){G!==Q&&(B&&o.lineWidth(G),Q=G)}function Gt(G,Dt,Rt){G?(ut(o.POLYGON_OFFSET_FILL),(lt!==Dt||pt!==Rt)&&(o.polygonOffset(Dt,Rt),lt=Dt,pt=Rt)):wt(o.POLYGON_OFFSET_FILL)}function Xe(G){G?ut(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function jt(G){G===void 0&&(G=o.TEXTURE0+ft-1),_t!==G&&(o.activeTexture(G),_t=G)}function ae(G,Dt,Rt){Rt===void 0&&(_t===null?Rt=o.TEXTURE0+ft-1:Rt=_t);let Ct=vt[Rt];Ct===void 0&&(Ct={type:void 0,texture:void 0},vt[Rt]=Ct),(Ct.type!==G||Ct.texture!==Dt)&&(_t!==Rt&&(o.activeTexture(Rt),_t=Rt),o.bindTexture(G,Dt||st[G]),Ct.type=G,Ct.texture=Dt)}function N(){const G=vt[_t];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function mt(){try{o.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function St(){try{o.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Lt(){try{o.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Qt(){try{o.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Wt(){try{o.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Mt(){try{o.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Et(G){yt.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),yt.copy(G))}function Yt(G){Tt.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Tt.copy(G))}function Vt(G,Dt){let Rt=p.get(Dt);Rt===void 0&&(Rt=new WeakMap,p.set(Dt,Rt));let Ct=Rt.get(G);Ct===void 0&&(Ct=o.getUniformBlockIndex(Dt,G.name),Rt.set(G,Ct))}function Ot(G,Dt){const Ct=p.get(Dt).get(G);m.get(Dt)!==Ct&&(o.uniformBlockBinding(Dt,Ct,G.__bindingPointIndex),m.set(Dt,Ct))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},_t=null,vt={},v={},S=new WeakMap,M=[],T=null,C=!1,y=null,g=null,U=null,D=null,z=null,H=null,L=null,P=new Te(0,0,0),j=0,w=!1,R=null,V=null,Q=null,lt=null,pt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ut,disable:wt,bindFramebuffer:Ht,drawBuffers:Xt,useProgram:le,setBlending:Re,setMaterial:F,setFlipSided:he,setCullFace:me,setLineWidth:ze,setPolygonOffset:Gt,setScissorTest:Xe,activeTexture:jt,bindTexture:ae,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:tt,texImage2D:Wt,texImage3D:Mt,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:Lt,texStorage3D:Qt,texSubImage2D:mt,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:qt,scissor:Et,viewport:Yt,reset:ne}}function $E(o,e,i,s,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Se,_=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,b){return M?new OffscreenCanvas(N,b):Oc("canvas")}function C(N,b,tt){let mt=1;const St=ae(N);if((St.width>tt||St.height>tt)&&(mt=tt/Math.max(St.width,St.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ct=Math.floor(mt*St.width),qt=Math.floor(mt*St.height);v===void 0&&(v=T(ct,qt));const Lt=b?T(ct,qt):v;return Lt.width=ct,Lt.height=qt,Lt.getContext("2d").drawImage(N,0,0,ct,qt),re("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ct+"x"+qt+")."),Lt}else return"data"in N&&re("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),N;return N}function y(N){return N.generateMipmaps}function g(N){o.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(N,b,tt,mt,St=!1){if(N!==null){if(o[N]!==void 0)return o[N];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct=b;if(b===o.RED&&(tt===o.FLOAT&&(ct=o.R32F),tt===o.HALF_FLOAT&&(ct=o.R16F),tt===o.UNSIGNED_BYTE&&(ct=o.R8)),b===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.R8UI),tt===o.UNSIGNED_SHORT&&(ct=o.R16UI),tt===o.UNSIGNED_INT&&(ct=o.R32UI),tt===o.BYTE&&(ct=o.R8I),tt===o.SHORT&&(ct=o.R16I),tt===o.INT&&(ct=o.R32I)),b===o.RG&&(tt===o.FLOAT&&(ct=o.RG32F),tt===o.HALF_FLOAT&&(ct=o.RG16F),tt===o.UNSIGNED_BYTE&&(ct=o.RG8)),b===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),tt===o.UNSIGNED_INT&&(ct=o.RG32UI),tt===o.BYTE&&(ct=o.RG8I),tt===o.SHORT&&(ct=o.RG16I),tt===o.INT&&(ct=o.RG32I)),b===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),tt===o.UNSIGNED_INT&&(ct=o.RGB32UI),tt===o.BYTE&&(ct=o.RGB8I),tt===o.SHORT&&(ct=o.RGB16I),tt===o.INT&&(ct=o.RGB32I)),b===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),tt===o.BYTE&&(ct=o.RGBA8I),tt===o.SHORT&&(ct=o.RGBA16I),tt===o.INT&&(ct=o.RGBA32I)),b===o.RGB&&(tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),b===o.RGBA){const qt=St?Lc:Le.getTransfer(mt);tt===o.FLOAT&&(ct=o.RGBA32F),tt===o.HALF_FLOAT&&(ct=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ct=qt===Ve?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function z(N,b){let tt;return N?b===null||b===As||b===Po?tt=o.DEPTH24_STENCIL8:b===da?tt=o.DEPTH32F_STENCIL8:b===zo&&(tt=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===As||b===Po?tt=o.DEPTH_COMPONENT24:b===da?tt=o.DEPTH_COMPONENT32F:b===zo&&(tt=o.DEPTH_COMPONENT16),tt}function H(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==ri&&N.minFilter!==gi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function L(N){const b=N.target;b.removeEventListener("dispose",L),j(b),b.isVideoTexture&&_.delete(b)}function P(N){const b=N.target;b.removeEventListener("dispose",P),R(b)}function j(N){const b=s.get(N);if(b.__webglInit===void 0)return;const tt=N.source,mt=S.get(tt);if(mt){const St=mt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(N),Object.keys(mt).length===0&&S.delete(tt)}s.remove(N)}function w(N){const b=s.get(N);o.deleteTexture(b.__webglTexture);const tt=N.source,mt=S.get(tt);delete mt[b.__cacheKey],d.memory.textures--}function R(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let St=0;St<b.__webglFramebuffer[mt].length;St++)o.deleteFramebuffer(b.__webglFramebuffer[mt][St]);else o.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)o.deleteFramebuffer(b.__webglFramebuffer[mt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const tt=N.textures;for(let mt=0,St=tt.length;mt<St;mt++){const ct=s.get(tt[mt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),d.memory.textures--),s.remove(tt[mt])}s.remove(N)}let V=0;function Q(){V=0}function lt(){const N=V;return N>=l.maxTextures&&re("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function pt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ft(N,b){const tt=s.get(N);if(N.isVideoTexture&&Xe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const mt=N.image;if(mt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{st(tt,N,b);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+b)}function B(N,b){const tt=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){st(tt,N,b);return}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+b)}function W(N,b){const tt=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){st(tt,N,b);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+b)}function X(N,b){const tt=s.get(N);if(N.version>0&&tt.__version!==N.version){ut(tt,N,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+b)}const _t={[Xd]:o.REPEAT,[fa]:o.CLAMP_TO_EDGE,[Wd]:o.MIRRORED_REPEAT},vt={[ri]:o.NEAREST,[Ey]:o.NEAREST_MIPMAP_NEAREST,[nc]:o.NEAREST_MIPMAP_LINEAR,[gi]:o.LINEAR,[td]:o.LINEAR_MIPMAP_NEAREST,[Ts]:o.LINEAR_MIPMAP_LINEAR},O={[Cy]:o.NEVER,[Oy]:o.ALWAYS,[wy]:o.LESS,[Kg]:o.LEQUAL,[Dy]:o.EQUAL,[Ny]:o.GEQUAL,[Uy]:o.GREATER,[Ly]:o.NOTEQUAL};function $(N,b){if(b.type===da&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===gi||b.magFilter===td||b.magFilter===nc||b.magFilter===Ts||b.minFilter===gi||b.minFilter===td||b.minFilter===nc||b.minFilter===Ts)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,_t[b.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,_t[b.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,_t[b.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,vt[b.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ri||b.minFilter!==nc&&b.minFilter!==Ts||b.type===da&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function yt(N,b){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",L));const mt=b.source;let St=S.get(mt);St===void 0&&(St={},S.set(mt,St));const ct=pt(b);if(ct!==N.__cacheKey){St[ct]===void 0&&(St[ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,tt=!0),St[ct].usedTimes++;const qt=St[N.__cacheKey];qt!==void 0&&(St[N.__cacheKey].usedTimes--,qt.usedTimes===0&&w(b)),N.__cacheKey=ct,N.__webglTexture=St[ct].texture}return tt}function Tt(N,b,tt){return Math.floor(Math.floor(N/tt)/b)}function zt(N,b,tt,mt){const ct=N.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,tt,mt,b.data);else{ct.sort((Mt,Et)=>Mt.start-Et.start);let qt=0;for(let Mt=1;Mt<ct.length;Mt++){const Et=ct[qt],Yt=ct[Mt],Vt=Et.start+Et.count,Ot=Tt(Yt.start,b.width,4),ne=Tt(Et.start,b.width,4);Yt.start<=Vt+1&&Ot===ne&&Tt(Yt.start+Yt.count-1,b.width,4)===Ot?Et.count=Math.max(Et.count,Yt.start+Yt.count-Et.start):(++qt,ct[qt]=Yt)}ct.length=qt+1;const Lt=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Wt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Mt=0,Et=ct.length;Mt<Et;Mt++){const Yt=ct[Mt],Vt=Math.floor(Yt.start/4),Ot=Math.ceil(Yt.count/4),ne=Vt%b.width,G=Math.floor(Vt/b.width),Dt=Ot,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,ne,G,Dt,Rt,tt,mt,b.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Lt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Wt)}}function st(N,b,tt){let mt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=o.TEXTURE_3D);const St=yt(N,b),ct=b.source;i.bindTexture(mt,N.__webglTexture,o.TEXTURE0+tt);const qt=s.get(ct);if(ct.version!==qt.__version||St===!0){i.activeTexture(o.TEXTURE0+tt);const Lt=Le.getPrimaries(Le.workingColorSpace),Qt=b.colorSpace===ja?null:Le.getPrimaries(b.colorSpace),Wt=b.colorSpace===ja||Lt===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Mt=C(b.image,!1,l.maxTextureSize);Mt=jt(b,Mt);const Et=u.convert(b.format,b.colorSpace),Yt=u.convert(b.type);let Vt=D(b.internalFormat,Et,Yt,b.colorSpace,b.isVideoTexture);$(mt,b);let Ot;const ne=b.mipmaps,G=b.isVideoTexture!==!0,Dt=qt.__version===void 0||St===!0,Rt=ct.dataReady,Ct=H(b,Mt);if(b.isDepthTexture)Vt=z(b.format===Io,b.type),Dt&&(G?i.texStorage2D(o.TEXTURE_2D,1,Vt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Et,Yt,null));else if(b.isDataTexture)if(ne.length>0){G&&Dt&&i.texStorage2D(o.TEXTURE_2D,Ct,Vt,ne[0].width,ne[0].height);for(let bt=0,gt=ne.length;bt<gt;bt++)Ot=ne[bt],G?Rt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Et,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Et,Yt,Ot.data);b.generateMipmaps=!1}else G?(Dt&&i.texStorage2D(o.TEXTURE_2D,Ct,Vt,Mt.width,Mt.height),Rt&&zt(b,Mt,Et,Yt)):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Et,Yt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Vt,ne[0].width,ne[0].height,Mt.depth);for(let bt=0,gt=ne.length;bt<gt;bt++)if(Ot=ne[bt],b.format!==Ai)if(Et!==null)if(G){if(Rt)if(b.layerUpdates.size>0){const Bt=pg(Ot.width,Ot.height,b.format,b.type);for(const ie of b.layerUpdates){const Ie=Ot.data.subarray(ie*Bt/Ot.data.BYTES_PER_ELEMENT,(ie+1)*Bt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ie,Ot.width,Ot.height,1,Et,Ie)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,Mt.depth,Et,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Vt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,Mt.depth,Et,Yt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Vt,Ot.width,Ot.height,Mt.depth,0,Et,Yt,Ot.data)}else{G&&Dt&&i.texStorage2D(o.TEXTURE_2D,Ct,Vt,ne[0].width,ne[0].height);for(let bt=0,gt=ne.length;bt<gt;bt++)Ot=ne[bt],b.format!==Ai?Et!==null?G?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Et,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Ot.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Rt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Et,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Et,Yt,Ot.data)}else if(b.isDataArrayTexture)if(G){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Vt,Mt.width,Mt.height,Mt.depth),Rt)if(b.layerUpdates.size>0){const bt=pg(Mt.width,Mt.height,b.format,b.type);for(const gt of b.layerUpdates){const Bt=Mt.data.subarray(gt*bt/Mt.data.BYTES_PER_ELEMENT,(gt+1)*bt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Mt.width,Mt.height,1,Et,Yt,Bt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Yt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,Et,Yt,Mt.data);else if(b.isData3DTexture)G?(Dt&&i.texStorage3D(o.TEXTURE_3D,Ct,Vt,Mt.width,Mt.height,Mt.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Yt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,Et,Yt,Mt.data);else if(b.isFramebufferTexture){if(Dt)if(G)i.texStorage2D(o.TEXTURE_2D,Ct,Vt,Mt.width,Mt.height);else{let bt=Mt.width,gt=Mt.height;for(let Bt=0;Bt<Ct;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,Vt,bt,gt,0,Et,Yt,null),bt>>=1,gt>>=1}}else if(ne.length>0){if(G&&Dt){const bt=ae(ne[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Vt,bt.width,bt.height)}for(let bt=0,gt=ne.length;bt<gt;bt++)Ot=ne[bt],G?Rt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Et,Yt,Ot):i.texImage2D(o.TEXTURE_2D,bt,Vt,Et,Yt,Ot);b.generateMipmaps=!1}else if(G){if(Dt){const bt=ae(Mt);i.texStorage2D(o.TEXTURE_2D,Ct,Vt,bt.width,bt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,Yt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Et,Yt,Mt);y(b)&&g(mt),qt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ut(N,b,tt){if(b.image.length!==6)return;const mt=yt(N,b),St=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+tt);const ct=s.get(St);if(St.version!==ct.__version||mt===!0){i.activeTexture(o.TEXTURE0+tt);const qt=Le.getPrimaries(Le.workingColorSpace),Lt=b.colorSpace===ja?null:Le.getPrimaries(b.colorSpace),Qt=b.colorSpace===ja||qt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Wt=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let gt=0;gt<6;gt++)!Wt&&!Mt?Et[gt]=C(b.image[gt],!0,l.maxCubemapSize):Et[gt]=Mt?b.image[gt].image:b.image[gt],Et[gt]=jt(b,Et[gt]);const Yt=Et[0],Vt=u.convert(b.format,b.colorSpace),Ot=u.convert(b.type),ne=D(b.internalFormat,Vt,Ot,b.colorSpace),G=b.isVideoTexture!==!0,Dt=ct.__version===void 0||mt===!0,Rt=St.dataReady;let Ct=H(b,Yt);$(o.TEXTURE_CUBE_MAP,b);let bt;if(Wt){G&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,ne,Yt.width,Yt.height);for(let gt=0;gt<6;gt++){bt=Et[gt].mipmaps;for(let Bt=0;Bt<bt.length;Bt++){const ie=bt[Bt];b.format!==Ai?Vt!==null?G?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,ie.width,ie.height,Vt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,ne,ie.width,ie.height,0,ie.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,ie.width,ie.height,Vt,Ot,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,ne,ie.width,ie.height,0,Vt,Ot,ie.data)}}}else{if(bt=b.mipmaps,G&&Dt){bt.length>0&&Ct++;const gt=ae(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,ne,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Mt){G?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Et[gt].width,Et[gt].height,Vt,Ot,Et[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ne,Et[gt].width,Et[gt].height,0,Vt,Ot,Et[gt].data);for(let Bt=0;Bt<bt.length;Bt++){const Ie=bt[Bt].image[gt].image;G?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,Ie.width,Ie.height,Vt,Ot,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,ne,Ie.width,Ie.height,0,Vt,Ot,Ie.data)}}else{G?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Vt,Ot,Et[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ne,Vt,Ot,Et[gt]);for(let Bt=0;Bt<bt.length;Bt++){const ie=bt[Bt];G?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,Vt,Ot,ie.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,ne,Vt,Ot,ie.image[gt])}}}y(b)&&g(o.TEXTURE_CUBE_MAP),ct.__version=St.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function wt(N,b,tt,mt,St,ct){const qt=u.convert(tt.format,tt.colorSpace),Lt=u.convert(tt.type),Qt=D(tt.internalFormat,qt,Lt,tt.colorSpace),Wt=s.get(b),Mt=s.get(tt);if(Mt.__renderTarget=b,!Wt.__hasExternalTextures){const Et=Math.max(1,b.width>>ct),Yt=Math.max(1,b.height>>ct);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ct,Qt,Et,Yt,b.depth,0,qt,Lt,null):i.texImage2D(St,ct,Qt,Et,Yt,0,qt,Lt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Gt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,St,Mt.__webglTexture,0,ze(b)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,St,Mt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(N,b,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,N),b.depthBuffer){const mt=b.depthTexture,St=mt&&mt.isDepthTexture?mt.type:null,ct=z(b.stencilBuffer,St),qt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=ze(b);Gt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Lt,ct,b.width,b.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,ct,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ct,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,N)}else{const mt=b.textures;for(let St=0;St<mt.length;St++){const ct=mt[St],qt=u.convert(ct.format,ct.colorSpace),Lt=u.convert(ct.type),Qt=D(ct.internalFormat,qt,Lt,ct.colorSpace),Wt=ze(b);tt&&Gt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Qt,b.width,b.height):Gt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,Qt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(b.depthTexture);mt.__renderTarget=b,(!mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const St=mt.__webglTexture,ct=ze(b);if(b.depthTexture.format===Bo)Gt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(b.depthTexture.format===Io)Gt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function le(N){const b=s.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",St)};mt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=mt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const mt=N.texture.mipmaps;mt&&mt.length>0?Xt(b.__webglFramebuffer[0],N):Xt(b.__webglFramebuffer,N)}else if(tt){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=o.createRenderbuffer(),Ht(b.__webglDepthbuffer[mt],N,!1);else{const St=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ct)}}else{const mt=N.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ht(b.__webglDepthbuffer,N,!1);else{const St=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function en(N,b,tt){const mt=s.get(N);b!==void 0&&wt(mt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&le(N)}function de(N){const b=N.texture,tt=s.get(N),mt=s.get(b);N.addEventListener("dispose",P);const St=N.textures,ct=N.isWebGLCubeRenderTarget===!0,qt=St.length>1;if(qt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=b.version,d.memory.textures++),ct){tt.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[Lt]=[];for(let Qt=0;Qt<b.mipmaps.length;Qt++)tt.__webglFramebuffer[Lt][Qt]=o.createFramebuffer()}else tt.__webglFramebuffer[Lt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)tt.__webglFramebuffer[Lt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Lt=0,Qt=St.length;Lt<Qt;Lt++){const Wt=s.get(St[Lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&Gt(N)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Lt=0;Lt<St.length;Lt++){const Qt=St[Lt];tt.__webglColorRenderbuffer[Lt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt]);const Wt=u.convert(Qt.format,Qt.colorSpace),Mt=u.convert(Qt.type),Et=D(Qt.internalFormat,Wt,Mt,Qt.colorSpace,N.isXRRenderTarget===!0),Yt=ze(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Et,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Ht(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),$(o.TEXTURE_CUBE_MAP,b);for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)wt(tt.__webglFramebuffer[Lt][Qt],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Qt);else wt(tt.__webglFramebuffer[Lt],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);y(b)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Lt=0,Qt=St.length;Lt<Qt;Lt++){const Wt=St[Lt],Mt=s.get(Wt);let Et=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Et=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),$(Et,Wt),wt(tt.__webglFramebuffer,N,Wt,o.COLOR_ATTACHMENT0+Lt,Et,0),y(Wt)&&g(Et)}i.unbindTexture()}else{let Lt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,mt.__webglTexture),$(Lt,b),b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)wt(tt.__webglFramebuffer[Qt],N,b,o.COLOR_ATTACHMENT0,Lt,Qt);else wt(tt.__webglFramebuffer,N,b,o.COLOR_ATTACHMENT0,Lt,0);y(b)&&g(Lt),i.unbindTexture()}N.depthBuffer&&le(N)}function Re(N){const b=N.textures;for(let tt=0,mt=b.length;tt<mt;tt++){const St=b[tt];if(y(St)){const ct=U(N),qt=s.get(St).__webglTexture;i.bindTexture(ct,qt),g(ct),i.unbindTexture()}}}const F=[],he=[];function me(N){if(N.samples>0){if(Gt(N)===!1){const b=N.textures,tt=N.width,mt=N.height;let St=o.COLOR_BUFFER_BIT;const ct=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=s.get(N),Lt=b.length>1;if(Lt)for(let Wt=0;Wt<b.length;Wt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Qt=N.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Wt=0;Wt<b.length;Wt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Lt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const Mt=s.get(b[Wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,tt,mt,0,0,tt,mt,St,o.NEAREST),m===!0&&(F.length=0,he.length=0,F.push(o.COLOR_ATTACHMENT0+Wt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(F.push(ct),he.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,he)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Lt)for(let Wt=0;Wt<b.length;Wt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const Mt=s.get(b[Wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ze(N){return Math.min(l.maxSamples,N.samples)}function Gt(N){const b=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xe(N){const b=d.render.frame;_.get(N)!==b&&(_.set(N,b),N.update())}function jt(N,b){const tt=N.colorSpace,mt=N.format,St=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Ar&&tt!==ja&&(Le.getTransfer(tt)===Ve?(mt!==Ai||St!==zi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",tt)),b}function ae(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=Q,this.setTexture2D=ft,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=en,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Gt}function tT(o,e){function i(s,l=ja){let u;const d=Le.getTransfer(l);if(s===zi)return o.UNSIGNED_BYTE;if(s===Rh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ch)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Xg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Wg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Vg)return o.BYTE;if(s===kg)return o.SHORT;if(s===zo)return o.UNSIGNED_SHORT;if(s===Ah)return o.INT;if(s===As)return o.UNSIGNED_INT;if(s===da)return o.FLOAT;if(s===Cr)return o.HALF_FLOAT;if(s===qg)return o.ALPHA;if(s===Yg)return o.RGB;if(s===Ai)return o.RGBA;if(s===Bo)return o.DEPTH_COMPONENT;if(s===Io)return o.DEPTH_STENCIL;if(s===jg)return o.RED;if(s===wh)return o.RED_INTEGER;if(s===Dh)return o.RG;if(s===Uh)return o.RG_INTEGER;if(s===Lh)return o.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(d===Ve)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Rc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Rc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qd||s===Yd||s===jd||s===Zd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===qd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kd||s===Qd||s===Jd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Kd||s===Qd)return d===Ve?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Jd)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$d||s===th||s===eh||s===nh||s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===$d)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===th)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===eh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ih)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ah)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===oh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ch)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hh||s===ph||s===mh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===hh)return d===Ve?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ph)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xh||s===gh||s===_h||s===vh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===xh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===gh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_h)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Po?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const eT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new c_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new xa({vertexShader:eT,fragmentShader:nT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ma(new Ic(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aT extends wr{constructor(e,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,v=null,S=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",y=new iT,g={},U=i.getContextAttributes();let D=null,z=null;const H=[],L=[],P=new Se;let j=null;const w=new si;w.viewport=new ke;const R=new si;R.viewport=new ke;const V=[w,R],Q=new MM;let lt=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ut=H[st];return ut===void 0&&(ut=new bd,H[st]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(st){let ut=H[st];return ut===void 0&&(ut=new bd,H[st]=ut),ut.getGripSpace()},this.getHand=function(st){let ut=H[st];return ut===void 0&&(ut=new bd,H[st]=ut),ut.getHandSpace()};function ft(st){const ut=L.indexOf(st.inputSource);if(ut===-1)return;const wt=H[ut];wt!==void 0&&(wt.update(st.inputSource,st.frame,p||d),wt.dispatchEvent({type:st.type,data:st.inputSource}))}function B(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",W);for(let st=0;st<H.length;st++){const ut=L[st];ut!==null&&(L[st]=null,H[st].disconnect(ut))}lt=null,pt=null,y.reset();for(const st in g)delete g[st];e.setRenderTarget(D),M=null,S=null,v=null,l=null,z=null,zt.stop(),s.isPresenting=!1,e.setPixelRatio(j),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){u=st,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){h=st,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",B),l.addEventListener("inputsourceschange",W),U.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ht=null,Xt=null;U.depth&&(Xt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=U.stencil?Io:Bo,Ht=U.stencil?Po:As);const le={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};v=this.getBinding(),S=v.createProjectionLayer(le),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),z=new Rs(S.textureWidth,S.textureHeight,{format:Ai,type:zi,depthTexture:new l_(S.textureWidth,S.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const wt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Rs(M.framebufferWidth,M.framebufferHeight,{format:Ai,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(st){for(let ut=0;ut<st.removed.length;ut++){const wt=st.removed[ut],Ht=L.indexOf(wt);Ht>=0&&(L[Ht]=null,H[Ht].disconnect(wt))}for(let ut=0;ut<st.added.length;ut++){const wt=st.added[ut];let Ht=L.indexOf(wt);if(Ht===-1){for(let le=0;le<H.length;le++)if(le>=L.length){L.push(wt),Ht=le;break}else if(L[le]===null){L[le]=wt,Ht=le;break}if(Ht===-1)break}const Xt=H[Ht];Xt&&Xt.connect(wt)}}const X=new K,_t=new K;function vt(st,ut,wt){X.setFromMatrixPosition(ut.matrixWorld),_t.setFromMatrixPosition(wt.matrixWorld);const Ht=X.distanceTo(_t),Xt=ut.projectionMatrix.elements,le=wt.projectionMatrix.elements,en=Xt[14]/(Xt[10]-1),de=Xt[14]/(Xt[10]+1),Re=(Xt[9]+1)/Xt[5],F=(Xt[9]-1)/Xt[5],he=(Xt[8]-1)/Xt[0],me=(le[8]+1)/le[0],ze=en*he,Gt=en*me,Xe=Ht/(-he+me),jt=Xe*-he;if(ut.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(jt),st.translateZ(Xe),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Xt[10]===-1)st.projectionMatrix.copy(ut.projectionMatrix),st.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const ae=en+Xe,N=de+Xe,b=ze-jt,tt=Gt+(Ht-jt),mt=Re*de/N*ae,St=F*de/N*ae;st.projectionMatrix.makePerspective(b,tt,mt,St,ae,N),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function O(st,ut){ut===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ut.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let ut=st.near,wt=st.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),Q.near=R.near=w.near=ut,Q.far=R.far=w.far=wt,(lt!==Q.near||pt!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),lt=Q.near,pt=Q.far),Q.layers.mask=st.layers.mask|6,w.layers.mask=Q.layers.mask&3,R.layers.mask=Q.layers.mask&5;const Ht=st.parent,Xt=Q.cameras;O(Q,Ht);for(let le=0;le<Xt.length;le++)O(Xt[le],Ht);Xt.length===2?vt(Q,w,R):Q.projectionMatrix.copy(w.projectionMatrix),$(st,Q,Ht)};function $(st,ut,wt){wt===null?st.matrix.copy(ut.matrixWorld):(st.matrix.copy(wt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ut.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ut.projectionMatrix),st.projectionMatrixInverse.copy(ut.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Sh*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(st){m=st,S!==null&&(S.fixedFoveation=st),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=st)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(st){return g[st]};let yt=null;function Tt(st,ut){if(_=ut.getViewerPose(p||d),T=ut,_!==null){const wt=_.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let Ht=!1;wt.length!==Q.cameras.length&&(Q.cameras.length=0,Ht=!0);for(let de=0;de<wt.length;de++){const Re=wt[de];let F=null;if(M!==null)F=M.getViewport(Re);else{const me=v.getViewSubImage(S,Re);F=me.viewport,de===0&&(e.setRenderTargetTextures(z,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(z))}let he=V[de];he===void 0&&(he=new si,he.layers.enable(de),he.viewport=new ke,V[de]=he),he.matrix.fromArray(Re.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Re.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(F.x,F.y,F.width,F.height),de===0&&(Q.matrix.copy(he.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ht===!0&&Q.cameras.push(he)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const de=v.getDepthInformation(wt[0]);de&&de.isValid&&de.texture&&y.init(de,l.renderState)}if(Xt&&Xt.includes("camera-access")&&C){e.state.unbindTexture(),v=s.getBinding();for(let de=0;de<wt.length;de++){const Re=wt[de].camera;if(Re){let F=g[Re];F||(F=new c_,g[Re]=F);const he=v.getCameraImage(Re);F.sourceTexture=he}}}}for(let wt=0;wt<H.length;wt++){const Ht=L[wt],Xt=H[wt];Ht!==null&&Xt!==void 0&&Xt.update(Ht,ut,p||d)}yt&&yt(st,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),T=null}const zt=new f_;zt.setAnimationLoop(Tt),this.setAnimationLoop=function(st){yt=st},this.dispose=function(){}}}const ys=new Pi,sT=new Je;function rT(o,e){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,a_(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,U,D,z){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),S(y,g),g.isMeshPhysicalMaterial&&M(y,g,z)):g.isMeshMatcapMaterial?(u(y,g),T(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),C(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(d(y,g),g.isLineDashedMaterial&&h(y,g)):g.isPointsMaterial?m(y,g,U,D):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Wn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Wn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const U=e.get(g),D=U.envMap,z=U.envMapRotation;D&&(y.envMap.value=D,ys.copy(z),ys.x*=-1,ys.y*=-1,ys.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),y.envMapRotation.value.setFromMatrix4(sT.makeRotationFromEuler(ys)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function h(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,U,D){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*U,y.scale.value=D*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function S(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,U){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Wn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function C(y,g){const U=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function oT(o,e,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,D){const z=D.program;s.uniformBlockBinding(U,z)}function p(U,D){let z=l[U.id];z===void 0&&(T(U),z=_(U),l[U.id]=z,U.addEventListener("dispose",y));const H=D.program;s.updateUBOMapping(U,H);const L=e.render.frame;u[U.id]!==L&&(S(U),u[U.id]=L)}function _(U){const D=v();U.__bindingPointIndex=D;const z=o.createBuffer(),H=U.__size,L=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,z),o.bufferData(o.UNIFORM_BUFFER,H,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,z),z}function v(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const D=l[U.id],z=U.uniforms,H=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let L=0,P=z.length;L<P;L++){const j=Array.isArray(z[L])?z[L]:[z[L]];for(let w=0,R=j.length;w<R;w++){const V=j[w];if(M(V,L,w,H)===!0){const Q=V.__offset,lt=Array.isArray(V.value)?V.value:[V.value];let pt=0;for(let ft=0;ft<lt.length;ft++){const B=lt[ft],W=C(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,Q+pt,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,pt),pt+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(U,D,z,H){const L=U.value,P=D+"_"+z;if(H[P]===void 0)return typeof L=="number"||typeof L=="boolean"?H[P]=L:H[P]=L.clone(),!0;{const j=H[P];if(typeof L=="number"||typeof L=="boolean"){if(j!==L)return H[P]=L,!0}else if(j.equals(L)===!1)return j.copy(L),!0}return!1}function T(U){const D=U.uniforms;let z=0;const H=16;for(let P=0,j=D.length;P<j;P++){const w=Array.isArray(D[P])?D[P]:[D[P]];for(let R=0,V=w.length;R<V;R++){const Q=w[R],lt=Array.isArray(Q.value)?Q.value:[Q.value];for(let pt=0,ft=lt.length;pt<ft;pt++){const B=lt[pt],W=C(B),X=z%H,_t=X%W.boundary,vt=X+_t;z+=_t,vt!==0&&H-vt<W.storage&&(z+=H-vt),Q.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=z,z+=W.storage}}}const L=z%H;return L>0&&(z+=H-L),U.__size=z,U.__cache={},this}function C(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",U),D}function y(U){const D=U.target;D.removeEventListener("dispose",y);const z=d.indexOf(D.__bindingPointIndex);d.splice(z,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function g(){for(const U in l)o.deleteBuffer(l[U]);d=[],l={},u={}}return{bind:m,update:p,dispose:g}}const lT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let la=null;function cT(){return la===null&&(la=new cM(lT,32,32,Dh,Cr),la.minFilter=gi,la.magFilter=gi,la.wrapS=fa,la.wrapT=fa,la.generateMipmaps=!1,la.needsUpdate=!0),la}class uT{constructor(e={}){const{canvas:i=zy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const T=new Set([Lh,Uh,wh]),C=new Set([zi,As,zo,Po,Rh,Ch]),y=new Uint32Array(4),g=new Int32Array(4);let U=null,D=null;const z=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let P=!1;this._outputColorSpace=xi;let j=0,w=0,R=null,V=-1,Q=null;const lt=new ke,pt=new ke;let ft=null;const B=new Te(0);let W=0,X=i.width,_t=i.height,vt=1,O=null,$=null;const yt=new ke(0,0,X,_t),Tt=new ke(0,0,X,_t);let zt=!1;const st=new Ph;let ut=!1,wt=!1;const Ht=new Je,Xt=new K,le=new ke,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Re(){return R===null?vt:1}let F=s;function he(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Th}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",gt,!1),i.addEventListener("webglcontextcreationerror",Bt,!1),F===null){const q="webgl2";if(F=he(q,A),F===null)throw he(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let me,ze,Gt,Xe,jt,ae,N,b,tt,mt,St,ct,qt,Lt,Qt,Wt,Mt,Et,Yt,Vt,Ot,ne,G,Dt;function Rt(){me=new _3(F),me.init(),ne=new tT(F,me),ze=new c3(F,me,e,ne),Gt=new JE(F,me),ze.reversedDepthBuffer&&S&&Gt.buffers.depth.setReversed(!0),Xe=new y3(F),jt=new FE,ae=new $E(F,me,Gt,jt,ze,ne,Xe),N=new f3(L),b=new g3(L),tt=new TM(F),G=new o3(F,tt),mt=new v3(F,tt,Xe,G),St=new b3(F,mt,tt,Xe),Yt=new M3(F,ze,ae),Wt=new u3(jt),ct=new IE(L,N,b,me,ze,G,Wt),qt=new rT(L,jt),Lt=new GE,Qt=new YE(me),Et=new r3(L,N,b,Gt,St,M,m),Mt=new KE(L,St,ze),Dt=new oT(F,Xe,ze,Gt),Vt=new l3(F,me,Xe),Ot=new S3(F,me,Xe),Xe.programs=ct.programs,L.capabilities=ze,L.extensions=me,L.properties=jt,L.renderLists=Lt,L.shadowMap=Mt,L.state=Gt,L.info=Xe}Rt();const Ct=new aT(L,F);this.xr=Ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(A){A!==void 0&&(vt=A,this.setSize(X,_t,!1))},this.getSize=function(A){return A.set(X,_t)},this.setSize=function(A,q,rt=!0){if(Ct.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,_t=q,i.width=Math.floor(A*vt),i.height=Math.floor(q*vt),rt===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(X*vt,_t*vt).floor()},this.setDrawingBufferSize=function(A,q,rt){X=A,_t=q,vt=rt,i.width=Math.floor(A*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(lt)},this.getViewport=function(A){return A.copy(yt)},this.setViewport=function(A,q,rt,nt){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,q,rt,nt),Gt.viewport(lt.copy(yt).multiplyScalar(vt).round())},this.getScissor=function(A){return A.copy(Tt)},this.setScissor=function(A,q,rt,nt){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,q,rt,nt),Gt.scissor(pt.copy(Tt).multiplyScalar(vt).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(A){Gt.setScissorTest(zt=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,rt=!0){let nt=0;if(A){let Z=!1;if(R!==null){const At=R.texture.format;Z=T.has(At)}if(Z){const At=R.texture.type,Ut=C.has(At),Pt=Et.getClearColor(),It=Et.getClearAlpha(),$t=Pt.r,ee=Pt.g,Zt=Pt.b;Ut?(y[0]=$t,y[1]=ee,y[2]=Zt,y[3]=It,F.clearBufferuiv(F.COLOR,0,y)):(g[0]=$t,g[1]=ee,g[2]=Zt,g[3]=It,F.clearBufferiv(F.COLOR,0,g))}else nt|=F.COLOR_BUFFER_BIT}q&&(nt|=F.DEPTH_BUFFER_BIT),rt&&(nt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",gt,!1),i.removeEventListener("webglcontextcreationerror",Bt,!1),Et.dispose(),Lt.dispose(),Qt.dispose(),jt.dispose(),N.dispose(),b.dispose(),St.dispose(),G.dispose(),Dt.dispose(),ct.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Ur),Ct.removeEventListener("sessionend",Lr),_i.stop()};function bt(A){A.preventDefault(),Hx("WebGLRenderer: Context Lost."),P=!0}function gt(){Hx("WebGLRenderer: Context Restored."),P=!1;const A=Xe.autoReset,q=Mt.enabled,rt=Mt.autoUpdate,nt=Mt.needsUpdate,Z=Mt.type;Rt(),Xe.autoReset=A,Mt.enabled=q,Mt.autoUpdate=rt,Mt.needsUpdate=nt,Mt.type=Z}function Bt(A){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const q=A.target;q.removeEventListener("dispose",ie),Ie(q)}function Ie(A){Ce(A),jt.remove(A)}function Ce(A){const q=jt.get(A).programs;q!==void 0&&(q.forEach(function(rt){ct.releaseProgram(rt)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,rt,nt,Z,At){q===null&&(q=en);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,Pt=Gc(A,q,rt,nt,Z);Gt.setMaterial(nt,Ut);let It=rt.index,$t=1;if(nt.wireframe===!0){if(It=mt.getWireframeAttribute(rt),It===void 0)return;$t=2}const ee=rt.drawRange,Zt=rt.attributes.position;let ce=ee.start*$t,Ae=(ee.start+ee.count)*$t;At!==null&&(ce=Math.max(ce,At.start*$t),Ae=Math.min(Ae,(At.start+At.count)*$t)),It!==null?(ce=Math.max(ce,0),Ae=Math.min(Ae,It.count)):Zt!=null&&(ce=Math.max(ce,0),Ae=Math.min(Ae,Zt.count));const we=Ae-ce;if(we<0||we===1/0)return;G.setup(Z,nt,Pt,rt,It);let ye,Oe=Vt;if(It!==null&&(ye=tt.get(It),Oe=Ot,Oe.setIndex(ye)),Z.isMesh)nt.wireframe===!0?(Gt.setLineWidth(nt.wireframeLinewidth*Re()),Oe.setMode(F.LINES)):Oe.setMode(F.TRIANGLES);else if(Z.isLine){let Jt=nt.linewidth;Jt===void 0&&(Jt=1),Gt.setLineWidth(Jt*Re()),Z.isLineSegments?Oe.setMode(F.LINES):Z.isLineLoop?Oe.setMode(F.LINE_LOOP):Oe.setMode(F.LINE_STRIP)}else Z.isPoints?Oe.setMode(F.POINTS):Z.isSprite&&Oe.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Jt=Z._multiDrawStarts,We=Z._multiDrawCounts,Me=Z._multiDrawCount,gn=It?tt.get(It).bytesPerElement:1,_a=jt.get(nt).currentProgram.getUniforms();for(let Ye=0;Ye<Me;Ye++)_a.setValue(F,"_gl_DrawID",Ye),Oe.render(Jt[Ye]/gn,We[Ye])}else if(Z.isInstancedMesh)Oe.renderInstances(ce,we,Z.count);else if(rt.isInstancedBufferGeometry){const Jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,We=Math.min(rt.instanceCount,Jt);Oe.renderInstances(ce,we,We)}else Oe.render(ce,we)};function Rn(A,q,rt){A.transparent===!0&&A.side===ua&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,dn(A,q,rt),A.side=Qa,A.needsUpdate=!0,dn(A,q,rt),A.side=ua):dn(A,q,rt)}this.compile=function(A,q,rt=null){rt===null&&(rt=A),D=Qt.get(rt),D.init(q),H.push(D),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),A!==rt&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),D.setupLights();const nt=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const At=Z.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const Pt=At[Ut];Rn(Pt,rt,Z),nt.add(Pt)}else Rn(At,rt,Z),nt.add(At)}),D=H.pop(),nt},this.compileAsync=function(A,q,rt=null){const nt=this.compile(A,q,rt);return new Promise(Z=>{function At(){if(nt.forEach(function(Ut){jt.get(Ut).currentProgram.isReady()&&nt.delete(Ut)}),nt.size===0){Z(A);return}setTimeout(At,10)}me.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let jn=null;function Wo(A){jn&&jn(A)}function Ur(){_i.stop()}function Lr(){_i.start()}const _i=new f_;_i.setAnimationLoop(Wo),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(A){jn=A,Ct.setAnimationLoop(A),A===null?_i.stop():_i.start()},Ct.addEventListener("sessionstart",Ur),Ct.addEventListener("sessionend",Lr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(q),q=Ct.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,q,R),D=Qt.get(A,H.length),D.init(q),H.push(D),Ht.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),st.setFromProjectionMatrix(Ht,Oi,q.reversedDepth),wt=this.localClippingEnabled,ut=Wt.init(this.clippingPlanes,wt),U=Lt.get(A,z.length),U.init(),z.push(U),Ct.enabled===!0&&Ct.isPresenting===!0){const At=L.xr.getDepthSensingMesh();At!==null&&Ja(At,q,-1/0,L.sortObjects)}Ja(A,q,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(O,$),de=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,de&&Et.addToRenderList(U,A),this.info.render.frame++,ut===!0&&Wt.beginShadows();const rt=D.state.shadowsArray;Mt.render(rt,A,q),ut===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=U.opaque,Z=U.transmissive;if(D.setupLights(),q.isArrayCamera){const At=q.cameras;if(Z.length>0)for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const It=At[Ut];Or(nt,Z,A,It)}de&&Et.render(A);for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const It=At[Ut];Nr(U,A,It,It.viewport)}}else Z.length>0&&Or(nt,Z,A,q),de&&Et.render(A),Nr(U,A,q);R!==null&&w===0&&(ae.updateMultisampleRenderTarget(R),ae.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(L,A,q),G.resetDefaultState(),V=-1,Q=null,H.pop(),H.length>0?(D=H[H.length-1],ut===!0&&Wt.setGlobalState(L.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function Ja(A,q,rt,nt){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||st.intersectsSprite(A)){nt&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ht);const Ut=St.update(A),Pt=A.material;Pt.visible&&U.push(A,Ut,Pt,rt,le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||st.intersectsObject(A))){const Ut=St.update(A),Pt=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),le.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),le.copy(Ut.boundingSphere.center)),le.applyMatrix4(A.matrixWorld).applyMatrix4(Ht)),Array.isArray(Pt)){const It=Ut.groups;for(let $t=0,ee=It.length;$t<ee;$t++){const Zt=It[$t],ce=Pt[Zt.materialIndex];ce&&ce.visible&&U.push(A,Ut,ce,rt,le.z,Zt)}}else Pt.visible&&U.push(A,Ut,Pt,rt,le.z,null)}}const At=A.children;for(let Ut=0,Pt=At.length;Ut<Pt;Ut++)Ja(At[Ut],q,rt,nt)}function Nr(A,q,rt,nt){const{opaque:Z,transmissive:At,transparent:Ut}=A;D.setupLightsView(rt),ut===!0&&Wt.setGlobalState(L.clippingPlanes,rt),nt&&Gt.viewport(lt.copy(nt)),Z.length>0&&Zn(Z,q,rt),At.length>0&&Zn(At,q,rt),Ut.length>0&&Zn(Ut,q,rt),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Or(A,q,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[nt.id]===void 0&&(D.state.transmissionRenderTarget[nt.id]=new Rs(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Cr:zi,minFilter:Ts,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const At=D.state.transmissionRenderTarget[nt.id],Ut=nt.viewport||lt;At.setSize(Ut.z*L.transmissionResolutionScale,Ut.w*L.transmissionResolutionScale);const Pt=L.getRenderTarget(),It=L.getActiveCubeFace(),$t=L.getActiveMipmapLevel();L.setRenderTarget(At),L.getClearColor(B),W=L.getClearAlpha(),W<1&&L.setClearColor(16777215,.5),L.clear(),de&&Et.render(rt);const ee=L.toneMapping;L.toneMapping=Ka;const Zt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),D.setupLightsView(nt),ut===!0&&Wt.setGlobalState(L.clippingPlanes,nt),Zn(A,rt,nt),ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At),me.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ae=0,we=q.length;Ae<we;Ae++){const ye=q[Ae],{object:Oe,geometry:Jt,material:We,group:Me}=ye;if(We.side===ua&&Oe.layers.test(nt.layers)){const gn=We.side;We.side=Wn,We.needsUpdate=!0,rn(Oe,rt,nt,Jt,We,Me),We.side=gn,We.needsUpdate=!0,ce=!0}}ce===!0&&(ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At))}L.setRenderTarget(Pt,It,$t),L.setClearColor(B,W),Zt!==void 0&&(nt.viewport=Zt),L.toneMapping=ee}function Zn(A,q,rt){const nt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,At=A.length;Z<At;Z++){const Ut=A[Z],{object:Pt,geometry:It,group:$t}=Ut;let ee=Ut.material;ee.allowOverride===!0&&nt!==null&&(ee=nt),Pt.layers.test(rt.layers)&&rn(Pt,q,rt,It,ee,$t)}}function rn(A,q,rt,nt,Z,At){A.onBeforeRender(L,q,rt,nt,Z,At),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(L,q,rt,nt,A,At),Z.transparent===!0&&Z.side===ua&&Z.forceSinglePass===!1?(Z.side=Wn,Z.needsUpdate=!0,L.renderBufferDirect(rt,q,nt,Z,A,At),Z.side=Qa,Z.needsUpdate=!0,L.renderBufferDirect(rt,q,nt,Z,A,At),Z.side=ua):L.renderBufferDirect(rt,q,nt,Z,A,At),A.onAfterRender(L,q,rt,nt,Z,At)}function dn(A,q,rt){q.isScene!==!0&&(q=en);const nt=jt.get(A),Z=D.state.lights,At=D.state.shadowsArray,Ut=Z.state.version,Pt=ct.getParameters(A,Z.state,At,q,rt),It=ct.getProgramCacheKey(Pt);let $t=nt.programs;nt.environment=A.isMeshStandardMaterial?q.environment:null,nt.fog=q.fog,nt.envMap=(A.isMeshStandardMaterial?b:N).get(A.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",ie),$t=new Map,nt.programs=$t);let ee=$t.get(It);if(ee!==void 0){if(nt.currentProgram===ee&&nt.lightsStateVersion===Ut)return ws(A,Pt),ee}else Pt.uniforms=ct.getUniforms(A),A.onBeforeCompile(Pt,L),ee=ct.acquireProgram(Pt,It),$t.set(It,ee),nt.uniforms=Pt.uniforms;const Zt=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=Wt.uniform),ws(A,Pt),nt.needsLights=qo(A),nt.lightsStateVersion=Ut,nt.needsLights&&(Zt.ambientLightColor.value=Z.state.ambient,Zt.lightProbe.value=Z.state.probe,Zt.directionalLights.value=Z.state.directional,Zt.directionalLightShadows.value=Z.state.directionalShadow,Zt.spotLights.value=Z.state.spot,Zt.spotLightShadows.value=Z.state.spotShadow,Zt.rectAreaLights.value=Z.state.rectArea,Zt.ltc_1.value=Z.state.rectAreaLTC1,Zt.ltc_2.value=Z.state.rectAreaLTC2,Zt.pointLights.value=Z.state.point,Zt.pointLightShadows.value=Z.state.pointShadow,Zt.hemisphereLights.value=Z.state.hemi,Zt.directionalShadowMap.value=Z.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Zt.spotShadowMap.value=Z.state.spotShadowMap,Zt.spotLightMatrix.value=Z.state.spotLightMatrix,Zt.spotLightMap.value=Z.state.spotLightMap,Zt.pointShadowMap.value=Z.state.pointShadowMap,Zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=ee,nt.uniformsList=null,ee}function Bi(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Uc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function ws(A,q){const rt=jt.get(A);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function Gc(A,q,rt,nt,Z){q.isScene!==!0&&(q=en),ae.resetTextureUnits();const At=q.fog,Ut=nt.isMeshStandardMaterial?q.environment:null,Pt=R===null?L.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ar,It=(nt.isMeshStandardMaterial?b:N).get(nt.envMap||Ut),$t=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!rt.morphAttributes.position,ce=!!rt.morphAttributes.normal,Ae=!!rt.morphAttributes.color;let we=Ka;nt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(we=L.toneMapping);const ye=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Oe=ye!==void 0?ye.length:0,Jt=jt.get(nt),We=D.state.lights;if(ut===!0&&(wt===!0||A!==Q)){const vn=A===Q&&nt.id===V;Wt.setState(nt,A,vn)}let Me=!1;nt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==We.state.version||Jt.outputColorSpace!==Pt||Z.isBatchedMesh&&Jt.batching===!1||!Z.isBatchedMesh&&Jt.batching===!0||Z.isBatchedMesh&&Jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Z.isInstancedMesh&&Jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Jt.instancingMorph===!1&&Z.morphTexture!==null||Jt.envMap!==It||nt.fog===!0&&Jt.fog!==At||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Wt.numPlanes||Jt.numIntersection!==Wt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==Zt||Jt.morphNormals!==ce||Jt.morphColors!==Ae||Jt.toneMapping!==we||Jt.morphTargetsCount!==Oe)&&(Me=!0):(Me=!0,Jt.__version=nt.version);let gn=Jt.currentProgram;Me===!0&&(gn=dn(nt,q,Z));let _a=!1,Ye=!1,Ii=!1;const je=gn.getUniforms(),_n=Jt.uniforms;if(Gt.useProgram(gn.program)&&(_a=!0,Ye=!0,Ii=!0),nt.id!==V&&(V=nt.id,Ye=!0),_a||Q!==A){Gt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),je.setValue(F,"projectionMatrix",A.projectionMatrix),je.setValue(F,"viewMatrix",A.matrixWorldInverse);const Mn=je.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,Xt.setFromMatrixPosition(A.matrixWorld)),ze.logarithmicDepthBuffer&&je.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&je.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Ye=!0,Ii=!0)}if(Z.isSkinnedMesh){je.setOptional(F,Z,"bindMatrix"),je.setOptional(F,Z,"bindMatrixInverse");const vn=Z.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),je.setValue(F,"boneTexture",vn.boneTexture,ae))}Z.isBatchedMesh&&(je.setOptional(F,Z,"batchingTexture"),je.setValue(F,"batchingTexture",Z._matricesTexture,ae),je.setOptional(F,Z,"batchingIdTexture"),je.setValue(F,"batchingIdTexture",Z._indirectTexture,ae),je.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&je.setValue(F,"batchingColorTexture",Z._colorsTexture,ae));const hn=rt.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Yt.update(Z,rt,gn),(Ye||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,je.setValue(F,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(_n.envMap.value=It,_n.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&q.environment!==null&&(_n.envMapIntensity.value=q.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=cT()),Ye&&(je.setValue(F,"toneMappingExposure",L.toneMappingExposure),Jt.needsLights&&Vc(_n,Ii),At&&nt.fog===!0&&qt.refreshFogUniforms(_n,At),qt.refreshMaterialUniforms(_n,nt,vt,_t,D.state.transmissionRenderTarget[A.id]),Uc.upload(F,Bi(Jt),_n,ae)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Uc.upload(F,Bi(Jt),_n,ae),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&je.setValue(F,"center",Z.center),je.setValue(F,"modelViewMatrix",Z.modelViewMatrix),je.setValue(F,"normalMatrix",Z.normalMatrix),je.setValue(F,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const vn=nt.uniformsGroups;for(let Mn=0,Ci=vn.length;Mn<Ci;Mn++){const Fi=vn[Mn];Dt.update(Fi,gn),Dt.bind(Fi,gn)}}return gn}function Vc(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function qo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,q,rt){const nt=jt.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),jt.get(A.texture).__webglTexture=q,jt.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const rt=jt.get(A);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const $a=F.createFramebuffer();this.setRenderTarget=function(A,q=0,rt=0){R=A,j=q,w=rt;let nt=!0,Z=null,At=!1,Ut=!1;if(A){const It=jt.get(A);if(It.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(F.FRAMEBUFFER,null),nt=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(It.__hasExternalTextures)ae.rebindTextures(A,jt.get(A.texture).__webglTexture,jt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(It.__boundDepthTexture!==Zt){if(Zt!==null&&jt.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);const ee=jt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?Z=ee[q][rt]:Z=ee[q],At=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?Z=jt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[rt]:Z=ee,lt.copy(A.viewport),pt.copy(A.scissor),ft=A.scissorTest}else lt.copy(yt).multiplyScalar(vt).floor(),pt.copy(Tt).multiplyScalar(vt).floor(),ft=zt;if(rt!==0&&(Z=$a),Gt.bindFramebuffer(F.FRAMEBUFFER,Z)&&nt&&Gt.drawBuffers(A,Z),Gt.viewport(lt),Gt.scissor(pt),Gt.setScissorTest(ft),At){const It=jt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,It.__webglTexture,rt)}else if(Ut){const It=q;for(let $t=0;$t<A.textures.length;$t++){const ee=jt.get(A.textures[$t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$t,ee.__webglTexture,rt,It)}}else if(A!==null&&rt!==0){const It=jt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,rt)}V=-1},this.readRenderTargetPixels=function(A,q,rt,nt,Z,At,Ut,Pt=0){if(!(A&&A.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut]),It){Gt.bindFramebuffer(F.FRAMEBUFFER,It);try{const $t=A.textures[Pt],ee=$t.format,Zt=$t.type;if(!ze.textureFormatReadable(ee)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Zt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-nt&&rt>=0&&rt<=A.height-Z&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(q,rt,nt,Z,ne.convert(ee),ne.convert(Zt),At))}finally{const $t=R!==null?jt.get(R).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,q,rt,nt,Z,At,Ut,Pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(It=It[Ut]),It)if(q>=0&&q<=A.width-nt&&rt>=0&&rt<=A.height-Z){Gt.bindFramebuffer(F.FRAMEBUFFER,It);const $t=A.textures[Pt],ee=$t.format,Zt=$t.type;if(!ze.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.bufferData(F.PIXEL_PACK_BUFFER,At.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pt),F.readPixels(q,rt,nt,Z,ne.convert(ee),ne.convert(Zt),0);const Ae=R!==null?jt.get(R).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,Ae);const we=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Py(F,we,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,At),F.deleteBuffer(ce),F.deleteSync(we),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,rt=0){const nt=Math.pow(2,-rt),Z=Math.floor(A.image.width*nt),At=Math.floor(A.image.height*nt),Ut=q!==null?q.x:0,Pt=q!==null?q.y:0;ae.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,rt,0,0,Ut,Pt,Z,At),Gt.unbindTexture()};const zr=F.createFramebuffer(),ga=F.createFramebuffer();this.copyTextureToTexture=function(A,q,rt=null,nt=null,Z=0,At=null){At===null&&(Z!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=Z,Z=0):At=0);let Ut,Pt,It,$t,ee,Zt,ce,Ae,we;const ye=A.isCompressedTexture?A.mipmaps[At]:A.image;if(rt!==null)Ut=rt.max.x-rt.min.x,Pt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,ee=rt.min.y,Zt=rt.isBox3?rt.min.z:0;else{const hn=Math.pow(2,-Z);Ut=Math.floor(ye.width*hn),Pt=Math.floor(ye.height*hn),A.isDataArrayTexture?It=ye.depth:A.isData3DTexture?It=Math.floor(ye.depth*hn):It=1,$t=0,ee=0,Zt=0}nt!==null?(ce=nt.x,Ae=nt.y,we=nt.z):(ce=0,Ae=0,we=0);const Oe=ne.convert(q.format),Jt=ne.convert(q.type);let We;q.isData3DTexture?(ae.setTexture3D(q,0),We=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ae.setTexture2DArray(q,0),We=F.TEXTURE_2D_ARRAY):(ae.setTexture2D(q,0),We=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Me=F.getParameter(F.UNPACK_ROW_LENGTH),gn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),_a=F.getParameter(F.UNPACK_SKIP_PIXELS),Ye=F.getParameter(F.UNPACK_SKIP_ROWS),Ii=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ye.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zt);const je=A.isDataArrayTexture||A.isData3DTexture,_n=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const hn=jt.get(A),vn=jt.get(q),Mn=jt.get(hn.__renderTarget),Ci=jt.get(vn.__renderTarget);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Fi=0;Fi<It;Fi++)je&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.get(A).__webglTexture,Z,Zt+Fi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.get(q).__webglTexture,At,we+Fi)),F.blitFramebuffer($t,ee,Ut,Pt,ce,Ae,Ut,Pt,F.DEPTH_BUFFER_BIT,F.NEAREST);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||jt.has(A)){const hn=jt.get(A),vn=jt.get(q);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,zr),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,ga);for(let Mn=0;Mn<It;Mn++)je?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hn.__webglTexture,Z,Zt+Mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hn.__webglTexture,Z),_n?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vn.__webglTexture,At,we+Mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vn.__webglTexture,At),Z!==0?F.blitFramebuffer($t,ee,Ut,Pt,ce,Ae,Ut,Pt,F.COLOR_BUFFER_BIT,F.NEAREST):_n?F.copyTexSubImage3D(We,At,ce,Ae,we+Mn,$t,ee,Ut,Pt):F.copyTexSubImage2D(We,At,ce,Ae,$t,ee,Ut,Pt);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(We,At,ce,Ae,we,Ut,Pt,It,Oe,Jt,ye.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(We,At,ce,Ae,we,Ut,Pt,It,Oe,ye.data):F.texSubImage3D(We,At,ce,Ae,we,Ut,Pt,It,Oe,Jt,ye):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,At,ce,Ae,Ut,Pt,Oe,Jt,ye.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,At,ce,Ae,ye.width,ye.height,Oe,ye.data):F.texSubImage2D(F.TEXTURE_2D,At,ce,Ae,Ut,Pt,Oe,Jt,ye);F.pixelStorei(F.UNPACK_ROW_LENGTH,Me),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_a),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ye),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ii),At===0&&q.generateMipmaps&&F.generateMipmap(We),Gt.unbindTexture()},this.initRenderTarget=function(A){jt.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),Gt.unbindTexture()},this.resetState=function(){j=0,w=0,R=null,Gt.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}function fT({className:o,theme:e}){const i=Un.useRef(null);return Un.useEffect(()=>{const s=i.current;if(!s)return;const l=window.matchMedia("(max-width: 768px)").matches||/Mobi|Android|iPhone/i.test(navigator.userAgent),u=l?700:1600,d=l?0:52,h=e==="light",m=new lM;m.fog=new zh(h?15397883:528409,8,24);const p=new si(58,s.clientWidth/s.clientHeight,.1,100);p.position.set(0,.15,6.4);const _=new uT({antialias:!0,alpha:!0});_.setPixelRatio(Math.min(window.devicePixelRatio,l?1.2:1.7)),_.setSize(s.clientWidth,s.clientHeight),_.setClearColor(h?16186367:132619,0),s.appendChild(_.domElement);const v=new yM(h?11981022:11075567,.44),S=new hg(h?6792140:6288344,1.2,50);S.position.set(2.4,2.2,3.5);const M=new hg(h?9680863:7314943,.5,45);M.position.set(-3,-1.4,2),m.add(v,S,M);const T=new Ih(1.15,0),C=new mM({color:h?3508916:6750176,metalness:.34,roughness:.42,emissive:h?4027800:870979,emissiveIntensity:h?.2:.45,wireframe:!0}),y=new ma(T,C);m.add(y);const g=new Yn,U=new Float32Array(u*3);for(let W=0;W<u;W+=1){const X=W*3;U[X]=(Math.random()-.5)*20,U[X+1]=(Math.random()-.5)*12,U[X+2]=(Math.random()-.5)*20}g.setAttribute("position",new Ri(U,3));const D=new yh({color:h?6264510:9107199,size:l?.016:.02,transparent:!0,opacity:h?.46:.66}),z=new lg(g,D);m.add(z);let H=null,L=null,P=null,j=null,w=null,R=null;if(d>0){const W=[],X=[];for(let O=0;O<d;O+=1){const $=new K((Math.random()-.5)*7,(Math.random()-.5)*4,(Math.random()-.5)*7);X.push($),W.push($.x,$.y,$.z)}P=new Yn,P.setAttribute("position",new qn(W,3)),w=new yh({color:h?4950447:6815733,size:.035,transparent:!0,opacity:h?.64:.85}),H=new lg(P,w),m.add(H);const _t=[],vt=1.75;for(let O=0;O<X.length;O+=1)for(let $=O+1;$<X.length;$+=1)X[O].distanceTo(X[$])<vt&&_t.push(X[O].x,X[O].y,X[O].z,X[$].x,X[$].y,X[$].z);j=new Yn,j.setAttribute("position",new qn(_t,3)),R=new o_({color:h?8169932:6871295,transparent:!0,opacity:h?.15:.2}),L=new pM(j,R),m.add(L)}const V=new Se(0,0),Q=W=>{V.x=(W.clientX/window.innerWidth-.5)*.9,V.y=(W.clientY/window.innerHeight-.5)*-.8},lt=()=>{const W=s.clientWidth,X=s.clientHeight;p.aspect=W/X,p.updateProjectionMatrix(),_.setSize(W,X)};window.addEventListener("mousemove",Q),window.addEventListener("resize",lt);const pt=new bM;let ft=0;const B=()=>{ft=requestAnimationFrame(B);const W=pt.getElapsedTime();y.rotation.x=W*.22,y.rotation.y=W*.35,z.rotation.y=W*.02,H&&L&&(H.rotation.y=W*.05,L.rotation.y=W*.05),p.position.x+=(V.x-p.position.x)*.05,p.position.y+=(V.y+.15-p.position.y)*.05,p.lookAt(0,0,0),_.render(m,p)};return B(),()=>{cancelAnimationFrame(ft),window.removeEventListener("mousemove",Q),window.removeEventListener("resize",lt),T.dispose(),C.dispose(),g.dispose(),D.dispose(),P?.dispose(),j?.dispose(),w?.dispose(),R?.dispose(),_.dispose(),s.contains(_.domElement)&&s.removeChild(_.domElement)}},[e]),at.jsx("div",{ref:i,className:o,style:{width:"100%",height:"100%"}})}function dT({content:o,theme:e}){return at.jsxs("section",{className:"hero section",id:"top",children:[at.jsx(fT,{className:"scene-canvas",theme:e}),at.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),at.jsxs("div",{className:"container hero-content",children:[at.jsx("p",{className:"eyebrow",children:o.eyebrow}),at.jsx("h1",{children:o.title}),at.jsx("h2",{children:o.subtitle}),at.jsx("p",{className:"hero-note",children:o.note}),at.jsxs("div",{className:"hero-actions",children:[at.jsx(Ig,{href:"#projects",children:o.primaryCta}),at.jsx("a",{className:"btn-secondary",href:"#contact",children:o.secondaryCta})]})]})]})}function x_({title:o,children:e,className:i=""}){return at.jsxs("article",{className:`surface-card ${i}`.trim(),children:[at.jsx("h3",{children:o}),e]})}function hT({content:o}){return at.jsx("section",{className:"section",id:"projects",children:at.jsxs("div",{className:"container",children:[at.jsx("p",{className:"section-kicker",children:o.kicker}),at.jsxs("h2",{className:"section-title with-icon",children:[at.jsx(HS,{}),o.title]}),at.jsx("div",{className:"card-grid projects-grid",children:o.items.map((e,i)=>at.jsxs(x_,{title:e.title,className:`project-card tone-${i%6+1}`,children:[at.jsxs("p",{children:[at.jsxs("strong",{className:"meta-with-icon",children:[at.jsx(VS,{}),o.backgroundLabel,":"]})," ",e.background]}),at.jsxs("p",{children:[at.jsxs("strong",{className:"meta-with-icon",children:[at.jsx(kS,{}),o.solutionLabel,":"]})," ",e.solution]}),at.jsxs("p",{children:[at.jsxs("strong",{className:"meta-with-icon",children:[at.jsx(XS,{}),o.resultLabel,":"]})," ",e.result]})]},e.title))})]})})}function pT({content:o}){return at.jsx("section",{className:"section",id:"scope",children:at.jsxs("div",{className:"container scope-panel",children:[at.jsx("p",{className:"section-kicker",children:o.kicker}),at.jsxs("h2",{className:"section-title with-icon",children:[at.jsx(GS,{}),o.title]}),at.jsx("p",{className:"section-copy",children:o.description}),at.jsx("ul",{className:"tag-list scope-tags","aria-label":"full chain scope",children:o.chain.map(e=>at.jsx("li",{className:"tag",children:e},e))})]})})}function mT({content:o}){const e=[wx,PS,BS,IS,FS,Dx];return at.jsx("section",{className:"section",id:"services",children:at.jsxs("div",{className:"container",children:[at.jsx("p",{className:"section-kicker",children:o.kicker}),at.jsxs("h2",{className:"section-title with-icon",children:[at.jsx(wx,{}),o.title]}),at.jsx("div",{className:"card-grid services-grid",children:o.items.map((i,s)=>{const l=e[s]??Dx,u=`tone-${s%6+1}`;return at.jsxs(x_,{className:u,title:at.jsxs("span",{className:"card-title-with-icon",children:[at.jsx(l,{}),i.title]}),children:[at.jsx("p",{children:i.description}),at.jsx("ul",{className:"capability-list",children:i.points.map(d=>at.jsx("li",{children:d},d))})]},i.title)})})]})})}const g_="site.locale",__="site.theme",xT=120,gT=220,_T=()=>{if(typeof window>"u")return"en";const o=window.localStorage.getItem(g_);return o==="en"||o==="zh"?o:window.navigator.language.toLowerCase().startsWith("zh")?"zh":"en"},vT=()=>{if(typeof window>"u")return"dark";const o=window.localStorage.getItem(__);return o==="dark"||o==="light"?o:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};function ST(){const[o,e]=Un.useState(_T),[i,s]=Un.useState(vT),[l,u]=Un.useState(!1),d=Un.useRef(null),h=Un.useRef(null),m=Un.useRef(null);Un.useEffect(()=>{document.documentElement.setAttribute("data-theme",i),window.localStorage.setItem(__,i)},[i]),Un.useEffect(()=>{document.documentElement.lang=o==="zh"?"zh-CN":"en",window.localStorage.setItem(g_,o)},[o]),Un.useEffect(()=>{const g=document.documentElement,U=d.current;if(!U)return;const D=()=>{g.style.setProperty("--toolbar-height",`${U.offsetHeight}px`)};D(),window.addEventListener("resize",D);const z=new ResizeObserver(D);return z.observe(U),()=>{z.disconnect(),window.removeEventListener("resize",D)}},[o]),Un.useEffect(()=>()=>{h.current&&window.clearTimeout(h.current),m.current&&window.clearTimeout(m.current)},[]);const p=g=>{l||(u(!0),h.current&&window.clearTimeout(h.current),m.current&&window.clearTimeout(m.current),h.current=window.setTimeout(()=>{g(),m.current=window.setTimeout(()=>{u(!1)},gT)},xT))},_=g=>{g!==o&&p(()=>e(g))},v=g=>{g!==i&&p(()=>s(g))},S=WS[o],M=o==="zh"?"陈坤":"CHENKUN",T=o==="zh"?"CHENKUN":"陈坤",C=o==="zh"?"name-zh":"name-en",y=o==="zh"?"name-en":"name-zh";return at.jsxs("div",{className:`site-shell ${l?"is-switching":""}`,children:[at.jsx("header",{ref:d,className:"site-toolbar",children:at.jsxs("div",{className:"container toolbar-inner",children:[at.jsxs("div",{className:"site-brand","aria-label":"site owner name",children:[at.jsx("span",{className:`brand-name brand-primary ${C}`,children:M}),at.jsx("span",{className:"brand-separator",children:"/"}),at.jsx("span",{className:`brand-name brand-secondary ${y}`,children:T})]}),at.jsxs("div",{className:"toolbar-block",children:[at.jsxs("span",{className:"toolbar-label with-icon",children:[at.jsx(NS,{}),S.ui.language]}),at.jsxs("div",{className:"toggle-group",children:[at.jsx("button",{className:`toggle-chip ${o==="en"?"is-active":""}`,type:"button",onClick:()=>_("en"),disabled:l,children:S.ui.english}),at.jsx("button",{className:`toggle-chip ${o==="zh"?"is-active":""}`,type:"button",onClick:()=>_("zh"),disabled:l,children:S.ui.chinese})]})]}),at.jsxs("div",{className:"toolbar-block",children:[at.jsxs("span",{className:"toolbar-label with-icon",children:[at.jsx(OS,{}),S.ui.theme]}),at.jsxs("div",{className:"toggle-group",children:[at.jsx("button",{className:`toggle-chip ${i==="dark"?"is-active":""}`,type:"button",onClick:()=>v("dark"),disabled:l,children:S.ui.dark}),at.jsx("button",{className:`toggle-chip ${i==="light"?"is-active":""}`,type:"button",onClick:()=>v("light"),disabled:l,children:S.ui.light})]})]})]})}),at.jsx(dT,{content:S.hero,theme:i}),at.jsxs("main",{children:[at.jsx(qS,{content:S.about}),at.jsx(mT,{content:S.services}),at.jsx(hT,{content:S.projects}),at.jsx(pT,{content:S.scope}),at.jsx(YS,{content:S.contact})]})]})}LS.createRoot(document.getElementById("root")).render(at.jsx(Un.StrictMode,{children:at.jsx(ST,{})}));
