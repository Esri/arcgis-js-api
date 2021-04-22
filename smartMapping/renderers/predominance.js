/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../core/Error","../../intl/messages","../../renderers/support/AuthoringInfoVisualVariable","../../renderers/support/AuthoringInfo","../../renderers/visualVariables/OpacityVariable","../../renderers/support/numberUtils","../statistics/support/predominanceUtils","../support/adapters/support/layerUtils","../statistics/summaryStatistics","../heuristics/outline","./support/utils","./size","./type","../statistics/predominantCategories","../../chunks/predominance"],(function(e,a,i,n,s,l,r,o,t,p,m,d,u,c,y,b,g){"use strict";async function f(e){if(!(e&&e.layer&&e.view&&e.fields&&e.fields.length))throw new i("predominance-renderer:missing-parameters","'layer', 'view' and 'fields' parameters are required");if(e.fields.length<2)throw new i("predominance-renderer:invalid-parameters","Minimum 2 fields are required");if(e.fields.length>10)throw new i("predominance-renderer:invalid-parameters","Maximum 10 fields are supported");const n={...e};n.symbolType=n.symbolType||"2d",n.defaultSymbolEnabled=null==n.defaultSymbolEnabled||n.defaultSymbolEnabled,n.includeOpacityVariable=e.includeOpacityVariable||!1,n.includeSizeVariable=e.includeSizeVariable||!1,n.sortBy=null==n.sortBy?"count":n.sortBy;const s=[0,2,1,3],l=p.createLayerAdapter(n.layer,s);if(n.layer=l,!l)throw new i("predominance-renderer:invalid-parameters","'layer' must be one of these types: "+p.getLayerTypeLabels(s).join(", "));const r=a.isSome(n.signal)?{signal:n.signal}:null;await l.load(r);const o=l.geometryType,t=n.symbolType.indexOf("3d")>-1;if(n.outlineOptimizationEnabled="polygon"===o&&n.outlineOptimizationEnabled,n.includeSizeVariable||(n.sizeOptimizationEnabled=("point"===o||"multipoint"===o||"polyline"===o)&&n.sizeOptimizationEnabled),"mesh"===o)n.symbolType="3d-volumetric",n.colorMixMode=n.colorMixMode||"replace",n.edgesType=n.edgesType||"none",n.sizeOptimizationEnabled=!1;else{if(t&&("polyline"===o||"polygon"===o))throw new i("predominance-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(n.symbolType.indexOf("3d-volumetric")>-1&&(!n.view||"3d"!==n.view.type))throw new i("predominance-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const m=n.fields.map((e=>e.name)),d=u.verifyBasicFieldValidity(l,m,"predominance-renderer:invalid-parameters");if(d)throw d;return n}async function h(e){let i=e.predominanceScheme,n=null,s=null;const l=await u.getBasemapInfo(e.basemap,e.view);if(n=a.isSome(l.basemapId)?l.basemapId:null,s=a.isSome(l.basemapTheme)?l.basemapTheme:null,i)return{scheme:g.cloneScheme(i),basemapId:n,basemapTheme:s};const r=g.getSchemes({basemap:n,basemapTheme:s,geometryType:e.geometryType,numColors:e.numColors,theme:e.theme,worldScale:e.worldScale,view:e.view});return r&&(i=r.primaryScheme,n=r.basemapId,s=r.basemapTheme),{scheme:i,basemapId:n,basemapTheme:s}}async function v(e,a,i,s){const r=await n.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),o=e.layer,t={layer:e.layer,view:e.view,signal:e.signal},[p,m]=await Promise.all([b({layer:o,fields:s,view:e.view,signal:e.signal}),e.outlineOptimizationEnabled?d(t):null]);let c=p;p&&p.predominantCategoryInfos||(c={predominantCategoryInfos:s.map((e=>({value:e,count:0})))});const g=m&&m.opacity,f=await y.createRenderer({layer:o,basemap:e.basemap,valueExpression:a.valueExpression,valueExpressionTitle:r.predominantCategory,numTypes:-1,defaultSymbolEnabled:e.defaultSymbolEnabled,sortBy:e.sortBy,typeScheme:i,statistics:{uniqueValueInfos:c.predominantCategoryInfos},legendOptions:e.legendOptions,outlineOptimizationEnabled:!1,sizeOptimizationEnabled:(!e.includeSizeVariable||!e.sizeOptimizationEnabled)&&e.sizeOptimizationEnabled,symbolType:e.symbolType,colorMixMode:e.colorMixMode,edgesType:e.edgesType,view:e.view,signal:e.signal}),{renderer:h,basemapId:v,basemapTheme:w,uniqueValueInfos:S,excludedUniqueValueInfos:V}=f,z=h.uniqueValueInfos,T={};for(const n of e.fields){const e=o.getField(n.name);T[e.name]=n.label||e&&e.alias||n.name}if(z.forEach(((e,a)=>{const i=T[e.value];e.label=i,S[a].label=i})),e.includeSizeVariable){let a=o.geometryType,n=null;if("polygon"===a){const s=i.sizeScheme,l=s.background;h.backgroundFillSymbol=u.createSymbol(a,{type:e.symbolType,color:l.color,outline:u.getSymbolOutlineFromScheme(l,a,g)}),n=s.marker.size,a="point"}else if("polyline"===a){n=i.width}else{n=i.size}const s=u.createColors(i.colors,z.length);z.forEach(((l,r)=>{const o=u.createSymbol(a,{type:e.symbolType,color:s[r],size:n,outline:u.getSymbolOutlineFromScheme(i,a,g),meshInfo:{colorMixMode:e.colorMixMode,edgesType:e.edgesType}});l.symbol=o,S[r].symbol=o.clone()}))}return m&&m.visualVariables&&m.visualVariables.length&&(h.visualVariables=m.visualVariables.map((e=>e.clone()))),h.authoringInfo=new l({type:"predominance",fields:[...s]}),{renderer:h,predominantCategoryInfos:S,excludedCategoryInfos:V,predominanceScheme:i,basemapId:v,basemapTheme:w}}async function w(e,a,i){const s=await n.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");return c.createVisualVariables({layer:e.layer,basemap:e.basemap,valueExpression:a.valueExpression,sqlExpression:a.statisticsQuery.sqlExpression,sqlWhere:a.statisticsQuery.sqlWhere,sizeScheme:i,sizeOptimizationEnabled:e.sizeOptimizationEnabled,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,legendOptions:{title:s.sumOfCategories},view:e.view,signal:e.signal})}async function S(e,a){const i=await n.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),t=await m({layer:e.layer,valueExpression:a.valueExpression,sqlExpression:a.statisticsQuery.sqlExpression,sqlWhere:a.statisticsQuery.sqlWhere,view:e.view,signal:e.signal}),p=null==t.avg||null==t.stddev,d=1/e.fields.length*100;let u=p?100:t.avg+1.285*t.stddev;u>100&&(u=100);const c=o.round([d,u],{strictBounds:!0}),y=new r({valueExpression:a.valueExpression,stops:[{value:c[0],opacity:.15},{value:c[1],opacity:1}],legendOptions:{title:i.strengthOfPredominance}}),b=new s({type:"opacity",minSliderValue:t.min,maxSliderValue:t.max});return{visualVariable:y,statistics:t,defaultValuesUsed:p,authoringInfo:new l({visualVariables:[b]})}}async function V(e){const a=await f(e),i=a.layer,n=(await h({basemap:a.basemap,geometryType:i.geometryType,numColors:a.fields.length,predominanceScheme:a.predominanceScheme,worldScale:a.symbolType.indexOf("3d-volumetric")>-1,view:a.view})).scheme,s=a.fields.map((e=>e.name)),l=t.getPredominanceExpressions(i,s),r=v(a,l.predominantCategory,n,s),o=a.includeSizeVariable?w(a,l.size,n.sizeScheme):null,p=a.includeOpacityVariable?S(a,l.opacity):null,[m,d,u]=await Promise.all([r,o,p]),c=[],y=[];if(d&&(Array.prototype.push.apply(c,d.visualVariables.map((e=>e.clone()))),delete d.sizeScheme,m.size=d,Array.prototype.push.apply(y,d.authoringInfo.visualVariables.map((e=>e.clone())))),u&&(c.push(u.visualVariable.clone()),m.opacity=u,Array.prototype.push.apply(y,u.authoringInfo.visualVariables.map((e=>e.clone())))),c.length){const e=m.renderer.visualVariables||[];Array.prototype.push.apply(e,c),m.renderer.visualVariables=e,m.renderer.authoringInfo.visualVariables=y}return m}e.createRenderer=V,Object.defineProperty(e,"__esModule",{value:!0})}));
