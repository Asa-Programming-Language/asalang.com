// Override theme switcher to be a toggle instead of a dropdown
(function() {
    // Wait for NDThemeSwitcher to be initialized
    var originalStart = NDThemeSwitcher.Start;

    NDThemeSwitcher.Start = function() {
        // Call original start
        originalStart.call(this);

        // Override the click handler to toggle instead of opening menu
        var domSwitcher = document.getElementById("NDThemeSwitcher");
        if (domSwitcher) {
            var link = domSwitcher.querySelector("a");
            if (link) {
                // Remove the original click handler by cloning the element
                var newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);

                // Add new toggle click handler
                newLink.addEventListener("click", function(event) {
                    event.preventDefault();

                    // Toggle between Light and Dark
                    var currentTheme = NDThemes.userSelectedThemeID || "Light";
                    var newTheme = (currentTheme === "Light") ? "Dark" : "Light";

                    NDThemes.SetCurrentTheme(newTheme, true);

                    // Notify iframe about theme change
                    var iframe = document.getElementById('CFrame');
                    if (iframe && iframe.contentWindow) {
                        iframe.contentWindow.postMessage({type: 'themeChange'}, '*');
                    }
                });
            }
        }
    };

    // Override OpenMenu and CloseMenu to do nothing
    NDThemeSwitcher.OpenMenu = function() {};
    NDThemeSwitcher.CloseMenu = function() {};
})();
