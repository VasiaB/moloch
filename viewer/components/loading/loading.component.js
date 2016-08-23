(function() {

  'use strict';

  /**
   * Loading Directive
   * Displays an loading message
   * @example
   * '<loading ng-if="$ctrl.loading"></loading>'
   */
  angular.module('directives.loading', [])
    .component('loading', {
      templateUrl : '/components/loading/loading.html'
    });

})();