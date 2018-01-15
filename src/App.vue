<template>
    <div class="wrap">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
* {
    margin: 0px;
    padding: 0px;
    text-decoration: none;
    box-sizing: border-box;
    font-size: .14rem; }
  
  ul, li {
    list-style: none; }
  
  html {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;}
  
  img, div, body, html, ul, li, a {
    -webkit-touch-callout: none; 
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #999; }}
  
  
  input {
    outline: 0; }

    html,body,.wrap,.big{
    width:100%;
    height: 100%;
    background:#eee;
}
.wrap,.big{
    display: flex;
    flex-direction: column;
}
.section{
    width:100%;
    height: 100%;
    flex:1;
    flex-direction: column;
}
</style>
