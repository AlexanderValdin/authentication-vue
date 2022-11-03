<template>
    <form class="container">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    placeholder="Ingrese el email" v-model="email">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"
    placeholder="Ingrese el password" v-model="password">
  </div>
  
  <button type="submit" class="btn btn-primary" @click.prevent="authUser">Submit</button>
</form>
</template>

<script lang="ts" setup>
import {ref, Ref} from 'vue';
import AuthService from '../services/AuthService';

let email:Ref<string> = ref('');
let password:Ref<string> = ref('');

const authUser = async () => {
  const auth = new AuthService();
  const success = await auth.login(email.value, password.value);
  success? alert('Éxito'): alert('Login Incorrecto');
}

</script>