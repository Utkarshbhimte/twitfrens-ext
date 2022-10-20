chrome.action.onClicked.addListener(function (tab) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		// chrome.windows.create(
		// 	{
		// 		url: tabs[0].url,
		// 		type: "popup",
		// 		focused: false,
		// 		top: 0,
		// 		left: 0,
		// 		// width: 360,
		// 		// height: 630,
		// 	},
		// 	(createdWindow) => {
		// 		// console.log(createdWindow?.id, "Assigning popup to id");
		// 		sendResponse("continue");
		// 	}
		// );
		chrome.tabs.sendMessage(tabs[0].id, {
			action: "get_mutual_connections",
		});
	});
});
