<template>
    <div>
        <div class="card m-3" style="width: 75rem;">
            <div class="card-body">
                <h2 style="color: red;">Processed Header</h2>
                <p class="card-text">I'm number two!</p>
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
            <!-- <ul id="demo">
                <li v-repeat="unstructured_received_fields" class="item-{{$index}}">
                    {{$index}} - {{parentMsg}} {{childMsg}}
                </li>
            </ul> -->
            <!-- <ul id="tags">
                <li v-repeat="unstructured_received_fields">
                    {{$value}}
                </li>
            </ul> -->
        </div>
    </div>
</template>

<script>
    export default {
        props: ['unstructured_received_fields', 'heroName'],
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