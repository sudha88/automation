/**
 * Created by sudhamenon on 6/9/15.
 */
var HtmlReporter = require('protractor-html-screenshot-reporter');
reporter = new HtmlReporter({
    baseDirectory: './protractor-result', // a location to store screen shots.
    docTitle: 'Protractor HG Automation Reports',
    docName:    'protractor-hg-automation-tests-report.html',
    takeScreenShotsOnlyForFailedSpecs: true,
    preserveDirectory: false
});


exports.config = {

        seleniumAddress: 'http://localhost:4444/wd/hub',

            specs: ['../spec/*.js'
    ],

    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);
    }
};
