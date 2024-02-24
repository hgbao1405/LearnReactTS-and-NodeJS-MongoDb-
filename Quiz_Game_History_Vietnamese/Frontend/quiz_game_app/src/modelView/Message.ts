// APIResponse model
export class Message {
  id: string | null;
  title: string;
  error: boolean;
  object: any;

  constructor(id: string | null, title: string, error: boolean, object: any) {
    this.id = id;
    this.title = title;
    this.error = error;
    this.object = object;
  }
}
