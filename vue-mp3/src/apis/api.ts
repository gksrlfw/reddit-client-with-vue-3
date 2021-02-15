export default {
    async getPosts(subreddit: string, params?: string) {
        console.log(params);
        
        const urlParams = new URLSearchParams(params);
        const url = `https://www.reddit.com/${subreddit}.json?${urlParams}`;
        const response = await fetch(url, { headers: { accept: 'application/json' }});
        const data = await response.json();
        if(response.ok) return data;
        const error = new Error(data.message || 'Faild to get posts.');
        // error.response = data;
        throw error;
    }
}