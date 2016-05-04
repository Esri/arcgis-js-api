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

/**
 * The Legend widget displays labels and symbols for layers in a map.
 * Labels and their corresponding symbols depend on the values set in the
 * {@link module:esri/renderers/Renderer} of the layer.
 * The legend will only display layers and sublayers that are
 * visible in the view.
 *
 * The legend automatically updates when
 *  - the visibility of a layer or sublayer changes
 *  - a layer is added or removed from the map
 *  - a layer's renderer is changed
 *
 * [![widgets-legend-basic](../assets/img/apiref/widgets/widgets-legend-basic.png)](../sample-code/sandbox/sandbox.html?sample=widgets-legend)
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations for 4.0**
 *
 * * Only {@link module:esri/layers/FeatureLayer} and {@link module:esri/layers/StreamLayer} are supported by Legend.
 * * {@link module:esri/symbols/Symbol3D  3D symbols} are not supported by Legend.
 * :::
 *
 * @example
 * require(["esri/widgets/Legend", ... ],
 *  function(Legend, ... ) {
 *
 *   var legend = new Legend({
 *     view: view,
 *     layerInfos: [{
 *       layer: featureLayer,
 *       title: "Legend"
 *     }]
 *   });
 *
 *  view.ui.add(legend, "bottom-right");
 * });
 *
 * @module esri/widgets/Legend
 * @since 4.0
 *
 * @see [Sample - Legend widget](../sample-code/widgets-legend/index.html)
 * @see [Legend.css](css/source-code/esri/widgets/Legend/css/Legend.css)
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

define([
  "./support/viewModelWiring",

  "./Widget",

  "./Legend/LegendViewModel",

  "../core/watchUtils",
  "../core/HandleRegistry",
  "../core/lang",
  "../core/screenUtils",

  "../symbols/support/gfxUtils",

  "dojox/gfx",
  "dojox/gfx/matrix",

  "dojo/_base/lang",

  "dojo/dom-construct",
  "dojo/dom-style",
  "dojo/dom-class",

  "dojo/i18n!./Legend/nls/Legend"
], function(
  viewModelWiring,
  Widget,
  LegendViewModel,
  watchUtils, HandleRegistry, esriLang, screenUtils,
  gfxUtils,
  gfx, gfxMatrix,
  lang,
  domConstruct, domStyle, domClass,
  i18n
) {

  var DEFAULT_TEXT = "Aa",

      GRADIENT_WIDTH = 24,
      GRADIENT_HEIGHT = 25,

      RAMP_HEIGHT = 50,

      CSS = {
        base: "esri-legend",
        service: "esri-legend__service",
        label: "esri-legend__service-label",
        layer: "esri-legend__layer",
        layerTable: "esri-legend__layer-table",
        layerCaption: "esri-legend__layer-caption",
        layerBody: "esri-legend__layer-body",
        layerRow: "esri-legend__layer-row",
        layerCell: "esri-legend__layer-cell",
        layerInfo: "esri-legend__layer-cell esri-legend__layer-cell--info",
        symbolContainer: "esri-legend__layer-cell esri-legend__layer-cell--symbols",
        symbol: "esri-legend__symbol",
        rampContainer: "esri-legend__ramps",
        colorRamp: "esri-legend__color-ramp",
        opacityRamp: "esri-legend__opacity-ramp",
        borderlessRamp: "esri-legend__borderless-ramp",
        rampTick: "esri-legend__ramp-tick",
        rampFirstTick: "esri-legend__ramp-tick-first",
        rampLastTick: "esri-legend__ramp-tick-last",
        rampLabelsContainer: "esri-legend__ramp-labels",
        rampLabel: "esri-legend__ramp-label",
        message: "esri-legend__message",

        // common
        hidden: "esri-hidden"
      },

      SYM_STYLES = {
        size: 22,
        maxSize: 125,
        padding: 6
      };

  /**
   * @extends module:esri/widgets/Widget
   * @constructor module:esri/widgets/Legend
   * @param {Object} properties - See the [properties](#properties) for a list of all the properties
   *                              that may be passed into the constructor.
   * @param {string | Node} [srcNodeRef] - Reference or ID of the HTML element in which this widget renders.
   */

  var Legend = Widget.createSubclass(
    /**
     * @lends: module:esri/widgets/Legend.prototype
     */
    {

      properties: {
        activeLayerInfos: {
          dependsOn: ["viewModel.activeLayerInfos"]
        },
        layerInfos: {
          dependsOn: ["viewModel.layerInfos"]
        },
        view: {
          dependsOn: ["viewModel.view"]
        },
        viewModel: {
          type: LegendViewModel
        }
      },

      declaredClass: "esri.widgets.Legend",

      baseClass: CSS.base,

      //--------------------------------------------------------------------------
      //
      //  Lifecycle
      //
      //--------------------------------------------------------------------------

      constructor: function() {
        this._handles = new HandleRegistry();
        this._DOMByLayerId = {};
      },

      postCreate: function () {
        this.inherited(arguments);
        this._createLegend();
      },

      destroy: function () {
        this._handles.destroy();
        this._handles = null;
      },

      //--------------------------------------------------------------------------
      //
      //  Private Properties
      //
      //--------------------------------------------------------------------------

      //----------------------------------
      //  activeLayerInfos
      //----------------------------------

      /**
       * Collection of {@link module:esri/widgets/Legend/support/ActiveLayerInfo} objects used by the legend view to
       * display data in the legend. The legend widget watches this property to hide or display the layer legend when
       * an {@link module:esri/widgets/Legend/support/ActiveLayerInfo} is removed from or added to this collection.
       *
       * @name activeLayerInfos
       * @instance
       *
       * @type {module:esri/core/Collection}
       * @autocast
       * @ignore
       */
      _getActiveLayerInfosAttr: viewModelWiring.createGetterDelegate("activeLayerInfos"),

      _setActiveLayerInfosAttr: viewModelWiring.createSetterDelegate("activeLayerInfos"),

      //----------------------------------
      //  layerInfos
      //----------------------------------

      /**
       * Specifies a subset of the layers to display in the legend.
       * If this property is not set, all layers in the map will display in the legend.
       * The order of layers in the legend are dependent on this property.
       * Objects in this array are defined with the properties listed below.
       *
       * @name layerInfos
       * @instance
       *
       * @type {object[]}
       *
       * @property {string} title - Specifies a title for the layer to display above its symbols and descriptions.
       * If no title is specified the service name is used.
       * @property {module:esri/layers/Layer} layer - A layer to display in the legend.
       * @todo @property {boolean} defaultSymbol - When `false`, the default symbol for the renderer will
       * not display in the legend. The default value is `true`. Only applicable to
       * {@link module:esri/layers/FeatureLayer}.
       * @todo @property {number[]} hideLayers -  List of sublayer ids that will not be displayed in the legend
       *                                    even if they are visible in the map.
       */
      _getLayerInfosAttr: viewModelWiring.createGetterDelegate("layerInfos"),

      _setLayerInfosAttr: viewModelWiring.createSetterDelegate("layerInfos"),

      //----------------------------------
      //  view
      //----------------------------------

      /**
       * A reference to the {@link module:esri/views/MapView MapView} or {@link module:esri/views/Scene SceneView}. Set this to link the widget to a specific view.
       *
       * @name view
       * @instance
       *
       * @type {(module:esri/views/SceneView|module:esri/views/MapView)}
       */
      _getViewAttr: viewModelWiring.createGetterDelegate("view"),

      _setViewAttr: viewModelWiring.createSetterDelegate("view"),

      //----------------------------------
      //  viewModel
      //----------------------------------

      /**
       * The view model for this widget. This is a class that contains all the logic
       * (properties and methods) that controls this widget's behavior. See the
       * {@link module:esri/widgets/Legend/LegendViewModel} class to access
       * all properties and methods on the widget.
       *
       * @name viewModel
       * @instance
       * @ignore
       *
       * @type {module:esri/widgets/Legend/LegendViewModel}
       * @autocast
       */

      //--------------------------------------------------------------------------
      //
      //  Private Methods
      //
      //--------------------------------------------------------------------------

      _createLegend: function() {
        var legendDOM = this._buildLegendDOM(),
          activeLayerInfos = this.viewModel.activeLayerInfos;

        // Create legend for each layerInfo if there is atleast one, else display message
        if (activeLayerInfos.length) {
          activeLayerInfos.forEach(function (activeLayerInfo) {
            this._createLegendForLayer(activeLayerInfo, legendDOM);
          }, this);
        }
        else {
          legendDOM.message.textContent = i18n.noLegend;
        }

        // when activeLayerInfos change:
        // activeLayerInfo removed => get layer legend DOM and hide it
        // activeLayerInfo added => get layer legend DOM, if exists, display otherwise create
        var handle = activeLayerInfos.on("change", function (evt) {
          var layerDOM,
            added = evt.added,
            removed = evt.removed;

          removed.forEach(function (obj) {
            layerDOM = this._DOMByLayerId[obj.layer.uid];
            if (layerDOM) {
              this._toggleDisplay(layerDOM);
            }
          }, this);

          added.forEach(function (obj) {
            layerDOM = this._DOMByLayerId[obj.layer.uid];
            if (layerDOM) {
              this._toggleDisplay(layerDOM);
            }
            else {
              this._createLegendForLayer(obj, legendDOM);
            }
          }, this);

          if (activeLayerInfos.length === 0) {
            this._toggleDisplay(legendDOM.message);
            legendDOM.message.textContent = i18n.noLegend;
          }
          else {
            if (!domClass.contains(legendDOM.message, CSS.hidden)) {
              this._toggleDisplay(legendDOM.message);
            }
          }

        }.bind(this));

        this._handles.add(handle, "activeLayerInfos-change");
      },

      _buildLegendDOM: function () {
        var widgetNode = this.domNode;

        var msgNode = domConstruct.create("div", {
          id: this.id + "_msg",
          className: CSS.message,
          textContent: i18n.creatingLegend + "..."
        }, widgetNode);

        return {
          widget: widgetNode,
          message: msgNode
        };
      },

      _createLegendForLayer: function(activeLayerInfo, legendDOM) {

        // watch for the activeLayerInfo's version change and
        // when activeLayerInfo is ready build DOM for the layer
        // and create legend elements for the layer
        // and if the layer has atleast one legend element then display layer legend DOM
        // When activeLayerInfo ready is false, remove dictionary data and destroy its DOM but handlers are not removed
        var infoReadyHandle = watchUtils.init(activeLayerInfo, "version", function () {
          var layerId = activeLayerInfo.layer.uid,
            layerDOM;

          if (activeLayerInfo.ready) {
            layerDOM = this._buildLegendDOMForLayer(activeLayerInfo, legendDOM);
            this._DOMByLayerId[layerId] = layerDOM.root;

            var legendElements = this._createLegendElements(activeLayerInfo, layerDOM.layer);

            if (legendElements.length && this.viewModel.activeLayerInfos.indexOf(activeLayerInfo) !== -1) {
              this._toggleDisplay(layerDOM.root);
            }
          }
          else {
            layerDOM = this._DOMByLayerId[layerId];

            if (layerDOM) {
              delete this._DOMByLayerId[layerId];
              domConstruct.destroy(layerDOM);
            }
          }
        }.bind(this));

        // When activeLayerInfo destroy is true, remove dictionary data, handlers and destroy its DOM
        var infoDestroyHandle = watchUtils.init(activeLayerInfo, "tearingDown", function (newValue) {
          var layerId = activeLayerInfo.layer.uid,
            layerDOM;

          if (newValue) {
            layerDOM = this._DOMByLayerId[layerId];

            if (layerDOM) {
              this._handles.remove(layerId);
              delete this._DOMByLayerId[layerId];
              domConstruct.destroy(layerDOM);
            }
          }
        }.bind(this));

        this._handles.add([infoReadyHandle, infoDestroyHandle], activeLayerInfo.layer.uid);
      },

      _buildLegendDOMForLayer: function (activeLayerInfo, legendDOM) {
        // create root node for the layer
        var rootID = legendDOM.widget.id + "_" + activeLayerInfo.layer.uid;
        var rootNode = domConstruct.create("div", {
          id: rootID,
          className: CSS.service + " " + CSS.hidden
        }, legendDOM.widget);

        // add layer title to root node of the layer
        var titleNode = domConstruct.create("p", {
          textContent: activeLayerInfo.title,
          className: CSS.label
        }, rootNode);

        // add layer data to root node
        var layerNode = domConstruct.create("div", {
          className: CSS.layer
        }, rootNode);

        return lang.mixin(legendDOM, {
          root: rootNode,
          title: titleNode,
          layer: layerNode
        });
      },

      _createLegendElements: function(activeLayerInfo, layerNode) {
        var legendElements = activeLayerInfo.legendElements,
          layer = activeLayerInfo.layer;

        legendElements.forEach(function(legendElement) {
          this._createLegendElement(legendElement, layerNode, layer);
        }, this);

        return legendElements;
      },

      _createLegendElement: function(legendElement, layerNode, layer) {
        var isColorRamp = legendElement.type === "color-ramp",
          isOpacityRamp = legendElement.type === "opacity-ramp",
          elemDOM = this._buildDOMForElement(layerNode, legendElement.title, isColorRamp || isOpacityRamp);

        // build symbol table or size ramp
        if (legendElement.type === "symbol-table" || legendElement.type === "size-ramp") {
          legendElement.infos.forEach(function (info) {
            this._buildDOMForElementInfo(info, elemDOM, layer);
          }, this);
        }
        // build ramp
        else if (isColorRamp || isOpacityRamp) {
          this._buildRampDOM(legendElement.infos, elemDOM.body, legendElement.overlayColor, isOpacityRamp);
        }
      },

      _buildDOMForElement: function (node, title, isRamp) {
        title = (typeof title === "string") ? title : title && this._getTitle(title, isRamp);

        // table node
        var tableNode = domConstruct.create("div", {
          className: CSS.layerTable
        }, node);

        // caption node
        var captionNode = title ? domConstruct.create("div", {
          className: CSS.layerCaption,
          textContent: title
        }, tableNode) :
          null;

        // body node
        var bodyNode = domConstruct.create("div", {
          className: CSS.layerBody
        }, tableNode);

        return {
          layer: node,
          table: tableNode,
          caption: captionNode,
          body: bodyNode
        };
      },

      _buildDOMForElementInfo: function(info, elemDOM, layer) {
        // append row node to table body node
        var rowNode = domConstruct.create("div", {
          className: CSS.layerRow
        }, elemDOM.body);

        var symWidth = SYM_STYLES.size,
          symHeight = SYM_STYLES.size,
          symMaxSize = SYM_STYLES.maxSize,
          symPadding = SYM_STYLES.padding,
          symbol = info.symbol,
          symbolType = symbol.type,
          symbolSize = screenUtils.pt2px(symbol.size);

        if (symbol) {
          // show point symbols in their actual size
          if (symbolType === "simple-marker-symbol") {
            // extra padding for the outline width
            symWidth = Math.min(Math.max(symWidth, symbolSize + symPadding), symMaxSize);
            symHeight = Math.min(Math.max(symHeight, symbolSize + symPadding), symMaxSize);
          }
          else if (symbolType == "picture-marker-symbol") {
            symWidth = Math.min(Math.max(symWidth, screenUtils.pt2px(symbol.width)), symMaxSize);
            symHeight = Math.min(screenUtils.pt2px(symbol.height) || symHeight, symMaxSize);
          }
          else if (symbolType == "text-symbol") {
            // TODO: get text width and height
          }
        }

        // symbol node
        var symNode = domConstruct.create("div", {
          className: CSS.symbolContainer
        }, rowNode);

        // draw symbol
        this._drawSymbol(symNode, info.symbol, symWidth, symHeight, layer);

        domClass.add(symNode.firstChild, CSS.symbol);

        // label node
        var labelCellNode = domConstruct.create("div", {
          className: CSS.layerInfo
        }, rowNode);
        labelCellNode.textContent = info.label || "";
      },

      _drawSymbol: function (node, symbol, sWidth, sHeight, layer) {

        if (symbol.type === "picture-marker-symbol") {
          node.style.opacity = layer.opacity;
        }

        var surface = gfx.createSurface(node, sWidth, sHeight),
          shapeDesc = gfxUtils.getShapeDescriptors(symbol),
          defaultShape = shapeDesc.defaultShape,
          isText = (defaultShape && defaultShape.type === "text"),
          gfxShape;

        try {
          // Use default text for text symbols if there is no
          // pre-existing text.
          if (isText && !defaultShape.text) {
            defaultShape.text = DEFAULT_TEXT;
          }

          gfxShape = surface.createShape(defaultShape)
            .setFill(shapeDesc.fill)
            .setStroke(shapeDesc.stroke);

          // Apply font to the GFX shape for text symbol.
          if (isText) {
            gfxShape.setFont(shapeDesc.font);
          }
        }
        catch (e) {
          surface.clear();
          surface.destroy();
          return;
        }

        var bbox = gfxShape.getBoundingBox(),
          width = bbox.width,
          height = bbox.height,

        // Aligns the center of the path with surface's origin (0,0)
        // This logic is specifically required for SMS symbols
        // with STYLE_PATH style
          vectorDx = -(bbox.x + (width / 2)),
          vectorDy = -(bbox.y + (height / 2)),

        // Aligns the center of the shape with the center of the surface
          dim = surface.getDimensions(),
          transform = {
            dx: vectorDx + dim.width / 2,
            dy: vectorDy + dim.height / 2
          };

        if (symbol.type === "simple-marker-symbol" && symbol.style === "path") {
          // We need to scale-up or scale-down SMSPath based on its size.
          var scaleMat = layer._getScaleMatrix(bbox, screenUtils.pt2px(symbol.size));

          gfxShape.applyTransform(
            gfxMatrix.scaleAt(
              scaleMat.xx, scaleMat.yy,
              { x: dim.width / 2, y: dim.height / 2 }
            )
          );
        }

        if (width > sWidth || height > sHeight) {
          var test = (width/sWidth > height/sHeight);
          var actualSize = test ? width : height;
          var refSize = test ? sWidth : sHeight;
          var scaleBy = (refSize - 5) / actualSize;

          lang.mixin(transform, {
            xx: scaleBy,
            yy: scaleBy
          });
        }

        gfxShape.applyTransform(transform);

        return surface;
      },

      _buildRampDOM: function (rampStops, tableBodyNode, overlayColor, isOpacityRamp) {

        var numGradients = rampStops.length - 1,
          gradientWidth = GRADIENT_WIDTH, gradientHeight = GRADIENT_HEIGHT,
          rowNode, labelTD, imageTD, imageDiv, rampDiv, labelContainer,
          surface, rect, rampWidth, rampHeight;

        rowNode = domConstruct.create("div", {
          className: CSS.layerRow
        }, tableBodyNode);

        imageTD = domConstruct.create("div", {
          className: CSS.symbolContainer,
          style: "width:" + gradientWidth + "px"
        }, rowNode);

        imageDiv = domConstruct.create("div", {
          className: CSS.rampContainer
        }, imageTD);

        rampDiv = domConstruct.create("div", {
          className: CSS.colorRamp + " " + (isOpacityRamp ? CSS.opacityRamp : "")
        }, imageDiv);

        labelTD = domConstruct.create("div", {
          className: CSS.layerInfo
        }, rowNode);

        rampWidth = "100%";

        if (numGradients > 2) {
          rampHeight = gradientHeight * numGradients;
        }
        else {
          rampHeight = RAMP_HEIGHT; // minimum height of the ramp
        }

        // added this as the bg image of opacityRamp is extended to padding height
        domStyle.set(rampDiv, "height", rampHeight + "px");

        surface = gfx.createSurface(rampDiv, rampWidth, rampHeight);

        try {

          rect = surface.createRect({
            x:      0,
            y:      0,
            width:  rampWidth,
            height: rampHeight
          });

          rect
            .setFill({
              type: "linear",
              x1: 0, y1: 0,
              x2: 0, y2: rampHeight,
              colors: rampStops
            })
            .setStroke(null);

          if (overlayColor && overlayColor.a > 0) {
            surface.createRect({
                width: rampWidth,
                height: rampHeight
              })
              .setFill(overlayColor)
              .setStroke(null);
          }

        }
        catch (e) {
          surface.clear();
          surface.destroy();
        }

        labelContainer = domConstruct.create("div", {
          className: CSS.rampLabelsContainer,
          style: {
            height: rampHeight + "px"
          }
        }, labelTD);

        // Labels for SizeInfo
        rampStops.forEach(function(stop) {
          if(stop.label) {
            domConstruct.create("div", {
              className: CSS.rampLabel,
              // Flex-box will allow us to space these out vertically.
              innerHTML: stop.label
            }, labelContainer);
          }
        });

      },

      _getTitle: function (titleInfo, isRamp) {
        var bundleKey;

        if (isRamp) {
          bundleKey = (titleInfo.ratioPercentTotal && "showRatioPercentTotal") ||
            (titleInfo.ratioPercent && "showRatioPercent") ||
            (titleInfo.ratio && "showRatio") ||
            (titleInfo.normField && "showNormField") ||
            (titleInfo.field && "showField") ||
            null;
        }
        else {
          bundleKey = (titleInfo.normField && "showNormField") ||
            (titleInfo.normByPct ? "showNormPct" : null) ||
            (titleInfo.field && "showField") ||
            null;
        }

        return esriLang.substitute({
          field: titleInfo.field,
          normField: titleInfo.normField
        }, i18n[bundleKey]);
      },

      _toggleDisplay: function (domElm) {
        var hasHide = domClass.contains(domElm, CSS.hidden);

        if (hasHide) {
          domClass.remove(domElm, CSS.hidden);
        }
        else {
          domClass.add(domElm, CSS.hidden);
        }
      }
    }
  );

  return Legend;

});
