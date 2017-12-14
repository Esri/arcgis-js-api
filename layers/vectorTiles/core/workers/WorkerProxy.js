// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../Error"],function(e,t,o,n){var s=function(){function e(e,t,o){this.parentModule=e,this.worker=t,this.connection=o,this.msgCount=0,this.outgoingJobs=new Map,this.incomingJobs=new Map}return e.prototype.invoke=function(e,t,n,s){var i=this,r=++this.msgCount,a=new o(function(e){i.worker.postMessage({type:"<cancel>",id:r,connection:s,data:{reason:e}}),i.outgoingJobs.has(r)&&i.outgoingJobs["delete"](r)});return this.outgoingJobs.set(r,a),this.worker.postMessage({type:e,id:r,connection:s,data:t},n),a.promise},e.prototype.message=function(e){var t=this;if(e&&e.data){var o=e.data.type;if(o){var s=e.data,i=e.data.id,r=e.data.connection;if("<response>"===o&&i){var a=this.outgoingJobs.get(i);if(!a)return;this.outgoingJobs["delete"](i),s.error?a.reject(n.fromJSON(s.error)):a.resolve(s.data)}else if("<cancel>"===o&&i){var c=this.incomingJobs.get(i);c&&c.cancel(s.data.reason||"cancel")}else{var d=this.parentModule[o];if("function"==typeof d){var u=d.call(this.parentModule,s.data,this.connection);this.incomingJobs.set(i,u),u.then(function(e){var o=e&&null!=e.data?e.data:e,n=e&&e.buffers||[];t.worker.postMessage({type:"<response>",id:i,connection:r,data:o},n)}).otherwise(function(e){e||(e={message:"Error encountered at method "+o}),t.worker.postMessage({type:"<response>",id:i,connection:r,data:null,error:{message:e.message,stack:e.stack}})}).always(function(){t.incomingJobs["delete"](i)})}}}}},e}();return s});