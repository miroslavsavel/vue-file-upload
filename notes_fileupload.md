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