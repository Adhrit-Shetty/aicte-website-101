import {Box} from "../box";


export class GenerateBoxService {
  private data: Box[];

  load(data: Box[]) {
    this.data = data;
  }

  get() {
    return this.data;
  }

}
