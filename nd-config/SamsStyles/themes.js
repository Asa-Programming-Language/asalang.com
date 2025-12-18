// Override the OnLoad_Frame to set only Light and Dark themes
(function() {
    var originalOnLoad = NDLoader.OnLoad_Frame;
    NDLoader.OnLoad_Frame = function() {
        NDFramePage.Start();
        NDThemes.SetAvailableThemes([
            ["Light Theme", "Light"],
            ["Dark Theme", "Dark"]
        ]);

        // If no theme is saved, detect and use system theme
        if (!NDThemes.userSelectedThemeID) {
            var systemTheme = NDThemes.GetSystemTheme();
            var initialTheme = (systemTheme === 1) ? "Dark" : "Light";
            NDThemes.SetCurrentTheme(initialTheme, false);
        }
    };
})();
