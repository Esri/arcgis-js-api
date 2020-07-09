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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../core/maybe","../../geometry/support/jsonUtils","../../geometry/support/scaleUtils","../../layers/support/layerSourceUtils","../../layers/support/layerUtils"],(function(e,r,t,i,n,a,s){Object.defineProperty(r,"__esModule",{value:!0});var o=function(e){return e.spatialReference.wkid||JSON.stringify(e.spatialReference)};r.identifyToIdentifyRESTParameters=function(e,r){var l=e.toJSON(),f=l.dpi,y=l.dynamicLayers,u=l.geometry,m=l.geometryPrecision,p=l.height,c=l.layerDefinitions,d=l.layerIds,g=l.layerOption,x=l.layerTimeOptions,O=l.mapExtent,v=l.maxAllowableOffset,S=l.returnFieldName,h=l.returnGeometry,N=l.returnUnformattedValues,R=l.returnZ,J=l.spatialReference,E=l.timeExtent,T=l.tolerance,w=l.width,U=r&&t.isSome(r.geometry)?r.geometry:null,b={geometryPrecision:m,maxAllowableOffset:v,returnFieldName:S,returnGeometry:h,returnUnformattedValues:N,returnZ:R,tolerance:T},L=U&&U.toJSON()||u;if(b.imageDisplay=w+","+p+","+f,L&&(delete L.spatialReference,b.geometry=JSON.stringify(L),b.geometryType=i.getJsonType(L)),J?b.sr=J.wkid||JSON.stringify(J):L&&L.spatialReference?b.sr=o(L):O&&O.spatialReference&&(b.sr=o(O)),b.time=E?E.join(","):null,O){var j=O.xmin,D=O.ymin,P=O.xmax,F=O.ymax;b.mapExtent=j+","+D+","+P+","+F}if(b.layers=g,d&&(b.layers+=":"+d.join(",")),c){for(var I=[],k=0;k<c.length;k++){var A=c[k];I[A.id]=A.definitionExpression}b.layerDefs=s.serializeLayerDefinitions(I)}if(y&&y.length){var G=[],V={extent:O,width:w,spatialReference:O.spatialReference},Z=n.getScale(V),_=s.getLayersForScale(Z,y),q=function(e){var r=y[e],t=r.id;if(!r.subLayerIds&&d&&-1!==d.indexOf(t)&&-1!==_.indexOf(t)){var i={id:t};i.source=r.source&&a.sourceToJSON(r.source);var n=null;if(c&&c.length){var s=c.filter((function(e){return e.id===t}))[0];n=s&&s.definitionExpression}n&&(i.definitionExpression=n);var o=void 0;x&&x[t]&&(o=x[t]),o&&(i.layerTimeOptions=o),G.push(i)}};for(k=0;k<y.length;k++)q(k);var z=JSON.stringify(G);"[]"===z&&(z="[{}]"),b.dynamicLayers=z}return b}}));