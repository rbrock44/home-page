export class Link {
  name: string;
  shortenedName: string;
  url: string;

  public constructor(name: string, short: string, url: string) {
    this.name = name;
    this.shortenedName = short;
    this.url = url;
  }
}
