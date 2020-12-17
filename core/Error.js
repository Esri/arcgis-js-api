/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./lang","./Logger","./Message"],(function(e,t,r,s){"use strict";let i=function(s){function i(t,r,n){var a;return a=s.call(this,t,r,n)||this,e._assertThisInitialized(a)instanceof i?a:new i(t,r,n)||e._assertThisInitialized(a)}return e._inheritsLoose(i,s),i.prototype.toJSON=function(){if(null!=this.details)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,((e,r)=>{if(r&&"object"==typeof r&&"function"==typeof r.toJSON)return r;try{return t.clone(r)}catch(e){return"[object]"}})))}}catch(e){throw r.getLogger("esri.core.Error").error(e),e}return{name:this.name,message:this.message,details:this.details}},i.fromJSON=function(e){return new i(e.name,e.message,e.details)},i}(s);return i.prototype.type="error",i}));
