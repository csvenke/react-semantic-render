const renderIf = (condition: boolean) => (obj: any) => (condition ? obj : null);

export default renderIf;
