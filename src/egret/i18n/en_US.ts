module egret {

    $locale_strings = $locale_strings || {};
    $locale_strings["en_US"] = $locale_strings["en_US"] || {};
    var locale_strings = $locale_strings["en_US"];

    /**
     * @private
     */
        //export var locale_strings = {};
    locale_strings[1001] = "Could not find Lark entry class: {0}。";
    locale_strings[1002] = "Lark entry class '{0}' must inherit from egret.DisplayObject.";
    locale_strings[1003] = "Parameter {0} must be non-null.";
    locale_strings[1004] = "An object cannot be added as a child to one of it's children (or children's children, etc.).";
    locale_strings[1005] = "An object cannot be added as a child of itself.";
    locale_strings[1006] = "The supplied DisplayObject must be a child of the caller.";
    locale_strings[1007] = "An index specified for a parameter was out of range.";
    locale_strings[1008] = "Instantiate singleton error，singleton class {0} can not create multiple instances.";
    locale_strings[1009] = "the Class {0} cannot use the property \"{1}\"";
    locale_strings[1010] = "the property \"{0}\" is readonly";
    locale_strings[1011] = "Stream Error. URL: {0}";
    locale_strings[1012] = "The type of parameter {0} must be Class.";
    locale_strings[1013] = "Variable assignment is NaN, please see the code!";

    locale_strings[2000] = "RES.createGroup() passed in non-existed key value in configuration: {0}";
    locale_strings[2001] = "RES loaded non-existed or empty resource group:\"{0}\"";

    locale_strings[3000] = "Theme configuration file failed to load: {0}";
    locale_strings[3001] = "Cannot find the skin name which is configured in Theme: {0}";
    locale_strings[3002] = "Index:\"{0}\" is out of the collection element index range";
    locale_strings[3003] = "Cannot be available in this component. If this component is container, please continue to use";
    locale_strings[3004] = "addChild(){0}addElement() replace";
    locale_strings[3005] = "addChildAt(){0}addElementAt() replace";
    locale_strings[3006] = "removeChild(){0}removeElement() replace";
    locale_strings[3007] = "removeChildAt(){0}removeElementAt() replace";
    locale_strings[3008] = "setChildIndex(){0}setElementIndex() replace";
    locale_strings[3009] = "swapChildren(){0}swapElements() replace";
    locale_strings[3010] = "swapChildrenAt(){0}swapElementsAt() replace";
    locale_strings[3011] = "Index:\"{0}\" is out of the visual element index range";
    locale_strings[3012] = "This method is not available in Scroller component!";
    locale_strings[3013] = "UIStage is GUI root container, and only one such instant is in the display list！";

    locale_strings[4000] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)";
    locale_strings[4001] = "Abstract class can not be instantiated!";
    locale_strings[4002] = "Unnamed data!";
    locale_strings[4003] = "Nonsupport version!";

    locale_strings[3100] = "Current browser does not support WebSocket";
    locale_strings[3101] = "Please connect Socket firstly";
}