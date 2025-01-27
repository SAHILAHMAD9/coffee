class Storage {
    static instance;
    cache = {};
  
    static getInstance() {
      if (!this.instance) {
        this.instance = new Storage();
      }
      return this.instance;
    }
  
    get(key) {
      if (this.cache[key]) return this.cache[key];
      if (typeof window === 'undefined') return null;
      
      const value = localStorage.getItem(key);
      if (value) this.cache[key] = value;
      return value;
    }
  
    set(key, value) {
      this.cache[key] = value;
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
      }
    }
    clear() {
      if (typeof window !== 'undefined') {
        localStorage.clear();
      }
    }
  }
  
  export const storage = Storage.getInstance();