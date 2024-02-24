class Jmessage {
  constructor(id, title, error, data) {
    this.id = id || null;
    this.title = title || "";
    this.error = error || false;
    this.object = data || null;
  }

  static success(data, id, title) {
    return new Jmessage(id, title, false, data);
  }

  static fail(id, title) {
    return new Jmessage(id, title, true, null);
  }
}

export default Jmessage;
