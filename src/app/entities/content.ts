export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  constructor(content: string) {
    const isContentLenghtValid = this.validateContentLength(content);
    if (!isContentLenghtValid) {
      throw new Error('Content length error.');
    }
    this.content = content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
