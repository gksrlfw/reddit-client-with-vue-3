import M from "@/../public/js/materialize.js";
export let instances;
export function init(subreddit, router) {
  instances = M.Autocomplete.init(subreddit.value, {
    data: {},
    onAutocomplete(result) {
      router.push({
        name: "Main",
        params: {
          subreddit: result
        }
      });
    }
  });
}
