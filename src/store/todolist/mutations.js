import * as func from './function';
const mutations = {
    ADDEVENT(states,obj) {
        states.count++;
        obj.items.id = states.count;
        states.event.unshift(obj.items);
        func.local.set(states);
    }

}
export default mutations