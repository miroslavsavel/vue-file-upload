<template>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
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
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: "SimpleUpload",

    data() {
        return {
            file: ""
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
                });
            }catch(err){
                console.log(err);
            }
            

        }
    }
}
</script>

<style>

</style>>