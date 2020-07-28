const localEvent = function(item) {
    this.get = function() {
        return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)):''
    }
    this.set = function(obj) {
        localStorage.setItem(item, JSON.stringify(obj));
    }
    this.clear = function() {
        localStorage.removeItem(item);
    }
}
export const getDate = () => { //获取当天日期
    const date = new Date(),
        mouth = parseInt(date.getMonth()) + 1;
    return date.getFullYear() + '-' + mouth + '-' + date.getDate();
}
export const local = new localEvent('todolist');
