/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{s as t,a as e,g as n,d as r,e as o,i as s,f as i,n as f,c as u}from"../../../../chunks/vec3.js";import{c as a}from"../../../../chunks/vec3f64.js";import{geodesicArea as c}from"../../../../geometry/geometryEngine.js";import l from"../../../../geometry/Polygon.js";import{projectPointToVector as m,projectPointToWGS84ComparableLonLat as g,projectVectorToWGS84ComparableLonLat as p}from"../../../../geometry/projection.js";import h from"../../../../geometry/SpatialReference.js";import{inverseGeodeticSolver as j}from"../../../../geometry/support/geodesicUtils.js";import{planeFromPoints as d}from"../../support/mathUtils.js";function y(o,s){const i=s.center;t(i,0,0,0);for(let t=0;t<o.length;++t)e(i,i,o[t]);n(i,i,1/o.length);let f=0;for(let t=0;t<o.length;++t)f=Math.max(f,r(i,o[t]));s.radius=Math.sqrt(f)}function M(t,e){if(t.length<3)throw new Error("need at least 3 points to fit a plane");d(t[0],t[1],t[2],e)}function b(t,e){return o(t,e)+t[3]}function P(t,e,n){return m(t,R,n)&&m(e,S,n)?s(R,S):0}function w(t,e){if(!g(t,R)||!g(e,S))return 0;const n={distance:null};return j(n,[R[0],R[1]],[S[0],S[1]]),n.distance}function k(t,e,n){const r={distance:null};return j(r,[t[0],t[1]],[e[0],e[1]],n),r.distance}function q(t,e,n,r){const o=G;return p(t,r,R)&&p(e,r,S)&&p(n,r,U)?(o.setPoint(0,0,R),o.setPoint(0,1,S),o.setPoint(0,2,U),Math.abs(c(o,"square-meters"))):0}function v(e,n,r){Math.abs(e[0])>Math.abs(e[1])?t(n,0,1,0):t(n,1,0,0),i(r,e,n),f(n,n),i(n,r,e),f(r,r)}function x(n,r=null,s=!0){const a=1e-6,c=(t,e)=>{if(0===e[0]&&0===e[1]&&0===e[2])return!1;for(let n=0;n<t.length;++n)if(o(e,t[n])<-a)return!1;return!0};if(0===n.length)return!1;if(1===n.length)return r&&u(r,n[0]),!0;t(T,0,0,0);for(let t=0;t<n.length;++t)e(T,T,n[t]);if(f(T,T),c(n,T))return r&&u(r,T),!0;if(!s)return!1;for(let t=0;t<n.length;++t)for(let e=0;e<n.length;++e)if(t!==e&&(i(T,n[t],n[e]),f(T,T),c(n,T)))return r&&u(r,T),!0;return!1}function E(t){return"mouse"!==t.pointerType||0===t.button}const R=a(),S=a(),U=a(),G=new l({rings:[[R,S,U]],spatialReference:h.WGS84}),T=a();export{M as bestFitPlane,y as boundingSphere,x as fitHemisphere,E as isPrimaryPointerAction,b as planePointDistance,P as segmentLengthEuclidean,w as segmentLengthGeodesic,k as segmentLengthGeodesicVector,v as tangentFrame,q as triangleAreaGeodesic};