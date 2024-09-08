define(['angular', 'toastr', 'storage'], function (angular, toastr, storage) {
    'use strict';
    return angular.module('ess.services', []).service('api', function ($http) {
        var session = false;

        return {
            request: function (url, formData) {
                // Show loading spinner using AngularJS if possible
                angular.element('#loading').show();

                return $http({
                    method: 'POST',
                    url: url,
                    data: $.param(formData), // If you really need to use jQuery for parameter formatting
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function (response) {
                    var data = response.data;

                    // Check if there are errors in the response
                    if (data.errors) {
                        if (data.errors.length > 0) {
                            if (data.errors[0].indexOf('Invalid Session') !== -1) {
                                // Prevent multiple notifications for invalid session
                                if (!session) {
                                    toastr.error('Invalid session! Please login again!');
                                    session = true;
                                    location.hash = 'login';
                                }
                            } else {
                                // Show all errors using toastr
                                angular.forEach(data.errors, function (val) {
                                    toastr.error(val);
                                });
                            }
                        }
                    } else {
                        session = false; // Reset session flag if no errors
                    }

                    // Hide loading spinner after a delay
                    angular.element('#loading').delay(500).fadeOut();

                    return data; // Ensure data is returned to the calling function
                }).catch(function (error) {
                    // Handle HTTP errors
                    toastr.error('An error occurred during the request.');
                    angular.element('#loading').fadeOut();
                    console.error(error);
                    return $q.reject(error); // Properly handle promise rejection
                });
            }
        };
    });
});
