<template>
  <div>
    <van-button type="primary" @click="go('/Blog/Test')">Test</van-button>
    <van-button type="primary" @click="goMicro('jczlt')">微应用</van-button>
  </div>
</template>

<script lang="ts" setup>
import { go, goMicro } from '@/utils';

</script>