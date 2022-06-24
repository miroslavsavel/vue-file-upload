<template>
    <div>
        <div class="card m-3" style="width: 75rem;">
            <div class="card-body">
                <!-- <h2 style="color: black;">Raw received fields</h2> -->
                <!-- nice table, but only raw received fields -->
                <!-- <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Poradie</th>
                            <th>Received field</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in unstructured_received_fields" :key="item.id">
                            <td>{{index}}</td>
                            <td>{{item}}</td>
                        </tr>
                    </tbody>
                </table> -->
                <!--  -->
                <!-- parsed fields in right order -->
                <h2 style="color: red;">Structured Received field</h2>
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Poradie</th>
                            <th>Received field</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in structured_parsed_fields_Received" :key="item.id">
                            <td>{{index}}</td>
                            <td>{{item}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
                'unstructured_received_fields', 
                'structured_parsed_fields_Received',
                'heroName'
        ],
        data(){
            return{
                raw_header: ""
            };
        },
        // here we subscribe event emitter on the SimpleUploadComponent
        // created (){
        //     console.log('component 2 created');
        //     console.log(this.emitter);
        //     this.emitter.on('my-event-array', (evt) => 
        //     {
        //         console.log('my-event-array catched at component 2');
        //         this.unstructured_received_fields = evt.unstructured_received_fields; 
        //         console.log(evt)
        //     })

        // }
    }
</script>

<style scoped>
    div.card {
        color: #004085;
        border: 4px solid #b8daff;
    }
</style>