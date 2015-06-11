/**
 * Created by sudhamenon on 6/9/15.
 */

'use strict';
describe('login specs', function () {

    var login_util = require('../utils/login_util.js');
    browser.ignoreSynchronization = true;

    it('login successfully', function () {


        browser.get('https://avant-qa-screening.herokuapp.com/users/sign_in')
            .then(function () {

                login_util.setUserName('sudha@gmail.com')
                    .then(function () {
                        login_util.setPassword('google123')
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

    it('unsuccessful login with bad password', function () {


        browser.get('https://avant-qa-screening.herokuapp.com/users/sign_in')
            .then(function () {

                login_util.setUserName('sudha@gmail.com')
                    .then(function () {
                        login_util.setPassword('google')
                    }).then(function () {
                        login_util.signIn()

                            .then(function (url) {

                                expect(url).not.toContain('dashboard');
                            });
                    });
            });
    });

    it('unsuccessful login with bad username', function () {


        browser.get('https://avant-qa-screening.herokuapp.com/users/sign_in')
            .then(function () {

                login_util.setUserName('sudha@go')
                    .then(function () {
                        login_util.setPassword('google123')
                    }).then(function () {
                        login_util.signIn()
                            .then(function (url) {
                                expect(url).not.toContain('dashboard');
                            });
                    });
            });
    });

    it('forgot Password redirects to correct url', function () {


        browser.get('https://avant-qa-screening.herokuapp.com/users/sign_in')
            .then(function () {

                login_util.forgotPassword()
                    .then(function (url) {
                        expect(url).toContain('users/password/new');
                    });
            });

    });



});


