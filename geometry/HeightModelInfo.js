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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/kebabDictionary","../core/accessorSupport/decorators","./support/scaleUtils"],function(e,r,t,o,i,a,n,s){var l=a({gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),d=a({meter:"meter",foot:"foot",foot_us:"foot-us",foot_clarke:"foot-clarke",yard_clarke:"yard-clarke",link_clarke:"link-clarke",yard_sears:"yard-sears",foot_sears:"foot-sears",chain_sears:"chain-sears",chain_benoit_1895_b:"chain-benoit-1895-b",yard_indian:"yard-indian",yard_indian_1937:"yard-indian-1937",foot_gold_coast:"foot-gold-coast",chain_sears_1922_truncated:"chain-sears-1922-truncated","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),c=p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.ellipsoid=null,r}return t(r,e),r.prototype.clone=function(){return new p({heightModel:this.heightModel,heightUnit:this.heightUnit,ellipsoid:this.ellipsoid})},r.deriveUnitFromSR=function(e,r){var t=e.clone();return t.heightUnit=s.getVerticalUnitStringForSR(r),t},r.fromJSON=function(e){if(!e)return null;var r=new p;return r.read(e),r},r}(n.declared(i));o([n.property({json:{read:l.read,write:l.write}})],c.prototype,"heightModel",void 0),o([n.property({json:{read:d.read,write:d.write}})],c.prototype,"heightUnit",void 0),o([n.property({json:{write:!0}})],c.prototype,"ellipsoid",void 0),c=p=o([n.subclass("esri.HeightModelInfo")],c);var p;return c});