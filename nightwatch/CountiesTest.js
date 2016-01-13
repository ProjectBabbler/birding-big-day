module.exports = {
    'Select adds counties to url': function(browser) {
        browser
            .url('http://localhost:3000')
            // wait for autocomplete to load
            .waitForElementPresent('.Select-placeholder', 4000)
            .click('.test-counties-select .Select-placeholder')
            .waitForElementPresent('.Select-option', 4000)
            .click('.Select-option')
            .assert.urlContains('counties')
            .assert.urlContains('CA-AB-EI')
            .end();
    },
};
