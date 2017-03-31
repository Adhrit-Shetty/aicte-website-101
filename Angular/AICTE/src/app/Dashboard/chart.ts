export class Dataset {
  data:number[];
  label:string;
  constructor(data:number[],type:string){
    this.data = data;
    this.label = type;
  }
}

export class College {
  name: string;
  labels: string[];
  data: Dataset[];
  constructor(name:string, data: Dataset[], labels:string[]){
    this.name = name;
    this.data = data;
    this.labels = labels;
  }
}
