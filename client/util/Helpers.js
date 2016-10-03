class Helpers {
  static getDocumentSize() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const body = document.body;
      const html = document.documentElement;
      const width = Math.max(body.scrollWidth, body.offsetWidth,
        html.clientWidth, html.scrollWidth, html.offsetWidth);
      const height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

      return {
        width,
        height,
      };
    }

    return {
      width: null,
      height: null,
    };
  }
}

export default Helpers;
