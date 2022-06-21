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
        <div class="d-flex justify-content-center">
            <div @click="selectedComponent = 'One'">RAW HEADER</div>
            <div @click="selectedComponent = 'Two'" style="color: red;">Processed Header</div>
            <div @click="selectedComponent = 'Three'">Three</div>
        </div>
        <div class="d-flex justify-content-center">
            <keep-alive>
                <component :is="selectedComponent" :name="name" :heroName="channel" :unstructured_received_fields="unstructured_received_fields"></component>
            </keep-alive>
        </div>
    </form>
</template>

<script>
import One from './components/OneComponent.vue';
import Two from './components/TwoComponent.vue';
import Three from './components/ThreeComponent.vue';
import axios from 'axios';


export default {
    name: "SimpleUpload",
    components: {One, Two, Three},
    data() {
        return {
            file: "",
            raw_header: "",
            unstructured_received_fields: [],
            selectedComponent: 'One',
            name: 'Vishwas',
            channel: 'Codevolution'
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
                    //save returned array
                    this.unstructured_received_fields = resp.data.unstructured_received_fields
                    //Send the event on a channel - emit event on the emitter
                    //console.log(this.unstructured_received_fields)        //<target>: Array(5) 
                    this.emitter.emit('my-event-array', {'eventContent': this.unstructured_received_fields})
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