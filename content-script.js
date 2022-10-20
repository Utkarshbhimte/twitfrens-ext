const renderListInDrawer = (profilesArray) => {
	const whereToRender = document.querySelector("#twitterUserList");
	whereToRender.innerHTML = renderList(profilesArray);

	function renderList(profilesArray) {
		const listComponent = `
        <div class="flex mx-2 group rounded-xl hover:bg-gray-100 justify-between p-4">
          <div class="flex space-x-2">
            <img
              class="w-10 h-10 rounded-full"
              src="{photo_url}"
              alt="{name}'s profle"
            />
            <div>
              <h3>{name}</h3>
              <p class="text-xs text-[#5B5B65]">{username}</p>
            </div>
          </div>
          <div class="flex space-x-4 items-center justify-between">
            <a class="group-hover:opacity-100 opacity-0 transition-all duration-300" href="{profileLink}" target="_blank">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V16C20 17.1046 19.1046 18 18 18H2C0.895432 18 0 17.1046 0 16V2ZM2 2H18V3.46482L10 8.79815L2 3.46482V2ZM2 5.86852V16H18V5.86852L10.5547 10.8321C10.2188 11.056 9.78121 11.056 9.44531 10.8321L2 5.86852Z"
                  fill="#979C9E"
                />
              </svg>
            </a>
          </div>
        </div>
    `;
		const MainComponent = `
            <header class="p-4 border-b-2 border-solid mb-12">
			<div id="close-twitfrens">Close twitfrens</div>
              <div class="w-min flex mx-auto items-center space-x-2">
                <svg
                  width="41"
                  height="37"
                  viewBox="0 0 41 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.96903 0.629463C7.44907 0.945349 5.3409 1.97936 3.5506 3.77782C1.94888 5.38677 0.984142 7.09289 0.423536 9.30819C-0.549974 13.155 0.15786 16.9429 2.51486 20.4992C4.0262 22.7794 5.9752 24.8724 9.55992 28.0644C11.8402 30.0948 18.79 36.0135 19.1274 36.2122C19.4453 36.3995 19.5634 36.4219 20.2344 36.4219C20.905 36.4219 21.0237 36.3994 21.3414 36.2125C21.6797 36.0135 28.6452 30.0809 30.9088 28.0638C34.5034 24.8608 36.4446 22.7764 37.9539 20.4992C40.3109 16.9429 41.0187 13.155 40.0452 9.30819C39.4846 7.09289 38.5199 5.38677 36.9182 3.77782C35.322 2.17448 33.6133 1.24924 31.3732 0.775409C30.2544 0.538692 28.1819 0.518011 27.1967 0.733575C24.4665 1.33109 22.3674 2.69811 20.4518 5.12598L20.2344 5.40161L20.0169 5.12598C18.1347 2.74034 16.0675 1.37348 13.4344 0.773593C12.6484 0.594576 10.8459 0.51959 9.96903 0.629463Z"
                    fill="#5EBCF9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.5893 10.6915C27.4868 10.7331 27.0522 10.9369 26.6236 11.1445C26.195 11.352 25.7491 11.5628 25.6326 11.613L25.421 11.7041L25.1855 11.6022C23.8669 11.0316 22.2308 11.3221 21.1735 12.3147C20.3446 13.0929 19.8977 14.092 19.8403 15.2957L19.8194 15.7315L19.6638 15.7116C17.2338 15.4008 15.2114 14.0658 13.9768 11.9576C13.8174 11.6855 13.6992 11.5906 13.4958 11.5717C13.2802 11.5516 13.1479 11.604 13.0206 11.7596C12.8742 11.9384 12.6576 12.3416 12.5625 12.6122C12.4679 12.8815 12.3754 13.4299 12.3763 13.7163C12.3776 14.1288 12.5192 14.7544 12.6958 15.1278C12.7439 15.2295 12.7767 15.319 12.7686 15.3269C12.7605 15.3347 12.6247 15.3029 12.4667 15.2562C12.1258 15.1556 11.9914 15.1505 11.8339 15.2323C11.7084 15.2975 11.5625 15.5224 11.5625 15.6509C11.5625 15.6924 11.5937 15.8561 11.6319 16.0146C11.9242 17.23 12.6527 18.1692 13.7889 18.796L14.043 18.9362L13.8616 18.9862C13.7618 19.0138 13.613 19.0533 13.5308 19.0742C13.329 19.1254 13.2492 19.1812 13.1614 19.3323C12.9807 19.6435 13.1089 19.8737 13.7284 20.3502C14.4154 20.8786 15.2456 21.2812 16.1976 21.5474C16.408 21.6063 16.5804 21.6653 16.5806 21.6785C16.5812 21.721 16.2075 21.9575 15.9033 22.1074C15.5313 22.2906 15.0828 22.433 14.5995 22.5213C14.2938 22.5772 14.0491 22.593 13.3075 22.6047C12.2645 22.6211 12.1589 22.6403 12.019 22.8396C11.9194 22.9815 11.9078 23.1894 11.99 23.3571C12.0503 23.4801 12.3446 23.7178 12.6703 23.9068C13.5591 24.4223 15.392 24.9405 16.9669 25.1217C19.2381 25.3829 21.3845 25.1431 23.0489 24.4423C23.9951 24.0439 24.7029 23.5705 25.4432 22.8409C26.9118 21.3936 27.7663 19.762 28.0865 17.7935C28.1721 17.2679 28.1714 15.9575 28.0853 15.3436L28.0244 14.909L28.4381 14.2656C28.6657 13.9117 28.8671 13.574 28.8858 13.5151C28.9606 13.279 28.8246 13.0268 28.569 12.9278C28.4501 12.8817 28.3819 12.8789 28.0909 12.9077C27.9042 12.9263 27.6921 12.9415 27.6194 12.9415H27.4874L27.9104 12.1231C28.1431 11.673 28.3422 11.2488 28.3529 11.1803C28.3823 10.9929 28.2589 10.7815 28.0649 10.6869C27.8782 10.5957 27.8239 10.5962 27.5893 10.6915Z"
                    fill="white"
                  />
                </svg>
                <p class="font-medium italic text-2xl">twitfrens</p>
              </div>
            </header>
            <div class="px-4">
              <div class="flex justify-between mb-4">
                <p class="font-bold text-base">{mutual_no} mutual Friends</p>
                <p class="text-[#5EBCF9] text-base font-medium flex items-center space-x-2">
                  <span>Scanning<span>
                </p>
              </div>
            </div>
            <div class="grid gap-4">
              {listComponent}
            </div>
          `;
		const listToRender = profilesArray.map((user) =>
			listComponent
				.replaceAll("{name}", user.name)
				.replace("{username}", user.username)
				.replace("{photo_url}", user.photo)
				.replace("{profileLink}", user.profileLink)
		);
		const ComponentToRender = MainComponent.replace(
			"{listComponent}",
			listToRender.join("\n")
		).replace("{mutual_no}", profilesArray.length);
		return ComponentToRender;
	}
};

const toggleRightLayout = (shouldOpenTwitFrens) => {
	const twitterSearch = document.querySelector(
		'div[data-testid="sidebarColumn"]'
	);
	const twimex = document.querySelector("#twemex--container div");
	const twitfrens = document.getElementById("twitterUserList");

	console.log("removing rest", twitterSearch, twimex);

	if (shouldOpenTwitFrens) {
		if (twitterSearch) {
			twitterSearch.style.visibility = "hidden";
		}

		if (twimex) {
			twimex.style.visibility = "hidden";
		}

		if (twitfrens) {
			twitfrens.style.width = "25rem";
		}
	} else {
		if (twitfrens) {
			twitfrens.style.width = "0rem";
		}

		if (twitterSearch) {
			twitterSearch.style.visibility = "hidden";
		}

		if (twimex) {
			twimex.style.visibility = "hidden";
		}
	}
};

function debounce(func, timeout = 2000) {
	let timer;
	return () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func();
		}, timeout);
	};
}

function throttle(func, timeFrame) {
	var lastTime = 0;
	return function () {
		var now = Date.now();
		if (now - lastTime >= timeFrame) {
			func();
			lastTime = now;
		}
	};
}

chrome.runtime.onMessage.addListener(async function (response, sendResponse) {
	// remove the existing page

	const existingDrawer = document.getElementById("twitterUserList");
	if (existingDrawer) {
		document.body.removeChild(existingDrawer);
	}

	const Drawer = document.createElement("div");
	Drawer.className = "sidepanel";
	Drawer.id = "twitterUserList";
	document.body.appendChild(Drawer);

	// storing all the connections
	var mutualConnections = [];

	// track the dublicates in the list
	var mutualIds = [];

	let retriesLeft = 5;
	let startScrollHeight = -1;
	let startScroll = window.scrollY;

	// debugger;

	toggleRightLayout(true);

	let listenerAttached = false;
	let continueSearching = true;

	let currScroll = 0;
	let prevScroll = -1;

	const debouncedFunc = debounce(() => {
		prevScroll = currScroll;
		currScroll = window.scrollY;
	}, 100);

	const intervalId = setInterval(() => {
		console.log(
			{ currScroll, prevScroll, curr: window.scrollY },
			currScroll - prevScroll
		);
	}, 2000);

	window.addEventListener("scroll", debouncedFunc);

	const scrollAndScan = async () => {
		renderListInDrawer(mutualConnections);

		if (!listenerAttached) {
			const closeButton = document.getElementById("close-twitfrens");

			if (closeButton) {
				listenerAttached = true;
				closeButton.addEventListener("click", function () {
					toggleRightLayout(false);
				});
			}
		}

		startScrollHeight = startScroll;

		const profileDOMs = document.querySelectorAll(
			'[data-testid="cellInnerDiv"]'
		);

		profileDOMs.forEach((a) => {
			if (
				a.querySelectorAll('[data-testid="userFollowIndicator"]')
					.length > 0
			) {
				const id = a.style.transform.split("(")[1].split("p")[0];
				if (mutualIds.indexOf(id) === -1) {
					mutualIds.push(id);
					const name = a.querySelectorAll("a")[1].innerText;
					console.log("🚀 ~ found", name);
					mutualConnections.push({
						name,
						username: a.querySelectorAll("a")[2].innerText,
						photo: a.querySelector("img").src,
						profileLink: a.querySelectorAll("a")[0].href,
					});
				}
			}
		});

		// smooth scroll to the by window hright
		window.scrollTo({
			top: window.scrollY + window.innerHeight,
			behavior: "smooth",
		});

		await delay(1000);

		startScroll = window.scrollY;
		console.log("Scrolling and searching", currScroll, window.scrollY);

		// if (currScroll === window.scrollY) {
		if (currScroll - prevScroll !== window.innerHeight) {
			console.log("Done here!!");
			continueSearching = false;
			document.removeEventListener("click", () => {});
			clearInterval(intervalId);
			return;
		}

		await scrollAndScan();
		await delay(0);
	};

	var websiteUrl = window.location.href;

	if (!websiteUrl.includes("following")) {
		console.log("Not on Following Page");
		return;
	}

	if (continueSearching) {
		scrollAndScan();
	}
});

const delay = (millis) => {
	return new Promise((resolve, reject) => {
		setTimeout((_) => resolve(), millis);
	});
};

// a promise to wait for DOM sub tree to modify with a timeout
const waitForDOMChange = (selector, timeout = 500) => {
	return new Promise((resolve, reject) => {
		const observer = new MutationObserver((mutations) => {
			if (document.querySelector(selector)) {
				observer.disconnect();
				resolve();
			}
		});

		observer.observe(document, {
			childList: true,
			subtree: true,
		});

		setTimeout(() => {
			observer.disconnect();
			resolve();
		}, timeout);
	});
};

// promise to wait for the window smooth scroll to finish
const waitForScroll = () => {
	return new Promise((resolve, reject) => {
		let scrollCursor = window.scrollY;

		window.addEventListener("scroll", () => {
			scrollCursor = window.scrollY;
		});

		const interval = setInterval(() => {
			if (scrollCursor === window.scrollY) {
				clearInterval(interval);
				resolve();
			}
		}, 100);
	});
};

// window.addEventListener("scroll", () => {
// 	console.log("scroll");
// });
