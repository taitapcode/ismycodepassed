const setWindowTitle = (title?: string) => {
  document.title = 'IsMyCodePassed';
  if (title) document.title += ' - ' + title;
};

export default setWindowTitle;
