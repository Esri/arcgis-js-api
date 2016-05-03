// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/Deferred"],function(t){var e=function(t,e,o){this._parentModule=t,this._worker=e,this._connection=o,this.msgCount=0,this.outgoingJobs={},this.incomingJobs={}};return e.prototype.invoke=function(e,o,n,i){var s=++this.msgCount,r=new t(function(t){this._worker.postMessage({type:"<cancel>",id:s,connection:i,data:{reason:t}}),this.outgoingJobs[s]&&delete this.outgoingJobs[s]}.bind(this));return this.outgoingJobs[s]=r,this._worker.postMessage({type:e,id:s,connection:i,data:o},n),r.promise},e.prototype.message=function(t){if(t&&t.data){var e=t.data.type;if(e){var o=t.data,n=t.data.id,i=t.data.connection;if("<response>"===e&&n){var s=this.outgoingJobs[n];if(!s)return;delete this.outgoingJobs[n],o.error?s.reject(o.error):s.resolve(o.data)}else if("<cancel>"===e&&n){var r=this.incomingJobs[n];r&&r.cancel(o.data.reason)}else{var a=this._parentModule[e];if("function"==typeof a){var c=a.call(this._parentModule,o.data,this._connection);this.incomingJobs[n]=c,c.then(function(t){this._worker.postMessage({type:"<response>",id:n,connection:i,data:t.data},t.buffers)}.bind(this)).otherwise(function(t){t||(t="Error encountered at method "+e),t.dojoType&&"cancel"===t.dojoType||this._worker.postMessage({type:"<response>",id:n,connection:i,error:t})}.bind(this)).always(function(){delete this.incomingJobs[n]}.bind(this))}}}}},e});