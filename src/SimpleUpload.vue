<template>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
        <div>
            <h1 style="color: black;">Analyzátor emailových hlavičiek</h1>
        </div>
        <!-- Our form will have just one input field -->
        <div class="field">
            <label for="file" class="label">Upload File</label>
            <input  
                type="file"
                ref="reference_to_file" 
                @change="selectFile"
            />
        </div>
        <div class="field">
            <button class="button is-info">Send</button>
        </div>

        <!-- <div class="flex-container">
            <div class="flex-child magenta">
                <h2 style="color: black;">Raw Header</h2>
                {{ raw_header }}
            </div>
            <div class="flex-child green">
                <h2 style="color: red;">Processed Header</h2>
                {{ raw_header }}
                <p>Hello</p>
            </div>
        </div> -->
    </form>
</template>

<script>
import axios from 'axios';


export default {
    name: "SimpleUpload",

    data() {
        return {
            file: "",
            raw_header: ""
        }
    },

    methods: {
        // this method will be fired when user change the input field
        selectFile(){
            // this reference store collection on all the selected files and we select the first one
            this.file = this.$refs.reference_to_file.files[0];
        },

        async sendFile(){
            // becuse multipart enctype for post
            // we have to create form Data object
            const formData = new FormData(); // javascript formdata object
            // axios.post('/api', {file: this.file})   //this naive approach will not work
            formData.append('file', this.file);
            try {
                await axios.post('http://127.0.0.1:5000/upload_message', formData).then((resp)=>{
                    console.warn(resp.data)
                    //here we assign data from response to the component variable
                    this.raw_header = resp.data.raw_header

                    //Send the event on a channel - emit event on the emitter
                    this.emitter.emit('my-event', {'eventContent': this.raw_header})
                });
            }catch(err){
                console.log(err);
            }
            

        }
    }
}
</script>

<style>
h2{
  text-align:center;
}

h1 { 
	font-size: 50px;
   }

/* upload file div */
/* .field {
  margin: auto;
  width: 50%;
    display: flex;
  border: 3px solid green;
  padding: 10px; 
} */

/* two div for headers */
/* .flex-container {
    display: flex;
}

.flex-child {
    flex: 1;
    border: 2px solid black;
}  

.flex-child:first-child {
    margin-right: 20px;
}  */

</style>>