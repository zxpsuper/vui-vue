<template>
    <div slot="comp">
        <Alert type="info" show-icon>A info alert</Alert>
        <Alert type="success" show-icon>
            A info alert, customize icon of alert
            <Icon type="md-folder" slot="icon" />
        </Alert>
        <Alert show-icon type="warning">
            An info alert
            <template slot="desc">This is the description of alert</template>
        </Alert>
        <Alert show-icon closable type="error">
            An info alert
            <template slot="desc">This is the description of alert</template>
        </Alert>
        <Alert show-icon closable type="info">
            An info alert
            <template slot="desc">
                This is the description of alert,
                customize icon of alert
            </template>
            <Icon type="md-folder" slot="close" />
        </Alert>
    </div>
</template>