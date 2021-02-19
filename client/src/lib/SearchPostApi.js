const BASE_URL = `https://www.reddit.com`;
export default class SearchPostApi {
  constructor() {
    this.controller = new AbortController();
  }

  abort() {
    this.controller.abort();
    this.controller = new AbortController();
  }

  async setSearch(subreddit, params, page) {
    // params = { ...params, limit: page };
    const urlParams = new URLSearchParams(params);
    const url = `${BASE_URL}/${subreddit}.json?${urlParams}`;
    console.log(url, page);
    const response = await fetch(url, {
      headers: {
        accept: "application/json"
      },
      signal: this.controller.signal
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    const error = new Error(data.message || "Failed to get posts.");
    error.response = data;
    throw error;
  }
}
