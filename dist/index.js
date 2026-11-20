"use strict";var g=function(a,t){return function(){try{return t||a((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}}};var p=g(function(C,m){"use strict";var l=require("@stdlib/assert-is-plain-object"),o=require("@stdlib/assert-has-own-property"),f=require("@stdlib/assert-is-ndarray-like"),q=require("@stdlib/assert-is-integer"),h=require("@stdlib/ndarray-base-assert-is-mostly-safe-data-type-cast"),w=require("@stdlib/ndarray-base-assert-is-order"),c=require("@stdlib/ndarray-shape"),v=require("@stdlib/ndarray-order"),O=require("@stdlib/ndarray-strides"),b=require("@stdlib/ndarray-base-data-buffer"),S=require("@stdlib/ndarray-base-dtype"),T=require("@stdlib/ndarray-base-shape2strides"),E=require("@stdlib/ndarray-base-strides2order"),F=require("@stdlib/ndarray-base-flatten-shape-from"),j=require("@stdlib/ndarray-base-assign"),L=require("@stdlib/ndarray-base-ctor"),M=require("@stdlib/ndarray-empty-like"),n=require("@stdlib/string-format"),y="row-major",R="column-major";function V(a,t,r){var u,e,i,d,s;if(!f(a))throw new TypeError(n("invalid argument. First argument must be an ndarray. Value: `%s`.",a));if(!q(t))throw new TypeError(n("invalid argument. Second argument must be an integer. Value: `%s`.",t));if(i=c(a),i.length<1)throw new TypeError(n("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",i.length));if(e={order:y,dtype:S(a)},arguments.length>2){if(!l(r))throw new TypeError(n("invalid argument. Options argument must be an object. Value: `%s`.",r));if(o(r,"order"))if(r.order==="any")d=E(O(a)),d===1?e.order=y:d===2?e.order=R:e.order=v(a);else if(r.order==="same")e.order=v(a);else if(w(r.order))e.order=r.order;else throw new TypeError(n("invalid option. `%s` option must be a recognized order. Option: `%s`.","order",r.order));if(o(r,"dtype")){if(!h(e.dtype,r.dtype))throw new TypeError(n("invalid option. First argument cannot be safely cast to the specified data type. Input data type: %s. Option: `%s`.",String(e.dtype),String(r.dtype)));e.dtype=r.dtype}}return s=M(a,{shape:F(i,t),order:e.order,dtype:e.dtype}),u=new L(e.dtype,b(s),i,T(i,e.order),0,e.order),j([a,u]),s}m.exports=V});var k=p();module.exports=k;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
