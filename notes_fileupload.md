vue create file-upload-vue

## file upload front end
!!! tutorial
https://www.youtube.com/watch?v=GXe_JpBQLTQ

- file upload vue https://www.digitalocean.com/community/tutorials/how-to-handle-file-uploads-in-vue-2
in bulk
https://www.smashingmagazine.com/2022/03/drag-drop-file-uploader-vuejs-3/

!!!!
https://serversideup.net/uploading-files-vuejs-axios/
https://github.com/serversideup/uploading-files-vuejs-axios



# ------------------------------------------
https://bulma.io/documentation/overview/start/

delete components folder
delete content of app.vue and create blank content
## commit blank app.vue

install vetur plugin to VS code
https://itnext.io/getting-started-vue-js-and-visual-studio-code-6990f92e918a

type:
<!-- <vue -->

snippet is the created
https://vuejs.github.io/vetur/guide/snippet.html
## commit SimpleUploadComponent

# RUN
npm run serve

# Save file inside component state

- installing vue developer tools for checking the memory
https://devtools.vuejs.org/guide/installation.html
## commit save file inside component

# Create submit button
after form submitting we will call sendFile function
!!! make AJAX request
  - how AJAX works??
    - https://www.w3schools.com/xml/ajax_intro.asp

for AJAX request we will use AXIOS library
npm add axios
https://medium.com/spemer/using-axios-in-vue-js-17f186756a8b
npm install --save axios

after installation we can use axios.post()

??async function
??await

- now I can catch POST request with payload in header in FLASK
## commit send post request to the flask 


# save file in FLASK
https://flask.palletsprojects.com/en/2.1.x/patterns/fileuploads/


# send data asj JSON from python to Vue
https://stackoverflow.com/questions/9733638/how-to-post-json-data-with-python-requests

# display json from post in vue
https://stackoverflow.com/questions/48377799/show-json-result-with-vue-js
https://howtocreateapps.com/vue-tutorial-json/

# add router to the Vue
https://vueschool.io/articles/vuejs-tutorials/how-to-use-vue-router-a-complete-tutorial/
https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch


# return response from flask
https://stackoverflow.com/questions/13081532/how-to-return-a-dict-as-a-json-response-from-a-flask-view
@app.route("/summary")
def summary():
    d = make_summary()
    return d


# how to display data in vue, how to catch response in json
https://jasonwatmore.com/post/2020/04/30/vue-fetch-http-post-request-examples
https://www.bezkoder.com/vue-fetch-example/

https://stackoverflow.com/questions/68486253/vue-js-how-to-fill-a-form-prepopulated-with-data-from-a-get-request

this.$axios({
  method: 'get',
  url: 'http://127.0.0.1:8000/api/get_user_information',
}).then(response => {
  this.userInformation = response.data;
  this.name = this.userInformation.Name;
});

https://www.youtube.com/watch?v=Kbm9HsF_7-4

# VUE fill form field with data 
https://stackoverflow.com/questions/51752881/how-to-get-pre-filled-data-in-input-type-in-vue-js

# CSS
https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1

# two divs inline
https://dev.to/dawnind/3-ways-to-display-two-divs-side-by-side-3d8b#:~:text=The%20most%20common%20way%20to,using%20inline%2Dblock%20css%20property.&text=The%20inline%2Dblock%20property%20on,like%20an%20inline%20element%20does.

https://coder-coder.com/display-divs-side-by-side/


# vue swap between two components - prepinanie medzi raw a formated vystupom
https://stackoverflow.com/questions/39391218/vuejs-swap-component-on-click
https://jsbin.com/miwuduliyu/edit?html,js,console,output
https://www.digitalocean.com/community/tutorials/vuejs-dynamic-components

- check project toggle-app 

# send data from one component to another
https://tutorialslink.com/Articles/How-To-Pass-Data-Between-Components-In-Vuejs/1774

eventbus
https://www.geeksforgeeks.org/pass-data-between-components-using-vue-js-event-bus/
https://paragchirde.medium.com/vuejs-eventbus-easy-way-to-pass-data-between-components-2d2a663a3e83

!!!
https://softauthor.com/vuejs-eventbus-send-data-between-components/


-> eventbus project
https://www.youtube.com/watch?v=jzh4zQcfB0o

# eventbus je potrebne riesit cez kniznicu mitt 
https://medium.com/@certosinolab/using-event-bus-in-vue-js-3-425aae8c21a6

- check project event-bus2 where is working event bus in vue3

npm install --save mitt


# display unstructured received fields 
https://vuejs.org/guide/essentials/list.html#v-for
https://012.vuejs.org/guide/list.html

chcem do komponentu 2 nacitat z response pole unstructured_received_fields a zobrazit ho v componente2


- i have problem with catch emitted events in TwoComponent

Elements in iteration expect to have 'v-bind:key' directives  vue/require-v-for-key
https://stackoverflow.com/questions/47608379/vue-language-server-elements-in-iteration-expect-to-have-v-bindkey-directiv


# I have to change behavior of sending data between components, because TwoComponent doesnt exist when 

= send data after POST to parent and from parent send it to the TwoComponent
https://tutorialslink.com/Articles/How-To-Pass-Data-Between-Components-In-Vuejs/1774
https://blog.logrocket.com/how-to-use-props-to-pass-data-to-child-components/#:~:text=The%20way%20it%20works%20is,property%20in%20the%20child%20component.&text=You%20can%20use%20the%20root%20component%20(App.

1, Using props share data from parent to child.
2, Using Event  Emitting custom events to share data from child to parent.
3, Using EventBus to communicate between any components

- sample project vue-props

https://reactgo.com/vuejs-props-tutorial/


# how to disable
error  Component name "Greet" should always be multi-word  vue/multi-word-component-names
https://stackoverflow.com/questions/71205264/component-name-temp-should-always-be-multi-word-vue-multi-word-component-names
https://eslint.vuejs.org/user-guide/#installation

- vytvoris subor .eslintrc.js v root folder

module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      'plugin:vue/vue3-recommended',
      // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
      'vue/multi-word-component-names': 'off',
    }
  }



  # how to send data after assync post to the parent

  https://stackoverflow.com/questions/66757403/send-data-variable-from-child-to-parent-using-vuejs

after submit -> emit event data-loaded
.then(() => (this.$emit('dataLoaded', this.data)))


# pass data to dynamic component
https://stackoverflow.com/questions/41097909/dynamic-component-click-event-in-vue
https://jwkicklighter.com/posts/pass-props-to-dynamic-vue-components/
https://thewebdev.info/2022/03/10/how-to-pass-props-dynamically-to-dynamic-component-in-vue-js/

# krajsie zobranie tabulky
https://jasonwatmore.com/post/2020/09/11/vuejs-display-a-list-of-items-with-v-for