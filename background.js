// background.js

const updateRules = async () => {
  const { blockedSites } = await chrome.storage.sync.get({ blockedSites: [] });
  const rules = blockedSites.map((site, idx) => {
    // Sanitize input: remove protocol and whitespace
    let domain = site.trim().replace(/^https?:\/\//, '');
    // Remove trailing slashes
    domain = domain.replace(/\/$/, '');
    // Use urlFilter pattern to block all subdomains and paths
    return {
      id: idx + 1,
      priority: 1,
      action: { type: 'block' },
      condition: { urlFilter: `||${domain}^`, resourceTypes: ["main_frame"] }
    };
  });
  // Remove all previous rules (up to 1000)
  const removeRuleIds = Array.from({length: 1000}, (_, i) => i + 1);
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds,
    addRules: rules
  });
};

chrome.runtime.onInstalled.addListener(updateRules);
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.blockedSites) {
    updateRules();
  }
});
