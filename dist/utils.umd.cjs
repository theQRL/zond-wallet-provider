"use strict";var vt=Object.defineProperty;var wt=(r,t,e)=>t in r?vt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Pe=(r,t,e)=>(wt(r,typeof t!="symbol"?t+"":t,e),e),_e=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var F=(r,t,e)=>(_e(r,t,"read from private field"),e?e.call(r):t.get(r)),Ee=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},pe=(r,t,e,s)=>(_e(r,t,"write to private field"),s?s.call(r,e):t.set(r,e),e);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const f=require("./superstruct.umd.cjs");function Tt(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function yt(r){return r==null}const at=(r,t)=>Object.hasOwnProperty.call(r,t);function Ft(r){return typeof r=="object"&&r!==null&&"message"in r}function bt(r){return Ft(r)&&typeof r.message=="string"?r.message:yt(r)?"":String(r)}function Pt(r){var t,e;return typeof((e=(t=r==null?void 0:r.prototype)==null?void 0:t.constructor)==null?void 0:e.name)=="string"}function _t(r){return bt(r).replace(/\.$/u,"")}function ct(r,t){return Pt(r)?new r({message:t}):r({message:t})}class lt extends Error{constructor(e){super(e.message);Pe(this,"code","ERR_ASSERTION")}}function se(r,t="Assertion failed.",e=lt){if(!r)throw t instanceof Error?t:ct(e,t)}function jt(r,t,e="Assertion failed",s=lt){try{f.assert(r,t)}catch(c){throw ct(s,`${e}: ${_t(c)}.`)}}const Dt=(r,t={})=>{const e=t.paddingRequired??!1,s=t.characterSet??"base64";let c;s==="base64"?c=String.raw`[A-Za-z0-9+\/]`:(se(s==="base64url"),c=String.raw`[-_A-Za-z0-9]`);let l;return e?l=new RegExp(`^(?:${c}{4})*(?:${c}{3}=|${c}{2}==)?$`,"u"):l=new RegExp(`^(?:${c}{4})*(?:${c}{2,3}|${c}{3}=|${c}{2}==)?$`,"u"),f.pattern(r,l)},Gt=f.pattern(f.string(),/^(?:0x)?[0-9a-f]+$/iu),ne=f.pattern(f.string(),/^0x[0-9a-f]+$/iu);f.pattern(f.string(),/^0x[0-9a-f]{40}$/u);f.pattern(f.string(),/^0x[0-9a-fA-F]{40}$/u);function Ut(r){return f.is(r,Gt)}function xt(r){se(Ut(r),"Value must be a hexadecimal string.")}function Xt(r){return r.startsWith("0x")?r:r.startsWith("0X")?`0x${r.substring(2)}`:`0x${r}`}function Vt(r){return r.startsWith("0x")||r.startsWith("0X")?r.substring(2):r}const je=48,De=58,Ge=87;function zt(){const r=[];return()=>{if(r.length===0)for(let t=0;t<256;t++)r.push(t.toString(16).padStart(2,"0"));return r}}const Mt=zt();function kt(r){return r instanceof Uint8Array}function Ht(r){se(kt(r),"Value must be a Uint8Array.")}function qt(r){if(Ht(r),r.length===0)return"0x";const t=Mt(),e=new Array(r.length);for(let s=0;s<r.length;s++)e[s]=t[r[s]];return Xt(e.join(""))}function Bt(r){var c;if(((c=r==null?void 0:r.toLowerCase)==null?void 0:c.call(r))==="0x")return new Uint8Array;xt(r);const t=Vt(r).toLowerCase(),e=t.length%2===0?t:`0${t}`,s=new Uint8Array(e.length/2);for(let l=0;l<s.length;l++){const u=e.charCodeAt(l*2),I=e.charCodeAt(l*2+1),o=u-(u<De?je:Ge),n=I-(I<De?je:Ge);s[l]=o*16+n}return s}const Wt=/^(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})$/u,Yt=/^[-a-z0-9]{3,8}$/u,Jt=/^[-_a-zA-Z0-9]{1,32}$/u,Zt=/^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})):(?<accountAddress>[-.%a-zA-Z0-9]{1,128})$/u,Kt=/^[-.%a-zA-Z0-9]{1,128}$/u;f.pattern(f.string(),Wt);f.pattern(f.string(),Yt);f.pattern(f.string(),Jt);f.pattern(f.string(),Zt);f.pattern(f.string(),Kt);f.size(Dt(f.string(),{paddingRequired:!0}),44,44);const ut=f.union([f.number(),f.bigint(),f.string(),ne]);f.coerce(f.number(),ut,Number);f.coerce(f.bigint(),ut,BigInt);f.union([ne,f.instance(Uint8Array)]);f.coerce(f.instance(Uint8Array),f.union([ne]),Bt);f.coerce(ne,f.instance(Uint8Array),qt);var _;class ft{constructor(t){Ee(this,_,void 0);pe(this,_,new Map(t)),Object.freeze(this)}get size(){return F(this,_).size}[Symbol.iterator](){return F(this,_)[Symbol.iterator]()}entries(){return F(this,_).entries()}forEach(t,e){return F(this,_).forEach((s,c,l)=>t.call(e,s,c,this))}get(t){return F(this,_).get(t)}has(t){return F(this,_).has(t)}keys(){return F(this,_).keys()}values(){return F(this,_).values()}toString(){return`FrozenMap(${this.size}) {${this.size>0?` ${[...this.entries()].map(([t,e])=>`${String(t)} => ${String(e)}`).join(", ")} `:""}}`}}_=new WeakMap;var j;class ht{constructor(t){Ee(this,j,void 0);pe(this,j,new Set(t)),Object.freeze(this)}get size(){return F(this,j).size}[Symbol.iterator](){return F(this,j)[Symbol.iterator]()}entries(){return F(this,j).entries()}forEach(t,e){return F(this,j).forEach((s,c,l)=>t.call(e,s,c,this))}has(t){return F(this,j).has(t)}keys(){return F(this,j).keys()}values(){return F(this,j).values()}toString(){return`FrozenSet(${this.size}) {${this.size>0?` ${[...this.values()].map(t=>String(t)).join(", ")} `:""}}`}}j=new WeakMap;Object.freeze(ft);Object.freeze(ft.prototype);Object.freeze(ht);Object.freeze(ht.prototype);const q=r=>f.object(r);function Ue({path:r,branch:t}){const e=r[r.length-1];return at(t[t.length-2],e)}function ee(r){return new f.Struct({...r,type:`optional ${r.type}`,validator:(t,e)=>!Ue(e)||r.validator(t,e),refiner:(t,e)=>!Ue(e)||r.refiner(t,e)})}const Qt=()=>f.define("finite number",r=>f.is(r,f.number())&&Number.isFinite(r)),te=f.union([f.literal(null),f.boolean(),Qt(),f.string(),f.array(f.lazy(()=>te)),f.record(f.string(),f.lazy(()=>te))]),re=f.coerce(te,f.any(),r=>(jt(r,te),JSON.parse(JSON.stringify(r,(t,e)=>{if(!(t==="__proto__"||t==="constructor"))return e})))),er="2.0",B=f.literal(er),ie=f.nullable(f.union([f.number(),f.string()])),Et=q({code:f.integer(),message:f.string(),data:ee(re),stack:ee(f.string())}),pt=f.union([f.record(f.string(),re),f.array(re)]);q({id:ie,jsonrpc:B,method:f.string(),params:ee(pt)});q({jsonrpc:B,method:f.string(),params:ee(pt)});f.object({id:ie,jsonrpc:B,result:f.optional(f.unknown()),error:f.optional(Et)});const tr=q({id:ie,jsonrpc:B,result:re}),rr=q({id:ie,jsonrpc:B,error:Et});f.union([tr,rr]);var Se={exports:{}},$e,xe;function sr(){if(xe)return $e;xe=1;var r=1e3,t=r*60,e=t*60,s=e*24,c=s*7,l=s*365.25;$e=function(i,a){a=a||{};var E=typeof i;if(E==="string"&&i.length>0)return u(i);if(E==="number"&&isFinite(i))return a.long?o(i):I(i);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(i))};function u(i){if(i=String(i),!(i.length>100)){var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(i);if(a){var E=parseFloat(a[1]),p=(a[2]||"ms").toLowerCase();switch(p){case"years":case"year":case"yrs":case"yr":case"y":return E*l;case"weeks":case"week":case"w":return E*c;case"days":case"day":case"d":return E*s;case"hours":case"hour":case"hrs":case"hr":case"h":return E*e;case"minutes":case"minute":case"mins":case"min":case"m":return E*t;case"seconds":case"second":case"secs":case"sec":case"s":return E*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return E;default:return}}}}function I(i){var a=Math.abs(i);return a>=s?Math.round(i/s)+"d":a>=e?Math.round(i/e)+"h":a>=t?Math.round(i/t)+"m":a>=r?Math.round(i/r)+"s":i+"ms"}function o(i){var a=Math.abs(i);return a>=s?n(i,a,s,"day"):a>=e?n(i,a,e,"hour"):a>=t?n(i,a,t,"minute"):a>=r?n(i,a,r,"second"):i+" ms"}function n(i,a,E,p){var R=a>=E*1.5;return Math.round(i/E)+" "+p+(R?"s":"")}return $e}function nr(r){e.debug=e,e.default=e,e.coerce=o,e.disable=l,e.enable=c,e.enabled=u,e.humanize=sr(),e.destroy=n,Object.keys(r).forEach(i=>{e[i]=r[i]}),e.names=[],e.skips=[],e.formatters={};function t(i){let a=0;for(let E=0;E<i.length;E++)a=(a<<5)-a+i.charCodeAt(E),a|=0;return e.colors[Math.abs(a)%e.colors.length]}e.selectColor=t;function e(i){let a,E=null,p,R;function w(...O){if(!w.enabled)return;const y=w,x=Number(new Date),L=x-(a||x);y.diff=L,y.prev=a,y.curr=x,a=x,O[0]=e.coerce(O[0]),typeof O[0]!="string"&&O.unshift("%O");let X=0;O[0]=O[0].replace(/%([a-zA-Z%])/g,(M,fe)=>{if(M==="%%")return"%";X++;const Y=e.formatters[fe];if(typeof Y=="function"){const he=O[X];M=Y.call(y,he),O.splice(X,1),X--}return M}),e.formatArgs.call(y,O),(y.log||e.log).apply(y,O)}return w.namespace=i,w.useColors=e.useColors(),w.color=e.selectColor(i),w.extend=s,w.destroy=e.destroy,Object.defineProperty(w,"enabled",{enumerable:!0,configurable:!1,get:()=>E!==null?E:(p!==e.namespaces&&(p=e.namespaces,R=e.enabled(i)),R),set:O=>{E=O}}),typeof e.init=="function"&&e.init(w),w}function s(i,a){const E=e(this.namespace+(typeof a>"u"?":":a)+i);return E.log=this.log,E}function c(i){e.save(i),e.namespaces=i,e.names=[],e.skips=[];let a;const E=(typeof i=="string"?i:"").split(/[\s,]+/),p=E.length;for(a=0;a<p;a++)E[a]&&(i=E[a].replace(/\*/g,".*?"),i[0]==="-"?e.skips.push(new RegExp("^"+i.slice(1)+"$")):e.names.push(new RegExp("^"+i+"$")))}function l(){const i=[...e.names.map(I),...e.skips.map(I).map(a=>"-"+a)].join(",");return e.enable(""),i}function u(i){if(i[i.length-1]==="*")return!0;let a,E;for(a=0,E=e.skips.length;a<E;a++)if(e.skips[a].test(i))return!1;for(a=0,E=e.names.length;a<E;a++)if(e.names[a].test(i))return!0;return!1}function I(i){return i.toString().substring(2,i.toString().length-2).replace(/\.\*\?$/,"*")}function o(i){return i instanceof Error?i.stack||i.message:i}function n(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}var ir=nr;(function(r,t){var e={};t.formatArgs=c,t.save=l,t.load=u,t.useColors=s,t.storage=I(),t.destroy=(()=>{let n=!1;return()=>{n||(n=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function s(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let n;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(n=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(n[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function c(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+r.exports.humanize(this.diff),!this.useColors)return;const i="color: "+this.color;n.splice(1,0,i,"color: inherit");let a=0,E=0;n[0].replace(/%[a-zA-Z%]/g,p=>{p!=="%%"&&(a++,p==="%c"&&(E=a))}),n.splice(E,0,i)}t.log=console.debug||console.log||(()=>{});function l(n){try{n?t.storage.setItem("debug",n):t.storage.removeItem("debug")}catch{}}function u(){let n;try{n=t.storage.getItem("debug")}catch{}return!n&&typeof process<"u"&&"env"in process&&(n=e.DEBUG),n}function I(){try{return localStorage}catch{}}r.exports=ir(t);const{formatters:o}=r.exports;o.j=function(n){try{return JSON.stringify(n)}catch(i){return"[UnexpectedJSONParseError]: "+i.message}}})(Se,Se.exports);var or=Se.exports;const ar=Tt(or);ar("metamask");var Ae={exports:{}};const cr="2.0.0",$t=256,lr=Number.MAX_SAFE_INTEGER||9007199254740991,ur=16,fr=$t-6,hr=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var oe={MAX_LENGTH:$t,MAX_SAFE_COMPONENT_LENGTH:ur,MAX_SAFE_BUILD_LENGTH:fr,MAX_SAFE_INTEGER:lr,RELEASE_TYPES:hr,SEMVER_SPEC_VERSION:cr,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},me={};const Er=typeof process=="object"&&me&&me.NODE_DEBUG&&/\bsemver\b/i.test(me.NODE_DEBUG)?(...r)=>console.error("SEMVER",...r):()=>{};var ae=Er;(function(r,t){const{MAX_SAFE_COMPONENT_LENGTH:e,MAX_SAFE_BUILD_LENGTH:s,MAX_LENGTH:c}=oe,l=ae;t=r.exports={};const u=t.re=[],I=t.safeRe=[],o=t.src=[],n=t.t={};let i=0;const a="[a-zA-Z0-9-]",E=[["\\s",1],["\\d",c],[a,s]],p=w=>{for(const[O,y]of E)w=w.split(`${O}*`).join(`${O}{0,${y}}`).split(`${O}+`).join(`${O}{1,${y}}`);return w},R=(w,O,y)=>{const x=p(O),L=i++;l(w,L,O),n[w]=L,o[L]=O,u[L]=new RegExp(O,y?"g":void 0),I[L]=new RegExp(x,y?"g":void 0)};R("NUMERICIDENTIFIER","0|[1-9]\\d*"),R("NUMERICIDENTIFIERLOOSE","\\d+"),R("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${a}*`),R("MAINVERSION",`(${o[n.NUMERICIDENTIFIER]})\\.(${o[n.NUMERICIDENTIFIER]})\\.(${o[n.NUMERICIDENTIFIER]})`),R("MAINVERSIONLOOSE",`(${o[n.NUMERICIDENTIFIERLOOSE]})\\.(${o[n.NUMERICIDENTIFIERLOOSE]})\\.(${o[n.NUMERICIDENTIFIERLOOSE]})`),R("PRERELEASEIDENTIFIER",`(?:${o[n.NUMERICIDENTIFIER]}|${o[n.NONNUMERICIDENTIFIER]})`),R("PRERELEASEIDENTIFIERLOOSE",`(?:${o[n.NUMERICIDENTIFIERLOOSE]}|${o[n.NONNUMERICIDENTIFIER]})`),R("PRERELEASE",`(?:-(${o[n.PRERELEASEIDENTIFIER]}(?:\\.${o[n.PRERELEASEIDENTIFIER]})*))`),R("PRERELEASELOOSE",`(?:-?(${o[n.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[n.PRERELEASEIDENTIFIERLOOSE]})*))`),R("BUILDIDENTIFIER",`${a}+`),R("BUILD",`(?:\\+(${o[n.BUILDIDENTIFIER]}(?:\\.${o[n.BUILDIDENTIFIER]})*))`),R("FULLPLAIN",`v?${o[n.MAINVERSION]}${o[n.PRERELEASE]}?${o[n.BUILD]}?`),R("FULL",`^${o[n.FULLPLAIN]}$`),R("LOOSEPLAIN",`[v=\\s]*${o[n.MAINVERSIONLOOSE]}${o[n.PRERELEASELOOSE]}?${o[n.BUILD]}?`),R("LOOSE",`^${o[n.LOOSEPLAIN]}$`),R("GTLT","((?:<|>)?=?)"),R("XRANGEIDENTIFIERLOOSE",`${o[n.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),R("XRANGEIDENTIFIER",`${o[n.NUMERICIDENTIFIER]}|x|X|\\*`),R("XRANGEPLAIN",`[v=\\s]*(${o[n.XRANGEIDENTIFIER]})(?:\\.(${o[n.XRANGEIDENTIFIER]})(?:\\.(${o[n.XRANGEIDENTIFIER]})(?:${o[n.PRERELEASE]})?${o[n.BUILD]}?)?)?`),R("XRANGEPLAINLOOSE",`[v=\\s]*(${o[n.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[n.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[n.XRANGEIDENTIFIERLOOSE]})(?:${o[n.PRERELEASELOOSE]})?${o[n.BUILD]}?)?)?`),R("XRANGE",`^${o[n.GTLT]}\\s*${o[n.XRANGEPLAIN]}$`),R("XRANGELOOSE",`^${o[n.GTLT]}\\s*${o[n.XRANGEPLAINLOOSE]}$`),R("COERCEPLAIN",`(^|[^\\d])(\\d{1,${e}})(?:\\.(\\d{1,${e}}))?(?:\\.(\\d{1,${e}}))?`),R("COERCE",`${o[n.COERCEPLAIN]}(?:$|[^\\d])`),R("COERCEFULL",o[n.COERCEPLAIN]+`(?:${o[n.PRERELEASE]})?(?:${o[n.BUILD]})?(?:$|[^\\d])`),R("COERCERTL",o[n.COERCE],!0),R("COERCERTLFULL",o[n.COERCEFULL],!0),R("LONETILDE","(?:~>?)"),R("TILDETRIM",`(\\s*)${o[n.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",R("TILDE",`^${o[n.LONETILDE]}${o[n.XRANGEPLAIN]}$`),R("TILDELOOSE",`^${o[n.LONETILDE]}${o[n.XRANGEPLAINLOOSE]}$`),R("LONECARET","(?:\\^)"),R("CARETTRIM",`(\\s*)${o[n.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",R("CARET",`^${o[n.LONECARET]}${o[n.XRANGEPLAIN]}$`),R("CARETLOOSE",`^${o[n.LONECARET]}${o[n.XRANGEPLAINLOOSE]}$`),R("COMPARATORLOOSE",`^${o[n.GTLT]}\\s*(${o[n.LOOSEPLAIN]})$|^$`),R("COMPARATOR",`^${o[n.GTLT]}\\s*(${o[n.FULLPLAIN]})$|^$`),R("COMPARATORTRIM",`(\\s*)${o[n.GTLT]}\\s*(${o[n.LOOSEPLAIN]}|${o[n.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",R("HYPHENRANGE",`^\\s*(${o[n.XRANGEPLAIN]})\\s+-\\s+(${o[n.XRANGEPLAIN]})\\s*$`),R("HYPHENRANGELOOSE",`^\\s*(${o[n.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[n.XRANGEPLAINLOOSE]})\\s*$`),R("STAR","(<|>)?=?\\s*\\*"),R("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),R("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(Ae,Ae.exports);var W=Ae.exports;const pr=Object.freeze({loose:!0}),$r=Object.freeze({}),mr=r=>r?typeof r!="object"?pr:r:$r;var Ne=mr;const Xe=/^[0-9]+$/,mt=(r,t)=>{const e=Xe.test(r),s=Xe.test(t);return e&&s&&(r=+r,t=+t),r===t?0:e&&!s?-1:s&&!e?1:r<t?-1:1},dr=(r,t)=>mt(t,r);var dt={compareIdentifiers:mt,rcompareIdentifiers:dr};const J=ae,{MAX_LENGTH:Ve,MAX_SAFE_INTEGER:Z}=oe,{safeRe:ze,t:Me}=W,Rr=Ne,{compareIdentifiers:V}=dt;let gr=class U{constructor(t,e){if(e=Rr(e),t instanceof U){if(t.loose===!!e.loose&&t.includePrerelease===!!e.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>Ve)throw new TypeError(`version is longer than ${Ve} characters`);J("SemVer",t,e),this.options=e,this.loose=!!e.loose,this.includePrerelease=!!e.includePrerelease;const s=t.trim().match(e.loose?ze[Me.LOOSE]:ze[Me.FULL]);if(!s)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+s[1],this.minor=+s[2],this.patch=+s[3],this.major>Z||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Z||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Z||this.patch<0)throw new TypeError("Invalid patch version");s[4]?this.prerelease=s[4].split(".").map(c=>{if(/^[0-9]+$/.test(c)){const l=+c;if(l>=0&&l<Z)return l}return c}):this.prerelease=[],this.build=s[5]?s[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(J("SemVer.compare",this.version,this.options,t),!(t instanceof U)){if(typeof t=="string"&&t===this.version)return 0;t=new U(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof U||(t=new U(t,this.options)),V(this.major,t.major)||V(this.minor,t.minor)||V(this.patch,t.patch)}comparePre(t){if(t instanceof U||(t=new U(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let e=0;do{const s=this.prerelease[e],c=t.prerelease[e];if(J("prerelease compare",e,s,c),s===void 0&&c===void 0)return 0;if(c===void 0)return 1;if(s===void 0)return-1;if(s===c)continue;return V(s,c)}while(++e)}compareBuild(t){t instanceof U||(t=new U(t,this.options));let e=0;do{const s=this.build[e],c=t.build[e];if(J("build compare",e,s,c),s===void 0&&c===void 0)return 0;if(c===void 0)return 1;if(s===void 0)return-1;if(s===c)continue;return V(s,c)}while(++e)}inc(t,e,s){switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",e,s);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",e,s);break;case"prepatch":this.prerelease.length=0,this.inc("patch",e,s),this.inc("pre",e,s);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",e,s),this.inc("pre",e,s);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const c=Number(s)?1:0;if(!e&&s===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[c];else{let l=this.prerelease.length;for(;--l>=0;)typeof this.prerelease[l]=="number"&&(this.prerelease[l]++,l=-2);if(l===-1){if(e===this.prerelease.join(".")&&s===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(c)}}if(e){let l=[e,c];s===!1&&(l=[e]),V(this.prerelease[0],e)===0?isNaN(this.prerelease[1])&&(this.prerelease=l):this.prerelease=l}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var b=gr;const ke=b,Cr=(r,t,e=!1)=>{if(r instanceof ke)return r;try{return new ke(r,t)}catch(s){if(!e)return null;throw s}};var z=Cr;const Ir=z,Sr=(r,t)=>{const e=Ir(r,t);return e?e.version:null};var Ar=Sr;const Nr=z,Or=(r,t)=>{const e=Nr(r.trim().replace(/^[=v]+/,""),t);return e?e.version:null};var Lr=Or;const He=b,vr=(r,t,e,s,c)=>{typeof e=="string"&&(c=s,s=e,e=void 0);try{return new He(r instanceof He?r.version:r,e).inc(t,s,c).version}catch{return null}};var wr=vr;const qe=z,Tr=(r,t)=>{const e=qe(r,null,!0),s=qe(t,null,!0),c=e.compare(s);if(c===0)return null;const l=c>0,u=l?e:s,I=l?s:e,o=!!u.prerelease.length;if(!!I.prerelease.length&&!o)return!I.patch&&!I.minor?"major":u.patch?"patch":u.minor?"minor":"major";const i=o?"pre":"";return e.major!==s.major?i+"major":e.minor!==s.minor?i+"minor":e.patch!==s.patch?i+"patch":"prerelease"};var yr=Tr;const Fr=b,br=(r,t)=>new Fr(r,t).major;var Pr=br;const _r=b,jr=(r,t)=>new _r(r,t).minor;var Dr=jr;const Gr=b,Ur=(r,t)=>new Gr(r,t).patch;var xr=Ur;const Xr=z,Vr=(r,t)=>{const e=Xr(r,t);return e&&e.prerelease.length?e.prerelease:null};var zr=Vr;const Be=b,Mr=(r,t,e)=>new Be(r,e).compare(new Be(t,e));var D=Mr;const kr=D,Hr=(r,t,e)=>kr(t,r,e);var qr=Hr;const Br=D,Wr=(r,t)=>Br(r,t,!0);var Yr=Wr;const We=b,Jr=(r,t,e)=>{const s=new We(r,e),c=new We(t,e);return s.compare(c)||s.compareBuild(c)};var Oe=Jr;const Zr=Oe,Kr=(r,t)=>r.sort((e,s)=>Zr(e,s,t));var Qr=Kr;const es=Oe,ts=(r,t)=>r.sort((e,s)=>es(s,e,t));var rs=ts;const ss=D,ns=(r,t,e)=>ss(r,t,e)>0;var ce=ns;const is=D,os=(r,t,e)=>is(r,t,e)<0;var Le=os;const as=D,cs=(r,t,e)=>as(r,t,e)===0;var Rt=cs;const ls=D,us=(r,t,e)=>ls(r,t,e)!==0;var gt=us;const fs=D,hs=(r,t,e)=>fs(r,t,e)>=0;var ve=hs;const Es=D,ps=(r,t,e)=>Es(r,t,e)<=0;var we=ps;const $s=Rt,ms=gt,ds=ce,Rs=ve,gs=Le,Cs=we,Is=(r,t,e,s)=>{switch(t){case"===":return typeof r=="object"&&(r=r.version),typeof e=="object"&&(e=e.version),r===e;case"!==":return typeof r=="object"&&(r=r.version),typeof e=="object"&&(e=e.version),r!==e;case"":case"=":case"==":return $s(r,e,s);case"!=":return ms(r,e,s);case">":return ds(r,e,s);case">=":return Rs(r,e,s);case"<":return gs(r,e,s);case"<=":return Cs(r,e,s);default:throw new TypeError(`Invalid operator: ${t}`)}};var Ct=Is;const Ss=b,As=z,{safeRe:K,t:Q}=W,Ns=(r,t)=>{if(r instanceof Ss)return r;if(typeof r=="number"&&(r=String(r)),typeof r!="string")return null;t=t||{};let e=null;if(!t.rtl)e=r.match(t.includePrerelease?K[Q.COERCEFULL]:K[Q.COERCE]);else{const o=t.includePrerelease?K[Q.COERCERTLFULL]:K[Q.COERCERTL];let n;for(;(n=o.exec(r))&&(!e||e.index+e[0].length!==r.length);)(!e||n.index+n[0].length!==e.index+e[0].length)&&(e=n),o.lastIndex=n.index+n[1].length+n[2].length;o.lastIndex=-1}if(e===null)return null;const s=e[2],c=e[3]||"0",l=e[4]||"0",u=t.includePrerelease&&e[5]?`-${e[5]}`:"",I=t.includePrerelease&&e[6]?`+${e[6]}`:"";return As(`${s}.${c}.${l}${u}${I}`,t)};var Os=Ns;class Ls{constructor(){this.max=1e3,this.map=new Map}get(t){const e=this.map.get(t);if(e!==void 0)return this.map.delete(t),this.map.set(t,e),e}delete(t){return this.map.delete(t)}set(t,e){if(!this.delete(t)&&e!==void 0){if(this.map.size>=this.max){const c=this.map.keys().next().value;this.delete(c)}this.map.set(t,e)}return this}}var vs=Ls,de,Ye;function G(){if(Ye)return de;Ye=1;const r=/\s+/g;class t{constructor(h,g){if(g=c(g),h instanceof t)return h.loose===!!g.loose&&h.includePrerelease===!!g.includePrerelease?h:new t(h.raw,g);if(h instanceof l)return this.raw=h.value,this.set=[[h]],this.formatted=void 0,this;if(this.options=g,this.loose=!!g.loose,this.includePrerelease=!!g.includePrerelease,this.raw=h.trim().replace(r," "),this.set=this.raw.split("||").map(m=>this.parseRange(m.trim())).filter(m=>m.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const m=this.set[0];if(this.set=this.set.filter(C=>!w(C[0])),this.set.length===0)this.set=[m];else if(this.set.length>1){for(const C of this.set)if(C.length===1&&O(C[0])){this.set=[C];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let h=0;h<this.set.length;h++){h>0&&(this.formatted+="||");const g=this.set[h];for(let m=0;m<g.length;m++)m>0&&(this.formatted+=" "),this.formatted+=g[m].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(h){const m=((this.options.includePrerelease&&p)|(this.options.loose&&R))+":"+h,C=s.get(m);if(C)return C;const d=this.options.loose,S=d?o[n.HYPHENRANGELOOSE]:o[n.HYPHENRANGE];h=h.replace(S,Ot(this.options.includePrerelease)),u("hyphen replace",h),h=h.replace(o[n.COMPARATORTRIM],i),u("comparator trim",h),h=h.replace(o[n.TILDETRIM],a),u("tilde trim",h),h=h.replace(o[n.CARETTRIM],E),u("caret trim",h);let N=h.split(" ").map(T=>x(T,this.options)).join(" ").split(/\s+/).map(T=>Nt(T,this.options));d&&(N=N.filter(T=>(u("loose invalid filter",T,this.options),!!T.match(o[n.COMPARATORLOOSE])))),u("range list",N);const A=new Map,v=N.map(T=>new l(T,this.options));for(const T of v){if(w(T))return[T];A.set(T.value,T)}A.size>1&&A.has("")&&A.delete("");const P=[...A.values()];return s.set(m,P),P}intersects(h,g){if(!(h instanceof t))throw new TypeError("a Range is required");return this.set.some(m=>y(m,g)&&h.set.some(C=>y(C,g)&&m.every(d=>C.every(S=>d.intersects(S,g)))))}test(h){if(!h)return!1;if(typeof h=="string")try{h=new I(h,this.options)}catch{return!1}for(let g=0;g<this.set.length;g++)if(Lt(this.set[g],h,this.options))return!0;return!1}}de=t;const e=vs,s=new e,c=Ne,l=le(),u=ae,I=b,{safeRe:o,t:n,comparatorTrimReplace:i,tildeTrimReplace:a,caretTrimReplace:E}=W,{FLAG_INCLUDE_PRERELEASE:p,FLAG_LOOSE:R}=oe,w=$=>$.value==="<0.0.0-0",O=$=>$.value==="",y=($,h)=>{let g=!0;const m=$.slice();let C=m.pop();for(;g&&m.length;)g=m.every(d=>C.intersects(d,h)),C=m.pop();return g},x=($,h)=>(u("comp",$,h),$=M($,h),u("caret",$),$=X($,h),u("tildes",$),$=Y($,h),u("xrange",$),$=At($,h),u("stars",$),$),L=$=>!$||$.toLowerCase()==="x"||$==="*",X=($,h)=>$.trim().split(/\s+/).map(g=>be(g,h)).join(" "),be=($,h)=>{const g=h.loose?o[n.TILDELOOSE]:o[n.TILDE];return $.replace(g,(m,C,d,S,N)=>{u("tilde",$,m,C,d,S,N);let A;return L(C)?A="":L(d)?A=`>=${C}.0.0 <${+C+1}.0.0-0`:L(S)?A=`>=${C}.${d}.0 <${C}.${+d+1}.0-0`:N?(u("replaceTilde pr",N),A=`>=${C}.${d}.${S}-${N} <${C}.${+d+1}.0-0`):A=`>=${C}.${d}.${S} <${C}.${+d+1}.0-0`,u("tilde return",A),A})},M=($,h)=>$.trim().split(/\s+/).map(g=>fe(g,h)).join(" "),fe=($,h)=>{u("caret",$,h);const g=h.loose?o[n.CARETLOOSE]:o[n.CARET],m=h.includePrerelease?"-0":"";return $.replace(g,(C,d,S,N,A)=>{u("caret",$,C,d,S,N,A);let v;return L(d)?v="":L(S)?v=`>=${d}.0.0${m} <${+d+1}.0.0-0`:L(N)?d==="0"?v=`>=${d}.${S}.0${m} <${d}.${+S+1}.0-0`:v=`>=${d}.${S}.0${m} <${+d+1}.0.0-0`:A?(u("replaceCaret pr",A),d==="0"?S==="0"?v=`>=${d}.${S}.${N}-${A} <${d}.${S}.${+N+1}-0`:v=`>=${d}.${S}.${N}-${A} <${d}.${+S+1}.0-0`:v=`>=${d}.${S}.${N}-${A} <${+d+1}.0.0-0`):(u("no pr"),d==="0"?S==="0"?v=`>=${d}.${S}.${N}${m} <${d}.${S}.${+N+1}-0`:v=`>=${d}.${S}.${N}${m} <${d}.${+S+1}.0-0`:v=`>=${d}.${S}.${N} <${+d+1}.0.0-0`),u("caret return",v),v})},Y=($,h)=>(u("replaceXRanges",$,h),$.split(/\s+/).map(g=>he(g,h)).join(" ")),he=($,h)=>{$=$.trim();const g=h.loose?o[n.XRANGELOOSE]:o[n.XRANGE];return $.replace(g,(m,C,d,S,N,A)=>{u("xRange",$,m,C,d,S,N,A);const v=L(d),P=v||L(S),T=P||L(N),k=T;return C==="="&&k&&(C=""),A=h.includePrerelease?"-0":"",v?C===">"||C==="<"?m="<0.0.0-0":m="*":C&&k?(P&&(S=0),N=0,C===">"?(C=">=",P?(d=+d+1,S=0,N=0):(S=+S+1,N=0)):C==="<="&&(C="<",P?d=+d+1:S=+S+1),C==="<"&&(A="-0"),m=`${C+d}.${S}.${N}${A}`):P?m=`>=${d}.0.0${A} <${+d+1}.0.0-0`:T&&(m=`>=${d}.${S}.0${A} <${d}.${+S+1}.0-0`),u("xRange return",m),m})},At=($,h)=>(u("replaceStars",$,h),$.trim().replace(o[n.STAR],"")),Nt=($,h)=>(u("replaceGTE0",$,h),$.trim().replace(o[h.includePrerelease?n.GTE0PRE:n.GTE0],"")),Ot=$=>(h,g,m,C,d,S,N,A,v,P,T,k)=>(L(m)?g="":L(C)?g=`>=${m}.0.0${$?"-0":""}`:L(d)?g=`>=${m}.${C}.0${$?"-0":""}`:S?g=`>=${g}`:g=`>=${g}${$?"-0":""}`,L(v)?A="":L(P)?A=`<${+v+1}.0.0-0`:L(T)?A=`<${v}.${+P+1}.0-0`:k?A=`<=${v}.${P}.${T}-${k}`:$?A=`<${v}.${P}.${+T+1}-0`:A=`<=${A}`,`${g} ${A}`.trim()),Lt=($,h,g)=>{for(let m=0;m<$.length;m++)if(!$[m].test(h))return!1;if(h.prerelease.length&&!g.includePrerelease){for(let m=0;m<$.length;m++)if(u($[m].semver),$[m].semver!==l.ANY&&$[m].semver.prerelease.length>0){const C=$[m].semver;if(C.major===h.major&&C.minor===h.minor&&C.patch===h.patch)return!0}return!1}return!0};return de}var Re,Je;function le(){if(Je)return Re;Je=1;const r=Symbol("SemVer ANY");class t{static get ANY(){return r}constructor(i,a){if(a=e(a),i instanceof t){if(i.loose===!!a.loose)return i;i=i.value}i=i.trim().split(/\s+/).join(" "),u("comparator",i,a),this.options=a,this.loose=!!a.loose,this.parse(i),this.semver===r?this.value="":this.value=this.operator+this.semver.version,u("comp",this)}parse(i){const a=this.options.loose?s[c.COMPARATORLOOSE]:s[c.COMPARATOR],E=i.match(a);if(!E)throw new TypeError(`Invalid comparator: ${i}`);this.operator=E[1]!==void 0?E[1]:"",this.operator==="="&&(this.operator=""),E[2]?this.semver=new I(E[2],this.options.loose):this.semver=r}toString(){return this.value}test(i){if(u("Comparator.test",i,this.options.loose),this.semver===r||i===r)return!0;if(typeof i=="string")try{i=new I(i,this.options)}catch{return!1}return l(i,this.operator,this.semver,this.options)}intersects(i,a){if(!(i instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new o(i.value,a).test(this.value):i.operator===""?i.value===""?!0:new o(this.value,a).test(i.semver):(a=e(a),a.includePrerelease&&(this.value==="<0.0.0-0"||i.value==="<0.0.0-0")||!a.includePrerelease&&(this.value.startsWith("<0.0.0")||i.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&i.operator.startsWith(">")||this.operator.startsWith("<")&&i.operator.startsWith("<")||this.semver.version===i.semver.version&&this.operator.includes("=")&&i.operator.includes("=")||l(this.semver,"<",i.semver,a)&&this.operator.startsWith(">")&&i.operator.startsWith("<")||l(this.semver,">",i.semver,a)&&this.operator.startsWith("<")&&i.operator.startsWith(">")))}}Re=t;const e=Ne,{safeRe:s,t:c}=W,l=Ct,u=ae,I=b,o=G();return Re}const ws=G(),Ts=(r,t,e)=>{try{t=new ws(t,e)}catch{return!1}return t.test(r)};var ue=Ts;const ys=G(),Fs=(r,t)=>new ys(r,t).set.map(e=>e.map(s=>s.value).join(" ").trim().split(" "));var bs=Fs;const Ps=b,_s=G(),js=(r,t,e)=>{let s=null,c=null,l=null;try{l=new _s(t,e)}catch{return null}return r.forEach(u=>{l.test(u)&&(!s||c.compare(u)===-1)&&(s=u,c=new Ps(s,e))}),s};var Ds=js;const Gs=b,Us=G(),xs=(r,t,e)=>{let s=null,c=null,l=null;try{l=new Us(t,e)}catch{return null}return r.forEach(u=>{l.test(u)&&(!s||c.compare(u)===1)&&(s=u,c=new Gs(s,e))}),s};var Xs=xs;const ge=b,Vs=G(),Ze=ce,zs=(r,t)=>{r=new Vs(r,t);let e=new ge("0.0.0");if(r.test(e)||(e=new ge("0.0.0-0"),r.test(e)))return e;e=null;for(let s=0;s<r.set.length;++s){const c=r.set[s];let l=null;c.forEach(u=>{const I=new ge(u.semver.version);switch(u.operator){case">":I.prerelease.length===0?I.patch++:I.prerelease.push(0),I.raw=I.format();case"":case">=":(!l||Ze(I,l))&&(l=I);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${u.operator}`)}}),l&&(!e||Ze(e,l))&&(e=l)}return e&&r.test(e)?e:null};var Ms=zs;const ks=G(),Hs=(r,t)=>{try{return new ks(r,t).range||"*"}catch{return null}};var qs=Hs;const Bs=b,It=le(),{ANY:Ws}=It,Ys=G(),Js=ue,Ke=ce,Qe=Le,Zs=we,Ks=ve,Qs=(r,t,e,s)=>{r=new Bs(r,s),t=new Ys(t,s);let c,l,u,I,o;switch(e){case">":c=Ke,l=Zs,u=Qe,I=">",o=">=";break;case"<":c=Qe,l=Ks,u=Ke,I="<",o="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Js(r,t,s))return!1;for(let n=0;n<t.set.length;++n){const i=t.set[n];let a=null,E=null;if(i.forEach(p=>{p.semver===Ws&&(p=new It(">=0.0.0")),a=a||p,E=E||p,c(p.semver,a.semver,s)?a=p:u(p.semver,E.semver,s)&&(E=p)}),a.operator===I||a.operator===o||(!E.operator||E.operator===I)&&l(r,E.semver))return!1;if(E.operator===o&&u(r,E.semver))return!1}return!0};var Te=Qs;const en=Te,tn=(r,t,e)=>en(r,t,">",e);var rn=tn;const sn=Te,nn=(r,t,e)=>sn(r,t,"<",e);var on=nn;const et=G(),an=(r,t,e)=>(r=new et(r,e),t=new et(t,e),r.intersects(t,e));var cn=an;const ln=ue,un=D;var fn=(r,t,e)=>{const s=[];let c=null,l=null;const u=r.sort((i,a)=>un(i,a,e));for(const i of u)ln(i,t,e)?(l=i,c||(c=i)):(l&&s.push([c,l]),l=null,c=null);c&&s.push([c,null]);const I=[];for(const[i,a]of s)i===a?I.push(i):!a&&i===u[0]?I.push("*"):a?i===u[0]?I.push(`<=${a}`):I.push(`${i} - ${a}`):I.push(`>=${i}`);const o=I.join(" || "),n=typeof t.raw=="string"?t.raw:String(t);return o.length<n.length?o:t};const tt=G(),ye=le(),{ANY:Ce}=ye,H=ue,Fe=D,hn=(r,t,e={})=>{if(r===t)return!0;r=new tt(r,e),t=new tt(t,e);let s=!1;e:for(const c of r.set){for(const l of t.set){const u=pn(c,l,e);if(s=s||u!==null,u)continue e}if(s)return!1}return!0},En=[new ye(">=0.0.0-0")],rt=[new ye(">=0.0.0")],pn=(r,t,e)=>{if(r===t)return!0;if(r.length===1&&r[0].semver===Ce){if(t.length===1&&t[0].semver===Ce)return!0;e.includePrerelease?r=En:r=rt}if(t.length===1&&t[0].semver===Ce){if(e.includePrerelease)return!0;t=rt}const s=new Set;let c,l;for(const p of r)p.operator===">"||p.operator===">="?c=st(c,p,e):p.operator==="<"||p.operator==="<="?l=nt(l,p,e):s.add(p.semver);if(s.size>1)return null;let u;if(c&&l){if(u=Fe(c.semver,l.semver,e),u>0)return null;if(u===0&&(c.operator!==">="||l.operator!=="<="))return null}for(const p of s){if(c&&!H(p,String(c),e)||l&&!H(p,String(l),e))return null;for(const R of t)if(!H(p,String(R),e))return!1;return!0}let I,o,n,i,a=l&&!e.includePrerelease&&l.semver.prerelease.length?l.semver:!1,E=c&&!e.includePrerelease&&c.semver.prerelease.length?c.semver:!1;a&&a.prerelease.length===1&&l.operator==="<"&&a.prerelease[0]===0&&(a=!1);for(const p of t){if(i=i||p.operator===">"||p.operator===">=",n=n||p.operator==="<"||p.operator==="<=",c){if(E&&p.semver.prerelease&&p.semver.prerelease.length&&p.semver.major===E.major&&p.semver.minor===E.minor&&p.semver.patch===E.patch&&(E=!1),p.operator===">"||p.operator===">="){if(I=st(c,p,e),I===p&&I!==c)return!1}else if(c.operator===">="&&!H(c.semver,String(p),e))return!1}if(l){if(a&&p.semver.prerelease&&p.semver.prerelease.length&&p.semver.major===a.major&&p.semver.minor===a.minor&&p.semver.patch===a.patch&&(a=!1),p.operator==="<"||p.operator==="<="){if(o=nt(l,p,e),o===p&&o!==l)return!1}else if(l.operator==="<="&&!H(l.semver,String(p),e))return!1}if(!p.operator&&(l||c)&&u!==0)return!1}return!(c&&n&&!l&&u!==0||l&&i&&!c&&u!==0||E||a)},st=(r,t,e)=>{if(!r)return t;const s=Fe(r.semver,t.semver,e);return s>0?r:s<0||t.operator===">"&&r.operator===">="?t:r},nt=(r,t,e)=>{if(!r)return t;const s=Fe(r.semver,t.semver,e);return s<0?r:s>0||t.operator==="<"&&r.operator==="<="?t:r};var $n=hn;const Ie=W,it=oe,mn=b,ot=dt,dn=z,Rn=Ar,gn=Lr,Cn=wr,In=yr,Sn=Pr,An=Dr,Nn=xr,On=zr,Ln=D,vn=qr,wn=Yr,Tn=Oe,yn=Qr,Fn=rs,bn=ce,Pn=Le,_n=Rt,jn=gt,Dn=ve,Gn=we,Un=Ct,xn=Os,Xn=le(),Vn=G(),zn=ue,Mn=bs,kn=Ds,Hn=Xs,qn=Ms,Bn=qs,Wn=Te,Yn=rn,Jn=on,Zn=cn,Kn=fn,Qn=$n;var St={parse:dn,valid:Rn,clean:gn,inc:Cn,diff:In,major:Sn,minor:An,patch:Nn,prerelease:On,compare:Ln,rcompare:vn,compareLoose:wn,compareBuild:Tn,sort:yn,rsort:Fn,gt:bn,lt:Pn,eq:_n,neq:jn,gte:Dn,lte:Gn,cmp:Un,coerce:xn,Comparator:Xn,Range:Vn,satisfies:zn,toComparators:Mn,maxSatisfying:kn,minSatisfying:Hn,minVersion:qn,validRange:Bn,outside:Wn,gtr:Yn,ltr:Jn,intersects:Zn,simplifyRange:Kn,subset:Qn,SemVer:mn,re:Ie.re,src:Ie.src,tokens:Ie.t,SEMVER_SPEC_VERSION:it.SEMVER_SPEC_VERSION,RELEASE_TYPES:it.RELEASE_TYPES,compareIdentifiers:ot.compareIdentifiers,rcompareIdentifiers:ot.rcompareIdentifiers};f.refine(f.string(),"Version",r=>St.valid(r)===null?`Expected SemVer version, got "${r}"`:!0);f.refine(f.string(),"Version range",r=>St.validRange(r)===null?`Expected SemVer range, got "${r}"`:!0);exports.assert=se;exports.hasProperty=at;