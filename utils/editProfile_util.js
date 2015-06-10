/**
 * Created by sudhamenon on 6/10/15.
 */
/**
 * Created by sudhamenon on 6/9/15.
 */


"use strict";
module.exports = Object.create({

    //click edit profile after login
    clickEditProfile: function () {
        element(by.linkText('Edit Profile'))
            .then(function (edit) {
                edit.click();
            })

    },


    //edit profile
    editProfile: function (info) {
        var deferred = protractor.promise.defer();
        element(by.id('profile_first_name'))
            .then(function (name) {
                name.sendKeys(info.firstName);
            }).then(function () {
                element(by.id('profile_last_name')).sendKeys(info.lastName);
            }).then(function () {
                // element(by.model('profile_city')).sendKeys(info.lastName);
            }).then(function () {
                element(by.id('profile_city')).sendKeys(info.city);
            }).then(function () {
                element(by.id('profile_state')).click()
                    .then(function () {
                        element(by.cssContainingText('option', 'IL')).click();
                    });
            }).then(function () {
                element(by.id('profile_zip')).sendKeys(info.zip);

            }).then(function () {
                element(by.id('profile_birthdate')).sendKeys(info.birthDate)
            })
            .then(function () {
                element(by.name('commit')).click();
            })
            .then(function () {


                deferred.fulfill(true);
            });


        return deferred.promise;

    }


});
