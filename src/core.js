import * as util from './util.js';

var toString = Object.prototype.toString;

var checkNativeType = (nativeType, target) => {
    return toString.call(new nativeType()) === toString.call(target);
}

export var checkType = (type, target) => {
    if (target instanceof type) {
        return true;
    }
    if (util.isNativeType(type)) {
        return checkNativeType(type, target);
    }
    if (util.canbeProps(type) && typeof type.is === 'function') {
        return type.is(target);
    }
    return false;
}