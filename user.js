/// TODO: Harden Firefox
//- Reference: <https://brainfucksec.github.io/firefox-hardening-guide>

// Required for FF Ricing via CSS editing (chrome)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);

// UI
user_pref("browser.compactmode.show", true);

// To make Firefox Translations (Addon) better integrate with the UI
user_pref("browser.translation.ui.show", true);
user_pref("browser.translation.detectLanguage", true);

// Region
user_pref("browser.search.region", "US");
user_pref("doh-rollout.home-region", "US");

// Extensions
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", true);

// Misc
user_pref("browser.cache.disk.parent_directory", "/run/user/1000/firefox"); // id -u <username>
user_pref("browser.search.suggest.enabled.private", true);
user_pref("browser.tabs.warnOnClose", true);
user_pref("general.autoScroll", true);
user_pref("layout.frame_rate", 120);
user_pref("browser.uitour.enabled", false);

// URL Bar
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);

// Cache
user_pref("browser.cache.jsbc_compression_level", 3);

// Temporary (For: https://bugzilla.mozilla.org/show_bug.cgi?id=1818517)
user_pref("widget.gtk.ignore-bogus-leave-notify", 1);

// Privacy
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("browser.privatebrowsing.vpnpromourl", "");

// Crash Reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Welcome Page
user_pref("browser.aboutwelcome.enabled", false);
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");

// Optimization
user_pref("network.ssl_tokens_cache_capacity", 32768); // more TLS token caching (fast reconnects)

// Promos
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);

// Telemetry
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/* <https://wiki.archlinux.org/title/Firefox/Tweaks#Smooth_scrolling> */
/*
user_pref("general.smoothScroll.lines.durationMaxMS", 125);
user_pref("general.smoothScroll.lines.durationMinMS", 125);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.other.durationMaxMS", 125);
user_pref("general.smoothScroll.other.durationMinMS", 125);
user_pref("general.smoothScroll.pages.durationMaxMS", 125);
user_pref("general.smoothScroll.pages.durationMinMS", 125);
user_pref("mousewheel.min_line_scroll_amount", 30);
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", true);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 175);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 175);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 6);
user_pref("toolkit.scrollbox.verticalScrollDistance", 2);
*/

/* <https://raw.githubusercontent.com/AveYo/fox/main/Natural%20Smooth%20Scrolling%20for%20user.js> */
/// NATURAL SMOOTH SCROLLING V4 "SHARP"
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 200);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 250);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2.0");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1.0");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1.0");

/// adjust multiply factor for mousewheel - or set to false if scrolling is way too fast
user_pref("mousewheel.system_scroll_override.horizontal.factor", 200);
user_pref("mousewheel.system_scroll_override.vertical.factor", 200);
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", true);
user_pref("mousewheel.system_scroll_override.enabled", true);

/// Adjust pixels at a time count for mousewheel - cant do more than a page at once if <100
user_pref("mousewheel.default.delta_multiplier_x", 100);
user_pref("mousewheel.default.delta_multiplier_y", 100);
user_pref("mousewheel.default.delta_multiplier_z", 100);

///  Preset to reset couple extra variables for consistency
user_pref("apz.allow_zooming", true);
user_pref("apz.force_disable_desktop_zooming_scrollbars", false);
user_pref("apz.paint_skipping.enabled", true);
user_pref("apz.windows.use_direct_manipulation", true);
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", false);
user_pref("general.smoothScroll.durationToIntervalRatio", 200);
user_pref("general.smoothScroll.lines.durationMaxMS", 150);
user_pref("general.smoothScroll.lines.durationMinMS", 150);
user_pref("general.smoothScroll.other.durationMaxMS", 150);
user_pref("general.smoothScroll.other.durationMinMS", 150);
user_pref("general.smoothScroll.pages.durationMaxMS", 150);
user_pref("general.smoothScroll.pages.durationMinMS", 150);
user_pref("general.smoothScroll.pixels.durationMaxMS", 150);
user_pref("general.smoothScroll.pixels.durationMinMS", 150);
user_pref("general.smoothScroll.scrollbars.durationMaxMS", 150);
user_pref("general.smoothScroll.scrollbars.durationMinMS", 150);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 50);
user_pref("layers.async-pan-zoom.enabled", true);
user_pref("layout.css.scroll-behavior.spring-constant", "250");
user_pref("mousewheel.transaction.timeout", 1500);
user_pref("mousewheel.acceleration.factor", 10);
user_pref("mousewheel.acceleration.start", -1);
user_pref("mousewheel.min_line_scroll_amount", 5);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 5);
user_pref("toolkit.scrollbox.verticalScrollDistance", 3);
