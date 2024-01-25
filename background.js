const searchEngines = {
  "Google": "https://www.google.com/search?q=",
  "Bing": "https://www.bing.com/search?q=",
  "Baidu": "https://www.baidu.com/s?wd=",
  "Zhihu": "https://www.zhihu.com/search?q=",
  "Bilibili": "https://search.bilibili.com/all?keyword=",
  "Wikipedia": "https://en.wikipedia.org/wiki/Special:Search?search=",
  "Github": "https://github.com/search?q=",
  "StackOverflow": "https://stackoverflow.com/search?q=",
  "Youtube": "https://www.youtube.com/results?search_query=",
  "Google Scholar": "https://scholar.google.com/scholar?q=",
  "Google Translate": "https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=",
    
  // Add more search engines here
};

// Create a context menu item for each search engine
for (const [name, url] of Object.entries(searchEngines)) {
  chrome.contextMenus.create({
    id: name,
    title: "Search with " + name,
    contexts: ["selection"]
  });
}

// Handle click events
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId in searchEngines) {
    const url = searchEngines[info.menuItemId] + encodeURIComponent(info.selectionText);
    chrome.tabs.create({ url: url, index: tab.index + 1 });
  }
});