export class Box {
  state: number;
  href: string;
  text: text[];
  link: link[];
  pdf: pdf[];
}

export class text {
  header: string;
  body: string;
}

export class link {
  name: string;
  href: string;
}

export class pdf {
  name: string;
  href: string;
}
