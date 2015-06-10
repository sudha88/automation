/**
 * Created by sudhamenon on 6/9/15.
 */


"use strict";
module.exports = Object.create({


    setUserName: function (userName) {
        var deferred = protractor.promise.defer();

        element(by.id('user_email'))
            .then(function (login) {
                login.sendKeys(userName);

            }).then(function () {
                deferred.fulfill(true)
            });
        return deferred.promise;

    },
    setPassword: function (password) {
        var deferred = protractor.promise.defer();
        element(by.id('user_password'))
            .then(function (pwd) {
                pwd.sendKeys(password);
            }).then(function () {
                deferred.fulfill(true)
            });
        return deferred.promise;
    },

    setConfirmedPassword: function (password) {
        var deferred = protractor.promise.defer();

        element(by.id('user_password_confirmation'))
            .then(function (pwd) {
                pwd.sendKeys(password);
            }).then(function () {
                deferred.fulfill(true)
            });
        return deferred.promise;
    },


//sign into application
    signIn: function (userName, password) {
        var deferred = protractor.promise.defer();


        element(by.name('commit'))
            .then(function (btn) {
                btn.click()
                    .then(function () {
                        browser.getCurrentUrl()
                            .then(function (url) {


                                deferred.fulfill(url);
                            });


                    });

            });


        return deferred.promise;

    },

    //sign out from application
    signOut: function () {
        var deferred = protractor.promise.defer();

        element(by.linkText('Sign out'))
            .then(function (signOut) {
                signOut.click();
                deferred.fulfill(true);
            });


        return deferred.promise;

    },

    //forgot password link works
    forgotPassword: function () {
        var deferred = protractor.promise.defer();
        element(by.linkText('Forgot your password?'))
            .then(function (forgotPwd) {
                forgotPwd.click()


                    .then(function () {
                        browser.getCurrentUrl()
                            .then(function (url) {


                                deferred.fulfill(url);
                            });

                    });
            });

        return deferred.promise;

    },


    //returns array of signup errors
    signUpErrors: function () {
        var deferred = protractor.promise.defer();
        element.all(by.id('error_explanation')).all(by.tagName('li'))
            .then(function (errors){
                deferred.fulfill(errors);
            });


        return deferred.promise;

    }


});
