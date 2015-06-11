/**
 * Created by sudhamenon on 6/10/15.
 */



'use strict';
describe('edit profile specs', function () {

    var login_util = require('../utils/login_util.js'), edit_util = require('../utils/editProfile_util.js');
    browser.ignoreSynchronization = true;


    it('Payment Info Created', function () {
        var info = {
            firstName: "luke",
            lastName: "skywalker",
            city: "Chicago",
            state: "IL",
            zip: "60611",
            birthDate: "04/04/1988"
        };


        browser.get('https://avant-qa-screening.herokuapp.com/profiles/22/edit')
            .then(function () {

                login_util.setUserName('sudha@g.com')
                    .then(function () {
                        login_util.setPassword('google123')
                    }).then(function () {
                        login_util.signIn()
                            .then(function(){
                                edit_util.clickEditProfile();
                            }).then(function () {
                                edit_util.editProfile(info);
                            })
                            .then(function () {
                                expect(element(by.linkText('Sign out'))).tobeDefined();
                            });
                    });


                    });
            });
    });

