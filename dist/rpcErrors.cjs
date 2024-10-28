"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./classes-6zjC54GF.cjs"),a={parse:r=>t(e.errorCodes.rpc.parse,r),invalidRequest:r=>t(e.errorCodes.rpc.invalidRequest,r),invalidParams:r=>t(e.errorCodes.rpc.invalidParams,r),methodNotFound:r=>t(e.errorCodes.rpc.methodNotFound,r),internal:r=>t(e.errorCodes.rpc.internal,r),server:r=>{if(!r||typeof r!="object"||Array.isArray(r))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:o}=r;if(!Number.isInteger(o)||o>-32005||o<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return t(o,r)},invalidInput:r=>t(e.errorCodes.rpc.invalidInput,r),resourceNotFound:r=>t(e.errorCodes.rpc.resourceNotFound,r),resourceUnavailable:r=>t(e.errorCodes.rpc.resourceUnavailable,r),transactionRejected:r=>t(e.errorCodes.rpc.transactionRejected,r),methodNotSupported:r=>t(e.errorCodes.rpc.methodNotSupported,r),limitExceeded:r=>t(e.errorCodes.rpc.limitExceeded,r)},u={userRejectedRequest:r=>d(e.errorCodes.provider.userRejectedRequest,r),unauthorized:r=>d(e.errorCodes.provider.unauthorized,r),unsupportedMethod:r=>d(e.errorCodes.provider.unsupportedMethod,r),disconnected:r=>d(e.errorCodes.provider.disconnected,r),chainDisconnected:r=>d(e.errorCodes.provider.chainDisconnected,r),custom:r=>{if(!r||typeof r!="object"||Array.isArray(r))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:o,message:s,data:n}=r;if(!s||typeof s!="string")throw new Error('"message" must be a nonempty string');return new e.EthereumProviderError(o,s,n)}};function t(r,o){const[s,n]=i(o);return new e.JsonRpcError(r,s??e.getMessageFromCode(r),n)}function d(r,o){const[s,n]=i(o);return new e.EthereumProviderError(r,s??e.getMessageFromCode(r),n)}function i(r){if(r){if(typeof r=="string")return[r];if(typeof r=="object"&&!Array.isArray(r)){const{message:o,data:s}=r;if(o&&typeof o!="string")throw new Error("Must specify string message.");return[o??void 0,s]}}return[]}exports.EthereumProviderError=e.EthereumProviderError;exports.JsonRpcError=e.JsonRpcError;exports.dataHasCause=e.dataHasCause;exports.errorCodes=e.errorCodes;exports.getMessageFromCode=e.getMessageFromCode;exports.serializeCause=e.serializeCause;exports.serializeError=e.serializeError;exports.providerErrors=u;exports.rpcErrors=a;
