<template >
    <div>
        <!-- end Navbar -->
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-10">
                    <router-link to="/Create">
                    <button type="button" class="btn btn-primary mb-3">Add</button>
                    </router-link>
                    <div class="card rounded shadow">
                        <div class="card-header">
                            Transaction List
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Amount</th>
                                        <th>Type</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(transaction, index) in transactions.data" :key="index">
                                        <td>{{transaction.title}}</td>
                                        <td>{{transaction.amount}}</td>
                                        <td>{{transaction.type}}</td>
                                        <td>
                                            <div class="btn-group">
                                                <router-link :to="{name:'edit', params:{id:transaction.id}}" class="btn btn-sm btn-outline-info">Edit</router-link>
                                                <button class="btn btn-sm btn-outline-danger" @click.prevent="destory(transaction.id, index)">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {onMounted,ref } from 'vue'

export default {
    
    setup(){
        let transactions = ref([]);

        onMounted(()=>{
            axios.get('http://127.0.0.1:8000/api/transaction')
            .then((result)=>{
                transactions.value = result.data
            }).catch((err)=>{
                console.log(err.response)
            })
        });

        function destory(id, index){
          axios.delete(
           `http://127.0.0.1:8000/api/transaction/${id}`
         
          ).then(()=>{
            transactions.value.data.splice(index, 1)
          }).catch((err)=>{
              console.log(err.response.data)
          });
          }

        return {
            transactions,
            destory
        }
    },

    name: "Index",
    data(){

    },
    methods:{
        
    }
}
</script>
<style >
    
</style>