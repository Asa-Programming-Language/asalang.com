// Auto-expand modules tab
(function() {
    // Wait for Natural Docs to initialize
    var originalOnLoad = NDLoader.OnLoad_Frame;

    NDLoader.OnLoad_Frame = function() {
        // Call original OnLoad
        if (originalOnLoad) {
            originalOnLoad.call(this);
        }

        NDFramePage.Start();
        NDThemes.SetAvailableThemes([
            ["Light Theme", "Light"],
            ["Dark Theme", "Dark"]
        ]);

        if (!NDThemes.userSelectedThemeID) {
            var systemTheme = NDThemes.GetSystemTheme();
            var initialTheme = (systemTheme === 1) ? "Dark" : "Light";
            NDThemes.SetCurrentTheme(initialTheme, false);
        }

    };
})();
