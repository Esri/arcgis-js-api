define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/_base/Color","dojo/has","dojo/dom-construct","dojo/dom-style","../kernel","../lang","../sniff","./_toolbar","./_Box","./_GraphicMover","./_VertexEditor","./TextEditor","../symbols/SimpleMarkerSymbol","../symbols/SimpleLineSymbol","../symbols/TextSymbol","../graphic"],function(t,e,i,o,n,r,s,a,h,c,l,d,_,p,f,E,x,m,u,g,b){var v=e(_,{declaredClass:"esri.toolbars.Edit",constructor:function(t,e){if(this._map=t,this._tool=0,this._map.loaded)this._scratchGL=t.graphics;else var n=o.connect(this._map,"onLoad",this,function(){o.disconnect(n),n=null,this._scratchGL=this._map.graphics});var a=s("esri-mobile");this._defaultOptions=i.mixin({vertexSymbol:new m(m.STYLE_CIRCLE,a?20:12,new u(u.STYLE_SOLID,new r([0,0,0,.5]),1),new r([128,128,128])),ghostVertexSymbol:new m(m.STYLE_CIRCLE,a?18:10,new u(u.STYLE_SOLID,new r([0,0,0,.5]),1),new r([255,255,255,.75])),ghostLineSymbol:new u(u.STYLE_DOT,new r([128,128,128]),2),allowDeleteVertices:!0,allowAddVertices:!0,rotateHandleOffset:a?24:16,boxLineSymbol:new u(u.STYLE_DASH,new r([64,64,64]),1),boxHandleSymbol:new m(m.STYLE_SQUARE,a?16:9,new u(u.STYLE_SOLID,new r([0,0,0,.5]),1),new r([255,255,255,.75])),textAnchorSymbol:new m(m.STYLE_CIRCLE,10,null,new r([255,0,0]))},e||{})},activate:function(t,e,n){this.deactivate(),this._graphic=e,this._options=i.mixin(i.mixin({},this._defaultOptions),n||{});var r=v.MOVE,s=v.EDIT_VERTICES,a=v.SCALE,h=v.ROTATE,c=v.EDIT_TEXT,l=!1,d=!1,_=!1,p=!1,f=this._map,E=f.spatialReference,x=e.geometry.spatialReference;this._geo=!(!E||!x||E.equals(x)||!E.isWebMercator()||4326!==x.wkid),this._isTextPoint=this._prepareTextSymbolEditing(e,t),(t&r)===r&&(l=this._enableMove(e));var m=(t&a)===a,u=(t&h)===h;if((m||u)&&(_=this._enableBoxEditing(e,m,u)),(t&s)===s&&(d=this._enableVertexEditing(e)),(t&c)===c&&(p=this._enableTextEditing(e)),!(l||d||_))throw new Error("[esri.toolbars.Edit::activate] Unable to activate the tool. Check if the tool is valid for the given geometry type.");this._tool=t,this._tool&&(this._mapPanEndHandle=o.connect(f,"onPanEnd",this,this._mapPanEndHandler),this._mapExtChgHandle=o.connect(f,"onExtentChange",this,this._mapExtentChangeHandler),this.onActivate(this._tool,e)),f.snappingManager&&(l||d)&&f.snappingManager._startSelectionLayerQuery()},deactivate:function(){this._isTextPoint=null;var t=this._tool,e=this._graphic;if(t){var i=!!this._modified;this._clear(),o.disconnect(this._mapPanEndHandle),o.disconnect(this._mapExtChgHandle),this._mapPanEndHandle=this._mapExtChgHandle=null,this._graphic=this._geo=null,this.onDeactivate(t,e,{isModified:i}),this._map.snappingManager&&this._map.snappingManager._stopSelectionLayerQuery()}},refresh:function(){this._refreshMoveables(!0)},getCurrentState:function(){return{tool:this._tool,graphic:this._graphic,isModified:!!this._modified}},onActivate:function(){},onDeactivate:function(){},onGraphicMoveStart:function(){},onGraphicFirstMove:function(){this._modified=!0},onGraphicMove:function(){},onGraphicMoveStop:function(){},onGraphicClick:function(){},onVertexMoveStart:function(){},onVertexFirstMove:function(){this._modified=!0},onVertexMove:function(){},onVertexMoveStop:function(){},onVertexAdd:function(){this._modified=!0},onVertexClick:function(){},onVertexMouseOver:function(){},onVertexMouseOut:function(){},onVertexDelete:function(){this._modified=!0},onTextEditStart:function(){},onTextEditEnd:function(){},onScaleStart:function(){},onScaleFirstMove:function(){this._modified=!0},onScale:function(){},onScaleStop:function(){},onRotateStart:function(){},onRotateFirstMove:function(){this._modified=!0},onRotate:function(){},onRotateStop:function(){},_eventMap:{activate:["tool","graphic"],deactivate:["tool","graphic","info"],"graphic-move-start":["graphic"],"graphic-first-move":["graphic"],"graphic-move":["graphic","transform"],"graphic-move-stop":["graphic","transform"],"graphic-click":["graphic","info"],"vertex-move-start":["graphic","vertexinfo"],"vertex-first-move":["graphic","vertexinfo"],"vertex-move":["graphic","vertexinfo","transform"],"vertex-move-stop":["graphic","vertexinfo","transform"],"vertex-add":["graphic","vertexinfo"],"vertex-click":["graphic","vertexinfo"],"vertex-mouse-over":["graphic","vertexinfo"],"vertex-mouse-out":["graphic","vertexinfo"],"vertex-delete":["graphic","vertexinfo"],"scale-start":["graphic"],"scale-first-move":["graphic"],scale:["graphic","info"],"scale-stop":["graphic","info"],"rotate-start":["graphic"],"rotate-first-move":["graphic"],rotate:["graphic","info"],"rotate-stop":["graphic","info"]},_prepareTextSymbolEditing:function(e,i){if("point"===e.geometry.type||"multipoint"===e.geometry.type){var o=e.getLayer(),n=o.renderer,r=e.symbol||o._getSymbol(e);if(!r&&n.hasVisualVariables(!1)&&n.addBreak&&n.infos&&1===n.infos.length&&(r=n.infos[0].symbol||n.defaultSymbol),r&&"textsymbol"===r.type){if((i&v.SCALE)===v.SCALE||(i&v.ROTATE)===v.ROTATE||(i&v.EDIT_TEXT)===v.EDIT_TEXT){e.setSymbol(new g(r.toJson()));var s=this;if(this._textSymbolEditor)this._textSymbolEditor.createForm(e),this._textSymbolEditor.show();else if(this._options&&this._options.textSymbolEditor)this._textSymbolEditor=this._options.textSymbolEditor,this._textSymbolEditor.on("symbol-change",function(){s._boxEditor&&s._boxEditor.refresh()});else{var c;c=this._options.textSymbolEditorHolder?a.create("div",null,this._options.textSymbolEditorHolder):a.create("div",null,this._map.root),t(["../dijit/SymbolEditor"],function(t){s._textSymbolEditor=new t({graphic:e},c);var i=s._textSymbolEditor.domNode.parentNode.id;h.set(s._textSymbolEditor.domNode,{position:"map_root"===i?"absolute":"relative",left:"map_root"===i?s._map.width/2-100+"px":"5px",top:"20px","z-index":50}),s._textSymbolEditor.startup(),s._textSymbolEditor.createForm(e),s._textSymbolEditor.show(),s._textSymbolEditor.on("symbol-change",function(){s._boxEditor&&s._boxEditor.refresh()})})}}return((i&v.MOVE)===v.MOVE||(i&v.ROTATE)===v.ROTATE||(i&v.SCALE)===v.SCALE)&&(this._textAnchor=new b(e.geometry,this._options.textAnchorSymbol),this._scratchGL.add(this._textAnchor)),!0}}return!1},_enableMove:function(t){var e=this._map,i=t.geometry.type;switch(i){case"point":case"polyline":case"polygon":return this._graphicMover=new f(t,e,this,this._textAnchor),!0;case"multipoint":}return!1},_enableVertexEditing:function(t){var e=this._map,i=t.geometry.type;switch(i){case"point":break;case"multipoint":case"polyline":case"polygon":return this._vertexEditor=E.create(t,e,this),!0}return!1},_enableBoxEditing:function(t,e,i){var o=this._map,n=t.geometry.type;return"polyline"===n||"polygon"===n||this._isTextPoint?(this._boxEditor=new p(t,o,this,e,i,this._options.uniformScaling,this._isTextPoint),!0):!1},_enableTextEditing:function(t){return this._isTextPoint?(this._textEditor=new x(t,this._map,this),o.connect(this._textEditor,"onEditStart",i.hitch(this,function(){this._textAnchor&&(this._textAnchor.getLayer().remove(this._textAnchor),this._textAnchor=null),this._disableMove(),this._disableBoxEditing()})),!0):!1},_disableMove:function(){var t=this._graphicMover;t&&(t.destroy(),this._graphicMover=null)},_disableVertexEditing:function(){var t=this._vertexEditor;t&&(t.destroy(),this._vertexEditor=null)},_disableBoxEditing:function(){var t=this._boxEditor;t&&(t.destroy(),this._boxEditor=null)},_disableTextEditing:function(){this._textEditor&&(this._textEditor.destroy(),this._textEditor=null)},_disableSymbolEditing:function(){this._textSymbolEditor&&this._textSymbolEditor.hide()},_clear:function(){this._disableMove(),this._disableVertexEditing(),this._disableBoxEditing(),this._disableTextEditing(),this._disableSymbolEditing(),this._textAnchor&&(this._textAnchor.getLayer().remove(this._textAnchor),this._textAnchor=null),this._tool=0,this._modified=!1},_mapPanEndHandler:function(){this._refreshMoveables()},_mapExtentChangeHandler:function(t,e,i){i&&this._refreshMoveables()},_refreshMoveables:function(t){var e=n.filter([this._graphicMover,this._vertexEditor,this._boxEditor],l.isDefined);n.forEach(e,function(e){e.refresh(t)})},_beginOperation:function(t){n.forEach(this._getAffectedTools(t),function(t){t.suspend()})},_endOperation:function(t){n.forEach(this._getAffectedTools(t),function(t){t.resume()})},_getAffectedTools:function(t){var e=[];switch(t){case"MOVE":e=[this._vertexEditor,this._boxEditor];break;case"VERTICES":e=[this._boxEditor];break;case"BOX":e=[this._vertexEditor]}return e=n.filter(e,l.isDefined)}});return i.mixin(v,{MOVE:1,EDIT_VERTICES:2,SCALE:4,ROTATE:8,EDIT_TEXT:16}),s("extend-esri")&&i.setObject("toolbars.Edit",v,c),v});