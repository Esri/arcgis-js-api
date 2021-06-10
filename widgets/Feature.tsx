/**
 * The Feature widget displays a graphic according to its [PopupTemplate](esri-PopupTemplate.html).
 * This widget is useful in instances where you want to display information about a feature but without
 * the use of a [Popup](esri-widgets-Popup.html).
 *
 * @module esri/widgets/Feature
 * @since 4.7
 *
 * @see [Feature.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Feature.tsx)
 * @see [Feature.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Feature.scss)
 * @see [Sample - Feature widget](../sample-code/widgets-feature/index.html)
 * @see [Sample - Feature widget in a side panel](../sample-code/widgets-feature-sidepanel/index.html)
 * @see [Sample - Feature widget - Query graphics from multiple layerViews](../sample-code/widgets-feature-multiplelayers/index.html)
 * @see module:esri/widgets/Feature/FeatureViewModel
 * @see module:esri/widgets/Popup
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/PopupTemplate
 * @see [Arcade Profiles: Popup](https://developers.arcgis.com/arcade/guide/profiles/#popup)
 * @see [Arcade - expression language](https://developers.arcgis.com/javascript/latest/guide/arcade/index.html)
 *
 * @example
 * // Create graphic
 *
 * var graphic = new Graphic({
 *   geometry: view.center,
 *   popupTemplate: {
 *     content: [{
 *       // add popupTemplate content
 *     }]
 *   }
 * });
 *
 * var feature = new Feature({
 *   graphic: graphic,
 *   map: map,
 *   spatialReference: spatialReference
 * });
 *
 * view.ui.add(feature, "top-right");
 *
 */

// esri
import { SpatialReference } from "esri/geometry";
import Graphic from "esri/Graphic";
import { substitute } from "esri/intl";
import EsriMap from "esri/Map";

// esri.core
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.popup
import { Content as ContentElement } from "esri/popup/content";

// esri.popup.content
import Customcontent from "esri/popup/content/CustomContent";
import TextContent from "esri/popup/content/TextContent";

// esri.views
import { ISceneView } from "esri/views/ISceneView";
import MapView from "esri/views/MapView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.Feature
import FeatureAttachments from "esri/widgets/Feature/FeatureAttachments";
import FeatureContent from "esri/widgets/Feature/FeatureContent";
import FeatureFields from "esri/widgets/Feature/FeatureFields";
import FeatureMedia from "esri/widgets/Feature/FeatureMedia";
import FeatureViewModel from "esri/widgets/Feature/FeatureViewModel";

// esri.widgets.Feature.support
import { FeatureContentMixin } from "esri/widgets/Feature/support/FeatureContentMixin";

// esri.widgets.Feature.t9n
import type FeatureMessages from "esri/widgets/Feature/t9n/Feature";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { tsx, messageBundle } from "esri/widgets/support/widget";

// esri.widgets.support.t9n
import UriUtilsMessages from "esri/widgets/support/t9n/uriUtils";

interface VisibleContentElements {
  attachments?: boolean;
  fields?: boolean;
  media?: boolean;
  text?: boolean;
}

interface VisibleElements {
  title?: boolean;
  content?: boolean | VisibleContentElements;
  lastEditedInfo?: boolean;
}

const CSS = {
  // common
  iconText: "esri-icon-font-fallback-text",
  iconLoading: "esri-icon-loading-indicator esri-rotating",
  esriTable: "esri-widget__table",
  esriWidget: "esri-widget",
  // popup renderer
  base: "esri-feature",
  // containers and content
  container: "esri-feature__size-container",
  title: "esri-feature__title",
  main: "esri-feature__main-container",
  btn: "esri-feature__button",
  icon: "esri-feature__icon",
  content: "esri-feature__content",
  contentElement: "esri-feature__content-element",
  text: "esri-feature__text",
  lastEditedInfo: "esri-feature__last-edited-info",
  // fields element
  fields: "esri-feature__fields",
  fieldHeader: "esri-feature__field-header",
  fieldData: "esri-feature__field-data",
  fieldDataDate: "esri-feature__field-data--date",
  // loading
  loadingSpinnerContainer: "esri-feature__loading-container",
  spinner: "esri-feature__loading-spinner"
};

const DEFAULT_VISIBLE_ELEMENTS = {
  title: true,
  content: true,
  lastEditedInfo: true
};

type ContentWidget = FeatureAttachments | FeatureContent | FeatureFields | FeatureMedia;

@subclass("esri.widgets.Feature")
class Feature extends FeatureContentMixin(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Feature
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */

  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
    this.own(
      watchUtils.init(this, "viewModel.contentViewModels", () => this._setupContentWidgets())
    );
  }

  destroy(): void {
    this._destroyContentWidgets();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _contentWidgets: ContentWidget[] = [];

  //--------------------------------------------------------------------------
  //
  // VisibleContentElements typedef
  //
  //--------------------------------------------------------------------------

  /**
   * @typedef module:esri/widgets/Feature~VisibleContentElements
   *
   * @property {boolean} [attachments] - Indicates whether to display any {@link module:esri/popup/content/AttachmentsContent} elements. Default is `true`.
   * @property {boolean} [fields] - Indicates whether to display any {@link module:esri/popup/content/FieldsContent} elements. Default is `true`.
   * @property {boolean} [media] - Indicates whether to display any {@link module:esri/popup/content/MediaContent} elements. Default is `true`.
   * @property {boolean} [text] - Indicates whether to display any {@link module:esri/popup/content/TextContent} elements. Default is `true`.
   */

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  graphic
  //----------------------------------

  /**
   * The {@link module:esri/Graphic Graphic} used to represent the feature.
   *
   * @name graphic
   * @instance
   * @type {module:esri/Graphic}
   * @default null
   * @see [PopupTemplate.content](esri-PopupTemplate.html#content)
   *
   * @example
   * var graphic = new Graphic({
   *   geometry: view.center,
   *   attributes: {
   *     "name": "Spruce",
   *     "family": "Pinaceae",
   *     "count": 126
   *   },
   *   symbol: new SimpleMarkerSymbol({
   *     style: "square",
   *     color: "blue",
   *     size: "8px"
   *   }),
   *   popupTemplate: {
   *     content: [
   *       {
   *         // Set popup template content
   *       }
   *     ]
   *   }
   * });
   *
   */

  @aliasOf("viewModel.graphic")
  graphic: Graphic = null;

  //----------------------------------
  //  defaultPopupTemplateEnabled
  //---------------------------------

  /**
   * Enables automatic creation of a popup template for layers that have popups enabled but no
   * popupTemplate defined. Automatic popup templates are supported for layers that
   * support the `createPopupTemplate` method. (Supported for
   * {@link module:esri/layers/FeatureLayer},
   * {@link module:esri/layers/GeoJSONLayer},
   * {@link module:esri/layers/SceneLayer},
   * {@link module:esri/layers/CSVLayer},
   * {@link module:esri/layers/OGCFeatureLayer}
   * {@link module:esri/layers/PointCloudLayer},
   * {@link module:esri/layers/StreamLayer}, and
   * {@link module:esri/layers/ImageryLayer}).
   *
   * @name defaultPopupTemplateEnabled
   * @instance
   * @type {boolean}
   * @default false
   * @since 4.11
   */

  @aliasOf("viewModel.defaultPopupTemplateEnabled")
  defaultPopupTemplateEnabled: boolean = false;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label.
   *
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * @name messages
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @messageBundle("esri/widgets/Feature/t9n/Feature")
  messages: FeatureMessages = null;

  //----------------------------------
  //  messagesURIUtils
  //----------------------------------

  /**
   * @name messagesURIUtils
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @messageBundle("esri/widgets/support/t9n/uriUtils")
  messagesURIUtils: UriUtilsMessages = null;

  //----------------------------------
  //  spatialReference
  //----------------------------------

  /**
   * The spatial reference used for [Arcade](https://developers.arcgis.com/arcade) operations.
   *
   * @name spatialReference
   * @instance
   * @since 4.11
   * @type {module:esri/geometry/SpatialReference}
   * @default null
   * @see [Type system](https://developers.arcgis.com/arcade/guide/types/#featuresetcollection)
   * @see [Arcade Profiles: Popop](https://developers.arcgis.com/arcade/guide/profiles/#popup)
   *
   */
  @aliasOf("viewModel.spatialReference")
  spatialReference: SpatialReference = null;

  //----------------------------------
  //  title
  //----------------------------------

  /**
   * The title for the feature. You can disable this via the [visibleElements](#visibleElements) property.
   *
   * @name title
   * @instance
   * @type {string}
   * @readonly
   * @default null
   *
   */
  @aliasOf("viewModel.title")
  title: string = null;

  //----------------------------------
  //  visibleElements
  //----------------------------------

  /**
   * @typedef module:esri/widgets/Feature~VisibleElements
   *
   * @property {boolean} [title] - Indicates whether the title associated with the feature displays.
   * Default value is `true`.
   * @property {boolean | module:esri/widgets/Feature~VisibleContentElements} [content] - Indicates
   * whether content for the Feature displays, can also indicate the specific types of content elements
   * by setting it via {@link module:esri/widgets/Feature~VisibleContentElements}. The default value
   * is `true`, everything displays.
   * @property {boolean} [lastEditInfo] - Indicates whether [lastEditInfo](esri-widgets-Feature-FeatureViewModel.html#lastEditInfo) is displayed
   * within the feature. Default value is `true`.
   */

  /**
   * The visible elements that are displayed within the widget's [graphic.popupTemplate.content](esri-PopupTemplate.html#content).
   * This property provides the ability to turn individual elements of the widget's display on/off.
   * See the {@link module:esri/PopupTemplate#content PopupTemplate.content} documentation
   * for additional information on how these elements work.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/Feature~VisibleElements}
   * @since 4.11
   *
   * @autocast
   * @see [PopupTemplate.content](esri-PopupTemplate.html#content)
   */
  @property()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

  //----------------------------------
  //  map
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/View view's} {@link module:esri/Map}. Use this property
   * when needing to get access to the underlying layers within the map. This can then be used
   * within [Arcade](https://developers.arcgis.com/arcade) expressions.
   *
   * @name map
   * @instance
   * @type {module:esri/Map}
   * @default null
   * @since 4.11
   * @see [Type system](https://developers.arcgis.com/arcade/guide/types/#featuresetcollection)
   * @see [Arcade Profiles: Popop](https://developers.arcgis.com/arcade/guide/profiles/#popup)
   *
   * @example
   * // The building footprints represent the buildings that intersect a clicked parcel
   * let buildingFootprints = Intersects($feature, FeatureSetByName($map, "Building Footprints"));
   */
  @aliasOf("viewModel.map")
  map: EsriMap = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  view: MapView | ISceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Feature/FeatureViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Feature/FeatureViewModel}
   * @autocast
   */

  @property({ type: FeatureViewModel })
  viewModel = new FeatureViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const { waitingForContent } = this.viewModel;

    return (
      <div class={this.classes(CSS.base, CSS.esriWidget)}>
        <div class={CSS.container}>
          {this.renderTitle()}
          {waitingForContent ? this.renderLoading() : this.renderContentContainer()}
        </div>
      </div>
    );
  }

  /**
   * Paginates to a specified [media](esri-popup-content-MediaContent.html) info object. For example,
   * you may have [media](esri-popup-content-MediaContent.html) content which contains
   * multiple `mediaInfos`. This method allows you to specify the index of the `mediaInfos`
   * you wish to display.
   *
   * ::: esri-md class="panel trailer-1"
   * Prior to   version 4.17, this method was named `goToMedia`.
   * :::
   *
   * @method
   * @param {number} contentElementIndex - The index position of the [media](esri-popup-content-MediaContent.html) content element to be updated.
   * @param {number} mediaInfoIndex - The index position of the [media](esri-popup-content-MediaContent.html) info object you wish to display.
   *
   */
  setActiveMedia(contentElementIndex: number, mediaInfoIndex: number): void {
    this.viewModel.setActiveMedia(contentElementIndex, mediaInfoIndex);
  }

  /**
   * Paginates to the next [media](esri-popup-content-MediaContent.html) info.
   *
   * @method
   * @param {number} contentElementIndex - The index position of the [media](esri-popup-content-MediaContent.html) content element.
   *
   */
  nextMedia(contentElementIndex: number): void {
    this.viewModel.nextMedia(contentElementIndex);
  }

  /**
   * Paginates to the previous [media](esri-popup-content-MediaContent.html) info in the specified
   * [media](esri-popup-content-MediaContent.html) content element.
   *
   * @method
   * @param {number} contentElementIndex - The index position of the [media](esri-popup-content-MediaContent.html) content element.
   */
  previousMedia(contentElementIndex: number): void {
    this.viewModel.previousMedia(contentElementIndex);
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderLoading(): VNode {
    return (
      <div key={"loading-container"} class={CSS.loadingSpinnerContainer}>
        <span class={this.classes(CSS.iconLoading, CSS.spinner)} />
      </div>
    );
  }

  protected renderContentContainer(): VNode {
    const { visibleElements } = this;

    return !!visibleElements.content ? (
      <div class={CSS.main}>{[this.renderContent(), this.renderLastEditInfo()]}</div>
    ) : null;
  }

  protected renderTitle(): VNode {
    const { visibleElements, title } = this;

    return visibleElements.title ? <h4 class={CSS.title} innerHTML={title} /> : null;
  }

  protected renderContent(): VNode {
    const content = this.viewModel.content;
    const contentKey = "content";

    if (!content) {
      return null;
    }

    if (Array.isArray(content)) {
      return content.length ? (
        <div key={`${contentKey}-content-elements`}>
          {content.map(this.renderContentElement, this)}
        </div>
      ) : null;
    }

    if (typeof content === "string") {
      const contentWidget = this._contentWidgets[0];

      if (!contentWidget || contentWidget.destroyed) {
        return null;
      }

      return <div key={`${contentKey}-content`}>{contentWidget.render()}</div>;
    }

    return this.renderNodeContent(content);
  }

  protected renderContentElement(
    contentElement: ContentElement,
    contentElementIndex: number
  ): VNode {
    const { visibleElements } = this;

    if (
      typeof visibleElements.content !== "boolean" &&
      !visibleElements.content[contentElement.type]
    ) {
      return null;
    }

    switch (contentElement.type) {
      case "attachments":
        return this.renderAttachments(contentElementIndex);
      case "custom":
        return this.renderCustom(contentElement, contentElementIndex);
      case "fields":
        return this.renderFields(contentElementIndex);
      case "media":
        return this.renderMedia(contentElementIndex);
      case "text":
        return this.renderText(contentElement, contentElementIndex);
      default:
        return null;
    }
  }

  protected renderAttachments(contentElementIndex: number): VNode {
    const featureAttachmentsWidget = this._contentWidgets[
      contentElementIndex
    ] as FeatureAttachments;

    if (!featureAttachmentsWidget || featureAttachmentsWidget.destroyed) {
      return null;
    }

    const { state, attachmentInfos } = featureAttachmentsWidget.viewModel;
    const displaySection = state === "loading" || attachmentInfos.length > 0;

    return displaySection ? (
      <div
        key={this._buildKey("attachments-element", contentElementIndex)}
        class={this.classes(CSS.contentElement)}
      >
        {featureAttachmentsWidget.render()}
      </div>
    ) : null;
  }

  protected renderCustom(contentElement: Customcontent, contentElementIndex: number): VNode {
    const { creator } = contentElement;
    const contentWidget = this._contentWidgets[contentElementIndex] as FeatureContent;

    if (!contentWidget || contentWidget.destroyed) {
      return null;
    }

    return creator ? (
      <div key={this._buildKey("custom-element", contentElementIndex)} class={CSS.contentElement}>
        {contentWidget.render()}
      </div>
    ) : null;
  }

  protected renderFields(contentElementIndex: number): VNode {
    const contentWidget = this._contentWidgets[contentElementIndex] as FeatureFields;

    if (!contentWidget || contentWidget.destroyed) {
      return null;
    }

    return (
      <div key={this._buildKey("fields-element", contentElementIndex)} class={CSS.contentElement}>
        {contentWidget.render()}
      </div>
    );
  }

  protected renderMedia(contentElementIndex: number): VNode {
    const contentWidget = this._contentWidgets[contentElementIndex] as FeatureMedia;

    if (!contentWidget || contentWidget.destroyed) {
      return null;
    }

    return (
      <div key={this._buildKey("media-element", contentElementIndex)} class={CSS.contentElement}>
        {contentWidget.render()}
      </div>
    );
  }

  protected renderLastEditInfo(): VNode {
    const { visibleElements, messages } = this;
    const { lastEditInfo } = this.viewModel;

    if (!lastEditInfo || !visibleElements.lastEditedInfo) {
      return null;
    }

    const { date, user } = lastEditInfo;

    const nlsString =
      lastEditInfo.type === "edit"
        ? user
          ? messages.lastEditedByUser
          : messages.lastEdited
        : user
        ? messages.lastCreatedByUser
        : messages.lastCreated;

    const text = substitute(nlsString, {
      date,
      user
    });

    return (
      <div key={"edit-info-element"} class={this.classes(CSS.lastEditedInfo, CSS.contentElement)}>
        {text}
      </div>
    );
  }

  protected renderText(contentElement: TextContent, contentElementIndex: number): VNode {
    const hasText = contentElement.text;
    const contentWidget = this._contentWidgets[contentElementIndex];

    if (!contentWidget || contentWidget.destroyed) {
      return null;
    }

    return hasText ? (
      <div
        key={this._buildKey("text-element", contentElementIndex)}
        class={this.classes(CSS.contentElement, CSS.text)}
      >
        {contentWidget.render()}
      </div>
    ) : null;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _buildKey(id: string, ...extraIdentifiers: (string | number)[]): string {
    const featureId = this.get<string>("viewModel.graphic.uid") || "0";
    const argString = extraIdentifiers.join("-");

    return `${id}__${featureId}-${argString}`;
  }

  private _destroyContentWidgets(): void {
    this._contentWidgets.forEach((contentWidget) => {
      contentWidget.viewModel = null;
      contentWidget && !contentWidget.destroyed && contentWidget.destroy();
    });
    this._contentWidgets = [];
  }

  private _setupContentWidgets(): void {
    this._destroyContentWidgets();

    const content = this.get<ContentElement[]>("viewModel.content");
    const { contentViewModels } = this.viewModel;

    if (Array.isArray(content)) {
      content.forEach((contentElement, contentElementIndex) => {
        if (contentElement.type === "attachments") {
          this._contentWidgets[contentElementIndex] = new FeatureAttachments({
            displayType: contentElement.displayType,
            viewModel: contentViewModels[contentElementIndex]
          });
        }

        if (contentElement.type === "fields") {
          this._contentWidgets[contentElementIndex] = new FeatureFields({
            viewModel: contentViewModels[contentElementIndex]
          });
        }

        if (contentElement.type === "media") {
          this._contentWidgets[contentElementIndex] = new FeatureMedia({
            viewModel: contentViewModels[contentElementIndex]
          });
        }

        if (contentElement.type === "text") {
          this._contentWidgets[contentElementIndex] = new FeatureContent({
            viewModel: contentViewModels[contentElementIndex]
          });
        }

        if (contentElement.type === "custom") {
          this._contentWidgets[contentElementIndex] = new FeatureContent({
            viewModel: contentViewModels[contentElementIndex]
          });
        }
      }, this);
    } else {
      const viewModel = contentViewModels[0];

      if (viewModel && !viewModel.destroyed) {
        this._contentWidgets[0] = new FeatureContent({
          viewModel
        });
      }
    }

    this.scheduleRender();
  }
}

export default Feature;
