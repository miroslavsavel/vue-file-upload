<template>
    <div>
        <div class="card m-3" style="width: 75rem;">
            <div class="card-body">
                <h2 style="color: black;">RAW Header</h2>
                <!-- <p class="card-text">I'm number one!</p> -->
            </div>
            <div class="flex-child magenta">
                {{ raw_header }}
                <!-- print array -->
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                <div v-for="(item, index) in unstructured_received_fields" :key="item.id">
                    <tr>
                        <td>{{index}}. {{item}}</td>
                    </tr>
                </div>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                raw_header: "",
                unstructured_received_fields: []
            };
        },
        // here we subscribe event emitter on the SimpleUploadComponent
        created (){
            this.emitter.on('my-event', (evt) => 
            {
                //console.log('event raw header catched component 1');
                this.raw_header = evt.eventContent;      
            })
            this.emitter.on('my-event-array', (eventik) => 
            {
                console.log("my-event-array component 1")
                console.log(eventik.eventContent);
                //console.log(JSON.parse(JSON.stringify(eventik.eventContent)));
                this.unstructured_received_fields = JSON.parse(JSON.stringify(eventik.eventContent))
                console.log(this.unstructured_received_fields);    
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