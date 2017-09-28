export var isNativeType = (type) => {
    return (type + "").indexOf('[native code]') != -1;
}

export var getNavtiveTypeName = (type) => {
    return (isNativeType(type) && type.name) || "";
}

export var canbeProps = (obj) => {
    var t = typeof obj;
    return obj !== null && (t === 'object' || t === 'function');
}

export var hasPrototype = (obj) => {
    return canbeProps(obj) && obj.__proto__;
}