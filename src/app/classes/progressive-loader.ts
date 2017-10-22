export class ProgressiveLoader {
  loaderId: string;

  randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
  }

  getRandomString() {
    return 'abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').sort(this.randomsort).join('');
  }

  placeLoader(origin) {
    this.loaderId = ['ldr_', this.getRandomString(), origin].join('');
    var loader_wrapper = document.createElement('div'),
    loader = document.createElement('div');
    loader_wrapper.setAttribute('class', 'progressive-loader-wrapper');
    loader_wrapper.setAttribute('id', this.loaderId);
    loader_wrapper.appendChild(loader);
    loader.setAttribute('class', 'progressive-loader');
    document.body.appendChild(loader_wrapper);
  }

  clearAllLoaders() {
    var a = document.querySelectorAll("div[id^='ldr_']");
    if (a) {
      for (var i = 0, l=a.length; i<l; i++) {
        document.body.removeChild(document.getElementById(a[i].getAttribute('id')));
      }
    }
  }

  removeLoader() {
    var x = document.getElementById(this.loaderId);
    if (x) document.body.removeChild(x);
  }
}
