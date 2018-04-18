// COPYRIGHT © 2018 Esri
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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators"],function(e,t,r,n,o,a){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name=null,t.defaultPattern=null,t.conversionInfo=null,t.coordinateSegments=null,t}return r(t,e),Object.defineProperty(t.prototype,"currentPattern",{get:function(){return this._get("currentPattern")||this._get("defaultPattern")},set:function(e){this._set("currentPattern",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_additionalCharactersPattern",{get:function(){var e=this.get("coordinateSegments");if(!e)return null;var t=e.map(function(e){return e.alias}),r=this.currentPattern.replace(new RegExp('["nsew'+t.join()+"]","gi"),"").replace(/\ /g,"");return new RegExp("["+r+"]","g")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasDisplayProperties",{get:function(){return!(!this.defaultPattern||!this.coordinateSegments)},enumerable:!0,configurable:!0}),t.prototype.convert=function(e){var t=this.get("conversionInfo.convert");return t&&t(e)},t.prototype.convertDeferred=function(e){var t=this.get("conversionInfo.convertDeferred");return t&&t(e)},t.prototype.getDisplayCoordinate=function(e){if(!e)return null;if(!this.coordinateSegments||!this.currentPattern)return e;for(var t=this.currentPattern,r=this._getSegmentMatches(e,!1),n=this.coordinateSegments.length-1;n>=0;n--){var o=this.coordinateSegments[n];t=t.replace(o.alias,r[n])}return t},t.prototype.reverseConvert=function(e){var t=this.get("conversionInfo.reverseConvert");return t&&t(e)},t.prototype.parseUserInput=function(e){var t=this.defaultPattern.replace(this._additionalCharactersPattern,"");e=e.replace(this._additionalCharactersPattern,"");for(var r=this._getSegmentMatches(e,!0),n=this.coordinateSegments.length-1;n>=0;n--){var o=this.coordinateSegments[n];t=t.replace(o.alias,r[n])}return t},t.prototype._getSegmentMatches=function(e,t){for(var r=[],n=0;n<this.coordinateSegments.length;n++){var o=this.coordinateSegments[n],a=e.match(o.searchPattern);if(a){var i=a[0];if(e=e.replace(i,"").trim(),o.substitution){var s=t?o.substitution.input(i):o.substitution.output(i);s&&(i=s)}r.push(i)}else r.push("")}return r},n([a.property()],t.prototype,"name",void 0),n([a.property()],t.prototype,"currentPattern",null),n([a.property()],t.prototype,"defaultPattern",void 0),n([a.property({readOnly:!0,dependsOn:["currentPattern"]})],t.prototype,"_additionalCharactersPattern",null),n([a.property()],t.prototype,"conversionInfo",void 0),n([a.property()],t.prototype,"coordinateSegments",void 0),n([a.property({readOnly:!0,dependsOn:["defaultPattern","coordinateSegments"]})],t.prototype,"hasDisplayProperties",null),t=n([a.subclass("esri.widgets.CoordinateConversion.support.Format")],t)}(a.declared(o))});