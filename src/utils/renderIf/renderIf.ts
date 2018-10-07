const renderIf = (condition: boolean) => (content: any) => {
  const result = condition && content;
  return result || null;
};

export default renderIf;
