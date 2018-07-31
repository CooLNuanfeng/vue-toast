<template>
    <transition name="toast-bounce">
        <div class="toast" v-if="show">
            <p class="toast-msg">{{ msg }}</p>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Toast',
    props: {
        msg: {
            type: String,
            required: true
        },
        time: {
            type: Number,
            required: false,
            default: 3000
        }
    },
    data(){
        return {
            show : false
        }
    },
    watch : {
        msg(newVal){
            this.show = newVal ? true : false;
            this.hide();
        }
    },
    methods : {
        hide(){
            clearTimeout(timer);
            var timer = setTimeout(()=>{
                this.show = false;
                clearTimeout(timer);
            },this.time);
        }
    }
}
</script>

<style lang="scss" scoped>
.toast-bounce-enter-active{
    animation: bounce-in .3s;
}
.toast-bounce-leave-active {
    animation: bounce-in .3s reverse;
}
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: .1rem .3rem;
    background: rgba(0,0,0,.8);
    border-radius: 4px;
    color: #fff;
    z-index: 999;
    .toast-msg{
        text-align: center;
    }
}
@keyframes bounce-in {
    0%{
        transform: translateX(-50%) translateY(-20%);
    }
    100%{
        transform: translateX(-50%) translateY(-50%);
    }
}
</style>
