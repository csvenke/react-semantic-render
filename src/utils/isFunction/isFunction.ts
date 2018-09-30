const isFunction = <T>(input: any): input is T => typeof input === 'function';

export default isFunction;
