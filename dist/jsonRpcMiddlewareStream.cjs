"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("./browser-DjQM3S9H.cjs"),d=require("./createStreamMiddleware-Ciy0ZHFH.cjs");function u(e){if(!(e!=null&&e.engine))throw new Error("Missing engine parameter!");const{engine:r}=e,n=new c.browserExports.Duplex({objectMode:!0,read:()=>{},write:i});return r.on&&r.on("notification",t=>{n.push(t)}),n;function i(t,g,a){r.handle(t,(s,o)=>{n.push(o)}),a()}}exports.createStreamMiddleware=d.createStreamMiddleware;exports.createEngineStream=u;
