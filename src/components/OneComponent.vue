<template>
    <div>
        <div class="card m-3" style="width: 75rem;">
            <div class="card-body">
                <h2 style="color: black;">RAW Header</h2>
                <p class="card-text">I'm number one!</p>
            </div>
            <div class="flex-child magenta">
                {{ raw_header }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                raw_header: ""
            };
        },
        // here we subscribe event emitter on the SimpleUploadComponent
        created (){
            this.emitter.on('my-event', (evt) => {
            this.raw_header = evt.eventContent;
    })
        }
    }
</script>

<style scoped>
    div.card {
        color: #000000;
        /* border: 4px solid #ffeeba; */
    }
</style> 