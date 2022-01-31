define(['angular', 'toastr', 'storage'], function (angular, toastr, storage) {
    'use strict';
    return angular.module('ess.services', []).service('api',function ($http) {
        var session = false;
        return {
            request: function (url, formData) {
                $('#loading').show();
                return $http({
                    method: 'POST',
                    url: url,
                    data: $.param(formData),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function (response) {
                        var data = response.data;
                        if (data.errors) {
                            if (data.errors.length > 0) {
                                if (data.errors[0].indexOf('Invalid Session') !== -1) {
                                    // fix for multiple notifications
                                    if(!session) {
                                        toastr.error('Invalid session! Please login again!');
                                        location.hash = 'login';
                                        session = true;
                                    }
                                } else {
                                    $.each(data.errors, function (key, val) {
                                        toastr.error(val);
                                    });
                                }
                            }
                        } else {
                            session = false;
                        }
                        $('#loading').delay(500).fadeOut();
                        return data
