// options.js

const siteList = document.getElementById('site-list');
const siteInput = document.getElementById('site-input');
const addBtn = document.getElementById('add-btn');

function renderList(sites) {
  siteList.innerHTML = '';
  sites.forEach((site, idx) => {
    const li = document.createElement('li');
    li.textContent = site;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeSite(idx);
    li.appendChild(removeBtn);
    siteList.appendChild(li);
  });
}

function loadSites() {
  chrome.storage.sync.get({ blockedSites: [] }, ({ blockedSites }) => {
    renderList(blockedSites);
  });
}

function addSite() {
  const site = siteInput.value.trim();
  if (!site) return;
  chrome.storage.sync.get({ blockedSites: [] }, ({ blockedSites }) => {
    if (!blockedSites.includes(site)) {
      blockedSites.push(site);
      chrome.storage.sync.set({ blockedSites }, loadSites);
    }
  });
  siteInput.value = '';
}

function removeSite(idx) {
  chrome.storage.sync.get({ blockedSites: [] }, ({ blockedSites }) => {
    blockedSites.splice(idx, 1);
    chrome.storage.sync.set({ blockedSites }, loadSites);
  });
}

addBtn.onclick = addSite;
window.onload = loadSites;

