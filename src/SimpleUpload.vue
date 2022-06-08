<template>
    <form enctype="multipart/form-data">
        <!-- Our form will have just one input field -->
        <div class="field">
            <label for="file" class="label">Upload File</label>
            <input  
                type="file"
                ref="reference_to_file" 
                @change="selectFile"
            />
        </div>
    </form>
</template>

<script>
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
        }
    }
}
</script>

<style>

</style>>