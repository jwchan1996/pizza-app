<template>
  <div class="register-box">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">账号</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail3" placeholder="">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" placeholder="">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-4 control-label">确认密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" placeholder="">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">注册</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .register-box{
        width: 400px;
        margin-top: 40px;
    }
</style>