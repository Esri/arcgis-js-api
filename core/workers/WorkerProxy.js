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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../Error"],function(e,t,o,n){var s=function(){function e(e,t,o){this.parentModule=e,this.worker=t,this.connection=o,this.msgCount=0,this.outgoingJobs=new Map,this.incomingJobs=new Map}return e.prototype.invoke=function(e,t,n,s){var i=this,a=++this.msgCount,r=new o(function(e){i.worker.postMessage({type:"<cancel>",id:a,connection:s,data:{reason:e}}),i.outgoingJobs.has(a)&&i.outgoingJobs["delete"](a)});return this.outgoingJobs.set(a,r),this.worker.postMessage({type:e,id:a,connection:s,data:t},n),r.promise},e.prototype.message=function(e){var t=this;if(e&&e.data){var o=e.data.type;if(o){var s=e.data,i=e.data.id,a=e.data.connection;if("<response>"===o&&i){var r=this.outgoingJobs.get(i);if(!r)return;this.outgoingJobs["delete"](i),s.error?r.reject(n.fromJSON(JSON.parse(s.error))):r.resolve(s.data)}else if("<cancel>"===o&&i){var c=this.incomingJobs.get(i);c&&c.cancel(s.data.reason||"cancel")}else{var d=this.parentModule[o];if("function"==typeof d){var g=d.call(this.parentModule,s.data,this.connection);this.incomingJobs.set(i,g),g.then(function(e){var o=e&&null!=e.data?e.data:e,n=e&&e.buffers||[];t.worker.postMessage({type:"<response>",id:i,connection:a,data:o},n)}).otherwise(function(e){e||(e={message:"Error encountered at method "+o}),t.worker.postMessage({type:"<response>",id:i,connection:a,data:null,error:e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details,stack:e.stack})})}).always(function(){t.incomingJobs["delete"](i)})}}}}},e}();return s});