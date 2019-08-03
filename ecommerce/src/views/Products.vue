<template>
  <div class="products">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>This is products section</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit ipsa, ratione numquam similique recusandae exercitationem doloremque at non eligendi.
          </div>
          <div class="col-md-6">
            <img src="../assets/img/svg/products.svg" alt="products" class="img-fluid">
          </div>
        </div>
      </div>

      <hr>

      <h3>Basic CRUD (create/read/update/delete) in Firebase and Vue</h3>

      <div class="pruduct-test">
        <div class="form-group">
          <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
        </div>
        <div class="form-group">
          <input type="text" placeholder="Price" v-model="product.price" class="form-control">
        </div>
        <div class="form-group">
          <button @click="saveProduct" class="btn btn-primary">Save Data</button>
        </div>
        <div class="form-group">
          <button @click="loadProduct" class="btn btn-primary">Load Data</button>
        </div>
        <hr>

        <h3>Products List</h3>

        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Modify</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="product in products">
                <td>{{product.data().name}}</td>
                <td>{{product.data().price}}</td>
                <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
                <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
            </div>
            <div class="form-group">
              <input type="text" placeholder="Price" v-model="product.price" class="form-control">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="updateProduct()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '@/firebase'
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
export default {
  name: "products",
  props: {
    msg: String
  },
  data(){
    return {
      products:[],
      product:{
        name:null,
        price:null
      },
      activeItem: null
    }
  },
  methods:{

    watcher(){
      db.collection("products").onSnapshot((querySnapshot)=> {
        this.products = [];
        querySnapshot.forEach((doc)=> {
            this.products.push(doc);
        });
      });
    },

    updateProduct(){
      db.collection("products").doc(this.activeItem).update(this.product)
      .then(() =>{
          this.watcher();
          $('#editmodal').modal('hide');
          console.log("Document successfully updated!");
      })
      .catch((error)=> {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
    },

    editProduct(product){
      $('#editModal').modal('show');
      this.product = product.data();
      this.activeItem = product.id;
    },

    deleteProduct(doc){
      if(confirm("Are you sure?")) {
        db.collection("products").doc(doc).delete().then(()=> {
            alert("Document successfully deleted!");
            this.watcher()
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      }
    },

    saveProduct(){
      db.collection("products").add(this.product)
      .then((docRef) => {
        alert("Document written with ID: ", docRef.id)
        this.watcher()
      })
      .catch((error) => {
        console.error("Error adding document: ", error)
      })
    },

    loadProduct(){
      db.collection("products").get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              // console.log(doc.id, " => ", doc.data())
              this.products.push(doc)
          })
      })
      
    },

    reset(){

    },

    created(){
      this.loadProduct();
      console.log('hai');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
