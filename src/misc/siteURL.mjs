const { CF_PAGES_URL, CF_PAGES, CF_PAGES_BRANCH } = process.env;

// prettier-ignore
const siteURL = process.env.WEBSITE_URL_OVERRIDE
    ? process.env.WEBSITE_URL_OVERRIDE
    : (parseInt(CF_PAGES) || 0) === 1
    ? "main" == CF_PAGES_BRANCH
        ? CF_PAGES_URL.replace(/[0-9a-f]{5,40}\./, "")
        : CF_PAGES_URL
    : process.env.WEBSITE_URL || "http://localhost:3000";

export default siteURL;
