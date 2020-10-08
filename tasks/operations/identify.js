// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/maybe","../../geometry/support/jsonUtils","../../geometry/support/scaleUtils","../../layers/support/layerUtils"],(function(e,r,i,t,n,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.identifyToIdentifyRESTParameters=void 0;var s=function(e){return e.spatialReference.wkid||JSON.stringify(e.spatialReference)};r.identifyToIdentifyRESTParameters=function(e,r){var o=e.toJSON(),l=o.dpi,f=o.dynamicLayers,y=o.geometry,m=o.geometryPrecision,d=o.height,u=o.layerDefinitions,p=o.layerIds,c=o.layerOption,g=o.layerTimeOptions,x=o.mapExtent,v=o.maxAllowableOffset,O=o.returnFieldName,S=o.returnGeometry,R=o.returnUnformattedValues,h=o.returnZ,E=o.spatialReference,N=o.timeExtent,T=o.tolerance,J=o.width,w=r&&i.isSome(r.geometry)?r.geometry:null,b={geometryPrecision:m,maxAllowableOffset:v,returnFieldName:O,returnGeometry:S,returnUnformattedValues:R,returnZ:h,tolerance:T},L=w&&w.toJSON()||y;if(b.imageDisplay=J+","+d+","+l,L&&(delete L.spatialReference,b.geometry=JSON.stringify(L),b.geometryType=t.getJsonType(L)),E?b.sr=E.wkid||JSON.stringify(E):L&&L.spatialReference?b.sr=s(L):x&&x.spatialReference&&(b.sr=s(x)),b.time=N?N.join(","):null,x){var P=x.xmin,U=x.ymin,j=x.xmax,D=x.ymax;b.mapExtent=P+","+U+","+j+","+D}if(b.layers=c,p&&(b.layers+=":"+p.join(",")),u){for(var I=[],F=0;F<u.length;F++){var k=u[F];I[k.id]=k.definitionExpression}b.layerDefs=a.serializeLayerDefinitions(I)}if(f&&f.length){var A=[],G={extent:x,width:J,spatialReference:x.spatialReference},V=n.getScale(G),Z=a.getLayersForScale(V,f),_=function(e){var r=f[e],i=r.id;if(!r.subLayerIds&&p&&-1!==p.indexOf(i)&&-1!==Z.indexOf(i)){var t={id:i};t.source=r.source;var n=null;if(u&&u.length){var a=u.filter((function(e){return e.id===i}))[0];n=a&&a.definitionExpression}n&&(t.definitionExpression=n);var s=void 0;g&&g[i]&&(s=g[i]),s&&(t.layerTimeOptions=s),A.push(t)}};for(F=0;F<f.length;F++)_(F);var q=JSON.stringify(A);"[]"===q&&(q="[{}]"),b.dynamicLayers=q}return b}}));