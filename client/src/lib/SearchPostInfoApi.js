const BASE_URL = `https://www.reddit.com`;

export default class SearchPostInfoApi {
  constructor() {
    this.controller = new AbortController();
  }

  abort() {
    this.controller.abort();
    this.controller = new AbortController();
  }

  async setSearch(subreddit) {
    const url = `${BASE_URL}/${subreddit}/about.json`;
    const response = await fetch(url, {
      headers: {
        accept: "application/json"
      },
      signal: this.controller.signal
    });

    const data = await response.json();
    if (response.ok) {
      return data.data;
    }
    const error = new Error(data.message || "Failed to get subreddit info.");
    error.response = data;
    throw error;
  }
}
