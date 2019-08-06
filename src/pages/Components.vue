<template>
  <div>
    <Icon type="ios-add-circle" />
    <div style="width: 600px;margin: 0 auto">

    <Alert type="success" closable banner showIcon>A success prompt
      <div slot="desc">我爱你啊</div>
    </Alert>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    setInterval(() => {
      this.$Message.info('This is a info tip');
    }, 2000);
  }
}
</script>
