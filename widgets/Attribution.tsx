/**
 * The Attribution displays attribution text for the layers in a map.
 * The text displayed for the layers is either a list of data providers
 * or sources as defined in the layer's custom attribution data, or the copyright text.
 * This widget automatically updates based on layer visibility and map extent and
 * displays a single line of attribution that can be expanded with a single click
 * to view all data sources.
 *
 * An instance of the Attribution widget is available in every
 * {@link module:esri/views/MapView} and {@link module:esri/views/SceneView} by default.
 * See {@link module:esri/views/ui/DefaultUI} for more details.
 *
 * ![attribution](../assets/img/apiref/widgets/attribution.png)
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/widgets/Attribution
 * @since 4.0
 *
 * @see [Attribution.tsx (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Attribution.tsx)
 * @see [Attribution.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Attribution.scss)
 * @see module:esri/widgets/Attribution/AttributionViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />

import {
  aliasOf,
  subclass,
  property,
  declared
} from "../core/accessorSupport/decorators";

import {
  tsx,
  renderable,
  accessibleHandler
} from "./support/widget";

import Widget = require("./Widget");
import AttributionViewModel = require("./Attribution/AttributionViewModel");
import View = require("../views/View");

const CSS = {
  base: "esri-attribution esri-widget",
  poweredBy: "esri-attribution__powered-by",
  sources: "esri-attribution__sources",
  open: "esri-attribution--open",
  sourcesOpen: "esri-attribution__sources--open",
  link: "esri-attribution__link",

  // common.css
  interactive: "esri-interactive"
};

@subclass("esri.widgets.Attribution")
class Attribution extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Attribution
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(params?: any) {
    super();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _isOpen = false;

  private _attributionTextOverflowed = false;

  private _prevSourceNodeHeight = 0;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   * @name view
   * @instance
   */
  @aliasOf("viewModel.view")
  view: View = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Attribution/AttributionViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @autocast
   * @type {module:esri/widgets/Attribution/AttributionViewModel}
   */
  @property({
    type: AttributionViewModel
  })
  @renderable([
    "attributionText",
    "state",
    "view.size"
  ])
  viewModel: AttributionViewModel = new AttributionViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const classes = {
      [CSS.open]: this._isOpen
    };

    return (
      <div bind={this}
           class={CSS.base}
           classes={classes}
           onclick={this._toggleState}
           onkeydown={this._toggleState}>
        {this._renderSourcesNode()}
        <div class={CSS.poweredBy}>Powered by <a target="_blank"
                                                 href="http://www.esri.com/"
                                                 class={CSS.link}>Esri</a></div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _renderSourcesNode(): any {
    const isOpen = this._isOpen;
    const interactive = this._isInteractive();
    const sourceTabIndex = interactive ? 0 : -1;
    const attributionText = this.get<string>("viewModel.attributionText");
    const role = interactive ? "button" : undefined;

    const sourceClasses = {
      [CSS.sourcesOpen]: isOpen,
      [CSS.interactive]: interactive
    };

    return <div afterCreate={this._afterSourcesNodeCreate}
                afterUpdate={this._afterSourcesNodeUpdate}
                bind={this}
                class={CSS.sources}
                classes={sourceClasses}
                innerHTML={attributionText}
                role={role}
                tabIndex={sourceTabIndex} />;
  }

  private _afterSourcesNodeCreate(element: Element): void {
    this._prevSourceNodeHeight = element.clientWidth;
  }

  private _afterSourcesNodeUpdate(element: Element): void {
    let shouldRender = false;

    const { clientHeight, clientWidth, scrollWidth } = element;

    const attributionTextOverflowed = scrollWidth >= clientWidth;
    const attributionTextOverflowChanged = this._attributionTextOverflowed !== attributionTextOverflowed;
    this._attributionTextOverflowed = attributionTextOverflowed;

    if (attributionTextOverflowChanged) {
      shouldRender = true;
    }

    if (this._isOpen) {
      const recentlyClosed = clientHeight < this._prevSourceNodeHeight;
      this._prevSourceNodeHeight = clientHeight;

      if (recentlyClosed) {
        this._isOpen = false;
        shouldRender = true;
      }
    }

    if (shouldRender) {
      this.scheduleRender();
    }
  }

  @accessibleHandler()
  private _toggleState(): void {
    if (this._isInteractive()) {
      this._isOpen = !this._isOpen;
    }
  }

  private _isInteractive(): boolean {
    return this._isOpen || this._attributionTextOverflowed;
  }

}

export = Attribution;
