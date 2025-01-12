module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        clearContext: false, // Leave Jasmine Spec Runner output visible in browser
        captureConsole: false // Suppress console logging in CI output
      },
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage'),
        subdir: '.',
        reporters: [
          { type: 'html' },
          { type: 'text-summary' }
        ]
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false, // Disable watching files to avoid manual browser capture in CI
      customLaunchers: {
        ChromeHeadlessNoSandbox: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
        },
      },
      browsers: ['ChromeHeadlessNoSandbox'],
      singleRun: true, // Run tests once and exit
      restartOnFileChange: false,
      browserNoActivityTimeout: 60000, // Handle slow environments
      captureTimeout: 120000 // Allow more time for the browser to connect
    });
  };
  