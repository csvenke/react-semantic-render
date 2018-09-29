const isFunction = (input: any): input is () => any => typeof input === 'function';

export default isFunction;
