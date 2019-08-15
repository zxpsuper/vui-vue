<template>
    <div>
        <RadioGroup v-model="phone" size="large">
            <Radio label="apple">
                <span>Apple</span>
            </Radio>
            <Radio label="android" type="normal">
                <span>Android</span>
            </Radio>
            <Radio label="windows" type="tick">
                <span>Windows</span>
            </Radio>
        </RadioGroup>
        <RadioGroup v-model="phone" vertical>
            <Radio label="apple">
                <span>Apple</span>
            </Radio>
            <Radio label="android" type="normal">
                <span>Android</span>
            </Radio>
            <Radio label="windows" type="tick">
                <span>Windows</span>
            </Radio>
        </RadioGroup>
    </div>
</template>
