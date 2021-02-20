import M from "@/../public/js/materialize.js";


let instance;
export function init(subreddit, router) {
  instance = M.Autocomplete.init(subreddit.value, {
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
  return instance;
}

export function update(ele, results) {
  const elem = document.querySelector(ele);
  instance = M.Autocomplete.getInstance(elem);
  console.log(elem, instance);
  instance.updateData(results);
  instance.open();
}

export function close() {
  if (instance) instance.close();
}
