<template>
	<WujieVue
		width="100vw"
		height="100vh"
    :alive="true"
		:name="routerStore.MircroMap().get('jczlt').name"
		:url="routerStore.MircroMap().get('jczlt').entry"
		:beforeLoad="beforeLoad"
		:beforeMount="beforeMount"
		:afterMount="afterMount"
		:beforeUnmount="beforeUnmount"
		:afterUnmount="afterUnmount"
    :activated="activated"
		:deactivated="deactivated"
		:loadError="loadError"
		@routerChange="routerChange"
	></WujieVue>
</template>
<script lang="ts" setup>
import router from '@/router'
import useRouterStore from '@/store/modules/router'
import { onMounted, ref } from 'vue'
import WujieVue from "wujie-vue3";
const { bus, setupApp, preloadApp, destroyApp } = WujieVue;

const routerStore = useRouterStore()

function beforeLoad() {
	console.log('beforeLoad')
}
function beforeMount() {
	console.log('beforeMount')
}
function afterMount() {
	console.log('afterMount')
}
function beforeUnmount() {
	console.log('beforeUnmount')
}
function afterUnmount() {
	console.log('afterUnmount')
}
function activated() {
  bus.$emit('activated')
	console.log('activated')
}
function deactivated() {
  bus.$emit('deactivated')
	console.log('deactivated')
}
function loadError(e: Error) {
	console.log(e)
}

function routerChange(value: { path: string; query: any }) {
	console.log('routerChange: ')
	console.log(value)
}
</script>
<style lang="scss" scoped></style>
