<template>
    <div>
        <div>
            <Radio v-model="single1">小皮咖</Radio>
            <Radio v-model="single2" type="normal">中皮咖</Radio>
            <Radio v-model="single3" type="tick">大皮咖</Radio>
        </div>

        <div>
            <Radio v-model="single1" disabled>小皮咖</Radio>
            <Radio v-model="single2" type="normal" disabled>中皮咖</Radio>
            <Radio v-model="single3" type="tick" disabled>大皮咖</Radio>
        </div>
    </div>
</template>
