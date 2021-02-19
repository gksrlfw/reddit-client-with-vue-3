import { RedditPostResponse } from "@/interface/RedditPost/RedditPostResponse";

export default {
	async getPosts(subreddit: string, params?: string): Promise<RedditPostResponse> {
		const urlParams = new URLSearchParams(params);
		const url = `https://www.reddit.com/${subreddit}.json?${urlParams}`;
		const response = await fetch(url, { headers: { accept: 'application/json' }});
		const data: RedditPostResponse = await response.json();
		
		if(data instanceof Response)  {
			const error = new Error('Faild to get posts.');
		}
		return data;
	},

	async getSubreddit(subreddit: string) {
		const url = `https://www.reddit.com/${subreddit}/about.json`;
		const response = await fetch(url, { headers: { accept: 'application/json' }});
		const data = await response.json();
		console.log('data', data);
		
		if(response.ok) return data.data;
		const error = new Error(data.message || 'Faild to get subreddit info.');
		// error.response = data;
		throw error;
	}
}