var gulp = require('gulp');
var reporter = require('cucumber-html-reporter');
var options = {
    theme: 'bootstrap',
    jsonFile: './reports/report.json',
    output: './reports/report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
	screenshotsDirectory: './screenshots/',
	storeScreenshots: true,
    metadata: {
        "App Version":"1.0.0",
        "Browser": "Chrome",
        "Platform": "Win 7x64",
        "Executed": "Local"
    }
};

gulp.task('cucumberReports',function () {
    reporter.generate(options);
})