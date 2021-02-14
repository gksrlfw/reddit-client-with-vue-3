import { FetchState } from '@/interfaces/Fetch';
import { ComputedRef, reactive, UnwrapRef, watchEffect } from 'vue';

export default {
    async getPosts(subreddit: string) {
        const url = `https://www.reddit.com/r/${subreddit}.json`;
        const response = await fetch(url, { headers: { accept: 'application/json' }});
        const data = await response.json();
        if(response.ok) return data;
        const error = new Error(data.message || 'Faild to get posts.');
        error.response = data;
        throw error;
    }
}


// const dataCache = new Map<string, Object>();
// export function useFetch<T>(url: ComputedRef<string>, cache = false) {
//     const state = reactive<FetchState<T>>({
//         loading: false,
//         error: '',
//         data: null,
//     });

//     const fetchData = async () => {
//         state.loading = true;
//         state.data = null;
//         state.error = '';
//         try {
//             if(dataCache.has(url.value)) state.data = dataCache.get(url.value) as UnwrapRef<T>;
//             else {
//                 const response = await fetch(url.value, {
//                     headers: {
//                         accept: 'application/json'
//                     }
//                 });
//                 if(response.ok) {
//                     const json = await response.json();
//                     state.data = json;
//                     if(cache) dataCache.set(url.value, json);
//                 }
//                 else state.error = 'Error fetching data.';
//             }            
//         }
//         catch(err) {
//             state.error = 'Error fetching data. ' + err.message;
//         }
//         state.loading = false;
//     };

//     watchEffect(() => {
//         console.log('Changed: ', url);
//         fetchData();
//     });

//     fetchData();

//     return state;
// }