<div class="wc22-tab-items__item wc22-tab-items__item--3">
	<div class="inner">

		<div class="sched" id="sched"></div>

	</div>
</div>

<script>
		(function(b, s, p, o, r, t) {
			b["broadage"] = b["broadage"] || [];
			if (!b["broadage"].length) {
				r = document.createElement(s);
				t = document.getElementsByTagName(s)[0];
				r.async = true;
				r.src = p;
				t.parentNode.insertBefore(r, t);
			}
			b["broadage"].push({ "bundleId": o.bundleId, "widgets": o.widgets, "accountId": o.accountId });
		})(window, "script", "//cdn-saas.broadage.com/widgets/loader/loader.js", {
			"bundleId": ["soccer-fx"],
			"accountId": "5740fffe-8264-410c-a776-d584587e5de7",
			"widgets": {
				"soccerFixture": [{
					"element": "sched",
					"tournamentId": 6
				}]
			}
		});
	</script>