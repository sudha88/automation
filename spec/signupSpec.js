/**
 * Created by sudhamenon on 6/9/15.
 */
'use strict';
describe('signUp page specs', function () {

    var login_util = require('../utils/login_util.js');
    browser.ignoreSynchronization = true;

    it('signup successfully', function () {


        browser.get('https://avant-qa-screening.herokuapp.com/users/sign_up')
            .then(function () {
                login_util.setUserName('sudha3@gmail.com')
                    .then(function () {
                        login_util.setPassword('google123')
                    }).then(function () {
                        login_util.setConfirmedPassword('google123')
                    }).then(function () {
                        login_util.signIn()
                            .then(function (url) {
                                expect(url).toContain('dashboard');
                            }).then(function () {
                                login_util.signOut();
                            });

                    });

            });
    });

    it('unsuccessful signup with bad email and bad password', function () {


        browser.get('https://avant-qa-screening.herokuapp.com/users/sign_up')
            .then(function () {

                login_util.setUserName('sudha@goo')
                    .then(function () {
                        login_util.setPassword('123')
                    }).then(function () {
                        login_util.setConfirmedPassword('123')
                    })
                    .then(function () {
                        login_util.signIn()
                            .then(function (url) {
                                expect(url).not.toContain('dashboard');
                            }).then(function () {
                                login_util.signUpErrors()
                                    .then(function(errs){
                                        expect(errs[0].getText()).toContain(['Email is invalid']);
                                        expect(errs[1].getText()).toContain(['Password is too short (minimum is 8 characters)']);
                                    });
                            });
                    });
            });
    });





});


