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
 * @see [Attribution.tsx (widget view) [deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Attribution.tsx)
 * @see [Attribution.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Attribution.scss)
 * @see module:esri/widgets/Attribution/AttributionViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

// esri.core
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.Attribution
import AttributionViewModel from "esri/widgets/Attribution/AttributionViewModel";

// esri.widgets.Attribution.t9n
import AttributionMessages from "esri/widgets/Attribution/t9n/Attribution";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-attribution esri-widget",
  poweredBy: "esri-attribution__powered-by",
  sources: "esri-attribution__sources",
  open: "esri-attribution--open",
  sourcesOpen: "esri-attribution__sources--open",
  link: "esri-attribution__link",
  widgetIcon: "esri-icon-description",

  // common.css
  interactive: "esri-interactive"
};

@subclass("esri.widgets.Attribution")
class Attribution extends Widget {
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
  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  protected override initialize(): void {
    this.own(watchUtils.on(this, "viewModel.items", "change", () => this.scheduleRender()));
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
  //  attributionText
  //----------------------------------

  /**
   * Full attribution text.
   *
   * @name attributionText
   * @instance
   * @type {string}
   * @readonly
   */
  @property({
    readOnly: true,
    dependsOn: ["viewModel.items.length", "itemDelimiter"]
  })
  get attributionText(): string {
    return this.viewModel.items
      .reduce((unique, item) => {
        if (unique.indexOf(item.text) === -1) {
          unique.push(item.text);
        }

        return unique;
      }, [])
      .join(this.itemDelimiter);
  }

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The widget's default CSS icon class.
   *
   * @since 4.7
   * @name iconClass
   * @instance
   * @type {string}
   */
  @property()
  override iconClass = CSS.widgetIcon;

  //----------------------------------
  //  itemDelimiter
  //----------------------------------

  /**
   * Text used to split attribution by {@link module:esri/layers/Layer layers}
   *
   * @name itemDelimiter
   * @instance
   * @type {string}
   * @default |
   */
  @property()
  itemDelimiter = " | ";

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label.
   *
   * @since 4.7
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  override label: string = undefined;

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * The widget's message bundle
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @messageBundle("esri/widgets/Attribution/t9n/Attribution")
  messages: AttributionMessages = null;

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
  view: IMapView | ISceneView = null;

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
  @property({ type: AttributionViewModel })
  override viewModel = new AttributionViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  override render(): VNode {
    const classes = {
      [CSS.open]: this._isOpen
    };

    return (
      <div
        bind={this}
        class={this.classes(CSS.base, classes)}
        onclick={this._toggleState}
        onkeydown={this._toggleState}
      >
        {this.renderSourcesNode()}
        {this.renderPoweredBy()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderPoweredBy(): VNode {
    return (
      <div class={CSS.poweredBy}>
        Powered by{" "}
        <a class={CSS.link} href="http://www.esri.com/" target="_blank" rel="noreferrer">
          Esri
        </a>
      </div>
    );
  }

  protected renderSourcesNode(): VNode {
    const isOpen = this._isOpen;
    const interactive = this._isInteractive();
    const sourceTabIndex = interactive ? 0 : -1;
    const { attributionText } = this;
    const role = interactive ? "button" : undefined;

    const sourceClasses = {
      [CSS.sourcesOpen]: isOpen,
      [CSS.interactive]: interactive
    };

    return (
      <div
        afterCreate={this._afterSourcesNodeCreate}
        afterUpdate={this._afterSourcesNodeUpdate}
        bind={this}
        class={this.classes(CSS.sources, sourceClasses)}
        innerHTML={attributionText}
        role={role}
        tabIndex={sourceTabIndex}
      />
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _afterSourcesNodeCreate(element: Element): void {
    this._prevSourceNodeHeight = element.clientWidth;
  }

  private _afterSourcesNodeUpdate(element: Element): void {
    let shouldRender = false;

    const { clientHeight, clientWidth, scrollWidth } = element;

    const attributionTextOverflowed = scrollWidth >= clientWidth;
    const attributionTextOverflowChanged =
      this._attributionTextOverflowed !== attributionTextOverflowed;
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

export default Attribution;
