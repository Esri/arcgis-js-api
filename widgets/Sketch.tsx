/**
 * Sketch widget provides a simple UI for creating and updating graphics on a {@link module:esri/views/MapView} or
 * a {@link module:esri/views/SceneView}. This significantly minimizes the code required for working with graphics in the view.
 * It is intended to be used with {@link module:esri/Graphic graphics} stored in its [layer](#layer) property.
 *
 * By default, the Sketch widget provides out-of-the-box tools for creating and updating graphics with {@link module:esri/geometry/Point point},
 * {@link module:esri/geometry/Polyline polyline}, {@link module:esri/geometry/Polygon polygon}, {@link module:esri/geometry/Polygon rectangle}
 * and {@link module:esri/geometry/Polygon circle} geometries.
 *
 * [![sketch-geometries](../../assets/img/apiref/widgets/sketch/sketch-widget.gif)](../sample-code/sketch-geometries/index.html)
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * * Graphics with polyline or polygon geometries can not be rotated or scaled in a {@link module:esri/views/SceneView}.
 * * Graphics with geometries where {@link module:esri/geometry/Geometry#hasZ hasZ} is `true` will be ignored by [update()](#update)
 *   in a {@link module:esri/views/SceneView}.
 * * Multipoint geometry can only be created in a {@link module:esri/views/MapView}.
 * :::
 *
 * >>> esri-read-more
 * <a name="create-graphics"></a>
 * Pointer and keyboard gestures for creating graphics with different geometries are described in the tables below.
 *
 * #### Creating point graphics
 *
 * Gesture | Action |
 * ---------|---------|
 * Left-click | Adds a point graphic at the pointer location. |
 * C | Adds a point graphic at the pointer location. |
 *
 * #### Creating polyline and polygon graphics
 *
 * Gesture | Action |
 * ---------|---------|
 * Left-click | Adds a vertex at the pointer location.|
 * Left-drag | Adds a vertex for each pointer move. |
 * F | Adds a vertex to the polyline or polygon graphic. |
 * C | Completes the polyline or polygon graphic sketch. |
 * Z | Incrementally undo actions recorded in the stack. |
 * R | Incrementally redo actions recorded in the stack. |
 * Spacebar+Left-drag | Pan the view while creating a polyline or polygon graphic.
 * Left-click on the first vertex | Completes the polygon graphic sketch. |
 *
 * #### Creating polygon graphics with predefined shapes
 *
 * The following keyboard shortcuts apply when creating polygon graphics with predefined shapes.
 *
 * Gesture | Action |
 * ------- | ------ |
 * Left-click+Drag | Creates a `rectangle` graphic with dimensions based on the bounding box between initial click and cursor location. Creates a `circle` graphic with radius based on the distance between initial click and cursor location. |
 * Ctrl+Left-click+Drag | Changes the shape from a `rectangle` to a `square` or from a `circle` to an `ellipse`. |
 * Alt+Left-click+Drag | Creates a `rectangle` graphic with a center at initial click, and dimensions based on the distance between the initial click to the cursor location. Creates a `circle` graphic with a radius based on the bounding box between the initial click and the cursor location.
 * Ctrl+Alt+Left-click+Drag | Combines the behavior described above. |
 *
 * <a name="update-graphics"></a>
 * #### Updating graphics
 *
 * The Sketch widget provides users with the ability to move, rotate, scale or reshape graphics during an update operation.
 * To begin updating, `Left-click` on a graphic. Use `Shift+Left-click` to add more graphics to the selection, for bulk updating.
 * Once graphics are selected, the following actions can be performed.
 *
 * Gesture | Action | Example |
 * ---------|---------|----------|
 * Left-click on a graphic | Select a graphic to move, rotate or scale. | <img alt="Select a graphic" src="../../assets/img/apiref/widgets/sketch/sketch-box-mode.gif" width="400px"> |
 * Shift+Left-click graphics | Select multiple graphics to move, rotate or scale.| <img alt="Select graphics" src="../../assets/img/apiref/widgets/sketch/sketch-graphics.gif" width="400px"> |
 * Drag graphic | Move the selected graphic.| <img alt="Drag the graphic" src="../../assets/img/apiref/widgets/sketch/sketch-box-move.gif" width="400px"> |
 * Drag rotate handle | Rotate the selected graphic.| <img alt="Rotate the graphic" src="../../assets/img/apiref/widgets/sketch/sketch-rotate.gif" width="400px"> |
 * Drag scale handle | Scale the selected graphic.| <img alt="Scale the graphic" src="../../assets/img/apiref/widgets/sketch/sketch-scale.gif" width="400px"> |
 * Z | Incrementally undo actions recorded in the stack. | <img alt="Undo update" src="../../assets/img/apiref/widgets/sketch/sketch-update-undo.gif" width="400px"> |
 * R | Incrementally redo actions recorded in the stack. | <img alt="Redo update" src="../../assets/img/apiref/widgets/sketch/sketch-update-redo.gif" width="400px"> |
 * Left-click on view (not the graphic) | Complete the graphic update. | <img alt="Sketch update complete" src="../../assets/img/apiref/widgets/sketch/sketch-update-complete.gif" width="400px"> |
 * Press `Delete` key | Remove the selected graphic(s) from the [layer](#layer). | <img alt="Sketch delete graphic" src="../../assets/img/apiref/widgets/sketch/sketch-delete-graphic.gif" width="400px">
 *
 * The following update operations can be performed on a single polyline or polygon graphic:
 *
 * Gesture | Action | Example |
 * ---------|---------|----------|
 * Left-click on a graphic | Select a graphic to move or reshape.| <img alt="Select a graphic" src="../../assets/img/apiref/widgets/sketch/sketch-reshape-mode.gif" width="400px"> |
 * Drag graphic | Move the selected graphic.| <img alt="Drag the graphic" src="../../assets/img/apiref/widgets/sketch/sketch-drag.gif" width="400px"> |
 * Left-click on a ghost vertex| Add a new vertex. | <img alt="Add a vertex" src="../../assets/img/apiref/widgets/sketch/sketch-add-vertices.gif" width="400px"> |
 * Left-click on a vertex| Select a vertex. | <img alt="Select a vertex" src="../../assets/img/apiref/widgets/sketch/sketch-selectvertex.gif" width="400px"> |
 * Shift+Left-click on vertices | Select or unselect multiple vertices. | <img alt="Select vertices" src="../../assets/img/apiref/widgets/sketch/sketch-selectvertices.gif" width="400px"> |
 * Drag vertex | Move the selected vertex or vertices. | <img alt="Drag vertices" src="../../assets/img/apiref/widgets/sketch/sketch-dragvertices.gif" width="400px"> |
 * Right-click on a vertex | Delete a vertex. | <img alt="Delete a vertex" src="../../assets/img/apiref/widgets/sketch/sketch-delete-vertex.gif" width="400px"> |
 * Select multiple vertices and press `Backspace` or `Delete` key | Delete multiple vertices. | <img alt="Delete vertices" src="../../assets/img/apiref/widgets/sketch/sketch-delete-vertices.gif" width="400px"> |
 *
 * The following update operations can be performed on a single graphic with point geometry in a {@link module:esri/views/SceneView}, if the graphic uses a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer}:
 *
 * Gesture | Action | Example |
 * ---------|---------|----------|
 * Left-click on a graphic | Select a graphic to move, rotate or scale. | <img alt="Select a graphic" src="../../assets/img/apiref/widgets/sketch/sketch-update-point-3D.gif" width="400px"> |
 * Drag inner handle | Move the selected graphic.| <img alt="Drag the graphic" src="../../assets/img/apiref/widgets/sketch/sketch-transform-move-point.gif" width="400px"> |
 * Drag outer handle sideways | Rotate the selected graphic.| <img alt="Rotate the graphic" src="../../assets/img/apiref/widgets/sketch/sketch-transform-rotate-point.gif" width="400px"> |
 * Drag outer handle inwards or outwards | Scale the selected graphic.| <img alt="Scale the graphic" src="../../assets/img/apiref/widgets/sketch/sketch-transform-scale-point.gif" width="400px"> |
 *
 * >>>
 *
 * @module module:esri/widgets/Sketch
 *
 * @since 4.10
 * @see [Sketch.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Sketch.tsx)
 * @see [Sketch.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Sketch.scss)
 * @see module:esri/widgets/Sketch/SketchViewModel
 * @see [Sample - Sketch temporary geometries](../sample-code/sketch-geometries/index.html)
 * @see [Sample - Sketch update validation](../sample-code/sketch-update-validation/index.html)
 * @see [Sample - Query statistics by geometry](../sample-code/featurelayerview-query-geometry/index.html)
 *
 * @example
 * // Create a new instance of sketch widget and set
 * // its required parameters
 * var sketch = new Sketch({
 *   layer: graphicsLayer,
 *   view: view
 * });
 *
 * // Listen to sketch widget's create event.
 * sketch.on("create", function(event) {
 *   // check if the create event's state has changed to complete indicating
 *   // the graphic create operation is completed.
 *   if (event.state === "complete") {
 *     // remove the graphic from the layer. Sketch adds
 *     // the completed graphic to the layer by default.
 *     polygonGraphicsLayer.remove(event.graphic);
 *
 *     // use the graphic.geometry to query features that intersect it
 *     selectFeatures(event.graphic.geometry);
 *   }
 * });
 */

/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/Sketch/nls/Sketch";

// esri
import { substitute } from "esri/intl";
import Graphic = require("esri/widgets/../Graphic");

// esri.core
import Collection = require("esri/core/Collection");
import { createSetFromValues } from "esri/core/iteratorUtils";

// esri.core.accessorSupport
import { aliasOf, subclass, declared, property } from "esri/core/accessorSupport/decorators";

// esri.layers
import GraphicsLayer = require("esri/widgets/../layers/GraphicsLayer");

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Sketch
import SketchViewModel = require("esri/widgets/Sketch/SketchViewModel");

// esri.widgets.Sketch.support
import {
  CreateEvent,
  CreateOptions,
  CreateTool,
  CreationMode,
  DeleteEvent,
  SketchTool,
  State,
  UpdateEvent,
  UpdateOptions,
  UpdateTool
} from "esri/widgets/Sketch/support/interfaces";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { isRTL, renderable, tsx, vmEvent } from "esri/widgets/support/widget";

const CSS = {
  // sketch classes
  base: "esri-sketch",
  verticalLayout: "esri-sketch--vertical",
  panel: "esri-sketch__panel",
  infoPanel: "esri-sketch__info-panel",
  section: "esri-sketch__section",
  toolSection: "esri-sketch__tool-section",
  infoSection: "esri-sketch__info-section",
  infoCountSection: "esri-sketch__info-count-section",
  featureCountBadge: "esri-sketch__feature-count-badge",
  featureCountText: "esri-sketch__feature-count-text",
  featureCountNumber: "esri-sketch__feature-count-number",

  // button classes
  button: "esri-sketch__button",
  selectedButton: "esri-sketch__button--selected",

  // icon classes
  pointIcon: "esri-icon-map-pin",
  polygonIcon: "esri-icon-polygon",
  polylineIcon: "esri-icon-polyline",
  multipointIcon: "esri-icon-handle-vertical",
  circleIcon: "esri-icon-radio-unchecked",
  rectangleIcon: "esri-icon-checkbox-unchecked",
  panIcon: "esri-icon-pan",
  cursorIcon: "esri-icon-cursor",
  resetIcon: "esri-icon-trash",
  undoIcon: "esri-icon-undo",
  redoIcon: "esri-icon-redo",

  // common
  esriWidget: "esri-widget",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

type Layout = "vertical" | "horizontal";

interface SketchEvents {
  delete: DeleteEvent;
}

@subclass("esri.widgets.Sketch")
class Sketch extends declared(Widget)<SketchEvents> {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * Fires when a user deletes selected graphics by clicking the `Delete feature` button on the Sketch widget
   * or when [delete()](#delete) method is called.
   *
   * @example
   * // selected graphics can be deleted only when update event becomes active
   * sketch.on("update", function(event) {
   *   if (event.state === "active") {
   *     sketch.delete();
   *   }
   * });
   *
   * // fires after delete method is called
   * // returns references to deleted graphics.
   * sketch.on("delete", function(event) {
   *   event.graphics.forEach(function(graphic){
   *     console.log("deleted", graphic)
   *   });
   * });
   *
   * @since 4.14
   * @event module:esri/widgets/Sketch#delete
   * @property {module:esri/Graphic[]} graphics - An array of deleted graphics.
   * @property {"move" | "reshape" | "transform"} tool - Name of the tool that was active when graphics are deleted.
   * @property {"delete"} type - The type of the event.
   */

  /**
   * Fires when a user starts sketching a graphic, is actively sketching a graphic and completes sketching a graphic.
   *
   * @event module:esri/widgets/Sketch#create
   * @property {module:esri/Graphic} graphic - The graphic that is being created.
   * @property {"start" | "active" | "complete" | "cancel"} state - The current state of the event.
   *
   * **Possible Values:**
   *
   * Value | Description |
   * ----- | ----------- |
   * start | State changes to `start` when the first vertex is created. Not applicable when creating `points`.
   * active | State is `active` while graphic is being created. Not applicable when creating `points`.
   * complete | State changes to `complete` after the [complete()](#complete) method is called, when the user double clicks, presses the C key or clicks the first vertex of the `polygon` while creating a graphic. When `point` is created, the create event is fired with the `complete` state.
   * cancel | State changes to `cancel` if the [create()](#create) or [cancel()](#cancel) methods are called during the create operation and before the state changes to `complete`.
   *
   * @property {"point" | "polyline" | "polygon" | "rectangle" | "circle"} tool - Name of the create tool.
   * @property {module:esri/widgets/Sketch~CreateToolEventInfo} toolEventInfo - Returns additional information associated with
   * the create operation such as where the user is clicking the view or where the user is moving the cursor to.
   * Value of this parameter changes to `null` when the `create` event's `state` changes to `complete` or `cancel`.
   *
   * @property {"create"} type - The type of the event.
   *
   * @example
   * // Listen to sketch widget's create event.
   * sketch.on("create", function(event) {
   *   // check if the create event's state has changed to complete indicating
   *   // the graphic create operation is completed.
   *   if (event.state === "complete") {
   *     // remove the graphic from the layer. Sketch adds
   *     // the completed graphic to the layer by default.
   *     polygonGraphicsLayer.remove(event.graphic);
   *
   *     // use the graphic.geometry to query features that intersect it
   *     selectFeatures(event.graphic.geometry);
   *   }
   * });
   */

  /**
   * Fires when the user starts updating graphics, is actively updating graphics, and completes updating graphics.
   *
   * @event module:esri/widgets/Sketch#update
   * @property {module:esri/Graphic[]} graphics - An array of graphics that are being updated.
   * @property {"start" | "active" | "complete" | "cancel"} state - The state of the event.
   *
   * **Possible Values:**
   *
   * Value | Description |
   * ----- | ----------- |
   * start | State changes to `start` when a graphic is selected to be updated.
   * active | State is `active` while graphics are being updated and `toolEventInfo` parameter is not `null`.
   * complete | State changes to `complete` after graphics are updated.
   * cancel | State changes to `cancel` when graphics are selected and then unselected without any updates, or when the [update()](#update), [create()](#create) or [cancel()](#cancel) method is called before the `update` event's `state` changes to `complete`.
   *
   * @property {"move" | "transform" | "reshape"} tool - Name of the update operation tool.
   * @property {"update"} type - The type of the event.
   * @property {module:esri/widgets/Sketch~UpdateToolEventInfo} toolEventInfo - Returns additional information associated
   * with the update operation that is taking place for the selected graphics and what stage it is at. Value of this parameter
   * changes to `null` when the `update` event's `state` changes to `complete`.
   *
   * @example
   * // Listen to sketch's update event to show relevant data in a chart
   * // as the graphics are being moved
   * sketch.on("update", onMove);
   *
   * // Point graphics at the center and edge of the buffer polygon are being moved.
   * // Recalculate the buffer with updated geometry and run the query stats using
   * // the updated buffer and update the chart.
   * function onMove(event) {
   *   // If the edge graphic is moving, keep the center graphic
   *   // at its initial location. Only move edge graphic to resize the buffer.
   *   if (event.toolEventInfo && event.toolEventInfo.mover.attributes.edge) {
   *     const toolType = event.toolEventInfo.type;
   *     if (toolType === "move-start") {
   *       centerGeometryAtStart = centerGraphic.geometry;
   *     }
   *     // keep the center graphic at its initial location when edge point is moving
   *     else if (toolType === "move" || toolType === "move-stop") {
   *       centerGraphic.geometry = centerGeometryAtStart;
   *     }
   *   }
   *
   *   // the center or edge graphic is being moved, recalculate the buffer
   *   const vertices = [
   *     [centerGraphic.geometry.x, centerGraphic.geometry.y],
   *     [edgeGraphic.geometry.x, edgeGraphic.geometry.y]
   *   ];
   *
   *   // client-side stats query of features that intersect the buffer
   *   calculateBuffer(vertices);
   *
   *   // user is clicking on the view... call update method with the center and edge graphics
   *   if ((event.state === "cancel" || event.state === "complete")) {
   *     sketch.update({
   *       tool: "move",
   *       graphics: [edgeGraphic, centerGraphic]
   *     });
   *   }
   * }
   */

  /**
   * Fires in response to redo action during creation of a new graphic or updating existing graphics.
   *
   * @event module:esri/widgets/Sketch#redo
   * @property {module:esri/Graphic[]} graphics - An array of graphics that are being updated or created.
   * @property {"point" | "polyline" | "polygon" | "rectangle" | "circle" | "move" | "transform" | "reshape"} tool - Name of the create or update tool that is active.
   * @property {"redo"} type - The type of the event.
   */

  /**
   * Fires in response to undo action during creation of a new graphic or updating existing graphics.
   *
   * @event module:esri/widgets/Sketch#undo
   * @property {module:esri/Graphic[]} graphics - An array of graphics that are being updated or created.
   * @property {"point" | "polyline" | "polygon" | "rectangle" | "circle" | "move" | "transform" | "reshape"} tool - Name of the create or update tool that is active.
   * @property {"undo"} type - The type of the event.
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [create](#event-create) event when the graphic
   * is being created. It returns {@link module:esri/widgets/Sketch~VertexAddEventInfo}
   * when the user clicks the view or {@link module:esri/widgets/Sketch~CursorUpdateEventInfo} or when the user moves the cursor.
   *
   * @typedef {module:esri/widgets/Sketch~VertexAddEventInfo | module:esri/widgets/Sketch~CursorUpdateEventInfo} module:esri/widgets/Sketch~CreateToolEventInfo
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update) event when the user is updating graphics.
   *
   * @typedef {module:esri/widgets/Sketch~MoveEventInfo | module:esri/widgets/Sketch~ReshapeEventInfo | module:esri/widgets/Sketch~RotateEventInfo | module:esri/widgets/Sketch~ScaleEventInfo | module:esri/widgets/Sketch~VertexAddEventInfo | module:esri/widgets/Sketch~VertexRemoveEventInfo} module:esri/widgets/Sketch~UpdateToolEventInfo
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [create](#event-create)
   * event when the user moves the cursor on the view while the graphic is being created.
   *
   * @typedef {Object} module:esri/widgets/Sketch~CursorUpdateEventInfo
   *
   * @property {"cursor-update"} type - Type is always `cursor-update`.
   *
   * @property {number[]} coordinates - An array of numbers representing the coordinates of the cursor location.
   *
   * @example
   * // listen to create event
   * sketch.on("create", function(event){
   *   // respond to create event while the cursor is being moved on the view.
   *   const eventInfo = event.toolEventInfo;
   *   if (eventInfo && eventInfo.type === "cursor-update"){
   *     console.log(eventInfo.type, eventInfo.coordinates[0], eventInfo.coordinates[1]);
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [create](#event-create)
   * or [update](#event-update) event when the user adds vertices to the graphic being created or updated.
   *
   * @typedef {Object} module:esri/widgets/Sketch~VertexAddEventInfo
   *
   * @property {"vertex-add"} type - Type is always `vertex-add`.
   *
   * @property {module:esri/Graphic[]} added - An array of {@link module:esri/Graphic graphics} with {@link module:esri/geometry/Point point} geometries
   * representing the vertices that were added.
   *
   * @example
   * // listen to create event
   * sketch.on("create", function(event){
   *   // check if vertices are being added to the graphic that is being updated.
   *   if (event.toolEventInfo && event.toolEventInfo.type === "vertex-add"){
   *     const addedPoint = event.toolEventInfo.added[0].geometry;
   *     console.log(event.toolEventInfo.type, addedPoint.x, addedPoint.y);
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update) event
   * when the user is removing vertices from the graphic.
   *
   * @typedef {Object} module:esri/widgets/Sketch~VertexRemoveEventInfo
   *
   * @property {"vertex-remove"} type - Type is always `vertex-remove`.
   *
   * @property {module:esri/Graphic[]} removed - An array of {@link module:esri/Graphic graphics} with {@link module:esri/geometry/Point point} geometries
   * representing the vertices that were removed.
   *
   * @example
   * // listen to update event
   * sketch.on("update", function(event){
   *   // check if vertices are being added to the graphic that is being updated.
   *   const eventInfo = event.toolEventInfo;
   *   if (eventInfo && eventInfo.type === "vertex-remove"){
   *     const removedPoint = eventInfo.removed[0].geometry;
   *     console.log(eventInfo.type, removedPoint.x,removedPoint.y);
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update)
   * event while the user is moving the graphics. It returns additional information associated with the move operation
   * and what stage it is at.
   *
   * @typedef {Object} module:esri/widgets/Sketch~MoveEventInfo
   *
   * @property {"move-start" | "move" | "move-stop"} type - Returns information indicating the stage of the move operation.
   *
   * **Possible Values:**
   *
   * Value | Description |
   * ----- | ----------- |
   * move-start | The type changes to `move-start` at the start of `move` operation.
   * move | The type changes to `move` while graphics are being moved.
   * move-stop | The type changes to `move-stop` once graphics are moved.
   *
   * @property {number} dx - Number of pixels moved on the x-axis from the last known position.
   * @property {number} dy - Number of pixels moved on the y-axis from the last known position.
   * @property {module:esri/Graphic} mover - The instance of the graphic that is being moved.
   *
   * @example
   * // listen to update event
   * sketch.on("update", function(event){
   *   // check if the graphics are done being moved, printout dx, dy parameters to the console.
   *   const eventInfo = event.toolEventInfo;
   *   if (eventInfo && eventInfo.type.includes("move")){
   *     console.log(eventInfo.type, eventInfo.dx, eventInfo.dy);
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update)
   * event while the user is reshaping the graphics. It returns additional information associated with the reshape operation
   * and what stage it is at.
   *
   * @typedef {Object} module:esri/widgets/Sketch~ReshapeEventInfo
   *
   * @property {"reshape-start" | "reshape" | "reshape-stop"} type - Returns information indicating the stage of the reshape operation.
   *
   * **Possible Values:**
   *
   * Value | Description |
   * ----- | ----------- |
   * reshape-start | The type changes to `reshape-start` at the start of `reshape` operation.
   * reshape | The type changes to `reshape` while graphics are being reshaped.
   * reshape-stop | The type changes to `reshape-stop` once graphics are reshaped.
   *
   * @example
   * // listen to update event
   * sketch.on("update", function(event){
   *   // check if the graphics are done being reshaped, printout updated graphic's geometry and reshape stage.
   *   const eventInfo = event.toolEventInfo;
   *   if (eventInfo && eventInfo.type.includes("reshape")) {
   *     console.log(eventInfo.type, event.graphics[0].geometry);
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update)
   * event while the user is rotating the graphics. It returns additional information associated with the rotate operation
   * and what stage it is at.
   *
   * @typedef {Object} module:esri/widgets/Sketch~RotateEventInfo
   *
   * @property {"rotate-start" | "rotate" | "rotate-stop"} type - Returns information indicating the stage of the rotate operation.
   *
   * **Possible Values:**
   *
   * Value | Description |
   * ----- | ----------- |
   * rotate-start | The type changes to `rotate-start` at the start of `rotate` operation.
   * rotate | The type changes to `rotate` while graphics are being rotated.
   * rotate-stop | The type changes to `rotate-stop` once graphics are rotated.
   *
   * @property {number} angle - Angle of rotation in degrees.
   * @example
   * // listen to update event
   * sketch.on("update", function(event){
   *   if (evt.tool === "transform") {
   *     if (event.toolEventInfo) {
   *       const info = evt.toolEventInfo,
   *       type = info.type;
   *
   *       // rotate events only
   *       if (type.includes("rotate")) {
   *         // check if the rotation angle exceeded 45
   *         if (info.angle > 45) {
   *           // complete the graphic update operation
   *           sketch.complete();
   *         }
   *       }
   *     }
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update)
   * event while the user is scaling or resizing the graphics. It returns additional information associated with the scale
   * operation and what stage it is at.
   *
   * @typedef {Object} module:esri/widgets/Sketch~ScaleEventInfo
   *
   * @property {"scale-start" | "scale" | "scale-stop"} type - Returns information indicating the stage of the scale operation.
   *
   * **Possible Values:**
   *
   * Value | Description |
   * ----- | ----------- |
   * scale-start | The type changes to `scale-start` at the start of scale or resize operation.
   * scale | The type changes to `scale` while graphics are being scaled or resized.
   * scale-stop | The type changes to `scale-stop` once graphics are scaled or resized.
   *
   * @property {number} xScale - The x scale factor used to enlarge or shrink the geometry.
   * @property {number} yScale - The y scale factor used to enlarge or shrink the geometry.
   */

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/Sketch
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var sketch = new Sketch({
   *   layer: layer,
   *   view: view
   * });
   */
  constructor(params?: any) {
    super(params);
  }

  postInitialize(): void {
    this.own([
      this.viewModel.on("create", () => this.scheduleRender()),
      this.viewModel.on("update", () => this.scheduleRender()),
      this.viewModel.on("create", (event) => this._onOperationComplete(event)),
      this.viewModel.on("update", (event) => this._onOperationComplete(event)),
      this.viewModel.on("delete", (event) => this.emit("delete", event)),
      this.viewModel.on("undo", () => this.scheduleRender()),
      this.viewModel.on("redo", () => this.scheduleRender())
    ]);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _activeCreateOptions: CreateOptions = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * When creating new graphics (for example after [create()](#create) has been called),
   * this property reflects the create tool being used. When updating graphics
   * (for example after [update()](#update) has been called), this property reflects the
   * update tool being used. If no create or update operation is in progress, this is `null`.
   *
   * @name activeTool
   * @instance
   * @type {"point" | "polyline" | "polygon" | "circle" | "rectangle" | "move" | "transform" | "reshape"}
   * @readonly
   */
  @aliasOf("viewModel.activeTool")
  @renderable()
  activeTool: SketchTool = null;

  //----------------------------------
  //  availableCreateTools
  //----------------------------------

  /**
   * Property controlling the visibility and order of create tool buttons.
   *
   * @name availableCreateTools
   * @since 4.12
   * @instance
   * @default ["point", "polyline", "polygon", "rectangle", "circle"]
   * @type {string[]}
   */
  @property({
    cast: (tools: string[]): CreateTool[] => {
      if (!tools || !tools.length) {
        return null;
      }

      const validTools = ["point", "polyline", "polygon", "rectangle", "circle"];
      const validToolsSet = createSetFromValues(validTools);

      return tools.filter((toolName) => validToolsSet.has(toolName)) as CreateTool[];
    }
  })
  @renderable()
  availableCreateTools: CreateTool[] = ["point", "polyline", "polygon", "rectangle", "circle"];

  //----------------------------------
  //  createGraphic
  //----------------------------------

  /**
   * The graphic that is being created.
   *
   * @name createGraphic
   * @instance
   * @type {module:esri/Graphic}
   * @readonly
   */
  @aliasOf("viewModel.createGraphic")
  @renderable()
  createGraphic: Graphic = null;

  //----------------------------------
  //  creationMode
  //----------------------------------

  /**
   * Defines the default behavior once the [create](#create) operation is completed. By default, the user will be
   * able to continuously create graphics with same geometry types.
   *
   * **Possible Values:**
   *
   * Value | Description |
   * ----- | ----------- |
   * continuous | This is the default. Users can continue creating graphics with same geometry types.
   * single | User can create a single graphic with the specified geometry type. User must choose an operation once the graphic is created.
   * update | The graphic will be selected for an [update](#update) operation once the `create` operation is completed.
   *
   * @name creationMode
   * @since 4.14
   * @instance
   * @default continuous
   * @type {"single"| "continuous"| "update"}
   */
  @property()
  creationMode: CreationMode = "continuous";

  //----------------------------------
  //  defaultCreateOptions
  //----------------------------------

  /**
   * Default create options set for the Sketch widget.
   *
   * @name defaultCreateOptions
   * @instance
   * @since 4.14
   *
   * @property {string} [mode] - Create operation mode how the graphic can be created.
   *
   * **Possible Values:**
   *
   * Value | Description |
   * ----- | ----------- |
   * hybrid | This is the default. Vertices are added while the pointer is clicked or dragged. Applies to and is the default for `polygon` and `polyline`.
   * freehand | Vertices are added while the pointer is dragged. Applies to `polygon`, `polyline` `rectangle` and `circle`. Default for `rectangle` and `circle`.
   * click | Vertices are added when the pointer is clicked.
   * @type {Object}
   */
  @aliasOf("viewModel.defaultCreateOptions")
  @renderable()
  defaultCreateOptions: CreateOptions = null;

  //----------------------------------
  //  defaultUpdateOptions
  //----------------------------------

  /**
   * Default update options set for the Sketch widget. Update options set on this property will be overwritten if the update options are changed
   * when [update()](#update) method is called.
   *
   * @name defaultUpdateOptions
   * @instance
   * @since 4.11
   *
   * @property {string} [tool] - Name of the update tool. The default tool is `transform` for graphics with polygon and polyline geometries and `move` for graphics with point and multipoint geometries.
   *                             However, if a graphic with point geometry uses a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer}, the default tool is `transform`.
   * @property {boolean} [enableRotation=true] - Indicates if the `rotation` operation will be enabled when updating graphics. Only applies if `tool` is `transform`.
   * @property {boolean} [enableScaling=true] - Indicates if the `scale` operation will be enabled when updating graphics. Only applies if `tool` is `transform`.
   * @property {boolean} [multipleSelectionEnabled=true] - Indicates whether more than one selection can be made at once. This pertains to shift+click interaction with the `transform` tool.
   * @property {boolean} [preserveAspectRatio=false] - Indicates if the uniform scale operation will be enabled when updating graphics. `enableScaling`
   * must be set `true` when setting this property to `true`. Only applies if `tool` is `transform` and is always `true` when transforming points that use a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer}.
   * @property {boolean} [toggleToolOnClick=true] - Indicates if the graphic being updated can be toggled between `transform` and `reshape` update options.
   * @instance
   * @type {Object}
   */
  @aliasOf("viewModel.defaultUpdateOptions")
  @renderable()
  defaultUpdateOptions: UpdateOptions = null;

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The Sketch widget's default CSS icon class.
   *
   * @name iconClass
   * @instance
   * @type {string}
   */
  @property() iconClass = CSS.widgetIcon;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The Sketch widget's default label.
   *
   * @name label
   * @instance
   * @type {string}
   */
  @property()
  label: string = i18n.widgetLabel;

  //----------------------------------
  //  layer
  //----------------------------------

  /**
   * The {@link module:esri/layers/GraphicsLayer} associated with the Sketch widget. The Sketch widget adds new {@link module:esri/Graphic graphics} to this layer or can only update graphics
   * stored in this layer.
   *
   * @name layer
   * @instance
   * @type {module:esri/layers/GraphicsLayer}
   *
   */
  @aliasOf("viewModel.layer")
  @renderable()
  layer: GraphicsLayer = null;

  //----------------------------------
  //  layout
  //----------------------------------

  /**
   * Determines the layout/orientation of the Sketch widget.
   *
   * @name layout
   * @since 4.10
   * @instance
   * @default horizontal
   * @type {"vertical"|"horizontal"}
   */
  @property({ value: "horizontal" })
  @renderable()
  set layout(value: Layout) {
    if (value !== "vertical") {
      value = "horizontal";
    }

    this._set("layout", value);
  }

  //----------------------------------
  //  state
  //----------------------------------

  /**
   * The Sketch widget's state.
   *
   * @name state
   * @instance
   * @type {"ready" | "disabled" | "active"}
   * @readonly
   *
   */
  @aliasOf("viewModel.state")
  @renderable()
  state: State = null;

  //----------------------------------
  //  updateGraphics
  //----------------------------------

  /**
   * An array of {@link module:esri/Graphic graphics} that are being updated by the Sketch widget.
   *
   * @name updateGraphics
   * @instance
   * @type {module:esri/core/Collection<module:esri/Graphic>}
   * @readonly
   */
  @aliasOf("viewModel.updateGraphics")
  @renderable(["updateGraphics", "updateGraphics.length"])
  updateGraphics: Collection<Graphic> = new Collection();

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the Sketch widget to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  @renderable()
  view: MapView | SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the Sketch widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Sketch/SketchViewModel} class to access
   * all properties and methods on the Sketch widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Sketch/SketchViewModel}
   */
  @property()
  @renderable("viewModel.state")
  @vmEvent(["create", "update", "undo", "redo"])
  viewModel: SketchViewModel = new SketchViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Create a graphic with the geometry specified in the `tool` parameter. When the first vertex of the graphic is added,
   * the [create](#event-create) event will start firing. The provided `tool` will become the [activeTool](#activeTool).
   *
   * @since 4.10
   * @method create
   * @instance
   *
   * @param {"point" | "polyline" | "polygon" | "rectangle" | "circle"} tool - Name of the create tool. Specifies the geometry for the graphic to be created.
   * @param {Object} [createOptions] - Options for the graphic to be created.
   * @param {"hybrid" | "freehand" | "click"} [createOptions.mode] - Specifies how the graphic can be created. The create mode applies only when creating
   * `polygon`, `polyline`, `rectangle` and `circle` geometries.
   *
   * **Possible Values:**
   *
   * Value | Description |
   * ----- | ----------- |
   * hybrid | Vertices are added while the pointer is clicked or dragged. Applies to and is the default for `polygon` and `polyline`.
   * freehand | Vertices are added while the pointer is dragged. Applies to `polygon`, `polyline` `rectangle` and `circle`. Default for `rectangle` and `circle`.
   * click | Vertices are added when the pointer is clicked.
   *
   * @example
   * // Call create method to create a polygon with freehand mode.
   * sketch.create("polygon", { mode: "freehand" });
   *
   * // listen to create event, only respond when event's state changes to complete
   * sketch.on("create", function(event) {
   *   if (event.state === "complete") {
   *     // remove the graphic from the layer associated with the Sketch widget
   *     // instead use the polygon that user created to query features that
   *     // intersect it.
   *     polygonGraphicsLayer.remove(event.graphic);
   *     selectFeatures(event.graphic.geometry);
   *   }
   * });
   */

  create(tool: CreateTool, options?: CreateOptions): void {
    this._activeCreateOptions = options || null;
    this.viewModel.create(tool, options);
  }

  /**
   * Initializes an update operation for the specified graphic(s) and fires [update](#event-update) event.
   *
   * @since 4.10
   * @method update
   * @instance
   * @param {module:esri/Graphic | module:esri/Graphic[]} graphics - A graphic or an array of graphics to be updated. Only graphics added to SketchViewModel's [layer](#layer) property can be updated.
   * @param {Object} [updateOptions] - Update options for the graphics to be updated.
   * @param {"transform" | "reshape" | "move"} [updateOptions.tool] - Name of the update tool. Specifies the update operation for the selected graphics. The provided tool will become the [activeTool](#activeTool).
   *
   * **Possible Values:**
   *
   * Value | Description |
   * ----- | ----------- |
   * transform | This is the *default* tool for graphics with a {@link module:esri/geometry/Polygon polygon} geometry, {@link module:esri/geometry/Polyline polyline} geometry or graphics that use a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer} with a {@link module:esri/geometry/Point point} geometry. It allows one or multiple graphics to be scaled, rotated and moved by default. Its default behavior can be changed by setting the `enableRotation`, `enableScaling` or `preserveAspectRatio` arguments when calling the `update` method or setting them on the [defaultUpdateOptions](#defaultUpdateOptions) property when the Sketch widget initializes.
   * reshape | This tool allows the entire graphic or individual vertices of the graphic to be moved. Vertices can be added or removed. This tool can only be used with a single graphic that has a {@link module:esri/geometry/Polygon polygon} or {@link module:esri/geometry/Polyline polyline} geometry.
   * move | This is the *default* tool for graphics with a {@link module:esri/geometry/Point point} geometry that do not use a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer}. It should be used for specific cases where you just want to move selected `polygon` and `polyline` graphics without additional options. Additionally, the `move` tool does not support toggling to different modes, since the `move` operation is built into both the `transform` and `reshape` tools by default.
   *
   * @param {boolean} [updateOptions.enableRotation=true] - Indicates if the `rotation` operation will be enabled when updating graphics. Only applies if `tool` is `transform`.
   * @param {boolean} [updateOptions.enableScaling=true] - Indicates if the `scale` operation will be enabled when updating graphics. Only applies if `tool` is `transform`.
   * @param {boolean} [updateOptions.preserveAspectRatio=false] - Indicates if the uniform scale operation will be enabled when updating graphics. `enableScaling`
   * must be set `true` when setting this property to `true`. Only applies if `tool` is `transform` and is always `true` when transforming points that use a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer}.
   * @param {boolean} [updateOptions.toggleToolOnClick=true] - Indicates if the graphic being updated can be toggled between `transform` and `reshape` update options.
   *
   * @return {Promise<void>} Resolves when the requested update tool has been loaded and is ready to use.
   *
   * @example
   * // start update operation for the selected graphic
   * // with transform tool. Only allow uniform scaling operation.
   * sketch.update([selectedGraphic], {
   *   tool: "transform",
   *   enableRotation: false,
   *   enableScaling: true,
   *   preserveAspectRatio: true,
   *   toggleToolOnClick: false
   * });
   *
   * @example
   * // Listen to sketch's update event to validate graphic's
   * // location while it is being reshaped or moved
   * sketch.on("update", onGraphicUpdate);
   * function onGraphicUpdate(event) {
   *   // get the graphic as it is being updated
   *   const graphic = event.graphics[0];
   *   // check if the graphic is intersecting school buffers
   *   intersects = geometryEngine.intersects(buffers, graphic.geometry);
   *
   *   // change the graphic symbol to valid or invalid symbol
   *   // depending the graphic location
   *   graphic.symbol = (intersects) ? invalidSymbol : validSymbol
   *
   *   // check if the update event's the toolEventInfo.type is move-stop or reshape-stop
   *   // user finished moving or reshaping the graphic, call complete method.
   *   // This changes update event state to complete.
   *   const toolType = event.toolEventInfo.type;
   *   if (event.toolEventInfo && (toolType === "move-stop" || toolType === "reshape-stop")) {
   *     if (!intersects) {
   *       sketch.complete();
   *     }
   *   } else if ((event.state === "cancel" || event.state === "complete")) {
   *       // graphic update has been completed or cancelled
   *       // if the graphic is in a bad spot, call sketch's update method again
   *       // giving user a chance to correct the location of the graphic
   *       if ((!contains) || (intersects)) {
   *         sketch.update({
   *           tool: "reshape",
   *           graphics: [graphic],
   *           toggleToolOnClick: false
   *         });
   *       }
   *   }
   * }
   */
  update(graphicOrGraphics: Graphic | Graphic[], options?: UpdateOptions): Promise<void> {
    return this.viewModel.update(graphicOrGraphics, options);
  }

  /**
   * Completes the active operation and fires the [create](#event-create) or [update](#event-update) event
   * and changes the event's state to `complete`. If called in the middle of a create operation, `complete()` finishes
   * the active create operation and keeps the valid geometry.
   *
   * @method complete
   * @instance
   *
   */
  @aliasOf("viewModel.complete")
  complete(): void {}

  /**
   * Cancels the active operation and fires the [create](#event-create) or [update](#event-update) event
   * and changes the event's state to `cancel`. If called in the middle of a create operation, `cancel()` discards
   * the partially created graphic.
   *
   * @since 4.10
   * @method cancel
   * @instance
   *
   */
  @aliasOf("viewModel.cancel")
  cancel(): void {}

  /**
   * Incrementally undo actions recorded in the stack. Calling this method will fire the
   * [undo](#event-undo) event.
   *
   * @method undo
   * @instance
   *
   */
  @aliasOf("viewModel.undo")
  undo(): void {}

  /**
   * Incrementally redo actions recorded in the stack. Calling this method will fire the
   * [redo](#event-redo) event.
   *
   * @method redo
   * @instance
   *
   */
  @aliasOf("viewModel.redo")
  redo(): void {}

  /**
   * Deletes the selected graphics used in the update workflow. Calling this method will fire the
   * [delete](#event-delete) event.
   *
   * @method delete
   * @instance
   * @since 4.14
   *
   */
  @aliasOf("viewModel.delete")
  delete(): void {}

  render(): VNode {
    const {
      viewModel: { state },
      label
    } = this;
    const classes = this.classes(
      CSS.base,
      CSS.esriWidget,
      state === "disabled" ? CSS.disabled : null,
      this.layout === "vertical" ? CSS.verticalLayout : null
    );

    return (
      <div aria-label={label} class={classes}>
        <div class={CSS.panel}>{this.renderTopPanelContents()}</div>
        <div class={this.classes(CSS.panel, CSS.infoPanel)}>{this.renderInfoPanelContents()}</div>
      </div>
    );
  }

  protected renderTopPanelContents(): VNode {
    const sectionClasses = this.classes(CSS.section, CSS.toolSection);
    const { availableCreateTools } = this;

    return [
      <div key="navigation-button-container" class={sectionClasses}>
        {this.renderNavigationButtons()}
      </div>,
      availableCreateTools && availableCreateTools.length ? (
        <div class={sectionClasses}>{this.renderDrawButtons()}</div>
      ) : null,
      <div key="menu-button-container" class={sectionClasses}>
        {this.renderMenuButtons()}
      </div>
    ];
  }

  protected renderInfoPanelContents(): VNode {
    if (this.updateGraphics.length) {
      return [
        <div
          class={this.classes(CSS.section, CSS.infoSection, CSS.infoCountSection)}
          key="feature-count-container"
        >
          {this.renderFeatureCount()}
        </div>,
        <div class={this.classes(CSS.section, CSS.infoSection)} key="delete-button-container">
          {this.renderDeleteButton()}
        </div>
      ];
    }

    return undefined;
  }

  protected renderFeatureCount(): VNode {
    const {
      layout,
      updateGraphics: { length: count }
    } = this;

    const countLabel = substitute(count === 1 ? i18n.featureCount : i18n.featuresCount, { count });

    return (
      <div class={CSS.featureCountBadge} aria-label={countLabel}>
        <span class={CSS.featureCountNumber}>{layout === "vertical" ? count : countLabel}</span>
      </div>
    );
  }

  protected renderDeleteButton(): VNode {
    const title = i18n.deleteFeature;

    return (
      <button
        aria-label={title}
        bind={this}
        class={this.classes(CSS.button, CSS.resetIcon)}
        onclick={this.delete}
        title={title}
      />
    );
  }

  protected renderNavigationButtons(): VNode {
    return [this.renderTransformButton(), this.renderReshapeButton()];
  }

  protected renderTransformButton(): VNode {
    const title = i18n.transform;
    const classes = [CSS.button, CSS.panIcon];
    const defaultTool = this.viewModel.defaultUpdateOptions.tool;
    const isActive = !!(this.activeTool === "transform" || this.activeTool === "move");

    if ((this.state === "ready" && defaultTool === "transform") || isActive) {
      classes.push(CSS.selectedButton);
    }

    return (
      <button
        aria-label={title}
        bind={this}
        class={this.classes(classes)}
        onclick={this._activateTransformTool}
        title={title}
      />
    );
  }

  protected renderReshapeButton(): VNode {
    const title = i18n.reshape;
    const classes = [CSS.button, CSS.cursorIcon];
    const defaultTool = this.viewModel.defaultUpdateOptions.tool;
    const isDisabled = this.updateGraphics.length > 1;

    if ((this.state === "ready" && defaultTool === "reshape") || this.activeTool === "reshape") {
      classes.push(CSS.selectedButton);
    }

    return (
      <button
        aria-label={title}
        bind={this}
        class={this.classes(classes)}
        onclick={this._activateReshapeTool}
        disabled={isDisabled}
        title={title}
      />
    );
  }

  protected renderDrawButtons(): VNode {
    return this.availableCreateTools.map((toolName) => {
      if (toolName === "point") {
        return this.renderPointButton();
      }

      if (toolName === "polyline") {
        return this.renderPolylineButton();
      }

      if (toolName === "polygon") {
        return this.renderPolygonButton();
      }

      if (toolName === "rectangle") {
        return this.renderRectangleButton();
      }

      if (toolName === "circle") {
        return this.renderCircleButton();
      }

      return undefined;
    });
  }

  protected renderPointButton(): VNode {
    const title = i18n.drawPoint;
    const classes = [CSS.button, CSS.pointIcon];

    if (this.activeTool === "point") {
      classes.push(CSS.selectedButton);
    }
    return (
      <button
        aria-label={title}
        bind={this}
        class={this.classes(classes)}
        onclick={this._activateCreatePoint}
        title={title}
      />
    );
  }

  protected renderPolygonButton(): VNode {
    const title = i18n.drawPolygon;
    const classes = [CSS.button, CSS.polygonIcon];

    if (this.activeTool === "polygon") {
      classes.push(CSS.selectedButton);
    }

    return (
      <button
        aria-label={title}
        bind={this}
        class={this.classes(classes)}
        onclick={this._activateCreatePolygon}
        title={title}
      />
    );
  }

  protected renderPolylineButton(): VNode {
    const title = i18n.drawPolyline;
    const classes = [CSS.button, CSS.polylineIcon];

    if (this.activeTool === "polyline") {
      classes.push(CSS.selectedButton);
    }

    return (
      <button
        aria-label={title}
        bind={this}
        class={this.classes(classes)}
        onclick={this._activateCreatePolyline}
        title={title}
      />
    );
  }

  protected renderCircleButton(): VNode {
    const title = i18n.drawCircle;
    const classes = [CSS.button, CSS.circleIcon];

    if (this.activeTool === "circle") {
      classes.push(CSS.selectedButton);
    }

    return (
      <button
        aria-label={title}
        bind={this}
        class={this.classes(classes)}
        onclick={this._activateCreateCircle}
        title={title}
      />
    );
  }

  protected renderRectangleButton(): VNode {
    const title = i18n.drawRectangle;
    const classes = [CSS.button, CSS.rectangleIcon];

    if (this.activeTool === "rectangle") {
      classes.push(CSS.selectedButton);
    }

    return (
      <button
        aria-label={title}
        bind={this}
        class={this.classes(classes)}
        onclick={this._activateCreateRectangle}
        title={title}
      />
    );
  }

  protected renderMenuButtons(): VNode {
    return [this.renderUndoButton(), this.renderRedoButton()];
  }

  protected renderUndoButton(): VNode {
    const title = i18n.undo;
    const isDisabled = !this.viewModel.canUndo();
    const icon = isRTL() ? CSS.redoIcon : CSS.undoIcon;

    return (
      <button
        aria-label={title}
        bind={this}
        class={this.classes(CSS.button, icon)}
        disabled={isDisabled}
        onclick={this._undo}
        title={title}
      />
    );
  }

  protected renderRedoButton(): VNode {
    const title = i18n.redo;
    const isDisabled = !this.viewModel.canRedo();
    const icon = isRTL() ? CSS.undoIcon : CSS.redoIcon;

    return (
      <button
        aria-label={title}
        bind={this}
        class={this.classes(CSS.button, icon)}
        disabled={isDisabled}
        onclick={this._redo}
        title={title}
      />
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _isUpdateToolActive(): boolean {
    return !!(
      this.activeTool === "transform" ||
      this.activeTool === "reshape" ||
      this.activeTool === "move"
    );
  }

  private _onOperationComplete(event: CreateEvent | UpdateEvent): void {
    const { state } = event;

    if (state === "complete") {
      const { creationMode } = this;
      const { type } = event;

      if (type === "create") {
        const { tool, graphic } = event as CreateEvent;
        const oldOptions = this._activeCreateOptions;
        this._activeCreateOptions = null;

        if (creationMode === "continuous") {
          this.create(tool, oldOptions);
        } else if (creationMode === "update") {
          this.update([graphic]);
        }
      }
    }
  }

  // Resets the default update tool
  private _modifyDefaultUpdateTool(tool: UpdateTool): void {
    if (this.viewModel.defaultUpdateOptions) {
      this.viewModel.defaultUpdateOptions.tool = tool;
    }
  }

  private _activateTransformTool(): void {
    // Create tool is active - reset the widget
    if (this.state === "active" && !this._isUpdateToolActive()) {
      this.viewModel.cancel();
    }
    // Reshape tool is active - toggle tool
    else if (this.activeTool === "reshape") {
      this.viewModel.toggleUpdateTool();
    }

    // Set the default update tool to 'transform'
    this._modifyDefaultUpdateTool("transform");
    this.view.focus();
  }

  private _activateReshapeTool(): void {
    // Create tool is active - reset the widget
    if (this.state === "active" && !this._isUpdateToolActive()) {
      this.viewModel.cancel();
    }

    // Transform tool is active - toggle tool
    // -- Reshape workflow only supports one graphic
    if (this.activeTool === "transform" && this.updateGraphics.length === 1) {
      this.viewModel.toggleUpdateTool();
    }

    // Set the default update tool to 'reshape' temporarily
    this._modifyDefaultUpdateTool("reshape");
    this.view.focus();
  }

  private _activateCreatePoint(): void {
    this._activateCreateTool("point");
  }

  private _activateCreatePolygon(): void {
    this._activateCreateTool("polygon");
  }

  private _activateCreatePolyline(): void {
    this._activateCreateTool("polyline");
  }

  private _activateCreateCircle(): void {
    this._activateCreateTool("circle");
  }

  private _activateCreateRectangle(): void {
    this._activateCreateTool("rectangle");
  }

  private _activateCreateTool(toolName: CreateTool): void {
    if (this.activeTool === toolName) {
      this.cancel();
    } else {
      this.create(toolName);
    }

    this.view.focus();
  }

  private _undo(): void {
    this.undo();
    this.view.focus();
  }

  private _redo(): void {
    this.redo();
    this.view.focus();
  }
}

export = Sketch;
