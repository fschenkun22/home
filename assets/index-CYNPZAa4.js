(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Wf={exports:{}},yo={};var _x;function gS(){if(_x)return yo;_x=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return yo.Fragment=e,yo.jsx=i,yo.jsxs=i,yo}var vx;function _S(){return vx||(vx=1,Wf.exports=gS()),Wf.exports}var Nt=_S(),qf={exports:{}},se={};var Sx;function vS(){if(Sx)return se;Sx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=S&&P[S]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(P,st,yt){this.props=P,this.context=st,this.refs=y,this.updater=yt||T}v.prototype.isReactComponent={},v.prototype.setState=function(P,st){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,st,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function U(){}U.prototype=v.prototype;function D(P,st,yt){this.props=P,this.context=st,this.refs=y,this.updater=yt||T}var O=D.prototype=new U;O.constructor=D,C(O,v.prototype),O.isPureReactComponent=!0;var H=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function w(P,st,yt){var Et=yt.ref;return{$$typeof:o,type:P,key:st,ref:Et!==void 0?Et:null,props:yt}}function R(P,st){return w(P.type,st,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function Q(P){var st={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(yt){return st[yt]})}var lt=/\/+/g;function mt(P,st){return typeof P=="object"&&P!==null&&P.key!=null?Q(""+P.key):st.toString(36)}function rt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(L,L):(P.status="pending",P.then(function(st){P.status==="pending"&&(P.status="fulfilled",P.value=st)},function(st){P.status==="pending"&&(P.status="rejected",P.reason=st)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function z(P,st,yt,Et,Pt){var it=typeof P;(it==="undefined"||it==="boolean")&&(P=null);var ut=!1;if(P===null)ut=!0;else switch(it){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(P.$$typeof){case o:case e:ut=!0;break;case _:return ut=P._init,z(ut(P._payload),st,yt,Et,Pt)}}if(ut)return Pt=Pt(P),ut=Et===""?"."+mt(P,0):Et,H(Pt)?(yt="",ut!=null&&(yt=ut.replace(lt,"$&/")+"/"),z(Pt,st,yt,"",function(Xt){return Xt})):Pt!=null&&(V(Pt)&&(Pt=R(Pt,yt+(Pt.key==null||P&&P.key===Pt.key?"":(""+Pt.key).replace(lt,"$&/")+"/")+ut)),st.push(Pt)),1;ut=0;var Ct=Et===""?".":Et+":";if(H(P))for(var Ht=0;Ht<P.length;Ht++)Et=P[Ht],it=Ct+mt(Et,Ht),ut+=z(Et,st,yt,it,Pt);else if(Ht=M(P),typeof Ht=="function")for(P=Ht.call(P),Ht=0;!(Et=P.next()).done;)Et=Et.value,it=Ct+mt(Et,Ht++),ut+=z(Et,st,yt,it,Pt);else if(it==="object"){if(typeof P.then=="function")return z(rt(P),st,yt,Et,Pt);throw st=String(P),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return ut}function Z(P,st,yt){if(P==null)return P;var Et=[],Pt=0;return z(P,Et,"","",function(it){return st.call(yt,it,Pt++)}),Et}function j(P){if(P._status===-1){var st=P._result;st=st(),st.then(function(yt){(P._status===0||P._status===-1)&&(P._status=1,P._result=yt)},function(yt){(P._status===0||P._status===-1)&&(P._status=2,P._result=yt)}),P._status===-1&&(P._status=0,P._result=st)}if(P._status===1)return P._result.default;throw P._result}var dt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},pt={map:Z,forEach:function(P,st,yt){Z(P,function(){st.apply(this,arguments)},yt)},count:function(P){var st=0;return Z(P,function(){st++}),st},toArray:function(P){return Z(P,function(st){return st})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return se.Activity=g,se.Children=pt,se.Component=v,se.Fragment=i,se.Profiler=l,se.PureComponent=D,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,se.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},se.cache=function(P){return function(){return P.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(P,st,yt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Et=C({},P.props),Pt=P.key;if(st!=null)for(it in st.key!==void 0&&(Pt=""+st.key),st)!q.call(st,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&st.ref===void 0||(Et[it]=st[it]);var it=arguments.length-2;if(it===1)Et.children=yt;else if(1<it){for(var ut=Array(it),Ct=0;Ct<it;Ct++)ut[Ct]=arguments[Ct+2];Et.children=ut}return w(P.type,Pt,Et)},se.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},se.createElement=function(P,st,yt){var Et,Pt={},it=null;if(st!=null)for(Et in st.key!==void 0&&(it=""+st.key),st)q.call(st,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Pt[Et]=st[Et]);var ut=arguments.length-2;if(ut===1)Pt.children=yt;else if(1<ut){for(var Ct=Array(ut),Ht=0;Ht<ut;Ht++)Ct[Ht]=arguments[Ht+2];Pt.children=Ct}if(P&&P.defaultProps)for(Et in ut=P.defaultProps,ut)Pt[Et]===void 0&&(Pt[Et]=ut[Et]);return w(P,it,Pt)},se.createRef=function(){return{current:null}},se.forwardRef=function(P){return{$$typeof:h,render:P}},se.isValidElement=V,se.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:j}},se.memo=function(P,st){return{$$typeof:p,type:P,compare:st===void 0?null:st}},se.startTransition=function(P){var st=B.T,yt={};B.T=yt;try{var Et=P(),Pt=B.S;Pt!==null&&Pt(yt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(L,dt)}catch(it){dt(it)}finally{st!==null&&yt.types!==null&&(st.types=yt.types),B.T=st}},se.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},se.use=function(P){return B.H.use(P)},se.useActionState=function(P,st,yt){return B.H.useActionState(P,st,yt)},se.useCallback=function(P,st){return B.H.useCallback(P,st)},se.useContext=function(P){return B.H.useContext(P)},se.useDebugValue=function(){},se.useDeferredValue=function(P,st){return B.H.useDeferredValue(P,st)},se.useEffect=function(P,st){return B.H.useEffect(P,st)},se.useEffectEvent=function(P){return B.H.useEffectEvent(P)},se.useId=function(){return B.H.useId()},se.useImperativeHandle=function(P,st,yt){return B.H.useImperativeHandle(P,st,yt)},se.useInsertionEffect=function(P,st){return B.H.useInsertionEffect(P,st)},se.useLayoutEffect=function(P,st){return B.H.useLayoutEffect(P,st)},se.useMemo=function(P,st){return B.H.useMemo(P,st)},se.useOptimistic=function(P,st){return B.H.useOptimistic(P,st)},se.useReducer=function(P,st,yt){return B.H.useReducer(P,st,yt)},se.useRef=function(P){return B.H.useRef(P)},se.useState=function(P){return B.H.useState(P)},se.useSyncExternalStore=function(P,st,yt){return B.H.useSyncExternalStore(P,st,yt)},se.useTransition=function(){return B.H.useTransition()},se.version="19.2.4",se}var yx;function bh(){return yx||(yx=1,qf.exports=vS()),qf.exports}var Ud=bh(),Yf={exports:{}},Mo={},jf={exports:{}},Zf={};var Mx;function SS(){return Mx||(Mx=1,(function(o){function e(z,Z){var j=z.length;z.push(Z);t:for(;0<j;){var dt=j-1>>>1,pt=z[dt];if(0<l(pt,Z))z[dt]=Z,z[j]=pt,j=dt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Z=z[0],j=z.pop();if(j!==Z){z[0]=j;t:for(var dt=0,pt=z.length,P=pt>>>1;dt<P;){var st=2*(dt+1)-1,yt=z[st],Et=st+1,Pt=z[Et];if(0>l(yt,j))Et<pt&&0>l(Pt,yt)?(z[dt]=Pt,z[Et]=j,dt=Et):(z[dt]=yt,z[st]=j,dt=st);else if(Et<pt&&0>l(Pt,j))z[dt]=Pt,z[Et]=j,dt=Et;else break t}}return Z}function l(z,Z){var j=z.sortIndex-Z.sortIndex;return j!==0?j:z.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,g=null,S=3,M=!1,T=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function O(z){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=z)s(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function H(z){if(C=!1,O(z),!T)if(i(m)!==null)T=!0,L||(L=!0,Q());else{var Z=i(p);Z!==null&&rt(H,Z.startTime-z)}}var L=!1,B=-1,q=5,w=-1;function R(){return y?!0:!(o.unstable_now()-w<q)}function V(){if(y=!1,L){var z=o.unstable_now();w=z;var Z=!0;try{t:{T=!1,C&&(C=!1,U(B),B=-1),M=!0;var j=S;try{e:{for(O(z),g=i(m);g!==null&&!(g.expirationTime>z&&R());){var dt=g.callback;if(typeof dt=="function"){g.callback=null,S=g.priorityLevel;var pt=dt(g.expirationTime<=z);if(z=o.unstable_now(),typeof pt=="function"){g.callback=pt,O(z),Z=!0;break e}g===i(m)&&s(m),O(z)}else s(m);g=i(m)}if(g!==null)Z=!0;else{var P=i(p);P!==null&&rt(H,P.startTime-z),Z=!1}}break t}finally{g=null,S=j,M=!1}Z=void 0}}finally{Z?Q():L=!1}}}var Q;if(typeof D=="function")Q=function(){D(V)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,mt=lt.port2;lt.port1.onmessage=V,Q=function(){mt.postMessage(null)}}else Q=function(){v(V,0)};function rt(z,Z){B=v(function(){z(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var j=S;S=Z;try{return z()}finally{S=j}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=S;S=z;try{return Z()}finally{S=j}},o.unstable_scheduleCallback=function(z,Z,j){var dt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?dt+j:dt):j=dt,z){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=j+pt,z={id:_++,callback:Z,priorityLevel:z,startTime:j,expirationTime:pt,sortIndex:-1},j>dt?(z.sortIndex=j,e(p,z),i(m)===null&&z===i(p)&&(C?(U(B),B=-1):C=!0,rt(H,j-dt))):(z.sortIndex=pt,e(m,z),T||M||(T=!0,L||(L=!0,Q()))),z},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(z){var Z=S;return function(){var j=S;S=Z;try{return z.apply(this,arguments)}finally{S=j}}}})(Zf)),Zf}var bx;function yS(){return bx||(bx=1,jf.exports=SS()),jf.exports}var Kf={exports:{}},Cn={};var Ex;function MS(){if(Ex)return Cn;Ex=1;var o=bh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Cn.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.2.4",Cn}var Tx;function bS(){if(Tx)return Kf.exports;Tx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Kf.exports=MS(),Kf.exports}var Ax;function ES(){if(Ax)return Mo;Ax=1;var o=yS(),e=bh(),i=bS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,r=f;break}if(E===r){x=!0,r=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,r=c;break}if(E===r){x=!0,r=f,a=c;break}E=E.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case L:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case D:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var rt=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},dt=[],pt=-1;function P(t){return{current:t}}function st(t){0>pt||(t.current=dt[pt],dt[pt]=null,pt--)}function yt(t,n){pt++,dt[pt]=t.current,t.current=n}var Et=P(null),Pt=P(null),it=P(null),ut=P(null);function Ct(t,n){switch(yt(it,n),yt(Pt,t),yt(Et,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Gm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Gm(n),t=Vm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}st(Et),yt(Et,t)}function Ht(){st(Et),st(Pt),st(it)}function Xt(t){t.memoizedState!==null&&yt(ut,t);var n=Et.current,a=Vm(n,t.type);n!==a&&(yt(Pt,t),yt(Et,a))}function le(t){Pt.current===t&&(st(Et),st(Pt)),ut.current===t&&(st(ut),go._currentValue=j)}var en,de;function Re(t){if(en===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+de}var I=!1;function he(t,n){if(!t||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var nt=ot}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(ot){nt=ot}t.call(gt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var F=x.split(`
`),tt=E.split(`
`);for(c=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(r===F.length||c===tt.length)for(r=F.length-1,c=tt.length-1;1<=r&&0<=c&&F[r]!==tt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(F[r]!==tt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||F[r]!==tt[c]){var ft=`
`+F[r].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=r&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Re(a):""}function me(t,n){switch(t.tag){case 26:case 27:case 5:return Re(t.type);case 16:return Re("Lazy");case 13:return t.child!==n&&n!==null?Re("Suspense Fallback"):Re("Suspense");case 19:return Re("SuspenseList");case 0:case 15:return he(t.type,!1);case 11:return he(t.type.render,!1);case 1:return he(t.type,!0);case 31:return Re("Activity");default:return""}}function Pe(t){try{var n="",a=null;do n+=me(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Gt=Object.prototype.hasOwnProperty,Xe=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,ae=o.unstable_shouldYield,N=o.unstable_requestPaint,b=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,xt=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Qt=o.log,Wt=o.unstable_setDisableYieldValue,St=null,bt=null;function Yt(t){if(typeof Qt=="function"&&Wt(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(St,t)}catch{}}var Vt=Math.clz32?Math.clz32:G,Ot=Math.log,ne=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(Ot(t)/ne|0)|0}var wt=256,At=262144,Rt=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Mt(r):(x&=E,x!==0?c=Mt(x):a||(a=E&~t,a!==0&&(c=Mt(a))))):(E=r&~f,E!==0?c=Mt(E):x!==0?c=Mt(x):a||(a=r&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Bt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function Ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Rn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wn(t,n,a,r,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,F=t.expirationTimes,tt=t.hiddenUpdates;for(a=x&~a;0<a;){var ft=31-Vt(a),gt=1<<ft;E[ft]=0,F[ft]=-1;var nt=tt[ft];if(nt!==null)for(tt[ft]=null,ft=0;ft<nt.length;ft++){var ot=nt[ft];ot!==null&&(ot.lane&=-536870913)}a&=~gt}r!==0&&Vo(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Vo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Vt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Cr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Vt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function wr(t,n){var a=n&-n;return a=(a&42)!==0?1:mi(a),(a&(t.suspendedLanes|n))!==0?0:a}function mi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Za(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Dr(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:fx(t.type))}function Ur(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var qn=Math.random().toString(36).slice(2),rn="__reactFiber$"+qn,dn="__reactProps$"+qn,Oi="__reactContainer$"+qn,As="__reactEvents$"+qn,Fc="__reactListeners$"+qn,Ic="__reactHandles$"+qn,ko="__reactResources$"+qn,Ka="__reactMarker$"+qn;function Lr(t){delete t[rn],delete t[dn],delete t[As],delete t[Fc],delete t[Ic]}function pa(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Oi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Zm(t);t!==null;){if(a=t[rn])return a;t=Zm(t)}return n}t=a,a=t.parentNode}return null}function A(t){if(t=t[rn]||t[Oi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function X(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function at(t){var n=t[ko];return n||(n=t[ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function et(t){t[Ka]=!0}var Y=new Set,Tt={};function Dt(t,n){zt(t,n),zt(t+"Capture",n)}function zt(t,n){for(Tt[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ee={};function Zt(t){return Gt.call(ee,t)?!0:Gt.call($t,t)?!1:Ft.test(t)?ee[t]=!0:($t[t]=!0,!1)}function ce(t,n,a){if(Zt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function we(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ye(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){if(!t._valueTracker){var n=Oe(t)?"checked":"value";t._valueTracker=Jt(t,n,""+t[n])}}function Me(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Oe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ma=/[\n"\\]/g;function Ye(t){return t.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(t,n,a,r,c,f,x,E){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ye(n)):t.value!==""+ye(n)&&(t.value=""+ye(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?_n(t,x,ye(n)):a!=null?_n(t,x,ye(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ye(E):t.removeAttribute("name")}function je(t,n,a,r,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(t);return}a=a!=null?""+ye(a):"",n=n!=null?""+ye(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),We(t)}function _n(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function hn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ye(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function vn(t,n,a){if(n!=null&&(n=""+ye(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ye(a):""}function Mn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(rt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ye(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),We(t)}function Ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fh(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ih(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Fh(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Fh(t,f,n[f])}function Hc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),p_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(t){return p_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var Gc=null;function Vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rs=null,Cs=null;function Hh(t){var n=A(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Pi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[dn]||null;if(!c)throw Error(s(90));Pi(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Me(r)}break t;case"textarea":vn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hn(t,!!a.multiple,n,!1)}}}var kc=!1;function Gh(t,n,a){if(kc)return t(n,a);kc=!0;try{var r=t(n);return r}finally{if(kc=!1,(Rs!==null||Cs!==null)&&(Ul(),Rs&&(n=Rs,t=Cs,Cs=Rs=null,Hh(n),t)))for(n=0;n<t.length;n++)Hh(t[n])}}function Nr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[dn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=!1;if(Fi)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Xc=!1}var xa=null,Wc=null,Wo=null;function Vh(){if(Wo)return Wo;var t,n=Wc,a=n.length,r,c="value"in xa?xa.value:xa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(r=1;r<=x&&n[a-r]===c[f-r];r++);return Wo=c.slice(t,1<r?1-r:void 0)}function qo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function kh(){return!1}function Pn(t){function n(a,r,c,f,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:kh,this.isPropagationStopped=kh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=Pn(Qa),Pr=g({},Qa,{view:0,detail:0}),m_=Pn(Pr),qc,Yc,zr,Zo=g({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zr&&(zr&&t.type==="mousemove"?(qc=t.screenX-zr.screenX,Yc=t.screenY-zr.screenY):Yc=qc=0,zr=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),Xh=Pn(Zo),x_=g({},Zo,{dataTransfer:0}),g_=Pn(x_),__=g({},Pr,{relatedTarget:0}),jc=Pn(__),v_=g({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),S_=Pn(v_),y_=g({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M_=Pn(y_),b_=g({},Qa,{data:0}),Wh=Pn(b_),E_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=A_[t])?!!n[t]:!1}function Zc(){return R_}var C_=g({},Pr,{key:function(t){if(t.key){var n=E_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?T_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w_=Pn(C_),D_=g({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=Pn(D_),U_=g({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),L_=Pn(U_),N_=g({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),O_=Pn(N_),P_=g({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z_=Pn(P_),B_=g({},Qa,{newState:0,oldState:0}),F_=Pn(B_),I_=[9,13,27,32],Kc=Fi&&"CompositionEvent"in window,Br=null;Fi&&"documentMode"in document&&(Br=document.documentMode);var H_=Fi&&"TextEvent"in window&&!Br,Yh=Fi&&(!Kc||Br&&8<Br&&11>=Br),jh=" ",Zh=!1;function Kh(t,n){switch(t){case"keyup":return I_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function G_(t,n){switch(t){case"compositionend":return Qh(n);case"keypress":return n.which!==32?null:(Zh=!0,jh);case"textInput":return t=n.data,t===jh&&Zh?null:t;default:return null}}function V_(t,n){if(ws)return t==="compositionend"||!Kc&&Kh(t,n)?(t=Vh(),Wo=Wc=xa=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yh&&n.locale!=="ko"?null:n.data;default:return null}}var k_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!k_[t.type]:n==="textarea"}function $h(t,n,a,r){Rs?Cs?Cs.push(r):Cs=[r]:Rs=r,n=Fl(n,"onChange"),0<n.length&&(a=new jo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Fr=null,Ir=null;function X_(t){Pm(t,0)}function Ko(t){var n=X(t);if(Me(n))return t}function tp(t,n){if(t==="change")return n}var ep=!1;if(Fi){var Qc;if(Fi){var Jc="oninput"in document;if(!Jc){var np=document.createElement("div");np.setAttribute("oninput","return;"),Jc=typeof np.oninput=="function"}Qc=Jc}else Qc=!1;ep=Qc&&(!document.documentMode||9<document.documentMode)}function ip(){Fr&&(Fr.detachEvent("onpropertychange",ap),Ir=Fr=null)}function ap(t){if(t.propertyName==="value"&&Ko(Ir)){var n=[];$h(n,Ir,t,Vc(t)),Gh(X_,n)}}function W_(t,n,a){t==="focusin"?(ip(),Fr=n,Ir=a,Fr.attachEvent("onpropertychange",ap)):t==="focusout"&&ip()}function q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ko(Ir)}function Y_(t,n){if(t==="click")return Ko(n)}function j_(t,n){if(t==="input"||t==="change")return Ko(n)}function Z_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Z_;function Hr(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Gt.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,n){var a=sp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=sp(a)}}function op(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?op(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function lp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function $c(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var K_=Fi&&"documentMode"in document&&11>=document.documentMode,Ds=null,tu=null,Gr=null,eu=!1;function cp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||Ds==null||Ds!==gn(r)||(r=Ds,"selectionStart"in r&&$c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Hr(Gr,r)||(Gr=r,r=Fl(tu,"onSelect"),0<r.length&&(n=new jo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ds)))}function Ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Us={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},nu={},up={};Fi&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function $a(t){if(nu[t])return nu[t];if(!Us[t])return t;var n=Us[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in up)return nu[t]=n[a];return t}var fp=$a("animationend"),dp=$a("animationiteration"),hp=$a("animationstart"),Q_=$a("transitionrun"),J_=$a("transitionstart"),$_=$a("transitioncancel"),pp=$a("transitionend"),mp=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function xi(t,n){mp.set(t,n),Dt(n,[t])}var Qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Ls=0,au=0;function Jo(){for(var t=Ls,n=au=Ls=0;n<t;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}f!==0&&xp(a,c,f)}}function $o(t,n,a,r){ai[Ls++]=t,ai[Ls++]=n,ai[Ls++]=a,ai[Ls++]=r,au|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function su(t,n,a,r){return $o(t,n,a,r),tl(t)}function ts(t,n){return $o(t,null,null,n),tl(t)}function xp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Vt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function tl(t){if(50<co)throw co=0,mf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ns={};function tv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,r){return new tv(t,n,a,r)}function ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function gp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function el(t,n,a,r,c,f){var x=0;if(r=t,typeof t=="function")ru(t)&&(x=1);else if(typeof t=="string")x=sS(t,a,Et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=jn(31,a,n,c),t.elementType=w,t.lanes=f,t;case C:return es(a.children,c,f,n);case y:x=8,c|=24;break;case v:return t=jn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case H:return t=jn(13,a,n,c),t.elementType=H,t.lanes=f,t;case L:return t=jn(19,a,n,c),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:x=10;break t;case U:x=9;break t;case O:x=11;break t;case B:x=14;break t;case q:x=16,r=null;break t}x=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=jn(x,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function es(t,n,a,r){return t=jn(7,t,r,n),t.lanes=a,t}function ou(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function _p(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function lu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var vp=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=vp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Pe(n)},vp.set(t,n),n)}return{value:t,source:n,stack:Pe(n)}}var Os=[],Ps=0,nl=null,Vr=0,ri=[],oi=0,ga=null,Ai=1,Ri="";function Hi(t,n){Os[Ps++]=Vr,Os[Ps++]=nl,nl=t,Vr=n}function Sp(t,n,a){ri[oi++]=Ai,ri[oi++]=Ri,ri[oi++]=ga,ga=t;var r=Ai;t=Ri;var c=32-Vt(r)-1;r&=~(1<<c),a+=1;var f=32-Vt(n)+c;if(30<f){var x=c-c%5;f=(r&(1<<x)-1).toString(32),r>>=x,c-=x,Ai=1<<32-Vt(n)+c|a<<c|r,Ri=f+t}else Ai=1<<f|a<<c|r,Ri=t}function cu(t){t.return!==null&&(Hi(t,1),Sp(t,1,0))}function uu(t){for(;t===nl;)nl=Os[--Ps],Os[Ps]=null,Vr=Os[--Ps],Os[Ps]=null;for(;t===ga;)ga=ri[--oi],ri[oi]=null,Ri=ri[--oi],ri[oi]=null,Ai=ri[--oi],ri[oi]=null}function yp(t,n){ri[oi++]=Ai,ri[oi++]=Ri,ri[oi++]=ga,Ai=n.id,Ri=n.overflow,ga=t}var bn=null,Ze=null,be=!1,_a=null,li=!1,fu=Error(s(519));function va(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kr(si(n,t)),fu}function Mp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[rn]=t,n[dn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)ge(fo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),je(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Mn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Im(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||va(t,!0)}function bp(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:bn=bn.return}}function zs(t){if(t!==bn)return!1;if(!be)return bp(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Df(t.type,t.memoizedProps)),a=!a),a&&Ze&&va(t),bp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=jm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=jm(t)}else n===27?(n=Ze,Na(t.type)?(t=Pf,Pf=null,Ze=t):Ze=n):Ze=bn?ui(t.stateNode.nextSibling):null;return!0}function ns(){Ze=bn=null,be=!1}function du(){var t=_a;return t!==null&&(In===null?In=t:In.push.apply(In,t),_a=null),t}function kr(t){_a===null?_a=[t]:_a.push(t)}var hu=P(null),is=null,Gi=null;function Sa(t,n,a){yt(hu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=hu.current,st(hu)}function pu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function mu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var F=0;F<n.length;F++)if(E.context===n[F]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),pu(f.return,a,t),r||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),pu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Bs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var E=c.type;Yn(c.pendingProps.value,x.value)||(t!==null?t.push(E):t=[E])}}else if(c===ut.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(go):t=[go])}c=c.return}t!==null&&mu(n,t,a,r),n.flags|=262144}function il(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function as(t){is=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return Ep(is,t)}function al(t,n){return is===null&&as(t),Ep(t,n)}function Ep(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(s(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var ev=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},nv=o.unstable_scheduleCallback,iv=o.unstable_NormalPriority,on={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new ev,data:new Map,refCount:0}}function Xr(t){t.refCount--,t.refCount===0&&nv(iv,function(){t.controller.abort()})}var Wr=null,gu=0,Fs=0,Is=null;function av(t,n){if(Wr===null){var a=Wr=[];gu=0,Fs=yf(),Is={status:"pending",value:void 0,then:function(r){a.push(r)}}}return gu++,n.then(Tp,Tp),n}function Tp(){if(--gu===0&&Wr!==null){Is!==null&&(Is.status="fulfilled");var t=Wr;Wr=null,Fs=0,Is=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function sv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Ap=z.S;z.S=function(t,n){cm=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&av(t,n),Ap!==null&&Ap(t,n)};var ss=P(null);function _u(){var t=ss.current;return t!==null?t:qe.pooledCache}function sl(t,n){n===null?yt(ss,ss.current):yt(ss,n.pool)}function Rp(){var t=_u();return t===null?null:{parent:on._currentValue,pool:t}}var Hs=Error(s(460)),vu=Error(s(474)),rl=Error(s(542)),ol={then:function(){}};function Cp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Up(t),t;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Up(t),t}throw os=n,Hs}}function rs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(os=a,Hs):a}}var os=null;function Dp(){if(os===null)throw Error(s(459));var t=os;return os=null,t}function Up(t){if(t===Hs||t===rl)throw Error(s(483))}var Gs=null,qr=0;function ll(t){var n=qr;return qr+=1,Gs===null&&(Gs=[]),wp(Gs,t,n)}function Yr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function cl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Lp(t){function n(W,k){if(t){var J=W.deletions;J===null?(W.deletions=[k],W.flags|=16):J.push(k)}}function a(W,k){if(!t)return null;for(;k!==null;)n(W,k),k=k.sibling;return null}function r(W){for(var k=new Map;W!==null;)W.key!==null?k.set(W.key,W):k.set(W.index,W),W=W.sibling;return k}function c(W,k){return W=Ii(W,k),W.index=0,W.sibling=null,W}function f(W,k,J){return W.index=J,t?(J=W.alternate,J!==null?(J=J.index,J<k?(W.flags|=67108866,k):J):(W.flags|=67108866,k)):(W.flags|=1048576,k)}function x(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,k,J,ht){return k===null||k.tag!==6?(k=ou(J,W.mode,ht),k.return=W,k):(k=c(k,J),k.return=W,k)}function F(W,k,J,ht){var Kt=J.type;return Kt===C?ft(W,k,J.props.children,ht,J.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===q&&rs(Kt)===k.type)?(k=c(k,J.props),Yr(k,J),k.return=W,k):(k=el(J.type,J.key,J.props,null,W.mode,ht),Yr(k,J),k.return=W,k)}function tt(W,k,J,ht){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=lu(J,W.mode,ht),k.return=W,k):(k=c(k,J.children||[]),k.return=W,k)}function ft(W,k,J,ht,Kt){return k===null||k.tag!==7?(k=es(J,W.mode,ht,Kt),k.return=W,k):(k=c(k,J),k.return=W,k)}function gt(W,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ou(""+k,W.mode,J),k.return=W,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=el(k.type,k.key,k.props,null,W.mode,J),Yr(J,k),J.return=W,J;case T:return k=lu(k,W.mode,J),k.return=W,k;case q:return k=rs(k),gt(W,k,J)}if(rt(k)||Q(k))return k=es(k,W.mode,J,null),k.return=W,k;if(typeof k.then=="function")return gt(W,ll(k),J);if(k.$$typeof===D)return gt(W,al(W,k),J);cl(W,k)}return null}function nt(W,k,J,ht){var Kt=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Kt!==null?null:E(W,k,""+J,ht);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Kt?F(W,k,J,ht):null;case T:return J.key===Kt?tt(W,k,J,ht):null;case q:return J=rs(J),nt(W,k,J,ht)}if(rt(J)||Q(J))return Kt!==null?null:ft(W,k,J,ht,null);if(typeof J.then=="function")return nt(W,k,ll(J),ht);if(J.$$typeof===D)return nt(W,k,al(W,J),ht);cl(W,J)}return null}function ot(W,k,J,ht,Kt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(J)||null,E(k,W,""+ht,Kt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case M:return W=W.get(ht.key===null?J:ht.key)||null,F(k,W,ht,Kt);case T:return W=W.get(ht.key===null?J:ht.key)||null,tt(k,W,ht,Kt);case q:return ht=rs(ht),ot(W,k,J,ht,Kt)}if(rt(ht)||Q(ht))return W=W.get(J)||null,ft(k,W,ht,Kt,null);if(typeof ht.then=="function")return ot(W,k,J,ll(ht),Kt);if(ht.$$typeof===D)return ot(W,k,J,al(k,ht),Kt);cl(k,ht)}return null}function It(W,k,J,ht){for(var Kt=null,De=null,kt=k,ue=k=0,ve=null;kt!==null&&ue<J.length;ue++){kt.index>ue?(ve=kt,kt=null):ve=kt.sibling;var Ue=nt(W,kt,J[ue],ht);if(Ue===null){kt===null&&(kt=ve);break}t&&kt&&Ue.alternate===null&&n(W,kt),k=f(Ue,k,ue),De===null?Kt=Ue:De.sibling=Ue,De=Ue,kt=ve}if(ue===J.length)return a(W,kt),be&&Hi(W,ue),Kt;if(kt===null){for(;ue<J.length;ue++)kt=gt(W,J[ue],ht),kt!==null&&(k=f(kt,k,ue),De===null?Kt=kt:De.sibling=kt,De=kt);return be&&Hi(W,ue),Kt}for(kt=r(kt);ue<J.length;ue++)ve=ot(kt,W,ue,J[ue],ht),ve!==null&&(t&&ve.alternate!==null&&kt.delete(ve.key===null?ue:ve.key),k=f(ve,k,ue),De===null?Kt=ve:De.sibling=ve,De=ve);return t&&kt.forEach(function(Fa){return n(W,Fa)}),be&&Hi(W,ue),Kt}function te(W,k,J,ht){if(J==null)throw Error(s(151));for(var Kt=null,De=null,kt=k,ue=k=0,ve=null,Ue=J.next();kt!==null&&!Ue.done;ue++,Ue=J.next()){kt.index>ue?(ve=kt,kt=null):ve=kt.sibling;var Fa=nt(W,kt,Ue.value,ht);if(Fa===null){kt===null&&(kt=ve);break}t&&kt&&Fa.alternate===null&&n(W,kt),k=f(Fa,k,ue),De===null?Kt=Fa:De.sibling=Fa,De=Fa,kt=ve}if(Ue.done)return a(W,kt),be&&Hi(W,ue),Kt;if(kt===null){for(;!Ue.done;ue++,Ue=J.next())Ue=gt(W,Ue.value,ht),Ue!==null&&(k=f(Ue,k,ue),De===null?Kt=Ue:De.sibling=Ue,De=Ue);return be&&Hi(W,ue),Kt}for(kt=r(kt);!Ue.done;ue++,Ue=J.next())Ue=ot(kt,W,ue,Ue.value,ht),Ue!==null&&(t&&Ue.alternate!==null&&kt.delete(Ue.key===null?ue:Ue.key),k=f(Ue,k,ue),De===null?Kt=Ue:De.sibling=Ue,De=Ue);return t&&kt.forEach(function(xS){return n(W,xS)}),be&&Hi(W,ue),Kt}function Ge(W,k,J,ht){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Kt=J.key;k!==null;){if(k.key===Kt){if(Kt=J.type,Kt===C){if(k.tag===7){a(W,k.sibling),ht=c(k,J.props.children),ht.return=W,W=ht;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===q&&rs(Kt)===k.type){a(W,k.sibling),ht=c(k,J.props),Yr(ht,J),ht.return=W,W=ht;break t}a(W,k);break}else n(W,k);k=k.sibling}J.type===C?(ht=es(J.props.children,W.mode,ht,J.key),ht.return=W,W=ht):(ht=el(J.type,J.key,J.props,null,W.mode,ht),Yr(ht,J),ht.return=W,W=ht)}return x(W);case T:t:{for(Kt=J.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(W,k.sibling),ht=c(k,J.children||[]),ht.return=W,W=ht;break t}else{a(W,k);break}else n(W,k);k=k.sibling}ht=lu(J,W.mode,ht),ht.return=W,W=ht}return x(W);case q:return J=rs(J),Ge(W,k,J,ht)}if(rt(J))return It(W,k,J,ht);if(Q(J)){if(Kt=Q(J),typeof Kt!="function")throw Error(s(150));return J=Kt.call(J),te(W,k,J,ht)}if(typeof J.then=="function")return Ge(W,k,ll(J),ht);if(J.$$typeof===D)return Ge(W,k,al(W,J),ht);cl(W,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(W,k.sibling),ht=c(k,J),ht.return=W,W=ht):(a(W,k),ht=ou(J,W.mode,ht),ht.return=W,W=ht),x(W)):a(W,k)}return function(W,k,J,ht){try{qr=0;var Kt=Ge(W,k,J,ht);return Gs=null,Kt}catch(kt){if(kt===Hs||kt===rl)throw kt;var De=jn(29,kt,null,W.mode);return De.lanes=ht,De.return=W,De}}}var ls=Lp(!0),Np=Lp(!1),ya=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ba(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ne&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=tl(t),xp(t,null,a),n}return $o(t,r,n,a),tl(t)}function jr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Cr(t,a)}}function Mu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var bu=!1;function Zr(){if(bu){var t=Is;if(t!==null)throw t}}function Kr(t,n,a,r){bu=!1;var c=t.updateQueue;ya=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var F=E,tt=F.next;F.next=null,x===null?f=tt:x.next=tt,x=F;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,E=ft.lastBaseUpdate,E!==x&&(E===null?ft.firstBaseUpdate=tt:E.next=tt,ft.lastBaseUpdate=F))}if(f!==null){var gt=c.baseState;x=0,ft=tt=F=null,E=f;do{var nt=E.lane&-536870913,ot=nt!==E.lane;if(ot?(_e&nt)===nt:(r&nt)===nt){nt!==0&&nt===Fs&&(bu=!0),ft!==null&&(ft=ft.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var It=t,te=E;nt=n;var Ge=a;switch(te.tag){case 1:if(It=te.payload,typeof It=="function"){gt=It.call(Ge,gt,nt);break t}gt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=te.payload,nt=typeof It=="function"?It.call(Ge,gt,nt):It,nt==null)break t;gt=g({},gt,nt);break t;case 2:ya=!0}}nt=E.callback,nt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ft===null?(tt=ft=ot,F=gt):ft=ft.next=ot,x|=nt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ot=E,E=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ft===null&&(F=gt),c.baseState=F,c.firstBaseUpdate=tt,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Ca|=x,t.lanes=x,t.memoizedState=gt}}function Op(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Pp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Op(a[t],n)}var Vs=P(null),ul=P(0);function zp(t,n){t=Qi,yt(ul,t),yt(Vs,n),Qi=t|n.baseLanes}function Eu(){yt(ul,Qi),yt(Vs,Vs.current)}function Tu(){Qi=ul.current,st(Vs),st(ul)}var Zn=P(null),ci=null;function Ea(t){var n=t.alternate;yt(nn,nn.current&1),yt(Zn,t),ci===null&&(n===null||Vs.current!==null||n.memoizedState!==null)&&(ci=t)}function Au(t){yt(nn,nn.current),yt(Zn,t),ci===null&&(ci=t)}function Bp(t){t.tag===22?(yt(nn,nn.current),yt(Zn,t),ci===null&&(ci=t)):Ta()}function Ta(){yt(nn,nn.current),yt(Zn,Zn.current)}function Kn(t){st(Zn),ci===t&&(ci=null),st(nn)}var nn=P(0);function fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Nf(a)||Of(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,oe=null,Ie=null,ln=null,dl=!1,ks=!1,cs=!1,hl=0,Qr=0,Xs=null,rv=0;function $e(){throw Error(s(321))}function Ru(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Cu(t,n,a,r,c,f){return ki=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?S0:ku,cs=!1,f=a(r,c),cs=!1,ks&&(f=Ip(n,a,r,c)),Fp(t),f}function Fp(t){z.H=to;var n=Ie!==null&&Ie.next!==null;if(ki=0,ln=Ie=oe=null,dl=!1,Qr=0,Xs=null,n)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&il(t)&&(cn=!0))}function Ip(t,n,a,r){oe=t;var c=0;do{if(ks&&(Xs=null),Qr=0,ks=!1,25<=c)throw Error(s(301));if(c+=1,ln=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=y0,f=n(a,r)}while(ks);return f}function ov(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Jr(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(oe.flags|=1024),n}function wu(){var t=hl!==0;return hl=0,t}function Du(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Uu(t){if(dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}dl=!1}ki=0,ln=Ie=oe=null,ks=!1,Qr=hl=0,Xs=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?oe.memoizedState=ln=t:ln=ln.next=t,ln}function an(){if(Ie===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=ln===null?oe.memoizedState:ln.next;if(n!==null)ln=n,Ie=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ln===null?oe.memoizedState=ln=t:ln=ln.next=t}return ln}function pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jr(t){var n=Qr;return Qr+=1,Xs===null&&(Xs=[]),t=wp(Xs,t,n),n=oe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?S0:ku),t}function ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jr(t);if(t.$$typeof===D)return En(t)}throw Error(s(438,String(t)))}function Lu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=pl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=R;return n.index++,a}function Xi(t,n){return typeof n=="function"?n(t):n}function xl(t){var n=an();return Nu(n,Ie,t)}function Nu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=x=null,F=null,tt=n,ft=!1;do{var gt=tt.lane&-536870913;if(gt!==tt.lane?(_e&gt)===gt:(ki&gt)===gt){var nt=tt.revertLane;if(nt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),gt===Fs&&(ft=!0);else if((ki&nt)===nt){tt=tt.next,nt===Fs&&(ft=!0);continue}else gt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(E=F=gt,x=f):F=F.next=gt,oe.lanes|=nt,Ca|=nt;gt=tt.action,cs&&a(f,gt),f=tt.hasEagerState?tt.eagerState:a(f,gt)}else nt={lane:gt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(E=F=nt,x=f):F=F.next=nt,oe.lanes|=gt,Ca|=gt;tt=tt.next}while(tt!==null&&tt!==n);if(F===null?x=f:F.next=E,!Yn(f,t.memoizedState)&&(cn=!0,ft&&(a=Is,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=F,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ou(t){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Yn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Hp(t,n,a){var r=oe,c=an(),f=be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Yn((Ie||c).memoizedState,a);if(x&&(c.memoizedState=a,cn=!0),c=c.queue,Bu(kp.bind(null,r,c,t),[t]),c.getSnapshot!==n||x||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,Ws(9,{destroy:void 0},Vp.bind(null,r,c,a,n),null),qe===null)throw Error(s(349));f||(ki&127)!==0||Gp(r,n,a)}return a}function Gp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=pl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Vp(t,n,a,r){n.value=a,n.getSnapshot=r,Xp(n)&&Wp(t)}function kp(t,n,a){return a(function(){Xp(n)&&Wp(t)})}function Xp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Wp(t){var n=ts(t,2);n!==null&&Hn(n,t,2)}function Pu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),cs){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},n}function qp(t,n,a,r){return t.baseState=a,Nu(t,Ie,typeof r=="function"?r:Xi)}function lv(t,n,a,r,c){if(vl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Yp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Yp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var E=a(c,r),F=z.S;F!==null&&F(x,E),jp(t,n,E)}catch(tt){zu(t,n,tt)}finally{f!==null&&x.types!==null&&(f.types=x.types),z.T=f}}else try{f=a(c,r),jp(t,n,f)}catch(tt){zu(t,n,tt)}}function jp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Zp(t,n,r)},function(r){return zu(t,n,r)}):Zp(t,n,a)}function Zp(t,n,a){n.status="fulfilled",n.value=a,Kp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Yp(t,a)))}function zu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==r)}t.action=null}function Kp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Qp(t,n){return n}function Jp(t,n){if(be){var a=qe.formState;if(a!==null){t:{var r=oe;if(be){if(Ze){e:{for(var c=Ze,f=li;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=ui(c.nextSibling),r=c.data==="F!";break t}}va(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=r,a=g0.bind(null,oe,r),r.dispatch=a,r=Pu(!1),f=Vu.bind(null,oe,!1,r.queue),r=Ln(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=lv.bind(null,oe,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function $p(t){var n=an();return t0(n,Ie,t)}function t0(t,n,a){if(n=Nu(t,n,Qp)[0],t=xl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Jr(n)}catch(x){throw x===Hs?rl:x}else r=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Ws(9,{destroy:void 0},cv.bind(null,c,a),null)),[r,f,t]}function cv(t,n){t.action=n}function e0(t){var n=an(),a=Ie;if(a!==null)return t0(n,a,t);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Ws(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=pl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function n0(){return an().memoizedState}function gl(t,n,a,r){var c=Ln();oe.flags|=t,c.memoizedState=Ws(1|n,{destroy:void 0},a,r===void 0?null:r)}function _l(t,n,a,r){var c=an();r=r===void 0?null:r;var f=c.memoizedState.inst;Ie!==null&&r!==null&&Ru(r,Ie.memoizedState.deps)?c.memoizedState=Ws(n,f,a,r):(oe.flags|=t,c.memoizedState=Ws(1|n,f,a,r))}function i0(t,n){gl(8390656,8,t,n)}function Bu(t,n){_l(2048,8,t,n)}function uv(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=pl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function a0(t){var n=an().memoizedState;return uv({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function s0(t,n){return _l(4,2,t,n)}function r0(t,n){return _l(4,4,t,n)}function o0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function l0(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,o0.bind(null,n,t),a)}function Fu(){}function c0(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ru(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function u0(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ru(n,r[1]))return r[0];if(r=t(),cs){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[r,n],r}function Iu(t,n,a){return a===void 0||(ki&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=fm(),oe.lanes|=t,Ca|=t,a)}function f0(t,n,a,r){return Yn(a,n)?a:Vs.current!==null?(t=Iu(t,a,r),Yn(t,n)||(cn=!0),t):(ki&42)===0||(ki&1073741824)!==0&&(_e&261930)===0?(cn=!0,t.memoizedState=a):(t=fm(),oe.lanes|=t,Ca|=t,n)}function d0(t,n,a,r,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var x=z.T,E={};z.T=E,Vu(t,!1,n,a);try{var F=c(),tt=z.S;if(tt!==null&&tt(E,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=sv(F,r);$r(t,n,ft,$n(t))}else $r(t,n,r,$n(t))}catch(gt){$r(t,n,{then:function(){},status:"rejected",reason:gt},$n())}finally{Z.p=f,x!==null&&E.types!==null&&(x.types=E.types),z.T=x}}function fv(){}function Hu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=h0(t).queue;d0(t,c,n,j,a===null?fv:function(){return p0(t),a(r)})}function h0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function p0(t){var n=h0(t);n.next===null&&(n=t.alternate.memoizedState),$r(t,n.next.queue,{},$n())}function Gu(){return En(go)}function m0(){return an().memoizedState}function x0(){return an().memoizedState}function dv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Ma(a);var r=ba(n,t,a);r!==null&&(Hn(r,n,a),jr(r,n,a)),n={cache:xu()},t.payload=n;return}n=n.return}}function hv(t,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?_0(n,a):(a=su(t,n,a,r),a!==null&&(Hn(a,t,r),v0(a,n,r)))}function g0(t,n,a){var r=$n();$r(t,n,a,r)}function $r(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))_0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,Yn(E,x))return $o(t,n,c,0),qe===null&&Jo(),!1}catch{}if(a=su(t,n,c,r),a!==null)return Hn(a,t,r),v0(a,n,r),!0}return!1}function Vu(t,n,a,r){if(r={lane:2,revertLane:yf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(s(479))}else n=su(t,a,r,2),n!==null&&Hn(n,t,2)}function vl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function _0(t,n){ks=dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function v0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Cr(t,a)}}var to={readContext:En,use:ml,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};to.useEffectEvent=$e;var S0={readContext:En,use:ml,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:i0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,o0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var r=t();if(cs){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Ln();if(a!==void 0){var c=a(n);if(cs){Yt(!0);try{a(n)}finally{Yt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=hv.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Pu(t);var n=t.queue,a=g0.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(t,n){var a=Ln();return Iu(a,t,n)},useTransition:function(){var t=Pu(!1);return t=d0.bind(null,oe,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,c=Ln();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(_e&127)!==0||Gp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,i0(kp.bind(null,r,f,t),[t]),r.flags|=2048,Ws(9,{destroy:void 0},Vp.bind(null,r,f,a,n),null),a},useId:function(){var t=Ln(),n=qe.identifierPrefix;if(be){var a=Ri,r=Ai;a=(r&~(1<<32-Vt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Gu,useFormState:Jp,useActionState:Jp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vu.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Lu,useCacheRefresh:function(){return Ln().memoizedState=dv.bind(null,oe)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ku={readContext:En,use:ml,useCallback:c0,useContext:En,useEffect:Bu,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:r0,useMemo:u0,useReducer:xl,useRef:n0,useState:function(){return xl(Xi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=an();return f0(a,Ie.memoizedState,t,n)},useTransition:function(){var t=xl(Xi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Jr(t),n]},useSyncExternalStore:Hp,useId:m0,useHostTransitionStatus:Gu,useFormState:$p,useActionState:$p,useOptimistic:function(t,n){var a=an();return qp(a,Ie,t,n)},useMemoCache:Lu,useCacheRefresh:x0};ku.useEffectEvent=a0;var y0={readContext:En,use:ml,useCallback:c0,useContext:En,useEffect:Bu,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:r0,useMemo:u0,useReducer:Ou,useRef:n0,useState:function(){return Ou(Xi)},useDebugValue:Fu,useDeferredValue:function(t,n){var a=an();return Ie===null?Iu(a,t,n):f0(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Ou(Xi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Jr(t),n]},useSyncExternalStore:Hp,useId:m0,useHostTransitionStatus:Gu,useFormState:e0,useActionState:e0,useOptimistic:function(t,n){var a=an();return Ie!==null?qp(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Lu,useCacheRefresh:x0};y0.useEffectEvent=a0;function Xu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=$n(),c=Ma(r);c.payload=n,a!=null&&(c.callback=a),n=ba(t,c,r),n!==null&&(Hn(n,t,r),jr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=$n(),c=Ma(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ba(t,c,r),n!==null&&(Hn(n,t,r),jr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),r=Ma(a);r.tag=2,n!=null&&(r.callback=n),n=ba(t,r,a),n!==null&&(Hn(n,t,a),jr(n,t,a))}};function M0(t,n,a,r,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Hr(a,r)||!Hr(c,f):!0}function b0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Wu.enqueueReplaceState(n,n.state,null)}function us(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function E0(t){Qo(t)}function T0(t){console.error(t)}function A0(t){Qo(t)}function Sl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function R0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function qu(t,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(t,n)},a}function C0(t){return t=Ma(t),t.tag=3,t}function w0(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){R0(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){R0(n,a,r),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function pv(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Bs(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Ll():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),_f(t,r,c)),!1;case 22:return a.flags|=65536,r===ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),_f(t,r,c)),!1}throw Error(s(435,a.tag))}return _f(t,r,c),Ll(),!1}if(be)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==fu&&(t=Error(s(422),{cause:r}),kr(si(t,a)))):(r!==fu&&(n=Error(s(423),{cause:r}),kr(si(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=si(r,a),c=qu(t.stateNode,r,c),Mu(t,c),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),lo===null?lo=[f]:lo.push(f),tn!==4&&(tn=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=qu(a.stateNode,r,t),Mu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=C0(c),w0(c,t,a,r),Mu(a,c),!1}a=a.return}while(a!==null);return!1}var Yu=Error(s(461)),cn=!1;function Tn(t,n,a,r){n.child=t===null?Np(n,null,a,r):ls(n,t.child,a,r)}function D0(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var E in r)E!=="ref"&&(x[E]=r[E])}else x=r;return as(n),r=Cu(t,n,a,x,f,c),E=wu(),t!==null&&!cn?(Du(t,n,c),Wi(t,n,c)):(be&&E&&cu(n),n.flags|=1,Tn(t,n,r,c),n.child)}function U0(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,L0(t,n,f,r,c)):(t=el(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ef(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hr,a(x,r)&&t.ref===n.ref)return Wi(t,n,c)}return n.flags|=1,t=Ii(f,r),t.ref=n.ref,t.return=n,n.child=t}function L0(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Hr(f,r)&&t.ref===n.ref)if(cn=!1,n.pendingProps=r=f,ef(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,Wi(t,n,c)}return ju(t,n,a,r,c)}function N0(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return O0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&sl(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Eu(),Bp(n);else return r=n.lanes=536870912,O0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(sl(n,f.cachePool),zp(n,f),Ta(),n.memoizedState=null):(t!==null&&sl(n,null),Eu(),Ta());return Tn(t,n,c,a),n.child}function eo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function O0(t,n,a,r,c){var f=_u();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&sl(n,null),Eu(),Bp(n),t!==null&&Bs(t,n,r,!0),n.childLanes=c,null}function yl(t,n){return n=bl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function P0(t,n,a){return ls(n,t.child,null,a),t=yl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function mv(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(be){if(r.mode==="hidden")return t=yl(n,r),n.lanes=536870912,eo(null,t);if(Au(n),(t=Ze)?(t=Ym(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=_p(t),a.return=n,n.child=a,bn=n,Ze=null)):t=null,t===null)throw va(n);return n.lanes=536870912,null}return yl(n,r)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Au(n),c)if(n.flags&256)n.flags&=-257,n=P0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Bs(t,n,a,!1),c=(a&t.childLanes)!==0,cn||c){if(r=qe,r!==null&&(x=wr(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,ts(t,x),Hn(r,t,x),Yu;Ll(),n=P0(t,n,a)}else t=f.treeContext,Ze=ui(x.nextSibling),bn=n,be=!0,_a=null,li=!1,t!==null&&yp(n,t),n=yl(n,r),n.flags|=4096;return n}return t=Ii(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ju(t,n,a,r,c){return as(n),a=Cu(t,n,a,r,void 0,c),r=wu(),t!==null&&!cn?(Du(t,n,c),Wi(t,n,c)):(be&&r&&cu(n),n.flags|=1,Tn(t,n,a,c),n.child)}function z0(t,n,a,r,c,f){return as(n),n.updateQueue=null,a=Ip(n,r,a,c),Fp(t),r=wu(),t!==null&&!cn?(Du(t,n,f),Wi(t,n,f)):(be&&r&&cu(n),n.flags|=1,Tn(t,n,a,f),n.child)}function B0(t,n,a,r,c){if(as(n),n.stateNode===null){var f=Ns,x=a.contextType;typeof x=="object"&&x!==null&&(f=En(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Wu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Su(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?En(x):Ns,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Xu(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Wu.enqueueReplaceState(f,f.state,null),Kr(n,r,f,c),Zr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,F=us(a,E);f.props=F;var tt=f.context,ft=a.contextType;x=Ns,typeof ft=="object"&&ft!==null&&(x=En(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||tt!==x)&&b0(n,f,r,x),ya=!1;var nt=n.memoizedState;f.state=nt,Kr(n,r,f,c),Zr(),tt=n.memoizedState,E||nt!==tt||ya?(typeof gt=="function"&&(Xu(n,a,gt,r),tt=n.memoizedState),(F=ya||M0(n,a,F,r,nt,tt,x))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=x,r=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,yu(t,n),x=n.memoizedProps,ft=us(a,x),f.props=ft,gt=n.pendingProps,nt=f.context,tt=a.contextType,F=Ns,typeof tt=="object"&&tt!==null&&(F=En(tt)),E=a.getDerivedStateFromProps,(tt=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==gt||nt!==F)&&b0(n,f,r,F),ya=!1,nt=n.memoizedState,f.state=nt,Kr(n,r,f,c),Zr();var ot=n.memoizedState;x!==gt||nt!==ot||ya||t!==null&&t.dependencies!==null&&il(t.dependencies)?(typeof E=="function"&&(Xu(n,a,E,r),ot=n.memoizedState),(ft=ya||M0(n,a,ft,r,nt,ot,F)||t!==null&&t.dependencies!==null&&il(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=F,r=ft):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ml(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ls(n,t.child,null,c),n.child=ls(n,null,a,c)):Tn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Wi(t,n,c),t}function F0(t,n,a,r){return ns(),n.flags|=256,Tn(t,n,a,r),n.child}var Zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ku(t){return{baseLanes:t,cachePool:Rp()}}function Qu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function I0(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?Ea(n):Ta(),(t=Ze)?(t=Ym(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=_p(t),a.return=n,n.child=a,bn=n,Ze=null)):t=null,t===null)throw va(n);return Of(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Ta(),c=n.mode,E=bl({mode:"hidden",children:E},c),r=es(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=Ku(a),r.childLanes=Qu(t,x,a),n.memoizedState=Zu,eo(null,r)):(Ea(n),Ju(n,E))}var F=t.memoizedState;if(F!==null&&(E=F.dehydrated,E!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=$u(t,n,a)):n.memoizedState!==null?(Ta(),n.child=t.child,n.flags|=128,n=null):(Ta(),E=r.fallback,c=n.mode,r=bl({mode:"visible",children:r.children},c),E=es(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,ls(n,t.child,null,a),r=n.child,r.memoizedState=Ku(a),r.childLanes=Qu(t,x,a),n.memoizedState=Zu,n=eo(null,r));else if(Ea(n),Of(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var tt=x.dgst;x=tt,r=Error(s(419)),r.stack="",r.digest=x,kr({value:r,source:null,stack:null}),n=$u(t,n,a)}else if(cn||Bs(t,n,a,!1),x=(a&t.childLanes)!==0,cn||x){if(x=qe,x!==null&&(r=wr(x,a),r!==0&&r!==F.retryLane))throw F.retryLane=r,ts(t,r),Hn(x,t,r),Yu;Nf(E)||Ll(),n=$u(t,n,a)}else Nf(E)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Ze=ui(E.nextSibling),bn=n,be=!0,_a=null,li=!1,t!==null&&yp(n,t),n=Ju(n,r.children),n.flags|=4096);return n}return c?(Ta(),E=r.fallback,c=n.mode,F=t.child,tt=F.sibling,r=Ii(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,tt!==null?E=Ii(tt,E):(E=es(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,eo(null,r),r=n.child,E=t.child.memoizedState,E===null?E=Ku(a):(c=E.cachePool,c!==null?(F=on._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Rp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=Qu(t,x,a),n.memoizedState=Zu,eo(t.child,r)):(Ea(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Ju(t,n){return n=bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function bl(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function $u(t,n,a){return ls(n,t.child,null,a),t=Ju(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function H0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),pu(t.return,n,a)}function tf(t,n,a,r,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function G0(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var x=nn.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,yt(nn,x),Tn(t,n,r,a),r=be?Vr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&H0(t,a,n);else if(t.tag===19)H0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&fl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),tf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&fl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}tf(n,!0,a,null,f,r);break;case"together":tf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Wi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Bs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&il(t)))}function xv(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),Sa(n,on,t.memoizedState.cache),ns();break;case 27:case 5:Xt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Au(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?I0(t,n,a):(Ea(n),t=Wi(t,n,a),t!==null?t.sibling:null);Ea(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Bs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return G0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(nn,nn.current),r)break;return null;case 22:return n.lanes=0,N0(t,n,a,n.pendingProps);case 24:Sa(n,on,t.memoizedState.cache)}return Wi(t,n,a)}function V0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!ef(t,a)&&(n.flags&128)===0)return cn=!1,xv(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,be&&(n.flags&1048576)!==0&&Sp(n,Vr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=rs(n.elementType),n.type=t,typeof t=="function")ru(t)?(r=us(t,r),n.tag=1,n=B0(null,n,t,r,a)):(n.tag=0,n=ju(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===O){n.tag=11,n=D0(null,n,t,r,a);break t}else if(c===B){n.tag=14,n=U0(null,n,t,r,a);break t}}throw n=mt(t)||t,Error(s(306,n,""))}}return n;case 0:return ju(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=us(r,n.pendingProps),B0(t,n,r,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,yu(t,n),Kr(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Sa(n,on,r),r!==f.cache&&mu(n,[on],a,!0),Zr(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=F0(t,n,r,a);break t}else if(r!==c){c=si(Error(s(424)),n),kr(c),n=F0(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=ui(t.firstChild),bn=n,be=!0,_a=null,li=!0,a=Np(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ns(),r===c){n=Wi(t,n,a);break t}Tn(t,n,r,a)}n=n.child}return n;case 26:return Ml(t,n),t===null?(a=$m(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,r=Il(it.current).createElement(a),r[rn]=n,r[dn]=t,An(r,a,t),et(r),n.stateNode=r):n.memoizedState=$m(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&be&&(r=n.stateNode=Km(n.type,n.pendingProps,it.current),bn=n,li=!0,c=Ze,Na(n.type)?(Pf=c,Ze=ui(r.firstChild)):Ze=c),Tn(t,n,n.pendingProps.children,a),Ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=r=Ze)&&(r=qv(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,bn=n,Ze=ui(r.firstChild),li=!1,c=!0):c=!1),c||va(n)),Xt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,r=f.children,Df(c,f)?r=null:x!==null&&Df(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Cu(t,n,ov,null,null,a),go._currentValue=c),Ml(t,n),Tn(t,n,r,a),n.child;case 6:return t===null&&be&&((t=a=Ze)&&(a=Yv(a,n.pendingProps,li),a!==null?(n.stateNode=a,bn=n,Ze=null,t=!0):t=!1),t||va(n)),null;case 13:return I0(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ls(n,null,r,a):Tn(t,n,r,a),n.child;case 11:return D0(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Sa(n,n.type,r.value),Tn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,as(n),c=En(c),r=r(c),n.flags|=1,Tn(t,n,r,a),n.child;case 14:return U0(t,n,n.type,n.pendingProps,a);case 15:return L0(t,n,n.type,n.pendingProps,a);case 19:return G0(t,n,a);case 31:return mv(t,n,a);case 22:return N0(t,n,a,n.pendingProps);case 24:return as(n),r=En(on),t===null?(c=_u(),c===null&&(c=qe,f=xu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Su(n),Sa(n,on,c)):((t.lanes&a)!==0&&(yu(t,n),Kr(n,null,null,a),Zr()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,on,r)):(r=f.cache,Sa(n,on,r),r!==c.cache&&mu(n,[on],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function qi(t){t.flags|=4}function nf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(mm())t.flags|=8192;else throw os=ol,vu}else t.flags&=-16777217}function k0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ax(n))if(mm())t.flags|=8192;else throw os=ol,vu}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Fe():536870912,t.lanes|=n,Zs|=n)}function no(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function gv(t,n,a){var r=n.pendingProps;switch(uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Vi(on),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zs(n)?qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,du())),Ke(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(qi(n),f!==null?(Ke(n),k0(n,f)):(Ke(n),nf(n,c,null,r,a))):f?f!==t.memoizedState?(qi(n),Ke(n),k0(n,f)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&qi(n),Ke(n),nf(n,c,t,r,a)),null;case 27:if(le(n),a=it.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}t=Et.current,zs(n)?Mp(n):(t=Km(c,r,a),n.stateNode=t,qi(n))}return Ke(n),null;case 5:if(le(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&qi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=Et.current,zs(n))Mp(n);else{var x=Il(it.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}f[rn]=n,f[dn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(An(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&qi(n)}}return Ke(n),nf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&qi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=it.current,zs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=bn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Im(t.nodeValue,a)),t||va(n,!0)}else t=Il(t).createTextNode(r),t[rn]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=zs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[rn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=zs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[rn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Ke(n),null);case 4:return Ht(),t===null&&Tf(n.stateNode.containerInfo),Ke(n),null;case 10:return Vi(n.type),Ke(n),null;case 19:if(st(nn),r=n.memoizedState,r===null)return Ke(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)no(r,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=fl(t),f!==null){for(n.flags|=128,no(r,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)gp(a,t),a=a.sibling;return yt(nn,nn.current&1|2),be&&Hi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&b()>wl&&(n.flags|=128,c=!0,no(r,!1),n.lanes=4194304)}else{if(!c)if(t=fl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),no(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!be)return Ke(n),null}else 2*b()-r.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,c=!0,no(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=b(),t.sibling=null,a=nn.current,yt(nn,c?a&1|2:a&1),be&&Hi(n,r.treeForkCount),t):(Ke(n),null);case 22:case 23:return Kn(n),Tu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&st(ss),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(on),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function _v(t,n){switch(uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(on),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ns()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return st(nn),null;case 4:return Ht(),null;case 10:return Vi(n.type),null;case 22:case 23:return Kn(n),Tu(),t!==null&&st(ss),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(on),null;case 25:return null;default:return null}}function X0(t,n){switch(uu(n),n.tag){case 3:Vi(on),Ht();break;case 26:case 27:case 5:le(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:st(nn);break;case 10:Vi(n.type);break;case 22:case 23:Kn(n),Tu(),t!==null&&st(ss);break;case 24:Vi(on)}}function io(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==c)}}catch(E){Be(n,n.return,E)}}function Aa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var x=r.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var F=a,tt=E;try{tt()}catch(ft){Be(c,F,ft)}}}r=r.next}while(r!==f)}}catch(ft){Be(n,n.return,ft)}}function W0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Pp(n,a)}catch(r){Be(t,t.return,r)}}}function q0(t,n,a){a.props=us(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Be(t,n,r)}}function ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Be(t,n,c)}}function Ci(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function Y0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function af(t,n,a){try{var r=t.stateNode;Hv(r,t.type,a,n),r[dn]=n}catch(c){Be(t,t.return,c)}}function j0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function sf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||j0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(r!==4&&(r===27&&Na(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(rf(t,n,a),t=t.sibling;t!==null;)rf(t,n,a),t=t.sibling}function Tl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Tl(t,n,a),t=t.sibling;t!==null;)Tl(t,n,a),t=t.sibling}function Z0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,r,a),n[rn]=t,n[dn]=a}catch(f){Be(t,t.return,f)}}var Yi=!1,un=!1,of=!1,K0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function vv(t,n){if(t=t.containerInfo,Cf=ql,t=lp(t),$c(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,F=-1,tt=0,ft=0,gt=t,nt=null;e:for(;;){for(var ot;gt!==a||c!==0&&gt.nodeType!==3||(E=x+c),gt!==f||r!==0&&gt.nodeType!==3||(F=x+r),gt.nodeType===3&&(x+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)nt=gt,gt=ot;for(;;){if(gt===t)break e;if(nt===a&&++tt===c&&(E=x),nt===f&&++ft===r&&(F=x),(ot=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=ot}a=E===-1||F===-1?null:{start:E,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(wf={focusedElem:t,selectionRange:a},ql=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var It=us(a.type,c);t=r.getSnapshotBeforeUpdate(It,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){Be(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Lf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Lf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Q0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),r&4&&io(5,a);break;case 1:if(Zi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Be(a,a.return,x)}else{var c=us(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Be(a,a.return,x)}}r&64&&W0(a),r&512&&ao(a,a.return);break;case 3:if(Zi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(t,n)}catch(x){Be(a,a.return,x)}}break;case 27:n===null&&r&4&&Z0(a);case 26:case 5:Zi(t,a),n===null&&r&4&&Y0(a),r&512&&ao(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),r&4&&tm(t,a);break;case 13:Zi(t,a),r&4&&em(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Cv.bind(null,a),jv(t,a))));break;case 22:if(r=a.memoizedState!==null||Yi,!r){n=n!==null&&n.memoizedState!==null||un,c=Yi;var f=un;Yi=r,(un=n)&&!f?Ki(t,a,(a.subtreeFlags&8772)!==0):Zi(t,a),Yi=c,un=f}break;case 30:break;default:Zi(t,a)}}function J0(t){var n=t.alternate;n!==null&&(t.alternate=null,J0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Lr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,zn=!1;function ji(t,n,a){for(a=a.child;a!==null;)$0(t,n,a),a=a.sibling}function $0(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(St,a)}catch{}switch(a.tag){case 26:un||Ci(a,n),ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ci(a,n);var r=Qe,c=zn;Na(a.type)&&(Qe=a.stateNode,zn=!1),ji(t,n,a),po(a.stateNode),Qe=r,zn=c;break;case 5:un||Ci(a,n);case 6:if(r=Qe,c=zn,Qe=null,ji(t,n,a),Qe=r,zn=c,Qe!==null)if(zn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Qe!==null&&(zn?(t=Qe,Wm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ir(t)):Wm(Qe,a.stateNode));break;case 4:r=Qe,c=zn,Qe=a.stateNode.containerInfo,zn=!0,ji(t,n,a),Qe=r,zn=c;break;case 0:case 11:case 14:case 15:Aa(2,a,n),un||Aa(4,a,n),ji(t,n,a);break;case 1:un||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&q0(a,n,r)),ji(t,n,a);break;case 21:ji(t,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,ji(t,n,a),un=r;break;default:ji(t,n,a)}}function tm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ir(t)}catch(a){Be(n,n.return,a)}}}function em(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ir(t)}catch(a){Be(n,n.return,a)}}function Sv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new K0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new K0),n;default:throw Error(s(435,t.tag))}}function Al(t,n){var a=Sv(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=wv.bind(null,t,r);r.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(Na(E.type)){Qe=E.stateNode,zn=!1;break t}break;case 5:Qe=E.stateNode,zn=!1;break t;case 3:case 4:Qe=E.stateNode.containerInfo,zn=!0;break t}E=E.return}if(Qe===null)throw Error(s(160));$0(f,x,c),Qe=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)nm(n,t),n=n.sibling}var gi=null;function nm(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),Fn(t),r&4&&(Aa(3,t,t.return),io(3,t),Aa(5,t,t.return));break;case 1:Bn(n,t),Fn(t),r&512&&(un||a===null||Ci(a,a.return)),r&64&&Yi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=gi;if(Bn(n,t),Fn(t),r&512&&(un||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ka]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,r,a),f[rn]=t,et(f),r=f;break t;case"link":var x=nx("link","href",c).get(r+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(r),An(f,r,a),c.head.appendChild(f);break;case"meta":if(x=nx("meta","content",c).get(r+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(r),An(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=t,et(f),r=f}t.stateNode=r}else ix(c,t.type,t.stateNode);else t.stateNode=ex(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ix(c,t.type,t.stateNode):ex(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&af(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),Fn(t),r&512&&(un||a===null||Ci(a,a.return)),a!==null&&r&4&&af(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),Fn(t),r&512&&(un||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{Ti(c,"")}catch(It){Be(t,t.return,It)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,af(t,c,a!==null?a.memoizedProps:c)),r&1024&&(of=!0);break;case 6:if(Bn(n,t),Fn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(It){Be(t,t.return,It)}}break;case 3:if(Vl=null,c=gi,gi=Hl(n.containerInfo),Bn(n,t),gi=c,Fn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{ir(n.containerInfo)}catch(It){Be(t,t.return,It)}of&&(of=!1,im(t));break;case 4:r=gi,gi=Hl(t.stateNode.containerInfo),Bn(n,t),Fn(t),gi=r;break;case 12:Bn(n,t),Fn(t);break;case 31:Bn(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Al(t,r)));break;case 13:Bn(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=b()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Al(t,r)));break;case 22:c=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,tt=Yi,ft=un;if(Yi=tt||c,un=ft||F,Bn(n,t),un=ft,Yi=tt,Fn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||Yi||un||fs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=F.stateNode;var gt=F.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(It){Be(F,F.return,It)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(It){Be(F,F.return,It)}}}else if(n.tag===18){if(a===null){F=n;try{var ot=F.stateNode;c?qm(ot,!0):qm(F.stateNode,!1)}catch(It){Be(F,F.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Al(t,a))));break;case 19:Bn(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Al(t,r)));break;case 30:break;case 21:break;default:Bn(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(j0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=sf(t);Tl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ti(x,""),a.flags&=-33);var E=sf(t);Tl(t,E,x);break;case 3:case 4:var F=a.stateNode.containerInfo,tt=sf(t);rf(t,tt,F);break;default:throw Error(s(161))}}catch(ft){Be(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function im(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;im(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Q0(t,n.alternate,n),n=n.sibling}function fs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),fs(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&q0(n,n.return,a),fs(n);break;case 27:po(n.stateNode);case 26:case 5:Ci(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}t=t.sibling}}function Ki(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(c,f,a),io(4,f);break;case 1:if(Ki(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Be(r,r.return,tt)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Op(F[c],E)}catch(tt){Be(r,r.return,tt)}}a&&x&64&&W0(f),ao(f,f.return);break;case 27:Z0(f);case 26:case 5:Ki(c,f,a),a&&r===null&&x&4&&Y0(f),ao(f,f.return);break;case 12:Ki(c,f,a);break;case 31:Ki(c,f,a),a&&x&4&&tm(c,f);break;case 13:Ki(c,f,a),a&&x&4&&em(c,f);break;case 22:f.memoizedState===null&&Ki(c,f,a),ao(f,f.return);break;case 30:break;default:Ki(c,f,a)}n=n.sibling}}function lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Xr(a))}function cf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xr(t))}function _i(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)am(t,n,a,r),n=n.sibling}function am(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,r),c&2048&&io(9,n);break;case 1:_i(t,n,a,r);break;case 3:_i(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xr(t)));break;case 12:if(c&2048){_i(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Be(n,n.return,F)}}else _i(t,n,a,r);break;case 31:_i(t,n,a,r);break;case 13:_i(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?_i(t,n,a,r):so(t,n):f._visibility&2?_i(t,n,a,r):(f._visibility|=2,qs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&lf(x,n);break;case 24:_i(t,n,a,r),c&2048&&cf(n.alternate,n);break;default:_i(t,n,a,r)}}function qs(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,E=a,F=r,tt=x.flags;switch(x.tag){case 0:case 11:case 15:qs(f,x,E,F,c),io(8,x);break;case 23:break;case 22:var ft=x.stateNode;x.memoizedState!==null?ft._visibility&2?qs(f,x,E,F,c):so(f,x):(ft._visibility|=2,qs(f,x,E,F,c)),c&&tt&2048&&lf(x.alternate,x);break;case 24:qs(f,x,E,F,c),c&&tt&2048&&cf(x.alternate,x);break;default:qs(f,x,E,F,c)}n=n.sibling}}function so(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:so(a,r),c&2048&&lf(r.alternate,r);break;case 24:so(a,r),c&2048&&cf(r.alternate,r);break;default:so(a,r)}n=n.sibling}}var ro=8192;function Ys(t,n,a){if(t.subtreeFlags&ro)for(t=t.child;t!==null;)sm(t,n,a),t=t.sibling}function sm(t,n,a){switch(t.tag){case 26:Ys(t,n,a),t.flags&ro&&t.memoizedState!==null&&rS(a,gi,t.memoizedState,t.memoizedProps);break;case 5:Ys(t,n,a);break;case 3:case 4:var r=gi;gi=Hl(t.stateNode.containerInfo),Ys(t,n,a),gi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=ro,ro=16777216,Ys(t,n,a),ro=r):Ys(t,n,a));break;default:Ys(t,n,a)}}function rm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function oo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,lm(r,t)}rm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)om(t),t=t.sibling}function om(t){switch(t.tag){case 0:case 11:case 15:oo(t),t.flags&2048&&Aa(9,t,t.return);break;case 3:oo(t);break;case 12:oo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Rl(t)):oo(t);break;default:oo(t)}}function Rl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,lm(r,t)}rm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}t=t.sibling}}function lm(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Xr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Sn=r;else t:for(a=t;Sn!==null;){r=Sn;var c=r.sibling,f=r.return;if(J0(r),r===a){Sn=null;break t}if(c!==null){c.return=f,Sn=c;break t}Sn=f}}}var yv={getCacheForType:function(t){var n=En(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return En(on).controller.signal}},Mv=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,xe=null,_e=0,ze=0,Qn=null,Ra=!1,js=!1,uf=!1,Qi=0,tn=0,Ca=0,ds=0,ff=0,Jn=0,Zs=0,lo=null,In=null,df=!1,Cl=0,cm=0,wl=1/0,Dl=null,wa=null,pn=0,Da=null,Ks=null,Ji=0,hf=0,pf=null,um=null,co=0,mf=null;function $n(){return(Ne&2)!==0&&_e!==0?_e&-_e:z.T!==null?yf():Dr()}function fm(){if(Jn===0)if((_e&536870912)===0||be){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Hn(t,n,a){(t===qe&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(Qs(t,0),Ua(t,_e,Jn,!1)),Rn(t,a),((Ne&2)===0||t!==qe)&&(t===qe&&((Ne&2)===0&&(ds|=a),tn===4&&Ua(t,_e,Jn,!1)),wi(t))}function dm(t,n,a){if((Ne&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Bt(t,n),c=r?Tv(t,n):gf(t,n,!0),f=r;do{if(c===0){js&&!r&&Ua(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!bv(a)){c=gf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=t;c=lo;var F=E.current.memoizedState.isDehydrated;if(F&&(Qs(E,x).flags|=256),x=gf(E,x,!1),x!==2){if(uf&&!F){E.errorRecoveryDisabledLanes|=f,ds|=f,c=4;break t}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Qs(t,0),Ua(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ua(r,n,Jn,!Ra);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Cl+300-b(),10<c)){if(Ua(r,n,Jn,!Ra),_t(r,0,!0)!==0)break t;Ji=n,r.timeoutHandle=km(hm.bind(null,r,a,In,Dl,df,n,Jn,ds,Zs,Ra,f,"Throttled",-0,0),c);break t}hm(r,a,In,Dl,df,n,Jn,ds,Zs,Ra,f,null,-0,0)}}break}while(!0);wi(t)}function hm(t,n,a,r,c,f,x,E,F,tt,ft,gt,nt,ot){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},sm(n,f,gt);var It=(f&62914560)===f?Cl-b():(f&4194048)===f?cm-b():0;if(It=oS(gt,It),It!==null){Ji=f,t.cancelPendingCommit=It(ym.bind(null,t,n,f,a,r,c,x,E,F,ft,gt,null,nt,ot)),Ua(t,f,x,!tt);return}}ym(t,n,f,a,r,c,x,E,F)}function bv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(t,n,a,r){n&=~ff,n&=~ds,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Vt(c),x=1<<f;r[f]=-1,c&=~x}a!==0&&Vo(t,a,n)}function Ul(){return(Ne&6)===0?(uo(0),!1):!0}function xf(){if(xe!==null){if(ze===0)var t=xe.return;else t=xe,Gi=is=null,Uu(t),Gs=null,qr=0,t=xe;for(;t!==null;)X0(t.alternate,t),t=t.return;xe=null}}function Qs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,kv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,xf(),qe=t,xe=a=Ii(t.current,null),_e=n,ze=0,Qn=null,Ra=!1,js=Bt(t,n),uf=!1,Zs=Jn=ff=ds=Ca=tn=0,In=lo=null,df=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Vt(r),f=1<<c;n|=t[c],r&=~f}return Qi=n,Jo(),a}function pm(t,n){oe=null,z.H=to,n===Hs||n===rl?(n=Dp(),ze=3):n===vu?(n=Dp(),ze=4):ze=n===Yu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,xe===null&&(tn=1,Sl(t,si(n,t.current)))}function mm(){var t=Zn.current;return t===null?!0:(_e&4194048)===_e?ci===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ci:!1}function xm(){var t=z.H;return z.H=to,t===null?to:t}function gm(){var t=z.A;return z.A=yv,t}function Ll(){tn=4,Ra||(_e&4194048)!==_e&&Zn.current!==null||(js=!0),(Ca&134217727)===0&&(ds&134217727)===0||qe===null||Ua(qe,_e,Jn,!1)}function gf(t,n,a){var r=Ne;Ne|=2;var c=xm(),f=gm();(qe!==t||_e!==n)&&(Dl=null,Qs(t,n)),n=!1;var x=tn;t:do try{if(ze!==0&&xe!==null){var E=xe,F=Qn;switch(ze){case 8:xf(),x=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var tt=ze;if(ze=0,Qn=null,Js(t,E,F,tt),a&&js){x=0;break t}break;default:tt=ze,ze=0,Qn=null,Js(t,E,F,tt)}}Ev(),x=tn;break}catch(ft){pm(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Gi=is=null,Ne=r,z.H=c,z.A=f,xe===null&&(qe=null,_e=0,Jo()),x}function Ev(){for(;xe!==null;)_m(xe)}function Tv(t,n){var a=Ne;Ne|=2;var r=xm(),c=gm();qe!==t||_e!==n?(Dl=null,wl=b()+500,Qs(t,n)):js=Bt(t,n);t:do try{if(ze!==0&&xe!==null){n=xe;var f=Qn;e:switch(ze){case 1:ze=0,Qn=null,Js(t,n,f,1);break;case 2:case 9:if(Cp(f)){ze=0,Qn=null,vm(n);break}n=function(){ze!==2&&ze!==9||qe!==t||(ze=7),wi(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Cp(f)?(ze=0,Qn=null,vm(n)):(ze=0,Qn=null,Js(t,n,f,7));break;case 5:var x=null;switch(xe.tag){case 26:x=xe.memoizedState;case 5:case 27:var E=xe;if(x?ax(x):E.stateNode.complete){ze=0,Qn=null;var F=E.sibling;if(F!==null)xe=F;else{var tt=E.return;tt!==null?(xe=tt,Nl(tt)):xe=null}break e}}ze=0,Qn=null,Js(t,n,f,5);break;case 6:ze=0,Qn=null,Js(t,n,f,6);break;case 8:xf(),tn=6;break t;default:throw Error(s(462))}}Av();break}catch(ft){pm(t,ft)}while(!0);return Gi=is=null,z.H=r,z.A=c,Ne=a,xe!==null?0:(qe=null,_e=0,Jo(),tn)}function Av(){for(;xe!==null&&!ae();)_m(xe)}function _m(t){var n=V0(t.alternate,t,Qi);t.memoizedProps=t.pendingProps,n===null?Nl(t):xe=n}function vm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=z0(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=z0(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Uu(n);default:X0(a,n),n=xe=gp(n,Qi),n=V0(a,n,Qi)}t.memoizedProps=t.pendingProps,n===null?Nl(t):xe=n}function Js(t,n,a,r){Gi=is=null,Uu(n),Gs=null,qr=0;var c=n.return;try{if(pv(t,c,n,a,_e)){tn=1,Sl(t,si(a,t.current)),xe=null;return}}catch(f){if(c!==null)throw xe=c,f;tn=1,Sl(t,si(a,t.current)),xe=null;return}n.flags&32768?(be||r===1?t=!0:js||(_e&536870912)!==0?t=!1:(Ra=t=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Sm(n,t)):Nl(n)}function Nl(t){var n=t;do{if((n.flags&32768)!==0){Sm(n,Ra);return}t=n.return;var a=gv(n.alternate,n,Qi);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);tn===0&&(tn=5)}function Sm(t,n){do{var a=_v(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);tn=6,xe=null}function ym(t,n,a,r,c,f,x,E,F){t.cancelPendingCommit=null;do Ol();while(pn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=au,Wn(t,a,f,x,E,F),t===qe&&(xe=qe=null,_e=0),Ks=n,Da=t,Ji=a,hf=f,pf=c,um=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Dv(ct,function(){return Am(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,c=Z.p,Z.p=2,x=Ne,Ne|=4;try{vv(t,n,a)}finally{Ne=x,Z.p=c,z.T=r}}pn=1,Mm(),bm(),Em()}}function Mm(){if(pn===1){pn=0;var t=Da,n=Ks,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=Z.p;Z.p=2;var c=Ne;Ne|=4;try{nm(n,t);var f=wf,x=lp(t.containerInfo),E=f.focusedElem,F=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&op(E.ownerDocument.documentElement,E)){if(F!==null&&$c(E)){var tt=F.start,ft=F.end;if(ft===void 0&&(ft=tt),"selectionStart"in E)E.selectionStart=tt,E.selectionEnd=Math.min(ft,E.value.length);else{var gt=E.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),It=E.textContent.length,te=Math.min(F.start,It),Ge=F.end===void 0?te:Math.min(F.end,It);!ot.extend&&te>Ge&&(x=Ge,Ge=te,te=x);var W=rp(E,te),k=rp(E,Ge);if(W&&k&&(ot.rangeCount!==1||ot.anchorNode!==W.node||ot.anchorOffset!==W.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var J=gt.createRange();J.setStart(W.node,W.offset),ot.removeAllRanges(),te>Ge?(ot.addRange(J),ot.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ot.addRange(J))}}}}for(gt=[],ot=E;ot=ot.parentNode;)ot.nodeType===1&&gt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var ht=gt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}ql=!!Cf,wf=Cf=null}finally{Ne=c,Z.p=r,z.T=a}}t.current=n,pn=2}}function bm(){if(pn===2){pn=0;var t=Da,n=Ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=Z.p;Z.p=2;var c=Ne;Ne|=4;try{Q0(t,n.alternate,n)}finally{Ne=c,Z.p=r,z.T=a}}pn=3}}function Em(){if(pn===4||pn===3){pn=0,N();var t=Da,n=Ks,a=Ji,r=um;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,Ks=Da=null,Tm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(wa=null),Za(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,c=Z.p,Z.p=2,z.T=null;try{for(var f=t.onRecoverableError,x=0;x<r.length;x++){var E=r[x];f(E.value,{componentStack:E.stack})}}finally{z.T=n,Z.p=c}}(Ji&3)!==0&&Ol(),wi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===mf?co++:(co=0,mf=t):co=0,uo(0)}}function Tm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Xr(n)))}function Ol(){return Mm(),bm(),Em(),Am()}function Am(){if(pn!==5)return!1;var t=Da,n=hf;hf=0;var a=Za(Ji),r=z.T,c=Z.p;try{Z.p=32>a?32:a,z.T=null,a=pf,pf=null;var f=Da,x=Ji;if(pn=0,Ks=Da=null,Ji=0,(Ne&6)!==0)throw Error(s(331));var E=Ne;if(Ne|=4,om(f.current),am(f,f.current,x,a),Ne=E,uo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(St,f)}catch{}return!0}finally{Z.p=c,z.T=r,Tm(t,n)}}function Rm(t,n,a){n=si(a,n),n=qu(t.stateNode,n,2),t=ba(t,n,2),t!==null&&(Rn(t,2),wi(t))}function Be(t,n,a){if(t.tag===3)Rm(t,t,a);else for(;n!==null;){if(n.tag===3){Rm(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wa===null||!wa.has(r))){t=si(a,t),a=C0(2),r=ba(n,a,2),r!==null&&(w0(a,r,n,t),Rn(r,2),wi(r));break}}n=n.return}}function _f(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Mv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(uf=!0,c.add(a),t=Rv.bind(null,t,n,a),n.then(t,t))}function Rv(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(_e&a)===a&&(tn===4||tn===3&&(_e&62914560)===_e&&300>b()-Cl?(Ne&2)===0&&Qs(t,0):ff|=a,Zs===_e&&(Zs=0)),wi(t)}function Cm(t,n){n===0&&(n=Fe()),t=ts(t,n),t!==null&&(Rn(t,n),wi(t))}function Cv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Cm(t,a)}function wv(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Cm(t,a)}function Dv(t,n){return Xe(t,n)}var Pl=null,$s=null,vf=!1,zl=!1,Sf=!1,La=0;function wi(t){t!==$s&&t.next===null&&($s===null?Pl=$s=t:$s=$s.next=t),zl=!0,vf||(vf=!0,Lv())}function uo(t,n){if(!Sf&&zl){Sf=!0;do for(var a=!1,r=Pl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var x=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Vt(42|t)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Lm(r,f))}else f=_e,f=_t(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Bt(r,f)||(a=!0,Lm(r,f));r=r.next}while(a);Sf=!1}}function Uv(){wm()}function wm(){zl=vf=!1;var t=0;La!==0&&Vv()&&(t=La);for(var n=b(),a=null,r=Pl;r!==null;){var c=r.next,f=Dm(r,n);f===0?(r.next=null,a===null?Pl=c:a.next=c,c===null&&($s=a)):(a=r,(t!==0||(f&3)!==0)&&(zl=!0)),r=c}pn!==0&&pn!==5||uo(t),La!==0&&(La=0)}function Dm(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Vt(f),E=1<<x,F=c[x];F===-1?((E&a)===0||(E&r)!==0)&&(c[x]=ie(E,n)):F<=n&&(t.expiredLanes|=E),f&=~E}if(n=qe,a=_e,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&jt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&jt(r),Za(a)){case 2:case 8:a=vt;break;case 32:a=ct;break;case 268435456:a=Ut;break;default:a=ct}return r=Um.bind(null,t),a=Xe(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&jt(r),t.callbackPriority=2,t.callbackNode=null,2}function Um(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ol()&&t.callbackNode!==a)return null;var r=_e;return r=_t(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(dm(t,r,n),Dm(t,b()),t.callbackNode!=null&&t.callbackNode===a?Um.bind(null,t):null)}function Lm(t,n){if(Ol())return null;dm(t,n,!0)}function Lv(){Xv(function(){(Ne&6)!==0?Xe(xt,Uv):wm()})}function yf(){if(La===0){var t=Fs;t===0&&(t=wt,wt<<=1,(wt&261888)===0&&(wt=256)),La=t}return La}function Nm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xo(""+t)}function Om(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Nv(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Nm((c[dn]||null).action),x=r.submitter;x&&(n=(n=x[dn]||null)?Nm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new jo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(La!==0){var F=x?Om(c,x):new FormData(c);Hu(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(E.preventDefault(),F=x?Om(c,x):new FormData(c),Hu(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var Mf=0;Mf<iu.length;Mf++){var bf=iu[Mf],Ov=bf.toLowerCase(),Pv=bf[0].toUpperCase()+bf.slice(1);xi(Ov,"on"+Pv)}xi(fp,"onAnimationEnd"),xi(dp,"onAnimationIteration"),xi(hp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Q_,"onTransitionRun"),xi(J_,"onTransitionStart"),xi($_,"onTransitionCancel"),xi(pp,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function Pm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var E=r[x],F=E.instance,tt=E.currentTarget;if(E=E.listener,F!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=tt;try{f(c)}catch(ft){Qo(ft)}c.currentTarget=null,f=F}else for(x=0;x<r.length;x++){if(E=r[x],F=E.instance,tt=E.currentTarget,E=E.listener,F!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=tt;try{f(c)}catch(ft){Qo(ft)}c.currentTarget=null,f=F}}}}function ge(t,n){var a=n[As];a===void 0&&(a=n[As]=new Set);var r=t+"__bubble";a.has(r)||(zm(n,t,2,!1),a.add(r))}function Ef(t,n,a){var r=0;n&&(r|=4),zm(a,t,r,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Tf(t){if(!t[Bl]){t[Bl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(zv.has(a)||Ef(a,!1,t),Ef(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,Ef("selectionchange",!1,n))}}function zm(t,n,a,r){switch(fx(n)){case 2:var c=uS;break;case 8:c=fS;break;default:c=Hf}a=c.bind(null,n,a,t),c=void 0,!Xc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Af(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var E=r.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=r.return;x!==null;){var F=x.tag;if((F===3||F===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=pa(E),x===null)return;if(F=x.tag,F===5||F===6||F===26||F===27){r=f=x;continue t}E=E.parentNode}}r=r.return}Gh(function(){var tt=f,ft=Vc(a),gt=[];t:{var nt=mp.get(t);if(nt!==void 0){var ot=jo,It=t;switch(t){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":ot=w_;break;case"focusin":It="focus",ot=jc;break;case"focusout":It="blur",ot=jc;break;case"beforeblur":case"afterblur":ot=jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=g_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=L_;break;case fp:case dp:case hp:ot=S_;break;case pp:ot=O_;break;case"scroll":case"scrollend":ot=m_;break;case"wheel":ot=z_;break;case"copy":case"cut":case"paste":ot=M_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=qh;break;case"toggle":case"beforetoggle":ot=F_}var te=(n&4)!==0,Ge=!te&&(t==="scroll"||t==="scrollend"),W=te?nt!==null?nt+"Capture":null:nt;te=[];for(var k=tt,J;k!==null;){var ht=k;if(J=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||J===null||W===null||(ht=Nr(k,W),ht!=null&&te.push(ho(k,ht,J))),Ge)break;k=k.return}0<te.length&&(nt=new ot(nt,It,null,a,ft),gt.push({event:nt,listeners:te}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",nt&&a!==Gc&&(It=a.relatedTarget||a.fromElement)&&(pa(It)||It[Oi]))break t;if((ot||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(It=a.relatedTarget||a.toElement,ot=tt,It=It?pa(It):null,It!==null&&(Ge=u(It),te=It.tag,It!==Ge||te!==5&&te!==27&&te!==6)&&(It=null)):(ot=null,It=tt),ot!==It)){if(te=Xh,ht="onMouseLeave",W="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(te=qh,ht="onPointerLeave",W="onPointerEnter",k="pointer"),Ge=ot==null?nt:X(ot),J=It==null?nt:X(It),nt=new te(ht,k+"leave",ot,a,ft),nt.target=Ge,nt.relatedTarget=J,ht=null,pa(ft)===tt&&(te=new te(W,k+"enter",It,a,ft),te.target=J,te.relatedTarget=Ge,ht=te),Ge=ht,ot&&It)e:{for(te=Bv,W=ot,k=It,J=0,ht=W;ht;ht=te(ht))J++;ht=0;for(var Kt=k;Kt;Kt=te(Kt))ht++;for(;0<J-ht;)W=te(W),J--;for(;0<ht-J;)k=te(k),ht--;for(;J--;){if(W===k||k!==null&&W===k.alternate){te=W;break e}W=te(W),k=te(k)}te=null}else te=null;ot!==null&&Bm(gt,nt,ot,te,!1),It!==null&&Ge!==null&&Bm(gt,Ge,It,te,!0)}}t:{if(nt=tt?X(tt):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var De=tp;else if(Jh(nt))if(ep)De=j_;else{De=q_;var kt=W_}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&Hc(tt.elementType)&&(De=tp):De=Y_;if(De&&(De=De(t,tt))){$h(gt,De,a,ft);break t}kt&&kt(t,nt,tt),t==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&_n(nt,"number",nt.value)}switch(kt=tt?X(tt):window,t){case"focusin":(Jh(kt)||kt.contentEditable==="true")&&(Ds=kt,tu=tt,Gr=null);break;case"focusout":Gr=tu=Ds=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,cp(gt,a,ft);break;case"selectionchange":if(K_)break;case"keydown":case"keyup":cp(gt,a,ft)}var ue;if(Kc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else ws?Kh(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Yh&&a.locale!=="ko"&&(ws||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&ws&&(ue=Vh()):(xa=ft,Wc="value"in xa?xa.value:xa.textContent,ws=!0)),kt=Fl(tt,ve),0<kt.length&&(ve=new Wh(ve,t,null,a,ft),gt.push({event:ve,listeners:kt}),ue?ve.data=ue:(ue=Qh(a),ue!==null&&(ve.data=ue)))),(ue=H_?G_(t,a):V_(t,a))&&(ve=Fl(tt,"onBeforeInput"),0<ve.length&&(kt=new Wh("onBeforeInput","beforeinput",null,a,ft),gt.push({event:kt,listeners:ve}),kt.data=ue)),Nv(gt,t,tt,a,ft)}Pm(gt,n)})}function ho(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Fl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Nr(t,a),c!=null&&r.unshift(ho(t,c,f)),c=Nr(t,n),c!=null&&r.push(ho(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Bv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bm(t,n,a,r,c){for(var f=n._reactName,x=[];a!==null&&a!==r;){var E=a,F=E.alternate,tt=E.stateNode;if(E=E.tag,F!==null&&F===r)break;E!==5&&E!==26&&E!==27||tt===null||(F=tt,c?(tt=Nr(a,f),tt!=null&&x.unshift(ho(a,tt,F))):c||(tt=Nr(a,f),tt!=null&&x.push(ho(a,tt,F)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Fv=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function Fm(t){return(typeof t=="string"?t:""+t).replace(Fv,`
`).replace(Iv,"")}function Im(t,n){return n=Fm(n),Fm(t)===n}function He(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ti(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ti(t,""+r);break;case"className":Ae(t,"class",r);break;case"tabIndex":Ae(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(t,a,r);break;case"style":Ih(t,r,f);break;case"data":if(n!=="object"){Ae(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Xo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Xo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Bi);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Xo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ce(t,"popover",r);break;case"xlinkActuate":we(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":we(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":we(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":we(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":we(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":we(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":we(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":we(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":we(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ce(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=h_.get(a)||a,ce(t,a,r))}}function Rf(t,n,a,r,c,f){switch(a){case"style":Ih(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Ti(t,r):(typeof r=="number"||typeof r=="bigint")&&Ti(t,""+r);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ce(t,a,r)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,f,x,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),r&&He(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var E=f=x=c=null,F=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":c=ft;break;case"type":x=ft;break;case"checked":F=ft;break;case"defaultChecked":tt=ft;break;case"value":f=ft;break;case"defaultValue":E=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:He(t,n,r,ft,a,null)}}je(t,f,E,F,tt,x,c,!1);return;case"select":ge("invalid",t),r=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":r=E;default:He(t,n,c,E,a,null)}n=f,a=x,t.multiple=!!r,n!=null?hn(t,!!r,n,!1):a!=null&&hn(t,!!r,a,!0);return;case"textarea":ge("invalid",t),f=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:He(t,n,x,E,a,null)}Mn(t,r,c,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(r=a[F],r!=null)&&(F==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":He(t,n,F,r,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(r=0;r<fo.length;r++)ge(fo[r],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,tt,r,a,null)}return;default:if(Hc(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Rf(t,n,ft,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&He(t,n,E,r,a,null))}function Hv(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,F=null,tt=null,ft=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=gt;default:r.hasOwnProperty(ot)||He(t,n,ot,null,r,gt)}}for(var nt in r){var ot=r[nt];if(gt=a[nt],r.hasOwnProperty(nt)&&(ot!=null||gt!=null))switch(nt){case"type":f=ot;break;case"name":c=ot;break;case"checked":tt=ot;break;case"defaultChecked":ft=ot;break;case"value":x=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==gt&&He(t,n,nt,ot,r,gt)}}Pi(t,x,E,F,tt,ft,f,c);return;case"select":ot=x=E=nt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ot=F;default:r.hasOwnProperty(f)||He(t,n,f,null,r,F)}for(c in r)if(f=r[c],F=a[c],r.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":nt=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==F&&He(t,n,c,f,r,F)}n=E,a=x,r=ot,nt!=null?hn(t,!!a,nt,!1):!!r!=!!a&&(n!=null?hn(t,!!a,n,!0):hn(t,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:He(t,n,E,null,r,c)}for(x in r)if(c=r[x],f=a[x],r.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":nt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&He(t,n,x,c,r,f)}vn(t,nt,ot);return;case"option":for(var It in a)nt=a[It],a.hasOwnProperty(It)&&nt!=null&&!r.hasOwnProperty(It)&&(It==="selected"?t.selected=!1:He(t,n,It,null,r,nt));for(F in r)nt=r[F],ot=a[F],r.hasOwnProperty(F)&&nt!==ot&&(nt!=null||ot!=null)&&(F==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":He(t,n,F,nt,r,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!r.hasOwnProperty(te)&&He(t,n,te,null,r,nt);for(tt in r)if(nt=r[tt],ot=a[tt],r.hasOwnProperty(tt)&&nt!==ot&&(nt!=null||ot!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:He(t,n,tt,nt,r,ot)}return;default:if(Hc(n)){for(var Ge in a)nt=a[Ge],a.hasOwnProperty(Ge)&&nt!==void 0&&!r.hasOwnProperty(Ge)&&Rf(t,n,Ge,void 0,r,nt);for(ft in r)nt=r[ft],ot=a[ft],!r.hasOwnProperty(ft)||nt===ot||nt===void 0&&ot===void 0||Rf(t,n,ft,nt,r,ot);return}}for(var W in a)nt=a[W],a.hasOwnProperty(W)&&nt!=null&&!r.hasOwnProperty(W)&&He(t,n,W,null,r,nt);for(gt in r)nt=r[gt],ot=a[gt],!r.hasOwnProperty(gt)||nt===ot||nt==null&&ot==null||He(t,n,gt,nt,r,ot)}function Hm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Hm(x)){for(x=0,E=c.responseEnd,r+=1;r<a.length;r++){var F=a[r],tt=F.startTime;if(tt>E)break;var ft=F.transferSize,gt=F.initiatorType;ft&&Hm(gt)&&(F=F.responseEnd,x+=ft*(F<E?1:(E-tt)/(F-tt)))}if(--r,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Cf=null,wf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function Gm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Df(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uf=null;function Vv(){var t=window.event;return t&&t.type==="popstate"?t===Uf?!1:(Uf=t,!0):(Uf=null,!1)}var km=typeof setTimeout=="function"?setTimeout:void 0,kv=typeof clearTimeout=="function"?clearTimeout:void 0,Xm=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Xm<"u"?function(t){return Xm.resolve(null).then(t).catch(Wv)}:km;function Wv(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function Wm(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),ir(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,po(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[Ka]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&po(t.ownerDocument.body);a=c}while(a);ir(n)}function qm(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Lf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),Lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function qv(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ka])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function Yv(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Ym(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function Nf(t){return t.data==="$?"||t.data==="$~"}function Of(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function jv(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Pf=null;function jm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Zm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Km(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Lr(t)}var fi=new Map,Qm=new Set;function Hl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $i=Z.d;Z.d={f:Zv,r:Kv,D:Qv,C:Jv,L:$v,m:tS,X:nS,S:eS,M:iS};function Zv(){var t=$i.f(),n=Ul();return t||n}function Kv(t){var n=A(t);n!==null&&n.tag===5&&n.type==="form"?p0(n):$i.r(t)}var tr=typeof document>"u"?null:document;function Jm(t,n,a){var r=tr;if(r&&typeof n=="string"&&n){var c=Ye(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Qm.has(c)||(Qm.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),An(n,"link",t),et(n),r.head.appendChild(n)))}}function Qv(t){$i.D(t),Jm("dns-prefetch",t,null)}function Jv(t,n){$i.C(t,n),Jm("preconnect",t,n)}function $v(t,n,a){$i.L(t,n,a);var r=tr;if(r&&t&&n){var c='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ye(a.imageSizes)+'"]')):c+='[href="'+Ye(t)+'"]';var f=c;switch(n){case"style":f=er(t);break;case"script":f=nr(t)}fi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(mo(f))||n==="script"&&r.querySelector(xo(f))||(n=r.createElement("link"),An(n,"link",t),et(n),r.head.appendChild(n)))}}function tS(t,n){$i.m(t,n);var a=tr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ye(r)+'"][href="'+Ye(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=nr(t)}if(!fi.has(f)&&(t=g({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}r=a.createElement("link"),An(r,"link",t),et(r),a.head.appendChild(r)}}}function eS(t,n,a){$i.S(t,n,a);var r=tr;if(r&&t){var c=at(r).hoistableStyles,f=er(t);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=r.querySelector(mo(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&zf(t,a);var F=x=r.createElement("link");et(F),An(F,"link",t),F._p=new Promise(function(tt,ft){F.onload=tt,F.onerror=ft}),F.addEventListener("load",function(){E.loading|=1}),F.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Gl(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function nS(t,n){$i.X(t,n);var a=tr;if(a&&t){var r=at(a).hoistableScripts,c=nr(t),f=r.get(c);f||(f=a.querySelector(xo(c)),f||(t=g({src:t,async:!0},n),(n=fi.get(c))&&Bf(t,n),f=a.createElement("script"),et(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function iS(t,n){$i.M(t,n);var a=tr;if(a&&t){var r=at(a).hoistableScripts,c=nr(t),f=r.get(c);f||(f=a.querySelector(xo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Bf(t,n),f=a.createElement("script"),et(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function $m(t,n,a,r){var c=(c=it.current)?Hl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=er(a.href),a=at(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=er(a.href);var f=at(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(mo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||aS(c,t,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nr(a),a=at(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function er(t){return'href="'+Ye(t)+'"'}function mo(t){return'link[rel="stylesheet"]['+t+"]"}function tx(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function aS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),An(n,"link",a),et(n),t.head.appendChild(n))}function nr(t){return'[src="'+Ye(t)+'"]'}function xo(t){return"script[async]"+t}function ex(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(r)return n.instance=r,et(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),et(r),An(r,"style",c),Gl(r,a.precedence,t),n.instance=r;case"stylesheet":c=er(a.href);var f=t.querySelector(mo(c));if(f)return n.state.loading|=4,n.instance=f,et(f),f;r=tx(a),(c=fi.get(c))&&zf(r,c),f=(t.ownerDocument||t).createElement("link"),et(f);var x=f;return x._p=new Promise(function(E,F){x.onload=E,x.onerror=F}),An(f,"link",r),n.state.loading|=4,Gl(f,a.precedence,t),n.instance=f;case"script":return f=nr(a.src),(c=t.querySelector(xo(f)))?(n.instance=c,et(c),c):(r=a,(c=fi.get(f))&&(r=g({},a),Bf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),et(c),An(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Gl(r,a.precedence,t));return n.instance}function Gl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,x=0;x<r.length;x++){var E=r[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Vl=null;function nx(t,n,a){if(Vl===null){var r=new Map,c=Vl=new Map;c.set(a,r)}else c=Vl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ka]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var E=r.get(x);E?E.push(f):r.set(x,[f])}}return r}function ix(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function sS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ax(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function rS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=er(r.href),f=n.querySelector(mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=kl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,et(f);return}f=n.ownerDocument||n,r=tx(r),(c=fi.get(c))&&zf(r,c),f=f.createElement("link"),et(f);var x=f;x._p=new Promise(function(E,F){x.onload=E,x.onerror=F}),An(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=kl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ff=0;function oS(t,n){return t.stylesheets&&t.count===0&&Wl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Wl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ff===0&&(Ff=62500*Gv());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ff?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xl=null;function Wl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xl=new Map,n.forEach(lS,t),Xl=null,kl.call(t))}function lS(t,n){if(!(n.state.loading&4)){var a=Xl.get(t);if(a)var r=a.get(null);else{a=new Map,Xl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,c),a.set(x,c),this.count++,r=kl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var go={$$typeof:D,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function cS(t,n,a,r,c,f,x,E,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function sx(t,n,a,r,c,f,x,E,F,tt,ft,gt){return t=new cS(t,n,a,x,F,tt,ft,gt,E),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=xu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Su(f),t}function rx(t){return t?(t=Ns,t):Ns}function ox(t,n,a,r,c,f){c=rx(c),r.context===null?r.context=c:r.pendingContext=c,r=Ma(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ba(t,r,n),a!==null&&(Hn(a,t,n),jr(a,t,n))}function lx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function If(t,n){lx(t,n),(t=t.alternate)&&lx(t,n)}function cx(t){if(t.tag===13||t.tag===31){var n=ts(t,67108864);n!==null&&Hn(n,t,67108864),If(t,67108864)}}function ux(t){if(t.tag===13||t.tag===31){var n=$n();n=mi(n);var a=ts(t,n);a!==null&&Hn(a,t,n),If(t,n)}}var ql=!0;function uS(t,n,a,r){var c=z.T;z.T=null;var f=Z.p;try{Z.p=2,Hf(t,n,a,r)}finally{Z.p=f,z.T=c}}function fS(t,n,a,r){var c=z.T;z.T=null;var f=Z.p;try{Z.p=8,Hf(t,n,a,r)}finally{Z.p=f,z.T=c}}function Hf(t,n,a,r){if(ql){var c=Gf(r);if(c===null)Af(t,n,r,Yl,a),dx(t,r);else if(hS(c,t,n,a,r))r.stopPropagation();else if(dx(t,r),n&4&&-1<dS.indexOf(t)){for(;c!==null;){var f=A(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Mt(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var F=1<<31-Vt(x);E.entanglements[1]|=F,x&=~F}wi(f),(Ne&6)===0&&(wl=b()+500,uo(0))}}break;case 31:case 13:E=ts(f,2),E!==null&&Hn(E,f,2),Ul(),If(f,2)}if(f=Gf(r),f===null&&Af(t,n,r,Yl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Af(t,n,r,null,a)}}function Gf(t){return t=Vc(t),Vf(t)}var Yl=null;function Vf(t){if(Yl=null,t=pa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yl=t,null}function fx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case xt:return 2;case vt:return 8;case ct:case qt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var kf=!1,Oa=null,Pa=null,za=null,_o=new Map,vo=new Map,Ba=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dx(t,n){switch(t){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":_o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(n.pointerId)}}function So(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=A(n),n!==null&&cx(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function hS(t,n,a,r,c){switch(n){case"focusin":return Oa=So(Oa,t,n,a,r,c),!0;case"dragenter":return Pa=So(Pa,t,n,a,r,c),!0;case"mouseover":return za=So(za,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return _o.set(f,So(_o.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,vo.set(f,So(vo.get(f)||null,t,n,a,r,c)),!0}return!1}function hx(t){var n=pa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ur(t.priority,function(){ux(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ur(t.priority,function(){ux(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Gf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Gc=r,a.target.dispatchEvent(r),Gc=null}else return n=A(a),n!==null&&cx(n),t.blockedOn=a,!1;n.shift()}return!0}function px(t,n,a){jl(t)&&a.delete(n)}function pS(){kf=!1,Oa!==null&&jl(Oa)&&(Oa=null),Pa!==null&&jl(Pa)&&(Pa=null),za!==null&&jl(za)&&(za=null),_o.forEach(px),vo.forEach(px)}function Zl(t,n){t.blockedOn===n&&(t.blockedOn=null,kf||(kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,pS)))}var Kl=null;function mx(t){Kl!==t&&(Kl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Kl===t&&(Kl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Vf(r||a)===null)continue;break}var f=A(a);f!==null&&(t.splice(n,3),n-=3,Hu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function ir(t){function n(F){return Zl(F,t)}Oa!==null&&Zl(Oa,t),Pa!==null&&Zl(Pa,t),za!==null&&Zl(za,t),_o.forEach(n),vo.forEach(n);for(var a=0;a<Ba.length;a++){var r=Ba[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)hx(a),a.blockedOn===null&&Ba.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],x=c[dn]||null;if(typeof f=="function")x||mx(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[dn]||null)E=x.formAction;else if(Vf(c)!==null)continue}else E=x.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),mx(a)}}}function xx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Xf(t){this._internalRoot=t}Ql.prototype.render=Xf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();ox(a,r,t,n,null,null)},Ql.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ox(t.current,2,null,t,null,null),Ul(),n[Oi]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Dr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,t),a===0&&hx(t)}};var gx=e.version;if(gx!=="19.2.4")throw Error(s(527,gx,"19.2.4"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var mS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{St=Jl.inject(mS),bt=Jl}catch{}}return Mo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=E0,f=T0,x=A0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=sx(t,1,!1,null,null,a,r,null,c,f,x,xx),t[Oi]=n.current,Tf(t),new Xf(n)},Mo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=E0,x=T0,E=A0,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=sx(t,1,!0,n,a??null,r,c,F,f,x,E,xx),n.context=rx(null),a=n.current,r=$n(),r=mi(r),c=Ma(r),c.callback=null,ba(a,c,r),a=r,n.current.lanes=a,Rn(n,a),wi(n),t[Oi]=n.current,Tf(t),new Ql(n)},Mo.version="19.2.4",Mo}var Rx;function TS(){if(Rx)return Yf.exports;Rx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Yf.exports=ES(),Yf.exports}var AS=TS();const RS=["Embedded & IoT Devices","Intelligent Automation","Smart Manufacturing","Smart Agriculture","ERP / MES Systems","Full-stack Delivery","AI-assisted Engineering"];function CS(){return Nt.jsx("section",{className:"section",id:"about",children:Nt.jsxs("div",{className:"container",children:[Nt.jsx("p",{className:"section-kicker",children:"About"}),Nt.jsx("h2",{className:"section-title",children:"About Me"}),Nt.jsx("p",{className:"section-copy",children:"I am an independent developer focused on end-to-end system engineering for industrial and agricultural environments."}),Nt.jsx("p",{className:"section-copy",children:"My work combines embedded firmware, sensor networks, automation logic, and enterprise software into one reliable operational stack."}),Nt.jsx("p",{className:"section-copy",children:"I design practical systems that reduce manual work, improve data quality, and help teams run faster with better decision support."}),Nt.jsx("ul",{className:"tag-list","aria-label":"skills",children:RS.map(o=>Nt.jsx("li",{className:"tag",children:o},o))})]})})}function Og({href:o,children:e}){const i=o.startsWith("http")||o.startsWith("mailto:");return Nt.jsx("a",{className:"btn-primary",href:o,target:i?"_blank":void 0,rel:i?"noreferrer":void 0,children:e})}const Qf="contact@yourdomain.com";function wS(){return Nt.jsx("section",{className:"section contact-section",id:"contact",children:Nt.jsxs("div",{className:"container contact-panel",children:[Nt.jsx("p",{className:"section-kicker",children:"Contact"}),Nt.jsx("h2",{className:"section-title",children:"Let's Work Together"}),Nt.jsx("p",{className:"section-copy",children:"I can take any system from concept to deployment: hardware, embedded, IoT, automation, smart manufacturing, smart agriculture, ERP, MES, and full-stack software."}),Nt.jsx("p",{className:"section-copy",children:"If you can describe the problem, I can build the solution."}),Nt.jsxs("div",{className:"contact-actions",children:[Nt.jsx("a",{className:"contact-link",href:`mailto:${Qf}`,children:Qf}),Nt.jsx(Og,{href:`mailto:${Qf}`,children:"Send Email"})]})]})})}const Eh="181",DS=0,Cx=1,US=2,Pg=1,LS=2,ra=3,ja=0,Vn=1,oa=2,ua=0,_r=1,wx=2,Dx=3,Ux=4,NS=5,Ss=100,OS=101,PS=102,zS=103,BS=104,FS=200,IS=201,HS=202,GS=203,Ld=204,Nd=205,VS=206,kS=207,XS=208,WS=209,qS=210,YS=211,jS=212,ZS=213,KS=214,Od=0,Pd=1,zd=2,Sr=3,Bd=4,Fd=5,Id=6,Hd=7,zg=0,QS=1,JS=2,Ya=0,$S=1,ty=2,ey=3,ny=4,iy=5,ay=6,sy=7,Bg=300,yr=301,Mr=302,Gd=303,Vd=304,Oc=306,kd=1e3,la=1001,Xd=1002,ii=1003,ry=1004,$l=1005,pi=1006,Jf=1007,Ms=1008,Li=1009,Fg=1010,Ig=1011,Lo=1012,Th=1013,bs=1014,ca=1015,Tr=1016,Ah=1017,Rh=1018,No=1020,Hg=35902,Gg=35899,Vg=1021,kg=1022,bi=1023,Oo=1026,Po=1027,Xg=1028,Ch=1029,wh=1030,Dh=1031,Uh=1033,Ec=33776,Tc=33777,Ac=33778,Rc=33779,Wd=35840,qd=35841,Yd=35842,jd=35843,Zd=36196,Kd=37492,Qd=37496,Jd=37808,$d=37809,th=37810,eh=37811,nh=37812,ih=37813,ah=37814,sh=37815,rh=37816,oh=37817,lh=37818,ch=37819,uh=37820,fh=37821,dh=36492,hh=36494,ph=36495,mh=36283,xh=36284,gh=36285,_h=36286,oy=3200,ly=3201,Wg=0,cy=1,Wa="",hi="srgb",br="srgb-linear",wc="linear",Ve="srgb",ar=7680,Lx=519,uy=512,fy=513,dy=514,qg=515,hy=516,py=517,my=518,xy=519,Nx=35044,Ox="300 es",Ui=2e3,Dc=2001;function Yg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Uc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function gy(){const o=Uc("canvas");return o.style.display="block",o}const Px={};function zx(...o){const e="THREE."+o.shift();console.log(e,...o)}function re(...o){const e="THREE."+o.shift();console.warn(e,...o)}function sn(...o){const e="THREE."+o.shift();console.error(e,...o)}function zo(...o){const e=o.join(" ");e in Px||(Px[e]=!0,re(...o))}function _y(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Ar{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=Math.PI/180,vh=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function vy(o,e){return(o%e+e)%e}function td(o,e,i){return(1-i)*o+i*e}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,i=0){Se.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],S=u[d+0],M=u[d+1],T=u[d+2],C=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(h>=1){e[i+0]=S,e[i+1]=M,e[i+2]=T,e[i+3]=C;return}if(g!==C||m!==S||p!==M||_!==T){let y=m*S+p*M+_*T+g*C;y<0&&(S=-S,M=-M,T=-T,C=-C,y=-y);let v=1-h;if(y<.9995){const U=Math.acos(y),D=Math.sin(U);v=Math.sin(v*U)/D,h=Math.sin(h*U)/D,m=m*v+S*h,p=p*v+M*h,_=_*v+T*h,g=g*v+C*h}else{m=m*v+S*h,p=p*v+M*h,_=_*v+T*h,g=g*v+C*h;const U=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=U,p*=U,_*=U,g*=U}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=u[d],S=u[d+1],M=u[d+2],T=u[d+3];return e[i]=h*T+_*g+m*M-p*S,e[i+1]=m*T+_*S+p*g-h*M,e[i+2]=p*T+_*M+h*S-m*g,e[i+3]=_*T-h*g-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),g=h(u/2),S=m(s/2),M=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=S*_*g+p*M*T,this._y=p*M*g-S*_*T,this._z=p*_*T+S*M*g,this._w=p*_*g-S*M*T;break;case"YXZ":this._x=S*_*g+p*M*T,this._y=p*M*g-S*_*T,this._z=p*_*T-S*M*g,this._w=p*_*g+S*M*T;break;case"ZXY":this._x=S*_*g-p*M*T,this._y=p*M*g+S*_*T,this._z=p*_*T+S*M*g,this._w=p*_*g-S*M*T;break;case"ZYX":this._x=S*_*g-p*M*T,this._y=p*M*g+S*_*T,this._z=p*_*T-S*M*g,this._w=p*_*g+S*M*T;break;case"YZX":this._x=S*_*g+p*M*T,this._y=p*M*g+S*_*T,this._z=p*_*T-S*M*g,this._w=p*_*g-S*M*T;break;case"XZY":this._x=S*_*g-p*M*T,this._y=p*M*g-S*_*T,this._z=p*_*T+S*M*g,this._w=p*_*g+S*M*T;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=s+h+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(s>h&&s>g){const M=2*Math.sqrt(1+s-h-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-s-g);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-s-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-s*p,this._z=u*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,i=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Bx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Bx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),_=2*(h*i-u*l),g=2*(u*s-d*i);return this.x=i+m*p+d*g-h*_,this.y=s+m*_+h*p-u*g,this.z=l+m*g+u*_-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new K,Bx=new Fo;class fe{constructor(e,i,s,l,u,d,h,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p)}set(e,i,s,l,u,d,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],g=s[7],S=s[2],M=s[5],T=s[8],C=l[0],y=l[3],v=l[6],U=l[1],D=l[4],O=l[7],H=l[2],L=l[5],B=l[8];return u[0]=d*C+h*U+m*H,u[3]=d*y+h*D+m*L,u[6]=d*v+h*O+m*B,u[1]=p*C+_*U+g*H,u[4]=p*y+_*D+g*L,u[7]=p*v+_*O+g*B,u[2]=S*C+M*U+T*H,u[5]=S*y+M*D+T*L,u[8]=S*v+M*O+T*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*d*_-i*h*p-s*u*_+s*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=_*d-h*p,S=h*m-_*u,M=p*u-d*m,T=i*g+s*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=g*C,e[1]=(l*p-_*s)*C,e[2]=(h*s-l*d)*C,e[3]=S*C,e[4]=(_*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(d*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(nd.makeScale(e,i)),this}rotate(e){return this.premultiply(nd.makeRotation(-e)),this}translate(e,i){return this.premultiply(nd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new fe,Fx=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ix=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sy(){const o={enabled:!0,workingColorSpace:br,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ve&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ve&&(l.r=vr(l.r),l.g=vr(l.g),l.b=vr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?wc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[br]:{primaries:e,whitePoint:s,transfer:wc,toXYZ:Fx,fromXYZ:Ix,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:s,transfer:Ve,toXYZ:Fx,fromXYZ:Ix,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Le=Sy();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let sr;class yy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{sr===void 0&&(sr=Uc("canvas")),sr.width=e.width,sr.height=e.height;const l=sr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=sr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=fa(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let My=0;class Lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(id(l[d].image)):u.push(id(l[d]))}else u=id(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function id(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?yy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let by=0;const ad=new K;class On extends Ar{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=la,l=la,u=pi,d=Ms,h=bi,m=Li,p=On.DEFAULT_ANISOTROPY,_=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Bo(),this.name="",this.source=new Lh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case la:e.x=e.x<0?0:1;break;case Xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case la:e.y=e.y<0?0:1;break;case Xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Bg;On.DEFAULT_ANISOTROPY=1;class ke{constructor(e=0,i=0,s=0,l=1){ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],_=m[4],g=m[8],S=m[1],M=m[5],T=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+C)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,O=(M+1)/2,H=(v+1)/2,L=(_+S)/4,B=(g+C)/4,q=(T+y)/4;return D>O&&D>H?D<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(D),l=L/s,u=B/s):O>H?O<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),s=L/l,u=q/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=B/u,l=q/u),this.set(s,l,u,i),this}let U=Math.sqrt((y-T)*(y-T)+(g-C)*(g-C)+(S-_)*(S-_));return Math.abs(U)<.001&&(U=1),this.x=(y-T)/U,this.y=(g-C)/U,this.z=(S-_)/U,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ey extends Ar{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ke(0,0,e,i),this.scissorTest=!1,this.viewport=new ke(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new On(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Lh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends Ey{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class jg extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ty extends On{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,vi):vi.fromBufferAttribute(u,d),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),tc.copy(s.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),ec.subVectors(this.max,Eo),rr.subVectors(e.a,Eo),or.subVectors(e.b,Eo),lr.subVectors(e.c,Eo),Ia.subVectors(or,rr),Ha.subVectors(lr,or),hs.subVectors(rr,lr);let i=[0,-Ia.z,Ia.y,0,-Ha.z,Ha.y,0,-hs.z,hs.y,Ia.z,0,-Ia.x,Ha.z,0,-Ha.x,hs.z,0,-hs.x,-Ia.y,Ia.x,0,-Ha.y,Ha.x,0,-hs.y,hs.x,0];return!sd(i,rr,or,lr,ec)||(i=[1,0,0,0,1,0,0,0,1],!sd(i,rr,or,lr,ec))?!1:(nc.crossVectors(Ia,Ha),i=[nc.x,nc.y,nc.z],sd(i,rr,or,lr,ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ta=[new K,new K,new K,new K,new K,new K,new K,new K],vi=new K,tc=new Io,rr=new K,or=new K,lr=new K,Ia=new K,Ha=new K,hs=new K,Eo=new K,ec=new K,nc=new K,ps=new K;function sd(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){ps.fromArray(o,u);const h=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),m=e.dot(ps),p=i.dot(ps),_=s.dot(ps);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Ay=new Io,To=new K,rd=new K;class Ho{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Ay.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const i=To.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(To,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(rd)),this.expandByPoint(To.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ea=new K,od=new K,ic=new K,Ga=new K,ld=new K,ac=new K,cd=new K;class Nh{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){od.copy(e).add(i).multiplyScalar(.5),ic.copy(i).sub(e).normalize(),Ga.copy(this.origin).sub(od);const u=e.distanceTo(i)*.5,d=-this.direction.dot(ic),h=Ga.dot(this.direction),m=-Ga.dot(ic),p=Ga.lengthSq(),_=Math.abs(1-d*d);let g,S,M,T;if(_>0)if(g=d*m-h,S=d*h-m,T=u*_,g>=0)if(S>=-T)if(S<=T){const C=1/_;g*=C,S*=C,M=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S<=-T?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p):S<=T?(g=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(od).addScaledVector(ic,S),M}intersectSphere(e,i){ea.subVectors(e.center,this.origin);const s=ea.dot(this.direction),l=ea.dot(ea)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(u=(e.min.y-S.y)*_,d=(e.max.y-S.y)*_):(u=(e.max.y-S.y)*_,d=(e.min.y-S.y)*_),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,i,s,l,u){ld.subVectors(i,e),ac.subVectors(s,e),cd.crossVectors(ld,ac);let d=this.direction.dot(cd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ga.subVectors(this.origin,e);const m=h*this.direction.dot(ac.crossVectors(Ga,ac));if(m<0)return null;const p=h*this.direction.dot(ld.cross(Ga));if(p<0||m+p>d)return null;const _=-h*Ga.dot(cd);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,i,s,l,u,d,h,m,p,_,g,S,M,T,C,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p,_,g,S,M,T,C,y)}set(e,i,s,l,u,d,h,m,p,_,g,S,M,T,C,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=M,v[7]=T,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/cr.setFromMatrixColumn(e,0).length(),u=1/cr.setFromMatrixColumn(e,1).length(),d=1/cr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=d*_,M=d*g,T=h*_,C=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+T*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=T+M*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*_,M=m*g,T=p*_,C=p*g;i[0]=S+C*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=M*h-T,i[6]=C+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*_,M=m*g,T=p*_,C=p*g;i[0]=S-C*h,i[4]=-d*g,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*_,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*_,M=d*g,T=h*_,C=h*g;i[0]=m*_,i[4]=T*p-M,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,M=d*p,T=h*m,C=h*p;i[0]=m*_,i[4]=C-S*g,i[8]=T*g+M,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*g+T,i[10]=S-C*g}else if(e.order==="XZY"){const S=d*m,M=d*p,T=h*m,C=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+C,i[5]=d*_,i[9]=M*g-T,i[2]=T*g-M,i[6]=h*_,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ry,e,Cy)}lookAt(e,i,s){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Va.crossVectors(s,ti),Va.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Va.crossVectors(s,ti)),Va.normalize(),sc.crossVectors(ti,Va),l[0]=Va.x,l[4]=sc.x,l[8]=ti.x,l[1]=Va.y,l[5]=sc.y,l[9]=ti.y,l[2]=Va.z,l[6]=sc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],g=s[5],S=s[9],M=s[13],T=s[2],C=s[6],y=s[10],v=s[14],U=s[3],D=s[7],O=s[11],H=s[15],L=l[0],B=l[4],q=l[8],w=l[12],R=l[1],V=l[5],Q=l[9],lt=l[13],mt=l[2],rt=l[6],z=l[10],Z=l[14],j=l[3],dt=l[7],pt=l[11],P=l[15];return u[0]=d*L+h*R+m*mt+p*j,u[4]=d*B+h*V+m*rt+p*dt,u[8]=d*q+h*Q+m*z+p*pt,u[12]=d*w+h*lt+m*Z+p*P,u[1]=_*L+g*R+S*mt+M*j,u[5]=_*B+g*V+S*rt+M*dt,u[9]=_*q+g*Q+S*z+M*pt,u[13]=_*w+g*lt+S*Z+M*P,u[2]=T*L+C*R+y*mt+v*j,u[6]=T*B+C*V+y*rt+v*dt,u[10]=T*q+C*Q+y*z+v*pt,u[14]=T*w+C*lt+y*Z+v*P,u[3]=U*L+D*R+O*mt+H*j,u[7]=U*B+D*V+O*rt+H*dt,u[11]=U*q+D*Q+O*z+H*pt,u[15]=U*w+D*lt+O*Z+H*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],_=e[2],g=e[6],S=e[10],M=e[14],T=e[3],C=e[7],y=e[11],v=e[15];return T*(+u*m*g-l*p*g-u*h*S+s*p*S+l*h*M-s*m*M)+C*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*_-u*m*_)+y*(+i*p*g-i*h*M-u*d*g+s*d*M+u*h*_-s*p*_)+v*(-l*h*_-i*m*g+i*h*S+l*d*g-s*d*S+s*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=e[9],S=e[10],M=e[11],T=e[12],C=e[13],y=e[14],v=e[15],U=g*y*p-C*S*p+C*m*M-h*y*M-g*m*v+h*S*v,D=T*S*p-_*y*p-T*m*M+d*y*M+_*m*v-d*S*v,O=_*C*p-T*g*p+T*h*M-d*C*M-_*h*v+d*g*v,H=T*g*m-_*C*m-T*h*S+d*C*S+_*h*y-d*g*y,L=i*U+s*D+l*O+u*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return e[0]=U*B,e[1]=(C*S*u-g*y*u-C*l*M+s*y*M+g*l*v-s*S*v)*B,e[2]=(h*y*u-C*m*u+C*l*p-s*y*p-h*l*v+s*m*v)*B,e[3]=(g*m*u-h*S*u-g*l*p+s*S*p+h*l*M-s*m*M)*B,e[4]=D*B,e[5]=(_*y*u-T*S*u+T*l*M-i*y*M-_*l*v+i*S*v)*B,e[6]=(T*m*u-d*y*u-T*l*p+i*y*p+d*l*v-i*m*v)*B,e[7]=(d*S*u-_*m*u+_*l*p-i*S*p-d*l*M+i*m*M)*B,e[8]=O*B,e[9]=(T*g*u-_*C*u-T*s*M+i*C*M+_*s*v-i*g*v)*B,e[10]=(d*C*u-T*h*u+T*s*p-i*C*p-d*s*v+i*h*v)*B,e[11]=(_*h*u-d*g*u-_*s*p+i*g*p+d*s*M-i*h*M)*B,e[12]=H*B,e[13]=(_*C*l-T*g*l+T*s*S-i*C*S-_*s*y+i*g*y)*B,e[14]=(T*h*l-d*C*l-T*s*m+i*C*m+d*s*y-i*h*y)*B,e[15]=(d*g*l-_*h*l+_*s*m-i*g*m-d*s*S+i*h*S)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,h=e.y,m=e.z,p=u*d,_=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,g=h+h,S=u*p,M=u*_,T=u*g,C=d*_,y=d*g,v=h*g,U=m*p,D=m*_,O=m*g,H=s.x,L=s.y,B=s.z;return l[0]=(1-(C+v))*H,l[1]=(M+O)*H,l[2]=(T-D)*H,l[3]=0,l[4]=(M-O)*L,l[5]=(1-(S+v))*L,l[6]=(y+U)*L,l[7]=0,l[8]=(T+D)*B,l[9]=(y-U)*B,l[10]=(1-(S+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=cr.set(l[0],l[1],l[2]).length();const d=cr.set(l[4],l[5],l[6]).length(),h=cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/u,_=1/d,g=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=_,Si.elements[5]*=_,Si.elements[6]*=_,Si.elements[8]*=g,Si.elements[9]*=g,Si.elements[10]*=g,i.setFromRotationMatrix(Si),s.x=u,s.y=d,s.z=h,this}makePerspective(e,i,s,l,u,d,h=Ui,m=!1){const p=this.elements,_=2*u/(i-e),g=2*u/(s-l),S=(i+e)/(i-e),M=(s+l)/(s-l);let T,C;if(m)T=u/(d-u),C=d*u/(d-u);else if(h===Ui)T=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Dc)T=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,d,h=Ui,m=!1){const p=this.elements,_=2/(i-e),g=2/(s-l),S=-(i+e)/(i-e),M=-(s+l)/(s-l);let T,C;if(m)T=1/(d-u),C=d/(d-u);else if(h===Ui)T=-2/(d-u),C=-(d+u)/(d-u);else if(h===Dc)T=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const cr=new K,Si=new Je,Ry=new K(0,0,0),Cy=new K(1,1,1),Va=new K,sc=new K,ti=new K,Hx=new Je,Gx=new Fo;class Ni{constructor(e=0,i=0,s=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Hx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Gx.setFromEuler(this),this.setFromQuaternion(Gx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wy=0;const Vx=new K,ur=new Fo,na=new Je,rc=new K,Ao=new K,Dy=new K,Uy=new Fo,kx=new K(1,0,0),Xx=new K(0,1,0),Wx=new K(0,0,1),qx={type:"added"},Ly={type:"removed"},fr={type:"childadded",child:null},ud={type:"childremoved",child:null};class Un extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new K,i=new Ni,s=new Fo,l=new K(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new fe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ur.setFromAxisAngle(e,i),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,i){return ur.setFromAxisAngle(e,i),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(kx,e)}rotateY(e){return this.rotateOnAxis(Xx,e)}rotateZ(e){return this.rotateOnAxis(Wx,e)}translateOnAxis(e,i){return Vx.copy(e).applyQuaternion(this.quaternion),this.position.add(Vx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(kx,e)}translateY(e){return this.translateOnAxis(Xx,e)}translateZ(e){return this.translateOnAxis(Wx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?rc.copy(e):rc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Ao,rc,this.up):na.lookAt(rc,Ao,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),ur.setFromRotationMatrix(na),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(sn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qx),fr.child=e,this.dispatchEvent(fr),fr.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ly),ud.child=e,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qx),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,Dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),_=d(e.images),g=d(e.shapes),S=d(e.skeletons),M=d(e.animations),T=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new K(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new K,ia=new K,fd=new K,aa=new K,dr=new K,hr=new K,Yx=new K,dd=new K,hd=new K,pd=new K,md=new ke,xd=new ke,gd=new ke;class Mi{constructor(e=new K,i=new K,s=new K){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){yi.subVectors(l,i),ia.subVectors(s,i),fd.subVectors(e,i);const d=yi.dot(yi),h=yi.dot(ia),m=yi.dot(fd),p=ia.dot(ia),_=ia.dot(fd),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(p*m-h*_)*S,T=(d*_-h*m)*S;return u.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,i,s,l,u,d,h,m){return this.getBarycoord(e,i,s,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,aa.x),m.addScaledVector(d,aa.y),m.addScaledVector(h,aa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,d){return md.setScalar(0),xd.setScalar(0),gd.setScalar(0),md.fromBufferAttribute(e,i),xd.fromBufferAttribute(e,s),gd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(md,u.x),d.addScaledVector(xd,u.y),d.addScaledVector(gd,u.z),d}static isFrontFacing(e,i,s,l){return yi.subVectors(s,i),ia.subVectors(e,i),yi.cross(ia).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),yi.cross(ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Mi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,h;dr.subVectors(l,s),hr.subVectors(u,s),dd.subVectors(e,s);const m=dr.dot(dd),p=hr.dot(dd);if(m<=0&&p<=0)return i.copy(s);hd.subVectors(e,l);const _=dr.dot(hd),g=hr.dot(hd);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(dr,d);pd.subVectors(e,u);const M=dr.dot(pd),T=hr.dot(pd);if(T>=0&&M<=T)return i.copy(u);const C=M*p-m*T;if(C<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(hr,h);const y=_*T-M*g;if(y<=0&&g-_>=0&&M-T>=0)return Yx.subVectors(u,l),h=(g-_)/(g-_+(M-T)),i.copy(l).addScaledVector(Yx,h);const v=1/(y+C+S);return d=C*v,h=S*v,i.copy(s).addScaledVector(dr,d).addScaledVector(hr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},oc={h:0,s:0,l:0};function _d(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Le.workingColorSpace){if(e=vy(e,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=_d(d,u,e+1/3),this.g=_d(d,u,e),this.b=_d(d,u,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function s(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const s=Kg[e.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Le.workingToColorSpace(Dn.copy(this),e),Math.round(Ee(Dn.r*255,0,255))*65536+Math.round(Ee(Dn.g*255,0,255))*256+Math.round(Ee(Dn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,u=Dn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=_<=.5?g/(d+h):g/(2-d-h),d){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=hi){Le.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,s=Dn.g,l=Dn.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ka),this.setHSL(ka.h+e,ka.s+i,ka.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ka),e.getHSL(oc);const s=td(ka.h,oc.h,i),l=td(ka.s,oc.s,i),u=td(ka.l,oc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Te;Te.NAMES=Kg;let Ny=0;class Ts extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=_r,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Nd,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(s.blending=this.blending),this.side!==ja&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ld&&(s.blendSrc=this.blendSrc),this.blendDst!==Nd&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qg extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new K,lc=new Se;let Oy=0;class Ei{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Nx,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(e),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=bo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nx&&(e.usage=this.usage),e}}class Jg extends Ei{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class $g extends Ei{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class kn extends Ei{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Py=0;const di=new Je,vd=new Un,pr=new K,ei=new Io,Ro=new Io,yn=new K;class Xn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yg(e)?$g:Jg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new fe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,s){return di.makeTranslation(e,i,s),this.applyMatrix4(di),this}scale(e,i,s){return di.makeScale(e,i,s),this.applyMatrix4(di),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new kn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Ro.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ei.min,Ro.min),ei.expandByPoint(yn),yn.addVectors(ei.max,Ro.max),ei.expandByPoint(yn)):(ei.expandByPoint(Ro.min),ei.expandByPoint(Ro.max))}ei.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)yn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)yn.fromBufferAttribute(h,p),m&&(pr.fromBufferAttribute(e,p),yn.add(pr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<s.count;q++)h[q]=new K,m[q]=new K;const p=new K,_=new K,g=new K,S=new Se,M=new Se,T=new Se,C=new K,y=new K;function v(q,w,R){p.fromBufferAttribute(s,q),_.fromBufferAttribute(s,w),g.fromBufferAttribute(s,R),S.fromBufferAttribute(u,q),M.fromBufferAttribute(u,w),T.fromBufferAttribute(u,R),_.sub(p),g.sub(p),M.sub(S),T.sub(S);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(V),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(V),h[q].add(C),h[w].add(C),h[R].add(C),m[q].add(y),m[w].add(y),m[R].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let q=0,w=U.length;q<w;++q){const R=U[q],V=R.start,Q=R.count;for(let lt=V,mt=V+Q;lt<mt;lt+=3)v(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const D=new K,O=new K,H=new K,L=new K;function B(q){H.fromBufferAttribute(l,q),L.copy(H);const w=h[q];D.copy(w),D.sub(H.multiplyScalar(H.dot(w))).normalize(),O.crossVectors(L,w);const V=O.dot(m[q])<0?-1:1;d.setXYZW(q,D.x,D.y,D.z,V)}for(let q=0,w=U.length;q<w;++q){const R=U[q],V=R.start,Q=R.count;for(let lt=V,mt=V+Q;lt<mt;lt+=3)B(e.getX(lt+0)),B(e.getX(lt+1)),B(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new K,u=new K,d=new K,h=new K,m=new K,p=new K,_=new K,g=new K;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),h.add(_),m.add(_),p.add(_),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,g=h.normalized,S=new p.constructor(m.length*_);let M=0,T=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*_;for(let v=0;v<_;v++)S[T++]=p[M++]}return new Ei(S,_,g)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,g=p.length;_<g;_++){const S=p[_],M=e(S,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],g=u[p];for(let S=0,M=g.length;S<M;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jx=new Je,ms=new Nh,cc=new Ho,Zx=new K,uc=new K,fc=new K,dc=new K,Sd=new K,hc=new K,Kx=new K,pc=new K;class da extends Un{constructor(e=new Xn,i=new Qg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){hc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],g=u[m];_!==0&&(Sd.fromBufferAttribute(g,e),d?hc.addScaledVector(Sd,_):hc.addScaledVector(Sd.sub(i),_))}i.add(hc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cc.copy(s.boundingSphere),cc.applyMatrix4(u),ms.copy(e.ray).recast(e.near),!(cc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(cc,Zx)===null||ms.origin.distanceToSquared(Zx)>(e.far-e.near)**2))&&(jx.copy(u).invert(),ms.copy(e.ray).applyMatrix4(jx),!(s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ms)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,C=S.length;T<C;T++){const y=S[T],v=d[y.materialIndex],U=Math.max(y.start,M.start),D=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let O=U,H=D;O<H;O+=3){const L=h.getX(O),B=h.getX(O+1),q=h.getX(O+2);l=mc(this,v,e,s,p,_,g,L,B,q),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=T,v=C;y<v;y+=3){const U=h.getX(y),D=h.getX(y+1),O=h.getX(y+2);l=mc(this,d,e,s,p,_,g,U,D,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=S.length;T<C;T++){const y=S[T],v=d[y.materialIndex],U=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let O=U,H=D;O<H;O+=3){const L=O,B=O+1,q=O+2;l=mc(this,v,e,s,p,_,g,L,B,q),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=T,v=C;y<v;y+=3){const U=y,D=y+1,O=y+2;l=mc(this,d,e,s,p,_,g,U,D,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function zy(o,e,i,s,l,u,d,h){let m;if(e.side===Vn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,e.side===ja,h),m===null)return null;pc.copy(h),pc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pc);return p<i.near||p>i.far?null:{distance:p,point:pc.clone(),object:o}}function mc(o,e,i,s,l,u,d,h,m,p){o.getVertexPosition(h,uc),o.getVertexPosition(m,fc),o.getVertexPosition(p,dc);const _=zy(o,e,i,s,uc,fc,dc,Kx);if(_){const g=new K;Mi.getBarycoord(Kx,uc,fc,dc,g),l&&(_.uv=Mi.getInterpolatedAttribute(l,h,m,p,g,new Se)),u&&(_.uv1=Mi.getInterpolatedAttribute(u,h,m,p,g,new Se)),d&&(_.normal=Mi.getInterpolatedAttribute(d,h,m,p,g,new K),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new K,materialIndex:0};Mi.getNormal(uc,fc,dc,S.normal),_.face=S,_.barycoord=g}return _}class Go extends Xn{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],g=[];let S=0,M=0;T("z","y","x",-1,-1,s,i,e,d,u,0),T("z","y","x",1,-1,s,i,-e,d,u,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,u,4),T("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(g,2));function T(C,y,v,U,D,O,H,L,B,q,w){const R=O/B,V=H/q,Q=O/2,lt=H/2,mt=L/2,rt=B+1,z=q+1;let Z=0,j=0;const dt=new K;for(let pt=0;pt<z;pt++){const P=pt*V-lt;for(let st=0;st<rt;st++){const yt=st*R-Q;dt[C]=yt*U,dt[y]=P*D,dt[v]=mt,p.push(dt.x,dt.y,dt.z),dt[C]=0,dt[y]=0,dt[v]=L>0?1:-1,_.push(dt.x,dt.y,dt.z),g.push(st/B),g.push(1-pt/q),Z+=1}}for(let pt=0;pt<q;pt++)for(let P=0;P<B;P++){const st=S+P+rt*pt,yt=S+P+rt*(pt+1),Et=S+(P+1)+rt*(pt+1),Pt=S+(P+1)+rt*pt;m.push(st,yt,Pt),m.push(yt,Et,Pt),j+=6}h.addGroup(M,j,w),M+=j,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Er(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const s=Er(o[i]);for(const l in s)e[l]=s[l]}return e}function By(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function t_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const Fy={clone:Er,merge:Nn};var Iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ha extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iy,this.fragmentShader=Hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=By(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class e_ extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new K,Qx=new Se,Jx=new Se;class ni extends e_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=vh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($f*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vh*2*Math.atan(Math.tan($f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z)}getViewSize(e,i){return this.getViewBounds(e,Qx,Jx),i.subVectors(Jx,Qx)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan($f*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const mr=-90,xr=1;class Gy extends Un{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ni(mr,xr,e,i);l.layers=this.layers,this.add(l);const u=new ni(mr,xr,e,i);u.layers=this.layers,this.add(u);const d=new ni(mr,xr,e,i);d.layers=this.layers,this.add(d);const h=new ni(mr,xr,e,i);h.layers=this.layers,this.add(h);const m=new ni(mr,xr,e,i);m.layers=this.layers,this.add(m);const p=new ni(mr,xr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Ui)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Dc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(g,S,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class n_ extends On{constructor(e=[],i=yr,s,l,u,d,h,m,p,_){super(e,i,s,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vy extends Es{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new n_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Go(5,5,5),u=new ha({name:"CubemapFromEquirect",uniforms:Er(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:ua});u.uniforms.tEquirect.value=i;const d=new da(l,u),h=i.minFilter;return i.minFilter===Ms&&(i.minFilter=pi),new Gy(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}class xc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ky={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ky)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new xc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Oh{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=i,this.far=s}clone(){return new Oh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Xy=class extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};class Wy extends On{constructor(e=null,i=1,s=1,l,u,d,h,m,p=ii,_=ii,g,S){super(null,d,h,m,p,_,l,u,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Md=new K,qy=new K,Yy=new fe;class vs{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Md.subVectors(s,i).cross(qy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Md),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Yy.getNormalMatrix(e),l=this.coplanarPoint(Md).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Ho,jy=new Se(.5,.5),gc=new K;class Ph{constructor(e=new vs,i=new vs,s=new vs,l=new vs,u=new vs,d=new vs){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ui,s=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],g=u[5],S=u[6],M=u[7],T=u[8],C=u[9],y=u[10],v=u[11],U=u[12],D=u[13],O=u[14],H=u[15];if(l[0].setComponents(p-d,M-_,v-T,H-U).normalize(),l[1].setComponents(p+d,M+_,v+T,H+U).normalize(),l[2].setComponents(p+h,M+g,v+C,H+D).normalize(),l[3].setComponents(p-h,M-g,v-C,H-D).normalize(),s)l[4].setComponents(m,S,y,O).normalize(),l[5].setComponents(p-m,M-S,v-y,H-O).normalize();else if(l[4].setComponents(p-m,M-S,v-y,H-O).normalize(),i===Ui)l[5].setComponents(p+m,M+S,v+y,H+O).normalize();else if(i===Dc)l[5].setComponents(m,S,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const i=jy.distanceTo(e.center);return xs.radius=.7071067811865476+i,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class i_ extends Ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new K,Nc=new K,$x=new Je,Co=new Nh,_c=new Ho,bd=new K,tg=new K;class Zy extends Un{constructor(e=new Xn,i=new i_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Lc.fromBufferAttribute(i,l-1),Nc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Lc.distanceTo(Nc);e.setAttribute("lineDistance",new kn(s,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(l),_c.radius+=u,e.ray.intersectsSphere(_c)===!1)return;$x.copy(l).invert(),Co.copy(e.ray).applyMatrix4($x);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=s.index,S=s.attributes.position;if(_!==null){const M=Math.max(0,d.start),T=Math.min(_.count,d.start+d.count);for(let C=M,y=T-1;C<y;C+=p){const v=_.getX(C),U=_.getX(C+1),D=vc(this,e,Co,m,v,U,C);D&&i.push(D)}if(this.isLineLoop){const C=_.getX(T-1),y=_.getX(M),v=vc(this,e,Co,m,C,y,T-1);v&&i.push(v)}}else{const M=Math.max(0,d.start),T=Math.min(S.count,d.start+d.count);for(let C=M,y=T-1;C<y;C+=p){const v=vc(this,e,Co,m,C,C+1,C);v&&i.push(v)}if(this.isLineLoop){const C=vc(this,e,Co,m,T-1,M,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function vc(o,e,i,s,l,u,d){const h=o.geometry.attributes.position;if(Lc.fromBufferAttribute(h,l),Nc.fromBufferAttribute(h,u),i.distanceSqToSegment(Lc,Nc,bd,tg)>s)return;bd.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(bd);if(!(p<e.near||p>e.far))return{distance:p,point:tg.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const eg=new K,ng=new K;class Ky extends Zy{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)eg.fromBufferAttribute(i,l),ng.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+eg.distanceTo(ng);e.setAttribute("lineDistance",new kn(s,1))}else re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sh extends Ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ig=new Je,yh=new Nh,Sc=new Ho,yc=new K;class ag extends Un{constructor(e=new Xn,i=new Sh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(l),Sc.radius+=u,e.ray.intersectsSphere(Sc)===!1)return;ig.copy(l).invert(),yh.copy(e.ray).applyMatrix4(ig);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const S=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let T=S,C=M;T<C;T++){const y=p.getX(T);yc.fromBufferAttribute(g,y),sg(yc,y,m,l,e,i,this)}}else{const S=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let T=S,C=M;T<C;T++)yc.fromBufferAttribute(g,T),sg(yc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function sg(o,e,i,s,l,u,d){const h=yh.distanceSqToPoint(o);if(h<i){const m=new K;yh.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class a_ extends On{constructor(e,i,s=bs,l,u,d,h=ii,m=ii,p,_=Oo,g=1){if(_!==Oo&&_!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,u,d,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class s_ extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zh extends Xn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const u=[],d=[];h(l),p(s),_(),this.setAttribute("position",new kn(u,3)),this.setAttribute("normal",new kn(u.slice(),3)),this.setAttribute("uv",new kn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(U){const D=new K,O=new K,H=new K;for(let L=0;L<i.length;L+=3)M(i[L+0],D),M(i[L+1],O),M(i[L+2],H),m(D,O,H,U)}function m(U,D,O,H){const L=H+1,B=[];for(let q=0;q<=L;q++){B[q]=[];const w=U.clone().lerp(O,q/L),R=D.clone().lerp(O,q/L),V=L-q;for(let Q=0;Q<=V;Q++)Q===0&&q===L?B[q][Q]=w:B[q][Q]=w.clone().lerp(R,Q/V)}for(let q=0;q<L;q++)for(let w=0;w<2*(L-q)-1;w++){const R=Math.floor(w/2);w%2===0?(S(B[q][R+1]),S(B[q+1][R]),S(B[q][R])):(S(B[q][R+1]),S(B[q+1][R+1]),S(B[q+1][R]))}}function p(U){const D=new K;for(let O=0;O<u.length;O+=3)D.x=u[O+0],D.y=u[O+1],D.z=u[O+2],D.normalize().multiplyScalar(U),u[O+0]=D.x,u[O+1]=D.y,u[O+2]=D.z}function _(){const U=new K;for(let D=0;D<u.length;D+=3){U.x=u[D+0],U.y=u[D+1],U.z=u[D+2];const O=y(U)/2/Math.PI+.5,H=v(U)/Math.PI+.5;d.push(O,1-H)}T(),g()}function g(){for(let U=0;U<d.length;U+=6){const D=d[U+0],O=d[U+2],H=d[U+4],L=Math.max(D,O,H),B=Math.min(D,O,H);L>.9&&B<.1&&(D<.2&&(d[U+0]+=1),O<.2&&(d[U+2]+=1),H<.2&&(d[U+4]+=1))}}function S(U){u.push(U.x,U.y,U.z)}function M(U,D){const O=U*3;D.x=e[O+0],D.y=e[O+1],D.z=e[O+2]}function T(){const U=new K,D=new K,O=new K,H=new K,L=new Se,B=new Se,q=new Se;for(let w=0,R=0;w<u.length;w+=9,R+=6){U.set(u[w+0],u[w+1],u[w+2]),D.set(u[w+3],u[w+4],u[w+5]),O.set(u[w+6],u[w+7],u[w+8]),L.set(d[R+0],d[R+1]),B.set(d[R+2],d[R+3]),q.set(d[R+4],d[R+5]),H.copy(U).add(D).add(O).divideScalar(3);const V=y(H);C(L,R+0,U,V),C(B,R+2,D,V),C(q,R+4,O,V)}}function C(U,D,O,H){H<0&&U.x===1&&(d[D]=U.x-1),O.x===0&&O.z===0&&(d[D]=H/2/Math.PI+.5)}function y(U){return Math.atan2(U.z,-U.x)}function v(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zh(e.vertices,e.indices,e.radius,e.details)}}class Bh extends zh{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Bh(e.radius,e.detail)}}class Pc extends Xn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,g=e/h,S=i/m,M=[],T=[],C=[],y=[];for(let v=0;v<_;v++){const U=v*S-d;for(let D=0;D<p;D++){const O=D*g-u;T.push(O,-U,0),C.push(0,0,1),y.push(D/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let U=0;U<h;U++){const D=U+p*v,O=U+p*(v+1),H=U+1+p*(v+1),L=U+1+p*v;M.push(D,O,L),M.push(O,H,L)}this.setIndex(M),this.setAttribute("position",new kn(T,3)),this.setAttribute("normal",new kn(C,3)),this.setAttribute("uv",new kn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qy extends Ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wg,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jy extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $y extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class r_ extends Un{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ed=new Je,rg=new K,og=new K;class tM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;rg.setFromMatrixPosition(e.matrixWorld),i.position.copy(rg),og.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(og),i.updateMatrixWorld(),Ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lg=new Je,wo=new K,Td=new K;class eM extends tM{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),wo.setFromMatrixPosition(e.matrixWorld),s.position.copy(wo),Td.copy(s.position),Td.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Td),s.updateMatrixWorld(),l.makeTranslation(-wo.x,-wo.y,-wo.z),lg.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lg,s.coordinateSystem,s.reversedDepth)}}class cg extends r_{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new eM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nM extends e_{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class iM extends r_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class aM extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function ug(o,e,i,s){const l=rM(s);switch(i){case Vg:return o*e;case Xg:return o*e/l.components*l.byteLength;case Ch:return o*e/l.components*l.byteLength;case wh:return o*e*2/l.components*l.byteLength;case Dh:return o*e*2/l.components*l.byteLength;case kg:return o*e*3/l.components*l.byteLength;case bi:return o*e*4/l.components*l.byteLength;case Uh:return o*e*4/l.components*l.byteLength;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Rc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qd:case jd:return Math.max(o,16)*Math.max(e,8)/4;case Wd:case Yd:return Math.max(o,8)*Math.max(e,8)/2;case Zd:case Kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Qd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case th:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case rh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case dh:case hh:case ph:return Math.ceil(o/4)*Math.ceil(e/4)*16;case mh:case xh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case gh:case _h:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rM(o){switch(o){case Li:case Fg:return{byteLength:1,components:1};case Lo:case Ig:case Tr:return{byteLength:2,components:1};case Ah:case Rh:return{byteLength:2,components:4};case bs:case Th:case ca:return{byteLength:4,components:1};case Hg:case Gg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);function o_(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function oM(o){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,_);else{g.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<g.length;M++){const T=g[S],C=g[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++S,g[S]=C)}g.length=S+1;for(let M=0,T=g.length;M<T;M++){const C=g[M];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
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
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
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
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xM=`#ifdef USE_BATCHING
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
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yM=`#ifdef USE_IRIDESCENCE
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
#endif`,MM=`#ifdef USE_BUMPMAP
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UM=`#define PI 3.141592653589793
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
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NM=`vec3 transformedNormal = objectNormal;
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
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,kM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
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
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$M=`uniform bool receiveShadow;
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
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sb=`PhysicalMaterial material;
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
#endif`,rb=`uniform sampler2D dfgLUT;
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
}`,ob=`
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
#endif`,lb=`#if defined( RE_IndirectDiffuse )
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
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gb=`#if defined( USE_POINTS_UV )
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
#endif`,_b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`#ifdef USE_MORPHTARGETS
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
#endif`,Eb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Db=`#ifdef USE_NORMALMAP
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
#endif`,Ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qb=`float getShadowMask() {
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
}`,Yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jb=`#ifdef USE_SKINNING
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
#endif`,Zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,Qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e3=`#ifdef USE_TRANSMISSION
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
#endif`,n3=`#ifdef USE_TRANSMISSION
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
#endif`,i3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l3=`uniform sampler2D t2D;
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
}`,c3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h3=`#include <common>
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
}`,p3=`#if DEPTH_PACKING == 3200
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
}`,m3=`#define DISTANCE
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
}`,x3=`#define DISTANCE
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
}`,g3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v3=`uniform float scale;
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
}`,S3=`uniform vec3 diffuse;
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
}`,y3=`#include <common>
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
}`,M3=`uniform vec3 diffuse;
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
}`,b3=`#define LAMBERT
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
}`,E3=`#define LAMBERT
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
}`,T3=`#define MATCAP
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
}`,A3=`#define MATCAP
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
}`,R3=`#define NORMAL
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
}`,C3=`#define NORMAL
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
}`,w3=`#define PHONG
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
}`,D3=`#define PHONG
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
}`,U3=`#define STANDARD
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
}`,L3=`#define STANDARD
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
}`,N3=`#define TOON
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
}`,O3=`#define TOON
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
}`,P3=`uniform float size;
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
}`,z3=`uniform vec3 diffuse;
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
}`,B3=`#include <common>
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
}`,F3=`uniform vec3 color;
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
}`,I3=`uniform float rotation;
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
}`,H3=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:fM,alphatest_fragment:dM,alphatest_pars_fragment:hM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:xM,batching_vertex:gM,begin_vertex:_M,beginnormal_vertex:vM,bsdfs:SM,iridescence_fragment:yM,bumpmap_pars_fragment:MM,clipping_planes_fragment:bM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:AM,color_fragment:RM,color_pars_fragment:CM,color_pars_vertex:wM,color_vertex:DM,common:UM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:NM,displacementmap_pars_vertex:OM,displacementmap_vertex:PM,emissivemap_fragment:zM,emissivemap_pars_fragment:BM,colorspace_fragment:FM,colorspace_pars_fragment:IM,envmap_fragment:HM,envmap_common_pars_fragment:GM,envmap_pars_fragment:VM,envmap_pars_vertex:kM,envmap_physical_pars_fragment:tb,envmap_vertex:XM,fog_vertex:WM,fog_pars_vertex:qM,fog_fragment:YM,fog_pars_fragment:jM,gradientmap_pars_fragment:ZM,lightmap_pars_fragment:KM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:JM,lights_pars_begin:$M,lights_toon_fragment:eb,lights_toon_pars_fragment:nb,lights_phong_fragment:ib,lights_phong_pars_fragment:ab,lights_physical_fragment:sb,lights_physical_pars_fragment:rb,lights_fragment_begin:ob,lights_fragment_maps:lb,lights_fragment_end:cb,logdepthbuf_fragment:ub,logdepthbuf_pars_fragment:fb,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:hb,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:xb,map_particle_pars_fragment:gb,metalnessmap_fragment:_b,metalnessmap_pars_fragment:vb,morphinstance_vertex:Sb,morphcolor_vertex:yb,morphnormal_vertex:Mb,morphtarget_pars_vertex:bb,morphtarget_vertex:Eb,normal_fragment_begin:Tb,normal_fragment_maps:Ab,normal_pars_fragment:Rb,normal_pars_vertex:Cb,normal_vertex:wb,normalmap_pars_fragment:Db,clearcoat_normal_fragment_begin:Ub,clearcoat_normal_fragment_maps:Lb,clearcoat_pars_fragment:Nb,iridescence_pars_fragment:Ob,opaque_fragment:Pb,packing:zb,premultiplied_alpha_fragment:Bb,project_vertex:Fb,dithering_fragment:Ib,dithering_pars_fragment:Hb,roughnessmap_fragment:Gb,roughnessmap_pars_fragment:Vb,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:Xb,shadowmap_vertex:Wb,shadowmask_pars_fragment:qb,skinbase_vertex:Yb,skinning_pars_vertex:jb,skinning_vertex:Zb,skinnormal_vertex:Kb,specularmap_fragment:Qb,specularmap_pars_fragment:Jb,tonemapping_fragment:$b,tonemapping_pars_fragment:t3,transmission_fragment:e3,transmission_pars_fragment:n3,uv_pars_fragment:i3,uv_pars_vertex:a3,uv_vertex:s3,worldpos_vertex:r3,background_vert:o3,background_frag:l3,backgroundCube_vert:c3,backgroundCube_frag:u3,cube_vert:f3,cube_frag:d3,depth_vert:h3,depth_frag:p3,distanceRGBA_vert:m3,distanceRGBA_frag:x3,equirect_vert:g3,equirect_frag:_3,linedashed_vert:v3,linedashed_frag:S3,meshbasic_vert:y3,meshbasic_frag:M3,meshlambert_vert:b3,meshlambert_frag:E3,meshmatcap_vert:T3,meshmatcap_frag:A3,meshnormal_vert:R3,meshnormal_frag:C3,meshphong_vert:w3,meshphong_frag:D3,meshphysical_vert:U3,meshphysical_frag:L3,meshtoon_vert:N3,meshtoon_frag:O3,points_vert:P3,points_frag:z3,shadow_vert:B3,shadow_frag:F3,sprite_vert:I3,sprite_frag:H3},Lt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Di={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Di.physical={uniforms:Nn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Mc={r:0,b:0,g:0},gs=new Ni,G3=new Je;function V3(o,e,i,s,l,u,d){const h=new Te(0);let m=u===!0?0:1,p,_,g=null,S=0,M=null;function T(D){let O=D.isScene===!0?D.background:null;return O&&O.isTexture&&(O=(D.backgroundBlurriness>0?i:e).get(O)),O}function C(D){let O=!1;const H=T(D);H===null?v(h,m):H&&H.isColor&&(v(H,1),O=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?s.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(D,O){const H=T(O);H&&(H.isCubeTexture||H.mapping===Oc)?(_===void 0&&(_=new da(new Go(1,1,1),new ha({name:"BackgroundCubeMaterial",uniforms:Er(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(L,B,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),gs.copy(O.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(G3.makeRotationFromEuler(gs)),_.material.toneMapped=Le.getTransfer(H.colorSpace)!==Ve,(g!==H||S!==H.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,g=H,S=H.version,M=o.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new da(new Pc(2,2),new ha({name:"BackgroundMaterial",uniforms:Er(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Le.getTransfer(H.colorSpace)!==Ve,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||S!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,g=H,S=H.version,M=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,O){D.getRGB(Mc,t_(o)),s.buffers.color.setClear(Mc.r,Mc.g,Mc.b,O,d)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,O=1){h.set(D),m=O,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(h,m)},render:C,addToRenderList:y,dispose:U}}function k3(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,d=!1;function h(R,V,Q,lt,mt){let rt=!1;const z=g(lt,Q,V);u!==z&&(u=z,p(u.object)),rt=M(R,lt,Q,mt),rt&&T(R,lt,Q,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(rt||d)&&(d=!1,O(R,V,Q,lt),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function g(R,V,Q){const lt=Q.wireframe===!0;let mt=s[R.id];mt===void 0&&(mt={},s[R.id]=mt);let rt=mt[V.id];rt===void 0&&(rt={},mt[V.id]=rt);let z=rt[lt];return z===void 0&&(z=S(m()),rt[lt]=z),z}function S(R){const V=[],Q=[],lt=[];for(let mt=0;mt<i;mt++)V[mt]=0,Q[mt]=0,lt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:lt,object:R,attributes:{},index:null}}function M(R,V,Q,lt){const mt=u.attributes,rt=V.attributes;let z=0;const Z=Q.getAttributes();for(const j in Z)if(Z[j].location>=0){const pt=mt[j];let P=rt[j];if(P===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(P=R.instanceColor)),pt===void 0||pt.attribute!==P||P&&pt.data!==P.data)return!0;z++}return u.attributesNum!==z||u.index!==lt}function T(R,V,Q,lt){const mt={},rt=V.attributes;let z=0;const Z=Q.getAttributes();for(const j in Z)if(Z[j].location>=0){let pt=rt[j];pt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(pt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(pt=R.instanceColor));const P={};P.attribute=pt,pt&&pt.data&&(P.data=pt.data),mt[j]=P,z++}u.attributes=mt,u.attributesNum=z,u.index=lt}function C(){const R=u.newAttributes;for(let V=0,Q=R.length;V<Q;V++)R[V]=0}function y(R){v(R,0)}function v(R,V){const Q=u.newAttributes,lt=u.enabledAttributes,mt=u.attributeDivisors;Q[R]=1,lt[R]===0&&(o.enableVertexAttribArray(R),lt[R]=1),mt[R]!==V&&(o.vertexAttribDivisor(R,V),mt[R]=V)}function U(){const R=u.newAttributes,V=u.enabledAttributes;for(let Q=0,lt=V.length;Q<lt;Q++)V[Q]!==R[Q]&&(o.disableVertexAttribArray(Q),V[Q]=0)}function D(R,V,Q,lt,mt,rt,z){z===!0?o.vertexAttribIPointer(R,V,Q,mt,rt):o.vertexAttribPointer(R,V,Q,lt,mt,rt)}function O(R,V,Q,lt){C();const mt=lt.attributes,rt=Q.getAttributes(),z=V.defaultAttributeValues;for(const Z in rt){const j=rt[Z];if(j.location>=0){let dt=mt[Z];if(dt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor)),dt!==void 0){const pt=dt.normalized,P=dt.itemSize,st=e.get(dt);if(st===void 0)continue;const yt=st.buffer,Et=st.type,Pt=st.bytesPerElement,it=Et===o.INT||Et===o.UNSIGNED_INT||dt.gpuType===Th;if(dt.isInterleavedBufferAttribute){const ut=dt.data,Ct=ut.stride,Ht=dt.offset;if(ut.isInstancedInterleavedBuffer){for(let Xt=0;Xt<j.locationSize;Xt++)v(j.location+Xt,ut.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Xt=0;Xt<j.locationSize;Xt++)y(j.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Xt=0;Xt<j.locationSize;Xt++)D(j.location+Xt,P/j.locationSize,Et,pt,Ct*Pt,(Ht+P/j.locationSize*Xt)*Pt,it)}else{if(dt.isInstancedBufferAttribute){for(let ut=0;ut<j.locationSize;ut++)v(j.location+ut,dt.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ut=0;ut<j.locationSize;ut++)y(j.location+ut);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ut=0;ut<j.locationSize;ut++)D(j.location+ut,P/j.locationSize,Et,pt,P*Pt,P/j.locationSize*ut*Pt,it)}}else if(z!==void 0){const pt=z[Z];if(pt!==void 0)switch(pt.length){case 2:o.vertexAttrib2fv(j.location,pt);break;case 3:o.vertexAttrib3fv(j.location,pt);break;case 4:o.vertexAttrib4fv(j.location,pt);break;default:o.vertexAttrib1fv(j.location,pt)}}}}U()}function H(){q();for(const R in s){const V=s[R];for(const Q in V){const lt=V[Q];for(const mt in lt)_(lt[mt].object),delete lt[mt];delete V[Q]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const Q in V){const lt=V[Q];for(const mt in lt)_(lt[mt].object),delete lt[mt];delete V[Q]}delete s[R.id]}function B(R){for(const V in s){const Q=s[V];if(Q[R.id]===void 0)continue;const lt=Q[R.id];for(const mt in lt)_(lt[mt].object),delete lt[mt];delete Q[R.id]}}function q(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:y,disableUnusedAttributes:U}}function X3(o,e,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function d(p,_,g){g!==0&&(o.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function h(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=_[T];i.update(M,s,1)}function m(p,_,g,S){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)d(p[T],_[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,g);let T=0;for(let C=0;C<g;C++)T+=_[C]*S[C];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function W3(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==bi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const q=B===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Li&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ca&&!q)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(re("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,L=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:O,vertexTextures:H,maxSamples:L}}function q3(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new vs,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||s!==0||l;return l=S,s=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,M){const T=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,v=o.get(g);if(!l||T===null||T.length===0||u&&!y)u?_(null):p();else{const U=u?0:s,D=U*4;let O=v.clippingState||null;m.value=O,O=_(T,S,D,M);for(let H=0;H!==D;++H)O[H]=i[H];v.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,S,M,T){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=m.value,T!==!0||y===null){const v=M+C*4,U=S.matrixWorldInverse;h.getNormalMatrix(U),(y===null||y.length<v)&&(y=new Float32Array(v));for(let D=0,O=M;D!==C;++D,O+=4)d.copy(g[D]).applyMatrix4(U,h),d.normal.toArray(y,O),y[O+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function Y3(o){let e=new WeakMap;function i(d,h){return h===Gd?d.mapping=yr:h===Vd&&(d.mapping=Mr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Gd||h===Vd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Vy(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const qa=4,fg=[.125,.215,.35,.446,.526,.582],ys=20,j3=256,Do=new nM,dg=new Te;let Ad=null,Rd=0,Cd=0,wd=!1;const Z3=new K;class hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=Z3}=u;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Rd,Cd),this._renderer.xr.enabled=wd,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===yr||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Tr,format:bi,colorSpace:br,depthBuffer:!1},l=pg(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pg(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=K3(u)),this._blurMaterial=J3(u,e,i),this._ggxMaterial=Q3(u,e,i)}return l}_compileMaterial(e){const i=new da(new Xn,e);this._renderer.compile(i,Do)}_sceneToCubeUV(e,i,s,l,u){const m=new ni(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(dg),g.toneMapping=Ya,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new da(new Go,new Qg({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,v=!0):(y.color.copy(dg),v=!0);for(let D=0;D<6;D++){const O=D%3;O===0?(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[D],u.y,u.z)):O===1?(m.up.set(0,0,p[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[D],u.z)):(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[D]));const H=this._cubeSize;gr(l,O*H,D>2?H:0,H,H),g.setRenderTarget(l),v&&g.render(C,m),g.render(e,m)}g.toneMapping=M,g.autoClear=S,e.background=U}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===yr||e.mapping===Mr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;gr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Do)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=.05+p*.95,M=g*S,{_lodMax:T}=this,C=this._sizeLods[s],y=3*C*(s>T-qa?s-T+qa:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,gr(u,y,v,3*C,2*C),l.setRenderTarget(u),l.render(h,Do),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-s,gr(e,y,v,3*C,2*C),l.setRenderTarget(e),l.render(h,Do)}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*ys-1),C=u/T,y=isFinite(u)?1+Math.floor(_*C):ys;y>ys&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ys}`);const v=[];let U=0;for(let B=0;B<ys;++B){const q=B/C,w=Math.exp(-q*q/2);v.push(w),B===0?U+=w:B<y&&(U+=2*w)}for(let B=0;B<v.length;B++)v[B]=v[B]/U;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:D}=this;S.dTheta.value=T,S.mipInt.value=D-s;const O=this._sizeLods[l],H=3*O*(l>D-qa?l-D+qa:0),L=4*(this._cubeSize-O);gr(i,H,L,3*O,2*O),m.setRenderTarget(i),m.render(g,Do)}}function K3(o){const e=[],i=[],s=[];let l=o;const u=o-qa+1+fg.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-qa?m=fg[d-o+qa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,T=6,C=3,y=2,v=1,U=new Float32Array(C*T*M),D=new Float32Array(y*T*M),O=new Float32Array(v*T*M);for(let L=0;L<M;L++){const B=L%3*2/3-1,q=L>2?0:-1,w=[B,q,0,B+2/3,q,0,B+2/3,q+1,0,B,q,0,B+2/3,q+1,0,B,q+1,0];U.set(w,C*T*L),D.set(S,y*T*L);const R=[L,L,L,L,L,L];O.set(R,v*T*L)}const H=new Xn;H.setAttribute("position",new Ei(U,C)),H.setAttribute("uv",new Ei(D,y)),H.setAttribute("faceIndex",new Ei(O,v)),s.push(new da(H,null)),l>qa&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function pg(o,e,i){const s=new Es(o,e,i);return s.texture.mapping=Oc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function Q3(o,e,i){return new ha({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function J3(o,e,i){const s=new Float32Array(ys),l=new K(0,1,0);return new ha({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:zc(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function mg(){return new ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function xg(){return new ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function zc(){return`

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
	`}function $3(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Gd||m===Vd,_=m===yr||m===Mr;if(p||_){let g=e.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new hg(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new hg(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function t1(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&zo("WebGLRenderer: "+s+" extension not supported."),l}}}function e1(o,e,i,s){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,T=g.attributes.position;let C=0;if(M!==null){const U=M.array;C=M.version;for(let D=0,O=U.length;D<O;D+=3){const H=U[D+0],L=U[D+1],B=U[D+2];S.push(H,L,L,B,B,H)}}else if(T!==void 0){const U=T.array;C=T.version;for(let D=0,O=U.length/3-1;D<O;D+=3){const H=D+0,L=D+1,B=D+2;S.push(H,L,L,B,B,H)}}else return;const y=new(Yg(S)?$g:Jg)(S,1);y.version=C;const v=u.get(g);v&&e.remove(v),u.set(g,y)}function _(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function n1(o,e,i){let s;function l(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*d),i.update(M,s,1)}function p(S,M,T){T!==0&&(o.drawElementsInstanced(s,M,u,S*d,T),i.update(M,s,T))}function _(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,T);let y=0;for(let v=0;v<T;v++)y+=M[v];i.update(y,s,1)}function g(S,M,T,C){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/d,M[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,C,0,T);let v=0;for(let U=0;U<T;U++)v+=M[U]*C[U];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function i1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:sn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function a1(o,e,i){const s=new WeakMap,l=new ke;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let S=s.get(h);if(S===void 0||S.count!==g){let R=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let O=0;T===!0&&(O=1),C===!0&&(O=2),y===!0&&(O=3);let H=h.attributes.position.count*O,L=1;H>e.maxTextureSize&&(L=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const B=new Float32Array(H*L*4*g),q=new jg(B,H,L,g);q.type=ca,q.needsUpdate=!0;const w=O*4;for(let V=0;V<g;V++){const Q=v[V],lt=U[V],mt=D[V],rt=H*L*4*V;for(let z=0;z<Q.count;z++){const Z=z*w;T===!0&&(l.fromBufferAttribute(Q,z),B[rt+Z+0]=l.x,B[rt+Z+1]=l.y,B[rt+Z+2]=l.z,B[rt+Z+3]=0),C===!0&&(l.fromBufferAttribute(lt,z),B[rt+Z+4]=l.x,B[rt+Z+5]=l.y,B[rt+Z+6]=l.z,B[rt+Z+7]=0),y===!0&&(l.fromBufferAttribute(mt,z),B[rt+Z+8]=l.x,B[rt+Z+9]=l.y,B[rt+Z+10]=l.z,B[rt+Z+11]=mt.itemSize===4?l.w:1)}}S={count:g,texture:q,size:new Se(H,L)},s.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const C=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function s1(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const l_=new On,gg=new a_(1,1),c_=new jg,u_=new Ty,f_=new n_,_g=[],vg=[],Sg=new Float32Array(16),yg=new Float32Array(9),Mg=new Float32Array(4);function Rr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=_g[l];if(u===void 0&&(u=new Float32Array(l),_g[l]=u),e!==0){s.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function xn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Bc(o,e){let i=vg[e];i===void 0&&(i=new Int32Array(e),vg[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function r1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function o1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),xn(i,e)}}function l1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),xn(i,e)}}function c1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),xn(i,e)}}function u1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,s))return;Mg.set(s),o.uniformMatrix2fv(this.addr,!1,Mg),xn(i,s)}}function f1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,s))return;yg.set(s),o.uniformMatrix3fv(this.addr,!1,yg),xn(i,s)}}function d1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,s))return;Sg.set(s),o.uniformMatrix4fv(this.addr,!1,Sg),xn(i,s)}}function h1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function p1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),xn(i,e)}}function m1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),xn(i,e)}}function x1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),xn(i,e)}}function g1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function _1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),xn(i,e)}}function v1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),xn(i,e)}}function S1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),xn(i,e)}}function y1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(gg.compareFunction=qg,u=gg):u=l_,i.setTexture2D(e||u,l)}function M1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||u_,l)}function b1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||f_,l)}function E1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||c_,l)}function T1(o){switch(o){case 5126:return r1;case 35664:return o1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return f1;case 35676:return d1;case 5124:case 35670:return h1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return x1;case 5125:return g1;case 36294:return _1;case 36295:return v1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return E1}}function A1(o,e){o.uniform1fv(this.addr,e)}function R1(o,e){const i=Rr(e,this.size,2);o.uniform2fv(this.addr,i)}function C1(o,e){const i=Rr(e,this.size,3);o.uniform3fv(this.addr,i)}function w1(o,e){const i=Rr(e,this.size,4);o.uniform4fv(this.addr,i)}function D1(o,e){const i=Rr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function U1(o,e){const i=Rr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function L1(o,e){const i=Rr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function N1(o,e){o.uniform1iv(this.addr,e)}function O1(o,e){o.uniform2iv(this.addr,e)}function P1(o,e){o.uniform3iv(this.addr,e)}function z1(o,e){o.uniform4iv(this.addr,e)}function B1(o,e){o.uniform1uiv(this.addr,e)}function F1(o,e){o.uniform2uiv(this.addr,e)}function I1(o,e){o.uniform3uiv(this.addr,e)}function H1(o,e){o.uniform4uiv(this.addr,e)}function G1(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||l_,u[d])}function V1(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||u_,u[d])}function k1(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||f_,u[d])}function X1(o,e,i){const s=this.cache,l=e.length,u=Bc(i,l);mn(s,u)||(o.uniform1iv(this.addr,u),xn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||c_,u[d])}function W1(o){switch(o){case 5126:return A1;case 35664:return R1;case 35665:return C1;case 35666:return w1;case 35674:return D1;case 35675:return U1;case 35676:return L1;case 5124:case 35670:return N1;case 35667:case 35671:return O1;case 35668:case 35672:return P1;case 35669:case 35673:return z1;case 5125:return B1;case 36294:return F1;case 36295:return I1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return X1}}class q1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=T1(i.type)}}class Y1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=W1(i.type)}}class j1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function bg(o,e){o.seq.push(e),o.map[e.id]=e}function Z1(o,e,i){const s=o.name,l=s.length;for(Dd.lastIndex=0;;){const u=Dd.exec(s),d=Dd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){bg(i,p===void 0?new q1(h,o,e):new Y1(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new j1(h),bg(i,g)),i=g}}}class Cc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);Z1(u,d,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Eg(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const K1=37297;let Q1=0;function J1(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Tg=new fe;function $1(o){Le._getMatrix(Tg,Le.workingColorSpace,o);const e=`mat3( ${Tg.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case wc:return[e,"LinearTransferOETF"];case Ve:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Ag(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+J1(o.getShaderSource(e),h)}else return u}function tE(o,e){const i=$1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function eE(o,e){let i;switch(e){case $S:i="Linear";break;case ty:i="Reinhard";break;case ey:i="Cineon";break;case ny:i="ACESFilmic";break;case ay:i="AgX";break;case sy:i="Neutral";break;case iy:i="Custom";break;default:re("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new K;function nE(){Le.getLuminanceCoefficients(bc);const o=bc.x.toFixed(4),e=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function aE(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function sE(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Uo(o){return o!==""}function Rg(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(o){return o.replace(rE,lE)}const oE=new Map;function lE(o,e){let i=pe[e];if(i===void 0){const s=oE.get(e);if(s!==void 0)i=pe[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Mh(i)}const cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wg(o){return o.replace(cE,uE)}function uE(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Dg(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function fE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Pg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===LS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(e="SHADOWMAP_TYPE_VSM"),e}function dE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case yr:case Mr:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hE(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Mr&&(e="ENVMAP_MODE_REFRACTION"),e}function pE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case zg:e="ENVMAP_BLENDING_MULTIPLY";break;case QS:e="ENVMAP_BLENDING_MIX";break;case JS:e="ENVMAP_BLENDING_ADD";break}return e}function mE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function xE(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=fE(i),p=dE(i),_=hE(i),g=pE(i),S=mE(i),M=iE(i),T=aE(u),C=l.createProgram();let y,v,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Uo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Uo).join(`
`),v.length>0&&(v+=`
`)):(y=[Dg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),v=[Dg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?pe.tonemapping_pars_fragment:"",i.toneMapping!==Ya?eE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,tE("linearToOutputTexel",i.outputColorSpace),nE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),d=Mh(d),d=Rg(d,i),d=Cg(d,i),h=Mh(h),h=Rg(h,i),h=Cg(h,i),d=wg(d),h=wg(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===Ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=U+y+d,O=U+v+h,H=Eg(l,l.VERTEX_SHADER,D),L=Eg(l,l.FRAGMENT_SHADER,O);l.attachShader(C,H),l.attachShader(C,L),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(V){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",lt=l.getShaderInfoLog(H)||"",mt=l.getShaderInfoLog(L)||"",rt=Q.trim(),z=lt.trim(),Z=mt.trim();let j=!0,dt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,H,L);else{const pt=Ag(l,H,"vertex"),P=Ag(l,L,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+rt+`
`+pt+`
`+P)}else rt!==""?re("WebGLProgram: Program Info Log:",rt):(z===""||Z==="")&&(dt=!1);dt&&(V.diagnostics={runnable:j,programLog:rt,vertexShader:{log:z,prefix:y},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(H),l.deleteShader(L),q=new Cc(l,C),w=sE(l,C)}let q;this.getUniforms=function(){return q===void 0&&B(this),q};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,K1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Q1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=L,this}let gE=0;class _E{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new vE(e),i.set(e,s)),s}}class vE{constructor(e){this.id=gE++,this.code=e,this.usedTimes=0}}function SE(o,e,i,s,l,u,d){const h=new Zg,m=new _E,p=new Set,_=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,R,V,Q,lt){const mt=Q.fog,rt=lt.geometry,z=w.isMeshStandardMaterial?Q.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),j=Z&&Z.mapping===Oc?Z.image.height:null,dt=T[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&re("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const pt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,P=pt!==void 0?pt.length:0;let st=0;rt.morphAttributes.position!==void 0&&(st=1),rt.morphAttributes.normal!==void 0&&(st=2),rt.morphAttributes.color!==void 0&&(st=3);let yt,Et,Pt,it;if(dt){const Ce=Di[dt];yt=Ce.vertexShader,Et=Ce.fragmentShader}else yt=w.vertexShader,Et=w.fragmentShader,m.update(w),Pt=m.getVertexShaderID(w),it=m.getFragmentShaderID(w);const ut=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Ht=lt.isInstancedMesh===!0,Xt=lt.isBatchedMesh===!0,le=!!w.map,en=!!w.matcap,de=!!Z,Re=!!w.aoMap,I=!!w.lightMap,he=!!w.bumpMap,me=!!w.normalMap,Pe=!!w.displacementMap,Gt=!!w.emissiveMap,Xe=!!w.metalnessMap,jt=!!w.roughnessMap,ae=w.anisotropy>0,N=w.clearcoat>0,b=w.dispersion>0,$=w.iridescence>0,xt=w.sheen>0,vt=w.transmission>0,ct=ae&&!!w.anisotropyMap,qt=N&&!!w.clearcoatMap,Ut=N&&!!w.clearcoatNormalMap,Qt=N&&!!w.clearcoatRoughnessMap,Wt=$&&!!w.iridescenceMap,St=$&&!!w.iridescenceThicknessMap,bt=xt&&!!w.sheenColorMap,Yt=xt&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Ot=!!w.specularColorMap,ne=!!w.specularIntensityMap,G=vt&&!!w.transmissionMap,wt=vt&&!!w.thicknessMap,At=!!w.gradientMap,Rt=!!w.alphaMap,Mt=w.alphaTest>0,_t=!!w.alphaHash,Bt=!!w.extensions;let ie=Ya;w.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Fe={shaderID:dt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Et,defines:w.defines,customVertexShaderID:Pt,customFragmentShaderID:it,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Xt,batchingColor:Xt&&lt._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&lt.instanceColor!==null,instancingMorph:Ht&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:br,alphaToCoverage:!!w.alphaToCoverage,map:le,matcap:en,envMap:de,envMapMode:de&&Z.mapping,envMapCubeUVHeight:j,aoMap:Re,lightMap:I,bumpMap:he,normalMap:me,displacementMap:S&&Pe,emissiveMap:Gt,normalMapObjectSpace:me&&w.normalMapType===cy,normalMapTangentSpace:me&&w.normalMapType===Wg,metalnessMap:Xe,roughnessMap:jt,anisotropy:ae,anisotropyMap:ct,clearcoat:N,clearcoatMap:qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Qt,dispersion:b,iridescence:$,iridescenceMap:Wt,iridescenceThicknessMap:St,sheen:xt,sheenColorMap:bt,sheenRoughnessMap:Yt,specularMap:Vt,specularColorMap:Ot,specularIntensityMap:ne,transmission:vt,transmissionMap:G,thicknessMap:wt,gradientMap:At,opaque:w.transparent===!1&&w.blending===_r&&w.alphaToCoverage===!1,alphaMap:Rt,alphaTest:Mt,alphaHash:_t,combine:w.combine,mapUv:le&&C(w.map.channel),aoMapUv:Re&&C(w.aoMap.channel),lightMapUv:I&&C(w.lightMap.channel),bumpMapUv:he&&C(w.bumpMap.channel),normalMapUv:me&&C(w.normalMap.channel),displacementMapUv:Pe&&C(w.displacementMap.channel),emissiveMapUv:Gt&&C(w.emissiveMap.channel),metalnessMapUv:Xe&&C(w.metalnessMap.channel),roughnessMapUv:jt&&C(w.roughnessMap.channel),anisotropyMapUv:ct&&C(w.anisotropyMap.channel),clearcoatMapUv:qt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&C(w.sheenRoughnessMap.channel),specularMapUv:Vt&&C(w.specularMap.channel),specularColorMapUv:Ot&&C(w.specularColorMap.channel),specularIntensityMapUv:ne&&C(w.specularIntensityMap.channel),transmissionMapUv:G&&C(w.transmissionMap.channel),thicknessMapUv:wt&&C(w.thicknessMap.channel),alphaMapUv:Rt&&C(w.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(me||ae),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!rt.attributes.uv&&(le||Rt),fog:!!mt,useFog:w.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ct,skinning:lt.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:st,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:le&&w.map.isVideoTexture===!0&&Le.getTransfer(w.map.colorSpace)===Ve,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Le.getTransfer(w.emissiveMap.colorSpace)===Ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===oa,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function v(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(U(R,w),D(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function U(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function D(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function O(w){const R=T[w.type];let V;if(R){const Q=Di[R];V=Fy.clone(Q.uniforms)}else V=w.uniforms;return V}function H(w,R){let V;for(let Q=0,lt=_.length;Q<lt;Q++){const mt=_[Q];if(mt.cacheKey===R){V=mt,++V.usedTimes;break}}return V===void 0&&(V=new xE(o,R,w,u),_.push(V)),V}function L(w){if(--w.usedTimes===0){const R=_.indexOf(w);_[R]=_[_.length-1],_.pop(),w.destroy()}}function B(w){m.remove(w)}function q(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:O,acquireProgram:H,releaseProgram:L,releaseShaderCache:B,programs:_,dispose:q}}function yE(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function ME(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ug(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Lg(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(g,S,M,T,C,y){let v=o[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:M,groupOrder:T,renderOrder:g.renderOrder,z:C,group:y},o[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=M,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=C,v.group=y),e++,v}function h(g,S,M,T,C,y){const v=d(g,S,M,T,C,y);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,S,M,T,C,y){const v=d(g,S,M,T,C,y);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||ME),s.length>1&&s.sort(S||Ug),l.length>1&&l.sort(S||Ug)}function _(){for(let g=e,S=o.length;g<S;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function bE(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new Lg,o.set(s,[d])):l>=u.length?(d=new Lg,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function EE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new Te};break;case"SpotLight":i={position:new K,direction:new K,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function TE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let AE=0;function RE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function CE(o){const e=new EE,i=TE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,u=new Je,d=new Je;function h(p){let _=0,g=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,T=0,C=0,y=0,v=0,U=0,D=0,O=0,H=0,L=0,B=0;p.sort(RE);for(let w=0,R=p.length;w<R;w++){const V=p[w],Q=V.color,lt=V.intensity,mt=V.distance,rt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=Q.r*lt,g+=Q.g*lt,S+=Q.b*lt;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],lt);B++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,j=i.get(V);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,s.directionalShadow[M]=j,s.directionalShadowMap[M]=rt,s.directionalShadowMatrix[M]=V.shadow.matrix,U++}s.directional[M]=z,M++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(Q).multiplyScalar(lt),z.distance=mt,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[C]=z;const Z=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,Z.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[C]=Z.matrix,V.castShadow){const j=i.get(V);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,s.spotShadow[C]=j,s.spotShadowMap[C]=rt,O++}C++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(Q).multiplyScalar(lt),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=z,y++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const Z=V.shadow,j=i.get(V);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,s.pointShadow[T]=j,s.pointShadowMap[T]=rt,s.pointShadowMatrix[T]=V.shadow.matrix,D++}s.point[T]=z,T++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(lt),z.groundColor.copy(V.groundColor).multiplyScalar(lt),s.hemi[v]=z,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=S;const q=s.hash;(q.directionalLength!==M||q.pointLength!==T||q.spotLength!==C||q.rectAreaLength!==y||q.hemiLength!==v||q.numDirectionalShadows!==U||q.numPointShadows!==D||q.numSpotShadows!==O||q.numSpotMaps!==H||q.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=O+H-L,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=B,q.directionalLength=M,q.pointLength=T,q.spotLength=C,q.rectAreaLength=y,q.hemiLength=v,q.numDirectionalShadows=U,q.numPointShadows=D,q.numSpotShadows=O,q.numSpotMaps=H,q.numLightProbes=B,s.version=AE++)}function m(p,_){let g=0,S=0,M=0,T=0,C=0;const y=_.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const D=p[v];if(D.isDirectionalLight){const O=s.directional[g];O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),g++}else if(D.isSpotLight){const O=s.spot[M];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const O=s.rectArea[T];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(y),d.identity(),u.copy(D.matrixWorld),u.premultiply(y),d.extractRotation(u),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),T++}else if(D.isPointLight){const O=s.point[S];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(y),S++}else if(D.isHemisphereLight){const O=s.hemi[C];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:s}}function Ng(o){const e=new CE(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function d(_){s.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function wE(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new Ng(o),e.set(l,[h])):u>=d.length?(h=new Ng(o),d.push(h)):h=d[u],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const DE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UE=`uniform sampler2D shadow_pass;
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
}`;function LE(o,e,i){let s=new Ph;const l=new Se,u=new Se,d=new ke,h=new Jy({depthPacking:ly}),m=new $y,p={},_=i.maxTextureSize,g={[ja]:Vn,[Vn]:ja,[oa]:oa},S=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:DE,fragmentShader:UE}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new Xn;T.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new da(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pg;let v=this.type;this.render=function(L,B,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(ua),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const lt=v!==ra&&this.type===ra,mt=v===ra&&this.type!==ra;for(let rt=0,z=L.length;rt<z;rt++){const Z=L[rt],j=Z.shadow;if(j===void 0){re("WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const dt=j.getFrameExtents();if(l.multiply(dt),u.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/dt.x),l.x=u.x*dt.x,j.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/dt.y),l.y=u.y*dt.y,j.mapSize.y=u.y)),j.map===null||lt===!0||mt===!0){const P=this.type!==ra?{minFilter:ii,magFilter:ii}:{};j.map!==null&&j.map.dispose(),j.map=new Es(l.x,l.y,P),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const pt=j.getViewportCount();for(let P=0;P<pt;P++){const st=j.getViewport(P);d.set(u.x*st.x,u.y*st.y,u.x*st.z,u.y*st.w),Q.viewport(d),j.updateMatrices(Z,P),s=j.getFrustum(),O(B,q,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===ra&&U(j,q),j.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,V)};function U(L,B){const q=e.update(C);S.defines.VSM_SAMPLES!==L.blurSamples&&(S.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Es(l.x,l.y)),S.uniforms.shadow_pass.value=L.map.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(B,null,q,S,C,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(B,null,q,M,C,null)}function D(L,B,q,w){let R=null;const V=q.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)R=V;else if(R=q.isPointLight===!0?m:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Q=R.uuid,lt=B.uuid;let mt=p[Q];mt===void 0&&(mt={},p[Q]=mt);let rt=mt[lt];rt===void 0&&(rt=R.clone(),mt[lt]=rt,B.addEventListener("dispose",H)),R=rt}if(R.visible=B.visible,R.wireframe=B.wireframe,w===ra?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:g[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=o.properties.get(R);Q.light=q}return R}function O(L,B,q,w,R){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===ra)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld);const lt=e.update(L),mt=L.material;if(Array.isArray(mt)){const rt=lt.groups;for(let z=0,Z=rt.length;z<Z;z++){const j=rt[z],dt=mt[j.materialIndex];if(dt&&dt.visible){const pt=D(L,dt,w,R);L.onBeforeShadow(o,L,B,q,lt,pt,j),o.renderBufferDirect(q,null,lt,pt,L,j),L.onAfterShadow(o,L,B,q,lt,pt,j)}}}else if(mt.visible){const rt=D(L,mt,w,R);L.onBeforeShadow(o,L,B,q,lt,rt,null),o.renderBufferDirect(q,null,lt,rt,L,null),L.onAfterShadow(o,L,B,q,lt,rt,null)}}const Q=L.children;for(let lt=0,mt=Q.length;lt<mt;lt++)O(Q[lt],B,q,w,R)}function H(L){L.target.removeEventListener("dispose",H);for(const q in p){const w=p[q],R=L.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const NE={[Od]:Pd,[zd]:Id,[Bd]:Hd,[Sr]:Fd,[Pd]:Od,[Id]:zd,[Hd]:Bd,[Fd]:Sr};function OE(o,e){function i(){let G=!1;const wt=new ke;let At=null;const Rt=new ke(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!G&&(o.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){G=Mt},setClear:function(Mt,_t,Bt,ie,Fe){Fe===!0&&(Mt*=ie,_t*=ie,Bt*=ie),wt.set(Mt,_t,Bt,ie),Rt.equals(wt)===!1&&(o.clearColor(Mt,_t,Bt,ie),Rt.copy(wt))},reset:function(){G=!1,At=null,Rt.set(-1,0,0,0)}}}function s(){let G=!1,wt=!1,At=null,Rt=null,Mt=null;return{setReversed:function(_t){if(wt!==_t){const Bt=e.get("EXT_clip_control");_t?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),wt=_t;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return wt},setTest:function(_t){_t?ut(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(_t){At!==_t&&!G&&(o.depthMask(_t),At=_t)},setFunc:function(_t){if(wt&&(_t=NE[_t]),Rt!==_t){switch(_t){case Od:o.depthFunc(o.NEVER);break;case Pd:o.depthFunc(o.ALWAYS);break;case zd:o.depthFunc(o.LESS);break;case Sr:o.depthFunc(o.LEQUAL);break;case Bd:o.depthFunc(o.EQUAL);break;case Fd:o.depthFunc(o.GEQUAL);break;case Id:o.depthFunc(o.GREATER);break;case Hd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=_t}},setLocked:function(_t){G=_t},setClear:function(_t){Mt!==_t&&(wt&&(_t=1-_t),o.clearDepth(_t),Mt=_t)},reset:function(){G=!1,At=null,Rt=null,Mt=null,wt=!1}}}function l(){let G=!1,wt=null,At=null,Rt=null,Mt=null,_t=null,Bt=null,ie=null,Fe=null;return{setTest:function(Ce){G||(Ce?ut(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Ce){wt!==Ce&&!G&&(o.stencilMask(Ce),wt=Ce)},setFunc:function(Ce,Rn,Wn){(At!==Ce||Rt!==Rn||Mt!==Wn)&&(o.stencilFunc(Ce,Rn,Wn),At=Ce,Rt=Rn,Mt=Wn)},setOp:function(Ce,Rn,Wn){(_t!==Ce||Bt!==Rn||ie!==Wn)&&(o.stencilOp(Ce,Rn,Wn),_t=Ce,Bt=Rn,ie=Wn)},setLocked:function(Ce){G=Ce},setClear:function(Ce){Fe!==Ce&&(o.clearStencil(Ce),Fe=Ce)},reset:function(){G=!1,wt=null,At=null,Rt=null,Mt=null,_t=null,Bt=null,ie=null,Fe=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,M=[],T=null,C=!1,y=null,v=null,U=null,D=null,O=null,H=null,L=null,B=new Te(0,0,0),q=0,w=!1,R=null,V=null,Q=null,lt=null,mt=null;const rt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=Z>=2);let dt=null,pt={};const P=o.getParameter(o.SCISSOR_BOX),st=o.getParameter(o.VIEWPORT),yt=new ke().fromArray(P),Et=new ke().fromArray(st);function Pt(G,wt,At,Rt){const Mt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(G,_t),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<At;Bt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Rt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(wt+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return _t}const it={};it[o.TEXTURE_2D]=Pt(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ut(o.DEPTH_TEST),d.setFunc(Sr),he(!1),me(Cx),ut(o.CULL_FACE),Re(ua);function ut(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function Ct(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function Ht(G,wt){return g[G]!==wt?(o.bindFramebuffer(G,wt),g[G]=wt,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=wt),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function Xt(G,wt){let At=M,Rt=!1;if(G){At=S.get(wt),At===void 0&&(At=[],S.set(wt,At));const Mt=G.textures;if(At.length!==Mt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Bt=Mt.length;_t<Bt;_t++)At[_t]=o.COLOR_ATTACHMENT0+_t;At.length=Mt.length,Rt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Rt=!0);Rt&&o.drawBuffers(At)}function le(G){return T!==G?(o.useProgram(G),T=G,!0):!1}const en={[Ss]:o.FUNC_ADD,[OS]:o.FUNC_SUBTRACT,[PS]:o.FUNC_REVERSE_SUBTRACT};en[zS]=o.MIN,en[BS]=o.MAX;const de={[FS]:o.ZERO,[IS]:o.ONE,[HS]:o.SRC_COLOR,[Ld]:o.SRC_ALPHA,[qS]:o.SRC_ALPHA_SATURATE,[XS]:o.DST_COLOR,[VS]:o.DST_ALPHA,[GS]:o.ONE_MINUS_SRC_COLOR,[Nd]:o.ONE_MINUS_SRC_ALPHA,[WS]:o.ONE_MINUS_DST_COLOR,[kS]:o.ONE_MINUS_DST_ALPHA,[YS]:o.CONSTANT_COLOR,[jS]:o.ONE_MINUS_CONSTANT_COLOR,[ZS]:o.CONSTANT_ALPHA,[KS]:o.ONE_MINUS_CONSTANT_ALPHA};function Re(G,wt,At,Rt,Mt,_t,Bt,ie,Fe,Ce){if(G===ua){C===!0&&(Ct(o.BLEND),C=!1);return}if(C===!1&&(ut(o.BLEND),C=!0),G!==NS){if(G!==y||Ce!==w){if((v!==Ss||O!==Ss)&&(o.blendEquation(o.FUNC_ADD),v=Ss,O=Ss),Ce)switch(G){case _r:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wx:o.blendFunc(o.ONE,o.ONE);break;case Dx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ux:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:sn("WebGLState: Invalid blending: ",G);break}else switch(G){case _r:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Dx:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ux:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",G);break}U=null,D=null,H=null,L=null,B.set(0,0,0),q=0,y=G,w=Ce}return}Mt=Mt||wt,_t=_t||At,Bt=Bt||Rt,(wt!==v||Mt!==O)&&(o.blendEquationSeparate(en[wt],en[Mt]),v=wt,O=Mt),(At!==U||Rt!==D||_t!==H||Bt!==L)&&(o.blendFuncSeparate(de[At],de[Rt],de[_t],de[Bt]),U=At,D=Rt,H=_t,L=Bt),(ie.equals(B)===!1||Fe!==q)&&(o.blendColor(ie.r,ie.g,ie.b,Fe),B.copy(ie),q=Fe),y=G,w=!1}function I(G,wt){G.side===oa?Ct(o.CULL_FACE):ut(o.CULL_FACE);let At=G.side===Vn;wt&&(At=!At),he(At),G.blending===_r&&G.transparent===!1?Re(ua):Re(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const Rt=G.stencilWrite;h.setTest(Rt),Rt&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Gt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function he(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function me(G){G!==DS?(ut(o.CULL_FACE),G!==V&&(G===Cx?o.cullFace(o.BACK):G===US?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),V=G}function Pe(G){G!==Q&&(z&&o.lineWidth(G),Q=G)}function Gt(G,wt,At){G?(ut(o.POLYGON_OFFSET_FILL),(lt!==wt||mt!==At)&&(o.polygonOffset(wt,At),lt=wt,mt=At)):Ct(o.POLYGON_OFFSET_FILL)}function Xe(G){G?ut(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function jt(G){G===void 0&&(G=o.TEXTURE0+rt-1),dt!==G&&(o.activeTexture(G),dt=G)}function ae(G,wt,At){At===void 0&&(dt===null?At=o.TEXTURE0+rt-1:At=dt);let Rt=pt[At];Rt===void 0&&(Rt={type:void 0,texture:void 0},pt[At]=Rt),(Rt.type!==G||Rt.texture!==wt)&&(dt!==At&&(o.activeTexture(At),dt=At),o.bindTexture(G,wt||it[G]),Rt.type=G,Rt.texture=wt)}function N(){const G=pt[dt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function xt(){try{o.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function vt(){try{o.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ut(){try{o.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Qt(){try{o.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Wt(){try{o.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function St(){try{o.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function bt(G){yt.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),yt.copy(G))}function Yt(G){Et.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Et.copy(G))}function Vt(G,wt){let At=p.get(wt);At===void 0&&(At=new WeakMap,p.set(wt,At));let Rt=At.get(G);Rt===void 0&&(Rt=o.getUniformBlockIndex(wt,G.name),At.set(G,Rt))}function Ot(G,wt){const Rt=p.get(wt).get(G);m.get(wt)!==Rt&&(o.uniformBlockBinding(wt,Rt,G.__bindingPointIndex),m.set(wt,Rt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},dt=null,pt={},g={},S=new WeakMap,M=[],T=null,C=!1,y=null,v=null,U=null,D=null,O=null,H=null,L=null,B=new Te(0,0,0),q=0,w=!1,R=null,V=null,Q=null,lt=null,mt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ut,disable:Ct,bindFramebuffer:Ht,drawBuffers:Xt,useProgram:le,setBlending:Re,setMaterial:I,setFlipSided:he,setCullFace:me,setLineWidth:Pe,setPolygonOffset:Gt,setScissorTest:Xe,activeTexture:jt,bindTexture:ae,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:$,texImage2D:Wt,texImage3D:St,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:Ut,texStorage3D:Qt,texSubImage2D:xt,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:qt,scissor:bt,viewport:Yt,reset:ne}}function PE(o,e,i,s,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Se,_=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,b){return M?new OffscreenCanvas(N,b):Uc("canvas")}function C(N,b,$){let xt=1;const vt=ae(N);if((vt.width>$||vt.height>$)&&(xt=$/Math.max(vt.width,vt.height)),xt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ct=Math.floor(xt*vt.width),qt=Math.floor(xt*vt.height);g===void 0&&(g=T(ct,qt));const Ut=b?T(ct,qt):g;return Ut.width=ct,Ut.height=qt,Ut.getContext("2d").drawImage(N,0,0,ct,qt),re("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ct+"x"+qt+")."),Ut}else return"data"in N&&re("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){o.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(N,b,$,xt,vt=!1){if(N!==null){if(o[N]!==void 0)return o[N];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct=b;if(b===o.RED&&($===o.FLOAT&&(ct=o.R32F),$===o.HALF_FLOAT&&(ct=o.R16F),$===o.UNSIGNED_BYTE&&(ct=o.R8)),b===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ct=o.R8UI),$===o.UNSIGNED_SHORT&&(ct=o.R16UI),$===o.UNSIGNED_INT&&(ct=o.R32UI),$===o.BYTE&&(ct=o.R8I),$===o.SHORT&&(ct=o.R16I),$===o.INT&&(ct=o.R32I)),b===o.RG&&($===o.FLOAT&&(ct=o.RG32F),$===o.HALF_FLOAT&&(ct=o.RG16F),$===o.UNSIGNED_BYTE&&(ct=o.RG8)),b===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ct=o.RG8UI),$===o.UNSIGNED_SHORT&&(ct=o.RG16UI),$===o.UNSIGNED_INT&&(ct=o.RG32UI),$===o.BYTE&&(ct=o.RG8I),$===o.SHORT&&(ct=o.RG16I),$===o.INT&&(ct=o.RG32I)),b===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),$===o.UNSIGNED_INT&&(ct=o.RGB32UI),$===o.BYTE&&(ct=o.RGB8I),$===o.SHORT&&(ct=o.RGB16I),$===o.INT&&(ct=o.RGB32I)),b===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),$===o.UNSIGNED_INT&&(ct=o.RGBA32UI),$===o.BYTE&&(ct=o.RGBA8I),$===o.SHORT&&(ct=o.RGBA16I),$===o.INT&&(ct=o.RGBA32I)),b===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),b===o.RGBA){const qt=vt?wc:Le.getTransfer(xt);$===o.FLOAT&&(ct=o.RGBA32F),$===o.HALF_FLOAT&&(ct=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ct=qt===Ve?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function O(N,b){let $;return N?b===null||b===bs||b===No?$=o.DEPTH24_STENCIL8:b===ca?$=o.DEPTH32F_STENCIL8:b===Lo&&($=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bs||b===No?$=o.DEPTH_COMPONENT24:b===ca?$=o.DEPTH_COMPONENT32F:b===Lo&&($=o.DEPTH_COMPONENT16),$}function H(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==ii&&N.minFilter!==pi?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function L(N){const b=N.target;b.removeEventListener("dispose",L),q(b),b.isVideoTexture&&_.delete(b)}function B(N){const b=N.target;b.removeEventListener("dispose",B),R(b)}function q(N){const b=s.get(N);if(b.__webglInit===void 0)return;const $=N.source,xt=S.get($);if(xt){const vt=xt[b.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&w(N),Object.keys(xt).length===0&&S.delete($)}s.remove(N)}function w(N){const b=s.get(N);o.deleteTexture(b.__webglTexture);const $=N.source,xt=S.get($);delete xt[b.__cacheKey],d.memory.textures--}function R(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(b.__webglFramebuffer[xt]))for(let vt=0;vt<b.__webglFramebuffer[xt].length;vt++)o.deleteFramebuffer(b.__webglFramebuffer[xt][vt]);else o.deleteFramebuffer(b.__webglFramebuffer[xt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[xt])}else{if(Array.isArray(b.__webglFramebuffer))for(let xt=0;xt<b.__webglFramebuffer.length;xt++)o.deleteFramebuffer(b.__webglFramebuffer[xt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let xt=0;xt<b.__webglColorRenderbuffer.length;xt++)b.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[xt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=N.textures;for(let xt=0,vt=$.length;xt<vt;xt++){const ct=s.get($[xt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),d.memory.textures--),s.remove($[xt])}s.remove(N)}let V=0;function Q(){V=0}function lt(){const N=V;return N>=l.maxTextures&&re("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function mt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function rt(N,b){const $=s.get(N);if(N.isVideoTexture&&Xe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const xt=N.image;if(xt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{it($,N,b);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+b)}function z(N,b){const $=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){it($,N,b);return}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+b)}function Z(N,b){const $=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){it($,N,b);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+b)}function j(N,b){const $=s.get(N);if(N.version>0&&$.__version!==N.version){ut($,N,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+b)}const dt={[kd]:o.REPEAT,[la]:o.CLAMP_TO_EDGE,[Xd]:o.MIRRORED_REPEAT},pt={[ii]:o.NEAREST,[ry]:o.NEAREST_MIPMAP_NEAREST,[$l]:o.NEAREST_MIPMAP_LINEAR,[pi]:o.LINEAR,[Jf]:o.LINEAR_MIPMAP_NEAREST,[Ms]:o.LINEAR_MIPMAP_LINEAR},P={[uy]:o.NEVER,[xy]:o.ALWAYS,[fy]:o.LESS,[qg]:o.LEQUAL,[dy]:o.EQUAL,[my]:o.GEQUAL,[hy]:o.GREATER,[py]:o.NOTEQUAL};function st(N,b){if(b.type===ca&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===pi||b.magFilter===Jf||b.magFilter===$l||b.magFilter===Ms||b.minFilter===pi||b.minFilter===Jf||b.minFilter===$l||b.minFilter===Ms)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,dt[b.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,dt[b.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,dt[b.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,pt[b.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,pt[b.minFilter]),b.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,P[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ii||b.minFilter!==$l&&b.minFilter!==Ms||b.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function yt(N,b){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",L));const xt=b.source;let vt=S.get(xt);vt===void 0&&(vt={},S.set(xt,vt));const ct=mt(b);if(ct!==N.__cacheKey){vt[ct]===void 0&&(vt[ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,$=!0),vt[ct].usedTimes++;const qt=vt[N.__cacheKey];qt!==void 0&&(vt[N.__cacheKey].usedTimes--,qt.usedTimes===0&&w(b)),N.__cacheKey=ct,N.__webglTexture=vt[ct].texture}return $}function Et(N,b,$){return Math.floor(Math.floor(N/$)/b)}function Pt(N,b,$,xt){const ct=N.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,$,xt,b.data);else{ct.sort((St,bt)=>St.start-bt.start);let qt=0;for(let St=1;St<ct.length;St++){const bt=ct[qt],Yt=ct[St],Vt=bt.start+bt.count,Ot=Et(Yt.start,b.width,4),ne=Et(bt.start,b.width,4);Yt.start<=Vt+1&&Ot===ne&&Et(Yt.start+Yt.count-1,b.width,4)===Ot?bt.count=Math.max(bt.count,Yt.start+Yt.count-bt.start):(++qt,ct[qt]=Yt)}ct.length=qt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Wt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let St=0,bt=ct.length;St<bt;St++){const Yt=ct[St],Vt=Math.floor(Yt.start/4),Ot=Math.ceil(Yt.count/4),ne=Vt%b.width,G=Math.floor(Vt/b.width),wt=Ot,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,ne,G,wt,At,$,xt,b.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Wt)}}function it(N,b,$){let xt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(xt=o.TEXTURE_3D);const vt=yt(N,b),ct=b.source;i.bindTexture(xt,N.__webglTexture,o.TEXTURE0+$);const qt=s.get(ct);if(ct.version!==qt.__version||vt===!0){i.activeTexture(o.TEXTURE0+$);const Ut=Le.getPrimaries(Le.workingColorSpace),Qt=b.colorSpace===Wa?null:Le.getPrimaries(b.colorSpace),Wt=b.colorSpace===Wa||Ut===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let St=C(b.image,!1,l.maxTextureSize);St=jt(b,St);const bt=u.convert(b.format,b.colorSpace),Yt=u.convert(b.type);let Vt=D(b.internalFormat,bt,Yt,b.colorSpace,b.isVideoTexture);st(xt,b);let Ot;const ne=b.mipmaps,G=b.isVideoTexture!==!0,wt=qt.__version===void 0||vt===!0,At=ct.dataReady,Rt=H(b,St);if(b.isDepthTexture)Vt=O(b.format===Po,b.type),wt&&(G?i.texStorage2D(o.TEXTURE_2D,1,Vt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,Vt,St.width,St.height,0,bt,Yt,null));else if(b.isDataTexture)if(ne.length>0){G&&wt&&i.texStorage2D(o.TEXTURE_2D,Rt,Vt,ne[0].width,ne[0].height);for(let Mt=0,_t=ne.length;Mt<_t;Mt++)Ot=ne[Mt],G?At&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,bt,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Vt,Ot.width,Ot.height,0,bt,Yt,Ot.data);b.generateMipmaps=!1}else G?(wt&&i.texStorage2D(o.TEXTURE_2D,Rt,Vt,St.width,St.height),At&&Pt(b,St,bt,Yt)):i.texImage2D(o.TEXTURE_2D,0,Vt,St.width,St.height,0,bt,Yt,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Vt,ne[0].width,ne[0].height,St.depth);for(let Mt=0,_t=ne.length;Mt<_t;Mt++)if(Ot=ne[Mt],b.format!==bi)if(bt!==null)if(G){if(At)if(b.layerUpdates.size>0){const Bt=ug(Ot.width,Ot.height,b.format,b.type);for(const ie of b.layerUpdates){const Fe=Ot.data.subarray(ie*Bt/Ot.data.BYTES_PER_ELEMENT,(ie+1)*Bt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ie,Ot.width,Ot.height,1,bt,Fe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,St.depth,bt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Vt,Ot.width,Ot.height,St.depth,0,Ot.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ot.width,Ot.height,St.depth,bt,Yt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Vt,Ot.width,Ot.height,St.depth,0,bt,Yt,Ot.data)}else{G&&wt&&i.texStorage2D(o.TEXTURE_2D,Rt,Vt,ne[0].width,ne[0].height);for(let Mt=0,_t=ne.length;Mt<_t;Mt++)Ot=ne[Mt],b.format!==bi?bt!==null?G?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,bt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Vt,Ot.width,Ot.height,0,Ot.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?At&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ot.width,Ot.height,bt,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,Mt,Vt,Ot.width,Ot.height,0,bt,Yt,Ot.data)}else if(b.isDataArrayTexture)if(G){if(wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Vt,St.width,St.height,St.depth),At)if(b.layerUpdates.size>0){const Mt=ug(St.width,St.height,b.format,b.type);for(const _t of b.layerUpdates){const Bt=St.data.subarray(_t*Mt/St.data.BYTES_PER_ELEMENT,(_t+1)*Mt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,bt,Yt,Bt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,bt,Yt,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,St.width,St.height,St.depth,0,bt,Yt,St.data);else if(b.isData3DTexture)G?(wt&&i.texStorage3D(o.TEXTURE_3D,Rt,Vt,St.width,St.height,St.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,bt,Yt,St.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,St.width,St.height,St.depth,0,bt,Yt,St.data);else if(b.isFramebufferTexture){if(wt)if(G)i.texStorage2D(o.TEXTURE_2D,Rt,Vt,St.width,St.height);else{let Mt=St.width,_t=St.height;for(let Bt=0;Bt<Rt;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,Vt,Mt,_t,0,bt,Yt,null),Mt>>=1,_t>>=1}}else if(ne.length>0){if(G&&wt){const Mt=ae(ne[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Vt,Mt.width,Mt.height)}for(let Mt=0,_t=ne.length;Mt<_t;Mt++)Ot=ne[Mt],G?At&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,bt,Yt,Ot):i.texImage2D(o.TEXTURE_2D,Mt,Vt,bt,Yt,Ot);b.generateMipmaps=!1}else if(G){if(wt){const Mt=ae(St);i.texStorage2D(o.TEXTURE_2D,Rt,Vt,Mt.width,Mt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Yt,St)}else i.texImage2D(o.TEXTURE_2D,0,Vt,bt,Yt,St);y(b)&&v(xt),qt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ut(N,b,$){if(b.image.length!==6)return;const xt=yt(N,b),vt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+$);const ct=s.get(vt);if(vt.version!==ct.__version||xt===!0){i.activeTexture(o.TEXTURE0+$);const qt=Le.getPrimaries(Le.workingColorSpace),Ut=b.colorSpace===Wa?null:Le.getPrimaries(b.colorSpace),Qt=b.colorSpace===Wa||qt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Wt=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let _t=0;_t<6;_t++)!Wt&&!St?bt[_t]=C(b.image[_t],!0,l.maxCubemapSize):bt[_t]=St?b.image[_t].image:b.image[_t],bt[_t]=jt(b,bt[_t]);const Yt=bt[0],Vt=u.convert(b.format,b.colorSpace),Ot=u.convert(b.type),ne=D(b.internalFormat,Vt,Ot,b.colorSpace),G=b.isVideoTexture!==!0,wt=ct.__version===void 0||xt===!0,At=vt.dataReady;let Rt=H(b,Yt);st(o.TEXTURE_CUBE_MAP,b);let Mt;if(Wt){G&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ne,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){Mt=bt[_t].mipmaps;for(let Bt=0;Bt<Mt.length;Bt++){const ie=Mt[Bt];b.format!==bi?Vt!==null?G?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,ie.width,ie.height,Vt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,ne,ie.width,ie.height,0,ie.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,ie.width,ie.height,Vt,Ot,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,ne,ie.width,ie.height,0,Vt,Ot,ie.data)}}}else{if(Mt=b.mipmaps,G&&wt){Mt.length>0&&Rt++;const _t=ae(bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ne,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,bt[_t].width,bt[_t].height,Vt,Ot,bt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ne,bt[_t].width,bt[_t].height,0,Vt,Ot,bt[_t].data);for(let Bt=0;Bt<Mt.length;Bt++){const Fe=Mt[Bt].image[_t].image;G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,Fe.width,Fe.height,Vt,Ot,Fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,ne,Fe.width,Fe.height,0,Vt,Ot,Fe.data)}}else{G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,Ot,bt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ne,Vt,Ot,bt[_t]);for(let Bt=0;Bt<Mt.length;Bt++){const ie=Mt[Bt];G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,Vt,Ot,ie.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,ne,Vt,Ot,ie.image[_t])}}}y(b)&&v(o.TEXTURE_CUBE_MAP),ct.__version=vt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Ct(N,b,$,xt,vt,ct){const qt=u.convert($.format,$.colorSpace),Ut=u.convert($.type),Qt=D($.internalFormat,qt,Ut,$.colorSpace),Wt=s.get(b),St=s.get($);if(St.__renderTarget=b,!Wt.__hasExternalTextures){const bt=Math.max(1,b.width>>ct),Yt=Math.max(1,b.height>>ct);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ct,Qt,bt,Yt,b.depth,0,qt,Ut,null):i.texImage2D(vt,ct,Qt,bt,Yt,0,qt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Gt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,vt,St.__webglTexture,0,Pe(b)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,vt,St.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(N,b,$){if(o.bindRenderbuffer(o.RENDERBUFFER,N),b.depthBuffer){const xt=b.depthTexture,vt=xt&&xt.isDepthTexture?xt.type:null,ct=O(b.stencilBuffer,vt),qt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Pe(b);Gt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ct,b.width,b.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ct,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ct,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,N)}else{const xt=b.textures;for(let vt=0;vt<xt.length;vt++){const ct=xt[vt],qt=u.convert(ct.format,ct.colorSpace),Ut=u.convert(ct.type),Qt=D(ct.internalFormat,qt,Ut,ct.colorSpace),Wt=Pe(b);$&&Gt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Qt,b.width,b.height):Gt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,Qt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(b.depthTexture);xt.__renderTarget=b,(!xt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),rt(b.depthTexture,0);const vt=xt.__webglTexture,ct=Pe(b);if(b.depthTexture.format===Oo)Gt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(b.depthTexture.format===Po)Gt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function le(N){const b=s.get(N),$=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const xt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),xt){const vt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,xt.removeEventListener("dispose",vt)};xt.addEventListener("dispose",vt),b.__depthDisposeCallback=vt}b.__boundDepthTexture=xt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const xt=N.texture.mipmaps;xt&&xt.length>0?Xt(b.__webglFramebuffer[0],N):Xt(b.__webglFramebuffer,N)}else if($){b.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[xt]),b.__webglDepthbuffer[xt]===void 0)b.__webglDepthbuffer[xt]=o.createRenderbuffer(),Ht(b.__webglDepthbuffer[xt],N,!1);else{const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}else{const xt=N.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ht(b.__webglDepthbuffer,N,!1);else{const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function en(N,b,$){const xt=s.get(N);b!==void 0&&Ct(xt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&le(N)}function de(N){const b=N.texture,$=s.get(N),xt=s.get(b);N.addEventListener("dispose",B);const vt=N.textures,ct=N.isWebGLCubeRenderTarget===!0,qt=vt.length>1;if(qt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=b.version,d.memory.textures++),ct){$.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[Ut]=[];for(let Qt=0;Qt<b.mipmaps.length;Qt++)$.__webglFramebuffer[Ut][Qt]=o.createFramebuffer()}else $.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)$.__webglFramebuffer[Ut]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ut=0,Qt=vt.length;Ut<Qt;Ut++){const Wt=s.get(vt[Ut]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&Gt(N)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Qt=vt[Ut];$.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut]);const Wt=u.convert(Qt.format,Qt.colorSpace),St=u.convert(Qt.type),bt=D(Qt.internalFormat,Wt,St,Qt.colorSpace,N.isXRRenderTarget===!0),Yt=Pe(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,bt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Ht($.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),st(o.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)Ct($.__webglFramebuffer[Ut][Qt],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt);else Ct($.__webglFramebuffer[Ut],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(b)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Ut=0,Qt=vt.length;Ut<Qt;Ut++){const Wt=vt[Ut],St=s.get(Wt);let bt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(bt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,St.__webglTexture),st(bt,Wt),Ct($.__webglFramebuffer,N,Wt,o.COLOR_ATTACHMENT0+Ut,bt,0),y(Wt)&&v(bt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,xt.__webglTexture),st(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)Ct($.__webglFramebuffer[Qt],N,b,o.COLOR_ATTACHMENT0,Ut,Qt);else Ct($.__webglFramebuffer,N,b,o.COLOR_ATTACHMENT0,Ut,0);y(b)&&v(Ut),i.unbindTexture()}N.depthBuffer&&le(N)}function Re(N){const b=N.textures;for(let $=0,xt=b.length;$<xt;$++){const vt=b[$];if(y(vt)){const ct=U(N),qt=s.get(vt).__webglTexture;i.bindTexture(ct,qt),v(ct),i.unbindTexture()}}}const I=[],he=[];function me(N){if(N.samples>0){if(Gt(N)===!1){const b=N.textures,$=N.width,xt=N.height;let vt=o.COLOR_BUFFER_BIT;const ct=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=s.get(N),Ut=b.length>1;if(Ut)for(let Wt=0;Wt<b.length;Wt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Qt=N.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Wt=0;Wt<b.length;Wt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const St=s.get(b[Wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,$,xt,0,0,$,xt,vt,o.NEAREST),m===!0&&(I.length=0,he.length=0,I.push(o.COLOR_ATTACHMENT0+Wt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(I.push(ct),he.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,he)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Wt=0;Wt<b.length;Wt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const St=s.get(b[Wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Pe(N){return Math.min(l.maxSamples,N.samples)}function Gt(N){const b=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xe(N){const b=d.render.frame;_.get(N)!==b&&(_.set(N,b),N.update())}function jt(N,b){const $=N.colorSpace,xt=N.format,vt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==br&&$!==Wa&&(Le.getTransfer($)===Ve?(xt!==bi||vt!==Li)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",$)),b}function ae(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=Q,this.setTexture2D=rt,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=en,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Gt}function zE(o,e){function i(s,l=Wa){let u;const d=Le.getTransfer(l);if(s===Li)return o.UNSIGNED_BYTE;if(s===Ah)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Rh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Hg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Gg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fg)return o.BYTE;if(s===Ig)return o.SHORT;if(s===Lo)return o.UNSIGNED_SHORT;if(s===Th)return o.INT;if(s===bs)return o.UNSIGNED_INT;if(s===ca)return o.FLOAT;if(s===Tr)return o.HALF_FLOAT;if(s===Vg)return o.ALPHA;if(s===kg)return o.RGB;if(s===bi)return o.RGBA;if(s===Oo)return o.DEPTH_COMPONENT;if(s===Po)return o.DEPTH_STENCIL;if(s===Xg)return o.RED;if(s===Ch)return o.RED_INTEGER;if(s===wh)return o.RG;if(s===Dh)return o.RG_INTEGER;if(s===Uh)return o.RGBA_INTEGER;if(s===Ec||s===Tc||s===Ac||s===Rc)if(d===Ve)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Ec)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Ec)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wd||s===qd||s===Yd||s===jd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Wd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zd||s===Kd||s===Qd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Zd||s===Kd)return d===Ve?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Qd)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jd||s===$d||s===th||s===eh||s===nh||s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch||s===uh||s===fh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Jd)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$d)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===th)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===eh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===nh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ih)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ah)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===oh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===lh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ch)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===uh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fh)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dh||s===hh||s===ph)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===dh)return d===Ve?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ph)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mh||s===xh||s===gh||s===_h)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===mh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===xh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_h)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===No?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const BE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FE=`
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

}`;class IE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new s_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ha({vertexShader:BE,fragmentShader:FE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new da(new Pc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HE extends Ar{constructor(e,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,g=null,S=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",y=new IE,v={},U=i.getContextAttributes();let D=null,O=null;const H=[],L=[],B=new Se;let q=null;const w=new ni;w.viewport=new ke;const R=new ni;R.viewport=new ke;const V=[w,R],Q=new aM;let lt=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=H[it];return ut===void 0&&(ut=new yd,H[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=H[it];return ut===void 0&&(ut=new yd,H[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=H[it];return ut===void 0&&(ut=new yd,H[it]=ut),ut.getHandSpace()};function rt(it){const ut=L.indexOf(it.inputSource);if(ut===-1)return;const Ct=H[ut];Ct!==void 0&&(Ct.update(it.inputSource,it.frame,p||d),Ct.dispatchEvent({type:it.type,data:it.inputSource}))}function z(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",Z);for(let it=0;it<H.length;it++){const ut=L[it];ut!==null&&(L[it]=null,H[it].disconnect(ut))}lt=null,mt=null,y.reset();for(const it in v)delete v[it];e.setRenderTarget(D),M=null,S=null,g=null,l=null,O=null,Pt.stop(),s.isPresenting=!1,e.setPixelRatio(q),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){u=it,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",z),l.addEventListener("inputsourceschange",Z),U.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Ht=null,Xt=null;U.depth&&(Xt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=U.stencil?Po:Oo,Ht=U.stencil?No:bs);const le={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(le),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),O=new Es(S.textureWidth,S.textureHeight,{format:bi,type:Li,depthTexture:new a_(S.textureWidth,S.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ct={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Es(M.framebufferWidth,M.framebufferHeight,{format:bi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Pt.setContext(l),Pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(it){for(let ut=0;ut<it.removed.length;ut++){const Ct=it.removed[ut],Ht=L.indexOf(Ct);Ht>=0&&(L[Ht]=null,H[Ht].disconnect(Ct))}for(let ut=0;ut<it.added.length;ut++){const Ct=it.added[ut];let Ht=L.indexOf(Ct);if(Ht===-1){for(let le=0;le<H.length;le++)if(le>=L.length){L.push(Ct),Ht=le;break}else if(L[le]===null){L[le]=Ct,Ht=le;break}if(Ht===-1)break}const Xt=H[Ht];Xt&&Xt.connect(Ct)}}const j=new K,dt=new K;function pt(it,ut,Ct){j.setFromMatrixPosition(ut.matrixWorld),dt.setFromMatrixPosition(Ct.matrixWorld);const Ht=j.distanceTo(dt),Xt=ut.projectionMatrix.elements,le=Ct.projectionMatrix.elements,en=Xt[14]/(Xt[10]-1),de=Xt[14]/(Xt[10]+1),Re=(Xt[9]+1)/Xt[5],I=(Xt[9]-1)/Xt[5],he=(Xt[8]-1)/Xt[0],me=(le[8]+1)/le[0],Pe=en*he,Gt=en*me,Xe=Ht/(-he+me),jt=Xe*-he;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(jt),it.translateZ(Xe),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Xt[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const ae=en+Xe,N=de+Xe,b=Pe-jt,$=Gt+(Ht-jt),xt=Re*de/N*ae,vt=I*de/N*ae;it.projectionMatrix.makePerspective(b,$,xt,vt,ae,N),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function P(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ut=it.near,Ct=it.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(Ct=y.depthFar)),Q.near=R.near=w.near=ut,Q.far=R.far=w.far=Ct,(lt!==Q.near||mt!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),lt=Q.near,mt=Q.far),Q.layers.mask=it.layers.mask|6,w.layers.mask=Q.layers.mask&3,R.layers.mask=Q.layers.mask&5;const Ht=it.parent,Xt=Q.cameras;P(Q,Ht);for(let le=0;le<Xt.length;le++)P(Xt[le],Ht);Xt.length===2?pt(Q,w,R):Q.projectionMatrix.copy(w.projectionMatrix),st(it,Q,Ht)};function st(it,ut,Ct){Ct===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(Ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=vh*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(it){m=it,S!==null&&(S.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(it){return v[it]};let yt=null;function Et(it,ut){if(_=ut.getViewerPose(p||d),T=ut,_!==null){const Ct=_.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Ht=!1;Ct.length!==Q.cameras.length&&(Q.cameras.length=0,Ht=!0);for(let de=0;de<Ct.length;de++){const Re=Ct[de];let I=null;if(M!==null)I=M.getViewport(Re);else{const me=g.getViewSubImage(S,Re);I=me.viewport,de===0&&(e.setRenderTargetTextures(O,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(O))}let he=V[de];he===void 0&&(he=new ni,he.layers.enable(de),he.viewport=new ke,V[de]=he),he.matrix.fromArray(Re.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Re.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(I.x,I.y,I.width,I.height),de===0&&(Q.matrix.copy(he.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ht===!0&&Q.cameras.push(he)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const de=g.getDepthInformation(Ct[0]);de&&de.isValid&&de.texture&&y.init(de,l.renderState)}if(Xt&&Xt.includes("camera-access")&&C){e.state.unbindTexture(),g=s.getBinding();for(let de=0;de<Ct.length;de++){const Re=Ct[de].camera;if(Re){let I=v[Re];I||(I=new s_,v[Re]=I);const he=g.getCameraImage(Re);I.sourceTexture=he}}}}for(let Ct=0;Ct<H.length;Ct++){const Ht=L[Ct],Xt=H[Ct];Ht!==null&&Xt!==void 0&&Xt.update(Ht,ut,p||d)}yt&&yt(it,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),T=null}const Pt=new o_;Pt.setAnimationLoop(Et),this.setAnimationLoop=function(it){yt=it},this.dispose=function(){}}}const _s=new Ni,GE=new Je;function VE(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,t_(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,U,D,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,O)):v.isMeshMatcapMaterial?(u(y,v),T(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),C(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,U,D):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Vn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Vn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const U=e.get(v),D=U.envMap,O=U.envMapRotation;D&&(y.envMap.value=D,_s.copy(O),_s.x*=-1,_s.y*=-1,_s.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),y.envMapRotation.value.setFromMatrix4(GE.makeRotationFromEuler(_s)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,U,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*U,y.scale.value=D*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,U){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const U=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function kE(o,e,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,D){const O=D.program;s.uniformBlockBinding(U,O)}function p(U,D){let O=l[U.id];O===void 0&&(T(U),O=_(U),l[U.id]=O,U.addEventListener("dispose",y));const H=D.program;s.updateUBOMapping(U,H);const L=e.render.frame;u[U.id]!==L&&(S(U),u[U.id]=L)}function _(U){const D=g();U.__bindingPointIndex=D;const O=o.createBuffer(),H=U.__size,L=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,H,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,O),O}function g(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const D=l[U.id],O=U.uniforms,H=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let L=0,B=O.length;L<B;L++){const q=Array.isArray(O[L])?O[L]:[O[L]];for(let w=0,R=q.length;w<R;w++){const V=q[w];if(M(V,L,w,H)===!0){const Q=V.__offset,lt=Array.isArray(V.value)?V.value:[V.value];let mt=0;for(let rt=0;rt<lt.length;rt++){const z=lt[rt],Z=C(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,Q+mt,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,mt),mt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(U,D,O,H){const L=U.value,B=D+"_"+O;if(H[B]===void 0)return typeof L=="number"||typeof L=="boolean"?H[B]=L:H[B]=L.clone(),!0;{const q=H[B];if(typeof L=="number"||typeof L=="boolean"){if(q!==L)return H[B]=L,!0}else if(q.equals(L)===!1)return q.copy(L),!0}return!1}function T(U){const D=U.uniforms;let O=0;const H=16;for(let B=0,q=D.length;B<q;B++){const w=Array.isArray(D[B])?D[B]:[D[B]];for(let R=0,V=w.length;R<V;R++){const Q=w[R],lt=Array.isArray(Q.value)?Q.value:[Q.value];for(let mt=0,rt=lt.length;mt<rt;mt++){const z=lt[mt],Z=C(z),j=O%H,dt=j%Z.boundary,pt=j+dt;O+=dt,pt!==0&&H-pt<Z.storage&&(O+=H-pt),Q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=O,O+=Z.storage}}}const L=O%H;return L>0&&(O+=H-L),U.__size=O,U.__cache={},this}function C(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",U),D}function y(U){const D=U.target;D.removeEventListener("dispose",y);const O=d.indexOf(D.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function v(){for(const U in l)o.deleteBuffer(l[U]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}const XE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let sa=null;function WE(){return sa===null&&(sa=new Wy(XE,32,32,wh,Tr),sa.minFilter=pi,sa.magFilter=pi,sa.wrapS=la,sa.wrapT=la,sa.generateMipmaps=!1,sa.needsUpdate=!0),sa}class qE{constructor(e={}){const{canvas:i=gy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const T=new Set([Uh,Dh,Ch]),C=new Set([Li,bs,Lo,No,Ah,Rh]),y=new Uint32Array(4),v=new Int32Array(4);let U=null,D=null;const O=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let B=!1;this._outputColorSpace=hi;let q=0,w=0,R=null,V=-1,Q=null;const lt=new ke,mt=new ke;let rt=null;const z=new Te(0);let Z=0,j=i.width,dt=i.height,pt=1,P=null,st=null;const yt=new ke(0,0,j,dt),Et=new ke(0,0,j,dt);let Pt=!1;const it=new Ph;let ut=!1,Ct=!1;const Ht=new Je,Xt=new K,le=new ke,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Re(){return R===null?pt:1}let I=s;function he(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Eh}`),i.addEventListener("webglcontextlost",Mt,!1),i.addEventListener("webglcontextrestored",_t,!1),i.addEventListener("webglcontextcreationerror",Bt,!1),I===null){const X="webgl2";if(I=he(X,A),I===null)throw he(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let me,Pe,Gt,Xe,jt,ae,N,b,$,xt,vt,ct,qt,Ut,Qt,Wt,St,bt,Yt,Vt,Ot,ne,G,wt;function At(){me=new t1(I),me.init(),ne=new zE(I,me),Pe=new W3(I,me,e,ne),Gt=new OE(I,me),Pe.reversedDepthBuffer&&S&&Gt.buffers.depth.setReversed(!0),Xe=new i1(I),jt=new yE,ae=new PE(I,me,Gt,jt,Pe,ne,Xe),N=new Y3(L),b=new $3(L),$=new oM(I),G=new k3(I,$),xt=new e1(I,$,Xe,G),vt=new s1(I,xt,$,Xe),Yt=new a1(I,Pe,ae),Wt=new q3(jt),ct=new SE(L,N,b,me,Pe,G,Wt),qt=new VE(L,jt),Ut=new bE,Qt=new wE(me),bt=new V3(L,N,b,Gt,vt,M,m),St=new LE(L,vt,Pe),wt=new kE(I,Xe,Pe,Gt),Vt=new X3(I,me,Xe),Ot=new n1(I,me,Xe),Xe.programs=ct.programs,L.capabilities=Pe,L.extensions=me,L.properties=jt,L.renderLists=Ut,L.shadowMap=St,L.state=Gt,L.info=Xe}At();const Rt=new HE(L,I);this.xr=Rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(A){A!==void 0&&(pt=A,this.setSize(j,dt,!1))},this.getSize=function(A){return A.set(j,dt)},this.setSize=function(A,X,at=!0){if(Rt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,dt=X,i.width=Math.floor(A*pt),i.height=Math.floor(X*pt),at===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(j*pt,dt*pt).floor()},this.setDrawingBufferSize=function(A,X,at){j=A,dt=X,pt=at,i.width=Math.floor(A*at),i.height=Math.floor(X*at),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(lt)},this.getViewport=function(A){return A.copy(yt)},this.setViewport=function(A,X,at,et){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,X,at,et),Gt.viewport(lt.copy(yt).multiplyScalar(pt).round())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,X,at,et){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,X,at,et),Gt.scissor(mt.copy(Et).multiplyScalar(pt).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(A){Gt.setScissorTest(Pt=A)},this.setOpaqueSort=function(A){P=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,at=!0){let et=0;if(A){let Y=!1;if(R!==null){const Tt=R.texture.format;Y=T.has(Tt)}if(Y){const Tt=R.texture.type,Dt=C.has(Tt),zt=bt.getClearColor(),Ft=bt.getClearAlpha(),$t=zt.r,ee=zt.g,Zt=zt.b;Dt?(y[0]=$t,y[1]=ee,y[2]=Zt,y[3]=Ft,I.clearBufferuiv(I.COLOR,0,y)):(v[0]=$t,v[1]=ee,v[2]=Zt,v[3]=Ft,I.clearBufferiv(I.COLOR,0,v))}else et|=I.COLOR_BUFFER_BIT}X&&(et|=I.DEPTH_BUFFER_BIT),at&&(et|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Mt,!1),i.removeEventListener("webglcontextrestored",_t,!1),i.removeEventListener("webglcontextcreationerror",Bt,!1),bt.dispose(),Ut.dispose(),Qt.dispose(),jt.dispose(),N.dispose(),b.dispose(),vt.dispose(),G.dispose(),wt.dispose(),ct.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Cr),Rt.removeEventListener("sessionend",wr),mi.stop()};function Mt(A){A.preventDefault(),zx("WebGLRenderer: Context Lost."),B=!0}function _t(){zx("WebGLRenderer: Context Restored."),B=!1;const A=Xe.autoReset,X=St.enabled,at=St.autoUpdate,et=St.needsUpdate,Y=St.type;At(),Xe.autoReset=A,St.enabled=X,St.autoUpdate=at,St.needsUpdate=et,St.type=Y}function Bt(A){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const X=A.target;X.removeEventListener("dispose",ie),Fe(X)}function Fe(A){Ce(A),jt.remove(A)}function Ce(A){const X=jt.get(A).programs;X!==void 0&&(X.forEach(function(at){ct.releaseProgram(at)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,at,et,Y,Tt){X===null&&(X=en);const Dt=Y.isMesh&&Y.matrixWorld.determinant()<0,zt=Fc(A,X,at,et,Y);Gt.setMaterial(et,Dt);let Ft=at.index,$t=1;if(et.wireframe===!0){if(Ft=xt.getWireframeAttribute(at),Ft===void 0)return;$t=2}const ee=at.drawRange,Zt=at.attributes.position;let ce=ee.start*$t,Ae=(ee.start+ee.count)*$t;Tt!==null&&(ce=Math.max(ce,Tt.start*$t),Ae=Math.min(Ae,(Tt.start+Tt.count)*$t)),Ft!==null?(ce=Math.max(ce,0),Ae=Math.min(Ae,Ft.count)):Zt!=null&&(ce=Math.max(ce,0),Ae=Math.min(Ae,Zt.count));const we=Ae-ce;if(we<0||we===1/0)return;G.setup(Y,et,zt,at,Ft);let ye,Oe=Vt;if(Ft!==null&&(ye=$.get(Ft),Oe=Ot,Oe.setIndex(ye)),Y.isMesh)et.wireframe===!0?(Gt.setLineWidth(et.wireframeLinewidth*Re()),Oe.setMode(I.LINES)):Oe.setMode(I.TRIANGLES);else if(Y.isLine){let Jt=et.linewidth;Jt===void 0&&(Jt=1),Gt.setLineWidth(Jt*Re()),Y.isLineSegments?Oe.setMode(I.LINES):Y.isLineLoop?Oe.setMode(I.LINE_LOOP):Oe.setMode(I.LINE_STRIP)}else Y.isPoints?Oe.setMode(I.POINTS):Y.isSprite&&Oe.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Jt=Y._multiDrawStarts,We=Y._multiDrawCounts,Me=Y._multiDrawCount,gn=Ft?$.get(Ft).bytesPerElement:1,ma=jt.get(et).currentProgram.getUniforms();for(let Ye=0;Ye<Me;Ye++)ma.setValue(I,"_gl_DrawID",Ye),Oe.render(Jt[Ye]/gn,We[Ye])}else if(Y.isInstancedMesh)Oe.renderInstances(ce,we,Y.count);else if(at.isInstancedBufferGeometry){const Jt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,We=Math.min(at.instanceCount,Jt);Oe.renderInstances(ce,we,We)}else Oe.render(ce,we)};function Rn(A,X,at){A.transparent===!0&&A.side===oa&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,dn(A,X,at),A.side=ja,A.needsUpdate=!0,dn(A,X,at),A.side=oa):dn(A,X,at)}this.compile=function(A,X,at=null){at===null&&(at=A),D=Qt.get(at),D.init(X),H.push(D),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(D.pushLight(Y),Y.castShadow&&D.pushShadow(Y))}),A!==at&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(D.pushLight(Y),Y.castShadow&&D.pushShadow(Y))}),D.setupLights();const et=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const zt=Tt[Dt];Rn(zt,at,Y),et.add(zt)}else Rn(Tt,at,Y),et.add(Tt)}),D=H.pop(),et},this.compileAsync=function(A,X,at=null){const et=this.compile(A,X,at);return new Promise(Y=>{function Tt(){if(et.forEach(function(Dt){jt.get(Dt).currentProgram.isReady()&&et.delete(Dt)}),et.size===0){Y(A);return}setTimeout(Tt,10)}me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Wn=null;function Vo(A){Wn&&Wn(A)}function Cr(){mi.stop()}function wr(){mi.start()}const mi=new o_;mi.setAnimationLoop(Vo),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(A){Wn=A,Rt.setAnimationLoop(A),A===null?mi.stop():mi.start()},Rt.addEventListener("sessionstart",Cr),Rt.addEventListener("sessionend",wr),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(X),X=Rt.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,X,R),D=Qt.get(A,H.length),D.init(X),H.push(D),Ht.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),it.setFromProjectionMatrix(Ht,Ui,X.reversedDepth),Ct=this.localClippingEnabled,ut=Wt.init(this.clippingPlanes,Ct),U=Ut.get(A,O.length),U.init(),O.push(U),Rt.enabled===!0&&Rt.isPresenting===!0){const Tt=L.xr.getDepthSensingMesh();Tt!==null&&Za(Tt,X,-1/0,L.sortObjects)}Za(A,X,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(P,st),de=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,de&&bt.addToRenderList(U,A),this.info.render.frame++,ut===!0&&Wt.beginShadows();const at=D.state.shadowsArray;St.render(at,A,X),ut===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=U.opaque,Y=U.transmissive;if(D.setupLights(),X.isArrayCamera){const Tt=X.cameras;if(Y.length>0)for(let Dt=0,zt=Tt.length;Dt<zt;Dt++){const Ft=Tt[Dt];Ur(et,Y,A,Ft)}de&&bt.render(A);for(let Dt=0,zt=Tt.length;Dt<zt;Dt++){const Ft=Tt[Dt];Dr(U,A,Ft,Ft.viewport)}}else Y.length>0&&Ur(et,Y,A,X),de&&bt.render(A),Dr(U,A,X);R!==null&&w===0&&(ae.updateMultisampleRenderTarget(R),ae.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(L,A,X),G.resetDefaultState(),V=-1,Q=null,H.pop(),H.length>0?(D=H[H.length-1],ut===!0&&Wt.setGlobalState(L.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?U=O[O.length-1]:U=null};function Za(A,X,at,et){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||it.intersectsSprite(A)){et&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ht);const Dt=vt.update(A),zt=A.material;zt.visible&&U.push(A,Dt,zt,at,le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||it.intersectsObject(A))){const Dt=vt.update(A),zt=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),le.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),le.copy(Dt.boundingSphere.center)),le.applyMatrix4(A.matrixWorld).applyMatrix4(Ht)),Array.isArray(zt)){const Ft=Dt.groups;for(let $t=0,ee=Ft.length;$t<ee;$t++){const Zt=Ft[$t],ce=zt[Zt.materialIndex];ce&&ce.visible&&U.push(A,Dt,ce,at,le.z,Zt)}}else zt.visible&&U.push(A,Dt,zt,at,le.z,null)}}const Tt=A.children;for(let Dt=0,zt=Tt.length;Dt<zt;Dt++)Za(Tt[Dt],X,at,et)}function Dr(A,X,at,et){const{opaque:Y,transmissive:Tt,transparent:Dt}=A;D.setupLightsView(at),ut===!0&&Wt.setGlobalState(L.clippingPlanes,at),et&&Gt.viewport(lt.copy(et)),Y.length>0&&qn(Y,X,at),Tt.length>0&&qn(Tt,X,at),Dt.length>0&&qn(Dt,X,at),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Ur(A,X,at,et){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[et.id]===void 0&&(D.state.transmissionRenderTarget[et.id]=new Es(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Tr:Li,minFilter:Ms,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Tt=D.state.transmissionRenderTarget[et.id],Dt=et.viewport||lt;Tt.setSize(Dt.z*L.transmissionResolutionScale,Dt.w*L.transmissionResolutionScale);const zt=L.getRenderTarget(),Ft=L.getActiveCubeFace(),$t=L.getActiveMipmapLevel();L.setRenderTarget(Tt),L.getClearColor(z),Z=L.getClearAlpha(),Z<1&&L.setClearColor(16777215,.5),L.clear(),de&&bt.render(at);const ee=L.toneMapping;L.toneMapping=Ya;const Zt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),D.setupLightsView(et),ut===!0&&Wt.setGlobalState(L.clippingPlanes,et),qn(A,at,et),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),me.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ae=0,we=X.length;Ae<we;Ae++){const ye=X[Ae],{object:Oe,geometry:Jt,material:We,group:Me}=ye;if(We.side===oa&&Oe.layers.test(et.layers)){const gn=We.side;We.side=Vn,We.needsUpdate=!0,rn(Oe,at,et,Jt,We,Me),We.side=gn,We.needsUpdate=!0,ce=!0}}ce===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}L.setRenderTarget(zt,Ft,$t),L.setClearColor(z,Z),Zt!==void 0&&(et.viewport=Zt),L.toneMapping=ee}function qn(A,X,at){const et=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Tt=A.length;Y<Tt;Y++){const Dt=A[Y],{object:zt,geometry:Ft,group:$t}=Dt;let ee=Dt.material;ee.allowOverride===!0&&et!==null&&(ee=et),zt.layers.test(at.layers)&&rn(zt,X,at,Ft,ee,$t)}}function rn(A,X,at,et,Y,Tt){A.onBeforeRender(L,X,at,et,Y,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(L,X,at,et,A,Tt),Y.transparent===!0&&Y.side===oa&&Y.forceSinglePass===!1?(Y.side=Vn,Y.needsUpdate=!0,L.renderBufferDirect(at,X,et,Y,A,Tt),Y.side=ja,Y.needsUpdate=!0,L.renderBufferDirect(at,X,et,Y,A,Tt),Y.side=oa):L.renderBufferDirect(at,X,et,Y,A,Tt),A.onAfterRender(L,X,at,et,Y,Tt)}function dn(A,X,at){X.isScene!==!0&&(X=en);const et=jt.get(A),Y=D.state.lights,Tt=D.state.shadowsArray,Dt=Y.state.version,zt=ct.getParameters(A,Y.state,Tt,X,at),Ft=ct.getProgramCacheKey(zt);let $t=et.programs;et.environment=A.isMeshStandardMaterial?X.environment:null,et.fog=X.fog,et.envMap=(A.isMeshStandardMaterial?b:N).get(A.envMap||et.environment),et.envMapRotation=et.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",ie),$t=new Map,et.programs=$t);let ee=$t.get(Ft);if(ee!==void 0){if(et.currentProgram===ee&&et.lightsStateVersion===Dt)return As(A,zt),ee}else zt.uniforms=ct.getUniforms(A),A.onBeforeCompile(zt,L),ee=ct.acquireProgram(zt,Ft),$t.set(Ft,ee),et.uniforms=zt.uniforms;const Zt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=Wt.uniform),As(A,zt),et.needsLights=ko(A),et.lightsStateVersion=Dt,et.needsLights&&(Zt.ambientLightColor.value=Y.state.ambient,Zt.lightProbe.value=Y.state.probe,Zt.directionalLights.value=Y.state.directional,Zt.directionalLightShadows.value=Y.state.directionalShadow,Zt.spotLights.value=Y.state.spot,Zt.spotLightShadows.value=Y.state.spotShadow,Zt.rectAreaLights.value=Y.state.rectArea,Zt.ltc_1.value=Y.state.rectAreaLTC1,Zt.ltc_2.value=Y.state.rectAreaLTC2,Zt.pointLights.value=Y.state.point,Zt.pointLightShadows.value=Y.state.pointShadow,Zt.hemisphereLights.value=Y.state.hemi,Zt.directionalShadowMap.value=Y.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Zt.spotShadowMap.value=Y.state.spotShadowMap,Zt.spotLightMatrix.value=Y.state.spotLightMatrix,Zt.spotLightMap.value=Y.state.spotLightMap,Zt.pointShadowMap.value=Y.state.pointShadowMap,Zt.pointShadowMatrix.value=Y.state.pointShadowMatrix),et.currentProgram=ee,et.uniformsList=null,ee}function Oi(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Cc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function As(A,X){const at=jt.get(A);at.outputColorSpace=X.outputColorSpace,at.batching=X.batching,at.batchingColor=X.batchingColor,at.instancing=X.instancing,at.instancingColor=X.instancingColor,at.instancingMorph=X.instancingMorph,at.skinning=X.skinning,at.morphTargets=X.morphTargets,at.morphNormals=X.morphNormals,at.morphColors=X.morphColors,at.morphTargetsCount=X.morphTargetsCount,at.numClippingPlanes=X.numClippingPlanes,at.numIntersection=X.numClipIntersection,at.vertexAlphas=X.vertexAlphas,at.vertexTangents=X.vertexTangents,at.toneMapping=X.toneMapping}function Fc(A,X,at,et,Y){X.isScene!==!0&&(X=en),ae.resetTextureUnits();const Tt=X.fog,Dt=et.isMeshStandardMaterial?X.environment:null,zt=R===null?L.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:br,Ft=(et.isMeshStandardMaterial?b:N).get(et.envMap||Dt),$t=et.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ee=!!at.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Zt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,Ae=!!at.morphAttributes.color;let we=Ya;et.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(we=L.toneMapping);const ye=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Oe=ye!==void 0?ye.length:0,Jt=jt.get(et),We=D.state.lights;if(ut===!0&&(Ct===!0||A!==Q)){const vn=A===Q&&et.id===V;Wt.setState(et,A,vn)}let Me=!1;et.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==We.state.version||Jt.outputColorSpace!==zt||Y.isBatchedMesh&&Jt.batching===!1||!Y.isBatchedMesh&&Jt.batching===!0||Y.isBatchedMesh&&Jt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Jt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Jt.instancing===!1||!Y.isInstancedMesh&&Jt.instancing===!0||Y.isSkinnedMesh&&Jt.skinning===!1||!Y.isSkinnedMesh&&Jt.skinning===!0||Y.isInstancedMesh&&Jt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Jt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Jt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Jt.instancingMorph===!1&&Y.morphTexture!==null||Jt.envMap!==Ft||et.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Wt.numPlanes||Jt.numIntersection!==Wt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==Zt||Jt.morphNormals!==ce||Jt.morphColors!==Ae||Jt.toneMapping!==we||Jt.morphTargetsCount!==Oe)&&(Me=!0):(Me=!0,Jt.__version=et.version);let gn=Jt.currentProgram;Me===!0&&(gn=dn(et,X,Y));let ma=!1,Ye=!1,Pi=!1;const je=gn.getUniforms(),_n=Jt.uniforms;if(Gt.useProgram(gn.program)&&(ma=!0,Ye=!0,Pi=!0),et.id!==V&&(V=et.id,Ye=!0),ma||Q!==A){Gt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),je.setValue(I,"projectionMatrix",A.projectionMatrix),je.setValue(I,"viewMatrix",A.matrixWorldInverse);const Mn=je.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,Xt.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&je.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&je.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Ye=!0,Pi=!0)}if(Y.isSkinnedMesh){je.setOptional(I,Y,"bindMatrix"),je.setOptional(I,Y,"bindMatrixInverse");const vn=Y.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),je.setValue(I,"boneTexture",vn.boneTexture,ae))}Y.isBatchedMesh&&(je.setOptional(I,Y,"batchingTexture"),je.setValue(I,"batchingTexture",Y._matricesTexture,ae),je.setOptional(I,Y,"batchingIdTexture"),je.setValue(I,"batchingIdTexture",Y._indirectTexture,ae),je.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&je.setValue(I,"batchingColorTexture",Y._colorsTexture,ae));const hn=at.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Yt.update(Y,at,gn),(Ye||Jt.receiveShadow!==Y.receiveShadow)&&(Jt.receiveShadow=Y.receiveShadow,je.setValue(I,"receiveShadow",Y.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(_n.envMap.value=Ft,_n.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&X.environment!==null&&(_n.envMapIntensity.value=X.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=WE()),Ye&&(je.setValue(I,"toneMappingExposure",L.toneMappingExposure),Jt.needsLights&&Ic(_n,Pi),Tt&&et.fog===!0&&qt.refreshFogUniforms(_n,Tt),qt.refreshMaterialUniforms(_n,et,pt,dt,D.state.transmissionRenderTarget[A.id]),Cc.upload(I,Oi(Jt),_n,ae)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Cc.upload(I,Oi(Jt),_n,ae),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&je.setValue(I,"center",Y.center),je.setValue(I,"modelViewMatrix",Y.modelViewMatrix),je.setValue(I,"normalMatrix",Y.normalMatrix),je.setValue(I,"modelMatrix",Y.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const vn=et.uniformsGroups;for(let Mn=0,Ti=vn.length;Mn<Ti;Mn++){const zi=vn[Mn];wt.update(zi,gn),wt.bind(zi,gn)}}return gn}function Ic(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ko(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,X,at){const et=jt.get(A);et.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),jt.get(A.texture).__webglTexture=X,jt.get(A.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:at,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const at=jt.get(A);at.__webglFramebuffer=X,at.__useDefaultFramebuffer=X===void 0};const Ka=I.createFramebuffer();this.setRenderTarget=function(A,X=0,at=0){R=A,q=X,w=at;let et=!0,Y=null,Tt=!1,Dt=!1;if(A){const Ft=jt.get(A);if(Ft.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(I.FRAMEBUFFER,null),et=!1;else if(Ft.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(Ft.__hasExternalTextures)ae.rebindTextures(A,jt.get(A.texture).__webglTexture,jt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(Ft.__boundDepthTexture!==Zt){if(Zt!==null&&jt.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const ee=jt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?Y=ee[X][at]:Y=ee[X],Tt=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?Y=jt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?Y=ee[at]:Y=ee,lt.copy(A.viewport),mt.copy(A.scissor),rt=A.scissorTest}else lt.copy(yt).multiplyScalar(pt).floor(),mt.copy(Et).multiplyScalar(pt).floor(),rt=Pt;if(at!==0&&(Y=Ka),Gt.bindFramebuffer(I.FRAMEBUFFER,Y)&&et&&Gt.drawBuffers(A,Y),Gt.viewport(lt),Gt.scissor(mt),Gt.setScissorTest(rt),Tt){const Ft=jt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ft.__webglTexture,at)}else if(Dt){const Ft=X;for(let $t=0;$t<A.textures.length;$t++){const ee=jt.get(A.textures[$t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$t,ee.__webglTexture,at,Ft)}}else if(A!==null&&at!==0){const Ft=jt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,at)}V=-1},this.readRenderTargetPixels=function(A,X,at,et,Y,Tt,Dt,zt=0){if(!(A&&A.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft){Gt.bindFramebuffer(I.FRAMEBUFFER,Ft);try{const $t=A.textures[zt],ee=$t.format,Zt=$t.type;if(!Pe.textureFormatReadable(ee)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Zt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-et&&at>=0&&at<=A.height-Y&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+zt),I.readPixels(X,at,et,Y,ne.convert(ee),ne.convert(Zt),Tt))}finally{const $t=R!==null?jt.get(R).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,X,at,et,Y,Tt,Dt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=jt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft)if(X>=0&&X<=A.width-et&&at>=0&&at<=A.height-Y){Gt.bindFramebuffer(I.FRAMEBUFFER,Ft);const $t=A.textures[zt],ee=$t.format,Zt=$t.type;if(!Pe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+zt),I.readPixels(X,at,et,Y,ne.convert(ee),ne.convert(Zt),0);const Ae=R!==null?jt.get(R).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,Ae);const we=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await _y(I,we,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(ce),I.deleteSync(we),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,at=0){const et=Math.pow(2,-at),Y=Math.floor(A.image.width*et),Tt=Math.floor(A.image.height*et),Dt=X!==null?X.x:0,zt=X!==null?X.y:0;ae.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,at,0,0,Dt,zt,Y,Tt),Gt.unbindTexture()};const Lr=I.createFramebuffer(),pa=I.createFramebuffer();this.copyTextureToTexture=function(A,X,at=null,et=null,Y=0,Tt=null){Tt===null&&(Y!==0?(zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Y,Y=0):Tt=0);let Dt,zt,Ft,$t,ee,Zt,ce,Ae,we;const ye=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)Dt=at.max.x-at.min.x,zt=at.max.y-at.min.y,Ft=at.isBox3?at.max.z-at.min.z:1,$t=at.min.x,ee=at.min.y,Zt=at.isBox3?at.min.z:0;else{const hn=Math.pow(2,-Y);Dt=Math.floor(ye.width*hn),zt=Math.floor(ye.height*hn),A.isDataArrayTexture?Ft=ye.depth:A.isData3DTexture?Ft=Math.floor(ye.depth*hn):Ft=1,$t=0,ee=0,Zt=0}et!==null?(ce=et.x,Ae=et.y,we=et.z):(ce=0,Ae=0,we=0);const Oe=ne.convert(X.format),Jt=ne.convert(X.type);let We;X.isData3DTexture?(ae.setTexture3D(X,0),We=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ae.setTexture2DArray(X,0),We=I.TEXTURE_2D_ARRAY):(ae.setTexture2D(X,0),We=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const Me=I.getParameter(I.UNPACK_ROW_LENGTH),gn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ma=I.getParameter(I.UNPACK_SKIP_PIXELS),Ye=I.getParameter(I.UNPACK_SKIP_ROWS),Pi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ye.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ye.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt);const je=A.isDataArrayTexture||A.isData3DTexture,_n=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const hn=jt.get(A),vn=jt.get(X),Mn=jt.get(hn.__renderTarget),Ti=jt.get(vn.__renderTarget);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let zi=0;zi<Ft;zi++)je&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.get(A).__webglTexture,Y,Zt+zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.get(X).__webglTexture,Tt,we+zi)),I.blitFramebuffer($t,ee,Dt,zt,ce,Ae,Dt,zt,I.DEPTH_BUFFER_BIT,I.NEAREST);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||jt.has(A)){const hn=jt.get(A),vn=jt.get(X);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Lr),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,pa);for(let Mn=0;Mn<Ft;Mn++)je?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,Y,Zt+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,Y),_n?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vn.__webglTexture,Tt,we+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vn.__webglTexture,Tt),Y!==0?I.blitFramebuffer($t,ee,Dt,zt,ce,Ae,Dt,zt,I.COLOR_BUFFER_BIT,I.NEAREST):_n?I.copyTexSubImage3D(We,Tt,ce,Ae,we+Mn,$t,ee,Dt,zt):I.copyTexSubImage2D(We,Tt,ce,Ae,$t,ee,Dt,zt);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(We,Tt,ce,Ae,we,Dt,zt,Ft,Oe,Jt,ye.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(We,Tt,ce,Ae,we,Dt,zt,Ft,Oe,ye.data):I.texSubImage3D(We,Tt,ce,Ae,we,Dt,zt,Ft,Oe,Jt,ye):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,ce,Ae,Dt,zt,Oe,Jt,ye.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,ce,Ae,ye.width,ye.height,Oe,ye.data):I.texSubImage2D(I.TEXTURE_2D,Tt,ce,Ae,Dt,zt,Oe,Jt,ye);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ma),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ye),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pi),Tt===0&&X.generateMipmaps&&I.generateMipmap(We),Gt.unbindTexture()},this.initRenderTarget=function(A){jt.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),Gt.unbindTexture()},this.resetState=function(){q=0,w=0,R=null,Gt.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}function YE({className:o}){const e=Ud.useRef(null);return Ud.useEffect(()=>{const i=e.current;if(!i)return;const s=window.matchMedia("(max-width: 768px)").matches||/Mobi|Android|iPhone/i.test(navigator.userAgent),l=s?700:1600,u=s?0:52,d=new Xy;d.fog=new Oh(528409,8,24);const h=new ni(58,i.clientWidth/i.clientHeight,.1,100);h.position.set(0,.15,6.4);const m=new qE({antialias:!0,alpha:!0});m.setPixelRatio(Math.min(window.devicePixelRatio,s?1.2:1.7)),m.setSize(i.clientWidth,i.clientHeight),m.setClearColor(132619,0),i.appendChild(m.domElement);const p=new iM(11075567,.44),_=new cg(6288344,1.2,50);_.position.set(2.4,2.2,3.5);const g=new cg(7314943,.5,45);g.position.set(-3,-1.4,2),d.add(p,_,g);const S=new Bh(1.15,0),M=new Qy({color:6750176,metalness:.34,roughness:.42,emissive:870979,emissiveIntensity:.45,wireframe:!0}),T=new da(S,M);d.add(T);const C=new Xn,y=new Float32Array(l*3);for(let rt=0;rt<l;rt+=1){const z=rt*3;y[z]=(Math.random()-.5)*20,y[z+1]=(Math.random()-.5)*12,y[z+2]=(Math.random()-.5)*20}C.setAttribute("position",new Ei(y,3));const v=new Sh({color:9107199,size:s?.016:.02,transparent:!0,opacity:.66}),U=new ag(C,v);d.add(U);let D=null,O=null,H=null,L=null,B=null,q=null;if(u>0){const rt=[],z=[];for(let dt=0;dt<u;dt+=1){const pt=new K((Math.random()-.5)*7,(Math.random()-.5)*4,(Math.random()-.5)*7);z.push(pt),rt.push(pt.x,pt.y,pt.z)}H=new Xn,H.setAttribute("position",new kn(rt,3)),B=new Sh({color:6815733,size:.035,transparent:!0,opacity:.85}),D=new ag(H,B),d.add(D);const Z=[],j=1.75;for(let dt=0;dt<z.length;dt+=1)for(let pt=dt+1;pt<z.length;pt+=1)z[dt].distanceTo(z[pt])<j&&Z.push(z[dt].x,z[dt].y,z[dt].z,z[pt].x,z[pt].y,z[pt].z);L=new Xn,L.setAttribute("position",new kn(Z,3)),q=new i_({color:6871295,transparent:!0,opacity:.2}),O=new Ky(L,q),d.add(O)}const w=new Se(0,0),R=rt=>{w.x=(rt.clientX/window.innerWidth-.5)*.9,w.y=(rt.clientY/window.innerHeight-.5)*-.8},V=()=>{const rt=i.clientWidth,z=i.clientHeight;h.aspect=rt/z,h.updateProjectionMatrix(),m.setSize(rt,z)};window.addEventListener("mousemove",R),window.addEventListener("resize",V);const Q=new sM;let lt=0;const mt=()=>{lt=requestAnimationFrame(mt);const rt=Q.getElapsedTime();T.rotation.x=rt*.22,T.rotation.y=rt*.35,U.rotation.y=rt*.02,D&&O&&(D.rotation.y=rt*.05,O.rotation.y=rt*.05),h.position.x+=(w.x-h.position.x)*.05,h.position.y+=(w.y+.15-h.position.y)*.05,h.lookAt(0,0,0),m.render(d,h)};return mt(),()=>{cancelAnimationFrame(lt),window.removeEventListener("mousemove",R),window.removeEventListener("resize",V),S.dispose(),M.dispose(),C.dispose(),v.dispose(),H?.dispose(),L?.dispose(),B?.dispose(),q?.dispose(),m.dispose(),i.contains(m.domElement)&&i.removeChild(m.domElement)}},[]),Nt.jsx("div",{ref:e,className:o,style:{width:"100%",height:"100%"}})}function jE(){return Nt.jsxs("section",{className:"hero section",id:"top",children:[Nt.jsx(YE,{className:"scene-canvas"}),Nt.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),Nt.jsxs("div",{className:"container hero-content",children:[Nt.jsx("p",{className:"eyebrow",children:"Independent System Engineer"}),Nt.jsx("h1",{children:"I build complete intelligent systems - from embedded hardware and sensors to automation, ERP, MES, smart manufacturing, and smart agriculture."}),Nt.jsx("h2",{children:"From devices to enterprise systems, I build the entire intelligent ecosystem for real operations."}),Nt.jsx("p",{className:"hero-note",children:"If you can describe the problem, I can build the solution."}),Nt.jsxs("div",{className:"hero-actions",children:[Nt.jsx(Og,{href:"#projects",children:"View selected work"}),Nt.jsx("a",{className:"btn-secondary",href:"#contact",children:"Let's work together"})]})]})]})}function d_({title:o,children:e,className:i=""}){return Nt.jsxs("article",{className:`surface-card ${i}`.trim(),children:[Nt.jsx("h3",{children:o}),e]})}const ZE=[{title:"Bluetooth ECG Monitoring Device",background:"Needed a portable, low-power ECG acquisition solution.",solution:"Developed embedded firmware, BLE communication, and real-time signal processing.",result:"Delivered a stable, accurate, mobile-ready ECG monitoring system."},{title:"Environmental Sensor and Automation System",background:"Manual monitoring of temperature, humidity, and air quality was inefficient.",solution:"Built a multi-sensor embedded system with automated control logic.",result:"Achieved fully automated environmental regulation with real-time data."},{title:"Smart Agriculture Monitoring and Irrigation",background:"Farms needed automated environmental control and irrigation.",solution:"Developed a sensor-driven system for soil moisture, climate monitoring, and automated irrigation.",result:"Improved crop stability and reduced manual labor."},{title:"Production MES Workflow System",background:"Production tracking lacked visibility and accuracy.",solution:"Designed a complete MES workflow including scheduling, tracking, and ERP integration.",result:"Improved data accuracy and reduced manual reporting time by over 60%."},{title:"ERP Customization for Manufacturing",background:"Standard ERP modules could not match real production workflows.",solution:"Customized modules and added automation logic for scheduling, quality, and reporting.",result:"Increased workflow accuracy and reduced manual adjustments."}];function KE(){return Nt.jsx("section",{className:"section",id:"projects",children:Nt.jsxs("div",{className:"container",children:[Nt.jsx("p",{className:"section-kicker",children:"Projects"}),Nt.jsx("h2",{className:"section-title",children:"Selected Systems"}),Nt.jsx("div",{className:"card-grid projects-grid",children:ZE.map(o=>Nt.jsxs(d_,{title:o.title,className:"project-card",children:[Nt.jsxs("p",{children:[Nt.jsx("strong",{children:"Background:"})," ",o.background]}),Nt.jsxs("p",{children:[Nt.jsx("strong",{children:"Solution:"})," ",o.solution]}),Nt.jsxs("p",{children:[Nt.jsx("strong",{children:"Result:"})," ",o.result]})]},o.title))})]})})}const QE=["Sensors","Embedded firmware","IoT communication","Automation logic","Smart manufacturing","Smart agriculture","ERP / MES","Full-stack applications","AI-assisted optimization"];function JE(){return Nt.jsx("section",{className:"section",id:"scope",children:Nt.jsxs("div",{className:"container scope-panel",children:[Nt.jsx("p",{className:"section-kicker",children:"End-to-End Scope"}),Nt.jsx("h2",{className:"section-title",children:"One Engineer Across the Entire System Chain"}),Nt.jsx("p",{className:"section-copy",children:"I work across the full stack of operational systems, so integration and delivery stay consistent from physical devices to enterprise workflows."}),Nt.jsx("ul",{className:"tag-list scope-tags","aria-label":"full chain scope",children:QE.map(o=>Nt.jsx("li",{className:"tag",children:o},o))})]})})}const $E=[{title:"Embedded & IoT Devices",description:"Build low-power devices and sensor systems with stable data acquisition and communication.",points:["Bluetooth ECG monitoring device","Temperature, humidity, and air-quality sensing","BLE communication and edge control logic","Device firmware for low-power operation"]},{title:"Intelligent Automation",description:"Turn manual workflows into sensor-driven, traceable, and real-time automation.",points:["Smart environmental automation","IoT-based control systems","Device linkage and live monitoring","Data-driven operational decisions"]},{title:"Smart Manufacturing",description:"Connect production flow, machines, and reporting into one execution system.",points:["Production workflow automation","Shop-floor data collection","Scheduling and quality management","MES and ERP integration"]},{title:"Smart Agriculture",description:"Design field-ready systems for sensing, control, and farm operation intelligence.",points:["Agricultural environment monitoring","Automated irrigation and climate control","Sensor network architecture","Farm data visualization and optimization"]},{title:"Enterprise Systems",description:"Deliver ERP, MES, and full-stack platforms aligned with real manufacturing and agriculture workflows.",points:["ERP customization and process automation","MES development and execution tracking","Full-stack business systems","AI-assisted development pipeline"]}];function tT(){return Nt.jsx("section",{className:"section",id:"services",children:Nt.jsxs("div",{className:"container",children:[Nt.jsx("p",{className:"section-kicker",children:"Capabilities"}),Nt.jsx("h2",{className:"section-title",children:"What I Build"}),Nt.jsx("div",{className:"card-grid services-grid",children:$E.map(o=>Nt.jsxs(d_,{title:o.title,children:[Nt.jsx("p",{children:o.description}),Nt.jsx("ul",{className:"capability-list",children:o.points.map(e=>Nt.jsx("li",{children:e},e))})]},o.title))})]})})}function eT(){return Nt.jsxs("div",{className:"site-shell",children:[Nt.jsx(jE,{}),Nt.jsxs("main",{children:[Nt.jsx(CS,{}),Nt.jsx(tT,{}),Nt.jsx(KE,{}),Nt.jsx(JE,{}),Nt.jsx(wS,{})]})]})}AS.createRoot(document.getElementById("root")).render(Nt.jsx(Ud.StrictMode,{children:Nt.jsx(eT,{})}));
