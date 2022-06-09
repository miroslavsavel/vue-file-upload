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

        <div class="flex-container">

            <div class="flex-child magenta">
                <h2 style="color: black;">Raw Header</h2>
                {{ body_html }}
            </div>
            
            <div class="flex-child green">
                <h2 style="color: red;">Processed Header</h2>
                {{ body_html }}
                <p>Hello</p>
            </div>
        
        </div>


        <!-- <div class="element">
            <h2 style="color: black;">Raw Header</h2>
                {{ body_html }}
        </div>
        <div class="element">
            <h2 style="color: red;">Processed Header</h2>
                {{ body_html }}
        </div> -->


        <!-- <div class="flex-parent-element">
            <div class="flex-child-element magenta">
                <h2>Raw Header</h2>
                {{ body_html }}

            </div>
            <div class="flex-child-element green">
                <h2>Processed Header</h2>
                {{ body_html }}
            </div>
        </div> -->

        <!-- <div class='parent'>
            <div class='child'>
                <h2>Raw Header</h2>
                {{ body_html }}
            </div>
            <div class='child'> 
                <h2>Processed Header</h2>
                {{ body_html }}
            </div>
        </div> -->

        <!-- <div class="form-group">
            <textarea
                class="form-control"
                name="name"
                v-model="body_html">
            </textarea>           
        </div>
        <div v-html="body_html"></div> -->
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: "SimpleUpload",

    data() {
        return {
            file: "",
            body_html: ""
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
                    console.warn(resp.data.body_html)
                    //here we assign data from response to the component variable
                    this.body_html = resp.data.body_html
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

.flex-container {
    display: flex;
}

.flex-child {
    flex: 1;
    border: 2px solid black;
}  

.flex-child:first-child {
    margin-right: 20px;
} 



/* .element {
  display: inline-block;
  width: 500px;
  height: 500px;
  background: #FFFFFF;
  border: 1px solid black;
  margin: 1rem;
  padding: 2rem 2rem;
  color: black;
  
} */

/* .parent {
  border: 1px solid black;
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;
}
.child {
  display: inline-block;
  border: 1px solid red;
  padding: 1rem 1rem;
  vertical-align: middle;
} */

/* .flex-parent-element {
  display: flex;
  width: 50%;
}

.flex-child-element {
  flex: 1;
  border: 2px solid blueviolet;
  margin: 10px;
}

.flex-child-element:first-child {
  margin-right: 20px;
} */
</style>>