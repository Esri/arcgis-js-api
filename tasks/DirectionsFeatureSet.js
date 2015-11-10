define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../geometry/Extent","../geometry/Polyline","./FeatureSet"],function(e,t,r,s,n,a,o,i){var h=e(i,{declaredClass:"esri.tasks.DirectionsFeatureSet",constructor:function(e,s){this.routeId=e.routeId,this.routeName=e.routeName,t.mixin(this,e.summary),this.extent=new a(this.envelope);var n=this._fromCompressedGeometry,o=this.features,i=this.extent.spatialReference,h=[];r.forEach(s,function(e,t){o[t].setGeometry(h[t]=n(e,i))}),this.strings=e.strings,this.mergedGeometry=this._mergePolylinesToSinglePath(h,i),this.geometryType="esriGeometryPolyline",delete this.envelope},_fromCompressedGeometry:function(e,t){var s,n,a,i,h,c,p,u,f=0,l=0,m=0,d=0,y=[],g=0,I=0,v=0;if(h=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),0===parseInt(h[g],32)){g=2;var x=parseInt(h[g],32);g++,c=parseInt(h[g],32),g++,1&x&&(I=r.indexOf(h,"|")+1,p=parseInt(h[I],32),I++),2&x&&(v=r.indexOf(h,"|",I)+1,u=parseInt(h[v],32),v++)}else c=parseInt(h[g],32),g++;for(;g<h.length&&"|"!==h[g];){s=parseInt(h[g],32)+f,g++,f=s,n=parseInt(h[g],32)+l,g++,l=n;var S=[s/c,n/c];I&&(i=parseInt(h[I],32)+m,I++,m=i,S.push(i/p)),v&&(a=parseInt(h[v],32)+d,v++,d=a,S.push(a/u)),y.push(S)}var _=new o({paths:[y],hasZ:I>0,hasM:v>0});return _.setSpatialReference(t),_},_mergePolylinesToSinglePath:function(e,t){var s=[];r.forEach(e,function(e){r.forEach(e.paths,function(e){s=s.concat(e)})});var n=[],a=[0,0];return r.forEach(s,function(e){(e[0]!==a[0]||e[1]!==a[1])&&(n.push(e),a=e)}),new o({paths:[n]}).setSpatialReference(t)}});return s("extend-esri")&&t.setObject("tasks.DirectionsFeatureSet",h,n),h});