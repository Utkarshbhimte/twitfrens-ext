chrome.action.onClicked.addListener(function (tab) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			action: "get_mutual_connections",
		});
	});
});
