import ToastComponent from './toast';

const Toast = {};

Toast.install = function(Vue){
    const ToastConstructor = Vue.extend(ToastComponent);
    const instance = new ToastConstructor();
    var timer = null;
    Vue.prototype.toast = function(msg,duration){
        instance.$mount(document.createElement('div'));
        document.body.appendChild(instance.$el);

        duration = duration ? duration : 3000;
        instance.msg = msg;
        instance.show = true;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            instance.show = false;
            instance.msg = '';
            clearTimeout(timer);
        },duration);
    }

}

export default Toast;
