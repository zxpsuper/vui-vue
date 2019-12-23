<template>
    <span @click="triggle" id="vui_upload_area">
        <slot>
            <Button type="primary">上传文件</Button>
        </slot>
        <input
            type="file"
            ref="file"
            @click.stop
            @change="uploadFile"
            :multiple="multiple ? 'multiple' : ''"
            style="display: none"
        />
    </span>
</template>

<script>
import Button from '../button';
import axios from 'axios';
import { on, off } from '../../utils/dom';

export default {
    name: 'Upload',
    components: { Button },
    props: {
        multiple: {
            type: Boolean,
            default: false,
        },
        beforeUpload: {
            type: Function,
            default: () => true,
        },
        action: {
            type: String,
            default: 'https://imgkr.com/api/files/upload',
        },
        withCredentials: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            default: 'file',
        },
    },
    mounted() {
        let that = this;
        let dropArea = document.getElementById('vui_upload_area');
        on(window, 'dragover', this.handleDragover);
        on(window, 'drop', this.handleDrop);
    },
    beforeDestroy() {
        let dropArea = document.getElementById('vui_upload_area');
        off(dropArea, 'dragover', this.handleDragover);
        off(dropArea, 'drop', this.handleDrop);
    },
    methods: {
        handleDragover(e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        },
        handleDrop(e) {
            e.stopPropagation();
            e.preventDefault();
            this.uploadFile(e);
        },
        triggle() {
            this.$refs.file.click();
        },
        uploadFile(e) {
            // e.target.files
            let formData = new FormData();
            let files = e.target.files || e.dataTransfer.files;
            for (let i = 0; i < files.length; i++) {
                formData.append(this.name, files[i]);
            }
            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            if (this.withCredentials) config.withCredentials = true;

            if (this.beforeUpload(files) !== false) {
                axios
                    .post(this.action, formData, config)
                    .then(res => {
                        this.$emit('upload-success', res.data);
                    })
                    .catch(err => {
                        this.$emit('upload-error', err);
                    });
            }
        },
    },
};
</script>
