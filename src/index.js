if (!$) {
    console.error('jQuery is required to run the regional-resources plugin.');
}

var AKA_REGIONAL_RESOURCES = {
    /**
     * Data parameters passed in to the script tag at the time of render.
     *
     * @property pluginParams
     * @type {Object}
     */
    pluginParams: (function () {
        // List of supported parameters
        var paramNames = [
            'data-region'
        ];

        // The <script> element that references this element. It will be the last script tag rendered so far.
        var $pluginScriptTag = $('script').last();

        // Retrieve each parameter in paramNames from the $pluginScriptTag .
        var params = paramNames.reduce(function (_params, paramName) {
            _params[paramName] = $pluginScriptTag.attr(paramName);
            return _params;
        }, {});

        // Return the object of supported parameters and their values
        return params;
    }())
};

$(function () {
    console.log(AKA_REGIONAL_RESOURCES.pluginParams);
})
