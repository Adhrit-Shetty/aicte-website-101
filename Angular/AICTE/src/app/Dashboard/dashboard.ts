export class institute {
  name: string;
  insttype: string;
  minority: boolean;
  women: boolean;
  ApprovalStatus: string;
}

export class year {
  y : number;
}
export class dashboard {
  institute: institute;
  year: year;
}
